"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Eye, Heart, ArrowRight } from "lucide-react"
import { Guide } from "@/lib/guides-data"

interface GuideCardProps {
  guide: Guide
  index: number
}

export function GuideCard({ guide, index }: GuideCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative bg-black/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300"
    >
      <Link href={`/use/guides/${guide.slug}`}>
        <div className="relative">
          <Image
            src={guide.image || "/api/placeholder/400/200"}
            alt={guide.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors leading-tight">
            {guide.title}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/60 text-xs">
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                <span>{guide.views.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-3 w-3" />
                <span>{guide.likes}</span>
              </div>
            </div>

            <motion.div 
              whileHover={{ x: 5 }} 
              className="flex items-center gap-1 text-orange-400 text-sm font-medium"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
} 