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
  History
} from "lucide-react";
import Link from "next/link";

export default function HodlCoinPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          HodlCoin
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A high-risk, high-reward game-theoretic protocol where users can deposit ERG into a common reserve (HODLing) or withdraw by burning HODL tokens with penalties, creating incentives for long-term holding and discouraging impulsive selling.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/ecosystem/financial/degenerate-finance"
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
          <Brain className="w-6 h-6 text-orange-400" /> What is HodlCoin?
        </h2>
        <p className="text-gray-300">
          HodlCoin is a high-risk, high-reward game-theoretic protocol originally conceived by one of the designers of Djed (SigmaUSD). The game encourages players to "HODL" their ERGs through a common reserve system with penalty mechanisms for early withdrawals, creating a sustainable ecosystem that rewards long-term commitment.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Flame className="w-5 h-5 text-green-400" /> High-Risk, High-Reward
          </h3>
          <p className="text-gray-300 mb-4">
            A game-theoretic protocol that creates intense incentives for long-term holding while providing significant rewards for those who commit to the ecosystem.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Extreme risk-reward dynamics
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Penalty-based withdrawal system
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Community-driven rewards
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-400" /> Common Reserve System
          </h3>
          <p className="text-gray-300 mb-4">
            Users deposit ERG into a shared reserve pool, creating a collective holding mechanism that benefits all participants through fee distribution.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Shared ERG reserve pool
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Collective benefit system
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent fee distribution
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-purple-400" /> Penalty Mechanism
          </h3>
          <p className="text-gray-300 mb-4">
            Early withdrawals incur penalty fees (3% or 10%) that are added to the common reserve, creating strong disincentives for impulsive selling.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              3% or 10% penalty fees
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Fees benefit remaining holders
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Anti-impulse selling design
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" /> Game-Theoretic Design
          </h3>
          <p className="text-gray-300 mb-4">
            Incorporates advanced game theory principles to create optimal incentives for long-term holding while maintaining the excitement of high-risk, high-reward dynamics.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Nash equilibrium incentives
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Behavioral economics
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Strategic holding rewards
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
          HodlCoin represents one of the most extreme examples of degenerate finance, offering potentially massive rewards for those willing to take significant risks while creating a unique social experiment in cryptocurrency holding behavior.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Potential Rewards
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Massive gains for long-term holders
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Fee accumulation from early withdrawals
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community-driven value creation
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Extreme Risks
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Potential total loss of funds
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                High penalty fees for withdrawals
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Extreme market volatility exposure
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
          HodlCoin addresses the fundamental problem of impulsive selling in cryptocurrency markets through an extreme but effective mechanism. The protocol creates a "prisoner's dilemma" scenario where the optimal strategy for all participants is to hold long-term.
        </p>
        <p className="text-gray-300 mb-4">
          The game theory behind HodlCoin ensures that early withdrawals not only incur penalties but also benefit the remaining holders, creating a self-reinforcing cycle of long-term commitment.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Traditional Holding</h4>
            <p className="text-gray-300 text-sm">Users hold ERG individually, prone to emotional selling during volatility</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">HodlCoin Approach</h4>
            <p className="text-gray-300 text-sm">Collective holding with penalties and rewards for commitment</p>
          </div>
        </div>
      </div>

      {/* User Interface Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> User Interface and Operations
        </h2>
        <p className="text-gray-300 mb-4">
          The platform provides a simple interface for depositing ERG into the common reserve and withdrawing with penalties. Users can track their HODL tokens and monitor the collective reserve value.
        </p>
        <p className="text-gray-300 mb-4">
          The interface emphasizes the high-risk nature of the protocol while providing clear information about penalty structures and potential rewards.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">HODLing (Depositing)</h4>
            <p className="text-gray-300 text-sm">Deposit ERG into common reserve, receive HODL tokens</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Un-HODLing (Withdrawing)</h4>
            <p className="text-gray-300 text-sm">Burn HODL tokens to withdraw ERG with penalty fees</p>
          </div>
        </div>
      </div>

      {/* Implementation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-blue-400" /> Implementation and Future Plans
        </h2>
        <p className="text-gray-300 mb-4">
          HodlCoin is implemented as an experimental protocol on the Ergo blockchain, utilizing smart contracts to manage the common reserve, penalty mechanisms, and token distribution. The protocol serves as a social experiment in cryptocurrency holding behavior.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Current Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ERG deposit into common reserve
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                HODL token distribution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Penalty-based withdrawal system
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" /> Experimental Nature
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Social experiment in DeFi
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Behavioral economics research
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Extreme risk-reward dynamics
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
              <Flame className="w-5 h-5 text-purple-400" /> What makes HodlCoin different?
            </h3>
            <p className="text-gray-300">
              HodlCoin is an extreme example of degenerate finance that uses game theory to create intense incentives for long-term holding. The penalty mechanism for early withdrawals creates a unique social experiment in cryptocurrency holding behavior.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> How risky is HodlCoin?
            </h3>
            <p className="text-gray-300">
              HodlCoin represents one of the highest-risk protocols in DeFi. Users can potentially lose all their funds, and early withdrawals incur significant penalty fees (3% or 10%). This is an experimental protocol designed for those comfortable with extreme risk.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Coins className="w-5 h-5 text-yellow-400" /> How do the penalties work?
            </h3>
            <p className="text-gray-300">
              When users withdraw early by burning their HODL tokens, they incur penalty fees (3% or 10%) that are added to the common reserve. These fees benefit the remaining holders, creating a disincentive for impulsive selling.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Is this a legitimate protocol?
            </h3>
            <p className="text-gray-300">
              HodlCoin is an experimental protocol designed by one of the creators of Djed (SigmaUSD). While it's a legitimate implementation, it's designed as a social experiment in extreme DeFi and should be approached with extreme caution due to its high-risk nature.
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
                <a href="https://hodlbox.io/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">HodlBox Platform</a>
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
                <Flame className="w-4 h-4 text-orange-400" />
                High-Risk, High-Reward
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-orange-400" />
                Common Reserve System
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                Penalty Mechanism
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
          "HodlCoin represents the extreme end of degenerate finance, creating a unique social experiment in cryptocurrency holding behavior through game theory and penalty mechanisms."
        </blockquote>
      </div>
    </>
  );
} 