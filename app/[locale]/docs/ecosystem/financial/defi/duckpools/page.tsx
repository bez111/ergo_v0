"use client";

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
import Link from "next/link";

export default function DuckpoolsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Duckpools
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Duckpools is a decentralized liquidity pool and yield farming protocol on Ergo. It enables users to provide liquidity, earn rewards, and participate in innovative DeFi strategies with full transparency and security.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
          <a
            href="https://duckpools.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit Duckpools
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is Duckpools?
        </h2>
        <p className="text-gray-300">
          Duckpools is a smart contract platform for decentralized liquidity provision and yield farming. Users can supply assets, earn protocol rewards, and participate in new DeFi opportunities on Ergo.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Secure & Transparent
          </h3>
          <p className="text-gray-300 mb-4">
            All pools and rewards are managed by open-source smart contracts, ensuring transparency and security for all participants. No custodians or hidden risks.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Non-custodial liquidity provision
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent reward distribution
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Audited smart contracts
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Coins className="w-5 h-5 text-yellow-400" /> Yield Farming
          </h3>
          <p className="text-gray-300 mb-4">
            Users can stake LP tokens or assets to earn protocol rewards, participate in new farming strategies, and maximize returns on their holdings.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Multiple farming pools
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Dynamic reward rates
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Innovative DeFi strategies
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" /> Developer Friendly
          </h3>
          <p className="text-gray-300 mb-4">
            Open API and SDKs for integrating liquidity and farming logic into any Ergo dApp. Example contracts and templates available for rapid deployment.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Open API & SDKs
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Example contracts & templates
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              AppKit & Mosaik support
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-400" /> Permissionless & Open
          </h3>
          <p className="text-gray-300 mb-4">
            Anyone can create or join a pool, and all logic is enforced by code. No centralized control or barriers to entry.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Anyone can launch a pool
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
          <GitBranch className="w-6 h-6 text-cyan-400" /> How Duckpools Works
        </h2>
        <p className="text-gray-300 mb-4">
          Users supply assets to a pool, receive LP tokens, and can stake them to earn rewards. Smart contracts manage all deposits, withdrawals, and reward distributions transparently.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">For Liquidity Providers</h4>
            <p className="text-gray-300 text-sm">Deposit assets, receive LP tokens, and earn a share of protocol rewards.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">For Farmers</h4>
            <p className="text-gray-300 text-sm">Stake LP tokens or assets to participate in yield farming and maximize returns.</p>
          </div>
        </div>
      </div>

      {/* Developer Access Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Accessing Duckpools as a Developer
        </h2>
        <p className="text-gray-300 mb-4">
          Integrate Duckpools into your dApp using the open API, SDKs, and contract templates. Example: set up a new pool or automate reward distribution for your community.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-orange-400 mb-2">Example: Creating a Pool</h4>
          <pre className="bg-neutral-900 rounded p-3 text-xs overflow-x-auto text-gray-300">
{`// Example: Creating a pool (pseudo-code)
const tx = appkit.newTx()
  .from(provider)
  .to(poolContract)
  .withAssets([ASSET_ID, AMOUNT])
  .createPool()
  .send();`}
          </pre>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://github.com/anon-real/duckpools" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">GitHub Repo</h4>
            <p className="text-gray-300 text-sm">Open-source code and contract templates for Duckpools.</p>
          </a>
          <a href="https://duckpools.com" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Official App</h4>
            <p className="text-gray-300 text-sm">Launch the Duckpools dApp and try live pools and farming.</p>
          </a>
          <a href="https://ergoplatform.org/en/blog/2023-10-01-duckpools/" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Protocol Overview</h4>
            <p className="text-gray-300 text-sm">Read the official blog post about Duckpools protocol.</p>
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" /> What can I use Duckpools for?
            </h3>
            <p className="text-gray-300 mb-4">
              Provide liquidity, earn rewards, and participate in innovative DeFi strategies on Ergo.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" /> How are rewards distributed?
            </h3>
            <p className="text-gray-300 mb-4">
              All rewards are distributed automatically by smart contracts based on your share of the pool or farming activity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 