import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Coins } from 'lucide-react';

export default function BoxAssetsPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* HERO Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Coins className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Box Assets
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Understanding assets, tokens, and data structures in Ergo boxes
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
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Box Assets Overview</h2>
          <p className="text-gray-300 mb-4">
            Ergo boxes can carry ERG and native tokens at the same time. Tokens are first-class ledger objects: they move in transaction outputs just like ERG, and smart contracts can inspect their token IDs and amounts during validation.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Native tokens</h3>
              <p className="text-gray-300 text-sm">
                A token is identified by the ID of the first input box in the minting transaction. That deterministic rule lets wallets and contracts verify token identity without a separate registry.
              </p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Box limits</h3>
              <p className="text-gray-300 text-sm">
                A box can contain multiple assets, but transaction builders should keep outputs compact and avoid unnecessary token dust because every box must remain economical to store.
              </p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">NFT metadata</h3>
              <p className="text-gray-300 text-sm">
                NFTs are usually represented as native tokens with supply one, plus metadata in registers or ecosystem standards that wallets and marketplaces understand.
              </p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Contract checks</h3>
              <p className="text-gray-300 text-sm">
                ErgoScript can require exact token IDs, minimum amounts, or preservation rules across outputs, which makes token-aware protocols possible without custom chain logic.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/docs/developers/data-model-apis/assets/tokens" className="text-purple-300 hover:text-purple-200 underline">
              Token data model
            </Link>
            <Link href="/docs/developers/data-model-apis/assets/nfts/minting" className="text-purple-300 hover:text-purple-200 underline">
              NFT minting
            </Link>
            <Link href="/docs/developers/data-model-apis/registers" className="text-purple-300 hover:text-purple-200 underline">
              Box registers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
