"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Eye, Heart, Clock, Twitter, Linkedin, Copy, Check, UserCircle, Calendar, Tag, BookOpen, MessageCircle, Share2, ChevronRight, Hash, AlertCircle, CheckCircle, RefreshCw } from "lucide-react"
import type { BlogPost } from "../_lib/blog-data"
import { BlogCard } from "../_components/blog-card"
import Link from "next/link"
import { useState, MouseEvent, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface BlogPostClientProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)
  const [copied, setCopied] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")
  const [showComments, setShowComments] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleShare = async (platform: 'twitter' | 'linkedin' | 'copy' | 'telegram' | 'reddit') => {
    const url = window.location.href
    const text = `Check out this article: ${post.title}`

    if (platform === 'copy') {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return
    }

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      reddit: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(post.title)}`
    }
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'noopener,noreferrer')
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

  // Table of Contents generation
  const toc = [
    { id: "introduction", title: "Introduction", level: 2 },
    { id: "key-concepts", title: "Key Concepts", level: 2 },
    { id: "implementation", title: "Step-by-Step Implementation", level: 2 },
    { id: "best-practices", title: "Best Practices", level: 3 },
    { id: "common-mistakes", title: "Common Mistakes", level: 3 },
    { id: "faq", title: "Frequently Asked Questions", level: 2 },
    { id: "conclusion", title: "Conclusion", level: 2 },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-900">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-200"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Fixed Back to Blog Button */}
      <div className="fixed top-20 left-4 z-40">
        <Button 
          variant="ghost" 
          size="default"
          className="bg-black/80 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-orange-400 hover:bg-orange-400/10 hover:border-orange-500/50 transition-all duration-200 group"
          asChild
        >
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to Blog</span>
          </Link>
        </Button>
      </div>

      <div 
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 136, 0, 0.1), transparent 80%)`
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 sm:py-16">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          
          {/* Hero Section */}
          <motion.header variants={itemVariants} className="mb-12">
            {/* Category Badge */}
            <div className="mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${getCategoryGradient(post.category)} text-white`}>
                {post.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pb-4 leading-tight">
              {post.title}
            </h1>
            
            {/* Subtitle/Description */}
            <p className="mt-4 text-xl text-gray-300 max-w-3xl leading-relaxed">
              {post.description}
            </p>

            {/* Meta Information Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pb-6 border-b border-gray-800">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                {post.author.avatar ? (
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    width={40} 
                    height={40} 
                    className="rounded-full ring-2 ring-orange-500/20"
                  />
                ) : (
                  <UserCircle className="w-10 h-10 text-orange-400" />
                )}
                <div>
                  <div className="font-semibold text-white">{post.author.name}</div>
                  <div className="text-xs text-gray-500">{post.author.role}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.publishedAt}</span>
                </div>
                {post.updatedAt && (
                  <div className="flex items-center gap-1">
                    <RefreshCw className="w-4 h-4" />
                    <span>Updated {post.updatedAt}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="ml-auto flex items-center gap-2">
                <button onClick={() => handleShare('twitter')} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button onClick={() => handleShare('linkedin')} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button onClick={() => handleShare('telegram')} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button onClick={() => handleShare('copy')} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          {post.image && (
            <motion.div variants={itemVariants} className="mb-12 rounded-2xl overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}

          {/* Introduction Section */}
          <motion.section variants={itemVariants} className="mb-12 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-orange-400" />
              What You'll Learn
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Understanding the core concepts and fundamentals</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Step-by-step implementation guide with examples</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Best practices and common pitfalls to avoid</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Real-world applications and use cases</span>
              </li>
            </ul>
          </motion.section>

          <div className="grid grid-cols-12 gap-8">
            {/* Main Content */}
            <motion.article variants={itemVariants} className="col-span-12 md:col-span-8">
              {/* Table of Contents Mobile */}
              <div className="md:hidden mb-8 p-6 rounded-2xl bg-gray-900/70 border border-gray-800">
                <h3 className="font-bold text-lg mb-4 text-white">Table of Contents</h3>
                <nav className="space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm hover:text-orange-400 transition-colors ${
                        item.level === 3 ? 'ml-4 text-gray-500' : 'text-gray-400'
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Article Content */}
              <div className="prose prose-invert prose-orange max-w-none">
                <section id="introduction" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Introduction</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    The Ergo ecosystem is experiencing rapid growth, driven by its unique approach to blockchain technology, 
                    innovative DeFi solutions, and grassroots community building. This article delves into the latest ecosystem 
                    developments, highlighting the innovative strides being made in DeFi, tooling, and core protocol enhancements.
                  </p>
                </section>

                <section id="key-concepts" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Key Concepts</h2>
                  <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Understanding the Fundamentals</h3>
                    <p className="text-gray-300 mb-4">
                      Before diving deep, let's establish the core concepts that form the foundation of our discussion...
                    </p>
                    {/* Add more content here */}
                  </div>
                </section>

                <section id="implementation" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Step-by-Step Implementation</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-6">
                      <h3 id="best-practices" className="text-xl font-semibold mb-3">Best Practices</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Always validate input parameters</li>
                        <li>• Use proper error handling</li>
                        <li>• Implement comprehensive testing</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-6">
                      <h3 id="common-mistakes" className="text-xl font-semibold mb-3">Common Mistakes</h3>
                      <div className="bg-red-500/10 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                          <div>
                            <p className="font-semibold text-red-400 mb-2">Warning</p>
                            <p className="text-gray-300">
                              Avoid these common pitfalls that developers often encounter...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <details className="group bg-gray-900/50 rounded-lg p-4">
                      <summary className="cursor-pointer font-semibold text-lg hover:text-orange-400 transition-colors">
                        What is the minimum requirement to get started?
                      </summary>
                      <p className="mt-3 text-gray-300">
                        You'll need a basic understanding of blockchain concepts and...
                      </p>
                    </details>
                    <details className="group bg-gray-900/50 rounded-lg p-4">
                      <summary className="cursor-pointer font-semibold text-lg hover:text-orange-400 transition-colors">
                        How long does the implementation typically take?
                      </summary>
                      <p className="mt-3 text-gray-300">
                        The timeline depends on your specific requirements, but typically...
                      </p>
                    </details>
                    <details className="group bg-gray-900/50 rounded-lg p-4">
                      <summary className="cursor-pointer font-semibold text-lg hover:text-orange-400 transition-colors">
                        Is this compatible with existing systems?
                      </summary>
                      <p className="mt-3 text-gray-300">
                        Yes, the solution is designed to be interoperable with...
                      </p>
                    </details>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-12 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20">
                  <h2 className="text-3xl font-bold mb-6">Conclusion & Next Steps</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    We've covered the essential concepts and implementation details. Here's your action checklist:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <span>Set up your development environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <span>Follow the implementation guide step-by-step</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <span>Test thoroughly in a sandbox environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <span>Join our community for support and updates</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      Try It Now
                    </Button>
                    <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500/10">
                      View on GitHub
                    </Button>
                  </div>
                </section>

                {/* Tags */}
                <div className="mb-12">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Hash className="w-5 h-5 text-orange-400" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Link 
                        key={tag}
                        href={`/blog?tag=${tag}`}
                        className="px-3 py-1 bg-gray-900/50 rounded-full text-sm text-gray-400 hover:text-orange-400 hover:bg-orange-400/10 transition-all"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Engagement Section */}
              <div className="flex items-center justify-between p-6 bg-gray-900/50 rounded-2xl mb-8">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isLiked ? 'bg-red-500 text-white' : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{likes}</span>
                  </button>
                  <button 
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Comments</span>
                  </button>
                </div>
                <p className="text-gray-400">
                  Was this helpful? Let us know!
                </p>
              </div>

              {/* Comments Section */}
              {showComments && (
                <div className="mb-12 p-6 bg-gray-900/50 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Comments</h3>
                  <p className="text-gray-400">Comments integration coming soon...</p>
                </div>
              )}
            </motion.article>
            
            {/* Sidebar */}
            <aside className="col-span-12 md:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents Desktop */}
                <div className="hidden md:block p-6 rounded-2xl bg-gray-900/70 border border-gray-800">
                  <h3 className="font-bold text-lg mb-4 text-white">Table of Contents</h3>
                  <nav className="space-y-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm hover:text-orange-400 transition-colors ${
                          item.level === 3 ? 'ml-4 text-gray-500' : 'text-gray-400'
                        } ${activeSection === item.id ? 'text-orange-400 font-semibold' : ''}`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Newsletter Signup */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
                  <h3 className="font-bold text-lg mb-2 text-white">Stay Updated</h3>
                  <p className="text-sm text-gray-400 mb-4">Get the latest Ergo news and insights delivered to your inbox.</p>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 mb-3"
                  />
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Subscribe
                  </Button>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles - Enhanced */}
          {relatedPosts && relatedPosts.length > 0 && (
            <motion.section variants={itemVariants} className="mt-20 pt-12 border-t border-gray-800">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Related Articles
                </h2>
                <p className="text-gray-400">Continue exploring with these recommended reads</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </motion.section>
          )}
        </motion.div>
      </div>
    </div>
  )
}
