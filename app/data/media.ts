export interface MediaItem {
  type: 'youtube' | 'gif' | 'image'
  title: string
  id: string // YouTube video ID, GIF URL, or image URL
  thumbnail?: string
  url?: string // Direct URL for GIFs/images
}

export const ERA_MEDIA: Record<string, MediaItem[]> = {
  '2000-2003': [
    {
      type: 'gif',
      title: 'Dancing Baby',
      id: 'dancing-baby',
      url: 'https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif',
    },
    {
      type: 'gif',
      title: 'Hamster Dance',
      id: 'hamster-dance',
      url: 'https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif',
    },
    {
      type: 'image',
      title: 'All Your Base',
      id: 'all-your-base',
      url: 'https://i.imgur.com/G3Vc5xZ.jpeg',
    },
    {
      type: 'gif',
      title: 'Badger Badger Badger',
      id: 'badger',
      url: 'https://media.giphy.com/media/xT5LMQ8rHYTDGFG07e/giphy.gif',
    },
  ],
  
  '2004-2006': [
    {
      type: 'youtube',
      title: 'Numa Numa Dance',
      id: 'KmtzQCSh6xk',
    },
    {
      type: 'youtube',
      title: 'Evolution of Dance',
      id: 'dMH0bHeiRNg',
    },
  ],
  
  '2007-2009': [
    {
      type: 'youtube',
      title: 'Charlie Bit My Finger',
      id: '_OBlgSz8sSM',
    },
    {
      type: 'youtube',
      title: 'Keyboard Cat',
      id: 'J---aiyznGQ',
    },
    {
      type: 'youtube',
      title: 'Dramatic Chipmunk',
      id: 'a1Y73sPHKxw',
    },
    {
      type: 'youtube',
      title: 'Sneezing Panda',
      id: 'FzRH3iTQPrk',
    },
  ],
  
  '2010-2012': [
    {
      type: 'youtube',
      title: 'Nyan Cat',
      id: 'QH2-TGUlwu4',
    },
    {
      type: 'youtube',
      title: 'Rebecca Black - Friday',
      id: 'kfVsfOSbJY0',
    },
    {
      type: 'youtube',
      title: 'Gangnam Style',
      id: '9bZkp7q19f0',
    },
    {
      type: 'youtube',
      title: 'Double Rainbow',
      id: 'OQSNhk5ICTI',
    },
    {
      type: 'youtube',
      title: 'Honey Badger Don\'t Care',
      id: '4r7wHMg5Yjg',
    },
  ],
  
  '2013-2015': [
    {
      type: 'youtube',
      title: 'What Does The Fox Say',
      id: 'jofNR_WkoCE',
    },
    {
      type: 'youtube',
      title: 'Damn Daniel',
      id: 'a16Kgh7j8zk',
    },
    {
      type: 'youtube',
      title: 'Left Shark Super Bowl',
      id: 'WmcWZ2Bzoho',
    },
    {
      type: 'youtube',
      title: 'Why You Always Lying',
      id: 'qlOTNtUvhe8',
    },
  ],
  
  '2016-2018': [
    {
      type: 'youtube',
      title: 'Cash Me Outside Dr Phil',
      id: 'jgflCE7zRpc',
    },
    {
      type: 'youtube',
      title: 'This Is America',
      id: 'VYOjWnS4cMY',
    },
    {
      type: 'youtube',
      title: 'Salt Bae',
      id: 'J5GGG0PaSe4',
    },
    {
      type: 'youtube',
      title: 'Ugandan Knuckles',
      id: 'Hxjofn2bYE8',
    },
  ],
  
  '2019-2021': [
    {
      type: 'youtube',
      title: 'Coffin Dance Meme',
      id: 'iLBBRuVDOo4',
    },
    {
      type: 'youtube',
      title: 'Among Us Original Trailer',
      id: 'grd-K33tOSM',
    },
    {
      type: 'youtube',
      title: 'Old Town Road',
      id: 'w2Ov5jzm3j8',
    },
    {
      type: 'youtube',
      title: 'WAP - Cardi B',
      id: 'hsm4poTWjMs',
    },
    {
      type: 'youtube',
      title: 'Blinding Lights - The Weeknd',
      id: 'fHI8X4OXluQ',
    },
    {
      type: 'youtube',
      title: 'Savage - Megan Thee Stallion',
      id: 'EOxj2ROIxok',
    },
  ],
  
  '2022-2024': [
    {
      type: 'youtube',
      title: 'Wednesday Dance',
      id: 'xYkSYWPFh1k',
    },
    {
      type: 'youtube',
      title: 'Corn Kid Interview',
      id: '_caMQpiwiaU',
    },
    {
      type: 'youtube',
      title: 'Skibidi Toilet',
      id: 'WIJmzvQWeTo',
    },
    {
      type: 'youtube',
      title: 'Barbie Movie Trailer',
      id: 'pBk4NYhWNMM',
    },
    {
      type: 'youtube',
      title: 'Flowers - Miley Cyrus',
      id: 'G7KNmW9a75Y',
    },
    {
      type: 'youtube',
      title: 'Anti-Hero - Taylor Swift',
      id: 'b1kbLwvqugk',
    },
  ],
  
  '2025-2026': [
    {
      type: 'youtube',
      title: 'Big Chungus Returns',
      id: 'cB4dYfFgaME',
    },
    {
      type: 'youtube',
      title: 'Nyan Cat 10 Hours',
      id: 'QH2-TGUlwu4',
    },
    {
      type: 'youtube',
      title: 'APT. - ROSÉ & Bruno Mars',
      id: 'ekr2nIex040',
    },
    {
      type: 'youtube',
      title: 'Squid Game Season 2 Trailer',
      id: 'Ed5QQOX0ByU',
    },
    {
      type: 'youtube',
      title: 'Wicked Movie Official',
      id: '6COmYeLsz4c',
    },
    {
      type: 'youtube',
      title: 'Die With A Smile MV',
      id: 'kPa7bsKwL-c',
    },
    {
      type: 'youtube',
      title: 'Moana 2 Trailer',
      id: 'hDZ7y8RP5HE',
    },
    {
      type: 'youtube',
      title: 'Mr Beast Squid Game',
      id: '0e3GPea1Tyg',
    },
  ],
}


