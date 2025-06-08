"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowUpRight, ChevronRight, Info, ExternalLink, AlertTriangle } from "lucide-react"
import Link from "next/link"

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
      {/* Binary Rain Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-orange-500 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 border-b border-orange-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1
                  className="text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-orange-500">SECURE THE NETWORK</span>
                </motion.h1>
                <motion.h2
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Mine Ergo • Secure the Future • Earn Today
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Proof-of-Work keeps Ergo trust-minimised. Add your hash-power, collect block rewards, and underpin the
                  ecosystem.
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                    ⛏️ Start Mining Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500/10"
                  >
                    💡 Why Mine Ergo?
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500/10"
                  >
                    ⚙️ Profitability Calculator
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="bg-gray-900/70 border-orange-500/30 overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl">Network Overview</CardTitle>
                    <CardDescription>Real-time mining statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
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

        {/* Why Mine Ergo Section */}
        <section className="py-20 px-4 border-b border-orange-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Mine Ergo: More Than Just Mining</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ergo mining offers unique advantages beyond simple profit calculations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Earn ERG",
                  description:
                    "Receive block rewards and transaction fees. ERG fuels Ergo's innovative DeFi ecosystem, NFTs, and DAO tooling.",
                  icon: "💰",
                },
                {
                  title: "Network Strength",
                  description:
                    "Every extra hash you contribute raises the cost of 51% attacks, making the Ergo network extremely resilient and ensuring transaction integrity.",
                  icon: "🔒",
                },
                {
                  title: "Fair Distribution",
                  description:
                    "Ergo launched without an ICO or premine, adhering to true decentralization principles. Mining is the gateway to supply.",
                  icon: "⚖️",
                },
                {
                  title: "Autolykos v2 (GPU-friendly)",
                  description:
                    "Memory-hard tweaks keep ASICs at bay. The latest research adds multi-path 'random twists' for enhanced resistance, favoring GPUs over specialized hardware.",
                  icon: "🖥️",
                },
                {
                  title: "Storage-Rent Upside",
                  description:
                    "Dormant boxes are recycled, boosting miner income and supporting the network's long-term economic sustainability.",
                  icon: "📦",
                },
                {
                  title: "Community Governance",
                  description:
                    "Miners have a voice in Ergo's future through on-chain governance mechanisms and community proposals.",
                  icon: "🗣️",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-orange-500/20 h-full hover:border-orange-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="text-3xl mb-2">{benefit.icon}</div>
                      <CardTitle>{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Guide */}
        <section className="py-20 px-4 border-b border-orange-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">From Rig to First ERG: Getting Started Guide</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to begin your mining journey
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Card className="bg-gray-900/50 border-orange-500/20 mb-8">
                  <CardHeader>
                    <CardTitle>GPU (Graphics Cards):</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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

                <Card className="bg-gray-900/50 border-orange-500/20">
                  <CardHeader>
                    <CardTitle>Other Hardware:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      <li>CPU, Motherboard, RAM, PSU (Power Supply Unit), Storage (SSD/HDD)</li>
                      <li>Mining Frame or Case with good airflow</li>
                      <li>PCIe Risers for multi-GPU setups</li>
                      <li>Cooling solutions (fans, adequate ventilation)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-gray-900/50 border-orange-500/20 h-full">
                  <CardHeader>
                    <CardTitle>Optimize & Save Watts: Efficiency Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-orange-500/20">
                        <AccordionTrigger className="hover:text-orange-500">Overclock / Undervolt</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Tune core and memory frequencies to achieve the best hashrate per watt ratio.
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                            <li>Tools: MSI Afterburner, AMD Radeon Software, specific Linux tools.</li>
                            <li>Start with conservative settings and test stability before pushing limits.</li>
                            <li>
                              Memory overclocks typically yield better results than core overclocks for Autolykos v2.
                            </li>
                          </ul>
                          <Button size="sm" variant="link" className="text-orange-500 p-0 h-auto mt-2">
                            Learn more
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-orange-500/20">
                        <AccordionTrigger className="hover:text-orange-500">Cooling Solutions</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">Keep GPUs under 65°C for optimal performance and hardware longevity.</p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                            <li>Ensure proper airflow in your mining rig or case.</li>
                            <li>Clean dust from fans and heatsinks monthly.</li>
                            <li>Consider additional cooling fans for multi-GPU setups.</li>
                          </ul>
                          <Button size="sm" variant="link" className="text-orange-500 p-0 h-auto mt-2">
                            Learn more
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-orange-500/20">
                        <AccordionTrigger className="hover:text-orange-500">Driver Versions</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">Latest Studio or PRO drivers often yield +3% hash improvement.</p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                            <li>Test different driver versions to find the optimal one for your GPU model.</li>
                            <li>Some older cards may perform better with specific legacy driver versions.</li>
                            <li>Linux drivers often provide better mining performance than Windows.</li>
                          </ul>
                          <Button size="sm" variant="link" className="text-orange-500 p-0 h-auto mt-2">
                            Learn more
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4" className="border-orange-500/20">
                        <AccordionTrigger className="hover:text-orange-500">Software Updates</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">Miner releases frequently add +5-10% efficiency improvements.</p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                            <li>lolMiner v2.05 added mixed-precision Autolykos improvements.</li>
                            <li>Check for updates regularly on GitHub repositories.</li>
                            <li>Test new versions on a single GPU before updating your entire farm.</li>
                          </ul>
                          <Button size="sm" variant="link" className="text-orange-500 p-0 h-auto mt-2">
                            Learn more
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-yellow-500 font-medium">Warning</div>
                        <div className="text-sm text-gray-300">
                          Over-tuning can brick cards. Test incrementally and monitor temperatures.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

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
                    <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4]">
                      Join Discord
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button className="w-full bg-[#FF4500] hover:bg-[#E03D00]">
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
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Start Mining Ergo
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
