"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
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
    icon: Terminal,
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
    color: "text-brand-primary-400",
    papers: [
      { title: "Formal Verification of ErgoScript", url: "https://ergoplatform.org/en/blog/2022_09_01-formal-verification/" },
      { title: "ErgoScript: Foundations and Security", url: "https://ergoplatform.org/docs/ErgoScript.pdf" },
      { title: "Security Properties of eUTXO-based Smart Contracts", url: "https://eprint.iacr.org/2020/1402.pdf" },
    ],
  },
  {
    title: "Privacy & Zero-Knowledge",
    icon: Eye,
    color: "text-brand-primary-400",
    papers: [
      { title: "Zero-Knowledge Proofs in Sigma Protocols", url: "https://eprint.iacr.org/2017/1050.pdf" },
      { title: "Ring Signatures for Blockchain Privacy", url: "https://ergoplatform.org/docs/ring-signatures.pdf" },
    ],
  },
  {
    title: "DeFi & Economic Models",
    icon: Database,
    color: "text-brand-primary-400",
    papers: [
      { title: "Composable DeFi Primitives on eUTXO", url: "https://ergoplatform.org/en/blog/2021_12_07-composable-defi/" },
      { title: "On-chain Lending, LETS, and Oracles", url: "https://ergoplatform.org/en/blog/2020_07_13-leveraging-oracles/" },
    ],
  },
  {
    title: "Storage Rent & Blockchain Sustainability",
    icon: FileText,
    color: "text-brand-primary-400",
    papers: [
      { title: "Ergo Storage Rent Model", url: "https://ergoplatform.org/docs/storage-rent.pdf" },
      { title: "Efficient Blockchain State Management", url: "https://eprint.iacr.org/2019/1072.pdf" },
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

export default function ResearchPage() {
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

      <div className="min-h-screen bg-black relative overflow-hidden motion-reduce:animate-none">
        {/* Background overlay to match technology pages */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black" />

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
                      <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                        Key Documents
                      </Button>
                    </a>
                    <Link href="/start/community">
                      <Button
                        variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 px-8 py-3 rounded-xl"
                      >
                        Community
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative z-10">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl p-8">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">Quick Start</h3>
                        <div className="space-y-4">
                          {[
                            {
                              name: "Read Ergo Whitepaper",
                              description: "Core protocol design and philosophy",
                              icon: <FileText className="w-6 h-6" />,
                              link: "https://ergoplatform.org/docs/whitepaper.pdf",
                              external: true,
                            },
                            {
                              name: "Explore Research Library",
                              description: "Cryptography, consensus, and architecture",
                              icon: <BookOpen className="w-6 h-6" />,
                              link: "#key-docs",
                              external: false,
                            },
                            {
                              name: "Join the Community",
                              description: "Discuss research and collaborate",
                              icon: <Users className="w-6 h-6" />,
                              link: "/start/community",
                              external: false,
                            },
                          ].map((item) => (
                            <div key={item.name}>
                              {item.external ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-brand-primary-500/50 transition-colors"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="text-brand-primary-400">{item.icon}</div>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-white">{item.name}</h4>
                                      <p className="text-sm text-neutral-400">{item.description}</p>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-neutral-400" />
                                  </div>
                                </a>
                              ) : (
                                <Link
                                  href={item.link}
                                  className="block p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-brand-primary-500/50 transition-colors"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="text-brand-primary-400">{item.icon}</div>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-white">{item.name}</h4>
                                      <p className="text-sm text-neutral-400">{item.description}</p>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-neutral-400" />
                                  </div>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Content Sections */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col gap-16 md:gap-24">
              {/* Key Documents */}
              <motion.section
                id="key-docs"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
              >
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Key Documents</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {keyPapers.map((paper) => (
                      <motion.div key={paper.title} variants={itemVariants}>
                        <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                          <CardContent className="p-6 h-full flex flex-col">
                            <div className="flex items-start gap-4 mb-4">
                              <paper.icon className="w-8 h-8 text-brand-primary-400" />
                              <div>
                                <h3 className="text-xl font-bold text-white">{paper.title}</h3>
                                <span className="text-xs text-neutral-400">{paper.category}</span>
                              </div>
                            </div>
                            <p className="text-neutral-300 mb-6 flex-1">{paper.description}</p>
                            <Button asChild variant="outline" className="mt-auto border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10">
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
                </div>
              </motion.section>

              {/* Research by Category */}
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
              >
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-10 md:mb-12 text-white">Research by Category</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {researchCategories.map((category) => (
                      <motion.div key={category.title} variants={itemVariants}>
                        <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl h-full">
                          <CardContent className="p-6">
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
                                    className="group flex items-center justify-between text-sm text-neutral-400 hover:text-brand-primary-400 transition-colors"
                                  >
                                    <div className="flex items-center gap-3">
                                      <FileText className="w-4 h-4 text-neutral-600 flex-shrink-0" />
                                      <span className="flex-1 leading-snug">{paper.title}</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-neutral-600 opacity-50 group-hover:opacity-100 group-hover:text-brand-primary-400 transition-all" />
                                  </Link>
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

              {/* Developer Resources & Community */}
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
              >
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div>
                      <h2 className="text-3xl font-bold mb-8 text-white">Developer Resources</h2>
                      <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                        <CardContent className="p-6">
                          <ul className="space-y-4">
                            {developerResources.map((resource) => (
                              <li key={resource.title}>
                                <Link
                                  href={resource.url}
                                  target="_blank"
                                  className="group flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800/30 transition-colors"
                                >
                                  <resource.icon className="w-6 h-6 text-brand-primary-400" />
                                  <span className="text-lg text-neutral-300 group-hover:text-white">{resource.title}</span>
                                  <ExternalLink className="w-5 h-5 ml-auto text-neutral-500 group-hover:text-white" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold mb-8 text-white">Join the Discussion</h2>
                      <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl">
                        <CardContent className="p-8 text-center">
                          <Users className="w-12 h-12 mx-auto mb-4 text-brand-primary-400" />
                          <h3 className="text-2xl font-bold text-white mb-3">Contribute to Ergo Research</h3>
                          <p className="text-neutral-300 mb-6">
                            Have an idea or want to contribute? Join community channels to discuss research and collaborate.
                          </p>
                          <Button asChild>
                            <Link href="/start/community" className="flex items-center gap-2">
                              Community Channels
                              <Users className="w-4 h-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
