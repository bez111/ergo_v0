// Server Component - optimized for LCP
import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "../_lib/blog-data"

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
      className="group rounded-xl ring-1 ring-white/10 bg-neutral-900/60 p-6 md:p-8 transition hover:ring-white/16 mb-8"
      itemScope
      itemType="https://schema.org/BlogPosting"
      aria-labelledby={`feat-${post.id}`}
      role="article"
    >
      {/* Content Block */}
      <div>
        {/* Title - ONE LINE */}
        <h2 
          id={`feat-${post.id}`} 
          className="text-4xl md:text-5xl font-semibold leading-tight tracking-[-0.01em] text-white whitespace-nowrap overflow-hidden text-ellipsis"
        >
          <Link 
            href={`/blog/${post.slug}`} 
            className="hover:text-orange-400 focus:text-orange-400 focus:outline-none transition-colors"
            aria-describedby={`feat-desc-${post.id}`}
          >
            {cleanTitle}
          </Link>
        </h2>
        
        {/* Excerpt - TWO LINES */}
        <p id={`feat-desc-${post.id}`} className="mt-4 text-neutral-400/90 leading-relaxed text-base">
          {cleanExcerpt}
        </p>

        {/* Meta Line - Simplified */}
        <div className="mt-6 flex items-center gap-3 text-sm text-neutral-500">
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
          
          <span className="text-neutral-500">·</span>
          
          {/* Date */}
          <time dateTime={post.date} className="text-neutral-500 whitespace-nowrap">
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </time>
          
          <span className="text-neutral-500">·</span>
          
          {/* Read Time */}
          <span className="text-neutral-500">{post.readTime} min</span>
          
          {post.views && (
            <>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-500">{(post.views / 1000).toFixed(1)}k</span>
            </>
          )}
        </div>

        {/* CTA Button - LEFT SIDE */}
        <div className="mt-6">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white ring-1 ring-white/0 hover:ring-white/15 transition-transform hover:-translate-y-0.5"
            aria-label={`Read: ${cleanTitle}`}
          >
            Read article →
          </Link>
        </div>
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

