"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, Zap, Shield, Coins, Code, Users, TrendingUp, ArrowRight, CheckCircle, ExternalLink, Brain, Target, Globe, Rocket, Heart, Star, Award, Eye, Database, ChevronDown, Terminal, BookOpen } from "lucide-react"
import { PageTransition } from "@/components/animations/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import Link from "next/link"
import { SchemaOrg } from "@/components/seo/schema-org"
import { useTranslations } from "next-intl"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Metadata is defined in this route's layout.tsx (server-only)

// Comparison data moved to translations

// Blockchain platform comparison with brand-accent corporate styling
const enhancedComparison = [
  {
    feature: "Consensus",
    ergo: { value: "PoW (Autolykos)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    bitcoin: { value: "PoW (SHA-256d)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    ethereum: { value: "PoS (Beacon/Gasper)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    cardano: { value: "PoS (Ouroboros)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    solana: { value: "PoS + Proof of History (Tower BFT)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    sui: { value: "PoS (Narwhal/Bullshark → Mysticeti)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" }
  },
  {
    feature: "State model",
    ergo: { value: "eUTXO", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    bitcoin: { value: "UTXO", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    ethereum: { value: "Account model + EVM", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    cardano: { value: "eUTXO", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    solana: { value: "Account model; parallel Sealevel runtime", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    sui: { value: "Object-centric (Move)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" }
  },
  {
    feature: "Smart contract languages",
    ergo: { value: "ErgoScript", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    bitcoin: { value: "Bitcoin Script (limited)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    ethereum: { value: "Solidity, Vyper (EVM)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    cardano: { value: "Plutus (Haskell family), Aiken", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    solana: { value: "Rust / C / C++ (SVM)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    sui: { value: "Move", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" }
  },
  {
    feature: "Issuance / Max supply",
    ergo: { value: "Max ~97.74M ERG; fixed supply", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    bitcoin: { value: "Max 21M BTC (halvings)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    ethereum: { value: "No hard cap; issuance + burn (EIP-1559)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    cardano: { value: "Max 45B ADA", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    solana: { value: "No fixed cap; decaying inflation", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    sui: { value: "Max 10B SUI (scheduled distribution)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" }
  },
  {
    feature: "Target block/slot time",
    ergo: { value: "≈ 2 min", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    bitcoin: { value: "≈ 10 min", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    ethereum: { value: "12 s slot; 32-slot epoch", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    cardano: { value: "1 s slot; expected block ≈ every 20 s", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    solana: { value: "≈ 400–600 ms slot", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    sui: { value: "Seconds (fast finality for simple tx)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" }
  },
  {
    feature: "Finality (typical)",
    ergo: { value: "Probabilistic (via confirmations)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    bitcoin: { value: "Probabilistic (via confirmations)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    ethereum: { value: "Economic finality ≈ 2 epochs (~13–15 min)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    cardano: { value: "Through stability window & k-blocks; ~20 s blocks", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    solana: { value: "\"Confirmed\" in 2–3 blocks; \"Finalized\" ≈ 32 blocks", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    sui: { value: "BFT finality; typically seconds", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" }
  },
  {
    feature: "Distinctive features",
    ergo: { value: "Storage Rent, NiPoPoWs, Σ-protocols", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    bitcoin: { value: "Simple UTXO model, high reliability", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    ethereum: { value: "General EVM platform, EIP-1559 (burn)", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    cardano: { value: "eUTXO + formal methods, Hydra L2", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    solana: { value: "High throughput, Sealevel, PoH", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    sui: { value: "Objects/ownership, parallel tx, Move safety", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" }
  },
  {
    feature: "Privacy / L1 special features",
    ergo: { value: "Built-in Sigma protocols, mixer contracts", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    bitcoin: { value: "Limited scripts; privacy via L2/protocols", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    ethereum: { value: "Base L1 lacks privacy; zk/privacy on L2", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    cardano: { value: "Base L1; extensions via Plutus/Hydra", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    solana: { value: "Base L1; privacy via applications", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" },
    sui: { value: "Base L1; privacy via applications", color: "text-[#E6EAF2]", bg: "bg-[#0F1520]" }
  }
]

// Corporate brand-accent styling - neutral content with brand headers

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function ComparisonClient() {
  const [activeStory, setActiveStory] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const isoDate = new Date().toISOString().slice(0, 10)
  const t = useTranslations('start.comparison')
  
  const keyDifferentiators = [
    {
      title: t('keyDifferentiators.0.title'),
      ergo: t('keyDifferentiators.0.ergo'),
      others: t('keyDifferentiators.0.others'),
      icon: Shield,
      color: "text-orange-400",
    },
    {
      title: t('keyDifferentiators.1.title'),
      ergo: t('keyDifferentiators.1.ergo'),
      others: t('keyDifferentiators.1.others'),
      icon: Brain,
      color: "text-orange-400",
    },
    {
      title: t('keyDifferentiators.2.title'),
      ergo: t('keyDifferentiators.2.ergo'),
      others: t('keyDifferentiators.2.others'),
      icon: Code,
      color: "text-orange-400",
    },
    {
      title: t('keyDifferentiators.3.title'),
      ergo: t('keyDifferentiators.3.ergo'),
      others: t('keyDifferentiators.3.others'),
      icon: Heart,
      color: "text-orange-400",
    },
  ]

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-16">
      {/* Schema.org */}
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Start", item: "https://ergoblockchain.org/start" },
            { "@type": "ListItem", position: 2, name: "Comparison", item: "https://ergoblockchain.org/start/comparison" },
          ],
        }}
      />
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: "Ergo vs Others — Practical Comparison",
          description:
            "Comparison of eUTXO vs account models, PoW vs PoS, privacy and fees: Ergo, Ethereum, Bitcoin, Cardano.",
          image: "https://ergoblockchain.org/og/comparison.png",
          datePublished: isoDate,
          dateModified: isoDate,
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
          },
          mainEntityOfPage: "https://ergoblockchain.org/start/comparison",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <PageTransition>
          
          {/* Hero Section */}
          <motion.section 
            className="pt-16 pb-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div variants={itemVariants}>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                    Platform <span className="text-orange-400">Analysis</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Understanding Ergo's Technical Advantages
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Ergo combines the security and predictability of the eUTXO model with the programmability needed for complex smart contracts, and supports light clients via NIPoPoWs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105" asChild>
                      <Link href="/docs">
                        <Rocket className="w-5 h-5 mr-2" aria-hidden="true" />
                        Start Building
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-orange-400/40"
                      asChild
                    >
                      <Link href="/compare">
                        <Target className="w-5 h-5 mr-2" aria-hidden="true" />
                        View Comparison
                      </Link>
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Comparison Cards */}
                  <div className="space-y-4">
                    <div className="bg-black/80 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-6 h-6 text-orange-400" aria-hidden="true" />
                        <h3 className="text-lg font-semibold text-white">Predictable & Auditable Security</h3>
                      </div>
                      <p className="text-neutral-400 text-sm">
                        No known protocol-level reentrancy class; deterministic execution bounds; friendly to audits
                      </p>
                    </div>

                    <div className="bg-black/80 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Zap className="w-6 h-6 text-orange-400" aria-hidden="true" />
                        <h3 className="text-lg font-semibold text-white">Parallel Execution</h3>
                      </div>
                      <p className="text-neutral-400 text-sm">
                        Independent UTXOs enable parallel execution; shared-box patterns may introduce contention
                      </p>
                    </div>

                    <div className="bg-black/80 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Eye className="w-6 h-6 text-orange-400" aria-hidden="true" />
                        <h3 className="text-lg font-semibold text-white">Native Privacy</h3>
                      </div>
                      <p className="text-neutral-400 text-sm">
                        Σ-protocols and UTXO mixing at the protocol layer
                      </p>
                    </div>

                    <div className="bg-black/80 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Database className="w-6 h-6 text-orange-400" aria-hidden="true" />
                        <h3 className="text-lg font-semibold text-white">Native L1 Assets</h3>
                      </div>
                      <p className="text-neutral-400 text-sm">
                        Native L1 tokens/NFTs (no wrapper contracts)
                      </p>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl opacity-60 animate-pulse" />
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-500/10 rounded-full blur-lg opacity-40 animate-pulse delay-1000" />
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Vision Block */}
          <motion.section 
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                Why Developers Choose <span className="text-orange-400">Ergo</span>
            </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={itemVariants}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Developer-First Philosophy</h3>
                      <p className="text-neutral-400">
                        "Other platforms force you to work around their limitations. Ergo works around yours."
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-neutral-300">Predictable execution costs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-neutral-300">Security by design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-neutral-300">No reentrancy attacks</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Built for Productivity</h3>
                      <p className="text-neutral-400">
                        Experience the difference of building on a platform designed for developer productivity.
            </p>
          </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-neutral-300">Declarative ErgoScript</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-neutral-300">Formal verification support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-neutral-300">Rich cryptographic primitives</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-black/80 border border-white/10 rounded-2xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <blockquote className="text-lg md:text-xl text-white font-medium italic">
                  "Building on Ergo feels like having superpowers. The eUTXO model eliminates entire classes of bugs, 
                  and ErgoScript makes complex cryptographic operations feel natural."
                </blockquote>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-neutral-400 text-sm">— Ergo Developer Community</span>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Stats Grid - soften absolutes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-black/80 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200 hover:bg-black/90 hover:border-orange-400/40">
              <div className="text-3xl font-bold text-orange-400 mb-1">Predictable</div>
              <div className="text-sm text-neutral-400">Fees; no gas price auctions</div>
            </div>
            <div className="bg-black/80 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200 hover:bg-black/90 hover:border-orange-400/40">
              <div className="text-3xl font-bold text-orange-400 mb-1">No class</div>
              <div className="text-sm text-neutral-400">of protocol-level reentrancy</div>
            </div>
            <div className="bg-black/80 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200 hover:bg-black/90 hover:border-orange-400/40">
              <div className="text-3xl font-bold text-orange-400 mb-1">Native</div>
              <div className="text-sm text-neutral-400">L1 tokens/NFTs</div>
            </div>
            <div className="bg-black/80 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200 hover:bg-black/90 hover:border-orange-400/40">
              <div className="text-3xl font-bold text-orange-400 mb-1">Light</div>
              <div className="text-sm text-neutral-400">clients (NIPoPoWs)</div>
            </div>
          </div>

          {/* The Problem vs Solution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              The Problem with <span className="text-orange-400">Current Platforms</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/80 border border-white/10 rounded-xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                  <X className="w-6 h-6 text-orange-400" aria-hidden="true" /> Development Nightmares
                </h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Unpredictable gas costs bankrupting users
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Reentrancy attacks draining protocols
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Complex languages creating security holes
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    VC-controlled platforms changing rules
                  </li>
                </ul>
              </div>
              <div className="bg-black/80 border border-white/10 rounded-xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                  <CheckCircle className="w-6 h-6 text-orange-400" aria-hidden="true" /> The Ergo Solution
                </h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Predictable fees; auditable execution bounds
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Security-by-design in the eUTXO model
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    ErgoScript: declarative, explicit state transitions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    Community-owned, fair launch principles
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Differentiators */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              What Makes <span className="text-orange-400">Ergo</span> Different
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {keyDifferentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Main Card */}
                  <div className="bg-black/80 border border-white/10 rounded-2xl p-8 hover:border-orange-400/40 hover:bg-black/90 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-7 h-7 text-orange-400" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <div className="text-xs text-gray-500 mt-1">Key Advantage</div>
                        </div>
                      </div>
                    </div>

                    {/* Comparison Content */}
                    <div className="space-y-4">
                      {/* Ergo Advantage */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full" />
                        <div className="pl-6">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                            <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Ergo Advantage</span>
                          </div>
                          <p className="text-white font-medium">{item.ergo}</p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-neutral-700/50" />
                        </div>
                        <div className="relative flex justify-center">
                          <span className="px-3 bg-black/80 text-xs text-neutral-400">VS</span>
                        </div>
                      </div>

                      {/* Others Limitation */}
                      <div className="relative opacity-60">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-600 to-neutral-700 rounded-full" />
                        <div className="pl-6">
                          <div className="flex items-center gap-2 mb-2">
                            <X className="w-5 h-5 text-neutral-400" aria-hidden="true" />
                            <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Others</span>
                          </div>
                          <p className="text-gray-400">{item.others}</p>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
          </section>

          {/* Platform Comparison Table */}
          <motion.section 
            className="mb-16" 
            id="comparison"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Blockchain <span className="text-orange-400">Platform</span> Comparison
              </h2>
              <Link
                href="/compare"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-orange-400 transition-colors"
              >
                Detailed 1-on-1 comparisons
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 mb-12 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Blockchain Platform Comparison: Ergo vs BTC/ETH/ADA/SOL/SUI
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[900px]">
                    <caption className="sr-only">Platform comparison</caption>
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left p-4 font-semibold text-orange-400">Feature</th>
                        <th className="text-left p-4 font-semibold text-orange-400">Ergo</th>
                        <th className="text-left p-4 font-semibold text-[#F7931A]">Bitcoin</th>
                        <th className="text-left p-4 font-semibold text-[#627EEA]">Ethereum</th>
                        <th className="text-left p-4 font-semibold text-[#2F6DFE]">Cardano</th>
                        <th className="text-left p-4 font-semibold text-[#14F195]">Solana</th>
                        <th className="text-left p-4 font-semibold text-[#6FBCF0]">Sui</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      {enhancedComparison.map((row, index) => (
                        <tr key={row.feature} className="border-b border-neutral-800 hover:bg-neutral-800/30">
                          <th scope="row" className="p-4 font-medium text-white">{row.feature}</th>
                          <td className="p-4 text-orange-400">{row.ergo.value}</td>
                          <td className="p-4">{row.bitcoin.value}</td>
                          <td className="p-4">{row.ethereum.value}</td>
                          <td className="p-4">{row.cardano.value}</td>
                          <td className="p-4">{row.solana.value}</td>
                          <td className="p-4">{row.sui.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-black/20 border-t border-neutral-700">
                  <p className="text-xs text-neutral-400 text-center">
                    Comprehensive comparison of major blockchain platforms including consensus mechanisms, state models, smart contract capabilities, and distinctive features. Updated: {isoDate}.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              <span className="text-orange-400">Trust</span> Indicators
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/80 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200 hover:bg-black/90 hover:border-orange-400/40">
                <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white mb-2">Battle-tested since 2019</h3>
                <p className="text-neutral-400 text-sm">Proven security track record</p>
              </div>
              <div className="bg-black/80 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200 hover:bg-black/90 hover:border-orange-400/40">
                <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white mb-2">100+ developers</h3>
                <p className="text-neutral-400 text-sm">Growing active community</p>
              </div>
              <div className="bg-black/80 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200 hover:bg-black/90 hover:border-orange-400/40">
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white mb-2">No critical protocol-level incidents</h3>
                <p className="text-neutral-400 text-sm">As of {isoDate}</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <motion.section 
            id="faq"
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold text-center mb-8 text-white">FAQ</h2>
              </motion.div>
              <div className="space-y-4">
              {[{
                q: "How does eUTXO reduce reentrancy risk?",
                a: "Transactions consume specified UTXOs and cannot be re-entered; the shared-state pattern behind reentrancy is absent.",
              }, {
                q: "Are fees predictable on Ergo?",
                a: "Script cost is bounded and fees are predictable; there are no gas price auctions (final fees depend on mempool conditions).",
              }, {
                q: "Does Ergo have light clients?",
                a: "Yes. NIPoPoWs enable succinct proofs for trust-minimized light clients.",
                }].map((item, index) => (
                  <motion.div key={item.q} variants={itemVariants}>
                    <Card className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                      <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                        <CollapsibleTrigger asChild>
                          <button className="w-full">
                            <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                              <h3 className="text-lg font-semibold text-left text-white">{item.q}</h3>
                              <ChevronDown 
                                aria-hidden="true" 
                                className={`w-5 h-5 text-neutral-400 transition-transform ${
                                  openFAQ === index ? "rotate-180" : ""
                                }`} 
                              />
                            </CardContent>
                          </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="px-6 pb-6 pt-0">
                            <div className="text-neutral-300 leading-relaxed [&>a]:text-orange-400 [&>a]:underline [&>a]:hover:text-orange-300 [&>b]:text-white [&>br]:mb-2">
                              {item.a}
                </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  </motion.div>
              ))}
              </div>
            </div>
          </motion.section>

            <SchemaOrg
              type="FAQPage"
              data={{
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How does eUTXO reduce reentrancy risk?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Transactions consume specified UTXOs and cannot be re-entered; the shared-state pattern behind reentrancy is absent.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are fees predictable on Ergo?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Script cost is bounded and fees are predictable; there are no gas price auctions (final fees depend on mempool conditions).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does Ergo have light clients?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. NIPoPoWs enable succinct proofs for trust-minimized light clients.",
                    },
                  },
                ],
              }}
            />

          {/* What's Next Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
                What's <span className="text-orange-400">Next?</span>
              </h2>
              <p className="text-xl text-center text-neutral-300 mb-12">
                Start building or exploring the Ergo ecosystem today
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/docs/developers"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Terminal className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Start Building</h3>
                      <p className="text-orange-400 text-sm">Developer Docs</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Get started with Ergo development using our comprehensive documentation and tutorials
                  </p>
                </Link>
                
                <Link
                  href="/ecosystem"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Explore Ecosystem</h3>
                      <p className="text-orange-400 text-sm">Discover Projects</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Discover the growing ecosystem of applications, tools, and services built on Ergo
                  </p>
                </Link>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-xs text-neutral-400">
                  Last updated: {isoDate}. Sources: <a href="https://ergoplatform.org/en/blog/2021-07-20-autolykosv2/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Autolykos v2</a> · <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">ergo (GitHub)</a>
                </p>
              </div>
            </div>
          </section>

          {/* Email Capture */}
          <FinalCTASimple
            title="Stay Updated"
            description="Get the latest Ergo news, technical comparisons, and ecosystem updates delivered to your inbox."
          />

        </PageTransition>
      </div>
    </div>
    </BackgroundWrapper>
  )
}
