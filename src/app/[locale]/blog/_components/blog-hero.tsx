// Server Component - optimized for LCP
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
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

  // Format views
  const formatViews = (views: number) => {
    if (views >= 1000) return `${(views / 1000).toFixed(1)}k`
    return views.toString()
  }

  return (
    <article
      className="group rounded-3xl bg-black/90 border border-white/10 p-10 md:p-12 shadow-[inset_0_1px_0_0_rgba(255,255,255,.04)] hover:translate-y-[-2px] transition-transform duration-200"
      itemScope
      itemType="https://schema.org/BlogPosting"
      aria-labelledby={`feat-${post.id}`}
      role="article"
    >
      {/* Title - Large Typography */}
      <h1 
        id={`feat-${post.id}`} 
        className="text-[clamp(32px,6vw,72px)] leading-[0.95] font-extrabold tracking-tight text-white"
      >
        <Link 
          href={`/blog/${post.slug}`} 
          className="hover:text-orange-400 focus:text-orange-400 focus:outline-none transition-colors"
          aria-describedby={`feat-desc-${post.id}`}
        >
          {cleanTitle}
        </Link>
      </h1>
      
      {/* Dek (Subtitle) */}
      <p id={`feat-desc-${post.id}`} className="mt-6 text-neutral-300 text-lg md:text-xl leading-relaxed">
        {cleanExcerpt}
      </p>

      {/* Meta Line with CTA Button on the right */}
      <div className="mt-8 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-neutral-400">
          {/* Author Avatar */}
          <div className="h-10 w-10 rounded-full bg-neutral-800 grid place-content-center font-semibold text-neutral-200">
            {post.author.avatar ? (
              <Image 
                src={post.author.avatar} 
                alt={post.author.name}
                width={40}
                height={40}
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
          
          <span>•</span>
          
          {/* Date */}
          <time dateTime={post.date} className="whitespace-nowrap">
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </time>
          
          <span>•</span>
          
          {/* Read Time */}
          <span>{post.readTime} min</span>
          
          {post.views && (
            <>
              <span>•</span>
              <span>{formatViews(post.views)}</span>
            </>
          )}
        </div>

        {/* CTA Button - Right side */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold bg-orange-500 hover:bg-orange-400 active:scale-[.98] transition-all duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-orange-500 group/btn"
          aria-label={`Read article: ${cleanTitle}`}
        >
          Read article 
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
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

