import React from "react";
import {
  Shield,
  ExternalLink,
  BookOpen,
  Info,
  ChevronRight,
  Users,
  Zap,
  ArrowRight,
  ListChecks
} from "lucide-react";
import Link from "next/link";

export default function SigmajoinPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Shield className="w-8 h-8 text-cyan-400" /> Sigmajoin
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Sigmajoin is a next-generation privacy protocol for UTXO-based blockchains. Building on ZeroJoin, it introduces non-interactive, outsourceable mixing and enhanced privacy features for scalable, flexible, and user-friendly coin mixing.
        </p>
        <div className="flex flex-wrap gap-4 mb-2">
          <Link
            href="/Docs/ecosystem/privacy"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Privacy
          </Link>
          <a
            href="https://github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/mixer/doc/main.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Sigmajoin Whitepaper
          </a>
        </div>
      </div>

      {/* What is Sigmajoin */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> What is Sigmajoin?
        </h2>
        <p className="text-gray-300">
          Sigmajoin is a privacy protocol designed for UTXO-based blockchains, enhancing user anonymity. It builds on ZeroJoin (the protocol behind ErgoMixer), introducing non-interactive, outsourceable mixing, improved scalability, and flexible fee handling.
        </p>
      </div>

      {/* Example: Outsourceable Mixing */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-400" /> Example: Outsourceable Mixing
        </h2>
        <p className="text-gray-300 mb-2">
          With Sigmajoin, mixing can be outsourced to a third-party service ("mixer") in a trustless manner. Mixers cannot steal funds, and users benefit from stronger anonymity and easier fee handling.
        </p>
        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-4 mt-4">
          <span className="font-mono text-cyan-400">User → Mixer → Sigmajoin Pool (trustless, non-custodial)</span>
        </div>
      </div>

      {/* Comparison Table: ZeroJoin vs Sigmajoin */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ListChecks className="w-6 h-6 text-pink-400" /> ZeroJoin vs Sigmajoin
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-700">
              <th className="text-left py-3 px-4 font-bold text-cyan-400">Aspect</th>
              <th className="text-left py-3 px-4 font-bold text-orange-400">ZeroJoin (ErgoMixer)</th>
              <th className="text-left py-3 px-4 font-bold text-pink-400">Sigmajoin</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-neutral-800">
              <td className="py-3 px-4 font-semibold">Proofs Used</td>
              <td className="py-3 px-4">Proofs of knowledge of Diffie-Hellman tuples</td>
              <td className="py-3 px-4">Proofs of knowledge of Diffie-Hellman tuples</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="py-3 px-4 font-semibold">Interaction Level</td>
              <td className="py-3 px-4">Partially Non-interactive: Requires online presence for remixing</td>
              <td className="py-3 px-4">Non-interactive</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="py-3 px-4 font-semibold">Outsourceability</td>
              <td className="py-3 px-4">No, mixing cannot be outsourced</td>
              <td className="py-3 px-4">Yes, mixes can be outsourced to third-parties</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="py-3 px-4 font-semibold">Types of Boxes</td>
              <td className="py-3 px-4">2 (Half-Mix and Full-Mix): Limited scalability</td>
              <td className="py-3 px-4">More than 2: Better scalability, half-mix boxes eliminated</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="py-3 px-4 font-semibold">Stealth Withdraw</td>
              <td className="py-3 px-4">Supported</td>
              <td className="py-3 px-4">Supported</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="py-3 px-4 font-semibold">Fee Handling</td>
              <td className="py-3 px-4">Embedded Fee: Included in mix boxes</td>
              <td className="py-3 px-4">Outsourced Fee: Paid by third-party mixer</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* How Sigmajoin Works */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" /> How Sigmajoin Works
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>
            <span className="font-bold text-cyan-400">Deposit:</span> Users deposit coins into a special pool as mix-boxes (fixed denominations).
          </li>
          <li>
            <span className="font-bold text-cyan-400">Mix:</span> A third-party service or another user selects any two mix-boxes from the pool and mixes them. After mixing, two new mix-boxes are added back to the pool, concealing original ownership.
          </li>
          <li>
            <span className="font-bold text-cyan-400">Withdraw:</span> Users can withdraw their coins from the pool at any time.
          </li>
        </ol>
        <h3 className="font-bold text-pink-400 mt-6 mb-2">Steps for Mixing Boxes</h3>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>
            <span className="font-bold text-yellow-400">Select Two Boxes:</span> Choose any two mix-boxes from the pool.
          </li>
          <li>
            <span className="font-bold text-yellow-400">Re-randomise Public Key:</span> Perform a mathematical operation on the registers a and b of each selected mix-box.
          </li>
          <li>
            <span className="font-bold text-yellow-400">Validation:</span> Prove that the operations were done correctly. The new mix-boxes should look identical to an observer.
          </li>
        </ol>
        <p className="text-gray-400 mt-4 text-sm">
          For technical details and mathematical proofs, see the <a href="https://github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/mixer/doc/main.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Sigmajoin Whitepaper</a>.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" /> Outsourceability
          </h3>
          <p className="text-gray-300 mb-4">
            Mixing can be outsourced to a third-party service ("mixer") in a trustless manner. Mixers cannot steal funds, and users benefit from stronger anonymity and easier fee handling.
          </p>
          <a
            href="https://www.ergoforum.org/t/yet-another-mixing-protocol/3359/2?u=scalahub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-cyan-500 rounded-lg font-semibold text-black hover:bg-cyan-600 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" /> Outsource Mix
          </a>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-pink-400" /> Stealth Withdraw
          </h3>
          <p className="text-gray-300 mb-4">
            Sigmajoin allows transactions that appear to be mixes but are actually withdrawals, making it even harder to trace transactions and enhancing privacy.
          </p>
          <a
            href="https://www.ergoforum.org/t/yet-another-mixing-protocol/3359/3?u=scalahub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-pink-500 rounded-lg font-semibold text-black hover:bg-pink-600 transition-colors mt-2"
          >
            <ExternalLink className="w-4 h-4 mr-2" /> Stealth Transfer
          </a>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-orange-400" /> Outsourced Fee
          </h3>
          <p className="text-gray-300 mb-4">
            Mining fees can be paid by third-party mixers, simplifying the process for users and adding flexibility to the protocol.
          </p>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/mixer/doc/main.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-cyan-400 mb-2">Sigmajoin Whitepaper</h4>
            <p className="text-gray-300 text-sm">Read the full technical documentation and proofs.</p>
          </a>
          <a
            href="https://www.ergoforum.org/t/yet-another-mixing-protocol/3359/2?u=scalahub"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-pink-400 mb-2">Forum: Outsourceable Mix</h4>
            <p className="text-gray-300 text-sm">Discussion of outsourceable mixing in Sigmajoin.</p>
          </a>
          <a
            href="https://www.ergoforum.org/t/yet-another-mixing-protocol/3359/3?u=scalahub"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-pink-400 mb-2">Forum: Stealth Transfer</h4>
            <p className="text-gray-300 text-sm">How stealth transfers work in Sigmajoin.</p>
          </a>
        </div>
      </div>
    </div>
  );
} 