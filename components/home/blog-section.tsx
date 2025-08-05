"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

// Mock data for blog posts - in a real app, this would come from an API or CMS
const posts = [
  {
    title: "Ergo's Extended UTXO Model: A Deep Dive",
    date: "March 15, 2024",
    summary: "Exploring how Ergo's eUTXO model enables more secure and scalable smart contracts compared to traditional account-based models.",
    link: "/blog/eutxo-deep-dive"
  },
  {
    title: "Autolykos v2: The Future of ASIC-Resistant Mining",
    date: "March 10, 2024",
    summary: "Understanding Ergo's innovative mining algorithm and its role in maintaining network decentralization.",
    link: "/blog/autolykos-v2"
  },
  {
    title: "Building on Ergo: A Developer's Guide",
    date: "March 5, 2024",
    summary: "A comprehensive guide for developers looking to build decentralized applications on the Ergo platform.",
    link: "/blog/developer-guide"
  }
]

export function BlogSection() {
  const [hasMounted, setHasMounted] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()
  const animationConfig = getAnimationConfig(isMobile, prefersReducedMotion)

  useEffect(() => {
    setHasMounted(true)
    const timer = setTimeout(() => {
      setIsInitialized(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const scaleOnHover = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  }

  if (!hasMounted) {
    return (
      <section className="py-16 relative overflow-hidden bg-black border-t border-neutral-700">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">LATEST FROM THE ERGO BLOG</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {posts.map((post, index) => (
                <Link key={index} href={post.link} className="group block bg-neutral-900/50 rounded-xl p-6 border border-neutral-700">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-3">{post.date}</p>
                  <p className="text-neutral-300 mb-4">{post.summary}</p>
                  <span className="inline-flex items-center text-brand-primary-400 group-hover:translate-x-1 transition-transform">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="inline-flex items-center text-brand-primary-400 hover:text-brand-primary-300 transition-colors">
                View all articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-neutral-700">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          animate={isInitialized ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.1 : 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-brand-primary-400">LATEST FROM THE</span> ERGO BLOG
            </h2>
            <div className="w-24 h-1 bg-brand-primary-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            {posts.map((post, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover="hover"
                whileTap="tap"
                className="cursor-pointer"
              >
                <Link
                  href={post.link}
                  className="group block bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-brand-primary-500/30 hover:bg-neutral-800/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-3 font-mono">{post.date}</p>
                  <p className="text-neutral-300 mb-4 leading-relaxed">{post.summary}</p>
                  <span className="inline-flex items-center text-brand-primary-400 group-hover:translate-x-1 transition-transform duration-200 font-mono">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.4 : 0 }}
            className="text-center mt-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-primary-400 hover:text-brand-primary-300 transition-colors duration-200 font-mono"
            >
              View all articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 