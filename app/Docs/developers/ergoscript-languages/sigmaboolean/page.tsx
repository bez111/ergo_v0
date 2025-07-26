"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function SigmaBooleanPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        SigmaBoolean
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
        Boolean logic and operations in Sigma language for creating complex smart contract conditions.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Boolean Logic in Sigma</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        SigmaBoolean represents the boolean logic system used in Sigma language. All Sigma expressions ultimately evaluate to boolean values, making boolean operations fundamental to smart contract logic.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Boolean Operations</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma language supports standard boolean operations for combining conditions:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><b>AND (&&):</b> Both conditions must be true</li>
        <li><b>OR (||):</b> At least one condition must be true</li>
        <li><b>NOT (!):</b> Inverts the boolean value</li>
        <li><b>XOR:</b> Exactly one condition must be true</li>
      </ul>

      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Boolean Logic Example:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// Complex boolean logic with multiple conditions
{ 
  (proveDlog(pubKey1) && HEIGHT > 100000) || 
  (proveDlog(pubKey2) && HEIGHT > 200000) ||
  (proveDlog(pubKey3) && !(HEIGHT < 50000))
}`}</code></pre>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Boolean Evaluation</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Boolean evaluation in Sigma language follows specific rules:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><b>Short-circuit evaluation:</b> Stops evaluating when result is determined</li>
        <li><b>Deterministic:</b> Same inputs always produce same outputs</li>
        <li><b>Efficient:</b> Optimized for fast blockchain validation</li>
        <li><b>Secure:</b> No side effects or state changes</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <Link href="/Docs/developers/ergoscript-languages/sigma-propositions" className="text-cyan-400 hover:underline">
            Sigma Propositions
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/simple-syntax" className="text-cyan-400 hover:underline">
            Simple Syntax
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