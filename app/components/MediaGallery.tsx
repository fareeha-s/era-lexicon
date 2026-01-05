'use client'

import { useState, useEffect } from 'react'
import { MediaItem } from '../data/media'

interface MediaGalleryProps {
  media: MediaItem[]
}

export default function MediaGallery({ media }: MediaGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!media || media.length === 0) return null

  const itemsToShow = isMobile ? 3 : 5

  return (
    <>
      {/* Media thumbnails - responsive positioning and sizing */}
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 flex gap-2 md:gap-3 flex-wrap max-w-[calc(100vw-2rem)] md:max-w-none">
        {media.slice(0, itemsToShow).map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedVideo(item.id)}
            className="group relative w-16 h-12 md:w-24 md:h-16 rounded-md md:rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all hover:scale-105 active:scale-95"
            title={item.title}
          >
            <img
              src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
              alt={item.title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-4 h-4 md:w-6 md:h-6 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Video Modal - mobile optimized */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/60 hover:text-white text-3xl md:text-4xl font-light w-10 h-10 flex items-center justify-center"
            onClick={() => setSelectedVideo(null)}
          >
            ×
          </button>
          <div className="w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}


