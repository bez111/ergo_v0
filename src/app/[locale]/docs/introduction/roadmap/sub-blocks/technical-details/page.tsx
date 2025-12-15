"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, FileText } from "lucide-react";

export default function SubBlocksTechnicalDetailsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Input Blocks and Ordering Blocks – Technical Details
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Deep dive into the technical implementation of sub-blocks and ordering blocks in Ergo.
        </p>
        
        {/* Hero Button */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/introduction/roadmap/sub-blocks"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-lg font-medium text-white hover:bg-neutral-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Sub Blocks
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        {/* Background on the Legacy System */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Background on the Legacy System</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-400/10 rounded-xl p-6 border border-orange-400/20">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Previous Process</h3>
              <p className="text-gray-300">
                Transactions from wallets enter a common mempool. Miners select and include them in blocks produced approximately every 2 minutes. These blocks contain full proof-of-work (PoW), enforce consensus, and settle transactions.
              </p>
            </div>
            
            <div className="bg-red-400/10 rounded-xl p-6 border border-red-400/20">
              <h3 className="text-xl font-bold text-red-400 mb-4">Replace-By-Fee (RBF)</h3>
              <p className="text-gray-300">
                RBF allows a user to rebroadcast a transaction with a higher fee to increase inclusion chances or refund the sender if it fails. Under high network congestion, RBF can cause delays or confusion, particularly for dApps like SigmaUSD which rely on timely confirmations.
              </p>
            </div>
          </div>
        </section>

        {/* Limitations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Limitations</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-400/10 rounded-xl p-6 border border-yellow-400/20">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Unpredictable Confirmation Times</h3>
              <p className="text-gray-300">
                Due to natural PoW variance, a transaction might take anywhere from 2 to 10 minutes to confirm, even under normal conditions.
              </p>
            </div>
            
            <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/20">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Poor UX in Wallets and dApps</h3>
              <p className="text-gray-300">
                Users face friction from waiting, multiple signing attempts, and retries, which degrades trust and usability.
              </p>
            </div>
          </div>
        </section>

        {/* Introducing Input Blocks and Ordering Blocks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Introducing Input Blocks and Ordering Blocks</h2>
          
          <div className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-xl p-6 border border-blue-400/20 mb-6">
            <p className="text-gray-300">
              Following ideas in PRISM, Bitcoin-NG, Tailstorm, and Parallel Proof-of-Work, Ergo introduces a dual-block architecture via a soft fork that maintains backward compatibility.
            </p>
          </div>
        </section>

        {/* Redefining the Block Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Redefining the Block Structure</h2>
          
          <div className="bg-indigo-400/10 rounded-xl p-6 border border-indigo-400/20 mb-6">
            <p className="text-gray-300 mb-4">In traditional Ergo:</p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-cyan-300 mb-4">
              H(b) &lt; T
            </div>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• <code className="text-cyan-300">H(b)</code> is the hash of the block header under Autolykos</li>
              <li>• <code className="text-cyan-300">T</code> is the target value for PoW</li>
              <li>• Difficulty <code className="text-cyan-300">D = 2^256 / T</code>, adjusted to maintain ~2-minute block intervals</li>
            </ul>
            <p className="text-gray-300 mb-4">
              This rule continues to define <strong>ordering blocks</strong>, but Ergo now introduces <strong>input blocks</strong> with a lower difficulty threshold:
            </p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-cyan-300 mb-4">
              H(ib) &lt; t   where   t = T / 64
            </div>
            <p className="text-gray-300">
              This allows miners to produce approximately one input block every second, on average, for each ordering block cycle.
            </p>
          </div>
        </section>

        {/* The Role of Superblocks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">The Role of Superblocks</h2>
          
          <div className="bg-green-400/10 rounded-xl p-6 border border-green-400/20">
            <p className="text-gray-300 mb-4">
              While input blocks and ordering blocks focus on real-time transaction propagation and consensus anchoring, <strong>superblocks</strong> enable efficient long-range proofs and light client support via NiPoPoWs.
            </p>
            <p className="text-gray-300 mb-4">A level-<code className="text-cyan-300">n</code> superblock must satisfy:</p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-cyan-300 mb-4">
              H(S) &lt; T / 2^n
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Every superblock is a valid ordering block</li>
              <li>• Higher-level superblocks are rarer and used in succinct chain proofs</li>
              <li>• Useful for mobile wallets and sidechains needing trust-minimized verification</li>
            </ul>
          </div>
        </section>

        {/* Input Blocks and Their Mechanics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Input Blocks and Their Mechanics</h2>
          
          <div className="space-y-6">
            <div className="bg-teal-400/10 rounded-xl p-6 border border-teal-400/20">
              <h3 className="text-xl font-bold text-teal-400 mb-4">Ordering Blocks</h3>
              <p className="text-gray-300">
                Full PoW blocks that anchor consensus, produced every ~2 minutes. They finalize the inclusion of input blocks and distribute rewards.
              </p>
            </div>
            
            <div className="bg-pink-400/10 rounded-xl p-6 border border-pink-400/20">
              <h3 className="text-xl font-bold text-pink-400 mb-4">Input Blocks (Sub-blocks)</h3>
              <p className="text-gray-300">
                Low-difficulty blocks generated approximately every second, used for fast transaction propagation. They are not consensus anchors but allow for near-instant detection of transaction inclusion.
              </p>
            </div>
            
            <div className="bg-violet-400/10 rounded-xl p-6 border border-violet-400/20">
              <div className="bg-black/30 rounded-lg p-4 font-mono text-cyan-300 mb-4">
                ordering block → input block → input block → input block → ordering block → input block → ...
              </div>
              <p className="text-gray-300">
                Each ordering block is valid as an input block, but not vice versa
              </p>
            </div>
          </div>
        </section>

        {/* Transaction Classes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Transaction Classes</h2>
          
          <div className="space-y-6">
            <div className="bg-emerald-400/10 rounded-xl p-6 border border-emerald-400/20">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">First-Class Transactions</h3>
              <p className="text-gray-300">
                Deterministic and miner-independent, these transactions yield consistent validation across all miners and can safely be included in input blocks only.
              </p>
            </div>
            
            <div className="bg-amber-400/10 rounded-xl p-6 border border-amber-400/20">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Second-Class Transactions</h3>
              <p className="text-gray-300">
                May rely on miner-specific data (timestamps, pubkeys, etc.) and are included in both input and ordering blocks to ensure consistency.
              </p>
            </div>
          </div>
        </section>

        {/* Merkle Trees and Digest Extensions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Merkle Trees and Digest Extensions</h2>
          
          <div className="bg-slate-400/10 rounded-xl p-6 border border-slate-400/20">
            <p className="text-gray-300 mb-4">Miners maintain Merkle roots for:</p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• All first-class transactions since the last ordering block</li>
              <li>• Transactions in each individual input block</li>
            </ul>
            <p className="text-gray-300">
              These roots are embedded in block header extensions to enable efficient proof construction and light client validation.
            </p>
          </div>
        </section>

        {/* Block Propagation Protocol */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Block Propagation Protocol</h2>
          
          <div className="space-y-6">
            <div className="bg-sky-400/10 rounded-xl p-6 border border-sky-400/20">
              <h3 className="text-xl font-bold text-sky-400 mb-4">Header Announcements</h3>
              <p className="text-gray-300">
                Each input block header is announced immediately, along with its parent input block ID.
              </p>
            </div>
            
            <div className="bg-lime-400/10 rounded-xl p-6 border border-lime-400/20">
              <h3 className="text-xl font-bold text-lime-400 mb-4">Verification</h3>
              <p className="text-gray-300">
                Peers request introspection messages (similar to Compact Blocks in Bitcoin) to verify Merkle digests without downloading full block data.
              </p>
            </div>
            
            <div className="bg-rose-400/10 rounded-xl p-6 border border-rose-400/20">
              <h3 className="text-xl font-bold text-rose-400 mb-4">Cut-through Propagation</h3>
              <p className="text-gray-300">
                Redundant data across input blocks is eliminated to optimize bandwidth and speed.
              </p>
            </div>
          </div>
        </section>

        {/* Incentives and Rewards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Incentives and Rewards</h2>
          
          <div className="space-y-6">
            <div className="bg-fuchsia-400/10 rounded-xl p-6 border border-fuchsia-400/20">
              <h3 className="text-xl font-bold text-fuchsia-400 mb-4">Input Blocks</h3>
              <p className="text-gray-300">
                Miners collect transaction fees from first-class transactions included in input blocks.
              </p>
            </div>
            
            <div className="bg-orange-400/10 rounded-xl p-6 border border-orange-400/20">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Ordering Blocks</h3>
              <p className="text-gray-300">
                Miners earn full block rewards, second-class transaction fees, and storage rent/emission rewards.
              </p>
            </div>
          </div>
        </section>

        {/* Upgrade Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Upgrade Process</h2>
          
          <div className="bg-blue-400/10 rounded-xl p-6 border border-blue-400/20 mb-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Soft Fork Activation</h3>
            <p className="text-gray-300 mb-4">
              Backward-compatible upgrade. Legacy nodes continue to process ordering blocks. Input blocks are only utilized after 90% of hashpower adopts the upgrade.
            </p>
            <h4 className="text-lg font-semibold text-blue-300 mb-3">Steps:</h4>
            <ol className="text-gray-300 space-y-2 list-decimal list-inside">
              <li>Introduce input blocks alongside ordering blocks</li>
              <li>Upgrade mining software</li>
              <li>Adjust transaction validation logic and fee scripts</li>
              <li>Update dApp interfaces for faster feedback</li>
              <li>Enable sidechain commitments within input blocks</li>
            </ol>
          </div>
        </section>

        {/* Security Considerations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Security Considerations</h2>
          
          <div className="space-y-6">
            <div className="bg-red-400/10 rounded-xl p-6 border border-red-400/20">
              <h3 className="text-xl font-bold text-red-400 mb-4">Input Block Validation</h3>
              <p className="text-gray-300">
                All ordering blocks must validate preceding input blocks. Invalid transactions are not finalized.
              </p>
            </div>
            
            <div className="bg-yellow-400/10 rounded-xl p-6 border border-yellow-400/20">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Dual Confirmation Model</h3>
              <p className="text-gray-300">
                Input blocks offer fast, provisional feedback. Final settlement still relies on inclusion in an ordering block.
              </p>
            </div>
          </div>
        </section>

        {/* TLDR */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">TLDR</h2>
          
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl p-6 border border-cyan-400/20">
            <p className="text-gray-300">
              Input blocks provide rapid, low-cost transaction propagation (~1s), greatly improving user feedback without altering the security guarantees of Ergo's existing PoW system. Ordering blocks retain finality and economic incentives, while superblocks support long-range verification. This architecture balances performance, security, and decentralization.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 