"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, ExternalLink, CheckCircle, Circle, 
  GitBranch, FileText, Github, Star, AlertCircle
} from "lucide-react";

export default function EIPsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Ergo Improvement Proposals (EIPs)
      </h1>

      <div className="mb-8">
        <Link
          href="/docs/developers/infrastructure/node/protocol/p2p-protocol-overview"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronRight className="w-5 h-5 mr-2" /> Back to P2P Overview
        </Link>
      </div>

      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-400" /> What are EIPs?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ergo Improvement Proposals (EIPs) are a set of guidelines and standards designed for the continuous improvement of Ergo. These proposals encompass a wide range of aspects, including but not limited to, core protocol specifications, client APIs, dApp/contract standards, and more.
          </p>
        </section>

        {/* Implemented EIPs Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" /> Implemented EIPs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> EIP-0001: UTXO-Set Scanning Wallet API
              </h3>
              <p className="text-gray-300 mb-4">
                This EIP focuses on extending the wallet to serve the needs of external applications by providing a flexible scanning interface.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  Implemented
                </span>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> EIP-0020: ErgoPay
              </h3>
              <p className="text-gray-300 mb-4">
                An interaction protocol between wallet application and dApp for creating, signing and sending Ergo transactions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  Implemented
                </span>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> EIP-0037: Tweaking Difficulty Adjustment Algorithm
              </h3>
              <p className="text-gray-300 mb-4">
                This EIP proposes changes to make the current difficulty readjustment more reactive and smoother.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  Implemented
                </span>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> EIP-0027: Emission Retargeting Soft-Fork
              </h3>
              <p className="text-gray-300 mb-4">
                This EIP proposes an amendment to the emission schedule to ensure the long-term sustainability of the mining protocol.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  Implemented
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" /> Resources & Documentation
          </h2>
          <p className="text-gray-300 mb-6">
            To gain a better understanding of the structure and formatting of EIPs, we encourage you to review the existing EIPs on the 🥇 <strong>EIP Repository on GitHub</strong> or within the documentation. This will provide you with a clear picture of the expectations and standards associated with EIPs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/ergoplatform/eips"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" /> EIP Repository on GitHub
            </a>
            <a
              href="https://docs.ergoplatform.com/tags/#eip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> EIP Documentation
            </a>
          </div>
        </section>

        {/* Open EIPs Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Circle className="w-6 h-6 text-cyan-400" /> Open EIPs
          </h2>
          <p className="text-gray-300 mb-6">
            See the <a href="https://github.com/ergoplatform/eips/pulls" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Pull requests</a> section for full details on the open EIPs, some of the most notable are:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Circle className="w-5 h-5 text-cyan-400" /> Ready to merge/implemented PRs #86
              </h3>
              <p className="text-gray-300 mb-4">
                Pull requests that are ready for review and implementation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                  In Review
                </span>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Circle className="w-5 h-5 text-cyan-400" /> EIP-0042: Multi-Signature Wallet
              </h3>
              <p className="text-gray-300 mb-4">
                Proposal for implementing multi-signature wallet functionality.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                  In Progress
                </span>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Circle className="w-5 h-5 text-cyan-400" /> [WIP] EIP-50: Sigma 6.0
              </h3>
              <p className="text-gray-300 mb-4">
                Work in progress for Sigma 6.0 implementation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                  WIP
                </span>
                <a
                  href="https://github.com/ergoplatform/eips/pull/100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-sm"
                >
                  View PR #100
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hardfork Wishlist Section */}
        <section className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-orange-400" /> Hardfork Wishlist
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-orange-300">
                Token Creation Limitation
              </h3>
              <p className="text-gray-300 mb-3">
                Why does the limitation of 1 new token per transaction exist?
              </p>
              <a
                href="https://github.com/ergoplatform/ergo/issues/2013"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:underline"
              >
                <ExternalLink className="w-4 h-4 mr-1" /> View Issue #2013
              </a>
            </div>
          </div>
        </section>

        {/* Contributing Section */}
        <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-green-400" /> Contributing to EIPs
          </h2>
          <p className="text-gray-300 mb-4">
            Want to contribute to Ergo's development? Consider proposing an EIP or reviewing existing proposals.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/ergoplatform/eips"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 rounded-xl font-semibold text-black hover:bg-green-600 transition-transform hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" /> Contribute to EIPs
            </a>
            <a
              href="https://github.com/ergoplatform/ergo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <GitBranch className="w-5 h-5 mr-2" /> Ergo Core Repository
            </a>
          </div>
        </section>
      </div>
    </>
  );
} 