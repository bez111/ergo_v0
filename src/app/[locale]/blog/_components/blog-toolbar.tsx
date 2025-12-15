"use client"

/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState, useDeferredValue } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "@/i18n/navigation"
import { Search, Filter, X } from "lucide-react"

interface BlogToolbarProps {
  categories: { id: string; name: string }[]
}

type SortKey = "newest" | "trending" | "readtime" | "popular"

export function BlogToolbar({ categories }: BlogToolbarProps) {
  const [hydrated, setHydrated] = useState(false)
  const router = useRouter()
  const params = useSearchParams()

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<SortKey>("newest")

  const deferredSearch = useDeferredValue(search)

  useEffect(() => { setHydrated(true) }, [])

  // Initialize from URL on hydration
  useEffect(() => {
    if (!hydrated) return
    const category = params.get("category") || "all"
    const sort = (params.get("sort") as SortKey) || "newest"
    const searchQuery = params.get("q") || ""
    
    setSelectedCategory(category)
    setSortBy(sort)
    setSearch(searchQuery)
  }, [hydrated, params])

  // Update URL when filters change
  useEffect(() => {
    if (!hydrated) return
    
    const newParams = new URLSearchParams()
    
    if (deferredSearch) newParams.set("q", deferredSearch)
    if (selectedCategory !== "all") newParams.set("category", selectedCategory)
    if (sortBy !== "newest") newParams.set("sort", sortBy)
    
    const newUrl = newParams.toString() 
      ? `/blog?${newParams.toString()}`
      : "/blog"
    
    router.push(newUrl, { scroll: false })
  }, [deferredSearch, selectedCategory, sortBy, router, hydrated])

  if (!hydrated) {
    return (
      <div className="mb-8 space-y-4">
        <div className="h-12 bg-neutral-800 rounded-lg animate-pulse" />
        <div className="flex gap-2">
          <div className="h-10 w-24 bg-neutral-800 rounded-lg animate-pulse" />
          <div className="h-10 w-32 bg-neutral-800 rounded-lg animate-pulse" />
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
        <input
          type="search"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-neutral-900/60 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        {/* Category Filter */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none bg-neutral-900/60 border border-neutral-700 rounded-lg px-4 py-2 pr-10 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4 pointer-events-none" />
        </div>

        {/* Sort Filter */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}
            className="appearance-none bg-neutral-900/60 border border-neutral-700 rounded-lg px-4 py-2 pr-10 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
          >
            <option value="newest">Newest</option>
            <option value="trending">Trending</option>
            <option value="popular">Popular</option>
            <option value="readtime">Quick Read</option>
          </select>
          <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4 pointer-events-none" />
        </div>
      </div>
    </div>
  )
} 