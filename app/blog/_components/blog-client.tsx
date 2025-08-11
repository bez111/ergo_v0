"use client"

import { useEffect, useMemo, useState, useDeferredValue } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { BookOpen, TrendingUp, Clock, Users, X } from "lucide-react"
import { BlogCard } from "./blog-card"
import { NewsletterSignup } from "./newsletter-signup"
import type { BlogPost } from "../_lib/blog-data"
import { BlogFilters } from "./blog-filters"
import { HexagonalGrid, FloatingParticles, MathematicalPattern } from "@/components/ui-kit/signature-effects"

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
  useEffect(() => { setHydrated(true) }, [])

  // Hydration gate handled in render to preserve hook order
  const router = useRouter()
  const params = useSearchParams()

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedTag, setSelectedTag] = useState("")
  const [sortBy, setSortBy] = useState<SortKey>("newest")
  const [effectsReady, setEffectsReady] = useState(false)

  useEffect(() => {
    setEffectsReady(true)
  }, [])

  // Init from URL
  useEffect(() => {
    const q = params.get("q") || ""
    const cat = params.get("cat") || ""
    const tag = params.get("tag") || ""
    const s = (params.get("sort") as SortKey) || "newest"
    setSearchQuery(q)
    setSelectedCategory(cat)
    setSelectedTag(tag)
    setSortBy(s)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sync URL on changes (do not introduce page=1)
  useEffect(() => {
    const url = new URL(window.location.href)
    const q = searchQuery.trim()
    const cat = selectedCategory
    const tag = selectedTag
    const s = sortBy
    if (q) url.searchParams.set("q", q); else url.searchParams.delete("q")
    if (cat) url.searchParams.set("cat", cat); else url.searchParams.delete("cat")
    if (tag) url.searchParams.set("tag", tag); else url.searchParams.delete("tag")
    if (s && s !== "newest") url.searchParams.set("sort", s); else url.searchParams.delete("sort")
    // Do not add or modify the page param here; preserve whatever is present
    router.replace(url.pathname + (url.search ? `?${url.searchParams.toString()}` : ""), { scroll: false })
  }, [searchQuery, selectedCategory, selectedTag, sortBy, router])

  const deferredQuery = useDeferredValue(searchQuery.trim().toLowerCase())
  const isFiltering = deferredQuery !== searchQuery.trim().toLowerCase()

  const filteredPosts = useMemo(() => {
    const sorted = [...posts]
    switch (sortBy) {
      case "trending":
        sorted.sort((a, b) => Number(b.trending) - Number(a.trending))
        break
      case "readtime":
        sorted.sort((a, b) => a.readTime - b.readTime)
        break
      case "newest":
      default:
        sorted.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    }

    return sorted.filter((post) => {
      const q = deferredQuery
      const matchesSearch = !q
        ? true
        : [post.title, post.description, post.author.name, ...post.tags]
            .filter(Boolean)
            .map((s) => s.toLowerCase())
            .some((s) => s.includes(q))

      const matchesCategory = !selectedCategory || post.category === selectedCategory
      const matchesTag = !selectedTag || post.tags.includes(selectedTag)
      return matchesSearch && matchesCategory && matchesTag
    })
  }, [posts, deferredQuery, selectedCategory, selectedTag, sortBy])

  const activeFilters = useMemo(() => {
    const chips: { key: string; label: string; clear: () => void }[] = []
    if (searchQuery)
      chips.push({ key: "q", label: `Search: "${searchQuery}"`, clear: () => setSearchQuery("") })
    if (selectedCategory) {
      const cat = categories.find((c) => c.id === selectedCategory)
      chips.push({ key: "cat", label: `Category: ${cat?.name || selectedCategory}`, clear: () => setSelectedCategory("") })
    }
    if (selectedTag)
      chips.push({ key: "tag", label: `Tag: ${selectedTag}`, clear: () => setSelectedTag("") })
    if (sortBy !== "newest")
      chips.push({ key: "sort", label: `Sort: ${sortBy}`, clear: () => setSortBy("newest") })
    return chips
  }, [searchQuery, selectedCategory, selectedTag, sortBy, categories])

  const clearAll = () => {
    setSearchQuery("")
    setSelectedCategory("")
    setSelectedTag("")
    setSortBy("newest")
  }

  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const startIndex = (page - 1) * pageSize

  const goToPage = (nextPage: number) => {
    const url = new URL(window.location.href)
    if (nextPage <= 1) {
      url.searchParams.delete("page")
    } else {
      url.searchParams.set("page", String(nextPage))
    }
    router.replace(url.pathname + (url.searchParams.toString() ? `?${url.searchParams.toString()}` : ""))
  }

  return (
    <>
      {/* Background Effects */}
      {effectsReady && (
        <div className="pointer-events-none" aria-hidden role="presentation">
          <HexagonalGrid className="opacity-[0.02]" />
          <FloatingParticles count={15} className="opacity-80" />
          <MathematicalPattern className="opacity-[0.03]" />
        </div>
      )}

      {/* Filters */}
      <BlogFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Removed header toolbar (title, count, sort) */}

      {/* Articles Grid as semantic list */}
      <section aria-labelledby="articles">
        <h2 id="articles" className="sr-only">Articles</h2>
        {filteredPosts.length > 0 ? (
          <ol start={startIndex + 1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" itemScope itemType="https://schema.org/ItemList" aria-busy={isFiltering ? "true" : "false"}>
            {filteredPosts.map((post, i) => (
              <li key={post.id} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content={(startIndex + i + 1).toString()} />
                <BlogCard post={post} />
              </li>
            ))}
          </ol>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-white/70 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={clearAll}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Pagination controls */}
      <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-4">
        <button
          disabled={page <= 1}
          onClick={() => goToPage(page - 1)}
          className="px-4 py-2 rounded-lg border border-neutral-700 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-neutral-400">Page {page} of {totalPages}</span>
        <button
          disabled={!hasMore}
          onClick={() => goToPage(page + 1)}
          className="px-4 py-2 rounded-lg border border-neutral-700 disabled:opacity-50"
        >
          Next
        </button>
      </nav>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  )
} 