"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Code, AlertTriangle, Users, Zap, FileText, ExternalLink } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function EIP17Page() {
  const contractCode = `{
  // dApp-specific part ensuring that user will receive what he is paying for
  val properFundUsage = {
    val userOut = OUTPUTS(1)
    userOut.propositionBytes == fromBase64("\\$userAddress") && // user must be the recipient
      userOut.tokens(0)._1 == fromBase64("\\$scTokenId") && // user must receive SigmaUSD
      userOut.tokens(0)._2 >= \\$scAmountL && // the amount of SigmaUSD must be at least what user is paying for
      HEIGHT < \\$timestampL // this part is always true (timestamp is the unix-timestamp at the time of the request), it will cause compiled address to differ everytime
  }
  
  // ensuring dApp integrity is preserved - any dApp specific condition to ensure designed procedures won't be violated
  val UIFeeOk = OUTPUTS(2).propositionBytes == fromBase64("\\$implementor") && OUTPUTS.size == 4 // UI fee must go to UI devs not any random person who assembles the transaction
  val properBank = OUTPUTS(0).tokens(2)._1 == fromBase64("\\$bankNFT") // the real bank box of the sigmaUSD protocol must be used so not any random person can behave as the bank box
  val dAppWorksFine = properFundUsage && UIFeeOk && properBank

  // in any case, whether assembler refuses to execute the request or the request fails for any reason, user must be able to get back his funds
  val returnFunds = { 
    val total = INPUTS.fold(0L, {(x:Long, b:Box) => x + b.value}) - \\$returnFee // only refund transactions's fee must be deducted from user's funds
    OUTPUTS(0).value >= total && OUTPUTS(0).propositionBytes == fromBase64("\\$userAddress") // user must receive the appropriate amount
    && (PK("\\$assemblerNodeAddr") || HEIGHT > \\$refundHeightThreshold) && // either dApp-specific node can return user's funds or some time (block) has to be passed first. This is useful for many reasons.
    OUTPUTS.size == 2 // only refund box and transaction fee box is needed
  }

  sigmaProp(dAppWorksFine || returnFunds) // either dApp must work as it is supposed to or user's funds must be returned
}`;

  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Proxy Contracts (EIP-17)
      </h1>

      {/* Back Button */}
      <Link href="/docs/developers/data-model-apis/resources/standards" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Standards</span>
        </button>
      </Link>

      {/* EIP Metadata */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-blue-400">EIP-0017: Proxy Contracts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <p><strong>Author:</strong> anon_real</p>
            <p><strong>Status:</strong> <span className="text-yellow-400">Proposed</span></p>
            <p><strong>Created:</strong> 05-May-2021</p>
          </div>
          <div>
            <p><strong>License:</strong> CC0</p>
            <p><strong>Forking:</strong> not needed</p>
            <p><strong>Source:</strong> <a href="https://raw.githubusercontent.com/ergoplatform/eips/master/eip-0017.md" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0017</a></p>
          </div>
        </div>
      </div>

      {/* Motivation */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-green-400">Motivation</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Outsourcing transaction generation to an external service/dApp can be useful or even needed in various circumstances. For example, avoiding wallet limitations to generate any transaction on behalf of the user - <a href="https://github.com/anon-real/ergo-assembler" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Assembler</a> is designed for this purpose.
        </p>
        <p className="text-gray-300 mb-4">
          Another example is to scale dApps to be able to fulfill many requests without double-spending or data invalidation - SigmaUSD dApp can use proxy contracts to avoid bank double-spending and ERG/USD oracle data invalidation.
        </p>
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-300">Key Use Cases</h3>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>Avoiding wallet limitations for transaction generation</li>
            <li>Scaling dApps without double-spending issues</li>
            <li>Protecting users from malicious activities</li>
            <li>Preserving dApp infrastructure integrity</li>
          </ul>
        </div>
      </div>

      {/* Background */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-purple-400">Background</h2>
        </div>
        <p className="text-gray-300 mb-4">
          The idea of proxy contracts came to life with the <a href="https://github.com/anon-real/ergo-assembler" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Assembler</a> which helped dApp developments like <a href="https://ergoauctions.org/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Auction House</a>, <a href="https://ergoutils.org/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoUtils</a>, and <a href="https://sigmausd.io/#/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">SigmaUSD web interface</a> despite not having a wallet-bridge like MetaMask (Ethereum wallet) in the ecosystem.
        </p>
        <p className="text-gray-300 mb-4">
          During this time, the structure of proxy contracts evolved as some malicious users tried to take advantage of some minor vulnerabilities, mostly in the <a href="https://sigmausd.io/#/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">SigmaUSD dApp</a>.
        </p>
      </div>

      {/* The Structure */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-orange-400">The Structure</h2>
        </div>
        <p className="text-gray-300 mb-4">
          In the beginning, the sole purpose of proxy contracts was to protect users from losing their funds (not to be cheated) when they outsource their assets to engage with some dApp. While the initial structure succeeded to achieve this, it proved to be not sufficient for the whole dApp infrastructure to work without malicious activities.
        </p>
        
        <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-red-300">Examples of dApp Infrastructure Violations</h3>
          </div>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>A malicious whale tried to take advantage of this simple structure by stealing UI fees from SigmaUSD web interface developers for some period of time.</li>
            <li>The same whale tried to prevent user's requests (minting/redeeming) from being executed by the assembler service by returning their funds as soon as funds were broadcasted in the network.</li>
            <li>Moreover, the whale tried to sell SigUSD/SigRSV tokens to users by imitating the bank box, taking 2.25% fee for each request which was supposed to go to the SigRSV holders (2%) and UI devs (0.25%).</li>
          </ul>
        </div>

        <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Design Requirements</h3>
          <p className="text-gray-300 mb-3">
            Generally, proxy contracts should be designed to:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>Prevent dApp developers or any other attacker from taking advantage of user's funds in any manner</li>
            <li>Preserve the integrity of the dApp by preventing attacks like the ones explained in the above examples</li>
          </ul>
        </div>
      </div>

      {/* Contract Example */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-indigo-400">Contract Structure Example</h2>
        </div>
        <p className="text-gray-300 mb-4">
          The below contract structure is proposed as an example for SigmaUSD minting operation:
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript">
    {contractCode}
  </CodeBlock>
        </div>
      </div>

      {/* Contract Parts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3 text-green-300">1. Proper Fund Usage</h3>
          <p className="text-gray-300 text-sm">
            Ensuring proper usage of user's funds, i.e., user will receive what he is paying for in proper amount without anyone being able to cheat.
          </p>
        </div>
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-300">2. dApp Integrity</h3>
          <p className="text-gray-300 text-sm">
            Ensuring the integrity of the dApp procedures and preventing malicious activities that could compromise the system.
          </p>
        </div>
        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3 text-purple-300">3. Refund Mechanism</h3>
          <p className="text-gray-300 text-sm">
            Ensuring that user will be refunded in any case of failures, whether assembler refuses to execute or the request fails.
          </p>
        </div>
      </div>

      {/* Important Parts Explanation */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Important Contract Parts</h2>
        <div className="space-y-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-cyan-300">Refund Authorization</h3>
            <div className="bg-neutral-800 border border-neutral-600 rounded-lg p-3 mb-3">
              <code className="text-orange-300">(PK("$assemblerNodeAddr") || HEIGHT &gt; $refundHeightThreshold)</code>
            </div>
            <p className="text-gray-300 text-sm">
              Either dApp's specific node can refund the user (at any time) or some time has to be passed for refunding without any secrets involved. This part prevents malicious users from sending refunds to users, preventing user's request (minting, in this case) from being executed.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-cyan-300">Timestamp Validation</h3>
            <div className="bg-neutral-800 border border-neutral-600 rounded-lg p-3 mb-3">
              <code className="text-orange-300">HEIGHT &lt; $timestampL</code>
            </div>
            <p className="text-gray-300 text-sm">
              This will result in different address every time the contract is compiled. This is useful from the UI perspective to be able to track user's requests in an address-specific manner.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-green-300">Security</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Protects users from losing funds</li>
              <li>Prevents malicious activities</li>
              <li>Ensures proper fund usage</li>
              <li>Maintains dApp integrity</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-green-300">Scalability</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Enables dApp scaling</li>
              <li>Controls execution order</li>
              <li>Prevents double-spending</li>
              <li>Manages multiple requests</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Related Projects</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://github.com/anon-real/ergo-assembler" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Assembler</a> - Transaction generation service</li>
              <li><a href="https://ergoauctions.org/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Auction House</a> - Auction platform</li>
              <li><a href="https://ergoutils.org/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoUtils</a> - Utility tools</li>
              <li><a href="https://sigmausd.io/#/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">SigmaUSD</a> - Stablecoin protocol</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Documentation</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://github.com/ergoplatform/eips/blob/master/eip-0017.md" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0017 Full Specification</a></li>
              <li><a href="https://ergoplatform.org/en/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Platform</a> - Official documentation</li>
              <li><a href="https://github.com/ergoplatform/ergo" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Core</a> - Reference implementation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 