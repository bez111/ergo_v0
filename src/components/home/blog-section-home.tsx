"use client"

import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CyberButton } from "@/components/animations/cyber-button"
import { blogPosts } from "@/app/[locale]/blog/_lib/blog-data"

export function BlogSectionHome() {
  // Get 3 latest posts (do not mutate original array)
  const latestPosts = [...blogPosts]
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
          {latestPosts.map((post) => {
            const cardImage =
              post.slug === "sigma-protocols-privacy"
                ? "/og/sigma-protocols-privacy.png"
                : post.slug === "sigma-protocols-explained"
                ? "/og/sigma-protocols-explained.png"
                : post.slug === "ergo-in-5-minutes"
                ? "/og/ergo-in-five-minutes.png"
                : post.slug === "ergo-manifesto"
                ? "/og/ergo-manifesto.png"
                : post.slug === "nipopows-explained"
                ? "/og/nipopows-explained.png"
                : post.slug === "eutxo-vs-accounts"
                ? "/og/eutxo-vs-accounts.png"
                : post.slug === "oracle-pools-explained"
                ? "/og/oracle-pools-explained.png"
                : post.slug === "storage-rent"
                ? "/og/storage-rent.png"
                : post.slug === "ergoscript-introduction"
                ? "/og/ergoscript-introduction.png"
                : post.slug === "babel-fees"
                ? "/og/babel-fees.png"
                : post.slug === "autolykos-proof-of-work"
                ? "/og/autolykos-proof-of-work.png"
                : post.image

            return (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-xl"
            >
              <Card className="bg-black/80 border border-white/10 rounded-3xl hover:bg-black/90 hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 h-full flex flex-col overflow-hidden cursor-pointer">
                {/* Preview Image */}
                <div className="aspect-video relative overflow-hidden">
                  {cardImage && (
                    <Image
                      src={cardImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
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
          )})}
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
