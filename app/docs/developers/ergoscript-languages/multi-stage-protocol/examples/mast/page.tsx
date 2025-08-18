"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, TreePine, Copy, Check } from "lucide-react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function MASTPage() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <TreePine className="w-10 h-10 text-green-400" />
        MAST
      </h1>

      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages/multi-stage-protocol/examples"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Examples
        </Link>
      </div>

      <div className="space-y-6">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Tutorial: Merkleized Abstract Syntax Trees (MAST) in Ergo</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Merkleized Abstract Syntax Trees (MAST) are a technique used in blockchain protocols to improve privacy and efficiency for complex smart contracts with multiple spending conditions. Instead of revealing the entire contract script when spending, MAST allows revealing only the specific condition (script branch) that was actually met and proving its inclusion in the original set of conditions.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Concept</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Imagine a contract with several possible ways it can be spent:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Condition A: Alice can spend after time T1.</li>
              <li>Condition B: Bob can spend if he provides a secret value X.</li>
              <li>Condition C: Alice and Bob can spend together anytime.</li>
            </ul>
            <p>
              Traditionally, the entire script containing all these conditions would be stored in the box's <code className="bg-neutral-700 px-2 py-0.5 rounded">propositionBytes</code>. When spending, the whole script is evaluated, revealing all possible spending paths.
            </p>
            <p>
              With MAST:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Each condition (A, B, C) is treated as a separate script fragment.</li>
              <li>These fragments are serialized to their <a href="../ergotree.md" className="text-cyan-400 hover:underline">ErgoTree</a> byte representation (<code className="bg-neutral-700 px-2 py-0.5 rounded">Coll[Byte]</code>).</li>
              <li>Each byte representation is hashed (e.g., using <code className="bg-neutral-700 px-2 py-0.5 rounded">blake2b256</code>).</li>
              <li>These hashes are arranged as leaves in a <a href="merkle-tree.md" className="text-cyan-400 hover:underline">Merkle Tree</a>.</li>
              <li>The <strong>Merkle root</strong> of this tree is calculated and stored in the main locking script of the box (often as a constant).</li>
            </ol>
            <p>
              The locking script essentially says: "This box can be spent if you provide:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>A specific script fragment (<code className="bg-neutral-700 px-2 py-0.5 rounded">scriptBytes</code>).</li>
              <li>A Merkle proof (<code className="bg-neutral-700 px-2 py-0.5 rounded">merkleProof</code>) demonstrating that <code className="bg-neutral-700 px-2 py-0.5 rounded">blake2b256(scriptBytes)</code> is a valid leaf within the Merkle tree whose root is <code className="bg-neutral-700 px-2 py-0.5 rounded">expectedMerkleRoot</code>.</li>
              <li>Data (context variables, signatures, etc.) that satisfies the execution of the provided <code className="bg-neutral-700 px-2 py-0.5 rounded">scriptBytes</code>."</li>
            </ol>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Visual Representation</h2>
          <div className="text-gray-300 space-y-4">
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
              <pre className="text-gray-200">
{`graph TD
    A[Root Hash] --> B[Hash of (Hash A + Hash B)]
    A --> C[Hash of (Hash C + Hash D)]
    B --> D1[Hash A (Alice Spend)]
    B --> E1[Hash B (Bob Spend)]
    C --> F1[Hash C (Timelock)]
    C --> G1[Hash D (Multisig)]
    
    style D1 fill:#f9f,stroke:#333,stroke-width:2px
    style E1 fill:#bbf,stroke:#333,stroke-width:2px
    style F1 fill:#bfb,stroke:#333,stroke-width:2px
    style G1 fill:#fbf,stroke:#333,stroke-width:2px`}
              </pre>
            </div>
            <p className="text-sm text-gray-400 italic">
              The Merkle Root (A) commits to all possible spending conditions (leaves).
            </p>
            <p>
              When spending using Alice's condition (Hash A), only the necessary path needs to be revealed:
            </p>
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
              <pre className="text-gray-200">
{`graph TD
    A[Root Hash] --> B[Hash of (Hash A + Hash B)]
    A --> C[Hash C - Provided in Proof]
    B --> D1[Hash A (Alice Spend)]
    B --> E1[Hash B - Provided in Proof]
    
    style A fill:#afa,stroke:#333,stroke-width:2px
    style B fill:#afa,stroke:#333,stroke-width:2px
    style D1 fill:#afa,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style E1 fill:#bbf,stroke:#333,stroke-width:2px

    subgraph Revealed On-Chain
        A
        B
        D1
        AliceScriptBytes["Alice's Script Bytes (getVar[0])"]
    end
    subgraph Provided in Proof "(getVar[1])"
        C
        E1
        ProofPositions["Proof Positions (getVar[2])"]
    end

    AliceScriptBytes -->|blake2b256| D1`}
              </pre>
            </div>
            <p className="text-sm text-gray-400 italic">
              Only Alice's script bytes and the sibling hashes (E1, C) needed to reconstruct the root are revealed.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Benefits</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Privacy:</strong> Only the executed spending condition is revealed on-chain. Unused conditions remain hidden.</li>
              <li><strong>Efficiency:</strong> Smaller on-chain footprint for the main locking script (just the root hash). Validation cost can be lower if the executed branch is simple, though Merkle proof verification adds overhead.</li>
              <li><strong>Scalability:</strong> Allows for contracts with a very large number of potential conditions without making the base script excessively large or complex.</li>
            </ul>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Comparison: Traditional vs. MAST Execution</h2>
          <div className="text-gray-300 space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-neutral-700">
                <thead>
                  <tr className="bg-neutral-800">
                    <th className="border border-neutral-700 px-4 py-2 text-left">Aspect</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">Traditional Script</th>
                    <th className="border border-neutral-700 px-4 py-2 text-left">MAST-based Execution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-neutral-800/30">
                    <td className="border border-neutral-700 px-4 py-2">Privacy</td>
                    <td className="border border-neutral-700 px-4 py-2">All conditions visible on-chain</td>
                    <td className="border border-neutral-700 px-4 py-2">Only used condition revealed</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">Script Size</td>
                    <td className="border border-neutral-700 px-4 py-2">Full script stored on-chain</td>
                    <td className="border border-neutral-700 px-4 py-2">Only Merkle root stored on-chain</td>
                  </tr>
                  <tr className="bg-neutral-800/30">
                    <td className="border border-neutral-700 px-4 py-2">Execution Cost</td>
                    <td className="border border-neutral-700 px-4 py-2">Evaluates potentially complex script</td>
                    <td className="border border-neutral-700 px-4 py-2">Verifies proof + Evaluates simple branch</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">Complexity Limit</td>
                    <td className="border border-neutral-700 px-4 py-2">Limited by practical script size/cost</td>
                    <td className="border border-neutral-700 px-4 py-2">Can support many conditions</td>
                  </tr>
                  <tr className="bg-neutral-800/30">
                    <td className="border border-neutral-700 px-4 py-2">Implementation</td>
                    <td className="border border-neutral-700 px-4 py-2">Straightforward ErgoScript</td>
                    <td className="border border-neutral-700 px-4 py-2">Requires off-chain prep + proof logic</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">Security</td>
                    <td className="border border-neutral-700 px-4 py-2">Direct script validation</td>
                    <td className="border border-neutral-700 px-4 py-2">Requires proper Merkle proof verification</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">ErgoScript MAST Example (with Proof Verification)</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              This example demonstrates the core on-chain logic using context variables to receive the script branch and its Merkle proof.
            </p>
            
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`{
  // Merkle root of all possible spending conditions (calculated off-chain)
  // This would typically be embedded as a constant in the script
  val merkleRoot = SELF.R4[Coll[Byte]].get // Example: Get root from R4

  // Context variable 0: The specific spending script bytes being executed
  val providedScriptBytes = getVar[Coll[Byte]](0).getOrElse(Coll[Byte]()) 
  
  // Context variable 1: The Merkle proof (sibling hashes)
  val merkleProof = getVar[Coll[Coll[Byte]]](1).getOrElse(Coll[Coll[Byte]]()) 
  
  // Context variable 2: The positions of sibling hashes (0 for left, 1 for right)
  val proofPositions = getVar[Coll[Byte]](2).getOrElse(Coll[Byte]())

  // Hash the provided script to get the leaf hash
  val leafHash = blake2b256(providedScriptBytes)
  
  // --- Merkle Proof Verification Logic ---
  // (Simplified helper function - real implementation might be more complex/optimized)
  // Assumes 'verifyMerkleProof' takes root, leaf, proof, positions and returns Boolean
  val proofIsValid = verifyMerkleProof(merkleRoot, leafHash, merkleProof, proofPositions)
  // --- End Merkle Proof Verification ---

  // If the proof is valid, execute the provided script fragment
  // The script fragment itself should return SigmaProp
  val spendingCondition = if (proofIsValid) {
    executeFromVar[SigmaProp](0) // Execute script from context variable 0
  } else {
    sigmaProp(false) // Proof invalid, reject
  }
  
  spendingCondition
}

// --- Helper Function (Conceptual - Needs careful implementation/testing) ---
// This function would need to be defined within the script scope or 
// potentially made available via context extension or future built-ins.
def verifyMerkleProof(root: Coll[Byte], leaf: Coll[Byte], proof: Coll[Coll[Byte]], positions: Coll[Byte]): Boolean = {
  // Basic check for consistent proof/position lengths
  if (proof.size != positions.size) {
      false
  } else {
      // Start with the leaf hash
      val currentHash = proof.fold(leaf, { (h: Coll[Byte], i: Int) => 
          val proofElement = proof(i)
          val position = positions(i)
          
          // Combine current hash with proof element based on position
          if (position == 0) { // proofElement is on the right
              blake2b256(h ++ proofElement)
          } else { // proofElement is on the left
              blake2b256(proofElement ++ h)
          }
      })
      // Check if the calculated root matches the expected root
      currentHash == root
  }
}`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`{
  // Merkle root of all possible spending conditions (calculated off-chain)
  // This would typically be embedded as a constant in the script
  val merkleRoot = SELF.R4[Coll[Byte]].get // Example: Get root from R4

  // Context variable 0: The specific spending script bytes being executed
  val providedScriptBytes = getVar[Coll[Byte]](0).getOrElse(Coll[Byte]()) 
  
  // Context variable 1: The Merkle proof (sibling hashes)
  val merkleProof = getVar[Coll[Coll[Byte]]](1).getOrElse(Coll[Coll[Byte]]()) 
  
  // Context variable 2: The positions of sibling hashes (0 for left, 1 for right)
  val proofPositions = getVar[Coll[Byte]](2).getOrElse(Coll[Byte]())

  // Hash the provided script to get the leaf hash
  val leafHash = blake2b256(providedScriptBytes)
  
  // --- Merkle Proof Verification Logic ---
  // (Simplified helper function - real implementation might be more complex/optimized)
  // Assumes 'verifyMerkleProof' takes root, leaf, proof, positions and returns Boolean
  val proofIsValid = verifyMerkleProof(merkleRoot, leafHash, merkleProof, proofPositions)
  // --- End Merkle Proof Verification ---

  // If the proof is valid, execute the provided script fragment
  // The script fragment itself should return SigmaProp
  val spendingCondition = if (proofIsValid) {
    executeFromVar[SigmaProp](0) // Execute script from context variable 0
  } else {
    sigmaProp(false) // Proof invalid, reject
  }
  
  spendingCondition
}

// --- Helper Function (Conceptual - Needs careful implementation/testing) ---
// This function would need to be defined within the script scope or 
// potentially made available via context extension or future built-ins.
def verifyMerkleProof(root: Coll[Byte], leaf: Coll[Byte], proof: Coll[Coll[Byte]], positions: Coll[Byte]): Boolean = {
  // Basic check for consistent proof/position lengths
  if (proof.size != positions.size) {
      false
  } else {
      // Start with the leaf hash
      val currentHash = proof.fold(leaf, { (h: Coll[Byte], i: Int) => 
          val proofElement = proof(i)
          val position = positions(i)
          
          // Combine current hash with proof element based on position
          if (position == 0) { // proofElement is on the right
              blake2b256(h ++ proofElement)
          } else { // proofElement is on the left
              blake2b256(proofElement ++ h)
          }
      })
      // Check if the calculated root matches the expected root
      currentHash == root
  }
}`, 'mastScript')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['mastScript'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
            
            <p className="text-sm text-gray-400 italic">
              (Note: The <code className="bg-neutral-700 px-2 py-0.5 rounded">verifyMerkleProof</code> function shown is conceptual and simplified. Real-world implementations require careful handling of edge cases and potential optimizations. Currently, complex proof verification directly in ErgoScript can be costly.)
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Practical Implementation Steps (Off-Chain)</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              The setup for MAST happens off-chain before creating the box locked by the MAST script.
            </p>
            
            <h3 className="text-xl font-bold text-orange-400 mb-4">1. Define & Compile Conditions</h3>
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`// Using Ergo's AppKit (Scala Example)
import org.ergoplatform.appkit._
import scorex.crypto.hash.Blake2b256
import scorex.utils.ByteArray

val alicePk = prover.getP2PKAddress.pubkey // Get Alice's public key
val bobPk = ... // Get Bob's public key

// Define spending conditions as ErgoScript strings
val aliceSpendScript = s"{ proveDlog(alicePk) }"
val bobSpendScript = s"{ proveDlog(bobPk) }"
val timelockScript = s"{ HEIGHT > 100000 }"

// Compile scripts to ErgoTree bytes using BlockchainContext (ctx)
val aliceBytes = ctx.compileContract(ConstantsBuilder.create().item("alicePk", alicePk).build(), aliceSpendScript).getErgoTree.bytes
val bobBytes = ctx.compileContract(ConstantsBuilder.create().item("bobPk", bobPk).build(), bobSpendScript).getErgoTree.bytes
val timelockBytes = ctx.compileContract(ConstantsBuilder.empty(), timelockScript).getErgoTree.bytes`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`// Using Ergo's AppKit (Scala Example)
import org.ergoplatform.appkit._
import scorex.crypto.hash.Blake2b256
import scorex.utils.ByteArray

val alicePk = prover.getP2PKAddress.pubkey // Get Alice's public key
val bobPk = ... // Get Bob's public key

// Define spending conditions as ErgoScript strings
val aliceSpendScript = s"{ proveDlog(alicePk) }"
val bobSpendScript = s"{ proveDlog(bobPk) }"
val timelockScript = s"{ HEIGHT > 100000 }"

// Compile scripts to ErgoTree bytes using BlockchainContext (ctx)
val aliceBytes = ctx.compileContract(ConstantsBuilder.create().item("alicePk", alicePk).build(), aliceSpendScript).getErgoTree.bytes
val bobBytes = ctx.compileContract(ConstantsBuilder.create().item("bobPk", bobPk).build(), bobSpendScript).getErgoTree.bytes
val timelockBytes = ctx.compileContract(ConstantsBuilder.empty(), timelockScript).getErgoTree.bytes`, 'defineConditions')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['defineConditions'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>

            <h3 className="text-xl font-bold text-orange-400 mb-4">2. Build Merkle Tree</h3>
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`// Hash each condition's ErgoTree bytes
val hashAlice = Blake2b256.hash(aliceBytes)
val hashBob = Blake2b256.hash(bobBytes)
val hashTimelock = Blake2b256.hash(timelockBytes)

// Use a Merkle Tree library (conceptual - replace with actual library usage)
// Example: val tree = MerkleTree.build(Seq(hashAlice, hashBob, hashTimelock))
// val merkleRoot: Array[Byte] = tree.rootHash 
val merkleRoot: Array[Byte] = ??? // Calculate the root hash`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`// Hash each condition's ErgoTree bytes
val hashAlice = Blake2b256.hash(aliceBytes)
val hashBob = Blake2b256.hash(bobBytes)
val hashTimelock = Blake2b256.hash(timelockBytes)

// Use a Merkle Tree library (conceptual - replace with actual library usage)
// Example: val tree = MerkleTree.build(Seq(hashAlice, hashBob, hashTimelock))
// val merkleRoot: Array[Byte] = tree.rootHash 
val merkleRoot: Array[Byte] = ??? // Calculate the root hash`, 'buildTree')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['buildTree'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>

            <h3 className="text-xl font-bold text-orange-400 mb-4">3. Create MAST Box</h3>
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`// Embed the Merkle Root, e.g., in R4
val mastContract = ctx.compileContract(ConstantsBuilder.empty(), """
  {
    val expectedRoot = SELF.R4[Coll[Byte]].get 
    // ... rest of MAST verification script from above ... 
    verifyMerkleProof(expectedRoot, blake2b256(getVar[Coll[Byte]](0).get), getVar[Coll[Coll[Byte]]](1).get, getVar[Coll[Byte]](2).get) &&
    executeFromVar[SigmaProp](0)
  }
""")

val boxValue = 1000000L // 0.001 ERG
val outBox = txBuilder.outBoxBuilder()
  .value(boxValue)
  .contract(mastContract)
  .registers(ErgoValue.of(merkleRoot)) // Store root in R4
  .build()`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`// Embed the Merkle Root, e.g., in R4
val mastContract = ctx.compileContract(ConstantsBuilder.empty(), """
  {
    val expectedRoot = SELF.R4[Coll[Byte]].get 
    // ... rest of MAST verification script from above ... 
    verifyMerkleProof(expectedRoot, blake2b256(getVar[Coll[Byte]](0).get), getVar[Coll[Coll[Byte]]](1).get, getVar[Coll[Byte]](2).get) &&
    executeFromVar[SigmaProp](0)
  }
""")

val boxValue = 1000000L // 0.001 ERG
val outBox = txBuilder.outBoxBuilder()
  .value(boxValue)
  .contract(mastContract)
  .registers(ErgoValue.of(merkleRoot)) // Store root in R4
  .build()`, 'createBox')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['createBox'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>

            <h3 className="text-xl font-bold text-orange-400 mb-4">4. Spending Transaction (Off-Chain Prep)</h3>
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`// When spending using Alice's condition:
val chosenConditionBytes = aliceBytes
// val proof = tree.getProofForLeaf(hashAlice) // Generate Merkle proof (hashes and positions)
val proofHashes: Seq[Array[Byte]] = ??? 
val proofPositions: Array[Byte] = ??? // 0 for right sibling, 1 for left

// Prepare context variables
val contextVars = Seq(
    new ContextVar(0.toByte, ErgoValue.of(chosenConditionBytes)),
    new ContextVar(1.toByte, ErgoValue.of(proofHashes.map(ErgoValue.of).toArray, ErgoType.collType(ErgoType.collType(ErgoType.byteType())))),
    new ContextVar(2.toByte, ErgoValue.of(proofPositions))
)

// Build the transaction using the MAST box as input and providing contextVars
val unsignedTx = txBuilder
    .boxesToSpend(Seq(mastInputBox))
    .outputs(...)
    .fee(...)
    .withContextVars(contextVars:_*) // Pass context variables
    .sendChangeTo(...)
    .build()

// Sign the transaction (requires Alice's key for the executed script)
val signedTx = prover.sign(unsignedTx)`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`// When spending using Alice's condition:
val chosenConditionBytes = aliceBytes
// val proof = tree.getProofForLeaf(hashAlice) // Generate Merkle proof (hashes and positions)
val proofHashes: Seq[Array[Byte]] = ??? 
val proofPositions: Array[Byte] = ??? // 0 for right sibling, 1 for left

// Prepare context variables
val contextVars = Seq(
    new ContextVar(0.toByte, ErgoValue.of(chosenConditionBytes)),
    new ContextVar(1.toByte, ErgoValue.of(proofHashes.map(ErgoValue.of).toArray, ErgoType.collType(ErgoType.collType(ErgoType.byteType())))),
    new ContextVar(2.toByte, ErgoValue.of(proofPositions))
)

// Build the transaction using the MAST box as input and providing contextVars
val unsignedTx = txBuilder
    .boxesToSpend(Seq(mastInputBox))
    .outputs(...)
    .fee(...)
    .withContextVars(contextVars:_*) // Pass context variables
    .sendChangeTo(...)
    .build()

// Sign the transaction (requires Alice's key for the executed script)
val signedTx = prover.sign(unsignedTx)`, 'spendingTx')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['spendingTx'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Security Considerations</h2>
          <div className="text-gray-300 space-y-4">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Merkle Proof Verification:</strong> The on-chain script <strong>must</strong> correctly and completely verify the provided Merkle proof against the expected root hash. The <code className="bg-neutral-700 px-2 py-0.5 rounded">verifyMerkleProof</code> example above is simplified; a robust implementation is crucial. Without proper verification, an attacker could provide arbitrary script bytes and bypass the intended logic.</li>
              <li><strong>Script Execution:</strong> Ensure <code className="bg-neutral-700 px-2 py-0.5 rounded">executeFromVar</code> is only called <em>after</em> the Merkle proof is successfully verified.</li>
              <li><strong>Context Variable Indices:</strong> Use distinct and well-defined indices for context variables (<code className="bg-neutral-700 px-2 py-0.5 rounded">getVar</code>, <code className="bg-neutral-700 px-2 py-0.5 rounded">executeFromVar</code>) to avoid collisions or unintended data access.</li>
              <li><strong>Gas Costs:</strong> Verifying Merkle proofs on-chain consumes computational resources and increases transaction fees. Optimize proof verification logic or consider patterns where verification is minimized.</li>
              <li><strong>Off-Chain Security:</strong> The process of generating the Merkle tree, calculating the root, and generating proofs for spending must be secure and correct off-chain.</li>
            </ol>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Merkleized Finite State Machines (MFSMs)</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              The MAST concept can be combined with <a href="fsm-example.md" className="text-cyan-400 hover:underline">Finite State Machines (FSMs)</a> for complex multi-stage contracts:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>State Transitions as Branches:</strong> Each possible state transition logic in an FSM can be represented as a separate script branch in a Merkle tree.</li>
              <li><strong>Implementation Pattern:</strong> The main contract box stores the current FSM state identifier (e.g., in R4) and the Merkle root of all possible state <em>transition scripts</em>. To transition, the spender provides the specific transition script bytes and its Merkle proof via context variables. The main script verifies the proof and then uses <code className="bg-neutral-700 px-2 py-0.5 rounded">executeFromVar</code> to run the transition script, which validates the state change (e.g., checks <code className="bg-neutral-700 px-2 py-0.5 rounded">INPUTS(0).R4</code> vs <code className="bg-neutral-700 px-2 py-0.5 rounded">OUTPUTS(0).R4</code>).</li>
              <li><strong>Benefits:</strong> Allows complex FSMs without revealing all possible states and transitions on-chain, enhancing privacy and potentially reducing on-chain script size.</li>
            </ol>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Resources & Examples</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Specifications in <code className="bg-neutral-700 px-2 py-0.5 rounded">sigmastate-interpreter</code>:</strong>
                <ul className="list-disc list-inside space-y-2 ml-8 mt-2">
                  <li><a href="https://github.com/ergoplatform/sigmastate-interpreter/blob/develop/sigmastate/src/test/scala/sigmastate/utxo/examples/MASTExampleSpecification.scala" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">MASTExampleSpecification.scala</a>: Provides Scala code demonstrating MAST concepts in a testing context.</li>
                </ul>
              </li>
              <li><strong>Related Primitives:</strong>
                <ul className="list-disc list-inside space-y-2 ml-8 mt-2">
                  <li><a href="lang-spec.md#PredefinedFunctions" className="text-cyan-400 hover:underline">Context Extension (getVar, executeFromVar)</a></li>
                  <li><a href="lang-spec.md#box-type" className="text-cyan-400 hover:underline">Register Execution (executeFromSelfReg)</a></li>
                </ul>
              </li>
              <li><strong>Conceptual Docs:</strong>
                <ul className="list-disc list-inside space-y-2 ml-8 mt-2">
                  <li><a href="../../data-model/structures/merkle/merkle-tree.md" className="text-cyan-400 hover:underline">Merkle Trees</a></li>
                </ul>
              </li>
            </ul>
            <p>
              Implementing MAST securely requires careful design of both the on-chain verification script and the off-chain preparation steps (tree generation, proof creation).
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 