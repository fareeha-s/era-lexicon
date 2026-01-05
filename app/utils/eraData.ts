// Era-specific culturally relevant terms
const ERA_TERMS: Record<string, { text: string; count: number }[]> = {
  // 2007-2009: Early social media, recession
  '2007-2009': [
    { text: 'iphone', count: 95 },
    { text: 'facebook', count: 88 },
    { text: 'twitter', count: 82 },
    { text: 'obama', count: 78 },
    { text: 'recession', count: 71 },
    { text: 'fail', count: 65 },
    { text: 'epic', count: 59 },
    { text: 'pwned', count: 54 },
    { text: 'lolcats', count: 48 },
    { text: 'rickroll', count: 43 },
    { text: 'subprime', count: 38 },
    { text: 'bailout', count: 35 },
    { text: 'change', count: 32 },
    { text: 'viral', count: 29 },
    { text: 'youtube', count: 26 },
  ],
  
  // 2010-2012: Instagram, Arab Spring, memes mature
  '2010-2012': [
    { text: 'instagram', count: 92 },
    { text: 'hashtag', count: 87 },
    { text: 'occupy', count: 79 },
    { text: 'swag', count: 73 },
    { text: 'yolo', count: 68 },
    { text: 'selfie', count: 64 },
    { text: 'gangnam', count: 58 },
    { text: 'meme', count: 53 },
    { text: 'doge', count: 47 },
    { text: 'pinterest', count: 42 },
    { text: 'snapchat', count: 38 },
    { text: 'arab spring', count: 34 },
    { text: 'kony', count: 29 },
    { text: 'hipster', count: 25 },
    { text: 'troll', count: 22 },
  ],
  
  // 2013-2015: Vine, Gamergate, social justice online
  '2013-2015': [
    { text: 'vine', count: 89 },
    { text: 'binge', count: 84 },
    { text: 'netflix', count: 78 },
    { text: 'fleek', count: 72 },
    { text: 'fomo', count: 67 },
    { text: 'basic', count: 61 },
    { text: 'literally', count: 56 },
    { text: 'squad', count: 51 },
    { text: 'goals', count: 46 },
    { text: 'spotify', count: 41 },
    { text: 'uber', count: 37 },
    { text: 'airbnb', count: 33 },
    { text: 'gamergate', count: 28 },
    { text: 'woke', count: 24 },
    { text: 'cancel', count: 20 },
  ],
  
  // 2016-2018: Trump, Brexit, TikTok emerges
  '2016-2018': [
    { text: 'trump', count: 98 },
    { text: 'brexit', count: 91 },
    { text: 'fake news', count: 85 },
    { text: 'metoo', count: 79 },
    { text: 'bitcoin', count: 74 },
    { text: 'crypto', count: 68 },
    { text: 'fortnite', count: 63 },
    { text: 'tiktok', count: 57 },
    { text: 'influencer', count: 52 },
    { text: 'thanos', count: 47 },
    { text: 'salty', count: 42 },
    { text: 'shade', count: 37 },
    { text: 'receipts', count: 33 },
    { text: 'lowkey', count: 28 },
    { text: 'highkey', count: 24 },
  ],
  
  // 2019-2021: Pandemic, social uprising, meme economy
  '2019-2021': [
    { text: 'covid', count: 105 },
    { text: 'pandemic', count: 98 },
    { text: 'zoom', count: 92 },
    { text: 'quarantine', count: 87 },
    { text: 'karen', count: 81 },
    { text: 'simp', count: 76 },
    { text: 'amongus', count: 71 },
    { text: 'stonks', count: 66 },
    { text: 'wallstreetbets', count: 61 },
    { text: 'gamestop', count: 56 },
    { text: 'poggers', count: 51 },
    { text: 'based', count: 46 },
    { text: 'cringe', count: 42 },
    { text: 'copium', count: 37 },
    { text: 'ratio', count: 33 },
  ],
  
  // 2022-2024: AI boom, new platforms, post-pandemic
  '2022-2024': [
    { text: 'chatgpt', count: 102 },
    { text: 'midjourney', count: 95 },
    { text: 'bereal', count: 88 },
    { text: 'threads', count: 82 },
    { text: 'bluesky', count: 77 },
    { text: 'rizz', count: 71 },
    { text: 'demure', count: 66 },
    { text: 'bussin', count: 61 },
    { text: 'sheesh', count: 56 },
    { text: 'delulu', count: 51 },
    { text: 'slay', count: 46 },
    { text: 'unhinged', count: 41 },
    { text: 'gaslighting', count: 37 },
    { text: 'situationship', count: 32 },
    { text: 'beige flag', count: 28 },
  ],
  
  // 2025-2026: Current era
  '2025-2026': [
    { text: 'gemini', count: 98 },
    { text: 'sora', count: 92 },
    { text: 'agentic', count: 87 },
    { text: 'multimodal', count: 81 },
    { text: 'vibe shift', count: 76 },
    { text: 'brat summer', count: 71 },
    { text: 'sigma', count: 66 },
    { text: 'skibidi', count: 61 },
    { text: 'gyatt', count: 56 },
    { text: 'ohio', count: 51 },
    { text: 'mogging', count: 46 },
    { text: 'looksmaxxing', count: 41 },
    { text: 'mewing', count: 37 },
    { text: 'brain rot', count: 32 },
    { text: 'core aesthetic', count: 28 },
  ],
}

function getEraForDate(year: number, month: number): string {
  if (year >= 2025) return '2025-2026'
  if (year >= 2022) return '2022-2024'
  if (year >= 2019) return '2019-2021'
  if (year >= 2016) return '2016-2018'
  if (year >= 2013) return '2013-2015'
  if (year >= 2010) return '2010-2012'
  return '2007-2009'
}

// Generate unique seed based on year and month
function getMonthSeed(year: number, month: number): number {
  return year * 12 + month
}

// Seeded random function
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Shuffle array with seed
function shuffleWithSeed<T>(array: T[], seed: number): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function getDataForMonth(year: number, month: number) {
  const era = getEraForDate(year, month)
  const eraData = ERA_TERMS[era] || ERA_TERMS['2025-2026']

  // Create unique seed for this month
  const seed = getMonthSeed(year, month)
  
  // Shuffle words differently for each month
  const shuffledData = shuffleWithSeed(eraData, seed)
  
  // Take 12-18 words (varies by month)
  const wordCount = 12 + Math.floor(seededRandom(seed) * 7)
  const selectedWords = shuffledData.slice(0, wordCount)
  
  // Add month-specific randomization to counts
  const randomizedData = selectedWords.map((word, index) => ({
    text: word.text,
    count: Math.max(15, word.count + Math.floor(seededRandom(seed + index) * 30) - 15)
  }))

  return {
    year: year.toString(),
    month: month.toString(),
    source: 'era-curated',
    note: `Showing curated cultural terms from the ${era} era`,
    words: randomizedData,
  }
}

