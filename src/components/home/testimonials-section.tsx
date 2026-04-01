"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect */

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Quote, Github, Twitter, Linkedin } from "lucide-react"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

export function TestimonialsSection() {
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

  const testimonials = [
    {
      quote: "Ergo represents the future of decentralized finance - combining Bitcoin's security with Ethereum's programmability, plus unique innovations like storage rent and built-in privacy.",
      author: "Alex Chepurnoy",
      role: "Core Developer & Co-founder",
      avatar: "AC",
      social: {
        icon: Github,
        handle: "@kushti"
      }
    },
    {
      quote: "The eUTXO model is a breakthrough that solves many of the scalability and security issues we see in other blockchains. Ergo's approach to smart contracts is elegant and powerful.",
      author: "Kushti Research",
      role: "Blockchain Researcher",
      avatar: "KR",
      social: {
        icon: Twitter,
        handle: "@kushti_ru"
      }
    },
    {
      quote: "As a miner, I love that Ergo remains committed to fair, ASIC-resistant mining. The Autolykos algorithm ensures true decentralization without the energy waste of other PoW chains.",
      author: "Mining Pool Operator",
      role: "Community Validator",
      avatar: "MP",
      social: {
        icon: Twitter,
        handle: "@ergo_mining"
      }
    },
    {
      quote: "Ergo's oracle pools are the missing piece of the DeFi puzzle. Finally, we have truly decentralized, reliable data feeds that don't depend on centralized providers.",
      author: "DeFi Builder",
      role: "dApp Developer",
      avatar: "DB",
      social: {
        icon: Github,
        handle: "@defi_builder"
      }
    },
    {
      quote: "The privacy features in Ergo are game-changing. Sigma protocols provide mathematical guarantees for confidentiality while maintaining the transparency needed for verification.",
      author: "Privacy Advocate",
      role: "Security Researcher",
      avatar: "PA",
      social: {
        icon: Linkedin,
        handle: "@privacy_advocate"
      }
    },
    {
      quote: "Ergo is the only chain where agents can transact without pre-funded wallets or KYC. eUTXO gives deterministic costs, Babel Fees remove gas bootstrapping, and ErgoScript turns every payment into a contract. It's agent-native by design.",
      author: "Agent Economy Builder",
      role: "AI Infrastructure Developer",
      avatar: "AE",
      social: {
        icon: Github,
        handle: "@ergo-agent-economy"
      }
    }
  ]

  if (!hasMounted) {
    return (
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What The <span className="text-orange-400">Community</span> Says
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Developers, researchers, and users worldwide are building the future with Ergo.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.author} className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-700">
                  <Quote className="h-8 w-8 text-orange-400 mb-4" />
                  <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center text-orange-400 font-mono font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
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
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
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
              What The <span className="text-orange-400">Community</span> Says
            </h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
              Developers, researchers, and users worldwide are building the future with Ergo.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-700 hover:border-orange-500/30 hover:bg-neutral-800/50 transition-all duration-300 backdrop-blur-sm group"
              >
                <Quote className="h-8 w-8 text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-gray-300 mb-8 leading-relaxed font-mono text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center text-orange-400 font-mono font-bold group-hover:scale-110 transition-transform duration-200">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold group-hover:text-orange-400 transition-colors duration-200">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500 font-mono mb-2">
                      {testimonial.role}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-orange-400">
                      <testimonial.social.icon className="h-3 w-3" />
                      <span className="font-mono">{testimonial.social.handle}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            transition={{ delay: isInitialized ? 0.8 : 0 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 font-mono text-sm">
              Join thousands of developers, miners, and users building on Ergo
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 