"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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

} from "lucide-react"
import Link from "next/link"
// Removed glossary imports
// import { GlossarySection } from "@/components/glossary/glossary-section"
// import { ERGO_GLOSSARY } from "@/lib/glossary-constants"
import { HexagonalGrid } from "@/components/ui-kit/signature-effects"
import { useState, useEffect, useMemo } from "react"
import Head from "next/head"

const techFeatures = [
  {
    icon: Layers,
    title: "eUTXO Model",
    description:
      "Extended UTXO model enabling parallel execution and composable DeFi. Reduces reentrancy classes inherent to account systems; Bitcoin-grade double-spend resistance.",
    color: "",
    href: "/technology/eutxo-model",
    details: [
      { icon: Layers, title: "Parallelism", description: "No global state: every contract is self-contained." },
      { icon: LinkIcon, title: "Composability", description: "Compose complex dApps from simple outputs." },
      { icon: Shield, title: "Double-spend resistance (UTXO-level)", description: "Inherits UTXO security model." },
    ],
  },
  {
    icon: Code,
    title: "ErgoScript",
    description:
      "A secure, declarative language for programmable money. First-class Sigma protocols and strict typing; supports formal methods and predictable execution.",
    color: "",
    href: "/technology/ergoscript",
    details: [
      { icon: ShieldCheck, title: "Auditability & formal methods", description: "Supports formal verification via declarative constraints." },
      { icon: Lock, title: "Native Privacy", description: "Sigma protocols for ZK-friendly proofs; ring-signature–style schemes available." },
      { icon: Code, title: "Declarative constraints, no shared global state", description: "Minimizes typical traps (reentrancy, hidden side-effects)." },
    ],
  },
  {
    icon: Cpu,
    title: "Autolykos PoW",
    description:
      "Memory-hard PoW aimed at broad participation and sustainable security. Reduces specialized-hardware advantage and keeps the solo path viable.",
    color: "",
    href: "/technology/secure-pow",
    details: [
      { icon: Zap, title: "Memory-bound, moderates hardware arms race", description: "Reduces advantage of specialized equipment." },
      { icon: Users, title: "Lower reliance on pools; keeps solo mining feasible", description: "Encourages solo mining participation." },
      { icon: Shield, title: "ASIC-resistant (not ASIC-proof)", description: "Maintains broad accessibility." },
    ],
  },
  {
    icon: Database,
    title: "Storage Rent",
    description:
      "Boxes unspent for ~4 years may pay storage rent (if value < min box value, miners can claim the difference). Encourages state cleanup and provides long-term miner incentives.",
    color: "",
    href: "/technology/storage-rent",
    details: [
      { icon: RefreshCw, title: "State cleanup incentives (slows growth)", description: "Encourages UTXO recycling and cleanup." },
      { icon: CircleDollarSign, title: "Long-term miner incentives", description: "Provides revenue stream beyond block rewards." },
      { icon: Monitor, title: "Lightweight", description: "Runs on modest hardware." },
    ],
  },
  {
    icon: Lock,
    title: "Sigma Protocols",
    description:
      "Native Sigma protocols (threshold/multisig, ZK proofs) enable privacy and advanced cryptography without external gimmicks.",
    color: "",
    href: "/technology/privacy-features",
    details: [
      { icon: Eye, title: "Privacy Built-In", description: "Mixers, stealth payments, confidential dApps." },
      { icon: ShieldCheck, title: "Threshold Security", description: "Multisig and secret voting." },
      { icon: Sparkles, title: "Easy ZKPs", description: "Add privacy to any dApp in a few lines." },
    ],
  },
  {
    icon: InfinityIcon,
    title: "NIPoPoWs",
    description:
      "Succinct proofs of chain work for trust-minimized light clients and, where applicable, cross-chain protocols (no trusted relays).",
    color: "",
    href: "/technology/light-clients",
    details: [
      { icon: Smartphone, title: "Light Clients", description: "Mobile sync in seconds to minutes." },
      { icon: LinkIcon, title: "Cross-chain (where applicable)", description: "For compatible chains; depends on bridge design." },
      { icon: ShieldCheck, title: "Client-verifiable", description: "Verifiable by light clients." },
    ],
  },
  {
    icon: Rocket,
    title: "Subblocks (Research/In development)",
    description:
      "On-chain throughput experiments: faster perceived confirmations without trusted sequencers; finality follows base consensus.",
    color: "",
    details: [
      { icon: Timer, title: "Fast Confirmations", description: "Faster perceived settlement." },
      { icon: Lock, title: "Experimental Scaling", description: "Research into on-chain throughput." },
      { icon: Globe, title: "Base Consensus", description: "Finality through main blockchain." },
    ],
  },
  {
    icon: Box,
    title: "Native Tokens & NFTs",
    description:
      "Issue tokens/NFTs at L1 without contracts or wrapping. Fully programmable and composable.",
    color: "",
    details: [
      { icon: Coins, title: "Token Creation", description: "Issue tokens, stablecoins, or NFTs in 1 tx." },
      { icon: Layers, title: "Composable", description: "Tokens & NFTs interact natively with dApps." },
      { icon: Zap, title: "Native at L1 (no wrapping)", description: "Native tokens, not fakes or wrapped." },
    ],
  },
  {
    icon: Eye,
    title: "Oracle Pools",
    description:
      "Protocol-native oracle design with minimized trust and composability for DeFi and dApps.",
    color: "",
    details: [
      { icon: BarChart3, title: "Reliable Data", description: "Incentive-aligned aggregation (no central operator)." },
      { icon: Layers, title: "Composability", description: "Oracles can power any contract." },
      { icon: ShieldCheck, title: "Minimized Trust", description: "No central operator; minimizes single points of failure." },
    ],
  },
  {
    icon: Settings,
    title: "Velvet Forks",
    description:
      "Optional, backward-compatible extensions (velvet). New features can coexist with non-upgraded nodes; security depends on the specific proposal.",
    color: "",
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
    href: "/Docs",
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
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  // Prevent scroll when switching tabs
  const handleTabChange = (value: string) => {
    const scrollPosition = window.scrollY
    setActiveTab(value)
    // Restore scroll position after state update
    setTimeout(() => {
      window.scrollTo(0, scrollPosition)
    }, 0)
  }

  const tabMeta: Record<string, { title: string; description: string }> = {
    usecases: {
      title: "Ergo Technology – Use Cases | ergoblockchain.org",
      description: "Decentralize Everything. Build What Matters.",
    },
    architecture: {
      title: "Ergo Technology – Architecture | ergoblockchain.org",
      description: "Layered design delivering decentralization, composability, and privacy.",
    },
    // resources meta kept for backward-compatibility, not used as a tab anymore
    resources: {
      title: "Ergo Technology – Resources | ergoblockchain.org",
      description: "Docs, repos and references to build on Ergo.",
    },
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
      q: "How is eUTXO on Ergo different from the account model?",
      tag: "eUTXO",
      a: (
        <>
          eUTXO splits the blockchain state into independent “boxes” (outputs), enabling <b>parallel smart
          contracts</b> without a global state and reducing reentrancy risks. DApps become <i>composable</i>: complex
          logic can be built from simple outputs. Learn more — {""}
          <a href="/technology/eutxo-model" className="underline hover:opacity-80">eUTXO Model</a>.
        </>
      ),
    },
    {
      id: "what-is-ergoscript",
      q: "What is ErgoScript and why is it secure?",
      tag: "ErgoScript",
      a: (
        <>
          It’s Ergo’s contract language for “money with logic”: formally verifiable code, strict typing, and built-in
          cryptographic primitives. Contracts are <b>auditable and predictable</b>—design avoids global mutable state and typical reentrancy patterns. Start here: {""}
          <a href="/technology/ergoscript" className="underline hover:opacity-80">ErgoScript</a>.
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
          <a href="/technology/secure-pow" className="underline hover:opacity-80">Autolykos PoW</a>.
        </>
      ),
    },
    {
      id: "storage-rent",
      q: "What is Storage Rent and why does it matter?",
      tag: "Storage",
      a: (
        <>
          Unspent coins after ~4 years start paying “rent” — this is <b>state recycling</b>: prevents unlimited
          blockchain growth and ensures miners earn revenue even after emissions end. Learn more: {""}
          <a href="/technology/storage-rent" className="underline hover:opacity-80">Storage Rent</a>.
        </>
      ),
    },
    {
      id: "sigma-protocols",
      q: "What privacy and multisig features are built in?",
      tag: "Privacy",
      a: (
        <>
          Sigma protocols provide native zero-knowledge proofs, ring signatures, <b>multisig/threshold</b> schemes, and
          private payments without external hacks. This simplifies building confidential dApps. See: {""}
          <a href="/technology/privacy-features" className="underline hover:opacity-80">Privacy Features</a>.
        </>
      ),
    },
    {
      id: "nipopows",
      q: "What do NIPoPoWs enable?",
      tag: "Light clients",
      a: (
        <>
          “Tiny” blockchain proofs that allow <b>light clients</b>, instant mobile sync, and trustless cross-chain
          bridges without full nodes. More: {""}
          <a href="/technology/light-clients" className="underline hover:opacity-80">NIPoPoWs</a>.
        </>
      ),
    },
    {
      id: "oracle-pools",
      q: "How are Oracle Pools different from traditional oracles?",
      tag: "Oracles",
      a: (
        <>
          Protocol-native, <b>composable</b> data feeds without a central operator — no single point of bribery or
          failure. Can be plugged into any contract. More: {""}
          <a href="/technology" className="underline hover:opacity-80">Oracle Pools</a>.
        </>
      ),
    },
    {
      id: "subblocks",
      q: "What are Subblocks and why use them?",
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
      q: "Can I issue tokens and NFTs without a smart contract?",
      tag: "Tokens & NFTs",
      a: (
        <>
          Yes — issuance is native at the protocol layer, in a single transaction. <b>True native assets</b> are
          instantly composable with dApps. More: {""}
          <a href="/technology" className="underline hover:opacity-80">Native Tokens</a>.
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
        <Head>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        </Head>
        <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between gap-3">
              <CardTitle id="faq-heading" className="text-2xl font-bold text-white">FAQ — Ergo Technology</CardTitle>
              <Badge variant="outline" className="bg-neutral-900/60 border-neutral-700 text-neutral-300">{faqs.length} questions</Badge>
            </div>
            <p className="text-neutral-400 mt-2">Click any question below to expand the answer</p>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <motion.div 
                  key={item.id} 
                  id={item.id} 
                  initial={{ opacity: 0, y: 8 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.02 * i }}
                  className="group"
                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem 
                      value={item.id} 
                      className="border border-neutral-800 bg-neutral-900/40 rounded-xl hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-200"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group-hover:text-white transition-colors">
                        <div className="flex items-center gap-3 w-full">
                          {item.tag && (
                            <Badge className="bg-brand-primary-500/10 text-brand-primary-400 border border-brand-primary-500/30 text-xs font-medium">{item.tag}</Badge>
                          )}
                          <span className="text-neutral-200 font-medium">{item.q}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-0">
                        <div className="text-neutral-300 leading-relaxed [&>a]:text-brand-primary-400 [&>a]:underline [&>a]:hover:text-brand-primary-300 [&>b]:text-white [&>i]:text-neutral-200">
                          {item.a}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-800">
              <div className="flex justify-end">
                <a href="/Docs">
                  <Button 
                    variant="outline" 
                    className="bg-neutral-900/60 border-neutral-700 text-neutral-200 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 transition-all duration-200"
                  >
                    Go to Docs <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Head>
        <title>{tabMeta[activeTab]?.title}</title>
        <meta name="description" content={tabMeta[activeTab]?.description} />
        <meta property="og:title" content={tabMeta[activeTab]?.title} />
        <meta property="og:description" content={tabMeta[activeTab]?.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ergoblockchain.org/technology" />
        <link rel="canonical" href="https://ergoblockchain.org/technology" />
      </Head>

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
                  Innovations. Security. Real Decentralization.
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
                  whileHover={{ scale: 1.03, rotateY: 3 }}
                  className="group"
                >
                  <Link href={feature.href || "#"}>
                    <Card
                      className={`bg-neutral-900/50 border-neutral-700 backdrop-blur-sm hover:border-brand-primary-500/50 transition-all duration-300 h-full cursor-pointer rounded-xl`}
                    >
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                          <feature.icon className="w-8 h-8 text-brand-primary-400" />
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
                          {feature.details.map((d: any, i: number) => (
                            <motion.div
                              key={d.title}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.35 + i * 0.06 }}
                              className="flex items-start gap-3 p-2 bg-neutral-900/60 rounded-lg hover:bg-orange-500/10 transition-all duration-200"
                            >
                              {d.icon ? (
                                <d.icon className="w-4 h-4 text-brand-primary-400 mt-0.5" />
                              ) : (
                                <span className="text-lg">•</span>
                              )}
                              <div>
                                <h4 className="font-semibold text-white mb-0">{d.title}</h4>
                                <p className="text-neutral-400 text-xs">{d.description}</p>
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
          <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-20">
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
                            <Card className="bg-neutral-900/50 border-neutral-700 rounded-xl h-full hover:border-brand-primary-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-400 transition-colors motion-reduce:transform-none motion-reduce:transition-none">
                              <CardHeader className="pb-3">
                                <div className="flex items-center gap-3">
                                  <col.icon className="w-5 h-5 text-brand-primary-400" />
                                  <CardTitle className="text-xl text-white">{col.title}</CardTitle>
                                </div>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <ul className="space-y-2">
                                  {col.items.map((t) => (
                                    <li key={t} className="flex items-start gap-3 p-3 bg-neutral-900/60 rounded-lg hover:bg-orange-500/10 transition-colors">
                                      <ArrowRight className="w-4 h-4 text-brand-primary-400 mt-0.5" />
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
                          <CardTitle className="text-brand-primary-400 text-xl">Layer 1</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 text-neutral-300">
                            {layer1.map(({ label, icon: Icon }) => (
                              <li key={label} className="flex items-start gap-3">
                                <Icon className="w-4 h-4 text-brand-primary-400 mt-0.5" />
                                <span>{label}</span>
                              </li>
                            ))}
                      </ul>
                        </CardContent>
                      </Card>

                      {/* Layer 2 / Extensions */}
                      <Card className="bg-neutral-900/60 border-neutral-700 rounded-xl">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-brand-primary-400 text-xl">Layer 2 / Extensions</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 text-neutral-300">
                            {layer2.map(({ label, icon: Icon }) => (
                              <li key={label} className="flex items-start gap-3">
                                <Icon className="w-4 h-4 text-brand-primary-400 mt-0.5" />
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
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Developer Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                      {resources.map((res) => (
                        <Card key={res.title} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full flex flex-col">
                          <CardHeader className="pb-4">
                            <CardTitle className="text-white flex items-center gap-3 text-lg">
                              <res.icon className="w-5 h-5 text-brand-primary-400" />
                        {res.title}
                      </CardTitle>
                    </CardHeader>
                          <CardContent className="flex-1 flex flex-col justify-end pt-0">
                            <Link href={res.href} target="_blank" className="w-full">
                        <Button
                          variant="outline"
                                className="w-full justify-between hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 text-neutral-200 border-neutral-700 transition-all duration-200 py-3"
                        >
                          {res.title}
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
                  </CardContent>
                </Card>
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
                  <Link href={cta.href} key={cta.label}>
                    <Button
                      className={cta.outline ? "border-neutral-700 text-neutral-300 hover:bg-neutral-900/60 px-8 py-3 rounded-xl backdrop-blur-sm" : "bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl"}
                      variant={cta.outline ? "outline" : "default"}
                    >
                      {cta.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

      </div>
    </div>
  )
} 

// Resources list for the Resources tab
const resources = [
  { title: "Ergo Docs", href: "/Docs", icon: Book },
  { title: "Whitepaper", href: "https://ergoplatform.org/docs/whitepaper.pdf", icon: ExternalLink },
  { title: "GitHub", href: "https://github.com/ergoplatform", icon: ExternalLink },
  { title: "Dev Tutorials", href: "/Docs/developers/tutorials", icon: ArrowRight },
] as const 