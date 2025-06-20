"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  User,
  Code,
  Cpu,
  LineChart,
  BookOpen,
  Target,
  HelpCircle,
  Users,
  GraduationCap,
} from "lucide-react"
import { LucideIcon } from "lucide-react"

interface Path {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  href: string
  features: string[]
}

interface QuickAction {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

const userPaths: Path[] = [
  {
    icon: User,
    title: "New to Crypto?",
    subtitle: "Start your journey here",
    description: "Learn the absolute basics of blockchain and how Ergo works, no prior knowledge needed.",
    href: "/start/introduction",
    features: ["What is Blockchain?", "Ergo's Core Principles", "Setting Up Your First Wallet"],
  },
  {
    icon: GraduationCap,
    title: "Learn",
    subtitle: "Deepen your knowledge",
    description: "Explore in-depth articles, research papers, and documentation about Ergo's technology.",
    href: "/learn",
    features: ["eUTXO Model", "NIPoPoWs Explained", "ErgoScript Deep Dive"],
  },
  {
    icon: Code,
    title: "Developer",
    subtitle: "Build on Ergo",
    description: "Get started with the tools and resources you need to build powerful dApps on Ergo.",
    href: "/build",
    features: ["Developer SDKs", "Node & API Docs", "Smart Contract Examples"],
  },
  {
    icon: Cpu,
    title: "Miner",
    subtitle: "Secure the network",
    description: "Contribute to Ergo's security and earn rewards by running a node and mining ERG.",
    href: "/use/mining",
    features: ["Autolykos v2 Algorithm", "Mining Pool Guides", "Hardware Requirements"],
  },
  {
    icon: LineChart,
    title: "Investor",
    subtitle: "Understand the value",
    description: "Dive into Ergo's tokenomics, ecosystem, and the long-term vision behind the project.",
    href: "/ecosystem",
    features: ["Tokenomics (ERG)", "Ecosystem dApps", "Market Information"],
  },
]

const quickActions: QuickAction[] = [
  {
    title: "Take the Quiz",
    description: "Not sure where to start? Answer a few questions to find your perfect path.",
    href: "/start/quiz",
    icon: Target,
  },
  {
    title: "Read the FAQ",
    description: "Find answers to the most common questions about the Ergo platform.",
    href: "/start/faq",
    icon: HelpCircle,
  },
  {
    title: "Join the Community",
    description: "Connect with developers, enthusiasts, and researchers in our community.",
    href: "/start/community",
    icon: Users,
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

export default function StartPage() {
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
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">
            YOUR ERGO JOURNEY STARTS HERE
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pb-4">
            Welcome to Ergo
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're new to crypto or a seasoned expert, find your path in the Ergo ecosystem. Select a role
            below to get started.
          </p>
        </motion.section>

        {/* User Paths Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {userPaths.map((path) => (
            <motion.div variants={itemVariants} key={path.title} className="flex">
              <Card className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl flex flex-col transition-all duration-300 hover:border-orange-500/50 hover:scale-105">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <path.icon className="w-10 h-10 text-orange-400" />
                    <div>
                      <h2 className="text-2xl font-bold text-white">{path.title}</h2>
                      <p className="text-orange-400 text-sm">{path.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 flex-1">{path.description}</p>
                  <div className="space-y-2 mb-6">
                    {path.features.map((feature) => (
                      <div key={feature} className="flex items-center text-xs text-gray-300 gap-2">
                        <ArrowRight className="w-3 h-3 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="mt-auto w-full">
                    <Link href={path.href}>
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        {/* Quick Actions Section */}
        <motion.section variants={containerVariants} initial="hidden" animate="visible">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-10">
            Or, Jump Right In
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action) => (
              <motion.div variants={itemVariants} key={action.title}>
                <Link href={action.href}>
                  <Card className="bg-gray-900/50 border-gray-800/50 text-center h-full p-6 transition-all duration-300 hover:border-orange-500/50 hover:bg-gray-900/80">
                    <action.icon className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                    <p className="text-sm text-gray-400">{action.description}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
