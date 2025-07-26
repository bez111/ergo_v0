"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function GlobalFunctionsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Global Functions
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
        Built-in functions available in Sigma language for cryptographic operations and data manipulation.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Cryptographic Functions</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma language provides several cryptographic functions for creating secure smart contracts:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><code className="bg-neutral-800 px-1 rounded">proveDlog(pubKey)</code> - Proof of discrete logarithm</li>
        <li><code className="bg-neutral-800 px-1 rounded">proveDHTuple(g, h, u, v)</code> - Proof of Diffie-Hellman tuple</li>
        <li><code className="bg-neutral-800 px-1 rounded">proveDHTupleGen(g, h, u, v)</code> - Generalized DHT proof</li>
        <li><code className="bg-neutral-800 px-1 rounded">sigmaProp(expr)</code> - Sigma proposition wrapper</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Collection Functions</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Functions for working with collections and arrays:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><code className="bg-neutral-800 px-1 rounded">allOf(condition, collection)</code> - Check if all elements satisfy condition</li>
        <li><code className="bg-neutral-800 px-1 rounded">anyOf(condition, collection)</code> - Check if any element satisfies condition</li>
        <li><code className="bg-neutral-800 px-1 rounded">atLeast(amount, condition, collection)</code> - Check if at least N elements satisfy condition</li>
        <li><code className="bg-neutral-800 px-1 rounded">fold(collection, initial, operation)</code> - Reduce collection to single value</li>
      </ul>

      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Global Functions Example:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// Multi-signature using proveDlog
{ 
  proveDlog(pubKey1) && proveDlog(pubKey2) 
}

// Collection operation example
{ 
  atLeast(2, { proveDlog(_) }, pubKeys) 
}

// Complex condition with sigmaProp
{ 
  sigmaProp(HEIGHT > 100000 && SELF.value > 1000000) 
}`}</code></pre>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <Link href="/Docs/developers/ergoscript-languages/core-concepts" className="text-cyan-400 hover:underline">
            Core Concepts
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/language-operations" className="text-cyan-400 hover:underline">
            Language Operations
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/examples" className="text-cyan-400 hover:underline">
            Examples
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