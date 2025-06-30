"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Terminal, Package, GitBranch, Wrench } from "lucide-react"

const toolkitItems = [
  {
    title: "Ergo Node CLI",
    description: "Interact with your Ergo node directly from the command line.",
    icon: Terminal,
  },
  {
    title: "ErgoScript Compiler",
    description: "Compile ErgoScript code into ErgoTree for smart contracts.",
    icon: Code,
  },
  {
    title: "Ergo SDKs",
    description: "Libraries and tools for various programming languages.",
    icon: Package,
  },
  {
    title: "Local Development Setup",
    description: "Guides for setting up a local Ergo development environment.",
    icon: Wrench,
  },
  {
    title: "Testing Utilities",
    description: "Tools and best practices for testing Ergo smart contracts.",
    icon: GitBranch,
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

export default function DeveloperToolkitPage() {
  return (
    <>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">DEVELOPER TOOLKIT</Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pb-4 leading-tight pb-1">
            Ergo Developer Toolkit
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive suite of tools and resources for building on the Ergo blockchain.
          </p>
        </motion.section>

        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="mb-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-10">
            Key Tools & Resources
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolkitItems.map((item) => (
              <motion.div variants={itemVariants} key={item.title}>
                <div className="bg-neutral-900/50 border border-neutral-700/50 rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:border-orange-500/50">
                  <div className="p-6 text-center flex-1 flex flex-col">
                    <item.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 mb-6">{item.description}</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Explore the tools above or dive into our quickstart guides to begin your Ergo development journey.
          </p>
          {/* Add links to quickstart/setup guides here */}
        </motion.section>
      </>
  )
}
