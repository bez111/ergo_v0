// Server Component - optimized for LCP
import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "../_lib/blog-data"
import { Star } from "lucide-react"

interface BlogHeroProps {
  featuredPost: BlogPost | null
}

export function BlogHero({ featuredPost }: BlogHeroProps) {
  if (!featuredPost) {
    return null
  }

  const post = featuredPost

  // Clean title and excerpt for better readability
  const cleanTitle = post.title.length > 50 
    ? "How Ergo Is Building DeFi's Future" 
    : post.title
  
  const cleanExcerpt = "Explore how Ergo's smart contracts and economic model power the next generation of decentralized apps."

  return (
    <article
      className="group relative rounded-xl border border-white/10 bg-neutral-900/60 p-6 hover:border-white/20 transition-all duration-300 focus-within:border-orange-500/50 focus-within:ring-1 focus-within:ring-orange-400/20"
      itemScope
      itemType="https://schema.org/BlogPosting"
      aria-labelledby={`feat-${post.id}`}
      role="article"
    >
      {/* Category Badge with Featured Star */}
      <div className="flex items-start gap-3 mb-3">
        <span className="inline-flex items-center gap-1 rounded-md border border-amber-400/30 px-2 py-0.5 text-xs text-amber-300/90 font-medium">
          ● {post.category?.toUpperCase() || 'DEFI'}
        </span>
        {post.featured && (
          <Star className="w-4 h-4 text-amber-400 fill-amber-400/20" aria-label="Featured article" />
        )}
      </div>

      {/* Title */}
      <h2 
        id={`feat-${post.id}`} 
        className="text-3xl font-semibold tracking-tight leading-tight text-white max-w-[24ch] mb-2"
      >
        <Link 
          href={`/blog/${post.slug}`} 
          className="hover:text-orange-400 focus:text-orange-400 focus:outline-none transition-colors"
          aria-describedby={`feat-desc-${post.id}`}
        >
          {cleanTitle}
        </Link>
      </h2>
      
      {/* Excerpt */}
      <p id={`feat-desc-${post.id}`} className="text-neutral-400 max-w-prose leading-relaxed">
        {cleanExcerpt}
      </p>

      {/* Meta and CTA */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm text-neutral-500">
          {/* Author Avatar */}
          <div className="size-8 rounded-full bg-neutral-800 grid place-items-center text-neutral-300 text-xs font-medium">
            {post.author.avatar ? (
              <Image 
                src={post.author.avatar} 
                alt={post.author.name}
                width={32}
                height={32}
                className="object-cover rounded-full"
              />
            ) : (
              post.author.name.charAt(0)
            )}
          </div>
          
          {/* Author Name */}
          <Link 
            href={`/blog/author/${post.author.id}`}
            className="text-neutral-300 hover:text-white transition-colors font-medium"
          >
            {post.author.name}
          </Link>
          
          <span>·</span>
          
          {/* Date */}
          <time dateTime={post.date} className="text-neutral-500">
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </time>
          
          <span>·</span>
          
          {/* Read Time */}
          <span>{post.readTime} min</span>
          
          {post.difficulty && (
            <>
              <span>·</span>
              <span className="rounded px-1.5 py-0.5 border border-white/10 text-xs">
                {post.difficulty}
              </span>
            </>
          )}
          
          {post.views && (
            <>
              <span>·</span>
              <span>{(post.views / 1000).toFixed(1)}k</span>
            </>
          )}
        </div>

        {/* CTA Button */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center rounded-lg px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium shadow-sm hover:shadow hover:-translate-y-px transition-all duration-200 will-change-transform focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:ring-offset-2 focus:ring-offset-neutral-900"
          aria-label={`Read: ${cleanTitle}`}
        >
          Read article →
        </Link>
      </div>

      {/* Hidden schema data */}
      <div className="sr-only">
        <span itemProp="headline">{post.title}</span>
        <span itemProp="description">{post.excerpt}</span>
        <time itemProp="datePublished" dateTime={post.date}>{post.date}</time>
        {post.lastUpdated && (
          <time itemProp="dateModified" dateTime={post.lastUpdated}>{post.lastUpdated}</time>
        )}
        <span itemProp="author" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">{post.author.name}</span>
        </span>
        <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Ergo Platform</span>
        </span>
        {post.readTime && <span itemProp="timeRequired">PT{post.readTime}M</span>}
        {post.wordCount && <span itemProp="wordCount">{post.wordCount}</span>}
      </div>
    </article>
  )
}

