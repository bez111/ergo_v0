"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { BlogPost } from "../_lib/blog-data"

interface TrendingNowProps {
  posts: BlogPost[]
  categories: { id: string; name: string; color?: string }[]
}

export default function TrendingNow({ posts, categories }: TrendingNowProps) {
  // Format views
  const formatViews = (views: number) => {
    if (views >= 1000) return `${(views / 1000).toFixed(1)}k`
    return views.toString()
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <aside 
      className="flex flex-col w-full lg:w-80" 
      aria-labelledby="trending"
      aria-label="Trending Now"
    >
      <h2 id="trending" className="text-3xl font-bold mb-6 text-white">
        Trending Now
      </h2>
      <ul className="space-y-4" role="list">
        {posts.map((p, index) => (
          <motion.li
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={`/blog/${p.slug}`}
              className="flex items-start gap-4 rounded-2xl bg-neutral-900/70 border border-neutral-800 p-5 hover:bg-neutral-900 transition-colors duration-200"
            >
              {/* Avatar/Initial */}
              <div className="h-12 w-12 rounded-2xl bg-neutral-800 grid place-content-center text-xl font-bold text-neutral-200 shrink-0">
                {p.image ? (
                  <Image 
                    src={p.image} 
                    alt={`Article image for ${p.title}`} 
                    width={48}
                    height={48}
                    className="object-cover w-full h-full rounded-2xl" 
                    loading="lazy"
                  />
                ) : (
                  p.author.name.charAt(0)
                )}
              </div>
              
              <div className="min-w-0 flex-1">
                {/* Category Badge (optional) */}
                {p.category && (
                  <span className="mb-1 inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {p.category.toUpperCase()}
                  </span>
                )}
                
                {/* Title - 2 lines max */}
                <div className="text-lg md:text-xl font-semibold text-neutral-100 line-clamp-2 leading-tight">
                  {p.title}
                </div>
                
                {/* Metrics: views • comments • date */}
                <div className="mt-2 text-sm text-neutral-400 flex gap-3">
                  <span>{formatViews(p.views || 0)}</span>
                  {p.shares != null && <span>{p.shares}</span>}
                  <span>{formatDate(p.date)}</span>
                </div>
              </div>
            </Link>

            {/* Hidden metadata for SEO */}
            <article className="sr-only" itemScope itemType="https://schema.org/BlogPosting">
              <span itemProp="headline">{p.title}</span>
              <time itemProp="datePublished" dateTime={p.date}>{p.date}</time>
              <meta itemProp="author" content={p.author.name} />
              <meta itemProp="timeRequired" content={`PT${p.readTime}M`} />
            </article>
          </motion.li>
        ))}
      </ul>
    </aside>
  )
}
