import React from "react"
import { useTranslations, useLocale } from "next-intl"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BlogCard } from "./blog-card"
import { blogPosts } from "@/app/[locale]/blog/_lib/blog-data"

export function BlogSection() {
  const t = useTranslations('blog')
  const locale = useLocale()

  const posts = blogPosts.slice(0, 3).map(p => ({
    title: p.title,
    date: p.date,
    summary: p.excerpt,
    link: `/blog/${p.slug}`,
  }))

  return (
    <section className="relative py-24 overflow-hidden" id="blog">
      {/* Semi-transparent overlay - same as GET STARTED WITH ERGO */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">LATEST</span> FROM THE ERGO BLOG
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest news, technical insights, and community updates from the Ergo ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-orange-500 text-white hover:bg-orange-600 font-mono uppercase tracking-wider border-2 border-orange-500 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              aria-label="View all blog posts"
            >
              <span>&gt;</span>
              <span>View All Posts</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 