"use client"

import React, { useMemo, useEffect } from "react"
import {
  BookOpen,
  Cog,
  Code2,
  Coins,
  Network,
  Eye,
  Brain,
  Search,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { BlogPost } from "../_lib/blog-data"

// Категории в нужном порядке: All → Technology → Developer → DeFi → Ecosystem → Vision → Philosophy
const categories = [
  { id: 'all', name: 'All', icon: BookOpen, color: 'orange' },
  { id: 'Technology', name: 'Technology', icon: Cog, color: 'blue' },
  { id: 'Developer', name: 'Developer', icon: Code2, color: 'green' },
  { id: 'DeFi', name: 'DeFi', icon: Coins, color: 'yellow' },
  { id: 'Ecosystem', name: 'Ecosystem', icon: Network, color: 'indigo' },
  { id: 'Vision', name: 'Vision', icon: Eye, color: 'orange' },
  { id: 'Philosophy', name: 'Philosophy', icon: Brain, color: 'purple' }
]

const sortOptions = [
  { id: 'newest', name: 'Newest' },
  { id: 'popular', name: 'Popular' },
  { id: 'length', name: 'Length' }
]

interface BlogFiltersNewProps {
  posts: BlogPost[]
  searchQuery: string
  selectedCategory: string
  sortBy: string
  onSearchChange: (query: string) => void
  onCategoryChange: (category: string) => void
  onSortChange: (sort: string) => void
}

export function BlogFiltersNew({
  posts,
  searchQuery,
  selectedCategory,
  sortBy,
  onSearchChange,
  onCategoryChange,
  onSortChange
}: BlogFiltersNewProps) {
  // const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // setMounted(true)
    
    // Hotkey: "/" для фокуса на поиск
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement
        const isInputFocused = activeElement?.tagName === 'INPUT' || activeElement?.tagName === 'TEXTAREA'
        
        if (!isInputFocused) {
          e.preventDefault()
          const searchInput = document.getElementById('blog-search')
          searchInput?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Count posts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: posts.length }
    posts.forEach(post => {
      const cat = post.category
      counts[cat] = (counts[cat] || 0) + 1
    })
    return counts
  }, [posts])


  // const activeCategory = categories.find(cat => cat.id === selectedCategory)
  // const activeCategoryCount = categoryCounts[selectedCategory] || 0

  return (
    <nav
      className="sticky top-14 z-30"
      aria-label="Blog filters"
      role="tablist"
    >
      <div className="flex items-center gap-3 py-2">
          {/* Scrollable filter pills */}
          <div className="flex-1 overflow-x-auto scrollbar-none snap-x snap-mandatory">
            <ul className="flex items-center gap-2 min-w-max" role="none">
              {categories.map((category) => {
                const isActive = selectedCategory === category.id
                const postCount = categoryCounts[category.id] || 0
                const IconComponent = category.icon

                return (
                  <li key={category.id} className="snap-start" role="none">
                    <button
                      className={cn(
                        "h-9 px-3 rounded-xl border text-sm inline-flex items-center gap-2 transition-all duration-200",
                        isActive
                          ? "bg-orange-500 text-black border-orange-500 shadow-sm"
                          : "bg-black text-white/90 border-white/10 hover:border-orange-400/40 hover:bg-black/80"
                      )}
                      aria-pressed={isActive}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => onCategoryChange(category.id)}
                      title={`Filter by ${category.name}${postCount > 0 ? ` (${postCount} posts)` : ''}`}
                    >
                      <IconComponent className={cn("h-4 w-4", !isActive && "opacity-80")} />
                      {category.name}
                      {isActive && postCount > 0 && (
                        <span className="ml-1 rounded-full bg-black/20 px-1.5 text-xs font-medium">
                          {postCount}
                        </span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Right controls - Sort and Search */}
          <div className="ml-auto hidden sm:flex items-center gap-2">
            {/* Sort dropdown */}
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="h-9 rounded-xl bg-black border border-white/10 text-sm text-white px-3 focus:border-orange-400/40 focus:outline-none transition-colors"
              aria-label="Sort posts"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id} className="bg-black text-white">
                  {option.name}
                </option>
              ))}
            </select>

            {/* Enhanced Search with expansion */}
            <form role="search" className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70 pointer-events-none" />
              <input
                id="blog-search"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-9 w-44 focus:w-72 transition-all duration-300 rounded-xl bg-black border border-white/10 pl-9 pr-8 text-sm text-white placeholder-white/60 focus:border-orange-400/40 focus:bg-black/90 focus:outline-none"
                aria-label="Search blog posts"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    onSearchChange('')
                    e.currentTarget.blur()
                  }
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </form>
          </div>
          {/* Mobile controls - compact icons */}
          <div className="sm:hidden flex items-center gap-2">
            {/* Mobile search icon - expands to overlay */}
            <button
              className="h-9 w-9 rounded-xl bg-black border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"
              onClick={() => {
                const searchInput = document.getElementById('blog-search-mobile')
                searchInput?.focus()
              }}
              aria-label="Open search"
            >
              <Search className="h-4 w-4 text-white/70" />
            </button>
            
            {/* Hidden mobile search input */}
            <input
              id="blog-search-mobile"
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="hidden"
              onFocus={(e) => {
                // Simple mobile search - just show the input
                e.target.classList.remove('hidden')
                e.target.classList.add('absolute', 'top-0', 'left-0', 'right-0', 'z-50', 'w-full', 'h-12', 'bg-black', 'border-b', 'border-white/20', 'px-4')
              }}
              onBlur={(e) => {
                if (!searchQuery) {
                  e.target.classList.add('hidden')
                  e.target.classList.remove('absolute', 'top-0', 'left-0', 'right-0', 'z-50', 'w-full', 'h-12', 'bg-black', 'border-b', 'border-white/20', 'px-4')
                }
              }}
            />

            {/* Mobile sort */}
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="h-9 rounded-xl bg-white/5 border border-white/10 text-sm text-white px-2 focus:border-orange-400/40 focus:outline-none"
              aria-label="Sort posts"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id} className="bg-black text-white">
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
    </nav>
  )
}
