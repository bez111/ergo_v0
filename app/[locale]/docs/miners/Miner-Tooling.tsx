"use client";

import React from "react";
import { Pickaxe, Zap, Layers, Link as LinkIcon, ExternalLink, Users, Database, TrendingUp, Shield } from "lucide-react";

export default function MinerToolingPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Pickaxe className="w-8 h-8 text-yellow-400" /> Miner Tooling
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Explore decentralized apps and innovations designed to empower miners in the Ergo ecosystem. These tools promote decentralization, efficiency, and new opportunities for both miners and the broader network.
        </p>
      </div>
      {/* Decentralised Apps Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" /> Decentralised Apps
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* GuapSwap */}
          <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Layers className="w-6 h-6 text-cyan-400" /> GuapSwap
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                GuapSwap allows miners to swap mined ERG for native tokens, providing flexibility and liquidity for mining rewards.
              </p>
            </div>
            {/* Add link if available */}
            <span className="inline-flex items-center text-cyan-400 font-semibold mt-auto opacity-60 pointer-events-none">More</span>
          </div>
          {/* Lithos */}
          <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 hover:border-green-400/60 transition-all duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-400" /> Lithos
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Lithos is building decentralized mining pool infrastructure. It enables lenders to earn yield on ERG by providing collateral to mining pools, and allows miners to directly insert transactions into blocks in a trustless way. Lithos recently completed collateral contracts and demonstrated direct transaction insertion at ERGOHACK VI.
              </p>
            </div>
            <span className="inline-flex items-center text-green-400 font-semibold mt-auto opacity-60 pointer-events-none">More</span>
          </div>
          {/* CYTI */}
          <div className="bg-neutral-900/50 border border-pink-700 rounded-xl p-6 hover:border-pink-400/60 transition-all duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Database className="w-6 h-6 text-pink-400" /> CYTI
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                CYTI (Choose Your Token ID) helps miners mint tokens with a specific character sequence at the start of the token ID. Miners use CYTI software to generate the right ID and receive a fee when successful.
              </p>
            </div>
            <span className="inline-flex items-center text-pink-400 font-semibold mt-auto opacity-60 pointer-events-none">More</span>
          </div>
        </div>
      </div>
      {/* Innovations in Mining Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-cyan-400" /> Innovations in Mining
        </h2>
        <div className="space-y-6">
          {/* Log-Space Mining */}
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Database className="w-5 h-5 text-yellow-400" /> Log-Space Mining
            </h3>
            <p className="text-gray-300">
              Log-Space Mining enables miners to operate more efficiently by allowing smart contracts to retain historical data. New light miners can mine online without carrying old blockchain data, and as they mine, they help bootstrap others. This reduces the need for storing historical data and supports lighter mining.
            </p>
          </div>
          {/* Smartpools */}
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" /> Smartpools
            </h3>
            <p className="text-gray-300">
              SmartPools are decentralized, on-chain alternatives to traditional mining pools, using autonomous smart contracts. Watch Lithos Protocol for the next generation of SmartPools.
            </p>
          </div>
          {/* Subpooling */}
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-pink-400" /> Subpooling
            </h3>
            <p className="text-gray-300">
              Subpooling lets groups of miners pool their hash rates via smart contracts, earning rewards faster and more fairly. It encourages decentralization and supports small miners who may not get block rewards quickly in normal pools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 