"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Eye, Heart, Clock, Twitter, Linkedin, Copy, Check } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog/blog-card"
import { ParticleBackground } from "@/components/particle-background"
import { CodeLines } from "@/components/code-lines"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

interface BlogPostClientProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)
  const [copied, setCopied] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy URL")
    }
  }

  const getCategoryGradient = (category: string) => {
    const gradients = {
      defi: "from-orange-500 to-red-500",
      tech: "from-orange-400 to-amber-500",
      guides: "from-amber-500 to-yellow-500",
      development: "from-red-500 to-orange-500",
      mining: "from-yellow-500 to-orange-500",
      news: "from-orange-600 to-red-600",
    }
    return gradients[category as keyof typeof gradients] || "from-orange-500 to-amber-500"
  }

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/blog">
              <button className="flex items-center gap-2 text-white/70 hover:text-orange-400 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </button>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden mb-8"
          >
            {/* Hero Image */}
            <div className="relative h-64 lg:h-96">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span
                  className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${getCategoryGradient(post.category)} text-white font-medium backdrop-blur-md`}
                >
                  {post.category.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                {post.title}
              </motion.h1>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-white/10"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full border-2 border-orange-500/30"
                  />
                  <div>
                    <div className="text-white font-medium">{post.author.name}</div>
                    <div className="text-orange-400 text-sm">{post.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{post.views.toLocaleString()} views</span>
                  </div>
                  <span>{post.publishedAt}</span>
                </div>
              </motion.div>

              {/* Article Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-white/80 mb-8 leading-relaxed"
              >
                {post.description}
              </motion.p>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="prose prose-lg prose-invert max-w-none mb-8"
              >
                <div className="text-white/90 leading-relaxed space-y-6">
                  <p>
                    This is where the full article content would be rendered. In a real implementation, you would parse
                    and render the markdown content from the post.content field.
                  </p>
                  <p>
                    The content could include code blocks, images, lists, and other rich formatting that would be
                    properly styled with the prose classes.
                  </p>
                  <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Key Points</h2>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li>Point one about the article topic</li>
                    <li>Another important insight</li>
                    <li>Final key takeaway</li>
                  </ul>
                  <blockquote className="border-l-4 border-orange-500 pl-4 italic text-white/70 bg-orange-500/10 p-4 rounded-r-lg">
                    "This is an example quote that would be highlighted in the article content."
                  </blockquote>
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-orange-500/20 text-orange-300 text-sm hover:bg-orange-500/30 transition-colors border border-orange-500/30"
                  >
                    #{tag}
                  </span>
                ))}
              </motion.div>

              {/* Social Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center gap-4 pt-8 border-t border-white/10"
              >
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    isLiked
                      ? "bg-red-500/20 text-red-400 border border-red-500/30"
                      : "bg-white/10 text-white/70 hover:bg-orange-500/20 hover:text-orange-400"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                  <span>{likes}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white/70 hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "Copied!" : "Copy Link"}</span>
                </button>

                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Tweet</span>
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Share</span>
                </a>
              </motion.div>
            </div>
          </motion.article>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-12"
          >
            <div className="flex items-center gap-6">
              <img
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                className="w-20 h-20 rounded-full border-4 border-orange-500/30"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{post.author.name}</h3>
                <p className="text-orange-400 font-medium mb-3">{post.author.role}</p>
                <p className="text-white/70 leading-relaxed">{post.author.bio}</p>
                <div className="flex gap-3 mt-4">
                  {post.author.social.twitter && (
                    <a
                      href={`https://twitter.com/${post.author.social.twitter.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {post.author.social.github && (
                    <a
                      href={`https://github.com/${post.author.social.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-orange-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Related <span className="text-orange-400">Articles</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  )
}
