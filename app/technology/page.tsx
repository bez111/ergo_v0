"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/ui/section-heading"
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
} from "lucide-react"
import Link from "next/link"
import { GlossarySection } from "@/components/glossary/glossary-section"
import { ERGO_GLOSSARY } from "@/lib/glossary-constants"

const techFeatures = [
  {
    icon: Layers,
    title: "eUTXO Model",
    description:
      "Next-generation Unspent Transaction Output model. Enables parallel smart contracts, eliminates double-spending, and supports composable DeFi at the protocol layer.",
    color: "from-orange-400/20 to-orange-400/5",
    href: "/technology/eutxo-model",
    details: [
      { icon: "💡", title: "Parallelism", description: "No global state: every contract is self-contained." },
      { icon: "🔗", title: "Composability", description: "Compose complex dApps from simple outputs." },
      { icon: "🦾", title: "No Double-Spend", description: "Bitcoin security with DeFi power." },
    ],
  },
  {
    icon: Code,
    title: "ErgoScript",
    description:
      "A secure, flexible language for programmable money. Privacy-by-design, mathematical certainty, and formal verification for all contracts.",
    color: "from-cyan-400/20 to-cyan-400/5",
    href: "/technology/ergoscript",
    details: [
      { icon: "🔬", title: "Mathematical Security", description: "All logic is provable and auditable." },
      { icon: "🔒", title: "Native Privacy", description: "Zero-knowledge proofs, ring signatures built-in." },
      { icon: "📝", title: "Clean Syntax", description: "No surprise bugs or reentrancy." },
    ],
  },
  {
    icon: Cpu,
    title: "Autolykos PoW",
    description:
      "ASIC-resistant, memory-hard mining. Designed for decentralization and sustainable security. Low energy, poolless by design.",
    color: "from-purple-500/20 to-purple-500/5",
    href: "/technology/secure-pow",
    details: [
      { icon: "⚡", title: "Energy-Efficient", description: "Low-power mining, eco-friendly by default." },
      { icon: "🧩", title: "Poolless Mining", description: "Solo miners are always rewarded." },
      { icon: "🚫", title: "ASIC-Resistant", description: "Keeps mining fair and accessible." },
    ],
  },
  {
    icon: Database,
    title: "Storage Rent",
    description:
      "Unique blockchain rent system: unused coins pay rent after 4 years. Keeps chain clean and incentivizes miners—forever.",
    color: "from-pink-400/20 to-pink-400/5",
    href: "/technology/storage-rent",
    details: [
      { icon: "♻️", title: "State Recycling", description: "Old boxes recycled, state never bloats." },
      { icon: "⏳", title: "Passive Revenue", description: "Miner rewards continue after emissions end." },
      { icon: "📦", title: "Lightweight", description: "Runs on modest hardware." },
    ],
  },
  {
    icon: Lock,
    title: "Sigma Protocols",
    description:
      "Native zero-knowledge, ring signatures, multi-sig. Ergo contracts can include privacy and advanced cryptography natively.",
    color: "from-green-400/20 to-green-400/5",
    href: "/technology/privacy-features",
    details: [
      { icon: "🕵️‍♂️", title: "Privacy Built-In", description: "Mixers, stealth payments, confidential dApps." },
      { icon: "🔗", title: "Threshold Security", description: "Multisig and secret voting." },
      { icon: "🪄", title: "Easy ZKPs", description: "Add privacy to any dApp in a few lines." },
    ],
  },
  {
    icon: InfinityIcon,
    title: "NIPoPoWs",
    description:
      "Tiny proofs of the full chain: build trustless light wallets, fast syncing, cross-chain bridges—without trusted third parties.",
    color: "from-teal-400/20 to-teal-400/5",
    href: "/technology/light-clients",
    details: [
      { icon: "📱", title: "Light Clients", description: "Mobile sync in seconds, not hours." },
      { icon: "🔗", title: "Cross-Chain Bridges", description: "Move assets between blockchains natively." },
      { icon: "⚖️", title: "No Trusted Parties", description: "Verifiable everywhere." },
    ],
  },
  {
    icon: Rocket,
    title: "Subblocks",
    description:
      "On-chain scaling: blocks split into fast sub-blocks for instant settlement. Instant finality, no trusted sequencers.",
    color: "from-fuchsia-400/20 to-fuchsia-400/5",
    details: [
      { icon: "⚡", title: "1-Second Confirmations", description: "Pay and go—DeFi at speed of light." },
      { icon: "🔒", title: "Secure Scaling", description: "No L2 hacks, all on mainnet." },
      { icon: "⛓️", title: "Decentralized", description: "No validators, just blockchain." },
    ],
  },
  {
    icon: Box,
    title: "Native Tokens & NFTs",
    description:
      "Any user can issue tokens or NFTs at the base layer. No smart contract required. Fully programmable and composable.",
    color: "from-yellow-400/20 to-yellow-400/5",
    details: [
      { icon: "🪙", title: "Token Creation", description: "Issue tokens, stablecoins, or NFTs in 1 tx." },
      { icon: "🧩", title: "Composable", description: "Tokens & NFTs interact natively with dApps." },
      { icon: "🎨", title: "Zero Gas Wrappers", description: "Native tokens, not fakes or wrapped." },
    ],
  },
  {
    icon: Eye,
    title: "Oracle Pools",
    description:
      "First protocol-native oracle system. Decentralized, composable data feeds for DeFi and dApps—no single point of failure.",
    color: "from-cyan-400/20 to-blue-400/5",
    details: [
      { icon: "📊", title: "Reliable Data", description: "No central operator, no bribes." },
      { icon: "🌐", title: "Composability", description: "Oracles can power any contract." },
      { icon: "🔒", title: "Secure by Design", description: "No rug pulls, no admin keys." },
    ],
  },
  {
    icon: Settings,
    title: "Velvet Forks",
    description:
      "Upgrade the protocol with no chain splits. New features work even if not all nodes upgrade—secure, evolutionary growth.",
    color: "from-indigo-400/20 to-indigo-400/5",
    details: [
      { icon: "🔄", title: "Backward Compatible", description: "No forced upgrades, no chain wars." },
      { icon: "🦾", title: "Future Proof", description: "Adopt innovations at your own pace." },
      { icon: "⚙️", title: "Zero Downtime", description: "Seamless, safe upgrades." },
    ],
  },
  {
    icon: CircleDollarSign,
    title: "Adaptive Emission & Governance",
    description:
      "Block rewards and network economics can be tuned on-chain via community consensus and economic signals.",
    color: "from-emerald-400/20 to-emerald-400/5",
    details: [
      { icon: "👥", title: "Decentralized Funding", description: "Fund new features or dApps." },
      { icon: "📈", title: "Economic Flexibility", description: "Adapt to changing needs." },
      { icon: "🤝", title: "Governance by Users", description: "Protocol upgrades are democratic." },
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

const resources = [
  {
    title: "Whitepaper",
    href: "https://ergoplatform.org/docs/whitepaper.pdf",
    icon: ExternalLink,
  },
  {
    title: "Protocol Docs",
    href: "https://docs.ergoplatform.com/",
    icon: ExternalLink,
  },
  {
    title: "GitHub",
    href: "https://github.com/ergoplatform",
    icon: ExternalLink,
  },
  {
    title: "Dev Tutorials",
    href: "/build/tutorials",
    icon: ArrowRight,
  },
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-10 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90 z-0" />
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/tech-pattern.png')] bg-no-repeat bg-cover opacity-5 z-0" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/resistance-texture.png')] bg-no-repeat bg-cover opacity-5 z-0" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-red-900/10 z-0" />

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
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block text-center">
                  ERGO TECHNOLOGY
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Innovations. Security. Real Decentralization.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Main Tech Features Grid */}
        <FadeIn>
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      className={`bg-gradient-to-br ${feature.color} border-gray-700/50 backdrop-blur-xl hover:border-orange-500/40 transition-all duration-300 h-full cursor-pointer group-hover:shadow-lg group-hover:shadow-orange-500/10`}
                    >
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                          <feature.icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-cyan-500 transition-all">
                          {feature.title}
                        </CardTitle>
                        <p className="text-gray-300 leading-relaxed text-base min-h-[72px]">{feature.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 pt-4">
                          {feature.details.map((d, i) => (
                            <motion.div
                              key={d.title}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.35 + i * 0.06 }}
                              className="flex items-start gap-3 p-2 bg-black/10 rounded-lg hover:bg-primary/10 transition-all duration-200"
                            >
                              <span className="text-lg">{d.icon}</span>
                              <div>
                                <h4 className="font-semibold text-white mb-0">{d.title}</h4>
                                <p className="text-gray-400 text-xs">{d.description}</p>
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
          <Tabs defaultValue="usecases" className="mb-20">
            <TabsList className="flex w-full gap-2 bg-transparent p-0">
              <TabsTrigger
                value="usecases"
                className="flex-1 rounded-md bg-gray-800 px-4 py-2 text-gray-300 hover:bg-primary/20 data-[state=active]:bg-primary data-[state=active]:text-black"
              >
                Use Cases
              </TabsTrigger>
              <TabsTrigger
                value="architecture"
                className="flex-1 rounded-md bg-gray-800 px-4 py-2 text-gray-300 hover:bg-primary/20 data-[state=active]:bg-primary data-[state=active]:text-black"
              >
                Architecture
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="flex-1 rounded-md bg-gray-800 px-4 py-2 text-gray-300 hover:bg-primary/20 data-[state=active]:bg-primary data-[state=active]:text-black"
              >
                Resources
              </TabsTrigger>
            </TabsList>

            {/* Use Cases */}
            <TabsContent value="usecases" className="mt-8">
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
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
                        className="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-orange-500/10 transition-colors"
                        whileHover={{ x: 10 }}
                      >
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span>{useCase}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Architecture */}
            <TabsContent value="architecture" className="mt-8">
              <Card className="bg-gradient-to-br from-orange-400/10 via-cyan-400/10 to-purple-500/5 border-gradient-to-r border-orange-500/20 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                    Ergo Tech Stack Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-2">Layer 1</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• eUTXO & ErgoScript</li>
                        <li>• Autolykos PoW</li>
                        <li>• Storage Rent</li>
                        <li>• Sigma Protocols</li>
                        <li>• Native Tokens & NFTs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">Layer 2 / Extensions</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Subblocks</li>
                        <li>• NIPoPoWs</li>
                        <li>• Oracle Pools</li>
                        <li>• Velvet Forks</li>
                        <li>• Adaptive Emission & Governance</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 text-sm text-gray-400">
                    <span className="font-semibold text-white">Ergo's architecture</span> delivers decentralization, composability, and built-in privacy—without tradeoffs.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources */}
            <TabsContent value="resources" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((res, idx) => (
                  <Card
                    key={res.title}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl"
                  >
                    <CardHeader>
                      <CardTitle className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2">
                        <res.icon className="w-5 h-5" />
                        {res.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Link href={res.href} target="_blank">
                        <Button
                          variant="outline"
                          className="w-full justify-between hover:bg-orange-500/10 text-gray-200"
                        >
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

        {/* CTA */}
        <FadeIn>
          <Card className="bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border-orange-500/30 backdrop-blur-xl mt-8">
            <CardContent className="text-center py-12">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Explore Ergo Tech?
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Dive deeper into the docs or start building on the most advanced UTXO blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {ctas.map((cta) => (
                  <Link href={cta.href} key={cta.label}>
                    <Button
                      className={
                        cta.outline
                          ? "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                          : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl"
                      }
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

      {/* Glossary Section */}
      <div className="container py-12">
        <GlossarySection
          terms={ERGO_GLOSSARY.hasDefinedTerm}
          title={ERGO_GLOSSARY.name}
          description={ERGO_GLOSSARY.description}
        />
      </div>
    </div>
  )
} 