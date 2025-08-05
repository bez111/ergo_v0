"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Lock, Zap, RefreshCw, Users, BookOpen, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

export function Differentiation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

  const differentiators = [
    {
      text: "FAIR LAUNCH & PROOF-OF-WORK",
      icon: Shield,
      description:
        "Launched with no ICO or premine, secured by Autolykos v2 – an ASIC-resistant and energy-efficient Proof-of-Work algorithm ensuring fair distribution and robust security from day one.",
    },
    {
      text: "eUTXO & ERGOSCRIPT FOR ADVANCED DEFI",
      icon: Zap,
      description:
        "The extended UTXO model combined with our powerful language, ErgoScript, enables highly secure, predictable, and expressive financial applications, pushing the boundaries of DeFi.",
    },
    {
      text: "STORAGE RENT FOR LONG-TERM SUSTAINABILITY",
      icon: RefreshCw,
      description:
        'A novel mechanism ensuring network health and predictable operational costs by recycling fees from unused data ("dust") back to miners, preventing bloat and keeping the chain efficient.',
    },
    {
      text: "RESEARCH-DRIVEN INNOVATION",
      icon: BookOpen,
      description:
        "Built on peer-reviewed academic research and first principles, Ergo fosters robust, groundbreaking solutions designed for real-world longevity.",
    },
    {
      text: "ROBUST OPTIONAL PRIVACY (Σ-PROTOCOLS)",
      icon: Lock,
      description:
        "Leveraging cutting-edge Sigma protocols, Ergo delivers powerful, optional on-chain privacy for both transactions and dApps, giving users control over their financial data.",
    },
    {
      text: "COMMUNITY-DRIVEN GOVERNANCE",
      icon: Users,
      description:
        "Ergo is governed and developed by its global community, free from venture capital or corporate control.",
    },
  ]

  if (!hasMounted) {
    return (
      <section className="py-16 relative overflow-hidden bg-black border-t border-b border-neutral-700">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white text-center m-0">
                HOW IS ERGO DIFFERENT?
              </h2>
            </div>
            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-neutral-700 bg-neutral-900/50">
                  <div className="rounded-full bg-brand-primary-500/20 p-3 flex-shrink-0 border border-brand-primary-500/30">
                    <item.icon className="h-6 w-6 text-brand-primary-400" />
                  </div>
                  <div>
                    <p className="text-lg font-medium font-mono tracking-wider">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-b border-neutral-700">
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="initial"
          animate={isInitialized ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.1 : 0 }}
            className="flex justify-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white text-center m-0">
              <span className="text-brand-primary-400">HOW IS ERGO</span> DIFFERENT?
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="space-y-6"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover="hover"
                whileTap="tap"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={cn(
                    "flex items-start gap-6 p-6 rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 relative overflow-hidden group hover:border-brand-primary-500/30 hover:bg-neutral-800/50",
                    hoveredIndex === index ? "border-brand-primary-500/50 bg-brand-primary-500/5" : "",
                  )}
                >
                  {/* Glitch corner effect */}
                  <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute rotate-45 bg-brand-primary-500/20 text-brand-primary-400 font-mono text-[8px] py-0.5 px-4 font-bold -right-5 top-3">
                      ERGO
                    </div>
                  </div>

                  <div
                    className={cn(
                      "w-12 h-12 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110",
                      hoveredIndex === index ? "bg-brand-primary-500/30" : "",
                    )}
                  >
                    <item.icon
                      className={cn(
                        "h-6 w-6 text-brand-primary-400 transition-transform duration-300",
                        hoveredIndex === index ? "scale-110" : "scale-100",
                      )}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-lg font-semibold font-mono tracking-wider group-hover:text-brand-primary-400 transition-colors duration-200">
                      {item.text}
                    </p>
                    {hoveredIndex === index && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-400 mt-3 font-mono leading-relaxed"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </div>

                  {/* Border highlight on hover */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 border border-brand-primary-500/50 rounded-xl pointer-events-none">
                      <div className="absolute top-0 left-0 w-1 h-1 bg-brand-primary-500"></div>
                      <div className="absolute top-0 right-0 w-1 h-1 bg-brand-primary-500"></div>
                      <div className="absolute bottom-0 left-0 w-1 h-1 bg-brand-primary-500"></div>
                      <div className="absolute bottom-0 right-0 w-1 h-1 bg-brand-primary-500"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
