"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { BlogPost } from "../_lib/blog-data"

interface TrendingNowProps {
  posts: BlogPost[]
  categories: { id: string; name: string; color?: string }[]
}

export default function TrendingNow(props: TrendingNowProps) {
  const { posts } = props;

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
      className="flex flex-col w-full h-full overflow-hidden" 
      aria-labelledby="trending"
      aria-label="Trending Now"
    >
      <h2 id="trending" className="text-2xl font-bold mb-6 text-white">
        Trending Now
      </h2>
      <ul className="space-y-4 flex-1 flex flex-col" role="list">
        {posts.map((p, index) => (
          <motion.li
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex-1"
          >
            <Link
              href={`/blog/${p.slug}`}
              className="flex items-start gap-3 rounded-2xl bg-black/80 border border-white/10 p-4 hover:bg-black/90 transition-colors duration-200 h-full"
            >
              {/* Preview Image */}
              <div className="relative h-10 w-10 rounded-xl bg-neutral-900 overflow-hidden shrink-0 border border-white/10">
                <Image 
                  src="/logo-ergo.svg"
                  alt="" 
                  fill
                  className="object-cover rounded-xl" 
                  loading="lazy"
                  sizes="40px"
                />
              </div>
              
              <div className="min-w-0 flex-1 overflow-hidden">
                {/* Category Badge (optional) */}
                {p.category && (
                  <span className="mb-1 inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {p.category.toUpperCase()}
                  </span>
                )}
                
                {/* Title - 2 lines max */}
                <div className="text-base font-semibold text-neutral-100 line-clamp-2 leading-tight break-words">
                  {p.title}
                </div>
                
                {/* Metrics: date */}
                <div className="mt-2 text-sm text-neutral-400 flex gap-3">
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
