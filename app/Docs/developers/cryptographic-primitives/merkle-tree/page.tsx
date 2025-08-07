"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Database, Link as LinkIcon, GitBranch, FileText, Code, Lock, CheckCircle, Info, ListChecks, Settings, Cpu, Zap, Eye, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CodeBlock } from "@/components/ui";

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
            Merkle Tree Format in Ergo
          </h2>
          
          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Overview</h3>
            <p className="text-gray-300 mb-6">
              A Merkle Tree is a binary tree where each node contains a cryptographic hash. Leaf nodes represent the hash of individual data elements, such as transactions, while non-leaf nodes represent the hash of their child nodes. The topmost node, known as the Merkle Root, serves as a cryptographic commitment to the entire dataset. This structure allows for efficient verification of data integrity, ensuring that even if only a small portion of the data is checked, the entire dataset can be trusted.
            </p>

            <div className="bg-neutral-900/50 rounded-lg p-4 mb-6">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Merkle Tree Structure</h4>
              <div className="bg-neutral-800/50 rounded p-4">
                <Image
                  src="/assets/img/merkle-tree-diagram.png"
                  alt="Merkle Tree Structure Diagram showing transaction hashes combining to form Merkle Root"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Leaf Nodes</h3>
            <p className="text-gray-300 mb-4">
              Each leaf node in the Merkle Tree represents a transaction and its corresponding spending proofs. The leaf node is a <strong>64-byte data block</strong>, consisting of:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• A <strong>32-byte transaction identifier</strong> (a 256-bit hash of the transaction)</li>
              <li>• A <strong>32-byte digest</strong> of the transaction's spending proofs</li>
            </ul>
            <p className="text-gray-300 mb-4">
              The leaf node hash is computed by concatenating a <strong>1-byte prefix</strong> (used for domain separation), the <strong>position</strong> of the transaction within the block, and the <strong>64-byte data block</strong> itself. The prefix for a leaf node is <code className="bg-neutral-700 px-2 py-1 rounded">0x00</code>. This data is then hashed using the <code className="bg-neutral-700 px-2 py-1 rounded">Blake2b256</code> hash function.
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Code Reference</h4>
              <p className="text-gray-300 mb-2">
                The implementation of leaf node hashing can be found in the <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/authds/merkle/MerkleTree.scala" className="text-orange-400 hover:text-orange-300 underline">MerkleTree.scala</a> file in the <code className="bg-neutral-700 px-2 py-1 rounded">scrypto</code> repository.
              </p>
            </div>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Internal Nodes</h3>
            <p className="text-gray-300 mb-4">
              Internal nodes are constructed by hashing the concatenation of their two child nodes. The hash function used is the <code className="bg-neutral-700 px-2 py-1 rounded">Blake2b256</code> cryptographic hash function. Internal nodes do not include keys in their hash inputs, optimizing proof sizes by focusing only on the hashes of child nodes.
            </p>
            <p className="text-gray-300 mb-4">
              To construct an internal node, the following steps are taken:
            </p>
            <ol className="text-gray-300 space-y-2 mb-4 list-decimal list-inside">
              <li><strong>Concatenate</strong>: Combine the <strong>1-byte prefix</strong> for internal nodes (<code className="bg-neutral-700 px-2 py-1 rounded">0x01</code>) with the hashes of the left and right child nodes.</li>
              <li><strong>Hash</strong>: Apply the <code className="bg-neutral-700 px-2 py-1 rounded">Blake2b256</code> function to the concatenated result to produce the hash for the internal node.</li>
            </ol>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Code Reference</h4>
              <p className="text-gray-300 mb-2">
                The code for internal node construction is also part of the <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/authds/merkle/MerkleTree.scala" className="text-orange-400 hover:text-orange-300 underline">MerkleTree.scala</a> file in the <code className="bg-neutral-700 px-2 py-1 rounded">scrypto</code> repository.
              </p>
            </div>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Merkle Root</h3>
            <p className="text-gray-300 mb-4">
              The Merkle Root is the final hash at the top of the Merkle Tree. It is computed by recursively hashing the tree from the leaf nodes up to the root. The Merkle Root serves as a cryptographic commitment to all the transactions included in the block, ensuring that any tampering with the data can be detected.
            </p>
            <p className="text-gray-300 mb-4">
              In Ergo, the Merkle Root is included in the block header, providing a way for nodes to efficiently verify the integrity of the entire block by only checking the root hash.
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Code Reference</h4>
              <p className="text-gray-300 mb-2">
                The Merkle Root calculation and its inclusion in the block header are managed in the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" className="text-orange-400 hover:text-orange-300 underline">BlockTransactions.scala</a> file in the Ergo repository.
              </p>
            </div>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Merkle Proof Encoding</h3>
            <p className="text-gray-300 mb-4">
              Merkle proofs in Ergo are encoded in a specific format to enable efficient verification. A Merkle proof provides the necessary data to verify that a particular leaf node is part of the Merkle Tree.
            </p>
            <p className="text-gray-300 mb-4">
              The encoding consists of the following elements:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• <strong>1-byte prefix</strong>: Indicates whether the computed value (hash) is on the right (<code className="bg-neutral-700 px-2 py-1 rounded">0x01</code>) or the left (<code className="bg-neutral-700 px-2 py-1 rounded">0x00</code>) side of the node.</li>
              <li>• <strong>32-byte stored value</strong>: This is the sibling hash for the current node. The proof provides the path of sibling hashes from the leaf to the root, allowing the verifier to recompute the root hash.</li>
            </ul>
            <p className="text-gray-300 mb-4">
              When verifying a proof, the verifier reconstructs the path from the leaf node to the Merkle Root using the provided sibling hashes and the original leaf hash. If the computed root matches the expected Merkle Root, the proof is valid.
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Code Reference</h4>
              <p className="text-gray-300 mb-2">
                The <code className="bg-neutral-700 px-2 py-1 rounded">BatchMerkleProof</code> class, handling Merkle proof generation and verification, is implemented in the <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/authds/merkle/BatchMerkleProof.scala" className="text-orange-400 hover:text-orange-300 underline">BatchMerkleProof.scala</a> file.
              </p>
            </div>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Validation</h3>
            <p className="text-gray-300 mb-4">
              For details on the validation process for Merkle proofs, including examples and step-by-step instructions, please refer to the <a href="/Docs/developers/cryptographic-primitives/merkle-tree#validation" className="text-orange-400 hover:text-orange-300 underline">Merkle Validation</a> tab.
            </p>
          </section>
        </div>
      </TabsContent>

      <TabsContent value="validation">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="w-8 h-8 text-green-400" />
            Validation of Merkle Proofs in Ergo
          </h2>
          
          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Overview</h3>
            <p className="text-gray-300 mb-6">
              Merkle proofs are fundamental to ensuring the integrity of data within a blockchain. By validating a Merkle proof, you can confirm that a specific piece of data, such as a transaction, is included in a block without having to download the entire blockchain. This document outlines the detailed process for validating Merkle proofs in Ergo, using cryptographic hash functions and a structured approach.
            </p>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Validation Process</h3>
            <p className="text-gray-300 mb-6">
              The validation process involves computing a series of hashes based on the provided proof elements and comparing the final result with the expected Merkle root. The steps below describe this process in detail:
            </p>

            <div className="space-y-6">
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-3 text-cyan-400">1. Compute the Leaf Node Hash</h4>
                <p className="text-gray-300 mb-4">
                  Begin by computing the hash of the leaf node, which represents the transaction or data element you want to prove is included in the block. This is done by prepending a <strong>1-byte zero prefix</strong> to the leaf data and then hashing the result using the <code className="bg-neutral-700 px-2 py-1 rounded">Blake2b256</code> hash function.
                </p>
                <div className="bg-neutral-800/50 rounded p-4 mb-4">
                  <h5 className="text-md font-bold mb-2 text-orange-400">Code Implementation</h5>
                  <p className="text-gray-300 mb-2">
                    The leaf node hash computation is implemented within the Ergo codebase, primarily found in the <code className="bg-neutral-700 px-2 py-1 rounded">scorex.crypto.authds.merkle</code> package of the <a href="https://github.com/input-output-hk/scrypto" className="text-orange-400 hover:text-orange-300 underline">Scrypto</a> library, which is used by Ergo.
                  </p>
                  <div className="mb-4">
                    <CodeBlock language="typescript"
                      code={`val leafData = Base16.decode(txId).get
val leafHash = Blake2b256(0.toByte +: leafData)`}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-3 text-cyan-400">2. Iterate Through the Proof</h4>
                <p className="text-gray-300 mb-4">
                  The proof consists of multiple levels, each providing information about the position of the node within the Merkle tree and its sibling hash. For each level, the following steps are performed:
                </p>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li>• <strong>Check the 1-Byte Prefix</strong>: If the prefix is <code className="bg-neutral-700 px-2 py-1 rounded">0</code>, this indicates that the computed hash from the previous step should be on the left side. If the prefix is <code className="bg-neutral-700 px-2 py-1 rounded">1</code>, this indicates that the computed hash should be on the right side.</li>
                  <li>• <strong>Compute the Hash for the Next Level</strong>: Depending on the prefix, concatenate the computed hash from the previous step with the sibling hash and the prefix. Then, hash the concatenated result using <code className="bg-neutral-700 px-2 py-1 rounded">Blake2b256</code>.</li>
                </ul>
                <div className="bg-neutral-800/50 rounded p-4 mb-4">
                  <h5 className="text-md font-bold mb-2 text-orange-400">Code Implementation</h5>
                  <p className="text-gray-300 mb-2">
                    The iteration process and validation logic are crucial for verifying the correctness of the Merkle proof. This is implemented in the <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/authds/merkle/BatchMerkleProof.scala" className="text-orange-400 hover:text-orange-300 underline">BatchMerkleProof.scala</a> file in the <code className="bg-neutral-700 px-2 py-1 rounded">scrypto</code> repository.
                  </p>
                  <div className="mb-4">
                    <CodeBlock language="typescript"
                      code={`val levels = Seq("0139b79af823a92aa72ced2c6d9e7f7f4687de5b5af7fab0ad205d3e54bda3f3ae")
val computedHash = levels.foldLeft(leafHash) { case (hash, level) =>
    val bytes = Base16.decode(level).get
    val prefix = bytes.head
    val siblingHash = bytes.tail

    val concatenated = if (prefix == 0.toByte) {
        hash ++ siblingHash
    } else {
        siblingHash ++ hash
    }

    Blake2b256(prefix +: concatenated)
}`}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-3 text-cyan-400">3. Compare with Merkle Root</h4>
                <p className="text-gray-300 mb-4">
                  After iterating through all levels of the proof, the final computed hash should be compared with the expected Merkle root value. If the hashes match, the proof is valid, confirming that the transaction or data element is included in the block.
                </p>
                <div className="bg-neutral-800/50 rounded p-4 mb-4">
                  <h5 className="text-md font-bold mb-2 text-orange-400">Code Implementation</h5>
                  <p className="text-gray-300 mb-2">
                    The comparison of the computed hash with the expected Merkle root is the final step in the validation process. This ensures that the entire proof is correct and that the data has not been tampered with.
                  </p>
                  <div className="mb-4">
                    <CodeBlock language="typescript"
                      code={`assert(computedHash == expectedMerkleRoot)`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Flowchart of Merkle Proof Validation</h3>
            <p className="text-gray-300 mb-6">
              The following flowchart visualizes the Merkle proof validation process described above:
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Validation Process Flow</h4>
              <div className="bg-neutral-800/50 rounded p-4">
                <Image
                  src="/assets/img/merkle-proof-validation-flowchart.png"
                  alt="Flowchart of Merkle Proof Validation showing the process from Compute Leaf Node Hash through Check Prefix, concatenation steps, hashing with Blake2b256, Next Level decision, and final comparison with Merkle Root"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Example: Validating a Transaction's Inclusion in a Block</h3>
            <p className="text-gray-300 mb-6">
              Here is a concrete example of how to validate a Merkle proof for a transaction included in an Ergo block header:
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Code Implementation</h4>
              <p className="text-gray-300 mb-4">
                This example demonstrates how to validate a transaction's inclusion in a block using a Merkle proof. The code is based on the structures and functions provided in the <a href="https://github.com/input-output-hk/scrypto" className="text-orange-400 hover:text-orange-300 underline">Scrypto</a> library and the Ergo codebase.
              </p>
              <div className="mb-4">
                <CodeBlock language="typescript"
                  code={`import scorex.crypto.authds.merkle.MerkleProof
import scorex.crypto.authds.{LeafData, Side}
import scorex.crypto.hash.{Blake2b256, Digest32}
import scorex.util.encode.Base16

implicit val hashFn: Blake2b256.type = Blake2b256

val txId = "642c15c62553edd8fd9af9a6f754f3c7a6c03faacd0c9b9d5b7d11052c6c6fe8"
val msgPreimage = Base16.decode("01fb9e35f8a73c128b73e8fde5c108228060d68f11a69359ee0fb9bfd84e7ecde6d19957ccbbe75b075b3baf1cac6126b6e80b5770258f4cec29fbde92337faeec74c851610658a40f5ae74aa3a4babd5751bd827a6ccc1fe069468ef487cb90a8c452f6f90ab0b6c818f19b5d17befd85de199d533893a359eb25e7804c8b5d7514d784c8e0e52dabae6e89a9d6ed9c84388b228e7cdee09462488c636a87931d656eb8b40f82a507008ccacbee05000000").get

val txsRoot = msgPreimage.slice(65, 97)
val leafHash = Blake2b256(0.toByte +: Base16.decode(txId).get)

val levelsEncoded = Seq("0139b79af823a92aa72ced2c6d9e7f7f4687de5b5af7fab0ad205d3e54bda3f3ae")
val levels = levelsEncoded.map { le =>
    val leBytes = Base16.decode(le).get
    val side: Byte = leBytes.head
    val digest = leBytes.tail
    (Digest32 @@ digest, Side @@ side)
}

val merkleProof = MerkleProof[Digest32](LeafData @@ Base16.decode(txId).get, levels)
assert(merkleProof.valid(Digest32 @@ txsRoot))`}
                />
              </div>
            </div>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Conclusion</h3>
            <p className="text-gray-300 mb-6">
              Validating Merkle proofs is a crucial process that ensures data integrity and enables efficient verification without the need to download the entire blockchain. By understanding and implementing this process in Ergo, you can enhance the security and efficiency of your blockchain applications.
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">Source References</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• <a href="https://github.com/input-output-hk/scrypto" className="text-orange-400 hover:text-orange-300 underline">Scrypto: Merkle Proofs Implementation</a>: This repository contains the core cryptographic components used in Ergo, including the implementation of Merkle proofs.</li>
                <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" className="text-orange-400 hover:text-orange-300 underline">Ergo: BlockTransactions.scala</a>: Provides the logic for handling transactions within a block, including Merkle Tree construction and proof validation.</li>
              </ul>
            </div>
          </section>
        </div>
      </TabsContent>

      <TabsContent value="considerations">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Settings className="w-8 h-8 text-orange-400" />
            Considerations for Developers
          </h2>
          
          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Efficiency and Performance</h3>
            <p className="text-gray-300 mb-6">
              Efficiency and performance are key considerations as Ergo evolves. While Merkle Trees provide a balance between data integrity and efficiency, the choice of hash function and tree structure can significantly impact performance, especially for large blocks or complex transactions. Developers are encouraged to explore potential optimizations to ensure the blockchain remains scalable and efficient.
            </p>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Security and Cryptographic Advances</h3>
            <p className="text-gray-300 mb-6">
              The security of Merkle Trees depends on the underlying cryptographic hash functions. Ergo currently employs secure and efficient hashing algorithms, but developers should stay informed about advancements in cryptography to maintain the blockchain's security. As new cryptographic techniques emerge, Ergo's Merkle Trees and other cryptographic structures may be updated to incorporate these improvements.
            </p>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Flexibility and Integration</h3>
            <p className="text-gray-300 mb-6">
              Developers should consider the flexibility and potential applications of Merkle Trees beyond their current uses. For example, Merkle Trees could be applied to other data structures within the blockchain, such as sidechains or decentralized applications (dApps). Tools like sigma-rust, fleet, and AppKit can help developers manage the complexity of working with Merkle Trees, making it easier to integrate these structures into various blockchain applications.
            </p>
          </section>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Versioning and Compatibility</h3>
            <p className="text-gray-300 mb-6">
              Introducing changes to Merkle Tree-related components or their semantics must be approached cautiously. Versioning and compatibility with existing applications and contracts are critical to ensuring a smooth transition and minimizing disruptions across the ecosystem. Developers must carefully plan and communicate any updates to the ErgoTree version or changes in operations (e.g., BigInt semantics) to ensure all components, including wallets and scanners, are updated accordingly.
            </p>
          </section>
        </div>
      </TabsContent>

      <TabsContent value="implementations">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Cpu className="w-8 h-8 text-purple-400" />
            Merkle Tree Implementations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/Docs/developers/cryptographic-primitives/merkle-tree/extension-block" className="block group">
              <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 hover:border-purple-500/50 transition-colors cursor-pointer relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Extension Block Merkle</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Extension blocks contain additional metadata and use Merkle Trees to ensure data integrity. This implementation handles the verification of extension block data and provides efficient proof generation for lightweight clients.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Code className="w-4 h-4" />
                    <span>Extension.scala</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <GitBranch className="w-4 h-4" />
                    <span>Metadata verification</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-cyan-400 text-sm font-medium">
                    Learn more
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/Docs/developers/cryptographic-primitives/merkle-tree/core" className="block group">
              <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 hover:border-green-500/50 transition-colors cursor-pointer relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Merkle Tree</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  The core Merkle Tree implementation for transaction verification within blocks. Provides cryptographic proofs for transaction inclusion and enables efficient verification without downloading entire blocks.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Code className="w-4 h-4" />
                    <span>BlockTransactions.scala</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Transaction verification</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-cyan-400 text-sm font-medium">
                    Learn more
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/Docs/developers/cryptographic-primitives/merkle-tree/batch-proofs" className="block group">
              <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 hover:border-blue-500/50 transition-colors cursor-pointer relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <ListChecks className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Merkle Batch Proofs</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Optimized batch verification for multiple transactions or data elements. Reduces proof size and verification time when dealing with multiple items in a single Merkle Tree.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Code className="w-4 h-4" />
                    <span>BatchMerkleProof.scala</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Zap className="w-4 h-4" />
                    <span>Batch optimization</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-cyan-400 text-sm font-medium">
                    Learn more
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/Docs/developers/cryptographic-primitives/merkle-tree/lightweight-proofs" className="block group">
              <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 hover:border-orange-500/50 transition-colors cursor-pointer relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Lightweight Client Proofs</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Compact proofs designed for lightweight clients and mobile applications. Minimizes bandwidth usage while maintaining security and enabling efficient verification on resource-constrained devices.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Code className="w-4 h-4" />
                    <span>LiteClientProof.scala</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Smartphone className="w-4 h-4" />
                    <span>Mobile optimized</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-cyan-400 text-sm font-medium">
                    Learn more
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold mb-4 text-green-400">Implementation References</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-3 text-cyan-400">Core Files</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/BlockTransactions.scala" className="text-orange-400 hover:text-orange-300 underline">BlockTransactions.scala</a></li>
                  <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/extension/Extension.scala" className="text-orange-400 hover:text-orange-300 underline">Extension.scala</a></li>
                  <li>• <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/authds/merkle/BatchMerkleProof.scala" className="text-orange-400 hover:text-orange-300 underline">BatchMerkleProof.scala</a></li>
                </ul>
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