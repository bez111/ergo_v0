"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { GuidesFilters } from "@/components/guides/guides-filters"
import { GuideCard } from "@/components/guides/guide-card"
import { guidesData, categories } from "@/lib/guides-data"

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const filteredGuides = useMemo(() => {
    return guidesData.filter((guide) => {
      const matchesSearch =
        searchQuery === "" ||
        guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "" || guide.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("")
  }

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
              Ergo Guides
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Master the Ergo ecosystem with comprehensive guides, from wallet setup to advanced smart contract development.
            </p>
          </motion.div>

          {/* Filters & Search */}
          <GuidesFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Guides Grid */}
          <section className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-8"
            >
              {selectedCategory
                ? `${categories.find((cat) => cat.id === selectedCategory)?.name} Guides`
                : "All Guides"}
              <span className="text-white/60 text-lg ml-3">({filteredGuides.length})</span>
            </motion.h2>

            {filteredGuides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGuides.map((guide, index) => (
                  <div key={guide.id}>
                    <GuideCard guide={guide} index={index} />
                  </div>
                ))}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No guides found</h3>
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
        </div>
      </div>
    </div>
  )
} 