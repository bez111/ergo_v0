"use client"

import { useState, useMemo, useEffect } from "react" // Added useEffect
import { useCases } from "@/lib/use-cases-data"
import { HeroSection } from "@/components/use-cases/hero-section"
import { CategoryNavigation } from "@/components/use-cases/category-navigation"
import { UseCaseCard } from "@/components/use-cases/use-case-card"
import { HowItWorks } from "@/components/use-cases/how-it-works"
import { InfoBlock } from "@/components/use-cases/info-block"
import { FAQSection } from "@/components/use-cases/faq-section"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Loader2 } from "lucide-react" // Added Loader2

export default function UseCasesPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredUseCases = useMemo(() => {
    if (!useCases || !Array.isArray(useCases)) return []
    if (selectedCategory === "all") return useCases
    return useCases.filter((uc) => uc.category === selectedCategory)
  }, [selectedCategory, useCases])

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    ) // Or return null, or a basic skeleton
  }

  if (!useCases || !Array.isArray(useCases)) {
    return <div className="flex min-h-screen items-center justify-center bg-gray-950 text-white">Data error...</div>
  }

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <HeroSection />
        <CategoryNavigation selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredUseCases.map((useCase, index) => (
                <UseCaseCard key={useCase.id} useCase={useCase} index={index} />
              ))}
            </div>
          </div>
        </section>
        <HowItWorks />
        <InfoBlock />
        <FAQSection />
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Ready to explore real use cases?</h3>
              <p className="text-gray-400 mb-6 text-lg max-w-2xl mx-auto">
                Start your journey below and discover how Ergo can solve real-world problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
                >
                  <span>Browse All Use Cases</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 justify-center"
                >
                  <span>See Ecosystem</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 border border-gray-700 text-gray-400 font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
