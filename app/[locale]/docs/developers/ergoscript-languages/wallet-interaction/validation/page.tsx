"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function ValidationPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <CheckCircle className="w-10 h-10 text-cyan-400" />
        Transaction Validation Rules
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
          The validation of a single transaction is divided into two stages: stateless checks and stateful checks. Stateless checks are performed solely based on the transaction itself, while stateful checks require knowledge of the current state, including the UTXO set or a part of it, and the specific boxes a transaction is destroying, along with their proof of authenticity (against a root hash included in the last block header).
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Stateless Checks:</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li>A transaction must spend at least one input and create at least one output. A transaction can spend up to 32767 inputs and create up to 32767 outputs.</li>
          <li>All output amounts must be non-negative.</li>
          <li>An output cannot contain more than four assets, and all the assets' amounts must be positive.</li>
          <li>The transaction outputs collectively cannot contain more than 16 assets.</li>
        </ul>

        <div className="bg-neutral-800 border-l-4 border-cyan-400 p-4 mb-6">
          <h3 className="text-lg font-bold text-cyan-400 mb-2">Notes</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>Consideration: Should we allow a 0-value?</li>
            <li>Check box and transaction sizes</li>
            <li>
              Precise description to be provided during{' '}
              <a href="https://github.com/ergoplatform/ergo/issues/581" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                https://github.com/ergoplatform/ergo/issues/581
              </a>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Stateful Checks:</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li>All the input boxes must be members of the UTXO set or created by other transactions within the same block.</li>
          <li>All the data input boxes must be members of the UTXO set or created by other transactions within the same block.</li>
          <li>The total input and output ERG amounts must be the same, with overflow checks.</li>
          <li>All the inputs must have valid spending proofs.</li>
          <li>The total transaction cost, which includes the cost of all spending proofs verification and the cost of all tokens in transaction inputs and outputs validation, should not exceed a limit per block (adjustable via miners voting).</li>
          <li>For each kind of asset in the outputs, the total output amount for the asset should not exceed the total input amount unless the asset identifier is the identifier of the first input; in this case, the total output amount must be positive. This rule ensures asset preservation and allows for new asset issuance.</li>
        </ul>

        <div className="bg-neutral-800 border-l-4 border-cyan-400 p-4 mb-6">
          <h3 className="text-lg font-bold text-cyan-400 mb-2">Note</h3>
          <div className="text-gray-300">
            For the total input amount of an asset, we do not require strict equality of the input and output amounts: the output amount could be less than the input amount (or zero).
          </div>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Full-Block Validation Rules</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          The following rules apply for block validation when a node is verifying transactions (<code className="bg-neutral-800 px-1 rounded">VerifyTransactions = 1</code>):
        </div>

        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li>Every transaction in a block must reference inputs from the UTXO set or created by previous transactions in the block.</li>
          <li>Note: An input cannot refer to an output of a subsequent block transaction.</li>
          <li>Every transaction in a block must be valid (refer to the transaction validation rules above).</li>
          <li>The total cost of validation of all the inputs of all the transactions in the block must not exceed the allowed limit.</li>
          <li>The root hash of the authenticated UTXO set after applying the block transactions must match the one in the header.</li>
          <li>For a node maintaining UTXO, the hash of the calculated state transformations proof must match the one announced in the block's header.</li>
          <li>The header must be valid (refer to header validation rules).</li>
        </ul>

        <div className="bg-neutral-800 border-l-4 border-yellow-400 p-4 mb-8">
          <h3 className="text-lg font-bold text-yellow-400 mb-2">TODO</h3>
          <div className="text-gray-300">
            (Mention emission rules. The extractEmissionBox function may have bugs. Extension validation rules need to be added.)
          </div>
        </div>
      </div>
    </>
  );
} 