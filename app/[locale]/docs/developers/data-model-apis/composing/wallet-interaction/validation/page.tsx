"use client";

import React from "react";
import Link from "next/link";

export default function ValidationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Transaction Validation Rules
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
            The validation of a single transaction is divided into two stages: stateless checks and stateful checks. Stateless checks are performed solely based on the transaction itself, while stateful checks require knowledge of the current state, including the UTXO set or a part of it, and the specific boxes a transaction is destroying, along with their proof of authenticity (against a root hash included in the last block header).
          </p>
        </div>

        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Stateless Checks</h2>
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
            <li>A transaction must spend at least one input and create at least one output. A transaction can spend up to <code className="bg-neutral-700 px-2 py-1 rounded">32767</code> inputs and create up to <code className="bg-neutral-700 px-2 py-1 rounded">32767</code> outputs.</li>
            <li>All output amounts must be non-negative.</li>
            <li>An output cannot contain more than four assets, and all the assets' amounts must be positive.</li>
            <li>The transaction outputs collectively cannot contain more than 16 assets.</li>
          </ul>
          
          <div className="mt-4 p-4 bg-blue-900/30 border border-blue-600/30 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-300 mb-2">Notes</h4>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-gray-400">
              <li>Consideration: Should we allow a 0-value?</li>
              <li>Check box and transaction sizes</li>
              <li>Precise description to be provided during <a href="https://github.com/ergoplatform/ergo/issues/581" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/ergoplatform/ergo/issues/581</a></li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Stateful Checks</h2>
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
            <li>All the input boxes must be members of the UTXO set or created by other transactions within the same block.</li>
            <li>All the data input boxes must be members of the UTXO set or created by other transactions within the same block.</li>
            <li>The total input and output ERG amounts must be the same, with overflow checks.</li>
            <li>All the inputs must have valid spending proofs.</li>
            <li>The total transaction cost, which includes the cost of all spending proofs verification and the cost of all tokens in transaction inputs and outputs validation, should not exceed a limit per block (adjustable via miners voting).</li>
            <li>For each kind of asset in the outputs, the total output amount for the asset should not exceed the total input amount unless the asset identifier is the identifier of the first input; in this case, the total output amount must be positive. This rule ensures asset preservation and allows for new asset issuance.</li>
          </ul>
          
          <div className="mt-4 p-4 bg-purple-900/30 border border-purple-600/30 rounded-lg">
            <h4 className="text-sm font-semibold text-purple-300 mb-2">Note</h4>
            <p className="text-sm text-gray-400">
              For the total input amount of an asset, we do not require strict equality of the input and output amounts: the output amount could be less than the input amount (or zero).
            </p>
          </div>
        </div>

        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Full-Block Validation Rules</h2>
          <p className="text-gray-300 mb-4">
            The following rules apply for block validation when a node is verifying transactions (<code className="bg-neutral-700 px-2 py-1 rounded">VerifyTransactions = 1</code>):
          </p>
          
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
            <li>Every transaction in a block must reference inputs from the UTXO set or created by previous transactions in the block.
              <ul className="list-disc list-inside ml-6 mt-2 text-gray-400">
                <li>Note: An input cannot refer to an output of a subsequent block transaction.</li>
              </ul>
            </li>
            <li>Every transaction in a block must be valid (refer to the transaction validation rules above).</li>
            <li>The total cost of validation of all the inputs of all the transactions in the block must not exceed the allowed limit.</li>
            <li>The root hash of the authenticated UTXO set after applying the block transactions must match the one in the header.</li>
            <li>For a node maintaining UTXO, the hash of the calculated state transformations proof must match the one announced in the block's header.</li>
            <li>The header must be valid (refer to header validation rules).</li>
          </ul>
          
          <div className="mt-4 p-4 bg-cyan-900/30 border border-cyan-600/30 rounded-lg">
            <h4 className="text-sm font-semibold text-cyan-300 mb-2">TODO</h4>
            <p className="text-sm text-gray-400">
              (Mention emission rules. The extractEmissionBox function may have bugs. Extension validation rules need to be added.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 