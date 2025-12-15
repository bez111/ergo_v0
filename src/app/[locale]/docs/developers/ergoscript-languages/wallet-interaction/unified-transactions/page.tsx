"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Link2 } from "lucide-react";

export default function UnifiedTransactionsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Link2 className="w-10 h-10 text-pink-400" />
        Unified Transactions in Ergo
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages/wallet-interaction"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Wallet Interaction
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-gray-300 mb-6 max-w-2xl">
          Transactions in Ergo are pivotal in enabling a variety of operations within the network. This section delves into the concept of unified transactions, focusing on key elements such as the fee structure and the prohibition of out-of-thin-air emission in the "coinbase" transaction.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Fee Structure: The Concept of Boxes</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          In Ergo, transaction fees are uniquely represented as boxes. These boxes are the fundamental units that hold and transfer value within the blockchain. They can encapsulate various types of assets, including but not limited to cryptocurrencies, tokens, and other forms of digital value.
        </div>

        <div className="text-gray-300 mb-4 max-w-2xl">
          To maintain the network's efficiency and to motivate miners to include transactions in blocks, users are required to attach a suitable fee to their transactions. This fee is manifested as an output box, which is generated in conjunction with the other outputs of the transaction.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          The act of attaching a fee box to a transaction signifies the user's willingness to compensate miners for processing their transaction. This fee acts as an incentive for miners, motivating them to validate and incorporate the transaction into the blockchain.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">No Out-of-Thin-Air Emission in the "Coinbase" Transaction</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          The "coinbase" transaction, also referred to as the generation transaction, is the first transaction in each block. It rewards the miner for their efforts in mining and appending the block to the blockchain. Ergo stands out from some other blockchain protocols by disallowing out-of-thin-air emission in the "coinbase" transaction.
        </div>

        <div className="text-gray-300 mb-4 max-w-2xl">
          Out-of-thin-air emission is the process of creating new coins or tokens during the coinbase transaction, without any preceding inputs or transactions. In Ergo, every coin or token in circulation must have originated from a legitimate source and must be traceable in the transaction history.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          By prohibiting out-of-thin-air emission, Ergo maintains the integrity and scarcity of its native cryptocurrency, Erg. This strategic decision bolsters the security and economic stability of the blockchain, making it resistant to inflationary practices.
        </div>

        <div className="text-gray-300 mb-8 max-w-2xl">
          Ergo's unified transaction model allows users to attach fees as boxes, providing incentives for miners and contributing to the network's sustainability. Moreover, the prohibition of out-of-thin-air emission in the "coinbase" transaction further enhances the security and integrity of the blockchain's native cryptocurrency.
        </div>
      </div>
    </>
  );
} 