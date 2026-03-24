"use client"

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages, @typescript-eslint/no-unused-vars */

import React, { useState } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { 
  Shield, 
  Coins, 
  Lock, 
  Zap,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  X,
  ExternalLink,
  ChevronDown,
  Wallet,
  Code,
  Eye,
  Clock
} from "lucide-react"

import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { ClusterRelatedContent } from "@/components/seo/cluster-related-content"
import { networkMetrics, formatHashrate, formatTVL, formatSupplyShort, formatBlockTime, formatActiveAddresses, formatActiveNodes } from "@/lib/network-metrics"

export function HoldersClient() {
  const t = useTranslations('holdersPage')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const breadcrumbItems = [
    { name: t('breadcrumbs.home'), href: "/" },
    { name: t('breadcrumbs.hodlers'), href: "/hodlers" }
  ]

  const heroComparisons = [
    {
      icon: Zap,
      title: t('heroComparisons.0.title'),
      ergo: t('heroComparisons.0.ergo'),
      others: t('heroComparisons.0.others')
    },
    {
      icon: Shield,
      title: t('heroComparisons.1.title'),
      ergo: t('heroComparisons.1.ergo'),
      others: t('heroComparisons.1.others')
    },
    {
      icon: TrendingUp,
      title: t('heroComparisons.2.title'),
      ergo: t('heroComparisons.2.ergo'),
      others: t('heroComparisons.2.others')
    }
  ]

  // Core value propositions for holders
  const coreValues = [
    {
      icon: Shield,
      title: t('coreValues.soundMoney.title'),
      description: t('coreValues.soundMoney.description'),
      highlight: t('coreValues.soundMoney.highlight')
    },
    {
      icon: Code,
      title: t('coreValues.smartContracts.title'),
      description: t('coreValues.smartContracts.description'),
      highlight: t('coreValues.smartContracts.highlight')
    },
    {
      icon: Lock,
      title: t('coreValues.programmablePrivacy.title'),
      description: t('coreValues.programmablePrivacy.description'),
      highlight: t('coreValues.programmablePrivacy.highlight')
    },
    {
      icon: Users,
      title: t('coreValues.fairAccessible.title'),
      description: t('coreValues.fairAccessible.description'),
      highlight: t('coreValues.fairAccessible.highlight')
    }
  ]

  // Comparison data
  const comparison = [
    {
      criterion: t('comparison.rows.0.criterion'),
      bitcoin: { status: "good", text: t('comparison.rows.0.bitcoin.text') },
      ethereum: { status: "warning", text: t('comparison.rows.0.ethereum.text') },
      monero: { status: "warning", text: t('comparison.rows.0.monero.text') },
      ergo: { status: "good", text: t('comparison.rows.0.ergo.text') }
    },
    {
      criterion: t('comparison.rows.1.criterion'),
      bitcoin: { status: "good", text: t('comparison.rows.1.bitcoin.text') },
      ethereum: { status: "warning", text: t('comparison.rows.1.ethereum.text') },
      monero: { status: "good", text: t('comparison.rows.1.monero.text') },
      ergo: { status: "good", text: t('comparison.rows.1.ergo.text') }
    },
    {
      criterion: t('comparison.rows.2.criterion'),
      bitcoin: { status: "bad", text: t('comparison.rows.2.bitcoin.text') },
      ethereum: { status: "bad", text: t('comparison.rows.2.ethereum.text') },
      monero: { status: "good", text: t('comparison.rows.2.monero.text') },
      ergo: { status: "good", text: t('comparison.rows.2.ergo.text') }
    },
    {
      criterion: t('comparison.rows.3.criterion'),
      bitcoin: { status: "bad", text: t('comparison.rows.3.bitcoin.text') },
      ethereum: { status: "good", text: t('comparison.rows.3.ethereum.text') },
      monero: { status: "bad", text: t('comparison.rows.3.monero.text') },
      ergo: { status: "good", text: t('comparison.rows.3.ergo.text') }
    },
    {
      criterion: t('comparison.rows.4.criterion'),
      bitcoin: { status: "good", text: t('comparison.rows.4.bitcoin.text') },
      ethereum: { status: "warning", text: t('comparison.rows.4.ethereum.text') },
      monero: { status: "good", text: t('comparison.rows.4.monero.text') },
      ergo: { status: "good", text: t('comparison.rows.4.ergo.text') }
    }
  ]

  // Live metrics from centralized network metrics
  const liveMetrics = [
    { label: t('metrics.networkHashrate.label'), value: formatHashrate(networkMetrics), trend: networkMetrics.hashrate.trend, icon: Zap },
    { label: t('metrics.activeAddresses.label'), value: formatActiveAddresses(networkMetrics), trend: networkMetrics.activeAddresses.trend, icon: Users },
    { label: t('metrics.defiTvl.label'), value: formatTVL(networkMetrics), trend: networkMetrics.defiTVL.trend, icon: TrendingUp },
    { label: t('metrics.ergSupply.label'), value: formatSupplyShort(networkMetrics), trend: t('metrics.ergSupply.trend', { remaining: networkMetrics.supply.left }), icon: Coins },
    { label: t('metrics.avgBlockTime.label'), value: formatBlockTime(networkMetrics), trend: networkMetrics.blockTime.status, icon: Clock },
    { label: t('metrics.activeNodes.label'), value: formatActiveNodes(networkMetrics), trend: networkMetrics.activeNodes.trend, icon: Globe }
  ]

  // Use cases for holders
  const useCases = [
    {
      title: t('useCasesSection.items.0.title'),
      description: t('useCasesSection.items.0.description'),
      icon: Wallet,
      links: [
        { text: "Download Nautilus Wallet", url: "https://github.com/capt-nemo429/nautilus-wallet" },
        { text: "Hardware Wallet Guide", url: "/use/get-erg" }
      ]
    },
    {
      title: t('useCasesSection.items.1.title'),
      description: t('useCasesSection.items.1.description'),
      icon: TrendingUp,
      links: [
        { text: "Open Rosen Bridge", url: "https://rosenbridge.io" },
        { text: "Explore DeFi Ecosystem", url: "/ecosystem" }
      ]
    },
    {
      title: t('useCasesSection.items.2.title'),
      description: t('useCasesSection.items.2.description'),
      icon: Eye,
      links: [
        { text: "Privacy Tutorial", url: "/technology/privacy-features" },
        { text: "ErgoMixer Guide", url: "/technology/privacy-features" }
      ]
    },
    {
      title: t('useCasesSection.items.3.title'),
      description: t('useCasesSection.items.3.description'),
      icon: Shield,
      links: [
        { text: "Start Mining Guide", url: "/miners" },
        { text: "Run a Node", url: "/docs/miners" }
      ]
    }
  ]

  // FAQ for newcomers - plain text answers from translation keys
  const faqs = [
    {
      q: t('faq.questions.4.question'),
      a: t('faq.questions.4.answer')
    },
    {
      q: t('faq.questions.0.question'),
      a: t('faq.questions.0.answer')
    },
    {
      q: t('faq.questions.5.question'),
      a: t('faq.questions.5.answer')
    },
    {
      q: t('faq.questions.6.question'),
      a: t('faq.questions.6.answer')
    },
    {
      q: t('faq.questions.7.question'),
      a: t('faq.questions.7.answer')
    },
    {
      q: t('faq.questions.8.question'),
      a: t('faq.questions.8.answer')
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />
      case 'bad':
        return <X className="w-4 h-4 text-red-400" />
      default:
        return null
    }
  }

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative pb-24">
        {/* Hidden Breadcrumbs for SEO */}
        <Breadcrumbs items={[...breadcrumbItems, { name: "For Hodlers", href: "#" }]} variant="hidden" />
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="pt-28 pb-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                    <Link href="/wallet">{t('hero.cta')}</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <Link href="#comparison">{t('hero.whyDifferent')}</Link>
                  </Button>
                </div>
              </div>
              <motion.div 
                className="relative z-10" 
                whileHover={{ scale: 1.02 }} 
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="space-y-4">
                  {heroComparisons.map((item) => (
                    <div key={item.title} className="bg-black/80 border border-white/10 rounded-2xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-neutral-300 text-sm">{item.ergo}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Core Values Section */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              What makes Ergo special?
            </h2>
            <p className="text-xl text-center text-neutral-300 mb-12">
              Four core principles that set Ergo apart from other blockchains
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value) => (
                <Card key={value.title} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-neutral-300 flex-1 mb-3">
                      {value.description}
                    </p>
                    <Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-400 w-fit">
                      {value.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section 
          id="comparison"
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              {t('comparison.title')}
            </h2>
            <p className="text-xl text-center text-neutral-300 mb-12">
              If you like BTC for security, ETH for programmability, XMR for privacy — Ergo combines these properties in a single, fair-launch PoW chain.
            </p>
            
            <div className="overflow-x-auto">
              <div className="min-w-[800px] bg-black/80 border border-white/10 rounded-3xl p-6">
                <div className="grid grid-cols-5 gap-4">
                  {/* Header */}
                  <div className="font-bold text-white"></div>
                  <div className="text-center">
                    <div className="font-bold text-white mb-2">{t('comparison.headers.bitcoin')}</div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto"></div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white mb-2">{t('comparison.headers.ethereum')}</div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto"></div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white mb-2">{t('comparison.headers.monero')}</div>
                    <div className="w-8 h-8 bg-gray-500 rounded-full mx-auto"></div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-orange-400 mb-2">{t('comparison.headers.ergo')}</div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto"></div>
                  </div>

                  {/* Comparison rows */}
                  {comparison.map((row, index) => (
                    <React.Fragment key={row.criterion}>
                      <div className="font-semibold text-white py-3 border-t border-white/10">
                        {row.criterion}
                      </div>
                      <div className="py-3 border-t border-white/10 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(row.bitcoin.status)}
                          <span className="text-neutral-300 text-sm">{row.bitcoin.text}</span>
                        </div>
                      </div>
                      <div className="py-3 border-t border-white/10 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(row.ethereum.status)}
                          <span className="text-neutral-300 text-sm">{row.ethereum.text}</span>
                        </div>
                      </div>
                      <div className="py-3 border-t border-white/10 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(row.monero.status)}
                          <span className="text-neutral-300 text-sm">{row.monero.text}</span>
                        </div>
                      </div>
                      <div className="py-3 border-t border-white/10 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(row.ergo.status)}
                          <span className="text-orange-400 text-sm font-medium">{row.ergo.text}</span>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400/50">
                <Link href="/start/comparison">{t('comparison.deepDive')}</Link>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Live Metrics Section */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              {t('liveMetrics.title')}
            </h2>
            <p className="text-center text-neutral-400 mb-12">
              {t('liveMetrics.subtitle')}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveMetrics.map((metric) => (
                <Card key={metric.label} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <metric.icon className="w-8 h-8 text-orange-400" />
                      <Badge variant="outline" className={`text-xs ${
                        metric.trend?.startsWith('+') ? 'border-green-500/30 text-green-400' :
                        metric.trend === 'stable' ? 'border-blue-500/30 text-blue-400' :
                        'border-orange-500/30 text-orange-400'
                      }`}>
                        {metric.trend ?? ''}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-neutral-400 text-sm">
                      {metric.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Use Cases Section */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              {t('useCasesSection.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase) => (
                <Card key={useCase.title} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <useCase.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {useCase.title}
                      </h3>
                    </div>
                    <p className="text-neutral-300 mb-6">
                      {useCase.description}
                    </p>
                    <div className="space-y-3">
                      {useCase.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target={link.url.startsWith('http') ? '_blank' : '_self'}
                          rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group"
                        >
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          <span>{link.text}</span>
                          {link.url.startsWith('http') && (
                            <ExternalLink className="w-3 h-3" />
                          )}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            {t('faq.title')}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                  <CollapsibleTrigger asChild>
                    <button className="w-full">
                      <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                        <h3 className="text-lg font-semibold text-left text-white">{faq.q}</h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-neutral-400 transition-transform ${
                            openFAQ === index ? "rotate-180" : ""
                          }`} 
                        />
                      </CardContent>
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-neutral-300 leading-relaxed">
                        {faq.a}
                      </p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </section>

        {/* Choose Your Path Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
              {t('chooseYourPath.title')} <span className="text-orange-400">{t('chooseYourPath.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-center text-neutral-300 mb-12">
              Ready to get started? Pick what interests you most
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                href="/use/get-erg"
                className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Wallet className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{t('chooseYourPath.buyHold.title')}</h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  {t('chooseYourPath.buyHold.description')}
                </p>
              </Link>
              
              <Link 
                href="/ecosystem"
                className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <TrendingUp className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{t('chooseYourPath.exploreDeFi.title')}</h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  {t('chooseYourPath.exploreDeFi.description')}
                </p>
              </Link>

              <Link 
                href="/miners"
                className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Zap className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{t('chooseYourPath.startMining.title')}</h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  {t('chooseYourPath.startMining.description')}
                </p>
              </Link>

              <Link 
                href="/developers"
                className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Code className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{t('chooseYourPath.buildDapps.title')}</h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  {t('chooseYourPath.buildDapps.description')}
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Cross-Promotion */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">{t('chooseYourPath.interestedInMining.title')}</p>
                  <p className="text-neutral-400 text-sm">{t('chooseYourPath.interestedInMining.description')}</p>
                </div>
              </div>
              <Link 
                href="/miners"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400 hover:bg-orange-500/20 hover:border-orange-400/50 transition-all font-medium text-sm whitespace-nowrap"
              >
                Explore Mining
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Topic Cluster Related Content */}
        <ClusterRelatedContent 
          currentUrl="/hodlers"
          title="Learn More"
          subtitle="Explore Ergo's sound money principles and tokenomics"
          maxItems={6}
          showPillarLink={false}
        />

        {/* Email Capture Form */}
        <FinalCTASimple 
          title="Stay Updated on Ergo"
          description="Get the latest news, updates, and educational content about Ergo blockchain delivered to your inbox"
        />

      </div>
    </BackgroundWrapper>
  )
}