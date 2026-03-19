"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search, HelpCircle, Users, Shield, Code, Zap, Cpu, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

// Icon mapping for categories
const categoryIcons = {
  basics: HelpCircle,
  technology: Cpu,
  gettingStarted: Zap,
  ecosystem: Users,
  community: Users,
} as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function FAQClientLocalized() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [expanded, setExpanded] = useState<string | null>(null)

  const t = useTranslations('faq')

  // Build FAQ data from translations
  const faqData = useMemo(() => {
    const categories = ['basics', 'technology', 'gettingStarted', 'ecosystem', 'community'] as const
    const faqs: Array<{
      id: string
      category: string
      categoryKey: string
      icon: LucideIcon
      q: string
      a: string
    }> = []

    categories.forEach(categoryKey => {
      const categoryQuestions = t.raw(`questions.${categoryKey}`)
      if (categoryQuestions && typeof categoryQuestions === 'object') {
        Object.entries(categoryQuestions as Record<string, Record<string, string>>).forEach(([questionKey, questionData]) => {
          if (questionData && typeof questionData === 'object' && questionData.q && questionData.a) {
            faqs.push({
              id: `${categoryKey}.${questionKey}`,
              category: t(`categories.${categoryKey}`),
              categoryKey,
              icon: categoryIcons[categoryKey] || HelpCircle,
              q: questionData.q,
              a: questionData.a.replace(/\\n/g, '\n'), // Handle newlines
            })
          }
        })
      }
    })

    return faqs
  }, [t])

  // Get available categories
  const categories = useMemo(() => {
    const categoryKeys = ['all', 'basics', 'technology', 'gettingStarted', 'ecosystem', 'community'] as const
    return categoryKeys.map(key => ({
      key,
      label: t(`categories.${key}`)
    }))
  }, [t])

  const filteredFaqs = useMemo(() => {
    return faqData.filter(faq => {
      const categoryMatch = activeCategory === "all" || faq.categoryKey === activeCategory
      const searchMatch = 
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [searchTerm, activeCategory, faqData])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white pb-4">
            {t('title')}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Search and Filters */}
        <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm mb-12 sticky top-4 z-20">
          <CardContent className="p-6">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-12 w-full bg-neutral-800 border-neutral-600 h-12 text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map(category => (
                <Button
                  key={category.key}
                  variant={activeCategory === category.key ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.key)}
                  className={activeCategory === category.key 
                    ? "bg-orange-500 hover:bg-orange-600 text-black font-mono transition-all duration-200" 
                    : "border-neutral-500 text-neutral-400 hover:bg-neutral-500/10 font-mono transition-all duration-200"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* FAQ List */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <motion.div key={faq.id} variants={itemVariants}>
                <Card className="bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 transition-all duration-300">
                  <button
                    onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
                    className="w-full p-6 flex justify-between items-start text-left group"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-6 h-6 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                        <faq.icon className="w-3 h-3 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <span className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">
                          {faq.q}
                        </span>
                        <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                          {faq.category}
                        </div>
                      </div>
                    </div>
                    <motion.div 
                      animate={{ rotate: expanded === faq.id ? 180 : 0 }}
                      className="ml-4 mt-1"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expanded === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="ml-9 pt-2 border-t border-neutral-700">
                            <p className="text-gray-300 leading-relaxed mt-4 whitespace-pre-line">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border-neutral-700">
                <CardContent className="text-center py-12">
                  <p className="text-gray-400 text-lg">{t('noResults')}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
} 