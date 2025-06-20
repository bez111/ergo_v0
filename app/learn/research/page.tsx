"use client"

import { motion } from "framer-motion"
import {
  FileText,
  BookOpen,
  Shield,
  Eye,
  DollarSign,
  Database,
  Code,
  Users,
  ExternalLink,
  Github,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { useState, MouseEvent } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const keyPapers = [
  {
    title: "Ergo Whitepaper",
    description: "The core technical paper describing Ergo's design, principles, and protocol innovations.",
    url: "https://ergoplatform.org/docs/whitepaper.pdf",
    category: "Core Protocol",
    icon: FileText,
  },
  {
    title: "Extended UTXO (eUTXO) Model",
    description: "By IOHK/Cardano & Ergo researchers—the definitive paper on the eUTXO paradigm.",
    url: "https://iohk.io/en/research/library/papers/extended-utxo-a-formal-model-for-utxo-based-cryptocurrencies/",
    category: "Architecture",
    icon: Database,
  },
  {
    title: "Sigma Protocols",
    description: "The cryptographic backbone of privacy and ring signatures in Ergo.",
    url: "https://ergoplatform.org/docs/sigma-protocol.pdf",
    category: "Cryptography",
    icon: Shield,
  },
  {
    title: "Autolykos: Ergo PoW Algorithm",
    description: "A novel, ASIC-resistant Proof-of-Work consensus mechanism.",
    url: "https://ergoplatform.org/docs/Autolykos.pdf",
    category: "Consensus",
    icon: Code,
  },
  {
    title: "NIPoPoWs",
    description: "Research on cross-chain, lightweight validation protocols for trustless interoperability.",
    url: "https://nipopows.com/",
    category: "Interoperability",
    icon: Users,
  },
]

const researchCategories = [
  {
    title: "Formal Security & Protocol Analysis",
    icon: Shield,
    color: "text-red-400",
    papers: [
      {
        title: "Formal Verification of ErgoScript",
        url: "https://ergoplatform.org/en/blog/2022_09_01-formal-verification/",
      },
      {
        title: "ErgoScript: Foundations and Security",
        url: "https://ergoplatform.org/docs/ErgoScript.pdf",
      },
      {
        title: "Security Properties of eUTXO-based Smart Contracts",
        url: "https://eprint.iacr.org/2020/1402.pdf",
      },
    ],
  },
  {
    title: "Privacy & Zero-Knowledge",
    icon: Eye,
    color: "text-purple-400",
    papers: [
      {
        title: "Zero-Knowledge Proofs in Sigma Protocols",
        url: "https://eprint.iacr.org/2017/1050.pdf",
      },
      {
        title: "Ring Signatures for Blockchain Privacy",
        url: "https://ergoplatform.org/docs/ring-signatures.pdf",
      },
    ],
  },
  {
    title: "DeFi & Economic Models",
    icon: DollarSign,
    color: "text-green-400",
    papers: [
      {
        title: "Composable DeFi Primitives on eUTXO",
        url: "https://ergoplatform.org/en/blog/2021_12_07-composable-defi/",
      },
      {
        title: "On-chain Lending, LETS, and Oracles",
        url: "https://ergoplatform.org/en/blog/2020_07_13-leveraging-oracles/",
      },
    ],
  },
  {
    title: "Storage Rent & Blockchain Sustainability",
    icon: Database,
    color: "text-blue-400",
    papers: [
      {
        title: "Ergo Storage Rent Model",
        url: "https://ergoplatform.org/docs/storage-rent.pdf",
      },
      {
        title: "Efficient Blockchain State Management",
        url: "https://eprint.iacr.org/2019/1072.pdf",
      },
    ],
  },
]

const developerResources = [
  {
    title: "ErgoScript Documentation",
    url: "https://ergoplatform.org/docs/ergoscript.pdf",
    icon: Code,
  },
  {
    title: "Protocol Specifications",
    url: "https://ergoplatform.org/docs/ErgoProtocol.pdf",
    icon: FileText,
  },
  {
    title: "Node Implementation",
    url: "https://github.com/ergoplatform/ergo",
    icon: Github,
  },
  {
    title: "Sigma-Rust Cryptography Library",
    url: "https://github.com/ergoplatform/sigma-rust",
    icon: Shield,
  },
  {
    title: "ErgoMixer Technical Overview",
    url: "https://ergoplatform.org/en/blog/2020_05_28-ergomixer/",
    icon: Eye,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ResearchPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white" onMouseMove={handleMouseMove}>
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 136, 0, 0.15), transparent 80%)`,
        }}
      />
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="pt-32 pb-16 px-4 text-center"
        >
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-sm">
            ACADEMIC & TECHNICAL
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pr-4">
              Research & Papers
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the foundational academic research and technical specifications that underpin Ergo's innovative
            blockchain technology.
          </p>
        </motion.section>

        {/* Key Papers Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 py-12"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Key Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyPapers.map((paper) => (
              <motion.div key={paper.title} variants={itemVariants}>
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <paper.icon className="w-8 h-8 text-orange-400" />
                        <div>
                          <h3 className="text-xl font-bold text-white">{paper.title}</h3>
                          <Badge variant="secondary" className="mt-1">
                            {paper.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6 flex-1">{paper.description}</p>
                    <Button asChild variant="outline" className="w-full mt-auto">
                      <Link href={paper.url} target="_blank" className="flex items-center gap-2">
                        Read Paper
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Categories Section */}
        <div className="border-y border-gray-800 bg-black/20">
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto px-4 py-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Research by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {researchCategories.map((category) => (
                <motion.div key={category.title} variants={itemVariants}>
                  <div className="bg-gray-900 border border-gray-700/50 rounded-lg p-6 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <category.icon className={`w-5 h-5 ${category.color} flex-shrink-0`} />
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.papers.map((paper) => (
                        <li key={paper.title}>
                          <Link
                            href={paper.url}
                            target="_blank"
                            className="group flex items-center justify-between text-sm text-gray-400 hover:text-orange-400 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <FileText className="w-4 h-4 text-gray-600 flex-shrink-0" />
                              <span className="flex-1 leading-snug">{paper.title}</span>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-600 opacity-50 group-hover:opacity-100 group-hover:text-orange-400 transition-all" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Developer Resources & Community Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Developer Resources */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8">Developer Resources</h2>
              <Card className="bg-gray-900/50 border-gray-800/50">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {developerResources.map((resource) => (
                      <li key={resource.title}>
                        <Link
                          href={resource.url}
                          target="_blank"
                          className="group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
                        >
                          <resource.icon className="w-6 h-6 text-orange-400" />
                          <span className="text-lg text-gray-300 group-hover:text-white">{resource.title}</span>
                          <ExternalLink className="w-5 h-5 ml-auto text-gray-500 group-hover:text-white" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Community Call to Action */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8">Join the Discussion</h2>
              <Card className="bg-gradient-to-br from-orange-500/10 to-transparent border-orange-500/30">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white mb-3">Contribute to Ergo Research</h3>
                  <p className="text-gray-300 mb-6">
                    Have an idea or want to contribute? Join our community channels to discuss research, propose
                    improvements, and collaborate with other experts.
                  </p>
                  <Button asChild>
                    <Link href="/start/community" className="flex items-center gap-2">
                      Community Channels
                      <Users className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
