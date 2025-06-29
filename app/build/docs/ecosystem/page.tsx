"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Globe, Code, Coins, Pickaxe, Wallet, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EcosystemOverviewPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Ergo Ecosystem Overview
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Discover the vibrant and growing ecosystem of projects, decentralized applications (dApps), tools, and services built on the Ergo blockchain.
        </p>
      </div>

      {/* Key Areas Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Globe className="w-6 h-6 text-orange-400" /> Key Areas of the Ecosystem
        </h2>
        <p className="text-gray-300 mb-6">
          The Ergo ecosystem is diverse, encompassing various sectors and applications that leverage Ergo's unique capabilities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Coins className="w-5 h-5 text-green-400" /> DeFi & Financial Primitives
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Explore decentralized exchanges (DEXs), lending platforms, stablecoins (like SigmaUSD), and other financial applications.
            </p>
            <Link
              href="/use/defi"
              className="inline-flex items-center text-orange-400 hover:underline"
            >
              Learn about Ergo DeFi <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Image src="/path/to/your/nft-icon.png" alt="NFTs & Digital Collectibles icon" width={24} height={24} className="w-5 h-5 text-purple-400" /> NFTs & Digital Collectibles
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Discover NFT marketplaces, minting platforms, and unique digital assets built on Ergo's native token capabilities.
            </p>
            <Link
              href="/use/nfts"
              className="inline-flex items-center text-orange-400 hover:underline"
            >
              Explore Ergo NFTs <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-400" /> Developer Tools & Infrastructure
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Find SDKs, APIs, explorers, and other essential tools for building and interacting with the Ergo blockchain.
            </p>
            <Link
              href="/build/docs/toolkit"
              className="inline-flex items-center text-orange-400 hover:underline"
            >
              View Developer Toolkit <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-yellow-400" /> Wallets & User Interfaces
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Secure and user-friendly wallets for storing ERG and tokens, and interacting with dApps.
            </p>
            <Link
              href="/wallet"
              className="inline-flex items-center text-orange-400 hover:underline"
            >
              Discover Wallets <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Pickaxe className="w-5 h-5 text-orange-400" /> Mining & Network Operations
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Information on how to mine ERG, join mining pools, and run a full Ergo node to support the network.
            </p>
            <Link
              href="/build/docs/mining"
              className="inline-flex items-center text-orange-400 hover:underline"
            >
              Learn About Mining <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Coins className="w-5 h-5 text-cyan-400" /> Grants & Funding
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Opportunities for developers and projects to receive funding and support from the Ergo Foundation and community.
            </p>
            <Link
              href="/ecosystem/grants"
              className="inline-flex items-center text-orange-400 hover:underline"
            >
              View Grant Opportunities <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Next Steps: Dive Deeper into the Ecosystem</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-orange-400">Explore All Projects</h4>
            <p className="text-gray-400 text-sm mb-3">
              Visit the main ecosystem page for a comprehensive list of all projects and dApps.
            </p>
            <Link
              href="/ecosystem"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Full Ecosystem Directory <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-cyan-400">Join the Community</h4>
            <p className="text-gray-400 text-sm mb-3">
              Connect with other Ergonauts, ask questions, and contribute to the growth of the ecosystem.
            </p>
            <Link
              href="/build/docs/forums"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              Community Forums & Chats <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}