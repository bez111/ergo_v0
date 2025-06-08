"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  User,
  Code,
  Cpu,
  LineChart,
  BookOpen,
  Shield,
  Users,
  Target,
  ExternalLink,
  CheckCircle,
  Play,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { GlitchText } from "@/components/glitch-text"
import { DigitalCounter } from "@/components/digital-counter"

export default function StartPage() {
  const [hoveredPath, setHoveredPath] = useState<number | null>(null)

  const userPaths = [
    {
      icon: User,
      title: "New User",
      subtitle: "BLOCKCHAIN BEGINNER",
      description: "Just getting started with Ergo and blockchain technology",
      href: "/start/introduction",
      color: "from-blue-500 to-cyan-500",
      features: ["Basic Concepts", "Wallet Setup", "First Steps"],
      difficulty: "Beginner",
    },
    {
      icon: Code,
      title: "Developer",
      subtitle: "BUILD THE FUTURE",
      description: "Building applications and smart contracts on Ergo",
      href: "/build",
      color: "from-green-500 to-emerald-500",
      features: ["ErgoScript", "SDKs", "Documentation"],
      difficulty: "Advanced",
    },
    {
      icon: Cpu,
      title: "Miner",
      subtitle: "NETWORK GUARDIAN",
      description: "Contributing to network security through mining",
      href: "/use/mining",
      color: "from-purple-500 to-pink-500",
      features: ["Autolykos v2", "Mining Pools", "Hardware"],
      difficulty: "Intermediate",
    },
    {
      icon: LineChart,
      title: "Investor",
      subtitle: "VALUE BUILDER",
      description: "Interested in ERG as an investment or trading asset",
      href: "/ecosystem",
      color: "from-yellow-500 to-orange-500",
      features: ["Market Analysis", "Tokenomics", "Ecosystem"],
      difficulty: "Beginner",
    },
    {
      icon: BookOpen,
      title: "Researcher",
      subtitle: "KNOWLEDGE SEEKER",
      description: "Studying blockchain technology and cryptography",
      href: "/technology",
      color: "from-red-500 to-pink-500",
      features: ["Whitepapers", "Research", "Academic"],
      difficulty: "Expert",
    },
  ]

  const quickActions = [
    { title: "Take Quiz", description: "Find your path", href: "/start/quiz", icon: Target },
    { title: "Read FAQ", description: "Common questions", href: "/start/faq", icon: BookOpen },
    { title: "Join Community", description: "Connect with others", href: "/start/community", icon: Users },
    { title: "Get Wallet", description: "Secure storage", href: "/wallet", icon: Shield },
  ]

  const stats = [
    { label: "Active Users", value: "50K", suffix: "+" },
    { label: "Developers", value: "200", suffix: "+" },
    { label: "Projects", value: "100", suffix: "+" },
    { label: "Countries", value: "80", suffix: "+" },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/cyberpunk-grid.png')] opacity-5 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-lg flex items-center justify-center">
                  <Play className="w-8 h-8 text-black" />
                </div>
                <div className="text-left">
                  <GlitchText text="START YOUR" className="text-4xl md:text-6xl font-bold" />
                  <GlitchText text="ERGO JOURNEY" className="text-4xl md:text-6xl font-bold text-primary" />
                </div>
              </div>

              <div className="max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-mono">
                  <span className="text-primary">[</span>
                  CHOOSE YOUR PATH TO DECENTRALIZED FINANCE
                  <span className="text-primary">]</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  Whether you're new to blockchain or an experienced developer, Ergo offers powerful tools for building
                  the future of finance. Discover personalized resources to help you get started.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="bg-gray-900/50 border border-primary/20 rounded-lg p-4"
                  >
                    <DigitalCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-2xl md:text-3xl font-bold text-primary mb-2"
                    />
                    <p className="text-sm text-gray-400 font-mono uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* User Paths Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading text="CHOOSE YOUR PATH" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {userPaths.map((path, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                  onMouseEnter={() => setHoveredPath(index)}
                  onMouseLeave={() => setHoveredPath(null)}
                >
                  <Card className="bg-gray-900/40 border-primary/20 hover:border-primary/50 transition-all duration-500 h-full backdrop-blur-sm group-hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${path.color} shadow-lg`}>
                          <path.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                            {path.difficulty}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="font-mono text-xl">{path.title}</CardTitle>
                      <div className="text-primary font-mono text-sm font-bold tracking-wider">{path.subtitle}</div>
                      <CardDescription className="text-gray-400">{path.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pb-4">
                      <div className="space-y-2">
                        {path.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button
                        asChild
                        className={`w-full bg-gradient-to-r ${path.color} text-white hover:shadow-lg font-mono uppercase tracking-wider transition-all duration-300 group-hover:scale-105`}
                      >
                        <Link href={path.href}>
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>

                    {/* Hover effect border */}
                    {hoveredPath === index && (
                      <div className="absolute inset-0 border border-primary/50 rounded-lg pointer-events-none">
                        <div className="absolute top-0 left-0 w-2 h-2 bg-primary"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-primary"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary"></div>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-20 px-4 bg-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <SectionHeading text="QUICK START ACTIONS" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    href={action.href}
                    className="block p-6 bg-gray-900/40 border border-primary/20 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group-hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                        <action.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-mono font-bold text-white mb-1">{action.title}</h3>
                        <p className="text-sm text-gray-400">{action.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Quiz Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-primary/40 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-4 mb-6">
                      <Target className="w-12 h-12 text-primary" />
                      <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">NOT SURE WHERE TO START?</h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      Take our interactive quiz to get personalized recommendations based on your interests, technical
                      background, and goals within the Ergo ecosystem.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-primary to-orange-500 text-black hover:shadow-lg hover:shadow-primary/25 font-mono uppercase tracking-wider px-8 py-4 text-lg"
                    >
                      <Link href="/start/quiz">
                        <Target className="w-5 h-5 mr-2" />
                        Take the Quiz
                      </Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-8 py-4 text-lg"
                    >
                      <Link href="/start/faq">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Read FAQ
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Learning Resources Section */}
        <section className="py-20 px-4 bg-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <SectionHeading text="LEARNING RESOURCES" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/40 border-primary/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="font-mono">Quick Start Guide</CardTitle>
                  <CardDescription>Get up and running with Ergo in minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                        1
                      </div>
                      <span className="text-gray-300">Set up an Ergo wallet</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                        2
                      </div>
                      <span className="text-gray-300">Get some ERG tokens</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                        3
                      </div>
                      <span className="text-gray-300">Try a dApp in the ecosystem</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <Link href="/start/introduction">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View Guide
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-900/40 border-primary/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="font-mono">Developer Resources</CardTitle>
                  <CardDescription>Tools and documentation for builders</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300">ErgoScript Documentation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300">SDK Libraries & Tools</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300">Smart Contract Examples</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <Link href="/build">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Start Building
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-900/40 border-primary/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="font-mono">Community Support</CardTitle>
                  <CardDescription>Get help from the Ergo community</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300">Discord Community Chat</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300">Ergo Forum Discussions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300">Telegram Groups</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <Link href="/start/community">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Join Community
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Card className="bg-gray-900/40 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">
                    READY TO EXPLORE THE ECOSYSTEM?
                  </h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    Discover the growing collection of dApps, tools, and services built on Ergo
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-primary to-orange-500 text-black hover:shadow-lg font-mono uppercase tracking-wider px-8 py-4"
                    >
                      <Link href="/ecosystem">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Explore Ecosystem
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10 font-mono uppercase tracking-wider px-8 py-4"
                    >
                      <Link href="/wallet">
                        <Shield className="w-5 h-5 mr-2" />
                        Get Wallet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
