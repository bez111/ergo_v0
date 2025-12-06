"use client"

/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { ArrowRight, Play, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 border border-primary/10 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Real-World Use Cases
            <span className="block text-4xl md:text-5xl text-primary mt-2">on Ergo</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Explore the real problems solved by Ergo's technology and discover where innovation meets impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <span>Browse Use Cases</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>What is Ergo?</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-gray-700 text-gray-400 font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              <span>See All Projects</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
