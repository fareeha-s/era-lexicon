export interface SongItem {
  title: string
  artist: string
  spotifyId: string // Spotify track ID
  memeContext?: string
}

export const ERA_SONGS: Record<string, SongItem[]> = {
  '2007-2009': [
    {
      title: 'Never Gonna Give You Up',
      artist: 'Rick Astley',
      spotifyId: '4PTG3Z6ehGkBFwjybzWkR8',
      memeContext: 'Rickroll'
    },
    {
      title: 'Chocolate Rain',
      artist: 'Tay Zonday',
      spotifyId: '6m3kBaVlvRXiUrYLvJKjYL',
      memeContext: 'Viral video song'
    },
    {
      title: 'Dragostea Din Tei',
      artist: 'O-Zone',
      spotifyId: '4H7QKIftC7OlQyjHjKxqWi',
      memeContext: 'Numa Numa'
    },
    {
      title: 'Caramelldansen',
      artist: 'Caramell',
      spotifyId: '5DPRNoDfZKB3Vqg0bmRBPd',
      memeContext: 'Dance meme'
    },
  ],
  
  '2010-2012': [
    {
      title: 'Friday',
      artist: 'Rebecca Black',
      spotifyId: '4fK6E2UywZTJIa5kWnCD6x',
      memeContext: 'Viral cringe classic'
    },
    {
      title: 'Gangnam Style',
      artist: 'PSY',
      spotifyId: '0E8toFl5Hs24S1iYNz5kHq',
      memeContext: 'Horse dance'
    },
    {
      title: 'Harlem Shake',
      artist: 'Baauer',
      spotifyId: '6p7kVFnF1NOCi0pS4hiDfZ',
      memeContext: 'Harlem Shake videos'
    },
    {
      title: 'Call Me Maybe',
      artist: 'Carly Rae Jepsen',
      spotifyId: '20I6sIOMTCkB6w7ryavxtO',
      memeContext: 'Everywhere in 2012'
    },
  ],
  
  '2013-2015': [
    {
      title: 'The Fox (What Does the Fox Say?)',
      artist: 'Ylvis',
      spotifyId: '1WuRbEdV2YMw4qurBLummP',
      memeContext: 'What does the fox say'
    },
    {
      title: 'Turn Down for What',
      artist: 'DJ Snake, Lil Jon',
      spotifyId: '3EvgxJP4bWdJ6gCKZRhBvA',
      memeContext: 'Party anthem'
    },
    {
      title: 'Watch Me (Whip / Nae Nae)',
      artist: 'Silentó',
      spotifyId: '1A2GTWGtFfWp7KSQTwWOyo',
      memeContext: 'Viral dance'
    },
    {
      title: 'Hotline Bling',
      artist: 'Drake',
      spotifyId: '0wwPcA6wtMf6HUMpIRdeP7',
      memeContext: 'Drake dancing meme'
    },
  ],
  
  '2016-2018': [
    {
      title: 'Bad and Boujee',
      artist: 'Migos',
      spotifyId: '4Km5HrUvYTaSUfiSGPJeQR',
      memeContext: 'Raindrop, drop top'
    },
    {
      title: 'Despacito',
      artist: 'Luis Fonsi, Daddy Yankee',
      spotifyId: '6habFhsOp2NvshLv26DqMb',
      memeContext: 'Biggest song of 2017'
    },
    {
      title: 'In My Feelings',
      artist: 'Drake',
      spotifyId: '2G7V7zsVDxg1yRsu7Ew9RJ',
      memeContext: 'Kiki challenge'
    },
    {
      title: 'HUMBLE.',
      artist: 'Kendrick Lamar',
      spotifyId: '7KXjTSCq5nL1LoYtL7XAwS',
      memeContext: 'Sit down, be humble'
    },
  ],
  
  '2019-2021': [
    {
      title: 'Old Town Road',
      artist: 'Lil Nas X',
      spotifyId: '2YpeDb67231RjR0MgVLzsG',
      memeContext: 'TikTok sensation'
    },
    {
      title: 'Savage Love',
      artist: 'Jawsh 685, Jason Derulo',
      spotifyId: '1xQ6trAsedVPCdbtDAmk0c',
      memeContext: 'TikTok dance'
    },
    {
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      spotifyId: '0VjIjW4GlUZAMYd2vXMi3b',
      memeContext: 'Everywhere'
    },
    {
      title: 'Astronaut In The Ocean',
      artist: 'Masked Wolf',
      spotifyId: '3Ofmpyhv5UAQ70mENzB277',
      memeContext: 'What you know about'
    },
  ],
  
  '2022-2024': [
    {
      title: 'Anti-Hero',
      artist: 'Taylor Swift',
      spotifyId: '0V3wPSX9ygBnCm8psDIegu',
      memeContext: "It's me, hi"
    },
    {
      title: 'As It Was',
      artist: 'Harry Styles',
      spotifyId: '4Dvkj6JhhA12EX05fT7y2e',
      memeContext: 'Massive hit'
    },
    {
      title: 'Cupid - Twin Ver.',
      artist: 'FIFTY FIFTY',
      spotifyId: '1wKqVlTE3Uod7X1SfTHIJU',
      memeContext: 'TikTok viral'
    },
    {
      title: 'Boy\'s a liar Pt. 2',
      artist: 'PinkPantheress, Ice Spice',
      spotifyId: '5s9XwghtKwl73G0pBTC1MW',
      memeContext: 'Ice Spice era'
    },
  ],
  
  '2025-2026': [
    {
      title: '360',
      artist: 'Charli XCX',
      spotifyId: '4w2GLmK2wnioVbg7myYiNL',
      memeContext: 'Brat summer'
    },
    {
      title: 'Apple',
      artist: 'Charli XCX',
      spotifyId: '2OzhQlSqBEmt7hmkuwzhbi',
      memeContext: 'Brat summer dance'
    },
    {
      title: 'LUNCH',
      artist: 'Billie Eilish',
      spotifyId: '629DixmZGHc7ILtEntuiWE',
      memeContext: '2024-25 hit'
    },
    {
      title: 'Espresso',
      artist: 'Sabrina Carpenter',
      spotifyId: '2qSkIjg1o9h3YT9RAgYN75',
      memeContext: 'Summer anthem'
    },
  ],
}

