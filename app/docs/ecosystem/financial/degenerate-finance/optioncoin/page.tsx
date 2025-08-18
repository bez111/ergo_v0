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
  Activity
} from "lucide-react";
import Link from "next/link";

export default function OptionCoinPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          OptionCoin
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A degenerate finance protocol that creates perpetual options on ERG price movements, allowing users to speculate on both upward and downward price trends with leveraged exposure and automated risk management.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/degenerate-finance"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Degenerate Finance
          </Link>
          <a
            href="https://optioncoin.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit OptionCoin
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is OptionCoin?
        </h2>
        <p className="text-gray-300">
          OptionCoin is a degenerate finance protocol that creates perpetual options on ERG price movements. The protocol allows users to speculate on both upward and downward price trends with leveraged exposure, automated risk management, and continuous market making through sophisticated smart contracts.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-400" /> Perpetual Options
          </h3>
          <p className="text-gray-300 mb-4">
            Creates synthetic perpetual options on ERG price movements, allowing users to gain leveraged exposure to both upward and downward price trends without expiration dates.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No expiration dates
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Leveraged price exposure
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Bidirectional speculation
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" /> Automated Risk Management
          </h3>
          <p className="text-gray-300 mb-4">
            Sophisticated smart contracts automatically manage risk through dynamic rebalancing, liquidation mechanisms, and continuous market making to maintain protocol stability.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Dynamic rebalancing
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Liquidation mechanisms
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Continuous market making
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <ArrowUpDown className="w-5 h-5 text-purple-400" /> Bidirectional Trading
          </h3>
          <p className="text-gray-300 mb-4">
            Users can speculate on both upward (long) and downward (short) price movements, providing opportunities to profit from any market direction with leveraged exposure.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Long and short positions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Market-neutral strategies
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Hedging capabilities
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" /> Smart Contract Innovation
          </h3>
          <p className="text-gray-300 mb-4">
            Leverages advanced ErgoScript smart contracts to create complex financial instruments with automated execution, transparent pricing, and decentralized governance.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Advanced ErgoScript contracts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent pricing
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Decentralized governance
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
          OptionCoin represents a sophisticated approach to degenerate finance, offering complex derivative instruments with high potential rewards but also significant risks. The protocol's automated risk management helps mitigate some risks, but users should understand the inherent volatility of leveraged options trading.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Potential Rewards
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Leveraged gains on price movements
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Profit from any market direction
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Advanced hedging strategies
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Significant Risks
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Leverage amplifies losses
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Complex derivative instruments
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Potential liquidation events
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
          OptionCoin addresses the need for sophisticated derivative instruments in the Ergo ecosystem. The protocol creates synthetic perpetual options that track ERG price movements, allowing users to gain leveraged exposure without the complexity of traditional options trading.
        </p>
        <p className="text-gray-300 mb-4">
          The smart contracts automatically manage risk through dynamic rebalancing and liquidation mechanisms, while continuous market making ensures liquidity and fair pricing for all participants.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Traditional Options</h4>
            <p className="text-gray-300 text-sm">Complex instruments with expiration dates, limited liquidity, and manual risk management</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">OptionCoin Approach</h4>
            <p className="text-gray-300 text-sm">Perpetual synthetic options with automated risk management and continuous liquidity</p>
          </div>
        </div>
      </div>

      {/* User Interface Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> User Interface and Operations
        </h2>
        <p className="text-gray-300 mb-4">
          The platform provides an intuitive interface for trading perpetual options on ERG price movements. Users can easily open long or short positions, monitor their exposure, and manage risk through automated mechanisms.
        </p>
        <p className="text-gray-300 mb-4">
          The interface displays real-time pricing, position information, and risk metrics to help users make informed trading decisions while maintaining transparency about the complex underlying mechanisms.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Opening Positions</h4>
            <p className="text-gray-300 text-sm">Select long or short exposure, set leverage, and execute trades with automated risk management</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Risk Management</h4>
            <p className="text-gray-300 text-sm">Monitor position health, liquidation levels, and automated rebalancing mechanisms</p>
          </div>
        </div>
      </div>

      {/* Implementation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-blue-400" /> Implementation and Future Plans
        </h2>
        <p className="text-gray-300 mb-4">
          OptionCoin is implemented using advanced ErgoScript smart contracts that create synthetic perpetual options. The protocol features automated risk management, continuous market making, and transparent pricing mechanisms to ensure fair and efficient trading.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Current Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Perpetual options on ERG
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automated risk management
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Bidirectional trading
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
                Dynamic rebalancing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Liquidation mechanisms
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Continuous market making
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
              <BarChart3 className="w-5 h-5 text-purple-400" /> What are perpetual options?
            </h3>
            <p className="text-gray-300">
              Perpetual options are synthetic derivative instruments that track the price of an underlying asset (ERG) without expiration dates. They provide leveraged exposure to price movements in either direction, allowing users to profit from both upward and downward trends.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> How risky is OptionCoin?
            </h3>
            <p className="text-gray-300">
              OptionCoin involves significant risk due to the leveraged nature of perpetual options. While the protocol includes automated risk management, users can still experience substantial losses, especially during volatile market conditions. Understanding the underlying mechanics is crucial.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5 text-yellow-400" /> How does risk management work?
            </h3>
            <p className="text-gray-300">
              The protocol uses automated risk management through dynamic rebalancing, liquidation mechanisms, and continuous market making. Smart contracts automatically adjust positions to maintain protocol stability and prevent excessive losses.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Is this a legitimate protocol?
            </h3>
            <p className="text-gray-300">
              OptionCoin is a legitimate degenerate finance protocol built on Ergo's blockchain using advanced smart contracts. However, it's designed for experienced traders who understand the risks of leveraged derivative trading and should be approached with caution.
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
                <a href="https://optioncoin.io/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">OptionCoin Platform</a>
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
                <BarChart3 className="w-4 h-4 text-orange-400" />
                Perpetual Options
              </li>
              <li className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-orange-400" />
                Automated Risk Management
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-orange-400" />
                Bidirectional Trading
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-400" />
                Smart Contract Innovation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "OptionCoin represents the cutting edge of degenerate finance, creating sophisticated derivative instruments that provide leveraged exposure to ERG price movements with automated risk management."
        </blockquote>
      </div>
    </>
  );
} 