"use client"

import { useState, useMemo } from "react"
import { useCases } from "@/lib/use-cases-data"
import { HeroSection } from "@/components/use-cases/hero-section"
import { CategoryNavigation } from "@/components/use-cases/category-navigation"
import { UseCaseCard } from "@/components/use-cases/use-case-card"
import { HowItWorks } from "@/components/use-cases/how-it-works"
import { InfoBlock } from "@/components/use-cases/info-block"
import { FAQSection } from "@/components/use-cases/faq-section"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function UseCasesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredUseCases = useMemo(() => {
    if (selectedCategory === "all") return useCases
    return useCases.filter((uc) => uc.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-[0.02] bg-repeat" />

        {/* Radial gradients for depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-2xl" />

        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 136, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 136, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Category Navigation */}
        <CategoryNavigation selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        {/* Use Cases Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredUseCases.map((useCase, index) => (
                <UseCaseCard key={useCase.id} useCase={useCase} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* Info Block */}
        <InfoBlock />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA */}
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
                >
                  <span>Browse All Use Cases</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 justify-center"
                >
                  <span>See Ecosystem</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.button>

                <motion.button
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
