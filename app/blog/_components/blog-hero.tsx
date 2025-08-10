"use client"

import { Eye, Heart, Clock, Star } from "lucide-react"
import type { BlogPost } from "../_lib/blog-data"
import Link from "next/link"
import Image from "next/image"

interface BlogHeroProps {
  featuredPost: BlogPost
  trendingPosts: BlogPost[]
}

export function BlogHero({ featuredPost, trendingPosts }: BlogHeroProps) {
  const getCategoryGradient = (category: string) => {
    const gradients = {
      defi: "from-brand-primary-500 to-brand-primary-600",
      tech: "from-brand-primary-400 to-brand-primary-500",
      guides: "from-brand-primary-500 to-brand-secondary-400",
      development: "from-brand-primary-500 to-brand-primary-600",
      mining: "from-brand-secondary-400 to-brand-primary-500",
      news: "from-brand-primary-600 to-brand-primary-700",
    }
    return gradients[category as keyof typeof gradients] || "from-brand-primary-500 to-brand-primary-600"
  }

  return (
    <section className="flex flex-col lg:flex-row gap-8 mb-12">
      {/* Featured Article */}
      <div
        className="relative flex-1 bg-neutral-900/50 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm border border-neutral-700"
      >
        <div className="absolute inset-0">
          {featuredPost.image && (
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                decoding="async"
                className="w-full h-full object-cover opacity-30"
              />
            )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[400px]">
          <div
            className="flex items-center gap-3 mb-4"
          >
            <span
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-gradient-to-r ${getCategoryGradient(featuredPost.category)} text-white text-sm font-medium backdrop-blur-md`}
            >
              <Star className="w-3 h-3" />
              Featured
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/20 backdrop-blur-md text-white text-sm">
              {featuredPost.category.toUpperCase()}
            </span>
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight"
          >
            {featuredPost.title}
          </h2>

          <p
            className="text-white/90 text-lg mb-6 leading-relaxed"
          >
            {featuredPost.description}
          </p>

          <div
            className="flex items-center gap-4 mb-6"
          >
            {featuredPost.author.avatar && (
              <Image
                src={featuredPost.author.avatar}
                alt={featuredPost.author.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white/50"
                decoding="async"
                loading="lazy"
              />
            )}
            <div>
              <div className="text-white font-medium">{featuredPost.author.name}</div>
              <div className="text-white/70 text-sm">
                {featuredPost.author.role} • {featuredPost.publishedAt}
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-white/70">
              <Eye className="w-4 h-4" />
              <span className="text-sm">{featuredPost.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{featuredPost.likes}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{featuredPost.readTime} min read</span>
            </div>
          </div>

          <div>
            <Link href={`/blog/${featuredPost.slug}`}>
              <button className="px-8 py-4 rounded-xl bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                Read Article
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Trending Articles */}
      <div
        className="flex flex-col gap-4 w-full lg:w-80"
      >
        <h3 className="text-xl font-bold text-white mb-2">Trending Now</h3>
        {trendingPosts.slice(0, 3).map((post, index) => (
          <div
            key={post.id}
            className="group relative bg-neutral-900/50 backdrop-blur-md rounded-xl p-4 border border-neutral-700 hover:bg-neutral-900/80 hover:border-brand-primary-500/30 transition-all duration-300 hover:scale-105"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="flex gap-4">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover"
                    sizes="64px"
                    decoding="async"
                    loading="lazy"
                  />
                )}
                <div className="flex-1">
                  <span
                    className={`inline-block px-2 py-1 rounded-lg bg-gradient-to-r ${getCategoryGradient(post.category)} text-white text-xs font-medium mb-2`}
                  >
                    {post.category.toUpperCase()}
                  </span>
                  <h4 className="text-white font-medium text-sm leading-tight mb-2 group-hover:text-brand-primary-400 transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-3 text-white/60 text-xs">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
