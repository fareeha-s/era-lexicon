'use client'

import { useRef, useState, useEffect } from 'react'
import { toPng } from 'html-to-image'

interface Word {
  text: string
  size: number
}

interface FloatingWordCloudProps {
  words: Word[]
  media?: any[]
  onVideoSelect?: (id: string) => void
}

// Video thumbnail that checks if available
function VideoThumbnail({ item, onSelect }: { item: any, onSelect?: (id: string) => void }) {
  const [isAvailable, setIsAvailable] = useState(true)
  
  useEffect(() => {
    // Check if thumbnail exists (indicates video is available)
    const img = new Image()
    img.onload = () => {
      // YouTube returns a default image for unavailable videos that's 120x90
      // Real thumbnails are larger
      if (img.width === 120 && img.height === 90) {
        setIsAvailable(false)
      }
    }
    img.onerror = () => setIsAvailable(false)
    img.src = `https://img.youtube.com/vi/${item.id}/mqdefault.jpg`
  }, [item.id])

  if (!isAvailable) return null

  return (
    <button
      className="group relative w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:scale-105 flex-shrink-0"
      onClick={() => onSelect?.(item.id)}
      title={item.title}
    >
      <img
        src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
        alt={item.title}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white transition-all" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    </button>
  )
}

export default function FloatingWordCloud({ words, media = [], onVideoSelect }: FloatingWordCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    if (!containerRef.current) return
    setIsGenerating(true)
    try {
      const dataUrl = await toPng(containerRef.current, {
        backgroundColor: '#000000',
        pixelRatio: 2,
      })
      const link = document.createElement('a')
      link.download = 'eralexicon.png'
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Error generating image:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  if (words.length === 0) {
    return null
  }

  // Sort words by size
  const sortedWords = [...words].sort((a, b) => b.size - a.size)

  return (
    <div className="relative w-full h-full">
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className="absolute top-2 right-2 md:top-4 md:right-4 z-20 px-2 py-1 md:px-3 md:py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white text-xs font-medium rounded-full backdrop-blur-xl transition-all duration-300"
      >
        {isGenerating ? 'Saving...' : '↓'}
      </button>
      
      <div
        ref={containerRef}
        className="relative w-full h-full bg-black"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/[0.02] rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/[0.02] rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>
        
        {/* Words and Media interspersed */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 md:gap-5 p-4 md:p-8 h-full content-center">
          {sortedWords.map((word, index) => {
            const baseFontSize = Math.max(16, Math.min(word.size * 0.8, 72))
            
            // Insert a video after every 3-4 words
            const mediaIndex = Math.floor(index / 4)
            const shouldInsertMedia = index > 0 && index % 4 === 0 && media[mediaIndex]
            const mediaItem = media[mediaIndex]
            
            return (
              <>
                {shouldInsertMedia && mediaItem && (
                  <VideoThumbnail 
                    key={`media-${mediaIndex}`}
                    item={mediaItem} 
                    onSelect={onVideoSelect} 
                  />
                )}
                <span
                  key={`word-${index}`}
                  className="floating-word font-light tracking-wide text-white/50 hover:text-white transition-all duration-300 cursor-default select-none"
                  style={{
                    fontSize: `${baseFontSize}px`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {word.text}
                </span>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}
