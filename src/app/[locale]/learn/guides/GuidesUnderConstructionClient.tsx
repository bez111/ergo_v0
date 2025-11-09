"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Code, 
  Wallet, 
  Shield, 
  Clock, 
  Users,
  FileText,
  Zap
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

export default function GuidesUnderConstructionClient() {
  const [progress, setProgress] = useState(0)

  // Animated progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 2
        return newProgress > 85 ? 85 : newProgress // Cap at 85% to show it's still in progress
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])


  const upcomingGuides = [
    {
      icon: Wallet,
      title: "Wallet Setup & Security",
      description: "Complete guide to setting up and securing your Ergo wallet",
      status: "In Progress",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Smart Contract Development",
      description: "Learn to build and deploy ErgoScript contracts",
      status: "Coming Soon",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "DeFi Protocols Guide",
      description: "Navigate Ergo's decentralized finance ecosystem",
      status: "Planning",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Master Ergo's privacy features and best practices",
      status: "In Review",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Participation",
      description: "Get involved in governance and community initiatives",
      status: "Coming Soon",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: FileText,
      title: "Mining & Node Operation",
      description: "Complete guide to mining ERG and running nodes",
      status: "In Progress",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "text-orange-400 bg-orange-500/20 border-orange-500/30"
      case "In Review": return "text-blue-400 bg-blue-500/20 border-blue-500/30"
      case "Coming Soon": return "text-purple-400 bg-purple-500/20 border-purple-500/30"
      case "Planning": return "text-gray-400 bg-gray-500/20 border-gray-500/30"
      default: return "text-gray-400 bg-gray-500/20 border-gray-500/30"
    }
  }

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center max-w-4xl mx-auto">

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  Ergo Guides
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              >
                Comprehensive guides to master the Ergo ecosystem. 
                <br className="hidden md:block" />
                From beginner tutorials to advanced development patterns.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-400 mb-12"
              >
                📚 Coming Soon - Expert-crafted guides for every skill level
              </motion.p>
            </div>
          </div>
        </section>

        {/* Progress Section */}
        <section className="py-16 bg-gray-950/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Development Progress</h2>
              <div className="bg-gray-800 rounded-full h-4 mb-4 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </div>
              <p className="text-gray-300">
                <span className="text-orange-400 font-semibold">{Math.round(progress)}%</span> Complete
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Our team is working hard to bring you the most comprehensive Ergo guides
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Guides */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  What's Coming
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive guides covering every aspect of the Ergo ecosystem
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {upcomingGuides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:bg-gray-900/30 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${guide.color} flex items-center justify-center`}>
                        <guide.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                          {guide.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                      {guide.description}
                    </p>
                    
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(guide.status)}`}>
                      <Clock className="w-3 h-3" />
                      {guide.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <FinalCTASimple 
          title="Join the Ergo Community"
          description="Connect with developers and learners exploring the Ergo ecosystem."
          className="bg-gradient-to-b from-gray-900 to-black"
        />
      </div>
    </BackgroundWrapper>
  )
}
