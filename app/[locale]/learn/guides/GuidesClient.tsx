"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { GuidesFilters } from "@/components/guides/guides-filters"
import { GuideCard } from "@/components/guides/guide-card"
import { guidesData, categories } from "@/lib/guides-data"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import { useTranslations } from "next-intl"
import { HiddenBreadcrumbs } from "@/components/seo/hidden-breadcrumbs"

export default function GuidesClient() {
  const t = useTranslations('use.guides')
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hidden Breadcrumbs for SEO */}
      <HiddenBreadcrumbs 
        items={[{ name: 'Learn', href: '/learn' }]} 
        currentPage="Guides" 
      />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-28 pb-10 px-4"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t('title')}</h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-3xl mx-auto">
                {t('subtitle')}
              </p>
            </div>
          </motion.section>

          {/* Filters & Search */}
          <GuidesFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Header Card (like blog) */}
          <div className="mb-8 bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-orange-400" />
              <h2 className="text-2xl font-bold text-white">
                {selectedCategory
                  ? t('filters.categoryGuides', { category: categories.find((cat) => cat.id === selectedCategory)?.name })
                  : t('filters.allGuides')}
              </h2>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">
                {filteredGuides.length}
              </span>
            </div>
          </div>

          {/* Guides Grid */}
          <section className="mb-16">
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
                <h3 className="text-2xl font-bold text-white mb-2">{t('filters.noGuides.title')}</h3>
                <p className="text-white/70 mb-6">{t('filters.noGuides.description')}</p>
                <Button onClick={clearFilters} variant="outline" className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60">
                  {t('filters.noGuides.clearFilters')}
                </Button>
              </motion.div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
} 