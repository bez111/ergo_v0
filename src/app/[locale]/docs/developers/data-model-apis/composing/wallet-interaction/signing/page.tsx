"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Link from "next/link";

export default function SigningPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Transaction Signing Process
      </h1>
      
      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/docs/developers/data-model-apis/composing/wallet-interaction"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back to Wallet Interaction
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            To initiate a transaction, a spending transaction <code className="bg-neutral-700 px-2 py-1 rounded">tx</code> is required as an input. This can be achieved by using <code className="bg-neutral-700 px-2 py-1 rounded">bytesToSign(tx)</code>. It's important to note that multiple inputs can be signed simultaneously, but the coins to be spent must be specified prior to signing. The current state of the blockchain, or <code className="bg-neutral-700 px-2 py-1 rounded">context</code>, is also required. The signer has the ability to extend the context by adding values.
          </p>
          
          <p className="text-gray-300">
            With this data, the signer (or prover) of an input begins by reducing the guarding proposition for the input box. This is done by evaluating it using the context. The possible outcomes of this reduction are as follows:
          </p>
        </div>

        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Reduction Outcomes</h2>
          <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
            <li>The process is aborted if the estimated upper-bound evaluation cost (and verification) is too high.</li>
            <li>If the result is <code className="bg-neutral-700 px-2 py-1 rounded">true</code>, it means that the box can be spent by anyone.</li>
            <li>If the result is <code className="bg-neutral-700 px-2 py-1 rounded">false</code>, it means that the box cannot be spent at all (according to the current context).</li>
            <li>If the expression still contains predicates over the context, it means more than context is needed to evaluate some predicates over it. The prover can look into its own not yet revealed secrets to extend context. If the secrets are found, the prover evaluates the expression further and proceeds to the next step if there is nothing more to evaluate. Otherwise, the prover aborts.</li>
            <li>If the expression contains only expressions over secret information provable via Σ-protocols, this is the most common case, and we will explain it further.</li>
          </ul>
        </div>

        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Complex Expressions</h2>
          <p className="text-gray-300 mb-4">
            Complex expressions, such as <code className="bg-neutral-700 px-2 py-1 rounded">dlog(x₁) ∨ (dlog(x₂) ∧ dlog(x₃))</code>, where <code className="bg-neutral-700 px-2 py-1 rounded">dlog(x)</code> means "prove me knowledge of a secret <code className="bg-neutral-700 px-2 py-1 rounded">w</code>, such as for a known group with generator <code className="bg-neutral-700 px-2 py-1 rounded">g</code>, <code className="bg-neutral-700 px-2 py-1 rounded">g^w = x</code>, via a non-interactive form of the Schnorr protocol", may be encountered. Internally, this expression is represented as a tree structure. This proof is to be proven and then serialized into a binary spending proof (which could be included in a transaction) as follows:
          </p>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Steps for Proving a Tree</h2>
          
          <ol className="list-decimal list-inside ml-4 space-y-6 text-gray-300">
            <li className="space-y-2">
              <b className="text-purple-300">Bottom-up:</b> Each node, whether real or simulated, is marked according to the following rule. DLogNode -- if the secret is known, then it's real, else it's simulated. ∨: if at least one child is real, then it's real; else it's simulated. ∧: if at least one child is simulated, then it's simulated; else it's real.
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-400">
                <li>Note: All descendants of a simulated node will be simulated later, even if they were initially marked as real.</li>
                <li>The root should end up being real according to this rule -- otherwise, the proof cannot be carried out.</li>
              </ul>
            </li>
            
            <li>
              <b className="text-purple-300">Top-down:</b> Every child of a simulated node is marked as <em>simulated</em>. If two or more children of a real ∨ are real, all but one are marked as simulated.
            </li>
            
            <li>
              <b className="text-purple-300">Top-down:</b> A challenge is computed for every simulated child of every ∨ and ∧, according to the following rules. If ∨, then every simulated child gets a fresh random challenge. If ∧ (which means ∧ itself is simulated, and all its children are), then every child gets the same challenge as the ∧.
            </li>
            
            <li className="space-y-2">
              <b className="text-purple-300">Bottom-up:</b> For every simulated leaf, a response and a commitment (i.e., second and first prover message) are simulated according to the Schnorr simulator. For every real leaf, the commitment (i.e., first prover message) is computed according to the Schnorr protocol. For every ∨/∧ node, the commitment is the union (as a set) of commitments below it.
              <ul className="list-disc list-inside ml-6 mt-2 text-gray-400">
                <li>The Schnorr challenge is computed as the hash of the commitment of the root (plus other inputs -- probably the tree being proven and the message).</li>
              </ul>
            </li>
            
            <li className="space-y-2">
              <b className="text-purple-300">Top-down:</b> The challenge for every real child of every real ∨ and ∧ is computed as follows. If ∨, then the challenge for the one real child of ∨ is equal to the XOR of the challenge of ∨ and the challenges for all the simulated children of ∨. If ∧, then the challenge for every real child of ∧ is equal to the challenge of the ∧.
              <ul className="list-disc list-inside ml-6 mt-2 text-gray-400">
                <li><b>Note:</b> Simulated ∧ and ∨ only have simulated descendants, so there is no need to recurse down from them.</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Binary Serialization</h2>
          <p className="text-gray-300">
            Finally, to obtain a flat binary string containing <code className="bg-neutral-700 px-2 py-1 rounded">(e, z)</code> pairs (challenge and prover's response for a leaf sub-protocol) from the tree, traverse the tree in depth-first order and collect all leaf responses.
          </p>
        </div>
      </div>
    </div>
  );
} 