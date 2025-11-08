"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Coins, RefreshCw, TrendingUp } from "lucide-react"

export function StorageRentTimeline() {
  const phases = [
    {
      phase: "Years 1-4",
      title: "Active Period",
      description: "No storage rent fees",
      icon: Clock,
      color: "text-green-400",
      border: "border-green-500/30"
    },
    {
      phase: "Year 4+",
      title: "Storage Rent",
      description: "Small fees on dormant UTXOs",
      icon: Coins,
      color: "text-yellow-400", 
      border: "border-yellow-500/30"
    },
    {
      phase: "Recycling",
      title: "Miner Rewards",
      description: "Lost ERG funds miners",
      icon: RefreshCw,
      color: "text-orange-400",
      border: "border-orange-500/30"
    }
  ]

  return (
    <Card className="bg-black border border-white/10 rounded-3xl overflow-hidden">
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white mb-6">
          Storage Rent: Sustainable Blockchain Economics
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className={`bg-black ${phase.border} border rounded-2xl p-6 mb-4`}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-black border border-white/20 rounded-full flex items-center justify-center">
                    <phase.icon className={`w-8 h-8 ${phase.color}`} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className={`text-xs font-bold ${phase.color} mb-1`}>
                    {phase.phase}
                  </div>
                  <h4 className="text-white font-bold text-lg">{phase.title}</h4>
                </div>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits Legend */}
        <div className="mt-4 mb-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span className="text-sm text-neutral-300">Prevents blockchain bloat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-neutral-300">Funds network security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
              <span className="text-sm text-neutral-300">Predictable costs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              <span className="text-sm text-neutral-300">Long-term sustainability</span>
            </div>
          </div>
          <p className="text-xs text-neutral-400 text-center mt-4">
            Storage rent mechanism ensures blockchain sustainability through predictable economics and state management.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export function FairLaunchComparison() {
  const launches = [
    {
      type: "ICO Projects",
      description: "Pre-sale to VCs and insiders",
      icon: "❌",
      color: "text-red-400",
      examples: "Most altcoins, Ethereum"
    },
    {
      type: "VC-Backed",
      description: "Private funding rounds",
      icon: "❌", 
      color: "text-red-400",
      examples: "Solana, Avalanche"
    },
    {
      type: "Fair Launch",
      description: "Mining only, no pre-mine",
      icon: "✅",
      color: "text-green-400", 
      examples: "Bitcoin, Ergo"
    }
  ]

  return (
    <Card className="bg-black border border-white/10 rounded-3xl overflow-hidden">
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white mb-6 text-center">
          Launch Mechanisms: Fair vs Unfair
        </h3>
        
        <div className="grid gap-4">
          {launches.map((launch, index) => (
            <motion.div
              key={launch.type}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-neutral-900/50 border border-white/10 rounded-xl"
            >
              <div className="text-2xl">{launch.icon}</div>
              <div className="flex-1">
                <h4 className={`font-semibold ${launch.color} mb-1`}>
                  {launch.type}
                </h4>
                <p className="text-gray-300 text-sm mb-1">{launch.description}</p>
                <p className="text-gray-500 text-xs">{launch.examples}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-orange-300 font-medium">
            Ergo chose the fair launch path - no ICO, no pre-mine, just pure Proof-of-Work
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
