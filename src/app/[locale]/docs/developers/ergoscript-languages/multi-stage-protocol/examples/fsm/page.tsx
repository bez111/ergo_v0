"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Copy, Check } from "lucide-react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function FSMPage() {
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
        <Cpu className="w-10 h-10 text-blue-400" />
        FSM
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
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Tutorial: Finite State Machines (FSM) in Ergo</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Finite State Machines (FSMs) are a computational model used to design systems that can be in one of a finite number of states at any given time. The machine transitions from one state to another based on specific inputs or conditions. This model is particularly valuable for implementing <a href="../multi.md" className="text-cyan-400 hover:underline">multi-stage protocols</a> or contracts on the blockchain, where the allowed actions depend on the current state of the contract.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Concept</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              In the context of Ergo's <a href="eutxo.md" className="text-cyan-400 hover:underline">eUTXO model</a>, an FSM contract is implemented as a sequence of transactions, where each transaction consumes a box representing the <em>current state</em> and creates a new box representing the <em>next state</em>.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>State Representation:</strong> The current state of the FSM is encoded within an Ergo box, typically using its <a href="../boxes-and-registers.md" className="text-cyan-400 hover:underline">registers</a> (e.g., R4 might hold a state identifier like an <code className="bg-neutral-700 px-2 py-0.5 rounded">Int</code> or <code className="bg-neutral-700 px-2 py-0.5 rounded">Byte</code>). Other registers hold data associated with that state.</li>
              <li><strong>Transitions:</strong> The <a href="../ergoscript.md" className="text-cyan-400 hover:underline">ErgoScript</a> guarding the state box defines the valid transitions. It checks:
                <ul className="list-disc list-inside space-y-2 ml-8 mt-2">
                  <li>The conditions required to move from the current state (e.g., specific inputs provided, signatures, blockchain height).</li>
                  <li>That the output box correctly represents the <em>next</em> valid state (e.g., the state identifier in R4 is updated correctly, other registers are preserved or updated according to protocol rules).</li>
                </ul>
              </li>
              <li><strong>Immutability:</strong> Each transaction creates a <em>new</em> box for the next state, preserving the immutable nature of the blockchain. The previous state box is consumed (spent).</li>
            </ul>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Example: Simple Vending Machine FSM</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Let's model a simple vending machine:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>States:</strong>
                <ul className="list-disc list-inside space-y-2 ml-8 mt-2">
                  <li><code className="bg-neutral-700 px-2 py-0.5 rounded">Locked</code> (State 0): Waiting for payment.</li>
                  <li><code className="bg-neutral-700 px-2 py-0.5 rounded">Paid</code> (State 1): Payment received, waiting for item selection/dispensing.</li>
                </ul>
              </li>
              <li><strong>Transitions:</strong>
                <ul className="list-disc list-inside space-y-2 ml-8 mt-2">
                  <li><code className="bg-neutral-700 px-2 py-0.5 rounded">Locked</code> &rarr; <code className="bg-neutral-700 px-2 py-0.5 rounded">Paid</code>: Requires a transaction input providing the correct payment amount. The output box must be in the <code className="bg-neutral-700 px-2 py-0.5 rounded">Paid</code> state.</li>
                  <li><code className="bg-neutral-700 px-2 py-0.5 rounded">Paid</code> &rarr; <code className="bg-neutral-700 px-2 py-0.5 rounded">Locked</code>: Requires a transaction input signaling item dispensing (e.g., signed by the vendor). The output box must return to the <code className="bg-neutral-700 px-2 py-0.5 rounded">Locked</code> state, potentially with changed value (representing dispensed item cost).</li>
                </ul>
              </li>
            </ul>
            <p>
              <strong>Implementation Sketch (ErgoScript):</strong>
            </p>
            
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`// --- Script for a box in the 'Locked' state (State 0) ---
{
  // Constants defined: requiredPayment (Long), vendorPk (SigmaProp)
  // R4[Int] stores the state identifier (0 for Locked)

  val currentState = SELF.R4[Int].getOrElse(-1) // Get current state ID

  // Transition 1: Payment Received
  val paymentCondition = sigmaProp(
    // Check if exactly one output exists
    OUTPUTS.size == 1 &&
    // Check if the input box value matches the required payment
    INPUTS(0).value >= requiredPayment &&
    // Check if the output box represents the 'Paid' state (State 1)
    OUTPUTS(0).R4[Int].getOrElse(-1) == 1 &&
    // Ensure the output script is the same (points back to this FSM logic)
    OUTPUTS(0).propositionBytes == SELF.propositionBytes &&
    // Ensure vendor PK is preserved (example of preserving data)
    OUTPUTS(0).R5[SigmaProp].getOrElse(sigmaProp(false)) == SELF.R5[SigmaProp].getOrElse(sigmaProp(false)) &&
    // Ensure output value reflects payment minus potential change logic (simplified here)
    OUTPUTS(0).value >= requiredPayment
  )

  // Allow vendor to reclaim funds anytime (example of another path)
  val reclaimCondition = vendorPk

  sigmaProp(currentState == 0) && (paymentCondition || reclaimCondition)
}

// --- Script for a box in the 'Paid' state (State 1) ---
{
  // Constants defined: vendorPk (SigmaProp)
  // R4[Int] stores the state identifier (1 for Paid)

  val currentState = SELF.R4[Int].getOrElse(-1) // Get current state ID

  // Transition 2: Dispense Item (triggered by vendor signature)
  val dispenseCondition = sigmaProp(
    // Check if exactly one output exists
    OUTPUTS.size == 1 &&
    // Check if the output box represents the 'Locked' state (State 0)
    OUTPUTS(0).R4[Int].getOrElse(-1) == 0 &&
    // Ensure the output script is the same
    OUTPUTS(0).propositionBytes == SELF.propositionBytes &&
    // Ensure vendor PK is preserved
    OUTPUTS(0).R5[SigmaProp].getOrElse(sigmaProp(false)) == SELF.R5[SigmaProp].getOrElse(sigmaProp(false)) &&
    // Ensure output value reflects remaining funds (simplified)
    OUTPUTS(0).value == SELF.value // Assuming item cost is handled off-chain or via tokens
  ) && vendorPk // Requires vendor signature to dispense

  sigmaProp(currentState == 1) && dispenseCondition
}`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`// --- Script for a box in the 'Locked' state (State 0) ---
{
  // Constants defined: requiredPayment (Long), vendorPk (SigmaProp)
  // R4[Int] stores the state identifier (0 for Locked)

  val currentState = SELF.R4[Int].getOrElse(-1) // Get current state ID

  // Transition 1: Payment Received
  val paymentCondition = sigmaProp(
    // Check if exactly one output exists
    OUTPUTS.size == 1 &&
    // Check if the input box value matches the required payment
    INPUTS(0).value >= requiredPayment &&
    // Check if the output box represents the 'Paid' state (State 1)
    OUTPUTS(0).R4[Int].getOrElse(-1) == 1 &&
    // Ensure the output script is the same (points back to this FSM logic)
    OUTPUTS(0).propositionBytes == SELF.propositionBytes &&
    // Ensure vendor PK is preserved (example of preserving data)
    OUTPUTS(0).R5[SigmaProp].getOrElse(sigmaProp(false)) == SELF.R5[SigmaProp].getOrElse(sigmaProp(false)) &&
    // Ensure output value reflects payment minus potential change logic (simplified here)
    OUTPUTS(0).value >= requiredPayment
  )

  // Allow vendor to reclaim funds anytime (example of another path)
  val reclaimCondition = vendorPk

  sigmaProp(currentState == 0) && (paymentCondition || reclaimCondition)
}

// --- Script for a box in the 'Paid' state (State 1) ---
{
  // Constants defined: vendorPk (SigmaProp)
  // R4[Int] stores the state identifier (1 for Paid)

  val currentState = SELF.R4[Int].getOrElse(-1) // Get current state ID

  // Transition 2: Dispense Item (triggered by vendor signature)
  val dispenseCondition = sigmaProp(
    // Check if exactly one output exists
    OUTPUTS.size == 1 &&
    // Check if the output box represents the 'Locked' state (State 0)
    OUTPUTS(0).R4[Int].getOrElse(-1) == 0 &&
    // Ensure the output script is the same
    OUTPUTS(0).propositionBytes == SELF.propositionBytes &&
    // Ensure vendor PK is preserved
    OUTPUTS(0).R5[SigmaProp].getOrElse(sigmaProp(false)) == SELF.R5[SigmaProp].getOrElse(sigmaProp(false)) &&
    // Ensure output value reflects remaining funds (simplified)
    OUTPUTS(0).value == SELF.value // Assuming item cost is handled off-chain or via tokens
  ) && vendorPk // Requires vendor signature to dispense

  sigmaProp(currentState == 1) && dispenseCondition
}`, 'fsmScript')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['fsmScript'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
            
            <p className="text-sm text-gray-400 italic">
              (Note: This is a simplified sketch. Real implementations need careful handling of values, tokens, change, multiple inputs/outputs, and robust error checking.)
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Benefits in Ergo</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Clear State Management:</strong> Explicitly encodes state in boxes and transitions in scripts.</li>
              <li><strong>Composability:</strong> FSM contracts can interact with other contracts and protocols.</li>
              <li><strong>Security:</strong> Validation rules are enforced on-chain for each state transition.</li>
              <li><strong>Predictability:</strong> Contract behavior is determined by the defined states and transitions.</li>
            </ul>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Resources & Examples</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Specifications in <code className="bg-neutral-700 px-2 py-0.5 rounded">sigmastate-interpreter</code>:</strong>
                <ul className="list-disc list-inside space-y-2 ml-8 mt-2">
                  <li><a href="https://github.com/ergoplatform/sigmastate-interpreter/blob/develop/sc/shared/src/test/scala/sigmastate/utxo/examples/FsmExampleSpecification.scala" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">FsmExampleSpecification.scala</a>: Provides Scala code demonstrating FSM concepts in a testing context.</li>
                </ul>
              </li>
              <li><strong>Real-World Examples:</strong>
                <ul className="list-disc list-inside space-y-2 ml-8 mt-2">
                  <li><strong>ChainCash:</strong> Contracts like <a href="https://github.com/ChainCashLabs/chaincash/blob/master/contracts/onchain/note.es" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">note.es</a> implement FSM patterns for managing promissory notes and reserves.</li>
                </ul>
              </li>
              <li><strong>Related Concepts:</strong>
                <ul className="list-disc list-inside space-y-2 ml-8 mt-2">
                  <li><a href="../multi.md" className="text-cyan-400 hover:underline">Multi-Stage Contracts</a></li>
                  <li><a href="eutxo.md" className="text-cyan-400 hover:underline">eUTXO Model</a></li>
                  <li><a href="../boxes-and-registers.md" className="text-cyan-400 hover:underline">Box Registers</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Advanced Concepts</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              In Ergo, we can implement Merkleized Finite State Machines (MFSMs) which are now possible to implement directly in ErgoScript. This approach allows for more complex state transitions while maintaining efficiency.
            </p>
            <p>
              As described in the "Advanced ErgoScript Tutorial," we can emulate long-lived contracts by creating new boxes with the same script. While the box ID will change, the contract logic persists across state transitions.
            </p>
            <p>
              Implementing robust FSMs requires careful planning of states, transitions, and the data that needs to be preserved or updated in registers at each step.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 