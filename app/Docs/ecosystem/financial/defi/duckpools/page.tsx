"use client";

import React from "react";
import { ExternalLink, Info, Zap, CheckCircle } from "lucide-react";

export default function DuckPoolsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        DuckPools: Ergo Lending Protocol
      </h1>
      
      {/* Overview */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          duckpools.io is a decentralized finance (DeFi) application (dApp) built on the Ergo blockchain. It offers lending pools that allow users to lend ERG and its tokens to earn yield and borrow assets.
        </p>
      </div>

      {/* About DuckPools */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Zap className="w-5 h-5" /> About DuckPools
        </h2>
        <p className="text-gray-300 mb-4">
          DuckPools is a lending platform developed on the Ergo blockchain. It is currently developing features such as:
        </p>
        
        {/* Features Section */}
        <div className="space-y-4 mb-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Algorithmic Lending Pools</h3>
                <p className="text-gray-300 text-sm">
                  Users can provide ERG or native assets to lending pools and earn passive income on their capital.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Collateralized Loans</h3>
                <p className="text-gray-300 text-sm">
                  Users can secure funds with their collateral!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm">
          DuckPools aims to be a catalyst for an explosive DeFi ecosystem on Ergo. The platform facilitates increased utility of ERG and Ergo native assets and boosts the Total Value Locked (TVL) in Ergo DeFi.
        </p>
      </div>

      {/* Community Resources */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Community Resources
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://duckpools.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-cyan-700/80 rounded-xl font-semibold text-white hover:bg-orange-500 hover:text-black transition-transform hover:scale-105"
          >
            Website <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://discord.gg/duckpools"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-cyan-700/80 rounded-xl font-semibold text-white hover:bg-orange-500 hover:text-black transition-transform hover:scale-105"
          >
            Discord <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://github.com/duckpools"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-cyan-700/80 rounded-xl font-semibold text-white hover:bg-orange-500 hover:text-black transition-transform hover:scale-105"
          >
            Github <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
} 