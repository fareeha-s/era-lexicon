// Script to fetch trending internet culture terms from Reddit
// Runs via GitHub Action weekly to keep content fresh

const fs = require('fs');
const path = require('path');

const SUBREDDITS = [
  'OutOfTheLoop',
  'GenZ',
  'TikTokCringe',
  'meirl',
  'technews'
];

async function fetchRedditTrending(subreddit) {
  try {
    const response = await fetch(
      `https://www.reddit.com/r/${subreddit}/hot.json?limit=25`,
      {
        headers: {
          'User-Agent': 'InternetNostalgia/1.0'
        }
      }
    );
    const data = await response.json();
    return data.data.children.map(post => ({
      title: post.data.title,
      score: post.data.score,
      created: post.data.created_utc
    }));
  } catch (error) {
    console.error(`Error fetching ${subreddit}:`, error);
    return [];
  }
}

function extractTrendingTerms(posts) {
  // Common words to filter out
  const stopWords = new Set([
    'the', 'a', 'an', 'is', 'are', 'was', 'were', 'what', 'why', 'how', 'when',
    'who', 'which', 'this', 'that', 'these', 'those', 'i', 'you', 'we', 'they',
    'it', 'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
    'could', 'should', 'may', 'might', 'must', 'to', 'of', 'in', 'for', 'on',
    'with', 'at', 'by', 'from', 'about', 'into', 'through', 'during', 'before',
    'after', 'above', 'below', 'between', 'under', 'again', 'further', 'then',
    'once', 'here', 'there', 'all', 'each', 'few', 'more', 'most', 'other',
    'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than',
    'too', 'very', 'just', 'and', 'but', 'or', 'if', 'because', 'as', 'until',
    'while', 'loop', 'out', 'going', 'people', 'everyone', 'someone', 'anyone',
    'something', 'anything', 'nothing', 'everything', 'reddit', 'post', 'comment'
  ]);

  const termCounts = {};
  
  posts.forEach(post => {
    // Extract words from title
    const words = post.title.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 2 && !stopWords.has(word));
    
    words.forEach(word => {
      termCounts[word] = (termCounts[word] || 0) + 1;
    });

    // Also look for quoted terms or specific patterns
    const quotedTerms = post.title.match(/"([^"]+)"/g);
    if (quotedTerms) {
      quotedTerms.forEach(term => {
        const cleaned = term.replace(/"/g, '').toLowerCase();
        if (cleaned.length > 2) {
          termCounts[cleaned] = (termCounts[cleaned] || 0) + 5; // Weight quoted terms higher
        }
      });
    }
  });

  // Sort by count and return top terms
  return Object.entries(termCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([text, count]) => ({ text, count: Math.min(100, count * 10) }));
}

async function main() {
  console.log('Fetching trending content from Reddit...');
  
  let allPosts = [];
  
  for (const subreddit of SUBREDDITS) {
    console.log(`Fetching r/${subreddit}...`);
    const posts = await fetchRedditTrending(subreddit);
    allPosts = allPosts.concat(posts);
    // Rate limit
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log(`Total posts fetched: ${allPosts.length}`);
  
  const trendingTerms = extractTrendingTerms(allPosts);
  console.log('Trending terms:', trendingTerms);

  // Read current eraData.ts
  const eraDataPath = path.join(__dirname, '../app/utils/eraData.ts');
  let eraDataContent = fs.readFileSync(eraDataPath, 'utf-8');

  // Generate new 2025-2026 terms array
  const newTermsArray = trendingTerms.map(t => 
    `    { text: '${t.text}', count: ${t.count} },`
  ).join('\n');

  // Update the 2025-2026 section
  const updatedContent = eraDataContent.replace(
    /(\/\/ 2025-2026: Current era\s*'2025-2026': \[)[^\]]*(\],)/s,
    `$1\n${newTermsArray}\n  $2`
  );

  // Write back
  fs.writeFileSync(eraDataPath, updatedContent);
  console.log('Updated eraData.ts with fresh trending terms!');

  // Also update a timestamp file
  const timestamp = new Date().toISOString();
  fs.writeFileSync(
    path.join(__dirname, '../app/data/last-updated.json'),
    JSON.stringify({ lastUpdated: timestamp, terms: trendingTerms.length })
  );
  console.log(`Last updated: ${timestamp}`);
}

main().catch(console.error);

