"use client";

import React from "react";
import {
  Wrench,
  Shield,
  Layers,
  BookOpen,
  ExternalLink,
  ChevronRight,
  Star,
  Cpu,
  Users,
  List,
  Puzzle,
  Code,
  CheckCircle,
  Brain,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function CruxFinancePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Crux Finance
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Feature-rich DeFi portfolio management and trading platform for the Ergo ecosystem. Track, trade, analyze, and manage your assets in one place with advanced tools and seamless UX.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/tooling"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Tooling
          </Link>
          <a
            href="https://cruxfinance.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit Crux Finance
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-cyan-400" /> What is Crux Finance?
        </h2>
        <p className="text-gray-300">
          Crux Finance is a comprehensive DeFi platform on Ergo, offering portfolio management, advanced trading, accounting, and notification tools. It enables users to track, analyze, and interact with DeFi protocols, set alerts, and generate tax reports—all in a single, user-friendly interface.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Secure & Private
          </h3>
          <p className="text-gray-300 mb-4">
            Crux Finance is built with a focus on user privacy and security. All portfolio and trading data is handled non-custodially, and users retain full control over their assets.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Non-custodial asset management
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Secure wallet integration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Privacy-first design
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <List className="w-5 h-5 text-yellow-400" /> Portfolio & Analytics
          </h3>
          <p className="text-gray-300 mb-4">
            Track your entire DeFi portfolio, monitor P&L, and visualize trades with advanced charting tools. Access historical data, follow whale movements, and generate custom reports.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Real-time portfolio tracking
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Financial charts & analytics
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Custom reporting & CSV export
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Puzzle className="w-5 h-5 text-pink-400" /> DeFi Interactions
          </h3>
          <p className="text-gray-300 mb-4">
            Interact with major Ergo DeFi protocols directly from the Crux interface: trade, lend, borrow, provide liquidity, and more—all in one place.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              AMM/Orderbook trading
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Lending, borrowing, yield farming
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Mint/redeem stablecoins
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" /> Automation & Alerts
          </h3>
          <p className="text-gray-300 mb-4">
            Set up custom notifications for trades, staking, liquidity, NFT sales, and more. Automate your DeFi strategies and never miss a critical event.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Customizable notifications
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Automated trading bots
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Yield optimization tools
            </li>
          </ul>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6 text-cyan-400" /> How Crux Finance Works
        </h2>
        <p className="text-gray-300 mb-4">
          Connect your wallet, import your Ergo addresses, and instantly see your portfolio. Use the dashboard to trade, lend, borrow, or provide liquidity. Set up alerts for any on-chain event, and generate tax reports with a single click. All actions are performed non-custodially and securely.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-cyan-400 mb-2">Portfolio Management</h4>
            <p className="text-gray-300 text-sm">Track balances, P&L, and historical trades. Visualize your DeFi activity and follow ecosystem trends.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-cyan-400 mb-2">DeFi Interactions</h4>
            <p className="text-gray-300 text-sm">Trade, lend, borrow, and farm directly from the Crux dashboard. All major protocols supported.</p>
          </div>
        </div>
      </div>

      {/* Developer & User Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Resources & Documentation
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://cruxfinance.io/" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-cyan-400 mb-2">Crux Finance Website</h4>
            <p className="text-gray-300 text-sm">Official platform for portfolio management and DeFi tools.</p>
          </a>
          <a href="https://docs.cruxfinance.io/" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-cyan-400 mb-2">Documentation</h4>
            <p className="text-gray-300 text-sm">Platform features, guides, and API reference.</p>
          </a>
          <a href="https://github.com/cruxfinance" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-cyan-400 mb-2">Source Code</h4>
            <p className="text-gray-300 text-sm">Open-source codebase for Crux Finance.</p>
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" /> Who can use Crux Finance?
            </h3>
            <p className="text-gray-300 mb-4">
              Anyone with an Ergo wallet can use Crux Finance. The platform is open to all and requires no KYC.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" /> What assets are supported?
            </h3>
            <p className="text-gray-300 mb-4">
              Crux Finance supports all major Ergo-native tokens, stablecoins, and NFTs. See the documentation for the latest list.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <List className="w-5 h-5 text-yellow-400" /> How do I generate tax reports?
            </h3>
            <p className="text-gray-300 mb-4">
              Add your wallet addresses, and Crux will automatically generate CSV reports compatible with popular tax platforms.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Puzzle className="w-5 h-5 text-pink-400" /> Is Crux Finance open source?
            </h3>
            <p className="text-gray-300 mb-4">
              Yes, the platform is open source. You can review and contribute to the codebase on GitHub.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-cyan-400/10 to-green-400/10 border border-cyan-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Crux Finance brings the full power of DeFi and portfolio management to Ergo users—secure, transparent, and all in one place."
        </blockquote>
      </div>
    </>
  );
} 