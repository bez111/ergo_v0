import React from "react";
import { ArrowLeft, Shield, Database, Link as LinkIcon, GitBranch } from "lucide-react";
import Link from "next/link";

export default function PoPowPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Shield className="w-10 h-10 text-orange-400" />
        Proof of Proof-of-Work (PoPow) Data Structures in Ergo
      </h1>

      <div className="space-y-8">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-400" />
            Overview
          </h2>
          <p className="text-gray-300 mb-6">
            Proof of Proof-of-Work (PoPow) is an advanced protocol that enables lightweight clients to securely and efficiently verify that a blockchain follows the longest chain rule without downloading the entire blockchain. This is particularly important for resource-constrained devices, such as mobile phones or IoT devices, where downloading and storing the entire blockchain is impractical.
          </p>
          <p className="text-gray-300 mb-6">
            The PoPow protocol is built on top of several key data structures that facilitate this efficient verification process. This documentation page provides an in-depth look at these data structures, how they interact, and their roles within the PoPow protocol.
          </p>
        </section>

        <div className="mb-6 flex gap-4">
          <Link
            href="/Docs/developers/cryptographic-primitives"
            className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Cryptographic Primitives
          </Link>
          
          <Link
            href="/Docs/developers/cryptographic-primitives/interlink-vectors"
            className="inline-flex items-center px-5 py-2 bg-green-500 rounded-xl font-semibold text-black hover:bg-green-600 transition-transform hover:scale-105"
          >
            <LinkIcon className="w-5 h-5 mr-2" />
            Interlink Vectors
          </Link>
        </div>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <LinkIcon className="w-6 h-6 text-green-400" />
            Key Data Structures in PoPow
          </h2>
          <p className="text-gray-300 mb-6">
            The PoPow protocol relies on a combination of interlink vectors, NiPoPoW proofs, and Merkle trees to achieve its goals. Each of these data structures plays a specific role in enabling efficient verification of the blockchain's integrity.
          </p>

          <div className="space-y-6">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-3 text-green-400">1. Interlink Vectors</h3>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li><strong>Purpose</strong>: Interlink vectors store references to previous block headers at different difficulty levels. They allow lightweight clients to verify the blockchain's integrity by checking only a subset of blocks, rather than the entire chain.</li>
                <li><strong>Structure</strong>: An interlink vector is an array where each element points to a previous block header. The level of each element is determined by the number of leading zeros in the block's hash, corresponding to the difficulty level of that block.</li>
                <li><strong>Usage</strong>: Interlink vectors are updated as new blocks are added to the blockchain, ensuring that the latest blocks are always accessible for verification. They are particularly useful in scenarios where quick and efficient chain validation is needed.</li>
                <li><strong>Code Reference</strong>: <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/popow/InterlinkVector.scala" className="text-blue-400 hover:text-blue-300 underline">InterlinkVector.scala</a></li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-3 text-green-400">2. NiPoPoW (Non-Interactive Proof of Proof-of-Work) Proofs</h3>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li><strong>Purpose</strong>: NiPoPoW proofs allow a lightweight client to verify that a given chain is the correct one (i.e., the chain with the most cumulative work) without interacting with the blockchain network.</li>
                <li><strong>Structure</strong>: A NiPoPoW proof consists of a sequence of block headers from the blockchain, including interlink references and proof chains. The proof chain includes blocks that represent a certain amount of work, with a gap between them that ensures the inclusion of the most important blocks.</li>
                <li><strong>Usage</strong>: NiPoPoW proofs are used by clients to verify that a blockchain adheres to the longest chain rule by checking the work done on the chain. They reduce the amount of data that needs to be processed while maintaining a high level of security.</li>
                <li><strong>Code Reference</strong>: <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/popow/NipopowProof.scala" className="text-blue-400 hover:text-blue-300 underline">NipopowProof.scala</a></li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-3 text-green-400">3. Merkle Trees</h3>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li><strong>Purpose</strong>: Merkle trees are used to efficiently verify the inclusion of specific data elements (such as transactions or block headers) in a larger dataset. In the context of PoPow, Merkle trees help verify that the interlink vectors and other components of the PoPow proof are correctly formed.</li>
                <li><strong>Structure</strong>: A Merkle tree is a binary tree where each leaf node is a hash of a block of data, and each non-leaf node is a hash of its child nodes. The root of the tree, known as the Merkle root, serves as a cryptographic commitment to the entire dataset.</li>
                <li><strong>Usage</strong>: In PoPow, Merkle trees are used to generate Merkle proofs that verify the inclusion of specific blocks or headers in the chain. These proofs are then included in the NiPoPoW proof to provide lightweight clients with the necessary evidence to trust the blockchain's integrity.</li>
                <li><strong>Code Reference</strong>: <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/extension/Extension.scala" className="text-blue-400 hover:text-blue-300 underline">Extension.scala</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-yellow-400" />
            Interaction Between Data Structures
          </h2>
          <p className="text-gray-300 mb-6">
            The PoPow protocol leverages the interaction between interlink vectors, NiPoPoW proofs, and Merkle trees to provide a comprehensive solution for lightweight blockchain verification. Here's how these data structures work together:
          </p>

          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">1. Interlink Vectors</h4>
              <p className="text-gray-300">
                are generated and updated as new blocks are mined. These vectors provide references to important block headers at different difficulty levels, allowing clients to quickly identify and verify the most relevant parts of the blockchain.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">2. NiPoPoW Proofs</h4>
              <p className="text-gray-300">
                are constructed using the interlink vectors and the chain of block headers. These proofs include a carefully selected subset of block headers that represent the chain's cumulative work, along with the interlink references needed to verify the chain's integrity.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">3. Merkle Trees</h4>
              <p className="text-gray-300">
                are used to create cryptographic proofs that verify the inclusion of specific data elements, such as block headers or interlink references, in the PoPow proof. These Merkle proofs are included in the NiPoPoW proof, providing clients with a compact and secure way to verify the blockchain.
              </p>
            </div>
          </div>

          <p className="text-gray-300 mt-6">
            The combination of these data structures ensures that the PoPow protocol is both secure and efficient, enabling lightweight clients to participate in the blockchain network without requiring extensive resources.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 text-white">Example: Constructing a NiPoPoW Proof</h2>
          <p className="text-gray-300 mb-6">
            Here is a step-by-step overview of how a NiPoPoW proof is constructed using the PoPow data structures:
          </p>

          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">1. Collect Block Headers</h4>
              <p className="text-gray-300">
                A set of block headers is selected from the blockchain, representing different points in the chain with varying difficulty levels. These headers are chosen based on the work they represent and their relevance to the chain's integrity.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">2. Build the Interlink Vector</h4>
              <p className="text-gray-300">
                The interlink vector is constructed by referencing the selected block headers. Each element in the vector points to a block header with a specific difficulty level, ensuring that the proof covers the entire chain.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">3. Generate Merkle Proofs</h4>
              <p className="text-gray-300">
                Merkle proofs are generated for the selected block headers and interlink references. These proofs ensure that the data elements included in the proof are valid and can be verified by the client.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">4. Assemble the NiPoPoW Proof</h4>
              <p className="text-gray-300">
                The block headers, interlink vector, and Merkle proofs are assembled into a NiPoPoW proof. This proof is then sent to the client, who can use it to verify the blockchain's integrity.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">5. Verification by the Client</h4>
              <p className="text-gray-300">
                The client verifies the NiPoPoW proof by checking the Merkle proofs and ensuring that the interlink vector correctly references the block headers. If the proof is valid, the client can trust that the blockchain follows the longest chain rule.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
          <p className="text-gray-300 mb-6">
            The PoPow protocol is a powerful tool for enabling secure and efficient blockchain verification by lightweight clients. By leveraging interlink vectors, NiPoPoW proofs, and Merkle trees, PoPow provides a scalable solution for verifying the integrity of the blockchain without requiring extensive resources.
          </p>
          <p className="text-gray-300">
            Developers working with the Ergo blockchain should familiarize themselves with these data structures and their interactions to effectively implement and utilize PoPow in their applications. As the Ergo ecosystem continues to grow, PoPow and its associated data structures will play a crucial role in maintaining the security and scalability of the network.
          </p>
        </section>
      </div>
    </div>
  );
} 