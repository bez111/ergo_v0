"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, GitBranch, Network, Layers, Database, GitMerge, FileText } from "lucide-react";

export default function MultiStageProtocolsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <GitBranch className="w-10 h-10 text-purple-400" />
        Multi-Stage Protocols
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

      <div className="space-y-6">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="text-gray-300 space-y-4">
            <p>
              Unspent Transaction Outputs (UTXOs) are known for their scalability and reduced error rates. However, Ethereum's account model offers the advantages of persistent storage and a shared global context. <em>Multi-Stage Contracts</em> utilize a technique involving <Link href="/Docs/developers/ergoscript-languages/multi-stage-protocol/tx-tree" className="text-cyan-400 hover:underline"><em>transaction trees</em></Link> to mimic persistent storage in UTXO-based systems. This is achieved by interlinking multiple UTXOs, each containing snippets of code, to create extensive multi-stage protocols. This approach introduces <em>on-chain computations</em> and enables the <strong>execution of parallel actions within smart contracts</strong>.
            </p>
            <p>
              This method offers functionality akin to Ethereum's accounts but without the associated overhead.
            </p>
            <p>
              For additional insights, refer to the <em>Multi-Stage Contracts in the UTXO Model</em> <a href="https://storage.googleapis.com/ergo-cms-media/docs/paper_26.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">(Paper)</a> and <a href="https://www.youtube.com/watch?v=g3FlM_WOwBU" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">(Video Presentation)</a>.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Examples</h2>
          <div className="text-gray-300">
            <p>
              The concept is illustrated through various examples, including contracts for a <Link href="/Docs/developers/ergoscript-languages/multi-stage-protocol/rock-paper-scissor" className="text-cyan-400 hover:underline">Rock Paper Scissors game with provable fairness</Link>, a <Link href="/Docs/developers/ergoscript-languages/multi-stage-protocol/reversible-address" className="text-cyan-400 hover:underline">Reversible Address with anti-theft features</Link>, and a <Link href="/Docs/developers/ergoscript-languages/multi-stage-protocol/ico" className="text-cyan-400 hover:underline">comprehensive ICO</Link>.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Tutorials & Guides</h2>
          <div className="text-gray-300">
            <p className="mb-4">Explore the following resources for a deeper understanding of Multi-Stage Protocols:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a href="https://www.ergoforum.org/t/secure-user-entry-bootstrap-funneling-in-multi-stage-protocols/228" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  Ensuring Secure User Entry and Bootstrap Funneling in Multi-Stage Protocols
                </a>
              </li>
              <li>
                <a href="https://www.ergoforum.org/t/multi-stage-protocol-off-chain-on-chain-development-workflow/269" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  Workflow for Multi-Stage Protocol Development: Off-Chain and On-Chain
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">(Note: The third link is a duplicate and has been omitted to improve the page's clarity and usefulness.)</p>
          </div>
        </section>

        {/* Cards Grid */}
        <section>
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Key Concepts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/Docs/developers/ergoscript-languages/multi-stage-protocol/transaction-chains"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <GitBranch className="w-6 h-6 text-orange-400" />
                  Transaction Chains
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Linear sequences of transactions forming a chain of state transitions
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/multi-stage-protocol/transaction-trees"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Network className="w-6 h-6 text-green-400" />
                  Transaction Trees
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Branching structures enabling parallel execution paths
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/multi-stage-protocol/transaction-graphs"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <GitMerge className="w-6 h-6 text-blue-400" />
                  Transaction Graphs
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Complex interconnected transaction networks
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/multi-stage-protocol/context-enrichment"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Database className="w-6 h-6 text-purple-400" />
                  Context Enrichment
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Enhancing transaction context with additional data
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/multi-stage-protocol/multi-stage-transactions"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-cyan-400" />
                  Multi-Stage Transactions
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Building complex protocols with multiple transaction stages
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>

            <Link
              href="/Docs/developers/ergoscript-languages/multi-stage-protocol/examples"
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-yellow-400" />
                  Examples
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Real-world implementations and use cases
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 