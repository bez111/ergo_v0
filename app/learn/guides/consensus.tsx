"use client"

import React from "react"

export default function ConsensusPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-white">
      <h1 className="text-4xl font-bold mb-6">Consensus in Ergo</h1>
      <p className="mb-4 text-lg">
        Ergo uses Autolykos, a unique, ASIC-resistant Proof-of-Work (PoW) algorithm. This ensures fair mining and decentralization, while keeping the network secure and energy-efficient.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">What is Autolykos?</h2>
      <p className="mb-4">
        Autolykos is a memory-hard PoW algorithm designed to be resistant to ASICs and favor GPU miners. It helps maintain decentralization and prevents mining centralization.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Security Benefits</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Prevents centralization of mining power</li>
        <li>Ensures network security through fair competition</li>
        <li>Energy-efficient compared to traditional PoW</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Why PoW?</h2>
      <p className="mb-4">
        Proof-of-Work is a proven consensus mechanism that secures the network, enables permissionless participation, and aligns incentives for honest behavior.
      </p>
    </div>
  )
} 