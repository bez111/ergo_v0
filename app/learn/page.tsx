"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, Code, FileText, Users, ChevronRight } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { GlitchText } from "@/components/glitch-text"

const learningResources = [
  {
    title: "ErgoScript Tutorial Series",
    description: "Master ErgoScript: Your path to building secure and powerful smart contracts on Ergo, step by step.",
    icon: Code,
    href: "/learn/ergoscript",
    difficulty: "Beginner to Expert",
    duration: "20+ hours",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Comprehensive FAQ",
    description: "Everything you need to know about Ergo blockchain, technology, and ecosystem in one place.",
    icon: FileText,
    href: "/learn/faq",
    difficulty: "All Levels",
    duration: "Reference",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Research Papers",
    description: "Deep dive into the academic research and technical papers behind Ergo's innovations.",
    icon: BookOpen,
    href: "/learn/research",
    difficulty: "Advanced",
    duration: "Varies",
    color: "from-purple-500 to-pink-500",
  },
]

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10"></div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <GlitchText
              text="Learn Ergo"
              className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"
            />
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Master the future of blockchain technology with comprehensive learning resources
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From beginner-friendly tutorials to advanced research papers, discover everything you need to build on
              Ergo's revolutionary platform.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 bg-gray-950 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Learning Resources
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {learningResources.map((resource, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={resource.href}>
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-full hover:border-orange-500/50 transition-all group-hover:transform group-hover:scale-105">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4`}
                    >
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                      {resource.title}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-3">{resource.description}</p>

                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>{resource.difficulty}</span>
                      <span>{resource.duration}</span>
                    </div>

                    <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                      <span className="mr-2">Learn more</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                New to Ergo?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">Start your journey with our beginner-friendly introduction</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/start/introduction">
                <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-md font-medium hover:from-orange-500 hover:to-red-500 transition-all flex items-center gap-2">
                  Get Started <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/learn/faq">
                <button className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-md font-medium hover:bg-gray-700 transition-all flex items-center gap-2">
                  Browse FAQ <FileText className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 bg-gray-950 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Join the Community
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with other developers and get help from the Ergo community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/start/community">
                <button className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-md font-medium hover:bg-gray-700 transition-all flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Community Channels
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
