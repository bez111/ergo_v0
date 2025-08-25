"use client"

import React from "react"

export default function EUTXOPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-white">
      <h1 className="text-4xl font-bold mb-6">eUTXO Model Explained</h1>
      <p className="mb-4 text-lg">
        The extended UTXO (eUTXO) model is the foundation of Ergo. It combines the simplicity and security of Bitcoin's UTXO with the programmability of smart contracts.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">What is a UTXO?</h2>
      <p className="mb-4">
        UTXO stands for <b>Unspent Transaction Output</b>. In Bitcoin and Ergo, every transaction consumes previous outputs and creates new ones. Each output is a discrete piece of value that can be spent in the future.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">What is eUTXO?</h2>
      <p className="mb-4">
        eUTXO extends the UTXO model by allowing each output (called a "box" in Ergo) to carry not only value, but also arbitrary data and scripts. This enables complex smart contracts while retaining the auditability and parallelism of UTXO.
      </p>
      {/* Diagram: UTXO vs eUTXO (add SVG or image here) */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">Comparison Table</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full text-left border border-zinc-700">
          <thead className="bg-zinc-800">
            <tr>
              <th className="py-2 px-4 border-b border-zinc-700">Feature</th>
              <th className="py-2 px-4 border-b border-zinc-700">Account Model (ETH)</th>
              <th className="py-2 px-4 border-b border-zinc-700">UTXO (BTC)</th>
              <th className="py-2 px-4 border-b border-zinc-700">eUTXO (Ergo/Cardano)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-zinc-700">Parallelism</td>
              <td className="py-2 px-4 border-b border-zinc-700">Low</td>
              <td className="py-2 px-4 border-b border-zinc-700">High</td>
              <td className="py-2 px-4 border-b border-zinc-700">High</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-zinc-700">Smart Contracts</td>
              <td className="py-2 px-4 border-b border-zinc-700">Yes</td>
              <td className="py-2 px-4 border-b border-zinc-700">No</td>
              <td className="py-2 px-4 border-b border-zinc-700">Yes</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-zinc-700">Auditability</td>
              <td className="py-2 px-4 border-b border-zinc-700">Medium</td>
              <td className="py-2 px-4 border-b border-zinc-700">High</td>
              <td className="py-2 px-4 border-b border-zinc-700">High</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Practical Example</h2>
      <p className="mb-4">
        In Ergo, a simple payment is a box locked by a script that only the recipient can unlock. More complex contracts (like multi-sig, oracles, or DeFi) are possible by adding logic to the box script and storing extra data.
      </p>
      <pre className="bg-zinc-900 rounded p-4 text-sm overflow-x-auto mb-4">
{`// Example: Only the owner can spend this box
sigmaProp(OUTPUTS(0).propositionBytes == SELF.propositionBytes)`}
      </pre>
      <p className="mb-4">
        The eUTXO model enables parallel transaction processing, advanced dApps, and high security—all while remaining easy to audit and reason about.
      </p>
    </div>
  )
} 