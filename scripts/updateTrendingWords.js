import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Fetch trending words from Reddit (public API, no auth needed)
async function fetchTrendingWords() {
  try {
    // Get top posts from r/all from last month
    const response = await fetch('https://www.reddit.com/r/all/top.json?limit=100&t=month')
    const data = await response.json()
    
    if (!data.data || !data.data.children) {
      console.log('No data from Reddit')
      return []
    }

    // Extract words from titles
    const words = new Map()
    data.data.children.forEach(post => {
      const title = post.data.title.toLowerCase()
      // Simple word extraction (split by spaces, remove special chars)
      const titleWords = title
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(w => w.length > 3 && w.length < 20)
      
      titleWords.forEach(word => {
        words.set(word, (words.get(word) || 0) + 1)
      })
    })

    // Get top 20 words
    const topWords = Array.from(words.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([word, count]) => ({ text: word, count: Math.min(count * 10, 100) }))

    return topWords
  } catch (error) {
    console.error('Error fetching trending words:', error)
    return []
  }
}

// Update eraData.ts with new words
async function updateEraData() {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  
  // Only update if we're in 2025-2026 era
  if (currentYear < 2025) {
    console.log('Not in 2025-2026 era, skipping update')
    return
  }

  const trendingWords = await fetchTrendingWords()
  
  if (trendingWords.length === 0) {
    console.log('No trending words found, keeping existing data')
    return
  }

  const eraDataPath = path.join(__dirname, '../app/utils/eraData.ts')
  let eraDataContent = fs.readFileSync(eraDataPath, 'utf8')

  // Find the 2025-2026 section and merge new words
  const eraSection = "'2025-2026': ["
  const startIndex = eraDataContent.indexOf(eraSection)
  
  if (startIndex === -1) {
    console.log('Could not find 2025-2026 section')
    return
  }

  // Find the end of this section (next closing bracket with comma)
  let bracketCount = 0
  let sectionEnd = startIndex
  let foundStart = false
  
  for (let i = startIndex; i < eraDataContent.length; i++) {
    if (eraDataContent[i] === '[') {
      bracketCount++
      foundStart = true
    } else if (eraDataContent[i] === ']') {
      bracketCount--
      if (foundStart && bracketCount === 0) {
        sectionEnd = i + 1
        break
      }
    }
  }

  const existingSection = eraDataContent.substring(startIndex, sectionEnd + 1)
  
  // Parse existing words
  const existingWords = []
  const wordMatches = existingSection.matchAll(/\{\s*text:\s*['"]([^'"]+)['"],\s*count:\s*(\d+)\s*\}/g)
  for (const match of wordMatches) {
    existingWords.push({ text: match[1], count: parseInt(match[2]) })
  }

  // Merge: keep existing high-count words, add new trending ones
  const mergedWords = [...existingWords]
  trendingWords.forEach(newWord => {
    const existingIndex = mergedWords.findIndex(w => w.text.toLowerCase() === newWord.text.toLowerCase())
    if (existingIndex >= 0) {
      // Update count if new count is higher
      mergedWords[existingIndex].count = Math.max(mergedWords[existingIndex].count, newWord.count)
    } else {
      // Add new word
      mergedWords.push(newWord)
    }
  })

  // Sort by count and take top 15 (keep reasonable size)
  mergedWords.sort((a, b) => b.count - a.count)
  const topWords = mergedWords.slice(0, 15)

  // Rebuild the section with proper formatting
  const newSection = `'2025-2026': [\n${topWords.map(w => `    { text: '${w.text}', count: ${w.count} }`).join(',\n')}\n  ],`

  // Replace the section
  eraDataContent = eraDataContent.substring(0, startIndex) + 
                   newSection + 
                   eraDataContent.substring(sectionEnd + 1)

  fs.writeFileSync(eraDataPath, eraDataContent, 'utf8')
  console.log(`Updated 2025-2026 era with ${topWords.length} words`)
}

updateEraData()

