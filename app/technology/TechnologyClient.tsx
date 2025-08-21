"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn } from "@/components/animations/fade-in"
import {
  Code,
  Shield,
  Zap,
  Database,
  Cpu,
  Layers,
  CircleDollarSign,
  Infinity as InfinityIcon,
  Link as LinkIcon,
  Settings,
  Eye,
  Lock,
  Box,
  Rocket,
  Timer,
  ExternalLink,
  ArrowRight,
  Users,
  RefreshCw,
  Monitor,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Globe,
  Coins,
  BarChart3,
  TrendingUp,
  Book,
  ChevronDown,

} from "lucide-react"
import Link from "next/link"
// Removed glossary imports
// import { GlossarySection } from "@/components/glossary/glossary-section"
// import { ERGO_GLOSSARY } from "@/lib/glossary-constants"
import { HexagonalGrid } from "@/components/ui-kit/signature-effects"
import { useState, useEffect, useMemo } from "react"
import Head from "next/head"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Script from "next/script"

const techFeatures = [
  {
    icon: Layers,
    title: "eUTXO Model",
    description:
      "Extended UTXO model that enables parallel smart contract execution and composable DeFi applications. Eliminates reentrancy attacks while maintaining Bitcoin's proven security model.",
    color: "",
    href: "/technology/eutxo-model",
    details: [
      { icon: Layers, title: "Parallel Execution", description: "Smart contracts run independently without global state conflicts." },
      { icon: LinkIcon, title: "Composability", description: "Build complex DeFi applications from simple, reusable components." },
      { icon: Shield, title: "Bitcoin-Level Security", description: "Inherits UTXO's battle-tested double-spend protection." },
    ],
  },
  {
    icon: Code,
    title: "ErgoScript",
    description:
      "Powerful smart contract language designed for security and flexibility. Features built-in Sigma protocols for zero-knowledge proofs and formal verification support for bulletproof contracts.",
    color: "",
    href: "/technology/ergoscript",
    details: [
      { icon: ShieldCheck, title: "Formal Verification", description: "Mathematically prove your smart contracts are secure and bug-free." },
      { icon: Lock, title: "Built-in Privacy", description: "Native zero-knowledge proofs and ring signatures for confidential transactions." },
      { icon: Code, title: "Safe by Design", description: "Prevents common vulnerabilities like reentrancy attacks and unexpected behaviors." },
    ],
  },
  {
    icon: Cpu,
    title: "Autolykos PoW",
    description:
      "Energy-efficient, ASIC-resistant mining algorithm that democratizes network participation. Designed for GPU mining to keep the network decentralized and accessible to everyone.",
    color: "",
    href: "/technology/secure-pow",
    details: [
      { icon: Zap, title: "Energy Efficient", description: "Memory-hard algorithm reduces power consumption compared to traditional PoW." },
      { icon: Users, title: "Solo Mining Friendly", description: "Low barrier to entry enables individual miners to participate profitably." },
      { icon: Shield, title: "ASIC Resistant", description: "Optimized for consumer GPUs to prevent mining centralization." },
    ],
  },
  {
    icon: Database,
    title: "Storage Rent",
    description:
      "Revolutionary economic model that prevents blockchain bloat. Inactive coins pay minimal rent after 4 years, ensuring sustainable blockchain size and permanent miner rewards.",
    color: "",
    href: "/technology/storage-rent",
    details: [
      { icon: RefreshCw, title: "Sustainable Blockchain", description: "Automatic cleanup of unused data keeps the blockchain lean and efficient." },
      { icon: CircleDollarSign, title: "Perpetual Security", description: "Miners receive rewards forever, ensuring long-term network security." },
      { icon: Monitor, title: "Resource Efficient", description: "Maintains lightweight blockchain that runs on modest hardware." },
    ],
  },
  {
    icon: Lock,
    title: "Sigma Protocols",
    description:
      "Built-in zero-knowledge proofs enable privacy-preserving transactions and advanced cryptographic features without third-party solutions or complex setups.",
    color: "",
    href: "/technology/privacy-features",
    details: [
      { icon: Eye, title: "Optional Privacy", description: "Choose between transparent or confidential transactions as needed." },
      { icon: ShieldCheck, title: "Advanced Security", description: "Multi-signature wallets, threshold signatures, and secure voting systems." },
      { icon: Sparkles, title: "Developer Friendly", description: "Simple APIs to add privacy features to any application." },
    ],
  },
  {
    icon: InfinityIcon,
    title: "NIPoPoWs",
    description:
      "Non-Interactive Proofs of Proof-of-Work enable ultra-light clients and trustless cross-chain communication. Sync mobile wallets in seconds, not hours.",
    color: "",
    href: "/technology/nipopows",
    details: [
      { icon: Smartphone, title: "Instant Mobile Sync", description: "Full security with minimal data - sync in seconds on any device." },
      { icon: LinkIcon, title: "Trustless Bridges", description: "Connect to other blockchains without centralized validators." },
      { icon: ShieldCheck, title: "Cryptographic Security", description: "Mathematical proofs ensure full node-level security for light clients." },
    ],
  },
  {
    icon: Rocket,
    title: "Subblocks (In Development)",
    description:
      "Revolutionary Layer 1 scaling solution providing sub-second transaction confirmations without sacrificing decentralization or security.",
    color: "",
    href: "/technology/subblocks",
    details: [
      { icon: Timer, title: "Sub-Second Confirmations", description: "Near-instant transaction finality for improved user experience." },
      { icon: Lock, title: "Layer 1 Security", description: "Full blockchain security without trusted intermediaries." },
      { icon: Globe, title: "Seamless Integration", description: "Works with existing infrastructure - no bridges or sidechains needed." },
    ],
  },
  {
    icon: Box,
    title: "Native Tokens & NFTs",
    description:
      "Create and trade tokens and NFTs directly at the protocol level. No smart contracts needed - just simple, secure, and cost-effective native assets.",
    color: "",
    href: "/technology/native-tokens",
    details: [
      { icon: Coins, title: "One-Click Creation", description: "Issue tokens, stablecoins, or NFTs in a single transaction." },
      { icon: Layers, title: "DeFi Ready", description: "Native integration with all Ergo applications and protocols." },
      { icon: Zap, title: "True Native Assets", description: "First-class tokens with protocol-level security guarantees." },
    ],
  },
  {
    icon: Eye,
    title: "Oracle Pools",
    description:
      "Decentralized price feeds and data oracles built into the protocol. No single point of failure, no centralized operators - just reliable, composable data for DeFi.",
    color: "",
    href: "/technology/oracle-pools",
    details: [
      { icon: BarChart3, title: "Reliable Price Feeds", description: "Consensus-based data aggregation ensures accurate, manipulation-resistant prices." },
      { icon: Layers, title: "Universal Compatibility", description: "Any smart contract can access oracle data without special integrations." },
      { icon: ShieldCheck, title: "Fully Decentralized", description: "No central authority or single point of failure in the data pipeline." },
    ],
  },
  {
    icon: Settings,
    title: "Velvet Forks",
    description:
      "Optional, backward-compatible extensions (velvet). New features can coexist with non-upgraded nodes; security depends on the specific proposal.",
    color: "",
    href: "/technology/velvet-forks",
    details: [
      { icon: RefreshCw, title: "Backward Compatible", description: "No forced upgrades, no chain wars." },
      { icon: TrendingUp, title: "Future Proof", description: "Adopt innovations at your own pace." },
      { icon: Timer, title: "Gradual Adoption", description: "Evolutionary, not revolutionary changes." },
    ],
  },
  {
    icon: CircleDollarSign,
    title: "Adaptive Emission & Governance",
    description:
      "Consensus-driven tuning of economic parameters (e.g., miner voting) with community input.",
    color: "",
    href: "/technology/adaptive-emission",
    details: [
      { icon: CircleDollarSign, title: "Parameter Tuning", description: "Economic variables can be adjusted." },
      { icon: TrendingUp, title: "Economic Flexibility", description: "Adapt to changing network needs." },
      { icon: Users, title: "Community Input", description: "Discussions and decisions involve the community." },
    ],
  },
]

const ctas = [
  {
    label: "Dive into Ergo Docs",
          href: "/docs",
    color: "from-orange-500 to-orange-600",
    outline: false,
  },
  {
    label: "See Ecosystem Apps",
    href: "/ecosystem",
    color: "from-cyan-500 to-cyan-600",
    outline: true,
  },
]

export default function TechnologyPage() {
  const layer1 = [
    { label: "eUTXO & ErgoScript", icon: Layers },
    { label: "Autolykos PoW", icon: Cpu },
    { label: "Storage Rent", icon: Database },
    { label: "Sigma Protocols", icon: Lock },
    { label: "Native Tokens & NFTs", icon: Box },
  ] as const

  const layer2 = [
    { label: "Subblocks", icon: Rocket },
    { label: "NIPoPoWs", icon: InfinityIcon },
    { label: "Oracle Pools", icon: Eye },
    { label: "Velvet Forks", icon: Settings },
    { label: "Adaptive Emission & Governance", icon: CircleDollarSign },
  ] as const

  const [activeTab, setActiveTab] = useState("usecases")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // Prevent scroll when switching tabs
  const handleTabChange = (value: string) => {
    const scrollPosition = window.scrollY
    setActiveTab(value)
    // Restore scroll position after state update
    setTimeout(() => {
      window.scrollTo(0, scrollPosition)
    }, 0)
  }

  // Removed techFaqTerms previously used to extend glossary
  // const techFaqTerms = techFeatures.map((f) => ({
  //   ['@type']: "DefinedTerm" as const,
  //   name: f.title,
  //   description: f.description,
  //   inDefinedTermSet: 'Ergo Technology',
  //   category: 'technology'
  // }))

  // Local FAQ data for Technology page
  const faqs: Array<{ id: string; q: string; a: React.ReactNode; tag?: string }> = [
    {
      id: "what-is-eutxo",
      q: "What makes Ergo's eUTXO model superior to account-based blockchains?",
      tag: "eUTXO",
      a: (
        <>
          eUTXO splits the blockchain state into independent “boxes” (outputs), enabling <b>parallel smart
          contracts</b> without a global state and reducing reentrancy risks. DApps become <i>composable</i>: complex
          logic can be built from simple outputs. Learn more — {""}
          <Link href="/technology/eutxo-model" className="underline hover:opacity-80">eUTXO Model</Link>.
        </>
      ),
    },
    {
      id: "what-is-ergoscript",
      q: "How does ErgoScript prevent smart contract vulnerabilities?",
      tag: "ErgoScript",
      a: (
        <>
          It’s Ergo’s contract language for “money with logic”: formally verifiable code, strict typing, and built-in
          cryptographic primitives. Contracts are <b>auditable and predictable</b>—design avoids global mutable state and typical reentrancy patterns. Start here: {""}
          <Link href="/technology/ergoscript" className="underline hover:opacity-80">ErgoScript</Link>.
        </>
      ),
    },
    {
      id: "autolykos-mining",
      q: "Why is Autolykos considered decentralized and energy-efficient?",
      tag: "PoW",
      a: (
        <>
          Memory-hard and ASIC-resistant — fair for ordinary miners. Rewards favor <b>solo mining</b> and reduce pool
          dependence, keeping the network secure with moderate energy use. More details: {""}
          <Link href="/technology/secure-pow" className="underline hover:opacity-80">Autolykos PoW</Link>.
        </>
      ),
    },
    {
      id: "storage-rent",
      q: "How does Storage Rent solve blockchain sustainability?",
      tag: "Storage",
      a: (
        <>
          Unspent coins after ~4 years start paying “rent” — this is <b>state recycling</b>: prevents unlimited
          blockchain growth and ensures miners earn revenue even after emissions end. Learn more: {""}
          <Link href="/technology/storage-rent" className="underline hover:opacity-80">Storage Rent</Link>.
        </>
      ),
    },
    {
      id: "sigma-protocols",
      q: "What privacy features does Ergo offer natively?",
      tag: "Privacy",
      a: (
        <>
          Sigma protocols provide native zero-knowledge proofs, ring signatures, <b>multisig/threshold</b> schemes, and
          private payments without external hacks. This simplifies building confidential dApps. See: {""}
          <Link href="/technology/privacy-features" className="underline hover:opacity-80">Privacy Features</Link>.
        </>
      ),
    },
    {
      id: "nipopows",
      q: "How do NIPoPoWs enable instant mobile wallet sync?",
      tag: "Light clients",
      a: (
        <>
          “Tiny” blockchain proofs that allow <b>light clients</b>, instant mobile sync, and trustless cross-chain
          bridges without full nodes. More: {""}
                      <Link href="/technology/nipopows" className="underline hover:opacity-80">NIPoPoWs</Link>.
        </>
      ),
    },
    {
      id: "oracle-pools",
      q: "Why are Ergo's Oracle Pools more secure than Chainlink?",
      tag: "Oracles",
      a: (
        <>
          Protocol-native, <b>composable</b> data feeds without a central operator — no single point of bribery or
          failure. Can be plugged into any contract. More: {""}
          <Link href="/technology" className="underline hover:opacity-80">Oracle Pools</Link>.
        </>
      ),
    },
    {
      id: "subblocks",
      q: "How do Subblocks achieve sub-second transaction confirmations?",
      tag: "Scaling",
      a: (
        <>
          Splitting blocks into fast “sub-blocks” speeds up payment and dApp confirmation without trusted sequencers.
          <b>Layer-1 scaling</b> with faster perceived confirmations; finality follows base consensus.
        </>
      ),
    },
    {
      id: "tokens-nfts",
      q: "How to create tokens and NFTs on Ergo without smart contracts?",
      tag: "Tokens & NFTs",
      a: (
        <>
          Yes — issuance is native at the protocol layer, in a single transaction. <b>True native assets</b> are
          instantly composable with dApps. More: {""}
          <Link href="/technology" className="underline hover:opacity-80">Native Tokens</Link>.
        </>
      ),
    },
  ]



  function FAQSection() {

    // helpers
    function nodeToPlainText(node: React.ReactNode): string {
      if (node == null || node === false) return ""
      if (typeof node === "string" || typeof node === "number") return String(node)
      if (Array.isArray(node)) return node.map(nodeToPlainText).join(" ")
      if (typeof node === "object" && "props" in (node as any)) {
        const { children } = (node as any).props ?? {}
        return nodeToPlainText(children)
      }
      return ""
    }

    const faqJsonLd = useMemo(() => {
      const items = faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: typeof f.a === "string" ? f.a : nodeToPlainText(f.a) },
      }))
      return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items }
    }, [])

    // Scroll to hash and highlight on load
    useEffect(() => {
      const hash = decodeURIComponent(window.location.hash.replace("#", ""))
      if (!hash) return
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        el.classList.add("ring-1", "ring-orange-500/60")
        const t = setTimeout(() => el.classList.remove("ring-1", "ring-orange-500/60"), 1200)
        return () => clearTimeout(t)
      }
    }, [])

    return (
      <section aria-labelledby="faq-heading" className="max-w-5xl mx-auto">
        <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <h2 id="faq-heading" className="text-4xl font-bold text-center mb-4 md:mb-6 text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={faq.id} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                  <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                    <CollapsibleTrigger asChild>
                      <button className="w-full">
                        <CardContent className="p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                          <h3 className="text-lg font-semibold text-left text-white">{faq.q}</h3>
                          <ChevronDown aria-hidden="true" className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} />
                        </CardContent>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <div className="text-neutral-300 leading-relaxed [&>a]:text-orange-400 [&>a]:underline [&>a]:hover:text-orange-300 [&>b]:text-white [&>i]:text-neutral-200">
                          {faq.a}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-800">
              <div className="flex justify-end">
                <Button asChild variant="outline" className="bg-neutral-900/60 border-neutral-700 text-neutral-200 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-200">
                  <Link href="/docs">Go to Docs <ExternalLink className="h-4 w-4 ml-2" aria-hidden="true" /></Link>
                </Button>
              </div>
            </div>
          </section>
        )
      }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Metadata moved to App Router layout metadata */}

      {/* Background */}
      <HexagonalGrid className="opacity-[0.03]" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <FadeIn>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-snug pb-2 align-baseline block text-center">
                  ERGO TECHNOLOGY
                </h1>
                <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                  Advanced blockchain infrastructure for scalable DeFi, secure smart contracts, and true decentralization.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Main Tech Features Grid */}
        <FadeIn>
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + idx * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="group motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <Link href={feature.href || "/technology"} prefetch={false}>
                    <Card
                      className={`bg-neutral-900/50 border-neutral-700 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 h-full cursor-pointer rounded-xl`}
                    >
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                          <feature.icon className="w-8 h-8 text-orange-400" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-2xl font-bold mb-2 text-white">
                          <div className="flex items-center justify-center gap-2 flex-wrap">
                            {feature.title.includes("Research/In development") ? (
                              <>
                                {feature.title.replace(" (Research/In development)", "")}
                                <Badge className="bg-orange-500/10 text-orange-400 border border-orange-500/30 text-xs font-medium">
                                  Research
                                </Badge>
                              </>
                            ) : (
                              feature.title
                            )}
                          </div>
                        </CardTitle>
                        <p className="text-neutral-300 leading-relaxed text-base min-h-[72px]">{feature.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 pt-4">
                          {feature.details.map((d, i) => (
                            <motion.div
                              key={d.title}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.35 + i * 0.06 }}
                              className="flex items-start gap-3 p-2 bg-neutral-900/60 rounded-lg hover:bg-orange-500/10 transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none"
                            >
                              {d.icon ? (
                                <d.icon className="w-4 h-4 text-orange-400 mt-0.5" aria-hidden="true" />
                              ) : (
                                <span className="text-lg">•</span>
                              )}
                              <div>
                                <h4 className="font-semibold text-white mb-0">{d.title}</h4>
                                <p className="text-neutral-400 text-sm">{d.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Tabs Section */}
        <FadeIn>
          <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
            <TabsList className="flex w-full gap-2 bg-transparent p-0">
              <TabsTrigger
                value="usecases"
                className="flex-1 rounded-md border border-neutral-700 bg-neutral-900/60 px-4 py-2 text-neutral-300 hover:bg-neutral-900 data-[state=active]:border-orange-500/50 data-[state=active]:text-orange-400 data-[state=active]:bg-orange-500/10"
              >
                Use Cases
              </TabsTrigger>
              <TabsTrigger
                value="architecture"
                className="flex-1 rounded-md border border-neutral-700 bg-neutral-900/60 px-4 py-2 text-neutral-300 hover:bg-neutral-900 data-[state=active]:border-orange-500/50 data-[state=active]:text-orange-400 data-[state=active]:bg-orange-500/10"
              >
                Architecture
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="flex-1 rounded-md border border-neutral-700 bg-neutral-900/60 px-4 py-2 text-neutral-300 hover:bg-neutral-900 data-[state=active]:border-orange-500/50 data-[state=active]:text-orange-400 data-[state=active]:bg-orange-500/10"
              >
                Resources
              </TabsTrigger>
            </TabsList>

            {/* Fixed container for all tab contents */}
            <div className="mt-8 min-h-[420px]">
              {/* Use Cases */}
              <TabsContent value="usecases" className="m-0">
                {(() => {
                  const containerVariants = {
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                    },
                  }
                  const itemVariants = {
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }
                  return (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="grid md:grid-cols-3 gap-8">
                        {[
                          {
                            title: "DeFi & Finance",
                            icon: Coins,
                            items: [
                              "Non-custodial DeFi protocols",
                              "Custom multi-signature wallets",
                              "Stablecoins and native tokens",
                              "Decentralized oracle networks",
                            ],
                          },
                          {
                            title: "Privacy & Governance",
                            icon: Lock,
                            items: [
                              "Decentralized mixers and privacy tools (check legal status)",
                              "DAOs & governance systems",
                            ],
                          },
                          {
                            title: "Infrastructure & Apps",
                            icon: Rocket,
                            items: [
                              "NFT marketplaces & composable dApps",
                              "Scalable micropayments and instant settlement",
                              "Cross-chain bridges & light wallets",
                            ],
                          },
                        ].map((col) => (
                          <motion.div key={col.title} variants={itemVariants}>
                            <Card className="bg-neutral-900/50 border-neutral-700 rounded-xl h-full hover:border-orange-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 transition-colors motion-reduce:transform-none motion-reduce:transition-none">
                              <CardHeader className="pb-3">
                                <div className="flex items-center gap-3">
                                  <col.icon className="w-5 h-5 text-orange-400" />
                                  <CardTitle className="text-xl text-white">{col.title}</CardTitle>
                                </div>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <ul className="space-y-2">
                                  {col.items.map((t) => (
                                    <li key={t} className="flex items-start gap-3 p-3 bg-neutral-900/60 rounded-lg hover:bg-orange-500/10 transition-colors">
                                      <ArrowRight className="w-4 h-4 text-orange-400 mt-0.5" />
                                      <span className="text-sm text-neutral-200">{t}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                })()}
              </TabsContent>

              {/* Architecture */}
              <TabsContent value="architecture" className="m-0">
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                <CardHeader>
                    <CardTitle className="text-white">
                    Ergo Tech Stack Overview
                  </CardTitle>
                    <p className="text-sm text-neutral-400 mt-1">
                      <span className="font-semibold text-white">Ergo's architecture</span> delivers decentralization, composability, and built-in privacy—without tradeoffs.
                    </p>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Layer 1 */}
                      <Card className="bg-neutral-900/60 border-neutral-700 rounded-xl">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-orange-400 text-xl">Layer 1</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 text-neutral-300">
                            {layer1.map(({ label, icon: Icon }) => (
                              <li key={label} className="flex items-start gap-3">
                                <Icon className="w-4 h-4 text-orange-400 mt-0.5" />
                                <span>{label}</span>
                              </li>
                            ))}
                      </ul>
                        </CardContent>
                      </Card>

                      {/* Layer 2 / Extensions */}
                      <Card className="bg-neutral-900/60 border-neutral-700 rounded-xl">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-orange-400 text-xl">Layer 2 / Extensions</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 text-neutral-300">
                            {layer2.map(({ label, icon: Icon }) => (
                              <li key={label} className="flex items-start gap-3">
                                <Icon className="w-4 h-4 text-orange-400 mt-0.5" />
                                <span>{label}</span>
                              </li>
                            ))}
                      </ul>
                        </CardContent>
                      </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

                        {/* Resources */}
              <TabsContent value="resources" className="m-0">
                {(() => {
                  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }
                  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }
                  return (
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {resources.map((res) => {
                          const isExternal = /^https?:\/\//.test(res.href)
                          const Wrapper: any = isExternal ? 'a' : Link
                          const wrapperProps = isExternal
                            ? { href: res.href, target: "_blank", rel: "noopener noreferrer" }
                            : { href: res.href }
                          return (
                            <motion.div key={res.title} variants={itemVariants}>
                              <Wrapper {...wrapperProps} className="group block focus-visible:outline-none">
                                <Card className="bg-neutral-900/50 border-neutral-700 rounded-xl h-full hover:border-orange-500/50 focus-visible:ring-2 focus-visible:ring-orange-400 transition-colors motion-reduce:transform-none motion-reduce:transition-none">
                                  <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between gap-3">
                                      <div className="flex items-center gap-3">
                                        <res.icon className="w-5 h-5 text-orange-400" aria-hidden="true" />
                                        <CardTitle className="text-xl text-white">{res.title}</CardTitle>
                                      </div>
                                      {isExternal && (
                                        <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors" aria-hidden="true" />
                                      )}
                                    </div>
                                  </CardHeader>
                                </Card>
                              </Wrapper>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  )
                })()}
              </TabsContent>
            </div>
          </Tabs>
        </FadeIn>

          {/* CTA moved to bottom */}

        {/* Full FAQ */}
        <div className="container py-4">
          <div className="max-w-7xl mx-auto mb-20">
            <FAQSection />
          </div>
        </div>

        {/* CTA (final) */}
        <FadeIn>
          <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl mt-8">
            <CardContent className="text-center py-12">
              <h3 className="text-4xl font-bold mb-6 text-white">
                Ready to Explore Ergo Tech?
              </h3>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                Dive deeper into the docs or start building on the most advanced UTXO blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {ctas.map((cta) => (
                  <Button key={cta.label} asChild className={cta.outline ? "border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm" : "bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl"} variant={cta.outline ? "outline" : "default"}>
                    <Link href={cta.href} prefetch={false}>{cta.label}</Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

      </div>
    </div>
  )
} 

type Detail = { icon?: any; title: string; description: string }
type TechFeature = { icon: any; title: string; description: string; href?: string; details: Detail[] }
const resources: { title: string; href: string; icon: any }[] = [
      { title: "Ergo Docs", href: "/docs", icon: Book },
  { title: "Whitepaper", href: "https://ergoplatform.org/docs/whitepaper.pdf", icon: ExternalLink },
  { title: "GitHub", href: "https://github.com/ergoplatform", icon: ExternalLink },
  { title: "Dev Tutorials", href: "/docs/developers/tutorials", icon: ArrowRight },
] as const 