import React from "react";
import { ArrowLeft, Shield, Link as LinkIcon, GitBranch, Database } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function InterlinkVectorsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Shield className="w-10 h-10 text-orange-400" />
        Interlink Vectors in Ergo
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/cryptographic-primitives/popow"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to PoPow Data Structures
        </Link>
      </div>

      <div className="space-y-8">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-400" />
            Overview
          </h2>
          <p className="text-gray-300 mb-6">
            Interlink vectors are a fundamental component of the <a href="/Docs/developers/cryptographic-primitives/popow" className="text-blue-400 hover:text-blue-300 underline">Proof-of-Proof-of-Work (PoPow) protocol</a> in the Ergo blockchain. These vectors allow lightweight clients to verify the correctness of the blockchain without needing to download and validate the entire chain. By storing references to previous block headers at varying heights, interlink vectors create a hierarchical structure that supports efficient validation and compression of blockchain data, making them particularly useful for devices with limited resources such as mobile phones or IoT devices.
          </p>
          <p className="text-gray-300 mb-6">
            Interlink vectors work in conjunction with <a href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-blue-400 hover:text-blue-300 underline">Merkle trees</a> and PoPow proofs to ensure that the blockchain follows the longest chain rule, which is critical for maintaining the security and integrity of the network.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <LinkIcon className="w-6 h-6 text-green-400" />
            Purpose of Interlink Vectors
          </h2>
          <p className="text-gray-300 mb-6">
            In traditional blockchains, each block references its immediate predecessor, forming a simple linear chain. For lightweight clients, downloading and validating every block in this chain is impractical due to resource constraints. Interlink vectors solve this problem by storing references to previous blocks in a hierarchical manner. This allows clients to verify the chain's integrity by checking only a subset of blocks, drastically reducing the amount of data they need to process.
          </p>
          <p className="text-gray-300 mb-6">
            Interlink vectors are essential for enabling efficient and secure blockchain validation in scenarios where full nodes are impractical. They are a key part of ensuring that the network remains decentralized and accessible to a wide range of participants, including those with limited computing power.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-yellow-400" />
            Structure of Interlink Vectors
          </h2>
          <p className="text-gray-300 mb-6">
            An interlink vector is essentially an array of block headers, where each element points to a previous block header at a certain level of the chain. The levels in the interlink vector are determined by the number of leading zeros in the block's hash, which corresponds to the difficulty level of the block.
          </p>

          <h3 className="text-xl font-bold mb-3 text-white">Key Properties:</h3>
          <ul className="text-gray-300 space-y-2 ml-4 mb-6">
            <li><strong>Efficiency</strong>: Interlink vectors allow clients to verify the longest chain without needing to download the entire blockchain, making the process more efficient.</li>
            <li><strong>Scalability</strong>: They support the participation of lightweight clients by minimizing the data required for verification.</li>
            <li><strong>Security</strong>: By adhering to the longest chain rule, interlink vectors help ensure that the blockchain remains secure and that all participants can trust its integrity.</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 text-white">Example Structure:</h3>
          <p className="text-gray-300 mb-4">
            For instance, if a block has two leading zeros in its hash, it might be placed at the second level of the interlink vector. Higher levels correspond to blocks with more leading zeros, indicating higher difficulty.
          </p>

          <div className="bg-neutral-900/50 rounded-lg p-4 mb-6">
            <div className="text-sm text-gray-300">
              <div className="mb-2">graph TD</div>
              <div className="ml-4 space-y-1">
                <div>A[Block Header at Level 0] --&gt; B[Block Header at Level 1]</div>
                <div>B --&gt; C[Block Header at Level 2]</div>
                <div>C --&gt; D[Block Header at Level 3]</div>
                <div>D --&gt; E[Latest Block Header]</div>
              </div>
            </div>
          </div>

          <p className="text-gray-300">
            This hierarchical structure allows clients to verify the blockchain's integrity by checking only the relevant levels in the interlink vector.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 text-white">Implementation in Ergo</h2>
          <p className="text-gray-300 mb-6">
            Interlink vectors are implemented in the Ergo blockchain as part of the PoPow protocol and are stored in the block headers. The implementation involves recursively hashing previous block headers, starting from the genesis block, and updating the interlink vector with each new block.
          </p>

          <div className="space-y-6">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-3 text-green-400">1. Creating the Interlink Vector</h3>
              <p className="text-gray-300 mb-4">When a new block is mined:</p>
              <ul className="text-gray-300 space-y-2 ml-4 mb-4">
                <li>The block's hash is computed.</li>
                <li>The number of leading zeros in the hash determines the block's level in the interlink vector.</li>
                <li>The block header is added to the vector at the corresponding level.</li>
              </ul>
              <p className="text-gray-300">
                <strong>Code Reference</strong>: The logic for creating and managing interlink vectors is implemented within the <a href="https://github.com/ScorexFoundation/scrypto" className="text-blue-400 hover:text-blue-300 underline">Scorex repository</a> used by the Ergo blockchain. Specifically, you can find the relevant code in the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/header/Header.scala" className="text-blue-400 hover:text-blue-300 underline">BlockHeader.scala</a> file.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-3 text-green-400">2. Updating the Interlink Vector</h3>
              <p className="text-gray-300 mb-4">As new blocks are added:</p>
              <ul className="text-gray-300 space-y-2 ml-4 mb-4">
                <li>The interlink vector is updated by adding references to new block headers.</li>
                <li>If a block with more leading zeros (indicating a higher level) is found, it replaces the previous block at that level.</li>
              </ul>
              <p className="text-gray-300">
                <strong>Code Reference</strong>: The interlink vector update mechanism is handled within the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/history/header/Header.scala" className="text-blue-400 hover:text-blue-300 underline">Ergo block header construction process</a>.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-3 text-green-400">3. Verifying the Chain with Interlink Vectors</h3>
              <p className="text-gray-300 mb-4">To verify the blockchain:</p>
              <ul className="text-gray-300 space-y-2 ml-4 mb-4">
                <li>A client checks the blocks referenced in the interlink vector.</li>
                <li>By verifying that each block in the vector adheres to the required difficulty level, the client confirms that the chain follows the longest chain rule.</li>
              </ul>
              <p className="text-gray-300">
                <strong>Code Reference</strong>: Chain verification using interlink vectors is integrated into the block validation logic in the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/nodeView/history/ErgoHistory.scala" className="text-blue-400 hover:text-blue-300 underline">Ergo codebase</a>, particularly within the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/nodeView/history/ErgoHistory.scala" className="text-blue-400 hover:text-blue-300 underline">ErgoHistory.scala</a> file.
              </p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-3 text-green-400">4. Batch Merkle Proofs and Interlink Vectors</h3>
              <p className="text-gray-300 mb-4">Interlink vectors are often combined with batch Merkle proofs to enhance efficiency:</p>
              <ul className="text-gray-300 space-y-2 ml-4 mb-4">
                <li>A batch Merkle proof allows the simultaneous verification of multiple elements in the interlink vector.</li>
                <li>This reduces the computational overhead and ensures secure validation.</li>
              </ul>
              <p className="text-gray-300">
                <strong>Code Reference</strong>: Batch Merkle proof logic is implemented in the <a href="https://github.com/ergoplatform/sigma-rust" className="text-blue-400 hover:text-blue-300 underline">sigma-rust library</a>, specifically in the <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergo-merkle-tree/src/batchmerkleproof.rs" className="text-blue-400 hover:text-blue-300 underline">batchmerkleproof.rs</a> file.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 text-white">Example Usage</h2>
          <p className="text-gray-300 mb-6">
            Consider a scenario where a lightweight client wants to verify the blockchain up to a certain height. The client can download the interlink vector from the latest block and check the references to previous blocks at each level. By verifying the Merkle proofs for these references, the client can confirm that the chain is valid without downloading the entire chain.
          </p>
          <p className="text-gray-300 mb-6">
            Here's an example of how the interlink vector might be used in practice:
          </p>

          <div className="mb-6">
            <CodeBlock language="typescript"
              children={`use sigma_merkle_tree::batchmerkleproof::BatchMerkleProof;
use sigma_merkle_tree::merkletree::MerkleTree;
use sigma_merkle_tree::MerkleNode;

fn verify_interlink_vector(tree: &MerkleTree, proof: &BatchMerkleProof) {
    // Verify the Merkle proof for the interlink vector
    assert!(proof.valid(tree.root_hash().as_ref()));
    println!("Interlink vector is valid.");
}`}
            />
          </div>

          <p className="text-gray-300">
            <strong>Code Reference</strong>: The example demonstrates the use of batch Merkle proofs from the <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergo-merkle-tree/src/batchmerkleproof.rs" className="text-blue-400 hover:text-blue-300 underline">sigma-rust library</a> to verify the interlink vector against the blockchain's Merkle root.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
          <p className="text-gray-300">
            Interlink vectors are a key component of Ergo's PoPow protocol, enabling efficient and secure blockchain validation for lightweight clients. By understanding and utilizing interlink vectors, developers can ensure that their applications and clients maintain the highest standards of security and efficiency, even in resource-constrained environments.
          </p>
        </section>
      </div>
    </div>
  );
} 