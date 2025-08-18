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
  Users2,
  RefreshCw,
  Shuffle,
  RotateCcw,
  FlipHorizontal,
  Ticket,
  Star,
  Crown,
  Trophy
} from "lucide-react";
import Link from "next/link";

export default function LotteriesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Lotteries
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A collection of degenerate finance protocols that create various lottery mechanisms for ERG tokens, offering users the chance to win prizes through transparent, provably fair drawing systems with automated settlement.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/degenerate-finance"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Degenerate Finance
          </Link>
          <a
            href="https://lotteries.ergo.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit Lotteries
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What are Lotteries?
        </h2>
        <p className="text-gray-300">
          Lotteries are degenerate finance protocols that create various lottery mechanisms for ERG tokens. These protocols allow users to purchase tickets and participate in drawings with transparent, provably fair outcomes and automated prize distribution through smart contracts.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Ticket className="w-5 h-5 text-green-400" /> Multiple Lottery Types
          </h3>
          <p className="text-gray-300 mb-4">
            Various lottery formats including traditional number-based lotteries, instant win games, and innovative drawing mechanisms that cater to different user preferences and risk appetites.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Number-based lotteries
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Instant win games
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Innovative drawing formats
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shuffle className="w-5 h-5 text-blue-400" /> Provably Fair Drawings
          </h3>
          <p className="text-gray-300 mb-4">
            Uses blockchain-based randomness generation to ensure provably fair lottery outcomes that cannot be manipulated or predicted by any party, including the protocol operators.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Blockchain randomness
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Unpredictable outcomes
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Verifiable fairness
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" /> Automated Prize Distribution
          </h3>
          <p className="text-gray-300 mb-4">
            Smart contracts automatically handle ticket sales, drawing execution, and prize distribution without human intervention, ensuring instant and trustless payouts to winners.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Instant payouts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No human intervention
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Trustless execution
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" /> Progressive Jackpots
          </h3>
          <p className="text-gray-300 mb-4">
            Some lottery protocols feature progressive jackpots that grow over time, creating larger potential prizes and increased excitement for participants across multiple drawing periods.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Growing prize pools
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Multiple drawing periods
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Increased excitement
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
          Lottery protocols represent a popular form of degenerate finance, offering the excitement of potentially life-changing prizes. While the protocols provide entertainment value and transparent outcomes, users should understand the extremely low probability of winning and the inherent risks of gambling.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Potential Rewards
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Life-changing prizes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transparent outcomes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Entertainment value
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Lottery Risks
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Extremely low win probability
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Potential for significant losses
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Addictive gambling behavior
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
          Lottery protocols address the demand for transparent and fair gambling mechanisms in the Ergo ecosystem. These protocols create various lottery games where users can purchase tickets and participate in drawings with provably fair outcomes and automated prize distribution.
        </p>
        <p className="text-gray-300 mb-4">
          The smart contracts handle all lottery logic automatically, including ticket sales, drawing execution, result determination, and prize distribution, ensuring a completely trustless gambling experience.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Traditional Lotteries</h4>
            <p className="text-gray-300 text-sm">Centralized systems with potential manipulation and delayed payouts</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Blockchain Lotteries</h4>
            <p className="text-gray-300 text-sm">Decentralized lotteries with provably fair outcomes and instant settlement</p>
          </div>
        </div>
      </div>

      {/* User Interface Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> User Interface and Operations
        </h2>
        <p className="text-gray-300 mb-4">
          The platform provides an intuitive interface for purchasing lottery tickets and participating in various lottery games. Users can easily select their numbers, purchase tickets, and track drawing results with real-time updates.
        </p>
        <p className="text-gray-300 mb-4">
          The interface displays current jackpot amounts, drawing schedules, and winner announcements to help users stay informed about lottery opportunities and results.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Ticket Purchase</h4>
            <p className="text-gray-300 text-sm">Select numbers, choose ticket quantity, and confirm purchase transaction</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Drawing Tracking</h4>
            <p className="text-gray-300 text-sm">Monitor drawing schedules, results, and prize announcements</p>
          </div>
        </div>
      </div>

      {/* Implementation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-blue-400" /> Implementation and Future Plans
        </h2>
        <p className="text-gray-300 mb-4">
          Lottery protocols are implemented using advanced ErgoScript smart contracts that handle all lottery logic automatically. The protocols feature provably fair randomness, instant settlement, and transparent result verification to ensure a trustworthy gambling experience.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Current Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multiple lottery types
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Provably fair drawings
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automated prize distribution
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
                Progressive jackpots
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multiple drawing formats
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Instant win games
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
              <Ticket className="w-5 h-5 text-purple-400" /> How do the lotteries work?
            </h3>
            <p className="text-gray-300">
              Users purchase lottery tickets by selecting numbers or participating in various lottery formats. Smart contracts use blockchain-based randomness to determine winners, ensuring provably fair outcomes that cannot be predicted or manipulated.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> What are the odds of winning?
            </h3>
            <p className="text-gray-300">
              Lottery odds are typically extremely low, often in the millions to one. While the potential prizes can be life-changing, users should understand that the probability of winning is very small and should not expect to win.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shuffle className="w-5 h-5 text-yellow-400" /> How is randomness generated?
            </h3>
            <p className="text-gray-300">
              The protocols use blockchain-based randomness generation that combines multiple sources to ensure unpredictable outcomes. This makes it impossible for any party, including the protocol operators, to predict or manipulate results.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Are these legitimate protocols?
            </h3>
            <p className="text-gray-300">
              Lottery protocols are legitimate degenerate finance protocols built on Ergo's blockchain using advanced smart contracts. They provide transparent gambling mechanisms with provably fair outcomes, but should be approached with caution due to the inherent risks of gambling.
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
                <a href="https://lotteries.ergo.io/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Lotteries Platform</a>
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
                <Ticket className="w-4 h-4 text-orange-400" />
                Multiple Lottery Types
              </li>
              <li className="flex items-center gap-2">
                <Shuffle className="w-4 h-4 text-orange-400" />
                Provably Fair Drawings
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-400" />
                Automated Prize Distribution
              </li>
              <li className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-orange-400" />
                Progressive Jackpots
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Lottery protocols represent the ultimate form of degenerate finance, offering the dream of life-changing prizes through transparent and provably fair drawing mechanisms on the blockchain."
        </blockquote>
      </div>
    </>
  );
} 