"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import {
  Coins,
  Shield,
  Code,
  ExternalLink,
  ChevronRight,
  Lock,
  Cpu,
  Database,
  CheckCircle,
  Zap,
  Users,
  Globe,
  GitBranch,
  Brain,
  GitCommit,
  Network,
  FileText,
  Play,
  BookOpen,
  Atom,
  TrendingUp,
  AlertTriangle,
  Target,
  Banknote,
  BarChart3,
  Settings
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function SigmaOPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          SigmaO
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          SigmaO is an innovative decentralized stablecoin protocol on Ergo, designed to maintain a soft peg to a target asset using algorithmic mechanisms, oracles, and overcollateralization. It aims to provide a robust, censorship-resistant, and transparent stable asset for the Ergo ecosystem.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
          <a
            href="https://sigmao.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit SigmaO
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is SigmaO?
        </h2>
        <p className="text-gray-300">
          SigmaO is a decentralized stablecoin protocol that uses oracles, algorithmic interventions, and overcollateralization to maintain a soft peg to a target asset (e.g., USD or other). It is designed for transparency, resilience, and full on-chain operation.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Banknote className="w-5 h-5 text-green-400" /> Algorithmic Stability
          </h3>
          <p className="text-gray-300 mb-4">
            SigmaO uses algorithmic mechanisms and oracles to maintain its peg, with explicit intervention logic to stabilize the price when needed.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Oracle-driven price feeds
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Algorithmic interventions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent protocol logic
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" /> Soft Pegged
          </h3>
          <p className="text-gray-300 mb-4">
            Maintains a soft peg to a target asset (e.g., USD) using oracle price feeds and protocol incentives, providing a stable medium of exchange for DeFi applications.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Target asset peg (e.g., USD)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Oracle-based pricing
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Incentive-driven stability
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" /> Overcollateralization
          </h3>
          <p className="text-gray-300 mb-4">
            SigmaO incorporates overcollateralization to ensure system stability and protect against market volatility, with all collateral levels visible on-chain.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Prevents undercollateralization
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Visible on-chain collateral
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent collateral management
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-yellow-400" /> Advanced Mechanisms
          </h3>
          <p className="text-gray-300 mb-4">
            Features arbitrage, incentive mechanisms, and anti-draining measures to maintain price stability and prevent system exploitation.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Arbitrage opportunities
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Incentive-driven participation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Anti-draining logic
            </li>
          </ul>
        </div>
      </div>

      {/* Design Overview Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-cyan-400" /> Design Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Banknote className="w-5 h-5 text-green-400" /> Minting Contract
            </h3>
            <p className="text-gray-300 mb-4">
              Allows users to mint SigmaO by depositing collateral at the oracle rate. Redemption and burning are managed by protocol logic.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Network className="w-5 h-5 text-blue-400" /> Liquidity Pool
            </h3>
            <p className="text-gray-300 mb-4">
              Facilitates buying and selling of SigmaO using ERG or other assets. Utilizes AMM logic with oracle-based pricing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" /> Arbitrage Mechanism
            </h3>
            <p className="text-gray-300 mb-4">
              Arbitrageurs can help maintain the peg by exploiting price differences between the protocol and the market, pushing the price towards the target.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-yellow-400" /> Incentive Programs
            </h3>
            <p className="text-gray-300 mb-4">
              Incentive programs reward users for participating in minting, liquidity provision, and arbitrage, strengthening protocol stability.
            </p>
          </div>
        </div>
      </div>

      {/* Status Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-green-400" /> Status & Roadmap
        </h2>
        <p className="text-gray-300 mb-4">
          SigmaO is currently in development and will undergo extensive testing before mainnet launch. Follow the roadmap for updates and participate in the community for feedback and suggestions.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Testnet</h4>
            <p className="text-gray-300 text-sm">Testnet dApp and contracts available for early users</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Mainnet Launch</h4>
            <p className="text-gray-300 text-sm">Planned after successful testnet and audits</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Community Feedback</h4>
            <p className="text-gray-300 text-sm">Join the discussion and help shape SigmaO</p>
          </div>
        </div>
      </div>

      {/* Vulnerabilities Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-yellow-400" /> Potential Vulnerabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Oracle Manipulation
            </h3>
            <p className="text-gray-300 mb-4">
              The protocol relies on accurate oracle price feeds. Safeguards against oracle attacks and manipulations are implemented to protect the system.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Collateral Risks
            </h3>
            <p className="text-gray-300 mb-4">
              Market volatility and undercollateralization can pose risks. The protocol includes mechanisms to monitor and mitigate these vulnerabilities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 