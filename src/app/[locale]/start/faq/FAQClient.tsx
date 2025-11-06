"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search, HelpCircle, Users, Shield, Code, Zap, Cpu, Mail, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BackgroundWrapper } from "@/components/home/background-wrapper"

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

export default function FAQClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [expanded, setExpanded] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const filteredFaqs = useMemo(() => {
    return faqData.filter(faq => {
      const categoryMatch = activeCategory === "All" || faq.category === activeCategory
      const searchMatch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || faq.a.toLowerCase().includes(searchTerm.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [searchTerm, activeCategory])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-white relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white pb-4">
            Need Help?
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about Ergo, its technology, and the ecosystem. If you can't find what you're looking for, join our community channels.
          </p>
        </motion.div>

        {/* Search and Filters */}
                <Card className="bg-black border-neutral-700 backdrop-blur-sm mb-12 sticky top-4 z-20">
          <CardContent className="p-6">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-12 w-full bg-neutral-800 border-neutral-600 h-12 text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category 
                    ? "bg-orange-500 hover:bg-orange-600 text-black font-mono transition-all duration-200" 
                    : "border-neutral-500 text-neutral-400 hover:bg-neutral-500/10 font-mono transition-all duration-200"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* FAQ List */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-black border-neutral-700 hover:border-orange-500/30 transition-all duration-300">
                  <button
                    onClick={() => setExpanded(expanded === index ? null : index)}
                    className="w-full p-6 flex justify-between items-start text-left group"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-6 h-6 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                        <faq.icon className="w-3 h-3 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <span className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">
                          {faq.q}
                        </span>
                        <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                          {faq.category}
                        </div>
                      </div>
                    </div>
                    <motion.div 
                      animate={{ rotate: expanded === index ? 180 : 0 }}
                      className="ml-4 mt-1"
                    >
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
                        <div className="px-6 pb-6">
                          <div className="ml-9 pt-2 border-t border-neutral-700">
                            <p className="text-gray-300 leading-relaxed mt-4 whitespace-pre-line">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div variants={itemVariants}>
              <Card className="bg-black border-neutral-700">
                <CardContent className="text-center py-12">
                  <p className="text-gray-400 text-lg">No questions found. Try a different search or filter.</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>

        {/* Email Capture Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black border-neutral-700 hover:border-orange-400/40 transition-all duration-300 backdrop-blur-sm rounded-3xl">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Still Have <span className="text-orange-400">Questions?</span></h2>
                  </div>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                    Subscribe to get the latest updates, announcements, and answers to new questions from the Ergo community
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-green-400 font-semibold">Thank you for subscribing!</p>
                    <p className="text-gray-300 text-sm">You'll receive updates about Ergo and answers to new questions.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
                    <div className="flex gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-neutral-800 border-neutral-600 text-white placeholder:text-gray-400 focus:border-orange-400/50 focus:ring-orange-400/20 rounded-xl"
                        required
                      />
                      <Button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 rounded-xl border border-orange-500/50 transition-all duration-300"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Subscribe
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
        </div>
      </div>
    </BackgroundWrapper>
  )
}
