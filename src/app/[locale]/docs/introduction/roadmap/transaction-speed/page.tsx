"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export default function TransactionSpeedPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Transaction Speed
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Improvements and optimizations for Ergo transaction processing speed.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        <section className="mb-12">
          <p className="text-gray-300 mb-6 text-lg">
            The speed of transactions, commonly known as Transactions Per Second (TPS), is a vital performance metric for blockchains. It quantifies the capacity of a blockchain to process transactions, expressed in transactions per second.
          </p>
          
          <p className="text-gray-300 mb-6">
            The primary bottleneck for increasing transactions per second (TPS) is the peer-to-peer (p2p) network layer. Proof-of-Work (PoW) is already an efficient timestamping protocol for the base layer (Layer 0) because it operates asynchronously, without the need for additional network messages. Many alternative consensus mechanisms require extra bandwidth, making them less efficient. For instance, the original Ouroboros consensus protocol generated large log files, although this was later improved in the Praos version using Verifiable Random Functions (VRF). However, relying on novel cryptographic primitives can be risky, especially when significant assets are involved.
          </p>

          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/docs/introduction/roadmap"
              className="inline-flex items-center px-4 py-2 bg-neutral-800 rounded-lg font-medium text-white hover:bg-neutral-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Roadmap
            </Link>
          </div>

          <div className="bg-red-400/10 p-6 rounded-xl border border-red-400/20 mb-6">
            <p className="text-gray-300">
              While TPS could be boosted by introducing measures like supernodes or eliminating mempools, as seen in projects like Solana and Avalanche, these approaches compromise the decentralization and integrity of the network. Therefore, if the goal is to maintain a truly decentralized cryptocurrency, these methods should be avoided.
            </p>
          </div>

          <div className="bg-green-400/10 p-6 rounded-xl border border-green-400/20 mb-8">
            <p className="text-gray-300">
              The remaining viable solution for improving TPS lies in optimizing bandwidth usage and implementing Layer 2 solutions and sidechains, also known as application-specific chains.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Comparative TPS Values for Renowned Blockchains</h2>
          <p className="text-gray-300 mb-6">
            To provide a perspective, here are the estimated TPS values for some of the leading blockchains:
          </p>

          <div className="grid gap-4 mb-8">
            <div className="flex justify-between items-center p-4 bg-orange-400/10 rounded-lg border border-orange-400/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span className="font-semibold text-white">Bitcoin (BTC)</span>
              </div>
              <span className="text-orange-400 font-bold">~7 TPS</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-blue-400/10 rounded-lg border border-blue-400/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="font-semibold text-white">Ethereum (ETH)</span>
              </div>
              <span className="text-blue-400 font-bold">~15 TPS</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="font-semibold text-white">Ripple (XRP)</span>
              </div>
              <span className="text-cyan-400 font-bold">~1,500 TPS</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-purple-400/10 rounded-lg border border-purple-400/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="font-semibold text-white">Cardano (ADA)</span>
              </div>
              <span className="text-purple-400 font-bold">~7 TPS <span className="text-sm text-gray-400">(up to 250 in tests)</span></span>
            </div>

            <div className="flex justify-between items-center p-4 bg-pink-400/10 rounded-lg border border-pink-400/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                <span className="font-semibold text-white">Polkadot (DOT)</span>
              </div>
              <span className="text-pink-400 font-bold">~1,500 TPS</span>
            </div>
          </div>

          <div className="bg-yellow-400/10 p-6 rounded-xl border border-yellow-400/20 mb-6">
            <p className="text-gray-300 mb-4">
              However, the conventional TPS metric only offers a glimpse into Ergo's true potential. It's not merely about the number of transactions; the weight of the transaction and the computational cost limit per block are equally important. These aspects are shaped by several dynamic factors, including the size of the network and the hardware resources available to miners.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-400/10 to-red-400/10 p-6 rounded-xl border border-orange-400/20 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">Ergo's Current Performance</h3>
            <p className="text-gray-300 mb-4">
              With the Node v5 already operational, Ergo's raw TPS is approximately <span className="text-orange-400 font-bold text-xl">47.5 transactions/second</span>, with room for further enhancements.
            </p>
            <p className="text-gray-300">
              For an in-depth technical understanding of how this figure is derived, please refer to the technical report available on GitHub.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">The Extended Unspent Transaction Output (eUTXO) Model Advantage</h2>
          
          <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 p-6 rounded-xl border border-green-400/20 mb-6">
            <p className="text-gray-300 mb-4">
              Ergo's transaction management system leverages the Extended Unspent Transaction Output (eUTXO) model, which outperforms the traditional UTXO model in terms of efficiency and flexibility. This model allows for multiple outputs in a single transaction, each potentially carrying different tokens.
            </p>
            
            <p className="text-gray-300 mb-4">
              Moreover, Ergo is capable of handling complex DeFi transactions, thereby enabling a broad spectrum of DeFi applications within the network. By processing multiple token types per transaction output and facilitating the simultaneous execution of complex transactions within a block, Ergo significantly boosts its blockchain's performance and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-400/10 p-6 rounded-xl border border-blue-400/20">
              <h4 className="text-lg font-bold text-white mb-3">Multiple Outputs</h4>
              <p className="text-gray-300">
                Single transactions can contain multiple outputs, each carrying different tokens, maximizing efficiency per transaction.
              </p>
            </div>

            <div className="bg-purple-400/10 p-6 rounded-xl border border-purple-400/20">
              <h4 className="text-lg font-bold text-white mb-3">Complex DeFi Support</h4>
              <p className="text-gray-300">
                Enables sophisticated DeFi operations within individual transactions, reducing network congestion.
              </p>
            </div>

            <div className="bg-cyan-400/10 p-6 rounded-xl border border-cyan-400/20">
              <h4 className="text-lg font-bold text-white mb-3">Parallel Processing</h4>
              <p className="text-gray-300">
                Facilitates simultaneous execution of complex transactions within blocks for improved throughput.
              </p>
            </div>

            <div className="bg-teal-400/10 p-6 rounded-xl border border-teal-400/20">
              <h4 className="text-lg font-bold text-white mb-3">Multi-Token Efficiency</h4>
              <p className="text-gray-300">
                Processes multiple token types per transaction output, optimizing blockchain resource utilization.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 p-6 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-xl border border-orange-400/20">
          <h2 className="text-2xl font-bold text-white mb-4">Scaling Philosophy</h2>
          <p className="text-gray-300 text-lg">
            The primary objective in scaling Ergo is to enhance TPS without compromising the fundamental principles and assurances typically linked with blockchain technology.
          </p>
        </section>
      </div>
    </div>
  );
} 