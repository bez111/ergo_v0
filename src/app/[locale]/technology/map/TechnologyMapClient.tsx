"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ChevronRight,
  ChevronDown,
  Code,
  Shield,
  Cpu,
  Database,
  Network,
  Lock,
  Zap,
  Layers,
  GitBranch,
  Coins,
  Activity,
  Eye,
  X,
  Info,
  ArrowRight,
  Sparkles,
  Box,
  FileText,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp
} from "lucide-react"
import Link from "next/link"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

interface TechnologyNode {
  id: string
  name: string
  description: string
  category: "core" | "consensus" | "features" | "infrastructure"
  position: { x: number; y: number }
  icon: React.ElementType
  color: string
  connections: string[]
  details?: string[]
  specifications?: string[]
  useCases?: string[]
}

const technologies: TechnologyNode[] = [
  {
    id: "eutxo",
    name: "eUTXO Model",
    description: "Extended UTXO with smart contract capabilities",
    category: "core",
    position: { x: 20, y: 20 },
    icon: Box,
    color: "from-orange-500/20 to-orange-600/20",
    connections: ["ergoscript", "native-tokens", "storage-rent"],
    details: [
      "Extends Bitcoin's UTXO with registers and guard scripts",
      "Enables parallel transaction processing",
      "Provides predictable execution costs",
      "Supports complex multi-stage contracts"
    ],
    specifications: [
      "EIP-0001: eUTXO Model Specification",
      "Box structure with R0-R9 registers",
      "ErgoTree guard script validation"
    ],
    useCases: [
      "DEX order books with atomic swaps",
      "Multi-signature wallets and vaults",
      "Time-locked contracts and vesting"
    ]
  },
  {
    id: "ergoscript",
    name: "ErgoScript",
    description: "Functional smart contract language",
    category: "core",
    position: { x: 50, y: 30 },
    icon: Code,
    color: "from-orange-500/20 to-orange-600/20",
    connections: ["sigma-protocols", "eutxo", "ergotree"],
    details: [
      "Scala-based functional programming language",
      "Built-in cryptographic primitives",
      "Formal verification support",
      "Compiles to ErgoTree bytecode"
    ],
    specifications: [
      "ErgoScript Language Reference",
      "Sigma protocol integration",
      "Type system and safety guarantees"
    ],
    useCases: [
      "Complex DeFi protocols",
      "Privacy-preserving applications",
      "DAO governance contracts"
    ]
  },
  {
    id: "ergotree",
    name: "ErgoTree",
    description: "Compiled smart contract bytecode",
    category: "core", 
    position: { x: 50, y: 50 },
    icon: FileText,
    color: "from-orange-500/20 to-orange-600/20",
    connections: ["ergoscript", "eutxo"],
    details: [
      "Serialized representation of ErgoScript",
      "Executed by Ergo nodes for validation",
      "Deterministic and reproducible",
      "Optimized for efficient verification"
    ]
  },
  {
    id: "sigma-protocols",
    name: "Sigma Protocols",
    description: "Zero-knowledge proof system",
    category: "features",
    position: { x: 80, y: 20 },
    icon: Lock,
    color: "from-green-500/20 to-green-600/20",
    connections: ["ergoscript", "privacy", "multisig"],
    details: [
      "Non-interactive zero-knowledge proofs",
      "No trusted setup required",
      "Composable with other protocols",
      "Built into ErgoScript natively"
    ],
    specifications: [
      "Sigma Protocol Specification",
      "Fiat-Shamir transformation",
      "Schnorr signature integration"
    ],
    useCases: [
      "Ring signatures for privacy",
      "Threshold signatures for multisig",
      "Anonymous voting systems"
    ]
  },
  {
    id: "autolykos",
    name: "Autolykos",
    description: "ASIC-resistant PoW algorithm",
    category: "consensus",
    position: { x: 20, y: 70 },
    icon: Shield,
    color: "from-blue-500/20 to-blue-600/20",
    connections: ["mining", "difficulty", "security"],
    details: [
      "Memory-hard algorithm favoring GPUs",
      "ASIC-resistant design for decentralization",
      "Energy-efficient compared to SHA-256",
      "Adjustable difficulty for stable block times"
    ],
    specifications: [
      "Autolykos v2 Algorithm Paper",
      "Memory requirements and parameters",
      "Difficulty adjustment mechanism"
    ]
  },
  {
    id: "nipopows",
    name: "NIPoPoWs",
    description: "Non-Interactive Proofs of Proof-of-Work",
    category: "infrastructure",
    position: { x: 80, y: 70 },
    icon: Zap,
    color: "from-purple-500/20 to-purple-600/20",
    connections: ["light-clients", "autolykos", "verification"],
    details: [
      "Logarithmic proof size for blockchain state",
      "Enables efficient light clients",
      "Cryptographically secure verification",
      "No need to download full blockchain"
    ],
    specifications: [
      "NIPoPoW Research Paper",
      "Superblock structure",
      "Security proofs and guarantees"
    ],
    useCases: [
      "Mobile wallet synchronization",
      "Cross-chain bridge verification",
      "IoT device blockchain access"
    ]
  },
  {
    id: "storage-rent",
    name: "Storage Rent",
    description: "Economic mechanism for blockchain sustainability",
    category: "features",
    position: { x: 50, y: 80 },
    icon: Database,
    color: "from-green-500/20 to-green-600/20",
    connections: ["eutxo", "economics", "miners"],
    details: [
      "Prevents blockchain state bloat",
      "Recycles fees from unused UTXOs",
      "Ensures long-term miner incentives",
      "Predictable storage costs"
    ],
    specifications: [
      "EIP-0006: Storage Rent Specification",
      "Fee calculation mechanism",
      "UTXO lifecycle management"
    ]
  },
  {
    id: "native-tokens",
    name: "Native Tokens",
    description: "First-class multi-asset support",
    category: "features",
    position: { x: 20, y: 50 },
    icon: Coins,
    color: "from-green-500/20 to-green-600/20",
    connections: ["eutxo", "nfts", "defi"],
    details: [
      "No smart contracts needed for tokens",
      "Built into the protocol layer",
      "Efficient storage and transfer",
      "Rich metadata support for NFTs"
    ],
    useCases: [
      "Stablecoins and governance tokens",
      "NFT collections and marketplaces",
      "DeFi protocol tokens"
    ]
  }
]

const transactionSteps = [
  {
    id: "creation",
    title: "Transaction Creation",
    description: "User creates inputs and outputs with ErgoScript conditions",
    icon: FileText,
    color: "text-orange-400"
  },
  {
    id: "validation", 
    title: "Script Validation",
    description: "ErgoScript and Sigma protocols verify transaction conditions",
    icon: CheckCircle,
    color: "text-green-400"
  },
  {
    id: "mining",
    title: "Block Inclusion", 
    description: "Miner includes transaction in block using Autolykos PoW",
    icon: Cpu,
    color: "text-blue-400"
  },
  {
    id: "finalization",
    title: "Network Finalization",
    description: "Transaction becomes part of immutable blockchain state",
    icon: Lock,
    color: "text-purple-400"
  },
  {
    id: "proof",
    title: "Light Client Proof",
    description: "NIPoPoW enables efficient verification without full node",
    icon: Zap,
    color: "text-yellow-400"
  }
]

const dappPatterns = [
  {
    id: "dex",
    title: "DEX Order Pattern",
    description: "Atomic swap execution using box chaining",
    steps: [
      "Create order box with swap conditions",
      "Matcher finds compatible orders", 
      "ErgoScript validates trade terms",
      "New boxes created with swapped assets"
    ],
    diagram: `
    graph LR
      A[Order Box A] --> M[Matcher]
      B[Order Box B] --> M
      M --> C[Swap Execution]
      C --> D[New Box A]
      C --> E[New Box B]
    `
  },
  {
    id: "oracle",
    title: "Oracle Pool Pattern",
    description: "Decentralized data feed consensus",
    steps: [
      "Oracles collect off-chain data",
      "Sigma protocols prove authenticity",
      "Pool contract validates consensus",
      "Verified data published on-chain"
    ],
    diagram: `
    graph TD
      O1[Oracle 1] --> P[Pool Contract]
      O2[Oracle 2] --> P
      O3[Oracle 3] --> P
      P --> V[Verified Data Box]
      V --> D[dApp Consumption]
    `
  },
  {
    id: "dao",
    title: "DAO Voting Pattern", 
    description: "Governance with quorum and timeouts",
    steps: [
      "Proposal box created with conditions",
      "Voting period with token locking",
      "Quorum threshold verification",
      "Execution or timeout handling"
    ],
    diagram: `
    graph TB
      P[Proposal Box] --> V[Voting Period]
      V --> Q{Quorum Met?}
      Q -->|Yes| E[Execute]
      Q -->|No| T[Timeout]
      E --> R[Result Box]
      T --> R
    `
  }
]

const faqItems = [
  {
    question: "How does eUTXO differ from Bitcoin's UTXO model?",
    answer: "eUTXO extends Bitcoin's UTXO with registers (R0-R9) for data storage and ErgoTree guard scripts for programmable spending conditions. This enables smart contracts while maintaining UTXO's security and parallelism benefits."
  },
  {
    question: "What makes Sigma protocols special for blockchain?",
    answer: "Sigma protocols provide zero-knowledge proofs without trusted setup, enabling privacy features like ring signatures and confidential transactions. They're built directly into ErgoScript, making advanced cryptography accessible to developers."
  },
  {
    question: "Why does Ergo need Storage Rent?",
    answer: "Storage Rent prevents blockchain bloat by recycling fees from unused UTXOs back to miners. This ensures long-term sustainability and predictable storage costs, solving the 'state explosion' problem other blockchains face."
  },
  {
    question: "How do light clients trust the network without full validation?",
    answer: "NIPoPoWs (Non-Interactive Proofs of Proof-of-Work) provide cryptographically secure proofs that a transaction is included in the blockchain. Light clients can verify these logarithmic-size proofs without downloading the entire chain."
  },
  {
    question: "What are the main dApp development patterns on Ergo?",
    answer: "Key patterns include: Order books for DEXs using box chaining, Oracle pools for data feeds with consensus mechanisms, DAO governance with voting and quorum logic, and Multi-stage contracts for complex workflows."
  },
  {
    question: "How does Autolykos ensure decentralization?",
    answer: "Autolykos is memory-hard and ASIC-resistant, favoring consumer GPUs over specialized hardware. This keeps mining accessible to individuals and prevents centralization in ASIC farms."
  },
  {
    question: "What are Ergo's scalability characteristics?",
    answer: "eUTXO enables parallel transaction processing, NIPoPoWs provide efficient light clients, and Storage Rent prevents state bloat. Layer 2 solutions can leverage these properties for further scaling."
  },
  {
    question: "How do native tokens work without smart contracts?",
    answer: "Native tokens are built into the protocol layer, stored directly in UTXO boxes. This provides efficient creation, transfer, and management without requiring smart contract deployment or execution."
  }
]

const glossaryTerms = [
  { term: "eUTXO", definition: "Extended UTXO model with registers and programmable spending conditions" },
  { term: "Box", definition: "Ergo's equivalent of Bitcoin UTXO, containing value and data in registers" },
  { term: "ErgoScript", definition: "Functional smart contract language with built-in cryptographic primitives" },
  { term: "ErgoTree", definition: "Compiled bytecode representation of ErgoScript contracts" },
  { term: "Sigma Protocol", definition: "Zero-knowledge proof system enabling privacy without trusted setup" },
  { term: "Autolykos", definition: "ASIC-resistant Proof-of-Work algorithm ensuring mining decentralization" },
  { term: "NIPoPoW", definition: "Non-Interactive Proofs enabling efficient light client verification" },
  { term: "Storage Rent", definition: "Economic mechanism preventing blockchain bloat through UTXO recycling" },
  { term: "Native Token", definition: "First-class tokens built into protocol without smart contracts" },
  { term: "Light Client", definition: "Blockchain client that verifies transactions without full node data" }
]

export default function TechnologyMapClient() {
  const t = useTranslations("technology.map")
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [selectedNode, setSelectedNode] = useState<TechnologyNode | null>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const categories = [
    { id: "all", name: t("categories.all"), icon: Sparkles },
    { id: "core", name: t("categories.core"), icon: Code },
    { id: "consensus", name: t("categories.consensus"), icon: Shield },
    { id: "features", name: t("categories.features"), icon: Coins },
    { id: "infrastructure", name: t("categories.infrastructure"), icon: Network }
  ]

  const filteredTechnologies = activeCategory === "all" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 pb-24"
        >
        {/* Hero Section */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-28 pb-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t("title")}</h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl">{t("subtitle")}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                    <Link href="/technology">Explore All Technology</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <Link href="/docs">Developer Docs</Link>
                  </Button>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Core Technologies</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                          <Box className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-lg">eUTXO Model</h4>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                          <Code className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-lg">ErgoScript</h4>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 flex items-center justify-center rounded-md bg-blue-500/20 border border-blue-500/30 text-blue-400 flex-shrink-0">
                          <Shield className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-lg">Autolykos PoW</h4>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 flex items-center justify-center rounded-md bg-green-500/20 border border-green-500/30 text-green-400 flex-shrink-0">
                          <Lock className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-lg">Sigma Protocols</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Interactive Technology Map */}
        <motion.section
          variants={itemVariants}
          className="py-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Interactive Technology Map</h2>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className={`${
                      activeCategory === category.id
                        ? "bg-orange-500 hover:bg-orange-600 text-black"
                        : "border-neutral-700 text-neutral-300 hover:bg-orange-500/10"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                )
              })}
            </div>

            {/* Technology Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredTechnologies.map((tech) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={tech.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedNode(tech)}
                  >
                    <Card className="bg-black/80 border-white/10 backdrop-blur-sm h-full hover:border-orange-400/40 transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-3xl bg-gradient-to-r ${tech.color}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-white">{tech.name}</CardTitle>
                            <Badge variant="outline" className="mt-1 capitalize">
                              {tech.category}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-300 mb-4">{tech.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {tech.connections.slice(0, 3).map((connection) => (
                            <Badge key={connection} variant="secondary" className="text-xs">
                              {connection}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Legend */}
            <Card className="bg-black/80 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Info className="w-5 h-5 text-orange-400" />
                  {t("legend.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-orange-500/20 to-orange-600/20" />
                    <span className="text-neutral-400">{t("legend.core")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-500/20 to-blue-600/20" />
                    <span className="text-neutral-400">{t("legend.consensus")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-green-500/20 to-green-600/20" />
                    <span className="text-neutral-400">{t("legend.features")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-purple-500/20 to-purple-600/20" />
                    <span className="text-neutral-400">{t("legend.infrastructure")}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg width="40" height="2">
                      <line x1="0" y1="1" x2="40" y2="1" stroke="#f97316" strokeWidth="2" />
                    </svg>
                    <span className="text-neutral-400">{t("legend.directConnection")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="40" height="2">
                      <line x1="0" y1="1" x2="40" y2="1" stroke="#525252" strokeWidth="1" strokeDasharray="5,5" />
                    </svg>
                    <span className="text-neutral-400">{t("legend.relation")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Transaction Lifecycle */}
        <motion.section
          variants={itemVariants}
          className="py-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Transaction Lifecycle</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {transactionSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.id} className="text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 mx-auto bg-black/80 border-2 border-white/20 rounded-full flex items-center justify-center">
                        <Icon className={`w-8 h-8 ${step.color}`} />
                      </div>
                      {index < transactionSteps.length - 1 && (
                        <ArrowRight className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-6 h-6 text-neutral-600 hidden md:block" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-400">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* dApp Patterns */}
        <motion.section
          variants={itemVariants}
          className="py-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Common dApp Patterns</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {dappPatterns.map((pattern) => (
                <Card key={pattern.id} className="bg-black/80 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">{pattern.title}</CardTitle>
                    <p className="text-neutral-400">{pattern.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {pattern.steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-semibold text-orange-400">{index + 1}</span>
                          </div>
                          <span className="text-sm text-neutral-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Strengths & Trade-offs */}
        <motion.section
          variants={itemVariants}
          className="py-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Strengths & Trade-offs</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-black/80 border-green-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    Key Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-green-400 mt-1" />
                    <div>
                      <div className="font-semibold">Predictable Execution</div>
                      <div className="text-sm text-neutral-400">eUTXO eliminates gas price auctions and reentrancy attacks</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-400 mt-1" />
                    <div>
                      <div className="font-semibold">Formal Verifiability</div>
                      <div className="text-sm text-neutral-400">ErgoScript enables mathematical proof of contract correctness</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-green-400 mt-1" />
                    <div>
                      <div className="font-semibold">Parallel Processing</div>
                      <div className="text-sm text-neutral-400">UTXO model allows concurrent transaction validation</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-400 mt-1" />
                    <div>
                      <div className="font-semibold">Built-in Cryptography</div>
                      <div className="text-sm text-neutral-400">Native Sigma protocols for advanced privacy features</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-orange-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-400 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6" />
                    Design Trade-offs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-orange-400 mt-1" />
                    <div>
                      <div className="font-semibold">Learning Curve</div>
                      <div className="text-sm text-neutral-400">Functional paradigm requires different thinking than account-based</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-orange-400 mt-1" />
                    <div>
                      <div className="font-semibold">UX Complexity</div>
                      <div className="text-sm text-neutral-400">Box management adds complexity but enables powerful patterns</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-orange-400 mt-1" />
                    <div>
                      <div className="font-semibold">Storage Costs</div>
                      <div className="text-sm text-neutral-400">Storage rent ensures sustainability but requires active management</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-orange-400 mt-1" />
                    <div>
                      <div className="font-semibold">Ecosystem Maturity</div>
                      <div className="text-sm text-neutral-400">Newer ecosystem with growing but smaller developer tooling</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          id="faq"
          variants={itemVariants} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 px-4 motion-reduce:transform-none"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Card key={index} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                  <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                    <CollapsibleTrigger asChild>
                      <button className="w-full">
                        <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                          <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
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
                          {faq.answer}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Glossary */}
        <motion.section
          variants={itemVariants}
          className="py-16 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Technical Glossary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {glossaryTerms.map((item, index) => (
                <div key={index} className="p-4 bg-black/60 border border-white/20 rounded-3xl">
                  <div className="font-semibold text-orange-400 mb-1">{item.term}</div>
                  <div className="text-sm text-neutral-300">{item.definition}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Further Reading */}
        <motion.section
          variants={itemVariants}
          className="py-16 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Further Reading</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/technology/ergoscript" className="block">
                <Card className="h-full bg-black/80 border-white/10 hover:border-orange-400/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Code className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <div className="font-semibold mb-2">ErgoScript Guide</div>
                    <div className="text-sm text-neutral-400">Learn the smart contract language</div>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/technology/eutxo-model" className="block">
                <Card className="h-full bg-black/80 border-white/10 hover:border-orange-400/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Box className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <div className="font-semibold mb-2">eUTXO Deep Dive</div>
                    <div className="text-sm text-neutral-400">Extended UTXO architecture</div>
                  </CardContent>
                </Card>
              </Link>

              <a href="https://docs.ergoplatform.com" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="h-full bg-black/80 border-white/10 hover:border-orange-400/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <div className="font-semibold mb-2">Documentation</div>
                    <div className="text-sm text-neutral-400">Technical specifications</div>
                  </CardContent>
                </Card>
              </a>

              <a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="h-full bg-black/80 border-white/10 hover:border-orange-400/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <GitBranch className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <div className="font-semibold mb-2">Source Code</div>
                    <div className="text-sm text-neutral-400">GitHub repositories</div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* Technology Detail Modal */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNode(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black/90 border border-white/20 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-3xl bg-gradient-to-r ${selectedNode.color}`}>
                    <selectedNode.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedNode.name}</h3>
                    <Badge variant="outline" className="mt-1 capitalize">
                      {selectedNode.category}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedNode(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-neutral-300 mb-6 text-lg">{selectedNode.description}</p>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 bg-black/60">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="usage">Usage</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  {selectedNode.details && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white mb-3">Key Features</h4>
                      {selectedNode.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="technical" className="mt-6">
                  {selectedNode.specifications && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white mb-3">Specifications</h4>
                      {selectedNode.specifications.map((spec, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-300">{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="usage" className="mt-6">
                  {selectedNode.useCases && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white mb-3">Use Cases</h4>
                      {selectedNode.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-300">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>

              {selectedNode.connections.length > 0 && (
                <div className="mt-6 pt-6 border-t border-neutral-700">
                  <h4 className="font-semibold text-white mb-3">Connected Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.connections.map((connection) => (
                      <Badge key={connection} variant="secondary" className="text-xs">
                        {connection}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email Capture Form */}
      <FinalCTASimple 
        title="Stay Updated on Ergo Technology"
        description="Get the latest technical insights, protocol updates, and development news delivered to your inbox."
        className=""
      />
      
      </div>
    </BackgroundWrapper>
  )
}