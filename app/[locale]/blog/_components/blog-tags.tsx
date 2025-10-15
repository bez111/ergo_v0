"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, Hash } from "lucide-react"
import type { BlogPost } from "../_lib/blog-data"

interface BlogTagsProps {
  posts: BlogPost[]
  selectedTags: string[]
  onTagsChange: (tags: string[]) => void
  className?: string
}

export function BlogTags({ posts, selectedTags, onTagsChange, className = "" }: BlogTagsProps) {
  const [showAll, setShowAll] = useState(false)

  // Extract all unique tags from posts
  const allTags = Array.from(
    new Set(
      posts.flatMap(post => post.tags || [])
    )
  ).sort()

  // Show top 8 tags by default, all when expanded
  const displayTags = showAll ? allTags : allTags.slice(0, 8)
  const hasMoreTags = allTags.length > 8

  const handleTagClick = (tag: string) => {
    const isSelected = selectedTags.includes(tag)
    if (isSelected) {
      onTagsChange(selectedTags.filter(t => t !== tag))
    } else {
      onTagsChange([...selectedTags, tag])
    }
  }

  const handleClearAll = () => {
    onTagsChange([])
  }

  // Get tag usage count
  const getTagCount = (tag: string) => {
    return posts.filter(post => post.tags?.includes(tag)).length
  }

  if (allTags.length === 0) {
    return null
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Hash className="w-4 h-4 text-neutral-400" />
          <h3 className="text-sm font-medium text-white">Filter by Tags</h3>
          {selectedTags.length > 0 && (
            <Badge variant="secondary" className="text-xs">
              {selectedTags.length} selected
            </Badge>
          )}
        </div>
        
        {selectedTags.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearAll}
            className="text-xs text-neutral-400 hover:text-white h-6 px-2"
          >
            Clear all
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {displayTags.map((tag) => {
          const isSelected = selectedTags.includes(tag)
          const count = getTagCount(tag)
          
          return (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`
                inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95
                ${isSelected 
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30 shadow-sm' 
                  : 'bg-neutral-800/60 text-neutral-300 border border-neutral-700 hover:bg-neutral-700/60 hover:text-white hover:border-neutral-600'
                }
              `}
              aria-label={`Filter by ${tag} tag (${count} posts)`}
              aria-pressed={isSelected}
            >
              <Hash className="w-3 h-3" />
              <span>{tag}</span>
              <span className={`text-xs ${isSelected ? 'text-orange-300' : 'text-neutral-500'}`}>
                {count}
              </span>
              {isSelected && (
                <X className="w-3 h-3 ml-1" />
              )}
            </button>
          )
        })}
        
        {hasMoreTags && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAll(!showAll)}
            className="px-3 py-1.5 h-auto text-xs text-neutral-400 hover:text-white border border-dashed border-neutral-600 hover:border-neutral-500 rounded-full"
          >
            {showAll ? 'Show less' : `+${allTags.length - 8} more`}
          </Button>
        )}
      </div>

      {/* Selected Tags Summary */}
      {selectedTags.length > 0 && (
        <div className="flex items-center gap-2 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
          <div className="flex items-center gap-1 text-xs text-orange-300">
            <Filter className="w-3 h-3" />
            <span>Filtering by:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {selectedTags.map(tag => (
              <Badge 
                key={tag}
                variant="secondary"
                className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/30"
              >
                {tag}
                <button
                  onClick={() => handleTagClick(tag)}
                  className="ml-1 hover:text-orange-300"
                  aria-label={`Remove ${tag} filter`}
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
