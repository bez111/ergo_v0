import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Image, Info, Code, Shield, Users, Zap, Palette, DollarSign } from 'lucide-react';

export default function NFTsPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <Image className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Non-Fungible Tokens on Ergo
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Understanding unique and indivisible blockchain tokens
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/Docs/developers/data-model-apis/assets"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Assets
          </Link>
          <Link 
            href="/Docs/developers/data-model-apis/assets/nfts/minting"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-xl transition-colors duration-200"
          >
            <Palette className="w-4 h-4" />
            Minting a NFT
          </Link>
          <Link 
            href="/Docs/developers/data-model-apis/assets/nfts/royalties"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl transition-colors duration-200"
          >
            <DollarSign className="w-4 h-4" />
            Royalties
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Info className="w-6 h-6" />
            Overview
          </h2>
          <p className="text-lg text-gray-300">
            <em>Non-Fungible Tokens</em> (NFTs) are unique and indivisible blockchain tokens. They can be used to represent and prove ownership of digital products such as works of art, in-game items or characters, virtual trading cards and much, much more.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4" open>
              <summary className="text-lg font-semibold text-blue-400 cursor-pointer flex items-center gap-2">
                <Zap className="w-5 h-5" />
                How do I mint a NFT?
              </summary>
              <p className="text-gray-300 mt-3">
                Minting a NFT on Ergo is a straightforward process that can be done programmatically or using resources listed in our guide. Learn more about it <Link href="/Docs/developers/data-model-apis/assets/nfts/minting" className="text-cyan-400 hover:underline">here</Link>.
              </p>
            </details>

            {/* FAQ Item 2 */}
            <details className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <summary className="text-lg font-semibold text-green-400 cursor-pointer flex items-center gap-2">
                <Shield className="w-5 h-5" />
                How do royalties work?
              </summary>
              <p className="text-gray-300 mt-3">
                Royalties in Ergo are integrated into the minting metadata and can be accessed via smart contracts, allowing marketplaces to include royalties in their sale contracts. Find out more <Link href="/Docs/developers/data-model-apis/assets/nfts/royalties" className="text-cyan-400 hover:underline">here</Link>.
              </p>
            </details>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Use cases
          </h2>

          {/* Unforgeable identity */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Unforgeable identity</h3>
            <p className="text-gray-300 mb-4">
              Let's say you create a phenomenally successful exchange dApp, which pays a small percentage of trading fees to the owner – designated by ownership of that NFT. That token, and future revenues, can now be transferred and sold. The token can also be managed by a secondary smart contract, which could divide revenues among 100 tokens representing shareholders. The NFT could be used to update the dApp, or shut it down, if necessary – whatever conditions were coded into it. The point is that the NFT provides guaranteed, unforgeable proof of identity.
            </p>
          </div>

          {/* UTXO NFTs */}
          <div>
            <h3 className="text-xl font-semibold text-purple-400 mb-4">UTXO NFTs</h3>
            <p className="text-gray-300 mb-4">
              One interesting feature is that Ergo can be used to create <Link href="/Docs/developers/data-model-apis/assets/nfts/pow-tokens" className="text-cyan-400 hover:underline">PoW-backed NFTs</Link>. For most NFTs, a user simply generates a UTXO with the token contract attached. But it's also possible for miners to create special NFTs, where the id of the newly minted token is the id of a coinbase transaction. This has all kinds of potential use cases, but the core idea is that a miner has the opportunity to create a special NFT when they mine a block. While any number of NFTs can be created via a regular smart contract, a finite number of these PoW-backed NFTs can exist.
            </p>
            <p className="text-gray-300">
              There are other applications of NFTs that use the extended UTXO model, including facilitating a new generation of complex dApps. For example, a dApp creator can generate an NFT associated with an address and smart contract. While anyone can use that contract, and even create a transaction using the private key of that address, the NFT owner can still maintain administrative rights or other privileges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 