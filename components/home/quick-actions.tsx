"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Wallet, Layers, Users, CreditCard, Cpu } from "lucide-react"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

export function QuickActions() {
  const [hasMounted, setHasMounted] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  
  // Responsive и accessibility hooks with hydration safety
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()
  const animationConfig = getAnimationConfig(isMobile, prefersReducedMotion)

  // Prevent hydration mismatch and add initialization delay
  useEffect(() => {
    setHasMounted(true)
    const timer = setTimeout(() => {
      setIsInitialized(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const scaleOnHover = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  const actions = [
    {
      title: "GET WALLET",
      description: "Set up your Ergo wallet",
      icon: Wallet,
      href: "/wallet",
      ariaLabel: "Get started with Ergo wallet setup",
    },
    {
      title: "BUY ERG",
      description: "Purchase Ergo tokens",
      icon: CreditCard,
      href: "/use/get-erg",
      ariaLabel: "Learn how to buy Ergo tokens",
    },
    {
      title: "TRY A DAPP",
      description: "Explore decentralized apps",
      icon: Layers,
      href: "/ecosystem",
      ariaLabel: "Explore Ergo decentralized applications",
    },
    {
      title: "MINE ERG",
      description: "Secure the network",
      icon: Cpu,
      href: "/use/mining",
      ariaLabel: "Start mining Ergo and secure the network",
    },
    {
      title: "JOIN COMMUNITY",
      description: "Connect with Ergo users",
      icon: Users,
      href: "/start/community",
      ariaLabel: "Join the Ergo community",
    },
  ]

  // Simplified loading state for SSR hydration safety
  if (!hasMounted) {
    return (
      <section className="py-12 relative overflow-hidden bg-black" aria-label="Quick Actions">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {actions.map((action, index) => (
              <div key={index} className="group flex flex-col items-center text-center gap-3 p-4 rounded-lg border border-primary/30 bg-black">
                <div className="rounded-full bg-primary/10 p-3 border border-primary/30">
                  <action.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-bold tracking-wider text-sm">{action.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{action.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 relative overflow-hidden bg-black" aria-label="Quick Actions">
      <div className="container px-4 md:px-6">
        <motion.div 
          {...fadeInUp}
          transition={{ delay: isInitialized ? 0.1 : 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-brand-primary-400">Quick</span> Actions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Essential tools and resources to get started with Ergo
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" role="list">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInitialized ? 1 : 0, y: 0 }}
              transition={{ delay: isInitialized ? (0.2 + index * 0.1) : 0 }}
              whileHover="hover"
              whileTap="tap"
              variants={scaleOnHover}
            >
              <Link
                href={action.href}
                className="group flex flex-col items-center text-center gap-3 p-6 rounded-xl border border-neutral-700 bg-neutral-900/50 hover:border-brand-primary-500/30 hover:bg-neutral-800/50 transition-all duration-300 backdrop-blur-sm"
                aria-label={action.ariaLabel}
                role="listitem"
              >
                <div className="w-12 h-12 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <action.icon className="h-6 w-6 text-brand-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-brand-primary-400 transition-colors duration-200">
                    {action.title}
                  </h3>
                  <p className="text-xs text-gray-400">{action.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
