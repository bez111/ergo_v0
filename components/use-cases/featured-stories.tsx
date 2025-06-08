"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { useCases } from "@/lib/use-cases-data"

export function FeaturedStories() {
  const featuredUseCases = useCases.filter((uc) => uc.featured && uc.story)

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real-World Impact Stories</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how real users leverage Ergo to solve actual problems in their daily lives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredUseCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={useCase.story?.visual || "/placeholder.svg"}
                  alt={useCase.story?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30"
                  >
                    <Play className="w-6 h-6 text-white ml-1" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{useCase.story?.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{useCase.story?.description}</p>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="font-medium">Read the Story</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
