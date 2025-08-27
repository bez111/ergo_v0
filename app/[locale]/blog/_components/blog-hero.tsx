// Server Component - optimized for LCP
import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "../_lib/blog-data"
import { Calendar, Clock, User } from "lucide-react"

interface BlogHeroProps {
  featuredPost: BlogPost | null
}

export function BlogHero({ featuredPost }: BlogHeroProps) {
  if (!featuredPost) {
    return null
  }

  const post = featuredPost

  return (
    <article
      className="relative overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900/60 backdrop-blur-sm p-8 h-full min-h-[400px] flex flex-col justify-between hover:border-orange-500/30 transition-all duration-300 focus-within:border-orange-500/50 focus-within:ring-2 focus-within:ring-orange-400/20"
      itemScope
      itemType="https://schema.org/BlogPosting"
      aria-labelledby={`feat-${post.id}`}
      role="article"
    >
      {/* Badges */}
      <div className="flex gap-2 mb-4" role="group" aria-label="Article tags">
        <span 
          className="px-3 py-1 text-xs font-semibold bg-status-success-500/20 text-status-success-400 border border-status-success-500/30 rounded-lg backdrop-blur-sm"
          aria-label="Featured article"
        >
          Featured
        </span>
        <span 
          className="px-3 py-1 text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-lg backdrop-blur-sm"
          aria-label={`Category: ${post.category || 'DEFI'}`}
        >
          {post.category?.toUpperCase() || 'DEFI'}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 id={`feat-${post.id}`} className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          <Link 
            href={`/blog/${post.slug}`} 
            className="hover:text-orange-400 focus:text-orange-400 focus:outline-none focus:underline transition-colors"
            aria-describedby={`feat-desc-${post.id}`}
          >
            {post.title}
          </Link>
        </h2>
        
        <p id={`feat-desc-${post.id}`} className="text-lg text-neutral-300 leading-relaxed mb-6">
          {post.excerpt}
        </p>
      </div>

      {/* Enhanced Footer */}
      <div className="pt-4 border-t border-neutral-700/50">
        {/* Author and Meta in one line */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-white font-medium text-sm">{post.author.charAt(0)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300">
              <span className="font-medium text-white">{post.author}</span>
              <span className="text-neutral-500">•</span>
              <time 
                dateTime={post.date} 
                title={`Published on ${new Date(post.date).toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}`}
              >
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </time>
            </div>
          </div>

          <div className="flex items-center gap-4 text-neutral-400 text-sm" role="group" aria-label="Article statistics">
            <span className="flex items-center gap-1" title={`${post.readTime} minute read`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <span aria-label={`${post.readTime} minute read`}>
                {post.readTime}
              </span>
            </span>
            <span className="flex items-center gap-1" title={`${post.category} category`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
              </svg>
              <span aria-label={`${post.category} category`}>
                {post.category}
              </span>
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-end">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 focus:from-orange-600 focus:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label={`Read full article: ${post.title}`}
          >
            <span>Read Article</span>
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
