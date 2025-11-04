import Link from "next/link"
import Image from "next/image"
import { Clock, Eye, Share2 } from "lucide-react"
import type { BlogPost } from "../_lib/blog-data"

export default function BlogListSSR({ posts, categories }: { posts: BlogPost[]; categories: { id: string; name: string }[] }) {
  return (
    <section aria-labelledby="posts-h2">
      <h2 id="posts-h2" className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
      <ul role="list" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <li 
            key={post.id} 
            role="listitem"
            className="animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <article
              itemScope
              itemType="https://schema.org/BlogPosting"
              className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-black/80 backdrop-blur-sm hover:border-orange-500/30 hover:bg-black/90 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image or Placeholder */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                >
                  {post.image ? (
                    <Image
                      itemProp="image"
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-neutral-700 mb-2">
                          {post.category?.charAt(0) || 'B'}
                        </div>
                        <div className="text-xs text-neutral-600 uppercase tracking-wide">
                          {post.category || 'Blog'}
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Link
                    href={`/blog/category/${encodeURIComponent(post.category?.toLowerCase() || 'general')}`}
                    className="px-3 py-1 text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-xl backdrop-blur-sm hover:bg-orange-500/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                  >
                    {post.category}
                  </Link>
                </div>

                {/* Trending Badge */}
                {post.trending && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-status-success-500/20 text-status-success-400 border border-status-success-500/30 rounded-lg backdrop-blur-sm">
                      Trending
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      itemProp="url"
                    >
                      <span itemProp="headline">{post.title}</span>
                    </Link>
                  </h3>

                  <p className="text-sm text-neutral-300 mb-4 line-clamp-2 leading-relaxed" itemProp="description">
                    {post.excerpt}
                  </p>
                </div>

                {/* Enhanced Metadata */}
                <div className="space-y-3 pt-4 border-t border-neutral-700/50">
                  {/* Author */}
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/blog/author/${post.author.id}`}
                      className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      <div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center overflow-hidden">
                        {post.author.avatar ? (
                          <Image 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            width={24}
                            height={24}
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-white font-medium text-xs">
                            {post.author.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-medium" itemProp="name">{post.author.name}</span>
                    </Link>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <div className="flex items-center gap-4">
                      <time 
                        dateTime={new Date(post.date).toISOString()} 
                        className="flex items-center gap-1"
                        itemProp="datePublished"
                      >
                        <Clock className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </time>
                      
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {post.difficulty && (
                        <span className="px-2 py-1 rounded bg-neutral-800/50 text-xs">
                          {post.difficulty}
                        </span>
                      )}
                      
                      {post.views && (
                        <span className="flex items-center gap-1" title={`${post.views.toLocaleString()} views`}>
                          <Eye className="w-3 h-3" />
                          {post.views > 1000 ? `${(post.views / 1000).toFixed(1)}k` : post.views}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hidden Schema Data */}
                <meta itemProp="dateModified" content={new Date(post.lastUpdated || post.date).toISOString()} />
                <meta itemProp="timeRequired" content={`PT${post.readTime}M`} />
                <meta itemProp="wordCount" content={String(post.wordCount || post.readTime * 250)} />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
} 