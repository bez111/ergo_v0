"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search, HelpCircle, Users, Shield, Code, Zap, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const faqData = [
  // Basics
  {
    category: "Basics",
    icon: HelpCircle,
    q: "What is Ergo in simple terms?",
    a: 'Ergo is a secure Proof-of-Work blockchain for powerful smart contracts, enabling decentralized financial applications. Think of it as digital money (ERG) with programmable rules.',
  },
  {
    category: "Basics",
    icon: HelpCircle,
    q: "Is Ergo a company?",
    a: "No, Ergo is a decentralized, open-source protocol. The Ergo Foundation is a non-profit community body that supports development but does not control the network.",
  },
  {
    category: "Basics",
    icon: HelpCircle,
    q: 'What does a "fair launch" mean?',
    a: 'Ergo had no Initial Coin Offering (ICO) or pre-mined tokens for founders. This ensures a more equitable distribution, as everyone had an equal opportunity to acquire ERG through mining from day one.',
  },

  // Technology
  {
    category: "Technology",
    icon: Cpu,
    q: "How is Ergo different from Bitcoin or Ethereum?",
    a: "vs. Bitcoin: Ergo supports advanced smart contracts, not just currency. \n vs. Ethereum: Ergo uses the eUTXO model for enhanced security and predictable fees, and remains Proof-of-Work.",
  },
  {
    category: "Technology",
    icon: Cpu,
    q: "What is eUTXO?",
    a: 'The Extended UTXO model attaches data and logic directly to "boxes" of money. This enhances smart contract security, fee predictability, and allows for better scalability compared to the account model.',
  },
  {
    category: "Technology",
    icon: Cpu,
    q: "What is ErgoScript?",
    a: "ErgoScript is the powerful and secure programming language for writing smart contracts on Ergo. You do not need to know code to use Ergo; it's a tool for developers.",
  },
  {
    category: "Technology",
    icon: Cpu,
    q: "What are Sigma Protocols?",
    a: "These are advanced zero-knowledge proofs built into Ergo's core, enabling privacy features like ErgoMixer, complex multi-party contracts, and secure multi-signature schemes.",
  },

  // Getting Started
  {
    category: "Getting Started",
    icon: Zap,
    q: "What is the ERG coin used for?",
    a: "ERG is used for transaction fees, collateral for stablecoins (SigmaUSD), participating in DeFi applications, powering dApps (NFTs, gaming), and incentivizing miners.",
  },
  {
    category: "Getting Started",
    icon: Zap,
    q: "How can I get ERG?",
    a: "You can acquire ERG on various cryptocurrency exchanges, through peer-to-peer trades, or by mining. Always do your own research before investing.",
  },
  {
    category: "Getting Started",
    icon: Zap,
    q: "Which wallet is best for beginners?",
    a: "The official mobile wallets (Android/iOS) or the Nautilus Wallet (browser extension) are excellent, user-friendly starting points.",
  },
  
  // Ecosystem
  {
    category: "Ecosystem",
    icon: Users,
    q: "What kinds of dApps are on Ergo?",
    a: "Ergo's ecosystem includes DeFi platforms (Spectrum, Duckpools), privacy tools (ErgoMixer), NFT marketplaces (SkyHarbor), cross-chain bridges (Rosen), and more.",
  },
  {
    category: "Ecosystem",
    icon: Users,
    q: "What is ErgoMixer?",
    a: "ErgoMixer is a non-custodial service that increases your transaction privacy by mixing your ERG with others, making it difficult to trace your transaction history.",
  },

  // Community
  {
    category: "Community",
    icon: Users,
    q: "Who governs Ergo?",
    a: "Ergo is decentralized and community-driven. Protocol changes are discussed and formalized through Ergo Improvement Proposals (EIPs), with miners signaling support.",
  },
  {
    category: "Community",
    icon: Users,
    q: "How can I contribute if I'm not a developer?",
    a: "You can help with community support, content creation (articles, videos), translation, testing dApps, or simply spreading awareness about Ergo.",
  },
];

const categories = ["All", "Basics", "Technology", "Getting Started", "Ecosystem", "Community"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [expanded, setExpanded] = useState<number | null>(null)

  const filteredFaqs = useMemo(() => {
    return faqData.filter(faq => {
      const categoryMatch = activeCategory === "All" || faq.category === activeCategory
      const searchMatch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || faq.a.toLowerCase().includes(searchTerm.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [searchTerm, activeCategory])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,136,0,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">
            FREQUENTLY ASKED QUESTIONS
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pb-4">
            Need Help?
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Ergo, its technology, and the ecosystem. If you can't find what you're looking for, join our community channels.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="sticky top-0 z-20 py-6 bg-black/80 backdrop-blur-md mb-12">
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                    type="text"
                    placeholder="Search questions..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="pl-12 w-full bg-gray-900/70 border-gray-700/50 h-12 text-base"
                />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map(category => (
                    <Button
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"}
                        onClick={() => setActiveCategory(category)}
                        className="rounded-full"
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </div>
        
        {/* FAQ List */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50">
                  <button
                    onClick={() => setExpanded(expanded === index ? null : index)}
                    className="w-full p-5 flex justify-between items-center text-left"
                  >
                    <span className="text-lg font-medium text-white">{faq.q}</span>
                    <motion.div animate={{ rotate: expanded === index ? 180 : 0 }}>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expanded === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-gray-300">
                          <p className="border-t border-gray-800 pt-4">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-gray-400 text-lg">No questions found. Try a different search or filter.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
