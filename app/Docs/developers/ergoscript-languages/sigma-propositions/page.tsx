"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function SigmaPropositionsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Sigma Propositions
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
        Understanding Sigma propositions and their role in defining smart contract spending conditions.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">What are Sigma Propositions?</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma propositions are the fundamental building blocks of the Sigma language. They are logical expressions that evaluate to boolean values and define the conditions under which a coin can be spent.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Types of Propositions</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma language supports several types of propositions:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><b>Cryptographic propositions:</b> Proofs of knowledge, signatures, commitments</li>
        <li><b>Context propositions:</b> Conditions based on blockchain state</li>
        <li><b>Logical propositions:</b> Combinations using AND, OR, NOT operators</li>
        <li><b>Arithmetic propositions:</b> Numerical comparisons and calculations</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Proposition Structure</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Every Sigma proposition follows a specific structure that allows for efficient evaluation and verification:
      </div>

      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Proposition Example:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// A proposition that requires both a signature and a time condition
{ 
  proveDlog(pubKey) && HEIGHT > 100000 
}`}</code></pre>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Evaluation Process</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        When a transaction attempts to spend a coin, the Sigma proposition is evaluated in the context of the current transaction and blockchain state. The evaluation must return true for the spending to be valid.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <Link href="/Docs/developers/ergoscript-languages/core-concepts" className="text-cyan-400 hover:underline">
            Core Concepts
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/sigmaboolean" className="text-cyan-400 hover:underline">
            SigmaBoolean
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