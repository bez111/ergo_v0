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
      <article className="relative h-full overflow-hidden rounded-lg border border-orange-500/20 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(255,94,24,0.3)]">
        {/* Cyberpunk corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/20 to-transparent" />
          <div className="absolute top-0 right-0 w-12 h-[2px] bg-orange-500" />
          <div className="absolute top-0 right-0 w-[2px] h-12 bg-orange-500" />
        </div>
        
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
            <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-orange-500/90 text-black rounded">
              {post.category}
            </span>
          </div>
          
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-green-500/90 text-black rounded">
                Featured
              </span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className={`font-bold mb-3 text-white group-hover:text-orange-400 transition-colors ${
            featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          }`}>
            {post.title}
          </h3>
          
          <p className="text-gray-400 mb-4 line-clamp-2">
            {post.description}
          </p>
          
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-mono">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <time dateTime={post.publishedAt}>
                {post.publishedAt}
              </time>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime} min read</span>
            </div>
            
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{post.author.name}</span>
            </div>
          </div>
          
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono text-orange-400 border border-orange-500/30 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Hover effect line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </article>
    </Link>
  )
}
