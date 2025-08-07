"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowUp, Eye, Heart, Clock, Twitter, Copy, Check, UserCircle, Calendar, MessageCircle, Share2, Hash, AlertCircle, CheckCircle, ExternalLink, Menu, X } from "lucide-react"
import type { BlogPost } from "../_lib/blog-data"
import { BlogCard } from "../_components/blog-card"
import { BlogBreadcrumbs } from "../_components/blog-breadcrumbs"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
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
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")
  const [showComments, setShowComments] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)
  const [toc, setToc] = useState<Array<{ id: string; title: string; level: number }>>([])
  const contentRef = useRef<HTMLDivElement>(null)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleShare = async (platform: 'twitter' | 'copy') => {
    const url = window.location.href
    const text = `Check out this article: ${post.title}`

    if (platform === 'copy') {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return
    }

    if (platform === 'twitter') {
      const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
      window.open(shareUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Generate TOC from actual content
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2, h3')
      const tocItems = Array.from(headings).map((heading) => ({
        id: heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
        title: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      }))
      setToc(tocItems)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(progress)

      // Show scroll to top button
      setShowScrollTop(window.scrollY > 500)

      // Update active section for TOC
      const sections = toc.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(toc[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [toc])

  // Track reading analytics
  useEffect(() => {
    const startTime = Date.now()
    
    return () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      console.log(`User spent ${timeSpent} seconds on article`)
    }
  }, [])

  // Get more articles from the same author
  const authorArticles = relatedPosts.filter(p => p.author.name === post.author.name && p.id !== post.id).slice(0, 2)

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-900">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-200"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Fixed Back to Blog Button */}
      <div className="fixed top-20 left-4 z-40 no-print">
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

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-40 no-print"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Toggle */}
      <div className="fixed bottom-8 left-8 z-40 md:hidden no-print">
        <Button
          onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          size="icon"
          className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg"
        >
          {showMobileSidebar ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 sm:py-16">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          
          {/* Breadcrumbs - Visually Hidden but Present for SEO */}
          <motion.div variants={itemVariants} className="sr-only">
            <BlogBreadcrumbs title={post.title} category={post.category} />
          </motion.div>

          {/* Hero Section - Simplified */}
          <motion.header variants={itemVariants} className="mb-8 blog-content">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30">
                {post.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white pb-4 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Information Bar - Simplified */}
            <div className="mt-6 flex flex-wrap items-center gap-4 pb-6 border-b border-gray-800">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                {post.author.avatar ? (
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    width={40} 
                    height={40} 
                    className="rounded-full"
                  />
                ) : (
                  <UserCircle className="w-10 h-10 text-gray-400" />
                )}
                <div>
                  <div className="font-semibold text-white">{post.author.name}</div>
                  <div className="text-xs text-gray-500">{post.author.role}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.publishedAt}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          {post.image && (
            <motion.div variants={itemVariants} className="mb-8 rounded-xl overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}

          <div className="grid grid-cols-12 gap-8">
            {/* Main Content */}
            <motion.article variants={itemVariants} className="col-span-12 md:col-span-8 blog-content" ref={contentRef}>
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
                  <div className="bg-gray-900/30 rounded-xl p-6 mb-6 border border-gray-800">
                    <h3 className="text-xl font-semibold mb-4">Understanding the Fundamentals</h3>
                    <p className="text-gray-300 mb-4">
                      Before diving deep, let's establish the core concepts that form the foundation of our discussion...
                    </p>
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
                      <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
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

                {/* External Resources Section */}
                <section id="external-resources" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">External Resources</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                      <h3 className="font-semibold mb-2 text-orange-400">Official Documentation</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="https://docs.ergoplatform.com" target="_blank" rel="noopener noreferrer" 
                             className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                            Ergo Platform Documentation
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer"
                             className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                            Ergo GitHub Repository
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <details className="group bg-gray-900/30 rounded-lg p-4 border border-gray-800">
                      <summary className="cursor-pointer font-semibold text-lg hover:text-orange-400 transition-colors">
                        What is the minimum requirement to get started?
                      </summary>
                      <p className="mt-3 text-gray-300">
                        You'll need a basic understanding of blockchain concepts and an Ergo wallet to begin interacting with the ecosystem.
                      </p>
                    </details>
                    <details className="group bg-gray-900/30 rounded-lg p-4 border border-gray-800">
                      <summary className="cursor-pointer font-semibold text-lg hover:text-orange-400 transition-colors">
                        How long does the implementation typically take?
                      </summary>
                      <p className="mt-3 text-gray-300">
                        The timeline depends on your specific requirements, but typically ranges from a few hours for simple integrations to several days for complex implementations.
                      </p>
                    </details>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    We've covered the essential concepts and implementation details. Start with the basics and gradually explore more advanced features as you become comfortable with the platform.
                  </p>
                </section>

                {/* Tags */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Link 
                        key={tag}
                        href={`/blog?tag=${tag}`}
                        className="px-2 py-1 text-xs text-gray-500 hover:text-orange-400 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Simple Engagement Section */}
              <motion.div 
                variants={itemVariants}
                className="mt-12 flex flex-wrap items-center justify-between gap-4 p-6 bg-gray-900/30 rounded-xl border border-gray-800"
              >
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isLiked ? 'bg-orange-500 text-white' : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{likes}</span>
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleShare('twitter')} className="p-2 rounded-lg hover:bg-gray-800 transition-colors" title="Share on Twitter">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleShare('copy')} className="p-2 rounded-lg hover:bg-gray-800 transition-colors" title="Copy link">
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => setShowComments(!showComments)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Comments</span>
                </button>
              </motion.div>

              {/* Comments Section */}
              {showComments && (
                <div className="mt-8 p-6 bg-gray-900/30 rounded-2xl border border-gray-800 no-print">
                  <h3 className="text-xl font-bold mb-4">Comments</h3>
                  <p className="text-gray-400">Comments integration coming soon...</p>
                </div>
              )}

              {/* More from Author - Simplified */}
              {authorArticles.length > 0 && (
                <motion.section variants={itemVariants} className="mt-12 pt-8 border-t border-gray-800">
                  <h3 className="text-lg font-semibold mb-4 text-gray-400">
                    More from {post.author.name}
                  </h3>
                  <div className="space-y-3">
                    {authorArticles.map((article) => (
                      <Link 
                        key={article.id} 
                        href={`/blog/${article.slug}`}
                        className="block group"
                      >
                        <h4 className="text-white group-hover:text-orange-400 transition-colors mb-1">{article.title}</h4>
                        <div className="text-xs text-gray-500">
                          {article.publishedAt} · {article.readTime} min read
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.section>
              )}
            </motion.article>
            
            {/* Sidebar - Desktop */}
            <aside className="col-span-12 md:col-span-4 hidden md:block no-print">
              <div className="sticky top-24">
                {/* Table of Contents */}
                {toc.length > 0 && (
                  <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                    <h3 className="font-bold text-lg mb-4 text-white">Table of Contents</h3>
                    <nav className="space-y-2">
                      {toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-sm hover:text-orange-400 transition-colors ${
                            item.level === 3 ? 'ml-4 text-gray-500' : 'text-gray-400'
                          } ${activeSection === item.id ? 'text-orange-400 font-semibold border-l-2 border-orange-400 pl-2 -ml-2' : ''}`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}
              </div>
            </aside>

            {/* Mobile Sidebar */}
            <AnimatePresence>
              {showMobileSidebar && (
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  className="fixed inset-y-0 right-0 w-80 bg-black border-l border-gray-800 z-50 md:hidden overflow-y-auto"
                >
                  <div className="p-6 space-y-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg text-white">Navigation</h3>
                      <button onClick={() => setShowMobileSidebar(false)}>
                        <X className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>

                    {/* Mobile TOC */}
                    {toc.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 text-white">Table of Contents</h4>
                        <nav className="space-y-2">
                          {toc.map((item) => (
                            <a
                              key={item.id}
                              href={`#${item.id}`}
                              onClick={() => setShowMobileSidebar(false)}
                              className={`block text-sm hover:text-orange-400 transition-colors ${
                                item.level === 3 ? 'ml-4 text-gray-500' : 'text-gray-400'
                              } ${activeSection === item.id ? 'text-orange-400 font-semibold' : ''}`}
                            >
                              {item.title}
                            </a>
                          ))}
                        </nav>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Related Articles */}
          {relatedPosts && relatedPosts.length > 0 && (
            <motion.section variants={itemVariants} className="mt-16 pt-12 border-t border-gray-800 no-print">
              <h2 className="text-xl font-semibold mb-6 text-gray-400">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
