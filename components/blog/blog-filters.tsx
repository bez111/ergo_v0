"use client"

import { motion } from "framer-motion"
import { Search, X, Filter } from "lucide-react"
import { categories } from "@/lib/blog-data"
import { useState } from "react"

interface BlogFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  activeFilters: string[]
  clearFilters: () => void
}

export function BlogFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  activeFilters,
  clearFilters,
}: BlogFiltersProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <section className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6"
      >
        {/* Search Bar */}
        <div className="relative">
          <motion.div
            animate={{
              scale: isSearchFocused ? 1.02 : 1,
              boxShadow: isSearchFocused ? "0 0 30px rgba(255, 136, 0, 0.3)" : "0 0 0px rgba(255, 136, 0, 0)",
            }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, authors, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20 focus:border-orange-400/50 focus:outline-none transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Filter className="w-4 h-4" />
            <span>Categories:</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory("")}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              selectedCategory === ""
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
          >
            All
          </motion.button>

          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              <span>{category.name}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-3 pt-2 border-t border-white/10"
          >
            <span className="text-white/70 text-sm">Active filters:</span>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="px-3 py-1 rounded-lg bg-orange-500/20 text-orange-300 text-sm border border-orange-500/30"
                >
                  {filter}
                </span>
              ))}
            </div>
            <button
              onClick={clearFilters}
              className="text-red-400 hover:text-red-300 text-sm underline transition-colors"
            >
              Clear all
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
