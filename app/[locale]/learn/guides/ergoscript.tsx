"use client"

import React from "react"

export default function ErgoScriptPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-white">
      <h1 className="text-4xl font-bold mb-6">How ErgoScript Works</h1>
      <p className="mb-4 text-lg">
        ErgoScript is a powerful, yet simple, smart contract language for the Ergo blockchain. It is based on Sigma protocols, enabling advanced cryptography and privacy.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Key Features</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Simple, auditable syntax</li>
        <li>Native support for zero-knowledge proofs</li>
        <li>Flexible and secure smart contracts</li>
        <li>Efficient execution and low fees</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Example: Basic Ownership</h2>
      <pre className="bg-zinc-900 rounded p-4 text-sm overflow-x-auto mb-4">
{`// Only the owner can spend this box
sigmaProp(OUTPUTS(0).propositionBytes == SELF.propositionBytes)`}
      </pre>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Example: Multi-signature Wallet</h2>
      <pre className="bg-zinc-900 rounded p-4 text-sm overflow-x-auto mb-4">
{`// 2-of-3 multisig
atLeast(2, Coll(pubKeyA, pubKeyB, pubKeyC))`}
      </pre>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Practical Use Cases</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Multi-signature wallets</li>
        <li>Decentralized exchanges</li>
        <li>Privacy-preserving contracts</li>
        <li>Oracles and data feeds</li>
        <li>DeFi protocols</li>
      </ul>
      <p className="mb-4">
        ErgoScript's design makes it possible to build secure, efficient, and privacy-focused dApps on Ergo.
      </p>
    </div>
  )
} 