"use client"

import { motion } from "framer-motion"
import { ArrowRight, Info } from "lucide-react"
import Link from "next/link"

export function InfoBlock() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Info className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-3">Use Cases vs Projects</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                <strong className="text-white">Use Cases</strong> = Problems solved.
                <strong className="text-white"> Projects</strong> = Tools and teams building solutions.
              </p>
              <p className="text-gray-400 mb-6">
                Each use case is powered by real projects — see which ones work best for your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ecosystem">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span className="font-medium">Learn more about the Ecosystem</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
