"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Shield,
  Cpu,
  Code,
  Layers,
  Lock,
  Users,
  GitBranch,
  TrendingUp,
  Puzzle,
  Wallet,
  Compass,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Clean hex component (from UI Kit)
const ErgoHex = ({ size = "w-5 h-5", className = "", glowing = false }: { 
  size?: string; 
  className?: string; 
  glowing?: boolean;
}) => (
  <div className={`${size} ${className} relative`}>
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
      <polygon 
        points="20,12 16,19 8,19 4,12 8,5 16,5" 
        fill="none"
        stroke="currentColor" 
        strokeWidth="2"
        className={glowing ? "drop-shadow-[0_0_8px_currentColor]" : ""}
      />
    </svg>
  </div>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function IntroductionPage() {
  const principles = [
    {
      icon: Users,
      title: "Decentralized First",
      description: "Launched fairly with no premine or ICO. Ergo is community-driven and aims for maximum decentralization at all levels.",
      color: "text-orange-400"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built on the time-tested Proof-of-Work consensus (Autolykos) and the innovative eUTXO model for high security.",
      color: "text-cyan-400"
    },
    {
      icon: Code,
      title: "Powerful Contracts",
      description: "ErgoScript enables complex, secure financial apps that are impossible on many other platforms.",
      color: "text-purple-400"
    },
    {
      icon: GitBranch,
      title: "Long-term Focus",
      description: "Designed to be a long-term, resilient platform with a focus on real-world utility over speculation.",
      color: "text-green-400"
    },
  ]

  const technologies = [
    {
      icon: Cpu,
      title: "Proof-of-Work (PoW)",
      description: "Ensures maximum security and fair coin distribution. The Autolykos algorithm is ASIC-resistant, promoting wider participation.",
      color: "text-orange-400"
    },
    {
      icon: Layers,
      title: "Extended UTXO (eUTXO)",
      description: "Allows for more complex and secure smart contracts with better scalability and predictable fees. It's like 'smart money' with built-in logic.",
      color: "text-cyan-400"
    },
    {
      icon: Lock,
      title: "Sigma Protocols (Σ-protocols)",
      description: "Advanced cryptography enabling powerful privacy features like transaction mixing (ErgoMixer) and ring signatures at the protocol level.",
      color: "text-purple-400"
    },
  ]
  
  const useCases = [
    {
      icon: TrendingUp,
      title: "Decentralized Finance (DeFi)",
      description: "Explore stablecoins, decentralized exchanges, lending platforms, and more.",
      href: "/use/defi",
      color: "text-orange-400"
    },
    {
      icon: Puzzle,
      title: "dApps & Ecosystem",
      description: "Discover a growing ecosystem of applications for various use cases.",
      href: "/ecosystem",
      color: "text-cyan-400"
    },
    {
      icon: Code,
      title: "Build on Ergo",
      description: "Access tools, SDKs, and documentation to build the next generation of dApps.",
      href: "/build",
      color: "text-purple-400"
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center py-24 sm:py-32"
        >
          {/* Clean badge with hex */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
            <ErgoHex size="w-4 h-4" className="text-orange-400" />
            <span className="text-orange-300 text-sm font-medium tracking-widest">INTRODUCTION TO ERGO</span>
          </div>
          
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Decentralize Everything.
              </span>
              <br className="hidden md:block" />
              <span className="text-white">
                Build What Matters.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Ergo is a next-generation Proof-of-Work smart contract platform empowering anyone to launch new forms of digital value, experiment with economic logic, and own their assets—without permission.
            </p>
          </div>
        </motion.section>

        {/* What is Ergo Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              What is Ergo?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Ergo is designed for developing secure and powerful decentralized applications (dApps) and financial contracts. It builds on a decade of blockchain theory and development, combining established principles with new research.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Its mission is to provide the tools for truly decentralized and accessible financial systems, empowering ordinary people with economic freedom without intermediaries.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">Resilient Proof-of-Work</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Ergo uses its unique Autolykos algorithm, which is ASIC-resistant to ensure fair and wide distribution, providing robust security for the network.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Core Principles Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-24"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
            Our Core Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle) => (
              <motion.div variants={itemVariants} key={principle.title}>
                <Card className="bg-neutral-900/50 border border-neutral-700 h-full p-6 text-center transition-all duration-300 hover:scale-105 rounded-xl">
                  <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <principle.icon className={`w-6 h-6 ${principle.color}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${principle.color}`}>{principle.title}</h3>
                  <p className="text-sm text-gray-400">{principle.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Technologies Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
            Key Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {technologies.map((tech) => (
              <motion.div variants={itemVariants} key={tech.title} className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                    <tech.icon className={`w-6 h-6 ${tech.color}`}/>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${tech.color}`}>{tech.title}</h3>
                  <p className="text-gray-400 mt-1">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemVariants} className="mt-12">
            <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden w-full max-w-3xl mx-auto">
              <div className="bg-neutral-800/70 px-4 py-2 border-b border-neutral-700 flex items-center justify-between">
                <span className="font-mono text-sm text-orange-400">ErgoScript Example: Simple Time-Locked Contract</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto bg-neutral-900/50"><code>{`{
  val deadline = SELF.R4[Long].get
  sigmaProp(
    if (HEIGHT >= deadline) {
      // After deadline, only recipient can spend
      recipientPK
    } else {
      // Before deadline, only sender can spend
      senderPK
    }
  )
}`}</code></pre>
            </Card>
          </motion.div>
        </motion.section>

        {/* Use Cases Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-24"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
            What Can You Do with Ergo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <motion.div variants={itemVariants} key={useCase.title}>
                <Link href={useCase.href}>
                  <Card className="group bg-neutral-900/50 border border-neutral-700 text-left h-full p-6 transition-all duration-300 hover:scale-105 rounded-xl">
                    <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                      <useCase.icon className={`w-6 h-6 ${useCase.color}`} />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${useCase.color}`}>{useCase.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{useCase.description}</p>
                    <span className="text-orange-400 font-semibold text-sm flex items-center group-hover:underline">
                      Explore More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Get Started CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="py-16 text-center"
        >
          <Card className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/30 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Dive In?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Your journey into the Ergo ecosystem is just a few clicks away. Get a secure wallet and start exploring the future of finance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                <Link href="/wallet">
                  <Wallet className="w-5 h-5 mr-2" />
                  Get an Ergo Wallet
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm">
                <Link href="/ecosystem">
                  <Compass className="w-5 h-5 mr-2" />
                  Explore the Ecosystem
                </Link>
              </Button>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
