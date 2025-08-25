"use client"

import React from "react"

export default function OraclePoolPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-white">
      <h1 className="text-4xl font-bold mb-6">Oracle Pools</h1>
      <p className="mb-4 text-lg">
        Oracles bring real-world data to the blockchain. Ergo pioneered Oracle Pools, making data feeds decentralized, secure, and affordable for dApps.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How Oracle Pools Work</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Multiple oracles submit data (e.g., price feeds) to the pool.</li>
        <li>Data is aggregated and verified on-chain using smart contracts.</li>
        <li>dApps can access reliable, decentralized data for their logic.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Benefits</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Decentralized and trustless data feeds</li>
        <li>Lower costs for dApps</li>
        <li>Resistant to manipulation and single points of failure</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Practical Use Cases</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Stablecoins (e.g., SigmaUSD)</li>
        <li>DeFi protocols</li>
        <li>Prediction markets</li>
        <li>Insurance products</li>
      </ul>
      <p className="mb-4">
        Oracle Pools are a core innovation of Ergo, enabling a new generation of decentralized applications.
      </p>
    </div>
  )
} 