'use client'

import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
// @ts-ignore
import d3Cloud from 'd3-cloud'
import { toPng } from 'html-to-image'

interface Word {
  text: string
  size: number
}

interface WordCloudProps {
  words: Word[]
  width?: number
  height?: number
}

export default function WordCloud({ words, width = 800, height = 600 }: WordCloudProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    if (!svgRef.current || words.length === 0) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const layout = d3Cloud()
      .size([width, height])
      .words(
        words.map((d) => ({
          text: d.text,
          size: d.size,
        }))
      )
      .padding(5)
      .rotate(() => (~~(Math.random() * 2) * 90))
      .font('Arial')
      .fontSize((d: any) => d.size)
      .on('end', draw)

    layout.start()

    function draw(words: any[]) {
      const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`)

      // Better color scheme for cultural significance
      const colors = [
        '#8b5cf6', // purple
        '#ec4899', // pink
        '#3b82f6', // blue
        '#f59e0b', // amber
        '#10b981', // green
        '#ef4444', // red
        '#06b6d4', // cyan
        '#f97316', // orange
        '#a855f7', // purple variant
        '#14b8a6', // teal
      ]

      g.selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-size', (d: any) => `${d.size}px`)
        .style('font-family', 'Arial, sans-serif')
        .style('font-weight', '600')
        .style('fill', (d: any, i: number) => colors[i % colors.length])
        .style('opacity', 0.85)
        .attr('text-anchor', 'middle')
        .attr('transform', (d: any) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .text((d: any) => d.text)
        .style('cursor', 'pointer')
        .on('mouseenter', function () {
          d3.select(this).style('opacity', 1).style('font-weight', '700')
        })
        .on('mouseleave', function () {
          d3.select(this).style('opacity', 0.85).style('font-weight', '600')
        })
    }
  }, [words, width, height])

  const handleDownload = async () => {
    if (!svgRef.current) return
    setIsGenerating(true)
    try {
      const dataUrl = await toPng(svgRef.current.parentElement as HTMLElement, {
        backgroundColor: 'white',
      })
      const link = document.createElement('a')
      link.download = 'wordcloud.png'
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
      <div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-lg">
        <p className="text-gray-500">No words to display. Add some data above.</p>
      </div>
    )
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Visual Map</h3>
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="px-4 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Generating...
            </span>
          ) : (
            '↓ Download PNG'
          )}
        </button>
      </div>
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
        <svg ref={svgRef} width={width} height={height} className="mx-auto"></svg>
      </div>
    </div>
  )
}

