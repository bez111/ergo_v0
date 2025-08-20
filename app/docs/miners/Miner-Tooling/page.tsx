// Move the entire content of Miner-Tooling.tsx into this file, preserving all imports and export default.
// This enables Next.js to resolve /docs/miners/Miner-Tooling as a route.

"use client";

import React from "react";
import { Pickaxe, Zap, Layers, Users, Database, TrendingUp, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MinerToolingPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight pb-1 flex items-center gap-3">
          <Pickaxe className="w-8 h-8 text-orange-400" /> Miner Tooling
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Explore decentralized apps and innovations designed to empower miners in the Ergo ecosystem. These tools promote decentralization, efficiency, and new opportunities for both miners and the broader network.
        </p>
      </div>
      {/* Decentralised Apps Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-400" /> Decentralised Apps
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {/* GuapSwap */}
          <Link href="/docs/miners/Miner-Tooling/guapswap" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group cursor-pointer block">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">GuapSwap</h3>
                <p className="text-gray-300 leading-relaxed">
                  GuapSwap allows miners to swap mined ERG for native tokens, providing flexibility and liquidity for mining rewards.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">Learn more <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>
          </Link>
          {/* Lithos */}
          <Link href="/docs/miners/Miner-Tooling/lithos" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group cursor-pointer block">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Lithos</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lithos is building decentralized mining pool infrastructure. It enables lenders to earn yield on ERG by providing collateral to mining pools, and allows miners to directly insert transactions into blocks in a trustless way. Lithos recently completed collateral contracts and demonstrated direct transaction insertion at ERGOHACK VI.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">Learn more <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>
          </Link>
          {/* CYTI */}
          <Link href="/docs/miners/Miner-Tooling/cyti" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group cursor-pointer block">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">CYTI</h3>
                <p className="text-gray-300 leading-relaxed">
                  CYTI (Choose Your Token ID) helps miners mint tokens with a specific character sequence at the start of the token ID. Miners use CYTI software to generate the right ID and receive a fee when successful.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">Learn more <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>
          </Link>
          {/* Log-Space Mining */}
          <Link href="/docs/miners/Miner-Tooling/log-space-mining" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group cursor-pointer block">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Log-Space Mining</h3>
                <p className="text-gray-300 leading-relaxed">
                  Log-Space Mining enables miners to operate more efficiently by allowing smart contracts to retain historical data. New light miners can mine online without carrying old blockchain data, and as they mine, they help bootstrap others.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">Learn more <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>
          </Link>
          {/* Smartpools */}
          <Link href="/docs/miners/Miner-Tooling/smartpools" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group cursor-pointer block">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Smartpools</h3>
                <p className="text-gray-300 leading-relaxed">
                  SmartPools are decentralized, on-chain alternatives to traditional mining pools, using autonomous smart contracts. Watch Lithos Protocol for the next generation of SmartPools.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">Learn more <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Innovations in Mining Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-orange-400" /> Innovations in Mining
        </h2>
        <div className="space-y-6">
          {/* Subpooling */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 text-orange-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-white">Subpooling</h3>
              <p className="text-gray-300">
                Subpooling lets groups of miners pool their hash rates via smart contracts, earning rewards faster and more fairly. It encourages decentralization and supports small miners who may not get block rewards quickly in normal pools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 