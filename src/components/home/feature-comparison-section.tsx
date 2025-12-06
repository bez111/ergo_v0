"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect */

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, X, Star } from "lucide-react"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

export function FeatureComparisonSection() {
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

  const features = [
    {
      feature: "ASIC-Resistant Mining",
      ergo: true,
      bitcoin: false,
      ethereum: false,
      description: "Fair mining for everyone"
    },
    {
      feature: "Smart Contracts",
      ergo: true,
      bitcoin: false,
      ethereum: true,
      description: "Programmable money"
    },
    {
      feature: "Built-in Privacy",
      ergo: true,
      bitcoin: false,
      ethereum: false,
      description: "Σ-protocols for confidentiality"
    },
    {
      feature: "Storage Rent",
      ergo: true,
      bitcoin: false,
      ethereum: false,
      description: "Long-term sustainability"
    },
    {
      feature: "Oracle Pools",
      ergo: true,
      bitcoin: false,
      ethereum: false,
      description: "Decentralized data feeds"
    },
    {
      feature: "No Pre-mine",
      ergo: true,
      bitcoin: true,
      ethereum: false,
      description: "Fair launch principles"
    },
    {
      feature: "Energy Efficient",
      ergo: true,
      bitcoin: false,
      ethereum: true,
      description: "Sustainable blockchain"
    },
    {
      feature: "eUTXO Model",
      ergo: true,
      bitcoin: false,
      ethereum: false,
      description: "Best of both worlds"
    }
  ]

  const CheckIcon = ({ hasFeature }: { hasFeature: boolean }) => (
    hasFeature ? (
      <Check className="h-5 w-5 text-orange-400" />
    ) : (
      <X className="h-5 w-5 text-orange-400/50" />
    )
  )

  if (!hasMounted) {
    return (
      <section className="py-20 bg-neutral-950 border-y border-neutral-800">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Ergo</span> vs The Competition
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how Ergo combines the best features from Bitcoin and Ethereum while solving their limitations.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-700">
                    <th className="text-left py-4 px-6 text-white font-mono">Feature</th>
                    <th className="text-center py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <Star className="h-5 w-5 text-orange-400" />
                        <span className="text-orange-400 font-bold">Ergo</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-6 text-gray-400">Bitcoin</th>
                    <th className="text-center py-4 px-6 text-gray-400">Ethereum</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((item, index) => (
                    <tr key={index} className="border-b border-neutral-800/50 hover:bg-neutral-900/30">
                      <td className="py-4 px-6">
                        <div>
                          <div className="text-white font-semibold">{item.feature}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <CheckIcon hasFeature={item.ergo} />
                      </td>
                      <td className="text-center py-4 px-6">
                        <CheckIcon hasFeature={item.bitcoin} />
                      </td>
                      <td className="text-center py-4 px-6">
                        <CheckIcon hasFeature={item.ethereum} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-neutral-950 border-y border-neutral-800">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="initial"
          animate={isInitialized ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.1 : 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-orange-400">Ergo</span> vs The Competition
            </h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
              See how Ergo combines the best features from Bitcoin and Ethereum while solving their limitations.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.3 : 0 }}
            className="overflow-x-auto"
          >
            <table className="w-full rounded-xl overflow-hidden bg-neutral-900/30 backdrop-blur-sm">
              <thead>
                <tr className="border-b border-neutral-700 bg-neutral-900/50">
                  <th className="text-left py-6 px-6 text-white font-mono tracking-wider">Feature</th>
                  <th className="text-center py-6 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="h-5 w-5 text-orange-400" />
                      <span className="text-orange-400 font-bold font-mono">ERGO</span>
                    </div>
                  </th>
                  <th className="text-center py-6 px-6 text-gray-400 font-mono">BITCOIN</th>
                  <th className="text-center py-6 px-6 text-gray-400 font-mono">ETHEREUM</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <motion.tr 
                    key={index}
                    variants={staggerItem}
                    transition={{ delay: isInitialized ? (0.4 + index * 0.05) : 0 }}
                    className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors duration-200"
                  >
                    <td className="py-6 px-6">
                      <div>
                        <div className="text-white font-semibold mb-1">{item.feature}</div>
                        <div className="text-sm text-gray-500 font-mono">{item.description}</div>
                      </div>
                    </td>
                    <td className="text-center py-6 px-6">
                                                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${item.ergo ? 'bg-orange-400/20' : 'bg-orange-400/10'}`}>
                        <CheckIcon hasFeature={item.ergo} />
                      </div>
                    </td>
                    <td className="text-center py-6 px-6">
                                                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${item.bitcoin ? 'bg-orange-400/20' : 'bg-orange-400/10'}`}>
                        <CheckIcon hasFeature={item.bitcoin} />
                      </div>
                    </td>
                    <td className="text-center py-6 px-6">
                                                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${item.ethereum ? 'bg-orange-400/20' : 'bg-orange-400/10'}`}>
                        <CheckIcon hasFeature={item.ethereum} />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.8 : 0 }}
            className="text-center mt-8"
          >
            <p className="text-orange-400 font-mono text-sm">
              * Ergo = Bitcoin's Security + Ethereum's Functionality + Unique Innovations
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 