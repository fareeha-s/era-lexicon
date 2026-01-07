export interface TweetItem {
  text: string
  author: string
  handle: string
  date: string
  context?: string
  screenshotUrl?: string // Optional screenshot URL
}

export const ERA_TWEETS: Record<string, TweetItem[]> = {
  '2000-2003': [
    {
      text: 'All your base are belong to us',
      author: 'Zero Wing',
      handle: '@zerowing',
      date: '2000',
      context: 'Translation fail'
    },
    {
      text: 'You can dance if you want to',
      author: 'Hamster Dance',
      handle: '@hamsterdance',
      date: '1998-2003',
      context: 'Early viral site'
    },
    {
      text: 'Strong Bad Email: DELETED!',
      author: 'Homestar Runner',
      handle: '@strongbad',
      date: '2001',
      context: 'Flash era'
    },
  ],
  
  '2004-2006': [
    {
      text: 'just setting up my twttr',
      author: 'Jack Dorsey',
      handle: '@jack',
      date: 'Mar 21, 2006',
      context: 'First tweet ever'
    },
    {
      text: 'LEEEEEEEROOOOY JENKINS',
      author: 'Leeroy Jenkins',
      handle: '@leeroy',
      date: '2005',
      context: 'WoW legend'
    },
    {
      text: 'O RLY? YA RLY. NO WAI!',
      author: '4chan',
      handle: '@4chan',
      date: '2005',
      context: 'Owl meme'
    },
  ],
  
  '2007-2009': [
    {
      text: 'just setting up my twttr',
      author: 'Jack Dorsey',
      handle: '@jack',
      date: 'Mar 21, 2006',
      context: 'First tweet ever'
    },
    {
      text: 'fail whale',
      author: 'Twitter Users',
      handle: '@twitter',
      date: '2008',
      context: 'Twitter downtime era'
    },
  ],
  
  '2010-2012': [
    {
      text: 'The iPhone is not going to get any significant market share',
      author: 'Steve Ballmer',
      handle: '@steveb',
      date: '2007',
      context: 'Famous prediction fail'
    },
    {
      text: 'We\'re making a dent in the universe',
      author: 'Steve Jobs',
      handle: '@stevejobs',
      date: '2011',
      context: 'Apple era'
    },
  ],
  
  '2013-2015': [
    {
      text: 'Make something people want.',
      author: 'Paul Graham',
      handle: '@paulg',
      date: '2014',
      context: 'YC motto'
    },
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
  ],
  
  '2016-2018': [
    {
      text: 'In retrospect, it was inevitable',
      author: 'Crypto Twitter',
      handle: '@CT_inevitable',
      date: '2017',
      context: 'Bitcoin rise'
    },
    {
      text: 'Bitcoin is rat poison squared',
      author: 'Warren Buffett',
      handle: '@WarrenBuffett',
      date: 'May 2018',
      context: 'Crypto skeptic'
    },
    {
      text: 'nobody:\nabsolutely nobody:\nstill nobody:\nme:',
      author: 'Various',
      handle: '@internet',
      date: '2018',
      context: 'Nobody meme format'
    },
  ],
  
  '2019-2021': [
    {
      text: 'Have fun staying poor',
      author: 'Various CT',
      handle: '@CT_Anon',
      date: '2020',
      context: 'Crypto Twitter HFSP'
    },
    {
      text: 'gm',
      author: 'Everyone on CT',
      handle: '@cryptotwitter',
      date: '2020-2021',
      context: 'Good morning ritual'
    },
    {
      text: 'probably nothing',
      author: 'Crypto Twitter',
      handle: '@CT',
      date: '2020-2021',
      context: 'NFT era sarcasm'
    },
  ],
  
  '2022-2024': [
    {
      text: 'The fundamental problem with programming is that it is a constant battle against complexity',
      author: 'John Carmack',
      handle: '@ID_AA_Carmack',
      date: '2023',
      context: 'AGI takes'
    },
    {
      text: 'effective accelerationism is the only way forward',
      author: 'Based Beff Jezos',
      handle: '@BasedBeffJezos',
      date: '2023',
      context: 'e/acc movement'
    },
    {
      text: 'touch grass',
      author: 'Everyone',
      handle: '@internet',
      date: '2022-2024',
      context: 'Go outside'
    },
  ],
  
  '2025-2026': [
    {
      text: 'Founder mode is real and it\'s about being in the details',
      author: 'Brian Chesky',
      handle: '@bchesky',
      date: 'Sep 2024',
      context: 'Founder mode'
    },
    {
      text: 'we are so back',
      author: 'Tech Twitter',
      handle: '@techtwitter',
      date: '2024-2025',
      context: 'Optimism posting'
    },
    {
      text: 'brat summer is never over',
      author: 'Charli XCX',
      handle: '@charli_xcx',
      date: 'Jun 2024',
      context: 'Brat album era'
    },
  ],
}

