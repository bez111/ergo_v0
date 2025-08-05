"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Code, Users, Zap } from "lucide-react"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

export function CTASection() {
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

  const ctaActions = [
    {
      icon: Download,
      title: "Get Started",
      description: "Set up wallet & buy ERG",
      href: "/start",
      primary: true,
      label: "START NOW"
    },
    {
      icon: Code,
      title: "For Developers",
      description: "Build on Ergo",
      href: "/developers",
      primary: false,
      label: "START BUILDING"
    },
    {
      icon: Zap,
      title: "For Miners",
      description: "Secure the network",
      href: "/use/mining",
      primary: false,
      label: "START MINING"
    }
  ]

  if (!hasMounted) {
    return (
      <section className="py-20 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to Build the <span className="text-brand-primary-400">Future?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Join the movement for truly decentralized, programmable money. Start your Ergo journey today.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {ctaActions.map((action, index) => (
                <Link key={index} href={action.href} className={`group p-6 rounded-xl border transition-all duration-300 ${action.primary ? 'bg-brand-primary-500 border-brand-primary-500 text-black hover:bg-brand-primary-600' : 'bg-neutral-900/50 border-neutral-700 hover:border-brand-primary-500/30'}`}>
                  <action.icon className={`h-8 w-8 mx-auto mb-3 ${action.primary ? 'text-black' : 'text-brand-primary-400'}`} />
                  <h3 className={`font-bold mb-2 ${action.primary ? 'text-black' : 'text-white'}`}>{action.title}</h3>
                  <p className={`text-sm mb-4 ${action.primary ? 'text-black/70' : 'text-gray-400'}`}>{action.description}</p>
                  <span className={`text-xs font-mono font-bold ${action.primary ? 'text-black' : 'text-brand-primary-400'}`}>{action.label}</span>
                </Link>
              ))}
            </div>
            <Button asChild className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-mono px-8 py-4 text-lg">
              <Link href="/start">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-primary-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          animate={isInitialized ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.1 : 0 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to Get <span className="text-brand-primary-400">Started?</span>
            </h2>
            <div className="w-40 h-1 bg-brand-primary-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-mono">
              Choose your path and start using the future of programmable money today.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {ctaActions.map((action, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={action.href} 
                  className={`group block p-6 rounded-xl border transition-all duration-300 ${
                    action.primary 
                      ? 'bg-brand-primary-500 border-brand-primary-500 text-black hover:bg-brand-primary-600 hover:scale-105' 
                      : 'bg-neutral-900/50 border-neutral-700 hover:border-brand-primary-500/30 hover:bg-neutral-800/50 backdrop-blur-sm'
                  }`}
                >
                  <action.icon className={`h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200 ${
                    action.primary ? 'text-black' : 'text-brand-primary-400'
                  }`} />
                  <h3 className={`font-bold mb-2 ${action.primary ? 'text-black' : 'text-white group-hover:text-brand-primary-400'} transition-colors duration-200`}>
                    {action.title}
                  </h3>
                  <p className={`text-sm mb-4 ${action.primary ? 'text-black/70' : 'text-gray-400'}`}>
                    {action.description}
                  </p>
                  <span className={`text-xs font-mono font-bold ${action.primary ? 'text-black' : 'text-brand-primary-400'}`}>
                    {action.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.6 : 0 }}
          >
            <Button asChild className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-mono px-8 py-4 text-lg transition-all duration-200 hover:scale-105">
              <Link href="/start">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.8 : 0 }}
            className="mt-8"
          >
            <p className="text-gray-500 font-mono text-sm">
              No registration required • Open source • Decentralized
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 