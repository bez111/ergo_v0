"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect */

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Eye, Coins } from "lucide-react"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

export function ValuePropositionSection() {
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
        staggerChildren: 0.15
      }
    }
  }

  const staggerItem = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const valueProps = [
    {
      icon: Shield,
      title: "Bitcoin-Level Security",
      description: "Proven Proof-of-Work consensus with ASIC resistance ensures true decentralization and network security.",
      benefit: "Your funds are protected by cryptographic guarantees",
      stat: "99.9% uptime since launch"
    },
    {
      icon: Zap,
      title: "Smart Contracts Done Right",
      description: "eUTXO model combines Bitcoin's security with Ethereum's programmability—without the trade-offs.",
      benefit: "Build DeFi applications with confidence",
      stat: "Zero contract exploits to date"
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "Sigma protocols provide mathematical privacy guarantees while maintaining auditability.",
      benefit: "Control your financial privacy",
      stat: "Cryptographically secure privacy"
    },
    {
      icon: Coins,
      title: "Fair & Sustainable",
      description: "No pre-mine, no VCs, plus storage rent mechanism ensures long-term blockchain health.",
      benefit: "Truly community-owned blockchain",
      stat: "100% fair launch"
    }
  ]

  if (!hasMounted) {
    return (
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-orange-400">Ergo?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The only blockchain that combines proven security, advanced smart contracts, and user sovereignty without compromise.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {valueProps.map((prop, index) => (
                <div key={index} className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-700">
                  <prop.icon className="h-12 w-12 text-orange-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">{prop.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{prop.description}</p>
                  <p className="text-orange-400 font-semibold font-mono">{prop.benefit}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-mono px-8 py-4 text-lg">
                <Link href="/start">Experience Ergo Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          animate={isInitialized ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.1 : 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-orange-400">Perfect</span> Blockchain
            </h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
              Bitcoin's proven security + Ethereum's smart contracts + unique innovations = Ergo
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-700 hover:border-orange-500/30 hover:bg-neutral-800/50 transition-all duration-300 backdrop-blur-sm group"
              >
                <prop.icon className="h-12 w-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-200">
                  {prop.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {prop.description}
                </p>
                                 <div className="space-y-3">
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                     <p className="text-orange-400 font-semibold font-mono text-sm">
                       {prop.benefit}
                     </p>
                   </div>
                   <div className="bg-neutral-800/50 px-3 py-2 rounded-lg border border-neutral-700">
                     <p className="text-xs text-gray-400 font-mono">{prop.stat}</p>
                   </div>
                 </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.6 : 0 }}
            className="text-center mt-12"
          >
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-mono px-8 py-4 text-lg transition-all duration-200">
              <Link href="/start">Experience Ergo Today</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 