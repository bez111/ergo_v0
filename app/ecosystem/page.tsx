"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, CheckCircle, Clock, AlertCircle, ExternalLink, Filter, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    name: "Spectrum Finance",
    category: "DEFI",
    status: "OPERATIONAL",
    description:
      "A cutting-edge open-source decentralized exchange (DEX) operating on the Ergo and Cardano blockchains. It offers liquidity provision (LP), yield farming, and supports Babel Fees.",
    icon: "💱",
    url: "https://spectrum.fi",
  },
  {
    id: 2,
    name: "SigmaUSD",
    category: "DEFI",
    status: "OPERATIONAL",
    description:
      "The first eUTXO-based stablecoin, implementing the AgeUSD protocol. It is pegged to the US dollar and backed by ERG with a floating reserve ratio (400%-800%).",
    icon: "💵",
    url: "https://sigmausd.io",
  },
  {
    id: 3,
    name: "Rosen Bridge",
    category: "INFRASTRUCTURE",
    status: "OPERATIONAL",
    description:
      "An open-source protocol for cross-chain asset transfers between Ergo and other blockchains like Cardano, Bitcoin Runes, and Dogecoin.",
    icon: "🌉",
    url: "https://rosen.tech",
  },
  {
    id: 4,
    name: "ErgoMixer",
    category: "PRIVACY",
    status: "OPERATIONAL",
    description:
      "The first non-interactive, non-custodial mixer in the crypto industry. It allows users to privately send tokens using Σ-protocols for enhanced privacy.",
    icon: "🔀",
    url: "https://ergomixer.io",
  },
  {
    id: 5,
    name: "Ergo Auction House",
    category: "NFT",
    status: "OPERATIONAL",
    description:
      "The first open-source NFT marketplace on Ergo. It supports artist royalties, on-site minting, various auction types, and multiple currencies.",
    icon: "🖼️",
    url: "https://ergoauctions.org",
  },
  {
    id: 6,
    name: "Nautilus Wallet",
    category: "WALLETS",
    status: "OPERATIONAL",
    description:
      "A browser extension and mobile wallet for Ergo, focused on privacy, security, and user experience. It supports Ledger, multiple wallets, and a dApp connector.",
    icon: "🔒",
    url: "https://nautilus-wallet.io",
  },
  {
    id: 7,
    name: "DuckPools",
    category: "DEFI",
    status: "TESTING",
    description:
      "A collateralized lending platform with algorithmic lending pools. Users provide ERG or native assets to earn income or borrow assets against ERG collateral.",
    icon: "🦆",
    url: "https://duckpools.io",
  },
  {
    id: 8,
    name: "Paideia",
    category: "DAO",
    status: "OPERATIONAL",
    description:
      "A suite of tools for creating and managing Decentralized Autonomous Organizations (DAOs) on Ergo and Cardano with governance and treasury management.",
    icon: "🏛️",
    url: "https://paideia.im",
  },
  {
    id: 9,
    name: "Oracle Pools",
    category: "ORACLES",
    status: "OPERATIONAL",
    description:
      "A decentralized oracle system on Ergo that connects smart contracts with external data without needing to trust centralized sources.",
    icon: "🔮",
    url: "https://explorer.ergoplatform.com/en/oracle-pools-list",
  },
  {
    id: 10,
    name: "Ergo Explorer",
    category: "TOOLS",
    status: "OPERATIONAL",
    description:
      "The main official block explorer for Ergo. It allows users to track transactions, blocks, addresses, tokens, and view general network statistics.",
    icon: "🔍",
    url: "https://explorer.ergoplatform.com",
  },
  {
    id: 11,
    name: "ErgoPad",
    category: "DEFI",
    status: "OPERATIONAL",
    description:
      "A token launch (IDO) and fundraising platform on the Ergo blockchain. It gives token holders the opportunity to participate in IDOs.",
    icon: "🚀",
    url: "https://ergopad.io",
  },
  {
    id: 12,
    name: "SkyHarbor",
    category: "NFT",
    status: "TESTING",
    description:
      "An NFT marketplace on Ergo, positioned as a reliable platform for fixed-price NFT transactions with planned features like NFT refunds and financing.",
    icon: "🏪",
    url: "#",
  },
  {
    id: 13,
    name: "Mew Finance",
    category: "DEFI",
    status: "OPERATIONAL",
    description:
      "A decentralized finance (DeFi) platform offering a suite of financial applications including DEX, NFT marketplace, and various financial tools.",
    icon: "💎",
    url: "#",
  },
  {
    id: 14,
    name: "SatErgo",
    category: "WALLETS",
    status: "OPERATIONAL",
    description:
      "A comprehensive desktop wallet for Ergo with the option to integrate a full node to support network decentralization. Privacy-focused with offline vault.",
    icon: "💼",
    url: "https://satergo.com",
  },
  {
    id: 15,
    name: "SAFEW",
    category: "WALLETS",
    status: "OPERATIONAL",
    description: "A browser extension wallet for Ergo that integrates with ErgoMixer for enhanced transaction privacy.",
    icon: "🛡️",
    url: "https://safew.org",
  },
  {
    id: 16,
    name: "ErgoWatch",
    category: "TOOLS",
    status: "OPERATIONAL",
    description:
      "An analytical block explorer providing Ergo network metrics, DeFi statistics (e.g., TVL), charts, and dashboards for monitoring blockchain activity.",
    icon: "����",
    url: "https://ergo.watch",
  },
  {
    id: 17,
    name: "CyberPixels",
    category: "GAMING",
    status: "TESTING",
    description:
      "A gaming project featuring an open-world pixel-style game with blockchain integration (NFTs, custom tokens, in-game marketplace).",
    icon: "🎮",
    url: "#",
  },
  {
    id: 18,
    name: "SigmaFi",
    category: "DEFI",
    status: "PROTOTYPE",
    description:
      "A suite of decentralized P2P financial contracts on Ergo, including SigmaBonds for creating P2P debt obligations.",
    icon: "🏦",
    url: "#",
  },
  {
    id: 19,
    name: "ErgoRaffle",
    category: "DEFI",
    status: "OPERATIONAL",
    description:
      "A crowdfunding service with lottery elements, allowing fundraising for projects where participants can win rewards.",
    icon: "🎟️",
    url: "https://ergoraffle.com",
  },
  {
    id: 20,
    name: "Minotaur Wallet",
    category: "WALLETS",
    status: "TESTING",
    description:
      "A mobile wallet for Ergo with advanced features like multi-signatures, enhancing fund management security.",
    icon: "📱",
    url: "https://github.com/minotaur-ergo/minotaur-wallet",
  },
  {
    id: 21,
    name: "GuapSwap",
    category: "TOOLS",
    status: "OPERATIONAL",
    description:
      "A decentralized smart contract-based service for swapping miner profits on Ergo, allowing automatic exchange of mining rewards.",
    icon: "⛏️",
    url: "#",
  },
  {
    id: 22,
    name: "DexyGold",
    category: "DEFI",
    status: "PROTOTYPE",
    description:
      "An algorithmic stablecoin pegged to the price of gold (XAU/USD), utilizing seigniorage, price oracles, and excess ERG collateral.",
    icon: "🥇",
    url: "#",
  },
  {
    id: 23,
    name: "SigmaO",
    category: "DEFI",
    status: "PROTOTYPE",
    description:
      "A platform for trading options (Call/Put, American/European) on Ergo EIP-4 tokens using an order book style.",
    icon: "📈",
    url: "#",
  },
  {
    id: 24,
    name: "Blitz TCG",
    category: "GAMING",
    status: "TESTING",
    description: "A collectible trading card game (TCG) on the Ergo blockchain.",
    icon: "🃏",
    url: "#",
  },
  {
    id: 25,
    name: "Sigmaverse",
    category: "TOOLS",
    status: "OPERATIONAL",
    description:
      "A centralized portal and directory for the Ergo dApp ecosystem, allowing developers to list applications and users to find services.",
    icon: "🌐",
    url: "https://sigmaverse.io",
  },
  {
    id: 26,
    name: "ErgOne",
    category: "TOOLS",
    status: "OPERATIONAL",
    description:
      "A decentralized, community-driven marketing platform for promoting Ergo and its projects using the ERGONE token and Proof-of-Commitment Protocol.",
    icon: "📢",
    url: "#",
  },
  {
    id: 27,
    name: "Hodlbox",
    category: "DEFI",
    status: "OPERATIONAL",
    description:
      "A platform encouraging long-term holding of ERG with treasure chests and various fund-locking options, rewarding users with NFTs.",
    icon: "📦",
    url: "#",
  },
  {
    id: 28,
    name: "Lilium",
    category: "TOOLS",
    status: "TESTING",
    description:
      "A platform designed to facilitate the launch of NFT collections on the Ergo blockchain, helping artists and projects mint and sell NFTs.",
    icon: "🌸",
    url: "#",
  },
  {
    id: 29,
    name: "TokenJay",
    category: "DEFI",
    status: "OPERATIONAL",
    description: "A platform for P2P (peer-to-peer) token trading within the Ergo ecosystem.",
    icon: "🔄",
    url: "#",
  },
  {
    id: 30,
    name: "Single Tx Swap",
    category: "TOOLS",
    status: "OPERATIONAL",
    description: "A tool for executing P2P (peer-to-peer) token swaps within a single transaction.",
    icon: "⚡",
    url: "#",
  },
  {
    id: 31,
    name: "Crux Finance",
    category: "TOOLS",
    status: "OPERATIONAL",
    description:
      "A tool for managing crypto portfolios within the Ergo ecosystem, allowing tracking of P&L, investments, and generating tax reports.",
    icon: "📊",
    url: "#",
  },
  {
    id: 32,
    name: "Fleet SDK",
    category: "TOOLS",
    status: "OPERATIONAL",
    description:
      "A JavaScript library designed to simplify the creation and signing of transactions on the Ergo blockchain in web applications and Node.js.",
    icon: "⚙️",
    url: "https://github.com/fleet-sdk/fleet",
  },
  {
    id: 33,
    name: "AppKit",
    category: "TOOLS",
    status: "OPERATIONAL",
    description:
      "The primary Software Development Kit (SDK) for developing applications on Ergo using JVM-based programming languages.",
    icon: "🔧",
    url: "https://github.com/ergoplatform/ergo-appkit",
  },
  {
    id: 34,
    name: "SigmaRust",
    category: "TOOLS",
    status: "OPERATIONAL",
    description:
      "An implementation of the ErgoTree interpreter in Rust, providing tools for working with transactions and bindings for various languages.",
    icon: "🦀",
    url: "https://github.com/ergoplatform/sigma-rust",
  },
  {
    id: 35,
    name: "Gluon",
    category: "DEFI",
    status: "PROTOTYPE",
    description:
      "A protocol developed to strengthen (harden) existing stablecoins in the Ergo ecosystem, such as SigmaUSD.",
    icon: "🔬",
    url: "#",
  },
  {
    id: 36,
    name: "ChainCash",
    category: "TOOLS",
    status: "PROTOTYPE",
    description:
      "A framework for creating decentralized P2P monetary systems on Ergo, allowing users to issue their own currencies backed by trust or collateral.",
    icon: "💰",
    url: "#",
  },
  {
    id: 37,
    name: "SigRSV",
    category: "DEFI",
    status: "OPERATIONAL",
    description:
      "The reserve coin for the SigmaUSD stablecoin protocol. Users mint SigRSV by depositing ERG into reserves and can profit from ERG price increases.",
    icon: "🏛️",
    url: "#",
  },
  {
    id: 38,
    name: "EXLE",
    category: "DEFI",
    status: "TESTING",
    description: "A lending/borrowing protocol within the Ergo ecosystem, integrated with Crux Finance.",
    icon: "🏪",
    url: "#",
  },
]

const categories = [
  { id: "ALL", label: "ALL", count: projects.length },
  { id: "DEFI", label: "DEFI", count: projects.filter((p) => p.category === "DEFI").length },
  {
    id: "INFRASTRUCTURE",
    label: "INFRASTRUCTURE",
    count: projects.filter((p) => p.category === "INFRASTRUCTURE").length,
  },
  { id: "WALLETS", label: "WALLETS", count: projects.filter((p) => p.category === "WALLETS").length },
  { id: "NFT", label: "NFT", count: projects.filter((p) => p.category === "NFT").length },
  { id: "DAO", label: "DAO", count: projects.filter((p) => p.category === "DAO").length },
  { id: "PRIVACY", label: "PRIVACY", count: projects.filter((p) => p.category === "PRIVACY").length },
  { id: "ORACLES", label: "ORACLES", count: projects.filter((p) => p.category === "ORACLES").length },
  { id: "TOOLS", label: "TOOLS", count: projects.filter((p) => p.category === "TOOLS").length },
  { id: "GAMING", label: "GAMING", count: projects.filter((p) => p.category === "GAMING").length },
]

const statusConfig = {
  OPERATIONAL: {
    icon: CheckCircle,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/30",
  },
  TESTING: {
    icon: Clock,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
  },
  PROTOTYPE: {
    icon: AlertCircle,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
  },
  "COMING-SOON": {
    icon: AlertCircle,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
  },
}

export default function EcosystemPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [searchQuery, setSearchQuery] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === "ALL" || project.category === selectedCategory
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-10 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block text-center">
          Ergo Ecosystem
        </h1>
        <div className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative inline-block">
                <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-orange-500/20">
                  Explore the complete Ergo ecosystem with advanced filtering and security analysis
                </p>

                {/* Search */}
                <div className="max-w-2xl mx-auto relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg blur-xl" />
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5 z-10" />
                    <Input
                      placeholder="Search projects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 py-4 text-lg bg-gray-900/80 backdrop-blur-sm border-orange-500/30 focus:border-orange-500 rounded-lg font-mono relative z-10"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Featured Projects */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative mb-8 flex justify-between items-center">
                <h2 className="text-3xl font-bold leading-snug pb-2 align-baseline block">FEATURED PROJECTS</h2>
                <div className="h-1 w-24 bg-orange-500 mt-2 absolute top-full left-0"></div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setCurrentProjectIndex((prev) => Math.max(0, prev - 1))}
                    className={`p-2 rounded-full border border-orange-500/30 hover:bg-orange-500/20 transition-colors ${currentProjectIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
                    disabled={currentProjectIndex === 0}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-500"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentProjectIndex((prev) => Math.min(prev + 1, 3))}
                    className={`p-2 rounded-full border border-orange-500/30 hover:bg-orange-500/20 transition-colors ${currentProjectIndex === 3 ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
                    disabled={currentProjectIndex === 3}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-500"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Featured Project Cards - Only show 3 at a time */}
                {[
                  {
                    icon: "🌉",
                    name: "Rosen Bridge",
                    category: "Infrastructure",
                    description: "Decentralized cross-chain bridge connecting Ergo with other blockchain ecosystems.",
                    features: [
                      "Trustless operation",
                      "Multi-chain compatibility",
                      "Enhanced security through guard committees",
                    ],
                    url: "https://rosen.tech",
                  },
                  {
                    icon: "💎",
                    name: "MEW Finance",
                    category: "DeFi",
                    description: "Advanced DeFi platform providing innovative financial services on the Ergo blockchain.",
                    features: [
                      "Yield optimization strategies",
                      "Cross-chain liquidity pools",
                      "Decentralized governance system",
                    ],
                    url: "#",
                  },
                  {
                    icon: "🦆",
                    name: "Duckpools",
                    category: "DeFi",
                    description: "Lending and borrowing protocol with a unique revenue-sharing model and DAO structure.",
                    features: [
                      "Permissionless lending markets",
                      "Revenue sharing with liquidity providers",
                      "Decentralized governance",
                    ],
                    url: "https://duckpools.io",
                  },
                  {
                    icon: "⚡",
                    name: "Dexy",
                    category: "DeFi",
                    description:
                      "Decentralized exchange built on Ergo offering advanced trading features and deep liquidity.",
                    features: ["Low slippage trading", "Concentrated liquidity pools", "Advanced order types"],
                    url: "#",
                  },
                  {
                    icon: "🔬",
                    name: "Gluon",
                    category: "DeFi",
                    description: "Liquidity aggregation protocol that optimizes trading across multiple DEXes on Ergo.",
                    features: ["Smart order routing", "MEV protection", "Gas optimization"],
                    url: "#",
                  },
                  {
                    icon: "💵",
                    name: "SigmaUSD",
                    category: "DeFi",
                    description:
                      "Algorithmic stablecoin protocol based on the AgeUSD design, offering stability without centralized collateral.",
                    features: [
                      "Crypto-backed stability",
                      "Decentralized reserve system",
                      "Resilient in volatile markets",
                    ],
                    url: "https://sigmausd.io",
                  },
                ]
                  .slice(currentProjectIndex, currentProjectIndex + 3)
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:border-orange-500/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{project.icon}</span>
                        <span className="font-semibold text-lg text-white">{project.name}</span>
                        <Badge className="ml-auto" variant="outline">{project.category}</Badge>
                      </div>
                      <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-col gap-2 mt-auto">
                        <h4 className="text-gray-300 font-mono mb-2 text-center text-xs">KEY FEATURES</h4>
                        <ul className="space-y-1 mb-4">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-orange-500 mr-2">•</span>
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                            Visit
                          </Button>
                        </a>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>

            {/* Filter by Category */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="backdrop-blur-sm bg-gray-900/50 p-6 rounded-lg border border-orange-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-orange-500" />
                  <h2 className="text-lg font-mono font-bold text-orange-500 tracking-wider leading-snug pb-2 align-baseline block">FILTER BY CATEGORY</h2>
                  <span className="text-sm text-gray-500 font-mono">SECURITY ANALYSIS</span>
                  <Zap className="w-4 h-4 text-orange-500 animate-pulse" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`font-mono text-sm tracking-wider transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black border-orange-500 shadow-lg shadow-orange-500/25"
                          : "border-orange-500/30 hover:border-orange-500 bg-gray-800/50 backdrop-blur-sm text-orange-500 hover:bg-orange-500/10"
                      }`}
                    >
                      {category.label} {category.count}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Available Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="backdrop-blur-sm bg-gray-900/50 rounded-lg border border-orange-500/20 overflow-hidden">
                <div className="flex items-center gap-2 mb-6 p-6 pb-0">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                  <h2 className="text-lg font-mono font-bold text-orange-500 tracking-wider leading-snug pb-2 align-baseline block">AVAILABLE PROJECTS</h2>
                  <span className="text-sm text-gray-500 font-mono">SECURITY ANALYSIS</span>
                  <div className="flex gap-1 ml-auto">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-400" />
                  </div>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 py-4 px-6 border-b border-orange-500/30 font-mono text-sm font-bold text-orange-500 tracking-wider bg-gradient-to-r from-orange-500/5 to-orange-600/5">
                  <div className="col-span-3">PROJECT NAME</div>
                  <div className="col-span-2">CATEGORY</div>
                  <div className="col-span-2">STATUS</div>
                  <div className="col-span-5">DESCRIPTION</div>
                </div>

                {/* Projects List */}
                <div className="space-y-0">
                  {filteredProjects.map((project, index) => {
                    const StatusIcon = statusConfig[project.status as keyof typeof statusConfig]?.icon || CheckCircle
                    const statusColor =
                      statusConfig[project.status as keyof typeof statusConfig]?.color || "text-green-400"

                    return (
                      <motion.div
                        key={project.id}
                        className="grid grid-cols-12 gap-4 py-4 px-6 border-b border-gray-800/30 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-orange-600/5 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        onClick={() => project.url !== "#" && window.open(project.url, "_blank")}
                      >
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Project Name */}
                        <div className="col-span-3 flex items-center gap-3 relative z-10">
                          <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                            {project.icon}
                          </div>
                          <div>
                            <div className="font-mono font-medium text-white group-hover:text-orange-500 transition-colors duration-300">
                              {project.name}
                            </div>
                          </div>
                        </div>

                        {/* Category */}
                        <div className="col-span-2 flex items-center relative z-10">
                          <Badge
                            variant="outline"
                            className="font-mono text-xs border-orange-500/30 text-orange-500 bg-gray-800/50 backdrop-blur-sm group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all duration-300"
                          >
                            {project.category}
                          </Badge>
                        </div>

                        {/* Status */}
                        <div className="col-span-2 flex items-center gap-2 relative z-10">
                          <StatusIcon className={`w-4 h-4 ${statusColor} group-hover:animate-pulse`} />
                          <span className={`font-mono text-sm ${statusColor}`}>{project.status}</span>
                        </div>

                        {/* Description */}
                        <div className="col-span-5 flex items-center justify-between relative z-10">
                          <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {project.description}
                          </p>
                          {project.url !== "#" && (
                            <span className="ml-4 flex-shrink-0 font-mono text-cyan-400 text-sm">Visit</span>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-20 backdrop-blur-sm bg-gray-900/50 rounded-lg border border-orange-500/20">
                  <div className="text-6xl mb-4 animate-bounce">🔍</div>
                  <h3 className="text-2xl font-bold mb-2 font-mono text-orange-500">NO PROJECTS FOUND</h3>
                  <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
                  <Button
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("ALL")
                    }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 font-mono shadow-lg shadow-orange-500/25"
                  >
                    CLEAR FILTERS
                  </Button>
                </div>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="inline-flex items-center gap-4 px-8 py-4 backdrop-blur-sm bg-gray-900/50 border border-orange-500/30 rounded-lg font-mono shadow-lg shadow-orange-500/10">
                <span className="text-orange-500">TOTAL PROJECTS:</span>
                <span className="text-white font-bold text-lg">{filteredProjects.length}</span>
                <span className="text-gray-500">|</span>
                <span className="text-orange-500">OPERATIONAL:</span>
                <span className="text-green-400 font-bold text-lg animate-pulse">
                  {filteredProjects.filter((p) => p.status === "OPERATIONAL").length}
                </span>
                <span className="text-gray-500">|</span>
                <span className="text-orange-500">TESTING:</span>
                <span className="text-yellow-400 font-bold text-lg animate-pulse delay-200">
                  {filteredProjects.filter((p) => p.status === "TESTING").length}
                </span>
                <span className="text-gray-500">|</span>
                <span className="text-orange-500">PROTOTYPE:</span>
                <span className="text-blue-400 font-bold text-lg animate-pulse delay-400">
                  {filteredProjects.filter((p) => p.status === "PROTOTYPE").length}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
