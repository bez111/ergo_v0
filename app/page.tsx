"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { 
  Code, Shield, Zap, Layers, Rocket, FileText, 
  ArrowRight, CheckCircle, XCircle, AlertTriangle, Info,
  Download, Search, Settings, Bell, Target, Copy,
  Check, X, Loader2, Lock, Globe, Terminal, Database,
  TrendingUp, Users, Award, Cpu, Eye, EyeOff, ExternalLink,
  User, Layout, Edit, Type, Palette, Brain, Building,
  Network, Coins, Lightbulb, BookOpen, GitBranch, ChevronRight,
  Heart, Fingerprint, ShieldCheck, Minimize2, Sparkles,
  Code2, Moon, Sun, Monitor, Play, Figma
} from "lucide-react"
import { 
  HeroPattern, FeatureGrid, StatsGrid, FeatureCard, CodeSnippet,
  type FeatureGridItem, type StatsGridItem
} from "@/components/ui-kit/patterns"
import { 
  MathematicalPattern, CryptographicVisualization, 
  FloatingParticles, HexagonalGrid, GlitchHex, UndergroundManifesto, GlitchButton, WatermarkHex
} from "@/components/ui-kit/signature-effects"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  
  // Responsive и accessibility hooks with hydration safety
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()
  const animationConfig = getAnimationConfig(isMobile, prefersReducedMotion)

  // Prevent hydration mismatch and add initialization delay
  useEffect(() => {
    setHasMounted(true)
    // Небольшая задержка для предотвращения мерцания
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

  // Simplified loading state for SSR hydration safety
  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-brand-primary-400 mb-4">ERGO</div>
          <div className="text-gray-400">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-black text-white relative min-h-screen">
      {/* Background Effects */}
      {isInitialized && (
        <>
          <HexagonalGrid className="opacity-[0.02]" />
          <FloatingParticles className="opacity-20" />
          <MathematicalPattern className="opacity-[0.03]" />
          <WatermarkHex className="opacity-[0.01] pointer-events-none" />
        </>
      )}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        
        {/* Hero Section */}
        <section className="pb-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
                animate={{ opacity: isInitialized ? 1 : 0, x: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: isInitialized ? 0.1 : 0 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
                    <span className="text-brand-primary-400">ERGO</span>
                  </h1>
                  <div className="group w-12 h-12 sm:w-16 sm:h-16">
                    <GlitchHex size={48} />
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                  Decentralized Money for a Free Society
                </h2>
                <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  Join a movement for open, programmable, and censorship-resistant finance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Link
                      href="/start"
                      className="inline-flex items-center gap-2 bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
                      aria-label="Get started with Ergo"
                    >
                      <Rocket className="w-5 h-5" />
                      get-started
                    </Link>
                  </motion.div>
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Link
                      href="/build"
                      className="inline-flex items-center gap-2 bg-transparent border-2 border-brand-primary-500 text-brand-primary-400 hover:bg-brand-primary-500/10 font-semibold px-8 py-3 rounded-xl backdrop-blur-sm focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
                      aria-label="Start building on Ergo"
                    >
                      <Code className="w-5 h-5" />
                      Start Building
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
                animate={{ opacity: isInitialized ? 1 : 0, x: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: isInitialized ? 0.3 : 0 }}
                className="relative"
              >
                {/* Cryptographic Visualization */}
                <CryptographicVisualization className="absolute top-0 right-0 w-32 h-32 opacity-30" />
                
                <div className="space-y-4">
                  {[
                    { icon: Shield, title: "Secure PoW", desc: "Proof of Work security" },
                    { icon: Zap, title: "Smart Contracts", desc: "Advanced smart contract capabilities" },
                    { icon: Code, title: "Privacy", desc: "Enhanced privacy features" },
                    { icon: Layers, title: "eUTXO Model", desc: "Extended UTXO model" }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                      animate={{ opacity: isInitialized ? 1 : 0, x: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, delay: isInitialized ? (0.5 + index * 0.1) : 0 }}
                      whileHover={{ x: prefersReducedMotion ? 0 : 5, transition: { duration: 0.2 } }}
                      className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm cursor-pointer group"
                      tabIndex={0}
                      role="button"
                      aria-label={`Learn more about ${feature.title}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                        }
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <feature.icon className="w-6 h-6 text-brand-primary-400 group-hover:scale-110 transition-transform duration-200" />
                        <h3 className="text-lg font-semibold text-white group-hover:text-brand-primary-400 transition-colors duration-200">{feature.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {feature.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-primary-500/20 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-brand-primary-500/10 rounded-full blur-lg opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Underground Manifesto */}
        <motion.section 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="py-20"
        >
          <div className="max-w-4xl mx-auto">
            <UndergroundManifesto />
          </div>
        </motion.section>

        {/* Core Pillars Section */}
        <motion.section 
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="py-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-brand-primary-400">Core</span> Pillars
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The fundamental principles that guide the Ergo ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Security", desc: "Advanced cryptographic protocols" },
              { icon: Zap, title: "Innovation", desc: "Cutting-edge blockchain technology" },
              { icon: Users, title: "Community", desc: "Open and inclusive development" },
              { icon: Globe, title: "Decentralization", desc: "True peer-to-peer network" }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInitialized ? 1 : 0, y: 0 }}
                transition={{ delay: isInitialized ? (0.6 + index * 0.1) : 0 }}
                className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center group hover:border-brand-primary-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <pillar.icon className="w-6 h-6 text-brand-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-gray-400 text-sm">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Ecosystem Showcase */}
        <motion.section 
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="py-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-brand-primary-400">Ecosystem</span> Showcase
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the vibrant applications and tools built on Ergo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Coins, title: "DeFi", desc: "Decentralized finance applications" },
              { icon: Lock, title: "Privacy", desc: "Privacy-focused solutions" },
              { icon: Building, title: "Infrastructure", desc: "Core infrastructure tools" }
            ].map((ecosystem, index) => (
              <motion.div
                key={ecosystem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInitialized ? 1 : 0, y: 0 }}
                transition={{ delay: isInitialized ? (0.7 + index * 0.1) : 0 }}
                className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group hover:border-brand-primary-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <ecosystem.icon className="w-6 h-6 text-brand-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{ecosystem.title}</h3>
                <p className="text-gray-400 text-sm">{ecosystem.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="py-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to <span className="text-brand-primary-400">Build</span> the Future?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building the next generation of decentralized applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                <GlitchButton onClick={() => window.open('/start', '_self')}>
                  GET STARTED
                </GlitchButton>
              </motion.div>
              <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-brand-primary-500 text-brand-primary-400 hover:bg-brand-primary-500/10 font-semibold px-8 py-3 rounded-xl backdrop-blur-sm focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
                >
                  <BookOpen className="w-5 h-5" />
                  Documentation
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
