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
  Brain
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function SigmaFiPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          SigmaFi
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          SigmaFi is a decentralized DeFi protocol on Ergo, offering DEX, yield farming, lending, and DAO tools. It empowers users to trade, earn, and participate in governance with full transparency and security.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
          <a
            href="https://sigmafi.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit SigmaFi
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is SigmaFi?
        </h2>
        <p className="text-gray-300">
          SigmaFi is a comprehensive DeFi platform on Ergo, combining decentralized exchange, yield farming, lending, and DAO governance. All features are powered by open-source smart contracts and a community-driven approach.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Secure & Transparent
          </h3>
          <p className="text-gray-300 mb-4">
            All trading, farming, and lending is managed by open-source smart contracts, ensuring transparency and security for all users. No custodians or hidden risks.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Non-custodial asset management
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent protocol logic
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Audited smart contracts
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Coins className="w-5 h-5 text-yellow-400" /> DEX & Yield Farming
          </h3>
          <p className="text-gray-300 mb-4">
            Users can trade assets, provide liquidity, and earn rewards through yield farming pools. All operations are on-chain and permissionless.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Decentralized exchange (DEX)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Yield farming pools
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Permissionless trading
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" /> Lending & DAO
          </h3>
          <p className="text-gray-300 mb-4">
            SigmaFi supports decentralized lending and DAO governance, allowing users to borrow, lend, and participate in protocol decisions.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Decentralized lending
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              DAO governance
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Community-driven upgrades
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-400" /> Permissionless & Open
          </h3>
          <p className="text-gray-300 mb-4">
            Anyone can trade, farm, lend, or participate in governance. All logic is enforced by code, not by intermediaries.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Open to all users
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No KYC or restrictions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Open-source code
            </li>
          </ul>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> How SigmaFi Works
        </h2>
        <p className="text-gray-300 mb-4">
          Users can trade, provide liquidity, farm, lend, or participate in governance. Smart contracts manage all operations, rewards, and protocol upgrades transparently.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">For Traders & Farmers</h4>
            <p className="text-gray-300 text-sm">Trade assets, provide liquidity, and earn rewards through farming pools.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">For Lenders & DAO Members</h4>
            <p className="text-gray-300 text-sm">Lend or borrow assets, participate in DAO governance, and help shape protocol upgrades.</p>
          </div>
        </div>
      </div>

      {/* Developer Access Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Accessing SigmaFi as a Developer
        </h2>
        <p className="text-gray-300 mb-4">
          Integrate SigmaFi into your dApp using the open API, SDKs, and contract templates. Example: set up a new pool, automate rewards, or build DAO voting logic.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-orange-400 mb-2">Example: Providing Liquidity</h4>
          <pre className="bg-neutral-900 rounded p-3 text-xs overflow-x-auto text-gray-300">
{`// Example: Providing liquidity (pseudo-code)
const tx = appkit.newTx()
  .from(user)
  .to(liquidityPool)
  .withAssets([ASSET_ID, AMOUNT])
  .provideLiquidity()
  .send();`}
          </pre>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://github.com/capt-nemo429" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">GitHub Repo</h4>
            <p className="text-gray-300 text-sm">Open-source code and contract templates for SigmaFi.</p>
          </a>
          <a href="https://sigmafi.app" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Official App</h4>
            <p className="text-gray-300 text-sm">Launch the SigmaFi dApp and try trading, farming, and lending.</p>
          </a>
          <a href="https://ergoplatform.org/en/blog/2023-08-01-sigmafi/" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Protocol Overview</h4>
            <p className="text-gray-300 text-sm">Read the official blog post about SigmaFi protocol.</p>
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" /> What can I use SigmaFi for?
            </h3>
            <p className="text-gray-300 mb-4">
              Trade, farm, lend, and participate in DAO governance on Ergo in a decentralized, non-custodial way.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" /> How are rewards and upgrades managed?
            </h3>
            <p className="text-gray-300 mb-4">
              All rewards, protocol upgrades, and governance are managed by smart contracts and DAO voting, ensuring transparency and community control.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 