"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
  Search,

  Check,
  Hash,
} from "lucide-react"
import Link from "next/link"
// Removed glossary imports
// import { GlossarySection } from "@/components/glossary/glossary-section"
// import { ERGO_GLOSSARY } from "@/lib/glossary-constants"
import { HexagonalGrid } from "@/components/ui-kit/signature-effects"
import { useState, useEffect, useMemo } from "react"
import type { ReactNode } from "react"
import Head from "next/head"

const techFeatures = [
  {
    icon: Layers,
    title: "eUTXO Model",
    description:
      "Next-generation Unspent Transaction Output model. Enables parallel smart contracts, eliminates double-spending, and supports composable DeFi at the protocol layer.",
    color: "",
    href: "/technology/eutxo-model",
    details: [
      { icon: Layers, title: "Parallelism", description: "No global state: every contract is self-contained." },
      { icon: LinkIcon, title: "Composability", description: "Compose complex dApps from simple outputs." },
      { icon: Shield, title: "No Double-Spend", description: "Bitcoin security with DeFi power." },
    ],
  },
  {
    icon: Code,
    title: "ErgoScript",
    description:
      "A secure, flexible language for programmable money. Privacy-by-design, mathematical certainty, and formal verification for all contracts.",
    color: "",
    href: "/technology/ergoscript",
    details: [
      { icon: ShieldCheck, title: "Mathematical Security", description: "All logic is provable and auditable." },
      { icon: Lock, title: "Native Privacy", description: "Zero-knowledge proofs, ring signatures built-in." },
      { icon: Code, title: "Clean Syntax", description: "No surprise bugs or reentrancy." },
    ],
  },
  {
    icon: Cpu,
    title: "Autolykos PoW",
    description:
      "ASIC-resistant, memory-hard mining. Designed for decentralization and sustainable security. Low energy, poolless by design.",
    color: "",
    href: "/technology/secure-pow",
    details: [
      { icon: Zap, title: "Energy-Efficient", description: "Low-power mining, eco-friendly by default." },
      { icon: Users, title: "Poolless Mining", description: "Solo miners are always rewarded." },
      { icon: Shield, title: "ASIC-Resistant", description: "Keeps mining fair and accessible." },
    ],
  },
  {
    icon: Database,
    title: "Storage Rent",
    description:
      "Unique blockchain rent system: unused coins pay rent after 4 years. Keeps chain clean and incentivizes miners—forever.",
    color: "",
    href: "/technology/storage-rent",
    details: [
      { icon: RefreshCw, title: "State Recycling", description: "Old boxes recycled, state never bloats." },
      { icon: CircleDollarSign, title: "Passive Revenue", description: "Miner rewards continue after emissions end." },
      { icon: Monitor, title: "Lightweight", description: "Runs on modest hardware." },
    ],
  },
  {
    icon: Lock,
    title: "Sigma Protocols",
    description:
      "Native zero-knowledge, ring signatures, multi-sig. Ergo contracts can include privacy and advanced cryptography natively.",
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
      "Tiny proofs of the full chain: build trustless light wallets, fast syncing, cross-chain bridges—without trusted third parties.",
    color: "",
    href: "/technology/light-clients",
    details: [
      { icon: Smartphone, title: "Light Clients", description: "Mobile sync in seconds, not hours." },
      { icon: LinkIcon, title: "Cross-Chain Bridges", description: "Move assets between blockchains natively." },
      { icon: ShieldCheck, title: "No Trusted Parties", description: "Verifiable everywhere." },
    ],
  },
  {
    icon: Rocket,
    title: "Subblocks",
    description:
      "On-chain scaling: blocks split into fast sub-blocks for instant settlement. Instant finality, no trusted sequencers.",
    color: "",
    details: [
      { icon: Timer, title: "1-Second Confirmations", description: "Pay and go—DeFi at speed of light." },
      { icon: Lock, title: "Secure Scaling", description: "No L2 hacks, all on mainnet." },
      { icon: Globe, title: "Decentralized", description: "No validators, just blockchain." },
    ],
  },
  {
    icon: Box,
    title: "Native Tokens & NFTs",
    description:
      "Any user can issue tokens or NFTs at the base layer. No smart contract required. Fully programmable and composable.",
    color: "",
    details: [
      { icon: Coins, title: "Token Creation", description: "Issue tokens, stablecoins, or NFTs in 1 tx." },
      { icon: Layers, title: "Composable", description: "Tokens & NFTs interact natively with dApps." },
      { icon: Zap, title: "Zero Gas Wrappers", description: "Native tokens, not fakes or wrapped." },
    ],
  },
  {
    icon: Eye,
    title: "Oracle Pools",
    description:
      "First protocol-native oracle system. Decentralized, composable data feeds for DeFi and dApps—no single point of failure.",
    color: "",
    details: [
      { icon: BarChart3, title: "Reliable Data", description: "No central operator, no bribes." },
      { icon: Layers, title: "Composability", description: "Oracles can power any contract." },
      { icon: ShieldCheck, title: "Secure by Design", description: "No rug pulls, no admin keys." },
    ],
  },
  {
    icon: Settings,
    title: "Velvet Forks",
    description:
      "Upgrade the protocol with no chain splits. New features work even if not all nodes upgrade—secure, evolutionary growth.",
    color: "",
    details: [
      { icon: RefreshCw, title: "Backward Compatible", description: "No forced upgrades, no chain wars." },
      { icon: TrendingUp, title: "Future Proof", description: "Adopt innovations at your own pace." },
      { icon: Timer, title: "Zero Downtime", description: "Seamless, safe upgrades." },
    ],
  },
  {
    icon: CircleDollarSign,
    title: "Adaptive Emission & Governance",
    description:
      "Block rewards and network economics can be tuned on-chain via community consensus and economic signals.",
    color: "",
    details: [
      { icon: CircleDollarSign, title: "Decentralized Funding", description: "Fund new features or dApps." },
      { icon: TrendingUp, title: "Economic Flexibility", description: "Adapt to changing needs." },
      { icon: Users, title: "Governance by Users", description: "Protocol upgrades are democratic." },
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
  const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = tabMeta[activeTab]?.title
    }
  }, [activeTab])

  const tabMeta: Record<string, { title: string; description: string }> = {
    usecases: {
      title: "Ergo Technology – Use Cases | ergoblockchain.org",
      description: "Innovations. Security. Real Decentralization.",
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
  const faqs: Array<{ id: string; q: string; a: ReactNode; tag?: string }> = [
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
          cryptographic primitives. Contracts are <b>auditable and predictable</b>, with no hidden side effects or
          reentrancy bugs. Start here: {""}
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
          <b>Layer-1 scaling</b> with faster finality and no L2 risks.
        </>
      ),
    },
    {
      id: "tokens-nfts",
      q: "Can I issue tokens and NFTs without a smart contract?",
      tag: "Tokens & NFT",
      a: (
        <>
          Yes — issuance is native at the protocol layer, in a single transaction. <b>True native assets</b> are
          instantly composable with dApps. More: {""}
          <a href="/technology" className="underline hover:opacity-80">Native Tokens</a>.
        </>
      ),
    },
    {
      id: "governance",
      q: "What is Adaptive Emission & Governance?",
      tag: "Governance",
      a: (
        <>
          Block rewards and network economics can <b>adapt</b> based on community consensus, ensuring sustainable
          growth, ecosystem funding, and long-term viability.
        </>
      ),
    },
  ]

  function useCopy() {
    const [copied, setCopied] = useState<string | null>(null)
    useEffect(() => {
      if (!copied) return
      const t = setTimeout(() => setCopied(null), 1200)
      return () => clearTimeout(t)
    }, [copied])
    return {
      copied,
      copy: async (text: string, id: string) => {
        await navigator.clipboard.writeText(text)
        setCopied(id)
      },
    }
  }

  function FAQSection() {
    const [query, setQuery] = useState("")
    const { copy, copied } = useCopy()

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

    const filtered = useMemo(() => {
      const q = query.trim().toLowerCase()
      if (!q) return faqs
      return faqs.filter((f) => {
        const inQ = f.q.toLowerCase().includes(q)
        const inA =
          typeof f.a === "string"
            ? f.a.toLowerCase().includes(q)
            : nodeToPlainText(f.a).toLowerCase().includes(q)
        return inQ || inA || (f.tag?.toLowerCase().includes(q) ?? false)
      })
    }, [query])

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
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between gap-3">
              <CardTitle id="faq-heading" className="text-white">FAQ — Ergo Technology</CardTitle>
              <Badge variant="outline" className="border-neutral-700 text-neutral-300">{faqs.length} questions</Badge>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="relative w-full">
                <label htmlFor="faq-search" className="sr-only">Search</label>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" aria-hidden />
                <Input
                  id="faq-search"
                  placeholder="Search the FAQ…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-9 bg-neutral-900/70 border-neutral-700 text-neutral-200 placeholder:text-neutral-500"
                  aria-label="Search FAQ"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {filtered.length === 0 ? (
              <div className="text-neutral-400 py-8 text-center">No matches found.</div>
            ) : (
              <Accordion type="single" collapsible className="w-full">
                {filtered.map((item, i) => (
                  <motion.div key={item.id} id={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.02 * i }} className="rounded-lg border border-neutral-800/80 bg-neutral-900/40 mb-3">
                    <AccordionItem value={item.id} className="border-none">
                      <div className="flex items-center justify-between pr-2">
                        <AccordionTrigger className="px-4 py-3 text-left hover:no-underline">
                          <div className="flex items-center gap-2">
                            {item.tag && (
                              <Badge className="bg-orange-500/10 text-orange-400 border border-orange-500/30">{item.tag}</Badge>
                            )}
                            <span className="text-white">{item.q}</span>
                          </div>
                        </AccordionTrigger>
                        <div className="flex items-center gap-1">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            aria-label="Copy link to question"
                            className="h-8 w-8 text-neutral-400 hover:text-orange-400"
                            onClick={() => {
                              const url = `${window.location.origin}${window.location.pathname}#${item.id}`
                              window.history.replaceState(null, "", `#${item.id}`)
                              copy(url, item.id)
                            }}
                          >
                            {copied === item.id ? <Check className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
                          </Button>
                          <div aria-live="polite" className="sr-only">{copied ? "Link copied" : ""}</div>
                        </div>
                      </div>
                      <AccordionContent className="px-4 pb-4 pt-0 text-neutral-300 leading-relaxed">
                        <div className="[&>a]:underline [&>a]:hover:opacity-80">{item.a}</div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {Array.from(new Set(faqs.map((f) => f.tag).filter(Boolean) as string[])).map((t) => (
                <button
                  key={t}
                  onClick={() => setQuery(t!)}
                  className="group"
                  aria-label={`Filter by ${t}`}
                >
                  <Badge variant="outline" className="border-neutral-700 text-neutral-300 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-colors">
                    <Hash className="h-3 w-3 mr-1" /> {t}
                  </Badge>
                </button>
              ))}
              <a href="/Docs" className="ml-auto">
                <Button variant="outline" className="border-neutral-700 text-neutral-200 hover:bg-orange-500/10">
                  Go to Docs <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </a>
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
                initial={prefersReduced ? undefined : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={prefersReduced ? undefined : { duration: 0.8 }}
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
                <div key={feature.title} className="group" style={{ perspective: 1000 }}>
                  <motion.div
                    initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={prefersReduced ? undefined : { delay: 0.15 + idx * 0.05 }}
                    whileHover={prefersReduced ? undefined : { scale: 1.03, rotateY: 3 }}
                    style={{ transformStyle: "preserve-3d" }}
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
                            {feature.title}
                          </CardTitle>
                          <p className="text-neutral-300 leading-relaxed text-base min-h-[72px]">{feature.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 pt-4">
                            {feature.details.map((d: any, i: number) => (
                              <motion.div
                                key={d.title}
                                initial={prefersReduced ? undefined : { opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={prefersReduced ? undefined : { delay: 0.35 + i * 0.06 }}
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
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Tabs Section */}
        <FadeIn>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-20">
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

            {/* Use Cases */}
            <TabsContent value="usecases" className="mt-8">
              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                <CardHeader>
                  <CardTitle className="text-white">
                    What Can You Build?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Non-custodial DeFi protocols",
                      "Custom multi-signature wallets",
                      "Stablecoins and native tokens",
                      "Decentralized mixers and privacy tools",
                      "DAOs & governance systems",
                      "Decentralized oracle networks",
                      "NFT marketplaces & composable dApps",
                      "Scalable micropayments and instant settlement",
                      "Cross-chain bridges & light wallets",
                    ].map((useCase, index) => (
                      <motion.div
                        key={useCase}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-center gap-3 p-3 bg-neutral-900/60 rounded-lg hover:bg-orange-500/10 transition-colors"
                        whileHover={{ x: 10 }}
                      >
                        <ArrowRight className="w-4 h-4 text-brand-primary-400" />
                        <span>{useCase}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Architecture */}
            <TabsContent value="architecture" className="mt-8">
              <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
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

                  {/* Removed bottom caption; moved to CardHeader */}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources */}
            <TabsContent value="resources" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((res) => (
                  <Card key={res.title} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <res.icon className="w-5 h-5 text-brand-primary-400" />
                        {res.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Link href={res.href} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full justify-between hover:bg-orange-500/10 text-neutral-200 border-neutral-700">
                          {res.title}
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
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
  { title: "Protocol Docs", href: "https://docs.ergoplatform.com/", icon: ExternalLink },
  { title: "GitHub", href: "https://github.com/ergoplatform", icon: ExternalLink },
  { title: "Dev Tutorials", href: "/Docs/developers/tutorials", icon: ArrowRight },
] as const 