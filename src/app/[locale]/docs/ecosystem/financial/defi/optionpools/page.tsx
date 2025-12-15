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
  Settings
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function OptionPoolsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          OptionPools
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          OptionPools is a pool-to-peer AMM protocol for decentralized options trading on Ergo, leveraging the eUTXO model for security, efficiency, and on-chain pricing.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
          <a
            href="https://github.com/anon-real/optionpools"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> View on GitHub
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is OptionPools?
        </h2>
        <p className="text-gray-300">
          OptionPools is a groundbreaking pool-to-peer Automated Market Maker (AMM) protocol for options trading, built on Ergo. It enables secure, efficient, and capital-efficient options trading directly on Layer 1, using Ergo's unique eUTXO model and on-chain Black-Scholes pricing.
        </p>
      </div>

      {/* Motivation Section */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Target className="w-5 h-5" /> Motivation
        </h2>
        <p className="text-gray-300 mb-4">
          Options are a core part of traditional finance, but DeFi options adoption is limited due to high risks, complex contracts, and reliance on oracles. OptionPools addresses these by building on Ergo's secure Layer 1, reducing attack surfaces and enabling on-chain pricing.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-400" /> High risks in existing DeFi options protocols
          </li>
          <li className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-400" /> Reliance on third-party oracles and complex smart contracts
          </li>
          <li className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-400" /> Low institutional engagement due to security concerns
          </li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Layer 1 Security
          </h3>
          <p className="text-gray-300 mb-4">
            OptionPools uses Ergo's eUTXO model, with contracts verifying outputs rather than executing complex computations, reducing vulnerabilities.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> Non-custodial, open-source contracts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> Transparent protocol logic
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-400" /> On-Chain Pricing
          </h3>
          <p className="text-gray-300 mb-4">
            Implements on-chain Black-Scholes options pricing, demonstrated during ErgoHack, for transparent and efficient price discovery.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> Black-Scholes model on-chain
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> Oracle-free pricing
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" /> Capital Efficiency
          </h3>
          <p className="text-gray-300 mb-4">
            Integrates with Duckpools for undercollateralized lending, enabling capital-efficient options trading and improved liquidity.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> Undercollateralized lending integration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> Flexible liquidity provision
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <ArrowUpDown className="w-5 h-5 text-yellow-400" /> Dual-Asset Pools
          </h3>
          <p className="text-gray-300 mb-4">
            Supports dual-asset liquidity provisioning, allowing LPs to earn fees in one or both sides of a pair and adopt varied investment stances.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> Bullish, neutral, or bearish LP strategies
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> No need to maintain market ratios
            </li>
          </ul>
        </div>
      </div>

      {/* Key Components Section */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Layers className="w-6 h-6" /> Key Components
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Smart Contracts</h3>
            <p className="text-gray-300 text-sm mb-3">
              Suite of contracts for AMM, options logic, repayments, and proxy interactions.
            </p>
            <a
              href="https://github.com/duckpools/off-chain-bot/tree/optionPools/optionPools/contracts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm"
            >
              View Contracts <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Off-Chain Code</h3>
            <p className="text-gray-300 text-sm mb-3">
              Python-based off-chain code handles platform logic and user interactions.
            </p>
            <a
              href="https://github.com/duckpools/off-chain-bot/tree/optionPools/optionPools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm"
            >
              View Code <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">User Interface</h3>
            <p className="text-gray-300 text-sm">
              A user-friendly web interface for interacting with OptionPools smart contracts and off-chain code.
            </p>
          </div>
        </div>
      </div>

      {/* Limitations & Future Goals */}
      <div className="bg-neutral-900/50 border border-yellow-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
          <Gavel className="w-6 h-6" /> Limitations & Future Goals
        </h2>
        <ul className="space-y-4">
          <li className="bg-yellow-800/20 border border-yellow-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-400 mb-1">Multiple Strikes</h3>
                <p className="text-gray-300 text-sm">
                  Current implementation supports only a single strike for calls and puts. Future versions will allow custom strikes dynamically priced by the pool.
                </p>
              </div>
            </div>
          </li>
          <li className="bg-yellow-800/20 border border-yellow-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-400 mb-1">Delta Neutral Strategy</h3>
                <p className="text-gray-300 text-sm">
                  Future iterations will aggregate 'd1' values from all options to improve AMM pricing and risk management, enabling delta neutral strategies.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Final Remarks & Achievements */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Zap className="w-6 h-6" /> Final Remarks & Achievements
        </h2>
        <p className="text-gray-300 mb-4">
          During ErgoHack, OptionPools introduced innovations including on-chain Black-Scholes pricing, dual-asset pools, and a historical volatility oracle. The project demonstrates Ergo's potential for advanced DeFi options and capital-efficient trading.
        </p>
        <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
          <h3 className="font-semibold text-cyan-400 mb-2">Key Achievements</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• On-chain Black-Scholes options pricing</li>
            <li>• Dual-asset liquidity pools</li>
            <li>• Options price adjustments based on pool utility</li>
            <li>• Historical volatility oracle</li>
            <li>• Complete pool-to-peer options trading platform</li>
          </ul>
        </div>
        <p className="text-gray-300 mt-4">
          OptionPools highlights Ergo's unique DeFi capabilities and the value of bridging Bitcoin and other assets into the ecosystem.
        </p>
      </div>
    </>
  );
} 