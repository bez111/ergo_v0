"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Box, Users, ArrowRight, CheckCircle, X } from "lucide-react"

export function BlockchainComparisonDiagram() {
  return (
    <Card className="bg-black border border-white/10 rounded-3xl overflow-hidden">
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white mb-6">
          Blockchain Models Comparison
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bitcoin UTXO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-black border border-yellow-500/30 rounded-2xl p-6 mb-4">
              <Database className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-yellow-400 font-bold text-lg mb-2">Bitcoin UTXO</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Simple & Secure</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="text-gray-300">Limited Scripts</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400">Unspent Transaction Outputs</p>
          </motion.div>

          {/* Ergo eUTXO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-black border border-orange-500/30 rounded-2xl p-6 mb-4">
              <Box className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h4 className="text-orange-400 font-bold text-lg mb-2">Ergo eUTXO</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">UTXO Security</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Smart Contracts</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Registers R0-R9</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400">Extended UTXO with Registers</p>
          </motion.div>

          {/* Ethereum Account */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-black border border-blue-500/30 rounded-2xl p-6 mb-4">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-blue-400 font-bold text-lg mb-2">Ethereum Account</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Rich Ecosystem</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="text-gray-300">Global State</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="text-gray-300">Side Effects</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400">Account Balances + EVM</p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <div className="bg-black border border-orange-500/30 rounded-xl p-4">
            <div className="flex items-center gap-3 text-orange-400">
              <ArrowRight className="w-5 h-5" />
              <span className="font-medium text-center">Ergo combines Bitcoin security with Ethereum programmability</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function SigmaProtocolsDiagram() {
  return (
    <Card className="bg-black border border-white/10 rounded-3xl overflow-hidden">
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white mb-6">
          Sigma Protocols: Zero-Knowledge Privacy
        </h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-black border border-red-500/30 rounded-2xl p-6 mb-4">
              <div className="w-16 h-16 bg-black border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-400 font-bold text-lg">?</span>
              </div>
              <h4 className="text-red-400 font-bold">Private Input</h4>
              <p className="text-gray-300 text-sm mt-2">Secret information you want to keep private</p>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="flex items-center">
            <ArrowRight className="w-8 h-8 text-orange-400" />
          </div>

          {/* Sigma Protocol */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-black border border-orange-500/30 rounded-2xl p-6 mb-4">
              <div className="w-16 h-16 bg-black border border-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-400 font-bold text-lg">Σ</span>
              </div>
              <h4 className="text-orange-400 font-bold">Sigma Protocol</h4>
              <p className="text-gray-300 text-sm mt-2">Zero-knowledge proof generation</p>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="flex items-center">
            <ArrowRight className="w-8 h-8 text-orange-400" />
          </div>

          {/* Output */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-black border border-green-500/30 rounded-2xl p-6 mb-4">
              <div className="w-16 h-16 bg-black border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-green-400 font-bold">Public Proof</h4>
              <p className="text-gray-300 text-sm mt-2">Verifiable without revealing secrets</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <div className="bg-black border border-purple-500/30 rounded-xl p-4">
            <p className="text-purple-100 text-sm">
              <strong className="text-purple-400">Selective Disclosure:</strong> Choose what to reveal and what to keep private
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function EcosystemShowcase() {
  const projects = [
    { name: "Spectrum", type: "DEX", color: "bg-blue-500", icon: "💱" },
    { name: "SigmaUSD", type: "Stablecoin", color: "bg-green-500", icon: "💰" },
    { name: "Paideia", type: "DAO", color: "bg-purple-500", icon: "🏛️" },
    { name: "ErgoMixer", type: "Privacy", color: "bg-gray-500", icon: "🔒" },
    { name: "Auction House", type: "NFT", color: "bg-pink-500", icon: "🎨" },
    { name: "DuckPools", type: "Lending", color: "bg-yellow-500", icon: "🏦" }
  ]

  return (
    <Card className="bg-black border border-white/10 rounded-3xl overflow-hidden">
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white mb-6 text-center">
          Ergo Ecosystem at a Glance
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-neutral-800 border border-white/10 rounded-2xl p-4 hover:border-orange-400/40 transition-colors">
                <div className="text-2xl mb-2">{project.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-1">{project.name}</h4>
                <span className="text-xs text-gray-400 px-2 py-1 bg-orange-500/20 rounded-full">
                  {project.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            All powered by eUTXO smart contracts and Sigma protocols
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
