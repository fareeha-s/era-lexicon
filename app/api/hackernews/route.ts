import { NextRequest, NextResponse } from 'next/server'

// Cache for API responses (in-memory, will reset on server restart)
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const year = searchParams.get('year')
  const month = searchParams.get('month')

  if (!year || !month) {
    return NextResponse.json({ error: 'Year and month are required' }, { status: 400 })
  }

  const cacheKey = `${year}-${month}`

  // Check cache (commented out for now to force fresh data)
  // const cached = cache.get(cacheKey)
  // if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
  //   return NextResponse.json(cached.data)
  // }

  try {
    // Calculate Unix timestamps for the month
    const startDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    const endDate = new Date(parseInt(year), parseInt(month), 0, 23, 59, 59)
    const startTimestamp = Math.floor(startDate.getTime() / 1000)
    const endTimestamp = Math.floor(endDate.getTime() / 1000)

    // Fetch from Algolia HN API
    const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${startTimestamp},created_at_i<${endTimestamp}&hitsPerPage=1000`

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Eralexicon/1.0 (Educational Research Tool)',
      },
    })

    if (!response.ok) {
      throw new Error(`HN API error: ${response.status}`)
    }

    const data = await response.json()

    // Import stopwords filtering
    const { STOPWORDS, MIN_FREQUENCY, MIN_WORD_LENGTH } = await import('@/app/utils/stopwords')

    // Extract and process text from stories
    const words = data.hits
      .map((hit: any) => {
        const title = hit.title || ''
        const text = hit.story_text || ''
        return `${title} ${text}`
      })
      .join(' ')
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter((word: string) => {
        // Filter interesting words only
        const trimmedWord = word.trim()
        return (
          trimmedWord.length >= MIN_WORD_LENGTH &&
          !STOPWORDS.has(trimmedWord) &&
          !/^\d+$/.test(trimmedWord) &&
          !trimmedWord.includes('http') &&
          !trimmedWord.includes('www') &&
          !/^[a-z]{1,3}$/.test(trimmedWord) // remove very short words
        )
      })

    // Count word frequencies
    const wordCount: Record<string, number> = {}
    words.forEach((word: string) => {
      wordCount[word] = (wordCount[word] || 0) + 1
    })

    // Filter by minimum frequency to remove typos/rare words
    Object.keys(wordCount).forEach((word) => {
      if (wordCount[word] < MIN_FREQUENCY) {
        delete wordCount[word]
      }
    })

    const result = {
      year,
      month,
      totalStories: data.hits.length,
      words: Object.entries(wordCount)
        .map(([text, count]) => ({ text, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 100),
    }

    // Cache the result
    cache.set(cacheKey, { data: result, timestamp: Date.now() })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching HN data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data from Hacker News' },
      { status: 500 }
    )
  }
}

