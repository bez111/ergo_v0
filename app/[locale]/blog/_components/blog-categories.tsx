"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Folder, FolderOpen } from "lucide-react"
import type { BlogPost } from "../_lib/blog-data"
import { categoryDefinitions } from "../_lib/blog-data"

interface BlogCategoriesProps {
  posts: BlogPost[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  className?: string
}

export function BlogCategories({ 
  posts, 
  selectedCategory, 
  onCategoryChange, 
  className = "" 
}: BlogCategoriesProps) {
  
  // Get post count for each category
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return posts.length
    return posts.filter(post => post.category?.toLowerCase() === categoryId).length
  }

  // Get available categories (only show categories that have posts)
  const availableCategories = [
    { id: 'all', name: 'All Posts', icon: '📚', color: 'neutral' },
    ...categoryDefinitions.filter(cat => getCategoryCount(cat.id) > 0)
  ]

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-2">
        <Folder className="w-4 h-4 text-neutral-400" />
        <h3 className="text-sm font-medium text-white">Categories</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {availableCategories.map((category) => {
          const isSelected = selectedCategory === category.id
          const count = getCategoryCount(category.id)
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95
                ${isSelected 
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30 shadow-sm' 
                  : 'bg-neutral-800/60 text-neutral-300 border border-neutral-700 hover:bg-neutral-700/60 hover:text-white hover:border-neutral-600'
                }
              `}
              aria-label={`Filter by ${category.name} (${count} posts)`}
              aria-pressed={isSelected}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.name}</span>
              <Badge 
                variant="secondary" 
                className={`text-xs ${
                  isSelected 
                    ? 'bg-orange-400/20 text-orange-300 border-orange-400/30' 
                    : 'bg-neutral-700/60 text-neutral-400 border-neutral-600'
                }`}
              >
                {count}
              </Badge>
            </button>
          )
        })}
      </div>

      {/* Active Category Info */}
      {selectedCategory !== 'all' && (
        <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-orange-400" />
            <div className="flex-1">
              <div className="text-sm font-medium text-orange-300">
                {availableCategories.find(c => c.id === selectedCategory)?.name}
              </div>
              <div className="text-xs text-orange-400/80">
                {categoryDefinitions.find(c => c.id === selectedCategory)?.description}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCategoryChange('all')}
              className="text-xs text-orange-400 hover:text-orange-300 h-6 px-2"
            >
              Clear
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
