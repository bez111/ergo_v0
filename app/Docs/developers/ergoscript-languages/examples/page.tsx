"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ExamplesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Examples
      </h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>
      <div className="text-lg text-gray-300 mb-6 max-w-2xl">
        Practical examples and use cases demonstrating Sigma language capabilities for smart contract development.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Basic Examples</h2>
      
      <h3 className="text-xl font-semibold text-orange-400 mb-3">Simple Time Lock</h3>
      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Time-locked contract:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// Can only be spent after block 100000
{ HEIGHT > 100000 }`}</code></pre>
      </div>

      <h3 className="text-xl font-semibold text-orange-400 mb-3">Multi-Signature</h3>
      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">2-of-3 multi-signature:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// Requires 2 out of 3 signatures
{ 
  atLeast(2, { proveDlog(_) }, pubKeys) 
}`}</code></pre>
      </div>

      <h3 className="text-xl font-semibold text-orange-400 mb-3">Conditional Spending</h3>
      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Complex condition with multiple factors:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// Alice can spend before block 100000
// OR Bob can spend after block 100000
{ 
  (HEIGHT < 100000 && proveDlog(alicePubKey)) || 
  (HEIGHT >= 100000 && proveDlog(bobPubKey)) 
}`}</code></pre>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Advanced Examples</h2>
      
      <h3 className="text-xl font-semibold text-orange-400 mb-3">Token-Based Condition</h3>
      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Requires specific token amount:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// Can only be spent if box contains at least 100 tokens
{ 
  proveDlog(pubKey) && SELF.tokens(0)._2 >= 100 
}`}</code></pre>
      </div>

      <h3 className="text-xl font-semibold text-orange-400 mb-3">Register-Based Logic</h3>
      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Using register data:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// Check register R4 contains specific value
{ 
  proveDlog(pubKey) && SELF.R4[Coll[Byte]].get == targetValue 
}`}</code></pre>
      </div>

      <h3 className="text-xl font-semibold text-orange-400 mb-3">Complex Multi-Condition</h3>
      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Multiple conditions with arithmetic:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// Complex business logic
{ 
  (proveDlog(pubKey1) && HEIGHT > 100000 && SELF.value >= 1000000) ||
  (proveDlog(pubKey2) && HEIGHT > 200000 && SELF.value >= 2000000) ||
  (proveDlog(pubKey3) && SELF.tokens(0)._2 > 50)
}`}</code></pre>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <Link href="/Docs/developers/ergoscript-languages/simple-syntax" className="text-cyan-400 hover:underline">
            Simple Syntax
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/global-functions" className="text-cyan-400 hover:underline">
            Global Functions
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/language-operations" className="text-cyan-400 hover:underline">
            Language Operations
          </Link>
        </li>
        <li>
          <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            Sigmastate Interpreter Repository
          </a>
        </li>
      </ul>
    </>
  );
} 