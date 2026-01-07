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
      title: 'Keyboard Cat',
      id: 'J---aiyznGQ',
    },
    {
      type: 'youtube',
      title: 'Dramatic Chipmunk',
      id: 'a1Y73sPHKxw',
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
  ],
  
  '2025-2026': [
    {
      type: 'youtube',
      title: 'Mr Beast Squid Game',
      id: '0e3GPea1Tyg',
    },
  ],
}


