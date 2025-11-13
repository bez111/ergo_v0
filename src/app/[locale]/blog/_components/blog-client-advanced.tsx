// "use client"

// import { useEffect, useMemo, useState, useDeferredValue } from "react"
// import { useRouter, useSearchParams } from "next/navigation"
// import { BookOpen, FileText, Hash } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"
// import { BlogCard } from "./blog-card"
// import { BlogFiltersAdvanced } from "./blog-filters-advanced"
// import type { BlogPost } from "../_lib/blog-data"
// import { BlogCompactSkeleton } from "./blog-skeleton"
// import { SkeletonCard } from "@/components/ui/skeleton"
// import { Button } from "@/components/ui/button"

// interface BlogClientAdvancedProps {
//   posts: BlogPost[]
//   categories: { id: string; name: string }[]
//   page: number
//   pageSize: number
//   total: number
//   hasMore: boolean
//   children?: React.ReactNode
// }

// type SortKey = "latest" | "popular" | "trending" | "discussed"

// function BlogClientAdvanced({ 
//   posts, 
//   // categories, 
//   page, 
//   pageSize, 
//   total, 
//   hasMore, 
//   children 
// }: BlogClientAdvancedProps) {
//   const [hydrated, setHydrated] = useState(false)
//   const [loadedPosts, setLoadedPosts] = useState(posts)
//   const [loading, setLoading] = useState(false)
//   const [currentPage, setCurrentPage] = useState(page)
  
//   useEffect(() => { setHydrated(true) }, [])

//   const router = useRouter()
//   const params = useSearchParams()

//   // Advanced filter states
//   const [search, setSearch] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState<string>("all")
//   const [selectedSubcategory, setSelectedSubcategory] = useState<string | undefined>()
//   const [selectedTags, setSelectedTags] = useState<string[]>([])
//   const [selectedDifficulty, setSelectedDifficulty] = useState("all")
//   const [selectedDateRange, setSelectedDateRange] = useState("all")
//   const [sortBy, setSortBy] = useState<SortKey>("latest")

//   const deferredSearch = useDeferredValue(search)

//   // Initialize filters from URL on hydration
//   useEffect(() => {
//     if (!hydrated) return
//     const category = params.get("category") || "all"
//     const subcategory = params.get("subcategory") || undefined
//     const tagsParam = params.get("tags") || ""
//     const tags = tagsParam ? tagsParam.split(",").filter(Boolean) : []
//     const sort = (params.get("sort") as SortKey) || "latest"
//     const searchQuery = params.get("q") || ""
//     const difficulty = params.get("difficulty") || "all"
//     const dateRange = params.get("range") || "all"
    
//     setSelectedCategory(category)
//     setSelectedSubcategory(subcategory)
//     setSelectedTags(tags)
//     setSortBy(sort)
//     setSearch(searchQuery)
//     setSelectedDifficulty(difficulty)
//     setSelectedDateRange(dateRange)
//   }, [hydrated, params])

//   // Load more posts
//   const loadMore = async () => {
//     if (!hasMore || loading) return
    
//     setLoading(true)
    
//     try {
//       // Simulate loading delay
//       await new Promise(resolve => setTimeout(resolve, 1000))
      
//       // In real app, fetch from API
//       const nextPage = currentPage + 1
//       setCurrentPage(nextPage)
      
//       // Add skeleton posts (in real app, would be actual posts)
//       setLoadedPosts(prev => [...prev, ...posts.slice(0, pageSize)])
//     } catch (error) {
//       console.error("Failed to load more posts:", error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Filter and sort posts
//   const filteredPosts = useMemo(() => {
//     let filtered = [...loadedPosts]

//     // Search filter
//     if (deferredSearch) {
//       const searchLower = deferredSearch.toLowerCase()
//       filtered = filtered.filter(
//         (post) =>
//           post.title.toLowerCase().includes(searchLower) ||
//           post.excerpt.toLowerCase().includes(searchLower) ||
//           post.tags?.some(tag => tag.toLowerCase().includes(searchLower))
//       )
//     }

//     // Category filter
//     if (selectedCategory && selectedCategory !== "all") {
//       filtered = filtered.filter((post) => post.category === selectedCategory)
//     }

//     // Subcategory filter (if implemented)
//     if (selectedSubcategory) {
//       // filtered = filtered.filter((post) => post.subcategory === selectedSubcategory)
//     }

//     // Tags filter
//     if (selectedTags.length > 0) {
//       filtered = filtered.filter((post) =>
//         selectedTags.some(tag => post.tags?.includes(tag))
//       )
//     }

//     // Difficulty filter
//     if (selectedDifficulty !== "all") {
//       filtered = filtered.filter((post) => post.difficulty === selectedDifficulty)
//     }

//     // Date range filter
//     if (selectedDateRange !== "all") {
//       const now = new Date()
//       const ranges = {
//         today: 1,
//         week: 7,
//         month: 30,
//         quarter: 90,
//         year: 365
//       }
      
//       if (ranges[selectedDateRange as keyof typeof ranges]) {
//         const daysAgo = ranges[selectedDateRange as keyof typeof ranges]
//         const cutoffDate = new Date()
//         cutoffDate.setDate(now.getDate() - daysAgo)
        
//         filtered = filtered.filter((post) => new Date(post.date) >= cutoffDate)
//       }
//     }

//     // Sort
//     switch (sortBy) {
//       case "popular":
//         filtered.sort((a, b) => (b.views || 0) - (a.views || 0))
//         break
//       case "trending":
//         filtered.sort((a, b) => {
//           const scoreA = (a.views || 0) + (a.shares || 0) * 2
//           const scoreB = (b.views || 0) + (b.shares || 0) * 2
//           return scoreB - scoreA
//         })
//         break
//       case "discussed":
//         filtered.sort((a, b) => (b.shares || 0) - (a.shares || 0))
//         break
//       default: // latest
//         filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
//     }

//     return filtered
//   }, [loadedPosts, deferredSearch, selectedCategory, selectedSubcategory, selectedTags, selectedDifficulty, selectedDateRange, sortBy])

//   const updateUrl = (newParams: Record<string, string | null>) => {
//     if (!hydrated) return

//     const url = new URL(window.location.href)
    
//     Object.entries(newParams).forEach(([key, value]) => {
//       if (value) {
//         url.searchParams.set(key, value)
//       } else {
//         url.searchParams.delete(key)
//       }
//     })

//     router.push(url.pathname + url.search)
//   }

//   const handleSearch = (query: string) => {
//     setSearch(query)
//     updateUrl({ q: query || null })
//   }

//   const handleCategoryChange = (category: string, subcategory?: string) => {
//     setSelectedCategory(category)
//     setSelectedSubcategory(subcategory)
//     updateUrl({ 
//       category: category === "all" ? null : category,
//       subcategory: subcategory || null
//     })
//   }

//   const handleTagsChange = (tags: string[]) => {
//     setSelectedTags(tags)
//     updateUrl({ tags: tags.length > 0 ? tags.join(",") : null })
//   }

//   if (!hydrated) {
//     return <BlogCompactSkeleton />
//   }

//   const hasActiveFilters = search || selectedCategory !== "all" || selectedTags.length > 0 || 
//     selectedDifficulty !== "all" || selectedDateRange !== "all"

//   const hasMoreToShow = hasMore && currentPage * pageSize < total

//   return (
//     <>
//       {/* Advanced Filters */}
//       <BlogFiltersAdvanced
//         posts={posts}
//         searchQuery={search}
//         selectedCategory={selectedCategory}
//         selectedSubcategory={selectedSubcategory}
//         selectedTags={selectedTags}
//         selectedDifficulty={selectedDifficulty}
//         selectedDateRange={selectedDateRange}
//         sortBy={sortBy}
//         onSearchChange={handleSearch}
//         onCategoryChange={handleCategoryChange}
//         onTagsChange={handleTagsChange}
//         onDifficultyChange={(difficulty) => {
//           setSelectedDifficulty(difficulty)
//           updateUrl({ difficulty: difficulty === "all" ? null : difficulty })
//         }}
//         onDateRangeChange={(range) => {
//           setSelectedDateRange(range)
//           updateUrl({ range: range === "all" ? null : range })
//         }}
//         onSortChange={(sort) => {
//           setSortBy(sort as SortKey)
//           updateUrl({ sort: sort === "latest" ? null : sort })
//         }}
//       />

//       {/* Content Stats Bar */}
//       <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-neutral-800">
//         <div className="flex items-center gap-4 text-sm">
//           <div className="flex items-center gap-2">
//             <FileText className="w-4 h-4 text-orange-400" />
//             <span className="text-neutral-400">
//               <span className="font-bold text-white">{filteredPosts.length}</span> articles
//             </span>
//           </div>
//           {selectedTags.length > 0 && (
//             <div className="flex items-center gap-2">
//               <Hash className="w-4 h-4 text-purple-400" />
//               <span className="text-neutral-400">
//                 <span className="font-bold text-white">{selectedTags.length}</span> tags
//               </span>
//             </div>
//           )}
//         </div>
        
//         {/* View Mode Toggle (optional) */}
//         <div className="flex items-center gap-2">
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-neutral-400 hover:text-white"
//             onClick={() => {/* Toggle grid/list view */}}
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </Button>
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-neutral-400 hover:text-white"
//             onClick={() => {/* Toggle grid/list view */}}
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
//             </svg>
//           </Button>
//         </div>
//       </div>

//       {/* Results Section */}
//       <section aria-labelledby="blog-posts" className="relative">
//         {loading && filteredPosts.length === 0 ? (
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[...Array(6)].map((_, i) => (
//               <SkeletonCard key={`skeleton-${i}`} />
//             ))}
//           </div>
//         ) : filteredPosts.length > 0 ? (
//           <>
//             <h2 id="blog-posts" className="sr-only">
//               {hasActiveFilters
//                 ? search
//                   ? `Search Results for "${search}"`
//                   : selectedCategory !== "all"
//                   ? `${selectedCategory} Articles`
//                   : selectedTags.length > 0
//                   ? `Tagged Articles`
//                   : "Filtered Articles"
//                 : "Latest Articles"}
//             </h2>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`${selectedCategory}-${selectedTags.join(',')}-${sortBy}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
//               >
//                 {filteredPosts.map((post, index) => (
//                   <motion.div
//                     key={post.id}
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: index * 0.05 }}
//                   >
//                     <BlogCard post={post} />
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>

//             {/* Load More */}
//             {hasMoreToShow && (
//               <div className="mt-16 text-center">
//                 <Button
//                   onClick={loadMore}
//                   disabled={loading}
//                   variant="outline"
//                   size="lg"
//                   className="bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800"
//                 >
//                   {loading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                       </svg>
//                       Loading...
//                     </>
//                   ) : (
//                     `Load More (${total - filteredPosts.length} remaining)`
//                   )}
//                 </Button>
//               </div>
//             )}

//             {/* Loading skeleton for new posts */}
//             {loading && filteredPosts.length > 0 && (
//               <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                 {[...Array(3)].map((_, i) => (
//                   <SkeletonCard key={`loading-${i}`} />
//                 ))}
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="py-16 text-center">
//             <div className="mx-auto max-w-md">
//               <BookOpen className="mx-auto h-12 w-12 text-neutral-500 mb-4" />
//               <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
//               <p className="text-neutral-400 mb-6">
//                 {search
//                   ? `No results for "${search}". Try adjusting your filters.`
//                   : "No articles match your current filters."}
//               </p>
//               <Button
//                 onClick={() => {
//                   setSearch("")
//                   setSelectedCategory("all")
//                   setSelectedTags([])
//                   setSelectedDifficulty("all")
//                   setSelectedDateRange("all")
//                   router.push("/blog")
//                 }}
//                 variant="outline"
//                 className="bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800"
//               >
//                 Clear all filters
//               </Button>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* Newsletter Section - Removed */}

//       {/* Additional children (pagination etc) */}
//       {children}
//     </>
//   )
// }

// export default BlogClientAdvanced
