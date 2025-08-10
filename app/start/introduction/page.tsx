"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import {
  ArrowRight,
  Shield,
  Cpu,
  Code,
  Layers,
  Lock,
  Users,
  GitBranch,
  TrendingUp,
  Puzzle,
  Wallet,
  Compass,
  Network,
  Zap,
  Target,
  CheckCircle,
  BookOpen,
  Rocket,
  Terminal,
  Database,
  Fingerprint,
  Globe,
  Building,
  Coins,
  ChevronRight,
  Award,
  Info,
  Brain,
  Sparkles,
  Code2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  HeroPattern, FeatureGrid, StatsGrid, FeatureCard, CodeSnippet,
  type FeatureGridItem, type StatsGridItem 
} from "@/components/ui-kit/patterns"
import { SchemaOrg } from "@/components/seo/schema-org"
// Dynamic, client-only signature effects for performance/SSR
const FloatingParticles = dynamic(() => import("@/components/ui-kit/signature-effects").then(m => m.FloatingParticles), { ssr: false })
const HexagonalGrid = dynamic(() => import("@/components/ui-kit/signature-effects").then(m => m.HexagonalGrid), { ssr: false })
const CryptographicVisualization = dynamic(() => import("@/components/ui-kit/signature-effects").then(m => m.CryptographicVisualization), { ssr: false })
const GlitchHex = dynamic(() => import("@/components/ui-kit/signature-effects").then(m => m.GlitchHex), { ssr: false })
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"

export default function IntroductionPage() {
  const [isInitialized] = useState(true)
  const isoDate = new Date().toISOString().slice(0, 10)
  
  // Responsive and accessibility hooks
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()
  const animationConfig = getAnimationConfig(isMobile, prefersReducedMotion)

  // SSR full content; heavy effects render client-only via dynamic()

  // Core principles data for FeatureGrid
  const principlesGridItems: FeatureGridItem[] = [
    {
      icon: Users,
      title: "Decentralized First",
      description: "Launched fairly with no premine or ICO. Community-driven for maximum decentralization.",
      color: "text-brand-primary-400"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built on Proof-of-Work consensus (Autolykos) and the innovative eUTXO model.",
      color: "text-brand-secondary-400"
    },
    {
      icon: Code,
      title: "Powerful Contracts",
      description: "ErgoScript enables secure financial apps that are hard to implement safely in account-based models.",
      color: "text-status-success-500"
    },
    {
      icon: GitBranch,
      title: "Long-term Focus",
      description: "Designed for resilience with focus on real-world utility over speculation.",
      color: "text-status-info-500"
    }
  ]

  // Technologies for feature cards
  const technologies = [
    {
      icon: Cpu,
      title: "Proof-of-Work (PoW)",
      subtitle: "Maximum security",
      description: "Autolykos algorithm is ASIC-resistant, ensuring fair distribution and robust security.",
      badge: "Autolykos"
    },
    {
      icon: Layers,
      title: "Extended UTXO",
      subtitle: "Smart money",
      description: "Allows complex smart contracts with better scalability and predictable fees.",
      badge: "eUTXO"
    },
    {
      icon: Lock,
      title: "Sigma Protocols",
      subtitle: "Advanced cryptography",
      description: "Enables privacy and advanced crypto primitives (threshold/multisig, ring-like constructions).",
      badge: "Σ-protocols"
    }
  ]

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.1 : 0.6 }
    }
  }

  const scaleOnHover = {
    hover: { 
      scale: prefersReducedMotion ? 1 : animationConfig.scale, 
      transition: { duration: animationConfig.duration } 
    },
    tap: { scale: prefersReducedMotion ? 1 : 0.98 }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Schema.org JSON-LD */}
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://ergoblockchain.org/" },
            { "@type": "ListItem", position: 2, name: "Introduction", item: "https://ergoblockchain.org/start/introduction" },
          ],
        }}
      />
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: "Ergo — PoW smart‑contract platform (eUTXO & Sigma Protocols)",
          description:
            "Introduction to Ergo: ASIC-resistant PoW, eUTXO smart contracts, Sigma (ZK) protocols, storage rent, NIPoPoWs.",
          image: "https://ergoblockchain.org/og/intro.png",
          datePublished: isoDate,
          dateModified: isoDate,
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
          },
          mainEntityOfPage: "https://ergoblockchain.org/start/introduction",
        }}
      />
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the eUTXO model?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "eUTXO is an extension of Bitcoin's UTXO enabling expressive, parallelizable smart contracts with predictable execution costs.",
              },
            },
            {
              "@type": "Question",
              name: "What are Sigma protocols on Ergo?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sigma protocols are native cryptographic proofs enabling threshold/multisig and privacy without trusted setup.",
              },
            },
            {
              "@type": "Question",
              name: "Why Proof‑of‑Work for Ergo?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "PoW (Autolykos) keeps mining accessible (ASIC‑resistant), supports decentralization, and has a robust security track record.",
              },
            },
          ],
        }}
      />
      {/* Background Effects */}
      {!isMobile && <FloatingParticles count={prefersReducedMotion ? 10 : 30} />}
      {!isMobile && !prefersReducedMotion && <HexagonalGrid className="opacity-[0.02]" />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Removed jump links per request */}

        {/* What is Ergo Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInitialized ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 pt-32"
          id="what-is-ergo"
        >
          {/* Mission Statement - Hero Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInitialized ? 1 : 0, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
              Ergo — PoW smart‑contract platform with eUTXO & Sigma Protocols
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              A next‑generation, ASIC‑resistant Proof‑of‑Work platform with predictable, auditable smart contracts and native privacy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isInitialized ? 1 : 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-brand-primary-400" aria-hidden="true" />
                <span className="text-white">What is <span className="text-brand-primary-400">Ergo</span>?</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ergo is designed for developing secure and powerful decentralized applications (dApps) and financial contracts. 
                It builds on a decade of blockchain theory and development, combining established principles with new research.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Its mission is to provide tools for decentralized and accessible financial systems — empowering people with economic freedom without intermediaries. Learn about the
                <Link href="/technology/eutxo-model" className="underline hover:opacity-80 ml-1">eUTXO smart‑contract model</Link>,
                <Link href="/technology/secure-pow" className="underline hover:opacity-80 ml-1">Autolykos (ASIC‑resistant PoW)</Link>,
                <Link href="/technology/storage-rent" className="underline hover:opacity-80 ml-1">Storage Rent</Link>, and
                <Link href="/technology/privacy-features" className="underline hover:opacity-80 ml-1">Sigma‑powered privacy</Link>.
              </p>
              {/* Why Ergo (keywords) */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-2">Why Ergo?</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>eUTXO smart contracts with predictable execution</li>
                  <li>Sigma (ZK) protocols for threshold/multisig and privacy</li>
                  <li>Autolykos — ASIC‑resistant, GPU‑friendly PoW</li>
                  <li>Storage Rent and NIPoPoWs (succinct proofs)</li>
                </ul>
              </div>
              
              {/* Alert with key info */}
              <Alert className="border-brand-primary-500/30 bg-brand-primary-500/10 rounded-xl">
                <Info className="w-4 h-4 text-brand-primary-400" />
                <div className="ml-3">
                  <h4 className="font-semibold text-brand-primary-400">Key Innovation</h4>
                  <AlertDescription className="text-gray-300 text-sm">
                    Ergo combines the security of Bitcoin's UTXO model with the expressiveness of Ethereum's smart contracts, 
                    creating a unique platform for complex financial applications.
                  </AlertDescription>
                </div>
              </Alert>
              <div className="mt-4 text-xs text-neutral-500">
                References: <a href="https://ergoplatform.org/en/blog/2021-07-20-autolykosv2/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Autolykos v2</a> ·
                <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 ml-2">ergo (GitHub)</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isInitialized ? 1 : 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {/* Cryptographic Visualization */}
              <div className="relative">
                <CryptographicVisualization className="absolute -top-8 -right-8 w-32 h-32 opacity-20" />
                
                {/* Feature highlights */}
                <ul className="space-y-4">
                  {[
                    { icon: Fingerprint, title: "Privacy First", desc: "Built-in privacy at the protocol level" },
                    { icon: Database, title: "Storage Rent", desc: "Sustainable economic model for long-term viability" },
                    { icon: Network, title: "Light Clients", desc: "Succinct proofs (NIPoPoWs), near full-node guarantees" },
                    { icon: Award, title: "Fair Launch", desc: "No premine, no ICO, community-driven" }
                  ].map((feature, index) => (
                    <motion.li
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: isInitialized ? 1 : 0, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: prefersReducedMotion ? 0 : 5 }}
                      className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 backdrop-blur-sm hover:border-brand-primary-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-primary-500/10 border border-brand-primary-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-brand-primary-400" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {feature.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Principles using FeatureGrid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: isInitialized ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-24"
          id="core-principles"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Core <span className="text-brand-primary-400">Principles</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built on fundamental values that ensure long-term sustainability and real-world utility
            </p>
          </div>
          
          <FeatureGrid items={principlesGridItems} columns={4} />
        </motion.section>

        {/* Key Technologies Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: isInitialized ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-16"
          id="key-technologies"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Key <span className="text-brand-primary-400">Technologies</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced cryptography and innovative consensus mechanisms power the Ergo platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInitialized ? 1 : 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Link href={`/technology/${tech.title.toLowerCase().replace(/\s+/g, '-')}`} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-400 rounded-xl">
                  <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 h-full hover:border-brand-primary-500/50 hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-brand-primary-500/10 border border-brand-primary-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-primary-500/20 transition-all duration-300">
                      <tech.icon className="w-6 h-6 text-brand-primary-400" aria-hidden="true" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-primary-400 transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{tech.subtitle}</p>
                    <p className="text-gray-300 text-sm mb-4 min-h-[3rem]">
                      {tech.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <Badge className="bg-brand-primary-500/10 text-brand-primary-400 border border-brand-primary-500/30">
                        {tech.badge}
                      </Badge>
                      <div className="flex items-center text-brand-primary-400 text-sm font-semibold">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* ErgoScript Code Example */}
          <CodeSnippet
            title="ErgoScript Example: Time-Locked Contract"
            language="scala"
            filename="TimeLock.ergo"
            code={`{
  val deadline = SELF.R4[Long].get
  sigmaProp(
    if (HEIGHT >= deadline) {
      // After deadline, only recipient can spend
      recipientPK
    } else {
      // Before deadline, only sender can spend
      senderPK
    }
  )
}`}
          />
        </motion.section>

        {/* Use Cases Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: isInitialized ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-24"
          id="what-to-build"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Can You <span className="text-brand-primary-400">Build</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore the endless possibilities of the Ergo ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "DeFi Applications",
                description: "Build stablecoins, DEXs, lending platforms, and innovative financial instruments.",
                href: "/use/defi",
                badge: "Popular"
              },
              {
                icon: Puzzle,
                title: "dApps & Tools",
                description: "Create decentralized applications for any use case with powerful smart contracts.",
                href: "/ecosystem",
                badge: "Growing"
              },
              {
                icon: Code2,
                title: "Developer Tools",
                description: "Access comprehensive SDKs, libraries, and documentation to build on Ergo.",
                href: "/Docs/developers",
                badge: "Resources"
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInitialized ? 1 : 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover="hover"
                whileTap="tap"
                variants={scaleOnHover}
              >
                <Link href={useCase.href} prefetch={false} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-400 rounded-xl">
                  <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 h-full hover:border-brand-primary-500/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-brand-primary-500/10 border border-brand-primary-500/30 rounded-xl flex items-center justify-center">
                        <useCase.icon className="w-6 h-6 text-brand-primary-400" aria-hidden="true" />
                      </div>
                      <Badge className="bg-brand-primary-500/10 text-brand-primary-400 border border-brand-primary-500/30">
                        {useCase.badge}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {useCase.description}
                    </p>
                    <div className="flex items-center text-brand-primary-400 text-sm font-semibold group-hover:gap-3 transition-all">
                      Explore
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Visible mini-FAQ matching JSON-LD */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">FAQ</h2>
            <div className="space-y-4">
              {[{
                q: "What is the eUTXO model?",
                a: "eUTXO is an extension of Bitcoin's UTXO enabling expressive, parallelizable smart contracts with predictable execution costs.",
              }, {
                q: "What are Sigma protocols on Ergo?",
                a: "Sigma protocols are native cryptographic proofs enabling threshold/multisig and privacy without trusted setup.",
              }, {
                q: "Why Proof‑of‑Work for Ergo?",
                a: "PoW (Autolykos) keeps mining accessible (ASIC‑resistant), supports decentralization, and has a robust security track record.",
              }].map(item => (
                <div key={item.q} className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.q}</h3>
                  <p className="text-neutral-300 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Glitch Effects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInitialized ? 1 : 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="py-16 text-center relative"
        >
          <Card className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden hover:border-brand-primary-500/30">
            {/* Glitch Hex decoration */}
            <div className="absolute top-8 right-8 w-16 h-16 opacity-20">
              <GlitchHex size={64} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to <span className="text-brand-primary-400">Dive In</span>?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Your journey into the Ergo ecosystem is just a few clicks away. 
              Get a secure wallet and start exploring the future of finance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                <Button 
                  asChild 
                  className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl shadow-lg"
                >
                  <Link href="/wallet">
                    <Wallet className="w-5 h-5 mr-2" aria-hidden="true" />
                    Get an Ergo Wallet
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-neutral-700 text-gray-300 hover:bg-neutral-800 hover:text-white px-8 py-3 rounded-xl backdrop-blur-sm"
                >
                  <Link href="/ecosystem" prefetch={false}>
                    <Compass className="w-5 h-5 mr-2" aria-hidden="true" />
                    Explore Ecosystem
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-neutral-700 text-gray-300 hover:bg-neutral-800 hover:text-white px-8 py-3 rounded-xl backdrop-blur-sm"
                >
                  <Link href="/Docs" prefetch={false}>
                    <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
                    Documentation
                  </Link>
                </Button>
              </motion.div>
            </div>
            <p className="text-xs text-neutral-500 mt-6">Last updated: 2025-08-10</p>
          </Card>
        </motion.section>

      </div>
    </div>
  )
}
