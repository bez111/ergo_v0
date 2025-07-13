"use client";

import React from "react";
import { ExternalLink, Info, Zap, CheckCircle, Gavel, TrendingUp, Users, Shield, Clock } from "lucide-react";

export default function AuctionCoinPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Auction Coin: A Decentralized Token Issuance Model on Ergo Blockchain
      </h1>
      
      {/* Overview */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          Auction Coin is a decentralized token distribution protocol designed for fairness and trustlessness in the open market. It autonomously manages price discovery and offers several advantages for token distribution, liquidity provision, and development funding.
        </p>
      </div>

      {/* Key Advantages */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Zap className="w-5 h-5" /> Key Advantages
        </h2>
        <div className="space-y-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Token Locking and Emission</h3>
                <p className="text-gray-300 text-sm">
                  Tokens are initially locked in a smart contract, and emission occurs through periodic auctions, enhancing fairness and decentralization.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Token Distribution</h3>
                <p className="text-gray-300 text-sm">
                  Teams can use Auction Coin for token distribution, ensuring fairness, decentralization, trustlessness, and improved price discovery, promoting community involvement and dApp adoption.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Liquidity Provider</h3>
                <p className="text-gray-300 text-sm">
                  The protocol can generate liquidity for Liquidity Pools (LP) through periodic token auctions, offering advantages over traditional methods.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Raising Funds for Development</h3>
                <p className="text-gray-300 text-sm">
                  Auctions' proceeds can support ongoing team development, aligning interests with project success and preventing market dumping.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Built on Existing Infrastructures</h3>
                <p className="text-gray-300 text-sm">
                  Built upon established Auction infrastructure, it simplifies complexity and enhances versatility for various use cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation */}
      <div className="bg-neutral-900/50 border border-purple-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-400">
          <Gavel className="w-5 h-5" /> Implementation
        </h2>
        <p className="text-gray-300 mb-4">
          The AuctionCoin token represents the initial implementation of this protocol, introducing an innovative financial game with game-theoretic interactions and "pure degen finance" (DegFi).
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Game-Theoretic Interactions</h3>
            <p className="text-gray-300 text-sm">
              The transparent nature of Auction Coin invites strategic plays, fostering "pure degen finance" (DegFi).
            </p>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">DegFi Mechanics</h3>
            <p className="text-gray-300 text-sm">
              Operating atop a transparent mechanism with well-defined assumptions for strategic trading.
            </p>
          </div>
        </div>
      </div>

      {/* Tokenomics */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <TrendingUp className="w-5 h-5" /> Tokenomics and Fee Structure
        </h2>
        <div className="space-y-4">
          <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Token Supply</h3>
            <p className="text-gray-300 text-sm">
              AuctionCoin supply is 100k in total, with allocations for the team, contributors, LP bootstrap, and locked with the main contract.
            </p>
          </div>
          <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Operational Fee</h3>
            <p className="text-gray-300 text-sm">
              A 3% operational fee from sold auctions supports development and ongoing project maintenance.
            </p>
          </div>
        </div>
      </div>

      {/* Emission Schedule */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Clock className="w-5 h-5" /> Emission Schedule
        </h2>
        <p className="text-gray-300 mb-4">
          Every 4 days, 10 batches of declining price auctions with a total of 1k AuctionCoins will start and last for 3 days, resulting in a one-year emission schedule.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Emission Cycle: <span className="text-orange-400 font-semibold">Every 4 days</span></span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Batch Size: <span className="text-orange-400 font-semibold">10 batches per cycle</span></span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Tokens per Cycle: <span className="text-orange-400 font-semibold">1,000 AuctionCoins</span></span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Auction Duration: <span className="text-orange-400 font-semibold">3 days per batch</span></span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Total Schedule: <span className="text-orange-400 font-semibold">One year</span></span>
          </div>
        </div>
      </div>

      {/* How It Functions */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Zap className="w-5 h-5" /> How Auction Coin Functions
        </h2>
        <div className="space-y-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Token Locking and Initialization</h3>
                <p className="text-gray-300 text-sm">
                  Initially, all newly minted Auction Coin tokens are securely locked within a smart contract, with only a small portion allocated to seed a liquidity pool. This liquidity pool becomes an integral component of the token's ecosystem, ensuring its liquidity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Token Auctions</h3>
                <p className="text-gray-300 text-sm">
                  At regular intervals of two days, equivalent to 1,440 blocks on the Ergo blockchain, a fixed quantity of AC tokens is made available for unlocking and subsequently placed into auctions. These auctions commence with predefined bid amounts, governed by the smart contract, and run for precisely one day (720 blocks).
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Dynamic Pricing</h3>
                <p className="text-gray-300 text-sm">
                  The initial bid for each auction is subject to dynamic adjustments. Following a successful auction, the starting bid for the subsequent auction increases by 1%. Conversely, if an auction fails to meet its objectives, the starting bid decreases by 1%. This dynamic pricing mechanism enhances adaptability and responsiveness to prevailing market conditions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Erg Accumulation and Token Buyback</h3>
                <p className="text-gray-300 text-sm">
                  Every 20 days or after the completion of 10 successful auctions, the smart contract utilizes the accumulated Ergs (the native token of the Ergo blockchain) to repurchase AC tokens from the liquidity pool. This automated process adheres to a predefined contract logic, mirroring established models for token buybacks from liquidity pools.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Game-Theoretic Interactions and DegFi</h3>
                <p className="text-gray-300 text-sm">
                  The transparent and predictable nature of the Auction Coin mechanism stimulates a range of strategic interactions. Participants may choose to accumulate AC tokens in anticipation of a forthcoming buyback event, with the intention of selling them at a higher price following the smart contract's intervention. This sets the stage for what is often referred to as "pure degen finance" (DegFi), operating atop a transparent mechanism with well-defined assumptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://auctioncoin.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Try AuctionCoin <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            ErgoForum Discussion <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://github.com/anon-real/auctioncoin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Git Repository <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://twitter.com/auctioncoin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Twitter <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
        <div className="mt-4 p-4 bg-neutral-800/50 border border-neutral-600 rounded-lg">
          <h3 className="font-semibold text-white mb-2">Join the Discussion</h3>
          <p className="text-gray-300 text-sm">
            Connect with the community on Telegram or Discord to stay updated on the latest developments and participate in discussions about Auction Coin's innovative token distribution model.
          </p>
        </div>
      </div>
    </>
  );
} 