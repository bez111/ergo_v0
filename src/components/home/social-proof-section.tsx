"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Users, Activity, DollarSign } from "lucide-react"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

export function SocialProofSection() {
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

  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Community",
      description: "Developers, miners, and users worldwide"
    },
    {
      icon: TrendingUp,
      value: "$150M+",
      label: "Market Cap",
      description: "Growing ecosystem value"
    },
    {
      icon: Activity,
      value: "99.9%",
      label: "Uptime",
      description: "Network reliability since launch"
    },
    {
      icon: DollarSign,
      value: "$50M+",
      label: "Total Value Locked",
      description: "In DeFi applications"
    }
  ]

  const trustedBy = [
    "Coinbase", "KuCoin", "Gate.io", "MEXC", "Changelly", "ChangeNOW"
  ]

  if (!hasMounted) {
    return (
      <section className="py-12 bg-neutral-950 border-b border-neutral-800">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <p className="text-gray-400 font-mono text-sm">TRUSTED BY LEADING EXCHANGES</p>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
              {trustedBy.map((exchange, index) => (
                <div key={index} className="text-gray-600 font-mono text-sm">{exchange}</div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-neutral-900/50 border border-neutral-700">
                <stat.icon className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-neutral-950 border-b border-neutral-800">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-8"
          initial="initial"
          animate={isInitialized ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.p 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.1 : 0 }}
            className="text-gray-400 font-mono text-sm tracking-wider"
          >
            TRUSTED BY LEADING EXCHANGES
          </motion.p>
          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap justify-center items-center gap-8 mt-4"
          >
            {trustedBy.map((exchange, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                transition={{ delay: isInitialized ? (0.2 + index * 0.05) : 0 }}
                className="text-gray-600 font-mono text-sm hover:text-orange-400 transition-colors duration-200"
              >
                {exchange}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="initial"
          animate={isInitialized ? "animate" : "initial"}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              transition={{ delay: isInitialized ? (0.4 + index * 0.1) : 0 }}
              className="text-center p-6 rounded-xl bg-neutral-900/50 border border-neutral-700 hover:border-orange-500/30 hover:bg-neutral-800/50 transition-all duration-300 backdrop-blur-sm group"
            >
              <stat.icon className="h-8 w-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-orange-400 font-mono font-semibold mb-2">{stat.label}</div>
              <div className="text-xs text-gray-500 font-mono">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 