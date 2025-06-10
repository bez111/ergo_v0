"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
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
import { useState, useEffect } from "react"

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
  const keyPapers = [
    {
      title: "Ergo Whitepaper",
      description: "The core technical paper describing Ergo design, principles, and protocol innovations.",
      url: "https://ergoplatform.org/docs/whitepaper.pdf",
      category: "Core Protocol",
    },
    {
      title: "Extended UTXO (eUTXO) Model",
      description: "By IOHK/Cardano & Ergo researchers — the definitive paper on the eUTXO paradigm.",
      url: "https://iohk.io/en/research/library/papers/extended-utxo-a-formal-model-for-utxo-based-cryptocurrencies/",
      category: "Architecture",
    },
    {
      title: "Sigma Protocols",
      description: "The cryptographic backbone of privacy and ring signatures in Ergo.",
      url: "https://ergoplatform.org/docs/sigma-protocol.pdf",
      category: "Cryptography",
    },
    {
      title: "Autolykos: Ergo PoW Algorithm",
      description: "A novel, ASIC-resistant Proof-of-Work consensus mechanism.",
      url: "https://ergoplatform.org/docs/Autolykos.pdf",
      category: "Consensus",
    },
    {
      title: "NIPoPoWs (Non-Interactive Proofs of Proof-of-Work)",
      description: "Research on cross-chain, lightweight validation protocols.",
      url: "https://nipopows.com/",
      category: "Interoperability",
    },
  ]

  const researchCategories = [
    {
      title: "Formal Security & Protocol Analysis",
      icon: Shield,
      color: "from-red-500 to-orange-500",
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
      color: "from-purple-500 to-pink-500",
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
      color: "from-green-500 to-emerald-500",
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
      color: "from-blue-500 to-cyan-500",
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

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const MobileResearchPage = () => {
    return (
      <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="relative py-12 px-4 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Research & Papers
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Academic research, whitepapers, and foundational studies
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="text-orange-400 border-orange-400/50 bg-white/5 backdrop-blur-md text-xs">
                <BookOpen className="w-3 h-3 mr-1" />
                Academic Papers
              </Badge>
              <Badge variant="outline" className="text-cyan-400 border-cyan-400/50 bg-white/5 backdrop-blur-md text-xs">
                <FileText className="w-3 h-3 mr-1" />
                Technical Docs
              </Badge>
              <Badge variant="outline" className="text-purple-400 border-purple-400/50 bg-white/5 backdrop-blur-md text-xs">
                <Shield className="w-3 h-3 mr-1" />
                Security
              </Badge>
            </div>
          </motion.div>
        </section>

        <div className="px-4 pb-12">
          {/* Key Whitepapers Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Key Whitepapers
              </h2>
              <p className="text-gray-400 text-sm">
                Essential reading for understanding Ergo
              </p>
            </motion.div>

            <div className="space-y-4">
              {keyPapers.map((paper, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group">
                    <CardHeader className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {paper.category}
                        </Badge>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors" />
                      </div>
                      <CardTitle className="text-base group-hover:text-orange-400 transition-colors">
                        {paper.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="text-gray-400 text-sm mb-4">{paper.description}</CardDescription>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={paper.url} target="_blank" rel="noopener noreferrer">
                          Read Paper
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Separator className="bg-gray-700/50 mb-12" />

          {/* Academic Research Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Academic Research
              </h2>
              <p className="text-gray-400 text-sm">
                Deep dive into specific research areas
              </p>
            </motion.div>

            <div className="space-y-4">
              {researchCategories.map((category, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-base">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="space-y-3">
                        {category.papers.map((paper, paperIndex) => (
                          <Button
                            key={paperIndex}
                            asChild
                            variant="ghost"
                            className="w-full justify-start text-gray-300 hover:text-orange-400"
                          >
                            <Link href={paper.url} target="_blank" rel="noopener noreferrer">
                              <FileText className="w-5 h-5 mr-3" />
                              {paper.title}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Separator className="bg-gray-700/50 mb-12" />

          {/* Developer Resources Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Developer Resources
              </h2>
              <p className="text-gray-400 text-sm">
                Technical documentation and implementation details
              </p>
            </motion.div>

            <div className="space-y-3">
              {developerResources.map((resource, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start h-auto py-4 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50"
                  >
                    <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                      <resource.icon className="w-5 h-5 mr-3" />
                      {resource.title}
                      <ExternalLink className="w-5 h-5 ml-auto" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Separator className="bg-gray-700/50 mb-12" />

          <Button asChild variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm">
            <Link href="/contact">
              <Users className="w-4 h-4 mr-2" />
              Suggest Research Topics
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm">
            <Link href="https://discord.gg/ergoplatform" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Discord Discussions
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm">
            <Link
              href="https://github.com/ergoplatform/ergo/discussions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub Discussions
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const DesktopResearchPage = () => {
    return (
      <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Research & Papers
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Academic research, whitepapers, and foundational studies that power Ergo innovations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-orange-400 border-orange-400/50 bg-white/5 backdrop-blur-md">
                <BookOpen className="w-4 h-4 mr-2" />
                Academic Papers
              </Badge>
              <Badge variant="outline" className="text-cyan-400 border-cyan-400/50 bg-white/5 backdrop-blur-md">
                <FileText className="w-4 h-4 mr-2" />
                Technical Documentation
              </Badge>
              <Badge variant="outline" className="text-purple-400 border-purple-400/50 bg-white/5 backdrop-blur-md">
                <Shield className="w-4 h-4 mr-2" />
                Security Research
              </Badge>
            </div>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Key Whitepapers Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Key Whitepapers & Foundational Papers
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Essential reading for understanding Ergo core innovations and technical foundations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyPapers.map((paper, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {paper.category}
                        </Badge>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-orange-400 transition-colors">
                        {paper.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400 mb-4">{paper.description}</CardDescription>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={paper.url} target="_blank" rel="noopener noreferrer">
                          Read Paper
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Separator className="bg-gray-700/50 mb-20" />

          {/* Academic Research Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Academic Research
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Deep dive into specific research areas and technical innovations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {researchCategories.map((category, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.papers.map((paper, paperIndex) => (
                          <Button
                            key={paperIndex}
                            asChild
                            variant="ghost"
                            className="w-full justify-start text-gray-300 hover:text-orange-400"
                          >
                            <Link href={paper.url} target="_blank" rel="noopener noreferrer">
                              <FileText className="w-5 h-5 mr-3" />
                              {paper.title}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Separator className="bg-gray-700/50 mb-20" />

          {/* Developer Resources Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Developer Resources
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Technical documentation and implementation details for developers
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {developerResources.map((resource, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start h-auto py-4 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50"
                  >
                    <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                      <resource.icon className="w-5 h-5 mr-3" />
                      {resource.title}
                      <ExternalLink className="w-5 h-5 ml-auto" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Separator className="bg-gray-700/50 mb-20" />

          <Button asChild variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm">
            <Link href="/contact">
              <Users className="w-4 h-4 mr-2" />
              Suggest Research Topics
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm">
            <Link href="https://discord.gg/ergoplatform" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Discord Discussions
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm">
            <Link
              href="https://github.com/ergoplatform/ergo/discussions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub Discussions
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return isMobile ? <MobileResearchPage /> : <DesktopResearchPage />
}
