"use client"

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
  Wrench
} from "lucide-react"

import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { HiddenBreadcrumbs } from "@/components/seo/hidden-breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { networkMetrics, formatHashrate, formatDifficulty, formatBlockTime, formatBlockReward, formatActiveMiners, formatMiningPools } from "@/lib/network-metrics"

export function MinersClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "For Miners", href: "/miners" }
  ]

  // Core value propositions for miners
  const coreValues = [
    {
      icon: Cpu,
      title: "ASIC-Resistant",
      description: "Autolykos algorithm designed for GPUs, keeping mining accessible and fair",
      highlight: "GPU-friendly forever"
    },
    {
      icon: Shield,
      title: "Fair Launch",
      description: "No premine, no dev tax, no VC control - pure community-driven project",
      highlight: "No insider advantage"
    },
    {
      icon: TrendingUp,
      title: "Real Use Cases",
      description: "DeFi, privacy, programmable money create genuine demand for network security",
      highlight: "Sustainable demand"
    },
    {
      icon: Coins,
      title: "Long-term Economics",
      description: "Storage rent mechanism ensures miner rewards beyond emission schedule",
      highlight: "Future-proof incentives"
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
      name: "Pool Comparison",
      description: "Compare mining pools by fees, features, and payout methods.",
      icon: BarChart3,
      url: "/docs/miners/pools",
      type: "internal"
    },
    {
      name: "Hardware Recommendations",
      description: "GPU recommendations and optimization tips for Ergo mining.",
      icon: Cpu,
      url: "/docs/miners/hardware",
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
          accessible to GPU miners. Read more about <a href="/docs/technology/secure-pow" className="text-orange-400 hover:text-orange-300 underline">Ergo's PoW design</a>.
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
          the emission schedule ends. Learn more about <a href="/docs/technology/storage-rent" className="text-orange-400 hover:text-orange-300 underline">storage rent economics</a>.
        </>
      )
    },
    {
      q: "Which mining pools support Ergo?",
      a: (
        <>
          Popular Ergo mining pools include Herominers, Woolypooly, 2Miners, Nanopool, and F2Pool. Each has different 
          fee structures and payout methods. Solo mining is also viable for larger operations. 
          See our <a href="/docs/miners/pools" className="text-orange-400 hover:text-orange-300 underline">complete pool comparison</a> for details.
        </>
      )
    },
    {
      q: "What's the minimum hardware needed?",
      a: (
        <>
          You need a GPU with at least 4GB VRAM. NVIDIA GTX 1060 6GB or AMD RX 580 8GB are good starting points. 
          More powerful cards like RTX 3070+ or RX 6700 XT+ will be more profitable. Check our 
          <a href="/docs/miners/hardware" className="text-orange-400 hover:text-orange-300 underline">hardware guide</a> for detailed recommendations and optimization tips.
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
        <HiddenBreadcrumbs 
          items={breadcrumbItems} 
          currentPage="For Miners" 
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
                  Mine Ergo with your GPUs — secure the network, earn ERG
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl">
                  ASIC-resistant PoW, fair launch, real-world use cases and a cypherpunk-minded community.
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
                    {coreValues.slice(0, 3).map((value) => (
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

        {/* Core Values Section */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Why mine Ergo instead of other coins?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value) => (
                <Card key={value.title} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-neutral-300 flex-1 mb-3">
                      {value.description}
                    </p>
                    <Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-400 w-fit">
                      {value.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
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

        {/* Live Metrics Section */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
                    <div className="text-xs text-neutral-500">
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
                  Open Mining Dashboard
                </a>
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
                      <span className="text-xs text-neutral-500">{step.duration}</span>
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
                href="/docs/technology/storage-rent"
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

        {/* Email Capture Form */}
        <FinalCTASimple 
          title="Stay Updated on Mining"
          description="Get the latest mining guides, profitability updates, and technical developments delivered to your inbox"
        />

      </div>
    </BackgroundWrapper>
  )
}
