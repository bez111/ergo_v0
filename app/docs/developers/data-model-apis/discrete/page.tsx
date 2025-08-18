"use client";

import React from "react";
import Link from "next/link";
import { Lock, Key, Sigma, Users, BookOpen, Code, CheckCircle } from "lucide-react";

export default function DlogProofsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Discrete Logarithm Proofs in Ergo
      </h1>

      <div className="mb-8">
        <Link href="/docs/developers/data-model-apis" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-lg transition-colors">
          <span className="text-orange-400">← Back to Data Model & APIs</span>
        </Link>
      </div>

      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Overview</h2>
        <p className="text-gray-300">
          Discrete logarithm proofs are a fundamental cryptographic primitive in Ergo's signature verification mechanism, based on the computational hardness of the discrete logarithm problem in elliptic curve cryptography.
        </p>
      </div>

      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">Key Characteristics</h2>
        <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
          <li><b>Cryptographic Foundation:</b> Proofs of knowledge of a discrete logarithm (DLog) verify signature authenticity without revealing the secret key</li>
          <li><b>Schnorr Signature Basis:</b> Ergo uses Schnorr signatures built on discrete logarithm proofs</li>
        </ul>
      </div>

      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">Technical Details</h2>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li><b>Proof Structure:</b> Demonstrate knowledge of secret exponent <code>w</code> such that <code>g^w = x</code></li>
          <li><b>g:</b> Generator of an elliptic curve group</li>
          <li><b>x:</b> Public key point</li>
          <li><b>w:</b> Private key</li>
        </ul>
      </div>

      <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Related Cryptographic Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/docs/developers/cryptographic-primitives/sigma" className="group block">
            <div className="bg-neutral-900/50 rounded-lg p-4 flex items-center gap-2 mb-2">
              <Sigma className="w-5 h-5 text-red-400" />
              <h3 className="font-semibold text-red-300 group-hover:underline">Sigma Protocols</h3>
            </div>
          </Link>
          <Link href="/docs/developers/cryptographic-primitives/threshold" className="group block">
            <div className="bg-neutral-900/50 rounded-lg p-4 flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-red-400" />
              <h3 className="font-semibold text-red-300 group-hover:underline">Threshold Signatures</h3>
            </div>
          </Link>
          <Link href="/docs/developers/cryptographic-primitives/ring" className="group block">
            <div className="bg-neutral-900/50 rounded-lg p-4 flex items-center gap-2 mb-2">
              <Key className="w-5 h-5 text-red-400" />
              <h3 className="font-semibold text-red-300 group-hover:underline">Ring Signatures</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Implementation in ErgoScript</h2>
        <p className="text-gray-300 mb-4">
          In ErgoScript, discrete logarithm proofs are implemented using the <code>proveDlog()</code> predicate, which returns true if a valid proof of knowledge can be provided.
        </p>
        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 my-4">
          <pre className="bg-neutral-800 rounded p-3 text-sm text-gray-200 overflow-x-auto">
{`// DLog-based signature verification
val pubKey = ...  // Public key point
val signature = ...  // Signature proof
proveDlog(pubKey)`}
          </pre>
        </div>
      </div>

      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Practical Examples</h2>
        <div className="space-y-4">
          <Link href="/docs/developers/cryptographic-primitives/schnorr" className="group block">
            <div className="bg-neutral-900/50 rounded-lg p-4 flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold text-green-300 group-hover:underline">Schnorr Signature Verification</h3>
            </div>
          </Link>
          <Link href="/docs/developers/cryptographic-primitives/other-signatures/public-keys" className="group block">
            <div className="bg-neutral-900/50 rounded-lg p-4 flex items-center gap-2 mb-2">
              <Key className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold text-green-300 group-hover:underline">Public Key Cryptography</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">Security Considerations</h2>
        <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
          <li>Based on discrete logarithm problem hardness</li>
          <li>Efficient and compact signature verification</li>
          <li>Supports multi-signatures and ring signatures</li>
        </ul>
      </div>

      <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-pink-400">Advanced Applications</h2>
        <div className="space-y-4">
          <Link href="/docs/developers/cryptographic-primitives" className="group block">
            <div className="bg-neutral-900/50 rounded-lg p-4 flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-pink-400" />
              <h3 className="font-semibold text-pink-300 group-hover:underline">Cryptographic Foundations</h3>
            </div>
          </Link>
          <Link href="/docs/developers/cryptographic-primitives/zerojoin" className="group block">
            <div className="bg-neutral-900/50 rounded-lg p-4 flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-pink-400" />
              <h3 className="font-semibold text-pink-300 group-hover:underline">ZeroJoin Privacy Protocol</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">References</h2>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li><Link href="/docs/developers/cryptographic-primitives" className="text-orange-400 hover:underline">Cryptographic Primitives</Link></li>
          <li><Link href="/docs/technology/ergoscript" className="text-orange-400 hover:underline">ErgoScript Capabilities</Link></li>
        </ul>
      </div>
    </div>
  );
} 