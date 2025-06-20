"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Eye, Heart, Clock, Twitter, Linkedin, Copy, Check, UserCircle, Calendar } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog/blog-card"
import Link from "next/link"
import { useState, MouseEvent } from "react"
import Image from "next/image"

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleShare = async (platform: 'twitter' | 'linkedin' | 'copy') => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;

    if (platform === 'copy') {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
    }

    const shareUrl = platform === 'twitter'
        ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        : `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden" onMouseMove={handleMouseMove}>
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 136, 0, 0.1), transparent 80%)`
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 sm:py-16">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          {/* Back Button and Metadata */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>
          
          <motion.header variants={itemVariants}>
            <div className="mb-4">
              <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pb-4 leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">{post.description}</p>
          </motion.header>

          <motion.div variants={itemVariants} className="my-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-gray-400 text-sm border-y border-gray-800 py-4">
              <div className="flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-orange-400" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-400" />
                <span>{post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-orange-400" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="grid grid-cols-12 gap-8">
            {/* Share Tools */}
            <aside className="col-span-12 md:col-span-1">
              <div className="sticky top-24 flex md:flex-col gap-4">
                <button onClick={handleLike} className="p-2 rounded-full bg-gray-800/50 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors">
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current text-red-400' : ''}`} />
                </button>
                <button onClick={() => handleShare('twitter')} className="p-2 rounded-full bg-gray-800/50 hover:bg-sky-500/20 text-gray-400 hover:text-sky-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button onClick={() => handleShare('linkedin')} className="p-2 rounded-full bg-gray-800/50 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button onClick={() => handleShare('copy')} className="p-2 rounded-full bg-gray-800/50 hover:bg-green-500/20 text-gray-400 hover:text-green-400 transition-colors">
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </aside>
            
            {/* Article Body */}
            <main className="col-span-12 md:col-span-8">
              {post.image && (
                <div className="relative aspect-video rounded-xl overflow-hidden mb-8 border border-gray-800">
                  <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                </div>
              )}
              <div className="prose prose-lg prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-orange-400 prose-strong:text-white prose-a:text-orange-400 hover:prose-a:text-orange-300 prose-blockquote:border-orange-500 prose-blockquote:bg-gray-900/50">
                {/* NOTE: This is placeholder content. A real app would parse markdown here. */}
                <p>In the dynamic world of blockchain, Ergo continues to distinguish itself through a steadfast commitment to first-principles thinking and grassroots community building. This article delves into the latest ecosystem developments, highlighting the innovative strides being made in DeFi, tooling, and core protocol enhancements.</p>
                
                <h2>The Rise of Ergo DeFi 2.0</h2>
                <p>The Ergo DeFi landscape is undergoing a significant transformation. With the advent of new protocols like Spectrum.fi and ErgoRaffle, users are gaining access to more sophisticated and user-friendly financial tools. We'll explore how these platforms leverage the unique capabilities of the extended UTXO (eUTXO) model to offer enhanced security and composability compared to traditional account-based systems.</p>

                <blockquote>"Ergo's eUTXO model isn't just a technical curiosity; it's the bedrock of a more secure and predictable DeFi ecosystem." - Alex Chepurnoy, Ergo Co-Founder</blockquote>

                <p>We also examine the growth of lending platforms and the upcoming launch of new algorithmic stablecoins, which promise to further stabilize and enrich the ecosystem's financial infrastructure.</p>
                
                <h2>Developer Tooling and Onboarding</h2>
                <p>A thriving ecosystem is built by its developers. Recognizing this, the Ergo Foundation has doubled down on improving the developer experience. Key initiatives include:</p>
                <ul>
                    <li><strong>The Nautilus Wallet dApp Connector:</strong> A standardized way for dApps to communicate with user wallets, simplifying development and improving user experience.</li>
                    <li><strong>Ergo-Node v5.0:</strong> A major update that brings performance improvements and new features for node operators and developers.</li>
                    <li><strong>Comprehensive Documentation:</strong> The Ergo Docs have been overhauled, providing clearer, more accessible guides for builders of all skill levels.</li>
                </ul>
                <p>These efforts are lowering the barrier to entry, making it easier than ever for developers to start building on Ergo.</p>
              </div>
            </main>
            
            {/* Author Card & TOC */}
            <aside className="col-span-12 md:col-span-3">
              <div className="sticky top-24 space-y-8">
                <div className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800">
                  <h3 className="font-bold text-lg mb-4 text-white">About the Author</h3>
                  <div className="flex items-center gap-4 mb-4">
                    {post.author.avatar && <Image src={post.author.avatar} alt={post.author.name} width={48} height={48} className="rounded-full" />}
                    <div>
                      <h4 className="font-semibold text-white">{post.author.name}</h4>
                      <p className="text-sm text-gray-400">{post.author.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{post.author.bio}</p>
                </div>

                {/* NOTE: A real app would generate this TOC from markdown headings */}
                <div className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800">
                    <h3 className="font-bold text-lg mb-4 text-white">In this article</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Ergo DeFi 2.0</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Developer Tooling</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Community Growth</a></li>
                    </ul>
                </div>
              </div>
            </aside>
          </motion.div>

          {/* Related Articles */}
          <motion.section variants={itemVariants} className="mt-16 sm:mt-24 pt-16 border-t border-gray-800">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
