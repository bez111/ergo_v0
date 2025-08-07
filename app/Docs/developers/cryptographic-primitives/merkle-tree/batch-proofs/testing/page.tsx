import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ListChecks, Code } from 'lucide-react';
import { CodeBlock } from "@/components/ui";

export default function MerkleBatchProofsTestingPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* HERO Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <ListChecks className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Testing Merkle Batch Proofs
              </h1>
              <p className="text-lg text-gray-300 mt-2">
                Comprehensive testing strategies for Merkle Batch Proofs in Ergo, covering Rust and Scala implementations with detailed examples and verification methods.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 mb-6">
            <Link
              href="/Docs/developers/cryptographic-primitives/merkle-tree/batch-proofs"
              className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Merkle Batch Proofs
            </Link>
            <Link
              href="/Docs/developers/cryptographic-primitives/merkle-tree/batch-proofs/implementation"
              className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-black hover:bg-blue-600 transition-transform hover:scale-105"
            >
              <Code className="w-5 h-5 mr-2" />
              Implementation
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-8">
            Testing Merkle Batch Proofs is crucial to ensure the correctness of their implementation in the Ergo blockchain. This section provides examples of how to write tests for Merkle Batch Proofs using both Rust (<code className="bg-neutral-700 px-2 py-1 rounded">sigma-rust</code>) and Scala (<code className="bg-neutral-700 px-2 py-1 rounded">scrypto</code>). These tests cover the creation, verification, serialization, and deserialization of batch Merkle proofs.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6 mt-12">Rust (sigma-rust) Testing</h2>
          
          <p className="text-gray-300 mb-6">
            In Rust, the <code className="bg-neutral-700 px-2 py-1 rounded">sigma-rust</code> library provides the necessary tools to create and test Merkle Batch Proofs. Below is a series of tests written using the Rust testing framework.
          </p>

          <CodeBlock language="typescript"
            code={String.raw`#[cfg(test)]
mod tests {
    use sigma_merkle_tree::merkletree::MerkleTree;
    use sigma_merkle_tree::MerkleNode;
    use sigma_merkle_tree::batchmerkleproof::BatchMerkleProof;
    use sigma_ser::ScorexSerializable;
    use blake2::Blake2b256;

    #[test]
    fn test_merkle_tree_creation() {
        let data_1 = [1u8; 32];
        let data_2 = [2u8; 32];
        let data_3 = [3u8; 32];

        let node_1 = MerkleNode::from_bytes(data_1);
        let node_2 = MerkleNode::from_bytes(data_2);
        let node_3 = MerkleNode::from_bytes(data_3);

        let tree = MerkleTree::new(vec![node_1, node_2, node_3]);
        assert!(tree.root_hash().is_some(), "Merkle tree root hash should be generated");
    }

    #[test]
    fn test_batch_merkle_proof_generation() {
        let data_1 = [1u8; 32];
        let data_2 = [2u8; 32];
        let data_3 = [3u8; 32];

        let node_1 = MerkleNode::from_bytes(data_1);
        let node_2 = MerkleNode::from_bytes(data_2);
        let node_3 = MerkleNode::from_bytes(data_3);

        let tree = MerkleTree::new(vec![node_1, node_2, node_3]);
        let proof = tree.proof_by_indices(&[0, 2]).unwrap();

        assert_eq!(proof.indices.len(), 2, "Batch proof should include two indices");
    }

    #[test]
    fn test_batch_merkle_proof_verification() {
        let data_1 = [1u8; 32];
        let data_2 = [2u8; 32];
        let data_3 = [3u8; 32];

        let node_1 = MerkleNode::from_bytes(data_1);
        let node_2 = MerkleNode::from_bytes(data_2);
        let node_3 = MerkleNode::from_bytes(data_3);

        let tree = MerkleTree::new(vec![node_1, node_2, node_3]);
        let proof = tree.proof_by_indices(&[0, 2]).unwrap();

        assert!(proof.valid(tree.root_hash().as_ref()), "Merkle proof should be valid");
    }

    #[test]
    fn test_batch_merkle_proof_serialization_deserialization() {
        let data_1 = [1u8; 32];
        let data_2 = [2u8; 32];
        let data_3 = [3u8; 32];

        let node_1 = MerkleNode::from_bytes(data_1);
        let node_2 = MerkleNode::from_bytes(data_2);
        let node_3 = MerkleNode::from_bytes(data_3);

        let tree = MerkleTree::new(vec![node_1, node_2, node_3]);
        let proof = tree.proof_by_indices(&[0, 2]).unwrap();

        let serialized_proof = proof.scorex_serialize_bytes().unwrap();
        let deserialized_proof = BatchMerkleProof::scorex_parse_bytes(&serialized_proof).unwrap();

        assert_eq!(proof, deserialized_proof, "Deserialized proof should match the original");
    }
}`}
          />

          <h3 className="text-2xl font-bold text-white mb-4 mt-8">Code References</h3>
          
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
            <li><strong>MerkleTree</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergo-merkle-tree/src/merkletree.rs" className="text-orange-400 hover:text-orange-300 underline">merkletree.rs</a></li>
            <li><strong>BatchMerkleProof</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergo-merkle-tree/src/batchmerkleproof.rs" className="text-orange-400 hover:text-orange-300 underline">batchmerkleproof.rs</a></li>
            <li><strong>Serialization Methods</strong>: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/sigma-ser/src/scorex_serializable.rs" className="text-orange-400 hover:text-orange-300 underline">scorex_serializable.rs</a></li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-6 mt-12">Scala (scrypto) Testing</h2>
          
          <p className="text-gray-300 mb-6">
            For Scala, the <code className="bg-neutral-700 px-2 py-1 rounded">scrypto</code> library is used to test Merkle Batch Proofs. Below are the test cases using ScalaTest, covering tree creation, proof generation, verification, and serialization.
          </p>

          <CodeBlock language="typescript"
            code={String.raw`import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers
import scorex.crypto.authds.merkle.{MerkleTree, BatchMerkleProof}
import scorex.crypto.authds.merkle.serialization.BatchMerkleProofSerializer
import scorex.crypto.hash.{Blake2b256, Digest32}
import scorex.utils.Random

class MerkleBatchProofSpec extends AnyFlatSpec with Matchers {
  implicit val hf = Blake2b256

  "Merkle Tree" should "be created correctly" in {
    val leafData = Seq.fill(3)(Random.randomBytes(32)) // Generate random leaf data
    val tree = MerkleTree(leafData.map(Digest32 @@ _)) // Create a Merkle Tree

    tree.rootHash should not be null
  }

  "Batch Merkle Proof" should "be generated correctly" in {
    val leafData = Seq.fill(3)(Random.randomBytes(32)) // Generate random leaf data
    val tree = MerkleTree(leafData.map(Digest32 @@ _)) // Create a Merkle Tree

    val proof = tree.proofByIndices(Seq(0, 2)).get // Generate batch proof for elements at index 0 and 2
    proof.indices.length shouldEqual 2
  }

  it should "verify correctly" in {
    val leafData = Seq.fill(3)(Random.randomBytes(32)) // Generate random leaf data
    val tree = MerkleTree(leafData.map(Digest32 @@ _)) // Create a Merkle Tree

    val proof = tree.proofByIndices(Seq(0, 2)).get // Generate batch proof for elements at index 0 and 2
    proof.valid(tree.rootHash) shouldBe true // Verify the proof against the tree's root hash
  }

  it should "serialize and deserialize correctly" in {
    val leafData = Seq.fill(3)(Random.randomBytes(32)) // Generate random leaf data
    val tree = MerkleTree(leafData.map(Digest32 @@ _)) // Create a Merkle Tree

    val proof = tree.proofByIndices(Seq(0, 2)).get // Generate batch proof for elements at index 0 and 2
    val serializer = new BatchMerkleProofSerializer[Digest32, Blake2b256.type] // Serializer for BatchMerkleProof

    val serializedProof = serializer.serialize(proof) // Serialize the proof
    val deserializedProof = serializer.deserialize(serializedProof).get // Deserialize the proof

    proof shouldEqual deserializedProof // Check that the original and deserialized proofs are equal
  }
}`}
          />

          <h3 className="text-2xl font-bold text-white mb-4 mt-8">Code References</h3>
          
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
            <li><strong>MerkleTree</strong>: <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/authds/merkle/MerkleTree.scala" className="text-orange-400 hover:text-orange-300 underline">MerkleTree.scala</a></li>
            <li><strong>BatchMerkleProof</strong>: <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/authds/merkle/BatchMerkleProof.scala" className="text-orange-400 hover:text-orange-300 underline">BatchMerkleProof.scala</a></li>
            <li><strong>BatchMerkleProofSerializer</strong>: <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/authds/merkle/serialization/BatchMerkleProofSerializer.scala" className="text-orange-400 hover:text-orange-300 underline">BatchMerkleProofSerializer.scala</a></li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-6 mt-12">Explanation</h2>
          
          <div className="bg-neutral-800/50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li><strong>Merkle Tree Creation</strong>: The test generates random leaf data and creates a <code className="bg-neutral-700 px-2 py-1 rounded">MerkleTree</code>. This ensures that the tree is correctly constructed and the root hash is generated.</li>
              <li><strong>Batch Merkle Proof Generation</strong>: The test creates a batch proof for selected elements (indices 0 and 2) of the Merkle Tree.</li>
              <li><strong>Proof Verification</strong>: The test verifies the validity of the generated batch proof against the Merkle root, ensuring the proof correctly represents the inclusion of those elements in the tree.</li>
              <li><strong>Serialization and Deserialization</strong>: The test checks the ability to serialize a batch proof, then deserialize it back to its original form, confirming the integrity of the proof after these operations.</li>
            </ul>
          </div>

          <p className="text-gray-300">
            These tests collectively ensure that the core functionality of Merkle Batch Proofs in <code className="bg-neutral-700 px-2 py-1 rounded">scrypto</code> operates correctly, providing developers with confidence in using this library for cryptographic proofs in their applications.
          </p>
        </div>
      </div>
    </div>
  );
} 