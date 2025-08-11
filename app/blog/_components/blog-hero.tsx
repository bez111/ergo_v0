"use client"

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
      className="relative overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900/60 backdrop-blur-sm p-6 h-full flex flex-col justify-between hover:border-brand-primary-500/30 transition-all duration-300 focus-within:border-brand-primary-500/50 focus-within:ring-2 focus-within:ring-brand-primary-400/20"
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
        <h2 id={`feat-${post.id}`} className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
          <Link 
            href={`/blog/${post.slug}`} 
            className="hover:text-brand-primary-400 focus:text-brand-primary-400 focus:outline-none focus:underline transition-colors"
            aria-describedby={`feat-desc-${post.id}`}
          >
            {post.title}
          </Link>
        </h2>
        
        <p id={`feat-desc-${post.id}`} className="text-neutral-300 text-base leading-relaxed mb-4">
          {post.description}
        </p>
      </div>

      {/* Enhanced Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-700/50">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="text-white font-medium">{post.author.name.charAt(0)}</span>
          </div>
          <div>
            <p className="text-white font-medium text-sm">{post.author.name}</p>
            <p className="text-neutral-400 text-xs">
              <span className="sr-only">Author role:</span>
              {post.author.role} • 
              <time 
                dateTime={post.publishedAt} 
                className="ml-1"
                title={`Published on ${new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}`}
              >
                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </time>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-neutral-400 text-sm" role="group" aria-label="Article statistics">
          <span className="flex items-center gap-1" title={`${post.views?.toLocaleString()} views`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
            <span aria-label={`${post.views?.toLocaleString()} views`}>
              {post.views?.toLocaleString()}
            </span>
          </span>
          <span className="flex items-center gap-1" title={`${post.likes} likes`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            <span aria-label={`${post.likes} likes`}>
              {post.likes}
            </span>
          </span>
          <span className="flex items-center gap-1" title={`${post.readTime} minute read`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span aria-label={`${post.readTime} minute read`}>
              {post.readTime} min read
            </span>
          </span>
        </div>
      </div>

      {/* Enhanced CTA Button */}
      <div className="mt-4">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 focus:from-orange-600 focus:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200 hover:scale-105 active:scale-95"
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
    </article>
  )
}
