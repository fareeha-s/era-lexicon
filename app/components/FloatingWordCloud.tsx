'use client'

import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'

interface Word {
  text: string
  size: number
}

interface FloatingWordCloudProps {
  words: Word[]
}

export default function FloatingWordCloud({ words }: FloatingWordCloudProps) {
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

  // Sort words by size for better visual hierarchy
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
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/[0.02] rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/[0.02] rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>
        
        {/* Floating words */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 md:gap-6 p-4 md:p-8 h-full">
          {sortedWords.map((word, index) => {
            // Responsive font sizes
            const baseFontSize = Math.max(18, Math.min(word.size * 0.9, 96))
            const mobileFontSize = Math.max(14, Math.min(word.size * 0.5, 56))
            const delay = index * 0.05
            
            return (
              <div
                key={index}
                className="floating-word group cursor-default"
                style={{
                  animationDelay: `${delay}s`,
                }}
              >
                <span
                  className="block font-light tracking-wide text-white/40 hover:text-white transition-all duration-500 hover:scale-110"
                  style={{
                    fontSize: `clamp(${mobileFontSize}px, ${baseFontSize * 0.7}px, ${baseFontSize}px)`,
                    textShadow: '0 0 20px rgba(255,255,255,0)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 40px rgba(255,255,255,0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = '0 0 20px rgba(255,255,255,0)'
                  }}
                >
                  {word.text}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

