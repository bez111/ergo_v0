"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import {
  MessageCircle,
  Users,
  Globe,
  Heart,
  Code,
  FileText,
  Vote,
  Server,
  Target,
  Network,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  Send,
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useState } from "react"

// Custom icons for platforms not available in Lucide
type SimpleIconProps = { className?: string }

const TikTokIcon = ({ className }: SimpleIconProps) => (
  <svg className={className ?? "w-5 h-5 text-orange-400"} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

// Custom icon for Medium
const MediumIcon = ({ className }: SimpleIconProps) => (
  <svg className={className ?? "w-5 h-5 text-orange-400"} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

// Platforms organized by function
const platformGroups = [
  {
    title: "Real-time & Operations",
    subtitle: "Live support, quick updates, breaking news",
    platforms: [
      {
        name: "Discord",
        description: "Live support, AMA sessions, mining & hardware channels",
        members: "15K+",
        activity: "24/7",
        icon: MessageCircle,
        href: "https://discord.com/invite/ergo-platform-668903786361651200",
        features: ["Live Support", "AMA Sessions", "Mining Channels", "Pool Discussions"],
      },
      {
        name: "Telegram",
        description: "Quick updates and mobile notifications",
        members: "12K+",
        activity: "Active",
        icon: Users,
        href: "https://t.me/ergoplatform",
        features: ["Quick Updates", "Mobile Alerts", "Instant News", "Global Community"],
      },
      {
        name: "X (Twitter)",
        description: "Network status, announcements, breaking news",
        members: "25K+",
        activity: "Daily",
        icon: Twitter,
        href: "https://x.com/BuildOnErgo",
        features: ["Breaking News", "Network Status", "Announcements", "Quick Updates"],
      },
    ],
  },
  {
    title: "Deep Content & Research",
    subtitle: "Tutorials, essays, EIPs, governance",
    platforms: [
      {
        name: "YouTube",
        description: "Tutorials, guides, and technical deep-dives",
        members: "5K+",
        activity: "Weekly",
        icon: Youtube,
        href: "https://youtube.com/@ergoplatform",
        features: ["Tutorials", "Beginner Guides", "Tech Deep-dives", "How-to Videos"],
      },
      {
        name: "Medium",
        description: "In-depth essays, comparisons, and playbooks",
        members: "1.5K+",
        activity: "Weekly",
        icon: MediumIcon,
        href: "https://medium.com/@buildonergo",
        features: ["Long-form Essays", "Infographic Explainers", "Builder Playbooks", "Technical Analysis"],
      },
      {
        name: "ErgoForum",
        description: "EIPs, research papers, and governance",
        members: "3K+",
        activity: "Weekly",
        icon: FileText,
        href: "https://ergoforum.org",
        features: ["EIP Discussions", "Research Papers", "Governance", "Advanced Topics"],
      },
    ],
  },
  {
    title: "Community & Discovery",
    subtitle: "Discussions, visual content, discovery",
    platforms: [
      {
        name: "Reddit",
        description: "Long-form discussions and community stories",
        members: "8K+",
        activity: "Daily",
        icon: Globe,
        href: "https://reddit.com/r/ergonauts",
        features: ["Long Discussions", "User Experience", "Community Voting", "Shared Stories"],
      },
      {
        name: "Instagram",
        description: "Visual stories and behind-the-scenes",
        members: "3K+",
        activity: "Regular",
        icon: Instagram,
        href: "https://instagram.com/BuildOnErgo",
        features: ["Visual Stories", "Behind-the-Scenes", "Team Updates", "Community Highlights"],
      },
      {
        name: "TikTok",
        description: "Short highlights and viral content",
        members: "2.5K+",
        activity: "Regular",
        icon: TikTokIcon,
        href: "https://tiktok.com/@BuildOnErgo",
        features: ["Short Highlights", "Quick Tips", "Viral Content", "Community Memes"],
      },
    ],
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
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }
  
  // Base order from translations:
  // 0: Development
  // 1: Documentation
  // 2: Community Support
  // 3: Governance
  // 4: Infrastructure
  // 5: Marketing
  const contributionBase = [
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

  // Re-ordered for visual layout:
  // Top row: Development, Marketing, Infrastructure
  // Bottom row: Documentation, Community Support, Governance
  const contributions = [
    contributionBase[0], // Development
    contributionBase[5], // Marketing
    contributionBase[4], // Infrastructure
    contributionBase[1], // Documentation
    contributionBase[2], // Community Support
    contributionBase[3], // Governance
  ]
  
  return (
    <BackgroundWrapper>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Start', href: '/start' },
              { name: 'Community', href: '/start/community' },
            ]}
            className="mb-8 pt-24"
          />
          
          {/* Hero Section */}
          <section className="pt-8 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <FadeIn>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-snug pb-2 align-baseline block text-center">
                    ERGO <span className="text-orange-400">COMMUNITY</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Connect with passionate developers, researchers, and enthusiasts building the future of decentralized finance. Your voice matters in shaping Ergo's evolution.
                  </p>
                </motion.div>
              </FadeIn>
            </div>
          </section>

          {/* Platforms Section - Organized by Function */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeading text="COMMUNICATION HUBS" className="text-center" />

              {/* Единая сетка 3x3, заголовки групп занимают всю ширину */}
              <StaggerContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {platformGroups.map((group, groupIndex) => (
                    <React.Fragment key={group.title ?? groupIndex}>
                      {/* Group Header - col-span-3 чтобы выравнивание колонок было единым */}
                      <div className={`md:col-span-3 ${groupIndex > 0 ? "mt-12 md:mt-16" : ""}`}>
                        <FadeIn>
                          <div className="mb-6">
                            <div className="flex items-center gap-3 mb-1">
                              <div className="w-8 h-0.5 bg-orange-500" />
                              <h3 className="text-xl md:text-2xl font-bold text-white font-mono">
                                {group.title}
                              </h3>
                            </div>
                            <p className="text-gray-400 ml-11">{group.subtitle}</p>
                          </div>
                        </FadeIn>
                      </div>

                      {/* Cards for this group - 3 столбца, общая сетка для всех рядов */}
                      {group.platforms.map((platform, index) => {
                        const IconComponent = platform.icon as React.ComponentType<{ className?: string }>

                        return (
                          <motion.div
                            key={`${group.title}-${index}`}
                            className="group h-full"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Link 
                              href={platform.href} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block h-full focus:outline-none focus:ring-2 focus:ring-[#ff8800]/60 rounded-2xl"
                            >
                              <Card className="bg-black/80 border-white/10 hover:bg-black/90 hover:border-[#ff8800]/60 transition-all duration-300 h-full backdrop-blur-sm rounded-2xl cursor-pointer group-hover:shadow-lg group-hover:shadow-[#ff8800]/10">
                                <CardContent className="p-6 h-full flex flex-col">
                                  {/* Header */}
                                  <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff8800]/30 group-hover:border-[#ff8800]/50 transition-all duration-300">
                                        <IconComponent className="w-5 h-5 text-orange-400 group-hover:text-[#ff8800] transition-colors duration-300" />
                                      </div>
                                      <h4 className="text-lg font-bold text-white font-mono group-hover:text-[#ff8800] transition-colors duration-300">
                                        {platform.name}
                                      </h4>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#ff8800] group-hover:translate-x-1 transition-all duration-300 mt-2" />
                                  </div>

                                  {/* Description - fixed height */}
                                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px]">
                                    {platform.description}
                                  </p>

                                  {/* Stats */}
                                  <div className="flex gap-6 mb-4">
                                    <div>
                                      <div className="text-orange-400 font-bold text-sm group-hover:text-[#ff8800] transition-colors duration-300">
                                        {platform.members}
                                      </div>
                                      <div className="text-gray-500 text-[10px] uppercase tracking-wider">
                                        Followers
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-orange-400 font-bold text-sm group-hover:text-[#ff8800] transition-colors duration-300">
                                        {platform.activity}
                                      </div>
                                      <div className="text-gray-500 text-[10px] uppercase tracking-wider">
                                        Updates
                                      </div>
                                    </div>
                                  </div>

                                  {/* Features */}
                                  <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mt-2">
                                    {platform.features.map((feature, featureIndex) => (
                                      <div key={featureIndex} className="flex items-center gap-1.5">
                                        <CheckCircle className="w-3 h-3 text-orange-400 flex-shrink-0 group-hover:text-[#ff8800] transition-colors duration-300" />
                                        <span className="text-gray-300 text-xs truncate">
                                          {feature}
                                        </span>
                                      </div>
                                    ))}
                                  </div>

                                </CardContent>
                              </Card>
                            </Link>
                          </motion.div>
                        )
                      })}
                    </React.Fragment>
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
                  {contributions.map((contribution, index) => {
                    const isMarketing = contribution.title === contributionBase[5].title // Marketing card
                    const CardWrapper = isMarketing ? Link : 'div'
                    const cardProps = isMarketing ? { href: '/start/community/marketing' } : {}
                    
                    return (
                      <motion.div
                        key={index}
                        className="group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CardWrapper {...cardProps} className={isMarketing ? "block focus:outline-none focus:ring-2 focus:ring-orange-500/60 rounded-3xl" : ""}>
                          <Card className={`bg-black/80 border-white/10 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full backdrop-blur-sm rounded-3xl ${isMarketing ? 'cursor-pointer group-hover:shadow-lg group-hover:shadow-orange-500/10' : ''}`}>
                            <CardContent className="p-8">
                              <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
                                  <contribution.icon className="w-6 h-6 text-orange-400" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-white font-mono">{contribution.title}</h3>
                                  {isMarketing && (
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="text-xs text-orange-400 font-medium">Click for detailed guide</span>
                                      <ArrowRight className="w-3 h-3 text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                  )}
                                </div>
                              </div>
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
                        </CardWrapper>
                      </motion.div>
                    )
                  })}
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
                    <Card className="bg-black/80 border-white/10 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full backdrop-blur-sm rounded-3xl">
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
                <Card className="bg-black/80 border-white/10 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 backdrop-blur-sm rounded-3xl">
                  <CardContent className="p-12 text-center">
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-orange-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Stay <span className="text-orange-400">Connected</span></h2>
                      </div>
                      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        Get the latest updates, announcements, and community highlights delivered to your inbox
                      </p>
                    </div>

                    {isSubmitted ? (
                      <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 mb-6">
                        <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <p className="text-green-400 font-semibold">Thank you for subscribing!</p>
                        <p className="text-gray-300 text-sm">You'll receive updates about the Ergo community.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
                        <div className="flex gap-3">
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-black/60 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400/50 focus:ring-orange-400/20 rounded-xl"
                            required
                          />
                          <Button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 rounded-xl border border-orange-500/50 transition-all duration-300"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Subscribe
                          </Button>
                        </div>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </section>
        </div>
      </div>
    </BackgroundWrapper>
  )
}
