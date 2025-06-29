"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, FlaskConical, FileText, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testingConcepts = [
  {
    title: "Unit Testing ErgoScript",
    description: "Test individual ErgoScript functions and logic in isolation.",
    icon: Code,
  },
  {
    title: "Integration Testing dApps",
    description: "Verify interactions between your dApp components and the Ergo blockchain.",
    icon: FlaskConical,
  },
  {
    title: "Testnet Deployment",
    description: "Deploy and test your applications on Ergo testnets before mainnet.",
    icon: FileText,
  },
  {
    title: "Best Practices for Security",
    description: "Guidelines for writing secure and robust Ergo smart contracts.",
    icon: CheckCircle,
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

export default function TestingPage() {
  return (
    <>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">TESTING</Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pb-4">
            Testing Ergo Applications
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ensure the reliability and security of your Ergo smart contracts and decentralized applications.
          </p>
        </motion.section>

        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="mb-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-10">
            Key Testing Concepts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testingConcepts.map((concept) => (
              <motion.div variants={itemVariants} key={concept.title}>
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl h-full flex flex-col transition-all duration-300 hover:border-orange-500/50">
                  <div className="p-6 text-center flex-1 flex flex-col">
                    <concept.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{concept.title}</h3>
                    <p className="text-gray-400 mb-6">{concept.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Start Testing Your Code</h2>
          <p className="text-lg text-gray-300 mb-8">
            Dive into our guides to learn how to effectively test your Ergo-based solutions.
          </p>
          {/* Add links to specific testing guides here */}
        </motion.section>
      </>
  )
}
