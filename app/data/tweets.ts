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
      context: 'Deep thoughts'
    },
    {
      text: 'I just got punk\'d',
      author: 'Ashton Kutcher',
      handle: '@aplusk',
      date: '2009',
      context: 'Early celeb Twitter'
    },
    {
      text: 'im drinking a starbucks latte',
      author: 'Kim Kardashian',
      handle: '@KimKardashian',
      date: '2009',
      context: 'Early Kim tweets'
    },
    {
      text: 'OMG I JUST GOT RICKROLLED',
      author: 'Twitter User',
      handle: '@rickrolled',
      date: '2008',
      context: 'Rickroll era'
    },
    {
      text: 'leave britney alone!!!',
      author: 'Chris Crocker',
      handle: '@chriscrocker',
      date: '2007',
      context: 'Leave Britney Alone'
    },
    {
      text: 'keyboard cat saved my life',
      author: 'Internet Culture',
      handle: '@memehistory',
      date: '2009',
      context: 'Keyboard Cat'
    },
  ],
  
  '2010-2012': [
    {
      text: 'I made a new word - Belieber!',
      author: 'Justin Bieber',
      handle: '@justinbieber',
      date: '2010',
      context: 'Bieber fever'
    },
    {
      text: 'YOLO',
      author: 'Drake',
      handle: '@drake',
      date: '2011',
      context: 'YOLO origin'
    },
    {
      text: 'I\'m really rich',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: '2011',
      context: 'Trump tweets'
    },
    {
      text: 'Oppa Gangnam Style!',
      author: 'PSY',
      handle: '@psy_oppa',
      date: '2012',
      context: 'Gangnam Style'
    },
    {
      text: 'nyan nyan nyan nyan nyan nyan',
      author: 'Nyan Cat',
      handle: '@nyannyancat',
      date: '2011',
      context: 'Nyan Cat viral'
    },
    {
      text: 'its friday friday gotta get down on friday',
      author: 'Rebecca Black',
      handle: '@MsRebeccaBlack',
      date: '2011',
      context: 'Friday song'
    },
    {
      text: 'double rainbow all the way across the sky',
      author: 'Paul Vasquez',
      handle: '@yosemitebear',
      date: '2010',
      context: 'Double Rainbow'
    },
    {
      text: 'aint nobody got time for that',
      author: 'Sweet Brown',
      handle: '@sweetbrown',
      date: '2012',
      context: 'Sweet Brown'
    },
    {
      text: 'keep calm and carry on',
      author: 'Meme Accounts',
      handle: '@keepcalm',
      date: '2011',
      context: 'Keep Calm meme'
    },
    {
      text: 'y u no',
      author: 'Y U NO Guy',
      handle: '@yunomeme',
      date: '2010',
      context: 'Rage comics'
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
      text: 'What color is this dress?',
      author: 'BuzzFeed',
      handle: '@BuzzFeed',
      date: 'Feb 2015',
      context: 'The dress'
    },
    {
      text: 'Left shark won the super bowl',
      author: 'Katy Perry',
      handle: '@katyperry',
      date: 'Feb 2015',
      context: 'Left shark'
    },
    {
      text: 'Why you always lying',
      author: 'Nicholas Fraser',
      handle: '@downgoes',
      date: '2015',
      context: 'Lying meme'
    },
    {
      text: 'what does the fox say',
      author: 'Ylvis',
      handle: '@ylvis',
      date: '2013',
      context: 'Fox Song'
    },
    {
      text: 'on wednesdays we wear pink',
      author: 'Mean Girls',
      handle: '@meangirls',
      date: '2014',
      context: 'Mean Girls quotes'
    },
    {
      text: 'do it for the vine',
      author: 'Vine',
      handle: '@vine',
      date: '2014',
      context: 'Vine culture'
    },
    {
      text: 'bye felicia',
      author: 'Ice Cube',
      handle: '@icecube',
      date: '2014',
      context: 'Bye Felicia'
    },
    {
      text: 'turn down for what',
      author: 'DJ Snake',
      handle: '@djsnake',
      date: '2013',
      context: 'Turn Down For What'
    },
    {
      text: 'but thats none of my business',
      author: 'Kermit Memes',
      handle: '@kermitmemes',
      date: '2014',
      context: 'Kermit tea'
    },
    {
      text: 'i woke up like this',
      author: 'Beyoncé',
      handle: '@Beyonce',
      date: '2013',
      context: 'Flawless'
    },
  ],
  
  '2016-2018': [
    {
      text: 'Yanny or Laurel?',
      author: 'Cloe Feldman',
      handle: '@CloeCouture',
      date: 'May 15, 2018',
      context: 'Audio debate'
    },
    {
      text: 'Cash me outside how bout dah',
      author: 'Danielle Bregoli',
      handle: '@bhadbhabie',
      date: '2016',
      context: 'Dr Phil'
    },
    {
      text: 'covfefe',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: 'May 2017',
      context: 'Covfefe tweet'
    },
    {
      text: 'Damn Daniel! Back at it again with the white vans!',
      author: 'Josh Holz',
      handle: '@josholzz',
      date: '2016',
      context: 'Damn Daniel'
    },
    {
      text: 'Salt Bae is the best thing on the internet',
      author: 'Complex',
      handle: '@Complex',
      date: '2017',
      context: 'Salt Bae viral'
    },
    {
      text: 'I have the best words',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: '2016',
      context: 'Trump quote'
    },
    {
      text: 'is this a pigeon',
      author: 'Meme Accounts',
      handle: '@memesdaily',
      date: '2018',
      context: 'Butterfly meme'
    },
    {
      text: 'what are thoooooose',
      author: 'Brandon Moore',
      handle: '@youngbusco',
      date: '2015',
      context: 'What are those'
    },
    {
      text: 'literally me',
      author: 'Relatable Twitter',
      handle: '@relatablequote',
      date: '2017',
      context: 'Relatable content'
    },
    {
      text: 'weird flex but ok',
      author: 'Twitter Slang',
      handle: '@weirdflexbutok',
      date: '2018',
      context: 'Weird flex'
    },
    {
      text: 'im baby',
      author: 'Baby Yoda Stan',
      handle: '@babyyoda',
      date: '2018',
      context: 'Im baby'
    },
    {
      text: 'big mood',
      author: 'Gen Z Twitter',
      handle: '@biigmood',
      date: '2018',
      context: 'Big mood'
    },
    {
      text: 'yeet',
      author: 'Vine Culture',
      handle: '@yeetmaster',
      date: '2017',
      context: 'Yeet meme'
    },
    {
      text: 'its rewind time',
      author: 'Will Smith',
      handle: '@willsmith',
      date: '2018',
      context: 'YouTube Rewind'
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
      text: 'this quarantine got me feeling some type of way',
      author: 'Chrissy Teigen',
      handle: '@chrissyteigen',
      date: 'Mar 2020',
      context: 'Pandemic tweets'
    },
    {
      text: 'There is 1 impostor among us',
      author: 'Among Us',
      handle: '@AmongUsGame',
      date: '2020',
      context: 'Among Us peak'
    },
    {
      text: 'STOP THE COUNT',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: 'Nov 2020',
      context: 'Election 2020'
    },
    {
      text: 'normalize not being ok',
      author: 'Gen Z Twitter',
      handle: '@thatshygirl',
      date: '2020',
      context: 'Mental health talk'
    },
    {
      text: 'tell me you\'re ___ without telling me you\'re ___',
      author: 'TikTok Trend',
      handle: '@tiktokroom',
      date: '2020',
      context: 'Viral format'
    },
    {
      text: 'not me doing ___ at 3am',
      author: 'Twitter Trend',
      handle: '@relatable',
      date: '2020',
      context: 'Relatable tweets'
    },
    {
      text: 'the way I RAN here',
      author: 'Stan Twitter',
      handle: '@popbase',
      date: '2021',
      context: 'Stan language'
    },
    {
      text: 'this is a safe space',
      author: 'Comfort Accounts',
      handle: '@cozyvibes',
      date: '2020',
      context: 'Wholesome internet'
    },
    {
      text: 'we\'re all in this together',
      author: 'Pandemic Tweets',
      handle: '@staystrong',
      date: 'Mar 2020',
      context: 'COVID solidarity'
    },
    {
      text: 'no thoughts head empty',
      author: 'Meme Twitter',
      handle: '@nothoughts',
      date: '2020',
      context: 'No thoughts'
    },
    {
      text: 'monke',
      author: 'Reject Modernity',
      handle: '@monkeposting',
      date: '2020',
      context: 'Return to monke'
    },
    {
      text: 'bonk go to horny jail',
      author: 'Doge Memes',
      handle: '@dogememe',
      date: '2020',
      context: 'Horny jail'
    },
    {
      text: 'pov: you just',
      author: 'TikTok Format',
      handle: '@povs',
      date: '2020',
      context: 'POV format'
    },
    {
      text: 'its giving ___',
      author: 'Stan Language',
      handle: '@stantwt',
      date: '2021',
      context: 'Its giving'
    },
    {
      text: 'periodt',
      author: 'Black Twitter',
      handle: '@periodtsis',
      date: '2019',
      context: 'Periodt'
    },
    {
      text: 'and i oop',
      author: 'Jasmine Masters',
      handle: '@msjasminemasters',
      date: '2019',
      context: 'And I oop'
    },
    {
      text: 'sksksk',
      author: 'VSCO Girls',
      handle: '@vscogirl',
      date: '2019',
      context: 'VSCO culture'
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
      text: 'Wednesday Addams dance is everything',
      author: 'Jenna Ortega',
      handle: '@jennaortega',
      date: 'Nov 2022',
      context: 'Wednesday show'
    },
    {
      text: 'its corn! a big lump with knobs',
      author: 'Recess Therapy',
      handle: '@RecessTherapy',
      date: 'Aug 2022',
      context: 'Corn kid'
    },
    {
      text: 'in my brat era',
      author: 'Charli XCX Fans',
      handle: '@xcxfans',
      date: 'Jun 2024',
      context: 'Brat summer'
    },
    {
      text: 'what\'s your roman empire',
      author: 'TikTok Trend',
      handle: '@tiktoktrends',
      date: '2023',
      context: 'What you think about'
    },
    {
      text: 'delulu is the solulu',
      author: 'Gen Z',
      handle: '@genzhumor',
      date: '2023',
      context: 'Delusional positivity'
    },
    {
      text: 'the ick list',
      author: 'Dating Twitter',
      handle: '@datingadvice',
      date: '2023',
      context: 'Red flags'
    },
    {
      text: 'rizz is short for charisma',
      author: 'Kai Cenat',
      handle: '@kaicenat',
      date: '2022',
      context: 'Rizz origin'
    },
    {
      text: 'let him cook',
      author: 'Twitter Slang',
      handle: '@internetslang',
      date: '2023',
      context: 'Let them work'
    },
    {
      text: 'hear me out',
      author: 'TikTok',
      handle: '@tiktok',
      date: '2024',
      context: 'Controversial takes'
    },
    {
      text: 'girl dinner',
      author: 'TikTok Food',
      handle: '@foodtok',
      date: '2023',
      context: 'Girl dinner trend'
    },
    {
      text: 'npc energy',
      author: 'TikTok Memes',
      handle: '@npctiktok',
      date: '2023',
      context: 'NPC streams'
    },
    {
      text: 'im just a girl',
      author: 'Gen Z Girls',
      handle: '@justgirl',
      date: '2023',
      context: 'Just a girl'
    },
    {
      text: 'boy math vs girl math',
      author: 'TikTok Debates',
      handle: '@mathtok',
      date: '2023',
      context: 'Math memes'
    },
    {
      text: 'fanum tax',
      author: 'Fanum',
      handle: '@fanum',
      date: '2023',
      context: 'Fanum tax'
    },
    {
      text: 'gyatt',
      author: 'Kai Cenat',
      handle: '@kaicenat',
      date: '2023',
      context: 'Gyatt slang'
    },
    {
      text: 'ohio final boss',
      author: 'Gen Alpha',
      handle: '@genalpha',
      date: '2023',
      context: 'Ohio memes'
    },
    {
      text: 'its giving main character',
      author: 'Main Character Twitter',
      handle: '@maincharacter',
      date: '2022',
      context: 'Main character energy'
    },
    {
      text: 'im gagged',
      author: 'Drag Twitter',
      handle: '@dragrace',
      date: '2023',
      context: 'Gagged'
    },
    {
      text: 'slay boots',
      author: 'TikTok Slang',
      handle: '@slayboots',
      date: '2023',
      context: 'Slay boots'
    },
  ],
  
  '2025-2026': [
    {
      text: 'the great meme reset is here',
      author: 'Internet Culture',
      handle: '@memehistory',
      date: 'Jan 2026',
      context: 'Meme reset'
    },
    {
      text: 'big chungus is back and im not ready',
      author: 'Gen Z',
      handle: '@genztwitter',
      date: 'Jan 2026',
      context: 'Big Chungus return'
    },
    {
      text: 'do u know de wae is literally trending again',
      author: 'Ugandan Knuckles',
      handle: '@knuckles',
      date: 'Jan 2026',
      context: 'Knuckles return'
    },
    {
      text: 'why are we bringing back 2018 memes',
      author: 'Confused Twitter',
      handle: '@confused',
      date: 'Jan 2026',
      context: 'Nostalgia cycle'
    },
    {
      text: '6-7 vibes hit different',
      author: 'TikTok',
      handle: '@tiktoktrends',
      date: 'Jan 2026',
      context: '6-7 trend'
    },
    {
      text: 'APT dance is taking over',
      author: 'ROSÉ',
      handle: '@roses_are_rosie',
      date: '2025',
      context: 'APT viral'
    },
    {
      text: 'brain rot era is real',
      author: 'Gen Alpha',
      handle: '@genalphakids',
      date: '2025',
      context: 'Brain rot'
    },
    {
      text: 'chat is this real',
      author: 'Streamers',
      handle: '@livestream',
      date: '2025',
      context: 'Chat is this real'
    },
    {
      text: 'locked in',
      author: 'Productivity Twitter',
      handle: '@lockedin',
      date: '2025',
      context: 'Locked in'
    },
    {
      text: 'we are so back',
      author: 'Comeback Twitter',
      handle: '@weareback',
      date: '2025',
      context: 'We are so back'
    },
    {
      text: 'its so over',
      author: 'Doomer Twitter',
      handle: '@itsover',
      date: '2025',
      context: 'Its so over'
    },
    {
      text: 'aura points: +1000',
      author: 'Gen Alpha',
      handle: '@aurapoints',
      date: '2025',
      context: 'Aura points'
    },
  ],
}

