'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import FloatingWordCloud from './components/FloatingWordCloud'
import MediaGallery from './components/MediaGallery'
import { format, subMonths } from 'date-fns'
import { ERA_MEDIA } from './data/media'
import { ERA_SONGS } from './data/songs'
import { getDataForMonth } from './utils/eraData'

interface WordData {
  text: string
  count: number
}

interface ApiResponse {
  year: string
  month: string
  words: WordData[]
  source?: string
  note?: string
}

interface MemeData {
  phrase: string
  year: number
  category: string
}

export default function Home() {
  const [timeIndex, setTimeIndex] = useState(0) // 0 = most recent
  const [data, setData] = useState<WordData[]>([])
  const [loading, setLoading] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [memeData, setMemeData] = useState<MemeData[]>([])
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [showSources, setShowSources] = useState(false)

  // Generate timeline: current month back to Jan 2007
  const timeline = useMemo(() => {
    const dates = []
    let date = new Date()
    const endDate = new Date(2007, 0) // January 2007
    
    while (date >= endDate) {
      dates.push(new Date(date))
      date = subMonths(date, 1)
    }
    
    return dates
  }, [])

  // Load meme reference data (relative path so it works on GitHub Pages)
  useEffect(() => {
    fetch('data/memes.csv')
      .then((res) => res.text())
      .then((csv) => {
        const lines = csv.split('\n').slice(1)
        const memes = lines
          .filter((line) => line.trim())
          .map((line) => {
            const [phrase, yearStr, category] = line.split(',')
            return { phrase, year: parseInt(yearStr), category }
          })
        setMemeData(memes)
      })
      .catch((err) => console.error('Error loading meme data:', err))
  }, [])

  // Fetch data when slider changes
  const fetchData = useCallback(async (index: number) => {
    const date = timeline[index]
    if (!date) return

    setLoading(true)
    setCurrentDate(date)

    try {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      
      console.log(`Loading data for ${year}-${month}`)
      const result = getDataForMonth(year, month)
      
      console.log(`Loaded ${result.words?.length || 0} words`)
      setData(result.words || [])
    } catch (err) {
      console.error('Error loading data:', err)
      setData([])
    } finally {
      setLoading(false)
    }
  }, [timeline])

  // Auto-fetch on mount
  useEffect(() => {
    fetchData(0)
  }, [fetchData])

  // Handle slider change with debounce for smoother experience
  const [isDragging, setIsDragging] = useState(false)
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value)
    setTimeIndex(index)
    
    // Update the date immediately for visual feedback
    const date = timeline[index]
    if (date) {
      setCurrentDate(date)
    }
  }
  
  const handleSliderMouseUp = () => {
    setIsDragging(false)
    fetchData(timeIndex)
  }
  
  const handleSliderMouseDown = () => {
    setIsDragging(true)
  }

  const wordCloudWords = useMemo(
    () => {
      if (data.length === 0) return []
      
      // Find min and max counts for normalization
      const counts = data.map(w => w.count)
      const minCount = Math.min(...counts)
      const maxCount = Math.max(...counts)
      const range = maxCount - minCount || 1
      
      return data.map((word) => {
        // Normalize count to 0-1 range
        const normalized = (word.count - minCount) / range
        // Use exponential scaling for more dramatic size differences
        const scale = Math.pow(normalized, 0.6) // 0.6 makes it less extreme
        // Map to size range: 14px (small) to 96px (large)
        const size = 14 + (scale * 82)
        
        return {
          text: word.text,
          size: Math.round(size),
        }
      })
    },
    [data]
  )

  const getMemeCount = useMemo(() => {
    return data.filter(word => 
      memeData.some(meme => word.text.toLowerCase().includes(meme.phrase.toLowerCase()))
    ).length
  }, [data, memeData])

  // Get media for current era
  const currentMedia = useMemo(() => {
    const year = currentDate.getFullYear()
    let era = '2025-2026'
    if (year < 2025) era = '2022-2024'
    if (year < 2022) era = '2019-2021'
    if (year < 2019) era = '2016-2018'
    if (year < 2016) era = '2013-2015'
    if (year < 2013) era = '2010-2012'
    if (year < 2010) era = '2007-2009'
    return ERA_MEDIA[era] || []
  }, [currentDate])

  // Get songs for current era
  const currentSongs = useMemo(() => {
    const year = currentDate.getFullYear()
    let era = '2025-2026'
    if (year < 2025) era = '2022-2024'
    if (year < 2022) era = '2019-2021'
    if (year < 2019) era = '2016-2018'
    if (year < 2016) era = '2013-2015'
    if (year < 2013) era = '2010-2012'
    if (year < 2010) era = '2007-2009'
    return ERA_SONGS[era] || []
  }, [currentDate])

  return (
    <main className="relative min-h-screen bg-black flex flex-col">
      {/* Header with Slider - Top */}
      <div className="sticky top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 md:pt-6 pb-3 md:pb-4 bg-black/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          {/* Title and Stats */}
          <div className="flex items-start justify-between mb-4 md:mb-6 gap-4">
            <div className="space-y-2">
              <h1 className="text-lg md:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em] text-white/90">
                ERALEXICON
              </h1>
              <p className="text-xs md:text-sm text-white/60 max-w-2xl">
                words that defined each month. scroll through internet culture by era.
              </p>
              <button
                className="text-[11px] md:text-xs text-white/60 underline hover:text-white transition"
                onClick={() => setShowSources((v) => !v)}
              >
                {showSources ? 'hide sources' : 'data sources'}
              </button>
            </div>
            
            <div className="text-right">
              <p className="text-xs md:text-sm text-white/70 tracking-wide font-light mb-1">
                {format(currentDate, 'MMMM yyyy')}
              </p>
              {data.length > 0 && (
                <p className="text-[10px] md:text-xs text-white/30 font-light">
                  {data.length} terms {getMemeCount > 0 && `• ${getMemeCount} marked`}
                </p>
              )}
            </div>
          </div>

          {showSources && (
            <div className="mb-4 md:mb-6 text-[11px] md:text-xs text-white/70 bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 space-y-1">
              <p className="font-semibold text-white/80">sources:</p>
              <p>• reddit top posts by era</p>
              <p>• know your meme</p>
              <p>• youtube viral videos</p>
            </div>
          )}

          {/* Timeline Slider */}
          <div className="max-w-5xl mx-auto">
            <div className="relative mb-2 md:mb-3">
              {/* Slider track glow */}
              <div className="absolute inset-0 bg-white/5 rounded-full blur-xl" />
              
              {/* Slider */}
              <input
                type="range"
                min="0"
                max={timeline.length - 1}
                value={timeIndex}
                onChange={handleSliderChange}
                onMouseUp={handleSliderMouseUp}
                onMouseDown={handleSliderMouseDown}
                onTouchEnd={handleSliderMouseUp}
                onTouchStart={handleSliderMouseDown}
                className="slider w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer relative z-10"
                style={{
                  background: `linear-gradient(to right, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.3) ${(timeIndex / (timeline.length - 1)) * 100}%, rgba(255,255,255,0.1) ${(timeIndex / (timeline.length - 1)) * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
            </div>
            
            {/* Year markers */}
            <div className="relative flex justify-between items-center px-0.5">
              {/* Show fewer years on mobile */}
              <div className="hidden md:flex w-full justify-between">
                {[2026, 2024, 2022, 2020, 2018, 2016, 2014, 2012, 2010, 2008].map((year) => (
                  <div key={year} className="flex flex-col items-center">
                    <div className="w-px h-2 bg-white/20 mb-1" />
                    <span className="text-[10px] text-white/30 font-light">{year}</span>
                  </div>
                ))}
              </div>
              <div className="flex md:hidden w-full justify-between">
                {[2026, 2022, 2018, 2014, 2010].map((year) => (
                  <div key={year} className="flex flex-col items-center">
                    <div className="w-px h-2 bg-white/20 mb-1" />
                    <span className="text-[10px] text-white/30 font-light">{year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Word Cloud - Takes remaining space */}
      <div className="flex-1 flex items-center justify-center py-8 md:py-12 relative min-h-[60vh]">
        {loading || isDragging ? (
          <div className="text-white/40 text-xs md:text-sm font-light tracking-wider animate-pulse">
            {isDragging ? 'Slide to explore...' : 'Loading...'}
          </div>
        ) : data.length > 0 ? (
          <>
            <FloatingWordCloud 
              words={wordCloudWords} 
              media={currentMedia}
              onVideoSelect={setSelectedVideo}
              key={`${currentDate.getFullYear()}-${currentDate.getMonth()}`} 
            />
            <MediaGallery media={currentMedia} selectedVideo={selectedVideo} onClose={() => setSelectedVideo(null)} />
            
            {/* Songs Display */}
            {currentSongs.length > 0 && (
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 max-w-[240px] md:max-w-[280px]">
                <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-3 md:p-4">
                  <p className="text-[10px] md:text-xs text-white/50 font-medium mb-2 tracking-wider">
                    ICONIC SONGS
                  </p>
                  <div className="space-y-2">
                    {currentSongs.slice(0, 4).map((song, index) => (
                      <a
                        key={index}
                        href={`https://open.spotify.com/track/${song.spotifyId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <div className="flex items-start gap-2 hover:bg-white/5 p-1.5 rounded transition-all">
                          <svg 
                            className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0 mt-0.5" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] md:text-xs text-white/80 group-hover:text-white font-medium truncate transition-colors">
                              {song.title}
                            </p>
                            <p className="text-[9px] md:text-[10px] text-white/40 truncate">
                              {song.artist}
                            </p>
                            {song.memeContext && (
                              <p className="text-[8px] md:text-[9px] text-white/30 italic truncate mt-0.5">
                                {song.memeContext}
                              </p>
                            )}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-white/40 text-xs md:text-sm font-light tracking-wider">
            No data available
          </div>
        )}
      </div>

      <style jsx>{`
        .slider {
          touch-action: none;
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          transition: all 0.2s ease;
        }

        @media (min-width: 768px) {
          .slider::-webkit-slider-thumb {
            width: 20px;
            height: 20px;
          }
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
        }

        .slider::-webkit-slider-thumb:active {
          transform: scale(1.5);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          transition: all 0.2s ease;
        }

        @media (min-width: 768px) {
          .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
          }
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
        }

        .slider::-moz-range-thumb:active {
          transform: scale(1.5);
        }
      `}</style>
    </main>
  )
}
