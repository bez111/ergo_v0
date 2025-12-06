"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Clock, Zap, Users, CheckCircle, AlertTriangle, Info } from "lucide-react";

export default function SubBlocksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Subblocks in Ergo
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Reducing confirmation times from 2 minutes to 2 seconds with sub-blocks and ordering blocks.
        </p>
        
        {/* Hero Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/introduction/roadmap/sub-blocks/technical-details"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5 mr-2" />
            Technical Details
          </Link>
          <Link
            href="/docs/introduction/roadmap"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-lg font-medium text-white hover:bg-neutral-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Roadmap
          </Link>
        </div>
      </div>

      {/* TLDR Section */}
      <div className="bg-blue-400/10 rounded-xl p-6 border border-blue-400/20 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Info className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-bold text-blue-400">TLDR</h2>
        </div>
        <p className="text-gray-300 leading-relaxed">
          With the renaming and introduction of sub-blocks, Ergo now distinguishes between sub-blocks (also called input blocks) and full blocks (now called ordering blocks). This change reduces typical onchain confirmation times from about 2 minutes to roughly 2 seconds, achieving a 17× improvement in detecting transaction failures and transforming the current competitive mempool into a more cooperative environment.
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        {/* What Are Sub-blocks and Ordering Blocks? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What Are Sub-blocks and Ordering Blocks?</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/20">
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" /> Sub-blocks (Input Blocks)
              </h3>
              <p className="text-gray-300">
                These are block candidates generated with a lower difficulty threshold than full blocks. They are produced approximately once per second and carry most transaction data. This allows transactions to propagate and confirm much faster.
              </p>
            </div>
            
            <div className="bg-orange-400/10 rounded-xl p-6 border border-orange-400/20">
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Ordering Blocks
              </h3>
              <p className="text-gray-300">
                These are the traditional full blocks of Ergo's proof-of-work system, now renamed as ordering blocks. They are generated roughly every 2 minutes and maintain the overall consensus and security of the blockchain.
              </p>
            </div>
          </div>
          
          <div className="bg-yellow-400/10 rounded-xl p-4 border border-yellow-400/20 mt-6">
            <p className="text-yellow-200 mb-0">
              <strong>Note:</strong> The naming "input blocks" (or sub-blocks) and "ordering blocks" was proposed in detail in this document.
            </p>
          </div>
        </section>

        {/* Enhanced User Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Enhanced User Experience</h2>
          
          <div className="space-y-6">
            <div className="bg-green-400/10 rounded-xl p-6 border border-green-400/20">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Rapid Onchain Confirmations
              </h3>
              <p className="text-gray-300 mb-4">
                Everyday transactions—such as receiving tokens from DEX swaps or wallet-to-wallet transfers—can now be confirmed in approximately 2 seconds due to the introduction of sub-blocks. These input blocks are produced roughly every second and carry transaction data, allowing dApps and wallets to detect transaction inclusion almost instantly.
              </p>
              <p className="text-gray-300 mb-4">
                However, this does not change the overall 2-minute block time for ordering blocks, which are still required for final settlement and consensus. As a result, existing dApps that rely on ordering blocks for confirmation will continue to behave as before.
              </p>
              <p className="text-gray-300">
                While some tools may treat sub-block inclusion as sufficient for faster user feedback, more security-sensitive applications—such as centralized exchanges or specific dApps handling large-value transactions—will still wait for a set number of ordering blocks to reduce the risk of chain reorganizations or 51% attacks.
              </p>
            </div>
            
            <div className="bg-red-400/10 rounded-xl p-6 border border-red-400/20">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Faster Failure Detection
              </h3>
              <p className="text-gray-300">
                Instead of waiting up to 6 minutes to detect a transaction failure, the new system detects failures in about 2 seconds—a 17× improvement in responsiveness.
              </p>
            </div>
            
            <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" /> A More Cooperative Mempool
              </h3>
              <p className="text-gray-300">
                The design shift transforms the mempool from a competitive (PvP) environment into a cooperative, multiplayer-like system, enhancing overall network responsiveness.
              </p>
            </div>
          </div>
        </section>

        {/* In a Nutshell */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">In a Nutshell</h2>
          
          <div className="bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-xl p-6 border border-indigo-400/20">
            <p className="text-gray-300 mb-4">
              Ergo's renaming and introduction of sub-blocks (input blocks) paired with ordering blocks significantly improves transaction processing speed and reliability. These changes provide users with near-instant confirmations and faster failure detection, thereby offering a smoother and more efficient experience on the network.
            </p>
            <p className="text-gray-300">
              For a deep dive into the technical details behind these changes, see the <Link href="/docs/introduction/roadmap/sub-blocks/technical-details" className="text-blue-400 hover:text-blue-300 underline">technical details</Link>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 