import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BlogCard } from "./blog-card"
import { blogPosts } from "@/app/blog/_lib/blog-data"

export function BlogSection() {
  const posts = blogPosts.slice(0, 3).map(p => ({
    title: p.title,
    date: p.publishedAt,
    summary: p.description,
    link: `/blog/${p.slug}`,
  }))

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-neutral-700">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-orange-400">LATEST</span> FROM THE ERGO BLOG
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-lg hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-200 group"
              aria-label="View all blog posts"
            >
              View All Posts
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 