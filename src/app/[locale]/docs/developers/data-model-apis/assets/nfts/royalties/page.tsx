import React from 'react';
import Link from 'next/link';
import { ArrowLeft, DollarSign, AlertTriangle, FileText, Users, ExternalLink } from 'lucide-react';

export default function RoyaltiesPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-green-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
              Royalties
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Understanding NFT royalties on the Ergo blockchain
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/docs/developers/data-model-apis/assets/nfts"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to NFTs
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <p className="text-lg text-gray-300 mb-6">
            Ergo's royalty system is integrated into the minting <code className="bg-neutral-700 px-2 py-1 rounded">metadata</code> and can be accessed via smart contracts. This integration allows marketplaces to include royalties in their sale contracts, a feature utilized by both Sky Harbor and Auction House. Consequently, any listings on a marketplace that respects royalties will have the royalties embedded in their smart contract, preventing them from being bypassed.
          </p>
        </div>

        {/* Warning Section */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Not enforced by the protocol</h3>
              <p className="text-gray-300">
                However, it's important to note that NFTs can be transferred directly from one party to another, similar to transferring across addresses. In these cases, or in private sales, the decision to honor the royalties lies with the involved parties.
              </p>
            </div>
          </div>
        </div>

        {/* AuctionHouse V3 Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Users className="w-6 h-6" />
            AuctionHouse V3
          </h2>
          <p className="text-gray-300">
            The upcoming AuctionHouse V3 will introduce the ability to support multiple recipients for royalties. This feature will facilitate collaborations among artists.
          </p>
        </div>

        {/* Resources Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Resources
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <Link href="/docs/developers/data-model-apis/assets/nfts/eip22" className="text-cyan-400 hover:underline">EIP-0022: Auction Contract</Link>
            </li>
            <li>
              <Link href="/docs/developers/data-model-apis/assets/nfts/eip24" className="text-cyan-400 hover:underline">EIP-0024: Artwork Contract</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
} 