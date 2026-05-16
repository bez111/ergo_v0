import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export default function BoxLifecyclePage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* HERO Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <RefreshCw className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                Box Lifecycle
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Understanding how boxes are created, consumed, and managed
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="/docs/developers/data-model-apis"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Data Model APIs
            </Link>
          </div>
        </section>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Box Lifecycle Overview</h2>
          <p className="text-gray-300 mb-4">
            Boxes are immutable state cells. A transaction consumes existing boxes as inputs and creates new boxes as outputs. Once a box is spent, it cannot be used again, which gives Ergo clear and predictable state transitions.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Created</h3>
              <p className="text-gray-300 text-sm">
                A transaction output becomes a new box with value, ErgoTree, creation height, optional tokens, and optional registers.
              </p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Unspent</h3>
              <p className="text-gray-300 text-sm">
                Wallets and dApps select unspent boxes as inputs. Data input boxes can also be read by scripts without being consumed.
              </p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Spent</h3>
              <p className="text-gray-300 text-sm">
                Spending requires a valid proof for the box&apos;s ErgoTree. The transaction then replaces the old state with newly created outputs.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/docs/developers/data-model-apis/block-transactions" className="text-green-300 hover:text-green-200 underline">
              Transactions
            </Link>
            <Link href="/docs/developers/data-model-apis/registers" className="text-green-300 hover:text-green-200 underline">
              Registers
            </Link>
            <Link href="/docs/developers/ergoscript-languages/blockchain-context" className="text-green-300 hover:text-green-200 underline">
              Blockchain context
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
