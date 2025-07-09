"use client";

import React from "react";
import { Zap, Shield, Layers, ArrowRight, Cpu, Globe, CheckCircle, TrendingUp, Lock, Users } from "lucide-react";

export default function CrystalPoolPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Crystal Pool
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Crystal Pool is a decentralized exchange (DEX) built on the Ergo blockchain, enabling real-time order-based trading directly on Layer 1. It is designed to provide a user experience comparable to centralized exchanges (CEXs) while maintaining the security and self-custody benefits of a DEX.
      </p>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-300">
          <Zap className="w-5 h-5 text-cyan-300" /> Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
              <TrendingUp className="w-4 h-4 text-orange-300" /> Limit Order DEX
            </h3>
            <p className="text-gray-300 text-sm">
              Crystal Pool is a limit order DEX, allowing users to place buy and sell orders with specific price limits.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
              <ArrowRight className="w-4 h-4 text-green-300" /> Partial Fill
            </h3>
            <p className="text-gray-300 text-sm">
              Orders can be partially filled, enabling more efficient order matching and liquidity utilization.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-purple-300">
              <Layers className="w-4 h-4 text-purple-300" /> Multiple Boxes in One Transaction
            </h3>
            <p className="text-gray-300 text-sm">
              Users can include multiple input boxes (UTXOs) in a single transaction, simplifying the trading process.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-cyan-300">
              <Users className="w-4 h-4 text-cyan-300" /> Multiple Sellers in One Transaction
            </h3>
            <p className="text-gray-300 text-sm">
              Multiple sellers can participate in a single transaction, facilitating more efficient order matching and execution.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 md:col-span-2">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
              <Globe className="w-4 h-4 text-orange-300" /> Multi-Token Support
            </h3>
            <p className="text-gray-300 text-sm">
              Crystal Pool supports trading multiple tokens in a single transaction, enabling more diverse trading opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-300">
          <Cpu className="w-5 h-5 text-orange-300" /> How It Works
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            Crystal Pool leverages Ergo's advanced smart contract capabilities and the eUTXO model to create a decentralized order book and matching engine directly on the blockchain. Users can submit limit orders, which are stored on-chain as unspent transaction outputs (UTXOs).
          </p>
          <p className="text-gray-300 mb-4">
            The Crystal Pool smart contracts then match compatible buy and sell orders, executing trades and transferring assets between the respective parties.
          </p>
          <p className="text-gray-300">
            By operating on Layer 1, Crystal Pool eliminates the need for centralized order books or off-chain matching engines, ensuring transparency, security, and censorship resistance. Additionally, the self-custodial nature of the platform allows users to maintain full control over their assets at all times.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <CheckCircle className="w-5 h-5 text-green-300" /> Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-cyan-300">
              <Zap className="w-4 h-4 text-cyan-300" /> Real-Time Trading
            </h3>
            <p className="text-gray-300 text-sm">
              Crystal Pool enables real-time order matching and execution, providing a seamless trading experience similar to centralized exchanges.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
              <Shield className="w-4 h-4 text-green-300" /> Security and Self-Custody
            </h3>
            <p className="text-gray-300 text-sm">
              Users retain full control over their assets, eliminating the need to trust a third-party custodian.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
              <Lock className="w-4 h-4 text-orange-300" /> Transparency and Censorship Resistance
            </h3>
            <p className="text-gray-300 text-sm">
              All orders and trades are recorded on the immutable Ergo blockchain, ensuring transparency and preventing censorship.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-purple-300">
              <Layers className="w-4 h-4 text-purple-300" /> Composability
            </h3>
            <p className="text-gray-300 text-sm">
              As a Layer 1 solution, Crystal Pool can seamlessly integrate with other Ergo-based protocols and applications, enabling greater composability and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-cyan-500/10 to-orange-500/10 border border-cyan-500/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-cyan-300">
            <TrendingUp className="w-5 h-5 text-cyan-300" /> Innovation in DEX Technology
          </h2>
          <p className="text-gray-300 text-base">
            Crystal Pool represents a significant step forward in decentralized exchange technology, combining the benefits of self-custody and transparency with the user experience and liquidity of centralized platforms.
          </p>
        </div>
      </div>
    </>
  );
} 