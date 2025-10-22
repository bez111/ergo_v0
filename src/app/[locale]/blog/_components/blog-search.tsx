"use client"

import { useState, useEffect, useDeferredValue } from "react"
import { Search, X, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface BlogSearchProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  placeholder?: string
  className?: string
}

export function BlogSearch({ 
  searchQuery, 
  onSearchChange, 
  placeholder = "Search articles...",
  className = ""
}: BlogSearchProps) {
  const [localQuery, setLocalQuery] = useState(searchQuery)
  const deferredQuery = useDeferredValue(localQuery)

  // Sync with parent when deferred value changes
  useEffect(() => {
    onSearchChange(deferredQuery)
  }, [deferredQuery, onSearchChange])

  // Sync with external changes
  useEffect(() => {
    setLocalQuery(searchQuery)
  }, [searchQuery])

  const handleClear = () => {
    setLocalQuery("")
    onSearchChange("")
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <Input
          type="search"
          placeholder={placeholder}
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          className="pl-10 pr-10 h-12 bg-neutral-900/60 border-neutral-700 text-white placeholder:text-neutral-400 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-200"
          aria-label="Search blog articles"
        />
        {localQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-neutral-800 text-neutral-400 hover:text-white"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      {/* Search Results Count */}
      {deferredQuery && (
        <div className="mt-2 text-xs text-neutral-400">
          Searching for "{deferredQuery}"...
        </div>
      )}
    </div>
  )
}
