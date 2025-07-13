"use client";

import React from "react";
import { ExternalLink, Info, Zap, CheckCircle, TrendingUp, Shield, Users, Gavel, AlertTriangle, Target, Layers, Calculator, ArrowUpDown } from "lucide-react";

export default function OptionPoolsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        OptionPools: Unleashing the Power of Ergo for Decentralized Options Trading
      </h1>
      
      {/* Introduction */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Introduction
        </h2>
        <p className="text-gray-300 mb-2">
          OptionPools is a groundbreaking pool-to-peer Automated Market Maker (AMM) trading protocol designed to bridge the gap between traditional finance and decentralized finance (DeFi) in the realm of options trading. Built on the robust Ergo blockchain, OptionPools leverages Ergo's unique capabilities to create a secure and efficient platform for trading options directly on Layer 1.
        </p>
      </div>

      {/* Motivation */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Target className="w-5 h-5" /> The Motivation Behind OptionPools
        </h2>
        <p className="text-gray-300 mb-4">
          Despite the prevalence and importance of options in traditional finance, their adoption in DeFi has been limited, accounting for less than 0.2% of the total DeFi Total Value Locked (TVL) according to DeFi Llama. This lack of adoption can be attributed to several factors:
        </p>
        <div className="space-y-4">
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-orange-400 mb-1">High Risks</h3>
                <p className="text-gray-300 text-sm">
                  Existing DeFi options protocols are often built on Layer 2 solutions, relying on third-party oracles and complex smart contracts, leading to potential exploits and deterring institutional engagement due to security concerns.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-orange-400 mb-1">Liquidity Challenges</h3>
                <p className="text-gray-300 text-sm">
                  DeFi options face liquidity challenges, exacerbated by the high risk and capital inefficiency of their structures. While order books in DeFi are typically fully collateralized and AMMs may be partially collateralized, traditional finance systems often operate with significant undercollateralization.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-orange-400 mb-1">Performance Bottlenecks</h3>
                <p className="text-gray-300 text-sm">
                  On Layer 1 networks like Ethereum, option pricing is extremely gas-intensive, pushing most activities to Layer 2. Even on Layer 2, costs remain higher for DeFi options compared to their traditional finance counterparts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ergo Solution */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <Shield className="w-5 h-5" /> Ergo: The Solution to DeFi Options Challenges
        </h2>
        <p className="text-gray-300 mb-4">
          Ergo provides a solution to the shortcomings of existing DeFi options protocols. By leveraging Ergo's unique UTXO model and superior performance, OptionPools can be built directly on Layer 1, minimizing the set of risk assumptions and potential attack surfaces.
        </p>
        <div className="space-y-4">
          <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-400 mb-1">Layer 1 Security</h3>
                <p className="text-gray-300 text-sm">
                  Contracts on Ergo are primarily used to verify outputs rather than execute complex computations, reducing the risk of vulnerabilities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-400 mb-1">On-Chain Pricing</h3>
                <p className="text-gray-300 text-sm">
                  Ergo's high performance allows for on-chain option pricing using the Black-Scholes model, a feat that was demonstrated during the ErgoHack event.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-400 mb-1">Capital Efficiency</h3>
                <p className="text-gray-300 text-sm">
                  By integrating directly with duckpools for undercollateralized lending, OptionPools can offer capital-efficient options trading, addressing the liquidity challenges faced by existing DeFi options protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Components */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Layers className="w-5 h-5" /> Key Components of OptionPools
        </h2>
        <p className="text-gray-300 mb-4">
          The OptionPools submission for the ErgoHack event consists of a comprehensive suite of smart contracts, off-chain code, and a user interface tailored for ERG/SigUSD optionPools. This framework is adaptable to other pairs like ERG/rsBTC or SigUSD/rsBTC.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Smart Contracts</h3>
            <p className="text-gray-300 text-sm mb-3">
              OptionPools includes specific contracts for managing the AMM, options logic, repayments, and proxy interactions.
            </p>
            <a
              href="https://github.com/duckpools/off-chain-bot/tree/optionPools/optionPools/contracts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm"
            >
              View Contracts <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Off-Chain Code</h3>
            <p className="text-gray-300 text-sm mb-3">
              The off-chain code, implemented in Python, handles various aspects of the OptionPools platform.
            </p>
            <a
              href="https://github.com/duckpools/off-chain-bot/tree/optionPools/optionPools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm"
            >
              View Code <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">User Interface</h3>
            <p className="text-gray-300 text-sm">
              A user-friendly website hosts the OptionPools platform, allowing users to interact with the smart contracts and off-chain code.
            </p>
          </div>
        </div>
      </div>

      {/* Innovative Features */}
      <div className="bg-neutral-900/50 border border-purple-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-400">
          <Zap className="w-5 h-5" /> Innovative Features
        </h2>
        <p className="text-gray-300 mb-4">
          OptionPools introduces several innovative features to the DeFi options market:
        </p>
        <div className="space-y-4">
          <div className="bg-purple-800/20 border border-purple-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <ArrowUpDown className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-400 mb-1">Dual-Asset Pools</h3>
                <p className="text-gray-300 text-sm">
                  OptionPools supports dual-asset liquidity provisioning, a novel feature in the DeFi options market. Pools do not need to maintain market ratios of asset pairs and can earn fees in one side or both sides of a pair. This flexibility allows liquidity providers (LPs) to adopt varied investment stances—bullish, neutral, or bearish—by choosing which pools they contribute to.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-800/20 border border-purple-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Calculator className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-400 mb-1">Black-Scholes Pricing Model</h3>
                <p className="text-gray-300 text-sm">
                  The team successfully implemented the Black-Scholes pricing model directly into the OptionPools contracts, demonstrating the feasibility of on-chain option pricing on Layer 1. The pricing outputs were reasonably precise, with the d1 and d2 values from the model being extremely accurate.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-800/20 border border-purple-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-400 mb-1">Real-Time Utility Adjustment</h3>
                <p className="text-gray-300 text-sm">
                  OptionPools incorporates the ability to adjust option prices based on the real-time utility of the pool. The more option contracts are circulating (higher utility), the more expensive the option price paid by the trader. This feature enables the pools to reflect real-time sentiment on an option's price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Limitations and Future Goals */}
      <div className="bg-neutral-900/50 border border-yellow-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
          <Gavel className="w-5 h-5" /> Limitations and Future Goals
        </h2>
        <p className="text-gray-300 mb-4">
          While the OptionPools submission for the ErgoHack event showcases the potential of Ergo for decentralized options trading, there are several limitations and future goals to be addressed:
        </p>
        <div className="space-y-4">
          <div className="bg-yellow-800/20 border border-yellow-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-400 mb-1">Multiple Strikes</h3>
                <p className="text-gray-300 text-sm">
                  The current implementation supports only a single strike for calls and puts. Expanding this to allow custom strikes dynamically priced by the pool is a planned enhancement.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-800/20 border border-yellow-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-400 mb-1">Delta Neutral Strategy</h3>
                <p className="text-gray-300 text-sm">
                  Future iterations will incorporate delta neutral strategies by aggregating 'd1' values from all options, improving AMM pricing accuracy and risk management. Since the team already calculates d1 in their contracts, this is a relatively simple extension.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Remarks */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Final Remarks
        </h2>
        <p className="text-gray-300 mb-4">
          During the ErgoHack event, the OptionPools team introduced several innovations that enrich the Ergo ecosystem, including useful math functions, a historical volatility oracle, and an entire pool-to-peer options trading platform. They demonstrated technical innovation with their implementation of on-chain Black-Scholes options pricing and packed numerous features into the week of development.
        </p>
        <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
          <h3 className="font-semibold text-cyan-400 mb-2">Key Achievements</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• On-chain Black-Scholes options pricing implementation</li>
            <li>• Dual-asset liquidity pools</li>
            <li>• Options price adjustments based on pool utility</li>
            <li>• Historical volatility oracle development</li>
            <li>• Complete pool-to-peer options trading platform</li>
          </ul>
        </div>
        <p className="text-gray-300 mt-4">
          The OptionPools project underscores the potential of Ergo to become a cornerstone in the DeFi options space, providing a compelling reason to bridge Bitcoin into the Ergo ecosystem and leverage its DeFi capabilities.
        </p>
      </div>

      {/* Resources */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://github.com/anon-real/optionpools"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            GitHub Repository <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=gJQiAB7H8J4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            ErgoHack Presentation <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
} 