"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import {
  BookOpen,
  Users,
  ExternalLink,
  FileText,
  Shield,
  Database,
  Eye,
  GitBranch,
  ShieldCheck,
  Terminal,
} from "lucide-react"

const keyPapers = [
  {
    title: "Ergo: A Resilient Platform For Contractual Money",
    description: "The foundational whitepaper describing Ergo's architecture, eUTXO model, and key innovations.",
    url: "/api/pdf/documents/Ergo- A Resilient Platform For Contractual Money.pdf",
    category: "Core Protocol",
    icon: FileText,
  },
  {
    title: "ErgoScript Language & Sigma Protocols",
    description: "Technical paper on ErgoScript language design and zero-knowledge proof integration.",
    url: "/api/pdf/documents/ErgoScript, a Cryptocurrency Scripting Language Supporting Noninteractive Zero-Knowledge Proofs.pdf",
    category: "Cryptography",
    icon: Shield,
  },
  {
    title: "Multi-Stage Contracts in UTXO Model",
    description: "Research on implementing complex multi-stage contracts using the UTXO model.",
    url: "/api/pdf/documents/Multi-Stage Contracts in the UTXO Model.pdf",
    category: "Architecture",
    icon: Database,
  },
  {
    title: "Advanced ErgoScript Tutorial",
    description: "Comprehensive guide to advanced ErgoScript programming patterns and best practices.",
    url: "/api/pdf/documents/Advanced ErgoScript Tutorial.pdf",
    category: "Development",
    icon: Terminal,
  },
  {
    title: "Zerojoin: Privacy-Preserving Mixing",
    description: "Research on combining Zerocoin and CoinJoin for enhanced transaction privacy.",
    url: "/api/pdf/documents/Zerojoin- Combining Zerocoin and CoinJoin.pdf",
    category: "Privacy",
    icon: Eye,
  },
  {
    title: "Non-Interactive Proofs of Proof-of-Work",
    description: "Foundational research on NIPoPoWs enabling light clients and cross-chain verification.",
    url: "/api/pdf/documents/Non-Interactive Proofs of Proof-of-Work.pdf",
    category: "Cryptography",
    icon: ShieldCheck,
  },
]

const researchCategories = [
  {
    title: "Core Protocol & Architecture",
    icon: Shield,
    color: "text-orange-400",
    papers: [
      { title: "Ergo: A Resilient Platform For Contractual Money", url: "/api/pdf/documents/Ergo- A Resilient Platform For Contractual Money.pdf" },
      { title: "The Ergo Platform Project Overview", url: "/api/pdf/documents/The Ergo Platform Project Overview.pdf" },
      { title: "Multi-Stage Contracts in the UTXO Model", url: "/api/pdf/documents/Multi-Stage Contracts in the UTXO Model.pdf" },
    ],
  },
  {
    title: "Privacy & Zero-Knowledge",
    icon: Eye,
    color: "text-orange-400",
    papers: [
      { title: "ErgoScript & Noninteractive Zero-Knowledge Proofs", url: "/api/pdf/documents/ErgoScript, a Cryptocurrency Scripting Language Supporting Noninteractive Zero-Knowledge Proofs.pdf" },
      { title: "Non-Interactive Proofs of Proof-of-Work", url: "/api/pdf/documents/Non-Interactive Proofs of Proof-of-Work.pdf" },
      { title: "Zerojoin: Combining Zerocoin and CoinJoin", url: "/api/pdf/documents/Zerojoin- Combining Zerocoin and CoinJoin.pdf" },
      { title: "Succinct, Non-Interactive Share Proofs", url: "/api/pdf/documents/Succinct, Non-Interactive Share Proofs.pdf" },
    ],
  },
  {
    title: "Economic Models & DeFi",
    icon: Database,
    color: "text-orange-400",
    papers: [
      { title: "Dexy: Algorithmic Stablecoin Design", url: "/api/pdf/documents/Dexy - A Stablecoin Based On Algorithmic Central Bank.pdf" },
      { title: "A Systematic Approach To Cryptocurrency Fees", url: "/api/pdf/documents/A Systematic Approach To Cryptocurrency Fees.pdf" },
      { title: "Crowdfunded Smart Contract Pools Research", url: "/api/pdf/documents/Ergo Hackathon- Crowdfunded Smart Contract Pools Research and Conceptualization.pdf" },
    ],
  },
  {
    title: "Consensus & Mining",
    icon: Terminal,
    color: "text-orange-400",
    papers: [
      { title: "Revisiting Difficulty Control for Blockchain Systems", url: "/api/pdf/documents/Revisiting Difficulty Control for Blockchain Systems.pdf" },
      { title: "Bypassing Non-Outsourceable Proof-of-Work Schemes", url: "/api/pdf/documents/Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts.pdf" },
      { title: "Soft Power: Upgrading Chain Macroeconomic Policy", url: "/api/pdf/documents/Soft Power- Upgrading Chain Macroeconomic Policy Through Soft Forks.pdf" },
    ],
  },
  {
    title: "Advanced Topics & Theory",
    icon: FileText,
    color: "text-orange-400",
    papers: [
      { title: "Self-Reproducing Coins as Universal Turing Machine", url: "/api/pdf/documents/Self-Reproducing Coins as Universal Turing Machine.pdf" },
      { title: "EDRAX: Stateless Transaction Validation", url: "/api/pdf/documents/EDRAX- A Cryptocurrency with Stateless Transaction Validation.pdf" },
      { title: "Multi-mode Cryptocurrency Systems", url: "/api/pdf/documents/Multi-mode Cryptocurrency Systems.pdf" },
      { title: "Know Your Assumptions", url: "/api/pdf/documents/Know Your Assumptions .pdf" },
    ],
  },
]

const developerResources = [
  { title: "ErgoScript Documentation", url: "https://ergoplatform.org/docs/ergoscript.pdf", icon: FileText },
  { title: "Protocol Specifications", url: "https://ergoplatform.org/docs/ErgoProtocol.pdf", icon: FileText },
  { title: "Node Implementation", url: "https://github.com/ergoplatform/ergo", icon: GitBranch },
  { title: "Sigma-Rust Cryptography Library", url: "https://github.com/ergoplatform/sigma-rust", icon: Shield },
  { title: "ErgoMixer Technical Overview", url: "https://ergoplatform.org/en/blog/2020_05_28-ergomixer/", icon: Eye },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ResearchClient() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <>
      {/* BreadcrumbList Schema */}
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Learn", item: "https://ergoblockchain.org/learn" },
            { "@type": "ListItem", position: 2, name: "Research", item: "https://ergoblockchain.org/learn/research" },
          ],
        }}
      />

      <BackgroundWrapper>
        <div className="container mx-auto px-4 py-16">

        {/* Breadcrumbs (hidden visually, present for screen readers) */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { label: "Learn", href: "/learn" },
              { label: "Research", href: "/learn/research" },
            ]}
          />
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 motion-reduce:animate-none">
          {/* Hero Section */}
          <motion.section
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Research</h1>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Academic groundwork and technical papers that underpin Ergo's protocol, security, and economics.
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Curated links to whitepapers, formal analyses, and developer resources.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#key-docs">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50 transition-all duration-300">
                        Key Documents
                      </Button>
                    </a>
                    <Link href="/start/community">
                      <Button
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl transition-all duration-300"
                      >
                        Community
                      </Button>
                    </Link>
                  </div>
                </div>
                <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">
                      Quick Start
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <a
                        href="https://ergoplatform.org/docs/whitepaper.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">Read Ergo Whitepaper</h4>
                          </div>
                        </div>
                      </a>
                      
                      <a
                        href="#key-docs"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">Explore Research Library</h4>
                          </div>
                        </div>
                      </a>
                      
                      <Link
                        href="/start/community"
                        className="p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                            <Users className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">Join the Community</h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Key Documents */}
          <motion.section
            id="key-docs"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            className="py-20 px-4"
          >
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Key Documents</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {keyPapers.map((paper) => (
                      <motion.div key={paper.title} variants={itemVariants}>
                        <Card className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl h-full">
                          <CardContent className="p-6 h-full flex flex-col">
                            <div className="flex items-start gap-4 mb-4">
                              <paper.icon className="w-8 h-8 text-orange-400" />
                              <div>
                                <h3 className="text-xl font-bold text-white">{paper.title}</h3>
                                <span className="text-xs text-neutral-400">{paper.category}</span>
                              </div>
                            </div>
                            <p className="text-neutral-300 mb-6 flex-1">{paper.description}</p>
                            <Button asChild variant="outline" className="mt-auto border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl transition-all duration-300">
                              <a href={paper.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                Read Paper
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

          {/* Research by Category */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            className="py-20 px-4"
          >
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Research by Category</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {researchCategories.map((category) => (
                      <motion.div key={category.title} variants={itemVariants}>
                        <Card className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl h-full">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-6">
                              <category.icon className={`w-5 h-5 ${category.color} flex-shrink-0`} />
                              <h3 className="text-lg font-bold text-white">{category.title}</h3>
                            </div>
                            <ul className="space-y-3">
                              {category.papers.map((paper) => (
                                <li key={paper.title}>
                                  <a
                                    href={paper.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between text-sm text-neutral-400 hover:text-orange-400 transition-colors"
                                  >
                                    <div className="flex items-center gap-3">
                                      <FileText className="w-4 h-4 text-neutral-600 flex-shrink-0" />
                                      <span className="flex-1 leading-snug">{paper.title}</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-neutral-600 opacity-50 group-hover:opacity-100 group-hover:text-orange-400 transition-all" />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Developer Resources */}
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
                className="py-20 px-4"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Developer Resources</h2>
                  
                  <Card className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl hover:border-orange-400/40 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        {developerResources.map((resource) => (
                          <div key={resource.title} className="flex items-center space-x-6 hover:translate-x-2 transition-transform">
                            <Card className="flex-1 bg-black/60 border-white/20 backdrop-blur-sm rounded-2xl hover:border-orange-400/40 transition-all duration-300">
                              <CardContent className="p-6">
                                <a
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-4 group"
                                >
                                  <span className="text-orange-400">{<resource.icon className="w-6 h-6" />}</span>
                                  <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">{resource.title}</h3>
                                  </div>
                                  <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                                </a>
                              </CardContent>
                            </Card>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.section>

          {/* What's Next Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
                What's <span className="text-orange-400">Next?</span>
              </h2>
              <p className="text-xl text-center text-neutral-300 mb-12">
                Dive deeper into Ergo research or join the community discussion
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/start/community"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Join Community</h3>
                      <p className="text-orange-400 text-sm">Discuss & Collaborate</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Connect with researchers, developers, and enthusiasts to discuss Ergo's latest innovations
                  </p>
                </Link>
                
                <a 
                  href="https://github.com/ergoplatform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <GitBranch className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">GitHub Research</h3>
                      <p className="text-orange-400 text-sm">Contribute Code</p>
                    </div>
                  </div>
                  <p className="text-neutral-300">
                    Explore open-source implementations and contribute to Ergo's research codebase
                  </p>
                </a>
              </div>
            </div>
          </section>
        </motion.div>
        </div>
      </BackgroundWrapper>
    </>
  )
}