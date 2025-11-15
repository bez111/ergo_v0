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
              <Card className="bg-black/80 border border-white/10 rounded-3xl hover:bg-black/90 hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 h-full flex flex-col overflow-hidden cursor-pointer">
                {/* Preview Image */}
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 border border-orange-500/30 rounded-3xl m-4 blur-[40px] opacity-60"></div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-900/20 via-black to-black">
                    <div className="absolute top-4 left-4">
                      {post.category && (
                        <span className="px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-200 text-sm font-semibold">
                          {post.category}
                        </span>
                      )}
                    </div>
                    <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-center">
                      <span className="text-sm uppercase tracking-[0.3em] text-orange-400">Ergo</span>
                      <span className="text-3xl font-bold text-white tracking-wider">Blockchain</span>
                      <span className="text-sm text-orange-200/80">Blog Article</span>
                    </div>
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
