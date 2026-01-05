'use client'

import { useEffect, useRef, useState } from 'react'
import { toPng } from 'html-to-image'

interface Word {
  text: string
  size: number
}

interface ModernWordCloudProps {
  words: Word[]
}

export default function ModernWordCloud({ words }: ModernWordCloudProps) {
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
      link.download = 'eralexicon-wordcloud.png'
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Error generating image:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  if (words.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 border border-white/5 rounded-2xl bg-black/20">
        <p className="text-white/40">No words to display</p>
      </div>
    )
  }

  // Sort words by size for better layout
  const sortedWords = [...words].sort((a, b) => b.size - a.size)

  // Modern gradient colors
  const gradients = [
    'from-pink-500 to-rose-500',
    'from-purple-500 to-indigo-500',
    'from-blue-500 to-cyan-500',
    'from-violet-500 to-purple-500',
    'from-fuchsia-500 to-pink-500',
    'from-indigo-500 to-blue-500',
    'from-cyan-500 to-teal-500',
    'from-rose-500 to-pink-500',
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Visual Map</h3>
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="px-4 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Generating...
            </span>
          ) : (
            '↓ Download PNG'
          )}
        </button>
      </div>
      
      <div
        ref={containerRef}
        className="relative w-full min-h-[600px] bg-black border border-white/5 rounded-2xl p-8 overflow-hidden"
      >
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-blue-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Word layout - modern bento-style grid */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 p-8">
          {sortedWords.map((word, index) => {
            const gradient = gradients[index % gradients.length]
            const fontSize = Math.max(14, Math.min(word.size * 0.8, 72))
            const isLarge = fontSize > 40
            const isMedium = fontSize > 25 && fontSize <= 40
            
            return (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{
                  animationDelay: `${index * 0.02}s`,
                }}
              >
                <div
                  className={`
                    px-4 py-2 rounded-xl font-black tracking-tight
                    bg-gradient-to-r ${gradient}
                    bg-clip-text text-transparent
                    hover:scale-110 transition-transform duration-300 cursor-default
                    ${isLarge ? 'text-6xl' : isMedium ? 'text-4xl' : 'text-2xl'}
                  `}
                  style={{
                    fontSize: `${fontSize}px`,
                    lineHeight: '1.2',
                  }}
                >
                  {word.text}
                </div>
                
                {/* Glow effect on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-r ${gradient} blur-xl -z-10
                    transition-opacity duration-300
                  `}
                  style={{
                    filter: 'blur(20px)',
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


