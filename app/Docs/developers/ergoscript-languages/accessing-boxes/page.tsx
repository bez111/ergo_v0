"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function AccessingBoxesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Accessing Boxes and Registers
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
        Working with UTXO boxes and their registers in Sigma language for smart contract development.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Box Access in Sigma</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        In Ergo's UTXO model, all data is stored in boxes. Sigma language provides powerful primitives for accessing and manipulating box data, including values, tokens, and registers.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Box Properties</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Each box in Ergo has several accessible properties:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><code className="bg-neutral-800 px-1 rounded">value</code> - The amount of ERG in the box</li>
        <li><code className="bg-neutral-800 px-1 rounded">tokens</code> - Array of tokens in the box</li>
        <li><code className="bg-neutral-800 px-1 rounded">registers</code> - R4-R9 data registers</li>
        <li><code className="bg-neutral-800 px-1 rounded">id</code> - Unique box identifier</li>
        <li><code className="bg-neutral-800 px-1 rounded">propositionBytes</code> - Spending condition</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Register Access</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Registers R4-R9 can store arbitrary data and are accessed using specific syntax:
      </div>

      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Register Access Examples:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// Accessing register R4
SELF.R4[Coll[Byte]].get

// Accessing register R5 as Long
SELF.R5[Long].get

// Checking if register exists
SELF.R4[Coll[Byte]].isDefined

// Accessing tokens
SELF.tokens(0)._1  // First token ID
SELF.tokens(0)._2  // First token amount`}</code></pre>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Box Selection</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma language allows selecting specific boxes from the transaction context:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><code className="bg-neutral-800 px-1 rounded">SELF</code> - The current box being spent</li>
        <li><code className="bg-neutral-800 px-1 rounded">INPUTS</code> - All input boxes</li>
        <li><code className="bg-neutral-800 px-1 rounded">OUTPUTS</code> - All output boxes</li>
        <li><code className="bg-neutral-800 px-1 rounded">INPUTS(i)</code> - Specific input box</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-cyan-400 hover:underline">
            The Blockchain Context
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/global-functions" className="text-cyan-400 hover:underline">
            Global Functions
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