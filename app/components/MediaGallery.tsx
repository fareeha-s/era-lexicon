'use client'

import { MediaItem } from '../data/media'

interface MediaGalleryProps {
  media: MediaItem[]
  selectedVideo: string | null
  onClose: () => void
}

export default function MediaGallery({ media, selectedVideo, onClose }: MediaGalleryProps) {
  if (!selectedVideo) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/60 hover:text-white text-3xl md:text-4xl font-light w-10 h-10 flex items-center justify-center"
        onClick={onClose}
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
  )
}


