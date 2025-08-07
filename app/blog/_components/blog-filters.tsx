"use client"

import { motion } from "framer-motion"
import { Search, X, Filter } from "lucide-react"
import { categories } from "../_lib/blog-data"

interface BlogFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export function BlogFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: BlogFiltersProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="my-12"
    >
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
          <input 
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700/80 rounded-full py-3 pl-12 pr-10 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="flex-shrink-0 flex flex-wrap justify-center gap-2">
          {[{id: '', name: 'All'}, ...categories].map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedCategory === category.id 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
