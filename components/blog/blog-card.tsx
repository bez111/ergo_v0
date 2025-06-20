"use client"

import { motion } from "framer-motion"
import { Eye, Heart, Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"
import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.05, duration: 0.5 }
    },
  };

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="group h-full flex flex-col bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/60 transition-all duration-300 transform hover:-translate-y-1">
          {post.image && (
            <div className="relative aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          )}
          
          <div className="p-6 flex flex-col flex-grow">
            <div className="mb-3">
              <span className="text-orange-400 font-semibold uppercase tracking-wider text-xs">{post.category}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 flex-grow group-hover:text-orange-300 transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {post.description}
            </p>

            <div className="mt-auto pt-4 border-t border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {post.author.avatar && (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                )}
                <span className="text-sm text-gray-300">{post.author.name}</span>
              </div>
              <div className="text-sm text-gray-400 flex items-center gap-1">
                <span>{post.readTime} min read</span>
                <ArrowRight className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
