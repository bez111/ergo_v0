// Server Component - optimized for LCP
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "../_lib/blog-data"

interface BlogHeroProps {
  featuredPost: BlogPost | null
}

// ✅ ИСПРАВЛЕНИЕ A11y: Одна ссылка-обертка вместо вложенных ссылок
export function BlogHero({ featuredPost }: BlogHeroProps) {
  if (!featuredPost) {
    return null
  }

  const post = featuredPost

  // Clean title for aria-label
  const cleanTitle = post.title.length > 50 
    ? "How Ergo Is Building DeFi's Future" 
    : post.title

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-3xl"
      aria-label={`Read article: ${cleanTitle}`}
    >
      <article
        className="rounded-3xl bg-black/90 border border-white/10 p-8 md:p-10 group-hover:translate-y-[-2px] transition-transform duration-200 h-full flex flex-col relative overflow-hidden group-hover:border-orange-500/30"
        itemScope
        itemType="https://schema.org/BlogPosting"
        aria-labelledby={`feat-${post.id}`}
        style={{
          backgroundImage: post.image ? `url(${post.image})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Bottom gradient overlay for meta + CTA readability */}
        {post.image && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
        )}

        {/* Top Content (spacer) */}
        <div className="flex-1 relative z-20" />

        {/* Compact Title - now just text, not a link */}
        <h1 
          id={`feat-${post.id}`}
          className="text-xl sm:text-2xl font-bold text-white leading-tight line-clamp-2 relative z-20 mb-3 group-hover:text-orange-400 transition-colors"
        >
          {post.title}
        </h1>

        {/* Bottom Meta Line with CTA visual */}
        <div className="flex items-center justify-between gap-3 mt-auto relative z-20">
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
            <span className="text-neutral-300 font-medium">
              {post.author.name}
            </span>
            
            <span aria-hidden="true">•</span>
            
            {/* Date */}
            <time dateTime={post.date} className="whitespace-nowrap">
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </time>
            
            <span aria-hidden="true">•</span>
            
            {/* Read Time */}
            <span>{post.readTime} min</span>
          </div>

          {/* CTA Visual Button - now just a styled span, not a link */}
          <span
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold bg-orange-500 group-hover:bg-orange-400 transition-all duration-200"
            aria-hidden="true"
          >
            Read article 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </span>
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
    </Link>
  )
}
