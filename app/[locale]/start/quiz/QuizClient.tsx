"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, RotateCcw, ExternalLink, ArrowRight, CheckCircle, Target, Brain, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { QuizPageWrapper } from "@/components/quiz/quiz-page-wrapper"

interface QuizQuestion {
  id: string
  question: string
  options: {
    text: string
    profiles: string[]
  }[]
}

interface Profile {
  id: string
  name: string
  title: string
  description: string
  icon: string
  color: string
  tools: {
    category: string
    items: { name: string; description: string; link: string }[]
  }[]
  nextSteps: { text: string; link: string }[]
  communityChannels: { name: string; link: string }[]
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What primarily attracts you to blockchain technology and Ergo?",
    options: [
      {
        text: "Investment potential and financial opportunities",
        profiles: ["investor", "defi"],
      },
      {
        text: "Building applications and contributing to new technologies",
        profiles: ["developer"],
      },
      {
        text: "Supporting network security and earning rewards through hardware",
        profiles: ["miner"],
      },
      {
        text: "Collecting, creating, or trading unique digital items and art",
        profiles: ["nft"],
      },
      {
        text: "Using new financial tools for borrowing, lending, or trading",
        profiles: ["defi"],
      },
      {
        text: "Enhancing my financial privacy and anonymity",
        profiles: ["privacy"],
      },
      {
        text: "I'm new and just want to learn the basics first!",
        profiles: ["learner"],
      },
    ],
  },
  {
    id: "q2",
    question: "How would you describe your technical comfort level?",
    options: [
      {
        text: "Very comfortable; I can code or manage complex systems",
        profiles: ["developer", "miner", "privacy"],
      },
      {
        text: "Moderately comfortable; I can learn new software and follow guides",
        profiles: ["defi", "nft", "miner"],
      },
      {
        text: "Not very technical; I prefer simple and user-friendly applications",
        profiles: ["investor", "learner", "nft"],
      },
    ],
  },
  {
    id: "q3",
    question: "What kind of activity within Ergo are you most interested in?",
    options: [
      {
        text: "Growing my assets and exploring financial instruments",
        profiles: ["investor", "defi"],
      },
      {
        text: "Creating new tools, dApps, or smart contracts",
        profiles: ["developer"],
      },
      {
        text: "Securing the network and earning ERG",
        profiles: ["miner"],
      },
      {
        text: "Exploring digital art and collectibles",
        profiles: ["nft"],
      },
      {
        text: "Deeply understanding the technology and its principles",
        profiles: ["learner", "developer"],
      },
      {
        text: "Protecting my financial privacy",
        profiles: ["privacy"],
      },
    ],
  },
  {
    id: "q4",
    question: "If you're interested in finance/investment, what's your approach to new financial technologies?",
    options: [
      {
        text: "Looking for established, lower-risk ways to engage",
        profiles: ["investor"],
      },
      {
        text: "Exploring DeFi opportunities while understanding the risks",
        profiles: ["defi"],
      },
      {
        text: "Interested in cutting-edge, experimental financial tools",
        profiles: ["defi", "developer"],
      },
      {
        text: "Not particularly interested in financial aspects",
        profiles: ["learner", "nft", "miner"],
      },
    ],
  },
  {
    id: "q5",
    question: "If you want to contribute, what type of participation inspires you most?",
    options: [
      {
        text: "Writing code and building software",
        profiles: ["developer"],
      },
      {
        text: "Creating educational content, art, or marketing materials",
        profiles: ["nft", "learner"],
      },
      {
        text: "Helping others in the community and answering questions",
        profiles: ["learner"],
      },
      {
        text: "Participating in governance discussions and proposals",
        profiles: ["developer", "privacy"],
      },
      {
        text: "Supporting network infrastructure",
        profiles: ["miner"],
      },
    ],
  },
]

const profiles: Record<string, Profile> = {
  developer: {
    id: "developer",
    name: "Aspiring Developer",
    title: "BUILD THE FUTURE",
    description:
      "You're drawn to creating innovative applications and contributing to cutting-edge technology! Ergo's powerful ErgoScript and eUTXO model offer unique opportunities to build secure and efficient dApps.",
    icon: "💻",
    color: "from-primary to-orange-500",
    tools: [
      {
        category: "Documentation & Learning",
        items: [
          { name: "ErgoDocs", description: "Comprehensive developer documentation", link: "/build/docs" },
          { name: "ErgoScript Primer", description: "Learn Ergo's smart contract language", link: "/build/tutorials" },
          { name: "Ergo Playgrounds", description: "Interactive coding environment", link: "/build/playground" },
        ],
      },
      {
        category: "Development Tools",
        items: [
          { name: "AppKit", description: "Java/Scala development toolkit", link: "/build/tools/appkit" },
          { name: "Fleet SDK", description: "TypeScript SDK for Ergo", link: "/build/tools/fleet" },
          {
            name: "Sigma-Rust",
            description: "Rust implementation of Sigma protocols",
            link: "/build/tools/sigma-rust",
          },
        ],
      },
    ],
    nextSteps: [
      { text: "Explore Developer Documentation", link: "/build/docs" },
      { text: "Try the ErgoScript Playground", link: "/build/playground" },
      { text: "Join Developer Discord Channels", link: "https://discord.gg/ergo-platform" },
      { text: "Check Out Developer Grants", link: "/build/grants" },
    ],
    communityChannels: [
      { name: "Developer Discord", link: "https://discord.gg/ergo-platform" },
      { name: "ErgoForum - Development", link: "https://ergoforum.org" },
      { name: "GitHub Organization", link: "https://github.com/ergoplatform" },
    ],
  },
  defi: {
    id: "defi",
    name: "DeFi Explorer",
    title: "DECENTRALIZED FINANCE PIONEER",
    description:
      "You're ready to explore innovative financial instruments and opportunities that Ergo's decentralized world offers! Discover new ways to manage assets, earn returns, and participate in the future of finance.",
    icon: "🏦",
    color: "from-primary to-amber-500",
    tools: [
      {
        category: "Wallets",
        items: [
          { name: "Nautilus Wallet", description: "Browser extension wallet", link: "/wallet" },
          { name: "Official Mobile Wallets", description: "iOS and Android apps", link: "/wallet" },
        ],
      },
      {
        category: "DeFi Platforms",
        items: [
          { name: "Spectrum Finance", description: "Decentralized exchange (DEX)", link: "https://spectrum.fi" },
          { name: "SigmaUSD", description: "Algorithmic stablecoin protocol", link: "/ecosystem/projects/sigmausd" },
          { name: "Duckpools", description: "Lending and borrowing platform", link: "/ecosystem/projects/duckpools" },
        ],
      },
      {
        category: "Analytics",
        items: [
          { name: "ergo.watch", description: "Network and DeFi analytics", link: "https://ergo.watch" },
          { name: "Ergo Explorer", description: "Blockchain explorer", link: "/ecosystem/explorers" },
        ],
      },
    ],
    nextSteps: [
      { text: "Install Nautilus Wallet", link: "/wallet" },
      { text: "Learn about SigmaUSD Stablecoin", link: "/ecosystem/projects/sigmausd" },
      { text: "Try Trading on Spectrum Finance", link: "https://spectrum.fi" },
      { text: "Join DeFi Discussions on Discord", link: "https://discord.gg/ergo-platform" },
    ],
    communityChannels: [
      { name: "DeFi Discord Channels", link: "https://discord.gg/ergo-platform" },
      { name: "Spectrum Finance Community", link: "https://spectrum.fi" },
      { name: "SigmaUSD Community", link: "/ecosystem/projects/sigmausd" },
    ],
  },
  investor: {
    id: "investor",
    name: "Strategic Investor",
    title: "LONG-TERM VALUE BUILDER",
    description:
      "You're interested in Ergo's long-term potential and want to understand the fundamentals before making investment decisions. Focus on learning about the technology and ecosystem growth.",
    icon: "📈",
    color: "from-primary to-amber-500",
    tools: [
      {
        category: "Getting Started",
        items: [
          { name: "Official Wallets", description: "Secure ERG storage", link: "/wallet" },
          { name: "Exchange Listings", description: "Where to buy ERG", link: "/use/get-erg" },
        ],
      },
      {
        category: "Research & Analytics",
        items: [
          { name: "Ergo Whitepaper", description: "Technical foundation", link: "/technology/whitepaper" },
          { name: "Ecosystem Overview", description: "Projects and growth", link: "/ecosystem" },
          { name: "Network Statistics", description: "Real-time metrics", link: "/ecosystem/stats" },
        ],
      },
    ],
    nextSteps: [
      { text: "Read the Ergo Whitepaper", link: "/technology/whitepaper" },
      { text: "Explore the Ecosystem", link: "/ecosystem" },
      { text: "Learn About ERG Tokenomics", link: "/learn/tokenomics" },
      { text: "Join Investor Discussions", link: "https://discord.gg/ergo-platform" },
    ],
    communityChannels: [
      { name: "General Discord", link: "https://discord.gg/ergo-platform" },
      { name: "Reddit Community", link: "https://reddit.com/r/ergonauts" },
      { name: "Telegram Group", link: "https://t.me/ergoplatform" },
    ],
  },
  miner: {
    id: "miner",
    name: "Network Guardian",
    title: "SECURING THE BLOCKCHAIN",
    description:
      "You're interested in supporting Ergo's network security while earning rewards! Ergo uses the Autolykos v2 algorithm, which is ASIC-resistant and designed for fair mining.",
    icon: "⛏️",
    color: "from-primary to-amber-600",
    tools: [
      {
        category: "Mining Information",
        items: [
          { name: "Autolykos v2 Guide", description: "Understanding the algorithm", link: "/use/mining" },
          { name: "Mining Pools", description: "Popular Ergo mining pools", link: "/ecosystem/mining" },
          { name: "Profitability Calculator", description: "Estimate mining returns", link: "/use/mining/calculator" },
        ],
      },
      {
        category: "Mining Software",
        items: [
          { name: "Official Miner", description: "Reference implementation", link: "/use/mining/software" },
          { name: "Community Miners", description: "Third-party mining software", link: "/use/mining/software" },
        ],
      },
    ],
    nextSteps: [
      { text: "Learn About Autolykos v2", link: "/technology/secure-pow" },
      { text: "Find Mining Pools", link: "/ecosystem/mining" },
      { text: "Calculate Mining Profitability", link: "/use/mining/calculator" },
      { text: "Join Mining Community", link: "https://discord.gg/ergo-platform" },
    ],
    communityChannels: [
      { name: "Mining Discord Channels", link: "https://discord.gg/ergo-platform" },
      { name: "Mining Pools Community", link: "/ecosystem/mining" },
      { name: "Technical Support", link: "https://ergoforum.org" },
    ],
  },
  nft: {
    id: "nft",
    name: "NFT Enthusiast",
    title: "DIGITAL ART COLLECTOR",
    description:
      "You're excited about unique digital items, art, and collectibles! Ergo's NFT ecosystem offers innovative marketplaces and creation tools with low fees and high security.",
    icon: "🎨",
    color: "from-primary to-amber-500",
    tools: [
      {
        category: "NFT Marketplaces",
        items: [
          {
            name: "Ergo Auction House",
            description: "Premier NFT marketplace",
            link: "/ecosystem/projects/auction-house",
          },
          { name: "SkyHarbor", description: "NFT trading platform", link: "/ecosystem/projects/skyharbor" },
        ],
      },
      {
        category: "Creation Tools",
        items: [
          { name: "TokenJay", description: "NFT minting platform", link: "/ecosystem/projects/tokenjay" },
          { name: "Ergo Utils", description: "NFT creation utilities", link: "/ecosystem/tools" },
        ],
      },
    ],
    nextSteps: [
      { text: "Explore Ergo Auction House", link: "/ecosystem/projects/auction-house" },
      { text: "Learn About NFT Creation", link: "/ecosystem/projects/tokenjay" },
      { text: "Browse NFT Collections", link: "/ecosystem/nfts" },
      { text: "Join NFT Community", link: "https://discord.gg/ergo-platform" },
    ],
    communityChannels: [
      { name: "NFT Discord Channels", link: "https://discord.gg/ergo-platform" },
      { name: "Artist Community", link: "/community/artists" },
      { name: "Collector Groups", link: "/community/collectors" },
    ],
  },
  privacy: {
    id: "privacy",
    name: "Privacy Advocate",
    title: "FINANCIAL PRIVACY CHAMPION",
    description:
      "You value financial privacy and want to protect your transaction history! Ergo offers cutting-edge privacy tools built on Sigma protocols for trustless and secure privacy enhancement.",
    icon: "🔒",
    color: "from-primary to-amber-600",
    tools: [
      {
        category: "Privacy Tools",
        items: [
          { name: "ErgoMixer", description: "Non-custodial transaction mixer", link: "/ecosystem/projects/ergomixer" },
          { name: "Stealth Addresses", description: "Enhanced address privacy", link: "/technology/privacy-features" },
        ],
      },
      {
        category: "Educational Resources",
        items: [
          {
            name: "Sigma Protocols Guide",
            description: "Understanding privacy tech",
            link: "/technology/privacy-features",
          },
          { name: "Privacy Best Practices", description: "How to stay private", link: "/learn/privacy" },
        ],
      },
    ],
    nextSteps: [
      { text: "Learn About ErgoMixer", link: "/ecosystem/projects/ergomixer" },
      { text: "Understand Sigma Protocols", link: "/technology/privacy-features" },
      { text: "Read Privacy Best Practices", link: "/learn/privacy" },
      { text: "Join Privacy Discussions", link: "https://discord.gg/ergo-platform" },
    ],
    communityChannels: [
      { name: "Privacy Discord Channels", link: "https://discord.gg/ergo-platform" },
      { name: "ErgoMixer Community", link: "/ecosystem/projects/ergomixer" },
      { name: "Technical Discussions", link: "https://ergoforum.org" },
    ],
  },
  learner: {
    id: "learner",
    name: "Curious Learner",
    title: "KNOWLEDGE SEEKER",
    description:
      "You're new to Ergo and want to understand the fundamentals first! Perfect - learning the basics will help you make informed decisions about how to engage with the ecosystem.",
    icon: "📚",
    color: "from-primary to-amber-500",
    tools: [
      {
        category: "Educational Resources",
        items: [
          { name: "FAQ for Beginners", description: "Common questions answered", link: "/start/faq" },
          { name: "Quick Introduction", description: "Ergo overview", link: "/start/introduction" },
          { name: "Ergonaut Handbook", description: "Comprehensive guide", link: "/learn/handbook" },
        ],
      },
      {
        category: "Community Support",
        items: [
          { name: "Newcomer Channels", description: "Beginner-friendly discussions", link: "/community" },
          { name: "Learning Groups", description: "Study groups and mentorship", link: "/community/learning" },
        ],
      },
    ],
    nextSteps: [
      { text: "Read the FAQ for Beginners", link: "/start/faq" },
      { text: "Take the Quick Introduction", link: "/start/introduction" },
      { text: "Join Newcomer Community", link: "/community" },
      { text: "Explore the Learning Hub", link: "/learn" },
    ],
    communityChannels: [
      { name: "General Discord", link: "https://discord.gg/ergo-platform" },
      { name: "Newcomer Support", link: "/community/newcomers" },
      { name: "Learning Groups", link: "/community/learning" },
    ],
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function QuizClient() {
  const [currentStep, setCurrentStep] = useState<"intro" | "quiz" | "results">("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)

  const handleStartQuiz = () => {
    setCurrentStep("quiz")
    setCurrentQuestion(0)
    setAnswers({})
  }

  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    const question = quizQuestions[currentQuestion]
    const selectedOption = question.options[optionIndex]

    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption.profiles,
    }))

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        calculateResults()
      }
    }, 500)
  }

  const calculateResults = () => {
    const profileScores: Record<string, number> = {}

    // Count profile mentions across all answers
    Object.values(answers).forEach((profileList) => {
      profileList.forEach((profile) => {
        profileScores[profile] = (profileScores[profile] || 0) + 1
      })
    })

    // Find the profile with the highest score
    const topProfile = Object.entries(profileScores).reduce((a, b) =>
      profileScores[a[0]] > profileScores[b[0]] ? a : b,
    )[0]

    setSelectedProfile(topProfile)
    setCurrentStep("results")
  }

  const resetQuiz = () => {
    setCurrentStep("intro")
    setCurrentQuestion(0)
    setAnswers({})
    setSelectedProfile(null)
  }

  const progress = currentStep === "quiz" ? ((currentQuestion + 1) / quizQuestions.length) * 100 : 0

  return (
    <QuizPageWrapper>
      <AnimatePresence mode="wait">
        {/* Introduction */}
        {currentStep === "intro" && (
          <motion.section
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-32 pb-20 px-4"
          >
            <div className="max-w-5xl mx-auto">
              <FadeIn>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-4 mb-8">
                    <h1 className="text-6xl md:text-8xl font-bold text-white">
                      ERGO PATH FINDER
                    </h1>
                  </div>

                  <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-mono">
                      <span className="text-orange-400">[</span>
                      DISCOVER YOUR PLACE IN THE ECOSYSTEM
                      <span className="text-orange-400">]</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                      Welcome to Ergo! New to our vast ecosystem and not sure where to begin? This short quiz will
                      help you identify which aspects of Ergo might interest you most and guide you to personalized
                      resources.
                    </p>
                    <p className="text-lg text-gray-300 font-mono">
                      Answer a few simple questions to find your path: Are you a future{" "}
                      <span className="text-orange-400">Investor</span>, <span className="text-orange-400">Developer</span>,{" "}
                      <span className="text-orange-400">Miner</span>,{" "}
                      <span className="text-orange-400">NFT Enthusiast</span>,{" "}
                      <span className="text-orange-400">DeFi User</span>, or something else?
                    </p>
                  </div>

                  <Button
                    onClick={handleStartQuiz}
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-black font-mono uppercase tracking-wider px-12 py-6 text-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
                  >
                    <Rocket className="w-6 h-6 mr-2" />
                    START QUIZ
                  </Button>
                </div>
              </FadeIn>
            </div>
          </motion.section>
        )}

        {/* Quiz */}
        {currentStep === "quiz" && (
          <motion.section
            key="quiz"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="pt-32 pb-20 px-4"
          >
            <div className="max-w-4xl mx-auto">
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-orange-400 font-mono text-sm">
                    QUESTION {currentQuestion + 1} OF {quizQuestions.length}
                  </span>
                  <span className="text-gray-400 font-mono text-sm">{Math.round(progress)}% COMPLETE</span>
                </div>
                <Progress value={progress} className="h-2 bg-neutral-800" />
              </div>

              {/* Question */}
              <Card className="bg-neutral-900/50 border-orange-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-mono flex items-center gap-3">
                      <Target className="w-6 h-6 text-orange-400" />
                      {quizQuestions[currentQuestion].question}
                    </h2>

                    <div className="space-y-4">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleAnswerSelect(quizQuestions[currentQuestion].id, index)}
                          className="w-full p-6 text-left border border-orange-500/20 rounded-lg hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-lg text-gray-300 group-hover:text-white font-mono">
                              {option.text}
                            </span>
                            <ChevronRight className="w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  variant="outline"
                  disabled={currentQuestion === 0}
                  className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <Button 
                  onClick={resetQuiz} 
                  variant="ghost" 
                  className="text-gray-400 hover:text-white hover:bg-neutral-800"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Restart
                </Button>
              </div>
            </div>
          </motion.section>
        )}

        {/* Results */}
        {currentStep === "results" && selectedProfile && (
          <motion.section
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="pt-32 pb-20 px-4"
          >
            <div className="max-w-6xl mx-auto">
              <FadeIn>
                <div className="text-center mb-16">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                  >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-snug pb-2">
                      YOUR ERGO PATH: {profiles[selectedProfile].name.toUpperCase()}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 font-mono">
                      <span className="text-orange-400">[</span>
                      {profiles[selectedProfile].title}
                      <span className="text-orange-400">]</span>
                    </h2>
                  </motion.div>

                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
                    {profiles[selectedProfile].description}
                  </p>
                </div>
              </FadeIn>

              {/* Tools & Resources */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {profiles[selectedProfile].tools.map((toolCategory, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="bg-neutral-900/50 border-orange-500/20 backdrop-blur-sm h-full">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                          <Brain className="w-5 h-5 text-orange-400" />
                          {toolCategory.category}
                        </h3>
                        <div className="space-y-4">
                          {toolCategory.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="border-l-2 border-orange-500/30 pl-4">
                              <Link href={item.link} className="block hover:text-orange-400 transition-colors group">
                                <h4 className="font-medium text-white group-hover:text-orange-400 flex items-center gap-2">
                                  {item.name}
                                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h4>
                                <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Next Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-16"
              >
                <SectionHeading text="YOUR NEXT STEPS" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profiles[selectedProfile].nextSteps.map((step, index) => (
                    <Button
                      key={index}
                      asChild
                      className="bg-transparent border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-mono uppercase tracking-wider h-auto py-4 transition-all duration-200"
                    >
                      <Link href={step.link}>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {step.text}
                      </Link>
                    </Button>
                  ))}
                </div>
              </motion.div>

              {/* Community Channels */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-16"
              >
                <Card className="bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-orange-500/20 border-orange-500/40 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4 font-mono">CONNECT WITH YOUR COMMUNITY</h3>
                    <p className="text-gray-300 mb-6">
                      Join others who share your interests and get support on your Ergo journey
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      {profiles[selectedProfile].communityChannels.map((channel, index) => (
                        <Button
                          key={index}
                          asChild
                          variant="outline"
                          className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10"
                        >
                          <Link href={channel.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {channel.name}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* General Learn More */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
                <Card className="bg-neutral-900/40 border-orange-500/20 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-6 font-mono">
                      WANT TO EXPLORE OTHER ASPECTS OF ERGO?
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        asChild
                        className="bg-orange-500 hover:bg-orange-600 text-black hover:shadow-lg font-mono uppercase tracking-wider transition-all duration-200"
                      >
                        <Link href="/ecosystem">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Explore Entire Ecosystem
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 font-mono uppercase tracking-wider"
                      >
                        <Link href="/start/faq">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Read Full FAQ
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 font-mono uppercase tracking-wider"
                      >
                        <Link href="/community">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Join Main Community
                        </Link>
                      </Button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-orange-500/20">
                      <Button
                        onClick={resetQuiz}
                        variant="ghost"
                        className="text-gray-400 hover:text-white hover:bg-neutral-800 font-mono"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Take Quiz Again
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </QuizPageWrapper>
  )
}