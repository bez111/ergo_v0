"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Code, RefreshCw, Lock, Database, Cpu, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function CorePillars() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hasMounted, setHasMounted] = useState(false)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Основные 3 карточки
  const mainPillars = [
    {
      title: "SECURITY (POW)",
      description: "ASIC-resistant Autolykos v2 PoW ensures robust decentralization, fair mining, and long-term security for everyone.",
      icon: Shield,
    },
    {
      title: "PROGRAMMABILITY (eUTXO + ERGOSCRIPT)",
      description: "Formally verifiable, expressive, and secure contracts—powered by ErgoScript and the advanced eUTXO model.",
      icon: Code,
    },
    {
      title: "SUSTAINABILITY (STORAGE RENT)",
      description: "Storage rent and predictable costs maintain long-term network health and prevent blockchain bloat.",
      icon: RefreshCw,
    },
  ]

  // Дополнительные 3 карточки
  const additionalPillars = [
    {
      title: "PRIVACY",
      description: "Protocol-level privacy using Sigma protocols—enabling confidential dApps and transactions.",
      icon: Lock,
    },
    {
      title: "ORACLE POOLS",
      description: "The first truly decentralized oracle pools—reliable, permissionless off-chain data access with built-in incentives.",
      icon: Database,
    },
    {
      title: "DEV FRIENDLY",
      description: "World-class docs, open tools, and a vibrant, collaborative community make building on Ergo easy and innovative.",
      icon: Cpu,
    },
  ]

  const allPillars = [...mainPillars, ...(showMore ? additionalPillars : [])]

  if (!hasMounted) {
    return (
      <section className="py-16 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">CORE PILLARS</h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg font-mono">
              <span className="text-orange-400">&gt;</span> Ergo combines proven principles with cutting-edge cryptography
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPillars.map((pillar, index) => (
                <div key={index} className="flex flex-col items-center gap-3 p-6 rounded-lg border border-neutral-700 bg-neutral-900/50 h-80">
                  <div className="rounded-full bg-orange-500/20 p-3 border border-orange-500/30 flex-shrink-0">
                    <pillar.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold font-mono tracking-wider text-center flex-shrink-0">{pillar.title}</h3>
                  <p className="text-sm text-gray-400 text-center font-mono flex-grow flex items-center">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-orange-400">CORE</span> PILLARS
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto max-w-[700px] text-gray-400 md:text-lg font-mono"
          >
            <span className="text-orange-400">&gt;</span> Ergo combines proven principles with cutting-edge cryptography
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {allPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col items-center gap-4 p-8 rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden group hover:border-orange-500/30 hover:bg-neutral-800/50 transition-all duration-300 h-80">
                  {/* Hover effect */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-orange-500/5 opacity-0 transition-opacity duration-300",
                      hoveredIndex === index ? "opacity-100" : "",
                    )}
                  ></div>

                  <div
                    className={cn(
                      "w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 flex-shrink-0",
                      hoveredIndex === index ? "bg-orange-500/30" : "",
                    )}
                  >
                    <pillar.icon
                      className={cn(
                        "h-8 w-8 text-orange-400 transition-all duration-300",
                        hoveredIndex === index ? "scale-110" : "",
                      )}
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold font-mono tracking-wider z-10 group-hover:text-orange-400 transition-colors duration-200 text-center flex-shrink-0">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 text-center z-10 font-mono leading-relaxed flex-grow flex items-center">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Show More Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 font-mono uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <span>{showMore ? 'Show Less' : 'Show More'}</span>
            {showMore ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
