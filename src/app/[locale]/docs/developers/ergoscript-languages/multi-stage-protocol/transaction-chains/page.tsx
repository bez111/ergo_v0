"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, GitBranch } from "lucide-react";

export default function TransactionChainsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <GitBranch className="w-10 h-10 text-orange-400" />
        Transaction Chains
      </h1>

      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages/multi-stage-protocol"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Multi-Stage Protocols
        </Link>
      </div>

      <div className="space-y-6">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="text-gray-300 space-y-4">
            <p>
              In a multi-stage protocol, a <strong>transaction chain</strong> is a sequence of transactions executed in a specific order to achieve a particular outcome or goal. Each transaction in the chain depends on the successful execution of the previous one, and the overall success of the protocol relies on the successful execution of the entire chain.
            </p>
            <p>
              For example, a transaction chain in a decentralized exchange (DEX) protocol might involve several steps to execute a trade between two parties. This chain could include steps such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Approving the DEX contract to spend the required tokens from the user's wallet.</li>
              <li>Depositing the tokens to be traded into the DEX's smart contract box.</li>
              <li>Placing an order to buy or sell tokens at a specific price.</li>
              <li>Matching the order with a corresponding buy or sell order from another party.</li>
              <li>Executing the trade by creating a transaction that transfers the tokens and corresponding payment between the parties' boxes.</li>
              <li>Withdrawing the traded tokens and payment from the DEX's smart contract box back to the respective parties' wallets.</li>
            </ul>
            <p>
              In this example, each transaction depends on the successful completion of the previous one. The overall success of the trade hinges on the successful execution of the entire transaction chain. If any transaction fails or encounters an error, the entire chain might fail, preventing the trade from being executed.
            </p>
            <p>
              Transaction chains are a fundamental concept in Ergo's multi-stage protocols. They offer a structured way to achieve specific goals by ensuring transactions execute in the correct order with the necessary dependencies between stages.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Process</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              A <strong>transaction chain</strong> is used to create multi-stage protocols where the logic progresses sequentially through different states, represented by UTXOs (boxes). Each stage's script enforces the rules for transitioning to the next stage.
            </p>
            <p>
              A transaction chain representing a multi-stage protocol can be conceptualized as follows:
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-bold text-orange-400 mb-4">1: Represent Stages as Nodes</h3>
          <div className="text-gray-300 space-y-4">
            <p>
              Represent the execution flow as a sequence of <code className="bg-neutral-700 px-2 py-0.5 rounded">n</code> states (S<sub>0</sub>, S<sub>1</sub>, ..., S<sub>n</sub>). Each state corresponds to a UTXO protected by a specific script and containing relevant data. A transaction (Tx<sub>i</sub>) acts as the transition between state S<sub>i-1</sub> and state S<sub>i</sub>, consuming the box representing S<sub>i-1</sub> and creating the box representing S<sub>i</sub>. This forms a directed graph where states are nodes and transactions are edges. For example, a 3-stage contract (like the ICO example) can be visualized as:
            </p>
            <div className="flex justify-center my-6">
              <svg width="400" height="100" viewBox="0 0 400 100" className="rounded-lg max-w-full">
                {/* s1 node */}
                <circle cx="60" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="2"/>
                <text x="60" y="55" textAnchor="middle" fill="#e5e7eb" fontSize="20" fontWeight="600">s₁</text>
                
                {/* Arrow from s1 to s2 */}
                <path d="M 95 50 L 165 50" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                
                {/* s2 node */}
                <circle cx="200" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="2"/>
                <text x="200" y="55" textAnchor="middle" fill="#e5e7eb" fontSize="20" fontWeight="600">s₂</text>
                
                {/* Arrow from s2 to s3 */}
                <path d="M 235 50 L 305 50" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                
                {/* s3 node */}
                <circle cx="340" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="2"/>
                <text x="340" y="55" textAnchor="middle" fill="#e5e7eb" fontSize="20" fontWeight="600">s₃</text>
                
                {/* Arrow marker definition */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                  </marker>
                </defs>
              </svg>
            </div>
            <p>
              Each state (box) contains data (in registers) and is protected by script code (propositionBytes).
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-bold text-orange-400 mb-4">2: Enforce Transitions</h3>
          <div className="text-gray-300 space-y-4">
            <p>
              To ensure the protocol progresses correctly, the script guarding state S<sub>n-1</sub> must enforce conditions on the transaction (Tx<sub>n</sub>) that spends it. Specifically, it must require that Tx<sub>n</sub> creates an output box representing state S<sub>n</sub> with the correct script and data. This is often done by checking the <code className="bg-neutral-700 px-2 py-0.5 rounded">propositionBytes</code> and relevant registers of the output box. An example is shown in the following pseudocode within the script for state S<sub>n-1</sub>:
            </p>
            <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
              <code className="text-gray-200">
{`// Ensure the output box has the same ErgoScript code as the state box and the same R4 data
// This is used to propagate data from the state box to the output box
out.propositionBytes == state_n_code &&
out.R4[Int].get == SELF.R4[Int].get`}
              </code>
            </pre>
            <p>
              The code above uses the <code className="bg-neutral-700 px-2 py-0.5 rounded">propositionBytes</code> field of a box, which contains the serialized binary representation of its guarding script (ErgoTree).
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-bold text-orange-400 mb-4">3: Chain the Stages</h3>
          <div className="text-gray-300 space-y-4">
            <p>
              Repeat Step 2 for all transitions in the chain: the script for S<sub>n-2</sub> enforces the creation of S<sub>n-1</sub>, the script for S<sub>n-3</sub> enforces the creation of S<sub>n-2</sub>, and so on, back to the initial state S<sub>0</sub>.
            </p>
            <p>
              To avoid embedding potentially large script code within the previous stage's script, it's common practice to work with hashes. Instead of checking <code className="bg-neutral-700 px-2 py-0.5 rounded">out.propositionBytes == state_n_code</code>, the script checks <code className="bg-neutral-700 px-2 py-0.5 rounded">blake2b256(out.propositionBytes) == state_n_code_hash</code>, where <code className="bg-neutral-700 px-2 py-0.5 rounded">state_n_code_hash</code> is a known constant hash of the expected script for the next stage. This optimization significantly reduces script size.
            </p>
            <p className="mt-6">
              Next, we will look at <Link href="/docs/developers/ergoscript-languages/multi-stage-protocol/tx-tree" className="text-cyan-400 hover:underline">Transaction Trees</Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 