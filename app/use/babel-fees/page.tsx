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
                  <Link href="https://github.com/ergoplatform/eips/blob/master/eip-0019.md" target="_blank">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    EIP-0019
                  </Link>
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
                    Why Are Transaction Fees Necessary on Ergo?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-neutral-300 leading-relaxed">
                    Like most blockchains, transaction fees on Ergo play a crucial role. They are needed for:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <Users className="w-8 h-8 text-brand-primary-400 mb-3" />
                      <h4 className="font-semibold mb-2 text-brand-primary-400">Rewarding Miners</h4>
                      <p className="text-sm text-neutral-300">
                        Miners expend computational resources to process transactions and secure the network. Fees are part of their compensation.
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <Shield className="w-8 h-8 text-brand-primary-400 mb-3" />
                      <h4 className="font-semibold mb-2 text-brand-primary-400">Preventing Spam</h4>
                      <p className="text-sm text-neutral-300">
                        Fees make sending mass volumes of useless transactions economically unviable, protecting the network from congestion.
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <Network className="w-8 h-8 text-brand-primary-400 mb-3" />
                      <h4 className="font-semibold mb-2 text-brand-primary-400">Network Operation</h4>
                      <p className="text-sm text-neutral-300">
                        They contribute to maintaining a healthy and functional infrastructure.
                      </p>
                    </div>
                  </div>
                  <Alert className="border-brand-primary-500/30 bg-brand-primary-500/10">
                    <Info className="h-4 w-4 text-brand-primary-400" />
                    <AlertDescription className="text-neutral-300">
                      <strong className="text-white">Standard Payment in ERG:</strong> Typically, transaction fees on the Ergo network are paid in the platform's native coin – ERG. The fee amount depends on the transaction's "size" in bytes and current network congestion, but generally, Ergo fees aim to be predictable thanks to the eUTXO model.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </motion.div>

            {/* What Are Babel Fees */}
            <motion.div variants={itemVariants} id="how-it-works">
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <Coins className="w-6 h-6 text-brand-primary-400" />
                    Introducing Babel Fees (EIP-0019): Flexible Fee Payments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-brand-primary-400">What are Babel Fees?</h4>
                    <p className="text-neutral-300 leading-relaxed">
                      Babel Fees are an innovative mechanism on Ergo that allows users to pay transaction fees using{" "}
                      <strong className="text-brand-primary-400">
                        native tokens issued on the Ergo blockchain instead of ERG.
                      </strong>{" "}
                      Imagine being able to pay for postage not just with cash (ERG), but also with valuable collectible stamps (your tokens).
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-brand-primary-400">
                      Why were Babel Fees created? (The Problem Solved)
                    </h4>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-brand-primary-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-brand-primary-400">Improved User Experience (UX):</strong>
                          <p className="text-neutral-300 mt-1">
                            Users holding specific tokens (e.g., tokens of a particular dApp) might not always have enough ERG readily available to pay fees. This creates friction and barriers.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-brand-primary-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-brand-primary-400">Increased Token Utility:</strong>
                          <p className="text-neutral-300 mt-1">
                            Babel Fees significantly enhance the utility of native Ergo tokens, as they can be used for a fundamental network operation – paying fees.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-brand-primary-400 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-brand-primary-400">dApp Accessibility:</strong>
                          <p className="text-neutral-300 mt-1">
                            Simplifies interaction with decentralized applications that heavily utilize their own native tokens.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* How Babel Fees Work */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <ArrowRightLeft className="w-6 h-6 text-brand-primary-400" />
                    How Babel Fees Work (Simplified Explanation)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-neutral-300 leading-relaxed">
                    The Babel Fees mechanism is quite elegant and doesn't require changes to the core protocol regarding how fees are ultimately received (the network still receives fees in ERG).
                  </p>
                  
                  {/* Process Flow */}
                  <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4 text-center text-brand-primary-400">Babel Fee Process Flow</h4>
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
                        <p className="text-sm text-neutral-300">Intermediary detects</p>
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

                  <div className="space-y-6">
                    <div className="border-l-4 border-brand-primary-500 pl-4">
                      <h4 className="text-lg font-semibold mb-2 text-brand-primary-400">User's Offer</h4>
                      <p className="text-neutral-300">
                        A user wishing to pay a fee with tokens creates a special "output" in their transaction, often referred to as a "Babel fee box." In this box, they offer a certain amount of their tokens in exchange for someone else covering their ERG fee.
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-primary-500 pl-4">
                      <h4 className="text-lg font-semibold mb-3 text-brand-primary-400">
                        Role of Intermediaries (Miners, Bots, Services)
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-neutral-900/60 border border-neutral-700 p-3 rounded">
                          <strong className="text-brand-primary-400">1. Detecting the Offer:</strong>
                          <p className="text-neutral-300 mt-1">
                            Miners or specialized bots/services (intermediaries) scan the network for these "Babel fee boxes."
                          </p>
                        </div>
                        <div className="bg-neutral-900/60 border border-neutral-700 p-3 rounded">
                          <strong className="text-brand-primary-400">2. Executing the Exchange:</strong>
                          <p className="text-neutral-300 mt-1">
                            If the token offer is profitable (i.e., the market value of the offered tokens is greater than or equal to the ERG fee amount plus a small profit for the intermediary), the intermediary "fulfills" this offer.
                          </p>
                        </div>
                        <div className="bg-neutral-900/60 border border-neutral-700 p-3 rounded">
                          <strong className="text-brand-primary-400">3. Paying the ERG Fee:</strong>
                          <p className="text-neutral-300 mt-1">
                            The intermediary takes the offered tokens from the "Babel fee box" and pays the required transaction fee in ERG to the miners who include the transaction in a block.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-brand-primary-500 pl-4">
                      <h4 className="text-lg font-semibold mb-2 text-brand-primary-400">Market Mechanism</h4>
                      <p className="text-neutral-300">
                        The effectiveness of Babel Fees for a specific token depends on a "market" existing for it – meaning there must be intermediaries willing to accept these tokens in exchange for ERG at a certain rate. The more popular a token, the higher the likelihood it will be accepted for fee payment.
                      </p>
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
                            <strong className="text-white">Convenience:</strong> Ability to pay fees with tokens you already own, without needing to first exchange them for ERG.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Reduced Friction:</strong> Simplifies the use of dApps that are centered around their own tokens.
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-brand-primary-400 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        For Token Issuers / dApp Developers
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Increased Token Utility:</strong> Makes their tokens more in-demand and integrated into the ecosystem.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Improved UX:</strong> Better experience for their application users.
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-brand-primary-400 flex items-center gap-2">
                        <Network className="w-5 h-5" />
                        For the Ergo Ecosystem
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                          <div>A more user-friendly and versatile platform.</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                          <div>Stimulation of an active token economy.</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Practical Considerations */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <Wallet className="w-6 h-6 text-brand-primary-400" />
                    Practical Considerations for Users
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="font-semibold mb-2 text-brand-primary-400 flex items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        Wallet Support
                      </h4>
                      <p className="text-sm text-neutral-300">
                        Find out which Ergo wallets (e.g., Nautilus Wallet or others) and dApps support the creation of transactions using Babel Fees. This feature may not be available in all wallets.
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="font-semibold mb-2 text-brand-primary-400 flex items-center gap-2">
                        <Coins className="w-4 h-4" />
                        Token Acceptance
                      </h4>
                      <p className="text-sm text-neutral-300">
                        Not all tokens may be automatically accepted. This depends on intermediaries being willing to exchange them for ERG.
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="font-semibold mb-2 text-brand-primary-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Exchange Rates
                      </h4>
                      <p className="text-sm text-neutral-300">
                        The "price" or exchange rate at which your tokens are accepted to cover ERG fees will be determined by market conditions and intermediary offers.
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="font-semibold mb-2 text-brand-primary-400 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        How to Use
                      </h4>
                      <p className="text-sm text-neutral-300">
                        When constructing a transaction in a compatible wallet or dApp, you might see an option to select a token to pay the fee. The interface will typically show the required amount of tokens based on current market rates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Current Status */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <Zap className="w-6 h-6 text-brand-primary-400" />
                    Current Status & Future Development of Babel Fees
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-yellow-500/30 bg-yellow-500/10">
                    <Info className="h-4 w-4 text-yellow-400" />
                    <AlertDescription className="text-neutral-300">
                      <strong className="text-white">Important:</strong> This section reflects the current implementation status of Babel Fees. The adoption and availability may vary depending on wallet support and intermediary participation.
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-4">
                    <p className="text-neutral-300">Key questions about current adoption:</p>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-start gap-3 p-3 bg-neutral-900/60 border border-neutral-700 rounded">
                        <div className="w-2 h-2 bg-brand-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-neutral-300">
                          How widely are Babel Fees currently adopted by miners/intermediaries?
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-neutral-900/60 border border-neutral-700 rounded">
                        <div className="w-2 h-2 bg-brand-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-neutral-300">
                          Are there active and liquid "markets" for many tokens to be used for Babel Fees?
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-neutral-900/60 border border-neutral-700 rounded">
                        <div className="w-2 h-2 bg-brand-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-neutral-300">
                          Is there ongoing work to improve or expand the Babel Fees mechanism?
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="border-brand-primary-500/50 hover:bg-brand-primary-500/10 text-brand-primary-400">
                    <Link href="https://github.com/ergoplatform/eips/blob/master/eip-0019.md" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Check Latest Updates on EIP-0019
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Comparison */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Comparison: ERG Fees vs. Babel Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 text-brand-primary-400 flex items-center gap-2">
                        <Coins className="w-5 h-5" />
                        ERG Fees
                      </h4>
                      <ul className="space-y-3 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ✓
                          </Badge>
                          <span>Always accepted for fee payment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ✓
                          </Badge>
                          <span>Primary and most reliable method</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ✓
                          </Badge>
                          <span>Predictable and stable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ✓
                          </Badge>
                          <span>Supported by all wallets and dApps</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 text-brand-primary-400 flex items-center gap-2">
                        <ArrowRightLeft className="w-5 h-5" />
                        Babel Fees
                      </h4>
                      <ul className="space-y-3 text-sm text-neutral-300">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ⚡
                          </Badge>
                          <span>Offer flexibility and convenience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ⚡
                          </Badge>
                          <span>Availability depends on token market demand</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ⚡
                          </Badge>
                          <span>Requires intermediary participation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-brand-primary-500/50 text-brand-primary-400 text-xs">
                            ⚡
                          </Badge>
                          <span>May have variable exchange rates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Conclusion */}
            <motion.div variants={itemVariants}>
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-white">Conclusion</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    Babel Fees are a significant innovation demonstrating Ergo's flexibility and user-centric approach. They contribute to creating a more convenient and multifaceted ecosystem.
                  </p>
                  <p className="text-neutral-400">
                    Keep an eye on updates from your wallets and favorite dApps to learn about their support for this feature!
                  </p>
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
                  Explore Supported Wallets
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60">
                <Link href="https://github.com/ergoplatform/eips/blob/master/eip-0019.md" target="_blank">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Learn More About EIP-0019
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
