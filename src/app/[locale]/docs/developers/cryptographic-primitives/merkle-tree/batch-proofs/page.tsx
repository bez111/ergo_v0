
/* eslint-disable @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages */
import React from "react";
import { ArrowLeft, ListChecks, Code, Shield, Eye, Zap, Database, GitBranch } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CodeBlock } from "@/components/ui";

export default function MerkleBatchProofsPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* HERO Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <ListChecks className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Merkle Batch Proofs in Ergo
              </h1>
              <p className="text-lg text-gray-300 mt-2">
                Advanced cryptographic structure for efficient verification of multiple data elements
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 mb-6">
            <Link
              href="/docs/developers/cryptographic-primitives/merkle-tree"
              className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Merkle Trees
            </Link>
            <Link
              href="/docs/developers/cryptographic-primitives/merkle-tree/batch-proofs/implementation"
              className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-black hover:bg-blue-600 transition-transform hover:scale-105"
            >
              <Code className="w-5 h-5 mr-2" />
              Implementation
            </Link>
            <Link
              href="/docs/developers/cryptographic-primitives/merkle-tree/batch-proofs/testing"
              className="inline-flex items-center px-6 py-3 bg-green-500 rounded-xl font-semibold text-black hover:bg-green-600 transition-transform hover:scale-105"
            >
              <ListChecks className="w-5 h-5 mr-2" />
              Testing
            </Link>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" />
            Introduction to Merkle Batch Proofs
          </h2>
          <p className="text-gray-300 mb-6">
            Merkle trees are a fundamental data structure in blockchain technology, providing a way to efficiently and securely verify the contents of large datasets. A Merkle tree is a binary tree where each leaf node represents a hash of a block of data, and each non-leaf node is a hash of its respective children. The root of the tree, known as the Merkle root, can be used to verify any piece of data in the tree.
          </p>
          <p className="text-gray-300 mb-6">
            A Merkle proof is a series of hashes that demonstrate the inclusion of a specific piece of data in a Merkle tree. A <strong>Merkle Batch Proof</strong> extends this concept by allowing the verification of multiple pieces of data simultaneously. This is particularly useful in scenarios where multiple data elements need to be verified together, as it reduces the computational overhead and the amount of data required for verification.
          </p>
          
          <div className="bg-neutral-900/50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Merkle Batch Proof Structure</h3>
            <div className="bg-neutral-800/50 rounded p-4">
              <Image
                src="/assets/img/merkle-batch-proofs/batch-merkle-root-diagram.png"
                alt="Flowchart showing the process of generating a Batch Merkle Root from individual Leaf Hashes"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Why Use Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-purple-400" />
            Why Use Merkle Batch Proofs?
          </h2>
          
          <div className="space-y-6">
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-yellow-400" />
                <h3 className="font-semibold text-white">Efficiency</h3>
              </div>
              <p className="text-gray-300">
                Merkle Batch Proofs provide a more efficient way to verify the inclusion of multiple elements in a Merkle tree compared to verifying each element individually. By batching the proofs, the overall size of the proof is reduced, and fewer cryptographic operations are required during verification.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">Scalability</h3>
              </div>
              <p className="text-gray-300">
                In decentralized applications (dApps) and blockchain protocols, scalability is crucial. Merkle Batch Proofs contribute to scalability by enabling the efficient verification of large datasets. This is particularly important in use cases like Proof-of-Proof-of-Work (PoPow), where interlink vectors (used to prove the correctness of blockchain headers) require efficient verification mechanisms.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">Reduced Storage and Bandwidth</h3>
              </div>
              <p className="text-gray-300">
                Batching proofs reduces the amount of data that needs to be transmitted and stored. This is beneficial in scenarios where bandwidth or storage is limited, such as in lightweight nodes or mobile devices.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" />
            Use Cases in Ergo
          </h2>
          
          <div className="space-y-8">
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Proof of Proof-of-Work (PoPow)</h3>
              <p className="text-gray-300 mb-4">
                In the Ergo blockchain, Merkle Batch Proofs are integral to PoPow protocols. PoPow enables lightweight clients to verify that a blockchain follows the longest chain rule without having to download the entire chain. The interlink vectors in PoPow, which are critical for proving the correctness of block headers, can be efficiently verified using batch Merkle proofs.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Efficient State Verification</h3>
              <p className="text-gray-300 mb-4">
                Merkle Batch Proofs are also used in verifying the state of a blockchain, such as checking the inclusion of multiple unspent transaction outputs (UTXOs) in the current state. This is particularly useful for off-chain applications and second-layer solutions that require frequent state verification.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-purple-400" />
            How to Use Merkle Batch Proofs in Ergo
          </h2>
          <p className="text-gray-300 mb-6">
            Merkle Batch Proofs are a powerful tool for efficiently verifying the inclusion of multiple data elements within a Merkle tree. In the Ergo ecosystem, they are utilized in various contexts, such as Proof-of-Proof-of-Work (PoPow) protocols, efficient state verification, and more.
          </p>
          <p className="text-gray-300 mb-6">
            For detailed guides on how to use Merkle Batch Proofs in Ergo, including code examples and step-by-step instructions, please refer to the dedicated page: <a href="/docs/developers/cryptographic-primitives/merkle-tree/batch-proofs/implementation" className="text-blue-400 hover:text-blue-300 underline">How to Use Merkle Batch Proofs in Ergo</a>.
          </p>
        </section>

        {/* Testing Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ListChecks className="w-6 h-6 text-green-400" />
            Testing Merkle Batch Proofs
          </h2>
          <p className="text-gray-300 mb-6">
            Testing Merkle Batch Proofs is crucial to ensure the correctness and reliability of their implementation. The following section provides an overview of testing Merkle Batch Proofs, with examples in both Rust and Scala. For detailed test cases and code samples, refer to the dedicated page: <a href="/docs/developers/cryptographic-primitives/merkle-tree/batch-proofs/testing" className="text-blue-400 hover:text-blue-300 underline">Merkle Batch Proof Testing</a>.
          </p>
        </section>

        {/* Conclusion Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-400" />
            Conclusion
          </h2>
          <p className="text-gray-300 mb-6">
            Merkle Batch Proofs are a powerful tool in the Ergo blockchain, enabling efficient and scalable verification of multiple data elements within a Merkle tree. By using the appropriate tools from <code className="bg-neutral-700 px-2 py-1 rounded">sigma-rust</code> for Rust applications or <code className="bg-neutral-700 px-2 py-1 rounded">scrypto</code> for JVM applications, developers can easily create, verify, and manage these proofs, contributing to the robustness and scalability of their decentralized applications.
          </p>
          <p className="text-gray-300">
            Whether you are building a lightweight client, developing a PoPow protocol, or simply need efficient state verification, Merkle Batch Proofs offer a solution that balances security, efficiency, and scalability.
          </p>
        </section>

        {/* References */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" />
            Implementation References
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Core Libraries</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <a href="https://github.com/ergoplatform/sigma-rust" className="text-orange-400 hover:text-orange-300 underline">sigma-rust</a> - Rust implementation</li>
                <li>• <a href="https://github.com/input-output-hk/scrypto" className="text-orange-400 hover:text-orange-300 underline">scrypto</a> - JVM implementation</li>
                <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" className="text-orange-400 hover:text-orange-300 underline">BlockTransactions.scala</a></li>
              </ul>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Related Documentation</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <a href="/docs/developers/cryptographic-primitives/merkle-tree" className="text-blue-400 hover:text-blue-300 underline">Merkle Trees Overview</a></li>
                <li>• <a href="/docs/developers/cryptographic-primitives/merkle-tree/core" className="text-blue-400 hover:text-blue-300 underline">Core Merkle Tree</a></li>
                <li>• <a href="/docs/developers/cryptographic-primitives/merkle-tree/extension-block" className="text-blue-400 hover:text-blue-300 underline">Extension Block Merkle</a></li>
                <li>• <a href="/docs/developers/cryptographic-primitives/merkle-tree/lightweight-proofs" className="text-blue-400 hover:text-blue-300 underline">Lightweight Client Proofs</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 