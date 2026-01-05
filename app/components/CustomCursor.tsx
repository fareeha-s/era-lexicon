'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    let cursorDot: HTMLDivElement | null = null
    let cursorOutline: HTMLDivElement | null = null

    const createCursors = () => {
      // Remove default cursor
      document.body.style.cursor = 'none'
      
      // Create dot
      cursorDot = document.createElement('div')
      cursorDot.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: white;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        mix-blend-mode: difference;
        transition: transform 0.15s ease;
      `
      document.body.appendChild(cursorDot)

      // Create outline
      cursorOutline = document.createElement('div')
      cursorOutline.style.cssText = `
        position: fixed;
        width: 30px;
        height: 30px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 99998;
        transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
      `
      document.body.appendChild(cursorOutline)
    }

    const moveCursor = (e: MouseEvent) => {
      if (cursorDot) {
        cursorDot.style.left = `${e.clientX - 3}px`
        cursorDot.style.top = `${e.clientY - 3}px`
      }
      
      if (cursorOutline) {
        cursorOutline.style.left = `${e.clientX - 15}px`
        cursorOutline.style.top = `${e.clientY - 15}px`
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Expand on interactive elements
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.tagName === 'INPUT' ||
          target.classList.contains('floating-word')) {
        if (cursorOutline) {
          cursorOutline.style.width = '50px'
          cursorOutline.style.height = '50px'
          cursorOutline.style.left = `${parseInt(cursorOutline.style.left) - 10}px`
          cursorOutline.style.top = `${parseInt(cursorOutline.style.top) - 10}px`
          cursorOutline.style.borderColor = 'rgba(255, 255, 255, 0.6)'
        }
        if (cursorDot) {
          cursorDot.style.transform = 'scale(1.5)'
        }
      }
    }

    const handleMouseOut = () => {
      if (cursorOutline) {
        cursorOutline.style.width = '30px'
        cursorOutline.style.height = '30px'
        cursorOutline.style.borderColor = 'rgba(255, 255, 255, 0.3)'
      }
      if (cursorDot) {
        cursorDot.style.transform = 'scale(1)'
      }
    }

    createCursors()
    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      if (cursorDot) document.body.removeChild(cursorDot)
      if (cursorOutline) document.body.removeChild(cursorOutline)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return null
}


