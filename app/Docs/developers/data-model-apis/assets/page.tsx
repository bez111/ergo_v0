import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Coins, Image, Layers, FileText, CircleDollarSign, Palette, Shield, Zap } from 'lucide-react';

export default function BoxAssetsPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <Coins className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Box Assets
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Understanding different types of assets that can be stored in Ergo boxes
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
      </div>

      {/* Main Content */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8 mb-8">
        <p className="text-gray-300 mb-8">
          Ergo boxes can contain various types of assets beyond just ERG tokens. These assets enable rich functionality 
          for DeFi applications, NFTs, and other blockchain use cases.
        </p>

        {/* Asset Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tokens Card */}
          <Link href="/docs/developers/data-model-apis/assets/tokens" className="group">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <CircleDollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-blue-400">Tokens</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Fungible tokens that can be transferred between boxes. Each token has a unique ID and can represent 
                any digital asset like stablecoins, governance tokens, or utility tokens.
              </p>
              <div className="flex items-center gap-2 text-blue-400 text-sm">
                <Shield className="w-4 h-4" />
                <span>Fungible & Transferable</span>
              </div>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>

          {/* Non-Fungible Tokens Card */}
          <Link href="/docs/developers/data-model-apis/assets/nfts" className="group">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Image className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-purple-400">Non-Fungible Tokens</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Unique digital assets that represent ownership of specific items. NFTs can store metadata 
                and be used for digital art, collectibles, gaming items, and more.
              </p>
              <div className="flex items-center gap-2 text-purple-400 text-sm">
                <Palette className="w-4 h-4" />
                <span>Unique & Individual</span>
              </div>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>

          {/* Singletons Card */}
          <Link href="/docs/developers/data-model-apis/assets/singletons" className="group">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Layers className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-green-400">Singletons</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Special tokens that exist in only one instance. Used for representing unique 
                blockchain entities, identity tokens, or special governance tokens.
              </p>
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <Zap className="w-4 h-4" />
                <span>One-of-a-Kind</span>
              </div>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>

          {/* Standards Card */}
          <Link href="/docs/developers/data-model-apis/assets/standards" className="group">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 hover:scale-105 transition-transform duration-200 relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-orange-400">Standards</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Protocol standards that define how different types of assets should behave. 
                Includes EIP-4 for tokens, NFT standards, and other community-driven specifications.
              </p>
              <div className="flex items-center gap-2 text-orange-400 text-sm">
                <FileText className="w-4 h-4" />
                <span>Protocol Standards</span>
              </div>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-orange-400 text-sm font-medium">
                Learn more
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-neutral-900/50 border border-neutral-700 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
            <Coins className="w-5 h-5" />
            Asset Management
          </h2>
          <p className="text-gray-300 mb-4">
            All assets in Ergo are stored in boxes and can be accessed through the box's token collection. 
            Assets can be transferred between boxes during transactions, enabling complex DeFi operations, 
            NFT marketplaces, and other decentralized applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-neutral-800/50 rounded p-3">
              <h4 className="font-semibold text-cyan-400 mb-2">Storage</h4>
              <p className="text-gray-300">Assets stored in box token collections</p>
            </div>
            <div className="bg-neutral-800/50 rounded p-3">
              <h4 className="font-semibold text-cyan-400 mb-2">Transfer</h4>
              <p className="text-gray-300">Moved between boxes via transactions</p>
            </div>
            <div className="bg-neutral-800/50 rounded p-3">
              <h4 className="font-semibold text-cyan-400 mb-2">Validation</h4>
              <p className="text-gray-300">Smart contracts control asset behavior</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 