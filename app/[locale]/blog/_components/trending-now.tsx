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
      className="flex flex-col w-full lg:w-80" 
      aria-labelledby="trending"
      role="complementary"
    >
      <h2 id="trending" className="text-xl font-bold text-white mb-4">
        Trending Now
      </h2>
      <div className="space-y-4 h-full min-h-0" role="list" aria-label="Trending articles">
        {posts.map((p, index) => (
          <motion.div
            key={p.id}
            role="listitem"
            className="group relative rounded-xl p-4 ring-1 ring-white/10 bg-neutral-900/60 hover:ring-white/16 transition hover:-translate-y-px min-h-0"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <article 
              aria-labelledby={`t-${p.id}`} 
              itemScope 
              itemType="https://schema.org/BlogPosting"
              className="h-full flex flex-col min-h-0"
            >
              <div className="flex items-start gap-4 flex-1 min-h-0">
                <div className="size-10 rounded-lg bg-neutral-800/60 ring-1 ring-white/10 shrink-0 overflow-hidden">
                  {p.image ? (
                    <Image 
                      src={p.image} 
                      alt={`Article image for ${p.title}`} 
                      width={40}
                      height={40}
                      className="object-cover w-full h-full" 
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-sm font-medium text-neutral-400">
                        {p.category?.charAt(0)?.toUpperCase() || 'B'}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0 flex flex-col min-h-0">
                  {/* Category Badge */}
                  <div className="mb-2 shrink-0">
                    <span className="inline-flex items-center rounded-md border border-amber-400/30 px-2 py-0.5 text-xs text-amber-300/90 bg-transparent">
                      {p.category?.toUpperCase() || 'GENERAL'}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 id={`t-${p.id}`} className="text-sm font-semibold text-white leading-tight mb-2 line-clamp-2 flex-1 min-h-0">
                    <Link 
                      href={`/blog/${p.slug}`} 
                      className="hover:text-orange-400 focus:text-orange-400 focus:outline-none transition-colors after:absolute after:inset-0"
                      itemProp="url"
                      aria-describedby={`t-meta-${p.id}`}
                    >
                      <span itemProp="headline">{p.title}</span>
                    </Link>
                  </h3>
                  
                  {/* Meta - consistent with hero style */}
                  <div id={`t-meta-${p.id}`} className="flex items-center gap-2 text-xs text-neutral-500 shrink-0">
                    <span className="text-neutral-500">{p.views ? `${(p.views / 1000).toFixed(1)}k` : '0'}</span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-neutral-500">{p.shares || 0}</span>
                    <span className="text-neutral-500">·</span>
                    <time 
                      dateTime={new Date(p.date).toISOString()} 
                      itemProp="datePublished"
                      className="text-neutral-500 whitespace-nowrap"
                    >
                      {new Date(p.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </time>
                  </div>

                  {/* Hidden structured data */}
                  <meta itemProp="dateModified" content={new Date(p.lastUpdated || p.date).toISOString()} />
                  <meta itemProp="author" content={p.author.name} />
                  <meta itemProp="timeRequired" content={`PT${p.readTime}M`} />
                </div>
              </div>

              {/* Screen reader only description */}
              <div className="sr-only">
                Article by {p.author.name}, published {new Date(p.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}, {p.views?.toLocaleString() || '0'} views, {p.shares || 0} shares
                , {p.readTime} minute read
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 