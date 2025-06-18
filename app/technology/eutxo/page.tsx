"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { Layers, ArrowRight, Link as LinkIcon, Code, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function EUTXOPage() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90 z-0" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-red-900/10 z-0" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <FadeIn>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block text-center">
                  eUTXO MODEL
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Next-generation Unspent Transaction Output model for parallel smart contracts and composable DeFi
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn>
              <Card className="bg-gradient-to-br from-orange-400/20 to-orange-400/5 border-gray-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                    What is eUTXO?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The Extended Unspent Transaction Output (eUTXO) model is an evolution of Bitcoin's UTXO model, 
                    enhanced with smart contract capabilities while maintaining the security and simplicity of the original design.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Unlike account-based models (like Ethereum), eUTXO enables parallel transaction processing, 
                    eliminates double-spending at the protocol level, and provides a more predictable fee structure.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn>
              <Card className="bg-gradient-to-br from-orange-400/20 to-orange-400/5 border-gray-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Parallel Processing</h4>
                        <p className="text-gray-400 text-sm">Multiple transactions can be processed simultaneously</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Enhanced Security</h4>
                        <p className="text-gray-400 text-sm">No global state means fewer attack vectors</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Code className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Smart Contract Support</h4>
                        <p className="text-gray-400 text-sm">Full programmability with predictable execution</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Technical Details */}
          <FadeIn>
            <Card className="bg-gradient-to-br from-orange-400/20 to-orange-400/5 border-gray-700/50 backdrop-blur-xl mb-16">
              <CardHeader>
                <CardTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Technical Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-xl font-semibold text-white mb-4">How eUTXO Works</h3>
                  <p className="text-gray-300 mb-4">
                    In the eUTXO model, each transaction output can contain:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                    <li>Value (amount of ERG)</li>
                    <li>Guard script (spending conditions)</li>
                    <li>Additional data (for smart contracts)</li>
                    <li>Custom tokens and NFTs</li>
                  </ul>
                  <p className="text-gray-300">
                    This structure allows for complex smart contracts while maintaining the security and 
                    predictability of the UTXO model. Each output is self-contained and can be processed 
                    independently, enabling true parallel execution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Resources */}
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Learn More About eUTXO
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/docs/eutxo">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                    Read Documentation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="https://github.com/ergoplatform/ergo" target="_blank">
                  <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm">
                    View on GitHub
                    <LinkIcon className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
} 