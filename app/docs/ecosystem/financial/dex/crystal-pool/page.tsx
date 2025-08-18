"use client";

import React from "react";
import { 
  Zap, 
  Shield, 
  Layers, 
  ArrowRight, 
  Cpu, 
  Globe, 
  CheckCircle, 
  TrendingUp, 
  Lock, 
  Users,
  ChevronRight,
  GitBranch,
  Coins
} from "lucide-react";
import Link from "next/link";

export default function CrystalPoolPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Crystal Pool
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Crystal Pool is a decentralized exchange (DEX) built on the Ergo blockchain, enabling real-time order-based trading directly on Layer 1. It is designed to provide a user experience comparable to centralized exchanges (CEXs) while maintaining the security and self-custody benefits of a DEX.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/docs/ecosystem/financial/dex" className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105">
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DEX
          </Link>
          <a href="https://github.com/crystalpool" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700">
            <GitBranch className="w-5 h-5 mr-2" /> Crystal Pool GitHub
          </a>
        </div>
      </div>

      {/* Overview Card */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-cyan-400" /> Platform Overview
        </h2>
        <p className="text-gray-300 mb-4">
          Crystal Pool leverages Ergo's advanced smart contract capabilities and the eUTXO model to create a decentralized order book and matching engine directly on the blockchain. Users can submit limit orders, which are stored on-chain as unspent transaction outputs (UTXOs).
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Limit Order DEX:</b> Place buy and sell orders with specific price limits</li>
          <li><b>Partial Fill:</b> Orders can be partially filled for efficient matching</li>
          <li><b>Multi-Token Support:</b> Trade multiple tokens in single transactions</li>
          <li><b>Layer 1 Operation:</b> Direct blockchain execution without off-chain components</li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-400" /> Limit Order DEX
          </h3>
          <p className="text-gray-300 mb-2">Crystal Pool is a limit order DEX, allowing users to place buy and sell orders with specific price limits, providing precise control over trading execution.</p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Self-Custody Security
          </h3>
          <p className="text-gray-300 mb-2">Users retain full control over their assets, eliminating the need to trust a third-party custodian while maintaining security and transparency.</p>
        </div>
      </div>

      {/* Technical Details Accordion */}
      <div className="mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <details className="group">
            <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
              <span className="inline-block">
                <Cpu className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
              </span>
              <span>Technical Features & How It Works</span>
              <span className="ml-auto text-xs text-gray-400 group-open:text-cyan-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 pt-2 text-gray-300 text-base">
              <h4 className="font-semibold text-cyan-400 mb-2">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
                    <TrendingUp className="w-4 h-4 text-orange-300" /> Limit Order DEX
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Crystal Pool is a limit order DEX, allowing users to place buy and sell orders with specific price limits.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
                    <ArrowRight className="w-4 h-4 text-green-300" /> Partial Fill
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Orders can be partially filled, enabling more efficient order matching and liquidity utilization.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-purple-300">
                    <Layers className="w-4 h-4 text-purple-300" /> Multiple Boxes in One Transaction
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Users can include multiple input boxes (UTXOs) in a single transaction, simplifying the trading process.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-cyan-300">
                    <Users className="w-4 h-4 text-cyan-300" /> Multiple Sellers in One Transaction
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Multiple sellers can participate in a single transaction, facilitating more efficient order matching and execution.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 md:col-span-2">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
                    <Globe className="w-4 h-4 text-orange-300" /> Multi-Token Support
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Crystal Pool supports trading multiple tokens in a single transaction, enabling more diverse trading opportunities.
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-cyan-400 mb-2">How It Works</h4>
              <p className="text-gray-300 mb-4">
                Crystal Pool leverages Ergo's advanced smart contract capabilities and the eUTXO model to create a decentralized order book and matching engine directly on the blockchain. Users can submit limit orders, which are stored on-chain as unspent transaction outputs (UTXOs).
              </p>
              <p className="text-gray-300 mb-4">
                The Crystal Pool smart contracts then match compatible buy and sell orders, executing trades and transferring assets between the respective parties.
              </p>
              <p className="text-gray-300 mb-4">
                By operating on Layer 1, Crystal Pool eliminates the need for centralized order books or off-chain matching engines, ensuring transparency, security, and censorship resistance. Additionally, the self-custodial nature of the platform allows users to maintain full control over their assets at all times.
              </p>

              <h4 className="font-semibold text-cyan-400 mb-2">Benefits</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-cyan-300">
                    <Zap className="w-4 h-4 text-cyan-300" /> Real-Time Trading
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Crystal Pool enables real-time order matching and execution, providing a seamless trading experience similar to centralized exchanges.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
                    <Shield className="w-4 h-4 text-green-300" /> Security and Self-Custody
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Users retain full control over their assets, eliminating the need to trust a third-party custodian.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
                    <Lock className="w-4 h-4 text-orange-300" /> Transparency and Censorship Resistance
                  </h5>
                  <p className="text-gray-300 text-sm">
                    All orders and trades are recorded on the immutable Ergo blockchain, ensuring transparency and preventing censorship.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-purple-300">
                    <Layers className="w-4 h-4 text-purple-300" /> Composability
                  </h5>
                  <p className="text-gray-300 text-sm">
                    As a Layer 1 solution, Crystal Pool can seamlessly integrate with other Ergo-based protocols and applications, enabling greater composability and innovation.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* In a Nutshell */}
      <div className="bg-gradient-to-r from-cyan-400/10 to-orange-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">In a Nutshell</h3>
        <p className="text-gray-300 mb-4">Crystal Pool represents a significant step forward in decentralized exchange technology, combining the benefits of self-custody and transparency with the user experience and liquidity of centralized platforms. By operating directly on Layer 1 with advanced smart contracts, Crystal Pool provides real-time trading capabilities while maintaining the security and decentralization principles of blockchain technology.</p>
      </div>
    </>
  );
} 