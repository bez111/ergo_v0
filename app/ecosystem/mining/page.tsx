"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowUpRight, ChevronRight, Info, ExternalLink, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"

export default function MiningPage() {
  const [hashrate, setHashrate] = useState("")
  const [power, setPower] = useState("")
  const [electricityCost, setElectricityCost] = useState("0.10")
  const [gpuCount, setGpuCount] = useState("1")

  const calculateProfitability = () => {
    if (!hashrate || !power || !electricityCost || !gpuCount) return null

    const totalHashrate = Number.parseFloat(hashrate) * Number.parseInt(gpuCount)
    const totalPower = Number.parseFloat(power) * Number.parseInt(gpuCount)

    // Simplified calculation for Ergo mining
    const ergPerDay = totalHashrate * 0.00042 // Approximate ERG per MH/s per day
    const dailyRevenue = ergPerDay * 3.85 // Assuming 1 ERG = $3.85
    const dailyElectricityCost = (totalPower / 1000) * 24 * Number.parseFloat(electricityCost)
    const dailyProfit = dailyRevenue - dailyElectricityCost

    return {
      ergPerDay: ergPerDay.toFixed(2),
      dailyRevenue: dailyRevenue.toFixed(2),
      dailyElectricityCost: dailyElectricityCost.toFixed(2),
      dailyProfit: dailyProfit.toFixed(2),
      monthlyProfit: (dailyProfit * 30).toFixed(2),
      yearlyProfit: (dailyProfit * 365).toFixed(2),
    }
  }

  const profitability = calculateProfitability()

  // Network stats with animation
  const [networkStats, setNetworkStats] = useState({
    hashrate: "148.23",
    difficulty: "2.89",
    blockReward: "42",
    blockTime: "2",
    hashrateChange: "+5.3%",
    difficultyChange: "+3.1%",
  })

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        {/* Hero Section */}
        <FadeIn>
          <section className="pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-sm">
                    MINING
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block">
                    Mine Ergo
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">Secure the Network • Earn Today</p>
                  <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                    Proof-of-Work keeps Ergo trust-minimised. Add your hash-power, collect block rewards, and underpin the
                    ecosystem.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                      Start Mining Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                    >
                      Why Mine Ergo?
                    </Button>
                  </div>
                </div>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl p-8">
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-[1.1] pb-1">
                        Network Overview
                      </h3>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <div className="text-gray-400">Network Hashrate</div>
                          <div className="text-2xl font-bold">{networkStats.hashrate} TH/s</div>
                          <div className="text-sm text-green-500">▲ {networkStats.hashrateChange} (24h)</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-gray-400">Difficulty</div>
                          <div className="text-2xl font-bold">{networkStats.difficulty} PH</div>
                          <div className="text-sm text-green-500">▲ {networkStats.difficultyChange} (24h)</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-gray-400">Block Reward</div>
                          <div className="text-2xl font-bold">{networkStats.blockReward} ERG</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-gray-400">Avg Block Time</div>
                          <div className="text-2xl font-bold">{networkStats.blockTime} min</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Why Mine Ergo Section */}
        <FadeIn delay={0.2}>
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeading
                text="Why Mine Ergo"
                subtitle="More Than Just Mining"
                description="Ergo mining offers unique advantages beyond simple profit calculations"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Earn ERG",
                    description:
                      "Receive block rewards and transaction fees. ERG fuels Ergo's innovative DeFi ecosystem, NFTs, and DAO tooling.",
                    icon: "💰",
                    color: "from-orange-500/20 to-orange-500/5",
                  },
                  {
                    title: "Network Strength",
                    description:
                      "Every extra hash you contribute raises the cost of 51% attacks, making the Ergo network extremely resilient and ensuring transaction integrity.",
                    icon: "🔒",
                    color: "from-cyan-500/20 to-cyan-500/5",
                  },
                  {
                    title: "Fair Distribution",
                    description:
                      "Ergo launched without an ICO or premine, adhering to true decentralization principles. Mining is the gateway to supply.",
                    icon: "⚖️",
                    color: "from-purple-500/20 to-purple-500/5",
                  },
                  {
                    title: "Autolykos v2 (GPU-friendly)",
                    description:
                      "Memory-hard tweaks keep ASICs at bay. The latest research adds multi-path 'random twists' for enhanced resistance, favoring GPUs over specialized hardware.",
                    icon: "🖥️",
                    color: "from-orange-500/20 to-orange-500/5",
                  },
                  {
                    title: "Storage-Rent Upside",
                    description:
                      "Dormant boxes are recycled, boosting miner income and supporting the network's long-term economic sustainability.",
                    icon: "📦",
                    color: "from-cyan-500/20 to-cyan-500/5",
                  },
                  {
                    title: "Community Governance",
                    description:
                      "Miners have a voice in Ergo's future through on-chain governance mechanisms and community proposals.",
                    icon: "🗣️",
                    color: "from-purple-500/20 to-purple-500/5",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="group"
                  >
                    <Card
                      className={`bg-gradient-to-br ${benefit.color} border-gray-700/50 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-300 h-full`}
                    >
                      <CardContent className="p-8 text-center">
                        <div className="text-3xl mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Getting Started Guide */}
        <FadeIn delay={0.4}>
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeading
                text="Getting Started Guide"
                subtitle="From Rig to First ERG"
                description="Everything you need to begin your mining journey"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent border-orange-500/30 backdrop-blur-xl h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🖥️</span>
                        </div>
                        <CardTitle className="text-2xl font-bold text-orange-400">GPU Mining</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li>Recommendations: Nvidia RTX 30/40 or AMD RX 6000/7000 GPUs</li>
                        <li>VRAM: Minimum 4GB (6GB+ recommended for Autolykos v2)</li>
                        <li>Top performer: CMP 170 HX still tops hashrate charts at ~415 MH/s</li>
                      </ul>
                      <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                        GPU Selection Guide
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-transparent border-cyan-500/30 backdrop-blur-xl h-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">⚡</span>
                        </div>
                        <CardTitle className="text-2xl font-bold text-cyan-400">CPU Mining</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li>CPU, Motherboard, RAM, PSU (Power Supply Unit), Storage (SSD/HDD)</li>
                        <li>Mining Frame or Case with good airflow</li>
                        <li>PCIe Risers for multi-GPU setups</li>
                        <li>Cooling solutions (fans, adequate ventilation)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Autolykos v2 Section */}
        <section className="py-20 px-4 border-b border-orange-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Autolykos v2 in 60 Seconds</h2>
            </div>

            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Memory-Hard — > 4 GB VRAM required.",
                    "Two-Phase Puzzle — generate & sort a 1 GiB mapping, then compute proof.",
                    "ASIC Resistance 2.0 — 2025 tweak introduces four computation paths + mixed-precision maths to widen the gap between GPUs and custom silicon.",
                    "Block time: 2 minutes ± 30 s.",
                    "Difficulty retarget: every block via LWMA.",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="text-orange-500 font-bold">•</div>
                      <div>{point}</div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <Button variant="link" className="text-orange-500">
                    For the math lovers, read the March 2025 design note
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Profitability Calculator */}
        <section className="py-20 px-4 border-b border-orange-500/20" id="calculator">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Profitability Calculator</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Estimate your potential earnings from mining Ergo
              </p>
            </div>

            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium mb-2">GPU Hashrate (MH/s)</label>
                    <Input
                      type="number"
                      placeholder="100"
                      value={hashrate}
                      onChange={(e) => setHashrate(e.target.value)}
                      className="bg-gray-800 border-gray-700"
                    />
                    <div className="text-xs text-gray-400 mt-1">Hashrate per GPU in megahashes per second</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Power Consumption (W)</label>
                    <Input
                      type="number"
                      placeholder="150"
                      value={power}
                      onChange={(e) => setPower(e.target.value)}
                      className="bg-gray-800 border-gray-700"
                    />
                    <div className="text-xs text-gray-400 mt-1">Power usage per GPU in watts</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of GPUs</label>
                    <Input
                      type="number"
                      placeholder="1"
                      value={gpuCount}
                      onChange={(e) => setGpuCount(e.target.value)}
                      className="bg-gray-800 border-gray-700"
                    />
                    <div className="text-xs text-gray-400 mt-1">Total number of GPUs in your setup</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Electricity Cost ($/kWh)</label>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="0.10"
                      value={electricityCost}
                      onChange={(e) => setElectricityCost(e.target.value)}
                      className="bg-gray-800 border-gray-700"
                    />
                    <div className="text-xs text-gray-400 mt-1">Your electricity cost per kilowatt-hour</div>
                  </div>
                </div>

                {profitability ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-sm text-gray-400 mb-1">ERG per Day</div>
                        <div className="text-xl font-bold text-orange-500">{profitability.ergPerDay}</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-sm text-gray-400 mb-1">Daily Revenue</div>
                        <div className="text-xl font-bold text-green-500">${profitability.dailyRevenue}</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-sm text-gray-400 mb-1">Daily Cost</div>
                        <div className="text-xl font-bold text-red-500">${profitability.dailyElectricityCost}</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-sm text-gray-400 mb-1">Daily Profit</div>
                        <div className="text-xl font-bold text-blue-500">${profitability.dailyProfit}</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-sm text-gray-400 mb-1">Monthly Profit</div>
                        <div className="text-xl font-bold text-blue-500">${profitability.monthlyProfit}</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-sm text-gray-400 mb-1">Yearly Profit</div>
                        <div className="text-xl font-bold text-blue-500">${profitability.yearlyProfit}</div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="text-center text-gray-400 py-4">
                    Enter your mining parameters to calculate potential earnings
                  </div>
                )}

                <div className="mt-6 bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-300">
                    <span className="font-medium text-blue-400">Note:</span> Calculations are estimates based on current
                    network difficulty and ERG price ($3.85). Actual earnings may vary due to difficulty changes, price
                    fluctuations, and luck factors.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources & Community */}
        <section className="py-20 px-4 border-b border-orange-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Resources & Community</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with experienced Ergo miners, get assistance with setup, and stay updated with the latest
                developments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Comprehensive Mining Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Everything you need to know about mining Ergo - from hardware selection to optimization techniques.
                  </p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Read the Guide
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Community Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Join thousands of Ergo miners in active communities to share knowledge and get help.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                      Join Discord
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                      Join Reddit
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Additional Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">•</span>
                      <Link href="#" className="hover:text-orange-500 transition-colors">
                        Ergo Mining Blog Posts
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">•</span>
                      <Link href="#" className="hover:text-orange-500 transition-colors">
                        Ergo Mining Wiki
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">•</span>
                      <Link href="#" className="hover:text-orange-500 transition-colors">
                        Autolykos Algorithm Documentation
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">•</span>
                      <Link href="#" className="hover:text-orange-500 transition-colors">
                        WhatToMine Profitability Calculator
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Follow official Ergo channels for information on network upgrades, mining software updates, and other
                  important news that may affect mining.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="text-xl">@ergo_platform</div>
                    <div className="text-gray-400">Official Twitter</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-xl">#announcements</div>
                    <div className="text-gray-400">Discord Channel</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-xl">Ergo Blog</div>
                    <div className="text-gray-400">Official Updates</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm text-gray-400 mb-8">
              Page last updated: June 2, 2025 — Check release notes or suggest edits on GitHub.
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to contribute hash-power?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start mining now and help secure a fair, research-driven financial future.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
              Start Mining Ergo
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
