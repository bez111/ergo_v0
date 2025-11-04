"use client"

import Link from "next/link"
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
      name: "HTX",
      description: "Leading digital asset exchange",
      link: "https://www.htx.com/en-us/trade/erg_usdt/",
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
        <section className="relative py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Get <span className="text-orange-400">ERG</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              {t("subtitle")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Buy with Fiat</h3>
                <p className="text-gray-400 text-sm">Credit card & bank transfer</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">5 CEX Platforms</h3>
                <p className="text-gray-400 text-sm">Major cryptocurrency exchanges</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">4 DEX Options</h3>
                <p className="text-gray-400 text-sm">Decentralized exchanges</p>
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
                          <h3 className="text-xl font-bold text-white">{exchange.name}</h3>
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
