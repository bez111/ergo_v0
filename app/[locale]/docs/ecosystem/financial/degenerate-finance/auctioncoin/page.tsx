"use client";

import React from "react";
import {
  ExternalLink,
  Info,
  Zap,
  CheckCircle,
  TrendingUp,
  Shield,
  Users,
  Gavel,
  AlertTriangle,
  Target,
  Layers,
  Calculator,
  ArrowUpDown,
  ChevronRight,
  Brain,
  GitBranch,
  Globe,
  Banknote,
  Cpu,
  Settings,
  Gift,
  FileText,
  Code,
  Play,
  BookOpen,
  Coins,
  Lock,
  Award,
  Clock,
  Flame,
  History,
  DollarSign,
  BarChart3,
  PieChart,
  TrendingDown,
  Activity,
  Hammer,
  Timer,
  ShoppingCart,
  Users2
} from "lucide-react";
import Link from "next/link";

export default function AuctionCoinPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          AuctionCoin
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A degenerate finance protocol that creates a continuous auction mechanism for ERG tokens, where users can bid on tokens in real-time auctions with dynamic pricing and automated settlement through smart contracts.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/degenerate-finance"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Degenerate Finance
          </Link>
          <a
            href="https://auctioncoin.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit AuctionCoin
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is AuctionCoin?
        </h2>
        <p className="text-gray-300">
          AuctionCoin is a degenerate finance protocol that creates a continuous auction mechanism for ERG tokens. The protocol allows users to participate in real-time auctions with dynamic pricing, automated settlement, and transparent bidding processes through advanced smart contracts.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Hammer className="w-5 h-5 text-green-400" /> Continuous Auctions
          </h3>
          <p className="text-gray-300 mb-4">
            Real-time auction mechanism where users can bid on ERG tokens continuously, with dynamic pricing that adjusts based on market demand and supply.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Real-time bidding
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Dynamic pricing
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Automated settlement
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Timer className="w-5 h-5 text-blue-400" /> Time-Based Mechanics
          </h3>
          <p className="text-gray-300 mb-4">
            Auction periods with specific time constraints create urgency and strategic bidding opportunities, encouraging active participation and competitive pricing.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Time-limited auctions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Strategic bidding
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Urgency mechanics
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-purple-400" /> Transparent Bidding
          </h3>
          <p className="text-gray-300 mb-4">
            All bids and auction results are publicly visible on the blockchain, ensuring complete transparency and fair competition among participants.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Public bid visibility
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Fair competition
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Blockchain transparency
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" /> Smart Contract Automation
          </h3>
          <p className="text-gray-300 mb-4">
            Advanced ErgoScript smart contracts handle all auction logic, including bid validation, price calculation, and automatic settlement without human intervention.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Automated settlement
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Bid validation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Price calculation
            </li>
          </ul>
        </div>
      </div>

      {/* Performance and Issues Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-400" /> Performance and Risks
        </h2>
        <p className="text-gray-300 mb-4">
          AuctionCoin represents an innovative approach to degenerate finance, creating a unique auction-based trading mechanism. While the protocol offers transparent and fair bidding, participants should understand the risks of auction dynamics and market volatility.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Potential Rewards
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Fair market pricing through auctions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transparent bidding process
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Strategic bidding opportunities
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Auction Risks
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Time pressure on bidding
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Market volatility impact
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Potential overbidding
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
          AuctionCoin addresses the need for transparent and fair token trading mechanisms in the Ergo ecosystem. The protocol creates a continuous auction system where users can bid on ERG tokens in real-time, with prices determined by market demand rather than traditional order books.
        </p>
        <p className="text-gray-300 mb-4">
          The smart contracts handle all auction logic automatically, including bid validation, price calculation, and settlement, ensuring a trustless and transparent trading experience for all participants.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Traditional Trading</h4>
            <p className="text-gray-300 text-sm">Order book-based trading with market makers and potential manipulation</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">AuctionCoin Approach</h4>
            <p className="text-gray-300 text-sm">Continuous auctions with transparent bidding and dynamic pricing</p>
          </div>
        </div>
      </div>

      {/* User Interface Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> User Interface and Operations
        </h2>
        <p className="text-gray-300 mb-4">
          The platform provides an intuitive interface for participating in continuous auctions. Users can view current auction status, place bids, and monitor auction history with real-time updates.
        </p>
        <p className="text-gray-300 mb-4">
          The interface displays auction timers, current highest bids, and participant information to help users make informed bidding decisions in a competitive environment.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Bidding Interface</h4>
            <p className="text-gray-300 text-sm">Place bids, view auction status, and monitor real-time updates</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Auction Monitoring</h4>
            <p className="text-gray-300 text-sm">Track auction history, current bids, and participant activity</p>
          </div>
        </div>
      </div>

      {/* Implementation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-blue-400" /> Implementation and Future Plans
        </h2>
        <p className="text-gray-300 mb-4">
          AuctionCoin is implemented using advanced ErgoScript smart contracts that handle all auction logic automatically. The protocol features transparent bidding, automated settlement, and dynamic pricing mechanisms to ensure fair and efficient trading.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Current Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Continuous ERG auctions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transparent bidding
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automated settlement
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
                Dynamic pricing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Time-based mechanics
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Bid validation
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
              <Hammer className="w-5 h-5 text-purple-400" /> How do the auctions work?
            </h3>
            <p className="text-gray-300">
              Auctions run continuously with time-limited periods. Users can place bids on ERG tokens, and the highest bid at the end of each auction period wins. All bids are transparent and visible on the blockchain.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> What are the risks of auction trading?
            </h3>
            <p className="text-gray-300">
              Auction trading involves risks such as time pressure on bidding decisions, market volatility affecting auction outcomes, and potential overbidding in competitive environments. Understanding auction dynamics is crucial.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Timer className="w-5 h-5 text-yellow-400" /> How are auction periods determined?
            </h3>
            <p className="text-gray-300">
              Auction periods are set by smart contracts with specific time constraints. This creates urgency and strategic bidding opportunities, encouraging active participation and competitive pricing.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Is this a legitimate protocol?
            </h3>
            <p className="text-gray-300">
              AuctionCoin is a legitimate degenerate finance protocol built on Ergo's blockchain using advanced smart contracts. It provides a unique auction-based trading mechanism with transparent bidding and automated settlement.
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
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="https://auctioncoin.io/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">AuctionCoin Platform</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Discord Community</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">GitHub Repository</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Documentation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Protocol Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Hammer className="w-4 h-4 text-orange-400" />
                Continuous Auctions
              </li>
              <li className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-orange-400" />
                Time-Based Mechanics
              </li>
              <li className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-orange-400" />
                Transparent Bidding
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-400" />
                Smart Contract Automation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "AuctionCoin represents a unique approach to degenerate finance, creating transparent and fair trading mechanisms through continuous auctions with automated settlement."
        </blockquote>
      </div>
    </>
  );
} 