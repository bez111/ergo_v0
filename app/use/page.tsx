"use client"

import { motion } from "framer-motion"
import { Coins, Shield, Palette, Users, TrendingUp, Link2, Eye, Brain, Gamepad2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Расширенная карта иконок
const iconMap = {
  coins: <Coins className="w-6 h-6 text-brand-primary-400" />,
  shield: <Shield className="w-6 h-6 text-brand-primary-400" />,
  palette: <Palette className="w-6 h-6 text-brand-primary-400" />,
  users: <Users className="w-6 h-6 text-brand-primary-400" />,
  link: <Link2 className="w-6 h-6 text-brand-primary-400" />,
  "trending-up": <TrendingUp className="w-6 h-6 text-brand-primary-400" />,
  eye: <Eye className="w-6 h-6 text-brand-primary-400" />,
  brain: <Brain className="w-6 h-6 text-brand-primary-400" />,
  gamepad: <Gamepad2 className="w-6 h-6 text-brand-primary-400" />,
}

// Карточки use cases — порядок для WOW
const useCases = [
  {
    id: "defi",
    icon: "coins",
    title: "Decentralized Finance",
    subtitle: "Access to global, permissionless financial markets",
    description: "Programmable DEXs, stablecoins, lending — built on secure eUTXO.",
    tags: ["DEX", "Stablecoin", "Lending"],
    supportedProjects: ["Spectrum Finance", "SigmaUSD", "Duckpools"],
  },
  {
    id: "stablecoins",
    icon: "trending-up",
    title: "Algorithmic Stablecoins",
    subtitle: "Stable value storage without centralized control",
    description: "Over-collateralized stablecoins with innovative AgeUSD protocol.",
    tags: ["Stablecoin", "Algorithmic", "Collateral"],
    supportedProjects: ["SigmaUSD", "SigmaRSV"],
  },
  {
    id: "privacy",
    icon: "shield",
    title: "Privacy & Confidentiality",
    subtitle: "Financial privacy in an increasingly surveilled world",
    description: "Non-custodial mixers, stealth addresses, zero-knowledge proofs for complete privacy.",
    tags: ["Mixer", "Stealth", "Zero-Knowledge"],
    supportedProjects: ["ErgoMixer"],
  },
  {
    id: "bridges",
    icon: "link",
    title: "Cross-Chain Bridges",
    subtitle: "Secure, trustless value transfer between blockchains",
    description: "Decentralized bridges with multi-signature security, no central custody.",
    tags: ["Bridge", "Interoperability", "Multi-chain"],
    supportedProjects: ["Rosen Bridge"],
  },
  {
    id: "daos",
    icon: "users",
    title: "DAOs & Alternative Economies",
    subtitle: "Community governance and alternative economic systems",
    description: "Composable DAO infrastructure: treasury, voting, profit-sharing.",
    tags: ["DAO", "Governance", "Community"],
    supportedProjects: ["Paideia"],
  },
  {
    id: "nfts",
    icon: "palette",
    title: "NFTs & Digital Assets",
    subtitle: "True digital ownership, dynamic properties",
    description: "On-chain metadata, protocol royalties, programmable NFTs.",
    tags: ["NFT", "Royalties", "Dynamic"],
    supportedProjects: ["SkyHarbor", "Auction House", "Lilium"],
  },
  {
    id: "oracles",
    icon: "eye",
    title: "Oracles & Data Feeds",
    subtitle: "Bringing real-world data on-chain",
    description: "Decentralized oracle pools provide external data for DeFi & prediction markets.",
    tags: ["Oracles", "Data Feeds", "Prediction"],
    supportedProjects: ["Oracle Pools", "Ergo Oracle Core"],
  },
  {
    id: "identity",
    icon: "brain",
    title: "Identity & Reputation",
    subtitle: "Self-sovereign identity & Web3 reputation",
    description: "Decentralized identifiers (DID), Sybil resistance, reputation systems.",
    tags: ["Identity", "Reputation", "DID"],
    supportedProjects: [], // Коминг сун
  },
  {
    id: "gaming",
    icon: "gamepad",
    title: "Gaming & Metaverse",
    subtitle: "Next-gen gaming assets & digital worlds",
    description: "Programmable gaming tokens, NFT-powered economies, metaverse infrastructure.",
    tags: ["Gaming", "Metaverse", "NFT"],
    supportedProjects: [], // Коминг сун
  },
]

// Для красивого бейджа "Coming soon"
const isComingSoon = (uc: any) => !uc.supportedProjects || uc.supportedProjects.length === 0

export default function UsePage() {
  return (
    <div className="min-h-screen relative pb-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pt-28 pb-10 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Ergo Use Cases
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                Explore the full spectrum of financial, privacy, and social applications powered by Ergo.
              </p>
              <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                From DeFi and stablecoins to DAOs and the metaverse, discover how Ergo's technology is building a new era of digital sovereignty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-6 py-3 rounded-xl border border-brand-primary-500/50">
                  <Link href="/ecosystem">Explore Ecosystem</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-neutral-600 text-neutral-200 hover:bg-neutral-900/40 px-6 py-3 rounded-xl"
                >
                  <Link href="/build">Start Building</Link>
                </Button>
              </div>
            </div>
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Card className="bg-neutral-900/50 border border-neutral-700 backdrop-blur-sm p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Featured Use Cases</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Decentralized Finance (DeFi)", icon: iconMap.coins },
                      { name: "NFTs & Digital Assets", icon: iconMap.palette },
                      { name: "Privacy Applications", icon: iconMap.shield },
                    ].map((feature) => (
                      <motion.div
                        key={feature.name}
                        className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700"
                        whileHover={{ scale: 1.01, x: 6 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-md bg-brand-primary-500/20 border border-brand-primary-500/30 text-brand-primary-400">
                            {feature.icon}
                          </div>
                          <h4 className="font-semibold text-white">{feature.name}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Use Cases Grid */}
      <div className="py-14 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch"
        >
          {useCases.map((uc) => (
            <motion.div
              key={uc.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative h-full"
            >
              <Card className="relative bg-neutral-900/50 border border-neutral-700 rounded-xl transition-all duration-200 hover:border-brand-primary-500/30 hover:-translate-y-0.5 h-full flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  {isComingSoon(uc) && (
                    <span className="absolute top-5 right-5 px-3 py-1 rounded-md bg-neutral-900/60 border border-neutral-700 text-[10px] text-neutral-300">
                      Coming soon
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-md bg-brand-primary-500/20 border border-brand-primary-500/30">
                      {iconMap[uc.icon as keyof typeof iconMap]}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{uc.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {uc.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-neutral-900/60 border border-neutral-700 text-neutral-300 text-xs px-2 py-1 rounded">{tag}</span>
                    ))}
                    {uc.tags.length > 3 && (
                      <span className="bg-neutral-900/60 border border-neutral-700 text-neutral-300 text-xs px-2 py-1 rounded">+{uc.tags.length - 3}</span>
                    )}
                  </div>

                  <p className="text-neutral-400 font-medium mb-1">{uc.subtitle}</p>
                  <p className="text-neutral-300 text-base mb-5">{uc.description}</p>
                  {!isComingSoon(uc) && uc.supportedProjects.length > 0 && (
                    <div className="mb-4">
                      <span className="text-neutral-400 text-xs mr-1">Supported Projects:</span>
                      {uc.supportedProjects.slice(0, 2).map((proj) => (
                        <span key={proj} className="inline-block bg-neutral-800 text-neutral-200 px-2 py-1 rounded text-xs font-semibold mr-2">
                          {proj}
                        </span>
                      ))}
                      {uc.supportedProjects.length > 2 && (
                        <span className="inline-block bg-neutral-700 text-neutral-300 px-2 py-1 rounded text-xs font-semibold">
                          +{uc.supportedProjects.length - 2}
                        </span>
                      )}
                    </div>
                  )}

                  <Button
                    asChild
                    className="mt-auto w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-brand-primary-500/50 bg-neutral-900/50 text-neutral-200 transition-all hover:border-brand-primary-500 hover:text-brand-primary-400 hover:bg-neutral-900/60 focus-visible:ring-2 focus-visible:ring-brand-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <Link href={`/use/use-cases/${uc.id}`} className="flex items-center gap-2">
                      Explore Use Case <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
