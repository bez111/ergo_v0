"use client"

import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, SlidersHorizontal, X, Calendar, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BlogAdvancedCategories } from "./blog-advanced-categories"
import { BlogTags } from "./blog-tags"
import type { BlogPost } from "../_lib/blog-data"

interface BlogFiltersAdvancedProps {
  posts: BlogPost[]
  searchQuery: string
  selectedCategory: string
  selectedSubcategory?: string
  selectedTags: string[]
  selectedDifficulty?: string
  selectedDateRange?: string
  sortBy?: string
  onSearchChange: (query: string) => void
  onCategoryChange: (category: string, subcategory?: string) => void
  onTagsChange: (tags: string[]) => void
  onDifficultyChange?: (difficulty: string) => void
  onDateRangeChange?: (range: string) => void
  onSortChange?: (sort: string) => void
}

const dateRanges = [
  { id: 'all', name: 'All Time' },
  { id: 'today', name: 'Today' },
  { id: 'week', name: 'This Week' },
  { id: 'month', name: 'This Month' },
  { id: 'quarter', name: 'Last 3 Months' },
  { id: 'year', name: 'This Year' }
]

const sortOptions = [
  { id: 'latest', name: 'Latest First', icon: '🕐' },
  { id: 'popular', name: 'Most Popular', icon: '🔥' },
  { id: 'trending', name: 'Trending', icon: '📈' },
  { id: 'discussed', name: 'Most Discussed', icon: '💬' }
]

export function BlogFiltersAdvanced({
  posts,
  searchQuery,
  selectedCategory,
  selectedSubcategory,
  selectedTags,
  selectedDifficulty = 'all',
  selectedDateRange = 'all',
  sortBy = 'latest',
  onSearchChange,
  onCategoryChange,
  onTagsChange,
  onDifficultyChange,
  onDateRangeChange,
  onSortChange
}: BlogFiltersAdvancedProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0
    if (searchQuery) count++
    if (selectedCategory !== 'all') count++
    if (selectedSubcategory) count++
    if (selectedTags.length > 0) count += selectedTags.length
    if (selectedDifficulty && selectedDifficulty !== 'all') count++
    if (selectedDateRange && selectedDateRange !== 'all') count++
    return count
  }, [searchQuery, selectedCategory, selectedSubcategory, selectedTags, selectedDifficulty, selectedDateRange])

  const handleClearAll = () => {
    onSearchChange("")
    onCategoryChange("all")
    onTagsChange([])
    onDifficultyChange?.("all")
    onDateRangeChange?.("all")
  }

  return (
    <div className="space-y-6">
      {/* Search Bar with Advanced Filters Toggle */}
      <div className="flex gap-3">
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

        {/* Advanced Filters Button/Sheet */}
        <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              className="gap-2 bg-neutral-900 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <Badge className="bg-orange-500 text-white ml-1">{activeFilterCount}</Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md bg-black border-neutral-800">
            <SheetHeader>
              <SheetTitle className="text-white">Advanced Filters</SheetTitle>
              <SheetDescription className="text-neutral-400">
                Refine your search with advanced filtering options
              </SheetDescription>
            </SheetHeader>
            
            <div className="mt-6 space-y-6">
              {/* Date Range */}
              {onDateRangeChange && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    <span className="font-semibold">Date Range</span>
                  </div>
                  <Select value={selectedDateRange} onValueChange={onDateRangeChange}>
                    <SelectTrigger className="w-full bg-neutral-900 border-neutral-700 text-white">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-neutral-700">
                      {dateRanges.map((range) => (
                        <SelectItem 
                          key={range.id} 
                          value={range.id}
                          className="text-white hover:bg-neutral-800 focus:bg-neutral-800"
                        >
                          {range.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Difficulty Filter */}
              {onDifficultyChange && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <BarChart3 className="w-4 h-4 text-orange-400" />
                    <span className="font-semibold">Difficulty</span>
                  </div>
                  <div className="flex gap-2">
                    {['all', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <Badge
                        key={level}
                        variant={selectedDifficulty === level ? "default" : "outline"}
                        className={`
                          cursor-pointer transition-colors
                          ${selectedDifficulty === level
                            ? 'bg-orange-500 text-white hover:bg-orange-600'
                            : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/60'
                          }
                        `}
                        onClick={() => onDifficultyChange(level)}
                      >
                        {level === 'all' ? 'All Levels' : level}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Separator className="bg-neutral-800" />

              {/* Clear Filters */}
              {activeFilterCount > 0 && (
                <Button
                  variant="outline"
                  onClick={handleClearAll}
                  className="w-full bg-neutral-900 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>

        {/* Sort Dropdown */}
        {onSortChange && (
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-[180px] bg-neutral-900 border-neutral-700 text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 border-neutral-700">
              {sortOptions.map((option) => (
                <SelectItem 
                  key={option.id} 
                  value={option.id}
                  className="text-white hover:bg-neutral-800 focus:bg-neutral-800"
                >
                  <span className="flex items-center gap-2">
                    <span>{option.icon}</span>
                    {option.name}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      {/* Category Navigation (Always Visible) */}
      <BlogAdvancedCategories
        posts={posts}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        onCategoryChange={onCategoryChange}
      />

      {/* Active Filters Summary */}
      <AnimatePresence>
        {activeFilterCount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap items-center gap-2 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <span className="text-sm font-medium text-orange-300">Active Filters:</span>
              
              {searchQuery && (
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                  Search: "{searchQuery}"
                  <X 
                    className="ml-1 h-3 w-3 cursor-pointer hover:text-orange-300" 
                    onClick={() => onSearchChange("")}
                  />
                </Badge>
              )}
              
              {selectedCategory !== 'all' && (
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  {selectedCategory}
                  {selectedSubcategory && ` / ${selectedSubcategory}`}
                  <X 
                    className="ml-1 h-3 w-3 cursor-pointer hover:text-blue-300" 
                    onClick={() => onCategoryChange('all')}
                  />
                </Badge>
              )}
              
              {selectedTags.map((tag) => (
                <Badge key={tag} className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                  {tag}
                  <X 
                    className="ml-1 h-3 w-3 cursor-pointer hover:text-purple-300" 
                    onClick={() => onTagsChange(selectedTags.filter(t => t !== tag))}
                  />
                </Badge>
              ))}
              
              {selectedDifficulty && selectedDifficulty !== 'all' && (
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  {selectedDifficulty}
                  <X 
                    className="ml-1 h-3 w-3 cursor-pointer hover:text-green-300" 
                    onClick={() => onDifficultyChange?.('all')}
                  />
                </Badge>
              )}
              
              {selectedDateRange && selectedDateRange !== 'all' && (
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                  {dateRanges.find(r => r.id === selectedDateRange)?.name}
                  <X 
                    className="ml-1 h-3 w-3 cursor-pointer hover:text-cyan-300" 
                    onClick={() => onDateRangeChange?.('all')}
                  />
                </Badge>
              )}

              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearAll}
                className="ml-auto text-neutral-400 hover:text-white"
              >
                Clear All
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tags Section (Collapsible on Mobile) */}
      <Collapsible defaultOpen className="space-y-3">
        <CollapsibleTrigger className="flex items-center justify-between w-full group">
          <span className="text-sm font-semibold text-neutral-300">Popular Tags</span>
          <motion.div
            animate={{ rotate: isFiltersOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-neutral-500 group-hover:text-neutral-300"
          >
            ▼
          </motion.div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <BlogTags
            posts={posts}
            selectedTags={selectedTags}
            onTagsChange={onTagsChange}
          />
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
