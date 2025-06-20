"use client"

import { useState, useMemo, MouseEvent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import {
  TrendingUp,
  Coins,
  PiggyBank,
  Shield,
  Calculator,
  ExternalLink,
  AlertTriangle,
  BarChart3,
  Lock,
  Dice6,
  ArrowRight,
  Zap,
  BookOpen,
  BrainCircuit,
  Rocket,
  CheckCircle,
  Briefcase,
  Layers,
} from "lucide-react"
import { LucideIcon } from "lucide-react"

interface Protocol {
  name: string
  category: "DEX" | "Stablecoin" | "Gaming" | "Lending" | "NFT Marketplace"
  description: string
  tvl: string
  status: "Live" | "Development"
  link: string
  icon: LucideIcon
}

interface EarningMethod {
  title: string
  icon: LucideIcon
  description: string
  apy: string
  risk: "Low" | "Medium" | "High" | "Very High"
}

interface Strategy {
  level: "Beginner" | "Intermediate" | "Advanced"
  title: string
  description: string
  steps: string[]
  expectedApy: string
  icon: LucideIcon
}

const protocols: Protocol[] = [
  {
    name: "Spectrum Finance",
    category: "DEX",
    description: "The leading cross-chain DEX on Ergo, enabling swaps and liquidity providing.",
    tvl: "$2.1M+",
    status: "Live",
    link: "https://spectrum.fi/",
    icon: Layers,
  },
  {
    name: "SigmaUSD",
    category: "Stablecoin",
    description: "An algorithmic stablecoin protocol that allows minting of SigUSD and SigRSV.",
    tvl: "$850K+",
    status: "Live",
    link: "https://sigmausd.io/",
    icon: Shield,
  },
  {
    name: "Night Owl Casino",
    category: "Gaming",
    description: "A provably fair on-chain casino offering various games of chance.",
    tvl: "$180K+",
    status: "Live",
    link: "https://nightowlcasino.io/",
    icon: Dice6,
  },
  {
    name: "Ergo Auction House",
    category: "NFT Marketplace",
    description: "The primary marketplace for buying, selling, and auctioning Ergo NFTs.",
    tvl: "$320K+",
    status: "Live",
    link: "https://ergoauctions.org/",
    icon: Briefcase,
  },
]

const earningMethods: EarningMethod[] = [
  {
    title: "Liquidity Providing",
    icon: Coins,
    description: "Earn trading fees and rewards by providing liquidity to DEX pools.",
    apy: "15-45%",
    risk: "Medium",
  },
  {
    title: "Yield Farming",
    icon: TrendingUp,
    description: "Stake your LP tokens to earn additional token rewards from various farms.",
    apy: "20-80%",
    risk: "High",
  },
  {
    title: "Staking",
    icon: Lock,
    description: "Lock tokens in protocols like ErgoPad to earn rewards and governance rights.",
    apy: "8-25%",
    risk: "Low",
  },
  {
    title: "Lending & Borrowing",
    icon: PiggyBank,
    description: "Lend your assets to earn interest or borrow against collateral (coming soon).",
    apy: "5-15%",
    risk: "Low",
  },
]

const strategies: Strategy[] = [
  {
    level: "Beginner",
    title: "Conservative Start",
    description: "Ideal for newcomers. Focus on lower-risk activities to learn the ropes.",
    steps: ["Stake ERG or stablecoins in established protocols.", "Provide liquidity to stable pairs (e.g., SigUSD/USDC)."],
    expectedApy: "5-15%",
    icon: BookOpen,
  },
  {
    level: "Intermediate",
    title: "Balanced Growth",
    description: "For those comfortable with core concepts like impermanent loss.",
    steps: ["Yield farm with major pairs like ERG/SigUSD.", "Explore single-asset vaults with higher APYs."],
    expectedApy: "15-40%",
    icon: BrainCircuit,
  },
  {
    level: "Advanced",
    title: "Aggressive Yield Hunting",
    description: "For experienced users seeking to maximize returns through complex strategies.",
    steps: ["Leverage borrowing/lending to enhance yield.", "Participate in new protocol launches (high risk)."],
    expectedApy: "40%+",
    icon: Rocket,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function DeFiPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [principal, setPrincipal] = useState(1000)
  const [apy, setApy] = useState(25)
  const [duration, setDuration] = useState(12)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const { totalReturn, profit } = useMemo(() => {
    const monthlyRate = apy / 100 / 12
    const total = principal * Math.pow(1 + monthlyRate, duration)
    return {
      totalReturn: total,
      profit: total - principal,
    }
  }, [principal, apy, duration])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden" onMouseMove={handleMouseMove}>
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 136, 0, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-24"
        >
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">DECENTRALIZED FINANCE</Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pb-4">
            Ergo DeFi
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Put your crypto to work. Discover a growing ecosystem of financial applications built on the secure and
            powerful Ergo blockchain.
          </p>
        </motion.section>

        {/* Protocols Section */}
        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="mb-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-10">
            Key DeFi Protocols on Ergo
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {protocols.map((protocol) => (
              <motion.div variants={itemVariants} key={protocol.name}>
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl h-full transition-all duration-300 hover:border-orange-500/50">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <protocol.icon className="w-8 h-8 text-orange-400" />
                          <CardTitle className="text-2xl text-white">{protocol.name}</CardTitle>
                        </div>
                        <Badge variant={protocol.status === "Live" ? "default" : "secondary"}>
                          {protocol.status}
                        </Badge>
                      </div>
                      <Button asChild variant="ghost" size="icon">
                        <Link href={protocol.link} target="_blank">
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">{protocol.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Category: {protocol.category}</span>
                      <span className="font-bold text-white">TVL: {protocol.tvl}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How to Earn Section */}
        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="mb-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-10">
            How to Earn in Ergo DeFi
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {earningMethods.map((method) => (
              <motion.div variants={itemVariants} key={method.title}>
                <Card className="bg-gray-900/50 border-gray-800/50 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <method.icon className="w-7 h-7 text-orange-400" />
                      <h3 className="text-xl font-bold text-white">{method.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                    <div className="flex justify-between items-center text-xs">
                      <Badge>APY: {method.apy}</Badge>
                      <Badge variant="destructive">Risk: {method.risk}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Strategies Section */}
        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="mb-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-10">
            Example DeFi Strategies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategies.map((strategy) => (
              <motion.div variants={itemVariants} key={strategy.title}>
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl h-full flex flex-col transition-all duration-300 hover:border-orange-500/50">
                  <CardHeader className="flex-row items-center gap-4">
                    <strategy.icon className="w-10 h-10 text-orange-400" />
                    <div>
                      <Badge className="mb-1">{strategy.level}</Badge>
                      <CardTitle className="text-xl text-white">{strategy.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-400 text-sm mb-4 flex-1">{strategy.description}</p>
                    <ul className="space-y-2 mb-4">
                      {strategy.steps.map((step, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center text-sm font-semibold text-white mt-auto">
                      Expected APY: {strategy.expectedApy}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* APY Calculator Section */}
        <motion.section variants={itemVariants} initial="hidden" animate="visible" className="mb-20">
          <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-orange-400" />
                <CardTitle className="text-2xl text-white">DeFi Yield Calculator</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Principal Amount ($) - ${principal.toLocaleString()}
                  </label>
                  <Slider
                    value={[principal]}
                    onValueChange={(val: number[]) => setPrincipal(val[0])}
                    min={100}
                    max={100000}
                    step={100}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Estimated APY (%) - {apy}%
                  </label>
                  <Slider value={[apy]} onValueChange={(val: number[]) => setApy(val[0])} min={1} max={200} step={1} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Duration (Months) - {duration}
                  </label>
                  <Slider
                    value={[duration]}
                    onValueChange={(val: number[]) => setDuration(val[0])}
                    min={1}
                    max={60}
                    step={1}
                  />
                </div>
              </div>
              <div className="text-center bg-gray-900/70 p-6 rounded-lg">
                <p className="text-gray-400 mb-2">Total after {duration} months:</p>
                <p className="text-4xl font-bold text-green-400 mb-4">
                  ${totalReturn.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <p className="text-gray-400 text-sm">
                  Profit: ${profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Risk Disclaimer */}
        <motion.section variants={itemVariants} initial="hidden" animate="visible" className="max-w-3xl mx-auto">
          <Card className="bg-red-900/50 border-red-500/50">
            <CardContent className="p-8 flex items-center gap-6">
              <AlertTriangle className="w-12 h-12 text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-red-200 mb-2">DeFi Involves Risk</h3>
                <p className="text-red-300 text-sm">
                  Decentralized Finance is an emerging technology. Always do your own research (DYOR). Risks include
                  smart contract vulnerabilities and impermanent loss. Never invest more than you are willing to lose.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
