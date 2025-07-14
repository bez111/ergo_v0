"use client";

import React from "react";
import {
  TrendingUp,
  ExternalLink,
  GitBranch,
  Layers,
  Zap,
  Shield,
  Repeat,
  Lock,
  Database,
  Terminal,
  Code2,
  ChevronRight,
  Star,
  Cpu,
  List,
  BookOpen,
  Users,
  Wallet,
  Clock,
  Key,
  ArrowLeftRight,
  DollarSign
} from "lucide-react";
import Link from "next/link";

export default function ArbitPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Arbit
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Arbit is a simple and intuitive arbitrage platform designed for decentralized trading on the Ergo and Cardano blockchains. It aims to simplify the arbitrage process, enabling users to identify and execute profitable swaps with minimal setup.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/ecosystem/tooling"
            className="inline-flex items-center px-6 py-3 bg-indigo-400 rounded-xl font-semibold text-black hover:bg-indigo-500 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Tooling
          </Link>
          <a
            href="https://github.com/ConnecMent/arbit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Arbit on GitHub
          </a>
          <a
            href="https://github.com/ConnecMent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-purple-500 rounded-xl font-semibold text-white hover:bg-purple-600 transition-transform hover:scale-105"
          >
            <GitBranch className="w-5 h-5 mr-2" /> ConnecMent Organization
          </a>
        </div>
      </div>

      {/* WIP Notice */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6 text-yellow-400" /> Work in Progress
        </h2>
        <p className="text-gray-300">
          This project is a work in progress and is not yet ready for production use. The platform is being actively developed by the ConnecMent team.
        </p>
      </div>

      {/* Overview Section */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-indigo-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-4">
          Arbit streamlines the process of arbitrage trading by providing a clean and simple interface. The platform identifies opportunities where a user can buy and sell tokens across different decentralized exchanges to make a profit.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-indigo-400 mb-2">Supported Tokens</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
              <li>ERG (Ergo)</li>
              <li>ADA (Cardano)</li>
              <li>RSN (Rosen)</li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-indigo-400 mb-2">Supported Exchanges</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
              <li>Ergo Dex</li>
              <li>Splash</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What is an Arbit Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">What is an Arbit?</h2>
        <p className="text-gray-300 mb-4">
          An Arbit is a series of swaps that generate profit. For example:
        </p>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Sell 100 X tokens on Exchange A for $100.</li>
          <li>Buy 105 Y tokens on Exchange B for the same $100.</li>
          <li>Profit from the additional 5 Y tokens.</li>
        </ol>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-400" /> Simplicity and Usability
          </h3>
          <p className="text-gray-300 mb-4">
            Designed for users with basic blockchain knowledge. Clear interface with no distractions or unnecessary complexity.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-purple-400" /> Fixed Arbitrage Strategies
          </h3>
          <p className="text-gray-300 mb-4">
            Supports predefined arbitrage paths like ERG ↔ ADA and RSN ↔ ADA with fixed USD values ($50 and $100).
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-indigo-400" /> Profit Calculation
          </h3>
          <p className="text-gray-300 mb-4">
            Profitability of swaps displayed prominently with calculations based on fixed USD values to avoid complexity.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-purple-400" /> Multi-Chain Support
          </h3>
          <p className="text-gray-300 mb-4">
            Supports both Ergo and Cardano blockchains with Rosen Bridge integration for cross-chain arbitrage.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-400" /> Predefined Strategies
          </h3>
          <p className="text-gray-300 mb-4">
            Core arbitrage logic implemented in src/arbitrategy.ts with predefined strategies for supported tokens and providers.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" /> Provider Integrations
          </h3>
          <p className="text-gray-300 mb-4">
            Integrates with Ergo Dex SDK and Splash API for order book data and liquidity calculations.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-indigo-400" /> How It Works
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-indigo-400 mb-2">Arbitrage Strategy Execution</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
              <li>Predefined paths calculate profitability based on current market conditions</li>
              <li>Fixed token values ($50 and $100) are used for calculations</li>
              <li>Both direct and reverse swap paths are considered</li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-indigo-400 mb-2">Supported Providers</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
              <li>Ergo Dex: Facilitates ERG and ADA swaps</li>
              <li>Splash: Enables swapping of RSN and ADA tokens</li>
              <li>Rosen Bridge: Cross-chain asset bridging</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Arbitrage Strategies Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ArrowLeftRight className="w-6 h-6 text-purple-400" /> Arbitrage Strategies
        </h2>
        <div className="space-y-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">ERG ↔ ADA Arbitrage</h4>
            <p className="text-gray-300 text-sm">
              Leverages Ergo Dex and Splash to identify profitable swaps between ERG and ADA. Calculations consider both direct and reverse swap paths for maximum opportunities.
            </p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">RSN ↔ ADA Arbitrage</h4>
            <p className="text-gray-300 text-sm">
              Utilizes Ergo Dex and Splash for swaps between RSN and ADA tokens. Similar profit calculation methods as the ERG ↔ ADA strategy.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Details Section */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code2 className="w-6 h-6 text-indigo-400" /> Technical Details
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-indigo-400 mb-2">Core Arbitrage Logic</h4>
            <p className="text-gray-300 text-sm">
              The core logic for arbitrage is implemented in src/arbitrategy.ts. It defines a set of predefined strategies for swapping between supported tokens and providers.
            </p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-indigo-400 mb-2">Provider Integrations</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
              <li>Ergo Dex (src/providers/ergodex.ts): Interacts with Ergo Dex SDK</li>
              <li>Splash (src/providers/splash.ts): Uses Splash API for order book data</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Deployment Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-purple-400" /> Deployment
        </h2>
        <div className="space-y-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Local Setup</h4>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2 text-sm">
              <li>Clone the Repository: <code className="bg-neutral-700 px-2 py-1 rounded">git clone https://github.com/ConnecMent/arbit.git</code></li>
              <li>Set Up Environment Variables: Create a .env file with SPLASH_API_URL and ERGO_EXPLORER_API_URL</li>
              <li>Install dependencies: <code className="bg-neutral-700 px-2 py-1 rounded">pnpm install</code></li>
              <li>Run development server: <code className="bg-neutral-700 px-2 py-1 rounded">pnpm run dev</code></li>
            </ol>
          </div>
        </div>
      </div>

      {/* Usage Guide Section */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-indigo-400" /> Usage Guide
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Prepare Tokens: Ensure you have supported tokens (ERG, ADA, RSN) on Ergo and Cardano chains.</li>
          <li>Use Rosen Bridge: Bridge assets if necessary for cross-chain arbitrage.</li>
          <li>Visit the App: Open the application and review the displayed arbitrage opportunities.</li>
          <li>Execute a Swap: If a profitable Arbit is available, execute the swap by following the on-screen instructions.</li>
        </ol>
      </div>

      {/* Team Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-400" /> Team & Contributing
        </h2>
        <p className="text-gray-300 mb-4">
          The project is maintained by ConnecMent. Contributions are welcome via pull requests.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Mentors</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
              <li>@mkermani144</li>
              <li>@fatemeh-ra</li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Mentee</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
              <li>@SeyedMojtaba1</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mt-4 text-sm">
          Special thanks to @zargarzadehm for Ergo Dex SDK insights.
        </p>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ExternalLink className="w-6 h-6 text-indigo-400" /> Resources & Documentation
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-indigo-400" />
            <a href="https://github.com/ConnecMent/arbit" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">Arbit GitHub Repository</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-indigo-400" />
            <a href="https://github.com/ConnecMent" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">ConnecMent Organization</a>
          </li>
        </ul>
      </div>
    </>
  );
} 