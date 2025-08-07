"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { BlogHero } from "./_components/blog-hero"
import { BlogFilters } from "./_components/blog-filters"
import { BlogCard } from "./_components/blog-card"
import { NewsletterSignup } from "./_components/newsletter-signup"
import { blogPosts, categories } from "./_lib/blog-data"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0]
  const trendingPosts = blogPosts.filter((post) => post.trending)

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

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <BlogHero featuredPost={featuredPost} trendingPosts={trendingPosts} />

          {/* Filters & Search */}
          <BlogFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Articles Grid */}
          <section className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-8"
            >
              {selectedCategory
                ? `${categories.find((cat) => cat.id === selectedCategory)?.name} Articles`
                : "Latest Articles"}
              <span className="text-white/60 text-lg ml-3">({filteredPosts.length})</span>
            </motion.h2>

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
