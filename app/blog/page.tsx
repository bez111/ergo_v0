"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import { BlogHero } from "./_components/blog-hero"
import { BlogFilters } from "./_components/blog-filters"
import { BlogCard } from "./_components/blog-card"
import { NewsletterSignup } from "./_components/newsletter-signup"
import { blogPosts, categories } from "./_lib/blog-data"
import { 
  HexagonalGrid, 
  FloatingParticles, 
  MathematicalPattern,
  WatermarkHex
} from "@/components/ui-kit/signature-effects"
import { BookOpen, TrendingUp, Clock, Users } from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [hasMounted, setHasMounted] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0]
  const trendingPosts = blogPosts.filter((post) => post.trending)

  // Prevent hydration mismatch and add initialization delay
  useEffect(() => {
    setHasMounted(true)
    const timer = setTimeout(() => {
      setIsInitialized(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "" || post.category === selectedCategory

      return matchesSearch && matchesCategory && !post.featured
    })
  }, [searchQuery, selectedCategory])

  const activeFilters = useMemo(() => {
    const filters = []
    if (searchQuery) filters.push(`Search: "${searchQuery}"`)
    if (selectedCategory) {
      const category = categories.find((cat) => cat.id === selectedCategory)
      if (category) filters.push(`Category: ${category.name}`)
    }
    return filters
  }, [searchQuery, selectedCategory])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("")
  }

  // Prevent hydration issues by rendering simplified version on server
  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="text-brand-primary-400">Ergo</span> Blog
            </h1>
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects - UI Kit style */}
      {isInitialized && (
        <>
          <HexagonalGrid className="opacity-[0.02]" />
          <FloatingParticles count={15} className="opacity-80" />
          <MathematicalPattern className="opacity-[0.03]" />
        </>
      )}
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Hero Section with watermark */}
          <div className="relative">
            <WatermarkHex className="opacity-[0.01] pointer-events-none" />
            <BlogHero featuredPost={featuredPost} trendingPosts={trendingPosts} />
          </div>

          {/* Filters & Search */}
          <BlogFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Articles Grid */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInitialized ? 1 : 0, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-brand-primary-400" />
                  <h2 className="text-2xl font-bold text-white">
                    {selectedCategory
                      ? `${categories.find((cat) => cat.id === selectedCategory)?.name} Articles`
                      : "Latest Articles"}
                  </h2>
                  <span className="px-3 py-1 bg-brand-primary-500/20 text-brand-primary-400 rounded-full text-sm font-semibold">
                    {filteredPosts.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-white/70 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </section>

          {/* Newsletter Signup */}
          <NewsletterSignup />
        </div>
      </div>
    </div>
  )
}
