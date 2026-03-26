"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { Link } from "@/i18n/navigation"
import {
  ExternalLink,
  Cpu,
  RefreshCw,
  CreditCard,
  Repeat,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

export default function GetErgClient() {
  const t = useTranslations("use.getErg")

  const onRampServices = [
    {
      name: "Banxa",
      description: "Buy ERG directly with credit card, bank transfer, or other payment methods",
      link: "https://banxa.com/",
      icon: CreditCard,
    },
  ]

  const centralizedExchanges = [
    {
      name: "Gate.io",
      description: "Global cryptocurrency exchange",
      link: "https://www.gate.io/trade/ERG_USDT",
      icon: Cpu,
    },
    {
      name: "KuCoin",
      description: "People's Exchange",
      link: "https://www.kucoin.com/trade/ERG-USDT",
      icon: Cpu,
    },
    {
      name: "MEXC",
      description: "Global digital asset trading platform",
      link: "https://www.mexc.com/exchange/ERG_USDT",
      icon: Cpu,
    },
    {
      name: "CoinEx",
      description: "Professional cryptocurrency exchange",
      link: "https://www.coinex.com/exchange/ERG-USDT",
      icon: Cpu,
    },
  ]

  const decentralizedExchanges = [
    {
      name: "Aster",
      description: "Decentralized perpetual contracts exchange",
      link: "https://www.asterdex.com",
      icon: RefreshCw,
      badge: "soon",
    },
    {
      name: "Hyperliquid",
      description: "There is a bounty for adding Ergo to spot trading on Hyperliquid",
      link: "https://app.hyperliquid.xyz",
      icon: RefreshCw,
      badge: "bounty",
    },
    {
      name: "PancakeSwap",
      description: "Leading DEX on BNB Smart Chain",
      link: "https://pancakeswap.finance/",
      icon: RefreshCw,
    },
    {
      name: "Uniswap",
      description: "Decentralized trading protocol on Ethereum",
      link: "https://uniswap.org/",
      icon: RefreshCw,
    },
    {
      name: "Splash",
      description: "Cross-chain decentralized exchange",
      link: "https://splash.trade/",
      icon: RefreshCw,
    },
  ]

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="pt-28 pb-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Get <span className="text-orange-400">ERG</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                  Buy ERG through multiple secure channels
                </p>
                <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  From fiat on-ramps to decentralized exchanges - choose the method that works best for you. 
                  All options provide direct access to ERG tokens for your wallet.
                </p>
              </div>
              <div className="relative z-10">
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">
                    Quick Start
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <a
                      href="https://banxa.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <CreditCard className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">Buy with Fiat</h4>
                          <p className="text-sm text-gray-400">Credit card & bank transfer via Banxa</p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.gate.io/trade/ERG_USDT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <Cpu className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">Trade on Gate.io</h4>
                          <p className="text-sm text-gray-400">Popular CEX with ERG/USDT pair</p>
                        </div>
                      </div>
                    </a>
                    <div className="p-4 rounded-2xl bg-black/60 border border-white/20">
                      <div className="flex items-start gap-3">
                        <RefreshCw className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">DEX Trading</h4>
                          <p className="text-sm text-gray-400">Swap wrapped ERG on various chains</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20" id="exchanges">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Choose Your Method
          </h2>
          <p className="text-center text-neutral-400 mb-10 max-w-2xl mx-auto">
            Select the most convenient way to get ERG based on your preferences and location
          </p>
          
          <Tabs defaultValue="cex" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-black/60 border border-white/20 rounded-2xl p-1 mb-8">
              <TabsTrigger 
                value="fiat" 
                className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Buy with Fiat
              </TabsTrigger>
              <TabsTrigger 
                value="cex" 
                className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300"
              >
                <Cpu className="w-4 h-4 mr-2" />
                Centralized Exchanges
              </TabsTrigger>
              <TabsTrigger 
                value="dex" 
                className="data-[state=active]:bg-white/10 data-[state=active]:text-orange-400 data-[state=active]:border data-[state=active]:border-orange-400/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Decentralized Exchanges
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fiat" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {onRampServices.map((service) => (
                  <div key={service.name} className="h-full">
                    <Card className="bg-black/80 border-white/10 rounded-3xl h-full flex flex-col transition-all duration-300 hover:bg-black/90 hover:border-orange-400/40">
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                          <service.icon className="w-10 h-10 text-orange-400 flex-shrink-0" />
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        </div>
                        <p className="text-sm text-neutral-400 flex-1 mb-4 leading-relaxed">{service.description}</p>
                        <Button asChild size="sm" variant="outline" className="mt-auto border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300">
                          <Link href={service.link} target="_blank" rel="noopener noreferrer">
                            Buy <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cex" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {centralizedExchanges.map((exchange) => (
                  <div key={exchange.name} className="h-full">
                    <Card className="bg-black/80 border-white/10 rounded-3xl h-full flex flex-col transition-all duration-300 hover:bg-black/90 hover:border-orange-400/40">
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                          <exchange.icon className="w-10 h-10 text-orange-400 flex-shrink-0" />
                          <h3 className="text-xl font-bold text-white">{exchange.name}</h3>
                        </div>
                        <p className="text-sm text-neutral-400 flex-1 mb-4 leading-relaxed">{exchange.description}</p>
                        <Button asChild size="sm" variant="outline" className="mt-auto border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300">
                          <Link href={exchange.link} target="_blank" rel="noopener noreferrer">
                            Trade <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dex" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {decentralizedExchanges.map((exchange) => (
                  <div key={exchange.name} className="h-full">
                    <Card className="bg-black/80 border-white/10 rounded-3xl h-full flex flex-col transition-all duration-300 hover:bg-black/90 hover:border-orange-400/40">
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                          <exchange.icon className="w-10 h-10 text-orange-400 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-bold text-white">{exchange.name}</h3>
                              {exchange.badge && (
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                  exchange.badge === 'soon' 
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                                    : exchange.badge === 'bounty'
                                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                    : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                                }`}>
                                  {exchange.badge}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-400 flex-1 mb-4 leading-relaxed">{exchange.description}</p>
                        <Button asChild size="sm" variant="outline" className="mt-auto border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300">
                          <Link href={exchange.link} target="_blank" rel="noopener noreferrer">
                            Swap <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What's <span className="text-orange-400">Next</span>?
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              Now that you have ERG, explore what you can do with it
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/use"
                className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 text-left"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                    <Repeat className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Explore Use Cases</h3>
                    <p className="text-orange-400/80 text-sm font-medium">Discover Applications</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">Discover all the ways you can use ERG - from DeFi to privacy features</p>
              </Link>
              
              <Link
                href="/ecosystem"
                className="group relative bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5 text-left"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                    <Cpu className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Try dApps</h3>
                    <p className="text-orange-400/80 text-sm font-medium">Explore Ecosystem</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">Start using decentralized applications built on Ergo blockchain</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Email Capture Form */}
        <FinalCTASimple 
          title="Market Updates & Analysis"
          description="Get the latest ERG market analysis, price alerts, and investment insights delivered to your inbox"
        />

      </div>
    </BackgroundWrapper>
  )
}
