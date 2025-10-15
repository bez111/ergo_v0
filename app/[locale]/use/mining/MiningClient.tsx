"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { CyberCard } from "@/components/animations/cyber-card"
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
  Calculator,
  BookOpen,
  Wrench,
  Globe,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const miningPools = [
  {
    name: "Herominers",
    url: "ergo.herominers.com:1180",
    fee: "1%",
    minPayout: "1 ERG",
    features: ["Auto-switching", "Mobile app", "24/7 support"],
    status: "active",
  },
  {
    name: "2Miners",
    url: "ergo.2miners.com:8560",
    fee: "1%",
    minPayout: "0.1 ERG",
    features: ["PPLNS", "Real-time stats", "Telegram bot"],
    status: "active",
  },
  {
    name: "Nanopool",
    url: "ergo-eu1.nanopool.org:11433",
    fee: "1%",
    minPayout: "0.1 ERG",
    features: ["Global servers", "Mobile app", "Email alerts"],
    status: "active",
  },
  {
    name: "Woolypooly",
    url: "ergo.woolypooly.com:3100",
    fee: "0.9%",
    minPayout: "0.1 ERG",
    features: ["Low fees", "MEV rewards", "Dashboard"],
    status: "active",
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
    icon: <Shield className="w-5 h-5" />,
  },
  {
    step: 2,
    title: "Choose Mining Software",
    description: "Select compatible mining software like T-Rex, NBMiner, or TeamRedMiner",
    action: "View Software",
    icon: <Download className="w-5 h-5" />,
  },
  {
    step: 3,
    title: "Select Mining Pool",
    description: "Join a mining pool to get consistent payouts and reduce variance",
    action: "Choose Pool",
    icon: <Users className="w-5 h-5" />,
  },
  {
    step: 4,
    title: "Configure & Start",
    description: "Set up your mining configuration and start earning ERG",
    action: "Start Mining",
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
  const [calculatorValues, setCalculatorValues] = useState({
    hashrate: 100,
    power: 300,
    electricityCost: 0.1,
  })

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background removed to follow /use minimal style */}
      
      <div className="relative z-10">
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Mine Ergo</h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                  Join the decentralized mining network and earn ERG while securing the blockchain.
                </p>
                <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  GPU-friendly Autolykos2 algorithm designed for fair distribution and ASIC resistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                    <Link href="#calculator">Mining Calculator</Link>
                  </Button>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <Card className="bg-neutral-900/50 border border-neutral-700 backdrop-blur-sm p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">Network Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                        <div className="flex items-center gap-3 mb-2">
                          <Activity className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Hashrate</span>
                        </div>
                        <DigitalCounter value={210} suffix=" TH/s" duration={3000} className="text-lg font-mono text-white" />
                      </div>
                      <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Block Time</span>
                        </div>
                        <DigitalCounter value={2} suffix=" min" duration={3000} className="text-lg font-mono text-white" />
                      </div>
                      <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                        <div className="flex items-center gap-3 mb-2">
                          <DollarSign className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Reward</span>
                        </div>
                        <DigitalCounter value={1.2} suffix=" ERG" duration={3000} className="text-lg font-mono text-white" />
                      </div>
                      <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                        <div className="flex items-center gap-3 mb-2">
                          <Users className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Miners</span>
                        </div>
                        <DigitalCounter value={12847} suffix="" duration={3000} className="text-lg font-mono text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-neutral-900 border border-neutral-700 p-1">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200">
                    Overview
                </TabsTrigger>
                  <TabsTrigger
                    value="getting-started"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-black focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200"
                  >
                    Get Started
                  </TabsTrigger>
                  <TabsTrigger value="hardware" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200">
                    Hardware
                  </TabsTrigger>
                  <TabsTrigger value="pools" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200">
                    Pools
                  </TabsTrigger>
                  <TabsTrigger
                    value="calculator"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-black focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200"
                  >
                    Calculator
                  </TabsTrigger>
                  <TabsTrigger
                    value="troubleshooting"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-black focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200"
                  >
                    Help
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                <SectionHeading text="MINING OVERVIEW" />

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
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
                  </Card>

                  <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
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
                  </Card>
                </div>

                {/* Profitability Factors */}
                <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
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
                </Card>
              </TabsContent>

              {/* Getting Started Tab */}
              <TabsContent value="getting-started" className="space-y-8">
                <SectionHeading text="GETTING STARTED" />

                <div className="grid gap-6">
                  {miningSteps.map((step, index) => (
                    <Card key={index} className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
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
                        <Button className="bg-orange-500 hover:bg-orange-500/80 text-black">{step.action}</Button>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Mining Software */}
                <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
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
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download
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
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download
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
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Hardware Tab */}
              <TabsContent value="hardware" className="space-y-8">
                <SectionHeading text="HARDWARE REQUIREMENTS" />

                <div className="grid gap-8">
                  {hardwareRequirements.map((hw, index) => (
                    <Card key={index} className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
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
                    </Card>
                  ))}
                </div>

                {/* GPU Comparison */}
                <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
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
                </Card>
              </TabsContent>

              {/* Mining Pools Tab */}
              <TabsContent value="pools" className="space-y-8">
                <SectionHeading text="MINING POOLS" />

                <Alert className="border-orange-500/20 bg-orange-500/10">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Pool Selection Tips</AlertTitle>
                  <AlertDescription>
                    Choose pools with low latency to your location, reasonable fees, and good uptime. Consider pool size
                    for payout frequency vs. variance.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  {miningPools.map((pool, index) => (
                    <Card key={index} className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
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

                      <Button className="w-full bg-orange-500 hover:bg-orange-500/80 text-black">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Pool
                      </Button>
                    </Card>
                  ))}
                </div>

                {/* Pool Configuration Example */}
                <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
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
                    <p className="text-sm text-yellow-300">
                      <AlertTriangle className="w-4 h-4 inline mr-2" />
                      Replace YOUR_WALLET_ADDRESS with your actual Ergo wallet address
                    </p>
                  </div>
                </Card>
              </TabsContent>

              {/* Calculator Tab */}
              <TabsContent value="calculator" className="space-y-8">
                <SectionHeading text="PROFITABILITY CALCULATOR" />

                <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-orange-400">Mining Parameters</h3>

                      <div>
                        <label className="block text-sm font-medium mb-2">Hash Rate (MH/s)</label>
                        <input
                          type="number"
                          value={calculatorValues.hashrate}
                          onChange={(e) =>
                            setCalculatorValues({ ...calculatorValues, hashrate: Number(e.target.value) })
                          }
                          className="w-full p-3 bg-neutral-900 border border-orange-500/20 rounded-lg text-white"
                          placeholder="100"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Power Consumption (W)</label>
                        <input
                          type="number"
                          value={calculatorValues.power}
                          onChange={(e) => setCalculatorValues({ ...calculatorValues, power: Number(e.target.value) })}
                          className="w-full p-3 bg-neutral-900 border border-orange-500/20 rounded-lg text-white"
                          placeholder="300"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Electricity Cost ($/kWh)</label>
                        <input
                          type="number"
                          step="0.01"
                          value={calculatorValues.electricityCost}
                          onChange={(e) =>
                            setCalculatorValues({ ...calculatorValues, electricityCost: Number(e.target.value) })
                          }
                          className="w-full p-3 bg-neutral-900 border border-orange-500/20 rounded-lg text-white"
                          placeholder="0.10"
                        />
                      </div>

                      <Button className="w-full bg-orange-500 hover:bg-orange-500/80 text-black">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Profitability
                      </Button>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-orange-400">Estimated Earnings</h3>

                      <div className="space-y-4">
                        <div className="p-4 bg-neutral-900/50 rounded-lg border border-orange-500/20">
                          <div className="flex justify-between items-center">
                            <span>Daily ERG:</span>
                            <span className="text-orange-400 font-bold">
                              {(calculatorValues.hashrate * 0.001).toFixed(3)} ERG
                            </span>
                          </div>
                        </div>

                        <div className="p-4 bg-neutral-900/50 rounded-lg border border-orange-500/20">
                          <div className="flex justify-between items-center">
                            <span>Daily Revenue:</span>
                            <span className="text-green-400 font-bold">
                              ${(calculatorValues.hashrate * 0.001 * 2.5).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="p-4 bg-neutral-900/50 rounded-lg border border-orange-500/20">
                          <div className="flex justify-between items-center">
                            <span>Daily Power Cost:</span>
                            <span className="text-red-400 font-bold">
                              ${((calculatorValues.power * 24 * calculatorValues.electricityCost) / 1000).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="p-4 bg-orange-500/20 rounded-lg border border-orange-500">
                          <div className="flex justify-between items-center">
                            <span className="font-bold">Daily Profit:</span>
                            <span className="text-orange-400 font-bold text-lg">
                              $
                              {(
                                calculatorValues.hashrate * 0.001 * 2.5 -
                                (calculatorValues.power * 24 * calculatorValues.electricityCost) / 1000
                              ).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Alert className="border-yellow-500/20 bg-yellow-900/20">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription className="text-yellow-300">
                          Estimates based on current network conditions. Actual results may vary.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Troubleshooting Tab */}
              <TabsContent value="troubleshooting" className="space-y-8">
                <SectionHeading text="TROUBLESHOOTING & TIPS" />

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
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
                  </Card>

                  <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
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
                  </Card>
                </div>

                {/* Security Tips */}
                <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
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
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-12">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Ready to Start Mining?</h2>
              <p className="text-xl text-neutral-300 mb-8">
                Join thousands of miners securing the Ergo network and earning rewards
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-500/80 text-black">
                  <Download className="w-5 h-5 mr-2" />
                  Download Mining Software
                </Button>
                <Button size="lg" variant="outline">
                  <Users className="w-5 h-5 mr-2" />
                  Join Mining Community
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}