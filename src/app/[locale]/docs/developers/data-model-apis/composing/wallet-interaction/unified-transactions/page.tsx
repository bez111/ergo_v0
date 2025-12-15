"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Link } from "@/i18n/navigation";

export default function UnifiedTransactionsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Unified Transactions in Ergo
      </h1>
      
      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/docs/developers/data-model-apis/composing/wallet-interaction"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back to Wallet Interaction
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300">
            Transactions in Ergo are pivotal in enabling a variety of operations within the network. This section delves into the concept of unified transactions, focusing on key elements such as the fee structure and the prohibition of out-of-thin-air emission in the "coinbase" transaction.
          </p>
        </div>

        <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Fee Structure: The Concept of Boxes</h2>
          <p className="text-gray-300 mb-4">
            In Ergo, transaction fees are uniquely represented as boxes. These boxes are the fundamental units that hold and transfer value within the blockchain. They can encapsulate various types of assets, including but not limited to cryptocurrencies, tokens, and other forms of digital value.
          </p>
          
          <p className="text-gray-300 mb-4">
            To maintain the network's efficiency and to motivate miners to include transactions in blocks, users are required to attach a suitable fee to their transactions. This fee is manifested as an output box, which is generated in conjunction with the other outputs of the transaction.
          </p>
          
          <p className="text-gray-300">
            The act of attaching a fee box to a transaction signifies the user's willingness to compensate miners for processing their transaction. This fee acts as an incentive for miners, motivating them to validate and incorporate the transaction into the blockchain.
          </p>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">No Out-of-Thin-Air Emission in the "Coinbase" Transaction</h2>
          <p className="text-gray-300 mb-4">
            The "coinbase" transaction, also referred to as the generation transaction, is the first transaction in each block. It rewards the miner for their efforts in mining and appending the block to the blockchain. Ergo stands out from some other blockchain protocols by disallowing out-of-thin-air emission in the "coinbase" transaction.
          </p>
          
          <p className="text-gray-300 mb-4">
            Out-of-thin-air emission is the process of creating new coins or tokens during the coinbase transaction, without any preceding inputs or transactions. In Ergo, every coin or token in circulation must have originated from a legitimate source and must be traceable in the transaction history.
          </p>
          
          <p className="text-gray-300">
            By prohibiting out-of-thin-air emission, Ergo maintains the integrity and scarcity of its native cryptocurrency, Erg. This strategic decision bolsters the security and economic stability of the blockchain, making it resistant to inflationary practices.
          </p>
        </div>

        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-gray-300">
            Ergo's unified transaction model allows users to attach fees as boxes, providing incentives for miners and contributing to the network's sustainability. Moreover, the prohibition of out-of-thin-air emission in the "coinbase" transaction further enhances the security and integrity of the blockchain's native cryptocurrency.
          </p>
        </div>
      </div>
    </div>
  );
} 