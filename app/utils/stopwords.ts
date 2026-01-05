// Comprehensive stopwords list - common, boring words to filter out
export const STOPWORDS = new Set([
  // Articles, pronouns, prepositions
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from',
  'up', 'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'between',
  'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how',
  'all', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not',
  'only', 'own', 'same', 'so', 'than', 'too', 'very', 'can', 'will', 'just', 'should', 'now',
  
  // Common verbs
  'be', 'am', 'is', 'are', 'was', 'were', 'been', 'being', 'have', 'has', 'had', 'having',
  'do', 'does', 'did', 'doing', 'would', 'could', 'should', 'may', 'might', 'must', 'shall',
  'make', 'makes', 'made', 'making', 'get', 'gets', 'got', 'getting', 'go', 'goes', 'went',
  'going', 'come', 'comes', 'came', 'coming', 'take', 'takes', 'took', 'taking', 'know',
  'knows', 'knew', 'knowing', 'think', 'thinks', 'thought', 'thinking', 'see', 'sees', 'saw',
  'seeing', 'look', 'looks', 'looked', 'looking', 'want', 'wants', 'wanted', 'wanting',
  'use', 'uses', 'used', 'using', 'find', 'finds', 'found', 'finding', 'give', 'gives',
  'gave', 'giving', 'tell', 'tells', 'told', 'telling', 'work', 'works', 'worked', 'working',
  'call', 'calls', 'called', 'calling', 'try', 'tries', 'tried', 'trying', 'ask', 'asks',
  'asked', 'asking', 'need', 'needs', 'needed', 'needing', 'feel', 'feels', 'felt', 'feeling',
  'become', 'becomes', 'became', 'becoming', 'leave', 'leaves', 'left', 'leaving', 'put',
  'puts', 'putting', 'mean', 'means', 'meant', 'meaning', 'keep', 'keeps', 'kept', 'keeping',
  'let', 'lets', 'letting', 'begin', 'begins', 'began', 'beginning', 'seem', 'seems', 'seemed',
  'seeming', 'help', 'helps', 'helped', 'helping', 'talk', 'talks', 'talked', 'talking',
  'turn', 'turns', 'turned', 'turning', 'start', 'starts', 'started', 'starting', 'show',
  'shows', 'showed', 'showing', 'hear', 'hears', 'heard', 'hearing', 'play', 'plays',
  'played', 'playing', 'run', 'runs', 'ran', 'running', 'move', 'moves', 'moved', 'moving',
  'live', 'lives', 'lived', 'living', 'believe', 'believes', 'believed', 'believing',
  'bring', 'brings', 'brought', 'bringing', 'happen', 'happens', 'happened', 'happening',
  'write', 'writes', 'wrote', 'writing', 'provide', 'provides', 'provided', 'providing',
  'sit', 'sits', 'sat', 'sitting', 'stand', 'stands', 'stood', 'standing', 'lose', 'loses',
  'lost', 'losing', 'pay', 'pays', 'paid', 'paying', 'meet', 'meets', 'met', 'meeting',
  'include', 'includes', 'included', 'including', 'continue', 'continues', 'continued',
  'continuing', 'set', 'sets', 'setting', 'learn', 'learns', 'learned', 'learning',
  'change', 'changes', 'changed', 'changing', 'lead', 'leads', 'led', 'leading',
  'understand', 'understands', 'understood', 'understanding', 'watch', 'watches', 'watched',
  'watching', 'follow', 'follows', 'followed', 'following', 'stop', 'stops', 'stopped',
  'stopping', 'create', 'creates', 'created', 'creating', 'speak', 'speaks', 'spoke',
  'speaking', 'read', 'reads', 'reading', 'allow', 'allows', 'allowed', 'allowing',
  'add', 'adds', 'added', 'adding', 'spend', 'spends', 'spent', 'spending', 'grow',
  'grows', 'grew', 'growing', 'open', 'opens', 'opened', 'opening', 'walk', 'walks',
  'walked', 'walking', 'win', 'wins', 'won', 'winning', 'offer', 'offers', 'offered',
  'offering', 'remember', 'remembers', 'remembered', 'remembering', 'love', 'loves',
  'loved', 'loving', 'consider', 'considers', 'considered', 'considering', 'appear',
  'appears', 'appeared', 'appearing', 'buy', 'buys', 'bought', 'buying', 'wait', 'waits',
  'waited', 'waiting', 'serve', 'serves', 'served', 'serving', 'die', 'dies', 'died',
  'dying', 'send', 'sends', 'sent', 'sending', 'expect', 'expects', 'expected', 'expecting',
  'build', 'builds', 'built', 'building', 'stay', 'stays', 'stayed', 'staying', 'fall',
  'falls', 'fell', 'falling', 'cut', 'cuts', 'cutting', 'reach', 'reaches', 'reached',
  'reaching', 'kill', 'kills', 'killed', 'killing', 'remain', 'remains', 'remained',
  'remaining', 'suggest', 'suggests', 'suggested', 'suggesting', 'raise', 'raises',
  'raised', 'raising', 'pass', 'passes', 'passed', 'passing', 'sell', 'sells', 'sold',
  'selling', 'require', 'requires', 'required', 'requiring', 'report', 'reports',
  'reported', 'reporting', 'decide', 'decides', 'decided', 'deciding', 'pull', 'pulls',
  'pulled', 'pulling',
  
  // Common nouns & adjectives (boring ones)
  'people', 'person', 'man', 'woman', 'child', 'way', 'day', 'time', 'year', 'thing',
  'place', 'world', 'life', 'hand', 'part', 'case', 'week', 'company', 'system',
  'program', 'question', 'work', 'government', 'number', 'night', 'point', 'home',
  'water', 'room', 'mother', 'area', 'money', 'story', 'fact', 'month', 'lot', 'right',
  'study', 'book', 'eye', 'job', 'word', 'business', 'issue', 'side', 'kind', 'head',
  'house', 'service', 'friend', 'father', 'power', 'hour', 'game', 'line', 'end', 'member',
  'law', 'car', 'city', 'community', 'name', 'president', 'team', 'minute', 'idea', 'kid',
  'body', 'information', 'back', 'parent', 'face', 'others', 'level', 'office', 'door',
  'health', 'person', 'art', 'war', 'history', 'party', 'result', 'change', 'morning',
  'reason', 'research', 'girl', 'guy', 'moment', 'air', 'teacher', 'force', 'education',
  
  // Tech words that are too common
  'user', 'users', 'post', 'posts', 'comment', 'comments', 'article', 'page', 'site',
  'website', 'link', 'links', 'click', 'share', 'video', 'image', 'file', 'data',
  'code', 'app', 'apps', 'software', 'internet', 'online', 'email', 'content',
  'blog', 'feed', 'tweet', 'retweet', 'follow', 'follower', 'profile', 'account',
  'password', 'login', 'logout', 'sign', 'register', 'subscribe', 'unsubscribe',
  'download', 'upload', 'browser', 'search', 'google', 'facebook', 'apple', 'microsoft',
  'github', 'amazon', 'youtube', 'twitter', 'linkedin', 'medium', 'stackoverflow',
  'wikipedia', 'reddit', 'platform', 'server', 'client', 'database', 'api',
  'framework', 'library', 'tool', 'tools', 'service', 'services', 'feature', 'features',
  'function', 'method', 'class', 'object', 'variable', 'value', 'type', 'string',
  'number', 'array', 'list', 'item', 'items', 'element', 'elements', 'component',
  'module', 'package', 'version', 'release', 'update', 'upgrade', 'install',
  'configure', 'setting', 'settings', 'option', 'options', 'parameter', 'argument',
  'return', 'input', 'output', 'error', 'warning', 'message', 'text', 'title',
  'description', 'name', 'label', 'button', 'form', 'field', 'table', 'row',
  
  // Meta/generic words
  'really', 'actually', 'probably', 'definitely', 'basically', 'literally', 'simply',
  'exactly', 'certainly', 'clearly', 'obviously', 'apparently', 'perhaps', 'maybe',
  'somewhat', 'rather', 'quite', 'pretty', 'fairly', 'almost', 'nearly', 'hardly',
  'barely', 'totally', 'completely', 'absolutely', 'perfectly', 'entirely', 'fully',
  'always', 'never', 'sometimes', 'often', 'usually', 'rarely', 'seldom', 'frequently',
  'constantly', 'occasionally', 'generally', 'typically', 'normally', 'regularly',
  
  // Conjunctions and connectors
  'because', 'since', 'unless', 'until', 'while', 'whether', 'whereas', 'whereby',
  'therefore', 'however', 'moreover', 'furthermore', 'nevertheless', 'nonetheless',
  
  // More boring verbs
  'said', 'says', 'saying', 'told', 'tells', 'telling', 'asked', 'asks', 'asking',
  'made', 'makes', 'making', 'gave', 'gives', 'giving', 'took', 'takes', 'taking',
  
  // Boring adjectives
  'different', 'same', 'similar', 'various', 'several', 'many', 'few', 'other',
  'another', 'certain', 'particular', 'specific', 'general', 'common', 'special',
  'important', 'possible', 'impossible', 'difficult', 'easy', 'hard', 'simple',
  'complex', 'complicated', 'necessary', 'available', 'current', 'recent', 'past',
  'future', 'present', 'previous', 'next', 'following', 'last', 'final', 'initial',
  'early', 'late', 'main', 'major', 'minor', 'primary', 'secondary', 'key', 'central',
  'basic', 'fundamental', 'essential', 'critical', 'crucial', 'vital', 'significant',
  'relevant', 'related', 'similar', 'different', 'separate', 'distinct', 'unique',
  'typical', 'normal', 'regular', 'standard', 'usual', 'common', 'rare', 'unusual',
  'strange', 'weird', 'odd', 'funny', 'serious', 'real', 'actual', 'true', 'false',
  'correct', 'wrong', 'right', 'proper', 'appropriate', 'suitable', 'fit', 'ready',
  'able', 'unable', 'capable', 'incapable', 'willing', 'unwilling', 'likely',
  'unlikely', 'probable', 'improbable', 'certain', 'uncertain', 'sure', 'unsure',
  
  // Reddit/forum specific boring words
  'reddit', 'thread', 'subreddit', 'upvote', 'downvote', 'karma', 'moderator',
  'deleted', 'removed', 'edit', 'update', 'original', 'source',
  
  // Numbers and short words
  'one', 'two', 'three', 'four', 'five', 'first', 'second', 'third', 'last', 'next',
  'new', 'old', 'good', 'bad', 'big', 'small', 'long', 'short', 'high', 'low', 'large',
  'little', 'great', 'best', 'better', 'worse', 'worst', 'much', 'many', 'less', 'least',
  'true', 'false', 'sure', 'yes', 'yeah', 'yep', 'nope', 'okay', 'fine',
  
  // Pronouns
  'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them',
  'my', 'your', 'his', 'her', 'its', 'our', 'their', 'mine', 'yours', 'hers', 'ours',
  'theirs', 'this', 'that', 'these', 'those', 'who', 'whom', 'whose', 'which', 'what',
  'myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'themselves',
  'anyone', 'someone', 'everyone', 'nobody', 'something', 'anything', 'everything',
  'nothing', 'somewhere', 'anywhere', 'everywhere', 'nowhere',
  
  // Misc boring
  'etc', 'like', 'well', 'also', 'even', 'still', 'back', 'down', 'over', 'out', 'off',
  'away', 'around', 'across', 'along', 'though', 'although', 'however', 'therefore',
  'thus', 'hence', 'moreover', 'furthermore', 'nevertheless', 'nonetheless', 'meanwhile',
  'otherwise', 'instead', 'indeed', 'besides', 'anyway', 'anyhow', 'within', 'without',
  'upon', 'onto', 'into', 'unto', 'behind', 'beside', 'besides', 'beneath', 'beyond',
  'against', 'among', 'amongst', 'via', 'per', 'plus', 'minus', 'versus',
  
  // More filler words
  'already', 'yet', 'still', 'just', 'only', 'very', 'too', 'quite', 'rather', 'pretty',
  'enough', 'more', 'most', 'less', 'least', 'much', 'many', 'little', 'few', 'some',
  'any', 'every', 'each', 'either', 'neither', 'both', 'all', 'none', 'such',
  
  // Time words (boring)
  'today', 'tomorrow', 'yesterday', 'tonight', 'now', 'then', 'later', 'soon',
  'recently', 'currently', 'previously', 'formerly', 'eventually', 'finally',
  'immediately', 'instantly', 'quickly', 'slowly', 'suddenly', 'gradually',
  
  // Years (filter these out)
  '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
  '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
  '2020', '2021', '2022', '2023', '2024', '2025',
  
  // HTTP/URL fragments
  'http', 'https', 'www', 'com', 'org', 'net', 'html', 'htm',
])

// Words that ARE interesting - cultural markers, slang, memes, tech buzzwords
export const isInterestingWord = (word: string): boolean => {
  // Must be at least 4 characters
  if (word.length < 4) return false
  
  // Filter out stopwords
  if (STOPWORDS.has(word.toLowerCase())) return false
  
  // Filter out pure numbers
  if (/^\d+$/.test(word)) return false
  
  // Filter out URLs
  if (word.includes('http') || word.includes('www.')) return false
  
  // Prefer words with mixed case or special patterns (likely proper nouns, brands, memes)
  // Or words that contain numbers (web3, covid19, etc)
  const hasNumbers = /\d/.test(word)
  const hasCapitals = /[A-Z]/.test(word) && word !== word.toUpperCase()
  
  // Keep it if it has interesting patterns OR is just unusual
  return true
}

// Minimum word length for cultural significance
export const MIN_WORD_LENGTH = 5

// Minimum frequency to be considered (filters out typos and rare words)
export const MIN_FREQUENCY = 3

