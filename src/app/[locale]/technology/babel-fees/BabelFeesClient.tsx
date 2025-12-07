"use client"

/* eslint-disable react/no-unescaped-entities */

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
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { RelatedTechnologies, WhatsNextCTA, RelatedBlogPostsForTechnology } from "@/components/technology"

const EIP31_URL = "https://github.com/ergoplatform/eips/blob/master/eip-0031.md"

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

export default function BabelFeesClient() {
  // const [isExpanded, setIsExpanded] = useState(false)

  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-white relative overflow-hidden">
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
                  Pay transaction fees with any token
                </p>
                <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  Revolutionary fee payment system that allows users to pay Ergo transaction fees with any token instead of ERG, through automated intermediaries who handle the conversion seamlessly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                    <Link href="#how-it-works">How It Works</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-neutral-600 text-neutral-200 hover:bg-neutral-900/40 px-6 py-3 rounded-xl">
                    <Link href={EIP31_URL} target="_blank">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Read EIP-0031
                    </Link>
                  </Button>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <Card className="bg-black border border-neutral-700 backdrop-blur-sm p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">Fee Payment Options</h3>
                    <div className="space-y-4">
                      {[
                        { name: "Standard ERG", icon: Coins, desc: "Traditional fee payment with ERG tokens" },
                        { name: "Any Token", icon: ArrowRightLeft, desc: "Pay fees with any token you hold" },
                        { name: "Auto Exchange", icon: Zap, desc: "Automatic conversion handled by intermediaries" },
                      ].map((option) => (
                        <div key={option.name} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400">
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
                <Card className="bg-black border border-neutral-700 rounded-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-white">
                      <Shield className="w-6 h-6 text-orange-400" />
                      Why Are Transaction Fees Necessary?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-neutral-300 leading-relaxed">
                      Transaction fees serve multiple critical purposes in blockchain networks, ensuring security, sustainability, and proper resource allocation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                        <Users className="w-8 h-8 text-orange-400 mb-3" />
                        <h4 className="font-semibold mb-2 text-orange-400">Miner Incentives</h4>
                        <p className="text-sm text-neutral-300">
                          Fees compensate miners for processing transactions and securing the network
                        </p>
                      </div>
                      <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                        <Shield className="w-8 h-8 text-orange-400 mb-3" />
                        <h4 className="font-semibold mb-2 text-orange-400">Spam Prevention</h4>
                        <p className="text-sm text-neutral-300">
                          Fees prevent network spam by making malicious attacks economically unfeasible
                        </p>
                      </div>
                      <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                        <Network className="w-8 h-8 text-orange-400 mb-3" />
                        <h4 className="font-semibold mb-2 text-orange-400">Network Health</h4>
                        <p className="text-sm text-neutral-300">
                          Fees ensure proper resource allocation and network sustainability
                        </p>
                      </div>
                    </div>
                    <Alert className="border-orange-500/30 bg-orange-500/10">
                      <Info className="h-4 w-4 text-orange-400" />
                      <AlertDescription className="text-neutral-300">
                        <strong className="text-white">Standard Payment:</strong> Normally, all Ergo transactions require ERG tokens to pay miners for processing
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </motion.div>

              {/* What Are Babel Fees */}
              <motion.div variants={itemVariants} id="how-it-works">
                <Card className="bg-black border border-neutral-700 rounded-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-white">
                      <Coins className="w-6 h-6 text-orange-400" />
                      What Are Babel Fees?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-orange-400">Definition</h4>
                      <p className="text-neutral-300 leading-relaxed">
                        Babel Fees are a revolutionary feature that allows users to pay Ergo transaction fees with any token instead of ERG. This is achieved through automated intermediaries who accept your tokens and pay the required ERG fee to miners.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-orange-400">
                        Why Were Babel Fees Created?
                      </h4>
                      <div className="space-y-3">
                        <div className="flex gap-3 items-start">
                          <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                          <div>
                            <strong className="text-orange-400">Better User Experience:</strong>
                            <p className="text-neutral-300 mt-1">
                              Users don't need to hold ERG tokens to interact with dApps, reducing friction and improving accessibility
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3 items-start">
                          <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                          <div>
                            <strong className="text-orange-400">Token Utility:</strong>
                            <p className="text-neutral-300 mt-1">
                              Increases utility of native tokens by allowing them to be used for transaction fees
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3 items-start">
                          <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                          <div>
                            <strong className="text-orange-400">Accessibility:</strong>
                            <p className="text-neutral-300 mt-1">
                              Makes Ergo more accessible to users who only hold specific tokens or stablecoins
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
                <Card className="bg-black border border-neutral-700 rounded-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-white">
                      <ArrowRightLeft className="w-6 h-6 text-orange-400" />
                      How Babel Fees Work
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-neutral-300 leading-relaxed">
                      Babel Fees work through a decentralized marketplace where intermediaries compete to provide fee conversion services, creating a seamless experience for users.
                    </p>
                    
                    {/* Process Flow */}
                    <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 text-center text-orange-400">Process Flow</h4>
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                            <Wallet className="w-8 h-8 text-orange-400" />
                          </div>
                          <p className="text-sm text-neutral-300">User offers tokens for fee payment</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-orange-400 hidden md:block" />
                        <ArrowDown className="w-6 h-6 text-orange-400 md:hidden" />
                        <div className="text-center">
                          <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                            <Network className="w-8 h-8 text-orange-400" />
                          </div>
                          <p className="text-sm text-neutral-300">Intermediary detects and accepts offer</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-orange-400 hidden md:block" />
                        <ArrowDown className="w-6 h-6 text-orange-400 md:hidden" />
                        <div className="text-center">
                          <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                            <Coins className="w-8 h-8 text-orange-400" />
                          </div>
                          <p className="text-sm text-neutral-300">ERG fee paid to miners automatically</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="text-lg font-semibold mb-2 text-orange-400">User Makes Offer</h4>
                        <p className="text-neutral-300">
                          When creating a transaction, users can specify which tokens they want to use for fee payment instead of ERG
                        </p>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="text-lg font-semibold mb-3 text-orange-400">
                          Intermediary Processing
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-neutral-900/60 border border-neutral-700 p-3 rounded">
                            <strong className="text-orange-400">Detection:</strong>
                            <p className="text-neutral-300 mt-1">
                              Intermediaries monitor the mempool for transactions offering tokens for fee payment
                            </p>
                          </div>
                          <div className="bg-neutral-900/60 border border-neutral-700 p-3 rounded">
                            <strong className="text-orange-400">Execution:</strong>
                            <p className="text-neutral-300 mt-1">
                              They create a new transaction that includes the user's transaction plus their own fee payment
                            </p>
                          </div>
                          <div className="bg-neutral-900/60 border border-neutral-700 p-3 rounded">
                            <strong className="text-orange-400">Payment:</strong>
                            <p className="text-neutral-300 mt-1">
                              The intermediary pays the ERG fee and receives the user's offered tokens as compensation
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="text-lg font-semibold mb-2 text-orange-400">Market Dynamics</h4>
                        <p className="text-neutral-300">
                          Multiple intermediaries compete to provide the best exchange rates, creating a competitive marketplace that benefits users
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Benefits */}
              <motion.div variants={itemVariants} id="benefits">
                <Card className="bg-black border border-neutral-700 rounded-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-white">
                      <TrendingUp className="w-6 h-6 text-orange-400" />
                      Benefits of Babel Fees
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-orange-400 flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          For Users
                        </h4>
                        <ul className="space-y-2 text-sm text-neutral-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-white">Convenience:</strong> No need to hold ERG tokens for transactions
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-white">Reduced Friction:</strong> Use any token you already own for fees
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-orange-400 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          For Developers
                        </h4>
                        <ul className="space-y-2 text-sm text-neutral-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-white">Token Utility:</strong> Increases utility and demand for native tokens
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-white">Better UX:</strong> Improves user experience in dApps
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-orange-400 flex items-center gap-2">
                          <Network className="w-5 h-5" />
                          For Ecosystem
                        </h4>
                        <ul className="space-y-2 text-sm text-neutral-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>More user-friendly blockchain experience</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>Stronger token economy and utility</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Practical Considerations */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black border border-neutral-700 rounded-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-white">
                      <Wallet className="w-6 h-6 text-orange-400" />
                      Practical Considerations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                        <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                          <Wallet className="w-4 h-4" />
                          Wallet Support
                        </h4>
                        <p className="text-sm text-neutral-300">
                          Requires wallet and dApp support for Babel Fee functionality
                        </p>
                      </div>
                      <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                        <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                          <Coins className="w-4 h-4" />
                          Token Acceptance
                        </h4>
                        <p className="text-sm text-neutral-300">
                          Depends on intermediaries willing to accept specific tokens
                        </p>
                      </div>
                      <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                        <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Exchange Rates
                        </h4>
                        <p className="text-sm text-neutral-300">
                          Rates determined by market competition between intermediaries
                        </p>
                      </div>
                      <div className="p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                        <h4 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                          <Info className="w-4 h-4" />
                          How to Use
                        </h4>
                        <p className="text-sm text-neutral-300">
                          Enable in supported wallets and dApps when making transactions
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Current Status */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black border border-neutral-700 rounded-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-white">
                      <Zap className="w-6 h-6 text-orange-400" />
                      Current Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Alert className="border-yellow-500/30 bg-yellow-500/10">
                      <Info className="h-4 w-4 text-yellow-400" />
                      <AlertDescription className="text-neutral-300">
                        <strong className="text-white">Development Status:</strong> Babel Fees are specified in EIP-0031 and are currently being implemented by wallet developers and dApp creators
                      </AlertDescription>
                    </Alert>
                    <div className="space-y-4">
                      <p className="text-neutral-300">Key questions about current adoption:</p>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-start gap-3 p-3 bg-neutral-900/60 border border-neutral-700 rounded">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-neutral-300">
                            Which wallets and dApps currently support Babel Fees?
                          </p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-neutral-900/60 border border-neutral-700 rounded">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-neutral-300">
                            What tokens are commonly accepted by intermediaries?
                          </p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-neutral-900/60 border border-neutral-700 rounded">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-neutral-300">
                            How is the development and adoption progressing?
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="border-orange-500/50 hover:bg-orange-500/10 text-orange-400">
                      <Link href={EIP31_URL} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Check Latest Updates
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Comparison */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black border border-neutral-700 rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">ERG vs Babel Fees Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                        <h4 className="text-lg font-semibold mb-4 text-orange-400 flex items-center gap-2">
                          <Coins className="w-5 h-5" />
                          Standard ERG Fees
                        </h4>
                        <ul className="space-y-3 text-sm text-neutral-300">
                          <li className="flex items-start gap-2">
                            <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                              ✓
                            </Badge>
                            <span>Universally accepted by all miners</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                              ✓
                            </Badge>
                            <span>Reliable and predictable costs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                              ✓
                            </Badge>
                            <span>Stable fee calculation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                              ✓
                            </Badge>
                            <span>Supported by all wallets</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 bg-neutral-900/60 border border-neutral-700 rounded-lg">
                        <h4 className="text-lg font-semibold mb-4 text-orange-400 flex items-center gap-2">
                          <ArrowRightLeft className="w-5 h-5" />
                          Babel Fees
                        </h4>
                        <ul className="space-y-3 text-sm text-neutral-300">
                          <li className="flex items-start gap-2">
                            <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                              ⚡
                            </Badge>
                            <span>Pay with any token you hold</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                              ⚡
                            </Badge>
                            <span>Depends on intermediary availability</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                              ⚡
                            </Badge>
                            <span>Requires intermediary services</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                              ⚡
                            </Badge>
                            <span>Market-determined exchange rates</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Conclusion */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black border border-neutral-700 rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center text-white">The Future of Transaction Fees</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <p className="text-lg text-neutral-300 leading-relaxed">
                      Babel Fees represent a significant step forward in blockchain user experience, making Ergo more accessible and user-friendly while maintaining its security and decentralization principles.
                    </p>
                    <p className="text-neutral-400">
                      As more wallets and dApps implement this feature, users will enjoy unprecedented flexibility in how they interact with the Ergo blockchain.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* Related Technologies - Data-driven */}
        <RelatedTechnologies 
          currentSlug="babel-fees"
          title="Related Technologies"
        />

        {/* Related Blog Articles - lightweight */}
        <RelatedBlogPostsForTechnology currentSlug="babel-fees" />

        {/* What's Next - CTA Section */}
        <WhatsNextCTA currentSlug="babel-fees" />
      </div>
    </BackgroundWrapper>
  )
}