"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function LanguageOperationsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Language Operations
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
        Operators and operations supported by Sigma language for building complex smart contract logic.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Logical Operations</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma language supports standard logical operations for combining conditions:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><code className="bg-neutral-800 px-1 rounded">&&</code> - Logical AND</li>
        <li><code className="bg-neutral-800 px-1 rounded">||</code> - Logical OR</li>
        <li><code className="bg-neutral-800 px-1 rounded">!</code> - Logical NOT</li>
        <li><code className="bg-neutral-800 px-1 rounded">==</code> - Equality comparison</li>
        <li><code className="bg-neutral-800 px-1 rounded">!=</code> - Inequality comparison</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Arithmetic Operations</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Basic arithmetic operations for numerical calculations:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><code className="bg-neutral-800 px-1 rounded">+</code> - Addition</li>
        <li><code className="bg-neutral-800 px-1 rounded">-</code> - Subtraction</li>
        <li><code className="bg-neutral-800 px-1 rounded">*</code> - Multiplication</li>
        <li><code className="bg-neutral-800 px-1 rounded">/</code> - Division</li>
        <li><code className="bg-neutral-800 px-1 rounded">%</code> - Modulo</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Comparison Operations</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Comparison operators for creating conditional logic:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><code className="bg-neutral-800 px-1 rounded">&lt;</code> - Less than</li>
        <li><code className="bg-neutral-800 px-1 rounded">&lt;=</code> - Less than or equal</li>
        <li><code className="bg-neutral-800 px-1 rounded">&gt;</code> - Greater than</li>
        <li><code className="bg-neutral-800 px-1 rounded">&gt;=</code> - Greater than or equal</li>
      </ul>

      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Operations Example:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// Complex operation combining multiple types
{ 
  (HEIGHT > 100000 && SELF.value >= 1000000) ||
  (proveDlog(pubKey1) && proveDlog(pubKey2)) ||
  (SELF.tokens(0)._2 > 100 && HEIGHT < 200000)
}

// Arithmetic operation in condition
{ 
  SELF.value + INPUTS(0).value > 5000000 
}`}</code></pre>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <Link href="/Docs/developers/ergoscript-languages/sigmaboolean" className="text-cyan-400 hover:underline">
            SigmaBoolean
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