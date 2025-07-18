"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy as CopyIcon, Check as CheckIcon, ChevronRight, BookOpen, GitBranch, Info, Zap, Database, Lock, Target } from "lucide-react";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function ICOPage() {
  const fundingCode = `val selfIndexIsZero = INPUTS(0).id == SELF.id

val proof = getVar[Coll[Byte]](1).get

val inputsCount = INPUTS.size

val toAdd: Coll[(Coll[Byte], Coll[Byte])] = INPUTS.slice(1, inputsCount).map({ (b: Box) =>
    val pk = b.R4[Coll[Byte]].get
    val value = longToByteArray(b.value)
    (pk, value)
})

val modifiedTree = SELF.R5[AvlTree].get.insert(toAdd, proof).get

val expectedTree = OUTPUTS(0).R5[AvlTree].get

val properTreeModification = modifiedTree == expectedTree

val outputsCount = OUTPUTS.size == 2

val selfOutputCorrect = if(HEIGHT < 2000) {
    OUTPUTS(0).propositionBytes == SELF.propositionBytes
} else {
    blake2b256(OUTPUTS(0).propositionBytes) == nextStageScriptHash
}

val feeOutputCorrect = (OUTPUTS(1).value <= 1) && (OUTPUTS(1).propositionBytes == feeBytes)

val outputsCorrect = outputsCount && feeOutputCorrect && selfOutputCorrect

selfIndexIsZero && outputsCorrect && properTreeModification`;

  const issuanceCode = `val openTree = SELF.R5[AvlTree].get

val closedTree = OUTPUTS(0).R5[AvlTree].get

digestPreserved = openTree.digest == closedTree.digest
keyLengthPreserved = openTree.keyLength == closedTree.keyLength
valueLengthPreserved = openTree.valueLengthOpt == closedTree.valueLengthOpt
treeIsClosed = closedTree.enabledOperations == 4

tokenId: Coll[Byte] = INPUTS(0).id
tokensIssued = OUTPUTS(0).tokens(0)._2

outputsCountCorrect = OUTPUTS.size == 3
secondOutputNoTokens = OUTPUTS(0).tokens.size == 1 && OUTPUTS(1).tokens.size == 0 && OUTPUTS(2).tokens.size == 0
correctTokensIssued = SELF.value == tokensIssued
correctTokenId = OUTPUTS(0).R4[Coll[Byte]].get == tokenId && OUTPUTS(0).tokens(0)._1 == tokenId
valuePreserved = outputsCountCorrect && secondOutputNoTokens && correctTokensIssued && correctTokenId
stateChanged = blake2b256(OUTPUTS(0).propositionBytes) == nextStageScriptHash
treeIsCorrect = digestPreserved && valueLengthPreserved && keyLengthPreserved && treeIsClosed

projectPubKey && treeIsCorrect && valuePreserved && stateChanged`;

  const withdrawCode = `val removeProof = getVar[Coll[Byte]](2).get
val lookupProof = getVar[Coll[Byte]](3).get
val withdrawIndexes = getVar[Coll[Int]](4).get

val out0 = OUTPUTS(0)

tokenId: Coll[Byte] = SELF.R4[Coll[Byte]].get

val withdrawals = withdrawIndexes.map({(idx: Int) =>
    val b = OUTPUTS(idx)
    if(b.tokens(0)._1 == tokenId) {
        (blake2b256(b.propositionBytes), b.tokens(0)._2)
    } else {
        (blake2b256(b.propositionBytes), 0L)
    }
})

val withdrawValues = withdrawals.map({(t: (Coll[Byte], Long)) => t._2})
val withdrawTotal = withdrawValues.fold(0L, { (l1: Long, l2: Long) => l1 + l2 })
val toRemove = withdrawals.map({(t: (Coll[Byte], Long)) => t._1})

val initialTree = SELF.R5[AvlTree].get
val removedValues = initialTree.getMany(toRemove, lookupProof).map({(o: Option[Coll[Byte]]) => byteArrayToLong(o.get)})
val valuesCorrect = removedValues == withdrawValues
val modifiedTree = initialTree.remove(toRemove, removeProof).get
val expectedTree = out0.R5[AvlTree].get

val selfTokensCorrect = SELF.tokens(0)._1 == tokenId
val selfOutTokensAmount = SELF.tokens(0)._2
val soutTokensCorrect = out0.tokens(0)._1 == tokenId
val soutTokensAmount = out0.tokens(0)._2
val tokensPreserved = selfTokensCorrect && soutTokensCorrect && (soutTokensAmount + withdrawTotal == selfOutTokensAmount)
val properTreeModification = modifiedTree == expectedTree
val selfOutputCorrect = out0.propositionBytes == SELF.propositionBytes

properTreeModification && valuesCorrect && selfOutputCorrect && tokensPreserved`;

  return (
    <div className="w-full">
      {/* HERO Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Initial Coin Offerings (ICO)
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A fully-featured ICO contract on Ergo, demonstrating complex logic and multi-stage flows with minimal code. Explore how UTXO-based blockchains enable advanced DeFi primitives.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link
            href="/Docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
          <a
            href="https://link.springer.com/chapter/10.1007/978-3-030-00305-0_4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <BookOpen className="w-5 h-5 mr-2" /> Self-reproducing Coins Paper
          </a>
        </div>
        <p className="text-lg text-gray-300">
          This article describes a fully-featured ICO (Initial Coin Offering) implemented in ErgoScript. The example covers several important and novel features of Ergo and shows how it can support complex contracts with a tiny amount of code.
        </p>
      </div>

      {/* Preliminaries Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Preliminaries
        </h2>
        <p className="text-gray-300 mb-2">
          Ergo uses a UTXO-based model, similar to Bitcoin, but with powerful extensions. This enables complex contracts like ICOs, even without persistent global state. Data inputs and authenticated dictionaries allow for scalable, verifiable state transitions.
        </p>
        <p className="text-gray-300 mb-2">
          In this example, we define a multi-stage ICO contract with three phases: funding, token issuance, and withdrawal. Each stage is linked by contract logic and authenticated data structures.
        </p>
      </div>

      {/* ICO Stages Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
            <Database className="w-4 h-4" /> Funding Stage
          </h4>
          <p className="text-gray-300 text-sm mb-3">
            Investors deposit ERG, and their contributions are recorded in an authenticated dictionary. The contract ensures only valid insertions and pays a fee to miners.
          </p>
        </div>
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
            <Lock className="w-4 h-4" /> Issuance Stage
          </h4>
          <p className="text-gray-300 text-sm mb-3">
            Once the funding period ends, tokens are issued based on the total ERG collected. The contract transitions to a read-only state for the investor dictionary.
          </p>
        </div>
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
            <Target className="w-4 h-4" /> Withdrawal Stage
          </h4>
          <p className="text-gray-300 text-sm mb-3">
            Investors withdraw their ICO tokens according to their contributions. The contract verifies withdrawals and updates the dictionary accordingly.
          </p>
        </div>
      </div>

      {/* Funding Stage Code */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold mb-2 text-orange-400">Funding Stage Contract</h3>
        <UniversalCopyCodeBlock code={fundingCode} />
      </div>

      {/* Issuance Stage Code */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold mb-2 text-cyan-400">Issuance Stage Contract</h3>
        <UniversalCopyCodeBlock code={issuanceCode} />
      </div>

      {/* Withdrawal Stage Code */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold mb-2 text-green-400">Withdrawal Stage Contract</h3>
        <UniversalCopyCodeBlock code={withdrawCode} />
      </div>

      {/* Enhancements Section */}
      <div className="bg-pink-400/10 border border-pink-400/30 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold mb-2 text-pink-400">Possible Enhancements</h3>
        <p className="text-gray-300 mb-2">
          The example contract can be extended with additional features, such as project or arbiter signatures, self-destruction logic, or more advanced withdrawal conditions. For more, see the <a href="https://link.springer.com/chapter/10.1007/978-3-030-00305-0_4" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Self-reproducing Coins as Universal Turing Machine</a> paper.
        </p>
      </div>
    </div>
  );
} 