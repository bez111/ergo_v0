"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { SectionHeading } from "@/components/section-heading"
import { DigitalCounter } from "@/components/digital-counter"
import {
  Cpu,
  HardDrive,
  Zap,
  DollarSign,
  Users,
  Shield,
  Download,
  Settings,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Monitor,
  Thermometer,
  Activity,
  Clock,
  BookOpen,
  Wrench,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { networkMetrics } from "@/lib/network-metrics"


// Top 3 recommended pools - for full list see /ecosystem/mining
const miningPools = [
  {
    name: "Herominers",
    url: "ergo.herominers.com:1180",
    websiteUrl: "https://ergo.herominers.com/",
    fee: "1%",
    minPayout: "1 ERG",
    features: ["Auto-switching", "Mobile app", "24/7 support"],
    status: "active",
    recommended: true,
  },
  {
    name: "2Miners",
    url: "ergo.2miners.com:8560",
    websiteUrl: "https://2miners.com/erg-mining-pool",
    fee: "1%",
    minPayout: "0.1 ERG",
    features: ["PPLNS", "Real-time stats", "Telegram bot"],
    status: "active",
    recommended: true,
  },
  {
    name: "Woolypooly",
    url: "ergo.woolypooly.com:3100",
    websiteUrl: "https://woolypooly.com/en/coin/erg",
    fee: "0.9%",
    minPayout: "0.1 ERG",
    features: ["Low fees", "MEV rewards", "Dashboard"],
    status: "active",
    recommended: true,
  },
]

const hardwareRequirements = [
  {
    category: "GPU Mining",
    icon: <Monitor className="w-6 h-6" />,
    requirements: [
      "NVIDIA GTX 1060 6GB or AMD RX 580 8GB minimum",
      "8GB+ VRAM recommended for optimal performance",
      "PCIe x16 slot",
      "Adequate power supply (750W+ for multi-GPU)",
    ],
    performance: "4-50 MH/s depending on GPU",
    difficulty: "Beginner",
  },
  {
    category: "CPU Mining",
    icon: <Cpu className="w-6 h-6" />,
    requirements: [
      "Modern multi-core processor",
      "16GB+ RAM recommended",
      "Good cooling solution",
      "Stable internet connection",
    ],
    performance: "0.1-2 MH/s depending on CPU",
    difficulty: "Beginner",
  },
  {
    category: "ASIC Mining",
    icon: <HardDrive className="w-6 h-6" />,
    requirements: [
      "Autolykos2 compatible ASIC",
      "Dedicated power circuit",
      "Proper ventilation",
      "Industrial internet connection",
    ],
    performance: "2000+ MH/s",
    difficulty: "Advanced",
  },
]

const miningSteps = [
  {
    step: 1,
    title: "Get an Ergo Wallet",
    description: "Download and set up an official Ergo wallet to receive your mining rewards",
    action: "Download Wallet",
    link: "/wallet",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    step: 2,
    title: "Choose Mining Software",
    description: "Select compatible mining software like T-Rex, NBMiner, or TeamRedMiner",
    action: "View Software",
    link: "#mining-software",
    icon: <Download className="w-5 h-5" />,
  },
  {
    step: 3,
    title: "Select Mining Pool",
    description: "Join a mining pool to get consistent payouts and reduce variance",
    action: "Choose Pool",
    link: "#pools",
    icon: <Users className="w-5 h-5" />,
  },
  {
    step: 4,
    title: "Configure & Start",
    description: "Set up your mining configuration and start earning ERG",
    action: "Start Mining",
    link: "https://github.com/trexminer/T-Rex/releases",
    icon: <Settings className="w-5 h-5" />,
  },
]

const profitabilityFactors = [
  { factor: "Hash Rate", impact: "High", description: "Your mining speed directly affects earnings" },
  { factor: "Power Cost", impact: "High", description: "Electricity costs significantly impact profitability" },
  { factor: "Pool Fees", impact: "Medium", description: "Typically 1-2% of earnings" },
  { factor: "Hardware Cost", impact: "Medium", description: "Initial investment and depreciation" },
  { factor: "ERG Price", impact: "High", description: "Market price volatility affects USD earnings" },
  { factor: "Network Difficulty", impact: "Medium", description: "Adjusts based on total network hashrate" },
]

export default function MiningClient() {
  const [selectedTab, setSelectedTab] = useState("overview")


  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-white relative overflow-hidden">
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Start Mining Ergo in 10 Minutes</h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                  Step-by-step guide to get your GPU mining ERG. No technical expertise required.
                </p>
                <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  GPU-friendly Autolykos2 algorithm. Join 15,000+ miners securing the network and earning rewards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setSelectedTab("getting-started")}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50"
                  >
                    Start Mining Now
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <Link href="/miners">
                      Calculate Profitability
                    </Link>
                  </Button>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">Network Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40">
                        <div className="flex items-center gap-3 mb-2">
                          <Activity className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Hashrate</span>
                        </div>
                        <DigitalCounter value={networkMetrics.hashrate.value} suffix=" TH/s" duration={3000} className="text-lg font-mono text-white" />
                      </div>
                      <div className="p-4 rounded-lg bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Block Time</span>
                        </div>
                        <DigitalCounter value={networkMetrics.blockTime.value} suffix=" min" duration={3000} className="text-lg font-mono text-white" />
                      </div>
                      <div className="p-4 rounded-lg bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40">
                        <div className="flex items-center gap-3 mb-2">
                          <DollarSign className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Reward</span>
                        </div>
                        <DigitalCounter value={1.2} suffix=" ERG" duration={3000} className="text-lg font-mono text-white" />
                      </div>
                      <div className="p-4 rounded-lg bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40">
                        <div className="flex items-center gap-3 mb-2">
                          <Users className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Miners</span>
                        </div>
                        <DigitalCounter value={12847} suffix="" duration={3000} className="text-lg font-mono text-white" />
                      </div>
                    </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-black/60 border border-white/20 rounded-2xl p-1">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl">
                    Overview
                </TabsTrigger>
                  <TabsTrigger
                    value="getting-started"
                    className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl"
                  >
                    Get Started
                  </TabsTrigger>
                  <TabsTrigger value="hardware" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl">
                    Hardware
                  </TabsTrigger>
                  <TabsTrigger value="pools" className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl">
                    Pools
                  </TabsTrigger>
                  <TabsTrigger
                    value="troubleshooting"
                    className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl"
                  >
                    Help
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                <SectionHeading text="MINING OVERVIEW" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-black/80 border border-white/10 rounded-3xl rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">What is Ergo Mining?</h3>
                    <p className="text-neutral-300 mb-6 leading-relaxed">
                      Ergo uses the Autolykos2 Proof-of-Work algorithm, designed to be ASIC-resistant and memory-hard.
                      This ensures fair distribution and allows GPU miners to participate effectively.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>ASIC-resistant algorithm</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>GPU and CPU mining supported</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>2-minute block times</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Emission schedule until 2045</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/80 border border-white/10 rounded-3xl rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">Why Mine Ergo?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-orange-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">Profitable Mining</h4>
                          <p className="text-sm text-neutral-400">Competitive rewards with growing ecosystem</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-orange-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">Network Security</h4>
                          <p className="text-sm text-neutral-400">Help secure a revolutionary blockchain</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-orange-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">Community Driven</h4>
                          <p className="text-sm text-neutral-400">Join a passionate mining community</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-orange-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">Decentralization</h4>
                          <p className="text-sm text-neutral-400">Support true decentralization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profitability Factors */}
                <div className="bg-black/80 border border-white/10 rounded-3xl rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-orange-400">Profitability Factors</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {profitabilityFactors.map((factor, index) => (
                      <div key={index} className="p-4 bg-neutral-900/50 rounded-lg border border-orange-500/20">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{factor.factor}</h4>
                          <Badge
                            variant={
                              factor.impact === "High"
                                ? "destructive"
                                : factor.impact === "Medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {factor.impact}
                          </Badge>
                        </div>
                        <p className="text-sm text-neutral-400">{factor.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Getting Started Tab */}
              <TabsContent value="getting-started" className="space-y-8">
                <SectionHeading text="GETTING STARTED" />

                <div className="grid gap-6">
                  {miningSteps.map((step, index) => (
                    <div key={index} className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-center gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500">
                          <span className="text-orange-400 font-bold">{step.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                            {step.icon}
                            {step.title}
                          </h3>
                          <p className="text-neutral-300 mb-4">{step.description}</p>
                        </div>
                        {step.link.startsWith('/') ? (
                          <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300">
                            <Link href={step.link}>{step.action}</Link>
                          </Button>
                        ) : step.link.startsWith('http') ? (
                          <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300">
                            <a href={step.link} target="_blank" rel="noopener noreferrer">{step.action}</a>
                          </Button>
                        ) : (
                          <Button 
                            variant="outline"
                            onClick={() => {
                              const tabName = step.link.includes('mining-software') ? 'getting-started' : step.link.replace('#', '')
                              setSelectedTab(tabName)
                              if (step.link.includes('mining-software')) {
                                setTimeout(() => {
                                  document.getElementById('mining-software')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }, 100)
                              }
                            }}
                            className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300"
                          >
                            {step.action}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mining Software */}
                <div id="mining-software" className="bg-black/80 border border-white/10 rounded-3xl rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-orange-400">Recommended Mining Software</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-neutral-900/50 rounded-lg border border-orange-500/20">
                      <h4 className="font-bold mb-2">T-Rex Miner</h4>
                      <p className="text-sm text-neutral-400 mb-4">NVIDIA GPU miner with excellent performance</p>
                      <div className="space-y-2 text-sm">
                        <div>• NVIDIA GPUs</div>
                        <div>• 1% dev fee</div>
                        <div>• Auto-tuning</div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                        <a href="https://github.com/trexminer/T-Rex/releases" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                    <div className="p-6 bg-neutral-900/50 rounded-lg border border-orange-500/20">
                      <h4 className="font-bold mb-2">TeamRedMiner</h4>
                      <p className="text-sm text-neutral-400 mb-4">AMD GPU miner with optimization features</p>
                      <div className="space-y-2 text-sm">
                        <div>• AMD GPUs</div>
                        <div>• 2.5% dev fee</div>
                        <div>• Memory tuning</div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                        <a href="https://github.com/todxx/teamredminer/releases" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                    <div className="p-6 bg-neutral-900/50 rounded-lg border border-orange-500/20">
                      <h4 className="font-bold mb-2">NBMiner</h4>
                      <p className="text-sm text-neutral-400 mb-4">Cross-platform miner for NVIDIA and AMD</p>
                      <div className="space-y-2 text-sm">
                        <div>• NVIDIA & AMD</div>
                        <div>• 2% dev fee</div>
                        <div>• Dual mining</div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                        <a href="https://github.com/NebuTech/NBMiner/releases" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Hardware Tab */}
              <TabsContent value="hardware" className="space-y-8">
                <SectionHeading text="HARDWARE REQUIREMENTS" />

                <div className="grid gap-8">
                  {hardwareRequirements.map((hw, index) => (
                    <div key={index} className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-orange-500/20 rounded-lg border border-orange-500">{hw.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-orange-400">{hw.category}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant="outline">{hw.difficulty}</Badge>
                            <span className="text-sm text-neutral-400">{hw.performance}</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {hw.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-neutral-900/50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Thermometer className="w-4 h-4 text-orange-400" />
                              <span className="font-semibold">Temperature</span>
                            </div>
                            <p className="text-sm text-neutral-400">Keep GPUs under 80°C for optimal performance</p>
                          </div>
                          <div className="p-4 bg-neutral-900/50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="w-4 h-4 text-orange-400" />
                              <span className="font-semibold">Power Efficiency</span>
                            </div>
                            <p className="text-sm text-neutral-400">Monitor power consumption vs. hash rate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* GPU Comparison */}
                <div className="bg-black/80 border border-white/10 rounded-3xl rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-orange-400">GPU Performance Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-orange-500/20">
                          <th className="text-left p-3">GPU Model</th>
                          <th className="text-left p-3">Hash Rate</th>
                          <th className="text-left p-3">Power</th>
                          <th className="text-left p-3">Efficiency</th>
                          <th className="text-left p-3">VRAM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-800">
                          <td className="p-3">RTX 4090</td>
                          <td className="p-3 text-orange-400">250 MH/s</td>
                          <td className="p-3">450W</td>
                          <td className="p-3">0.56 MH/W</td>
                          <td className="p-3">24GB</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="p-3">RTX 4080</td>
                          <td className="p-3 text-orange-400">200 MH/s</td>
                          <td className="p-3">320W</td>
                          <td className="p-3">0.63 MH/W</td>
                          <td className="p-3">16GB</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="p-3">RTX 3080</td>
                          <td className="p-3 text-orange-400">160 MH/s</td>
                          <td className="p-3">320W</td>
                          <td className="p-3">0.50 MH/W</td>
                          <td className="p-3">10GB</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="p-3">RX 6800 XT</td>
                          <td className="p-3 text-orange-400">140 MH/s</td>
                          <td className="p-3">300W</td>
                          <td className="p-3">0.47 MH/W</td>
                          <td className="p-3">16GB</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Mining Pools Tab */}
              <TabsContent value="pools" className="space-y-8">
                <SectionHeading text="MINING POOLS" />

                <Alert className="bg-black/60 border border-white/20 rounded-2xl">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Pool Selection Tips</AlertTitle>
                  <AlertDescription>
                    Choose pools with low latency to your location, reasonable fees, and good uptime. Consider pool size
                    for payout frequency vs. variance.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  {miningPools.map((pool, index) => (
                    <div key={index} className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-orange-400">{pool.name}</h3>
                        <Badge variant={pool.status === "active" ? "default" : "secondary"}>{pool.status}</Badge>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Server:</span>
                          <code className="text-sm bg-neutral-900 px-2 py-1 rounded">{pool.url}</code>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Fee:</span>
                          <span className="text-orange-400">{pool.fee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Min Payout:</span>
                          <span>{pool.minPayout}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {pool.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        asChild
                        size="sm"
                        variant="outline" 
                        className="w-full border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300"
                      >
                        <a href={pool.websiteUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Visit Pool
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Link to full pools list */}
                <div className="mt-8">
                  <div className="bg-gradient-to-r from-orange-500/10 to-orange-900/10 border border-orange-500/30 rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Need more options?</h3>
                    <p className="text-neutral-300 mb-4">
                      Explore the complete mining ecosystem with all pools, software, and monitoring tools
                    </p>
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                      <Link href="/ecosystem/mining">
                        <Globe className="w-4 h-4 mr-2" />
                        View All Mining Resources
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Pool Configuration Example */}
                <div className="bg-black/80 border border-white/10 rounded-3xl rounded-xl p-8 mt-8">
                  <h3 className="text-2xl font-bold mb-6 text-orange-400">Configuration Example</h3>
                  <div className="bg-neutral-900 p-6 rounded-lg border border-orange-500/20">
                    <h4 className="font-semibold mb-4">T-Rex Miner Configuration:</h4>
                    <pre className="text-sm text-green-400 overflow-x-auto">
                      {`t-rex -a autolykos2 \\
  -o stratum+tcp://ergo.herominers.com:1180 \\
  -u YOUR_WALLET_ADDRESS \\
  -w YOUR_WORKER_NAME \\
  --intensity 20`}
                    </pre>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-500/20 rounded-lg">
                    <p className="text-sm text-neutral-300">
                      <AlertTriangle className="w-4 h-4 inline mr-2" />
                      Replace YOUR_WALLET_ADDRESS with your actual Ergo wallet address
                    </p>
                  </div>
                </div>
              </TabsContent>


              {/* Troubleshooting Tab */}
              <TabsContent value="troubleshooting" className="space-y-8">
                <SectionHeading text="TROUBLESHOOTING & TIPS" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-black/80 border border-white/10 rounded-3xl rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-orange-400 flex items-center gap-2">
                      <Wrench className="w-5 h-5" />
                      Common Issues
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-neutral-900/50 rounded-lg">
                        <h4 className="font-semibold mb-2">Low Hash Rate</h4>
                        <ul className="text-sm text-neutral-400 space-y-1">
                          <li>• Check GPU memory temperature</li>
                          <li>• Increase power limit</li>
                          <li>• Update GPU drivers</li>
                          <li>• Adjust memory clock</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-neutral-900/50 rounded-lg">
                        <h4 className="font-semibold mb-2">Connection Issues</h4>
                        <ul className="text-sm text-neutral-400 space-y-1">
                          <li>• Check internet connection</li>
                          <li>• Try different pool server</li>
                          <li>• Verify wallet address</li>
                          <li>• Check firewall settings</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-neutral-900/50 rounded-lg">
                        <h4 className="font-semibold mb-2">High Temperatures</h4>
                        <ul className="text-sm text-neutral-400 space-y-1">
                          <li>• Improve case ventilation</li>
                          <li>• Clean GPU fans</li>
                          <li>• Reduce power limit</li>
                          <li>• Undervolt GPU</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/80 border border-white/10 rounded-3xl rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-orange-400 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Optimization Tips
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-neutral-900/50 rounded-lg">
                        <h4 className="font-semibold mb-2">GPU Tuning</h4>
                        <ul className="text-sm text-neutral-400 space-y-1">
                          <li>• Set memory clock +800-1200</li>
                          <li>• Core clock -200 to -500</li>
                          <li>• Power limit 70-85%</li>
                          <li>• Fan curve for cooling</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-neutral-900/50 rounded-lg">
                        <h4 className="font-semibold mb-2">System Optimization</h4>
                        <ul className="text-sm text-neutral-400 space-y-1">
                          <li>• Use mining OS (HiveOS, SMOS)</li>
                          <li>• Disable Windows updates</li>
                          <li>• Set virtual memory 16GB+</li>
                          <li>• Use PCIe Gen 2 for stability</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-neutral-900/50 rounded-lg">
                        <h4 className="font-semibold mb-2">Monitoring</h4>
                        <ul className="text-sm text-neutral-400 space-y-1">
                          <li>• Use MSI Afterburner</li>
                          <li>• Monitor pool dashboard</li>
                          <li>• Set up alerts</li>
                          <li>• Track profitability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Tips */}
                <div className="bg-black/80 border border-white/10 rounded-3xl rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Security Best Practices
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-neutral-900/50 rounded-lg border border-green-500/20">
                      <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                      <h4 className="font-semibold mb-2">Wallet Security</h4>
                      <ul className="text-sm text-neutral-400 space-y-1">
                        <li>• Use hardware wallet</li>
                        <li>• Backup seed phrase</li>
                        <li>• Verify addresses</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-neutral-900/50 rounded-lg border border-green-500/20">
                      <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                      <h4 className="font-semibold mb-2">Mining Security</h4>
                      <ul className="text-sm text-neutral-400 space-y-1">
                        <li>• Download from official sources</li>
                        <li>• Use antivirus software</li>
                        <li>• Monitor system resources</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-neutral-900/50 rounded-lg border border-green-500/20">
                      <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                      <h4 className="font-semibold mb-2">Network Security</h4>
                      <ul className="text-sm text-neutral-400 space-y-1">
                        <li>• Use VPN if needed</li>
                        <li>• Secure WiFi connection</li>
                        <li>• Regular system updates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Explore More */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Ready to Mine? <span className="text-orange-400">Choose Your Next Step</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/technology"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Technology</h3>
                </div>
                <p className="text-neutral-300">
                  Learn about Ergo's advanced technology, consensus mechanism, and unique features
                </p>
              </Link>
              
              <a 
                href="https://discord.com/invite/ergo-platform-668903786361651200" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Join Mining Community</h3>
                </div>
                <p className="text-neutral-300">
                  Connect with other miners, get support, and share your mining experience
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Email Capture Form */}
        <FinalCTASimple 
          title="Mining Updates & Profitability Alerts"
          description="Get the latest mining updates, profitability alerts, and hardware recommendations delivered to your inbox"
        />

      </div>
    </BackgroundWrapper>
  )
}