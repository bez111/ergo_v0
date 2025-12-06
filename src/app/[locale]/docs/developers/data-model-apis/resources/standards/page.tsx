"use client";

/* eslint-disable @next/next/no-html-link-for-pages */

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Smartphone, CreditCard, Zap, FileText, Settings, Globe, Code } from "lucide-react";

export default function StandardsPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Standards
      </h1>

      {/* Introduction */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-indigo-400">Ergo Improvement Proposals (EIPs)</h2>
        </div>
        <p className="text-gray-300">
          Ergo Improvement Proposals (EIPs) define standards for the Ergo platform, including core protocol specifications, client APIs, and contract standards. These standards ensure interoperability and provide a foundation for building robust applications on the Ergo blockchain.
        </p>
      </div>

      {/* Back Button */}
      <Link href="/docs/developers/data-model-apis/resources" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Resources</span>
        </button>
      </Link>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Proxy Contracts */}
        <Link href="/docs/developers/data-model-apis/resources/standards/eip17" className="group">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-blue-400">Proxy Contracts</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              EIP-17 defines a standard for proxy contracts that enable advanced fund management and logic delegation. Proxy contracts act as intermediaries, allowing for complex transaction patterns and enhanced security.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Advanced fund management</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Enhanced security patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span>Logic delegation</span>
              </div>
            </div>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        {/* ErgoPay Protocol */}
        <Link href="/docs/developers/data-model-apis/resources/standards/eip20" className="group">
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-green-400">ErgoPay Protocol</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              EIP-20 defines the ErgoPay protocol for seamless interaction between mobile wallets and dApps. This standard enables QR code-based transactions and cross-platform compatibility.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>Mobile wallet integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Cross-platform support</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                <span>QR code transactions</span>
              </div>
            </div>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        {/* Payment Request URI */}
        <Link href="/docs/developers/data-model-apis/resources/standards/eip25" className="group">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-purple-400">Payment Request URI</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              EIP-25 defines a standard URI format for payment requests, enabling seamless integration between wallets and applications. This standard supports multi-asset payments and parameterized transactions.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                <span>Standard payment format</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>URI-based initiation</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span>Multi-asset support</span>
              </div>
            </div>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        {/* Just-In-Time Costing */}
        <Link href="/docs/developers/data-model-apis/resources/standards/jitc" className="group">
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-orange-400">Just-In-Time Costing</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              JITC is a cost estimation mechanism that provides real-time resource usage analysis for ErgoScript execution. This ensures predictable transaction costs and prevents resource exhaustion.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Real-time cost estimation</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span>Resource usage analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Predictable costs</span>
              </div>
            </div>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-orange-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>
      </div>

      {/* Additional Standards */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Additional Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Asset Standards</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="/docs/developers/eip4" className="text-orange-400 hover:underline">EIP-4: Asset Standard</a> - Token creation and management</li>
              <li><a href="/docs/developers/eip21" className="text-orange-400 hover:underline">EIP-21: Token Verification</a> - Token authenticity verification</li>
              <li><a href="/docs/developers/eip22" className="text-orange-400 hover:underline">EIP-22: Auction Contract</a> - Standard auction implementation</li>
              <li><a href="/docs/developers/eip24" className="text-orange-400 hover:underline">EIP-24: Artwork Contract</a> - Digital artwork management</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Protocol Standards</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="/docs/developers/data-model-apis/babel-fees" className="text-orange-400 hover:underline">EIP-31: Babel Fees</a> - Token-based fee payment</li>
              <li><a href="/docs/developers/eip5" className="text-orange-400 hover:underline">EIP-5: Contract Templates</a> - Reusable contract patterns</li>
              <li><a href="/docs/developers/eip6" className="text-orange-400 hover:underline">EIP-6: Multi-Stage Contracts</a> - Complex transaction flows</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Standards Development */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Standards Development</h2>
        <p className="text-gray-300 mb-4">
          Ergo Improvement Proposals follow a structured process to ensure quality and community consensus. Standards are developed through open discussion and rigorous review.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-cyan-300">Draft Phase</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Initial proposal submission</li>
              <li>Community feedback collection</li>
              <li>Technical specification review</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-cyan-300">Review Phase</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Security analysis</li>
              <li>Implementation testing</li>
              <li>Performance evaluation</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-cyan-300">Final Phase</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Community voting</li>
              <li>Documentation completion</li>
              <li>Implementation deployment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Documentation</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://github.com/ergoplatform/eips" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP Repository</a> - Official EIP repository</li>
              <li><a href="https://ergoplatform.org/en/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Platform</a> - Official documentation</li>
              <li><a href="https://github.com/ergoplatform/ergo" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Core</a> - Reference implementation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Community</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://discord.gg/ergo" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Discord</a> - Community discussions</li>
              <li><a href="https://github.com/ergoplatform/eips/issues" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Issues</a> - EIP discussions</li>
              <li><a href="https://ergoplatform.org/en/blog/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Blog</a> - Latest updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 