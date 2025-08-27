'use client'

import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'

interface ReadingProgressProps {
  readingTime: number
}

export function ReadingProgress({ readingTime }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = (scrollTop / docHeight) * 100
      setProgress(Math.min(scrollProgress, 100))
    }
    
    window.addEventListener('scroll', updateProgress)
    updateProgress()
    
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])
  
  return (
    <>
      {/* Fixed progress bar at top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-900">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Reading time indicator */}
      <div className="fixed top-20 right-4 z-40 hidden lg:block">
        <div className="bg-black/90 backdrop-blur-sm border border-orange-500/30 rounded-lg px-4 py-2">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-orange-400" />
            <span className="text-gray-300 font-mono">
              {readingTime} min read
            </span>
          </div>
          <div className="mt-2">
            <div className="text-xs text-gray-500 font-mono mb-1">
              Progress: {Math.round(progress)}%
            </div>
            <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange-500 transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 