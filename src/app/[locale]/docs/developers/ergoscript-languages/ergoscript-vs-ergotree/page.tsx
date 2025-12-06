"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { ArrowLeft, Code2, FileCode, Info, Zap } from "lucide-react";

export default function ErgoScriptVsErgoTreePage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Code2 className="w-8 h-8 text-orange-400" /> ErgoScript vs ErgoTree
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Understanding the difference between high-level ErgoScript and low-level ErgoTree languages in the Ergo ecosystem.
        </p>
        <Link 
          href="/docs/developers/ergoscript-languages" 
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105 gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to ErgoScript Languages
        </Link>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-orange-400" /> Language Overview
        </h2>
        <p className="text-gray-300 mb-4">
          <a href="#" className="text-orange-400 underline hover:text-orange-300">ErgoScript</a> is a high-level, developer-friendly language for writing smart contracts that are then compiled to ErgoTree before being written to the blockchain.
        </p>
        <p className="text-gray-300">
          The <a href="#" className="text-orange-400 underline hover:text-orange-300">Ergo node</a> does not understand ErgoScript. Instead, it uses a low-level language called <span className="font-bold text-white">ErgoTree</span>, which is a "tree-based" language (somewhat like XML).
        </p>
      </div>

      {/* ErgoTree Complexity Section */}
      <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileCode className="w-6 h-6 text-red-400" /> ErgoTree Complexity
        </h2>
        <p className="text-gray-300 mb-4">
          However, writing code in ErgoTree is <span className="font-bold text-red-400 italic">difficult</span>.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>ErgoTree is similar to Bitcoin's Script in some aspects.</li>
          <li>An ErgoTree program is deterministic and consists of a sequence of boolean predicates joined using <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">AND</code> and <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">OR</code>.</li>
          <li>Ergo nodes execute the ErgoTree program contained in a transaction and consider it valid if it evaluates to <code className="bg-gray-700 px-1 py-0.5 rounded text-green-300">true</code>.</li>
        </ul>
      </div>

      {/* Code Examples Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6 text-cyan-400" /> Code Examples
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">ErgoTree Example</h3>
            <p className="text-gray-300 mb-3">An example of such an ErgoTree program would be:</p>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
              <pre className="text-cyan-300 font-mono">
                <code>AND(OR(condition_1, condition_2), condition_3)</code>
              </pre>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              This implies that the transaction is valid if <code className="bg-gray-700 px-1 py-0.5 rounded">condition_3</code> holds and at least one of <code className="bg-gray-700 px-1 py-0.5 rounded">condition_1</code> or <code className="bg-gray-700 px-1 py-0.5 rounded">condition_2</code> holds.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-3">ErgoScript Equivalent</h3>
            <p className="text-gray-300 mb-3">The equivalent of the above program in ErgoScript would be:</p>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
              <pre className="text-green-300 font-mono">
                <code>(condition_1 || condition_2) && condition_3</code>
              </pre>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Much more readable and familiar to developers coming from traditional programming languages!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 