"use client";

import React from "react";
import { ExternalLink, Info, Zap, CheckCircle, Shield, Code, Users, Globe } from "lucide-react";

export default function SigmaFiPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        SigmaFi: P2P DeFi Bond Market
      </h1>
      
      {/* Overview */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          SigmaFi is a P2P DeFi bond market that is currently live and open-source. The platform enables any Ergo wallet holder to request a loan, specifying the loan amount, term, and interest, with loans guaranteed by collateral.
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Zap className="w-5 h-5" /> How SigmaFi Works
        </h2>
        <div className="space-y-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Loan Requests</h3>
                <p className="text-gray-300 text-sm">
                  Any Ergo wallet holder can request a loan, specifying the loan amount, term, and interest. The loans are guaranteed by collateral, which the lender can claim if the loan is not repaid by the end of the term.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Over-Collateralization</h3>
                <p className="text-gray-300 text-sm">
                  Due to the volatility of cryptocurrencies, loans need to be over-collateralized to get funded. For instance, a loan of 100 SigUSD might require ERG worth 150 SigUSD as collateral.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Smart Contracts</h3>
                <p className="text-gray-300 text-sm">
                  Each new loan request generates a smart contract that outlines the loan terms. This contract holds the collateral and offers the loan on the SigmaFi website.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Lending Process</h3>
                <p className="text-gray-300 text-sm">
                  If a user agrees to the loan terms, they can lend the money via the website. The requester then receives the loan, and the lender is either repaid with interest or claims the collateral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DeFi Principles */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <Globe className="w-5 h-5" /> Decentralized Finance Principles
        </h2>
        <p className="text-gray-300 mb-4">
          SigmaFi exemplifies decentralized finance (DeFi), facilitating the creation and funding of loan requests directly between individuals, without the need for banks or other intermediaries.
        </p>
        <div className="bg-green-800/20 border border-green-600 rounded-lg p-4">
          <h3 className="font-semibold text-green-400 mb-2">Key Benefits</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Direct peer-to-peer lending without intermediaries</li>
            <li>• Transparent and trustless loan agreements</li>
            <li>• Automated collateral management</li>
            <li>• Open-source smart contracts</li>
          </ul>
        </div>
      </div>

      {/* Technology */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Code className="w-5 h-5" /> Technology & Architecture
        </h2>
        <p className="text-gray-300 mb-4">
          The platform utilizes the extended unspent transaction output (eUTXO) model to create these loans. All SigmaFi contracts are open-source, providing a foundation for developers to build upon.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">eUTXO Model: Leverages Ergo's extended unspent transaction output model</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Open Source: All contracts are publicly available for review and development</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Developer Friendly: Foundation for building enhanced DeFi applications</span>
          </div>
        </div>
      </div>

      {/* Real-World Applications */}
      <div className="bg-neutral-900/50 border border-purple-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-400">
          <Users className="w-5 h-5" /> Real-World Financial Instruments
        </h2>
        <p className="text-gray-300 mb-4">
          SigmaFi implements various real-world financial instruments and agreements, encouraging developers to learn from and enhance DeFi applications in the Ergo ecosystem.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Bond Markets</h3>
            <p className="text-gray-300 text-sm">
              Traditional bond market mechanics adapted for blockchain, enabling fixed-term lending with interest.
            </p>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Collateral Management</h3>
            <p className="text-gray-300 text-sm">
              Automated collateral systems that protect lenders while enabling borrowers to access liquidity.
            </p>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="https://t.me/sigmafi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Telegram <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://github.com/SigmaFi/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Documentation <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://github.com/SigmaFi/contracts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Contracts <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://sigmafi.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            User Interface <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href="https://github.com/SigmaFi/plugins"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            Off-chain Plugins <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
} 