"use client";

import React from "react";
import { 
  Zap, 
  Target, 
  Grid3X3, 
  Users, 
  Shield, 
  Twitter, 
  Github, 
  ExternalLink,
  ChevronRight,
  GitBranch,
  Globe,
  Cpu
} from "lucide-react";
import Link from "next/link";

export default function MachinaPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Machina Finance
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Machina Finance is a revolutionary decentralized exchange (DEX) under development on Ergo. The unique aspect of Machina Finance is its use of grid order contracts, which have the potential to replace traditional liquidity pools, offering a more decentralized and peer-to-peer (P2P) trading experience.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/Docs/ecosystem/financial/dex" className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105">
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DEX
          </Link>
          <a href="https://github.com/machinafinance" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700">
            <GitBranch className="w-5 h-5 mr-2" /> Machina GitHub
          </a>
        </div>
      </div>

      {/* Overview Card */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-400" /> Platform Overview
        </h2>
        <p className="text-gray-300 mb-4">
          Machina Finance is a revolutionary decentralized exchange (DEX) under development on Ergo. The unique aspect of Machina Finance is its use of grid order contracts. These contracts have the potential to replace traditional liquidity pools, offering a more decentralized and peer-to-peer (P2P) trading experience.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Grid Order Contracts:</b> Novel feature replacing traditional liquidity pools</li>
          <li><b>P2P Trading:</b> Direct peer-to-peer trading without intermediaries</li>
          <li><b>Decentralized:</b> More decentralized trading environment</li>
          <li><b>Under Development:</b> Currently in active development phase</li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Grid3X3 className="w-5 h-5 text-cyan-400" /> Grid Order Contracts
          </h3>
          <p className="text-gray-300 mb-2">Novel feature allowing for more efficient and effective trading by replacing the need for liquidity pools, currently under development.</p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-400" /> Decentralization Goal
          </h3>
          <p className="text-gray-300 mb-2">Primary objective to promote decentralization and facilitate P2P trade through secure, transparent, and user-friendly smart contracts.</p>
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
              <span>Technical Features & Development Status</span>
              <span className="ml-auto text-xs text-gray-400 group-open:text-cyan-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 pt-2 text-gray-300 text-base">
              <h4 className="font-semibold text-cyan-400 mb-2">Goal</h4>
              <p className="text-gray-300 mb-4">
                The primary objective of Machina Finance is to promote decentralization and facilitate P2P trade. By leveraging the power of blockchain technology and smart contracts, Machina Finance aims to create a DEX that is secure, transparent, and user-friendly.
              </p>

              <h4 className="font-semibold text-cyan-400 mb-2">Grid Order Contracts</h4>
              <p className="text-gray-300 mb-4">
                Grid order contracts are a novel feature in the world of DEXs. They allow for a more efficient and effective trading experience by replacing the need for liquidity pools. This feature is currently under development and is expected to bring significant changes to the way DEXs operate.
              </p>

              <h4 className="font-semibold text-cyan-400 mb-2">Key Benefits</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
                    <Shield className="w-4 h-4 text-orange-300" /> Decentralized Trading
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Eliminates the need for traditional liquidity pools, creating a more decentralized trading environment.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h5 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
                    <Users className="w-4 h-4 text-green-300" /> P2P Experience
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Enables direct peer-to-peer trading without intermediaries, providing greater control to users.
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-cyan-400 mb-2">Development Status</h4>
              <p className="text-gray-300 mb-4">
                Machina Finance is currently under active development. The grid order contracts feature is being developed and tested, with the goal of revolutionizing how DEXs operate on the Ergo blockchain.
              </p>

              <h4 className="font-semibold text-cyan-400 mb-2">Resources</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <a 
                  href="https://twitter.com/machinafinance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:border-cyan-400/60 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <Twitter className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <div>
                      <h5 className="font-semibold text-base text-cyan-300 group-hover:text-cyan-200 transition-colors">Twitter</h5>
                      <p className="text-gray-400 text-sm">Follow for updates and announcements</p>
                    </div>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/machinafinance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 hover:border-orange-400/60 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
                    <div>
                      <h5 className="font-semibold text-base text-orange-300 group-hover:text-orange-200 transition-colors">GitHub</h5>
                      <p className="text-gray-400 text-sm">Explore the source code and contribute</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* In a Nutshell */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">In a Nutshell</h3>
        <p className="text-gray-300 mb-4">Machina Finance represents a revolutionary approach to decentralized exchanges, leveraging grid order contracts to eliminate traditional liquidity pools and create a truly peer-to-peer trading experience. With its focus on decentralization and innovative smart contract technology, Machina Finance is poised to transform how DEXs operate on the Ergo blockchain.</p>
      </div>
    </>
  );
} 