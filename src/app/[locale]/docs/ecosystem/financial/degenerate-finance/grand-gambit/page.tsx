"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

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
  Trophy,
  TreePine,
  Sprout,
  Leaf,
  Wheat,
  Gamepad2,
  Sword
} from "lucide-react";
import Link from "next/link";

export default function GrandGambitPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Grand Gambit
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A degenerate finance protocol that creates a strategic chess-based gambling mechanism for ERG tokens, where users can bet on game outcomes with complex risk-reward dynamics and automated settlement.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/degenerate-finance"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Degenerate Finance
          </Link>
          <a
            href="https://grandgambit.ergo.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit Grand Gambit
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is Grand Gambit?
        </h2>
        <p className="text-gray-300">
          Grand Gambit is a degenerate finance protocol that creates a strategic chess-based gambling mechanism for ERG tokens. The protocol allows users to bet on chess game outcomes with complex risk-reward dynamics, automated settlement, and provably fair results through smart contracts.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                         <Gamepad2 className="w-5 h-5 text-green-400" /> Chess-Based Gambling
          </h3>
          <p className="text-gray-300 mb-4">
            Strategic gambling mechanism based on chess game outcomes, where users can bet on various aspects of chess games including wins, losses, draws, and specific moves.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Game outcome betting
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Move-specific wagers
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Strategic complexity
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" /> Complex Risk-Reward
          </h3>
          <p className="text-gray-300 mb-4">
            Sophisticated betting system with multiple risk levels, varying odds, and complex payout structures that reward strategic thinking and risk assessment.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Multiple risk levels
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Varying odds
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Strategic payouts
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Crown className="w-5 h-5 text-purple-400" /> Provably Fair Games
          </h3>
          <p className="text-gray-300 mb-4">
            Uses blockchain-based verification to ensure provably fair chess game outcomes that cannot be manipulated or predicted by any party, including the protocol operators.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Blockchain verification
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
            <Zap className="w-5 h-5 text-yellow-400" /> Automated Settlement
          </h3>
          <p className="text-gray-300 mb-4">
            Smart contracts automatically handle bet placement, game execution, result determination, and prize distribution without human intervention, ensuring instant and trustless payouts.
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
      </div>

      {/* Performance and Issues Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-400" /> Performance and Risks
        </h2>
        <p className="text-gray-300 mb-4">
          Grand Gambit represents a sophisticated approach to degenerate finance, combining strategic gaming with complex gambling mechanics. While the protocol provides intellectual stimulation and strategic depth, users should understand the risks of complex betting systems and potential for significant losses.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Potential Rewards
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Strategic betting rewards
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Intellectual stimulation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Complex payout structures
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Gambling Risks
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Complex risk assessment
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Potential for significant losses
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Strategic decision pressure
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
          Grand Gambit addresses the demand for intellectually stimulating gambling experiences in the Ergo ecosystem. The protocol creates a chess-based gambling system where users can bet on various aspects of chess games with complex risk-reward dynamics.
        </p>
        <p className="text-gray-300 mb-4">
          The smart contracts handle all gambling logic automatically, including bet placement, game execution, result determination, and prize distribution, ensuring a completely trustless and intellectually engaging experience.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Traditional Gambling</h4>
            <p className="text-gray-300 text-sm">Simple odds-based betting with limited strategic depth</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Grand Gambit Approach</h4>
            <p className="text-gray-300 text-sm">Strategic chess-based gambling with complex risk-reward dynamics</p>
          </div>
        </div>
      </div>

      {/* User Interface Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> User Interface and Operations
        </h2>
        <p className="text-gray-300 mb-4">
          The platform provides an intuitive interface for participating in chess-based gambling. Users can easily place bets on various game outcomes, monitor game progress, and track their betting performance with real-time updates.
        </p>
        <p className="text-gray-300 mb-4">
          The interface displays current game states, betting odds, risk levels, and payout structures to help users make informed strategic decisions while maintaining transparency about the complex gambling mechanics.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Betting Interface</h4>
            <p className="text-gray-300 text-sm">Place strategic bets, monitor odds, and track game progress</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Game Tracking</h4>
            <p className="text-gray-300 text-sm">Monitor chess games, betting performance, and payout calculations</p>
          </div>
        </div>
      </div>

      {/* Implementation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-blue-400" /> Implementation and Future Plans
        </h2>
        <p className="text-gray-300 mb-4">
          Grand Gambit is implemented using advanced ErgoScript smart contracts that handle all gambling logic automatically. The protocol features complex risk-reward dynamics, provably fair game outcomes, and automated settlement to ensure a trustworthy and intellectually stimulating experience.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Current Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Chess-based gambling
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Complex risk-reward dynamics
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
                Multiple betting types
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Strategic complexity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Intellectual stimulation
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
                             <Gamepad2 className="w-5 h-5 text-purple-400" /> How does the chess gambling work?
            </h3>
            <p className="text-gray-300">
              Users can bet on various aspects of chess games including wins, losses, draws, specific moves, and game outcomes. The protocol uses blockchain-based verification to ensure provably fair results that cannot be predicted or manipulated.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> What are the risks?
            </h3>
            <p className="text-gray-300">
              Grand Gambit involves complex risk assessment and strategic decision-making. Users can experience significant losses due to poor strategic choices, market volatility, and the inherent complexity of the betting system.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-yellow-400" /> How complex is the risk-reward system?
            </h3>
            <p className="text-gray-300">
              The protocol features sophisticated betting mechanics with multiple risk levels, varying odds, and complex payout structures. This requires strategic thinking and careful risk assessment from participants.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Is this a legitimate protocol?
            </h3>
            <p className="text-gray-300">
              Grand Gambit is a legitimate degenerate finance protocol built on Ergo's blockchain using advanced smart contracts. It provides an intellectually stimulating gambling experience with complex risk-reward dynamics, but should be approached with caution due to the inherent risks.
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
                <a href="https://grandgambit.ergo.io/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Grand Gambit Platform</a>
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
                                 <Gamepad2 className="w-4 h-4 text-orange-400" />
                 Chess-Based Gambling
              </li>
              <li className="flex items-center gap-2">
                <Target className="w-4 h-4 text-orange-400" />
                Complex Risk-Reward
              </li>
              <li className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-orange-400" />
                Provably Fair Games
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-400" />
                Automated Settlement
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Grand Gambit represents the pinnacle of degenerate finance, combining strategic chess gameplay with complex gambling mechanics to create an intellectually stimulating and financially risky experience."
        </blockquote>
      </div>
    </>
  );
} 