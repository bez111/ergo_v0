"use client";

import React from "react";
import { 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  ExternalLink,
  ChevronRight,
  GitBranch,
  Globe,
  Lock,
  ArrowLeftRight
} from "lucide-react";
import Link from "next/link";

export default function SingleTxSwapPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Single Transaction Swap
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Single Transaction Swap is a multisig trustless escrow service operating on the Ergo blockchain. It provides a secure platform for users to swap NFTs and tokens with others in a peer-to-peer manner.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/docs/ecosystem/financial/dex" className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105">
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DEX
          </Link>
          <a href="https://single-tx-swap.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700">
            <Globe className="w-5 h-5 mr-2" /> Single TX Swap
          </a>
        </div>
      </div>

      {/* Overview Card */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-green-400" /> Platform Overview
        </h2>
        <p className="text-gray-300 mb-4">
          Single Transaction Swap is a multisig trustless escrow service operating on the Ergo blockchain. It provides a secure platform for users to swap NFTs and tokens with others. If you've found a trading partner, for instance, on Discord, you can initiate a trading session on Single Transaction Swap and share a link to your private trading room with them.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Trustless Escrow:</b> Multisig trustless escrow service for secure peer-to-peer trading</li>
          <li><b>NFT & Token Swaps:</b> Support for both NFTs and tokens in a single transaction</li>
          <li><b>Private Trading Rooms:</b> Create private trading sessions with shareable links</li>
          <li><b>Asset Verification:</b> Built-in verification system for authenticating assets</li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" /> Asset Verification
          </h3>
          <p className="text-gray-300 mb-2">The platform includes asset verification, allowing users to confirm the authenticity of NFTs and tokens before completing a swap, ensuring secure and trustworthy transactions.</p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-green-400" /> Transaction Summary
          </h3>
          <p className="text-gray-300 mb-2">Users receive a clear summary of the transaction details, ensuring transparency and confidence before finalizing the swap with complete visibility into the exchange.</p>
        </div>
      </div>

      {/* Technical Details Accordion */}
      <div className="mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <details className="group">
            <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
              <span className="inline-block">
                <Lock className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
              </span>
              <span>Security Features & Future Enhancements</span>
              <span className="ml-auto text-xs text-gray-400 group-open:text-cyan-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 pt-2 text-gray-300 text-base">
              <h4 className="font-semibold text-cyan-400 mb-2">How It Works</h4>
              <p className="text-gray-300 mb-4">
                When you find a trading partner (e.g., on Discord), you can initiate a trading session on Single Transaction Swap and share a link to your private trading room with them. The platform uses multisig technology to ensure that both parties must agree to the transaction before it can be completed.
              </p>

              <h4 className="font-semibold text-cyan-400 mb-2">Security Features</h4>
              <ul className="list-disc pl-6 text-gray-300 text-base space-y-2 mb-4">
                <li><b>Multisig Technology:</b> Both parties must agree to complete the transaction</li>
                <li><b>Trustless Escrow:</b> No need to trust a third party - the smart contract handles the escrow</li>
                <li><b>Asset Verification:</b> Built-in system to verify the authenticity of NFTs and tokens</li>
                <li><b>Private Trading Rooms:</b> Secure, private sessions for each trading pair</li>
              </ul>

              <h4 className="font-semibold text-cyan-400 mb-2">Future Enhancements</h4>
              <p className="text-gray-300 mb-4">
                The platform is actively being developed, with future enhancements planned to further improve user experience and functionality. The development team is committed to continuous improvement and feature expansion.
              </p>
            </div>
          </details>
        </div>
      </div>

      {/* In a Nutshell */}
      <div className="bg-gradient-to-r from-green-400/10 to-cyan-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">In a Nutshell</h3>
        <p className="text-gray-300 mb-4">Single Transaction Swap represents a secure and user-friendly solution for peer-to-peer trading on the Ergo blockchain. By leveraging multisig technology and trustless escrow, it eliminates the need for trusted intermediaries while providing a safe environment for NFT and token exchanges.</p>
      </div>
    </>
  );
} 