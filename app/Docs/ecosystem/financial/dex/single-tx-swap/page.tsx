"use client";

import React from "react";
import { Zap, Shield, Users, TrendingUp, ExternalLink } from "lucide-react";

export default function SingleTxSwapPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Single Transaction Swap
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Single Transaction Swap is a multisig trustless escrow service operating on the Ergo blockchain. It provides a secure platform for users to swap NFTs and tokens with others. If you've found a trading partner, for instance, on Discord, you can initiate a trading session on Single Transaction Swap and share a link to your private trading room with them.
      </p>

      {/* Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <Zap className="w-5 h-5 text-green-300" /> Overview
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base mb-4">
            Single Transaction Swap is a multisig trustless escrow service operating on the Ergo blockchain. It provides a secure platform for users to swap NFTs and tokens with others in a peer-to-peer manner.
          </p>
          <a
            href="https://single-tx-swap.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-300 hover:text-green-200 transition-colors gap-2"
          >
            Visit Single Tx Swap <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-300">
          <Shield className="w-5 h-5 text-cyan-300" /> Features
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-green-300">Asset Verification</h3>
            <p className="text-gray-300 text-sm">
              The platform now includes asset verification, allowing users to confirm the authenticity of NFTs and tokens before completing a swap.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 text-cyan-300">Transaction Summary</h3>
            <p className="text-gray-300 text-sm">
              Users receive a clear summary of the transaction details, ensuring transparency and confidence before finalizing the swap.
            </p>
          </div>
        </div>
      </div>

      {/* Future Enhancements */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <TrendingUp className="w-5 h-5 text-green-300" /> Future Enhancements
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base">
            The platform is actively being developed, with future enhancements planned to further improve user experience and functionality.
          </p>
        </div>
      </div>
    </>
  );
} 