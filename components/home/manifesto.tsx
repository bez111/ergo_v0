"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

export function Manifesto() {
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

  if (!hasMounted) {
    return (
      <section className="py-16 relative overflow-hidden bg-black border-t border-b border-neutral-700">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="opacity-100">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                MANIFESTO
              </h2>
              <div className="space-y-6 font-mono text-gray-300 border-l-2 border-neutral-600 pl-6">
                <p>In a world of increasing surveillance and control, we stand for financial freedom and privacy.</p>
                <p>Ergo is built on the core principles that drove the original crypto revolution: open, permissionless, secure systems that empower regular people.</p>
                <p>We reject the centralization of power. We reject the surveillance state. We reject the corporate capture of our financial systems.</p>
                <p>Ergo provides the tools for people to secure their financial interactions through contractual money - programmable, private, and unstoppable.</p>
                <p className="text-lg font-bold text-brand-primary-400">This is not just technology. This is resistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-b border-neutral-700">
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-brand-primary-400">MANIFESTO</span>
            </h2>
            <div className="w-24 h-1 bg-brand-primary-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="space-y-6 font-mono text-gray-300 border-l-2 border-brand-primary-500/50 pl-6 bg-neutral-900/30 p-6 rounded-r-xl backdrop-blur-sm"
          >
            <motion.p variants={staggerItem}>
              In a world of increasing surveillance and control, we stand for financial freedom and privacy.
            </motion.p>

            <motion.p variants={staggerItem}>
              Ergo is built on the core principles that drove the original crypto revolution:{" "}
              <span className="text-brand-primary-400 font-semibold">open, permissionless, secure</span> systems that empower regular people.
            </motion.p>

            <motion.p variants={staggerItem}>
              We reject the centralization of power. We reject the surveillance state. We reject the corporate capture
              of our financial systems.
            </motion.p>

            <motion.p variants={staggerItem}>
              Ergo provides the tools for people to secure their financial interactions through{" "}
              <span className="text-brand-primary-400 font-semibold">contractual money</span> - programmable, private, and unstoppable.
            </motion.p>

            <motion.p 
              variants={staggerItem}
              className="text-lg font-bold text-brand-primary-400 border-t border-brand-primary-500/30 pt-4 mt-6"
            >
              This is not just technology. This is resistance.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
