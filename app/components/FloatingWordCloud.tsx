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

export default function FloatingWordCloud({ words, media = [], onVideoSelect }: FloatingWordCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [wordPositions, setWordPositions] = useState<Array<{x: number, y: number, vx: number, vy: number}>>([])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Initialize word positions
  useEffect(() => {
    if (!containerRef.current || words.length === 0) return
    
    const container = containerRef.current.getBoundingClientRect()
    const positions = words.map(() => ({
      x: Math.random() * container.width,
      y: Math.random() * container.height,
      vx: 0,
      vy: 0
    }))
    setWordPositions(positions)
  }, [words.length])

  // Animate words with cursor repulsion
  useEffect(() => {
    if (wordPositions.length === 0 || !containerRef.current) return

    let animationFrame: number
    const animate = () => {
      setWordPositions(prev => {
        const container = containerRef.current?.getBoundingClientRect()
        if (!container) return prev

        return prev.map((pos) => {
          let { x, y, vx, vy } = pos

          // Calculate distance from mouse
          const dx = mousePos.x - x
          const dy = mousePos.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const repelRadius = 150

          // Apply repulsion force
          if (distance < repelRadius && distance > 0) {
            const force = (repelRadius - distance) / repelRadius
            vx -= (dx / distance) * force * 2
            vy -= (dy / distance) * force * 2
          }

          // Apply velocity
          x += vx
          y += vy

          // Damping
          vx *= 0.95
          vy *= 0.95

          // Bounce off walls
          if (x < 0) { x = 0; vx = Math.abs(vx) }
          if (x > container.width) { x = container.width; vx = -Math.abs(vx) }
          if (y < 0) { y = 0; vy = Math.abs(vy) }
          if (y > container.height) { y = container.height; vy = -Math.abs(vy) }

          // Gentle drift back to center
          const centerX = container.width / 2
          const centerY = container.height / 2
          vx += (centerX - x) * 0.0001
          vy += (centerY - y) * 0.0001

          return { x, y, vx, vy }
        })
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [wordPositions.length, mousePos])

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

  // Combine words and media for mixed display
  const allItems = [
    ...words.map((w, i) => ({ type: 'word' as const, word: w, index: i })),
    ...(media || []).slice(0, window.innerWidth < 768 ? 3 : 5).map((m: any, i: number) => ({ 
      type: 'media' as const, 
      media: m, 
      index: words.length + i 
    }))
  ]

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
        className="relative w-full h-full bg-black overflow-hidden"
      >
        {/* Ambient background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/[0.02] rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/[0.02] rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>
        
        {/* Floating words and media */}
        <div className="absolute inset-0 z-10">
          {allItems.map((item) => {
            const pos = wordPositions[item.index]
            if (!pos) return null

            if (item.type === 'word') {
              const baseFontSize = Math.max(18, Math.min(item.word.size * 0.9, 96))
              const mobileFontSize = Math.max(14, Math.min(item.word.size * 0.5, 56))
              
              return (
                <div
                  key={`word-${item.index}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'left 0.1s ease-out, top 0.1s ease-out',
                  }}
                >
                  <span
                    className="block font-light tracking-wide text-white/40 hover:text-white transition-colors duration-300 cursor-default select-none whitespace-nowrap"
                    style={{
                      fontSize: `clamp(${mobileFontSize}px, ${baseFontSize * 0.7}px, ${baseFontSize}px)`,
                      textShadow: '0 0 20px rgba(255,255,255,0)',
                    }}
                  >
                    {item.word.text}
                  </span>
                </div>
              )
            } else {
              // Media thumbnail
              const isMobile = window.innerWidth < 768
              const width = isMobile ? 80 : 120
              const height = isMobile ? 60 : 90

              return (
                <button
                  key={`media-${item.index}`}
                  className="absolute group rounded-md md:rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all hover:scale-105 active:scale-95 pointer-events-auto"
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'left 0.1s ease-out, top 0.1s ease-out',
                  }}
                  onClick={() => onVideoSelect?.(item.media.id)}
                  title={item.media.title}
                >
                  <img
                    src={`https://img.youtube.com/vi/${item.media.id}/mqdefault.jpg`}
                    alt={item.media.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-6 md:h-6 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

