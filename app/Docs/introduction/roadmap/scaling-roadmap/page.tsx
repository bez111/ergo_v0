"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RoadmapDiscussionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Scaling Roadmap
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Join our discussions on scaling on <a href="https://t.me/ErgoLayer2" className="text-blue-400 hover:text-blue-300 underline">Telegram</a> or <a href="https://discord.gg/nr4JRnhAyV" className="text-blue-400 hover:text-blue-300 underline">#layer2 on discord</a>. We welcome all insights and contributions.
        </p>
        
        {/* Hero Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/introduction/roadmap"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-lg font-semibold text-white hover:bg-neutral-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Roadmap
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        {/* Current Focus */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Current Focus</h2>
          
          <div className="bg-green-400/10 rounded-xl p-6 border border-green-400/20">
            <p className="text-gray-300">
              With the successful integration of UTXO set snapshots and Non-Interactive Proofs of Proof-of-Work (NiPoPoWs) for ultra-fast bootstrapping in the pruned full node, our focus has now shifted towards optimizing this implementation. We are also exploring ways to further increase block limits for miners, given the live status of the pruned full node.
            </p>
          </div>
        </section>

        {/* Recent Developments */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Developments</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-400/10 rounded-xl p-4 border border-blue-400/20">
              <p className="text-gray-300"><strong className="text-blue-400">(TBA)</strong> Planning for Node V6 & scalability improvements</p>
            </div>
            <div className="bg-yellow-400/10 rounded-xl p-4 border border-yellow-400/20">
              <p className="text-gray-300"><strong className="text-yellow-400">(WIP)</strong> Development of SPV Client</p>
            </div>
            <div className="bg-green-400/10 rounded-xl p-4 border border-green-400/20">
              <p className="text-gray-300">Pruned Full Node is <strong className="text-green-400">now live</strong></p>
            </div>
            <div className="bg-purple-400/10 rounded-xl p-4 border border-purple-400/20">
              <p className="text-gray-300">Release of <strong className="text-purple-400">Node V5</strong></p>
            </div>
            <div className="bg-cyan-400/10 rounded-xl p-4 border border-cyan-400/20">
              <p className="text-gray-300">GetBlok released the <strong className="text-cyan-400">Plasma Library</strong></p>
            </div>
            <div className="bg-orange-400/10 rounded-xl p-4 border border-orange-400/20">
              <p className="text-gray-300"><strong className="text-orange-400">Plasma Tutorials</strong> have been published</p>
            </div>
          </div>
        </section>

        {/* Roadmaps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Roadmaps</h2>
          
          <div className="bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-xl p-6 border border-indigo-400/20 mb-8">
            <h3 className="text-xl font-bold text-indigo-400 mb-6">Ergo Design and Implementation Roadmap</h3>
            
            <div className="space-y-6">
              {/* Phase 1 */}
              <div className="bg-blue-400/10 rounded-lg p-4 border border-blue-400/20">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Phase 1: Foundations</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Start with the basic design of Ergo as digital gold (commodity money)</li>
                  <li>• Introduce programmability features including:</li>
                  <li className="ml-6">- Crypto contracts</li>
                  <li className="ml-6">- Stealth addresses</li>
                  <li className="ml-6">- Arbitrarily complex signatures</li>
                  <li className="ml-6">- Mixing schemes</li>
                  <li>• Position Ergo as a basis for unstoppable, grassroots economies, serving as a decentralized central bank digital currency (CBDC) for the people</li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="bg-green-400/10 rounded-lg p-4 border border-green-400/20">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Phase 2: Initial Experiments</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Conduct initial experiments to test functionality and user engagement</li>
                  <li>• Evaluate the outcomes considering the initial motivations</li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="bg-yellow-400/10 rounded-lg p-4 border border-yellow-400/20">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">Phase 3: Defining Adoption</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Clarify the term "adoption" as it is often ambiguous in industry discussions</li>
                  <li>• Develop metrics or KPIs to measure adoption success</li>
                </ul>
              </div>

              {/* Phase 4 */}
              <div className="bg-purple-400/10 rounded-lg p-4 border border-purple-400/20">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Phase 4: Scaling and Optimization</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Peer-to-peer (P2P) level optimizations and rework</li>
                  <li>• Consider pre-block commitments to transaction ordering (sub-blocks)</li>
                  <li>• Aim to increase transactions per second (TPS) while maintaining security</li>
                </ul>
                
                <div className="mt-4 bg-red-400/10 rounded-lg p-3 border border-red-400/20">
                  <h5 className="text-md font-semibold text-red-400 mb-2">Constraints for Scaling</h5>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Limitations include requirements for a flat P2P network running on commodity hardware</li>
                    <li>• No use of centralized or "bankster" data centers for scalability</li>
                  </ul>
                </div>
              </div>

              {/* Phase 5 */}
              <div className="bg-cyan-400/10 rounded-lg p-4 border border-cyan-400/20">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Phase 5: Offloading Solutions</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Propose options for offloading transactions to Layer 2 or sidechains, if not already implemented</li>
                  <li>• Introduce "Know Your Algorithm" (KYA) as a way to explain security in offloading options in a concise and understandable manner</li>
                </ul>
              </div>

              {/* Phase 6 */}
              <div className="bg-orange-400/10 rounded-lg p-4 border border-orange-400/20">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Phase 6: Convergence</h4>
                <p className="text-gray-300">
                  Multiple developments in scaling, optimization, and offloading are expected to converge, culminating in a comprehensive solution for widespread adoption.
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-gray-400 italic">
              Summarised from <a href="https://t.me/ergoplatform/419168" className="text-blue-400 hover:text-blue-300 underline">Kushti, 7 Aug, 2023</a>
            </div>
          </div>
        </section>

        {/* Historical References */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Historical References</h2>
          
          <div className="bg-slate-400/10 rounded-xl p-6 border border-slate-400/20">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 font-mono text-sm">(Nov 22)</span>
                <a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/4?u=glasgowm" className="text-blue-400 hover:text-blue-300 underline">A Scalability Plan for Ergo</a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 font-mono text-sm">(Dec 21)</span>
                <a href="https://www.reddit.com/r/ergonauts/comments/qfjhw4/ergo_protocol_research_and_client_development/" className="text-blue-400 hover:text-blue-300 underline">Ergo protocol research and client development roadmap</a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 font-mono text-sm">(Sep 21)</span>
                <a href="https://www.ergoforum.org/t/long-term-vision-for-ergo/2629" className="text-blue-400 hover:text-blue-300 underline">Long-term vision for Ergo</a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 font-mono text-sm">(Jul 21)</span>
                <a href="https://www.ergoforum.org/t/network-congestion-on-jul-10th-2021/1945" className="text-blue-400 hover:text-blue-300 underline">Network congestion on Jul 10th, 2021</a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 font-mono text-sm">(May 20)</span>
                <a href="https://www.ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/231" className="text-blue-400 hover:text-blue-300 underline">Protecting mempool from computationally heavy transactions</a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 font-mono text-sm">(May 20)</span>
                <a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226" className="text-blue-400 hover:text-blue-300 underline">A Scalability Plan for Ergo</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 