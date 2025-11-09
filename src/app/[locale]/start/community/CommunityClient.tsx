"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
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
const TikTokIcon = () => (
  <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const PinterestIcon = () => (
  <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.219-.438-.219-1.085c0-1.016.589-1.775 1.323-1.775.623 0 .924.466.924 1.025 0 .624-.397 1.557-.603 2.422-.171.725.363 1.315 1.077 1.315 1.295 0 2.291-1.364 2.291-3.337 0-1.745-1.254-2.966-3.046-2.966-2.074 0-3.293 1.555-3.293 3.161 0 .626.242 1.295.544 1.659a.327.327 0 0 1 .075.312c-.083.344-.266 1.077-.302 1.228-.047.196-.154.237-.355.143-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.97-.527-2.297-1.226l-.624 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017 0z"/>
  </svg>
)

const platforms = [
  {
    name: "Discord",
    description: "Live support, AMA sessions, mining & hardware channels",
    members: "15K+",
    activity: "24/7",
    icon: MessageCircle,
    buttonText: "Join Discord",
    href: "https://discord.com/invite/ergo-platform-668903786361651200",
    features: ["Live Support", "AMA Sessions", "Hardware Channels", "Pool Discussions"],
  },
  {
    name: "Telegram",
    description: "Quick updates and mobile notifications",
    members: "12K+",
    activity: "Active",
    icon: Users,
    buttonText: "Join Telegram",
    href: "https://t.me/BuildOnErgo",
    features: ["Quick Updates", "Mobile Alerts", "Instant News", "Global Community"],
  },
  {
    name: "YouTube",
    description: "Tutorials, guides, and technical deep-dives for beginners",
    members: "5K+",
    activity: "Weekly",
    icon: Youtube,
    buttonText: "Subscribe",
    href: "https://youtube.com/@ergoplatform",
    features: ["Tutorials", "Beginner Guides", "Tech Deep-dives", "How-to Videos"],
  },
  {
    name: "Reddit",
    description: "Long discussions, community experience, and voting",
    members: "8K+",
    activity: "Daily",
    icon: Globe,
    buttonText: "Visit r/ergonauts",
    href: "https://reddit.com/r/ergonauts",
    features: ["Long Discussions", "User Experience", "Community Voting", "Shared Stories"],
  },
  {
    name: "X (Twitter)",
    description: "Latest news, announcements, and network status",
    members: "25K+",
    activity: "Daily",
    icon: Twitter,
    buttonText: "Follow @ergoplatform",
    href: "https://x.com/BuildOnErgo",
    features: ["Breaking News", "Network Status", "Announcements", "Quick Updates"],
  },
  {
    name: "ErgoForum",
    description: "EIPs, research, and governance for advanced users",
    members: "3K+",
    activity: "Weekly",
    icon: FileText,
    buttonText: "Visit Forum",
    href: "https://ergoforum.org",
    features: ["EIP Discussions", "Research Papers", "Governance", "Advanced Topics"],
  },
  {
    name: "Instagram",
    description: "Visual stories and behind-the-scenes content",
    members: "3K+",
    activity: "Regular",
    icon: Instagram,
    buttonText: "Follow @ergoplatform",
    href: "https://instagram.com/ergoplatform",
    features: ["Visual Stories", "Behind-the-Scenes", "Team Updates", "Community Highlights"],
  },
  {
    name: "TikTok",
    description: "Short highlights and viral content",
    members: "2K+",
    activity: "Regular",
    icon: TikTokIcon,
    buttonText: "Follow @ergo",
    href: "https://tiktok.com/@ergoplatform",
    features: ["Short Highlights", "Viral Content", "Quick Tips", "Community Memes"],
  },
  {
    name: "Pinterest",
    description: "Infographics and visual assets",
    members: "500+",
    activity: "Weekly",
    icon: PinterestIcon,
    buttonText: "Follow Boards",
    href: "https://pinterest.com/ergoplatform",
    features: ["Infographics", "Visual Assets", "Educational Pins", "Design Resources"],
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
    <BackgroundWrapper>
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
                    ERGO <span className="text-orange-400">COMMUNITY</span>
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
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link 
                        href={platform.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full focus:outline-none focus:ring-2 focus:ring-[#ff8800]/60 rounded-3xl"
                      >
                        <Card className="bg-black/80 border-white/10 hover:bg-black/90 hover:border-[#ff8800]/60 transition-all duration-300 h-full backdrop-blur-sm rounded-3xl cursor-pointer group-hover:shadow-lg group-hover:shadow-[#ff8800]/10">
                          <CardContent className="p-8">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff8800]/30 group-hover:border-[#ff8800]/50 transition-all duration-300">
                                  <platform.icon className="w-6 h-6 text-orange-400 group-hover:text-[#ff8800] transition-colors duration-300" />
                                </div>
                                <div>
                                  <h3 className="text-2xl font-bold text-white font-mono group-hover:text-[#ff8800] transition-colors duration-300">{platform.name}</h3>
                                  <p className="text-gray-400 text-sm">{platform.description}</p>
                                </div>
                              </div>
                              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#ff8800] group-hover:translate-x-1 transition-all duration-300" />
                            </div>

                            {/* Stats */}
                            <div className="flex gap-6 mb-6">
                              <div className="text-center">
                                <div className="text-orange-400 font-bold text-lg group-hover:text-[#ff8800] transition-colors duration-300">{platform.members}</div>
                                <div className="text-gray-500 text-xs uppercase tracking-wider">Members</div>
                              </div>
                              <div className="text-center">
                                <div className="text-orange-400 font-bold text-lg group-hover:text-[#ff8800] transition-colors duration-300">{platform.activity}</div>
                                <div className="text-gray-500 text-xs uppercase tracking-wider">Activity</div>
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <div className="grid grid-cols-2 gap-3">
                                {platform.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center gap-2">
                                    <CheckCircle className="w-3 h-3 text-orange-400 flex-shrink-0 group-hover:text-[#ff8800] transition-colors duration-300" />
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
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
                      <Card className="bg-black/80 border-white/10 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full backdrop-blur-sm rounded-3xl">
                        <CardContent className="p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
                              <contribution.icon className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white font-mono">{contribution.title}</h3>
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
