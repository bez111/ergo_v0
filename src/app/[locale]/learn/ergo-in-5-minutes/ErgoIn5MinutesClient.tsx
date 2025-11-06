"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { 
  ChevronDown,
  Clock,
  Shield,
  Zap,
  Lock,
  Coins,
  Network,
  Code,
  Eye,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from "lucide-react"
import Link from "next/link"

export function ErgoIn5MinutesClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const tldrItems = [
    {
      icon: CheckCircle,
      title: "Fair launch",
      description: "no ICO, no pre-mine, PoW only. Decentralized from day one.",
      link: "/start/introduction"
    },
    {
      icon: Code,
      title: "eUTXO + ErgoScript",
      description: "Deterministic contracts with explicit state encoded in boxes (UTXOs) — no shared global state, fewer side effects, natural parallelism.",
      link: "/docs/introduction/eutxo"
    },
    {
      icon: Eye,
      title: "Sigma protocols",
      description: "Native zero-knowledge proofs with composable logic (AND/OR, ring, threshold) enabling confidential yet auditable flows and selective disclosure.",
      link: "/docs/introduction/privacy"
    },
    {
      icon: Zap,
      title: "Autolykos (PoW)",
      description: "Memory-hard, GPU-friendly, and resistant to ASIC dominance.",
      link: "/docs/introduction/autolykos"
    },
    {
      icon: Coins,
      title: "Storage Rent",
      description: "Dormant boxes pay small rent after ~4 years; moving funds resets the clock. Lost ERG are gradually recycled to miners, curbing state bloat and securing the network.",
      link: "/docs/introduction/storage-rent"
    }
  ]

  const projects = [
    { name: "Spectrum Finance", description: "Decentralized exchange", type: "DEX" },
    { name: "SigmaUSD", description: "Algorithmic stablecoin", type: "Stablecoin" },
    { name: "DuckPools", description: "Algorithmic lending platform", type: "Lending" },
    { name: "Paideia", description: "DAO management platform", type: "DAO" },
    { name: "Ergo Auction House", description: "NFT Marketplace", type: "NFT" },
    { name: "ErgoMixer", description: "Privacy application", type: "Privacy" }
  ]

  const comparisonData = [
    {
      criterion: "Accounting model",
      ergo: "eUTXO; logic on outputs (boxes)",
      ethereum: "Accounts/balances; global state", 
      bitcoin: "UTXO; minimal script"
    },
    {
      criterion: "Smart-contract model",
      ergo: "ErgoScript on eUTXO (deterministic)",
      ethereum: "Solidity/Vyper on EVM (global state)",
      bitcoin: "Script; limited programmability"
    },
    {
      criterion: "Execution predictability",
      ergo: "High — explicit local state",
      ethereum: "Lower — shared state & side effects",
      bitcoin: "High (simple flows)"
    },
    {
      criterion: "Parallelism",
      ergo: "Natural UTXO-level concurrency",
      ethereum: "Contentious; careful state design",
      bitcoin: "N/A for complex dApps"
    },
    {
      criterion: "Privacy primitives",
      ergo: "Native Sigma proofs (auditable ZK)",
      ethereum: "Mostly app/rollup-level ZK",
      bitcoin: "Pseudonymous, transparent"
    },
    {
      criterion: "Consensus & security",
      ergo: "PoW (Autolykos), memory-hard",
      ethereum: "Proof-of-Stake",
      bitcoin: "PoW (SHA-256), ASIC-centric"
    },
    {
      criterion: "MEV exposure",
      ergo: "Lower by design (local state, no shared mempool state)",
      ethereum: "Higher; mature MEV ecosystem",
      bitcoin: "Low (no generalized DeFi)"
    },
    {
      criterion: "Launch",
      ergo: "Fair launch (no ICO/pre-mine)",
      ethereum: "ICO/early distributions exist",
      bitcoin: "Fair launch (historical)"
    }
  ]

  const faqItems = [
    {
      question: "What is the Ergo blockchain?",
      answer: "Ergo is a Proof-of-Work blockchain that blends Bitcoin-level security with the eUTXO smart-contract model and Sigma-protocol privacy to power secure, auditable DeFi."
    },
    {
      question: "How is Ergo different from Ethereum and Bitcoin (eUTXO vs account)?",
      answer: "Ergo uses eUTXO, attaching conditions to outputs for deterministic, easily parallelized execution—avoiding many global-state side effects seen in account-based chains, while extending Bitcoin's UTXO with rich programmability."
    },
    {
      question: "What are Sigma protocols on Ergo?",
      answer: "Sigma protocols are native zero-knowledge proofs (AND/OR, threshold, ring) that enable auditable privacy—you keep details confidential yet can prove compliance or selectively disclose when required."
    },
    {
      question: "What is storage rent on Ergo?",
      answer: "Storage rent is a small fee on long-inactive boxes (UTXOs) that recycles lost ERG to fund network security; active users avoid it simply by moving coins periodically."
    },
    {
      question: "Was there an ICO or pre-mine (fair launch)?",
      answer: "No—ERG had a fair launch with Proof-of-Work only, no ICO and no pre-mine, aligning incentives and decentralization from day one."
    },
    {
      question: "What is Autolykos and can I mine Ergo with GPUs?",
      answer: "Autolykos is Ergo's memory-hard PoW algorithm, designed to be GPU-friendly and more resistant to ASIC centralization; yes, you can mine ERG with consumer-grade GPUs."
    },
    {
      question: "What can I build or use on Ergo (DeFi & apps)?",
      answer: "Ergo supports DEX trading (e.g., Spectrum), algorithmic stablecoins (SigmaUSD), DAO tooling (Paideia), NFTs, and privacy-preserving apps—using ErgoScript and the eUTXO model."
    },
    {
      question: "Is Ergo a 'privacy coin'? (compliance & audits)",
      answer: "Privacy on Ergo is optional and policy-driven: Sigma proofs enable selective disclosure and auditability, making privacy features compatible with compliance workflows."
    }
  ]

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-orange-400" />
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                5 min read
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Ergo in 5 Minutes: Why It Matters & How It Works
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A fair-launch PoW chain that fuses Bitcoin-grade security with eUTXO smart contracts and Sigma-protocol privacy.
            </p>
          </motion.div>

          {/* TL;DR Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              TL;DR
            </h2>
            
            <div className="grid gap-6">
              {tldrItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-black/80 border border-white/10 rounded-3xl hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <item.icon className="w-8 h-8 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 mb-3">
                            {item.description}
                          </p>
                          <Link 
                            href={item.link}
                            className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors text-sm"
                          >
                            Learn more <ExternalLink className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Main Content */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              
              {/* Introduction */}
              <div className="bg-black/60 border border-white/20 rounded-3xl p-8 mb-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  In a sea of altcoins, clones, and supposed "Bitcoin killers", few crypto platforms truly offer anything special. The Ergo blockchain might just be one of them.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  The Ergo blockchain is a proof-of-work platform that was launched six years ago by former IOHK and Cardano experts with a strong background in academic blockchain research.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  The crypto space is crowded with different networks, each claiming to bring something unique to the Web3 space. Scalability, privacy, security, community support – everyone says they have an edge. There are now many tens or even hundreds of thousands of coins and tokens. Just a handful are worth anything: CoinMarketCap lists barely over 1,000 networks with a total value over $10 million – practically nothing by crypto standards.
                </p>
              </div>

              {/* The Past */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-orange-400" />
                  The Past: Ergo Platform Origins And Fair Launch
                </h2>
                
                <div className="bg-black/60 border border-white/20 rounded-3xl p-8 space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Ergo was founded in 2019 by ex-IOHK and Cardano developers Alexander "Kushti" Chepurnoy and Dmitry "Catena" Meshkov.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    The founders, both academics with extensive publication records in physics and cryptography, wanted to create a platform that built on Bitcoin's success and learned from it, without attempting to replace it.
                  </p>
                  
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6">
                    <p className="text-orange-100 leading-relaxed">
                      <strong className="text-orange-400">Fair Launch:</strong> Unlike most other platforms, there was no ICO and no pre-mine. The Ergo cryptocurrency (ERG) was distributed only by proof of work (PoW). The blockchain was decentralized from day one.
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    The team augmented Bitcoin's tried-and-tested security model with a form of flexible, efficient smart contracts, based on Bitcoin's UTXO accounting model. This was more complex to implement than smart contracts based on the more usual Account model used by Ethereum and most other platforms but offers unique advantages.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Additionally, the team wanted to provide the option for robust privacy. While Bitcoin had initially gained popularity as a means of moving funds trustlessly and privately, users soon found that the transparency of the blockchain left their transaction history permanently visible to everyone. With a background in mathematics and cryptography, Chepurnoy and Meshkov landed on Sigma Protocols, a class of flexible and composable cryptographic proofs, to ensure the confidentiality that individual and now institutional adopters were increasingly demanding.
                  </p>
                </div>
              </div>

              {/* Ergo Today */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Network className="w-8 h-8 text-orange-400" />
                  Ergo Today: Secure, Private DeFi
                </h2>
                
                <div className="bg-black/60 border border-white/20 rounded-3xl p-8 mb-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Today, the Ergo blockchain remains a decentralized and community-led PoW endeavor. The building blocks put in place over five years ago have been used to create a broad range of DeFi services – and while they might look the same as those on other smart contract platforms, under the surface they're very different.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Just some of the many projects launched on Ergo include:
                  </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="bg-black/80 border border-white/10 rounded-2xl hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-white text-sm">{project.name}</h4>
                            <Badge variant="outline" className="text-xs bg-orange-500/10 border-orange-500/30 text-orange-400">
                              {project.type}
                            </Badge>
                          </div>
                          <p className="text-gray-400 text-sm">{project.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Technical Details */}
                <div className="bg-black/60 border border-white/20 rounded-3xl p-8 space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Ergo's smart contracts are written in <strong className="text-orange-400">ErgoScript</strong>, a language based on Scala, which was formulated specifically to work with the Ergo blockchain's eUTXO model.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    eUTXOs are an extension of Bitcoin's UTXO model, which tracks unspent outputs or packets of coins, and registers them to particular addresses. Any address balance is made up of one or more of these UTXOs – unlike Ethereum's Account model, where balances are simply updated like a bank account.
                  </p>
                  
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
                    <p className="text-blue-100 leading-relaxed">
                      <strong className="text-blue-400">Privacy Advantage:</strong> The other key technology driving Ergo's dApp ecosystem is Sigma Protocols, the composable zero-knowledge proofs that underpin ErgoMixer and other applications. Privacy is the big trend for 2025, and is recognized as the most significant barrier to institutional adoption, but few platforms offer the kind of auditable confidential transactions that Ergo does.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Comparison: Ergo vs Ethereum vs Bitcoin
                </h2>
                
                <div className="overflow-x-auto">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-6">
                    <div className="min-w-full">
                      {/* Table Header */}
                      <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-white/20">
                        <div className="font-semibold text-white">Criterion</div>
                        <div className="font-semibold text-orange-400">Ergo (eUTXO + Sigma)</div>
                        <div className="font-semibold text-blue-400">Ethereum (Account)</div>
                        <div className="font-semibold text-yellow-400">Bitcoin (UTXO)</div>
                      </div>
                      
                      {/* Table Rows */}
                      {comparisonData.map((row, index) => (
                        <motion.div
                          key={row.criterion}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="grid grid-cols-4 gap-4 py-3 border-b border-white/10 last:border-b-0"
                        >
                          <div className="font-medium text-white text-sm">{row.criterion}</div>
                          <div className="text-gray-300 text-sm">{row.ergo}</div>
                          <div className="text-gray-300 text-sm">{row.ethereum}</div>
                          <div className="text-gray-300 text-sm">{row.bitcoin}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Future Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <ArrowRight className="w-8 h-8 text-orange-400" />
                  Towards A Sustainable Future
                </h2>
                
                <div className="bg-black/60 border border-white/20 rounded-3xl p-8 space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Ergo paved the way for the future right from the start, prioritizing infrastructure and features that would ensure long-term stability and sustainability.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Chief among these has been the nature of Ergo's mining ecosystem. While Ergo is based on proof of work, like Bitcoin, it uses the memory-hard Autolykos algorithm, making it far more ASIC-resistant and energy efficient than Bitcoin. This also ensures greater accessibility, meaning more users can join the network without expensive specialist hardware, ensuring a high and ongoing level of decentralization.
                  </p>
                  
                  <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                    <p className="text-green-100 leading-relaxed">
                      <strong className="text-green-400">Storage Rent Innovation:</strong> One of Ergo's most noteworthy features is storage rent. This slowly recycles coins that have not been moved in over four years, bringing lost ERG back into circulation and increasing revenues for miners. This "demurrage" acts as a small tax on dormant accounts, but can easily be avoided by moving coins every few years.
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Finally, Ergo's development team keeps the same academic rigor with which it started out, meaning that future upgrades are thoroughly researched before implementation, ensuring the best possible technical foundation for the network.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Ergo — Core FAQ
                </h2>
                
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <Card key={index} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                      <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                        <CollapsibleTrigger asChild>
                          <button className="w-full">
                            <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                              <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                              <ChevronDown 
                                aria-hidden="true" 
                                className={`w-5 h-5 text-neutral-400 transition-transform ${
                                  openFAQ === index ? "rotate-180" : ""
                                }`} 
                              />
                            </CardContent>
                          </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="px-6 pb-6 pt-0">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mb-16"
              >
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to explore Ergo?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    To find out more, subscribe for regular updates and check out the Ergo DeFi ecosystem map.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/ecosystem/map"
                      className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-full transition-colors"
                    >
                      Explore Ecosystem <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link 
                      href="/start"
                      className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-semibold px-6 py-3 rounded-full transition-colors"
                    >
                      Get Started <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.section>

          {/* Email Capture */}
          <FinalCTASimple />
          
        </div>
      </div>
    </BackgroundWrapper>
  )
}
