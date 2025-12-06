"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect */

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { useLocalizedPath } from "@/hooks/use-localized-path"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { HeroPattern, FeatureCard, StatsGrid, type StatsGridItem } from "@/components/ui-kit/patterns"
import { 
  WatermarkHex, 
  HexagonalGrid, 
  FloatingParticles,
  GlitchHex,
  UndergroundManifesto,
  MathematicalPattern
} from "@/components/ui-kit/signature-effects"
import { useLocalStorage } from "@/src/hooks/use-local-storage"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"
import {
  ArrowRight,
  User,
  Code,
  Cpu,
  LineChart,
  BookOpen,
  Rocket,
  CheckCircle2,
  Circle,
  Zap,
  Shield,
  Wallet,
  TestTube,
  Send,
  GraduationCap,
  Target,
  Brain,
  Network,
  ChevronRight,
  Clock,
  Award,
  Users,
  GitBranch,
  Sparkles,
  HelpCircle
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Journey = "new" | "explore" | "build" | "mine" | "invest"

interface Step {
  id: string
  title: string
  description: string
  icon: LucideIcon
  href: string
  duration?: string
}

const journeys: Record<Journey, {
  title: string
  subtitle: string
  icon: LucideIcon
  color: string
  gradient: string
  steps: Step[]
}> = {
  new: {
    title: "I'm New to Crypto",
    subtitle: "Start from the basics",
    icon: User,
    color: "text-green-400",
    gradient: "from-green-500/20 to-transparent",
    steps: [
      {
        id: "why",
        title: "Why Ergo Exists",
        description: "Understand the problems we solve",
        icon: Zap,
        href: "/start/introduction",
        duration: "2 min"
      },
      {
        id: "wallet",
        title: "Get a Wallet",
        description: "Download and set up securely",
        icon: Wallet,
        href: "/wallet",
        duration: "5 min"
      },
      {
        id: "testnet",
        title: "Try Test Coins",
        description: "Get free testnet ERG to practice",
        icon: TestTube,
        href: "/wallet/testnet-faucet",
        duration: "2 min"
      },
      {
        id: "send",
        title: "Send First Transaction",
        description: "Learn by doing - send ERG",
        icon: Send,
        href: "/wallet/send",
        duration: "3 min"
      },
      {
        id: "security",
        title: "Stay Safe",
        description: "Essential security practices",
        icon: Shield,
        href: "/start/security-tips",
        duration: "5 min"
      }
    ]
  },
  explore: {
    title: "I Want to Learn",
    subtitle: "Deep dive into Ergo",
    icon: BookOpen,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-transparent",
    steps: [
      {
        id: "compare",
        title: "Ergo vs Others",
        description: "Compare with Bitcoin, Ethereum, Monero",
        icon: Zap,
        href: "/learn/comparison",
        duration: "10 min"
      },
      {
        id: "features",
        title: "Unique Tech",
        description: "eUTXO, Sigma Protocols explained",
        icon: Code,
        href: "/technology/features",
        duration: "15 min"
      },
      {
        id: "privacy",
        title: "Privacy Features",
        description: "How Ergo protects your data",
        icon: Shield,
        href: "/learn/censorship-resistance",
        duration: "8 min"
      },
      {
        id: "stories",
        title: "Real Use Cases",
        description: "Community success stories",
        icon: User,
        href: "/community/stories",
        duration: "12 min"
      }
    ]
  },
  build: {
    title: "I'm a Developer",
    subtitle: "Build on Ergo",
    icon: Code,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-transparent",
    steps: [
      {
        id: "hello",
        title: "Hello World",
        description: "Your first ErgoScript contract",
        icon: Code,
        href: "/docs/developers",
        duration: "15 min"
      },
      {
        id: "playground",
        title: "Try Playground",
        description: "Interactive contract editor",
        icon: TestTube,
        href: "/docs/developers/playground",
        duration: "10 min"
      },
      {
        id: "sdk",
        title: "SDKs & Tools",
        description: "Libraries for your language",
        icon: Zap,
        href: "/docs/developers/tooling",
        duration: "Browse"
      },
      {
        id: "community",
        title: "Join Dev Chat",
        description: "Get help from core devs",
        icon: User,
        href: "/community/developers",
        duration: "Now"
      }
    ]
  },
  mine: {
    title: "I Want to Mine",
    subtitle: "Secure the network",
    icon: Cpu,
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-transparent",
    steps: [
      {
        id: "guide",
        title: "Mining Guide",
        description: "Autolykos v2 for GPUs",
        icon: Cpu,
        href: "/miners",
        duration: "20 min"
      },
      {
        id: "pools",
        title: "Choose a Pool",
        description: "Compare pools and fees",
        icon: Zap,
        href: "/miners#pools",
        duration: "10 min"
      },
      {
        id: "calc",
        title: "Calculate Profit",
        description: "Check if it's worth it",
        icon: LineChart,
        href: "/miners#calculator",
        duration: "5 min"
      },
      {
        id: "node",
        title: "Run a Node",
        description: "Advanced: full node setup",
        icon: Shield,
        href: "/docs/developers/infrastructure",
        duration: "30 min"
      }
    ]
  },
  invest: {
    title: "I'm an Investor",
    subtitle: "Understand the asset",
    icon: LineChart,
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-transparent",
    steps: [
      {
        id: "ecosystem",
        title: "Ecosystem Map",
        description: "What's built on Ergo",
        icon: Zap,
        href: "/docs/ecosystem",
        duration: "15 min"
      },
      {
        id: "tokenomics",
        title: "Tokenomics",
        description: "Supply, distribution, governance",
        icon: LineChart,
        href: "/docs/introduction/resources",
        duration: "10 min"
      },
      {
        id: "partners",
        title: "Partnerships",
        description: "Major integrations and users",
        icon: User,
        href: "/ecosystem/partnerships",
        duration: "8 min"
      },
      {
        id: "market",
        title: "Track Markets",
        description: "Price, volume, analytics",
        icon: LineChart,
        href: "/ecosystem/market",
        duration: "Live"
      }
    ]
  }
}

// Stats for the page
const statsItems: StatsGridItem[] = [
  { value: "5", label: "Learning Paths", icon: Target, color: "text-orange-400" },
  { value: "< 30min", label: "Quick Start", icon: Clock, color: "text-orange-400" },
  { value: "100%", label: "Open Source", icon: GitBranch, color: "text-orange-400" },
  { value: "24/7", label: t('community'), icon: Users, color: "text-orange-400" }
]

export default function StartPage() {
  const t = useTranslations('start')
  const locale = useLocale()

  const localizedPath = useLocalizedPath()
  const [selectedJourney, setSelectedJourney] = useState<Journey | null>(null)
  const [completedSteps, setCompletedSteps] = useLocalStorage<Record<string, boolean>>(
    "ergo_start_completed",
    {}
  )
  const [hasMounted, setHasMounted] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Get localized journeys data
  const getLocalizedJourneys = () => {
    const localizedJourneys: Record<Journey, {
      title: string
      subtitle: string
      icon: LucideIcon
      color: string
      gradient: string
      steps: Step[]
    }> = {
      new: {
        title: t('journeys.new.title'),
        subtitle: t('journeys.new.subtitle'),
        icon: User,
        color: "text-green-400",
        gradient: "from-green-500/20 to-transparent",
        steps: [
          {
            id: "why",
            title: t('journeys.new.steps.why.title'),
            description: t('journeys.new.steps.why.description'),
            icon: Zap,
            href: "/start/introduction",
            duration: "2 min"
          },
          {
            id: "wallet",
            title: t('journeys.new.steps.wallet.title'),
            description: t('journeys.new.steps.wallet.description'),
            icon: Wallet,
            href: "/wallet",
            duration: "5 min"
          },
          {
            id: "testnet",
            title: t('journeys.new.steps.testnet.title'),
            description: t('journeys.new.steps.testnet.description'),
            icon: TestTube,
            href: "/wallet/testnet-faucet",
            duration: "2 min"
          },
          {
            id: "send",
            title: t('journeys.new.steps.send.title'),
            description: t('journeys.new.steps.send.description'),
            icon: Send,
            href: "/wallet/send",
            duration: "3 min"
          },
          {
            id: "security",
            title: t('journeys.new.steps.security.title'),
            description: t('journeys.new.steps.security.description'),
            icon: Shield,
            href: "/start/security-tips",
            duration: "5 min"
          }
        ]
      },
      explore: {
        title: t('journeys.explore.title'),
        subtitle: t('journeys.explore.subtitle'),
        icon: BookOpen,
        color: "text-blue-400",
        gradient: "from-blue-500/20 to-transparent",
        steps: [
          {
            id: "compare",
            title: t('journeys.explore.steps.compare.title'),
            description: t('journeys.explore.steps.compare.description'),
            icon: Zap,
            href: "/learn/comparison",
            duration: "10 min"
          },
          {
            id: "features",
            title: t('journeys.explore.steps.features.title'),
            description: t('journeys.explore.steps.features.description'),
            icon: Code,
            href: "/technology/features",
            duration: "15 min"
          },
          {
            id: "privacy",
            title: t('journeys.explore.steps.privacy.title'),
            description: t('journeys.explore.steps.privacy.description'),
            icon: Shield,
            href: "/learn/censorship-resistance",
            duration: "8 min"
          },
          {
            id: "stories",
            title: t('journeys.explore.steps.stories.title'),
            description: t('journeys.explore.steps.stories.description'),
            icon: User,
            href: "/community/stories",
            duration: "12 min"
          }
        ]
      },
      build: {
        title: t('journeys.build.title'),
        subtitle: t('journeys.build.subtitle'),
        icon: Code,
        color: "text-purple-400",
        gradient: "from-purple-500/20 to-transparent",
        steps: [
          {
            id: "hello",
            title: t('journeys.build.steps.hello.title'),
            description: t('journeys.build.steps.hello.description'),
            icon: Code,
            href: "/docs/developers",
            duration: "15 min"
          },
          {
            id: "playground",
            title: t('journeys.build.steps.playground.title'),
            description: t('journeys.build.steps.playground.description'),
            icon: TestTube,
            href: "/docs/developers/playground",
            duration: "10 min"
          },
          {
            id: "sdk",
            title: t('journeys.build.steps.sdk.title'),
            description: t('journeys.build.steps.sdk.description'),
            icon: Zap,
            href: "/docs/developers/tooling",
            duration: "Browse"
          },
          {
            id: "community",
            title: t('journeys.build.steps.community.title'),
            description: t('journeys.build.steps.community.description'),
            icon: User,
            href: "/community/developers",
            duration: "Now"
          }
        ]
      },
      mine: {
        title: t('journeys.mine.title'),
        subtitle: t('journeys.mine.subtitle'),
        icon: Cpu,
        color: "text-orange-400",
        gradient: "from-orange-500/20 to-transparent",
        steps: [
          {
            id: "hardware",
            title: t('journeys.mine.steps.hardware.title'),
            description: t('journeys.mine.steps.hardware.description'),
            icon: Cpu,
            href: "/use/mining",
            duration: "20 min"
          },
          {
            id: "pool",
            title: t('journeys.mine.steps.pool.title'),
            description: t('journeys.mine.steps.pool.description'),
            icon: Zap,
            href: "/use/mining-pools",
            duration: "10 min"
          },
          {
            id: "software",
            title: t('journeys.mine.steps.software.title'),
            description: t('journeys.mine.steps.software.description'),
            icon: LineChart,
            href: "/use/mining-calculator",
            duration: "5 min"
          },
          {
            id: "monitor",
            title: t('journeys.mine.steps.monitor.title'),
            description: t('journeys.mine.steps.monitor.description'),
            icon: Shield,
            href: "/docs/developers/infrastructure",
            duration: "30 min"
          }
        ]
      },
      invest: {
        title: t('journeys.invest.title'),
        subtitle: t('journeys.invest.subtitle'),
        icon: LineChart,
        color: "text-yellow-400",
        gradient: "from-yellow-500/20 to-transparent",
        steps: [
          {
            id: "research",
            title: t('journeys.invest.steps.research.title'),
            description: t('journeys.invest.steps.research.description'),
            icon: Zap,
            href: "/docs/ecosystem",
            duration: "15 min"
          },
          {
            id: "exchange",
            title: t('journeys.invest.steps.exchange.title'),
            description: t('journeys.invest.steps.exchange.description'),
            icon: LineChart,
            href: "/docs/introduction/resources",
            duration: "10 min"
          },
          {
            id: "storage",
            title: t('journeys.invest.steps.storage.title'),
            description: t('journeys.invest.steps.storage.description'),
            icon: User,
            href: "/ecosystem/partnerships",
            duration: "8 min"
          },
          {
            id: "defi",
            title: t('journeys.invest.steps.defi.title'),
            description: t('journeys.invest.steps.defi.description'),
            icon: LineChart,
            href: "/ecosystem/market",
            duration: "Live"
          }
        ]
      }
    }
    return localizedJourneys
  }
  
  // Responsive and accessibility hooks
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()
  const animationConfig = getAnimationConfig(isMobile, prefersReducedMotion)

  // Prevent hydration mismatch
  useEffect(() => {
    setHasMounted(true)
    const timer = setTimeout(() => {
      setIsInitialized(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const toggleStep = (stepId: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }))
  }

  const localizedJourneys = getLocalizedJourneys()
  const journey = selectedJourney ? localizedJourneys[selectedJourney] : null
  const completedCount = journey 
    ? journey.steps.filter(step => completedSteps[step.id]).length 
    : 0
  const totalSteps = journey ? journey.steps.length : 0
  const progress = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.1 : 0.4 }
    },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : -20 }
  }

  const scaleOnHover = {
    hover: { 
      scale: prefersReducedMotion ? 1 : animationConfig.scale, 
      transition: { duration: animationConfig.duration } 
    },
    tap: { scale: prefersReducedMotion ? 1 : 0.98 }
  }

  // Prevent hydration issues
  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t('title') || 'Start Your Journey'}
            </h1>
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      {isInitialized && (
        <>
          <HexagonalGrid className="opacity-[0.02]" />
          <FloatingParticles count={10} className="opacity-60" />
          <MathematicalPattern className="opacity-[0.02]" />
        </>
      )}
      <WatermarkHex className="opacity-[0.01] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section with signature effects */}
        <section className="mb-16 relative">
          <div className="absolute top-0 right-0 w-24 h-24">
            <GlitchHex size={96} />
          </div>
          
          <HeroPattern
            title={t('title').split(' ').slice(0, -1).join(' ') || 'Start Your'}
            highlight={t('title').split(' ').slice(-1)[0] || 'Journey'}
            subtitle={t('subtitle') || 'Choose your path into Ergo'}
            description={t('description') || 'Pick what describes you best, and we\'ll guide you through everything you need to know.'}
            primaryAction={selectedJourney ? {
              text: t('common.viewAll') || "Change Path",
              icon: ArrowRight,
              onClick: () => setSelectedJourney(null)
            } : {
              text: t('common.getStarted') || t('getStarted'),
              icon: Rocket,
              onClick: () => setSelectedJourney("new")
            }}
            secondaryAction={{
              text: "Skip to Docs",
              icon: BookOpen,
              onClick: () => window.location.href = "/docs"
            }}
          />
        </section>

        {/* Stats Grid */}
        {!selectedJourney && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInitialized ? 1 : 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {statsItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 bg-neutral-900/50 border border-neutral-700 rounded-lg px-4 py-3 hover:border-orange-500/30 transition-all duration-300"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white">{item.value}</span>
                    <span className="text-xs text-gray-400">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        <AnimatePresence mode="wait">
          {!selectedJourney ? (
            /* Journey Selection using FeatureCard pattern */
            <motion.section 
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(Object.entries(localizedJourneys) as [Journey, typeof localizedJourneys[Journey]][]).map(([key, journey], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInitialized ? 1 : 0, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedJourney(key)}
                  className="cursor-pointer"
                >
                  <div className={`relative bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 h-full transition-all duration-300 hover:border-orange-500/50 hover:bg-neutral-900/80 bg-gradient-to-br ${journey.gradient} group`}>
                    {/* Badge */}
                    {key === "new" && (
                      <Badge className="absolute top-4 right-4 bg-orange-500/20 text-orange-400 border-orange-500/30">
                        Recommended
                      </Badge>
                    )}
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${journey.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <journey.icon className={`w-6 h-6 ${journey.color}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                      {journey.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{journey.subtitle}</p>
                    
                    {/* Steps info */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{journey.steps.length} steps • {
                        journey.steps.reduce((acc, step) => {
                          const duration = parseInt(step.duration || "0")
                          return acc + (isNaN(duration) ? 5 : duration)
                        }, 0)
                      } min total</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-orange-400 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.section>
          ) : (
            /* Selected Journey Steps */
            <motion.section 
              key="journey"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              {/* Progress Card */}
              {journey && (
                <Card className="bg-neutral-900/50 border border-neutral-700 p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${journey.gradient} flex items-center justify-center`}>
                        <journey.icon className={`w-6 h-6 ${journey.color}`} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{journey.title}</h2>
                        <p className="text-gray-400">{journey.subtitle}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedJourney(null)}
                      className="border-neutral-600 text-gray-300 hover:bg-neutral-800"
                    >
                      Change Path
                    </Button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Journey Progress</span>
                      <span className="text-orange-400 font-semibold">
                        {completedCount} of {totalSteps} completed
                      </span>
                    </div>
                    <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                    {completedCount === totalSteps && totalSteps > 0 && (
                      <div className="flex items-center gap-2 text-green-400 text-sm">
                        <Award className="w-4 h-4" />
                        Journey Complete!
                      </div>
                    )}
                  </div>
                </Card>
              )}

              {/* Steps Grid */}
              {journey && (
                <div className="grid gap-4">
                  {journey.steps.map((step, index) => {
                    const isCompleted = completedSteps[step.id]
                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ x: prefersReducedMotion ? 0 : 5 }}
                        className={`group relative bg-neutral-900/50 border rounded-xl p-6 transition-all ${
                          isCompleted 
                            ? 'border-green-500/30 bg-green-500/5' 
                            : 'border-neutral-700 hover:border-neutral-600'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          {/* Step Check */}
                          <button
                            onClick={() => toggleStep(step.id)}
                            className="flex-shrink-0 mt-1"
                            aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                          >
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {isCompleted ? (
                                <CheckCircle2 className="w-7 h-7 text-green-500" />
                              ) : (
                                <Circle className="w-7 h-7 text-gray-600 hover:text-gray-400 transition-colors" />
                              )}
                            </motion.div>
                          </button>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                                  <step.icon className="w-5 h-5 text-orange-400" />
                                  {step.title}
                                </h3>
                                <p className="text-gray-400">{step.description}</p>
                              </div>
                              <div className="flex items-center gap-3 flex-shrink-0">
                                {step.duration && (
                                  <Badge variant="outline" className="border-neutral-600">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {step.duration}
                                  </Badge>
                                )}
                                <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                                  <Button
                                    asChild
                                    size="sm"
                                    className={isCompleted 
                                      ? "bg-neutral-800 hover:bg-neutral-700 text-gray-300" 
                                      : "bg-orange-500 hover:bg-orange-600 text-black"
                                    }
                                  >
                                    <Link href={step.href}>
                                      {isCompleted ? 'Review' : 'Start'}
                                      <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                  </Button>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Progress indicator */}
                        {isCompleted && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            className="absolute bottom-0 left-0 h-0.5 bg-green-500 rounded-b-xl"
                          />
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              )}

              {/* Completion Celebration */}
              {completedCount === totalSteps && totalSteps > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-12 text-center"
                >
                  <div className="bg-gradient-to-r from-green-500/20 to-orange-500/20 border border-green-500/30 rounded-xl p-8">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 10, 0] }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Award className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Congratulations! 🎉</h3>
                    <p className="text-gray-400 mb-6">
                      You've completed the {journey?.title.toLowerCase()} journey. Ready for the next challenge?
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Button
                        onClick={() => setSelectedJourney(null)}
                        className="bg-orange-500 hover:bg-orange-600 text-black"
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Choose Another Path
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-neutral-600"
                      >
                        <Link href="/docs">
                          Explore Docs
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.section>
          )}
        </AnimatePresence>

        {/* Underground Manifesto - Hidden Easter Egg */}
        {selectedJourney === "build" && completedCount >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
              <Brain className="w-5 h-5 text-orange-400" />
              Developer Manifesto
            </h3>
            <UndergroundManifesto />
          </motion.div>
        )}

        {/* Quick Links Footer */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-neutral-800"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
              <Button
                asChild
                variant="outline"
                className="border-neutral-600 text-gray-300 hover:bg-neutral-800 hover:text-orange-400 hover:border-orange-500/50 min-w-[200px] transition-all duration-200"
              >
                <Link href={localizedPath("start/faq")}>
                  <HelpCircle className="w-4 h-4 mr-2" />
                  FAQ
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-black min-w-[200px] transition-all duration-200"
              >
                <Link href={localizedPath("start/community")}>
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
              <Button
                asChild
                variant="outline"
                className="border-neutral-600 text-gray-300 hover:bg-neutral-800 hover:text-orange-400 hover:border-orange-500/50 min-w-[200px] transition-all duration-200"
              >
                <Link href={localizedPath("start/quiz")}>
                  <Target className="w-4 h-4 mr-2" />
                  Take the Quiz
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
