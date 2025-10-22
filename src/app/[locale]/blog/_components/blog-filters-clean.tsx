"use client"

import React, { useMemo } from "react"
import { 
  Search, 
  X, 
  ChevronDown,
  BookOpen,
  Coins,
  Code2,
  Cog,
  Network,
  BarChart3,
  Pickaxe,
  Clock,
  Flame,
  TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { BlogPost } from "../_lib/blog-data"

// Clean categories like Solana with Lucide icons
const categories = [
  { id: 'all', name: 'ALL', icon: 'BookOpen', color: 'orange' },
  { id: 'defi', name: 'DEFI', icon: 'Coins', color: 'yellow' },
  { id: 'development', name: 'DEVELOPER', icon: 'Code2', color: 'green' },
  { id: 'technology', name: 'TECHNOLOGY', icon: 'Cog', color: 'blue' },
  { id: 'ecosystem', name: 'ECOSYSTEM', icon: 'Network', color: 'indigo' },
  { id: 'research', name: 'REPORTS', icon: 'BarChart3', color: 'purple' },
  { id: 'mining', name: 'MINING', icon: 'Pickaxe', color: 'yellow' }
]

const sortOptions = [
  { id: 'latest', name: 'Latest First', icon: 'Clock' },
  { id: 'popular', name: 'Most Popular', icon: 'Flame' },
  { id: 'trending', name: 'Trending', icon: 'TrendingUp' }
]

interface BlogFiltersCleanProps {
  posts: BlogPost[]
  searchQuery: string
  selectedCategory: string
  sortBy: string
  onSearchChange: (query: string) => void
  onCategoryChange: (category: string) => void
  onSortChange: (sort: string) => void
}

export function BlogFiltersClean({
  posts,
  searchQuery,
  selectedCategory,
  sortBy,
  onSearchChange,
  onCategoryChange,
  onSortChange
}: BlogFiltersCleanProps) {
  // Get icon component by name
  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, React.ComponentType<any>> = {
      BookOpen,
      Coins,
      Code2,
      Cog,
      Network,
      BarChart3,
      Pickaxe,
      Clock,
      Flame,
      TrendingUp
    }
    return iconMap[iconName] || BookOpen
  }

  // Count posts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: posts.length }
    posts.forEach(post => {
      const cat = post.category.toLowerCase()
      counts[cat] = (counts[cat] || 0) + 1
    })
    return counts
  }, [posts])

  return (
    <div className="space-y-6">
      {/* Search + Sort Row */}
      <div className="flex gap-3">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input
            type="text"
            placeholder="Search articles, tutorials, reports..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onSearchChange("")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 text-neutral-400 hover:bg-neutral-800 hover:text-white rounded-lg"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Sort Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="gap-2 bg-neutral-900 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white min-w-[180px]"
            >
              <span className="flex items-center gap-2">
                {(() => {
                  const SortIcon = getIconComponent(sortOptions.find(s => s.id === sortBy)?.icon || 'Clock')
                  return <SortIcon className="w-4 h-4" />
                })()}
                {sortOptions.find(s => s.id === sortBy)?.name}
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-neutral-900 border-neutral-700">
            {sortOptions.map((option) => {
              const OptionIcon = getIconComponent(option.icon)
              return (
                <DropdownMenuItem
                  key={option.id}
                  onClick={() => onSortChange(option.id)}
                  className={`cursor-pointer ${
                    sortBy === option.id 
                      ? 'bg-orange-500/20 text-orange-400' 
                      : 'hover:bg-neutral-800 focus:bg-neutral-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <OptionIcon className="w-4 h-4" />
                    {option.name}
                  </span>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Categories - Horizontal Scroll like Solana */}
      <div className="relative">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const isActive = selectedCategory === category.id
            const postCount = categoryCounts[category.id] || 0
            const CategoryIcon = getIconComponent(category.icon)

            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  min-w-fit whitespace-nowrap transition-all duration-300 flex items-center gap-2
                  ${isActive 
                    ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600' 
                    : 'bg-neutral-900/50 text-neutral-300 border-neutral-700 hover:bg-neutral-800/60 hover:text-white'
                  }
                `}
              >
                <CategoryIcon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                {postCount > 0 && (
                  <Badge 
                    variant="secondary" 
                    className={`ml-1 ${
                      isActive 
                        ? 'bg-orange-600 text-white border-orange-700' 
                        : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                    }`}
                  >
                    {postCount}
                  </Badge>
                )}
              </Button>
            )
          })}
        </div>

        {/* SEE MORE + Button */}
        <div className="absolute right-0 top-0 bg-gradient-to-l from-black to-transparent pl-8 pointer-events-none">
          <span className="text-neutral-500 text-sm font-medium pointer-events-auto">
            SEE MORE +
          </span>
        </div>
      </div>

      {/* Active Search Filter Display */}
      {searchQuery && (
        <div className="flex items-center gap-2 text-sm">
          <span className="text-neutral-500">Search results for:</span>
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
            "{searchQuery}"
            <X 
              className="ml-1 h-3 w-3 cursor-pointer hover:text-orange-300" 
              onClick={() => onSearchChange("")}
            />
          </Badge>
        </div>
      )}
    </div>
  )
}

// Add scrollbar hide styles
if (typeof window !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `
  if (!document.head.querySelector('style[data-scrollbar-hide]')) {
    style.setAttribute('data-scrollbar-hide', 'true')
    document.head.appendChild(style)
  }
}
