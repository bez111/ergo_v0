import React from "react";
import Link from "next/link"
import { Code, Shield, KeyRound, BookOpen, Layers, CheckCircle, AlertTriangle } from "lucide-react"

export default function ContractsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Smart Contracts (ErgoScript)
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Discover the basics of ErgoScript — a powerful, functional, and secure language for writing smart contracts on Ergo.
        </p>
      </div>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Code className="w-6 h-6 text-orange-400" /> Overview of ErgoScript: Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-orange-400" /> <span className="font-semibold">Functional Language</span></div>
            <span className="text-gray-400 text-sm">Focuses on evaluating values, not changing state. Promotes predictability and security.</span>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-green-400" /> <span className="font-semibold">Turing-Incomplete</span></div>
            <span className="text-gray-400 text-sm">No infinite loops. All contracts terminate, enhancing security and auditability.</span>
            <div className="flex items-center gap-2"><KeyRound className="w-5 h-5 text-cyan-400" /> <span className="font-semibold">Security</span></div>
            <span className="text-gray-400 text-sm">Atomic, single-spend boxes minimize common vulnerabilities (e.g., reentrancy).</span>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-neutral-900/60 border border-cyan-500/30 rounded-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2"><Code className="w-5 h-5 text-purple-400" /> <span className="font-semibold">Expressiveness</span></div>
            <span className="text-gray-400 text-sm">Supports Sigma-protocols for advanced cryptography and privacy.</span>
            <div className="flex items-center gap-2"><Layers className="w-5 h-5 text-blue-400" /> <span className="font-semibold">eUTXO Model</span></div>
            <span className="text-gray-400 text-sm">Each box is protected by its own script, executed atomically.</span>
          </div>
        </div>
      </section>

      {/* Syntax Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Code className="w-6 h-6 text-cyan-400" /> Basic Syntax & Data Types
        </h2>
        <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
          <div className="font-semibold mb-2 text-orange-400">Data Types:</div>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Boolean: <span className="text-orange-400">true</span>, <span className="text-orange-400">false</span></li>
            <li>Long: 64-bit integer</li>
            <li>Int: 32-bit integer</li>
            <li>Byte: Byte value</li>
            <li>Coll[T]: Collection (array) of T</li>
            <li>SigmaProp: Cryptographic proofs (public keys, multisig)</li>
            <li>Box: UTXO representation</li>
            <li>Option[T]: Optional value or None</li>
          </ul>
          <div className="font-semibold mt-6 mb-2 text-orange-400">Basic Constructs:</div>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Variables: <span className="font-mono">val myVar = ...</span></li>
            <li>Conditionals: <span className="font-mono">if (cond) {'{...'} else {'...}'}</span></li>
            <li>Logical: <span className="font-mono">&&</span>, <span className="font-mono">||</span>, <span className="font-mono">!</span></li>
            <li>Arithmetic: <span className="font-mono">+, -, *, /, %</span></li>
            <li>Comparisons: <span className="font-mono">==, !=, &gt;, &lt;, &gt;=, &lt;=</span></li>
            <li>Register Access: <span className="font-mono">SELF.R4[Long].get</span></li>
            <li>Context: <span className="font-mono">CONTEXT.HEIGHT</span>, <span className="font-mono">INPUTS(0)</span></li>
          </ul>
        </div>
      </section>

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <CheckCircle className="w-6 h-6 text-green-400" /> Example Smart Contracts
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <div className="font-semibold mb-2 text-orange-400">Pay-to-PublicKey (P2PK):</div>
            <pre className="bg-black text-orange-300 p-3 rounded-lg overflow-x-auto mb-2 font-mono text-sm">sigmaProp(PK)</pre>
            <span className="text-gray-400 text-xs">Box can only be spent by the owner of PK</span>
            <div className="font-semibold mt-4 mb-2 text-orange-400">Time-Locked Contract:</div>
            <pre className="bg-black text-orange-300 p-3 rounded-lg overflow-x-auto mb-2 font-mono text-sm">HEIGHT &gt; 1234567 &amp;&amp; PK.isValid</pre>
            <span className="text-gray-400 text-xs">Box can be spent after a specific block height</span>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <div className="font-semibold mb-2 text-cyan-400">Multi-Signature (2-of-3):</div>
            <pre className="bg-black text-cyan-300 p-3 rounded-lg overflow-x-auto mb-2 font-mono text-sm">atLeast(2, Coll(PK1, PK2, PK3))</pre>
            <span className="text-gray-400 text-xs">Requires 2 out of 3 signatures</span>
            <div className="font-semibold mt-4 mb-2 text-cyan-400">Atomic Swap (simplified):</div>
            <pre className="bg-black text-cyan-300 p-3 rounded-lg overflow-x-auto mb-2 font-mono text-sm">{`// Alice receives Bob's token if Bob knows the secret
// pkA: Alice's public key
// hashX: hash of secret X
// timeout: block height after which Alice can reclaim funds

(pkA.isValid && blake2b256(SELF.R4.get) == hashX) ||
(HEIGHT > timeout && pkA.isValid)`}</pre>
            <span className="text-gray-400 text-xs">Trustless exchange with timeout</span>
          </div>
        </div>
      </section>

      {/* Sigma Protocols Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Shield className="w-6 h-6 text-blue-400" /> Sigma-Protocols & Advanced Cryptography
        </h2>
        <div className="bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-500/20 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Zero-Knowledge Proofs:</strong> Prove knowledge of a secret without revealing it.</li>
            <li><strong>Non-Interactive Proofs:</strong> No interaction required between parties.</li>
            <li><strong>Ring Signatures:</strong> Sign on behalf of a group without revealing the signer.</li>
          </ul>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> See <Link href="https://ergoplatform.org/docs/ErgoScript.pdf" target="_blank" className="text-orange-400 hover:underline">ErgoScript Whitepaper</Link> and <Link href="https://github.com/ergoplatform/ergo-script-cookbook" target="_blank" className="text-orange-400 hover:underline">ergo-script-cookbook</Link> for more.
          </div>
        </div>
      </section>

      {/* eUTXO Interaction Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Layers className="w-6 h-6 text-purple-400" /> ErgoScript & the eUTXO Model
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>Each box contains its own <span className="text-orange-400">ErgoTree</span> (script).</li>
            <li>When a box is spent, its script is executed in the context of the transaction.</li>
            <li>The script can check properties of all input, output, and data boxes.</li>
            <li>Contract state is changed by creating a new box with updated data and/or script.</li>
          </ul>
        </div>
      </section>
    </>
  )
}
