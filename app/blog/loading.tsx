"use client"

import { motion } from "framer-motion"
import { CodeLines } from "@/components/code-lines"

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/tech-pattern.png')] bg-no-repeat bg-cover opacity-5" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/resistance-texture.png')] bg-no-repeat bg-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-red-900/10" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <CodeLines />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header Skeleton */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
            <div className="h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl mb-4 animate-pulse" />
            <div className="h-6 bg-white/10 rounded-xl max-w-2xl mx-auto animate-pulse" />
          </motion.div>

          {/* Hero Section Skeleton */}
          <section className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-1 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl animate-pulse" />
            <div className="w-full lg:w-80 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-white/10 rounded-xl animate-pulse" />
              ))}
            </div>
          </section>

          {/* Filters Skeleton */}
          <section className="mb-10">
            <div className="h-16 bg-white/10 rounded-2xl mb-6 animate-pulse" />
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-24 bg-orange-500/20 rounded-xl animate-pulse" />
              ))}
            </div>
          </section>

          {/* Stats Skeleton */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-white/10 rounded-2xl animate-pulse" />
            ))}
          </section>

          {/* Articles Grid Skeleton */}
          <section className="mb-16">
            <div className="h-8 bg-white/10 rounded-xl mb-8 max-w-xs animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white/5 rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-orange-500/20" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-white/10 rounded" />
                    <div className="h-4 bg-white/10 rounded w-3/4" />
                    <div className="h-4 bg-white/10 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Skeleton */}
          <div className="h-48 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  )
}
