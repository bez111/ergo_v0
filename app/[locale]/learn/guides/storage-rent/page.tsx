"use client"

import React from "react"

export default function StorageRentPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-white">
      <h1 className="text-4xl font-bold mb-6">Storage Rent</h1>
      <p className="mb-4 text-lg">
        Unlike most blockchains, Ergo implements storage rent: if a box (UTXO) is unspent for a long time, a small fee is charged. This keeps the blockchain lean and incentivizes active use.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How Storage Rent Works</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Each box (UTXO) on Ergo is subject to a small periodic fee if left unspent.</li>
        <li>Fees are collected by miners, incentivizing them to maintain the network.</li>
        <li>Unclaimed or abandoned boxes are eventually recycled, freeing up space.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Benefits</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Prevents blockchain bloat</li>
        <li>Encourages active participation</li>
        <li>Ensures long-term sustainability</li>
      </ul>
      <p className="mb-4">
        Storage rent is a unique feature that helps Ergo remain efficient and sustainable for years to come.
      </p>
    </div>
  )
} 