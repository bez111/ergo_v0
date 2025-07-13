"use client";

import React from "react";
import { ExternalLink, Info, Zap, CheckCircle, TrendingUp, Shield, Users, Gavel } from "lucide-react";

export default function OptionCoinPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        OptionCoin: Decentralized Options Trading for Token Emission
      </h1>
      
      {/* Overview */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          OptionCoin is a novel concept that combines decentralized options trading with token emission on the Ergo blockchain. It is a smart contract that periodically issues new tokens and sells them via call options, with the exercise price determined by the current market price on a decentralized exchange (DEX) like Spectrum.
        </p>
      </div>

      {/* How OptionCoin Works */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Zap className="w-5 h-5" /> How OptionCoin Works
        </h2>
        <div className="space-y-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Token Issuance</h3>
                <p className="text-gray-300 text-sm">
                  The OptionCoin smart contract periodically issues new tokens, similar to the Ergo emission contract.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Options Issuance</h3>
                <p className="text-gray-300 text-sm">
                  The newly issued tokens are sold through call options on a DEX. The exercise price of these options is determined by the current market price of OptionCoin on the DEX.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Options Trading</h3>
                <p className="text-gray-300 text-sm">
                  Traders can buy or sell these call options on the DEX, allowing them to speculate on the future price of OptionCoin.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Options Exercise</h3>
                <p className="text-gray-300 text-sm">
                  If a trader exercises a call option, they receive the corresponding amount of OptionCoin tokens by paying the exercise price in ERG or another accepted token.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Token Buyback</h3>
                <p className="text-gray-300 text-sm">
                  The funds received from selling the options and exercising the contracts are used to buy back OptionCoin tokens from the DEX, creating a self-sustaining token economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <TrendingUp className="w-5 h-5" /> Benefits of OptionCoin
        </h2>
        <div className="space-y-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Decentralized Token Emission</h3>
                <p className="text-gray-300 text-sm">
                  OptionCoin provides a decentralized and transparent method for token emission, leveraging the security and trustlessness of the Ergo blockchain.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Options Trading Opportunities</h3>
                <p className="text-gray-300 text-sm">
                  Traders can participate in options trading for OptionCoin, allowing them to speculate on the token's future price and manage their risk exposure.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Self-Sustaining Token Economy</h3>
                <p className="text-gray-300 text-sm">
                  The token buyback mechanism ensures that the token supply is regulated by market demand, creating a self-sustaining token economy.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Innovative DeFi Primitive</h3>
                <p className="text-gray-300 text-sm">
                  OptionCoin introduces a novel DeFi primitive that combines token emission with options trading, opening up new possibilities for decentralized finance on Ergo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Potential Use Cases */}
      <div className="bg-neutral-900/50 border border-purple-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-400">
          <Users className="w-5 h-5" /> Potential Use Cases
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Fundraising</h3>
            <p className="text-gray-300 text-sm">
              Projects can use OptionCoin as a mechanism for decentralized fundraising by issuing and selling call options on their tokens.
            </p>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Speculation</h3>
            <p className="text-gray-300 text-sm">
              Traders can speculate on the future price of OptionCoin or other tokens by trading the corresponding options.
            </p>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Risk Management</h3>
            <p className="text-gray-300 text-sm">
              Options trading allows traders to hedge their positions and manage their risk exposure in a decentralized and trustless manner.
            </p>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Liquidity Provision</h3>
            <p className="text-gray-300 text-sm">
              Liquidity providers can earn fees by providing liquidity for OptionCoin options on DEXs.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Shield className="w-5 h-5" /> Technical Architecture
        </h2>
        <div className="space-y-4">
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <h3 className="font-semibold text-orange-400 mb-2">Smart Contract Design</h3>
            <p className="text-gray-300 text-sm">
              The OptionCoin smart contract is designed to periodically issue tokens and manage the options trading process, ensuring transparency and trustlessness.
            </p>
          </div>
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <h3 className="font-semibold text-orange-400 mb-2">DEX Integration</h3>
            <p className="text-gray-300 text-sm">
              Integration with decentralized exchanges like Spectrum enables seamless options trading and price discovery for OptionCoin tokens.
            </p>
          </div>
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <h3 className="font-semibold text-orange-400 mb-2">Market Price Determination</h3>
            <p className="text-gray-300 text-sm">
              Exercise prices are dynamically determined by the current market price on DEXs, ensuring fair and transparent pricing.
            </p>
          </div>
        </div>
      </div>

      {/* Innovation in DeFi */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Gavel className="w-5 h-5" /> Innovation in DeFi
        </h2>
        <p className="text-gray-300 mb-4">
          OptionCoin represents a unique and innovative approach to token emission and options trading in the decentralized finance ecosystem on Ergo. By combining these two concepts, it opens up new possibilities for fundraising, speculation, risk management, and liquidity provision in a trustless and decentralized manner.
        </p>
        <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
          <h3 className="font-semibold text-cyan-400 mb-2">Key Innovations</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• First protocol to combine token emission with options trading</li>
            <li>• Self-sustaining token economy through buyback mechanisms</li>
            <li>• Decentralized price discovery for options</li>
            <li>• Novel fundraising mechanism for DeFi projects</li>
          </ul>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://github.com/anon-real/optioncoin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            GitHub Repository <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://spectrum.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Spectrum DEX <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
} 