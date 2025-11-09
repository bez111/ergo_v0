"use client"

import { motion } from "framer-motion"
import { CompactSocialShare } from "@/components/social/social-share"

interface ShareCTAProps {
  title: string
  url: string
  description: string
  subtitle?: string
}

export function ShareCTA({ title, url, description, subtitle = "Help spread the word about Ergo's innovative blockchain technology" }: ShareCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mb-16"
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-black border border-orange-500/30 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-4">
            Share this post
          </h3>
          <p className="text-gray-300 text-sm mb-6">
            {subtitle}
          </p>
          <CompactSocialShare
            title={title}
            url={url}
            description={description}
            className="justify-center"
          />
        </div>
      </div>
    </motion.div>
  )
}
