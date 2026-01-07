export interface TweetItem {
  text: string
  author: string
  handle: string
  date: string
  context?: string
  screenshotUrl?: string // Optional screenshot URL
}

export const ERA_TWEETS: Record<string, TweetItem[]> = {
  '2000-2003': [], // Twitter didn't exist yet
  
  '2004-2006': [
    {
      text: 'just setting up my twttr',
      author: 'Jack Dorsey',
      handle: '@jack',
      date: 'Mar 21, 2006',
      context: 'First tweet ever'
    },
  ],
  
  '2007-2009': [
    {
      text: 'How can mirrors be real if our eyes aren\'t real',
      author: 'Jaden Smith',
      handle: '@officialjaden',
      date: '2013',
      context: 'Deep thoughts era'
    },
    {
      text: 'I\'m at the airport',
      author: 'Ashton Kutcher',
      handle: '@aplusk',
      date: '2009',
      context: 'Early celebrity Twitter'
    },
  ],
  
  '2010-2012': [
    {
      text: 'I made a new word - Belieber!',
      author: 'Justin Bieber',
      handle: '@justinbieber',
      date: '2010',
      context: 'Bieber fever era'
    },
    {
      text: 'YOLO',
      author: 'Drake',
      handle: '@drake',
      date: '2011',
      context: 'YOLO origin'
    },
    {
      text: 'I\'m on a boat',
      author: 'The Lonely Island',
      handle: '@thelonelyisland',
      date: '2009',
      context: 'SNL viral'
    },
    {
      text: 'Hashtag',
      author: 'Jimmy Fallon',
      handle: '@jimmyfallon',
      date: '2012',
      context: 'Hashtag sketch'
    },
  ],
  
  '2013-2015': [
    {
      text: 'If only Bradley\'s arm was longer. Best photo ever. #oscars',
      author: 'Ellen DeGeneres',
      handle: '@TheEllenShow',
      date: 'Mar 2, 2014',
      context: 'Most retweeted selfie'
    },
    {
      text: 'why is it called "delivery" and not "takeout" when you pick it up',
      author: 'Dril',
      handle: '@dril',
      date: '2014',
      context: 'Classic dril'
    },
    {
      text: 'The dress is blue and black',
      author: 'Taylor Swift',
      handle: '@taylorswift13',
      date: 'Feb 2015',
      context: 'The dress debate'
    },
    {
      text: 'Damn Daniel',
      author: 'Josh Holz',
      handle: '@joshholz',
      date: '2016',
      context: 'Damn Daniel meme'
    },
    {
      text: 'What does the fox say?',
      author: 'Ylvis',
      handle: '@ylvis',
      date: '2013',
      context: 'Viral song'
    },
    {
      text: 'Can\'t believe it\'s not butter',
      author: 'Chrissy Teigen',
      handle: '@chrissyteigen',
      date: '2014',
      context: 'Random tweet'
    },
  ],
  
  '2016-2018': [
    {
      text: 'Yanny or Laurel?',
      author: 'Cloe Feldman',
      handle: '@CloeCouture',
      date: 'May 15, 2018',
      context: 'Audio illusion debate'
    },
    {
      text: 'Cash me outside how bout dah',
      author: 'Danielle Bregoli',
      handle: '@bhadbhabie',
      date: '2016',
      context: 'Dr Phil meme'
    },
    {
      text: 'This is America',
      author: 'Donald Glover',
      handle: '@donaldglover',
      date: '2018',
      context: 'Song release'
    },
    {
      text: 'Gucci Gang Gucci Gang Gucci Gang',
      author: 'Lil Pump',
      handle: '@lilpump',
      date: '2017',
      context: 'Viral song'
    },
    {
      text: 'Kiki do you love me',
      author: 'Drake',
      handle: '@drake',
      date: '2018',
      context: 'In my feelings challenge'
    },
  ],
  
  '2019-2021': [
    {
      text: 'i am once again asking for your financial support',
      author: 'Bernie Sanders',
      handle: '@BernieSanders',
      date: 'Jan 2020',
      context: 'Bernie meme'
    },
    {
      text: 'sus',
      author: 'Among Us',
      handle: '@AmongUsGame',
      date: '2020',
      context: 'Among Us explosion'
    },
    {
      text: 'Wellerman sea shanty',
      author: 'Nathan Evans',
      handle: '@nathanevanss',
      date: '2021',
      context: 'TikTok viral'
    },
    {
      text: 'Old Town Road',
      author: 'Lil Nas X',
      handle: '@LilNasX',
      date: '2019',
      context: 'TikTok sensation'
    },
    {
      text: 'Say So',
      author: 'Doja Cat',
      handle: '@DojaCat',
      date: '2020',
      context: 'TikTok dance'
    },
    {
      text: 'Savage',
      author: 'Megan Thee Stallion',
      handle: '@theestallion',
      date: '2020',
      context: 'Savage challenge'
    },
  ],
  
  '2022-2024': [
    {
      text: 'Very demure, very mindful',
      author: 'Jools Lebron',
      handle: '@joolieannie',
      date: 'Aug 2024',
      context: 'Demure trend'
    },
    {
      text: 'Brat summer',
      author: 'Charli XCX',
      handle: '@charli_xcx',
      date: '2024',
      context: 'Brat album'
    },
    {
      text: 'Espresso',
      author: 'Sabrina Carpenter',
      handle: '@SabrinaAnnLynn',
      date: '2024',
      context: 'That\'s that me espresso'
    },
    {
      text: 'Wednesday dance',
      author: 'Jenna Ortega',
      handle: '@jennaortega',
      date: '2022',
      context: 'Wednesday show'
    },
    {
      text: 'It\'s giving',
      author: 'Various',
      handle: '@twitter',
      date: '2022',
      context: 'Meme phrase'
    },
    {
      text: 'She ate',
      author: 'Various',
      handle: '@twitter',
      date: '2022',
      context: 'Slay variant'
    },
    {
      text: 'Rizz',
      author: 'Kai Cenat',
      handle: '@KaiCenat',
      date: '2022',
      context: 'Gen Z slang'
    },
  ],
  
  '2025-2026': [
    {
      text: 'The great meme reset',
      author: 'Various',
      handle: '@twitter',
      date: 'Jan 2026',
      context: 'Meme reset 2026'
    },
    {
      text: 'Big chungus returns',
      author: 'Various',
      handle: '@twitter',
      date: 'Jan 2026',
      context: 'Meme comeback'
    },
    {
      text: '1/1/1',
      author: 'Various',
      handle: '@twitter',
      date: 'Jan 2026',
      context: 'Calendar meme'
    },
    {
      text: 'APT dance',
      author: 'ROSÉ',
      handle: '@roses_are_rosie',
      date: '2025',
      context: 'Dance challenge'
    },
  ],
}

