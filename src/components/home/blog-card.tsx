"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
  post: {
    title: string
    date: string
    summary: string
    link: string
  }
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={post.link}
      className="group block bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-orange-500/30 hover:bg-neutral-800/50 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
      role="listitem"
    >
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-200">
        {post.title}
      </h3>
      <p className="text-neutral-400 text-sm mb-3 font-mono">{post.date}</p>
      <p className="text-neutral-300 mb-4 leading-relaxed">{post.summary}</p>
      <span className="inline-flex items-center text-orange-400 group-hover:translate-x-1 transition-transform duration-200 font-mono">
        Read more
        <ArrowRight className="ml-2 h-4 w-4" />
      </span>
    </Link>
  )
} 