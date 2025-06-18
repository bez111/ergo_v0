"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Database,
  Recycle,
  TrendingUp,
  Clock,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  Zap,
  Shield,
  Coins,
  Timer,
  BarChart3,
  RefreshCw,
  Target,
} from "lucide-react"
import { GlitchText } from "@/components/animations/glitch-text"
import { Play } from "lucide-react"
import { useState } from "react"

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

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    rotateY: 5,
    transition: { duration: 0.3 },
  },
}

export default function StorageRentPage() {
  const [activeTimeline, setActiveTimeline] = useState(0)

  const problems = [
    {
      title: "Blockchain Bloat",
      description:
        "Traditional blockchains accumulate unused data over time, leading to inefficiency and higher costs.",
      icon: <Database className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      stats: "2TB+ wasted space",
    },
    {
      title: "Forgotten Wallets",
      description: "Lost private keys mean funds are stuck forever, reducing the effective money supply.",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      stats: "4M+ lost coins",
    },
    {
      title: "Network Stagnation",
      description: "Accumulated dust and inactive data slow down the network and increase storage requirements.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      stats: "50% slower sync",
    },
  ]

  const benefits = [
    { text: "The blockchain stays clean, compact, and fast", icon: <Zap className="w-5 h-5" /> },
    { text: "Miners are rewarded for maintaining real, active data", icon: <Coins className="w-5 h-5" /> },
    { text: "Network remains healthy — even decades from now", icon: <Shield className="w-5 h-5" /> },
    { text: "No forgotten wallets with permanently locked funds", icon: <RefreshCw className="w-5 h-5" /> },
    { text: "Predictable, transparent storage costs", icon: <BarChart3 className="w-5 h-5" /> },
    { text: "Automatic fee recycling keeps the economy flowing", icon: <Target className="w-5 h-5" /> },
  ]

  const timeline = [
    {
      year: "Year 0-4",
      status: "Free Storage",
      description: "Your UTXO (box) is stored for free on the blockchain",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      icon: <Shield className="w-6 h-6" />,
      details: "No fees, full access to your funds",
    },
    {
      year: "Year 4+",
      status: "Storage Rent Begins",
      description: "Small rent fee is deducted from the box value",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      icon: <Timer className="w-6 h-6" />,
      details: "~0.13 ERG per 4 years per box",
    },
    {
      year: "Owner Returns",
      status: "Rent Top-Up",
      description: "Owner can pay rent and regain full access to funds",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      icon: <RefreshCw className="w-6 h-6" />,
      details: "Pay accumulated rent to restore full control",
    },
    {
      year: "Box Depleted",
      status: "Recycled to Miners",
      description: "If rent isn't paid, remaining value goes to miners",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      icon: <Recycle className="w-6 h-6" />,
      details: "Funds return to active circulation",
    },
  ]

  const solutions = [
    {
      title: "Automatic Fee Recycling",
      description: "If coins are left untouched for years, a small fee is recycled back to miners.",
      icon: <Recycle className="w-12 h-12" />,
      color: "text-orange-400",
      gradient: "from-orange-500/20 to-orange-500/5",
    },
    {
      title: "No Forgotten Wallets",
      description: "If you lose your keys, your funds aren't stuck forever in the system.",
      icon: <Clock className="w-12 h-12" />,
      color: "text-cyan-400",
      gradient: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      title: "Predictable Costs",
      description: "Users pay a small, transparent fee for long-term data storage.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "text-green-400",
      gradient: "from-green-500/20 to-green-500/5",
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Animated Background (as in eutxo-model) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-cyan-500/10" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION — NIPoPoWs STYLE, NO ANIMATION */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-sm">
                  SUSTAINABILITY
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                  Storage Rent
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                  Sustainable Blockchain Economics for Ergo
                </p>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  While other blockchains bloat with forgotten data, Ergo stays lean, efficient, and sustainable through intelligent storage rent mechanics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                  >
                    Technical Docs
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                      Smart Economics
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-orange-400">4 Years</div>
                        <div className="text-sm text-gray-400">Free Storage</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">0.13 ERG</div>
                        <div className="text-sm text-gray-400">Rent per Box</div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-8">
                      <Recycle className="w-16 h-16 text-orange-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section - Enhanced */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  The Problem
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Traditional blockchains face critical sustainability challenges that threaten their long-term viability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className="group cursor-pointer"
                >
                  <Card
                    className={`${problem.bgColor} ${problem.borderColor} border-2 hover:border-opacity-70 transition-all duration-500 h-full rounded-2xl overflow-hidden`}
                  >
                    <CardContent className="p-8 relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full transform translate-x-8 -translate-y-8" />

                      <div
                        className={`p-4 bg-gradient-to-r ${problem.color} bg-opacity-20 rounded-2xl text-white w-fit mb-6`}
                      >
                        {problem.icon}
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {problem.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed mb-4">{problem.description}</p>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-red-400 border-red-400/50">
                          {problem.stats}
                        </Badge>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section - Redesigned */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Ergo's Solution
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary storage rent mechanics that keep the blockchain healthy and sustainable
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={solution.title}
                  className="group cursor-pointer"
                >
                  <Card
                    className={`bg-gradient-to-br ${solution.gradient} border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full rounded-2xl overflow-hidden`}
                  >
                    <CardContent className="p-8 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div
                        className={`${solution.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {solution.icon}
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{solution.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-cyan-400">How Storage Rent Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow the lifecycle of a UTXO through Ergo's storage rent system
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-cyan-500 rounded-full" />

              <div className="space-y-16">
                {timeline.map((phase, index) => (
                  <div
                    key={phase.year}
                    className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className="flex-1 px-8">
                      <Card
                        className={`${phase.bgColor} border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 rounded-2xl`}
                      >
                        <CardContent className="p-8">
                          <div className="flex items-center mb-4">
                            <div className={`p-3 ${phase.bgColor} rounded-xl ${phase.color} mr-4`}>{phase.icon}</div>
                            <div>
                              <h3 className={`text-2xl font-bold ${phase.color}`}>{phase.status}</h3>
                              <p className="text-gray-400 font-medium">{phase.year}</p>
                            </div>
                          </div>
                          <p className="text-gray-300 text-lg mb-3">{phase.description}</p>
                          <p className="text-gray-400 text-sm">{phase.details}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Node */}
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500 border-4 border-black z-10`}
                    />

                    <div className="flex-1 px-8" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-orange-400">Why Storage Rent Matters</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The benefits extend far beyond just cleaning up the blockchain
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                >
                  <Card className="bg-gray-900/50 border-gray-700/50 hover:border-green-500/50 transition-all duration-300 rounded-xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
                          {benefit.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                          {benefit.text}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-cyan-500/10 border border-orange-500/30 rounded-3xl overflow-hidden">
              <CardContent className="p-16 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-cyan-500/5" />
                <div className="relative z-10">
                  <h2 className="text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                      The Future is Sustainable
                    </span>
                  </h2>
                  <p className="text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                    No bloat, no dead coins, no garbage. Storage Rent ensures Ergo remains efficient and sustainable
                    for decades to come.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                      <ArrowRight className="mr-3 w-6 h-6" />
                      Start Building on Ergo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                    >
                      <ExternalLink className="mr-3 w-6 h-6" />
                      Read Technical Docs
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
