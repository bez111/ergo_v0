"use client"

import { useState, useMemo, useEffect, MouseEvent } from "react"
import { motion } from "framer-motion"
import {
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  ExternalLink,
  Filter,
  Zap,
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

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
    icon: "🔍",
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

const featuredProjects = [
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
    id: 5,
    name: "Ergo Auction House",
    category: "NFT",
    status: "OPERATIONAL",
    description:
      "The first open-source NFT marketplace on Ergo. It supports artist royalties, on-site minting, various auction types, and multiple currencies.",
    icon: "🖼️",
    url: "https://ergoauctions.org",
  },
]

const categories = ["ALL", "DEFI", "INFRASTRUCTURE", "PRIVACY", "NFT", "WALLETS", "DAO", "ORACLES", "TOOLS", "GAMING"]
const statuses = ["ALL", "OPERATIONAL", "TESTING", "PROTOTYPE"]

const statusConfig = {
  OPERATIONAL: { icon: <CheckCircle className="w-4 h-4 text-green-400" />, color: "text-green-400" },
  TESTING: { icon: <Clock className="w-4 h-4 text-yellow-400" />, color: "text-yellow-400" },
  PROTOTYPE: { icon: <AlertCircle className="w-4 h-4 text-orange-400" />, color: "text-orange-400" },
}

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

export default function EcosystemPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [selectedStatus, setSelectedStatus] = useState("ALL")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    const savedViewMode = localStorage.getItem("ecosystemViewMode")
    if (savedViewMode) {
      setViewMode(savedViewMode as "grid" | "list")
    }
  }, [])

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "ALL" || project.category === selectedCategory) &&
        (selectedStatus === "ALL" || project.status === selectedStatus),
    )
  }, [searchTerm, selectedCategory, selectedStatus])

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
            EXPLORE THE ECOSYSTEM
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent pr-4">
              Ergo Ecosystem
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover a rich ecosystem of dApps, tools, and services built on the Ergo blockchain, designed for security,
            privacy, and real-world utility.
          </p>
        </motion.section>

        {/* Featured Projects Section */}
        <div className="border-y border-gray-800 bg-black/20">
          <motion.section
            className="max-w-7xl mx-auto px-4 py-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentFeaturedIndex((p) => Math.max(0, p - 1))}
                  disabled={currentFeaturedIndex === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentFeaturedIndex((p) => Math.min(featuredProjects.length - 3, p + 1))}
                  disabled={currentFeaturedIndex >= featuredProjects.length - 3}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(currentFeaturedIndex, currentFeaturedIndex + 3).map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col">
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{project.icon}</div>
                          <div>
                            <h2 className="text-xl font-bold text-white">{project.name}</h2>
                            <Badge variant="secondary" className="mt-1">
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                        <div
                          className={`flex items-center gap-2 ${
                            statusConfig[project.status as keyof typeof statusConfig]?.color
                          }`}
                        >
                          {statusConfig[project.status as keyof typeof statusConfig]?.icon}
                        </div>
                      </div>
                      <p className="text-gray-400 mb-6 flex-1">{project.description}</p>
                      <Button asChild variant="outline" className="w-full mt-auto">
                        <Link href={project.url} target="_blank" className="flex items-center gap-2">
                          Visit Project
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Filters and Search */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="sticky top-0 z-20 bg-black/50 backdrop-blur-lg py-6 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white">All Projects</h2>
              </div>
              <div className="relative w-full md:w-auto md:flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-900/80 border-gray-700/50 pl-12 h-12 rounded-xl focus:border-orange-500/50"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  onClick={() => setViewMode("grid")}
                  className="h-12 w-12"
                >
                  <LayoutGrid />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  onClick={() => setViewMode("list")}
                  className="h-12 w-12"
                >
                  <List />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full backdrop-blur-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {statuses.map((status) => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? "default" : "outline"}
                  onClick={() => setSelectedStatus(status)}
                  className="rounded-full backdrop-blur-sm"
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Table Header (List view only) */}
        {viewMode === "list" && (
          <div className="max-w-7xl mx-auto px-4 hidden md:block">
            <div className="grid grid-cols-12 items-center gap-4 p-4 text-xs font-semibold text-gray-500 border-b border-gray-800 uppercase tracking-wider">
              <div className="col-span-3">Project</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-4">Description</div>
              <div className="col-span-1 text-right">Link</div>
            </div>
          </div>
        )}

        {/* Projects Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`max-w-7xl mx-auto px-4 pb-12 ${
            viewMode === "grid"
              ? "grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col"
          }`}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              {viewMode === "grid" ? (
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{project.icon}</div>
                        <div>
                          <h2 className="text-xl font-bold text-white">{project.name}</h2>
                          <Badge variant="secondary" className="mt-1">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${
                          statusConfig[project.status as keyof typeof statusConfig]?.color
                        }`}
                      >
                        {statusConfig[project.status as keyof typeof statusConfig]?.icon}
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6 flex-1">{project.description}</p>
                    <Button asChild variant="outline" className="w-full mt-auto">
                      <Link href={project.url} target="_blank" className="flex items-center gap-2">
                        Visit Project
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Link
                  href={project.url}
                  target="_blank"
                  className="block p-4 rounded-lg hover:bg-gray-900/80 border border-transparent hover:border-gray-800 transition-colors"
                >
                  <div className="grid grid-cols-12 items-center gap-4">
                    <div className="col-span-12 md:col-span-3 flex items-center gap-4">
                      <div className="text-2xl">{project.icon}</div>
                      <h3 className="font-semibold text-white">{project.name}</h3>
                    </div>
                    <div className="col-span-6 md:col-span-2">
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <div
                      className={`col-span-6 md:col-span-2 flex items-center gap-2 text-sm ${
                        statusConfig[project.status as keyof typeof statusConfig]?.color
                      }`}
                    >
                      {statusConfig[project.status as keyof typeof statusConfig]?.icon}
                      <span>{project.status}</span>
                    </div>
                    <div className="col-span-11 md:col-span-4 md:col-start-8">
                      <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
                    </div>
                    <div className="col-span-1 flex justify-end text-gray-500">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
