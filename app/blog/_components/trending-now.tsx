"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Eye, Heart } from "lucide-react"
import type { BlogPost } from "../_lib/blog-data"

interface TrendingNowProps {
  posts: BlogPost[]
  categories: { id: string; name: string; color?: string }[]
}

export default function TrendingNow({ posts, categories }: TrendingNowProps) {
  return (
    <motion.section 
      className="flex flex-col gap-4 w-full lg:w-80" 
      aria-labelledby="trending"
      role="complementary"
    >
      <h2 id="trending" className="text-xl font-bold text-white mb-2">
        Trending Now
      </h2>
      <ul className="flex flex-col gap-4" role="list" aria-label="Trending articles">
        {posts.map((p, index) => (
          <li key={p.id} role="listitem">
            <motion.div
              className="group relative bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-orange-500/10 hover:border-orange-500/20 transition-all duration-300 hover:scale-[1.02] focus-within:bg-orange-500/10 focus-within:border-orange-500/30 focus-within:ring-2 focus-within:ring-orange-400/20"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <article 
                aria-labelledby={`t-${p.id}`} 
                itemScope 
                itemType="https://schema.org/BlogPosting"
                className="h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-neutral-800/60 border border-neutral-700 group-hover:border-orange-500/30 transition-colors">
                    <Image 
                      src={p.image || "/placeholder.svg"} 
                      alt={`Article image for ${p.title}`} 
                      fill 
                      sizes="64px" 
                      className="object-cover transition-transform group-hover:scale-105" 
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Category Badge */}
                    <div className="mb-2">
                      <span 
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-md text-white ${
                          p.category === 'defi' ? 'bg-orange-500/20 border border-orange-500/30' :
                          p.category === 'development' ? 'bg-red-500/20 border border-red-500/30' :
                          'bg-yellow-500/20 border border-yellow-500/30'
                        }`}
                        aria-label={`Category: ${p.category?.toUpperCase() || 'GENERAL'}`}
                      >
                        {p.category?.toUpperCase() || 'GENERAL'}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 id={`t-${p.id}`} className="text-sm font-semibold text-white leading-tight mb-2 line-clamp-2">
                      <Link 
                        href={`/blog/${p.slug}`} 
                        className="hover:text-orange-400 focus:text-orange-400 focus:outline-none focus:underline transition-colors after:absolute after:inset-0"
                        itemProp="url"
                        aria-describedby={`t-meta-${p.id}`}
                      >
                        <span itemProp="headline">{p.title}</span>
                      </Link>
                    </h3>
                    
                    {/* Meta */}
                    <div id={`t-meta-${p.id}`} className="flex items-center gap-3 text-xs text-neutral-400 mb-2">
                      <div className="flex items-center gap-1" title={`${p.views?.toLocaleString()} views`}>
                        <Eye className="w-3 h-3" aria-hidden="true" />
                        <span aria-label={`${p.views?.toLocaleString()} views`}>
                          {p.views?.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1" title={`${p.likes} likes`}>
                        <Heart className="w-3 h-3" aria-hidden="true" />
                        <span aria-label={`${p.likes} likes`}>
                          {p.likes}
                        </span>
                      </div>
                      <time 
                        dateTime={p.publishedAt} 
                        itemProp="datePublished"
                        className="text-neutral-500"
                        title={`Published on ${new Date(p.publishedAt).toLocaleDateString('en-US', { 
                          weekday: 'long',
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}`}
                      >
                        {new Date(p.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </time>
                    </div>

                    {/* Hidden structured data */}
                    <meta itemProp="dateModified" content={p.updatedAt || p.publishedAt} />
                    <meta itemProp="author" content={p.author.name} />
                    {p.readTime && <meta itemProp="timeRequired" content={`PT${p.readTime}M`} />}
                  </div>
                </div>

                {/* Screen reader only description */}
                <div className="sr-only">
                  Article by {p.author.name}, published {new Date(p.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}, {p.views?.toLocaleString()} views, {p.likes} likes
                  {p.readTime && `, ${p.readTime} minute read`}
                </div>
              </article>
            </motion.div>
          </li>
        ))}
      </ul>
    </motion.section>
  )
} 