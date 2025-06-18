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
} from "lucide-react"
import Link from "next/link"

const platforms = [
  {
    name: "Discord",
    description: "Real-time discussions, AMA sessions, technical support",
    members: "15K+",
    activity: "24/7",
    icon: MessageCircle,
    buttonText: "Join Discord",
    href: "https://discord.gg/ergo-platform",
    gradient: "from-orange-600 via-red-600 to-orange-500",
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
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
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
    gradient: "from-red-500 via-orange-500 to-amber-500",
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
    gradient: "from-amber-500 via-orange-500 to-red-500",
    features: ["Technical Deep-dives", "Governance", "EIP Discussions", "Research"],
  },
]

const contributions = [
  {
    title: "Development",
    description: "Build dApps, tools, and infrastructure",
    icon: Code,
    color: "from-orange-400 to-red-500",
    tasks: ["Smart Contracts", "Frontend Apps", "Tools & Libraries"],
  },
  {
    title: "Content Creation",
    description: "Articles, videos, tutorials, documentation",
    icon: FileText,
    color: "from-amber-400 to-orange-500",
    tasks: ["Technical Writing", "Video Content", "Tutorials"],
  },
  {
    title: "Community Support",
    description: "Help newcomers and answer questions",
    icon: Heart,
    color: "from-red-400 to-orange-500",
    tasks: ["User Support", "Onboarding", "Mentoring"],
  },
  {
    title: "Governance",
    description: "Participate in protocol decisions",
    icon: Vote,
    color: "from-orange-400 to-amber-500",
    tasks: ["EIP Reviews", "Voting", "Proposals"],
  },
  {
    title: "Infrastructure",
    description: "Run nodes, mining, network support",
    icon: Server,
    color: "from-amber-400 to-orange-500",
    tasks: ["Node Operation", "Mining", "Network Security"],
  },
  {
    title: "Research",
    description: "Protocol research and improvements",
    icon: Target,
    color: "from-orange-400 to-red-500",
    tasks: ["Academic Research", "Protocol Analysis", "Innovation"],
  },
]

const stats = [
  { label: "Community Members", value: "50K", suffix: "+" },
  { label: "Active Developers", value: "200", suffix: "+" },
  { label: "Projects Built", value: "100", suffix: "+" },
  { label: "Countries", value: "80", suffix: "+" },
]

const guidelines = [
  {
    type: "positive",
    title: "Encouraged Behavior",
    icon: CheckCircle,
    color: "text-green-400",
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
    color: "text-red-400",
    items: [
      "Spam, flooding, or off-topic content",
      "Spreading misinformation or FUD",
      "Personal attacks or harassment",
      "Excessive self-promotion",
      "Violating platform-specific rules",
    ],
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen relative">
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
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block text-center">
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
              <SectionHeading text="COMMUNICATION HUBS" />

              <StaggerContainer>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      whileHover={{ scale: 1.02, rotateY: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="bg-gray-900/30 border-primary/20 hover:border-primary/50 transition-all duration-500 h-full backdrop-blur-sm">
                        <CardContent className="p-8">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                              <div className={`p-4 rounded-xl bg-gradient-to-r ${platform.gradient} shadow-lg`}>
                                <platform.icon className="w-8 h-8 text-white" />
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
                              <div className="text-primary font-bold text-lg">{platform.members}</div>
                              <div className="text-gray-500 text-xs uppercase tracking-wider">Members</div>
                            </div>
                            <div className="text-center">
                              <div className="text-primary font-bold text-lg">{platform.activity}</div>
                              <div className="text-gray-500 text-xs uppercase tracking-wider">Activity</div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-8">
                            <div className="grid grid-cols-2 gap-3">
                              {platform.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2">
                                  <Zap className="w-3 h-3 text-primary flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Button
                            asChild
                            className={`w-full bg-gradient-to-r ${platform.gradient} text-white hover:shadow-lg hover:shadow-primary/25 font-mono uppercase tracking-wider transition-all duration-300 group-hover:scale-105`}
                          >
                            <Link href={platform.href} target="_blank" rel="noopener noreferrer">
                              {platform.buttonText}
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
              <SectionHeading text="CONTRIBUTION MATRIX" />

              <FadeIn>
                <div className="text-center mb-16">
                  <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto">
                    <span className="text-primary">[</span>
                    Every contribution strengthens the Ergo ecosystem. Find your path to make an impact.
                    <span className="text-primary">]</span>
                  </p>
                </div>
              </FadeIn>

              <StaggerContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {contributions.map((contribution, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      whileHover={{ scale: 1.05, rotateX: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="bg-gray-900/40 border-primary/20 hover:border-primary/50 transition-all duration-500 h-full backdrop-blur-sm">
                        <CardContent className="p-8 text-center">
                          <div
                            className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${contribution.color} flex items-center justify-center shadow-lg`}
                          >
                            <contribution.icon className="w-8 h-8 text-white" />
                          </div>

                          <h3 className="text-xl font-bold text-white mb-3 font-mono">{contribution.title}</h3>
                          <p className="text-gray-400 mb-6">{contribution.description}</p>

                          <div className="space-y-2">
                            {contribution.tasks.map((task, taskIndex) => (
                              <div key={taskIndex} className="flex items-center gap-2 text-sm text-gray-300">
                                <div className="w-1 h-1 bg-primary rounded-full"></div>
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
              <SectionHeading text="COMMUNITY PROTOCOL" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {guidelines.map((guideline, index) => (
                  <FadeIn key={index}>
                    <Card className="bg-gray-900/40 border-primary/20 h-full backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`p-3 rounded-lg ${guideline.type === "positive" ? "bg-green-500/20" : "bg-red-500/20"}`}
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
                                  guideline.type === "positive" ? "bg-green-400" : "bg-red-400"
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
                <Card className="bg-gray-900/60 border-primary/30 backdrop-blur-sm">
                  <CardContent className="p-12 text-center">
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-4 mb-6">
                        <Network className="w-12 h-12 text-primary" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">READY TO CONNECT?</h2>
                      </div>
                      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Join thousands of developers, researchers, and enthusiasts building the future of DeFi
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-primary to-orange-500 text-black hover:shadow-lg hover:shadow-primary/25 font-mono uppercase tracking-wider px-8 py-4 text-lg"
                      >
                        <Link href="https://discord.gg/ergo-platform" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Join Discord Now
                        </Link>
                      </Button>

                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-8 py-4 text-lg"
                      >
                        <Link href="/start">
                          <ArrowRight className="w-5 h-5 mr-2" />
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
