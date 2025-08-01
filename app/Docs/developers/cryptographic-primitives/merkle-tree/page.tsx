"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Database, Link as LinkIcon, GitBranch, FileText, Code, Lock, CheckCircle, Info, ListChecks, Settings, Cpu } from "lucide-react";
import Link from "next/link";

export default function MerkleTreePage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <Info className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="format" className="flex items-center gap-2 justify-center">
          <FileText className="w-4 h-4" /> Format
        </TabsTrigger>
        <TabsTrigger value="validation" className="flex items-center gap-2 justify-center">
          <CheckCircle className="w-4 h-4" /> Validation
        </TabsTrigger>
        <TabsTrigger value="considerations" className="flex items-center gap-2 justify-center">
          <Settings className="w-4 h-4" /> Considerations
        </TabsTrigger>
        <TabsTrigger value="implementations" className="flex items-center gap-2 justify-center">
          <Cpu className="w-4 h-4" /> Implementations
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
            <GitBranch className="w-10 h-10 text-green-400" />
            Merkle Trees in Ergo
          </h1>
          
          <div className="space-y-8">
            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-blue-400" />
                Overview
              </h2>
              <p className="text-gray-300 mb-6">
                <strong>Merkle Trees</strong> are a fundamental <a href="/Docs/developers/cryptographic-primitives/data-structures" className="text-blue-400 hover:text-blue-300 underline">data structure</a> in the Ergo blockchain, ensuring the integrity and authenticity of data. They play a crucial role in various blockchain operations, from verifying <a href="/Docs/developers/transactions" className="text-blue-400 hover:text-blue-300 underline">transactions</a> within <a href="/Docs/developers/block" className="text-blue-400 hover:text-blue-300 underline">blocks</a> to securing additional metadata in the <a href="/Docs/developers/extension-section" className="text-blue-400 hover:text-blue-300 underline">Extension Block</a>. While similar to the Merkle Tree implementation in Bitcoin—where trees are constructed for block transactions and transaction witnesses (introduced with <a href="https://en.bitcoin.it/wiki/Segregated_Witness" className="text-blue-400 hover:text-blue-300 underline">SegWit</a>)—Ergo extends this concept by combining transactions and their corresponding <a href="/Docs/developers/signing" className="text-blue-400 hover:text-blue-300 underline">spending proofs</a> into a single Merkle Tree.
              </p>
              <p className="text-gray-300 mb-6">
                The Merkle Tree format in Ergo follows a specific structure and encoding scheme that is essential for developers working with Merkle proofs and validating data inclusion. For detailed information on the Merkle Tree format, leaf nodes, internal nodes, and the process of validating Merkle proofs, refer to the <a href="/Docs/developers/merkle-format" className="text-blue-400 hover:text-blue-300 underline">Merkle Tree Format</a> and <a href="/Docs/developers/merkle-validation" className="text-blue-400 hover:text-blue-300 underline">Merkle Tree Validation</a> sections.
              </p>
            </section>

            <div className="mb-6">
              <Link
                href="/Docs/developers/cryptographic-primitives"
                className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Cryptographic Primitives
              </Link>
            </div>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                Key Characteristics
              </h2>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <strong>Binary Tree Structure</strong>: Ergo employs a binary structure for its Merkle Trees, where each node has two children. Leaf nodes contain hashes of transaction data or proofs, while internal nodes contain hashes of their child nodes.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <strong>Cryptographic Security</strong>: The cryptographic hashes ensure that any alteration in the underlying data is reflected in the <strong>Merkle Root</strong>, making the tree tamper-evident.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <strong>Deterministic Byte Representation</strong>: The byte representation of transactions in Ergo is deterministic, allowing consistent restoration and verification of Merkle Tree roots, even if transactions are serialized in different formats, such as JSON.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <strong>Pregenesis State</strong>: Ergo's deterministic pregenesis state, configured at the blockchain's inception, facilitates seamless restoration and verification of state transitions by comparing them with the hashes stored in the <a href="/Docs/developers/block-header" className="text-blue-400 hover:text-blue-300 underline">block header</a>.
                  </div>
                </li>
              </ul>
            </section>

            <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-purple-400" />
                Core Applications of Merkle Trees in Ergo
              </h2>

              <div className="space-y-6">
                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-3 text-green-400">Transaction Merkle Tree</h3>
                  <p className="text-gray-300 mb-4">
                    The <a href="/Docs/developers/tx-merkle" className="text-blue-400 hover:text-blue-300 underline">Transaction Merkle Tree</a> is a core component of Ergo, combining all transactions and their corresponding spending proofs into a single Merkle Tree. This structure provides a cryptographic guarantee that the transaction data has not been tampered with, playing a critical role in the <a href="/Docs/developers/autolykos" className="text-blue-400 hover:text-blue-300 underline">Proof-of-Work (PoW)</a> mechanism. The Merkle Root, derived from this tree, is included in the <a href="/Docs/developers/block-header" className="text-blue-400 hover:text-blue-300 underline">block header</a>, ensuring that any change to a transaction within the block results in a different Merkle Root.
                  </p>
                  <div className="bg-neutral-800/50 rounded p-3">
                    <p className="text-sm text-gray-400 mb-1">Code Reference:</p>
                    <p className="text-sm text-gray-300">
                      The implementation can be found in the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" className="text-orange-400 hover:text-orange-300 underline">BlockTransactions.scala</a> file.
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-3 text-green-400">Extension Block Merkle Tree</h3>
                  <p className="text-gray-300 mb-4">
                    The <a href="/Docs/developers/merkle-extension" className="text-blue-400 hover:text-blue-300 underline">Extension Block Merkle Tree</a> secures key-value data like <a href="/Docs/developers/governance" className="text-blue-400 hover:text-blue-300 underline">miner votes</a> and <a href="/Docs/developers/governance" className="text-blue-400 hover:text-blue-300 underline">protocol parameters</a>. It organizes this data into a binary Merkle Tree, with leaf nodes containing key-value pair hashes and non-leaf nodes containing child node hashes. The root hash is included in the block header, cryptographically committing to the <a href="/Docs/developers/extension-section" className="text-blue-400 hover:text-blue-300 underline">Extension Block</a> data. Merkle proofs allow efficient verification of specific key-value pairs without downloading the entire block. This tree ensures data integrity and enables secure storage of auxiliary blockchain information.
                  </p>
                  <div className="bg-neutral-800/50 rounded p-3">
                    <p className="text-sm text-gray-400 mb-1">Code Reference:</p>
                    <p className="text-sm text-gray-300">
                      The implementation can be found in the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/extension/Extension.scala" className="text-orange-400 hover:text-orange-300 underline">Extension.scala</a> file.
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-3 text-green-400">Merkle Batch Proofs</h3>
                  <p className="text-gray-300 mb-4">
                    <a href="/Docs/developers/merkle-batch-proof" className="text-blue-400 hover:text-blue-300 underline">Merkle Batch Proofs</a> are an advanced application that allows for efficient verification of multiple data elements within a Merkle Tree, reducing computational overhead. These proofs build on the foundational Merkle Trees used in transactions and the Extension Block.
                  </p>
                </div>

                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-3 text-green-400">State Proofs</h3>
                  <p className="text-gray-300 mb-4">
                    Merkle Trees are also used to create compact proofs of state transitions (related to <a href="/Docs/developers/block-adproofs" className="text-blue-400 hover:text-blue-300 underline">AD Proofs</a>). These proofs allow for efficient verification of the blockchain state without requiring a <a href="/Docs/developers/archival-node" className="text-blue-400 hover:text-blue-300 underline">full node</a>, which is crucial for <a href="/Docs/developers/light-spv-node" className="text-blue-400 hover:text-blue-300 underline">lightweight clients</a> to securely participate in the network. An example of how a lite client can check a Merkle-tree-based membership proof is detailed in the <a href="/Docs/developers/merkle-light-proof" className="text-blue-400 hover:text-blue-300 underline">Lite Client Checking Merkle Proof</a> documentation.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="format">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-400" />
            Merkle Tree Format
          </h2>
          
          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Structure and Encoding</h3>
            <p className="text-gray-300 mb-6">
              The Merkle Tree format in Ergo follows a specific structure and encoding scheme that is essential for developers working with Merkle proofs and validating data inclusion.
            </p>
            
            <div className="bg-neutral-900/50 rounded-lg p-4 mb-6">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Binary Tree Structure</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Leaf nodes contain hashes of transaction data or proofs</li>
                <li>• Internal nodes contain hashes of their child nodes</li>
                <li>• Each node has exactly two children (binary structure)</li>
                <li>• Root hash is included in the block header</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Deterministic Encoding</h4>
              <p className="text-gray-300 mb-3">
                The byte representation of transactions in Ergo is deterministic, allowing consistent restoration and verification of Merkle Tree roots.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Consistent hash generation regardless of serialization format</li>
                <li>• JSON and binary formats produce identical Merkle roots</li>
                <li>• Enables reliable state verification and restoration</li>
              </ul>
            </div>
          </section>
        </div>
      </TabsContent>

      <TabsContent value="validation">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="w-8 h-8 text-green-400" />
            Merkle Tree Validation
          </h2>
          
          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Proof Verification</h3>
            <p className="text-gray-300 mb-6">
              Merkle proofs allow efficient verification of specific data elements without downloading the entire tree structure.
            </p>
            
            <div className="bg-neutral-900/50 rounded-lg p-4 mb-6">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Validation Process</h4>
              <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                <li>Receive the Merkle proof containing sibling hashes</li>
                <li>Reconstruct the path from leaf to root</li>
                <li>Verify each hash in the path matches the proof</li>
                <li>Compare the computed root with the expected root</li>
                <li>Accept the proof if roots match, reject otherwise</li>
              </ol>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Security Properties</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Cryptographic security through hash functions</li>
                <li>• Tamper-evident: any change affects the root hash</li>
                <li>• Efficient verification with logarithmic complexity</li>
                <li>• Compact proofs for large datasets</li>
              </ul>
            </div>
          </section>
        </div>
      </TabsContent>

      <TabsContent value="considerations">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Settings className="w-8 h-8 text-orange-400" />
            Security and Performance Considerations
          </h2>
          
          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Security Considerations</h3>
            
            <div className="space-y-4">
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-3 text-cyan-400">Cryptographic Security</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Relies on collision-resistant hash functions</li>
                  <li>• Any alteration in data changes the Merkle root</li>
                  <li>• Provides tamper-evident data integrity</li>
                </ul>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-3 text-cyan-400">Performance Considerations</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Logarithmic verification time complexity</li>
                  <li>• Compact proof sizes for large datasets</li>
                  <li>• Efficient for lightweight client verification</li>
                  <li>• Deterministic encoding ensures consistency</li>
                </ul>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-3 text-cyan-400">Implementation Considerations</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Proper handling of odd numbers of leaves</li>
                  <li>• Consistent hash function usage</li>
                  <li>• Efficient tree construction algorithms</li>
                  <li>• Memory-efficient proof generation</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </TabsContent>

      <TabsContent value="implementations">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Cpu className="w-8 h-8 text-purple-400" />
            Implementation Details
          </h2>
          
          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Core Implementations</h3>
            
            <div className="space-y-6">
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-3 text-cyan-400">BlockTransactions.scala</h4>
                <p className="text-gray-300 mb-3">
                  The Transaction Merkle Tree implementation can be found in the BlockTransactions.scala file.
                </p>
                <div className="bg-neutral-800/50 rounded p-3">
                  <p className="text-sm text-gray-400 mb-1">GitHub Reference:</p>
                  <p className="text-sm text-gray-300">
                    <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" className="text-orange-400 hover:text-orange-300 underline">BlockTransactions.scala</a>
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-3 text-cyan-400">Extension.scala</h4>
                <p className="text-gray-300 mb-3">
                  The Extension Block Merkle Tree implementation is located in the Extension.scala file.
                </p>
                <div className="bg-neutral-800/50 rounded p-3">
                  <p className="text-sm text-gray-400 mb-1">GitHub Reference:</p>
                  <p className="text-sm text-gray-300">
                    <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/extension/Extension.scala" className="text-orange-400 hover:text-orange-300 underline">Extension.scala</a>
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-3 text-cyan-400">Related Documentation</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <a href="/Docs/developers/merkle-format" className="text-blue-400 hover:text-blue-300 underline">Merkle Tree Format</a></li>
                  <li>• <a href="/Docs/developers/merkle-validation" className="text-blue-400 hover:text-blue-300 underline">Merkle Tree Validation</a></li>
                  <li>• <a href="/Docs/developers/merkle-batch-proof" className="text-blue-400 hover:text-blue-300 underline">Merkle Batch Proofs</a></li>
                  <li>• <a href="/Docs/developers/merkle-light-proof" className="text-blue-400 hover:text-blue-300 underline">Lite Client Checking Merkle Proof</a></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </TabsContent>
    </Tabs>
  );
} 