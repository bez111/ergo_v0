"use client";

import React from "react";
import { ExternalLink, Info, Zap, CheckCircle, TrendingUp, Shield, Users, Gavel, BookOpen, Calculator, Target, Play, AlertCircle } from "lucide-react";

export default function SigmaOPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        SigmaO: Advanced Options Trading on Ergo
      </h1>
      
      {/* Introduction */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Introduction
        </h2>
        <p className="text-gray-300 mb-2">
          Ergo's decentralized finance (DeFi) landscape is about to expand with the introduction of SigmaO, a pioneering platform designed to facilitate options trading on the Ergo blockchain. SigmaO aims to leverage Ergo's unique capabilities to offer a versatile and secure environment for trading options, enhancing the financial instruments available within the Ergo ecosystem.
        </p>
      </div>

      {/* What is SigmaO */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Target className="w-5 h-5" /> What is SigmaO?
        </h2>
        <p className="text-gray-300 mb-4">
          SigmaO is an innovative platform that brings the complex world of options trading to the Ergo blockchain, allowing users to engage in call and put options across a variety of Ergo EIP-4 tokens. With a focus on accessibility and security, SigmaO is poised to become a key player in Ergo's DeFi offerings.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Platform Links</h3>
            <div className="space-y-2 text-sm">
              <a href="https://sigmao.cc" target="_blank" rel="noopener noreferrer" className="flex items-center text-cyan-400 hover:text-cyan-300">
                Website <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <a href="https://sigmao.cc/about" target="_blank" rel="noopener noreferrer" className="flex items-center text-cyan-400 hover:text-cyan-300">
                About <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <a href="https://t.me/SigmaOpts" target="_blank" rel="noopener noreferrer" className="flex items-center text-cyan-400 hover:text-cyan-300">
                Telegram <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Resources</h3>
            <div className="space-y-2 text-sm">
              <a href="https://github.com/ThierryM1212/sigmao" target="_blank" rel="noopener noreferrer" className="flex items-center text-cyan-400 hover:text-cyan-300">
                GitHub <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <a href="https://twitter.com/SigmaOptions" target="_blank" rel="noopener noreferrer" className="flex items-center text-cyan-400 hover:text-cyan-300">
                Twitter <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* How Does SigmaO Work */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <Zap className="w-5 h-5" /> How Does SigmaO Work?
        </h2>
        <p className="text-gray-300 mb-4">
          SigmaO plans to make options trading accessible by providing a platform where users can easily create and trade options. The platform utilizes Ergo's smart contracts to ensure transactions are secure and efficient. Pricing mechanisms for these options are derived from Spectrum Liquidity Pools, providing transparent and fair valuation.
        </p>
        <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
          <h3 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
            <Play className="w-5 h-5" /> Video Tutorial
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            Join qx() as he takes you through a one shot no edits no nonsense take on how to do options trading on Ergo! This is only for buying call options, more videos to come with how to execute the call, and create calls and puts.
          </p>
        </div>
      </div>

      {/* What are Options */}
      <div className="bg-neutral-900/50 border border-purple-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-400">
          <BookOpen className="w-5 h-5" /> What are Options?
        </h2>
        <p className="text-gray-300 mb-4">
          Options are like contracts that give you the choice to buy or sell something (like stocks or cryptocurrencies) at a fixed price before a certain date. There are two main types:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-purple-800/20 border border-purple-600 rounded-lg p-4">
            <h3 className="font-semibold text-purple-400 mb-2">Call Options</h3>
            <p className="text-gray-300 text-sm">
              These let you buy something at a set price in the future.
            </p>
          </div>
          <div className="bg-purple-800/20 border border-purple-600 rounded-lg p-4">
            <h3 className="font-semibold text-purple-400 mb-2">Put Options</h3>
            <p className="text-gray-300 text-sm">
              These let you sell something at a set price in the future.
            </p>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-purple-400 mb-3">How are Options Used?</h3>
        <div className="space-y-4">
          <div className="bg-purple-800/20 border border-purple-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-purple-400 mb-1">Hedging</h4>
                <p className="text-gray-300 text-sm">
                  Imagine you own Ergo tokens and are worried their value might drop. You could buy a put option, which gives you the right to sell your Ergo tokens at a fixed price, protecting you from losses if the price falls.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-800/20 border border-purple-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-purple-400 mb-1">Speculation</h4>
                <p className="text-gray-300 text-sm">
                  Let's say you believe the price of Ergo tokens will increase soon. You could buy a call option, allowing you to purchase Ergo tokens at a set price in the future. If the price goes up, you can buy them at the lower price stated in the option and then sell them at the higher market price, making a profit.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-800/20 border border-purple-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Calculator className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-purple-400 mb-1">Generating Income</h4>
                <p className="text-gray-300 text-sm">
                  Alternatively, you could sell a call option if you don't think Ergo's price will rise significantly. You'll receive money upfront for selling the option, and if the price stays below the agreed price, you keep the money without having to sell any tokens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <CheckCircle className="w-5 h-5" /> The Benefits of Trading Options on SigmaO
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Hedging</h3>
            <p className="text-gray-300 text-sm">
              SigmaO offers traders the ability to hedge their investments, protecting against market volatility and minimizing potential losses.
            </p>
          </div>
          <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Speculation</h3>
            <p className="text-gray-300 text-sm">
              Traders can speculate on the future price movements of various tokens, with the potential for high returns.
            </p>
          </div>
          <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Accessibility</h3>
            <p className="text-gray-300 text-sm">
              By simplifying the options trading process, SigmaO makes sophisticated financial strategies available to a broader audience.
            </p>
          </div>
          <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Security</h3>
            <p className="text-gray-300 text-sm">
              Leveraging Ergo's blockchain technology, SigmaO ensures that all trades are secure and transparent.
            </p>
          </div>
        </div>
      </div>

      {/* Understanding SigmaO */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Gavel className="w-5 h-5" /> Understanding SigmaO: Simplified Explanation
        </h2>
        <p className="text-gray-300 mb-4">
          SigmaO is a decentralized application (dApp) built on the Ergo blockchain. It was initially developed for the Ergohack VI event and is now available for testing at sigmao.cc.
        </p>
        
        <h3 className="text-lg font-semibold text-orange-400 mb-3">What SigmaO Does:</h3>
        <div className="space-y-4">
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-orange-400 mb-1">Token Creation</h4>
                <p className="text-gray-300 text-sm">
                  It allows users to create standard EIP-4 tokens, representing the value of an option on another Ergo EIP-4 token.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-orange-400 mb-1">Trading Platform</h4>
                <p className="text-gray-300 text-sm">
                  SigmaO provides contracts for trading Ergo tokens and SigmaO options in an order book style exchange.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-orange-400 mb-1">Permissionless Contracts</h4>
                <p className="text-gray-300 text-sm">
                  All contracts used by SigmaO are permissionless, meaning developers and UIs interacting with SigmaO contracts do not have any privileges. There's no updatable configuration by an "app owner."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Option Contracts */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Calculator className="w-5 h-5" /> Option Contracts
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">Type</h3>
              <p className="text-gray-300 text-sm">
                SigmaO options can be either Call (grant to buy an underlying token) or Put (grant to sell an underlying token).
              </p>
            </div>
            <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">Style</h3>
              <p className="text-gray-300 text-sm">
                They can be American (exercisable up to the maturity date) or European (exercisable during 24h after the maturity date).
              </p>
            </div>
            <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">Share Size</h3>
              <p className="text-gray-300 text-sm">
                Represents the number of tokens granted per option.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">Strike Price</h3>
              <p className="text-gray-300 text-sm">
                The price of the underlying asset when exercising the option.
              </p>
            </div>
            <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">Maturity Date</h3>
              <p className="text-gray-300 text-sm">
                The end of the grant of the option.
              </p>
            </div>
            <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">Pricing</h3>
              <p className="text-gray-300 text-sm">
                SigmaO supports priced sell options for options on an underlying token with an Oracle price or Spectrum liquidity pool.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="bg-neutral-900/50 border border-yellow-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
          <Users className="w-5 h-5" /> Examples
        </h2>
        <div className="space-y-4">
          <div className="bg-yellow-800/20 border border-yellow-600 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-400 mb-2">Gold Oracle Token Option</h3>
            <p className="text-gray-300 text-sm mb-3">
              An opportunity was presented for users to engage in European options for gold oracle tokens. These options allowed participants to speculate on the future price of gold oracle tokens by acquiring the option for a set ERG amount and exercising it before a specified date with a predetermined strike price.
            </p>
            <a href="#" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 text-sm">
              View Option Details <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-yellow-800/20 border border-yellow-600 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-400 mb-2">GORT Token Option</h3>
            <p className="text-gray-300 text-sm mb-3">
              Options were introduced for GORT tokens, providing users with the ability to speculate on its price dynamics. Participants could purchase a predetermined amount of GORT at the current price within a specified time frame by investing a set amount of ERG.
            </p>
            <a href="#" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 text-sm">
              View Option Details <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Future Developments */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Future Developments
        </h2>
        <p className="text-gray-300 mb-4">
          The SigmaO team is dedicated to enhancing the platform with user-friendly interfaces and off-chain bots for efficient transaction processing. This will not only improve the trading experience but also contribute to the overall liquidity and dynamism of Ergo's DeFi ecosystem.
        </p>
        <div className="bg-cyan-800/20 border border-cyan-600 rounded-lg p-4">
          <h3 className="font-semibold text-cyan-400 mb-2">Planned Enhancements</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• User-friendly interfaces for easier trading</li>
            <li>• Off-chain bots for efficient transaction processing</li>
            <li>• Enhanced liquidity and market dynamics</li>
            <li>• Improved trading experience</li>
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
            href="https://sigmao.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Visit SigmaO <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://github.com/ThierryM1212/sigmao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            GitHub Repository <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
} 