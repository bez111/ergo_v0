"use client"

import { useEffect, useMemo, useState, useDeferredValue } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { BookOpen, TrendingUp, Clock, Users, X } from "lucide-react"
import { BlogCard } from "./blog-card"
import { NewsletterSignup } from "./newsletter-signup"
import { BlogFiltersClean } from "./blog-filters-clean"
import type { BlogPost } from "../_lib/blog-data"
import { BlogCompactSkeleton } from "./blog-skeleton"
import { SkeletonCard } from "@/components/ui/skeleton"

interface BlogClientStableProps {
  posts: BlogPost[]
  categories: { id: string; name: string }[]
  page: number
  pageSize: number
  total: number
  hasMore: boolean
  children?: React.ReactNode
}

type SortKey = "newest" | "trending" | "readtime" | "popular"

export default function BlogClientStable({ 
  posts, 
  categories, 
  page, 
  pageSize, 
  total, 
  hasMore, 
  children 
}: BlogClientStableProps) {
  const router = useRouter()
  const params = useSearchParams()
  
  // Initialize state from URL params to prevent hydration mismatch
  const [search, setSearch] = useState(() => params.get("q") || "")
  const [selectedCategory, setSelectedCategory] = useState(() => params.get("category") || "all")
  const [sortBy, setSortBy] = useState<SortKey>(() => (params.get("sort") as SortKey) || "newest")
  
  const [loadedPosts, setLoadedPosts] = useState(posts)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(page)
  const [mounted, setMounted] = useState(false)

  const deferredSearch = useDeferredValue(search)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Sync with URL changes
  useEffect(() => {
    if (!mounted) return
    
    const category = params.get("category") || "all"
    const sort = (params.get("sort") as SortKey) || "newest"
    const searchQuery = params.get("q") || ""
    
    if (category !== selectedCategory) setSelectedCategory(category)
    if (sort !== sortBy) setSortBy(sort)
    if (searchQuery !== search) setSearch(searchQuery)
  }, [params, mounted])

  // Load more posts
  const loadMore = async () => {
    if (loading || !hasMore) return
    
    setLoading(true)
    try {
      // Simulate API call - in real app this would be actual API
      await new Promise(resolve => setTimeout(resolve, 1000))
      const nextPage = currentPage + 1
      setCurrentPage(nextPage)
      // In real app: setLoadedPosts(prev => [...prev, ...newPosts])
    } catch (error) {
      console.error('Failed to load more posts:', error)
    } finally {
      setLoading(false)
    }
  }

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = [...loadedPosts]

    // Search filter
    if (deferredSearch.trim()) {
      const query = deferredSearch.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "trending":
          return (b.views || 0) - (a.views || 0)
        case "popular":
          return (b.shares || 0) - (a.shares || 0)
        case "readtime":
          return (a.readTime || 0) - (b.readTime || 0)
        case "newest":
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

    return filtered
  }, [loadedPosts, deferredSearch, selectedCategory, sortBy])

  const updateUrl = (newParams: Record<string, string | null>) => {
    if (!mounted) return
    
    const url = new URL(window.location.href)
    
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value)
      } else {
        url.searchParams.delete(key)
      }
    })

    // Remove default values to keep URLs clean
    if (url.searchParams.get('category') === 'all') {
      url.searchParams.delete('category')
    }
    if (url.searchParams.get('sort') === 'newest') {
      url.searchParams.delete('sort')
    }

    router.push(url.pathname + url.search, { scroll: false })
  }

  const handleSearch = (value: string) => {
    setSearch(value)
    updateUrl({ q: value || null })
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    updateUrl({ category: category === "all" ? null : category })
  }

  const handleSortChange = (sort: string) => {
    setSortBy(sort as SortKey)
    updateUrl({ sort: sort === "newest" ? null : sort })
  }

  const hasActiveFilters = search || selectedCategory !== "all"
  const hasMoreToShow = hasMore && currentPage * pageSize < total

  return (
    <>
      {/* Enhanced Filters */}
      <BlogFiltersClean
        posts={posts}
        searchQuery={search}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        onSearchChange={handleSearch}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />

      {/* Results Grid */}
      <section className="mt-4" aria-labelledby="blog-results">
        <h2 id="blog-results" className="sr-only">
          {search ? `Search Results for "${search}"` : 
           selectedCategory !== 'all' ? `${selectedCategory} Articles` :
           'Latest Articles'}
        </h2>
        
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <h3 className="text-3xl font-bold text-white">
              {search ? `Search Results` : 
               selectedCategory !== 'all' ? `${selectedCategory} Articles` :
               'Latest Articles'}
            </h3>
            <div className="text-sm text-neutral-400">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            </div>
          </div>

          {/* Clear filters */}
          {hasActiveFilters && (
            <div className="mb-6 flex items-center gap-2">
              <span className="text-sm text-neutral-400">Active filters:</span>
              {search && (
                <button
                  onClick={() => handleSearch("")}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-md hover:bg-orange-500/30 transition-colors"
                >
                  Search: "{search}"
                  <X className="w-3 h-3" />
                </button>
              )}
              {selectedCategory !== "all" && (
                <button
                  onClick={() => handleCategoryChange("all")}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-md hover:bg-blue-500/30 transition-colors"
                >
                  Category: {selectedCategory}
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          )}

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-300 mb-2">
                No articles found
              </h3>
              <p className="text-neutral-500 mb-4">
                {search 
                  ? `No articles match "${search}". Try different keywords.`
                  : `No articles in ${selectedCategory} category yet.`
                }
              </p>
              {hasActiveFilters && (
                <button
                  onClick={() => {
                    handleSearch("")
                    handleCategoryChange("all")
                  }}
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}

          {/* Load More */}
          {hasMoreToShow && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-white font-medium rounded-lg transition-colors"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-4 h-4" />
                    Load More Articles
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </section>
    </>
  )
}
