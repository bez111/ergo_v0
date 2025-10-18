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
  Clock
} from "lucide-react";
import Link from "next/link";

export default function HodlBoxPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          HodlBox
      </h1>
        <p className="text-xl text-gray-400 mb-6">
          A unique platform designed to encourage long-term holding of Ergo (ERG) by offering users the opportunity to purchase "treasure chests" with varying locking options, rewarding commitment with NFTs and promoting sustainable holding practices in the Ergo ecosystem.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/degenerate-finance"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Degenerate Finance
          </Link>
          <a
            href="https://hodlbox.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit HodlBox
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is HodlBox?
        </h2>
        <p className="text-gray-300">
          HodlBox is a yield and synthetic asset platform with game-theoretic elements that incentivizes long-term holding of ERG through treasure chest mechanisms. Users can lock their ERG for specified periods and receive NFT rewards, creating a sustainable ecosystem that discourages impulsive selling and promotes long-term commitment to the Ergo network.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Gift className="w-5 h-5 text-green-400" /> Treasure Chest System
          </h3>
          <p className="text-gray-300 mb-4">
            Users can purchase "treasure chests" with varying locking options, ranging from 10 to 10,000 ERG, creating a gamified approach to long-term holding.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Flexible locking amounts (10-10,000 ERG)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Gamified holding experience
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              NFT rewards for commitment
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-400" /> Time-Based Locking
          </h3>
          <p className="text-gray-300 mb-4">
            Funds remain locked for either two years or until the value of ERG reaches $20, whichever comes first, providing clear exit conditions.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Two-year maximum lock period
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              $20 ERG price trigger
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Predictable exit conditions
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-400" /> NFT Rewards
          </h3>
          <p className="text-gray-300 mb-4">
            Users receive unique NFTs as rewards for their commitment to long-term holding, creating additional value and collectible incentives.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Unique NFT collectibles
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Proof of commitment
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Additional value creation
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" /> Game-Theoretic Design
          </h3>
          <p className="text-gray-300 mb-4">
            Incorporates game theory principles to create incentives that align user behavior with long-term ecosystem health and stability.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Behavioral economics
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Sustainable holding incentives
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Ecosystem stability
            </li>
          </ul>
        </div>
      </div>

      {/* Performance and Issues Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-400" /> Performance and Benefits
        </h2>
        <p className="text-gray-300 mb-4">
          HodlBox has successfully created a sustainable mechanism for encouraging long-term holding in the Ergo ecosystem, providing clear incentives while maintaining user control over their assets.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Strengths
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Clear exit conditions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                NFT reward system
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Flexible locking amounts
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" /> Considerations
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                Opportunity cost of locked funds
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                Market volatility impact
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                Price target dependency
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
          HodlBox addresses the common problem of impulsive selling in cryptocurrency markets by creating a structured approach to long-term holding. The platform combines financial incentives with gamification elements to encourage sustainable investment behavior.
        </p>
        <p className="text-gray-300 mb-4">
          The treasure chest concept provides users with a tangible representation of their commitment, while the NFT rewards system creates additional value beyond the potential appreciation of their locked ERG.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Traditional Holding</h4>
            <p className="text-gray-300 text-sm">Users hold ERG without structured incentives, prone to emotional selling</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">HodlBox Approach</h4>
            <p className="text-gray-300 text-sm">Structured locking with clear rewards and exit conditions</p>
          </div>
        </div>
      </div>

      {/* User Interface Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> User Interface and Operations
        </h2>
        <p className="text-gray-300 mb-4">
          The platform provides an intuitive interface for purchasing treasure chests, monitoring lock periods, and claiming NFT rewards. Users can easily track their commitments and understand their exit conditions.
        </p>
        <p className="text-gray-300 mb-4">
          The interface simplifies the complex game-theoretic elements, allowing users to focus on their investment strategy without needing to understand the underlying mechanisms.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Purchasing Chests</h4>
            <p className="text-gray-300 text-sm">Select amount and lock period, receive NFT immediately</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Monitoring Locks</h4>
            <p className="text-gray-300 text-sm">Track remaining time and price conditions for unlocking</p>
          </div>
        </div>
      </div>

      {/* Implementation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-blue-400" /> Implementation and Future Plans
        </h2>
        <p className="text-gray-300 mb-4">
          HodlBox is currently operational on the Ergo blockchain, utilizing smart contracts to manage treasure chest purchases, lock periods, and NFT distribution. The platform continues to evolve with new features and improved user experience.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Current Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Treasure chest purchasing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                NFT reward system
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Time and price-based unlocking
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" /> Future Enhancements
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Additional reward mechanisms
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced NFT collections
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community governance features
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
              <Gift className="w-5 h-5 text-purple-400" /> What makes HodlBox different?
            </h3>
            <p className="text-gray-300">
              HodlBox combines financial incentives with gamification through treasure chests and NFT rewards, creating a structured approach to long-term holding that addresses the common problem of impulsive selling in cryptocurrency markets.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-400" /> How long are funds locked?
            </h3>
            <p className="text-gray-300">
              Funds remain locked for either two years or until the value of ERG reaches $20, whichever comes first. This provides clear exit conditions while encouraging long-term holding.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" /> What are the NFT rewards?
            </h3>
            <p className="text-gray-300">
              Users receive unique NFTs as rewards for their commitment to long-term holding. These NFTs serve as proof of commitment and can have additional value as collectibles within the Ergo ecosystem.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Is it safe to lock my ERG?
            </h3>
            <p className="text-gray-300">
              Yes, HodlBox uses smart contracts on the Ergo blockchain to manage the locking mechanism. Users maintain control over their assets, and the exit conditions are clearly defined and automatically enforced.
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
                <a href="https://hodlbox.io/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">HodlBox.io</a>
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
            <h3 className="text-xl font-bold mb-3">Platform Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-orange-400" />
                Treasure Chest System
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-orange-400" />
                Time-Based Locking
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-400" />
                NFT Rewards
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-400" />
                Game-Theoretic Design
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "HodlBox addresses the common problem of impulsive selling in cryptocurrency markets by creating a structured approach to long-term holding with clear incentives and rewards."
        </blockquote>
      </div>
    </>
  );
} 