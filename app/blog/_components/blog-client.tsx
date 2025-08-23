"use client"

import { useEffect, useMemo, useState, useDeferredValue } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { BookOpen } from "lucide-react"
import { BlogCard } from "./blog-card"
import type { BlogPost } from "../_lib/blog-data"
import { BlogFilters } from "./blog-filters"

interface BlogClientProps {
  posts: BlogPost[]
  categories: { id: string; name: string }[]
  page: number
  pageSize: number
  total: number
  hasMore: boolean
  children?: React.ReactNode
}

type SortKey = "newest" | "trending" | "readtime" | "popular"

export default function BlogClient({ posts, categories, page, pageSize, total, hasMore, children }: BlogClientProps) {
  const [hydrated, setHydrated] = useState(false)
  const [loadedPosts, setLoadedPosts] = useState(posts)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(page)
  
  useEffect(() => { setHydrated(true) }, [])

  // Hydration gate handled in render to preserve hook order
  const router = useRouter()
  const params = useSearchParams()

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTag, setSelectedTag] = useState<string>("all")
  const [sortBy, setSortBy] = useState<SortKey>("newest")

  const deferredSearch = useDeferredValue(search)

  // Initialize filters from URL on hydration
  useEffect(() => {
    if (!hydrated) return
    const category = params.get("category") || "all"
    const tag = params.get("tag") || "all"
    const sort = (params.get("sort") as SortKey) || "newest"
    const searchQuery = params.get("q") || ""
    
    setSelectedCategory(category)
    setSelectedTag(tag)
    setSortBy(sort)
    setSearch(searchQuery)
  }, [hydrated, params])

  // Load more posts
  const loadMore = async () => {
    if (loading || !hasMore) return
    
    setLoading(true)
    try {
      const nextPage = currentPage + 1
      const response = await fetch(`/api/blog?page=${nextPage}&pageSize=${pageSize}`)
      const data = await response.json()
      
      if (data.posts && data.posts.length > 0) {
        setLoadedPosts(prev => [...prev, ...data.posts])
        setCurrentPage(nextPage)
      }
    } catch (error) {
      console.error('Failed to load more posts:', error)
    } finally {
      setLoading(false)
    }
  }

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = loadedPosts

    // Search filter
    if (deferredSearch.trim()) {
      const query = deferredSearch.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Tag filter
    if (selectedTag !== "all") {
      filtered = filtered.filter((post) => post.tags?.includes(selectedTag))
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "trending":
          return (b.views || 0) - (a.views || 0)
        case "popular":
          return (b.likes || 0) - (a.likes || 0)
        case "readtime":
          return (a.readTime || 0) - (b.readTime || 0)
        case "newest":
        default:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      }
    })

    return filtered
  }, [loadedPosts, deferredSearch, selectedCategory, selectedTag, sortBy])

  const updateUrl = (newParams: Record<string, string | null>) => {
    if (!hydrated) return
    
    const url = new URL(window.location.href)
    
    Object.entries(newParams).forEach(([key, value]) => {
      if (value && value !== "all" && value !== "") {
        url.searchParams.set(key, value)
      } else {
        url.searchParams.delete(key)
      }
    })
    
    // Always remove page param when filtering
    if (Object.keys(newParams).some(key => key !== 'page')) {
      url.searchParams.delete('page')
    }
    
    router.push(url.pathname + url.search, { scroll: false })
  }

  const handleSearch = (value: string) => {
    setSearch(value)
    updateUrl({ q: value })
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    updateUrl({ category })
  }

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag)
    updateUrl({ tag })
  }

  const handleSortChange = (sort: SortKey) => {
    setSortBy(sort)
    updateUrl({ sort })
  }

  // Return children (SSR content) until hydrated, then show interactive list
  if (!hydrated) {
    return <>{children}</>
  }

  const hasMoreToShow = hasMore && currentPage * pageSize < total

  return (
    <>
      {/* Filters */}
      <BlogFilters
        searchQuery={search}
        setSearchQuery={handleSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
      />

      {/* Results Grid */}
      <section className="mt-4" aria-labelledby="blog-results">
        <h2 id="blog-results" className="sr-only">
          Blog posts results
        </h2>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-8">
            <BookOpen className="mx-auto h-12 w-12 text-neutral-400 mb-4" />
            <h3 className="text-xl font-medium text-neutral-200 mb-2">No posts found</h3>
            <p className="text-neutral-400">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">Latest Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Load More Button */}
      {hasMoreToShow && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 focus:from-orange-600 focus:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            aria-label="Load more blog posts"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </>
            ) : (
              <>
                <span>Load More Articles</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </>
  )
} 