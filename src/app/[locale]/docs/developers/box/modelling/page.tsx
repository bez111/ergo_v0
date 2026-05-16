import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cpu } from 'lucide-react';

export default function BoxModellingPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* HERO Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <Cpu className="w-8 h-8 text-orange-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">
                Box Modelling
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Advanced patterns and techniques for modeling complex state
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
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Box Modelling Overview</h2>
          <p className="text-gray-300 mb-4">
            Good Ergo applications model protocol state as a small set of boxes with explicit ownership, register layout, and transition rules. The goal is to make every valid state transition easy to construct off-chain and cheap to verify on-chain.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">State boxes</h3>
              <p className="text-gray-300 text-sm">
                Use a dedicated box to represent protocol state, then require the next output to preserve identifiers, update registers, and keep required tokens.
              </p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Register schema</h3>
              <p className="text-gray-300 text-sm">
                Assign stable meanings to R4-R9, document their types, and validate those types in ErgoScript before trusting the data.
              </p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Read-only context</h3>
              <p className="text-gray-300 text-sm">
                Use data inputs for oracle boxes, reference boxes, and other shared facts that a transaction needs to read without spending.
              </p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Off-chain builders</h3>
              <p className="text-gray-300 text-sm">
                Keep complex search, selection, and balancing logic off-chain. ErgoScript should check the invariant, not reconstruct the whole protocol.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/docs/developers/ergoscript-languages" className="text-orange-300 hover:text-orange-200 underline">
              ErgoScript
            </Link>
            <Link href="/docs/developers/data-model-apis/registers" className="text-orange-300 hover:text-orange-200 underline">
              Register layout
            </Link>
            <Link href="/docs/developers/cryptographic-primitives/avl" className="text-orange-300 hover:text-orange-200 underline">
              AVL trees
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
