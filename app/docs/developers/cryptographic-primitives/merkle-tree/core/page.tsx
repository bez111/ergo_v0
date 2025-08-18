import React from "react";
import { ArrowLeft, GitBranch, Code, Shield, Eye, Zap, Database, CheckCircle } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function CoreMerkleTreePage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* HERO Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <GitBranch className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Transaction Merkle Tree
              </h1>
              <p className="text-lg text-gray-300 mt-2">
                Core Merkle Tree implementation for transaction verification within blocks
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <Link
              href="/Docs/developers/cryptographic-primitives/merkle-tree"
              className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Merkle Trees
            </Link>
          </div>
        </section>

        {/* Overview Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" />
            Overview
          </h2>
          <p className="text-gray-300 mb-6">
            In the Ergo blockchain, the Transaction Merkle Tree is a vital data structure that ensures the integrity and authenticity of transactions within a block. This mechanism is similar to the Merkle Tree implementation in Bitcoin, where trees are constructed for block transactions and transaction witnesses (introduced with the SegWit upgrade). However, in Ergo, the process is adapted and extended to combine both transactions and their corresponding spending proofs into a single Merkle Tree.
          </p>
          
          <div className="bg-neutral-900/50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Merkle Tree Structure</h3>
            <p className="text-gray-300 mb-4">
              A Merkle Tree is a binary tree where each node contains a cryptographic hash. Leaf nodes represent the hash of individual data elements, such as transactions and their spending proofs, while non-leaf nodes represent the hash of their child nodes. The topmost node, known as the Merkle Root, serves as a cryptographic commitment to the entire dataset. This structure allows for efficient verification of data integrity, ensuring that even if only a small portion of the data is checked, the entire dataset can be trusted.
            </p>
            <p className="text-gray-300">
              The Merkle Tree format in Ergo follows a specific structure and encoding scheme that is essential for developers working with Merkle proofs and validating data inclusion. For detailed information on the Merkle Tree format, leaf nodes, internal nodes, and the process of validating Merkle proofs, refer to the <a href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-blue-400 hover:text-blue-300 underline">Merkle Tree Format</a> and <a href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-blue-400 hover:text-blue-300 underline">Merkle Tree Validation</a> sections.
            </p>
          </div>
        </section>

        {/* Construction Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" />
            Construction of the Transaction Merkle Tree
          </h2>
          
          <div className="space-y-8">
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Leaf Node Structure</h3>
              <p className="text-gray-300 mb-4">
                In the Transaction Merkle Tree, each leaf node represents a transaction and its associated spending proofs. This combined approach ensures that both the transaction data and the corresponding authorization (spending proofs) are securely hashed into the tree.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <strong>Data Block</strong>: Each leaf can either be empty or contain a data block of 64 bytes. This data block consists of:
                  </div>
                </li>
                <li className="ml-6 text-gray-300">
                  - <strong>Transaction Identifier (txId)</strong>: A 256-bit hash (32 bytes) of the transaction's contents, excluding spending proofs.
                </li>
                <li className="ml-6 text-gray-300">
                  - <strong>Spending Proofs Digest</strong>: A 256-bit hash (32 bytes) representing the combined spending proofs for the transaction.
                </li>
              </ul>
              <p className="text-gray-300 mb-4">
                <strong>Leaf Construction</strong>: The leaf for the <code className="bg-neutral-700 px-2 py-1 rounded">i</code>-th transaction in the block is constructed as:
              </p>
              <div className="bg-neutral-800/50 rounded p-4 mb-4">
                <code className="text-green-400">hash(0 || pos || data)</code>
              </div>
              <p className="text-gray-300">
                where <code className="bg-neutral-700 px-2 py-1 rounded">pos</code> is the position of the transaction in the block, and <code className="bg-neutral-700 px-2 py-1 rounded">data</code> is the 64-byte data block. A prefix of <code className="bg-neutral-700 px-2 py-1 rounded">0</code> is used for domain separation.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Internal Node Structure</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <strong>Node Construction</strong>: Internal nodes in the Merkle Tree are constructed by hashing the concatenation of their child nodes:
                  </div>
                </li>
              </ul>
              <div className="bg-neutral-800/50 rounded p-4 mb-4">
                <code className="text-green-400">hash(1 || left_child || right_child)</code>
              </div>
              <p className="text-gray-300">
                where <code className="bg-neutral-700 px-2 py-1 rounded">1</code> is a prefix added for domain separation. If both children are empty, the node is considered empty (<code className="bg-neutral-700 px-2 py-1 rounded">null</code>).
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Merkle Root</h3>
              <p className="text-gray-300 mb-4">
                The Merkle Root is derived by recursively hashing the tree from the leaf nodes up to the root. This root serves as a cryptographic summary of all the transactions and their proofs within a block.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <strong>Root Calculation</strong>: The root of the tree is derived by recursively hashing the tree from the leaf nodes up to the root. If the root hash is <code className="bg-neutral-700 px-2 py-1 rounded">null</code>, it is replaced with a string of zeros of the same length as the hash function output (typically 256 bits).
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Code Implementation</h3>
              <p className="text-gray-300 mb-4">
                The core implementation of the Transaction Merkle Tree can be found in the Ergo codebase:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" className="text-orange-400 hover:text-orange-300 underline">BlockTransactions.scala</a>: This file contains the logic for constructing the Transaction Merkle Tree, including the methods to calculate the Merkle Root and verify transactions within a block.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Block Header Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-purple-400" />
            Inclusion in Block Header
          </h2>
          <p className="text-gray-300 mb-6">
            The Merkle Root, calculated from the Transaction Merkle Tree, is included in the block header. This inclusion ensures that the integrity of the entire block's transactions can be verified by simply verifying the root hash. If any transaction or its corresponding proofs are altered, the Merkle Root will change, and this discrepancy can be detected by nodes in the network.
          </p>
          
          <div className="bg-neutral-900/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Code Implementation</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/header/Header.scala" className="text-orange-400 hover:text-orange-300 underline">Header.scala</a>: This file manages the block header structure, including the Merkle Root, which is crucial for the block's validity.</li>
            </ul>
          </div>
        </section>

        {/* Efficiency and Security Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-400" />
            Efficiency and Security
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Efficiency</h3>
              <p className="text-gray-300">
                The Transaction Merkle Tree structure allows for efficient verification of individual transactions. A lightweight client can verify that a particular transaction is included in a block by downloading only a small portion of the tree, rather than the entire block.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Security</h3>
              <p className="text-gray-300">
                The combined use of transaction identifiers and spending proofs within the Merkle Tree enhances the security of the Ergo blockchain. It ensures that both the transaction data and the corresponding authorization (spending proofs) are protected against tampering.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-green-400" />
            Use Cases in Ergo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">Block Validation</h3>
              </div>
              <p className="text-sm text-gray-300">
                Nodes use the Merkle Root to verify the integrity of transactions within newly received blocks. If the Merkle Root doesn't match the expected value, the block is rejected.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">Lightweight Client Verification</h3>
              </div>
              <p className="text-sm text-gray-300">
                Clients that do not store the full blockchain can still verify the inclusion of transactions by using Merkle proofs. This allows them to trust the blockchain without needing to download and store all transaction data.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">Fraud Proofs</h3>
              </div>
              <p className="text-sm text-gray-300">
                If a node detects an invalid transaction, it can create a fraud proof by providing a Merkle proof that demonstrates the inclusion of the transaction in the block. This mechanism is essential for maintaining the security and trustworthiness of the blockchain.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Considerations Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            Performance Considerations
          </h2>
          <p className="text-gray-300 mb-6">
            The Transaction Merkle Tree in Ergo is designed with efficiency in mind, allowing for fast verification and compact representation of transactions and proofs. However, there are some performance considerations to keep in mind:
          </p>
          
          <div className="space-y-6">
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">1. Tree Construction Time</h3>
              <p className="text-gray-300">
                Building the Merkle Tree for a block can be computationally intensive, especially for blocks with a large number of transactions. This process needs to be optimized for efficient block mining and validation.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">2. Memory Usage</h3>
              <p className="text-gray-300">
                Storing the entire Merkle Tree in memory can be memory-intensive, especially for large blocks. Efficient data structures and caching mechanisms should be employed to minimize memory usage.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">3. Proof Generation and Verification</h3>
              <p className="text-gray-300">
                While Merkle proofs are compact and efficient for verifying individual transactions, generating and verifying these proofs can still be computationally expensive, especially for large blocks or when dealing with a high volume of transactions.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Practical Example</h3>
              <p className="text-gray-300 mb-4">
                To address these performance considerations, the Ergo codebase employs various optimization techniques and data structures. Here's a practical example of constructing a Transaction Merkle Tree using the Ergo codebase:
              </p>
              <p className="text-gray-300">
                <strong>Example Code Reference</strong>: Detailed examples of constructing and verifying Transaction Merkle Trees can be found in the Ergo codebase within the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" className="text-orange-400 hover:text-orange-300 underline">BlockTransactions.scala</a> file.
              </p>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" />
            Implementation References
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Core Files</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" className="text-orange-400 hover:text-orange-300 underline">BlockTransactions.scala</a></li>
                <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/header/Header.scala" className="text-orange-400 hover:text-orange-300 underline">Header.scala</a></li>
                <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/header/HeaderSerializer.scala" className="text-orange-400 hover:text-orange-300 underline">HeaderSerializer.scala</a></li>
              </ul>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Related Documentation</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <a href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-blue-400 hover:text-blue-300 underline">Merkle Trees Overview</a></li>
                <li>• <a href="/Docs/developers/cryptographic-primitives/merkle-tree/extension-block" className="text-blue-400 hover:text-blue-300 underline">Extension Block Merkle</a></li>
                <li>• <a href="/Docs/developers/cryptographic-primitives/merkle-tree/batch-proofs" className="text-blue-400 hover:text-blue-300 underline">Merkle Batch Proofs</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 