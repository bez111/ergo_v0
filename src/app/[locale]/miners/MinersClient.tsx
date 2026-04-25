"use client"

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages, @typescript-eslint/no-unused-vars */

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { 
  Zap, 
  Cpu, 
  TrendingUp, 
  Shield,
  Coins,
  Calculator,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  X,
  ExternalLink,
  ChevronDown,
  Activity,
  Clock,
  Users,
  Globe,
  HardDrive,
  Settings,
  Play,
  DollarSign,
  BarChart3,
  Pickaxe,
  Wrench,
  Download,
  Sparkles,
  Network
} from "lucide-react"

import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { BackToTop } from "@/components/ui/back-to-top"
import { ClusterRelatedContent } from "@/components/seo/cluster-related-content"
import { networkMetrics, formatHashrate, formatDifficulty, formatBlockTime, formatBlockReward, formatActiveMiners, formatMiningPools } from "@/lib/network-metrics"
import { coreValues, miningPools, miningSoftware, miningSteps, miningTools } from "./miners-data"

export function MinersClient() {
  const t = useTranslations('minersPage')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  
  // Mining Calculator State
  const [hashrate, setHashrate] = useState(130) // MH/s
  const [powerConsumption, setPowerConsumption] = useState(120) // Watts
  const [electricityCost, setElectricityCost] = useState(0.10) // USD per kWh
  const [ergPrice, setErgPrice] = useState(1.50) // USD
  const [poolFee, setPoolFee] = useState(1) // %
  
  // Network metrics for calculations (use live data where available)
  const networkHashrateValue = networkMetrics.hashrate.value // TH/s from live metrics
  const blockReward = networkMetrics.blockReward.value // ERG from live metrics
  const blocksPerDay = 720 // ~2 min blocks

  // Calculate daily earnings
  // Convert user MH/s to TH/s: 1 TH/s = 1,000,000 MH/s
  const userHashrateTH = hashrate / 1_000_000
  const networkShare = userHashrateTH / networkHashrateValue
  const dailyErgEarned = networkShare * blockReward * blocksPerDay * (1 - poolFee / 100)
  const dailyRevenue = dailyErgEarned * ergPrice
  const dailyPowerCost = (powerConsumption / 1000) * 24 * electricityCost
  const dailyProfit = dailyRevenue - dailyPowerCost
  
  // Monthly and yearly projections
  const monthlyProfit = dailyProfit * 30
  const yearlyProfit = dailyProfit * 365
  
  // ROI calculation (assuming $500 GPU cost)
  const gpuCost = 500
  const roiDays = gpuCost / dailyProfit

  const breadcrumbItems = [
    { name: t('breadcrumbs.home'), href: "/" },
    { name: t('breadcrumbs.miners'), href: "/miners" }
  ]



  // Mining Pools - Full catalog
  const [selectedPoolFilter, setSelectedPoolFilter] = useState<'all' | 'beginner' | 'low-fee' | 'decentralized'>('all')
  

  const filteredPools = selectedPoolFilter === 'all'
    ? miningPools
    : miningPools.filter(pool => pool.tags.includes(selectedPoolFilter))


  // Live metrics from centralized network metrics
  const liveMetrics = [
    { label: t('metrics.networkHashrate.label'), value: formatHashrate(networkMetrics), trend: networkMetrics.hashrate.trend, icon: Zap, comment: t('metrics.networkHashrate.comment') },
    { label: t('metrics.difficulty.label'), value: formatDifficulty(networkMetrics), trend: networkMetrics.difficulty.trend, icon: BarChart3, comment: t('metrics.difficulty.comment') },
    { label: t('metrics.blockTime.label'), value: formatBlockTime(networkMetrics), trend: networkMetrics.blockTime.status, icon: Clock, comment: t('metrics.blockTime.comment') },
    { label: t('metrics.blockReward.label'), value: formatBlockReward(networkMetrics), trend: t('metrics.blockReward.trend', { remaining: networkMetrics.supply.left }), icon: Coins, comment: t('metrics.blockReward.comment') },
    { label: t('metrics.activeMiners.label'), value: formatActiveMiners(networkMetrics), trend: networkMetrics.activeMiners.trend, icon: Users, comment: t('metrics.activeMiners.comment') },
    { label: t('metrics.miningPools.label'), value: formatMiningPools(networkMetrics), trend: networkMetrics.miningPools.status, icon: Globe, comment: t('metrics.miningPools.comment') }
  ]


  // FAQ for miners
  const faqs = [
    {
      q: t('faq.questions.4.question'),
      a: (
        <>
          Profitability depends on your electricity costs, hardware efficiency, and current network difficulty.
          Use our <a href="https://minerstat.com/coin/ERG" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">mining calculator</a> to
          estimate earnings. Many miners find Ergo profitable due to lower competition compared to major coins.
        </>
      )
    },
    {
      q: t('faq.questions.5.question'),
      a: (
        <>
          Ergo uses the Autolykos algorithm specifically designed to be ASIC-resistant through memory-hard computations.
          The algorithm can be updated if ASICs threaten decentralization. The community is committed to keeping mining
          accessible to GPU miners. Read more about <a href="/technology/secure-pow" className="text-orange-400 hover:text-orange-300 underline">Ergo's PoW design</a>.
        </>
      )
    },
    {
      q: t('faq.questions.6.question'),
      a: (
        <>
          Ergo has a strong, active development team led by experienced cryptographers and blockchain researchers.
          The project is open-source with regular updates and a clear roadmap. Check the
          <a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">GitHub activity</a> and
          join <a href="https://discord.com/invite/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">Discord</a> to
          see the active community.
        </>
      )
    },
    {
      q: t('faq.questions.7.question'),
      a: (
        <>
          Storage rent creates a sustainable fee mechanism that benefits miners long-term. Unused UTXOs pay rent over time,
          which goes to miners as additional rewards beyond block emissions. This ensures miner incentives continue after
          the emission schedule ends. Learn more about <a href="/technology/storage-rent" className="text-orange-400 hover:text-orange-300 underline">storage rent economics</a>.
        </>
      )
    },
    {
      q: "Which mining pools support Ergo?",
      a: (
        <>
          Popular Ergo mining pools include Herominers, Woolypooly, 2Miners, Nanopool, and F2Pool. Each has different
          fee structures and payout methods. Solo mining is also viable for larger operations.
          See our <a href="#pools" className="text-orange-400 hover:text-orange-300 underline">complete pool comparison</a> below for details.
        </>
      )
    },
    {
      q: t('faq.questions.0.question'),
      a: (
        <>
          You need a GPU with at least 4GB VRAM. NVIDIA GTX 1060 6GB or AMD RX 580 8GB are good starting points.
          More powerful cards like RTX 3070+ or RX 6700 XT+ will be more profitable. Check our
          <a href="#mining-guide" className="text-orange-400 hover:text-orange-300 underline">hardware guide</a> below for detailed recommendations and optimization tips.
        </>
      )
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
        <Breadcrumbs items={[...breadcrumbItems, { name: "For Miners", href: "#" }]} variant="hidden" />
        
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                    <Link href="#mining-guide">
                      <Pickaxe className="w-5 h-5 mr-2" />
                      {t('hero.cta')}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <a href="https://minerstat.com/coin/ERG" target="_blank" rel="noopener noreferrer">
                      <Calculator className="w-5 h-5 mr-2" />
                      {t('hero.checkProfitability')}
                    </a>
                  </Button>
                </div>
              </div>
              <motion.div 
                className="relative z-10" 
                whileHover={{ scale: 1.02 }} 
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">{t('hero.whyMine')}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {([
                      { key: 'asicResistant', icon: coreValues[0].icon },
                      { key: 'fairLaunch', icon: coreValues[1].icon },
                      { key: 'realUseCases', icon: coreValues[2].icon },
                      { key: 'storageRent', icon: coreValues[3].icon },
                    ] as const).map(({ key, icon: Icon }) => {
                      const cv = t.raw(`coreValues.${key}`) as { title: string; description: string; highlight: string }
                      return (
                        <div key={key} className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                          <div className="flex items-start gap-3">
                            <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white text-lg">{cv.title}</h4>
                              <p className="text-neutral-400 text-sm mb-1">{cv.description}</p>
                              <span className="text-orange-400 text-xs font-medium">{cv.highlight}</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Live Metrics Section */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              Live Mining Metrics
            </h2>
            <p className="text-center text-neutral-400 mb-2">
              Live on-chain data (updated in real time)
            </p>
            <p className="text-center text-orange-400 text-sm mb-12">
              Hashrate & difficulty → your mining rewards
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveMetrics.map((metric) => (
                <Card key={metric.label} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <metric.icon className="w-8 h-8 text-orange-400" />
                      <Badge variant="outline" className={`text-xs ${
                        metric.trend?.startsWith('+') ? 'border-green-500/30 text-green-400' :
                        metric.trend === 'stable' || metric.trend === 'growing' ? 'border-blue-500/30 text-blue-400' :
                        'border-orange-500/30 text-orange-400'
                      }`}>
                        {metric.trend ?? ''}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-neutral-400 text-sm mb-2">
                      {metric.label}
                    </div>
                    <div className="text-xs text-neutral-400">
                      {metric.comment}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                <a href="https://explorer.ergoplatform.com" target="_blank" rel="noopener noreferrer">
                  <Activity className="w-4 h-4 mr-2" />
                  View on Explorer
                </a>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Mining Profitability Calculator */}
        <motion.section 
          className="py-16 px-4 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">
                {t('calculator.title')} <span className="text-orange-400">{t('calculator.titleHighlight')}</span> {t('calculator.titleSuffix')}
              </h2>
              <p className="text-xl text-neutral-300">
                {t('calculator.subtitle')}
              </p>
            </div>

            <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Input Controls */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-white font-semibold flex items-center gap-2">
                          <Zap className="w-5 h-5 text-orange-400" />
                          {t('calculator.hashrate')}
                        </label>
                        <span className="text-orange-400 font-bold text-lg">{hashrate}</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="500"
                        step="10"
                        value={hashrate}
                        onChange={(e) => setHashrate(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-neutral-400 mt-1">
                        <span>10 MH/s</span>
                        <span>500 MH/s</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-white font-semibold flex items-center gap-2">
                          <Cpu className="w-5 h-5 text-orange-400" />
                          {t('calculator.power')}
                        </label>
                        <span className="text-orange-400 font-bold text-lg">{powerConsumption}W</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="400"
                        step="10"
                        value={powerConsumption}
                        onChange={(e) => setPowerConsumption(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-neutral-400 mt-1">
                        <span>50W</span>
                        <span>400W</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-white font-semibold flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-orange-400" />
                          {t('calculator.electricity')}
                        </label>
                        <span className="text-orange-400 font-bold text-lg">${electricityCost.toFixed(3)}</span>
                      </div>
                      <input
                        type="range"
                        min="0.01"
                        max="0.50"
                        step="0.01"
                        value={electricityCost}
                        onChange={(e) => setElectricityCost(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-neutral-400 mt-1">
                        <span>$0.01</span>
                        <span>$0.50</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-white font-semibold flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-orange-400" />
                          {t('calculator.ergPrice')}
                        </label>
                        <span className="text-orange-400 font-bold text-lg">${ergPrice.toFixed(2)}</span>
                      </div>
                      <input
                        type="range"
                        min="0.50"
                        max="10.00"
                        step="0.10"
                        value={ergPrice}
                        onChange={(e) => setErgPrice(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-neutral-400 mt-1">
                        <span>$0.50</span>
                        <span>$10.00</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-white font-semibold flex items-center gap-2">
                          <Users className="w-5 h-5 text-orange-400" />
                          {t('calculator.poolFee')}
                        </label>
                        <span className="text-orange-400 font-bold text-lg">{poolFee}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="3"
                        step="0.1"
                        value={poolFee}
                        onChange={(e) => setPoolFee(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-neutral-400 mt-1">
                        <span>0%</span>
                        <span>3%</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-orange-500/20 to-orange-900/20 border border-orange-500/30 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/30 flex items-center justify-center">
                          <Coins className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-400">{t('calculator.dailyErgMined')}</p>
                          <p className="text-2xl font-bold text-white">{dailyErgEarned.toFixed(4)} ERG</p>
                        </div>
                      </div>
                      <div className="text-sm text-neutral-300">
                        ≈ ${dailyRevenue.toFixed(2)} USD/day
                      </div>
                    </div>

                    <div className="bg-black/60 border border-white/10 rounded-2xl p-6 space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                        <span className="text-neutral-400">{t('calculator.dailyRevenue')}</span>
                        <span className="text-green-400 font-bold">${dailyRevenue.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                        <span className="text-neutral-400">{t('calculator.dailyPowerCost')}</span>
                        <span className="text-red-400 font-bold">-${dailyPowerCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-white font-semibold text-lg">{t('calculator.dailyProfit')}</span>
                        <span className={`font-bold text-xl ${dailyProfit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          ${dailyProfit.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/60 border border-white/10 rounded-xl p-4">
                        <p className="text-sm text-neutral-400 mb-1">{t('calculator.monthly')}</p>
                        <p className={`text-xl font-bold ${monthlyProfit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          ${monthlyProfit.toFixed(2)}
                        </p>
                      </div>
                      <div className="bg-black/60 border border-white/10 rounded-xl p-4">
                        <p className="text-sm text-neutral-400 mb-1">{t('calculator.yearly')}</p>
                        <p className={`text-xl font-bold ${yearlyProfit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          ${yearlyProfit.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <p className="text-sm text-neutral-400">{t('calculator.roiTime')}</p>
                      </div>
                      <p className="text-2xl font-bold text-white">
                        {roiDays > 0 ? `${Math.round(roiDays)} days` : 'Not profitable'}
                      </p>
                      {roiDays > 0 && (
                        <p className="text-xs text-neutral-400 mt-1">
                          ≈ {(roiDays / 30).toFixed(1)} months
                        </p>
                      )}
                    </div>

                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                      <p className="text-xs text-orange-300 leading-relaxed">
                        {t('calculator.note')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Popular GPU Presets */}
                <div className="mt-8 pt-8 border-t border-neutral-700">
                  <p className="text-white font-semibold mb-4">{t('calculator.gpuPresets')}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button
                      onClick={() => { setHashrate(130); setPowerConsumption(120); }}
                      className="bg-black/60 hover:bg-black/80 border border-white/10 hover:border-orange-500/50 rounded-lg p-3 transition-all duration-200"
                    >
                      <p className="text-white font-medium text-sm">RTX 3060 Ti</p>
                      <p className="text-xs text-neutral-400">130 MH/s · 120W</p>
                    </button>
                    <button
                      onClick={() => { setHashrate(180); setPowerConsumption(150); }}
                      className="bg-black/60 hover:bg-black/80 border border-white/10 hover:border-orange-500/50 rounded-lg p-3 transition-all duration-200"
                    >
                      <p className="text-white font-medium text-sm">RTX 3070</p>
                      <p className="text-xs text-neutral-400">180 MH/s · 150W</p>
                    </button>
                    <button
                      onClick={() => { setHashrate(150); setPowerConsumption(130); }}
                      className="bg-black/60 hover:bg-black/80 border border-white/10 hover:border-orange-500/50 rounded-lg p-3 transition-all duration-200"
                    >
                      <p className="text-white font-medium text-sm">RX 6600 XT</p>
                      <p className="text-xs text-neutral-400">150 MH/s · 130W</p>
                    </button>
                    <button
                      onClick={() => { setHashrate(220); setPowerConsumption(180); }}
                      className="bg-black/60 hover:bg-black/80 border border-white/10 hover:border-orange-500/50 rounded-lg p-3 transition-all duration-200"
                    >
                      <p className="text-white font-medium text-sm">RX 6800</p>
                      <p className="text-xs text-neutral-400">220 MH/s · 180W</p>
                    </button>
                  </div>
                </div>

                {/* CTA to start mining */}
                <div className="mt-8 pt-8 border-t border-neutral-700">
                  <div className="bg-gradient-to-r from-green-500/10 to-green-900/10 border border-green-500/30 rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{t('calculator.readyToStart')}</h3>
                    <p className="text-neutral-300 mb-4">
                      Follow our step-by-step guide to get your GPU mining ERG in 10 minutes
                    </p>
                    <Button asChild className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl border border-green-500/50">
                      <Link href="#mining-guide">
                        <Pickaxe className="w-4 h-4 mr-2" />
                        Start Mining Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Mining Pools Section */}
        <motion.section 
          id="pools"
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              {t('pools.title')} <span className="text-orange-400">{t('pools.titleHighlight')}</span> {t('pools.titleSuffix')}
            </h2>
            <p className="text-center text-neutral-400 mb-8">
              Choose a pool based on fees, features, and your location
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button
                variant={selectedPoolFilter === 'all' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPoolFilter('all')}
                className={selectedPoolFilter === 'all' 
                  ? "bg-orange-500 text-black hover:bg-orange-600" 
                  : "border-neutral-700 text-neutral-300 hover:bg-neutral-900/60"}
              >
                All Pools
              </Button>
              <Button
                variant={selectedPoolFilter === 'beginner' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPoolFilter('beginner')}
                className={selectedPoolFilter === 'beginner' 
                  ? "bg-green-500 text-black hover:bg-green-600" 
                  : "border-green-500/30 text-green-400 hover:bg-green-500/10"}
              >
                <Sparkles className="w-4 h-4 mr-1" />
                For Beginners
              </Button>
              <Button
                variant={selectedPoolFilter === 'low-fee' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPoolFilter('low-fee')}
                className={selectedPoolFilter === 'low-fee' 
                  ? "bg-orange-500 text-black hover:bg-orange-600" 
                  : "border-orange-500/30 text-orange-400 hover:bg-orange-500/10"}
              >
                <Coins className="w-4 h-4 mr-1" />
                Lowest Fees
              </Button>
              <Button
                variant={selectedPoolFilter === 'decentralized' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPoolFilter('decentralized')}
                className={selectedPoolFilter === 'decentralized' 
                  ? "bg-purple-500 text-white hover:bg-purple-600" 
                  : "border-purple-500/30 text-purple-400 hover:bg-purple-500/10"}
              >
                <Network className="w-4 h-4 mr-1" />
                Decentralized
              </Button>
            </div>

            {/* Pool Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPools.map((pool) => (
                <Card key={pool.name} className="bg-black/80 border border-white/10 rounded-3xl hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{pool.name}</h3>
                      <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                        {pool.fee} fee
                      </Badge>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-400">{t('pools.hashrate')}</span>
                        <span className="text-white font-medium">{pool.hashrate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-400">{t('pools.miners')}</span>
                        <span className="text-white font-medium">{pool.miners.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-400">{t('pools.minPayout')}</span>
                        <span className="text-white font-medium">{pool.minPayout}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-400">{t('pools.payment')}</span>
                        <span className="text-white font-medium">{pool.paymentSystem}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {pool.servers.map((server) => (
                        <Badge key={server} variant="outline" className="text-xs border-neutral-700 text-neutral-400">
                          {server}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {pool.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="text-xs text-neutral-400">
                          {feature} •
                        </span>
                      ))}
                    </div>

                    <a
                      href={pool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 transition-colors"
                    >
                      Visit Pool
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPools.length === 0 && (
              <div className="text-center py-8">
                <p className="text-neutral-400">{t('pools.noPoolsFound')}</p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Mining Software Section */}
        <motion.section 
          id="software"
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              {t('software.title')} <span className="text-orange-400">{t('software.titleHighlight')}</span>
            </h2>
            <p className="text-center text-neutral-400 mb-8">
              Choose the right miner for your GPU
            </p>

            <Card className="bg-black/80 border border-white/10 rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-neutral-800">
                        <th className="text-left p-4 text-sm font-medium text-neutral-400">{t('software.headers.software')}</th>
                        <th className="text-left p-4 text-sm font-medium text-neutral-400">{t('software.headers.gpuSupport')}</th>
                        <th className="text-left p-4 text-sm font-medium text-neutral-400">{t('software.headers.devFee')}</th>
                        <th className="text-left p-4 text-sm font-medium text-neutral-400">{t('software.headers.bestFor')}</th>
                        <th className="text-left p-4 text-sm font-medium text-neutral-400"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {(t.raw('software.items') as Array<{ name: string; gpus: string[]; fee: string; recommended: string }>).map((sw, idx) => (
                        <tr key={sw.name} className="border-b border-neutral-800 last:border-0 hover:bg-neutral-900/30 transition-colors group">
                          <td className="p-4 font-medium text-white">{sw.name}</td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              {sw.gpus.map(gpu => (
                                <Badge key={gpu} variant="outline" className="border-neutral-700 text-xs">
                                  {gpu}
                                </Badge>
                              ))}
                            </div>
                          </td>
                          <td className="p-4 text-sm text-neutral-300">{sw.fee}</td>
                          <td className="p-4 text-sm text-neutral-400">{sw.recommended}</td>
                          <td className="p-4">
                            <a href={miningSoftware[idx]?.download} target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-orange-400 group-hover:text-orange-400 transition-colors">
                                <Download className="w-4 h-4" />
                              </Button>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
              <p className="text-sm text-orange-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t('software.newToMining')}</span>
              </p>
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
              Why Ergo vs BTC / ETH / XMR?
            </h2>
            <p className="text-xl text-center text-neutral-300 mb-12">
              Ergo is designed so that GPU miners can meaningfully participate in securing a useful network, not just chase pump-and-dumps.
            </p>
            
            <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 mb-12 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Mining Comparison: Ergo vs BTC/ETH/XMR
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[900px]">
                    <caption className="sr-only">Mining platform comparison</caption>
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left p-4 font-semibold text-orange-400">{t('comparison.headers.criterion')}</th>
                        <th className="text-left p-4 font-semibold text-[#F7931A]">{t('comparison.headers.bitcoin')}</th>
                        <th className="text-left p-4 font-semibold text-[#627EEA]">{t('comparison.headers.ethereum')}</th>
                        <th className="text-left p-4 font-semibold text-[#FF6600]">{t('comparison.headers.monero')}</th>
                        <th className="text-left p-4 font-semibold text-orange-400">{t('comparison.headers.ergo')}</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      {(t.raw('comparison.rows') as Array<{
                        criterion: string;
                        bitcoin: { status: string; text: string };
                        ethereum: { status: string; text: string };
                        monero: { status: string; text: string };
                        ergo: { status: string; text: string };
                      }>).map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-neutral-800 hover:bg-neutral-800/30">
                          <th scope="row" className="p-4 font-medium text-white">{row.criterion}</th>
                          <td className="p-4 text-sm">
                            <Badge
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                row.bitcoin.status === "good" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                row.bitcoin.status === "warning" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" :
                                "bg-red-500/20 text-red-400 border-red-500/30"
                              }`}
                            >
                              {row.bitcoin.text}
                            </Badge>
                          </td>
                          <td className="p-4 text-sm">
                            <Badge
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                row.ethereum.status === "good" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                row.ethereum.status === "warning" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" :
                                "bg-red-500/20 text-red-400 border-red-500/30"
                              }`}
                            >
                              {row.ethereum.text}
                            </Badge>
                          </td>
                          <td className="p-4 text-sm">
                            <Badge
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                row.monero.status === "good" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                row.monero.status === "warning" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" :
                                "bg-red-500/20 text-red-400 border-red-500/30"
                              }`}
                            >
                              {row.monero.text}
                            </Badge>
                          </td>
                          <td className="p-4 text-sm">
                            <Badge
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                row.ergo.status === "good" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                row.ergo.status === "warning" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" :
                                "bg-red-500/20 text-red-400 border-red-500/30"
                              }`}
                            >
                              {row.ergo.text}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-black/20 border-t border-neutral-700">
                  <p className="text-xs text-neutral-400 text-center">
                    Mining comparison focusing on accessibility, sustainability, and long-term viability for GPU miners. Updated: {new Date().toISOString().slice(0, 10)}.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                <Link href="/start/comparison">{t('comparison.deepDive')}</Link>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Mining Guide Section */}
        <motion.section 
          id="mining-guide"
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              Step-by-step: How to Start Mining Ergo
            </h2>
            <p className="text-center text-neutral-300 mb-12 max-w-3xl mx-auto">
              Clear onboarding process to get you mining ERG with your GPU setup.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {(t.raw('miningSteps.items') as Array<{ step: string; title: string; description: string; details: string[]; duration: string }>).map((step, index) => {
                const StepIcon = miningSteps[index]?.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <Card className="h-full bg-black/80 border border-white/10 rounded-3xl p-6 flex flex-col hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                          {StepIcon && <StepIcon className="w-5 h-5" aria-hidden="true" />}
                        </div>
                        <Badge variant="outline" className="bg-black/60 border-orange-500/30 text-orange-400 uppercase tracking-wider">
                          Step {step.step}
                        </Badge>
                        <span className="text-xs text-neutral-400">{step.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-neutral-300 text-sm mb-4 flex-1">{step.description}</p>
                      <div className="bg-black/60 border border-white/10 rounded-2xl p-4 mb-4">
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-xs text-neutral-300 flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                <Link href="/docs/miners/mining-guides">
                  <HardDrive className="w-5 h-5 mr-2" />
                  Open "Start Mining Ergo" Guide
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Mining Tools Section */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Mining Calculator & Tools
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {(t.raw('tools.items') as Array<{ name: string; description: string }>).map((toolItem, idx) => {
                const tool = miningTools[idx]
                if (!tool) return null
                return (
                  <Card key={toolItem.name} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-500/50 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                          <tool.icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {toolItem.name}
                        </h3>
                      </div>
                      <p className="text-neutral-300 mb-6">
                        {toolItem.description}
                      </p>
                      <div className="space-y-3">
                        {tool.type === 'external' ? (
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group"
                          >
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <span>{t('tools.openTool')}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <Link
                            href={tool.url}
                            className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group"
                          >
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <span>{t('tools.viewGuide')}</span>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
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
                      <div className="text-neutral-300 leading-relaxed">
                        {faq.a}
                      </div>
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
              {t('joinNetwork.title')} <span className="text-orange-400">{t('joinNetwork.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-center text-neutral-300 mb-12">
              Ready to start mining? Choose your next step
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/docs/miners/mining-guides"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Pickaxe className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{t('joinNetwork.startMining.title')}</h3>
                        <p className="text-orange-400 text-sm">{t('joinNetwork.startMining.subtitle')}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Step-by-step setup guide with tools and optimization tips
                </p>
              </Link>

              <a
                href="https://discord.com/invite/ergo-platform-668903786361651200"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Users className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{t('joinNetwork.joinChat.title')}</h3>
                        <p className="text-orange-400 text-sm">{t('joinNetwork.joinChat.subtitle')}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Connect with experienced miners and get real-time help
                </p>
              </a>

              <Link
                href="/technology/storage-rent"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{t('joinNetwork.learnEconomics.title')}</h3>
                        <p className="text-orange-400 text-sm">{t('joinNetwork.learnEconomics.subtitle')}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Understand Ergo's sustainable mining economics and storage rent
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
                  <Coins className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">{t('joinNetwork.holdLongTerm.title')}</p>
                  <p className="text-neutral-400 text-sm">{t('joinNetwork.holdLongTerm.description')}</p>
                </div>
              </div>
              <Link 
                href="/hodlers"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400 hover:bg-orange-500/20 hover:border-orange-400/50 transition-all font-medium text-sm whitespace-nowrap"
              >
                For Hodlers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Topic Cluster Related Content */}
        <ClusterRelatedContent 
          currentUrl="/miners"
          title="Explore Mining"
          subtitle="Deep dive into Ergo mining technology and resources"
          maxItems={6}
          showPillarLink={false}
        />

        {/* Email Capture Form */}
        <FinalCTASimple 
          title="Stay Updated on Mining"
          description="Get the latest mining guides, profitability updates, and technical developments delivered to your inbox"
        />

      </div>
      
      {/* Back to Top button for long page */}
      <BackToTop />
    </BackgroundWrapper>
  )
}
