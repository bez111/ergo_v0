"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function BlockchainContextPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        The Blockchain Context
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
        How Sigma language interacts with blockchain context to access transaction and state information.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">What is Blockchain Context?</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        The blockchain context provides Sigma language expressions with access to information about the current transaction, blockchain state, and available data. This context is essential for creating dynamic and responsive smart contracts.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Context Variables</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma language provides several predefined variables that give access to blockchain context:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><code className="bg-neutral-800 px-1 rounded">HEIGHT</code> - Current block height</li>
        <li><code className="bg-neutral-800 px-1 rounded">SELF</code> - The box being spent</li>
        <li><code className="bg-neutral-800 px-1 rounded">INPUTS</code> - All input boxes in the transaction</li>
        <li><code className="bg-neutral-800 px-1 rounded">OUTPUTS</code> - All output boxes in the transaction</li>
        <li><code className="bg-neutral-800 px-1 rounded">CONTEXT</code> - Additional transaction context</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Context Usage Examples</h2>
      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Context Examples:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// Time-locked contract
{ HEIGHT > 100000 }

// Multi-signature with context
{ proveDlog(pubKey1) && SELF.value > 1000000 }

// Complex condition using multiple context variables
{ 
  (HEIGHT > 100000 && proveDlog(pubKey1)) ||
  (HEIGHT > 200000 && proveDlog(pubKey2))
}`}</code></pre>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Context Evaluation</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        When a Sigma expression is evaluated, the blockchain context is automatically provided. This allows the expression to access current transaction data and blockchain state without explicit parameter passing.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <Link href="/Docs/developers/ergoscript-languages/core-concepts" className="text-cyan-400 hover:underline">
            Core Concepts
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/accessing-boxes" className="text-cyan-400 hover:underline">
            Accessing Boxes and Registers
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