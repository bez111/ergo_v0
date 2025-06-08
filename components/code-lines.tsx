"use client"

import { useEffect, useState } from "react"

export function CodeLines() {
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    const codeSnippets = [
      "const blockchain = new ErgoBlockchain()",
      "function validateTransaction(tx) {",
      "  return tx.inputs.every(input => {",
      "    return verifySignature(input)",
      "  })",
      "}",
      "class SmartContract {",
      "  constructor(script) {",
      "    this.ergoscript = script",
      "  }",
      "}",
      "// UTXO model implementation",
      "const utxo = {",
      "  value: 1000000,",
      "  address: '9f4QF8AD1nQ3nJahQVkMj8hFSVVzVom77b52JU7EW71Zexg6N8v'",
      "}",
      "if (proof.isValid()) {",
      "  executeContract()",
      "}",
      "// Sigma protocols for privacy",
      "const commitment = pedersen.commit(value, randomness)",
      "function generateNIPoPoW() {",
      "  return compressedProof",
      "}",
    ]

    setLines(codeSnippets)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative h-full">
        {lines.map((line, index) => (
          <div
            key={index}
            className="absolute text-green-400/20 font-mono text-sm whitespace-nowrap"
            style={{
              top: `${(index * 40) % 100}%`,
              left: `${(index * 60) % 100}%`,
              transform: `rotate(${(index * 15) % 360}deg)`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}
