"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import Link from "next/link";
import { Settings, FileText, Zap, Database, Layers, CheckCircle, Network, BookOpen } from "lucide-react";

export default function ExtensionSectionPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Ergo Block Structure: The Extension Section
      </h1>

      <div className="mb-8">
        <Link href="/docs/developers/data-model-apis" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-lg transition-colors">
          <span className="text-orange-400">← Back to Data Model & APIs</span>
        </Link>
      </div>

      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-400 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          In the right place?
        </h3>
        <p className="text-gray-300">
          Unlike many blockchains that only store <Link href="/docs/developers/data-model-apis/block-transactions" className="text-orange-400 hover:underline">transaction</Link> data, Ergo includes a specialized <b>Extension section</b> in each <Link href="/docs/developers/data-model-apis/block" className="text-orange-400 hover:underline">block</Link>. This versatile key-value storage system provides a flexible mechanism to include critical data beyond standard transactions, enabling features like efficient <Link href="/docs/developers/ergoscript-languages/wallet-interaction" className="text-orange-400 hover:underline">light client</Link> support and future-proofing the blockchain for upgrades.
        </p>
      </div>

      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">Why is the Extension Section Important?</h2>
        <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
          <li><b>Flexibility:</b> Allows incorporating data that doesn't fit into the core block structure, supporting future <Link href="/docs/developers/governance" className="text-orange-400 hover:underline">protocol upgrades</Link> and application-specific needs.</li>
          <li><b>Efficiency:</b> Enables <Link href="/docs/developers/ergoscript-languages/wallet-interaction" className="text-orange-400 hover:underline">nodes</Link> and clients to download only necessary block sections, optimizing storage, bandwidth, and processing resources.</li>
          <li><b>Light Client Support:</b> Stores essential information like system parameters and <Link href="/docs/developers/cryptographic-primitives/popow" className="text-orange-400 hover:underline">NiPoPoWs</Link> links, allowing light clients to efficiently validate the blockchain without downloading its full history.</li>
        </ul>
      </div>

      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">How Does It Work?</h2>
        <p className="text-gray-300 mb-4">The Extension section is structured as a sequence of key-value pairs with the following characteristics:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li><b>Key:</b> 2 bytes in length.</li>
          <li><b>Value:</b> Up to 64 bytes in length.</li>
          <li><b>Maximum Size:</b> The entire Extension section cannot exceed 16,384 bytes.</li>
        </ul>
        <p className="text-gray-300 mt-4">Specific key prefixes define the purpose of the data:</p>
        <div className="space-y-4 mt-4">
          <div className="bg-neutral-900/50 rounded-lg p-4 flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Settings className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-300 mb-1">0x00: System parameters</h3>
              <p className="text-gray-300 text-sm">
                (e.g., maximum block size, <Link href="/docs/developers/emission" className="text-orange-400 hover:underline">block reward</Link>, <Link href="/docs/developers/governance" className="text-orange-400 hover:underline">voting thresholds</Link>).
              </p>
            </div>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4 flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <BookOpen className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-1">0x01: NiPoPoWs Interlinks</h3>
              <p className="text-gray-300 text-sm">
                Interlinks for <Link href="/docs/developers/cryptographic-primitives/popow" className="text-orange-400 hover:underline">NiPoPoWs</Link> (efficient <Link href="/technology/secure-pow" className="text-orange-400 hover:underline">proof-of-work</Link> verification).
              </p>
            </div>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4 flex items-start gap-3">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-1">0x02: Validation rules</h3>
              <p className="text-gray-300 text-sm">
                (e.g., changes to the minimum <Link href="/docs/developers/ergoscript-languages/wallet-interaction/fees" className="text-orange-400 hover:underline">transaction fee</Link>, activation of new cryptographic features).
              </p>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 my-4">
          <p className="mb-2 font-semibold text-orange-300">Example Key-Value Pair:</p>
          <pre className="bg-neutral-800 rounded p-3 text-sm text-gray-200 overflow-x-auto">
Key: 0x0001 (Block size parameter)
Value: 0x0000000000020000 (Represents a block size of 512 KB)
          </pre>
        </div>
      </div>

      <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Current Uses</h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-red-300 mb-1">System Parameters</h3>
            <p className="text-gray-300 text-sm">
              Stored every <Link href="/docs/developers/governance" className="text-orange-400 hover:underline">voting epoch</Link> (1,024 blocks) to aid light clients in block processing without full history verification. These parameters include values like the maximum block size, block reward, and voting thresholds, which can change over time through the <Link href="/docs/developers/governance" className="text-orange-400 hover:underline">miner voting process</Link>.
            </p>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-1">NiPoPoWs Interlinks</h3>
            <p className="text-gray-300 text-sm">
              Enables efficient verification of the blockchain's proof-of-work by light clients. <Link href="/docs/developers/cryptographic-primitives/popow" className="text-orange-400 hover:underline">NiPoPoWs</Link> (Non-Interactive Proofs of Proof-of-Work) are a cryptographic technique that allows for compact proofs of work done on a blockchain, making it faster and easier for light clients to verify the chain's integrity.
            </p>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-300 mb-1">Validation Rules</h3>
            <p className="text-gray-300 text-sm">
              Records changes to <Link href="/docs/developers/governance" className="text-orange-400 hover:underline">consensus rules</Link>, ensuring all nodes operate with the same set of rules. For example, a change to the minimum transaction fee or the activation of new cryptographic features would be recorded here.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Technical Details</h2>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li><a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/extension/Extension.scala" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Extension.scala</a>: Defines the structure and handles creation, serialization, and key-value management.</li>
          <li><a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/extension/ExtensionCandidate.scala" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ExtensionCandidate.scala</a>: Represents a proposed Extension before block finalization.</li>
          <li><a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/extension/ExtensionSerializer.scala" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ExtensionSerializer.scala</a>: Manages serialization and deserialization for network transmission and storage.</li>
          <li><a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/nodeView/history/storage/modifierprocessors/ExtensionValidator.scala" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ExtensionValidator.scala</a>: Enforces validation rules and ensures consistency with the blockchain.</li>
        </ul>
      </div>

      <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-pink-400">Potential Enhancements</h2>
        <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-300">
          <li><b>Advanced Cryptography:</b> Support for homomorphic encryption or post-quantum signatures within the Extension section. This could enable new privacy-preserving applications and enhance the long-term security of the Ergo blockchain. For example, homomorphic encryption could allow for computations on encrypted data stored in the Extension, enabling new possibilities for confidential transactions and <Link href="/docs/technology/ergoscript" className="text-orange-400 hover:underline">smart contracts</Link>.</li>
          <li><b>Dynamic Updates:</b> Mechanisms for updating Extension data more flexibly, potentially through sidechains or layer-2 solutions. This could allow for more efficient and responsive updates to system parameters or other critical information.</li>
          <li><b>Cross-Chain Interoperability:</b> Facilitate interactions with other blockchains by storing proofs or state information. This could enable the development of cross-chain applications and bridges, expanding the utility and reach of the Ergo platform.</li>
        </ol>
      </div>
    </div>
  );
} 