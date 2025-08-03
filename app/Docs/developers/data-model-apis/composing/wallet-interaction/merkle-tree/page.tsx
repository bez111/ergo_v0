"use client";

import React from "react";
import Link from "next/link";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function MerkleTreePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Transaction Merkle Tree
      </h1>
      
      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/Docs/developers/data-model-apis/composing/wallet-interaction"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back to Wallet Interaction
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-300 mb-4">
            In the Ergo blockchain, the Transaction Merkle Tree is a vital data structure that ensures the integrity and authenticity of transactions within a block. This mechanism is similar to the Merkle Tree implementation in Bitcoin, where trees are constructed for block transactions and transaction witnesses (introduced with the SegWit upgrade). However, in Ergo, the process is adapted and extended to combine both transactions and their corresponding spending proofs into a single Merkle Tree.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-pink-300">Merkle Tree Structure</h3>
          <p className="text-gray-300 mb-4">
            A Merkle Tree is a binary tree where each node contains a cryptographic hash. Leaf nodes represent the hash of individual data elements, such as transactions and their spending proofs, while non-leaf nodes represent the hash of their child nodes. The topmost node, known as the Merkle Root, serves as a cryptographic commitment to the entire dataset. This structure allows for efficient verification of data integrity, ensuring that even if only a small portion of the data is checked, the entire dataset can be trusted.
          </p>
          
          <p className="text-gray-300">
            The Merkle Tree format in Ergo follows a specific structure and encoding scheme that is essential for developers working with Merkle proofs and validating data inclusion. For detailed information on the Merkle Tree format, leaf nodes, internal nodes, and the process of validating Merkle proofs, refer to the <Link href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-orange-400 hover:underline">Merkle Tree Format</Link> and <Link href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-orange-400 hover:underline">Merkle Tree Validation</Link> sections.
          </p>
        </div>

        <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Construction of the Transaction Merkle Tree</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-pink-300">Leaf Node Structure</h3>
          <p className="text-gray-300 mb-4">
            In the Transaction Merkle Tree, each leaf node represents a transaction and its associated spending proofs. This combined approach ensures that both the transaction data and the corresponding authorization proofs are securely hashed into the tree.
          </p>
          
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300 mb-4">
            <li><b>Data Block</b>: Each leaf can either be empty or contain a data block of 64 bytes. This data block consists of:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li><b>Transaction Identifier (txId)</b>: A 256-bit hash (32 bytes) of the transaction's contents, excluding spending proofs.</li>
                <li><b>Spending Proofs Digest</b>: A 256-bit hash (32 bytes) representing the combined spending proofs for the transaction.</li>
              </ul>
            </li>
            <li><b>Leaf Construction</b>: The leaf for the <code className="bg-neutral-700 px-2 py-1 rounded">i</code>-th transaction in the block is constructed as:
              <UniversalCopyCodeBlock
                code="hash(0 || pos || data)"
                className="mt-2"
              />
              where <code className="bg-neutral-700 px-2 py-1 rounded">pos</code> is the position of the transaction in the block, and <code className="bg-neutral-700 px-2 py-1 rounded">data</code> is the 64-byte data block. A prefix of <code className="bg-neutral-700 px-2 py-1 rounded">0</code> is used for domain separation.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-pink-300">Internal Node Structure</h3>
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300 mb-4">
            <li><b>Node Construction</b>: Internal nodes in the Merkle Tree are constructed by hashing the concatenation of their child nodes:
              <UniversalCopyCodeBlock
                code="hash(1 || left_child || right_child)"
                className="mt-2"
              />
              where <code className="bg-neutral-700 px-2 py-1 rounded">1</code> is a prefix added for domain separation. If both children are empty, the node is considered empty (<code className="bg-neutral-700 px-2 py-1 rounded">null</code>).
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-pink-300">Merkle Root</h3>
          <p className="text-gray-300 mb-4">
            The Merkle Root is derived by recursively hashing the tree from the leaf nodes up to the root. This root serves as a cryptographic summary of all the transactions and their proofs within a block.
          </p>
          
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 mb-4">
            <li><b>Root Calculation</b>: The root of the tree is derived by recursively hashing the tree from the leaf nodes up to the root. If the root hash is <code className="bg-neutral-700 px-2 py-1 rounded">null</code>, it is replaced with a string of zeros of the same length as the hash function output (typically 256 bits).</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-pink-300">Code Implementation</h3>
          <p className="text-gray-300">
            The core implementation of the Transaction Merkle Tree can be found in the Ergo codebase:
          </p>
          
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li><b><a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">BlockTransactions.scala</a></b>: This file contains the logic for constructing the Transaction Merkle Tree, including the methods to calculate the Merkle Root and verify transactions within a block.</li>
          </ul>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Inclusion in Block Header</h2>
          <p className="text-gray-300 mb-4">
            The Merkle Root, calculated from the Transaction Merkle Tree, is included in the block header. This inclusion ensures that the integrity of the entire block's transactions can be verified by simply verifying the root hash. If any transaction or its corresponding proofs are altered, the Merkle Root will change, and this discrepancy can be detected by nodes in the network.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-purple-300">Code Implementation</h3>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li><b><a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/header/Header.scala" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Header.scala</a></b>: This file manages the block header structure, including the Merkle Root, which is crucial for the block's validity.</li>
          </ul>
        </div>

        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Efficiency and Security</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-cyan-300">Efficiency</h3>
          <p className="text-gray-300 mb-4">
            The Transaction Merkle Tree structure allows for efficient verification of individual transactions. A lightweight client can verify that a particular transaction is included in a block by downloading only a small portion of the tree, rather than the entire block.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-cyan-300">Security</h3>
          <p className="text-gray-300">
            The combined use of transaction identifiers and spending proofs within the Merkle Tree enhances the security of the Ergo blockchain. It ensures that both the transaction data and the corresponding authorization (spending proofs) are protected against tampering.
          </p>
        </div>

        <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Use Cases in Ergo</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-pink-300">Block Validation</h3>
          <p className="text-gray-300 mb-4">
            Nodes use the Merkle Root to verify the integrity of transactions within newly received blocks. If the Merkle Root doesn't match the expected value, the block is rejected.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-pink-300">Lightweight Client Verification</h3>
          <p className="text-gray-300 mb-4">
            Clients that do not store the full blockchain can still verify the inclusion of transactions by using Merkle proofs. This allows them to trust the blockchain without needing to download and store all transaction data.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-pink-300">Fraud Proofs</h3>
          <p className="text-gray-300">
            If a node detects an invalid transaction, it can create a fraud proof by providing a Merkle proof that demonstrates the inclusion of the transaction in the block. This mechanism is essential for maintaining the security and trustworthiness of the blockchain.
          </p>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Performance Considerations</h2>
          <p className="text-gray-300 mb-4">
            The Transaction Merkle Tree in Ergo is designed with efficiency in mind, allowing for fast verification and compact representation of transactions and proofs. However, there are some performance considerations to keep in mind:
          </p>
          
          <ol className="list-decimal list-inside ml-4 space-y-3 text-gray-300 mb-4">
            <li><b>Tree Construction Time</b>: Building the Merkle Tree for a block can be computationally intensive, especially for blocks with a large number of transactions. This process needs to be optimized for efficient block mining and validation.</li>
            
            <li><b>Memory Usage</b>: Storing the entire Merkle Tree in memory can be memory-intensive, especially for large blocks. Efficient data structures and caching mechanisms should be employed to minimize memory usage.</li>
            
            <li><b>Proof Generation and Verification</b>: While Merkle proofs are compact and efficient for verifying individual transactions, generating and verifying these proofs can still be computationally expensive, especially for large blocks or when dealing with a high volume of transactions.</li>
          </ol>
          
          <h3 className="text-xl font-semibold mb-3 text-purple-300">Practical Example</h3>
          <p className="text-gray-300">
            To address these performance considerations, the Ergo codebase employs various optimization techniques and data structures. Here's a practical example of constructing a Transaction Merkle Tree using the Ergo codebase:
          </p>
          
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 mt-4">
            <li><b>Example Code Reference</b>: Detailed examples of constructing and verifying Transaction Merkle Trees can be found in the Ergo codebase within the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer"><code className="bg-neutral-700 px-2 py-1 rounded">BlockTransactions.scala</code></a> file.</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 