"use client"

import React, { useState } from "react"
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
  DollarSign,
  Eye,
  GitFork,
  LayoutGrid,
  Wallet,
  Rocket,
  Lightbulb,
  FlaskConical,
  Lock,
  Coins,
  Terminal,
  Network,
  Activity,
  Package,
  Hourglass} from "lucide-react"

import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { HiddenBreadcrumbs } from "@/components/seo/hidden-breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { networkMetrics, formatHashrate, formatTVL, formatSupplyShort, formatActiveNodes, formatTransactionsPerDay } from "@/lib/network-metrics"

export function BuildersClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "For Builders", href: "/builders" }
  ]

  const heroCodeSnippet = `
// Simple ErgoScript contract for a timed lock
{
  sigmaProp(
    HEIGHT < 1000000L && // Lock until block 1,000,000
    PK(02a799a799a799a799a799a799a799a799a799a799a799a799a799a799a799a799) // Only owner can spend
  )
}
  `

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

  const quickstartSteps = [
    {
      step: "01",
      title: "Clone the official Ergo repository",
      description: "Get the main Ergo protocol implementation with examples and documentation. Contains reference implementations and development tools.",
      duration: "3 min",
      commands: [
        "git clone https://github.com/ergoplatform/ergo",
        "cd ergo",
        "sbt compile"
      ],
      tip: "Main repository contains protocol implementation, examples, and comprehensive documentation for developers.",
      icon: Code,
      link: {
        href: "https://github.com/ergoplatform/ergo",
        text: "Open repository"
      }
    },
    {
      step: "02",
      title: "Boot local node + dev server",
      description: "Run an Ergo node/explorer via Docker (or connect to public testnet) and start the frontend for rapid iteration.",
      duration: "4 min",
      commands: [
        "docker run --rm -it -p 9053:9053 ergoplatform/ergo-node",
        "cp .env.example .env.local # add your wallet seed & API keys",
        "npm run dev"
      ],
      tip: "Keep the Dockerized node running in one tab while the React/Vite dev server hot reloads your UI.",
      icon: Terminal
    },
    {
      step: "03",
      title: "Deploy the sample contract to testnet",
      description: "Use the included scripts to compile ErgoScript, fund a test wallet, and publish the contract with one command.",
      duration: "5 min",
      commands: [
        "npm run build:contract",
        "npm run fund:testnet -- --address <YOUR_TESTNET_ADDRESS>",
        "npm run deploy:testnet -- --mnemonic \"<YOUR 15 WORDS>\""
      ],
      tip: "Need ERG for testing? Request coins at https://testnet.ergofaucet.org/",
      icon: Rocket,
      link: {
        href: "https://docs.ergoplatform.com/developers/quickstart/",
        text: "Follow full deployment guide"
      }
    }
  ]

  const comparisonData = [
    {
      criterion: "Base Model",
      bitcoin: { status: "good", text: "UTXO" },
      ethereum: { status: "bad", text: "Account" },
      monero: { status: "good", text: "UTXO" },
      ergo: { status: "good", text: "eUTXO" }
    },
    {
      criterion: "Smart Contract Safety",
      bitcoin: { status: "bad", text: "Limited" },
      ethereum: { status: "warning", text: "Reentrancy risks" },
      monero: { status: "bad", text: "None" },
      ergo: { status: "good", text: "Predictable, safer" }
    },
    {
      criterion: "Privacy Features (L1)",
      bitcoin: { status: "bad", text: "Transparent" },
      ethereum: { status: "bad", text: "Transparent" },
      monero: { status: "good", text: "Mandatory" },
      ergo: { status: "good", text: "Optional (Sigma)" }
    },
    {
      criterion: "Fees & Predictability",
      bitcoin: { status: "warning", text: "Volatile" },
      ethereum: { status: "bad", text: "High, unpredictable" },
      monero: { status: "good", text: "Low, predictable" },
      ergo: { status: "good", text: "Low, predictable" }
    },
    {
      criterion: "Developer Tooling",
      bitcoin: { status: "warning", text: "Limited" },
      ethereum: { status: "good", text: "Mature" },
      monero: { status: "bad", text: "Minimal" },
      ergo: { status: "good", text: "Growing, robust" }
    }
  ]

  const devToolbox = [
    {
      category: "Documentation",
      tools: [
        { name: "Ergo Docs", description: "Comprehensive guides for all things Ergo.", icon: BookOpen, url: "/docs" },
        { name: "ErgoScript Reference", description: "Detailed language specification and examples.", icon: Code, url: "/docs/developers/ergoscript-languages" },
        { name: "Sigma Protocols Guide", description: "Deep dive into Ergo's cryptographic primitives.", icon: Shield, url: "/docs/developers/cryptographic-primitives" },
      ]
    },
    {
      category: "SDKs & Libraries",
      tools: [
        { name: "Ergo NodeJS/TS SDK", description: "Interact with Ergo blockchain in JavaScript/TypeScript.", icon: Terminal, url: "https://github.com/ergoplatform/ergo-appkit" },
        { name: "Sigma Rust SDK", description: "High-performance Rust library for Ergo development.", icon: GitFork, url: "https://github.com/ergoplatform/sigma-rust" },
        { name: "Ergo AppKit (Java/Scala)", description: "JVM-based toolkit for dApp development.", icon: Code, url: "https://github.com/ergoplatform/ergo-appkit" },
      ]
    },
    {
      category: "Templates & Examples",
      tools: [
        { name: "Oracle Core", description: "Core off-chain component of Oracle Pools for data feeds.", icon: Coins, url: "https://github.com/ergoplatform/oracle-core" },
        { name: "Ergo Wallet App", description: "Official mobile wallet application for Ergo.", icon: Package, url: "https://github.com/ergoplatform/ergo-wallet-app" },
        { name: "Ledger App Ergo", description: "Hardware wallet support for Ergo on Ledger devices.", icon: Wallet, url: "https://github.com/ergoplatform/ledger-app-ergo" },
      ]
    },
    {
      category: "Development Tools",
      tools: [
        { name: "VSCode Extension", description: "Syntax highlighting and tooling for ErgoScript.", icon: Lightbulb, url: "https://marketplace.visualstudio.com/items?itemName=ErgoPlatform.ergoscript" },
        { name: "Testnet Faucet", description: "Get test ERG for development and testing.", icon: FlaskConical, url: "https://testnet.ergofaucet.org/" },
        { name: "Ergo Explorer", description: "Inspect transactions, blocks, and smart contracts.", icon: Eye, url: "https://explorer.ergoplatform.com/" },
      ]
    },
  ]

  const useCases = [
    {
      icon: Lock,
      title: "Private Payments & Mixers",
      description: "Build confidential transactions and non-custodial mixers using Sigma protocols for enhanced privacy.",
      link: "/docs/developers/cryptographic-primitives/sigma-protocols",
      linkText: "Learn about Sigma Protocols"
    },
    {
      icon: Coins,
      title: "Non-custodial DeFi",
      description: "Create secure decentralized exchanges, lending platforms, and other financial primitives with eUTXO's safety.",
      link: "/ecosystem/defi",
      linkText: "Explore DeFi Projects"
    },
    {
      icon: Package,
      title: "NFTs & Digital Artifacts",
      description: "Issue and manage unique digital assets with custom logic, free from VC influence.",
      link: "/docs/developers/tokenomics/nfts",
      linkText: "NFT Development Guide"
    },
    {
      icon: Network,
      title: "Off-chain Oracles & Data Feeds",
      description: "Develop robust oracle pools for reliable, decentralized data feeds into your smart contracts.",
      link: "/technology/oracle-pools",
      linkText: "Understand Oracle Pools"
    },
    {
      icon: Users,
      title: "DAO & Governance Contracts",
      description: "Implement flexible and secure decentralized autonomous organizations with ErgoScript.",
      link: "/docs/developers/ergoscript-languages/examples/dao",
      linkText: "DAO Contract Example"
    },
    {
      icon: Shield,
      title: "Identity & Authentication",
      description: "Build privacy-preserving identity solutions and advanced authentication mechanisms.",
      link: "/docs/developers/cryptographic-primitives",
      linkText: "Explore Cryptography"
    },
  ]

  const devFaqs = [
    {
      id: "ergoscript-language",
      q: "What language is ErgoScript? Is it like Solidity?",
      a: "ErgoScript is a functional, non-Turing complete language based on Scala and designed for the eUTXO model. It's different from Solidity (EVM's language) in its safety and predictability. ErgoScript focuses on secure, auditable contracts by design, minimizing common attack vectors found in account-based models.",
      links: [
        { text: "ErgoScript Guide", url: "/docs/developers/ergoscript-languages" },
        { text: "eUTXO vs Account Model", url: "/docs/introduction/eutxo" }
      ]
    },
    {
      id: "migrate-from-evm",
      q: "How hard is it to migrate from EVM?",
      a: "Migrating from EVM requires understanding the eUTXO model, which is a paradigm shift from account-based systems. While it has a learning curve, the benefits include enhanced security, predictability, and parallelizability. Ergo provides comprehensive documentation and community support to help with the transition.",
      links: [
        { text: "Ergo for Ethereum Devs", url: "/docs/developers/tooling/development-stack/ergo-for-ethereum-devs" },
        { text: "Join Dev Discord", url: "https://discord.gg/ergo-platform-668903786361651200" }
      ]
    },
    {
      id: "evm-wasm-layer",
      q: "Is there an EVM / WASM layer?",
      a: "Ergo's core philosophy prioritizes security and the eUTXO model, so it does not natively support EVM or WASM layers. However, cross-chain solutions and bridges are being developed to facilitate interoperability with other ecosystems.",
      links: [
        { text: "Ergo Bridge", url: "https://ergobridge.org/" }
      ]
    },
    {
      id: "private-defi",
      q: "Can I build private DeFi?",
      a: "Yes! Ergo's Sigma protocols enable native zero-knowledge proofs, allowing you to build dApps with programmable privacy. This means you can create confidential transactions, mixers, and other privacy-preserving DeFi protocols directly on Ergo.",
      links: [
        { text: "Sigma Protocols Guide", url: "/docs/developers/cryptographic-primitives/sigma-protocols" },
        { text: "ErgoMixer", url: "https://ergomixer.com/" }
      ]
    },
    {
      id: "dev-tooling-roadmap",
      q: "What's the roadmap for dev tooling?",
      a: "The Ergo development community is continuously expanding its tooling. The roadmap includes enhancements to SDKs, IDE integrations, debugging tools, and more comprehensive tutorials. Community contributions are highly encouraged!",
      links: [
        { text: "Ergo GitHub", url: "https://github.com/ergoplatform" },
        { text: "Contribution Guide", url: "https://github.com/ergoplatform/ergo/blob/master/CONTRIBUTING.md" }
      ]
    },
  ]

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative pb-24">
        <HiddenBreadcrumbs
          items={breadcrumbItems}
          currentPage="For Builders"
        />

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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  Build DeFi that doesn't break. Ship dApps that actually work.
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl">
                  Bitcoin-level security meets smart contracts. No reentrancy attacks. No hidden state. Predictable costs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                    <a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer">
                      <Rocket className="w-5 h-5 mr-2" aria-hidden="true" />
                      Start Building
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <Link href="/docs">
                      <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
                      Open Docs
                    </Link>
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

        {/* Why Build on Ergo Section */}
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
                        <value.icon className="w-6 h-6" aria-hidden="true" />
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
            <div className="text-center mt-12">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                <Link href="/ecosystem">
                  <Eye className="w-5 h-5 mr-2" aria-hidden="true" />
                  See real-world dApps built on Ergo
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Your First 10 Minutes Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Your First <span className="text-orange-400">10 Minutes</span>
            </h2>
            <p className="text-center text-neutral-300 mb-12 max-w-3xl mx-auto">
              Choose your path and get started quickly with Ergo's developer resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickstartSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="h-full bg-black/80 border border-white/10 rounded-3xl p-6 flex flex-col hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                          <step.icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wide text-neutral-400">Step {step.step}</p>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-500">{step.duration}</span>
                    </div>
                    <p className="text-neutral-300 text-sm mb-4 flex-1">{step.description}</p>
                    <div className="bg-black/60 border border-white/10 rounded-2xl p-4 font-mono text-xs text-orange-200 space-y-2 mb-4">
                      {step.commands.map((command, cmdIndex) => (
                        <div key={cmdIndex} className="flex items-start gap-2">
                          <span className="text-neutral-500">$</span>
                          <code className="text-orange-100 break-all">{command}</code>
                        </div>
                      ))}
                    </div>
                    {step.tip && (
                      <p className="text-xs text-neutral-400 mb-4">
                        {step.tip}
                      </p>
                    )}
                    {step.link && (
                      <Link
                        href={step.link.href}
                        target={step.link.href.startsWith("http") ? "_blank" : undefined}
                        rel={step.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-sm font-medium"
                      >
                        {step.link.text} <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ergo vs BTC / ETH / XMR Comparison */}
        <section className="py-16 px-4" id="comparison">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Why Ergo is <span className="text-orange-400">Different</span>
            </h2>
            <p className="text-center text-neutral-300 mb-12 max-w-3xl mx-auto">
              On Ergo you get a Bitcoin-like UTXO base, but extended for complex contracts and privacy,
              without inheriting Ethereum's global-state complexity.
            </p>
            <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 mb-12 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Blockchain Platform Comparison
                </CardTitle>
                <p className="text-neutral-400 text-center text-sm">
                  Ergo vs Bitcoin / Ethereum / Monero
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[700px]">
                    <caption className="sr-only">Platform comparison</caption>
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left p-4 font-semibold text-orange-400">Criterion</th>
                        <th className="text-left p-4 font-semibold text-[#F7931A]">Bitcoin</th>
                        <th className="text-left p-4 font-semibold text-[#627EEA]">Ethereum</th>
                        <th className="text-left p-4 font-semibold text-[#FF6E40]">Monero</th>
                        <th className="text-left p-4 font-semibold text-orange-400">Ergo</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      {comparisonData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-neutral-800 hover:bg-neutral-800/30">
                          <th scope="row" className="p-4 font-medium text-white">{row.criterion}</th>
                          <td className="p-4">
                            <Badge
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                row.bitcoin.status === "good" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" :
                                row.bitcoin.status === "warning" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" :
                                "bg-red-500/20 text-red-300 border-red-500/30"
                              }`}
                            >
                              {row.bitcoin.text}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                row.ethereum.status === "good" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" :
                                row.ethereum.status === "warning" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" :
                                "bg-red-500/20 text-red-300 border-red-500/30"
                              }`}
                            >
                              {row.ethereum.text}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                row.monero.status === "good" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" :
                                row.monero.status === "warning" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" :
                                "bg-red-500/20 text-red-300 border-red-500/30"
                              }`}
                            >
                              {row.monero.text}
                            </Badge>
                          </td>
                          <td className="p-4 text-orange-400">
                            <Badge
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                row.ergo.status === "good" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" :
                                row.ergo.status === "warning" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" :
                                "bg-red-500/20 text-red-300 border-red-500/30"
                              }`}
                            >
                              {row.ergo.text}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-black/20 border-t border-neutral-700">
                  <p className="text-xs text-neutral-400 text-center">
                    Snapshot comparison of security, privacy, fees and tooling across leading PoW/PoS chains.
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                <Link href="/blog/eutxo-vs-accounts">
                  <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
                  Read: eUTXO vs Accounts
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Live Metrics Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              Live Network <span className="text-orange-400">Health</span>
            </h2>
            <p className="text-center text-neutral-400 mb-2">
              Live on-chain data (updated in real time)
            </p>
            <p className="text-center text-orange-400 text-sm mb-12">
              Stable base layer = reliable smart contracts for your dApps.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for actual live data */}
              {[
                { title: "Network Hashrate", value: formatHashrate(networkMetrics), icon: Zap, description: "Ensures security and censorship resistance." },
                { title: "Transactions/Day", value: formatTransactionsPerDay(networkMetrics), icon: Activity, description: "Indicates active usage and contract execution." },
                { title: "Active Nodes", value: formatActiveNodes(networkMetrics), icon: Network, description: "Reflects decentralization and network robustness." },
                { title: "DeFi TVL", value: formatTVL(networkMetrics), icon: Coins, description: "Shows ecosystem surface area for your dApps." },
                { title: "Current Supply", value: formatSupplyShort(networkMetrics), icon: DollarSign, description: "Predictable monetary policy for long-term planning." },
                { title: "Emission Left", value: `${networkMetrics.supply.left}M left`, icon: Hourglass, description: "Long-term sustainability for your projects." },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-black/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400">
                          <metric.icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-xl font-bold text-white">{metric.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-3xl font-bold text-orange-400 mb-2">{metric.value}</p>
                      <p className="text-neutral-400 text-sm">{metric.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                <Link href="https://explorer.ergoplatform.com/" target="_blank" rel="noopener noreferrer">
                  <Eye className="w-5 h-5 mr-2" aria-hidden="true" />
                  Explore Ergo Explorer
                </Link>
              </Button>
              <Button asChild variant="outline" className="ml-4 border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                <Link href="/ecosystem" >
                  <LayoutGrid className="w-5 h-5 mr-2" aria-hidden="true" />
                  Open Ecosystem Map
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Dev Toolbox Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Your <span className="text-orange-400">Dev Toolbox</span>
            </h2>
            <p className="text-center text-neutral-300 mb-12 max-w-3xl mx-auto">
              Everything you need to start building on Ergo, from comprehensive documentation to powerful SDKs and essential development tools.
            </p>
            <div className="space-y-12">
              {devToolbox.map((categoryGroup, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold text-white mb-6">{categoryGroup.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryGroup.tools.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300 group block"
                        aria-label={`${tool.name} - Opens in new tab`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0 group-hover:bg-orange-500/30 group-hover:border-orange-500/50 transition-all duration-300">
                            <tool.icon className="w-5 h-5" aria-hidden="true" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h5 className="font-semibold text-white group-hover:text-orange-400 transition-colors text-sm">{tool.name}</h5>
                              <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors" aria-hidden="true" />
                            </div>
                            <p className="text-neutral-400 text-xs mb-2 mt-1">{tool.description}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases You Can Build Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Use Cases You Can <span className="text-orange-400">Build</span>
            </h2>
            <p className="text-center text-neutral-300 mb-12 max-w-3xl mx-auto">
              Ergo's unique architecture enables a wide range of powerful and secure decentralized applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={useCase.link} className="block h-full">
                    <Card className="h-full bg-black/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer group">
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                            <useCase.icon className="w-6 h-6" aria-hidden="true" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-0 group-hover:text-orange-100 transition-colors">{useCase.title}</h3>
                        </div>
                        <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">{useCase.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium mt-4 text-orange-400 group-hover:text-orange-300 transition-colors">
                        {useCase.linkText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Talk to Humans / Community Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Talk to <span className="text-orange-400">Humans</span>
            </h2>
            <p className="text-center text-neutral-300 mb-12 max-w-3xl mx-auto">
              Connect with the Ergo developer community for support, collaboration, and discussions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://discord.gg/ergo-platform-668903786361651200"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
                aria-label="Join Ergo Dev Discord - Opens in new tab"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <MessageSquare className="w-6 h-6 text-orange-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Join Dev Discord</h3>
                        <p className="text-orange-400 text-sm">Real-time support & discussions</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Get direct help from core developers and community members in dedicated dev channels.
                </p>
              </a>

              <a
                href="https://github.com/ergoplatform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
                aria-label="Explore Ergo GitHub - Opens in new tab"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Github className="w-6 h-6 text-orange-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Explore Ergo GitHub</h3>
                        <p className="text-orange-400 text-sm">Contribute to core development</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Dive into the codebase, open issues, and contribute to Ergo's core protocols and tools.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Developer FAQ Section */}
        <section className="max-w-5xl mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Developer <span className="text-orange-400">FAQ</span>
          </h2>
          <div className="space-y-4">
            {devFaqs.map((faq, index) => (
              <Card key={faq.id} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                <Collapsible
                  open={openFAQ === index}
                  onOpenChange={(open) => setOpenFAQ(open ? index : null)}
                >
                  <CollapsibleTrigger asChild>
                    <button className="w-full" aria-label={`Toggle FAQ: ${faq.q}`}>
                      <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                        <h3 className="text-lg font-semibold text-left text-white">{faq.q}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-400 transition-transform ${
                            openFAQ === index ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </CardContent>
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="text-neutral-300 leading-relaxed">
                        <p className="mb-4">{faq.a}</p>
                        {faq.links && (
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-orange-400">Useful Links:</h4>
                            <div className="flex flex-wrap gap-2">
                              {faq.links.map((link, i) => (
                                <a
                                  key={i}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 underline text-sm"
                                >
                                  {link.text}
                                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
              Ready to <span className="text-orange-400">Start Building</span> on Ergo?
            </h2>
            <p className="text-xl text-center text-neutral-300 mb-12">
              Choose your next step and join a growing ecosystem of innovative dApps.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/docs/developers/quickstart"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Rocket className="w-6 h-6 text-orange-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">10-Minute Quickstart</h3>
                    <p className="text-orange-400 text-sm">Get your dev environment ready</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Follow our step-by-step guide to set up your development environment and deploy your first contract.
                </p>
              </Link>

              <Link
                href="/docs/developers/ergoscript-languages/examples"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Code className="w-6 h-6 text-orange-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Browse Contract Examples</h3>
                    <p className="text-orange-400 text-sm">Learn from real-world code</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Explore a library of ErgoScript contract examples for various use cases, from DeFi to NFTs.
                </p>
              </Link>

              <Link
                href="https://discord.gg/ergo-platform-668903786361651200"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Users className="w-6 h-6 text-orange-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Talk to Developers</h3>
                    <p className="text-orange-400 text-sm">Get direct support</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Join our Discord to connect with core developers and the community for real-time assistance.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Email Capture Form */}
        <FinalCTASimple
          title="Stay Updated on Ergo Dev"
          description="Get notified about new dev tools, ErgoScript updates, and ecosystem developments."
        />

      </div>
    </BackgroundWrapper>
  )
}