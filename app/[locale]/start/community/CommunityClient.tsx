"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { GlitchText } from "@/components/glitch-text"
import { DigitalCounter } from "@/components/digital-counter"
import {
  MessageCircle,
  Users,
  Globe,
  Heart,
  Zap,
  Code,
  FileText,
  Vote,
  Server,
  Target,
  Network,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Rocket,
  Brain,
  Building,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

const platforms = [
  {
    name: "Discord",
    description: "Real-time discussions, AMA sessions, technical support",
    members: "15K+",
    activity: "24/7",
    icon: MessageCircle,
    buttonText: "Join Discord",
    href: "https://discord.gg/ergo-platform",
    features: ["Live Chat", "Voice Channels", "Developer Support", "Community Events"],
  },
  {
    name: "Telegram",
    description: "Quick updates, announcements, global community",
    members: "12K+",
    activity: "Active",
    icon: Users,
    buttonText: "Join Telegram",
    href: "https://t.me/ergoplatform",
    features: ["Instant Updates", "Mobile First", "Global Reach", "News & Alerts"],
  },
  {
    name: "Reddit",
    description: "In-depth discussions, memes, community content",
    members: "8K+",
    activity: "Daily",
    icon: Globe,
    buttonText: "Visit r/ergonauts",
    href: "https://reddit.com/r/ergonauts",
    features: ["Long-form Posts", "Community Voting", "Memes & Content", "Discussions"],
  },
  {
    name: "ErgoForum",
    description: "Technical discussions, EIPs, governance",
    members: "3K+",
    activity: "Weekly",
    icon: FileText,
    buttonText: "Visit Forum",
    href: "https://ergoforum.org",
    features: ["Technical Deep-dives", "Governance", "EIP Discussions", "Research"],
  },
]

// contributions moved to component

const guidelines = [
  {
    type: "positive",
    title: "Encouraged Behavior",
    icon: CheckCircle,
    color: "text-status-success-500",
    items: [
      "Respectful and constructive discussions",
      "Helping newcomers and sharing knowledge",
      "Contributing to projects and documentation",
      "Providing constructive feedback",
      "Following community guidelines",
    ],
  },
  {
    type: "negative",
    title: "Discouraged Behavior",
    icon: AlertTriangle,
    color: "text-status-error-500",
    items: [
      "Spam, flooding, or off-topic content",
      "Spreading misinformation or FUD",
      "Personal attacks or harassment",
      "Excessive self-promotion",
      "Violating platform-specific rules",
    ],
  },
]

export default function CommunityClient() {
  const t = useTranslations('start.community')
  
  const contributions = [
    {
      title: t('contributions.0.title'),
      description: t('contributions.0.description'),
      icon: Code,
      tasks: t('contributions.0.tasks').split(', '),
    },
    {
      title: t('contributions.1.title'),
      description: t('contributions.1.description'),
      icon: FileText,
      tasks: t('contributions.1.tasks').split(', '),
    },
    {
      title: t('contributions.2.title'),
      description: t('contributions.2.description'),
      icon: Heart,
      tasks: t('contributions.2.tasks').split(', '),
    },
    {
      title: t('contributions.3.title'),
      description: t('contributions.3.description'),
      icon: Vote,
      tasks: t('contributions.3.tasks').split(', '),
    },
    {
      title: t('contributions.4.title'),
      description: t('contributions.4.description'),
      icon: Server,
      tasks: t('contributions.4.tasks').split(', '),
    },
    {
      title: t('contributions.5.title'),
      description: t('contributions.5.description'),
      icon: Target,
      tasks: t('contributions.5.tasks').split(', '),
    },
  ]
  
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="pt-32 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <FadeIn>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-snug pb-2 align-baseline block text-center">
                    ERGO COMMUNITY
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Connect with passionate developers, researchers, and enthusiasts building the future of decentralized finance. Your voice matters in shaping Ergo's evolution.
                  </p>
                </motion.div>
              </FadeIn>
            </div>
          </section>

          {/* Platforms Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeading text="COMMUNICATION HUBS" className="text-center" />

              <StaggerContainer>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="bg-neutral-900/50 border-neutral-700 hover:border-orange-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                        <CardContent className="p-8">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                <platform.icon className="w-6 h-6 text-orange-400" />
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-white font-mono">{platform.name}</h3>
                                <p className="text-gray-400 text-sm">{platform.description}</p>
                              </div>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="flex gap-6 mb-6">
                            <div className="text-center">
                              <div className="text-orange-400 font-bold text-lg">{platform.members}</div>
                              <div className="text-gray-500 text-xs uppercase tracking-wider">Members</div>
                            </div>
                            <div className="text-center">
                              <div className="text-orange-400 font-bold text-lg">{platform.activity}</div>
                              <div className="text-gray-500 text-xs uppercase tracking-wider">Activity</div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-8">
                            <div className="grid grid-cols-2 gap-3">
                              {platform.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-orange-400 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Button
                            asChild
                            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-mono uppercase tracking-wider transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                          >
                            <Link href={platform.href} target="_blank" rel="noopener noreferrer">
                              {platform.buttonText}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </section>

          {/* Contribution Opportunities */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeading text="CONTRIBUTION MATRIX" className="text-center" />

              <FadeIn>
                <div className="text-center mb-16">
                  <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto">
                    <span className="text-orange-400">[</span>
                    Every contribution strengthens the Ergo ecosystem. Find your path to make an impact.
                    <span className="text-orange-400">]</span>
                  </p>
                </div>
              </FadeIn>

              <StaggerContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {contributions.map((contribution, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="bg-neutral-900/50 border-neutral-700 hover:border-orange-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                        <CardContent className="p-8 text-center">
                          <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                            <contribution.icon className="w-6 h-6 text-orange-400" />
                          </div>

                          <h3 className="text-xl font-bold text-white mb-3 font-mono">{contribution.title}</h3>
                          <p className="text-gray-400 mb-6">{contribution.description}</p>

                          <div className="space-y-2">
                            {contribution.tasks.map((task, taskIndex) => (
                              <div key={taskIndex} className="flex items-center gap-2 text-sm text-gray-300">
                                <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                                <span>{task}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </section>

          {/* Community Guidelines */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeading text="COMMUNITY PROTOCOL" className="text-center" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {guidelines.map((guideline, index) => (
                  <FadeIn key={index}>
                    <Card className="bg-neutral-900/50 border-neutral-700 h-full backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`p-3 rounded-lg ${guideline.type === "positive" ? "bg-status-success-500/20" : "bg-status-error-500/20"}`}
                          >
                            <guideline.icon className={`w-6 h-6 ${guideline.color}`} />
                          </div>
                          <h3 className="text-xl font-bold text-white font-mono">{guideline.title}</h3>
                        </div>

                        <div className="space-y-3">
                          {guideline.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3">
                              <div
                                className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                  guideline.type === "positive" ? "bg-status-success-500" : "bg-status-error-500"
                                }`}
                              ></div>
                              <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
              <FadeIn>
                <Card className="bg-neutral-900/50 border border-neutral-700 backdrop-blur-sm">
                  <CardContent className="p-12 text-center">
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
                          <Network className="w-6 h-6 text-orange-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">READY TO CONNECT?</h2>
                      </div>
                      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Join thousands of developers, researchers, and enthusiasts building the future of DeFi
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        asChild
                        className="bg-orange-500 hover:bg-orange-600 text-black font-mono uppercase tracking-wider px-8 py-3 transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <Link href="https://discord.gg/ergo-platform" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Join Discord
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="border-neutral-500 text-neutral-400 hover:bg-neutral-500/10 font-mono uppercase tracking-wider px-8 py-3 transition-all duration-200 focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <Link href="/start">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Explore More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
