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
      text: 'WHAT ARE THOSEEEEE',
      author: 'Brandon Moore',
      handle: '@youngbusco',
      date: 'Jun 2015',
      context: 'Viral meme origin'
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
      text: 'Cash me ousside how bout dah',
      author: 'Danielle Bregoli',
      handle: '@bhadbhabie',
      date: '2016',
      context: 'Dr Phil meme'
    },
    {
      text: 'Yanny or Laurel?',
      author: 'Cloe Feldman',
      handle: '@CloeCouture',
      date: 'May 15, 2018',
      context: 'Audio illusion debate'
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
      text: 'Not me having to clean up my Twitter from saying "if I get corona I get corona"',
      author: 'Brady Sluder',
      handle: '@BradySluder',
      date: 'Mar 2020',
      context: 'COVID denial meme'
    },
    {
      text: 'i am once again asking for your financial support',
      author: 'Bernie Sanders',
      handle: '@BernieSanders',
      date: 'Jan 2020',
      context: 'Bernie meme'
    },
    {
      text: 'this you?',
      author: 'Twitter',
      handle: '@twitter',
      date: '2020',
      context: 'Calling out hypocrisy'
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
      text: 'hawk tuah spit on that thang',
      author: 'Haliey Welch',
      handle: '@hay_welch',
      date: 'Jun 2024',
      context: 'Hawk tuah girl'
    },
    {
      text: 'It\'s corn! A big lump with knobs',
      author: 'Tariq',
      handle: '@tariq',
      date: 'Aug 2022',
      context: 'Corn kid'
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

