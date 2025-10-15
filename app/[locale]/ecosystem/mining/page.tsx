"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { DigitalCounter } from "@/components/digital-counter"
import { 
  Server,
  Users,
  Activity,
  TrendingUp,
  ExternalLink,
  Globe,
  Shield,
  Zap,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Info,
  Cpu,
  HardDrive,
  Download,
  Github,
  Terminal,
  Wrench,
  Database,
  Cloud,
  ArrowUpRight,
  Clock,
  DollarSign,
  Star,
  Award,
  MessageCircle,
  HelpCircle,
  ChevronRight,
  Sparkles,
  Coins,
  Network,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { PoolCard, PoolCardSkeleton } from "@/components/mining/PoolCard"

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

export default function MiningEcosystemPage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'beginner' | 'low-fee' | 'decentralized'>('all')
  const [hashrateClicked, setHashrateClicked] = useState(false)

  // Mining Pools with real data
  const miningPools = [
    {
      name: "GetBlok",
      category: "large",
      url: "https://ergo.getblok.io",
      location: "Global",
      fee: "1%",
      paymentSystem: "PPLNS",
      minPayout: "0.5 ERG",
      hashrate: "45.2 TH/s",
      miners: 2543,
      poolShare: "21.5%",
      uptime: "99.9%",
      features: ["Auto-exchange", "Mobile app", "API access", "SSL/TLS"],
      mainFeatures: ["24/7 Support", "Auto-exchange", "Mobile App"],
      servers: ["EU", "US", "Asia"],
      tags: ["beginner", "stable", "popular"]
    },
    {
      name: "2Miners",
      category: "large",
      url: "https://2miners.com/erg-mining-pool",
      location: "Global",
      fee: "1%",
      paymentSystem: "PPLNS",
      minPayout: "0.1 ERG",
      hashrate: "38.7 TH/s",
      miners: 3218,
      poolShare: "18.4%",
      uptime: "99.8%",
      features: ["24/7 Support", "Telegram bot", "Email alerts", "DDoS protection"],
      mainFeatures: ["Telegram Bot", "Email Alerts", "24/7 Support"],
      servers: ["EU", "US", "Asia", "RU"],
      tags: ["beginner", "support"]
    },
    {
      name: "HeroMiners",
      category: "large",
      url: "https://ergo.herominers.com",
      location: "Global",
      fee: "0.9%",
      paymentSystem: "PROP",
      minPayout: "0.5 ERG",
      hashrate: "28.3 TH/s",
      miners: 1847,
      poolShare: "13.5%",
      uptime: "99.7%",
      features: ["SSL support", "Worker stats", "Profit calculator", "Discord bot"],
      mainFeatures: ["Low Fee", "Discord Bot", "Profit Calc"],
      servers: ["EU", "US", "Asia"],
      tags: ["low-fee", "decentralized"]
    },
    {
      name: "WoolyPooly",
      category: "medium",
      url: "https://woolypooly.com/en/coin/erg",
      location: "Europe",
      fee: "0.9%",
      paymentSystem: "PPLNS",
      minPayout: "0.5 ERG",
      hashrate: "22.1 TH/s",
      miners: 1234,
      poolShare: "10.5%",
      uptime: "99.6%",
      features: ["Solo mining", "Telegram bot", "MEV rewards", "Low latency"],
      mainFeatures: ["Solo Mining", "MEV Rewards", "Low Fee"],
      servers: ["EU", "US"],
      tags: ["low-fee", "decentralized"]
    },
    {
      name: "F2Pool",
      category: "large",
      url: "https://www.f2pool.com",
      location: "Asia",
      fee: "2%",
      paymentSystem: "PPS+",
      minPayout: "1 ERG",
      hashrate: "18.5 TH/s",
      miners: 892,
      poolShare: "8.8%",
      uptime: "99.9%",
      features: ["Mobile app", "Multi-coin", "Instant payments", "Chinese support"],
      mainFeatures: ["Multi-coin", "Instant Pay", "Mobile App"],
      servers: ["Asia", "US", "EU"],
      tags: ["decentralized"]
    },
    {
      name: "Kryptex Pool",
      category: "medium",
      url: "https://pool.kryptex.com/erg",
      location: "Europe",
      fee: "1%",
      paymentSystem: "PPLNS",
      minPayout: "0.5 ERG",
      hashrate: "12.4 TH/s",
      miners: 623,
      poolShare: "5.9%",
      uptime: "99.5%",
      features: ["Mining OS", "Instant payouts", "Profit switching", "Dashboard"],
      mainFeatures: ["Mining OS", "Profit Switch", "Dashboard"],
      servers: ["EU", "US"],
      tags: ["decentralized"]
    },
    {
      name: "Nanopool",
      category: "medium",
      url: "https://ergo.nanopool.org",
      location: "Global",
      fee: "1%",
      paymentSystem: "PPLNS",
      minPayout: "1 ERG",
      hashrate: "15.8 TH/s",
      miners: 1456,
      poolShare: "7.5%",
      uptime: "99.7%",
      features: ["Email notifications", "API", "Mobile app", "Multi-language"],
      mainFeatures: ["API Access", "Multi-lang", "Mobile App"],
      servers: ["EU", "US", "Asia", "AU"],
      tags: ["decentralized"]
    }
  ]

  // Mining Software - simplified
  const miningSoftware = [
    {
      name: "NBMiner",
      gpus: ["NVIDIA", "AMD"],
      fee: "2%",
      beginnerFriendly: true,
      recommended: "Best for mixed rigs",
      download: "https://github.com/NebuTech/NBMiner/releases"
    },
    {
      name: "T-Rex",
      gpus: ["NVIDIA"],
      fee: "1%",
      beginnerFriendly: true,
      recommended: "Best for NVIDIA cards",
      download: "https://github.com/trexminer/T-Rex/releases"
    },
    {
      name: "TeamRedMiner",
      gpus: ["AMD"],
      fee: "2%",
      beginnerFriendly: false,
      recommended: "Best for AMD cards",
      download: "https://github.com/todxx/teamredminer/releases"
    },
    {
      name: "lolMiner",
      gpus: ["NVIDIA", "AMD"],
      fee: "1%",
      beginnerFriendly: false,
      recommended: "Advanced users",
      download: "https://github.com/Lolliedieb/lolMiner-releases/releases"
    }
  ]

  const filteredPools = selectedFilter === 'all' 
    ? miningPools 
    : miningPools.filter(pool => pool.tags.includes(selectedFilter))

  const totalHashrate = miningPools.reduce((acc, pool) => acc + parseFloat(pool.hashrate), 0)
  const totalMiners = miningPools.reduce((acc, pool) => acc + pool.miners, 0)

  // Filter button configs with colors
  const filterButtons = [
    { 
      key: 'all', 
      label: 'All Pools', 
      icon: null,
      activeClass: 'bg-orange-500 text-black hover:bg-orange-600',
      inactiveClass: 'border-neutral-700 text-neutral-300 hover:bg-neutral-900/60'
    },
    { 
      key: 'beginner', 
      label: 'For Beginners', 
      icon: <Sparkles className="w-4 h-4 mr-1" />,
      activeClass: 'bg-green-500 text-black hover:bg-green-600',
      inactiveClass: 'border-green-500/30 text-green-400 hover:bg-green-500/10'
    },
    { 
      key: 'low-fee', 
      label: 'Lowest Fees', 
      icon: <Coins className="w-4 h-4 mr-1" />,
      activeClass: 'bg-orange-500 text-black hover:bg-orange-600',
      inactiveClass: 'border-orange-500/30 text-orange-400 hover:bg-orange-500/10'
    },
    { 
      key: 'decentralized', 
      label: 'Decentralized', 
      icon: <Network className="w-4 h-4 mr-1" />,
      activeClass: 'bg-purple-500 text-white hover:bg-purple-600',
      inactiveClass: 'border-purple-500/30 text-purple-400 hover:bg-purple-500/10'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10">
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  Ergo Mining <span className="text-orange-400">Ecosystem</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                  Explore the complete mining infrastructure. {totalMiners.toLocaleString()} miners securing the network.
                </p>
                <p className="text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  Fair launch, ASIC-resistant, truly decentralized. Find pools, software, and resources.
                </p>
                
                  <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50 group">
                    <Link href="/use/mining">
                      <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      I'm New - Start Here
                    </Link>
                    </Button>
                    <Button
                    size="lg"
                      variant="outline"
                    className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500/50 px-6 py-3 rounded-xl transition-all group"
                    onClick={() => document.getElementById('pools')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                    Browse Pools Directory
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

              {/* Network Stats Card with Easter Egg */}
                <motion.div
                className="relative z-10" 
                whileHover={{ scale: 1.02 }} 
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <Card className="bg-neutral-900/50 border border-neutral-700 backdrop-blur-sm p-8 rounded-xl hover:border-orange-500/30 transition-colors">
                    <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">Network Overview</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 cursor-pointer hover:border-orange-500/50 transition-colors"
                        onClick={() => setHashrateClicked(true)}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Activity className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Total Hashrate</span>
                        </div>
                        <DigitalCounter 
                          value={totalHashrate} 
                          suffix=" TH/s" 
                          duration={3000} 
                          className="text-lg font-mono text-white" 
                        />
                        <AnimatePresence>
                          {hashrateClicked && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="text-xs text-orange-400 mt-1"
                              onAnimationComplete={() => setTimeout(() => setHashrateClicked(false), 2000)}
                            >
                              Nice hashrate! 🚀
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-orange-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <Users className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Active Miners</span>
                        </div>
                        <DigitalCounter 
                          value={totalMiners} 
                          suffix="" 
                          duration={3000} 
                          className="text-lg font-mono text-white" 
                        />
                      </div>
                      <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-orange-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <Award className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Top Pool</span>
                        </div>
                        <p className="text-lg font-mono text-white">GetBlok</p>
                      </div>
                      <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-orange-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <DollarSign className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-neutral-400">Lowest Fee</span>
                        </div>
                        <p className="text-lg font-mono text-white">0.9%</p>
                        </div>
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
            {/* Mining Pools Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              id="pools"
              className="mb-16"
            >
              <SectionHeading text="MINING POOLS DIRECTORY" />
              
              {/* Filter Section with colored badges */}
              <div className="text-center mb-8">
                <p className="text-neutral-400 mb-6">
                  {selectedFilter === 'all' 
                    ? "All verified and active Ergo mining pools" 
                    : selectedFilter === 'beginner'
                      ? "Best pools for beginners with good support"
                      : selectedFilter === 'low-fee'
                        ? "Pools with fees ≤ 1%"
                        : "Smaller pools for better decentralization"}
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {filterButtons.map((filter) => (
                    <Button
                      key={filter.key}
                      variant={selectedFilter === filter.key ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFilter(filter.key as any)}
                      className={selectedFilter === filter.key 
                        ? filter.activeClass 
                        : filter.inactiveClass}
                    >
                      {filter.icon}
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Pool Cards */}
              <div className="grid lg:grid-cols-2 gap-6">
                {filteredPools.map((pool, i) => (
                  <motion.div key={pool.name} variants={itemVariants}>
                    <PoolCard pool={pool as any} />
                  </motion.div>
                ))}
              </div>

              {/* Example skeletons for future async data */}
              {/* <div className="grid lg:grid-cols-2 gap-6 mt-6">
                {[...Array(2)].map((_, i) => (
                  <PoolCardSkeleton key={i} />
                ))}
              </div> */}

              {filteredPools.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-neutral-400">No pools match your criteria</p>
            </div>
              )}
            </motion.div>

            {/* Mining Software Section with recommendations */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mb-16"
            >
              <SectionHeading text="MINING SOFTWARE" />
              
              {/* Quick tip for beginners */}
              <Alert className="mb-6 bg-orange-500/10 border-orange-500/30">
                <Sparkles className="h-4 w-4" />
                <AlertDescription>
                  <strong>New to mining?</strong> Start with NBMiner (mixed rigs) or T-Rex (NVIDIA only) for easiest setup.
                </AlertDescription>
              </Alert>
              
              <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full" aria-label="Ergo mining software options">
                      <thead>
                        <tr className="border-b border-neutral-800">
                          <th className="text-left p-4 text-sm font-medium text-neutral-400">Software</th>
                          <th className="text-left p-4 text-sm font-medium text-neutral-400">GPU Support</th>
                          <th className="text-left p-4 text-sm font-medium text-neutral-400">Dev Fee</th>
                          <th className="text-left p-4 text-sm font-medium text-neutral-400">Best For</th>
                          <th className="text-left p-4 text-sm font-medium text-neutral-400"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {miningSoftware.map((software, i) => (
                          <tr key={software.name} className="border-b border-neutral-800 last:border-0 hover:bg-neutral-900/30 transition-colors group">
                            <td className="p-4 font-medium text-white">{software.name}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                {software.gpus.map(gpu => (
                                  <Badge key={gpu} variant="outline" className="border-neutral-700 text-xs">
                                    {gpu}
                                  </Badge>
                                ))}
                              </div>
                            </td>
                            <td className="p-4 text-sm text-neutral-300">{software.fee}</td>
                            <td className="p-4 text-sm text-neutral-400">{software.recommended}</td>
                            <td className="p-4">
                              <Link href={software.download} target="_blank">
                                <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-orange-400 group-hover:text-orange-400 transition-colors">
                                  <Download className="w-4 h-4" />
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* SEO JSON-LD for software as FAQ-like list */}
              <Script id="software-faq-jsonld" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: miningSoftware.map((sw: any) => ({
                    '@type': 'Question',
                    name: `${sw.name} — supported GPUs and fee`,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: `GPUs: ${sw.gpus.join(', ')}. Dev fee: ${sw.fee}. Recommended: ${sw.recommended}.`
                    }
                  }))
                }) }}
              />
            </motion.div>

            {/* Quick FAQ Section */}
                <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mb-16"
            >
              <SectionHeading text="QUICK ANSWERS" />
              
              <div className="grid md:grid-cols-3 gap-6">
                <FadeIn>
                  <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl h-full hover:border-orange-500/30 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4" />
                        How to choose a pool?
                      </h3>
                      <p className="text-sm text-neutral-400">
                        Beginners: choose pools with good support. 
                        Advanced: optimize for fees and server location.
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl h-full hover:border-orange-500/30 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                        <Cpu className="w-4 h-4" />
                        Minimum requirements?
                      </h3>
                      <p className="text-sm text-neutral-400">
                        GPU with 4GB+ VRAM. RTX 3060 Ti or RX 6600 XT are popular choices.
                      </p>
                    </CardContent>
                  </Card>
        </FadeIn>
                <FadeIn delay={0.2}>
                  <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl h-full hover:border-orange-500/30 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 text-orange-400 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Expected earnings?
                      </h3>
                      <p className="text-sm text-neutral-400">
                        Depends on hashrate and electricity cost. 
                        <Link href="/use/mining#calculator" className="text-orange-400 hover:text-orange-300"> Use calculator →</Link>
                      </p>
                      </CardContent>
                    </Card>
                </FadeIn>
            </div>

              <div className="text-center mt-8">
                <Link href="/learn/faq">
                  <Button variant="ghost" className="text-neutral-400 hover:text-orange-400 group">
                    View all FAQs
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Final CTA */}
            <FadeIn>
              <Card className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/30 rounded-xl hover:border-orange-500/50 transition-colors">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Mining?</h3>
                  <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                    Join thousands of miners securing the Ergo network. Fair, decentralized, and profitable.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Link href="/use/mining">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold group">
                        Step-by-Step Guide
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    </Link>
                    <Link href="https://discord.gg/ergo" target="_blank">
                      <Button variant="outline" className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500/50 transition-all">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Get Help
                    </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  )
}