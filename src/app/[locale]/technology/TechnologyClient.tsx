"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps */

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
  ArrowRightLeft,
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
import { Link } from "@/i18n/navigation"
import { HexagonalGrid } from "@/components/ui-kit/signature-effects"
import { useState, useEffect, useMemo } from "react"
import Head from "next/head"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import Script from "next/script"
import { useTranslations } from "next-intl"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { technologyTopics, categoryLabels, categoryColors, type TechnologyTopic } from "@/data/technology-topics"

export default function TechnologyPage() {
  const t = useTranslations('technology')
  
  // Use centralized data from technology-topics.ts
  // Map to format expected by the UI, with translations as fallback
  const techFeatures = technologyTopics.map((topic) => ({
    icon: topic.icon,
    title: topic.title,
    description: topic.description,
    shortDescription: topic.shortDescription,
    color: "",
    href: `/technology/${topic.slug}`,
    category: topic.category,
    status: topic.status,
    details: topic.details.map((d) => ({
      icon: d.icon,
      title: d.title,
      description: d.description,
    })),
    // Relations for internal linking
    relatedTopics: topic.relatedTopics,
    relatedPatterns: topic.relatedPatterns,
    relatedPlaybooks: topic.relatedPlaybooks,
  }))

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
          <Link href="/technology/oracle-pools" className="underline hover:opacity-80">Oracle Pools</Link>.
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
          <Link href="/technology/native-tokens" className="underline hover:opacity-80">Native Tokens</Link>.
        </>
      ),
    },
  ]



  function FAQSection() {

    // helpers
    function nodeToPlainText(node: React.ReactNode): string {
      if (node === null || node === undefined || node === false) return ""
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
      if (!hash) return undefined
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        el.classList.add("ring-1", "ring-orange-500/60")
        const t = setTimeout(() => el.classList.remove("ring-1", "ring-orange-500/60"), 1200)
        return () => clearTimeout(t)
      }
      return undefined
    }, [])

    return (
      <section aria-labelledby="faq-heading" className="max-w-5xl mx-auto">
        <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <h2 id="faq-heading" className="text-4xl font-bold text-center mb-4 md:mb-6 text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={faq.id} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-xl">
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
          </section>
        )
      }

  return (
  <BackgroundWrapper>
      <div className="min-h-screen text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
        <Breadcrumbs items={[{ name: "Technology", href: "#" }]} variant="hidden" />
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-center"
              >
                <Link href="/technology/map">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-xl text-lg">
                    <Globe className="w-5 h-5 mr-2" />
                    Explore Technology Map
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/compare">
                  <Button
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white/10 hover:border-orange-400/60 px-8 py-4 rounded-xl text-lg"
                  >
                    <BarChart3 className="w-5 h-5 mr-2" />
                    See how Ergo compares
                  </Button>
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Main Tech Features Grid - Original Design */}
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
                    <Card className="bg-black/80 border-white/10 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 h-full cursor-pointer rounded-xl flex flex-col">
                      <CardHeader className="flex-shrink-0 pb-3">
                        {/* Compact header */}
                        <div className="h-[100px] flex flex-col">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-6 h-6 text-orange-400" aria-hidden="true" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <CardTitle className="text-lg font-bold text-white text-left line-clamp-2 leading-tight">
                                  {feature.title}
                                </CardTitle>
                                <div className="flex items-center gap-1 flex-shrink-0">
                                  {feature.status === "research" && (
                                    <Badge className="bg-orange-500/10 text-orange-400 border border-orange-500/30 text-[9px] font-medium px-1.5 py-0">
                                      Research
                                    </Badge>
                                  )}
                                  <Badge className={`text-[9px] font-medium border px-1.5 py-0 ${categoryColors[feature.category]}`}>
                                    {categoryLabels[feature.category]}
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-neutral-400 text-sm line-clamp-2 text-left mt-1">
                                {feature.shortDescription || feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 pt-0">
                        <div className="space-y-1.5">
                          {feature.details.slice(0, 3).map((d, i) => (
                            <motion.div
                              key={d.title}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.35 + i * 0.06 }}
                              className="flex items-start gap-2 p-2 bg-neutral-900/60 rounded-lg hover:bg-orange-500/10 transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none"
                            >
                              {d.icon ? (
                                <d.icon className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                              ) : (
                                <span className="text-sm flex-shrink-0">•</span>
                              )}
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-white text-sm leading-tight">{d.title}</h4>
                                <p className="text-neutral-400 text-xs line-clamp-1">{d.description}</p>
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
                className="flex-1 rounded-md border border-white/20 bg-black px-4 py-2 text-white hover:bg-black/90 hover:border-primary/40 data-[state=active]:border-primary/60 data-[state=active]:text-primary data-[state=active]:bg-primary/20"
              >
                Use Cases
              </TabsTrigger>
              <TabsTrigger
                value="architecture"
                className="flex-1 rounded-md border border-white/20 bg-black px-4 py-2 text-white hover:bg-black/90 hover:border-primary/40 data-[state=active]:border-primary/60 data-[state=active]:text-primary data-[state=active]:bg-primary/20"
              >
                Architecture
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="flex-1 rounded-md border border-white/20 bg-black px-4 py-2 text-white hover:bg-black/90 hover:border-primary/40 data-[state=active]:border-primary/60 data-[state=active]:text-primary data-[state=active]:bg-primary/20"
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
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
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
                            <Card className="bg-black/80 border-white/10 rounded-xl h-full hover:border-orange-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 transition-colors motion-reduce:transform-none motion-reduce:transition-none">
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
                <Card className="bg-black/80 border-white/10 backdrop-blur-sm rounded-xl h-full">
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
                  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } }
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
                                <Card className="bg-black/80 border-white/10 rounded-xl h-full hover:border-orange-500/50 focus-visible:ring-2 focus-visible:ring-orange-400 transition-colors motion-reduce:transform-none motion-reduce:transition-none">
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
          <div className="max-w-6xl mx-auto mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
              What's <span className="text-orange-400">Next?</span>
            </h2>
            <p className="text-xl text-center text-neutral-300 mb-12">
              Deep dive into technology or explore real-world applications
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/docs"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Book className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Documentation</h3>
                    <p className="text-orange-400 text-sm">Read the Docs</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Deep dive into Ergo's technology, protocols, and development guides
                </p>
              </Link>
              
              <Link 
                href="/ecosystem"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Ecosystem</h3>
                    <p className="text-orange-400 text-sm">Explore Applications</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Discover DeFi protocols, wallets, and dApps built on Ergo
                </p>
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Email Capture Form */}
        <FinalCTASimple 
          title="Deep Dive into Ergo Technology"
          description="Get the latest technical insights, protocol updates, and development guides delivered to your inbox"
        />

        </div>
      </div>
    </BackgroundWrapper>
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