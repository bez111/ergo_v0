"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function WalletInteractionPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Interacting with an Ergo Wallet
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
        How Sigma language works with Ergo wallets for secure transaction signing and smart contract interaction.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Wallet Integration</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma language expressions are evaluated by Ergo wallets when users attempt to spend coins. The wallet provides the necessary cryptographic proofs and context data for the Sigma expression to evaluate successfully.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Transaction Signing</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        When a user wants to spend a coin protected by a Sigma expression, the wallet must:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li>Generate the required cryptographic proofs (e.g., proveDlog)</li>
        <li>Provide the current blockchain context</li>
        <li>Ensure the Sigma expression evaluates to true</li>
        <li>Sign the transaction with the user's private key</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Wallet Requirements</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        For proper Sigma language support, Ergo wallets need to implement:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><b>Sigma protocol support:</b> Ability to generate cryptographic proofs</li>
        <li><b>Context provision:</b> Access to blockchain and transaction data</li>
        <li><b>Expression evaluation:</b> Sigma language interpreter</li>
        <li><b>Secure key management:</b> Private key storage and usage</li>
      </ul>

      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
        <div className="text-cyan-400 font-semibold mb-2">Wallet Interaction Example:</div>
        <pre className="text-sm text-gray-200 overflow-x-auto"><code>{`// User wants to spend a coin with this Sigma expression
{ 
  proveDlog(userPubKey) && HEIGHT > 100000 
}

// Wallet must:
// 1. Generate proveDlog proof using user's private key
// 2. Provide current HEIGHT from blockchain
// 3. Evaluate expression to true
// 4. Sign transaction and broadcast`}</code></pre>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <Link href="/Docs/developers/ergoscript-languages/core-concepts" className="text-cyan-400 hover:underline">
            Core Concepts
          </Link>
        </li>
        <li>
          <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-cyan-400 hover:underline">
            The Blockchain Context
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