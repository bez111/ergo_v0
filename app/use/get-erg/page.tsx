"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Shield,
  ExternalLink,
  Cpu,
  RefreshCw,
  CreditCard,
  Banknote,
  Repeat,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const onRampServices = [
  {
    name: "Banxa",
    description: "Buy ERG directly with your credit card or bank transfer. A straightforward way to get started.",
    link: "https://banxa.com/",
    icon: CreditCard,
  },
]

const centralizedExchanges = [
  {
    name: "Gate.io",
    description: "High volume CEX with ERG/USDT and ERG/BTC pairs.",
    link: "https://www.gate.io/trade/ERG_USDT",
    icon: Cpu,
  },
  {
    name: "KuCoin",
    description: "Popular exchange supporting ERG/USDT and ERG/BTC.",
    link: "https://www.kucoin.com/trade/ERG-USDT",
    icon: Cpu,
  },
  {
    name: "MEXC",
    description: "Known for a wide variety of assets, including ERG/USDT.",
    link: "https://www.mexc.com/exchange/ERG_USDT",
    icon: Cpu,
  },
  {
    name: "HTX (Huobi)",
    description: "Global CEX with ERG/USDT trading pair available.",
    link: "https://www.htx.com/en-us/trade/erg_usdt/",
    icon: Cpu,
  },
]

const decentralizedExchanges = [
  {
    name: "PancakeSwap",
    description: "Swap for rsERG (wrapped ERG) on the Binance Smart Chain.",
    link: "https://pancakeswap.finance/",
    icon: RefreshCw,
  },
  {
    name: "Uniswap",
    description: "Trade for rsERG on the Ethereum network.",
    link: "https://uniswap.org/",
    icon: RefreshCw,
  },
  {
    name: "Splash",
    description: "A DEX on the Cardano network supporting wrapped Ergo assets.",
    link: "https://splash.trade/",
    icon: RefreshCw,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function GetErgPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,136,0,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">GET ERG</Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pb-4">
            Acquire ERG
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your guide to obtaining ERG, the native currency of the Ergo ecosystem. Choose the method that best
            suits you.
          </p>
        </motion.section>

        {/* On-Ramp Section */}
        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="mb-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-4">
            <span className="text-orange-400">1.</span> Buy with Fiat (On-Ramp)
          </motion.h2>
          <motion.p variants={itemVariants} className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            The easiest way to get ERG is to buy it directly using fiat currency (e.g., USD, EUR) through an on-ramp
            service.
          </motion.p>
          <div className="flex justify-center">
            {onRampServices.map((service) => (
              <motion.div variants={itemVariants} key={service.name} className="w-full max-w-md">
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/50">
                  <CardContent className="p-6 text-center">
                    <service.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <Button asChild>
                      <Link href={service.link} target="_blank" rel="noopener noreferrer">
                        Visit {service.name} <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CEX Section */}
        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="mb-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-4">
            <span className="text-orange-400">2.</span> Buy on a Centralized Exchange (CEX)
          </motion.h2>
          <motion.p variants={itemVariants} className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            Trade for ERG on established cryptocurrency exchanges. This usually requires creating an account and
            verifying your identity (KYC).
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {centralizedExchanges.map((exchange) => (
              <motion.div variants={itemVariants} key={exchange.name} className="h-full">
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl h-full flex flex-col transition-all duration-300 hover:border-orange-500/50">
                  <CardContent className="p-6 text-center flex-1 flex flex-col">
                    <exchange.icon className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{exchange.name}</h3>
                    <p className="text-sm text-gray-400 flex-1 mb-4">{exchange.description}</p>
                    <Button asChild variant="outline" className="mt-auto">
                      <Link href={exchange.link} target="_blank" rel="noopener noreferrer">
                        Go to trade <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* DEX Section */}
        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="mb-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-4">
            <span className="text-orange-400">3.</span> Swap on a Decentralized Exchange (DEX)
          </motion.h2>
          <motion.p variants={itemVariants} className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            Use wrapped ERG (rsERG) on other blockchains to swap for assets on decentralized exchanges. This is a
            more advanced method that requires a compatible wallet.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-8">
            {decentralizedExchanges.map((exchange) => (
              <motion.div variants={itemVariants} key={exchange.name} className="h-full lg:w-1/4 md:w-1/2 w-full">
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl h-full flex flex-col transition-all duration-300 hover:border-orange-500/50">
                  <CardContent className="p-6 text-center flex-1 flex flex-col">
                    <exchange.icon className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{exchange.name}</h3>
                    <p className="text-sm text-gray-400 flex-1 mb-4">{exchange.description}</p>
                    <Button asChild variant="outline" className="mt-auto">
                      <Link href={exchange.link} target="_blank" rel="noopener noreferrer">
                        Go to swap <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Security Note */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-gray-900/50 border-gray-800/50">
            <CardContent className="p-8 flex items-center gap-6">
              <Shield className="w-12 h-12 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Always Be Secure</h3>
                <p className="text-gray-400 text-sm">
                  After acquiring ERG on an exchange, it is crucial to withdraw it to a personal wallet where you
                  control the private keys. Remember the crypto mantra: "Not your keys, not your crypto."
                  <Link href="/wallet" className="ml-2 text-orange-400 hover:underline">
                    Find a secure wallet here <ArrowRight className="inline w-4 h-4" />
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
