"use client";

/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Coins, Copy, Check } from "lucide-react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function ICOPage() {
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
        <Coins className="w-10 h-10 text-orange-400" />
        ICO
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
          <div className="text-gray-300 space-y-4">
            <p>
              Another popular use case on Ethereum is an Initial Coin Offering (ICO) contract. An ICO mirrors an Initial Public Offering (IPO), providing a mechanism for a project to collect funding (often in stablecoins or the platform's native token) and then issue project "shares" (in the form of new tokens) to investors.
            </p>
            <p>
              Generally, an ICO comprises 3 stages:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong><a href="#funding" className="text-cyan-400 hover:underline">Funding</a></strong>: During this period, investors are allowed to fund the project.</li>
              <li><strong><a href="#issuance" className="text-cyan-400 hover:underline">Issuance</a></strong>: A new asset token is created and issued to investors.</li>
              <li><strong><a href="#withdrawal" className="text-cyan-400 hover:underline">Withdrawal</a></strong>: Investors can withdraw their newly issued tokens.</li>
            </ul>
            <p>
              This example ICO contract is quite complex compared to previous examples as it involves multiple stages and parties. The number of investors might run into the thousands. A naive solution, similar to some approaches on account-based models like the <a href="https://theethereum.wiki/w/index.php/ERC20_Token_Standard" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ERC-20 standard</a> on Ethereum, might attempt to store all investor data directly within the contract state.
            </p>
            <p>
              Unlike Ethereum, Ergo contracts cannot store arbitrarily large datasets directly. Instead, Ergo utilizes authenticated data structures like AVL trees. We store only a compact digest (e.g., ~33 bytes for an AvlTree) representing the root hash and state of a potentially vast (key, value) dictionary. To access or modify elements in the dictionary, a spending transaction must provide cryptographic proofs (lookup or modification proofs). This allows a contract to authenticate large datasets using very little on-chain storage.
            </p>
          </div>
        </section>

        <section id="funding" className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Funding</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              The project initiates the ICO by creating a box guarded by the script shown below. This initial box also contains, in its R5 register, the authenticated digest of an empty dictionary intended to store (investor PK hash, invested amount) pairs. Here, an "investor PK hash" refers to the hash of the script (typically a standard P2PK script) that will guard the box containing the investor's withdrawn ICO tokens after the funding period ends.
            </p>
            
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`// check if the index of the current input is 0
val selfIndexIsZero = INPUTS(0).id == SELF.id

// get the AVL tree proof from a register
val proof = getVar[Coll[Byte]](1).get

// collect pk and value of all inputs, except for the first one
val toAdd = INPUTS.slice(1, INPUTS.size).map({(b: Box) =>
    val pk = b.R4[Coll[Byte]].get
    val value = longToByteArray(b.value)
    (pk, value)
})

// insert the collected inputs into the AVL tree, using the proof
val modifiedTree = SELF.R5[AvlTree].get.insert(toAdd, proof).get

// get the expected AVL tree from the first output
val expectedTree = OUTPUTS(0).R5[AvlTree].get

// check if the self output is correct by comparing the script
// if the current height is less than 2000, compare the script to the current box
// otherwise, compare the script to the issuance script
val selfOutputCorrect =
    if (HEIGHT < 2000) OUTPUTS(0).propositionBytes == SELF.propositionBytes
    else OUTPUTS(0).propositionBytes == issuanceScript

// check if there is only one output and if the self output is correct
val outputsCorrect = OUTPUTS.size == 1 && selfOutputCorrect

// check if the index is 0, outputs are correct, and the expected tree matches the modified tree
selfIndexIsZero && outputsCorrect && modifiedTree == expectedTree`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`// check if the index of the current input is 0
val selfIndexIsZero = INPUTS(0).id == SELF.id

// get the AVL tree proof from a register
val proof = getVar[Coll[Byte]](1).get

// collect pk and value of all inputs, except for the first one
val toAdd = INPUTS.slice(1, INPUTS.size).map({(b: Box) =>
    val pk = b.R4[Coll[Byte]].get
    val value = longToByteArray(b.value)
    (pk, value)
})

// insert the collected inputs into the AVL tree, using the proof
val modifiedTree = SELF.R5[AvlTree].get.insert(toAdd, proof).get

// get the expected AVL tree from the first output
val expectedTree = OUTPUTS(0).R5[AvlTree].get

// check if the self output is correct by comparing the script
// if the current height is less than 2000, compare the script to the current box
// otherwise, compare the script to the issuance script
val selfOutputCorrect =
    if (HEIGHT < 2000) OUTPUTS(0).propositionBytes == SELF.propositionBytes
    else OUTPUTS(0).propositionBytes == issuanceScript

// check if there is only one output and if the self output is correct
val outputsCorrect = OUTPUTS.size == 1 && selfOutputCorrect

// check if the index is 0, outputs are correct, and the expected tree matches the modified tree
selfIndexIsZero && outputsCorrect && modifiedTree == expectedTree`, 'fundingScript')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['fundingScript'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
            
            <p>
              The first funding transaction spends this initial box and creates a new box containing the same script but with an updated dictionary digest in R5 reflecting the first investment. Subsequent funding transactions spend the box created by the <em>previous</em> funding transaction. The script ensures that the ICO contract box is always the first input (<code className="bg-neutral-700 px-2 py-0.5 rounded">INPUTS(0)</code>). Additional inputs in the transaction represent contributions from investors. Each investor input must contain the hash of their withdrawal script (their public key hash) in register R4. The ICO script verifies (using the provided AVL tree proof) that the investor PK hashes and their corresponding investment amounts (box values) are correctly inserted into the dictionary. The script also ensures that only one output box is created, carrying forward the updated dictionary digest and the accumulated Ergs (fees are ignored in this simplified example).
            </p>
            <p>
              During this funding stage, which lasts until block height 2,000, withdrawals are not permitted; Ergs can only be added to the ICO box. The first transaction occurring at or after height 2,000 must transition the contract to the next stage by changing the output box's script to <code className="bg-neutral-700 px-2 py-0.5 rounded">issuanceScript</code> (described next), while keeping the dictionary data (digest) the same.
            </p>
          </div>
        </section>

        <section id="issuance" className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Issuance</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              This stage involves a single transaction to transition to the withdrawal stage. The spending transaction performs the following actions, verified by the <code className="bg-neutral-700 px-2 py-0.5 rounded">issuanceScript</code>:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Updates AVL Tree Flags</strong>: It changes the allowed operations on the dictionary from "inserts only" to "removals only" by updating the <code className="bg-neutral-700 px-2 py-0.5 rounded">enabledOperations</code> flag in the <code className="bg-neutral-700 px-2 py-0.5 rounded">AvlTreeData</code>.</li>
              <li><strong>Verifies Token Issuance</strong>: It checks that the correct amount of ICO tokens are issued. In Ergo, a transaction can issue a new token, whose ID is determined by the ID of the first input box. The <code className="bg-neutral-700 px-2 py-0.5 rounded">issuanceScript</code> verifies that a new token (with this ID) is created in the first output box (<code className="bg-neutral-700 px-2 py-0.5 rounded">OUTPUTS(0)</code>) with a total supply equal to the total nanoErgs collected during the funding stage (<code className="bg-neutral-700 px-2 py-0.5 rounded">SELF.value</code>).</li>
              <li><strong>Transitions to Withdrawal Script</strong>: It ensures the output box (<code className="bg-neutral-700 px-2 py-0.5 rounded">OUTPUTS(0)</code>) containing the tokens and the dictionary digest is protected by the <code className="bg-neutral-700 px-2 py-0.5 rounded">withdrawScript</code> for the next stage.</li>
              <li><strong>Checks Outputs</strong>: It verifies that the transaction has exactly two outputs: <code className="bg-neutral-700 px-2 py-0.5 rounded">OUTPUTS(0)</code> (the main contract box for the withdrawal stage) and <code className="bg-neutral-700 px-2 py-0.5 rounded">OUTPUTS(1)</code> (a box sending the collected Ergs to the project's designated address, identified by <code className="bg-neutral-700 px-2 py-0.5 rounded">projectPubKeyHash</code>).</li>
            </ol>
            <p>
              The complete <code className="bg-neutral-700 px-2 py-0.5 rounded">issuanceScript</code> is shown below.
            </p>
            
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`// Get the open and closed trees
val openTree = SELF.R5[AvlTree].get
val closedTree = OUTPUTS(0).R5[AvlTree].get

// Check that the digests, key lengths and values are the same
val correctDigest = openTree.digest == closedTree.digest
val correctKeyLength = openTree.keyLength == closedTree.keyLength
val correctValue = openTree.valueLengthOpt == closedTree.valueLengthOpt

// Check that the closed tree is a remove-only tree
val removeOnlyTree = closedTree.enabledOperations == 4

// Check that the token IDs and amounts are correct
val tokenId: Coll[Byte] = INPUTS(0).id
val tokenIssued = OUTPUTS(0).tokens(0)._2
val correctTokenNumber = OUTPUTS(0).tokens.size == 1 && OUTPUTS(1).tokens.size == 0
val correctTokenIssued = SELF.value == tokenIssued
val correctTokenId = OUTPUTS(0).R4[Coll[Byte]].get == tokenId && OUTPUTS(0).tokens(0)._1 == tokenId

// Check that the values have been preserved, the state has changed and the project public key is correct
val valuePreserved = OUTPUTS.size == 2 && correctTokenNumber && correctTokenIssued && correctTokenId
val stateChanged = OUTPUTS(0).propositionBytes == withdrawScript
val projectPubKey = SELF.R5[Coll[Byte]].get == projectPubKeyHash
val treeIsCorrect = correctDigest && correctValue && correctKeyLength && removeOnlyTree

// Check if the tree is correct, the values have been preserved and the state has changed
val stateIsCorrect = projectPubKey && treeIsCorrect && valuePreserved && stateChanged`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`// Get the open and closed trees
val openTree = SELF.R5[AvlTree].get
val closedTree = OUTPUTS(0).R5[AvlTree].get

// Check that the digests, key lengths and values are the same
val correctDigest = openTree.digest == closedTree.digest
val correctKeyLength = openTree.keyLength == closedTree.keyLength
val correctValue = openTree.valueLengthOpt == closedTree.valueLengthOpt

// Check that the closed tree is a remove-only tree
val removeOnlyTree = closedTree.enabledOperations == 4

// Check that the token IDs and amounts are correct
val tokenId: Coll[Byte] = INPUTS(0).id
val tokenIssued = OUTPUTS(0).tokens(0)._2
val correctTokenNumber = OUTPUTS(0).tokens.size == 1 && OUTPUTS(1).tokens.size == 0
val correctTokenIssued = SELF.value == tokenIssued
val correctTokenId = OUTPUTS(0).R4[Coll[Byte]].get == tokenId && OUTPUTS(0).tokens(0)._1 == tokenId

// Check that the values have been preserved, the state has changed and the project public key is correct
val valuePreserved = OUTPUTS.size == 2 && correctTokenNumber && correctTokenIssued && correctTokenId
val stateChanged = OUTPUTS(0).propositionBytes == withdrawScript
val projectPubKey = SELF.R5[Coll[Byte]].get == projectPubKeyHash
val treeIsCorrect = correctDigest && correctValue && correctKeyLength && removeOnlyTree

// Check if the tree is correct, the values have been preserved and the state has changed
val stateIsCorrect = projectPubKey && treeIsCorrect && valuePreserved && stateChanged`, 'issuanceScript')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['issuanceScript'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </section>

        <section id="withdrawal" className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Withdrawal</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Investors can now withdraw their allocated ICO tokens. The withdrawal process typically happens in batches. A withdrawal transaction spends the current ICO box (<code className="bg-neutral-700 px-2 py-0.5 rounded">SELF</code>) and creates <InlineMath math="N + 1" /> outputs:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><code className="bg-neutral-700 px-2 py-0.5 rounded">OUTPUTS(0)</code>: The new ICO box, containing the remaining tokens and the updated dictionary digest (with withdrawn entries removed). It is protected by the same <code className="bg-neutral-700 px-2 py-0.5 rounded">withdrawScript</code>.</li>
              <li><code className="bg-neutral-700 px-2 py-0.5 rounded">OUTPUTS(1)</code> to <code className="bg-neutral-700 px-2 py-0.5 rounded">OUTPUTS(N)</code>: Boxes sent to the withdrawing investors. Each box is protected by the investor's script (whose hash was stored as the key in the dictionary) and contains the corresponding amount of ICO tokens.</li>
            </ul>
            <p>
              The <code className="bg-neutral-700 px-2 py-0.5 rounded">withdrawScript</code> requires two AVL tree proofs provided in context variables:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><code className="bg-neutral-700 px-2 py-0.5 rounded">lookupProof</code>: Proves the existence and amounts associated with the investor keys being withdrawn.</li>
              <li><code className="bg-neutral-700 px-2 py-0.5 rounded">removeProof</code>: Proves that these investor entries have been correctly removed from the dictionary, resulting in the updated dictionary digest found in <code className="bg-neutral-700 px-2 py-0.5 rounded">OUTPUTS(0)</code>.</li>
            </ol>
            <p>
              The complete <code className="bg-neutral-700 px-2 py-0.5 rounded">withdrawScript</code> is shown below:
            </p>
            
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`// Get removeProof and lookupProof
val removeProof = getVar[Coll[Byte]](2).get
val lookupProof = getVar[Coll[Byte]](3).get

// Get withdraw indexes and tokenId
val withdrawIndexes = getVar[Coll[Int]](4).get
val tokenId: Coll[Byte] = SELF.R4[Coll[Byte]].get

// Map over withdrawIndexes and find tokenIds
val withdrawals = withdrawIndexes.map({(idx: Int) =>
    val b = OUTPUTS(idx)
    if (b.tokens(0)._1 == tokenId)
        (blake2b256(b.propositionBytes), b.tokens(0)._2)
    else
        (blake2b256(b.propositionBytes), 0L)
    })

// Get withdrawValues and calculate the total amount withdrawn
val withdrawValues = withdrawals.map({(t: (Coll[Byte], Long)) => t._2})
val total = withdrawValues.fold(0L, {(l1: Long, l2: Long) => l1 + l2 })

// Get list of nodes to remove and removed values
val toRemove = withdrawals.map({(t: (Coll[Byte], Long)) => t._1})
val initialTree = SELF.R5[AvlTree].get
val removedValues = initialTree.getMany(toRemove, lookupProof).map(
    {(o: Option[Coll[Byte]]) => byteArrayToLong(o.get)}
    )

// Check if removedValues equals withdrawValues
val valuesCorrect = removedValues == withdrawValues

// Remove nodes and check if the outTree is correct
val modifiedTree = initialTree.remove(toRemove, removeProof).get
val outTreeCorrect = OUTPUTS(0).R5[AvlTree].get == modifiedTree

// Check if the tokenIds and amounts are correct
val selfTokenCorrect = SELF.tokens(0)._1 == tokenId
val outTokenCorrect = OUTPUTS(0).tokens(0)._1 == tokenId
val outTokenCorrectAmt = OUTPUTS(0).tokens(0)._2 + total == SELF.tokens(0)._2
val tokenPreserved = selfTokenCorrect && outTokenCorrect && outTokenCorrectAmt

// Check if the SELF and OUTPUTS are correct
val selfOutputCorrect = OUTPUTS(0).propositionBytes == SELF.propositionBytes
val outTreeCorrect = OUTPUTS(0).R5[AvlTree].get == modifiedTree

// Check if everything is correct
valuesCorrect && outTreeCorrect && selfOutputCorrect && tokenPreserved`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`// Get removeProof and lookupProof
val removeProof = getVar[Coll[Byte]](2).get
val lookupProof = getVar[Coll[Byte]](3).get

// Get withdraw indexes and tokenId
val withdrawIndexes = getVar[Coll[Int]](4).get
val tokenId: Coll[Byte] = SELF.R4[Coll[Byte]].get

// Map over withdrawIndexes and find tokenIds
val withdrawals = withdrawIndexes.map({(idx: Int) =>
    val b = OUTPUTS(idx)
    if (b.tokens(0)._1 == tokenId)
        (blake2b256(b.propositionBytes), b.tokens(0)._2)
    else
        (blake2b256(b.propositionBytes), 0L)
    })

// Get withdrawValues and calculate the total amount withdrawn
val withdrawValues = withdrawals.map({(t: (Coll[Byte], Long)) => t._2})
val total = withdrawValues.fold(0L, {(l1: Long, l2: Long) => l1 + l2 })

// Get list of nodes to remove and removed values
val toRemove = withdrawals.map({(t: (Coll[Byte], Long)) => t._1})
val initialTree = SELF.R5[AvlTree].get
val removedValues = initialTree.getMany(toRemove, lookupProof).map(
    {(o: Option[Coll[Byte]]) => byteArrayToLong(o.get)}
    )

// Check if removedValues equals withdrawValues
val valuesCorrect = removedValues == withdrawValues

// Remove nodes and check if the outTree is correct
val modifiedTree = initialTree.remove(toRemove, removeProof).get
val outTreeCorrect = OUTPUTS(0).R5[AvlTree].get == modifiedTree

// Check if the tokenIds and amounts are correct
val selfTokenCorrect = SELF.tokens(0)._1 == tokenId
val outTokenCorrect = OUTPUTS(0).tokens(0)._1 == tokenId
val outTokenCorrectAmt = OUTPUTS(0).tokens(0)._2 + total == SELF.tokens(0)._2
val tokenPreserved = selfTokenCorrect && outTokenCorrect && outTokenCorrectAmt

// Check if the SELF and OUTPUTS are correct
val selfOutputCorrect = OUTPUTS(0).propositionBytes == SELF.propositionBytes
val outTreeCorrect = OUTPUTS(0).R5[AvlTree].get == modifiedTree

// Check if everything is correct
valuesCorrect && outTreeCorrect && selfOutputCorrect && tokenPreserved`, 'withdrawScript')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['withdrawScript'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
            
            <p>
              Note that the ICO example presented here includes several simplifications. For instance, transaction fees are not explicitly handled in the scripts (though they would be required in a real transaction).
            </p>
            <p>
              Additionally, the contract does not include logic for self-destruction or final cleanup after the withdrawal stage is complete.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Comet Refundable ICO</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Comet has a refundable ICO live at <a href="https://thecomettoken.com/ICO" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">thecomettoken.com/ICO</a>
            </p>
            <p>
              The contract used is <a href="https://github.com/CometCommunity/CometCommunity/blob/main/RefundableIcoContract" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">provided</a>:
            </p>
            
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`{
  // Receipt Tokens held in Contract
  val receiptTokens = SELF.tokens(0)._2
  // Comet Held in Contract
  val cometTokens = SELF.tokens(1)._2
  // Receipt Token Id
  val receiptId = fromBase58("5HWxQHyjjVFNEWtswcc71922Bq84LsmtMbgEG5eNxAKZ")
  // Comet Token Id
  val cometId = fromBase58("s9d3vUc6AhNAPZhxnGXCitQFqdAXN6X7gXT3h9GupWE")
  // Swap Price
  val amountToSwap = 15 * (OUTPUTS(0).value - SELF.value) / 100000
  // Refund Price
  val amountToRefund = 15 * (SELF.value - OUTPUTS(0).value) / 100000

  // Conditions that are always true
  val alwaysTrue = allOf(Coll(
    OUTPUTS(0).propositionBytes == SELF.propositionBytes, // OUTPUT(0) is contract box
    OUTPUTS(0).R4[Coll[Byte]].get == SELF.id, // Protect against spending two contract boxes of same value in 1 tx.
    OUTPUTS(0).tokens(0)._1 == receiptId // Contract always holds receipt tokens
  ))

  // Conditions that depend on spending action
  val conditionals = if (OUTPUTS(0).value > SELF.value) { // Purchase comet condition
    allOf(Coll(
      OUTPUTS(0).tokens(0)._2 >= receiptTokens - amountToSwap, // Unlock value amount of receipt for spending
      OUTPUTS(0).tokens(1)._1 == cometId,
      OUTPUTS(0).tokens(1)._2 >= cometTokens - amountToSwap // Unlock value amount of comet for spending
    ))
  } else { // Refund comet condition
    allOf(Coll(
      OUTPUTS(0).tokens(0)._2 >= receiptTokens + amountToRefund, // Unlock receipt amount of Erg for spending
      OUTPUTS(0).tokens(1)._1 == cometId,
      OUTPUTS(0).tokens(1)._2 >= cometTokens + amountToRefund // Unlock comet amount of Erg for spending
    ))
  }

  val drainAddressConditions = allOf(Coll(
    OUTPUTS(0).value == SELF.value,
    OUTPUTS(0).tokens(0)._2 == receiptTokens, // Cannot withdraw receipt tokens
    OUTPUTS(0).tokens(1)._1 == cometId,
    OUTPUTS(0).tokens(1)._2 >= 1 // Free up all comet
  ))

  val addFunds = alwaysTrue && allOf(Coll(
    OUTPUTS(0).value >= SELF.value,
    OUTPUTS(0).tokens(0)._2 == receiptTokens, // Cannot withdraw receipt tokens
    OUTPUTS(0).tokens(1)._1 == cometId,
    OUTPUTS(0).tokens(1)._2 >= SELF.tokens(1)._2,
    OUTPUTS.size == 2 // Requires setup such that no change Box is made
  ))

  // Define the spending conditions for draining the address
  val drainAddress = sigmaProp(alwaysTrue && drainAddressConditions && PK("9h6Ao31CVSsYisf4pWTM43jv6k3BaXV3jovGfaRj9PrqfYms6Rf"))
  // Define the spending conditions before the deadline
  val beforeDeadline = sigmaProp(alwaysTrue && conditionals)
  // Define the spending conditions after the deadline
  val afterDeadline = sigmaProp(PK("9h6Ao31CVSsYisf4pWTM43jv6k3BaXV3jovGfaRj9PrqfYms6Rf") && HEIGHT > 1550468)

  // Combine all spending conditions using logical OR
  sigmaProp(beforeDeadline || afterDeadline || drainAddress || addFunds)
}`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`{
  // Receipt Tokens held in Contract
  val receiptTokens = SELF.tokens(0)._2
  // Comet Held in Contract
  val cometTokens = SELF.tokens(1)._2
  // Receipt Token Id
  val receiptId = fromBase58("5HWxQHyjjVFNEWtswcc71922Bq84LsmtMbgEG5eNxAKZ")
  // Comet Token Id
  val cometId = fromBase58("s9d3vUc6AhNAPZhxnGXCitQFqdAXN6X7gXT3h9GupWE")
  // Swap Price
  val amountToSwap = 15 * (OUTPUTS(0).value - SELF.value) / 100000
  // Refund Price
  val amountToRefund = 15 * (SELF.value - OUTPUTS(0).value) / 100000

  // Conditions that are always true
  val alwaysTrue = allOf(Coll(
    OUTPUTS(0).propositionBytes == SELF.propositionBytes, // OUTPUT(0) is contract box
    OUTPUTS(0).R4[Coll[Byte]].get == SELF.id, // Protect against spending two contract boxes of same value in 1 tx.
    OUTPUTS(0).tokens(0)._1 == receiptId // Contract always holds receipt tokens
  ))

  // Conditions that depend on spending action
  val conditionals = if (OUTPUTS(0).value > SELF.value) { // Purchase comet condition
    allOf(Coll(
      OUTPUTS(0).tokens(0)._2 >= receiptTokens - amountToSwap, // Unlock value amount of receipt for spending
      OUTPUTS(0).tokens(1)._1 == cometId,
      OUTPUTS(0).tokens(1)._2 >= cometTokens - amountToSwap // Unlock value amount of comet for spending
    ))
  } else { // Refund comet condition
    allOf(Coll(
      OUTPUTS(0).tokens(0)._2 >= receiptTokens + amountToRefund, // Unlock receipt amount of Erg for spending
      OUTPUTS(0).tokens(1)._1 == cometId,
      OUTPUTS(0).tokens(1)._2 >= cometTokens + amountToRefund // Unlock comet amount of Erg for spending
    ))
  }

  val drainAddressConditions = allOf(Coll(
    OUTPUTS(0).value == SELF.value,
    OUTPUTS(0).tokens(0)._2 == receiptTokens, // Cannot withdraw receipt tokens
    OUTPUTS(0).tokens(1)._1 == cometId,
    OUTPUTS(0).tokens(1)._2 >= 1 // Free up all comet
  ))

  val addFunds = alwaysTrue && allOf(Coll(
    OUTPUTS(0).value >= SELF.value,
    OUTPUTS(0).tokens(0)._2 == receiptTokens, // Cannot withdraw receipt tokens
    OUTPUTS(0).tokens(1)._1 == cometId,
    OUTPUTS(0).tokens(1)._2 >= SELF.tokens(1)._2,
    OUTPUTS.size == 2 // Requires setup such that no change Box is made
  ))

  // Define the spending conditions for draining the address
  val drainAddress = sigmaProp(alwaysTrue && drainAddressConditions && PK("9h6Ao31CVSsYisf4pWTM43jv6k3BaXV3jovGfaRj9PrqfYms6Rf"))
  // Define the spending conditions before the deadline
  val beforeDeadline = sigmaProp(alwaysTrue && conditionals)
  // Define the spending conditions after the deadline
  val afterDeadline = sigmaProp(PK("9h6Ao31CVSsYisf4pWTM43jv6k3BaXV3jovGfaRj9PrqfYms6Rf") && HEIGHT > 1550468)

  // Combine all spending conditions using logical OR
  sigmaProp(beforeDeadline || afterDeadline || drainAddress || addFunds)
}`, 'cometScript')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['cometScript'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 