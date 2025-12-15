"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages */

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Clock, Zap, Cpu, TrendingUp, Shield, FileText, ExternalLink, Calculator, Layers } from "lucide-react";

export default function JITCPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Just-In-Time Costing (JITC)
      </h1>

      {/* Back Button */}
      <Link href="/docs/developers/data-model-apis/resources/standards" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Standards</span>
        </button>
      </Link>

      {/* Introduction */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <Calculator className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-purple-400">Introduction</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Discussions about transaction efficiency, scalability, and costing are common in the cryptocurrency space. For a blockchain technology to achieve long-term viability and widespread adoption, adaptability and scalability are crucial. Ergo's Protocol Reference Client 5.0.0 introduced significant advancements, offering substantial benefits to miners, developers, and users across the ecosystem, particularly regarding script execution costing.
        </p>
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-300">Key Concepts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-purple-300">Scalability</strong> refers to a blockchain's capacity to handle an increasing number of transactions. As a platform grows, transaction volume typically increases. Without effective scaling mechanisms, the network can become congested, leading to longer confirmation times.
              </p>
            </div>
            <div>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-purple-300">Costing</strong> refers to the computational expense associated with validating transactions and smart contracts. In Proof-of-Work blockchains like Ergo, every transaction incurs a fee, partly determined by its computational cost.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Context */}
      <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6 text-pink-400" />
          </div>
          <h2 className="text-2xl font-bold text-pink-400">Historical Context</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Historically, this cost has been estimated using either <strong>Ahead-of-Time (AOT)</strong> or <strong>Just-In-Time (JIT)</strong> methods. Until version 5.0.0, Ergo primarily used AOT costing, which estimates costs <em>before</em> script execution to prevent excessively resource-intensive scripts from overwhelming the network.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-pink-300">Ahead-of-Time (AOT)</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-sm">
              <li>Costs estimated before script execution</li>
              <li>Prevents resource-intensive scripts</li>
              <li>Used in Ergo before v5.0.0</li>
              <li>Conservative approach</li>
            </ul>
          </div>
          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-pink-300">Just-In-Time (JIT)</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-sm">
              <li>Costs calculated during execution</li>
              <li>More accurate cost measurement</li>
              <li>Introduced in Ergo v5.0.0</li>
              <li>Efficient approach</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hybrid Costing Model */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <Layers className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-blue-400">Ergo Protocol Reference Client 5.0.0 and Hybrid Costing</h2>
        </div>
        <p className="text-gray-300 mb-4">
          The release of Reference Client 5.0.0 introduced several network improvements, including a more efficient hybrid costing model (<a href="https://github.com/ergoplatform/eips/pull/79" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-39</a>). This enhances the network's user experience (UX) by allowing more efficient transaction processing within blocks, benefiting miners, developers, and users.
        </p>
        <p className="text-gray-300 mb-4">
          As mentioned, Ergo previously relied mainly on AOT costing. Reference Client 5.0.0 introduced a hybrid model combining AOT and JIT costing. For a detailed explanation, refer to the blog post: "<a href="https://ergoplatform.org/en/blog/2022-02-09-ergos-hybrid-method-for-counting-costs/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo's Hybrid Method for Counting Costs</a>".
        </p>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-300">Two-Stage Validation Process</h3>
          <p className="text-gray-300 mb-4">
            The hybrid costing model operates in two stages during transaction validation:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                <h4 className="text-lg font-semibold text-blue-300">Reduction Stage (JIT Costing)</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Each input's guarding script (ErgoTree) is reduced to its final sigma proposition (a cryptographic condition like <code className="bg-neutral-700 px-1 rounded">proveDlog(pk)</code> or <code className="bg-neutral-700 px-1 rounded">atLeast(2, Coll(pk1, pk2, pk3))</code>). The cost of this reduction phase is calculated using <strong>Just-In-Time (JIT)</strong> costing, meaning the cost is determined based on the actual operations performed during reduction.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                <h4 className="text-lg font-semibold text-blue-300">Cryptographic Verification Stage (AOT Costing)</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Once all input scripts are reduced to sigma propositions, the cost of verifying the required cryptographic proofs (e.g., signature checks) is calculated using <strong>Ahead-of-Time (AOT)</strong> costing. AOT costing for crypto operations is simple, fast, and predictable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Aggregation */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-green-400">Cost Aggregation and Block Validation</h2>
        </div>
        <p className="text-gray-300 mb-4">
          The costs from both stages are aggregated to determine the final cost of the transaction. This transaction cost is then added to the cumulative cost of the block being validated. A block is only valid if its total accumulated cost remains within the maximum allowed block budget.
        </p>
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-300">Security Benefits</h3>
          <p className="text-gray-300 mb-3">
            Cryptographic operations are significantly more resource-intensive than reduction operations, typically consuming around 80% of the verification time. Using AOT costing for the cryptographic stage ensures that denial-of-service attacks based on expensive crypto operations remain infeasible.
          </p>
          <p className="text-gray-300">
            The JIT costing applied during the reduction stage provides a more accurate measure of the actual computational work performed during script execution.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-teal-400/10 border border-teal-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-teal-400" />
          </div>
          <h2 className="text-2xl font-bold text-teal-400">Benefits of Hybrid Costing</h2>
        </div>
        <p className="text-gray-300 mb-4">
          This two-part costing method enables more efficient and accurate cost estimation compared to relying solely on AOT costing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-teal-300">For Users</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Potentially faster script execution times</li>
              <li>More accurate cost reflection</li>
              <li>Better transaction throughput</li>
              <li>Improved user experience</li>
            </ul>
          </div>
          <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-teal-300">For Developers</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>More efficient block space utilization</li>
              <li>Better cost predictability</li>
              <li>Enhanced script optimization</li>
              <li>Improved network scalability</li>
            </ul>
          </div>
        </div>
        <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4 mt-4">
          <h3 className="text-lg font-semibold mb-2 text-teal-300">Network Impact</h3>
          <p className="text-gray-300">
            As a result of these improvements in Reference Client 5.0.0, users and developers benefit from potentially faster script execution times (as costs more accurately reflect actual work) and more efficient utilization of block space. This allows blocks to potentially accommodate more transactions, thereby increasing network throughput.
          </p>
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
            <Cpu className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-indigo-400">Technical Implementation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-indigo-300">JIT Costing Process</h3>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-300 text-sm">
              <li>Script reduction to sigma propositions</li>
              <li>Real-time cost calculation</li>
              <li>Actual operation measurement</li>
              <li>Accurate cost reflection</li>
            </ol>
          </div>
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-indigo-300">AOT Costing Process</h3>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-300 text-sm">
              <li>Cryptographic proof verification</li>
              <li>Pre-calculated cost estimation</li>
              <li>Security-focused approach</li>
              <li>DoS attack prevention</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Official Documentation</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://github.com/ergoplatform/ergo/releases/tag/v5.0.0" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Release Page</a></li>
              <li><a href="https://ergoplatform.org/en/blog/2022-02-09-ergos-hybrid-method-for-counting-costs/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo's Hybrid Method Blog Post</a></li>
              <li><a href="https://github.com/ergoplatform/eips/pull/79" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-39 Implementation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Related Topics</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="/docs/developers/data-model-apis/composing/wallet-interaction/fees" className="text-orange-400 hover:underline">Transaction Fees</a></li>
              <li><a href="/docs/developers/data-model-apis/composing" className="text-orange-400 hover:underline">Transaction Composition</a></li>
              <li><a href="/docs/developers/ergoscript-languages" className="text-orange-400 hover:underline">ErgoScript Languages</a></li>
              <li><a href="/docs/technology/scaling" className="text-orange-400 hover:underline">Scaling Solutions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Features Summary */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-yellow-400" />
          </div>
          <h2 className="text-2xl font-bold text-yellow-400">Key Features Summary</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-yellow-300">Efficiency</h3>
            <p className="text-gray-300 text-sm">
              More accurate cost estimation leads to better resource utilization and improved transaction throughput.
            </p>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-yellow-300">Security</h3>
            <p className="text-gray-300 text-sm">
              AOT costing for cryptographic operations prevents DoS attacks while maintaining network security.
            </p>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-yellow-300">Scalability</h3>
            <p className="text-gray-300 text-sm">
              Hybrid approach allows blocks to accommodate more transactions, increasing overall network capacity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 