"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, X } from "lucide-react"
import { categories } from "@/lib/guides-data"

interface GuidesFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export function GuidesFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: GuidesFiltersProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 space-y-6"
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
            placeholder="Search guides, topics, authors..."
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

      {/* Category Filter */}
      <div className="flex items-center gap-2">
        <span className="text-white/70 text-sm">Category:</span>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory("")}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedCategory === ""
                ? "bg-orange-500 text-white"
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
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-orange-500 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 