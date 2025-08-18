"use client";
import React, { useState } from 'react';
import {
  Code,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Users,
  GitBranch,
  Shield,
  FileText,
  Copy as CopyIcon,
  Check as CheckIcon
} from 'lucide-react';
import Link from 'next/link';
import { CodeBlock } from "@/components/ui";

const ADMIN_CODE = `val selfOut = OUTPUTS(0)

// Administrative script
val adminScript = selfOut.R5[SigmaProp].get

// Confirming that the script replicates itself and the administrative script is satisfied
val scriptIsCorrect = (selfOut.propositionBytes == SELF.propositionBytes) && adminScript

// A spending transaction creates boxes for the directory, user, and fee
val isOutputSizeCorrect = OUTPUTS.size == 3

// Verifies the replication of the administrative label token 
val isTokenOutputCorrect = (selfOut.tokens.size == 1) && (selfOut.tokens(0)._1 == letsToken)

// Validates the issuance of a new token and its amount
// OUTPUTS(0) tokens are already checked via isTokenOutputCorrect
val issuedTokenId = INPUTS(0).id
val userOut = OUTPUTS(1)
val areTokenAmountsCorrect =
  (userOut.tokens.size == 1 &&
    userOut.tokens(0)._1 == issuedTokenId &&
    userOut.tokens(0)._2 == 1 &&
    OUTPUTS(2).tokens.size == 0 &&
    isTokenOutputCorrect)

// Verifies that the new user is created with a zero balance
val isUserBalanceZero  = userOut.R4[Long].get == 0

val isUserScriptProper = blake2b256(userOut.propositionBytes) == userContractHash

// Validates the addition of the new token identifier to the directory
val selfTree = SELF.R4[AvlTree].get
val toAdd: Coll[(Coll[Byte], Coll[Byte])] = Coll((issuedTokenId, Coll[Byte]()))
val proof = getVar[Coll[Byte]](1).get
val updatedTree = selfTree.insert(toAdd, proof).get
val expectedTree = selfOut.R4[AvlTree].get
val isTreeCorrect = updatedTree == expectedTree

areTokenAmountsCorrect && scriptIsCorrect && isTreeCorrect && isUserBalanceZero && isUserScriptProper`;

const TRADE_CODE = `// Minimum balance allowed for a LETS trader
val minBalance = -20000

val lookupProof = getVar[Coll[Byte]](1).get

// Read-only box containing the directory of LETS members
val treeHolderBox = CONTEXT.dataInputs(0)
val isLetsTokenProper = treeHolderBox.tokens(0)._1 == letsToken
val membersTree = treeHolderBox.R4[AvlTree].get

// A spending transaction takes two LETS members' boxes willing to make a trade, 
// and returns boxes with updated balances.
val participant0 = INPUTS(0)
val participant1 = INPUTS(1)
val participantOut0 = OUTPUTS(0)
val participantOut1 = OUTPUTS(1)

// Check that members do indeed belong to the LETS
val token0 = participant0.tokens(0)._1
val token1 = participant1.tokens(0)._1
val memberTokens = Coll(token0, token1)
val doMembersExist = membersTree.getMany(memberTokens, lookupProof).forall({ (o: Option[Coll[Byte]]) => o.isDefined })

// Verify that changes in LETS member balances during the transaction are correct
val initialBalance0 = participant0.R4[Long].get
val initialBalance1 = participant1.R4[Long].get
val finalBalance0  = participantOut0.R4[Long].get
val finalBalance1  = participantOut1.R4[Long].get
val balanceDifference0 = finalBalance0 - initialBalance0
val balanceDifference1 = finalBalance1 - initialBalance1
val areBalanceDifferencesCorrect = balanceDifference0 == -balanceDifference1
val areBalancesCorrect = (finalBalance0 > minBalance) && (finalBalance1 > minBalance) && areBalanceDifferencesCorrect

// Check that member boxes retain their scripts.
val isScript0Preserved = participantOut0.propositionBytes == participant0.propositionBytes
val isScript1Preserved = participantOut1.propositionBytes == participant1.propositionBytes
val areScriptsPreserved = isScript0Preserved && isScript1Preserved

// Protection specific to member boxes
val selfPubKey = SELF.R5[SigmaProp].get

selfPubKey && isLetsTokenProper && doMembersExist && areBalanceDifferencesCorrect && areScriptsPreserved`;

export default function BasicImplementationLETSPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Basic Implementation of a Local Exchange Trading System (LETS)
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A minimal, extensible blueprint for building a LETS on Ergo using administrative and trade contracts, singleton tokens, and authenticated data structures.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/ecosystem/financial/monetary-systems/lets"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to LETS Overview
          </Link>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> Overview
        </h2>
        <p className="text-gray-300">
          The basic blueprint of our system encompasses two contracts: an <b>administrative contract</b> and a <b>trade contract</b>. Before delving into the details, we recommend acquainting yourself with the foundational aspects of Ergo by reviewing the ICO article as well as ErgoScript tutorials. Despite the aforementioned recommendations, we will elucidate a few novel terms in the upcoming sections.
        </p>
      </div>

      {/* Singleton Tokens and Boxes */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-cyan-400" /> Singleton Tokens and Boxes
        </h2>
        <p className="text-gray-300">
          In Ergo, when a token is minted with a value of one, it is termed a <b>singleton token</b>. Similarly, a box containing a singleton token is known as a <b>singleton box</b>.
        </p>
      </div>

      {/* Administrative Contract Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-orange-400" /> Administrative Contract
        </h2>
        <h3 className="text-lg font-semibold text-orange-300 mb-2">Purpose</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
          <li>Oversees a singleton box that encompasses the members of the LETS system.</li>
          <li>Facilitates the addition of new members (one per transaction).</li>
          <li>Stores only a succinct digest of an authenticated data structure based on the members' directory.</li>
          <li>Each member is linked with a singleton token minted during their addition.</li>
          <li>Records the initial balance in the R4 register (zero).</li>
          <li>Validates the correctness of the directory transformation on member addition.</li>
        </ul>
        <h3 className="text-lg font-semibold text-orange-300 mb-2">Committee Management</h3>
        <p className="text-gray-300 mb-4">
          A committee generally manages the administrative contract box, and the composition of this committee may change over time. The committee's logic resides in the R5 register, allowing for flexible signature requirements as the committee evolves.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4 overflow-x-auto relative">
          <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2"><Code className="w-5 h-5" /> Administrative Contract (ErgoScript)</h4>
        </div>
      </div>
    </>
  );
}
