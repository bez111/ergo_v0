"use client";

import React from "react";
import Link from "next/link";
import { Shield, FileText, Hash, Database, Layers, CheckCircle, Zap, Lock } from "lucide-react";

export default function BlockADProofsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        ADProofs (Authenticated Data Proofs)
      </h1>

      <div className="mb-8">
        <Link href="/docs/developers/data-model-apis" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-lg transition-colors">
          <span className="text-orange-400">← Back to Data Model & APIs</span>
        </Link>
      </div>

      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-400 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          In the right place?
        </h3>
        <p className="text-gray-300">
          <b>ADProofs</b>, short for Authenticated Data Proofs, are a crucial component of Ergo's <Link href="/docs/developers/data-model-apis/block" className="text-orange-400 hover:underline">block structure</Link> that allows for efficient and secure <Link href="/docs/developers/ergoscript-languages/wallet-interaction/validation" className="text-orange-400 hover:underline">validation</Link> of <Link href="/docs/developers/data-model-apis/block-transactions" className="text-orange-400 hover:underline">transactions</Link> without requiring full blockchain download. They are particularly beneficial for "<Link href="/docs/developers/ergoscript-languages/wallet-interaction" className="text-orange-400 hover:underline">light clients</Link>" – <Link href="/docs/developers/ergoscript-languages/wallet-interaction" className="text-orange-400 hover:underline">wallets</Link> or <Link href="/docs/developers/ergoscript-languages/wallet-interaction" className="text-orange-400 hover:underline">nodes</Link> that don't store the entire blockchain.
        </p>
      </div>

      <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Function</h2>
        <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
          <li><b>Efficient Transaction Validation:</b> ADProofs enable light clients to verify the validity of transactions within a block by proving they are included in the <Link href="/docs/developers/cryptographic-primitives/merkle-tree" className="text-orange-400 hover:underline">Merkle tree</Link> of the <Link href="/docs/introduction/eutxo" className="text-orange-400 hover:underline">UTXO set</Link>. This eliminates the need to download and process the entire UTXO set or the full block.</li>
          <li><b>State Verification:</b> Light clients can use ADProofs to calculate the new <Link href="/docs/developers/data-model-apis/block-header" className="text-orange-400 hover:underline">state root</Link> (a cryptographic summary of the UTXO set) after applying the transactions in a block. This allows them to stay synchronized with the blockchain without storing the complete state.</li>
          <li><b>Security:</b> ADProofs are cryptographically secure, ensuring that any tampering with the transactions or the UTXO set will be detected during validation.</li>
        </ul>
      </div>

      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">Structure</h2>
        <p className="text-gray-300 mb-4">
          The <code className="bg-neutral-700 px-2 py-1 rounded">ADProofs</code> class in <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/ADProofs.scala" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ADProofs.scala</a> defines the structure of ADProofs. It contains the following key elements:
        </p>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Hash className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-1">headerId</h3>
                <p className="text-gray-300 text-sm">
                  The ID of the <Link href="/docs/developers/data-model-apis/block-header" className="text-orange-400 hover:underline">block header</Link> to which these proofs correspond.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <FileText className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-300 mb-1">proofBytes</h3>
                <p className="text-gray-300 text-sm">
                  The serialized cryptographic proof that allows for verification of the state changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Verification Process</h2>
        <ol className="list-decimal list-inside ml-4 space-y-3 text-gray-300">
          <li><b>Initialization:</b> A light client receives the block header, the ADProofs, and the list of <Link href="/docs/developers/data-model-apis/block-transactions" className="text-orange-400 hover:underline">transactions</Link>.</li>
          <li><b>Proof Application:</b> The client uses the <code className="bg-neutral-700 px-2 py-1 rounded">ADProofs</code> to construct a <code className="bg-neutral-700 px-2 py-1 rounded">BatchAVLVerifier</code>. This verifier utilizes the provided proof to validate the changes made to the UTXO set by the transactions.</li>
          <li><b>State Root Calculation:</b> The verifier calculates the new state root after applying the transactions. This calculated root is then compared against the state root declared in the block header.</li>
          <li><b>Verification Result:</b> If the calculated state root matches the one in the header, the transactions and the state transition are considered valid.</li>
        </ol>
      </div>

      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Key Concepts</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <Link href="/docs/developers/cryptographic-primitives/merkle-tree" className="group block">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-purple-300 group-hover:underline">Merkle Tree</h3>
              </div>
              <p className="text-gray-300 text-sm">
                A tree-like data structure where each leaf node represents a piece of data (in this case, a transaction or a <Link href="/docs/developers/data-model-apis/box" className="text-orange-400 hover:underline">box</Link>) and each non-leaf node is a hash of its child nodes. This structure allows for efficient verification of data inclusion.
              </p>
            </Link>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <Link href="/docs/developers/cryptographic-primitives/avl" className="group block">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-purple-300 group-hover:underline">AVL+ Tree</h3>
              </div>
              <p className="text-gray-300 text-sm">
                A self-balancing binary search tree used in Ergo to represent the UTXO set. It enables efficient lookups and updates while maintaining a verifiable structure.
              </p>
            </Link>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <h3 className="font-semibold text-purple-300">Batch Verification</h3>
            </div>
            <p className="text-gray-300 text-sm">
              The process of verifying multiple operations (transaction additions or removals) within the UTXO set simultaneously, optimizing efficiency.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-pink-400">Benefits</h2>
        <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
          <li><b>Reduced Bandwidth:</b> Light clients can avoid downloading full blocks and the entire UTXO set, saving significant bandwidth.</li>
          <li><b>Increased Efficiency:</b> ADProofs streamline the validation process, making it faster and less resource-intensive for light clients.</li>
          <li><b>Enhanced Scalability:</b> By enabling lightweight participation, ADProofs contribute to the overall scalability of the Ergo blockchain.</li>
        </ul>
      </div>
    </div>
  );
} 