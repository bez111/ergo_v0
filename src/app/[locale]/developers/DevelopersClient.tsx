"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Code,
  Shield,
  Zap,
  Users,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Github,
  Eye,
  Rocket,
  Lock,
  Terminal,
  Network,
  Activity,
  Hourglass,
  Layers,
  Cpu,
  Database,
  Infinity as InfinityIcon,
  Box,
  Settings,
  CircleDollarSign,
  ArrowRightLeft,
  FileCode,
  BookMarked,
  Search,
  Lightbulb,
  GraduationCap,
  Coins,
} from "lucide-react"

import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { networkMetrics, formatHashrate, formatTVL, formatSupplyShort, formatActiveNodes, formatTransactionsPerDay } from "@/lib/network-metrics"

// Technology Index Data
const technologyIndex = [
  { slug: "eutxo-model", title: "eUTXO Model", description: "Parallel smart contracts", icon: Layers, category: "Core" },
  { slug: "ergoscript", title: "ErgoScript", description: "Safe smart contracts", icon: Code, category: "Core" },
  { slug: "secure-pow", title: "Autolykos PoW", description: "ASIC-resistant mining", icon: Cpu, category: "Core" },
  { slug: "storage-rent", title: "Storage Rent", description: "State sustainability", icon: Database, category: "Economics" },
  { slug: "privacy-features", title: "Sigma Protocols", description: "Zero-knowledge proofs", icon: Lock, category: "Privacy" },
  { slug: "nipopows", title: "NIPoPoWs", description: "Light clients & bridges", icon: InfinityIcon, category: "Interop" },
  { slug: "oracle-pools", title: "Oracle Pools", description: "Decentralized data feeds", icon: Eye, category: "Core" },
  { slug: "native-tokens", title: "Native Tokens", description: "Protocol-level tokens", icon: Box, category: "Core" },
  { slug: "babel-fees", title: "Babel Fees", description: "Pay fees with any token", icon: ArrowRightLeft, category: "Core" },
  { slug: "subblocks", title: "Subblocks", description: "Fast confirmations", icon: Rocket, category: "Scaling" },
  { slug: "velvet-forks", title: "Velvet Forks", description: "Seamless upgrades", icon: Settings, category: "Interop" },
  { slug: "adaptive-emission", title: "Adaptive Emission", description: "Monetary policy", icon: CircleDollarSign, category: "Economics" },
]

// Why Build on Ergo
const whyBuildOnErgo = [
  {
    icon: Shield,
    title: "eUTXO Model: No Surprises",
    description: "No reentrancy attacks. No MEV exploitation. No hidden global state. Know exactly what your contract will cost before execution.",
  },
  {
    icon: Lock,
    title: "Sigma Protocols: Privacy Without PhD",
    description: "Built-in zero-knowledge proofs. Add privacy features without cryptography expertise. Ring signatures, threshold proofs, all native.",
  },
  {
    icon: Zap,
    title: "Proof-of-Work: No Chain Halts",
    description: "No rollbacks. No governance attacks. No validator cartels. Battle-tested security that just works.",
  },
  {
    icon: Users,
    title: "Fair Launch: No Corporate BS",
    description: "Zero VC premines. Zero foundation tax. Build on a chain where the community actually owns the network.",
  },
]

// Quick Start Steps
const quickStartSteps = [
  {
    step: 1,
    title: "Install Fleet SDK",
    code: "npm install @fleet-sdk/core",
    description: "Add Fleet SDK to your JavaScript/TypeScript project",
    icon: Terminal,
  },
  {
    step: 2,
    title: "Connect to Ergo",
    code: `import { ErgoAddress, Network } from "@fleet-sdk/core";
const network = Network.Testnet;`,
    description: "Initialize connection to Ergo network",
    icon: Network,
  },
  {
    step: 3,
    title: "Build Transaction",
    code: `const tx = new TransactionBuilder(height)
  .from(inputs)
  .to(new OutputBuilder(amount, address))
  .sendChangeTo(changeAddress)
  .build();`,
    description: "Create your first Ergo transaction",
    icon: Code,
  },
]

// SDKs
const sdks = [
  {
    name: "Fleet SDK",
    language: "TypeScript / JavaScript",
    description: "Most popular SDK for web apps and Node.js projects",
    url: "https://fleet-sdk.github.io/docs/",
    github: "https://github.com/fleet-sdk/fleet",
    recommended: true,
  },
  {
    name: "AppKit",
    language: "Java / Scala / Kotlin",
    description: "JVM SDK for backend services and Android apps",
    url: "https://github.com/ergoplatform/ergo-appkit",
    github: "https://github.com/ergoplatform/ergo-appkit",
  },
  {
    name: "sigma-rust",
    language: "Rust",
    description: "High-performance Rust implementation",
    url: "https://github.com/ergoplatform/sigma-rust",
    github: "https://github.com/ergoplatform/sigma-rust",
  },
  {
    name: "ergpy",
    language: "Python",
    description: "Python wrapper for Ergo development",
    url: "https://github.com/ergo-pad/ergpy",
    github: "https://github.com/ergo-pad/ergpy",
  },
]

// Learning Resources
const learningResources = [
  {
    title: "ErgoScript Course",
    description: "Learn the fundamentals of ErgoScript programming",
    href: "/learn/ergoscript",
    icon: GraduationCap,
    tag: "Start Here",
  },
  {
    title: "Dev Patterns",
    description: "Copy-paste smart contract blueprints",
    href: "/patterns",
    icon: FileCode,
    tag: "Code",
  },
  {
    title: "Playbooks",
    description: "Step-by-step development guides",
    href: "/playbooks",
    icon: BookMarked,
    tag: "Guides",
  },
  {
    title: "Glossary",
    description: "Key terms and concepts explained",
    href: "/learn/glossary",
    icon: BookOpen,
    tag: "Reference",
  },
]

// Platform Comparison
const comparisonData = [
  {
    criterion: "Base Model",
    bitcoin: { status: "good", text: "UTXO" },
    ethereum: { status: "bad", text: "Account" },
    ergo: { status: "good", text: "eUTXO" }
  },
  {
    criterion: "Smart Contract Safety",
    bitcoin: { status: "bad", text: "Limited" },
    ethereum: { status: "warning", text: "Reentrancy risks" },
    ergo: { status: "good", text: "Predictable, safer" }
  },
  {
    criterion: "Privacy Features (L1)",
    bitcoin: { status: "bad", text: "Transparent" },
    ethereum: { status: "bad", text: "Transparent" },
    ergo: { status: "good", text: "Optional (Sigma)" }
  },
  {
    criterion: "Fees & Predictability",
    bitcoin: { status: "warning", text: "Volatile" },
    ethereum: { status: "bad", text: "High, unpredictable" },
    ergo: { status: "good", text: "Low, predictable" }
  },
]

// FAQ Data
const faqItems = [
  {
    q: "How do I start building on Ergo?",
    a: "Start by learning ErgoScript fundamentals, set up the Ergo development environment (Scala/JavaScript SDKs), explore example contracts on GitHub, and join the developer Discord for support. The /learn section has structured paths for new developers.",
  },
  {
    q: "What programming languages can I use for Ergo?",
    a: "ErgoScript is the native smart contract language. For app development, use: Scala/Java (Appkit SDK), JavaScript/TypeScript (Fleet SDK), Rust (sigma-rust), or Python (ergpy). Most developers start with Fleet SDK for web apps.",
  },
  {
    q: "Is ErgoScript hard to learn?",
    a: "ErgoScript has a learning curve different from Solidity. It's functional and declarative rather than imperative. If you know Scala or functional programming, it's easier. The eUTXO model requires new thinking but prevents entire classes of bugs (no reentrancy).",
  },
  {
    q: "What makes Ergo different for developers?",
    a: "Ergo offers: eUTXO model (no reentrancy attacks, predictable costs), Sigma Protocols (built-in privacy primitives), NiPoPoWs (light clients), and predictable ~$0.01 fees. Smart contracts are safer by design.",
  },
  {
    q: "Where can I find ErgoScript code examples?",
    a: "Check the /patterns page for copy-paste ready contract patterns, /playbooks for step-by-step guides, and docs.ergoplatform.com for the official reference. GitHub repos of ecosystem projects provide real-world examples.",
  },
  {
    q: "Are there grants for Ergo developers?",
    a: "Yes! The Ergo Foundation offers grants for open-source projects, dApps, tooling, and research. Apply via GitHub or join the developer community to discuss your project first.",
  },
]

export function DevelopersClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Developers", href: "/developers" }
  ]

  const heroCodeSnippet = `// Simple ErgoScript contract
{
  sigmaProp(
    HEIGHT < deadline &&
    PK(ownerPubKey)
  )
}`

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative pb-24">
        <Breadcrumbs items={breadcrumbItems} variant="hidden" />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pt-28 pb-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6">
                  <Terminal className="w-4 h-4" />
                  Developer Hub
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  Build DeFi that doesn't break
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl">
                  Bitcoin-level security meets smart contracts. No reentrancy attacks. No hidden state. Predictable costs. Built-in privacy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                    <Link href="/learn/ergoscript">
                      <Rocket className="w-5 h-5 mr-2" />
                      Start Learning
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <Link href="/patterns">
                      <FileCode className="w-5 h-5 mr-2" />
                      Browse Patterns
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <a href="https://docs.ergoplatform.com" target="_blank" rel="noopener noreferrer">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Docs
                    </a>
                  </Button>
                </div>
              </div>
              <motion.div
                className="relative z-10 bg-black/80 border border-white/10 rounded-3xl p-6 font-mono text-sm overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <pre className="text-green-400 whitespace-pre-wrap break-all">
                  {heroCodeSnippet}
                </pre>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Build on Ergo */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Why Build on <span className="text-orange-400">Ergo</span>?
            </h2>
            <div className="space-y-6">
              {whyBuildOnErgo.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                        <value.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                        <p className="text-neutral-400 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start with Fleet SDK */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Start with <span className="text-orange-400">Fleet SDK</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Get from zero to your first Ergo transaction in 3 steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {quickStartSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-black/80 border border-white/10 rounded-3xl p-6 hover:border-orange-400/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-neutral-400 text-sm mb-4">{step.description}</p>
                    <div className="bg-black/60 border border-white/10 rounded-xl p-4 font-mono text-xs text-orange-200 overflow-x-auto">
                      <pre className="whitespace-pre-wrap">{step.code}</pre>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link 
                href="https://fleet-sdk.github.io/docs/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium"
              >
                Read full Fleet SDK documentation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Technology Index */}
        <section className="py-16 px-4" id="technology">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technology <span className="text-orange-400">Index</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Complete reference to Ergo's core technologies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologyIndex.map((tech, index) => (
                <motion.div
                  key={tech.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <Link href={`/technology/${tech.slug}`}>
                    <Card className="h-full bg-black/60 border border-white/10 rounded-2xl p-4 hover:bg-black/80 hover:border-orange-400/40 transition-all duration-300 cursor-pointer group">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                          <tech.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors truncate">
                            {tech.title}
                          </h3>
                          <p className="text-xs text-neutral-500 truncate">{tech.description}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                <Link href="/technology">
                  <Layers className="w-5 h-5 mr-2" />
                  View All Technologies
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SDKs & Libraries */}
        <section className="py-16 px-4" id="sdks">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                SDKs & <span className="text-orange-400">Libraries</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Choose the SDK for your preferred language
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`h-full bg-black/80 border rounded-3xl p-6 hover:bg-black/90 transition-all duration-300 ${sdk.recommended ? 'border-orange-400/50' : 'border-white/10 hover:border-orange-400/40'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white">{sdk.name}</h3>
                          {sdk.recommended && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-orange-400">{sdk.language}</p>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={sdk.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-orange-400 hover:border-orange-400/40 transition-all"
                        >
                          <BookOpen className="w-5 h-5" />
                        </a>
                        <a
                          href={sdk.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-orange-400 hover:border-orange-400/40 transition-all"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <p className="text-neutral-400">{sdk.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Learning <span className="text-orange-400">Resources</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Structured paths to master Ergo development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={resource.href}>
                    <Card className="h-full bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400 group-hover:bg-orange-500/30 transition-colors">
                          <resource.icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/10">
                          {resource.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-neutral-400 text-sm">{resource.description}</p>
                      <div className="mt-4 flex items-center gap-1 text-orange-400 text-sm font-medium group-hover:text-orange-300">
                        Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Tools */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Developer <span className="text-orange-400">Tools</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://explorer.ergoplatform.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Search className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">Explorer</h3>
                    <p className="text-sm text-neutral-400">Inspect transactions & blocks</p>
                  </div>
                </div>
              </a>

              <a
                href="https://testnet.ergofaucet.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Coins className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">Testnet Faucet</h3>
                    <p className="text-sm text-neutral-400">Get test ERG for development</p>
                  </div>
                </div>
              </a>

              <a
                href="https://marketplace.visualstudio.com/items?itemName=ErgoPlatform.ergoscript"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Lightbulb className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">VSCode Extension</h3>
                    <p className="text-sm text-neutral-400">ErgoScript syntax highlighting</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Platform Comparison */}
        <section className="py-16 px-4" id="comparison">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Why Ergo is <span className="text-orange-400">Different</span>
            </h2>
            <Card className="bg-black/80 border border-white/10 rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[500px]">
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left p-4 font-semibold text-orange-400">Criterion</th>
                        <th className="text-left p-4 font-semibold text-[#F7931A]">Bitcoin</th>
                        <th className="text-left p-4 font-semibold text-[#627EEA]">Ethereum</th>
                        <th className="text-left p-4 font-semibold text-orange-400">Ergo</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      {comparisonData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-neutral-800 hover:bg-neutral-800/30">
                          <th scope="row" className="p-4 font-medium text-white">{row.criterion}</th>
                          <td className="p-4">
                            <Badge className={`px-3 py-1 rounded-full text-xs font-medium ${
                              row.bitcoin.status === "good" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" :
                              row.bitcoin.status === "warning" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" :
                              "bg-red-500/20 text-red-300 border-red-500/30"
                            }`}>
                              {row.bitcoin.text}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge className={`px-3 py-1 rounded-full text-xs font-medium ${
                              row.ethereum.status === "good" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" :
                              row.ethereum.status === "warning" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" :
                              "bg-red-500/20 text-red-300 border-red-500/30"
                            }`}>
                              {row.ethereum.text}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                              {row.ergo.text}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                <Link href="/blog/eutxo-vs-accounts">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read: eUTXO vs Accounts
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Live Network Health */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Live Network <span className="text-orange-400">Health</span>
            </h2>
            <p className="text-center text-neutral-400 mb-12">
              Stable base layer = reliable smart contracts
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { title: "Hashrate", value: formatHashrate(networkMetrics), icon: Zap },
                { title: "TX/Day", value: formatTransactionsPerDay(networkMetrics), icon: Activity },
                { title: "Nodes", value: formatActiveNodes(networkMetrics), icon: Network },
                { title: "TVL", value: formatTVL(networkMetrics), icon: Coins },
                { title: "Supply", value: formatSupplyShort(networkMetrics), icon: CircleDollarSign },
                { title: "Emission", value: `${networkMetrics.supply.left}M left`, icon: Hourglass },
              ].map((metric, index) => (
                <Card key={index} className="bg-black/60 border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <metric.icon className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-neutral-400">{metric.title}</span>
                  </div>
                  <p className="text-lg font-bold text-orange-400">{metric.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join the <span className="text-orange-400">Community</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Get help from core developers and connect with other builders
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://discord.gg/ergo-platform-668903786361651200"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <MessageSquare className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Developer Discord</h3>
                        <p className="text-orange-400 text-sm">Real-time support</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Get direct help from core developers in dedicated #dev channels.
                </p>
              </a>

              <a
                href="https://github.com/ergoplatform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Github className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">GitHub</h3>
                        <p className="text-orange-400 text-sm">Open source</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Explore the codebase and contribute to core protocols.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Developer FAQ */}
        <section className="max-w-4xl mx-auto py-16 px-4" id="faq">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Developer <span className="text-orange-400">FAQ</span>
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <Card key={index} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                <Collapsible
                  open={openFAQ === index}
                  onOpenChange={(open) => setOpenFAQ(open ? index : null)}
                >
                  <CollapsibleTrigger asChild>
                    <button className="w-full">
                      <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors rounded-3xl">
                        <h3 className="text-lg font-semibold text-left text-white pr-4">{faq.q}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 ${
                            openFAQ === index ? "rotate-180" : ""
                          }`}
                        />
                      </CardContent>
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-neutral-300 leading-relaxed">{faq.a}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-3xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Build?
              </h2>
              <p className="text-neutral-300 mb-6 max-w-xl mx-auto">
                Start with the ErgoScript course, explore patterns, and join the developer Discord.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl">
                  <Link href="/learn/ergoscript">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Start ErgoScript Course
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                  <Link href="/ecosystem">
                    <Eye className="w-5 h-5 mr-2" />
                    Explore Ecosystem
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <FinalCTASimple
          title="Developer Updates"
          description="Get notified about new SDKs, ErgoScript features, and ecosystem developments."
        />
      </div>
    </BackgroundWrapper>
  )
}

