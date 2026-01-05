# Eralexicon

A data visualization and analysis tool for exploring internet culture and discourse across multiple platforms.

## Data Sources

**All data sources are public, free, and require no user authentication or user-generated content.**

### Hacker News
- Uses the official [Algolia Hacker News API](https://hn.algolia.com/api)
- Fetches stories and comments by month/year
- Extracts text content and timestamps only
- Rate-limited and cached server-side

### Reddit
- Uses bundled datasets stored in `/public/raw/` (no live scraping)
- Datasets can be prepared from public Reddit JSON feeds
- All data is aggregate and anonymous
- Falls back to seed data if no bundled dataset available

### Know Your Meme Reference
- Curated CSV of meme phrases with first-known years
- Used for tooltips and era classification only
- Reference data only, not a data source

## Important: Data Privacy & Ethics

**This app does NOT:**
- Scrape or store user-generated content
- Collect personally identifiable information
- Track or profile individual users
- Require authentication or API keys
- Store or transmit private data

**This app DOES:**
- Use publicly available aggregate data only
- Cache API responses server-side to respect rate limits
- Provide citations and links to original sources
- Allow export of visualizations only (not raw data)

## Features

- Word frequency analysis across time periods
- Interactive word clouds
- Trend visualization with D3.js
- Month/year filtering
- Export visualizations as PNG
- Meme era classification

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- D3.js for visualizations
- D3-Cloud for word clouds
- Tailwind CSS for styling
- date-fns for date handling

## Getting Started

```bash
npm install
npm run dev
```

For GitHub Pages deployments, the app is exported statically via `npm run export` so the `out/` folder can be published. The included workflow (`.github/workflows/deploy.yml`) runs this automatically on every push to `main`.

Open [http://localhost:3000](http://localhost:3000)

## Data Privacy

This tool is designed for research and education purposes only. All data sources are:
- Publicly available
- Anonymized and aggregated
- Used in compliance with platform terms of service
- Cachable and does not require real-time scraping

## License

MIT


