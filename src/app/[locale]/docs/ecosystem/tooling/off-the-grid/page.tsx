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
  Grid3X3,
  Bot,
  Network,
  ArrowLeftRight,
  Smartphone,
  Wifi,
  WifiOff
} from "lucide-react";
import Link from "next/link";

export default function OffTheGridPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Off the Grid
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A decentralized application (dApp) that builds on the grid trading contract proposed by kushti. It includes an execution bot/batcher for automating order matching without user interaction.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/tooling"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-black hover:bg-blue-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Tooling
          </Link>
          <a
            href="https://github.com/Telefragged/off-the-grid/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> GitHub Repository
          </a>
          <Link
            href="/docs/ecosystem/tooling/tutorial"
            className="inline-flex items-center px-6 py-3 bg-green-500 rounded-xl font-semibold text-black hover:bg-green-600 transition-transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5 mr-2" /> Getting Started Guide
          </Link>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-blue-400" /> What is Off the Grid?
        </h2>
        <p className="text-gray-300">
          Off the Grid is a decentralized application (dApp) that implements grid trading on the Ergo blockchain. It builds on the grid trading contract proposed by kushti and includes an execution bot/batcher for automating order matching without user interaction, enabling profitable trading strategies through automated market making.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Secure Contract Design
          </h3>
          <p className="text-gray-300 mb-4">
            Utilizes a contract that permits spending only if orders are correctly filled or with the order owner's signature. This contract can manage multiple orders simultaneously with enhanced security.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Conditional spending logic
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Multi-order management
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Owner signature verification
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-400" /> Automated Execution
          </h3>
          <p className="text-gray-300 mb-4">
            Employs off-chain bots/batchers to monitor grid orders and match them against other liquidity sources, providing automated trading without user interaction.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Off-chain monitoring
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Automated matching
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No user intervention
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Network className="w-5 h-5 text-purple-400" /> Multi-Source Liquidity
          </h3>
          <p className="text-gray-300 mb-4">
            Currently matches orders against Spectrum Automated Market Makers (AMMs) but can be extended to other sources like the SigUSD bank for enhanced liquidity options.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Spectrum AMM integration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Extensible architecture
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Multiple liquidity sources
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-yellow-400" /> Profit Optimization
          </h3>
          <p className="text-gray-300 mb-4">
            Supports trading of ERG against any token with profits accumulated in ERGs. Grid orders profit from repeated execution while bot operators benefit from arbitrage opportunities.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              ERG-based profits
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Repeated execution profits
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Arbitrage opportunities
            </li>
          </ul>
        </div>
      </div>

      {/* Concept and Functionality Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> Concept and Functionality
        </h2>
        <p className="text-gray-300 mb-4">
          Grid trading is a strategy that places buy and sell orders at regular price intervals above and below a current market price. This approach allows traders to profit from market volatility by automatically buying low and selling high within a defined price range.
        </p>
        <p className="text-gray-300 mb-4">
          Off the Grid implements this concept on Ergo's blockchain using smart contracts and automated bots, making it the first decentralized grid trading solution that's automatically compatible with existing DEXes like Spectrum LP pools and babel fees.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-blue-400 mb-2">Traditional Grid Trading</h4>
            <p className="text-gray-300 text-sm">Centralized exchanges with limited transparency and control</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-blue-400 mb-2">Decentralized Grid Trading</h4>
            <p className="text-gray-300 text-sm">Transparent, automated grid trading on blockchain with full control</p>
          </div>
        </div>
      </div>

      {/* Technical Implementation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Technical Implementation
        </h2>
        <p className="text-gray-300 mb-4">
          The system uses advanced ErgoScript smart contracts that implement conditional spending logic. The contract only permits spending if orders are correctly filled or with the order owner's signature, ensuring security and preventing unauthorized transactions.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Smart Contract Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Conditional spending logic
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multi-order management
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Signature verification
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Bot className="w-5 h-5 text-orange-400" /> Bot Architecture
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Off-chain monitoring
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automated matching
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multi-source integration
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits and Use Cases Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-400" /> Benefits and Use Cases
        </h2>
        <p className="text-gray-300 mb-4">
          Grid trading is an excellent way to make profits from volatility, and many centralized exchanges offer it. Off the Grid brings this capability to the decentralized world with enhanced transparency and control.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Trading Benefits
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Profit from volatility
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automated execution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced emotional trading
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" /> Market Making
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Provide liquidity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Earn trading fees
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Arbitrage opportunities
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
              <Grid3X3 className="w-5 h-5 text-purple-400" /> How does grid trading work?
            </h3>
            <p className="text-gray-300">
              Grid trading places buy and sell orders at regular price intervals above and below the current market price. When the price moves up, sell orders are executed for profit. When it moves down, buy orders are executed to accumulate assets at lower prices.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Bot className="w-5 h-5 text-blue-400" /> What role do bots play?
            </h3>
            <p className="text-gray-300">
              Bots monitor grid orders and automatically match them against other liquidity sources like Spectrum AMMs. They execute trades without user intervention, ensuring optimal order matching and profit realization.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Is it secure?
            </h3>
            <p className="text-gray-300">
              Yes, the smart contract only permits spending if orders are correctly filled or with the order owner's signature. This ensures that funds cannot be spent without proper authorization or successful order execution.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-400" /> How do I profit?
            </h3>
            <p className="text-gray-300">
              Profits come from the price difference between buy and sell orders in your grid. The bot automatically executes trades when price movements trigger your orders, and profits are accumulated in ERG tokens.
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
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <a href="https://github.com/Telefragged/off-the-grid/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">GitHub Repository</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <a href="https://www.ergoforum.org/t/decentralized-grid-trading-on-ergo/3750" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">ErgoForum Discussion</a>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/docs/ecosystem/tooling/tutorial" className="text-blue-400 hover:text-blue-300">Getting Started Guide</Link>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Documentation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Key Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                Secure Contract Design
              </li>
              <li className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-blue-400" />
                Automated Execution
              </li>
              <li className="flex items-center gap-2">
                <Network className="w-4 h-4 text-blue-400" />
                Multi-Source Liquidity
              </li>
              <li className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-blue-400" />
                Profit Optimization
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "We can do decentralized grid trading on Ergo (which is automatically compatible with existing DEXes, such as Spectrum LP pools and babel fees). Grid trading is a good way to make profits from volatility, and many CEXes offer it."
        </blockquote>
        <p className="text-center text-gray-400 mt-4">— kushti, ErgoForum</p>
      </div>
    </>
  );
} 