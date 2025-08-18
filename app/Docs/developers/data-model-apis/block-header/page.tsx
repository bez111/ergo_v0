"use client";

import React from "react";
import Link from "next/link";
import { FileText, Network, Shield, Server, Hash, Clock, Layers, Vote, Package, Database } from "lucide-react";

export default function BlockHeaderPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">


      <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Block Header
      </h1>

      <div className="text-gray-300 space-y-6">
        <p className="text-lg">
          The <b>block header</b> in Ergo serves as a concise summary of a <Link href="/docs/developers/data-model-apis" className="text-orange-400 hover:underline">block's</Link> critical information. It plays a vital role in maintaining the integrity and security of the blockchain.
        </p>

        <div className="mb-8">
          <Link href="/docs/developers/data-model-apis" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-lg transition-colors text-orange-400">
            <span>←</span>
            <span>Back to Data Model & APIs</span>
          </Link>
        </div>

        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
            <Network className="w-6 h-6" />
            Functions
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
            <li>
              <b>Chain Synchronization:</b> Headers enable efficient synchronization between <Link href="/docs/developers/install" className="text-orange-400 hover:underline">nodes</Link> on the network. By exchanging and validating headers, nodes can quickly agree on the current state of the blockchain without downloading every full block.
            </li>
            <li>
              <b><Link href="/docs/technology/autolykos" className="text-orange-400 hover:underline">Proof-of-Work</Link> Validation:</b> The header contains information necessary to verify the miner's Proof-of-Work (PoW) solution, ensuring that the block meets the network's <Link href="/docs/developers/difficulty" className="text-orange-400 hover:underline">difficulty</Link> requirements.
            </li>
            <li>
              <b>Block Integrity:</b> Headers include hashes that link to other sections of the block (<Link href="/docs/developers/data-model-apis/block-transactions" className="text-orange-400 hover:underline">transactions</Link>, <Link href="/docs/developers/data-model-apis/block-adproofs" className="text-orange-400 hover:underline">proofs</Link>, <Link href="/docs/developers/data-model-apis/extension-section" className="text-orange-400 hover:underline">extension</Link>), guaranteeing the integrity of the entire block. Any tampering with the block's content would result in a mismatch of these hashes.
            </li>
          </ul>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-400 flex items-center gap-2">
            <Package className="w-6 h-6" />
            Components
          </h2>
          <p className="text-gray-300 mb-4">
            The <code className="bg-neutral-700 px-2 py-1 rounded">Header</code> class in <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/header/Header.scala" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Header.scala</a> defines the structure of the block header. Here's an overview of the key fields:
          </p>
          
          <div className="space-y-3">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">version</h3>
              <p className="text-gray-300 text-sm">Indicates the protocol version used to create the block. This allows for future upgrades and changes to the blockchain while maintaining backward compatibility.</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">parentId</h3>
              <p className="text-gray-300 text-sm">The ID of the previous block in the blockchain. This links blocks together, forming a chain.</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">ADProofsRoot</h3>
              <p className="text-gray-300 text-sm">A cryptographic digest of the <Link href="/docs/developers/data-model-apis/block-adproofs" className="text-orange-400 hover:underline">ADProofs</Link> that validate changes to the <Link href="/docs/introduction/eutxo" className="text-orange-400 hover:underline">UTXO set</Link>.</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">stateRoot</h3>
              <p className="text-gray-300 text-sm">A digest representing the root of the <Link href="/docs/developers/cryptographic-primitives/merkle-tree" className="text-orange-400 hover:underline">Merkle tree</Link> that captures the state of the UTXO set after this block is applied.</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">transactionsRoot</h3>
              <p className="text-gray-300 text-sm">A digest of the Merkle root of all <Link href="/docs/developers/data-model-apis/block-transactions" className="text-orange-400 hover:underline">transactions</Link> included in the block.</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">timestamp</h3>
              <p className="text-gray-300 text-sm">The time when the block was created, as reported by the miner.</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">nBits</h3>
              <p className="text-gray-300 text-sm">Represents the <Link href="/docs/developers/difficulty" className="text-orange-400 hover:underline">difficulty</Link> target for the block, determining how hard it was to mine.</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">height</h3>
              <p className="text-gray-300 text-sm">The block's height in the blockchain (<Link href="/docs/developers/emission" className="text-orange-400 hover:underline">genesis block</Link> has height 0 or 1 depending on convention, Ergo starts at 1).</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">extensionRoot</h3>
              <p className="text-gray-300 text-sm">A digest of the Merkle root of the <Link href="/docs/developers/data-model-apis/extension-section" className="text-orange-400 hover:underline">extension section</Link>, which can contain arbitrary data.</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">powSolution</h3>
              <p className="text-gray-300 text-sm">The solution to the Proof-of-Work puzzle, demonstrating that the miner expended the necessary computational effort.</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">votes</h3>
              <p className="text-gray-300 text-sm">Votes cast by miners to signal preferences for changes to <Link href="/docs/developers/governance" className="text-orange-400 hover:underline">consensus parameters</Link>.</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">unparsedBytes</h3>
              <p className="text-gray-300 text-sm">A field to accommodate future protocol upgrades, allowing for the inclusion of data not yet parsed by current versions.</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">sizeOpt</h3>
              <p className="text-gray-300 text-sm">An optional field storing the size of the header to optimize performance.</p>
            </div>
          </div>
        </div>

        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
            <Database className="w-6 h-6" />
            Key Concepts
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
            <li>
              <b><Link href="/docs/developers/cryptographic-primitives/merkle-tree" className="text-orange-400 hover:underline">Merkle Tree</Link>:</b> A data structure used extensively in blockchains to efficiently verify data integrity. It allows for quick verification that a particular piece of data is included in a larger set.
            </li>
            <li>
              <b><Link href="/docs/introduction/eutxo" className="text-orange-400 hover:underline">UTXO (Unspent Transaction Output) Set</Link>:</b> The record of all unspent transaction outputs on the blockchain, representing the current distribution of the cryptocurrency.
            </li>
            <li>
              <b><Link href="/docs/technology/autolykos" className="text-orange-400 hover:underline">Proof-of-Work (PoW)</Link>:</b> A consensus mechanism that requires miners to solve a computationally intensive puzzle to add blocks to the blockchain. This ensures the security and immutability of the chain.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 