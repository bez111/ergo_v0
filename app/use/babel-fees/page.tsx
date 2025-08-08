"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Coins,
  ArrowRightLeft,
  Shield,
  Users,
  Zap,
  CheckCircle,
  Info,
  TrendingUp,
  Wallet,
  Network,
  ExternalLink,
  ArrowDown,
  ArrowRight,
} from "lucide-react"

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

export default function BabelFeesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Babel Fees</h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                Pay transaction fees with any token, not just ERG. Revolutionary flexibility for Ergo users.
              </p>
              <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                Babel Fees (EIP-0019) enable seamless fee payments using native tokens, enhancing UX and token utility across the ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-6 py-3 rounded-xl border border-brand-primary-500/50">
                  <Link href="#how-it-works">How It Works</Link>
                </Button>
                <Button asChild variant="outline" className="border-neutral-600 text-neutral-200 hover:bg-neutral-900/40 px-6 py-3 rounded-xl">
                  <Link href="#benefits">Benefits</Link>
                </Button>
              </div>
            </div>
            <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
              <Card className="bg-neutral-900/50 border border-neutral-700 backdrop-blur-sm p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Fee Payment Options</h3>
                  <div className="space-y-4">
                    {[
                      { name: "ERG (Native)", icon: Coins, desc: "Traditional blockchain fees" },
                      { name: "Any Token", icon: ArrowRightLeft, desc: "Pay with project tokens" },
                      { name: "Automatic Exchange", icon: Zap, desc: "Seamless token-to-ERG conversion" },
                    ].map((option) => (
                      <div key={option.name} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-md bg-brand-primary-500/20 border border-brand-primary-500/30 text-brand-primary-400">
                            <option.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{option.name}</h4>
                            <p className="text-sm text-neutral-400">{option.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
            
            {/* Why Fees Are Necessary */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <Shield className="w-6 h-6 text-brand-primary-400" />
                    Why Transaction Fees Matter
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-neutral-300 leading-relaxed">
                    Transaction fees on Ergo serve essential functions in maintaining network health and security.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <Users className="w-8 h-8 text-brand-primary-400 mb-3" />
                      <h4 className="font-semibold mb-2 text-brand-primary-400">Rewarding Miners</h4>
                      <p className="text-sm text-neutral-300">
                        Compensate miners for computational resources and network security.
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <Shield className="w-8 h-8 text-brand-primary-400 mb-3" />
                      <h4 className="font-semibold mb-2 text-brand-primary-400">Preventing Spam</h4>
                      <p className="text-sm text-neutral-300">
                        Make mass spam transactions economically unviable.
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <Network className="w-8 h-8 text-brand-primary-400 mb-3" />
                      <h4 className="font-semibold mb-2 text-brand-primary-400">Network Health</h4>
                      <p className="text-sm text-neutral-300">
                        Maintain functional and sustainable infrastructure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* What Are Babel Fees */}
            <motion.div variants={itemVariants} id="how-it-works">
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <Coins className="w-6 h-6 text-brand-primary-400" />
                    What Are Babel Fees?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-neutral-300 leading-relaxed mb-4">
                      Babel Fees allow users to pay transaction fees using native tokens instead of ERG, 
                      creating a more flexible and user-friendly experience.
                    </p>
                    <Alert className="border-brand-primary-500/30 bg-brand-primary-500/10">
                      <Info className="h-4 w-4 text-brand-primary-400" />
                      <AlertDescription className="text-neutral-300">
                        <strong className="text-white">Key Innovation:</strong> Pay fees with any accepted token while the network still receives ERG through automatic conversion.
                      </AlertDescription>
                    </Alert>
                  </div>
                  
                  {/* Process Flow */}
                  <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4 text-center text-brand-primary-400">How Babel Fees Work</h4>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Wallet className="w-8 h-8 text-brand-primary-400" />
                        </div>
                        <p className="text-sm text-neutral-300">User offers tokens</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-brand-primary-400 hidden md:block" />
                      <ArrowDown className="w-6 h-6 text-brand-primary-400 md:hidden" />
                      <div className="text-center">
                        <div className="w-16 h-16 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Network className="w-8 h-8 text-brand-primary-400" />
                        </div>
                        <p className="text-sm text-neutral-300">Intermediary converts</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-brand-primary-400 hidden md:block" />
                      <ArrowDown className="w-6 h-6 text-brand-primary-400 md:hidden" />
                      <div className="text-center">
                        <div className="w-16 h-16 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Coins className="w-8 h-8 text-brand-primary-400" />
                        </div>
                        <p className="text-sm text-neutral-300">ERG fee paid</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={itemVariants} id="benefits">
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <TrendingUp className="w-6 h-6 text-brand-primary-400" />
                    Benefits of Babel Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-brand-primary-400 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        For Users
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Convenience:</strong> Pay with tokens you already own
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Reduced Friction:</strong> Seamless dApp interactions
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-brand-primary-400 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        For Developers
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Token Utility:</strong> Enhanced token value proposition
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Better UX:</strong> Improved user experience
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-brand-primary-400 flex items-center gap-2">
                        <Network className="w-5 h-5" />
                        For Ecosystem
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                          <div>More versatile platform</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                          <div>Active token economy</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Comparison */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">ERG vs Babel Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 text-brand-primary-400 flex items-center gap-2">
                        <Coins className="w-5 h-5" />
                        ERG Fees (Traditional)
                      </h4>
                      <ul className="space-y-3 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ✓
                          </Badge>
                          <span>Always accepted</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ✓
                          </Badge>
                          <span>Most reliable method</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ✓
                          </Badge>
                          <span>Universal wallet support</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 text-brand-primary-400 flex items-center gap-2">
                        <ArrowRightLeft className="w-5 h-5" />
                        Babel Fees (Flexible)
                      </h4>
                      <ul className="space-y-3 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ⚡
                          </Badge>
                          <span>Enhanced flexibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ⚡
                          </Badge>
                          <span>Token-dependent availability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ⚡
                          </Badge>
                          <span>Market-driven rates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Use Babel Fees?</h2>
            <p className="text-xl text-neutral-300 mb-8">
              Experience the flexibility of paying transaction fees with any token
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold">
                <Link href="/use/get-erg">
                  <Wallet className="w-5 h-5 mr-2" />
                  Get Compatible Wallet
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60">
                <Link href="https://github.com/ergoplatform/eips/blob/master/eip-0019.md" target="_blank">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Read EIP-0019
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
