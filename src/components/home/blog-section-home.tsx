"use client"

import Link from "next/link"
import { Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CyberButton } from "@/components/animations/cyber-button"
import { blogPosts } from "@/app/[locale]/blog/_lib/blog-data"

export function BlogSectionHome() {
  // Get 3 latest posts
  const latestPosts = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section className="py-32 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-orange-400">Latest</span> <span className="text-white">from the</span> <span className="text-orange-400">blog</span>
            </h2>
            <p className="text-xl text-gray-400">
              Insights, tutorials, and updates from the Ergo team
            </p>
          </div>
          <CyberButton
            className="gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-6 py-3 hidden md:flex"
            asChild
          >
            <Link href="/blog" className="inline-flex items-center">
              <span>View all articles</span>
            </Link>
          </CyberButton>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-xl"
            >
              <Card className="bg-neutral-900/50 border-0 rounded-xl hover:ring-1 hover:ring-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-200 h-full flex flex-col overflow-hidden cursor-pointer">
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-neutral-900 to-neutral-950 flex items-center justify-center group-hover:from-neutral-800 group-hover:to-neutral-900 transition-all duration-300">
                  <div className="text-6xl font-bold text-neutral-800 group-hover:text-neutral-700 transition-colors">
                    {post.category?.charAt(0) || 'E'}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Category badge */}
                  {post.category && (
                    <Badge 
                      variant="outline" 
                      className="mb-3 bg-orange-500/10 border-orange-500/30 text-orange-400 w-fit group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300"
                    >
                      {post.category}
                    </Badge>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-100 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-2 flex-1 group-hover:text-gray-300 transition-colors">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-neutral-500 pt-4 border-t border-neutral-800 group-hover:text-neutral-400 group-hover:border-neutral-700 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min</span>
                    </div>
                    <span>•</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </time>
                  </div>

                  {/* Read article link - appears on hover, aligned right */}
                  <div className="mt-4 text-orange-400 group-hover:text-orange-300 font-semibold flex items-center justify-end gap-2 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Read article</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Mobile view all button */}
        <div className="mt-8 text-center md:hidden">
          <CyberButton
            className="gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-6 py-3 w-full"
            asChild
          >
            <Link href="/blog" className="inline-flex items-center justify-center">
              <span>View all articles</span>
            </Link>
          </CyberButton>
        </div>

      </div>
    </section>
  )
}
