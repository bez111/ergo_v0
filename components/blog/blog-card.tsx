"use client"

import { motion } from "framer-motion"
import { Eye, Heart, Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface BlogCardProps {
  post: BlogPost
  variant?: "default" | "compact" | "hero"
  index?: number
}

export function BlogCard({ post, variant = "default", index = 0 }: BlogCardProps) {
  const getCategoryGradient = (category: string) => {
    const gradients = {
      defi: "from-orange-500 to-red-500",
      tech: "from-orange-400 to-amber-500",
      guides: "from-amber-500 to-yellow-500",
      development: "from-red-500 to-orange-500",
      mining: "from-yellow-500 to-orange-500",
      news: "from-orange-600 to-red-600",
    }
    return gradients[category as keyof typeof gradients] || "from-orange-500 to-amber-500"
  }

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <Card
          className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-xl p-4 hover:border-orange-500/50 transition-all duration-300"
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="flex gap-4">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              )}
              <div className="flex-1">
                <span
                  className={`inline-block px-2 py-1 rounded-lg bg-gradient-to-r ${getCategoryGradient(post.category)} text-white text-xs font-medium mb-2`}
                >
                  {post.category.toUpperCase()}
                </span>
                <h3 className="text-white font-semibold text-sm leading-tight mb-2 group-hover:text-orange-300 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-white/60 text-xs">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -10 }}
    >
      <Card
        className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
      >
        <Link href={`/blog/${post.slug}`}>
          <div className="relative">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={192}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span
                className={`inline-block px-3 py-1 rounded-xl bg-gradient-to-r ${getCategoryGradient(post.category)} text-white text-sm font-medium backdrop-blur-md`}
              >
                {post.category.toUpperCase()}
              </span>
            </div>

            {/* Stats overlay */}
            <div className="absolute bottom-4 right-4 flex items-center gap-3">
              <div className="flex items-center gap-1 text-white/80 text-sm bg-black/30 backdrop-blur-md px-2 py-1 rounded-lg">
                <Eye className="w-3 h-3" />
                <span>{post.views.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1 text-white/80 text-sm bg-black/30 backdrop-blur-md px-2 py-1 rounded-lg">
                <Heart className="w-3 h-3" />
                <span>{post.likes}</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors leading-tight">
              {post.title}
            </h3>

            <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-2">{post.description}</p>

            <div className="flex items-center gap-4 mb-4">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border border-white/20"
                  loading="lazy"
                />
              )}
              <div>
                <div className="text-white text-sm font-medium">{post.author.name}</div>
                <div className="text-white/60 text-xs">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-white/60 text-xs">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime} min read</span>
                </div>
                <span>{post.publishedAt}</span>
              </div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-1 text-orange-400 text-sm font-medium">
                <span>Read more</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </Link>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Card>
    </motion.div>
  )
}
