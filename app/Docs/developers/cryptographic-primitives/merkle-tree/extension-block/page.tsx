import React from "react";
import { ArrowLeft, Database, Code, GitBranch, Shield, Eye, Zap } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function ExtensionBlockMerklePage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* HERO Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Database className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Extension Block Merkle Tree in Ergo
              </h1>
              <p className="text-lg text-gray-300 mt-2">
                Advanced Merkle Tree implementation for extension block metadata verification
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
            The Extension Block Merkle Tree in Ergo is crucial in ensuring the integrity and authenticity of additional key-value data stored within the extension section of each block. This data includes miner votes, protocol parameters, and other auxiliary information that extends the functionality of the Ergo protocol beyond the standard transaction data.
          </p>
          <p className="text-gray-300 mb-6">
            By leveraging Merkle Trees, the Ergo blockchain can efficiently and securely verify the integrity of this auxiliary data, ensuring that it has not been tampered with.
          </p>
        </section>

        {/* Key Components Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" />
            Key Components of the Extension Block Merkle Tree
          </h2>
          
          <div className="space-y-8">
            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">1. Key-Value Data Structure</h3>
              <p className="text-gray-300 mb-4">
                The Extension Block in Ergo is essentially a key-value storage system. Each block in the blockchain can contain a variety of key-value pairs that represent different types of auxiliary data. This data could include:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <strong>Miner Votes</strong>: Information on miner preferences or decisions on protocol upgrades.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <strong>Protocol Parameters</strong>: Configurations or rules that guide the blockchain's operations.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <strong>Non-Interactive Proofs</strong>: Cryptographic proofs that can be validated without requiring interaction with other blockchain participants.
                  </div>
                </li>
              </ul>
              <p className="text-gray-300">
                Each key-value pair in the Extension Block is encoded as a leaf node in the Merkle Tree. This encoding ensures that even small changes to any key or value will result in a different Merkle Root, making any tampering immediately detectable.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">2. Construction of the Merkle Tree</h3>
              <p className="text-gray-300 mb-4">
                The process of constructing the Extension Block Merkle Tree involves organizing the key-value pairs into a binary tree structure, where each leaf node contains a cryptographic hash of the key-value pair, and each non-leaf node contains a hash of its child nodes.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Code Reference</strong>: The implementation of this Merkle Tree construction process is handled in the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/extension/Extension.scala" className="text-orange-400 hover:text-orange-300 underline">Extension.scala</a> file within the Ergo codebase. The relevant method for creating the Merkle Tree from key-value pairs is the <code className="bg-neutral-700 px-2 py-1 rounded">merkleTree</code> method within the <code className="bg-neutral-700 px-2 py-1 rounded">Extension</code> object.
              </p>
              <div className="mb-4">
                <CodeBlock language="typescript"
                  code={`def merkleTree: MerkleTree = {
  val leafData = keyValuePairs.map { case (key, value) =>
    hash(key ++ value)
  }
  MerkleTree.fromLeafData(leafData)
}`}
                />
              </div>
              <p className="text-gray-300">
                In this code, <code className="bg-neutral-700 px-2 py-1 rounded">keyValuePairs</code> represent the sequence of key-value data in the Extension Block. The method computes the cryptographic hash for each pair and constructs the Merkle Tree using these hashes.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">3. Inclusion of the Merkle Root in the Block Header</h3>
              <p className="text-gray-300 mb-4">
                Once the Merkle Tree is constructed, the root hash (Merkle Root) is included in the block header. This inclusion serves as a cryptographic commitment to the entire set of key-value pairs in the Extension Block, ensuring that the data has not been altered or tampered with after the block was created.
              </p>
              <p className="text-gray-300">
                The Merkle Root's presence in the block header allows any participant in the network to validate the integrity of the Extension Block's data by simply verifying the Merkle proof against the root.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">4. Verifying Key-Value Data Integrity</h3>
              <p className="text-gray-300 mb-4">
                To verify the integrity of any specific key-value pair within the Extension Block, a Merkle proof can be generated. This proof is a series of hashes that demonstrate the inclusion of the key-value pair in the Merkle Tree, leading up to the Merkle Root in the block header. By verifying this proof, clients can confirm that the data has not been tampered with, even without downloading the entire Extension Block.
              </p>
            </div>
          </div>
        </section>

        {/* Example Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-purple-400" />
            Example: Verifying a Key-Value Pair in the Extension Block
          </h2>
          <p className="text-gray-300 mb-6">
            Here's an example of how to verify a key-value pair using a Merkle proof:
          </p>
          <div className="mb-4">
            <CodeBlock language="typescript"
              code={`import scorex.crypto.authds.merkle.MerkleProof
import scorex.crypto.hash.{Blake2b256, Digest32}
import scorex.util.encode.Base16

val key = "someKey".getBytes("UTF-8")
val value = "someValue".getBytes("UTF-8")
val leafHash = Blake2b256(key ++ value)

val proof = MerkleProof[Digest32](leafHash, Seq(...)) // Proof provided in the block
val root = Base16.decode("expectedMerkleRoot").get

assert(proof.valid(Digest32 @@ root))`}
            />
          </div>
          <p className="text-gray-300">
            In this example, the proof is validated by comparing the computed root from the proof with the expected Merkle Root stored in the block header.
          </p>
        </section>

        {/* Use Cases Section */}
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-green-400" />
            Use Cases of the Extension Block Merkle Tree
          </h2>
          <p className="text-gray-300 mb-6">
            The Extension Block Merkle Tree serves several critical functions within the Ergo blockchain:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">Miner Voting</h3>
              </div>
              <p className="text-sm text-gray-300">
                Securely records and verifies miner votes on protocol changes, ensuring that the results cannot be tampered with.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">Protocol Upgrades</h3>
              </div>
              <p className="text-sm text-gray-300">
                Safely stores protocol parameters and upgrades, providing a transparent and immutable record of changes.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">State Verification</h3>
              </div>
              <p className="text-sm text-gray-300">
                Enables efficient verification of additional state information or proofs, which can be crucial for off-chain applications or second-layer solutions.
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
                <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/extension/Extension.scala" className="text-orange-400 hover:text-orange-300 underline">Extension.scala</a></li>
                <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/extension/ExtensionSerializer.scala" className="text-orange-400 hover:text-orange-300 underline">ExtensionSerializer.scala</a></li>
                <li>• <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/extension/ExtensionValidator.scala" className="text-orange-400 hover:text-orange-300 underline">ExtensionValidator.scala</a></li>
              </ul>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Related Documentation</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <a href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-blue-400 hover:text-blue-300 underline">Merkle Trees Overview</a></li>
                <li>• <a href="/Docs/developers/cryptographic-primitives/merkle-tree/core" className="text-blue-400 hover:text-blue-300 underline">Core Merkle Tree</a></li>
                <li>• <a href="/Docs/developers/cryptographic-primitives/merkle-tree/validation" className="text-blue-400 hover:text-blue-300 underline">Merkle Tree Validation</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 