"use client"

import React from "react"

export default function PrivacyFeaturesPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-white">
      <h1 className="text-4xl font-bold mb-6">Privacy Features</h1>
      <p className="mb-4 text-lg">
        Ergo supports advanced privacy via Sigma protocols and ErgoMixer, allowing users to make confidential transactions without sacrificing security.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Sigma Protocols</h2>
      <p className="mb-4">
        Sigma protocols are advanced cryptographic tools that enable zero-knowledge proofs, allowing users to prove statements without revealing information. This is the foundation for privacy in Ergo smart contracts.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">ErgoMixer</h2>
      <p className="mb-4">
        ErgoMixer is a privacy tool that allows users to mix their ERG and tokens, breaking the on-chain link between sender and receiver. This enhances transaction privacy and fungibility.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Confidential Transactions</h2>
      <p className="mb-4">
        Using Sigma protocols and custom scripts, users can create confidential transactions and privacy-preserving dApps on Ergo.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Practical Use Cases</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Private payments</li>
        <li>Anonymous voting</li>
        <li>Confidential DeFi protocols</li>
      </ul>
      <p className="mb-4">
        Ergo's privacy features empower users to control their data and financial privacy on the blockchain.
      </p>
    </div>
  )
} 