"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
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

// Simple background effect
const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-black">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-orange-500/20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>
    </div>
  )
}

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
    <div className="min-h-screen relative">
      <BackgroundEffect />

      {/* Hero Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
              ERGO TRANSACTION FEES
            </h1>
            <h2 className="text-2xl md:text-3xl text-orange-500 mb-6 font-semibold">
              (And How Babel Fees Change Everything)
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              All About Ergo Network Fees & Paying with Tokens via Babel Fees
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
            {/* Section 1: Introduction */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/80 border-orange-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Shield className="w-6 h-6 text-orange-500" />
                    1. Why Are Transaction Fees Necessary on Ergo?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Like most blockchains, transaction fees on Ergo play a crucial role. They are needed for:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-orange-500/10">
                      <Users className="w-8 h-8 text-orange-500 mb-3" />
                      <h4 className="font-semibold mb-2 text-orange-400">Rewarding Miners</h4>
                      <p className="text-sm text-gray-300">
                        Miners expend computational resources to process transactions and secure the network. Fees are
                        part of their compensation.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-orange-500/10">
                      <Shield className="w-8 h-8 text-orange-500 mb-3" />
                      <h4 className="font-semibold mb-2 text-orange-400">Preventing Spam</h4>
                      <p className="text-sm text-gray-300">
                        Fees make sending mass volumes of useless transactions economically unviable, protecting the
                        network from congestion.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-orange-500/10">
                      <Network className="w-8 h-8 text-orange-500 mb-3" />
                      <h4 className="font-semibold mb-2 text-orange-400">Network Operation</h4>
                      <p className="text-sm text-gray-300">
                        They contribute to maintaining a healthy and functional infrastructure.
                      </p>
                    </div>
                  </div>

                  <Alert className="border-blue-500/30 bg-blue-500/10">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Standard Payment in ERG:</strong> Typically, transaction fees on the Ergo network are paid
                      in the platform's native coin – ERG. The fee amount depends on the transaction's "size" in bytes
                      and current network congestion, but generally, Ergo fees aim to be predictable thanks to the eUTXO
                      model.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 2: Introducing Babel Fees */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/80 border-orange-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Coins className="w-6 h-6 text-orange-500" />
                    2. Introducing Babel Fees (EIP-0019): Flexible Fee Payments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-orange-400">What are Babel Fees?</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Babel Fees are an innovative mechanism on Ergo that allows users to pay transaction fees using{" "}
                      <strong className="text-orange-400">
                        native tokens issued on the Ergo blockchain instead of ERG.
                      </strong>{" "}
                      Imagine being able to pay for postage not just with cash (ERG), but also with valuable collectible
                      stamps (your tokens).
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-orange-400">
                      Why were Babel Fees created? (The Problem Solved)
                    </h4>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-green-400">Improved User Experience (UX):</strong>
                          <p className="text-gray-300 mt-1">
                            Users holding specific tokens (e.g., tokens of a particular dApp) might not always have
                            enough ERG readily available to pay fees. This creates friction and barriers.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-green-400">Increased Token Utility:</strong>
                          <p className="text-gray-300 mt-1">
                            Babel Fees significantly enhance the utility of native Ergo tokens, as they can be used for
                            a fundamental network operation – paying fees.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-green-400">dApp Accessibility:</strong>
                          <p className="text-gray-300 mt-1">
                            Simplifies interaction with decentralized applications that heavily utilize their own native
                            tokens.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 3: How Babel Fees Work */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/80 border-orange-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <ArrowRightLeft className="w-6 h-6 text-orange-500" />
                    3. How Babel Fees Work (Simplified Explanation)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    The Babel Fees mechanism is quite elegant and doesn't require changes to the core protocol regarding
                    how fees are ultimately received (the network still receives fees in ERG).
                  </p>

                  {/* Visual Flow Diagram */}
                  <div className="bg-gray-800/30 rounded-lg p-6 border border-orange-500/20">
                    <h4 className="text-lg font-semibold mb-4 text-center text-orange-400">Babel Fee Process Flow</h4>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Wallet className="w-8 h-8 text-blue-400" />
                        </div>
                        <p className="text-sm text-gray-300">User offers tokens</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-orange-500 hidden md:block" />
                      <ArrowDown className="w-6 h-6 text-orange-500 md:hidden" />
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Network className="w-8 h-8 text-purple-400" />
                        </div>
                        <p className="text-sm text-gray-300">Intermediary detects</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-orange-500 hidden md:block" />
                      <ArrowDown className="w-6 h-6 text-orange-500 md:hidden" />
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Coins className="w-8 h-8 text-green-400" />
                        </div>
                        <p className="text-sm text-gray-300">ERG fee paid</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="text-lg font-semibold mb-2 text-orange-400">User's Offer</h4>
                      <p className="text-gray-300">
                        A user wishing to pay a fee with tokens creates a special "output" in their transaction, often
                        referred to as a "Babel fee box." In this box, they offer a certain amount of their tokens in
                        exchange for someone else covering their ERG fee.
                      </p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="text-lg font-semibold mb-3 text-orange-400">
                        Role of Intermediaries (Miners, Bots, Services)
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-gray-800/30 p-3 rounded">
                          <strong className="text-blue-400">1. Detecting the Offer:</strong>
                          <p className="text-gray-300 mt-1">
                            Miners or specialized bots/services (intermediaries) scan the network for these "Babel fee
                            boxes."
                          </p>
                        </div>
                        <div className="bg-gray-800/30 p-3 rounded">
                          <strong className="text-purple-400">2. Executing the Exchange:</strong>
                          <p className="text-gray-300 mt-1">
                            If the token offer is profitable (i.e., the market value of the offered tokens is greater
                            than or equal to the ERG fee amount plus a small profit for the intermediary), the
                            intermediary "fulfills" this offer.
                          </p>
                        </div>
                        <div className="bg-gray-800/30 p-3 rounded">
                          <strong className="text-green-400">3. Paying the ERG Fee:</strong>
                          <p className="text-gray-300 mt-1">
                            The intermediary takes the offered tokens from the "Babel fee box" and pays the required
                            transaction fee in ERG to the miners who include the transaction in a block.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="text-lg font-semibold mb-2 text-orange-400">Market Mechanism</h4>
                      <p className="text-gray-300">
                        The effectiveness of Babel Fees for a specific token depends on a "market" existing for it –
                        meaning there must be intermediaries willing to accept these tokens in exchange for ERG at a
                        certain rate. The more popular a token, the higher the likelihood it will be accepted for fee
                        payment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 4: Benefits */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/80 border-orange-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                    4. Benefits of Babel Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-green-400 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        For Users
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Convenience:</strong> Ability to pay fees with tokens you already own, without
                            needing to first exchange them for ERG.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Reduced Friction:</strong> Simplifies the use of dApps that are centered around
                            their own tokens.
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        For Token Issuers / dApp Developers
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Increased Token Utility:</strong> Makes their tokens more in-demand and integrated
                            into the ecosystem.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Improved UX:</strong> Better experience for their application users.
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-orange-400 flex items-center gap-2">
                        <Network className="w-5 h-5" />
                        For the Ergo Ecosystem
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <div>A more user-friendly and versatile platform.</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <div>Stimulation of an active token economy.</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 5: Practical Considerations */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/80 border-orange-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Wallet className="w-6 h-6 text-orange-500" />
                    5. Practical Considerations for Users
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-orange-500/10">
                      <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        Wallet Support
                      </h4>
                      <p className="text-sm text-gray-300">
                        Find out which Ergo wallets (e.g., Nautilus Wallet or others) and dApps support the creation of
                        transactions using Babel Fees. This feature may not be available in all wallets.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-orange-500/10">
                      <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                        <Coins className="w-4 h-4" />
                        Token Acceptance
                      </h4>
                      <p className="text-sm text-gray-300">
                        Not all tokens may be automatically accepted. This depends on intermediaries being willing to
                        exchange them for ERG.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-orange-500/10">
                      <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Exchange Rates
                      </h4>
                      <p className="text-sm text-gray-300">
                        The "price" or exchange rate at which your tokens are accepted to cover ERG fees will be
                        determined by market conditions and intermediary offers.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-orange-500/10">
                      <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        How to Use
                      </h4>
                      <p className="text-sm text-gray-300">
                        When constructing a transaction in a compatible wallet or dApp, you might see an option to
                        select a token to pay the fee. The interface will typically show the required amount of tokens
                        based on current market rates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 6: Current Status */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/80 border-orange-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Zap className="w-6 h-6 text-orange-500" />
                    6. Current Status & Future Development of Babel Fees
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-yellow-500/30 bg-yellow-500/10">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Important:</strong> This section reflects the current implementation status of Babel Fees.
                      The adoption and availability may vary depending on wallet support and intermediary participation.
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-4">
                    <p className="text-gray-300">Key questions about current adoption:</p>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">
                          How widely are Babel Fees currently adopted by miners/intermediaries?
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">
                          Are there active and liquid "markets" for many tokens to be used for Babel Fees?
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">
                          Is there ongoing work to improve or expand the Babel Fees mechanism?
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="border-orange-500/50 hover:bg-orange-500/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Check Latest Updates on EIP-0019
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 7: Comparison */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/80 border-orange-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">7. Comparison: ERG Fees vs. Babel Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-800/50 rounded-lg border border-green-500/20">
                      <h4 className="text-lg font-semibold mb-4 text-green-400 flex items-center gap-2">
                        <Coins className="w-5 h-5" />
                        ERG Fees
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-green-500/50 text-green-400 text-xs">
                            ✓
                          </Badge>
                          <span>Always accepted for fee payment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-green-500/50 text-green-400 text-xs">
                            ✓
                          </Badge>
                          <span>Primary and most reliable method</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-green-500/50 text-green-400 text-xs">
                            ✓
                          </Badge>
                          <span>Predictable and stable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-green-500/50 text-green-400 text-xs">
                            ✓
                          </Badge>
                          <span>Supported by all wallets and dApps</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-800/50 rounded-lg border border-orange-500/20">
                      <h4 className="text-lg font-semibold mb-4 text-orange-400 flex items-center gap-2">
                        <ArrowRightLeft className="w-5 h-5" />
                        Babel Fees
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ~
                          </Badge>
                          <span>Offer flexibility and convenience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ~
                          </Badge>
                          <span>Availability depends on token market demand</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ~
                          </Badge>
                          <span>Requires intermediary participation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                            ~
                          </Badge>
                          <span>May have variable exchange rates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 8: Conclusion */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">8. Conclusion</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Babel Fees are a significant innovation demonstrating Ergo's flexibility and user-centric approach.
                    They contribute to creating a more convenient and multifaceted ecosystem.
                  </p>
                  <p className="text-gray-400">
                    Keep an eye on updates from your wallets and favorite dApps to learn about their support for this
                    feature!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      <Wallet className="w-4 h-4 mr-2" />
                      Explore Supported Wallets
                    </Button>
                    <Button variant="outline" className="border-orange-500/50 hover:bg-orange-500/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More About EIP-0019
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
