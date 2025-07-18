"use client";
import React, { useState } from 'react';
import {
  Code,
  ChevronRight,
  BookOpen,
  Users,
  GitBranch,
  Shield,
  FileText,
  Copy as CopyIcon,
  Check as CheckIcon,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

const TOKEN_BOX_CODE = `// a tokenBox stores the membership tokens and has this script
val tokenBox = OUTPUTS(0) // the first output must also be a tokenBox
// first output contains remaining LETS tokens

def isLets(b:Box) = { // returns true if b is a LETS box
   // A LETS box must have exactly 1 membership token in tokens(0)
   b.tokens(0)._1 == letsTokenID && b.tokens(0)._2 == 1 &&
   blake2b256(b.propositionBytes) == memberBoxScriptHash &&
   SELF.R4[Long].get == 0 && // start the box with zero LETS balance
   b.value >= minErgsToJoin && // the box must contain some minimum ergs
   b.R6[Long].get <= HEIGHT // store the creation height in R6
}

// how many lets boxes creared in the tx
val numLetsBoxes = OUTPUTS.filter({(b:Box) => isLets(b)}).size

// In the transaction following is preserved for the token box ...
tokenBox.tokens(0)._1 == SELF.tokens(0)._1 &&                //  token id
tokenBox.tokens(0)._2 == SELF.tokens(0)._2 - numLetsBoxes && //  quantity
tokenBox.propositionBytes == SELF.propositionBytes           //  script`;

const MEMBER_BOX_CODE = `val validRateOracle = CONTEXT.dataInputs(0).tokens(0)._1 == rateTokenID
val rate = CONTEXT.dataInputs(0).R4[Int].get
val inBalance = SELF.R4[Long].get    // LETS balance of current input
val pubKey = SELF.R5[SigmaProp].get  // owner of the current input
val createdAt = SELF.R6[Long].get    // height at which current input was mined

val index = getVar[Int](0).get       // index of the corresponding output
val out = OUTPUTS(index)
val outBalance = out.R4[Long].get    // LETS balance of the output

// A LETS box is one that has the same script as the current box
val isMemberBox = {(b:Box) => b.propositionBytes == SELF.propositionBytes}
val letsInputs = INPUTS.filter(isMemberBox)    // all LETS input boxes
val letsOutputs = OUTPUTS.filter(isMemberBox)  // all LETS output boxes

// The current input belongs to the receiver if its LETS balance increases
// There may be some ergs in receiver's input box. We need to ensure that
// the receiver's output box also contains the same amount of ergs as input
val receiver = outBalance > inBalance && out.value == SELF.value

val getBalance = {(b:Box) => b.R4[Long].get} // returns LETS balance of a box

val letsBalIn = letsInputs.map(getBalance).fold(0L, {(l:Long, r:Long) => l + r})
val letsBalOut = letsOutputs.map(getBalance).fold(0L, {(l:Long, r:Long) => l + r})

// sender box can contain less amount of ergs (sender may withdraw ergs provided 
// that any negative LETS balance of sender in out is backed by sufficient ergs)
val correctErgs = out.value >= -outBalance * rate && (
  out.value >= SELF.value || SELF.R6[Long].get + minWithdrawTime > HEIGHT
)

// for the receiver, we don't touch the erg balance, 
// since a receiver is not actively involved in the transaction

inBalance != outBalance && // some transaction should occur; balance must change
SELF.tokens(0)._1 == letsTokenID && // the current input has the right token
out.tokens(0)._1 == letsTokenID && // corresponding output has the right token
validRateOracle &&          // oracle providing rate has the correct "rate token"
letsBalIn == letsBalOut &&  // total LETS balance is preserved in the transaction
letsInputs.size == 2 && letsOutputs.size == 2 &&  // only two LETS inputs, outputs
out.propositionBytes == SELF.propositionBytes &&  // out is a LETS box ...
out.R5[SigmaProp].get == pubKey &&                // ... with the right pub key
out.R6[Long].get == SELF.R6[Long].get &&          // ... and creation height
(receiver ||              // either current input belongs to receiver ...
  (pubKey && correctErgs) // ... or out has correct ergs and tx has signature
)`;

export default function TrustlessLETSPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Trustless Local Exchange Trading Systems (LETS)
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A fully decentralized LETS design on Ergo: no trusted membership, on-chain rules, and collateral-backed balances.
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

      {/* Introduction */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> Introduction
        </h2>
        <p className="text-gray-300 mb-2">
          A Local Exchange Trading System (LETS) involves several participants who agree to use a form of "local currency," typically pegged to the national currency at a 1:1 ratio. Each participant has an account holding their LETS balance. New members start with a balance of zero. The sum of all users' LETS balances is always zero at any given moment.
        </p>
        <p className="text-gray-300 mb-2">
          <b>Example:</b> Alice (0) buys milk from Bob (0) for 2 Euros. Alice's balance becomes -2, Bob's +2. Bob can spend his balance with other members. All balances always sum to zero.
        </p>
        <p className="text-gray-300">
          In a trustless LETS, there is no trusted group to authenticate users. A committee may only define parameters (currency, max members, fees). All rules are enforced on-chain.
        </p>
      </div>

      {/* Trusted Pricing Oracle */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-cyan-400" /> Trusted Pricing Oracle
        </h2>
        <p className="text-gray-300">
          A trusted pricing oracle provides the current conversion rate of euros to ergs, identified by a global id (rateTokenID). The oracle operates through a singleton box containing the rate, updated by spending and recreating the box.
        </p>
      </div>

      {/* Token Box & Membership Tokens */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-orange-400" /> Token Box & Membership Tokens
        </h2>
        <p className="text-gray-300 mb-2">
          The LETS is defined by a global token box holding membership tokens (letsTokenID). Initially, the box contains all tokens. When a user joins, they receive a membership token in a new LETS box; the token box is updated with the remaining tokens.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4 overflow-x-auto relative">
          <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2"><Code className="w-5 h-5" /> Token Box Script (ErgoScript)</h4>
          <UniversalCopyCodeBlock code={TOKEN_BOX_CODE} />
          <pre className="text-xs text-gray-200 whitespace-pre-wrap">
{TOKEN_BOX_CODE}
          </pre>
        </div>
      </div>

      {/* LETS Box & Transactions */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-cyan-400" /> LETS Box & Transactions
        </h2>
        <p className="text-gray-300 mb-2">
          A LETS box symbolizes a member. All transactions involve two members (sender and receiver). The sender transfers a positive amount, consuming both boxes and recreating them with updated balances. Negative balances must be collateralized with ergs.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4 overflow-x-auto relative">
          <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2"><Code className="w-5 h-5" /> Member Box Script (ErgoScript)</h4>
          <UniversalCopyCodeBlock code={MEMBER_BOX_CODE} />
          <pre className="text-xs text-gray-200 whitespace-pre-wrap">
{MEMBER_BOX_CODE}
          </pre>
        </div>
      </div>

      {/* Variations Table */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> LETS Variations
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-[400px] w-full text-sm text-gray-200 border border-orange-400/30 rounded-xl">
            <thead>
              <tr className="bg-orange-400/10">
                <th className="p-2 border-b border-orange-400/20 font-semibold"> </th>
                <th className="p-2 border-b border-orange-400/20 font-semibold">Zero Sum</th>
                <th className="p-2 border-b border-orange-400/20 font-semibold">Positive Sum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-orange-400/20 font-semibold">Collateral</td>
                <td className="p-2 border-b border-orange-400/20">LETS-1</td>
                <td className="p-2 border-b border-orange-400/20">LETS-3</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-orange-400/20 font-semibold">No Collateral</td>
                <td className="p-2 border-b border-orange-400/20">LETS-2</td>
                <td className="p-2 border-b border-orange-400/20">LETS-4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc pl-6 text-gray-300 space-y-1">
          <li><b>LETS-1:</b> Zero sum, collateral-backed. Time-locked refundable joining fee. Negative balances allowed if collateralized.</li>
          <li><b>LETS-2:</b> Zero sum, no collateral. Non-refundable joining fee. Negative balances allowed.</li>
          <li><b>LETS-3:</b> Positive sum, collateral-backed. Initial positive balance, must always be non-negative. Collateral required for reductions.</li>
          <li><b>LETS-4:</b> Positive sum, no collateral. Non-refundable joining fee, positive balances only.</li>
        </ul>
      </div>

      {/* Comparison Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-400" /> Comparison with Managed LETS
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-1">
          <li>No membership record: anyone can create a membership box.</li>
          <li>Multiple boxes per person allowed; negative balances must be collateralized.</li>
          <li>All rules enforced on-chain, no trusted committee for membership.</li>
        </ul>
      </div>

      {/* Vision Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-orange-400" /> Crossing the Last Mile
        </h2>
        <p className="text-gray-300">
          The need to reform the global financial system has been clear since the last crisis in 2008. Now, COVID-19 has forced our hands. Technology like Ergo can address this problem efficiently, building bridges into and within our local economies without the need for commercial or central banks. A key principle of Ergo is that it is for regular people, enabling real-world use cases and smart contracts for the people.
        </p>
      </div>

      {/* Related Pages */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-cyan-400" /> Related Pages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/Docs/ecosystem/financial/monetary-systems/lets"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-orange-400 mb-2">LETS Overview</h4>
            <p className="text-gray-300 text-sm">What is a Local Exchange Trading System?</p>
          </Link>
          <Link
            href="/Docs/ecosystem/financial/monetary-systems/basic-implementation"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-orange-400 mb-2">Basic Implementation</h4>
            <p className="text-gray-300 text-sm">Minimal managed LETS with committee and directory.</p>
          </Link>
          <Link
            href="/Docs/ecosystem/financial/monetary-systems/sigmausd"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-orange-400 mb-2">SigmaUSD</h4>
            <p className="text-gray-300 text-sm">The first eUTxO-based stablecoin on Ergo.</p>
          </Link>
          <Link
            href="/Docs/ecosystem/financial/monetary-systems/chaincash"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-green-400 mb-2">ChainCash</h4>
            <p className="text-gray-300 text-sm">Elastic money creation combining trust and blockchain assets.</p>
          </Link>
        </div>
      </div>
    </>
  );
} 