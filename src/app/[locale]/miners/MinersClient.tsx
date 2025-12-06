"use client"

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages, @typescript-eslint/no-unused-vars */

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Zap, 
  Cpu, 
  TrendingUp, 
  Shield,
  Coins,
  Calculator,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  X,
  ExternalLink,
  ChevronDown,
  Activity,
  Clock,
  Users,
  Globe,
  HardDrive,
  Settings,
  Play,
  DollarSign,
  BarChart3,
  Pickaxe,
  Wrench,
  Download,
  Sparkles,
  Network
} from "lucide-react"

import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { BackToTop } from "@/components/ui/back-to-top"
import { ClusterRelatedContent } from "@/components/seo/cluster-related-content"
import { networkMetrics, formatHashrate, formatDifficulty, formatBlockTime, formatBlockReward, formatActiveMiners, formatMiningPools } from "@/lib/network-metrics"

export function MinersClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  
  // Mining Calculator State
  const [hashrate, setHashrate] = useState(130) // MH/s
  const [powerConsumption, setPowerConsumption] = useState(120) // Watts
  const [electricityCost, setElectricityCost] = useState(0.10) // USD per kWh
  const [ergPrice, setErgPrice] = useState(1.50) // USD
  const [poolFee, setPoolFee] = useState(1) // %
  
  // Network metrics for calculations (use live data where available)
  const networkHashrateValue = networkMetrics.hashrate.value // TH/s from live metrics
  const blockReward = networkMetrics.blockReward.value // ERG from live metrics
  const blocksPerDay = 720 // ~2 min blocks
  
  // Calculate daily earnings
  const dailyErgEarned = (hashrate / 1000 / networkHashrateValue) * blockReward * blocksPerDay * (1 - poolFee / 100)
  const dailyRevenue = dailyErgEarned * ergPrice
  const dailyPowerCost = (powerConsumption / 1000) * 24 * electricityCost
  const dailyProfit = dailyRevenue - dailyPowerCost
  
  // Monthly and yearly projections
  const monthlyProfit = dailyProfit * 30
  const yearlyProfit = dailyProfit * 365
  
  // ROI calculation (assuming $500 GPU cost)
  const gpuCost = 500
  const roiDays = gpuCost / dailyProfit

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "For Miners", href: "/miners" }
  ]

  // Core value propositions for miners
  const coreValues = [
    {
      icon: Cpu,
      title: "ASIC-Resistant",
      description: "GPU-only mining. No ASICs. No industrial farms squeezing you out. Your gaming rig stays competitive.",
      highlight: "Level playing field"
    },
    {
      icon: Shield,
      title: "Fair Launch",
      description: "Zero pre-mine. Zero dev tax. Zero VC allocation. Every ERG mined fairly since day one.",
      highlight: "No insider dumps"
    },
    {
      icon: TrendingUp,
      title: "Real Use Cases",
      description: "DeFi, DEXs, privacy features create actual demand. Not just speculation - real utility driving value.",
      highlight: "Sustainable demand"
    },
    {
      icon: Coins,
      title: "Long-term Economics",
      description: "Storage rent pays miners forever. When emissions end, you still earn. Built for decades, not pump & dump.",
      highlight: "Earn after emissions"
    }
  ]

  // Comparison data for miners
  const comparison = [
    {
      criterion: "Mining Hardware",
      bitcoin: { status: "bad", text: "ASIC-only" },
      ethereum: { status: "warning", text: "Proof-of-Stake" },
      monero: { status: "good", text: "CPU/GPU friendly" },
      ergo: { status: "good", text: "GPU-optimized" }
    },
    {
      criterion: "Block Reward",
      bitcoin: { status: "warning", text: "Halving every 4y" },
      ethereum: { status: "bad", text: "No mining" },
      monero: { status: "good", text: "Tail emission" },
      ergo: { status: "good", text: "9 ERG + fees" }
    },
    {
      criterion: "Future Incentives",
      bitcoin: { status: "warning", text: "Fees only" },
      ethereum: { status: "bad", text: "No mining" },
      monero: { status: "good", text: "Perpetual rewards" },
      ergo: { status: "good", text: "Storage rent" }
    },
    {
      criterion: "Network Utility",
      bitcoin: { status: "good", text: "Store of value" },
      ethereum: { status: "good", text: "Smart contracts" },
      monero: { status: "good", text: "Privacy payments" },
      ergo: { status: "good", text: "DeFi + Privacy" }
    },
    {
      criterion: "Mining Accessibility",
      bitcoin: { status: "bad", text: "Industrial scale" },
      ethereum: { status: "bad", text: "No mining" },
      monero: { status: "good", text: "Home mining" },
      ergo: { status: "good", text: "GPU rigs viable" }
    }
  ]

  // Mining Pools - Full catalog
  const [selectedPoolFilter, setSelectedPoolFilter] = useState<'all' | 'beginner' | 'low-fee' | 'decentralized'>('all')
  
  const miningPools = [
    {
      name: "GetBlok",
      url: "https://ergo.getblok.io",
      fee: "1%",
      paymentSystem: "PPLNS",
      minPayout: "0.5 ERG",
      hashrate: "3.2 TH/s",
      miners: 2543,
      features: ["Auto-exchange", "Mobile app", "API access"],
      servers: ["EU", "US", "Asia"],
      tags: ["beginner", "popular"]
    },
    {
      name: "2Miners",
      url: "https://2miners.com/erg-mining-pool",
      fee: "1%",
      paymentSystem: "PPLNS",
      minPayout: "0.1 ERG",
      hashrate: "2.7 TH/s",
      miners: 3218,
      features: ["24/7 Support", "Telegram bot", "Email alerts"],
      servers: ["EU", "US", "Asia", "RU"],
      tags: ["beginner", "support"]
    },
    {
      name: "HeroMiners",
      url: "https://ergo.herominers.com",
      fee: "0.9%",
      paymentSystem: "PROP",
      minPayout: "0.5 ERG",
      hashrate: "2.0 TH/s",
      miners: 1847,
      features: ["SSL support", "Worker stats", "Discord bot"],
      servers: ["EU", "US", "Asia"],
      tags: ["low-fee", "decentralized"]
    },
    {
      name: "WoolyPooly",
      url: "https://woolypooly.com/en/coin/erg",
      fee: "0.9%",
      paymentSystem: "PPLNS",
      minPayout: "0.5 ERG",
      hashrate: "1.5 TH/s",
      miners: 1234,
      features: ["Solo mining", "Telegram bot", "MEV rewards"],
      servers: ["EU", "US"],
      tags: ["low-fee", "decentralized"]
    },
    {
      name: "F2Pool",
      url: "https://www.f2pool.com",
      fee: "2%",
      paymentSystem: "PPS+",
      minPayout: "1 ERG",
      hashrate: "1.3 TH/s",
      miners: 892,
      features: ["Mobile app", "Multi-coin", "Instant payments"],
      servers: ["Asia", "US", "EU"],
      tags: ["decentralized"]
    },
    {
      name: "Nanopool",
      url: "https://ergo.nanopool.org",
      fee: "1%",
      paymentSystem: "PPLNS",
      minPayout: "1 ERG",
      hashrate: "1.1 TH/s",
      miners: 1456,
      features: ["Email notifications", "API", "Multi-language"],
      servers: ["EU", "US", "Asia", "AU"],
      tags: ["decentralized"]
    }
  ]

  const filteredPools = selectedPoolFilter === 'all'
    ? miningPools
    : miningPools.filter(pool => pool.tags.includes(selectedPoolFilter))

  // Mining Software
  const miningSoftware = [
    {
      name: "NBMiner",
      gpus: ["NVIDIA", "AMD"],
      fee: "2%",
      recommended: "Best for mixed rigs",
      download: "https://github.com/NebuTech/NBMiner/releases"
    },
    {
      name: "T-Rex",
      gpus: ["NVIDIA"],
      fee: "1%",
      recommended: "Best for NVIDIA cards",
      download: "https://github.com/trexminer/T-Rex/releases"
    },
    {
      name: "TeamRedMiner",
      gpus: ["AMD"],
      fee: "2%",
      recommended: "Best for AMD cards",
      download: "https://github.com/todxx/teamredminer/releases"
    },
    {
      name: "lolMiner",
      gpus: ["NVIDIA", "AMD"],
      fee: "1%",
      recommended: "Advanced users",
      download: "https://github.com/Lolliedieb/lolMiner-releases/releases"
    }
  ]

  // Live metrics from centralized network metrics
  const liveMetrics = [
    { label: "Network Hashrate", value: formatHashrate(networkMetrics), trend: networkMetrics.hashrate.trend, icon: Zap, comment: "Network hashrate → competition & security" },
    { label: "Difficulty", value: formatDifficulty(networkMetrics), trend: networkMetrics.difficulty.trend, icon: BarChart3, comment: "Difficulty → baseline for profitability" },
    { label: "Block Time", value: formatBlockTime(networkMetrics), trend: networkMetrics.blockTime.status, icon: Clock, comment: "Consistent block times = predictable rewards" },
    { label: "Block Reward", value: formatBlockReward(networkMetrics), trend: `${networkMetrics.supply.left}M left`, icon: Coins, comment: "Block reward + fees → total miner revenue" },
    { label: "Active Miners", value: formatActiveMiners(networkMetrics), trend: networkMetrics.activeMiners.trend, icon: Users, comment: "Healthy miner distribution" },
    { label: "Mining Pools", value: formatMiningPools(networkMetrics), trend: networkMetrics.miningPools.status, icon: Globe, comment: "Multiple pool options for decentralization" }
  ]

  // Mining setup steps
  const miningSteps = [
    {
      step: "01",
      title: "Check Your Hardware",
      description: "Verify GPU compatibility and power requirements for optimal mining performance.",
      details: [
        "NVIDIA GTX 1060 6GB+ or AMD RX 580 8GB+",
        "Minimum 4GB VRAM required",
        "Stable power supply (80+ Gold recommended)",
        "Adequate cooling and ventilation"
      ],
      icon: Cpu,
      duration: "5 min"
    },
    {
      step: "02", 
      title: "Choose Mining Setup",
      description: "Decide between solo mining or joining a pool based on your hashrate and preferences.",
      details: [
        "Solo mining: Full block rewards but irregular payouts",
        "Pool mining: Regular payouts but shared rewards",
        "Recommended pools: Herominers, Woolypooly, 2Miners",
        "Consider pool fees (typically 1-2%)"
      ],
      icon: Settings,
      duration: "10 min"
    },
    {
      step: "03",
      title: "Install Mining Software", 
      description: "Download and configure mining software compatible with Autolykos algorithm.",
      details: [
        "T-Rex Miner (NVIDIA) or TeamRedMiner (AMD)",
        "NBMiner (cross-platform alternative)",
        "Configure with pool address and wallet",
        "Optimize GPU settings for efficiency"
      ],
      icon: Wrench,
      duration: "15 min"
    },
    {
      step: "04",
      title: "Set Up Wallet & Start",
      description: "Create an Ergo wallet, configure payout address, and begin mining operations.",
      details: [
        "Download Nautilus or Yoroi wallet",
        "Generate new wallet and backup seed phrase",
        "Copy wallet address for mining payouts",
        "Start mining and monitor performance"
      ],
      icon: Play,
      duration: "10 min"
    }
  ]

  // Mining tools and resources
  const miningTools = [
    {
      name: "Mining Profitability Calculator",
      description: "Calculate potential earnings based on your hardware and electricity costs.",
      icon: Calculator,
      url: "https://minerstat.com/coin/ERG",
      type: "external"
    },
    {
      name: "Official Mining Guide",
      description: "Comprehensive setup guide for beginners and advanced miners.",
      icon: HardDrive,
      url: "/docs/miners/mining-guides",
      type: "internal"
    },
    {
      name: "Autolykos Algorithm",
      description: "Learn about Ergo's ASIC-resistant Proof-of-Work algorithm.",
      icon: BarChart3,
      url: "/technology/secure-pow",
      type: "internal"
    },
    {
      name: "Storage Rent Economics",
      description: "How storage rent ensures long-term miner incentives.",
      icon: Cpu,
      url: "/technology/storage-rent",
      type: "internal"
    }
  ]

  // FAQ for miners
  const faqs = [
    {
      q: "Is Ergo still profitable to mine?",
      a: (
        <>
          Profitability depends on your electricity costs, hardware efficiency, and current network difficulty. 
          Use our <a href="https://minerstat.com/coin/ERG" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">mining calculator</a> to 
          estimate earnings. Many miners find Ergo profitable due to lower competition compared to major coins.
        </>
      )
    },
    {
      q: "Will ASICs come to Ergo?",
      a: (
        <>
          Ergo uses the Autolykos algorithm specifically designed to be ASIC-resistant through memory-hard computations. 
          The algorithm can be updated if ASICs threaten decentralization. The community is committed to keeping mining 
          accessible to GPU miners. Read more about <a href="/technology/secure-pow" className="text-orange-400 hover:text-orange-300 underline">Ergo's PoW design</a>.
        </>
      )
    },
    {
      q: "How stable is the Ergo development team?",
      a: (
        <>
          Ergo has a strong, active development team led by experienced cryptographers and blockchain researchers. 
          The project is open-source with regular updates and a clear roadmap. Check the 
          <a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">GitHub activity</a> and 
          join <a href="https://discord.com/invite/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">Discord</a> to 
          see the active community.
        </>
      )
    },
    {
      q: "How does storage rent affect miners?",
      a: (
        <>
          Storage rent creates a sustainable fee mechanism that benefits miners long-term. Unused UTXOs pay rent over time, 
          which goes to miners as additional rewards beyond block emissions. This ensures miner incentives continue after 
          the emission schedule ends. Learn more about <a href="/technology/storage-rent" className="text-orange-400 hover:text-orange-300 underline">storage rent economics</a>.
        </>
      )
    },
    {
      q: "Which mining pools support Ergo?",
      a: (
        <>
          Popular Ergo mining pools include Herominers, Woolypooly, 2Miners, Nanopool, and F2Pool. Each has different 
          fee structures and payout methods. Solo mining is also viable for larger operations. 
          See our <a href="#pools" className="text-orange-400 hover:text-orange-300 underline">complete pool comparison</a> below for details.
        </>
      )
    },
    {
      q: "What's the minimum hardware needed?",
      a: (
        <>
          You need a GPU with at least 4GB VRAM. NVIDIA GTX 1060 6GB or AMD RX 580 8GB are good starting points. 
          More powerful cards like RTX 3070+ or RX 6700 XT+ will be more profitable. Check our 
          <a href="#mining-guide" className="text-orange-400 hover:text-orange-300 underline">hardware guide</a> below for detailed recommendations and optimization tips.
        </>
      )
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />
      case 'bad':
        return <X className="w-4 h-4 text-red-400" />
      default:
        return null
    }
  }

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative pb-24">
        {/* Hidden Breadcrumbs for SEO */}
        <Breadcrumbs items={[...breadcrumbItems, { name: "For Miners", href: "#" }]} variant="hidden" />
        
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
                  Mine with GPUs. Earn forever. Stay profitable.
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl">
                  ASIC-resistant algorithm. Fair rewards. Storage rent keeps miners paid after emissions end.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                    <Link href="#mining-guide">
                      <Pickaxe className="w-5 h-5 mr-2" />
                      Start Mining Ergo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <a href="https://minerstat.com/coin/ERG" target="_blank" rel="noopener noreferrer">
                      <Calculator className="w-5 h-5 mr-2" />
                      Check Profitability
                    </a>
                  </Button>
                </div>
              </div>
              <motion.div 
                className="relative z-10" 
                whileHover={{ scale: 1.02 }} 
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Why mine Ergo instead of other coins?</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {coreValues.map((value) => (
                      <div key={value.title} className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <value.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{value.title}</h4>
                            <p className="text-neutral-400 text-sm mb-1">{value.description}</p>
                            <span className="text-orange-400 text-xs font-medium">{value.highlight}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Live Metrics Section */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              Live Mining Metrics
            </h2>
            <p className="text-center text-neutral-400 mb-2">
              Live on-chain data (updated in real time)
            </p>
            <p className="text-center text-orange-400 text-sm mb-12">
              Hashrate & difficulty → your mining rewards
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveMetrics.map((metric) => (
                <Card key={metric.label} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <metric.icon className="w-8 h-8 text-orange-400" />
                      <Badge variant="outline" className={`text-xs ${
                        metric.trend.startsWith('+') ? 'border-green-500/30 text-green-400' :
                        metric.trend === 'stable' || metric.trend === 'growing' ? 'border-blue-500/30 text-blue-400' :
                        'border-orange-500/30 text-orange-400'
                      }`}>
                        {metric.trend}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-neutral-400 text-sm mb-2">
                      {metric.label}
                    </div>
                    <div className="text-xs text-neutral-400">
                      {metric.comment}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                <a href="https://explorer.ergoplatform.com" target="_blank" rel="noopener noreferrer">
                  <Activity className="w-4 h-4 mr-2" />
                  View on Explorer
                </a>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Mining Profitability Calculator */}
        <motion.section 
          className="py-16 px-4 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Mining <span className="text-orange-400">Profitability</span> Calculator
              </h2>
              <p className="text-xl text-neutral-300">
                Calculate your potential earnings mining Ergo
              </p>
            </div>

            <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Input Controls */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-white font-semibold flex items-center gap-2">
                          <Zap className="w-5 h-5 text-orange-400" />
                          Hashrate (MH/s)
                        </label>
                        <span className="text-orange-400 font-bold text-lg">{hashrate}</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="500"
                        step="10"
                        value={hashrate}
                        onChange={(e) => setHashrate(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-neutral-400 mt-1">
                        <span>10 MH/s</span>
                        <span>500 MH/s</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-white font-semibold flex items-center gap-2">
                          <Cpu className="w-5 h-5 text-orange-400" />
                          Power Consumption (W)
                        </label>
                        <span className="text-orange-400 font-bold text-lg">{powerConsumption}W</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="400"
                        step="10"
                        value={powerConsumption}
                        onChange={(e) => setPowerConsumption(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-neutral-400 mt-1">
                        <span>50W</span>
                        <span>400W</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-white font-semibold flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-orange-400" />
                          Electricity Cost ($/kWh)
                        </label>
                        <span className="text-orange-400 font-bold text-lg">${electricityCost.toFixed(3)}</span>
                      </div>
                      <input
                        type="range"
                        min="0.01"
                        max="0.50"
                        step="0.01"
                        value={electricityCost}
                        onChange={(e) => setElectricityCost(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-neutral-400 mt-1">
                        <span>$0.01</span>
                        <span>$0.50</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-white font-semibold flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-orange-400" />
                          ERG Price (USD)
                        </label>
                        <span className="text-orange-400 font-bold text-lg">${ergPrice.toFixed(2)}</span>
                      </div>
                      <input
                        type="range"
                        min="0.50"
                        max="10.00"
                        step="0.10"
                        value={ergPrice}
                        onChange={(e) => setErgPrice(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-neutral-400 mt-1">
                        <span>$0.50</span>
                        <span>$10.00</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-white font-semibold flex items-center gap-2">
                          <Users className="w-5 h-5 text-orange-400" />
                          Pool Fee (%)
                        </label>
                        <span className="text-orange-400 font-bold text-lg">{poolFee}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="3"
                        step="0.1"
                        value={poolFee}
                        onChange={(e) => setPoolFee(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-neutral-400 mt-1">
                        <span>0%</span>
                        <span>3%</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-orange-500/20 to-orange-900/20 border border-orange-500/30 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/30 flex items-center justify-center">
                          <Coins className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-400">Daily ERG Mined</p>
                          <p className="text-2xl font-bold text-white">{dailyErgEarned.toFixed(4)} ERG</p>
                        </div>
                      </div>
                      <div className="text-sm text-neutral-300">
                        ≈ ${dailyRevenue.toFixed(2)} USD/day
                      </div>
                    </div>

                    <div className="bg-black/60 border border-white/10 rounded-2xl p-6 space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                        <span className="text-neutral-400">Daily Revenue</span>
                        <span className="text-green-400 font-bold">${dailyRevenue.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                        <span className="text-neutral-400">Daily Power Cost</span>
                        <span className="text-red-400 font-bold">-${dailyPowerCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-white font-semibold text-lg">Daily Profit</span>
                        <span className={`font-bold text-xl ${dailyProfit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          ${dailyProfit.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/60 border border-white/10 rounded-xl p-4">
                        <p className="text-sm text-neutral-400 mb-1">Monthly</p>
                        <p className={`text-xl font-bold ${monthlyProfit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          ${monthlyProfit.toFixed(2)}
                        </p>
                      </div>
                      <div className="bg-black/60 border border-white/10 rounded-xl p-4">
                        <p className="text-sm text-neutral-400 mb-1">Yearly</p>
                        <p className={`text-xl font-bold ${yearlyProfit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          ${yearlyProfit.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <p className="text-sm text-neutral-400">ROI Time (GPU @ $500)</p>
                      </div>
                      <p className="text-2xl font-bold text-white">
                        {roiDays > 0 ? `${Math.round(roiDays)} days` : 'Not profitable'}
                      </p>
                      {roiDays > 0 && (
                        <p className="text-xs text-neutral-400 mt-1">
                          ≈ {(roiDays / 30).toFixed(1)} months
                        </p>
                      )}
                    </div>

                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                      <p className="text-xs text-orange-300 leading-relaxed">
                        <strong>Note:</strong> Calculations are estimates based on current network difficulty and price. 
                        Actual earnings may vary with network hashrate changes and ERG price fluctuations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Popular GPU Presets */}
                <div className="mt-8 pt-8 border-t border-neutral-700">
                  <p className="text-white font-semibold mb-4">Popular GPU Presets:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button
                      onClick={() => { setHashrate(130); setPowerConsumption(120); }}
                      className="bg-black/60 hover:bg-black/80 border border-white/10 hover:border-orange-500/50 rounded-lg p-3 transition-all duration-200"
                    >
                      <p className="text-white font-medium text-sm">RTX 3060 Ti</p>
                      <p className="text-xs text-neutral-400">130 MH/s · 120W</p>
                    </button>
                    <button
                      onClick={() => { setHashrate(180); setPowerConsumption(150); }}
                      className="bg-black/60 hover:bg-black/80 border border-white/10 hover:border-orange-500/50 rounded-lg p-3 transition-all duration-200"
                    >
                      <p className="text-white font-medium text-sm">RTX 3070</p>
                      <p className="text-xs text-neutral-400">180 MH/s · 150W</p>
                    </button>
                    <button
                      onClick={() => { setHashrate(150); setPowerConsumption(130); }}
                      className="bg-black/60 hover:bg-black/80 border border-white/10 hover:border-orange-500/50 rounded-lg p-3 transition-all duration-200"
                    >
                      <p className="text-white font-medium text-sm">RX 6600 XT</p>
                      <p className="text-xs text-neutral-400">150 MH/s · 130W</p>
                    </button>
                    <button
                      onClick={() => { setHashrate(220); setPowerConsumption(180); }}
                      className="bg-black/60 hover:bg-black/80 border border-white/10 hover:border-orange-500/50 rounded-lg p-3 transition-all duration-200"
                    >
                      <p className="text-white font-medium text-sm">RX 6800</p>
                      <p className="text-xs text-neutral-400">220 MH/s · 180W</p>
                    </button>
                  </div>
                </div>

                {/* CTA to start mining */}
                <div className="mt-8 pt-8 border-t border-neutral-700">
                  <div className="bg-gradient-to-r from-green-500/10 to-green-900/10 border border-green-500/30 rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Ready to start mining?</h3>
                    <p className="text-neutral-300 mb-4">
                      Follow our step-by-step guide to get your GPU mining ERG in 10 minutes
                    </p>
                    <Button asChild className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl border border-green-500/50">
                      <Link href="#mining-guide">
                        <Pickaxe className="w-4 h-4 mr-2" />
                        Start Mining Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Mining Pools Section */}
        <motion.section 
          id="pools"
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Mining <span className="text-orange-400">Pools</span> Directory
            </h2>
            <p className="text-center text-neutral-400 mb-8">
              Choose a pool based on fees, features, and your location
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button
                variant={selectedPoolFilter === 'all' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPoolFilter('all')}
                className={selectedPoolFilter === 'all' 
                  ? "bg-orange-500 text-black hover:bg-orange-600" 
                  : "border-neutral-700 text-neutral-300 hover:bg-neutral-900/60"}
              >
                All Pools
              </Button>
              <Button
                variant={selectedPoolFilter === 'beginner' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPoolFilter('beginner')}
                className={selectedPoolFilter === 'beginner' 
                  ? "bg-green-500 text-black hover:bg-green-600" 
                  : "border-green-500/30 text-green-400 hover:bg-green-500/10"}
              >
                <Sparkles className="w-4 h-4 mr-1" />
                For Beginners
              </Button>
              <Button
                variant={selectedPoolFilter === 'low-fee' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPoolFilter('low-fee')}
                className={selectedPoolFilter === 'low-fee' 
                  ? "bg-orange-500 text-black hover:bg-orange-600" 
                  : "border-orange-500/30 text-orange-400 hover:bg-orange-500/10"}
              >
                <Coins className="w-4 h-4 mr-1" />
                Lowest Fees
              </Button>
              <Button
                variant={selectedPoolFilter === 'decentralized' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPoolFilter('decentralized')}
                className={selectedPoolFilter === 'decentralized' 
                  ? "bg-purple-500 text-white hover:bg-purple-600" 
                  : "border-purple-500/30 text-purple-400 hover:bg-purple-500/10"}
              >
                <Network className="w-4 h-4 mr-1" />
                Decentralized
              </Button>
            </div>

            {/* Pool Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPools.map((pool) => (
                <Card key={pool.name} className="bg-black/80 border border-white/10 rounded-3xl hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{pool.name}</h3>
                      <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                        {pool.fee} fee
                      </Badge>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-400">Hashrate</span>
                        <span className="text-white font-medium">{pool.hashrate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-400">Miners</span>
                        <span className="text-white font-medium">{pool.miners.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-400">Min Payout</span>
                        <span className="text-white font-medium">{pool.minPayout}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-400">Payment</span>
                        <span className="text-white font-medium">{pool.paymentSystem}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {pool.servers.map((server) => (
                        <Badge key={server} variant="outline" className="text-xs border-neutral-700 text-neutral-400">
                          {server}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {pool.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="text-xs text-neutral-400">
                          {feature} •
                        </span>
                      ))}
                    </div>

                    <a
                      href={pool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 transition-colors"
                    >
                      Visit Pool
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPools.length === 0 && (
              <div className="text-center py-8">
                <p className="text-neutral-400">No pools match your criteria</p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Mining Software Section */}
        <motion.section 
          id="software"
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Mining <span className="text-orange-400">Software</span>
            </h2>
            <p className="text-center text-neutral-400 mb-8">
              Choose the right miner for your GPU
            </p>

            <Card className="bg-black/80 border border-white/10 rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-neutral-800">
                        <th className="text-left p-4 text-sm font-medium text-neutral-400">Software</th>
                        <th className="text-left p-4 text-sm font-medium text-neutral-400">GPU Support</th>
                        <th className="text-left p-4 text-sm font-medium text-neutral-400">Dev Fee</th>
                        <th className="text-left p-4 text-sm font-medium text-neutral-400">Best For</th>
                        <th className="text-left p-4 text-sm font-medium text-neutral-400"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {miningSoftware.map((software) => (
                        <tr key={software.name} className="border-b border-neutral-800 last:border-0 hover:bg-neutral-900/30 transition-colors group">
                          <td className="p-4 font-medium text-white">{software.name}</td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              {software.gpus.map(gpu => (
                                <Badge key={gpu} variant="outline" className="border-neutral-700 text-xs">
                                  {gpu}
                                </Badge>
                              ))}
                            </div>
                          </td>
                          <td className="p-4 text-sm text-neutral-300">{software.fee}</td>
                          <td className="p-4 text-sm text-neutral-400">{software.recommended}</td>
                          <td className="p-4">
                            <a href={software.download} target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-orange-400 group-hover:text-orange-400 transition-colors">
                                <Download className="w-4 h-4" />
                              </Button>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
              <p className="text-sm text-orange-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>New to mining?</strong> Start with NBMiner (mixed rigs) or T-Rex (NVIDIA only) for easiest setup.</span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section 
          id="comparison"
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              Why Ergo vs BTC / ETH / XMR?
            </h2>
            <p className="text-xl text-center text-neutral-300 mb-12">
              Ergo is designed so that GPU miners can meaningfully participate in securing a useful network, not just chase pump-and-dumps.
            </p>
            
            <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 mb-12 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Mining Comparison: Ergo vs BTC/ETH/XMR
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[900px]">
                    <caption className="sr-only">Mining platform comparison</caption>
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left p-4 font-semibold text-orange-400">Criterion</th>
                        <th className="text-left p-4 font-semibold text-[#F7931A]">Bitcoin</th>
                        <th className="text-left p-4 font-semibold text-[#627EEA]">Ethereum</th>
                        <th className="text-left p-4 font-semibold text-[#FF6600]">Monero</th>
                        <th className="text-left p-4 font-semibold text-orange-400">Ergo</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      {comparison.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-neutral-800 hover:bg-neutral-800/30">
                          <th scope="row" className="p-4 font-medium text-white">{row.criterion}</th>
                          <td className="p-4 text-sm">
                            <Badge
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                row.bitcoin.status === "good" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                row.bitcoin.status === "warning" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" :
                                "bg-red-500/20 text-red-400 border-red-500/30"
                              }`}
                            >
                              {row.bitcoin.text}
                            </Badge>
                          </td>
                          <td className="p-4 text-sm">
                            <Badge
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                row.ethereum.status === "good" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                row.ethereum.status === "warning" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" :
                                "bg-red-500/20 text-red-400 border-red-500/30"
                              }`}
                            >
                              {row.ethereum.text}
                            </Badge>
                          </td>
                          <td className="p-4 text-sm">
                            <Badge
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                row.monero.status === "good" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                row.monero.status === "warning" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" :
                                "bg-red-500/20 text-red-400 border-red-500/30"
                              }`}
                            >
                              {row.monero.text}
                            </Badge>
                          </td>
                          <td className="p-4 text-sm">
                            <Badge
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                row.ergo.status === "good" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                row.ergo.status === "warning" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" :
                                "bg-red-500/20 text-red-400 border-red-500/30"
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
                    Mining comparison focusing on accessibility, sustainability, and long-term viability for GPU miners. Updated: {new Date().toISOString().slice(0, 10)}.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                <Link href="/start/comparison">Deep dive: Detailed comparison</Link>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Mining Guide Section */}
        <motion.section 
          id="mining-guide"
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              Step-by-step: How to Start Mining Ergo
            </h2>
            <p className="text-center text-neutral-300 mb-12 max-w-3xl mx-auto">
              Clear onboarding process to get you mining ERG with your GPU setup.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {miningSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="h-full bg-black/80 border border-white/10 rounded-3xl p-6 flex flex-col hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                        <step.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <Badge variant="outline" className="bg-black/60 border-orange-500/30 text-orange-400 uppercase tracking-wider">
                        Step {step.step}
                      </Badge>
                      <span className="text-xs text-neutral-400">{step.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-neutral-300 text-sm mb-4 flex-1">{step.description}</p>
                    <div className="bg-black/60 border border-white/10 rounded-2xl p-4 mb-4">
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-xs text-neutral-300 flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                <Link href="/docs/miners/mining-guides">
                  <HardDrive className="w-5 h-5 mr-2" />
                  Open "Start Mining Ergo" Guide
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Mining Tools Section */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Mining Calculator & Tools
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {miningTools.map((tool) => (
                <Card key={tool.name} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <tool.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-neutral-300 mb-6">
                      {tool.description}
                    </p>
                    <div className="space-y-3">
                      {tool.type === 'external' ? (
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group"
                        >
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          <span>Open Tool</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <Link
                          href={tool.url}
                          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group"
                        >
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          <span>View Guide</span>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            FAQ for Miners
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                  <CollapsibleTrigger asChild>
                    <button className="w-full">
                      <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                        <h3 className="text-lg font-semibold text-left text-white">{faq.q}</h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-neutral-400 transition-transform ${
                            openFAQ === index ? "rotate-180" : ""
                          }`} 
                        />
                      </CardContent>
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="text-neutral-300 leading-relaxed">
                        {faq.a}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </section>

        {/* Choose Your Path Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
              Join the <span className="text-orange-400">Network</span>
            </h2>
            <p className="text-xl text-center text-neutral-300 mb-12">
              Ready to start mining? Choose your next step
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                href="/docs/miners/mining-guides"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Pickaxe className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Start Mining Now</h3>
                        <p className="text-orange-400 text-sm">Complete Guide</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Step-by-step setup guide with tools and optimization tips
                </p>
              </Link>
              
              <a 
                href="https://discord.com/invite/ergo-platform-668903786361651200"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Users className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Join Miners' Chat</h3>
                        <p className="text-orange-400 text-sm">Community Support</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Connect with experienced miners and get real-time help
                </p>
              </a>

              <Link 
                href="/technology/storage-rent"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Learn Economics</h3>
                        <p className="text-orange-400 text-sm">Long-term Viability</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Understand Ergo's sustainable mining economics and storage rent
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Cross-Promotion */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Coins className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Want to hold long-term?</p>
                  <p className="text-neutral-400 text-sm">Learn about ERG as a store of value and investment</p>
                </div>
              </div>
              <Link 
                href="/hodlers"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400 hover:bg-orange-500/20 hover:border-orange-400/50 transition-all font-medium text-sm whitespace-nowrap"
              >
                For Hodlers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Topic Cluster Related Content */}
        <ClusterRelatedContent 
          currentUrl="/miners"
          title="Explore Mining"
          subtitle="Deep dive into Ergo mining technology and resources"
          maxItems={6}
          showPillarLink={false}
        />

        {/* Email Capture Form */}
        <FinalCTASimple 
          title="Stay Updated on Mining"
          description="Get the latest mining guides, profitability updates, and technical developments delivered to your inbox"
        />

      </div>
      
      {/* Back to Top button for long page */}
      <BackToTop />
    </BackgroundWrapper>
  )
}
