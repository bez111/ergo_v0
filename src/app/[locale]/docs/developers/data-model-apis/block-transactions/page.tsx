"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { Link } from "@/i18n/navigation";
import { Network, Package, Shield, Code, FileText, Hash, Database, Key } from "lucide-react";

export default function BlockTransactionsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Block Transactions
      </h1>

      <div className="text-gray-300 space-y-6">
        <p className="text-lg">
          The Transactions section of an Ergo <Link href="/docs/developers/data-model-apis" className="text-orange-400 hover:underline">block</Link> is the heart of the blockchain's state changes. It contains a list of all the <Link href="/docs/developers/data-model-apis" className="text-orange-400 hover:underline">transactions</Link> that are included and validated within that specific block. These transactions define how <Link href="/docs/ecosystem/Standards/eip4" className="text-orange-400 hover:underline">tokens</Link> and assets are transferred and how the overall state of the Ergo blockchain evolves.
        </p>

        <div className="mb-8">
          <Link href="/docs/developers/data-model-apis" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-lg transition-colors">
            <span className="text-orange-400">← Back to Data Model & APIs</span>
          </Link>
        </div>

        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-400 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            In the right place?
          </h3>
          <p className="text-gray-300">
            This page covers the structure of the transactions section within an Ergo block. For more general information on transactions, see the <Link href="/docs/developers/data-model-apis" className="text-orange-400 hover:underline">Transaction Overview</Link> page.
          </p>
        </div>

        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Function</h2>
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
            <li><b>Value Transfer:</b> Ergo transactions enable users to transfer ERG (Ergo's native token) and other custom <Link href="/docs/ecosystem/Standards/eip4" className="text-orange-400 hover:underline">tokens</Link>/assets to other users on the network.</li>
            <li><b>State Transition:</b> Each transaction consumes existing <Link href="/docs/developers/data-model-apis" className="text-orange-400 hover:underline">unspent boxes</Link> (which hold tokens and assets) and creates new boxes with potentially modified values and ownership. This process updates the state of the <Link href="/docs/introduction/eutxo" className="text-orange-400 hover:underline">UTXO set</Link>.</li>
            <li><b><Link href="/docs/technology/ergoscript" className="text-orange-400 hover:underline">Smart Contract</Link> Execution:</b> Transactions can trigger the execution of <Link href="/docs/technology/ergoscript" className="text-orange-400 hover:underline">scripts</Link> within boxes, allowing for complex logic and decentralized applications to be implemented on the Ergo blockchain.</li>
          </ul>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Structure</h2>
          <p className="text-gray-300 mb-4">
            The core structure of an Ergo transaction is defined by the <code className="bg-neutral-700 px-2 py-1 rounded">ErgoTransaction</code> class in <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/mempool/ErgoTransaction.scala" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoTransaction.scala</a>.
          </p>
          
          <p className="text-gray-300 mb-4">Here's a breakdown of its main components:</p>
          
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Database className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-1">inputs</h3>
                  <p className="text-gray-300 text-sm">
                    A list of <code className="bg-neutral-700 px-1.5 py-0.5 rounded text-xs">Input</code> objects, each referencing an existing <Link href="/docs/developers/data-model-apis" className="text-orange-400 hover:underline">box</Link> that the transaction will spend. Each input includes a <code className="bg-neutral-700 px-1.5 py-0.5 rounded text-xs">spendingProof</code> (see <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/signing" className="text-orange-400 hover:underline">Transaction Signing</Link>) to prove the spender has the right to consume the box.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-1">
                    <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/data-inputs" className="text-purple-300 hover:underline">dataInputs</Link>
                  </h3>
                  <p className="text-gray-300 text-sm">
                    A list of <code className="bg-neutral-700 px-1.5 py-0.5 rounded text-xs">DataInput</code> objects referencing boxes that the transaction needs to access for its scripts but won't spend. These provide data to the scripts without requiring ownership.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Package className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-1">outputCandidates</h3>
                  <p className="text-gray-300 text-sm">
                    A list of <code className="bg-neutral-700 px-1.5 py-0.5 rounded text-xs">ErgoBoxCandidate</code> objects representing the new boxes that the transaction will create. These candidates define the values, assets, and scripts of the new boxes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Validation</h2>
          <p className="text-gray-300 mb-4">
            Ergo transactions undergo rigorous <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/validation" className="text-orange-400 hover:underline">validation</Link> to ensure they are legitimate and maintain the integrity of the blockchain:
          </p>
          
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-300 mb-2">Stateless Validation</h3>
              <p className="text-gray-300 text-sm mb-2">Checks that don't require accessing the blockchain state, including:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300 text-sm">
                <li>Ensuring the transaction has inputs and outputs.</li>
                <li>Verifying basic rules (no negative values, unique inputs, etc.).</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-pink-300 mb-2">Stateful Validation</h3>
              <p className="text-gray-300 text-sm mb-2">Requires accessing the blockchain state to check:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300 text-sm">
                <li>Whether the inputs refer to valid and unspent boxes.</li>
                <li>Whether the spending proofs are correct.</li>
                <li>Whether the transaction adheres to rules related to assets, <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/min-fee" className="text-orange-400 hover:underline">fees</Link>, and block size limits.</li>
                <li>Whether the scripts in the inputs are satisfied (using the <code className="bg-neutral-700 px-1.5 py-0.5 rounded text-xs">ErgoInterpreter</code> - see <Link href="/docs/developers/ergoscript-languages/evaluation" className="text-orange-400 hover:underline">ErgoTree Evaluation</Link>).</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Key Concepts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-purple-300">Boxes</h3>
              </div>
              <p className="text-gray-300 text-sm">
                The fundamental building blocks of Ergo's <Link href="/docs/introduction/eutxo" className="text-orange-400 hover:underline">UTXO model</Link>. They are containers that hold ERG, other tokens, and scripts (smart contracts).
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-purple-300">Scripts</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Programs written in <Link href="/docs/technology/ergoscript" className="text-orange-400 hover:underline">ErgoScript</Link> (a powerful scripting language) that define the conditions for spending boxes.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-purple-300">Spending Proofs</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Cryptographic proofs that demonstrate the spender has the right to use the funds in a box, often involving <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/signing" className="text-orange-400 hover:underline">signatures</Link> or more complex <Link href="/docs/developers/cryptographic-primitives" className="text-orange-400 hover:underline">cryptographic protocols</Link>.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Key className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-purple-300">Context Extension</h3>
              </div>
              <p className="text-gray-300 text-sm">
                A key-value map attached to a spending proof, providing additional data that can be used by scripts during validation. See <Link href="/docs/developers/ergoscript-languages/blockchain-context" className="text-orange-400 hover:underline">Blockchain Context</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 