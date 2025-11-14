"use client"

import { Eye } from 'lucide-react'
import { useViewTracker } from '@/hooks/useViewTracker'

interface ViewCounterProps {
  postId: string
  title: string
  className?: string
  showIcon?: boolean
}

export function ViewCounter({ 
  postId, 
  title, 
  className = "", 
  showIcon = true 
}: ViewCounterProps) {
  const { views, isLoading } = useViewTracker({ 
    postId, 
    title,
    onView: (id, count) => {
      console.log(`Post ${id} viewed, total: ${count}`)
    }
  })

  const formatViews = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`
    return count.toString()
  }

  if (isLoading) {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        {showIcon && <Eye className="w-4 h-4 text-gray-400" />}
        <span className="text-gray-400">...</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {showIcon && <Eye className="w-4 h-4 text-gray-400" />}
      <span className="text-gray-400">{formatViews(views)} views</span>
    </div>
  )
}
