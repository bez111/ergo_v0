"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Shield,
  ExternalLink,
  AlertTriangle,
  Cpu,
  Gift,
  DollarSign,
  Repeat,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { GlitchText } from "@/components/glitch-text"

const centralizedExchanges = [
  {
    name: "KuCoin",
    logo: "/placeholder.svg?height=40&width=40",
    description: "Global CEX, supports ERG/USDT, ERG/BTC",
    link: "https://www.kucoin.com/",
  },
  {
    name: "Gate.io",
    logo: "/placeholder.svg?height=40&width=40",
    description: "Global CEX, various ERG pairs",
    link: "https://www.gate.io/",
  },
  {
    name: "HTX (formerly Huobi)",
    logo: "/placeholder.svg?height=40&width=40",
    description: "Global CEX, ERG trading available",
    link: "https://www.htx.com/",
  },
]

const decentralizedExchanges = [
  {
    name: "Spectrum Finance",
    logo: "/placeholder.svg?height=40&width=40",
    description: "Primary DEX on Ergo, swap various tokens for ERG",
    link: "https://spectrum.fi/",
  },
]

export default function GetErgPage() {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen relative z-10 py-16 px-4 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="pb-20">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-8">
              <GlitchText text="GET ERG" className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent" />
            </div>
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-mono">
                <span className="text-primary">[</span>A GUIDE TO ACQUIRING ERGO'S NATIVE CURRENCY<span className="text-primary">]</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-4">
                Welcome! This page will guide you through the various ways to acquire ERG – the native
                cryptocurrency of the Ergo platform. ERG is essential for paying transaction fees, participating in
                DeFi, using decentralized applications (dApps), and much more within the Ergo ecosystem.
              </p>
              <Card className="border-red-500/50 bg-red-900/20 text-red-300 mt-8 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <AlertTriangle className="w-10 h-10 text-red-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-red-200 mb-1">Important Risk Notice</h3>
                      <p className="text-sm leading-relaxed">
                        Investing in cryptocurrencies involves risks. Always do your own research (DYOR) and only
                        invest funds you can afford to lose. This page provides informational guidance and does not
                        constitute financial advice.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </FadeIn>
      </section>
      {/* Methods Tabs */}
      <section className="py-12">
        <Tabs defaultValue="cex" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 border border-primary/20 p-0 rounded-lg mb-12 overflow-hidden">
            <TabsTrigger
              value="cex"
              className="font-mono uppercase tracking-wider py-3 rounded-none border-r border-primary/20 data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:shadow-none"
            >
              Buy on CEX
            </TabsTrigger>
            <TabsTrigger
              value="dex"
              className="font-mono uppercase tracking-wider py-3 rounded-none border-r border-primary/20 data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:shadow-none"
            >
              Buy on DEX
            </TabsTrigger>
            <TabsTrigger
              value="earn"
              className="font-mono uppercase tracking-wider py-3 rounded-none data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:shadow-none"
            >
              Earn ERG
            </TabsTrigger>
          </TabsList>
          {/* CEX Content */}
          <TabsContent value="cex">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <SectionHeading text="BUY ERG ON CENTRALIZED EXCHANGES (CEX)" className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent mb-8 text-center" />
              <motion.p
                variants={itemVariants}
                className="text-gray-400 font-mono text-center mb-12 max-w-3xl mx-auto"
              >
                Centralized Exchanges (CEXs) act as intermediaries, matching buyers and sellers. You will typically
                need to create an account and complete identity verification (KYC) on most CEXs.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {centralizedExchanges.map((exchange, index) => (
                  <motion.div variants={itemVariants} key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:border-orange-500/50">
                    <CardContent className="p-0 text-center flex-1 flex flex-col">
                      <Image
                        src={exchange.logo || "/placeholder.svg"}
                        alt={`${exchange.name} logo`}
                        width={50}
                        height={50}
                        className="mx-auto mb-4 rounded-full group-hover:scale-110 transition-transform"
                      />
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">{exchange.name}</h3>
                      <p className="text-sm text-gray-400 mb-4 flex-1">{exchange.description}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary/50 text-primary hover:bg-primary/10 font-mono w-full mt-auto"
                      >
                        <Link href={exchange.link} target="_blank" rel="noopener noreferrer">
                          Visit Exchange <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={itemVariants}>
                <Card className="bg-gray-900/60 border-primary/30 backdrop-blur-xl rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary font-mono flex items-center gap-2">
                      <Repeat className="w-6 h-6" />
                      General Steps for Buying on a CEX
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300 font-mono">
                    <p>
                      <strong className="text-primary">1. Choose an exchange:</strong> Select from the list above.
                    </p>
                    <p>
                      <strong className="text-primary">2. Create & Verify Account:</strong> Follow the exchange's
                      KYC process.
                    </p>
                    <p>
                      <strong className="text-primary">3. Deposit Funds:</strong> Add fiat or other crypto.
                    </p>
                    <p>
                      <strong className="text-primary">4. Find ERG Trading Pair:</strong> E.g., ERG/USDT, ERG/BTC.
                    </p>
                    <p>
                      <strong className="text-primary">5. Place Order:</strong> Buy your desired amount of ERG.
                    </p>
                    <p className="font-bold text-orange-400">
                      <strong className="text-primary">6. IMPORTANT:</strong> Withdraw ERG to your personal Ergo
                      wallet. <Link href="/wallet" className="underline hover:text-primary">(Find a wallet here)</Link>. Remember: "Not your keys – not your crypto!"
                    </p>
                    <div className="mt-4 pt-4 border-t border-primary/20 flex items-center gap-2 text-sm text-yellow-400">
                      <Shield className="w-4 h-4" />
                      <span>
                        Security Tip: Always use official exchange websites and enable two-factor authentication
                        (2FA).
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
          {/* DEX Content */}
          <TabsContent value="dex">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <SectionHeading text="BUY ERG ON DECENTRALIZED EXCHANGES (DEX)" className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent mb-8 text-center" />
              <motion.p
                variants={itemVariants}
                className="text-gray-400 font-mono text-center mb-12 max-w-3xl mx-auto"
              >
                Decentralized Exchanges (DEXs) allow you to trade cryptocurrencies directly from your own wallet,
                without needing to trust your funds to a third party. On Ergo, the primary DEX is Spectrum Finance.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-2xl p-6 h-full flex flex-col">
                  <CardContent className="p-0 text-center flex-1 flex flex-col">
                    <Image
                      src={decentralizedExchanges[0].logo || "/placeholder.svg"}
                      alt={`${decentralizedExchanges[0].name} logo`}
                      width={50}
                      height={50}
                      className="mx-auto mb-4 rounded-full group-hover:scale-110 transition-transform"
                    />
                    <h3 className="text-xl font-bold text-white mb-2 font-mono">
                      {decentralizedExchanges[0].name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 flex-1">{decentralizedExchanges[0].description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10 font-mono w-full mt-auto"
                    >
                      <Link href={decentralizedExchanges[0].link} target="_blank" rel="noopener noreferrer">
                        Visit Spectrum <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-gray-900/60 border-primary/30 backdrop-blur-xl rounded-2xl h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary font-mono flex items-center gap-2">
                      <HelpCircle className="w-5 h-5" />
                      What You'll Need
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-gray-300 font-mono text-sm flex-1">
                    <p>
                      <strong className="text-primary">1. Compatible Ergo Wallet:</strong> E.g., Nautilus Wallet
                      (browser extension).
                    </p>
                    <p>
                      <strong className="text-primary">2. Assets to Swap:</strong> SigUSD, other Ergo tokens, or
                      bridged assets.
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      Use Rosen Bridge (`https://rosen.tech/`) to bring assets from other chains to Ergo.
                    </p>
                  </CardContent>
                </motion.div>
              </div>
              <motion.div variants={itemVariants} className="mb-12">
                <Card className="bg-gray-900/60 border-primary/30 backdrop-blur-xl rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary font-mono flex items-center gap-2">
                      <Repeat className="w-6 h-6" />
                      General Steps for Buying on a DEX
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300 font-mono">
                    <p>
                      <strong className="text-primary">1. Prepare Wallet:</strong> Fund your Ergo wallet (e.g.,
                      Nautilus).
                    </p>
                    <p>
                      <strong className="text-primary">2. Go to DEX Website:</strong> E.g., `https://spectrum.fi/`
                      (verify official links!).
                    </p>
                    <p>
                      <strong className="text-primary">3. Connect Wallet:</strong> Use the "Connect Wallet" option.
                    </p>
                    <p>
                      <strong className="text-primary">4. Select Trading Pair:</strong> Choose your asset and ERG.
                    </p>
                    <p>
                      <strong className="text-primary">5. Enter Amount:</strong> Review rate, slippage, fees.
                    </p>
                    <p>
                      <strong className="text-primary">6. Confirm Transaction:</strong> Sign in your wallet.
                    </p>
                    <p>
                      <strong className="text-primary">7. Receive ERG:</strong> Directly to your wallet.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white font-mono">Advantages of DEX</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-gray-300 font-mono text-sm">
                    <p>✓ Self-custody of funds</p>
                    <p>✓ Access to wider range of tokens</p>
                    <p>✓ No KYC (usually)</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-500/50 bg-orange-900/20 text-orange-300 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-orange-200 font-mono">
                      DEX Risks & Considerations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-orange-300 font-mono text-sm">
                    <p>• Slippage (price changes)</p>
                    <p>• Impermanent Loss (for LPs)</p>
                    <p>• Smart Contract Risks (use reputable DEXs)</p>
                    <p>• Network Fees (paid in ERG)</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
          {/* Earn ERG Content */}
          <TabsContent value="earn">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <SectionHeading text="EARN ERG BY CONTRIBUTING" className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent mb-8 text-center" />
              <motion.p
                variants={itemVariants}
                className="text-gray-400 font-mono text-center mb-12 max-w-3xl mx-auto"
              >
                You can also earn ERG by actively participating in and contributing to the Ergo ecosystem.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-2xl p-6 h-full flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Cpu className="w-6 h-6 text-black" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white font-mono">Mining ERG</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-gray-300 font-mono text-sm flex-1">
                    <p>Secure the network with your GPU and earn ERG rewards.</p>
                    <p>Algorithm: Autolykos v2 (ASIC-resistant).</p>
                    <Button asChild variant="link" className="text-primary p-0 hover:text-orange-400">
                      <Link href="/use/mining">
                        Learn More About Mining <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-2xl p-6 h-full flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Gift className="w-6 h-6 text-black" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white font-mono">
                      Bounties & Contributions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-gray-300 font-mono text-sm flex-1">
                    <p>Use your skills: development, content, marketing, translation, bug bounties.</p>
                    <p>Find opportunities on ErgoForum, Discord, GitHub.</p>
                    <Button asChild variant="link" className="text-primary p-0 hover:text-orange-400">
                      <Link href="/community/contribute">
                        Explore Contribution Paths <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-2xl p-6 h-full flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <DollarSign className="w-6 h-6 text-black" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white font-mono">
                      dApp Rewards & Yields
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-gray-300 font-mono text-sm flex-1">
                    <p>Participate in DeFi: liquidity providing, lending, etc.</p>
                    <p className="text-xs text-orange-400">Involves smart contract and market risks. DYOR.</p>
                    <Button asChild variant="link" className="text-primary p-0 hover:text-orange-400">
                      <Link href="/use/defi">
                        Discover DeFi Opportunities <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </motion.div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>
      {/* Guides & Resources */}
      <section className="py-16">
        <SectionHeading text="GUIDES & RESOURCES" className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent mb-8 text-center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { title: "Ergo Wallets", link: "/wallet" },
            { title: "FAQ for Beginners", link: "/start/faq" },
            { title: "Official ErgoDocs", link: "/build/docs" },
            { title: "Join the Community", link: "/community" },
          ].map((item, index) => (
            <motion.div variants={itemVariants} key={index}>
              <Button
                asChild
                className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono h-auto py-4 flex-col gap-2 text-center rounded-2xl"
              >
                <Link href={item.link}>
                  <ExternalLink className="h-5 w-5 mb-1" />
                  <span>{item.title.toUpperCase()}</span>
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* Security Reminders */}
      <section className="py-20">
        <FadeIn>
          <Card className="border-red-500/70 bg-red-900/30 text-red-200 backdrop-blur-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-red-100 font-mono flex items-center gap-3">
                <Shield className="w-8 h-8" />
                SECURITY PROTOCOL ENGAGED
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✓</span>
                <span>
                  <strong className="text-red-100">Store ERG in a personal wallet:</strong> Control your private
                  keys.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✓</span>
                <span>
                  <strong className="text-red-100">Beware of phishing & scams:</strong> Use only official, verified
                  links.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✓</span>
                <span>
                  <strong className="text-red-100">Never share private keys or seed phrase:</strong> No legitimate
                  entity will ask.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✓</span>
                <span>
                  <strong className="text-red-100">Use strong passwords & 2FA:</strong> Secure your accounts.
                </span>
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </section>
    </div>
  )
}
