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
import { useState } from "react"
import { useTranslations } from "next-intl"

export default function GetErgClient() {
  const t = useTranslations("use.getErg")
  const [selectedExchange, setSelectedExchange] = useState<string | null>(null)

  const onRampServices = [
    {
      name: t("onRamp.services.banxa.name"),
      description: t("onRamp.services.banxa.description"),
      link: "https://banxa.com/",
      icon: CreditCard,
    },
    {
      name: t("onRamp.services.onramper.name"),
      description: t("onRamp.services.onramper.description"),
      link: "https://onramper.com",
      icon: Banknote,
    },
  ]

  const centralizedExchanges = [
    {
      name: t("cex.exchanges.gateio.name"),
      description: t("cex.exchanges.gateio.description"),
      link: "https://www.gate.io/trade/ERG_USDT",
      icon: Cpu,
    },
    {
      name: t("cex.exchanges.kucoin.name"),
      description: t("cex.exchanges.kucoin.description"),
      link: "https://www.kucoin.com/trade/ERG-USDT",
      icon: Cpu,
    },
    {
      name: t("cex.exchanges.mexc.name"),
      description: t("cex.exchanges.mexc.description"),
      link: "https://www.mexc.com/exchange/ERG_USDT",
      icon: Cpu,
    },
    {
      name: t("cex.exchanges.htx.name"),
      description: t("cex.exchanges.htx.description"),
      link: "https://www.htx.com/en-us/trade/erg_usdt/",
      icon: Cpu,
    },
    {
      name: t("cex.exchanges.coinex.name"),
      description: t("cex.exchanges.coinex.description"),
      link: "https://www.coinex.com/exchange/ERG-USDT",
      icon: Cpu,
    },
  ]

  const decentralizedExchanges = [
    {
      name: t("dex.exchanges.hyperliquid.name"),
      description: t("dex.exchanges.hyperliquid.description"),
      link: "https://app.hyperliquid.xyz/trade",
      icon: RefreshCw,
    },
    {
      name: t("dex.exchanges.pancakeswap.name"),
      description: t("dex.exchanges.pancakeswap.description"),
      link: "https://pancakeswap.finance/",
      icon: RefreshCw,
    },
    {
      name: t("dex.exchanges.uniswap.name"),
      description: t("dex.exchanges.uniswap.description"),
      link: "https://uniswap.org/",
      icon: RefreshCw,
    },
    {
      name: t("dex.exchanges.splash.name"),
      description: t("dex.exchanges.splash.description"),
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

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pt-0 pb-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t("title")}</h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                {t("subtitle")}
              </p>
              <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                {t("description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                  <Link href="#onramp">{t("buttons.buyWithFiat")}</Link>
                </Button>
                <Button asChild variant="outline" className="border-neutral-600 text-neutral-200 hover:bg-neutral-900/40 px-6 py-3 rounded-xl">
                  <Link href="#cex">{t("buttons.viewExchanges")}</Link>
                </Button>
              </div>
            </div>
            <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
              <Card className="bg-neutral-900/50 border border-neutral-700 backdrop-blur-sm p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">{t("waysToGetErg.title")}</h3>
                  <div className="space-y-3">
                    {[
                      { name: t("waysToGetErg.fiatOnRamp"), icon: CreditCard },
                      { name: t("waysToGetErg.cex"), icon: Cpu },
                      { name: t("waysToGetErg.dex"), icon: RefreshCw },
                    ].map((feature) => (
                      <motion.div key={feature.name} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700" whileHover={{ scale: 1.01, x: 6 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}>
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400">
                            <feature.icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-semibold text-white">{feature.name}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* On-Ramp Section */}
        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="mb-20" id="onramp">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-4 text-white">{t("onRamp.title")}</motion.h2>
          <motion.p variants={itemVariants} className="text-center text-neutral-400 mb-10 max-w-2xl mx-auto">
            {t("onRamp.subtitle")}
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {onRampServices.map((service) => (
              <motion.div variants={itemVariants} key={service.name} className="h-full">
                <Card className="h-full flex flex-col bg-neutral-900/50 border border-neutral-700 transition-all duration-200 hover:border-orange-500/30">
                  <CardContent className="p-6 text-center flex-1 flex flex-col">
                    <service.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-neutral-400 mb-6 flex-1">{service.description}</p>
                    <Button asChild className="mt-auto bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl border border-orange-500/50">
                      <Link href={service.link} target="_blank" rel="noopener noreferrer">
                        {t("onRamp.services.visitButton", { name: service.name })} <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CEX Section */}
        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="mb-20" id="cex">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-4 text-white">{t("cex.title")}</motion.h2>
          <motion.p variants={itemVariants} className="text-center text-neutral-400 mb-10 max-w-2xl mx-auto">
            {t("cex.subtitle")}
          </motion.p>
          <div className="flex flex-wrap justify-center gap-6">
            {centralizedExchanges.map((exchange) => (
              <motion.div variants={itemVariants} key={exchange.name} className="w-40">
                <Card className="bg-neutral-900/50 border border-neutral-700 flex flex-col items-center p-4 transition-all duration-200 hover:border-orange-500/30">
                  <CardContent className="flex flex-col items-center p-0">
                    <exchange.icon className="w-8 h-8 text-orange-400 mb-2" />
                    <h3 className="text-base font-semibold text-white mb-2 text-center">{exchange.name}</h3>
                    <Button asChild variant="outline" className="w-full text-xs py-1 px-2 border-neutral-700 text-neutral-300 hover:bg-neutral-900/60">
                      <Link href={exchange.link} target="_blank" rel="noopener noreferrer">
                        {t("cex.tradeButton")} <ExternalLink className="w-3 h-3 ml-1" />
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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-4 text-white">{t("dex.title")}</motion.h2>
          <motion.p variants={itemVariants} className="text-center text-neutral-400 mb-10 max-w-2xl mx-auto">
            {t("dex.subtitle")}
          </motion.p>
          <div className="flex gap-4 overflow-x-auto px-1 py-2">
            {decentralizedExchanges.map((exchange) => (
              <motion.div variants={itemVariants} key={exchange.name} className="h-full min-w-[260px] w-[260px]">
                <Card className="bg-neutral-900/50 border border-neutral-700 h-56 flex flex-col transition-all duration-200 hover:border-orange-500/30">
                  <CardContent className="p-5 text-center flex-1 flex flex-col">
                    <exchange.icon className="w-7 h-7 text-orange-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">{exchange.name}</h3>
                    <p className="text-xs text-neutral-400 flex-1 mb-3 leading-relaxed">{exchange.description}</p>
                    <Button asChild size="sm" variant="outline" className="mt-auto border-neutral-700 text-neutral-300 hover:bg-neutral-900/60">
                      <Link href={exchange.link} target="_blank" rel="noopener noreferrer">
                        {t("dex.goToSwap")} <ExternalLink className="w-4 h-4 ml-2" />
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
          <Card className="bg-neutral-900/50 border border-neutral-700">
            <CardContent className="p-8 flex items-center gap-6">
              <Shield className="w-12 h-12 text-orange-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t("security.title")}</h3>
                <p className="text-neutral-400 text-sm">
                  {t("security.description")}
                  <Link href="/wallet" className="ml-2 text-orange-400 hover:underline">
                    {t("security.findWallet")} <ArrowRight className="inline w-4 h-4" />
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
