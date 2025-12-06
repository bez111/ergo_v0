"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, GitBranch } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors"
      title="Copy code"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
    </button>
  );
};

const CodeBlock = ({ children, language = "text" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function MerkleTreePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <GitBranch className="w-10 h-10 text-green-400" />
        Transaction Merkle Tree
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
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Overview</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          In the Ergo blockchain, the Transaction Merkle Tree is a vital data structure that ensures the integrity and authenticity of transactions within a block. This mechanism is similar to the Merkle Tree implementation in Bitcoin, where trees are constructed for block transactions and transaction witnesses (introduced with the SegWit upgrade). However, in Ergo, the process is adapted and extended to combine both transactions and their corresponding spending proofs into a single Merkle Tree.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Merkle Tree Structure</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          A Merkle Tree is a binary tree where each node contains a cryptographic hash. Leaf nodes represent the hash of individual data elements, such as transactions and their spending proofs, while non-leaf nodes represent the hash of their child nodes. The topmost node, known as the Merkle Root, serves as a cryptographic commitment to the entire dataset. This structure allows for efficient verification of data integrity, ensuring that even if only a small portion of the data is checked, the entire dataset can be trusted.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          The Merkle Tree format in Ergo follows a specific structure and encoding scheme that is essential for developers working with Merkle proofs and validating data inclusion.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Construction of the Transaction Merkle Tree</h2>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Leaf Node Structure</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          In the Transaction Merkle Tree, each leaf node represents a transaction and its associated spending proofs. This combined approach ensures that both the transaction data and the corresponding authorization proofs are securely hashed into the tree.
        </div>

        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li>
            <strong>Data Block:</strong> Each leaf can either be empty or contain a data block of 64 bytes. This data block consists of:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Transaction Identifier (txId):</strong> A 256-bit hash (32 bytes) of the transaction's contents, excluding spending proofs.</li>
              <li><strong>Spending Proofs Digest:</strong> A 256-bit hash (32 bytes) representing the combined spending proofs for the transaction.</li>
            </ul>
          </li>
          <li>
            <strong>Leaf Construction:</strong> The leaf for the <code className="bg-neutral-800 px-1 rounded">i</code>-th transaction in the block is constructed as:
          </li>
        </ul>

        <CodeBlock>{`hash(0 || pos || data)`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          where <code className="bg-neutral-800 px-1 rounded">pos</code> is the position of the transaction in the block, and <code className="bg-neutral-800 px-1 rounded">data</code> is the 64-byte data block. A prefix of <code className="bg-neutral-800 px-1 rounded">0</code> is used for domain separation.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Internal Node Structure</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
          <li><strong>Node Construction:</strong> Internal nodes in the Merkle Tree are constructed by hashing the concatenation of their child nodes:</li>
        </ul>

        <CodeBlock>{`hash(1 || left_child || right_child)`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          where <code className="bg-neutral-800 px-1 rounded">1</code> is a prefix added for domain separation. If both children are empty, the node is considered empty (<code className="bg-neutral-800 px-1 rounded">null</code>).
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Merkle Root</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          The Merkle Root is derived by recursively hashing the tree from the leaf nodes up to the root. This root serves as a cryptographic summary of all the transactions and their proofs within a block.
        </div>

        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li><strong>Root Calculation:</strong> The root of the tree is derived by recursively hashing the tree from the leaf nodes up to the root. If the root hash is <code className="bg-neutral-800 px-1 rounded">null</code>, it is replaced with a string of zeros of the same length as the hash function output (typically 256 bits).</li>
        </ul>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Code Implementation</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The core implementation of the Transaction Merkle Tree can be found in the Ergo codebase:
        </div>

        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>
            <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              <strong>BlockTransactions.scala</strong>
            </a>: This file contains the logic for constructing the Transaction Merkle Tree, including the methods to calculate the Merkle Root and verify transactions within a block.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Inclusion in Block Header</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The Merkle Root, calculated from the Transaction Merkle Tree, is included in the block header. This inclusion ensures that the integrity of the entire block's transactions can be verified by simply verifying the root hash. If any transaction or its corresponding proofs are altered, the Merkle Root will change, and this discrepancy can be detected by nodes in the network.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Code Implementation</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>
            <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/header/Header.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              <strong>Header.scala</strong>
            </a>: This file manages the block header structure, including the Merkle Root, which is crucial for the block's validity.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Efficiency and Security</h2>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Efficiency</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The Transaction Merkle Tree structure allows for efficient verification of individual transactions. A lightweight client can verify that a particular transaction is included in a block by downloading only a small portion of the tree, rather than the entire block.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Security</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The combined use of transaction identifiers and spending proofs within the Merkle Tree enhances the security of the Ergo blockchain. It ensures that both the transaction data and the corresponding authorization (spending proofs) are protected against tampering.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Use Cases in Ergo</h2>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Block Validation</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Nodes use the Merkle Root to verify the integrity of transactions within newly received blocks. If the Merkle Root doesn't match the expected value, the block is rejected.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Lightweight Client Verification</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Clients that do not store the full blockchain can still verify the inclusion of transactions by using Merkle proofs. This allows them to trust the blockchain without needing to download and store all transaction data.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Fraud Proofs</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          If a node detects an invalid transaction, it can create a fraud proof by providing a Merkle proof that demonstrates the inclusion of the transaction in the block. This mechanism is essential for maintaining the security and trustworthiness of the blockchain.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Performance Considerations</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          The Transaction Merkle Tree in Ergo is designed with efficiency in mind, allowing for fast verification and compact representation of transactions and proofs. However, there are some performance considerations to keep in mind:
        </div>

        <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
          <li>
            <strong>Tree Construction Time:</strong> Building the Merkle Tree for a block can be computationally intensive, especially for blocks with a large number of transactions. This process needs to be optimized for efficient block mining and validation.
          </li>
          <li>
            <strong>Memory Usage:</strong> Storing the entire Merkle Tree in memory can be memory-intensive, especially for large blocks. Efficient data structures and caching mechanisms should be employed to minimize memory usage.
          </li>
          <li>
            <strong>Proof Generation and Verification:</strong> While Merkle proofs are compact and efficient for verifying individual transactions, generating and verifying these proofs can still be computationally expensive, especially for large blocks or when dealing with a high volume of transactions.
          </li>
        </ol>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Practical Example</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          To address these performance considerations, the Ergo codebase employs various optimization techniques and data structures. Here's a practical example of constructing a Transaction Merkle Tree using the Ergo codebase:
        </div>

        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
          <li>
            <strong>Example Code Reference:</strong> Detailed examples of constructing and verifying Transaction Merkle Trees can be found in the Ergo codebase within the{' '}
            <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              <code className="bg-neutral-800 px-1 rounded">BlockTransactions.scala</code>
            </a>{' '}
            file.
          </li>
        </ul>
      </div>
    </>
  );
} 