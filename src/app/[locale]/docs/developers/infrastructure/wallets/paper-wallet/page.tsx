"use client";

import React from "react";
import {
  FileText,
  ExternalLink,
  Info,
  ChevronRight
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function PaperWalletPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Paper Wallet
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The <a href="https://ergopaperwallet.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Ergo Paper Wallet</a> offers a straightforward and lightweight solution for securely managing tokens within the Ergo ecosystem. As a self-custodial option, it empowers users with full control over their assets.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/wallets"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Wallets
          </Link>
          <a
            href="https://anon-br.github.io/ergo-paper-wallet/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> GitHub Repository
          </a>
        </div>
      </div>

      {/* Video Guide Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-orange-400" /> Comprehensive Video Guide
        </h2>
        <p className="text-gray-300 mb-4">
          Discover how to utilize the Ergo Paper Wallet effectively by viewing the detailed video tutorial.
        </p>
        <a
          href="https://www.youtube.com/watch?v=0qTasq-nSNw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-orange-500 rounded-lg text-black font-semibold hover:bg-orange-600 transition-colors"
        >
          <ExternalLink className="w-4 h-4 mr-2" /> Watch Tutorial
        </a>
      </div>

      {/* How to Use Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-cyan-400" /> How to Use
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-4">
          <li>Download the standalone HTML file from the <a href="https://anon-br.github.io/ergo-paper-wallet/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">GitHub repository</a>.</li>
          <li>Disconnect from the internet for maximum security.</li>
          <li>Open the HTML file in your web browser.</li>
          <li>Follow the on-screen instructions to generate your wallet and print or save your paper wallet securely.</li>
        </ol>
        <p className="text-gray-400 text-sm">The entire wallet generation process can be completed offline for enhanced security.</p>
      </div>
    </>
  );
} 