"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Search, HelpCircle, Users, Shield, Code, Zap, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { GlitchText } from "@/components/glitch-text"
import Link from "next/link"
import { ParticleBackground } from "@/components/particle-background"

const faqSections = [
  {
    id: "basics",
    title: "THE BASICS: WHAT IS ERGO?",
    icon: HelpCircle,
    color: "from-blue-500 to-cyan-500",
    questions: [
      {
        q: "What is Ergo in the simplest terms?",
        a: 'Ergo is a secure and powerful blockchain platform designed for creating and running useful financial contracts and decentralized applications (dApps). Think of it as digital money (its native coin is ERG) with built-in "smart rules" (smart contracts) that operate on a highly secure and decentralized network, powered by Proof-of-Work.',
      },
      {
        q: "Is Ergo a company or an organization?",
        a: "Ergo itself is a decentralized, open-source protocol, not a company. The Ergo Foundation is a non-profit community organization that supports the development and adoption of the Ergo platform, but it doesn't control the network. Ergo is driven by its global community.",
      },
      {
        q: "Who created Ergo and what was their main goal?",
        a: "Ergo was created by a team of experienced developers and researchers with backgrounds in blockchain (some involved with projects like NXT, Scorex, IOHK/Cardano). Their main goal was to build a resilient, research-driven platform based on foundational principles, enabling truly decentralized and secure smart contracts with a long-term perspective, addressing limitations seen in earlier blockchains.",
      },
      {
        q: 'What does "fair launch" mean for Ergo?',
        a: '"Fair launch" means Ergo had no Initial Coin Offering (ICO), no pre-mine for founders or private investors, and no pre-allocated tokens. This ensures a more equitable distribution from the start and aligns with the ethos of decentralization, as everyone had an equal opportunity to acquire ERG through mining from day one.',
      },
    ],
  },
  {
    id: "philosophy",
    title: "ERGO'S PHILOSOPHY & UNIQUE FEATURES",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    questions: [
      {
        q: "What makes Ergo different from other major cryptocurrencies like Bitcoin or Ethereum?",
        a: "vs. Bitcoin: While both use Proof-of-Work for security, Ergo is a platform for advanced smart contracts, not just a digital currency. ErgoScript allows for far more complex applications.\n\nvs. Ethereum: Ergo uses the eUTXO (Extended Unspent Transaction Output) model, which offers benefits for smart contract security and fee predictability compared to Ethereum's account model. Ergo also remains Proof-of-Work, while Ethereum has transitioned to Proof-of-Stake.",
      },
      {
        q: "What are Ergo's core principles?",
        a: "Ergo is guided by several core principles:\n• Decentralization: True decentralization at all levels\n• Security & Reliability: Leveraging PoW and eUTXO for robustness\n• Survivability & Long-term Focus: Designed for lasting sustainability\n• Research-Driven: Innovations based on peer-reviewed research\n• Open & Permissionless: Accessible to everyone\n• Usefulness for Ordinary People: Real-world financial applications",
      },
      {
        q: 'Why is Ergo considered "research-driven"?',
        a: "Ergo's development is deeply rooted in academic research and formal methods. Many of its core features and improvements are first published as peer-reviewed papers. This approach ensures that innovations are well-thought-out, rigorously tested, and built on sound scientific principles, prioritizing security and long-term viability.",
      },
      {
        q: 'What does "Decentralize Everything" mean in the context of Ergo?',
        a: "This is Ergo's guiding philosophy. It reflects the commitment to minimizing points of centralization in the protocol, its applications, and its governance. The goal is to empower individuals and communities by removing reliance on single points of failure or control, creating truly peer-to-peer systems.",
      },
    ],
  },
  {
    id: "getting-started",
    title: "GETTING STARTED WITH ERGO",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    questions: [
      {
        q: "What is ERG and what is it used for?",
        a: "ERG is the native cryptocurrency of the Ergo platform. Its uses include:\n• Paying transaction fees on the network\n• Collateral for creating decentralized stablecoins (like SigmaUSD)\n• Participating in DeFi applications (liquidity, staking)\n• Powering dApps (NFT minting/trading, gaming)\n• Incentivizing miners who secure the network",
      },
      {
        q: "How can I get ERG coins?",
        a: "You can acquire ERG through:\n• Cryptocurrency Exchanges: ERG is listed on several exchanges\n• Peer-to-Peer (P2P) Trades: Directly from other ERG holders\n• Mining: If you have the necessary hardware, you can mine ERG\n\n(Disclaimer: Always do your own research before investing. Prices can be volatile.)",
      },
      {
        q: "What is an Ergo wallet? Which one is recommended for beginners?",
        a: "An Ergo wallet is a digital wallet that allows you to securely store, send, and receive ERG and other tokens built on the Ergo blockchain.\n\nFor beginners: Official mobile wallets (Android/iOS) or Nautilus Wallet (browser extension) are user-friendly starting points.\n\nFor advanced users: Satergo (desktop full-node wallet) or Minotaur Wallet offer more features.",
      },
      {
        q: "How do I keep my ERG safe in a wallet?",
        a: "• Secure your private keys/seed phrase: This is your master password. Write it down and store it offline in multiple safe places\n• Use official wallets: Download only from official sources\n• Beware of scams: Be cautious of unsolicited messages or phishing sites\n• Backup your wallet: Ensure you have a backup of your seed phrase\n• Never share your seed phrase with anyone",
      },
    ],
  },
  {
    id: "ecosystem",
    title: "EXPLORING THE ERGO ECOSYSTEM",
    icon: Users,
    color: "from-orange-500 to-red-500",
    questions: [
      {
        q: "What are dApps? What kind of dApps are on Ergo?",
        a: "dApps (decentralized applications) run on blockchain networks rather than centralized servers. Ergo hosts a growing ecosystem including:\n• DeFi: Spectrum Finance (DEX), SigmaUSD (stablecoin), Duckpools (lending)\n• Privacy Tools: ErgoMixer (transaction mixer)\n• NFTs: Ergo Auction House, SkyHarbor (marketplaces)\n• Interoperability: Rosen Bridge (cross-chain)\n• Gaming: CyberVerse (MMORPG)",
      },
      {
        q: "What is DeFi on Ergo like? Is it safe to use?",
        a: "Ergo's DeFi ecosystem offers tools for trading, lending, stablecoins, and yield generation. A key advantage is that Ergo's eUTXO model can enhance the security and predictability of DeFi applications, reducing risks associated with common smart contract vulnerabilities found on other platforms. However, like all DeFi, users should understand the risks involved.",
      },
      {
        q: "What is ErgoMixer and how does it enhance privacy?",
        a: "ErgoMixer is a non-custodial, non-interactive service that increases your transaction privacy on the Ergo blockchain. It allows you to mix your ERG with others in a way that breaks the linkability between your sending and receiving addresses, making it much harder to trace your transaction history. It leverages Ergo's Sigma protocols for trustless mixing.",
      },
      {
        q: "What is Rosen Bridge and why is it important?",
        a: "Rosen Bridge is Ergo's primary cross-chain bridge. It allows users to securely transfer assets between Ergo and other major blockchains like Bitcoin, Ethereum, Cardano, and Binance Smart Chain (BSC). This is crucial for interoperability, enabling liquidity to flow into and out of the Ergo ecosystem.",
      },
    ],
  },
  {
    id: "technology",
    title: "UNDERSTANDING ERGO'S TECHNOLOGY",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    questions: [
      {
        q: 'What is "Proof-of-Work" (PoW) and why does Ergo use it?',
        a: 'Proof-of-Work is a consensus mechanism where "miners" use computing power to solve complex mathematical puzzles. The first to solve it gets to add the next block of transactions to the blockchain and earns a reward. Ergo uses PoW (specifically, its Autolykos algorithm) because it\'s highly secure, promotes decentralization, and ensures fair coin distribution.',
      },
      {
        q: 'What is "eUTXO" and why is it better for some things?',
        a: 'The Extended UTXO model is how Ergo handles transactions and smart contracts. Unlike Ethereum\'s account model, in eUTXO, data and logic are attached directly to "boxes" of money. Benefits include:\n• Enhanced Security for Contracts\n• Fee Predictability\n• Local Reasoning & Parallelism\n• Simplified contract verification',
      },
      {
        q: "What is ErgoScript? Do I need to know coding to use Ergo?",
        a: "ErgoScript is the programming language used to write smart contracts on Ergo. It's designed to be powerful yet secure. As a regular user, you do not need to know ErgoScript or any coding to use Ergo, its wallets, or dApps. It's a tool for developers building on the platform.",
      },
      {
        q: "What are Sigma Protocols? What can they do?",
        a: "Sigma Protocols are advanced cryptography (zero-knowledge proofs) built into Ergo's core. They enable:\n• Complex contract conditions requiring multiple parties\n• Privacy-enhancing applications like ErgoMixer\n• Efficient and secure multi-signature schemes\n• All without revealing unnecessary information",
      },
    ],
  },
  {
    id: "community",
    title: "COMMUNITY & GOVERNANCE",
    icon: Users,
    color: "from-pink-500 to-purple-500",
    questions: [
      {
        q: "Who controls or governs Ergo?",
        a: "Ergo is designed to be a decentralized protocol with no single point of control. Governance is community-driven. While the Ergo Foundation supports development and adoption, protocol changes typically go through a community discussion process, often formalized as Ergo Improvement Proposals (EIPs). Miners also play a role in signaling support for protocol upgrades.",
      },
      {
        q: "What is the Ergo Foundation and what does it do?",
        a: "The Ergo Foundation is an independent, community-driven, non-profit organization dedicated to supporting the development, education, and adoption of the Ergo Platform. It funds research, core development, ecosystem projects through grants, educational materials, and outreach efforts, but it does not own or control the Ergo network.",
      },
      {
        q: "How can I join the Ergo community?",
        a: "The Ergo community is very active and welcoming! You can connect via:\n• Discord (for real-time chat and support)\n• Telegram (for news and group discussions)\n• Reddit (r/ergonauts for news and discussions)\n• ErgoForum (for in-depth discussions and proposals)",
      },
      {
        q: "Can I contribute to Ergo even if I'm not a developer?",
        a: "There are many ways to contribute:\n• Community Support: Help answer questions and welcome newcomers\n• Content Creation: Write articles, create videos, design graphics\n• Translation: Help translate Ergo documentation\n• Testing: Participate in testing new wallets or dApps\n• Spreading Awareness: Share information about Ergo\n• Feedback: Provide constructive feedback on projects",
      },
    ],
  },
  {
    id: "security",
    title: "SECURITY & SAFETY ON ERGO",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    questions: [
      {
        q: "How does Ergo ensure the security of the network and funds?",
        a: "Ergo employs multiple layers of security:\n• Proof-of-Work (PoW): A highly secure and battle-tested consensus mechanism\n• eUTXO Model: Reduces the attack surface for smart contracts\n• Formal Methods & Research: Core components designed with security priority\n• Decentralization: A globally distributed network of miners and nodes",
      },
      {
        q: "Are there any known risks associated with using Ergo or its dApps?",
        a: "Like any cryptocurrency platform, there are general risks:\n• Market Volatility: ERG price can be volatile like other cryptocurrencies\n• Smart Contract Risk: Bugs can exist in any software, including dApps\n• User Responsibility: You're responsible for securing your private keys\n• Scams & Phishing: Be vigilant against common crypto scams",
      },
      {
        q: "How can I identify and avoid scams in the Ergo ecosystem?",
        a: "• Use Official Links: Always access through verified, official sources\n• Beware of DMs: Be cautious of unsolicited direct messages\n• Never Share Private Keys: No legitimate entity will ever ask for these\n• Verify Information: Check with official community channels if unsure\n• No Official Giveaways Requiring Deposits: These are always scams",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedSections, setExpandedSections] = useState<string[]>(["basics"])
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([])

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId],
    )
  }

  const filteredSections = faqSections
    .map((section) => ({
      ...section,
      questions: section.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchTerm.toLowerCase()) || q.a.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((section) => section.questions.length > 0)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/tech-pattern.png')] bg-no-repeat bg-cover opacity-5" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/resistance-texture.png')] bg-no-repeat bg-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-red-900/10" />
      </div>

      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-4 mb-8">
                  <GlitchText text="ERGO FAQ" className="text-6xl md:text-8xl font-bold" />
                </div>

                <div className="max-w-4xl mx-auto mb-12">
                  <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-mono">
                    <span className="text-primary">[</span>
                    THE COMPLETE BEGINNER'S GUIDE
                    <span className="text-primary">]</span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                    Welcome to Ergo! This FAQ is designed to answer your most common questions and help you understand
                    our platform, its core purpose, and how you can get involved. If you don't find your answer here,
                    our community is always ready to help!
                  </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="SEARCH FAQ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 bg-gray-900/50 border-primary/30 text-white font-mono placeholder:text-gray-500 focus:border-primary h-14 text-lg"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {filteredSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.1 }}
                >
                  <Card className="bg-gray-900/60 border-primary/30 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-0">
                      {/* Section Header */}
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full p-6 flex items-center justify-between hover:bg-primary/5 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color} shadow-lg`}>
                            <section.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white font-mono text-left">
                            {section.title}
                          </h3>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedSections.includes(section.id) ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="w-6 h-6 text-primary" />
                        </motion.div>
                      </button>

                      {/* Section Content */}
                      <AnimatePresence>
                        {expandedSections.includes(section.id) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 space-y-4">
                              {section.questions.map((question, questionIndex) => {
                                const questionId = `${section.id}-${questionIndex}`
                                return (
                                  <div
                                    key={questionIndex}
                                    className="border border-primary/10 rounded-lg overflow-hidden"
                                  >
                                    <button
                                      onClick={() => toggleQuestion(questionId)}
                                      className="w-full p-4 flex items-center justify-between hover:bg-primary/5 transition-colors text-left"
                                    >
                                      <h4 className="text-lg font-medium text-white font-mono pr-4">{question.q}</h4>
                                      <motion.div
                                        animate={{ rotate: expandedQuestions.includes(questionId) ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                                      </motion.div>
                                    </button>

                                    <AnimatePresence>
                                      {expandedQuestions.includes(questionId) && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.3 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="p-4 pt-0 border-t border-primary/10">
                                            <div className="text-gray-300 font-mono leading-relaxed whitespace-pre-line">
                                              {question.a}
                                            </div>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                )
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeading text="STILL HAVE QUESTIONS?" />

            <FadeIn>
              <Card className="bg-gray-900/60 border-primary/30 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                      OUR COMMUNITY IS HERE TO HELP
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      If you couldn't find an answer in this FAQ, please don't hesitate to reach out to our helpful
                      community
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg font-mono uppercase tracking-wider"
                    >
                      <Link href="https://discord.gg/ergo-platform" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Discord
                      </Link>
                    </Button>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg font-mono uppercase tracking-wider"
                    >
                      <Link href="https://t.me/ergoplatform" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Telegram
                      </Link>
                    </Button>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg font-mono uppercase tracking-wider"
                    >
                      <Link href="https://reddit.com/r/ergonauts" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Reddit
                      </Link>
                    </Button>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg font-mono uppercase tracking-wider"
                    >
                      <Link href="https://ergoforum.org" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Forum
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-primary/20">
                    <p className="text-gray-400 font-mono">
                      <span className="text-primary">&gt;</span> We're here to help you on your Ergo journey!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  )
}
