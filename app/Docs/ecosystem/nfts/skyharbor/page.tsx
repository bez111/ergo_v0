"use client";

import React from "react";
import {
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Shield,
  Users,
  AlertTriangle,
  Target,
  ChevronRight,
  GitBranch,
  Code,
  BookOpen,
  Activity,
  Store,
  Image,
  Palette,
  Tag,
  Search,
  Filter,
  Heart,
  Eye,
  Download,
  Upload,
  Share2,
  Grid3X3,
  List,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function SkyHarborPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          SkyHarbor
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A premier NFT marketplace on the Ergo blockchain, providing a comprehensive platform for buying, selling, and discovering unique digital art and collectibles with advanced trading features and community-driven curation.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/ecosystem/nfts"
            className="inline-flex items-center px-6 py-3 bg-purple-500 rounded-xl font-semibold text-black hover:bg-purple-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to NFTs
          </Link>
          <a
            href="https://www.skyharbor.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit SkyHarbor
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Store className="w-6 h-6 text-purple-400" /> What is SkyHarbor?
        </h2>
        <p className="text-gray-300">
          SkyHarbor is a leading NFT marketplace built on the Ergo blockchain, offering a comprehensive platform for digital art and collectibles. The marketplace provides advanced trading features, community curation, and seamless integration with Ergo's eUTxO model for secure and efficient NFT transactions.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Image className="w-5 h-5 text-purple-400" /> NFT Marketplace
          </h3>
          <p className="text-gray-300 mb-4">
            Complete NFT trading platform with buy, sell, and auction functionality. Users can discover, collect, and trade unique digital assets with advanced filtering and search capabilities.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Buy and sell NFTs
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Auction functionality
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Advanced search filters
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" /> Community Curation
          </h3>
          <p className="text-gray-300 mb-4">
            Community-driven curation system where users can discover trending collections, featured artists, and popular NFTs through social features and community voting mechanisms.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Trending collections
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Featured artists
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Social features
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Secure Trading
          </h3>
          <p className="text-gray-300 mb-4">
            Built on Ergo's secure eUTxO model with provably fair trading, escrow services, and automated settlement to ensure safe and transparent NFT transactions.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              eUTxO security
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Escrow services
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Automated settlement
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-400" /> Activity Tracking
          </h3>
          <p className="text-gray-300 mb-4">
            Comprehensive activity tracking and analytics for NFT transactions, including volume statistics, price history, and market trends to help users make informed decisions.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Volume statistics
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Price history
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Market trends
            </li>
          </ul>
        </div>
      </div>

      {/* Performance and Market Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-400" /> Market Performance
        </h2>
        <p className="text-gray-300 mb-4">
          SkyHarbor serves as a key NFT marketplace in the Ergo ecosystem, providing essential infrastructure for digital art and collectibles trading. The platform contributes to the growth of the Ergo NFT ecosystem by offering secure, user-friendly trading capabilities.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Market Benefits
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                NFT ecosystem growth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Artist discovery
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community engagement
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" /> Market Considerations
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                Market volatility
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                NFT value fluctuations
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                Competition from other platforms
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Concept and Functionality Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> Concept and Functionality
        </h2>
        <p className="text-gray-300 mb-4">
          SkyHarbor addresses the need for a comprehensive NFT marketplace in the Ergo ecosystem. The platform provides essential infrastructure for digital art trading, enabling artists to monetize their work and collectors to discover unique pieces.
        </p>
        <p className="text-gray-300 mb-4">
          The marketplace leverages Ergo's eUTxO model for secure transactions, smart contracts for automated trading, and community features for curation and discovery, creating a complete NFT ecosystem.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Traditional Art Market</h4>
            <p className="text-gray-300 text-sm">Physical galleries with limited accessibility and high barriers to entry</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">SkyHarbor Approach</h4>
            <p className="text-gray-300 text-sm">Digital marketplace with global accessibility and community-driven curation</p>
          </div>
        </div>
      </div>

      {/* User Interface Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> User Interface and Operations
        </h2>
        <p className="text-gray-300 mb-4">
          SkyHarbor provides an intuitive interface for NFT trading with advanced search and filtering capabilities. Users can browse collections, view detailed NFT information, place bids, and manage their digital assets seamlessly.
        </p>
        <p className="text-gray-300 mb-4">
          The platform features a clean, modern design with responsive layout, real-time updates, and comprehensive activity tracking to provide users with all the information they need for informed trading decisions.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Marketplace Interface</h4>
            <p className="text-gray-300 text-sm">Browse, search, and filter NFTs with advanced discovery tools</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Trading Dashboard</h4>
            <p className="text-gray-300 text-sm">Manage bids, track transactions, and monitor portfolio performance</p>
          </div>
        </div>
      </div>

      {/* Implementation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-blue-400" /> Implementation and Features
        </h2>
        <p className="text-gray-300 mb-4">
          SkyHarbor is built using Ergo's smart contract capabilities and eUTxO model for secure NFT trading. The platform implements advanced features like escrow services, automated settlement, and community curation to provide a comprehensive NFT marketplace experience.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Core Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                NFT marketplace
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Auction system
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community curation
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" /> Advanced Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Activity tracking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Analytics dashboard
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Social features
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Store className="w-5 h-5 text-purple-400" /> How does SkyHarbor work?
            </h3>
            <p className="text-gray-300">
              SkyHarbor is an NFT marketplace where users can buy, sell, and auction digital art and collectibles. The platform uses Ergo's blockchain for secure transactions and provides advanced search, filtering, and community curation features.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" /> What are the risks of NFT trading?
            </h3>
            <p className="text-gray-300">
              NFT trading involves market volatility, potential value fluctuations, and the risk of purchasing overvalued assets. Users should research thoroughly and only invest what they can afford to lose.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" /> How does community curation work?
            </h3>
            <p className="text-gray-300">
              The platform features community-driven curation where users can discover trending collections, featured artists, and popular NFTs through social features and community voting mechanisms.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Is SkyHarbor secure?
            </h3>
            <p className="text-gray-300">
              Yes, SkyHarbor is built on Ergo's secure eUTxO model with provably fair trading, escrow services, and automated settlement to ensure safe and transparent NFT transactions.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" /> Resources & Community
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Key Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-purple-400" />
                <a href="https://www.skyharbor.io/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">SkyHarbor Platform</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-purple-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Discord Community</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-purple-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub Repository</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-purple-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Documentation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Platform Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                                 <Image className="w-4 h-4 text-purple-400" />
                 NFT Marketplace
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                Community Curation
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                Secure Trading
              </li>
              <li className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-400" />
                Activity Tracking
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "SkyHarbor represents the future of digital art trading on Ergo, providing artists and collectors with a secure, community-driven platform for discovering and trading unique NFTs."
        </blockquote>
      </div>
    </>
  );
} 