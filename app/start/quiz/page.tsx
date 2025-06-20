"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  RotateCcw,
  Check,
  Dna,
  User,
  Cpu,
  LineChart,
  BookOpen,
  Code,
  Shield,
  Palette,
  Target,
} from "lucide-react"

// Types
interface QuizQuestion {
  id: string
  question: string
  icon: React.ElementType
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
  nextSteps: { text: string; link: string }[]
}

// Data
const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What primarily attracts you to blockchain technology?",
    icon: Target,
    options: [
      { text: "Investment and financial opportunities", profiles: ["investor", "defi"] },
      { text: "Building applications and new tech", profiles: ["developer"] },
      { text: "Supporting network security with hardware", profiles: ["miner"] },
      { text: "I'm new and just want to learn!", profiles: ["learner"] },
    ],
  },
  {
    id: "q2",
    question: "How would you describe your technical comfort level?",
    icon: User,
    options: [
      { text: "Very comfortable, I can code or manage systems", profiles: ["developer", "miner"] },
      { text: "Moderately comfortable, I can learn new software", profiles: ["defi", "investor"] },
      { text: "Not very technical, I prefer user-friendly apps", profiles: ["learner"] },
    ],
  },
  {
    id: "q3",
    question: "What kind of activity are you most interested in?",
    icon: Dna,
    options: [
      { text: "Growing my assets and exploring financial tools", profiles: ["investor", "defi"] },
      { text: "Creating new tools or smart contracts", profiles: ["developer"] },
      { text: "Securing the network and earning ERG", profiles: ["miner"] },
      { text: "Deeply understanding the technology", profiles: ["learner"] },
    ],
  },
]

const profiles: Record<string, Profile> = {
  developer: {
    id: "developer",
    name: "The Developer",
    title: "Build the Future",
    description: "You're drawn to creating innovative applications. Ergo's powerful ErgoScript and eUTXO model offer unique opportunities to build secure and efficient dApps.",
    icon: "💻",
    color: "text-cyan-400",
    nextSteps: [
      { text: "Explore Developer Docs", link: "/build" },
      { text: "Try the ErgoScript Playground", link: "/build" },
    ],
  },
  investor: {
    id: "investor",
    name: "The Investor",
    title: "Strategic Value Builder",
    description: "You're interested in Ergo's long-term potential. Focus on learning about the technology, tokenomics, and ecosystem growth to make informed decisions.",
    icon: "📈",
    color: "text-green-400",
    nextSteps: [
      { text: "Explore the Ecosystem", link: "/ecosystem" },
      { text: "Get an Ergo Wallet", link: "/wallet" },
    ],
  },
  miner: {
    id: "miner",
    name: "The Miner",
    title: "Secure the Network",
    description: "You're interested in supporting Ergo's network security while earning rewards. Ergo's ASIC-resistant Autolykos v2 algorithm is designed for fair mining.",
    icon: "⛏️",
    color: "text-yellow-400",
    nextSteps: [
      { text: "Learn About Mining", link: "/use/mining" },
      { text: "Find a Mining Pool", link: "/ecosystem/mining" },
    ],
  },
  defi: {
    id: "defi",
    name: "The DeFi User",
    title: "Financial Pioneer",
    description: "You're ready to explore innovative financial instruments. Discover new ways to manage assets, earn returns, and participate in the future of finance on Ergo.",
    icon: "🏦",
    color: "text-orange-400",
    nextSteps: [
      { text: "Discover DeFi dApps", link: "/use/defi" },
      { text: "Get an Ergo Wallet", link: "/wallet" },
    ],
  },
  learner: {
    id: "learner",
    name: "The Learner",
    title: "Knowledge Seeker",
    description: "You're new and want to understand the fundamentals first. Learning the basics will help you make informed decisions as you engage with the ecosystem.",
    icon: "📚",
    color: "text-blue-400",
    nextSteps: [
      { text: "Read the Introduction", link: "/start/introduction" },
      { text: "Explore the Learning Hub", link: "/learn" },
    ],
  },
}

// Components
const IntroScreen = ({ onStart }: { onStart: () => void }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
    className="text-center max-w-2xl"
  >
    <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/20 to-cyan-500/20 flex items-center justify-center border border-orange-500/30">
        <Target className="w-12 h-12 text-orange-400" />
    </div>
    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pb-4">
      Find Your Ergo Path
    </h1>
    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
      Not sure where to start? Answer a few short questions, and we'll recommend a personalized path for your journey into the Ergo ecosystem.
    </p>
    <Button onClick={onStart} size="lg" className="mt-10">
      Start the Quiz
      <ArrowRight className="w-5 h-5 ml-2" />
    </Button>
  </motion.div>
)

const QuizScreen = ({
  question,
  onAnswer,
  progress,
}: {
  question: QuizQuestion
  onAnswer: (profiles: string[]) => void
  progress: number
}) => {
  const { icon: Icon } = question
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="w-full max-w-2xl"
    >
      <Progress value={progress} className="mb-8" />
      <div className="text-center mb-10">
        <div className="inline-block p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl mb-4">
            <Icon className="w-8 h-8 text-orange-400" />
        </div>
        <h2 className="text-3xl font-bold">{question.question}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onAnswer(option.profiles)}
            className="text-left p-5 rounded-lg border border-gray-700 bg-gray-900/50 hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {option.text}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

const ResultsScreen = ({ profileId, onReset }: { profileId: string; onReset: () => void }) => {
  const profile = profiles[profileId]

  if (!profile) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl text-center"
    >
      <Badge className="mb-4">Your Recommended Path</Badge>
      <h2 className="text-4xl font-bold mb-4">
        Your profile: <span className={profile.color}>{profile.name}</span> {profile.icon}
      </h2>
      <p className="text-lg text-gray-300 mb-8">{profile.description}</p>
      
      <Card className="bg-gray-900/50 border-gray-800 text-left p-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Next Steps</h3>
        <div className="space-y-3">
          {profile.nextSteps.map((step, index) => (
            <Link key={index} href={step.link} passHref>
              <motion.div
                className="flex items-center justify-between p-4 rounded-lg bg-gray-800/70 hover:bg-orange-500/10 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <span>{step.text}</span>
                <ArrowRight className="w-5 h-5 text-orange-400" />
              </motion.div>
            </Link>
          ))}
        </div>
      </Card>

      <Button onClick={onReset} variant="outline">
        <RotateCcw className="w-4 h-4 mr-2" />
        Take Again
      </Button>
    </motion.div>
  )
}

export default function QuizPage() {
  const [step, setStep] = useState<"intro" | "quiz" | "results">("intro")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [resultProfile, setResultProfile] = useState<string | null>(null)

  const handleStart = () => {
    setStep("quiz")
  }

  const handleAnswer = (profiles: string[]) => {
    const newScores = { ...scores }
    profiles.forEach((p) => {
      newScores[p] = (newScores[p] || 0) + 1
    })
    setScores(newScores)

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      const topProfile = Object.entries(newScores).reduce((a, b) => (a[1] > b[1] ? a : b), ["learner", 0])[0]
      setResultProfile(topProfile)
      setStep("results")
    }
  }

  const handleReset = () => {
    setStep("intro")
    setCurrentQuestionIndex(0)
    setScores({})
    setResultProfile(null)
  }

  const progress = (currentQuestionIndex / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,136,0,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {step === "intro" && <IntroScreen onStart={handleStart} />}
          {step === "quiz" && (
            <QuizScreen
              question={quizQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              progress={progress}
            />
          )}
          {step === "results" && resultProfile && <ResultsScreen profileId={resultProfile} onReset={handleReset} />}
        </AnimatePresence>
      </div>
    </div>
  )
}
