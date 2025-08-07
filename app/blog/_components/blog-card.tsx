'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import { BlogPost } from '../_lib/blog-data'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className={`group block ${featured ? 'col-span-full lg:col-span-2' : ''}`}
    >
      <article className="relative h-full overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary-500/30 hover:bg-neutral-900/80">
        
        {/* Image */}
        <div className="relative h-48 lg:h-56 overflow-hidden">
          <Image
            src={post.image || '/placeholder.svg'}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold bg-brand-primary-500/20 text-brand-primary-400 border border-brand-primary-500/30 rounded-lg backdrop-blur-sm">
              {post.category}
            </span>
          </div>
          
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-xs font-semibold bg-status-success-500/20 text-status-success-400 border border-status-success-500/30 rounded-lg backdrop-blur-sm">
                Featured
              </span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className={`font-bold mb-3 text-white group-hover:text-brand-primary-400 transition-colors ${
            featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          }`}>
            {post.title}
          </h3>
          
          <p className="text-gray-300 mb-4 line-clamp-2">
            {post.description}
          </p>
          
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-gray-500" />
              <time dateTime={post.publishedAt}>
                {post.publishedAt}
              </time>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gray-500" />
              <span>{post.readTime} min read</span>
            </div>
            
            <div className="flex items-center gap-1">
              <User className="w-3 h-3 text-gray-500" />
              <span>{post.author.name}</span>
            </div>
          </div>
          
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="text-xs text-gray-500 hover:text-brand-primary-400 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Hover effect - subtle glow */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary-500/10 to-brand-primary-500/5" />
        </div>
      </article>
    </Link>
  )
}
