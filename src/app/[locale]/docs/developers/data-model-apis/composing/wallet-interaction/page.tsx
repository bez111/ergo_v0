"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { FileText, GitBranch, PenTool, Server, CheckCircle, Database, Coins, Layers } from "lucide-react";

export default function WalletInteractionPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Interacting with an Ergo Wallet
      </h1>
      
      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/docs/developers/data-model-apis/composing"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back to Composing Transactions
        </Link>
      </div>

      <div className="space-y-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/format" className="group">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-purple-400">Format</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Understand the transaction format and structure for wallet interactions.
              </p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>

          <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/merkle-tree" className="group">
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <GitBranch className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold text-pink-400">Merkle Tree</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Learn about Merkle trees and their role in transaction verification.
              </p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-pink-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>

          <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/signing" className="group">
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <PenTool className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-cyan-400">Signing</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Master the process of signing transactions with wallet integration.
              </p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-cyan-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>

          <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/signing-backend" className="group">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-green-400">Signing Backend</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Implement backend transaction signing for secure wallet operations.
              </p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>

          <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/validation" className="group">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-yellow-400">Validation</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Validate transactions and ensure proper wallet interaction protocols.
              </p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-yellow-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>

          <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/data-inputs" className="group">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-orange-400">Data Inputs</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Utilize data inputs for enhanced transaction functionality.
              </p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-orange-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>

          <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/fees" className="group">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Coins className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-blue-400">Fees</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Calculate and manage transaction fees for wallet operations.
              </p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>

          <Link href="/docs/developers/data-model-apis/composing/wallet-interaction/unified-transactions" className="group">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Layers className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-red-400">Unified Transactions</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Create unified transactions for complex wallet interactions.
              </p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 