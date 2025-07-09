"use client";

import React from "react";
import { Zap, Target, Grid3X3, Users, Shield, Twitter, Github, ExternalLink } from "lucide-react";

export default function MachinaPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Machina Finance
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Machina Finance is a revolutionary decentralized exchange (DEX) under development on Ergo. The unique aspect of Machina Finance is its use of grid order contracts, which have the potential to replace traditional liquidity pools, offering a more decentralized and peer-to-peer (P2P) trading experience.
      </p>

      {/* Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-300">
          <Zap className="w-5 h-5 text-cyan-300" /> Overview
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base">
            Machina Finance is a revolutionary decentralized exchange (DEX) under development on Ergo. The unique aspect of Machina Finance is its use of grid order contracts. These contracts have the potential to replace traditional liquidity pools, offering a more decentralized and peer-to-peer (P2P) trading experience.
          </p>
        </div>
      </div>

      {/* Goal */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-300">
          <Target className="w-5 h-5 text-orange-300" /> Goal
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base mb-4">
            The primary objective of Machina Finance is to promote decentralization and facilitate P2P trade. By leveraging the power of blockchain technology and smart contracts, Machina Finance aims to create a DEX that is secure, transparent, and user-friendly.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <Grid3X3 className="w-5 h-5 text-green-300" /> Features
        </h2>
        
        {/* Grid Order Contracts */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-cyan-300">
            <Grid3X3 className="w-5 h-5 text-cyan-300" /> Grid Order Contracts
          </h3>
          <p className="text-gray-300 text-base">
            Grid order contracts are a novel feature in the world of DEXs. They allow for a more efficient and effective trading experience by replacing the need for liquidity pools. This feature is currently under development and is expected to bring significant changes to the way DEXs operate.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
              <Shield className="w-4 h-4 text-orange-300" /> Decentralized Trading
            </h3>
            <p className="text-gray-300 text-sm">
              Eliminates the need for traditional liquidity pools, creating a more decentralized trading environment.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
              <Users className="w-4 h-4 text-green-300" /> P2P Experience
            </h3>
            <p className="text-gray-300 text-sm">
              Enables direct peer-to-peer trading without intermediaries, providing greater control to users.
            </p>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-300">
          <ExternalLink className="w-5 h-5 text-cyan-300" /> Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a 
            href="https://twitter.com/machinafinance" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 hover:border-cyan-400/60 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <Twitter className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div>
                <h3 className="font-semibold text-base text-cyan-300 group-hover:text-cyan-200 transition-colors">Twitter</h3>
                <p className="text-gray-400 text-sm">Follow for updates and announcements</p>
              </div>
            </div>
          </a>
          
          <a 
            href="https://github.com/machinafinance" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 hover:border-orange-400/60 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
              <div>
                <h3 className="font-semibold text-base text-orange-300 group-hover:text-orange-200 transition-colors">GitHub</h3>
                <p className="text-gray-400 text-sm">Explore the source code and contribute</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Development Status */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-orange-300">
            <Zap className="w-5 h-5 text-orange-300" /> Development Status
          </h2>
          <p className="text-gray-300 text-base">
            Machina Finance is currently under active development. The grid order contracts feature is being developed and tested, with the goal of revolutionizing how DEXs operate on the Ergo blockchain.
          </p>
        </div>
      </div>
    </>
  );
} 