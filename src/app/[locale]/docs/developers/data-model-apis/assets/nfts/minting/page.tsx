
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Palette, Info, Code, FileText, ExternalLink, Users, GitBranch, Zap, Database, Lightbulb, BookOpen } from 'lucide-react';

export default function MintingNFTPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <Palette className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Creating an NFT
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              A guide to minting Non-Fungible Tokens on the Ergo blockchain.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/docs/developers/data-model-apis/assets/nfts"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to NFTs
          </Link>
          <Link 
            href="/docs/developers/data-model-apis/assets/nfts/minting/v1-v2"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-xl transition-colors duration-200"
          >
            <GitBranch className="w-4 h-4" />
            V1 v V2
          </Link>
          <Link 
            href="/docs/developers/data-model-apis/assets/nfts/minting/simple-example"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl transition-colors duration-200"
          >
            <Zap className="w-4 h-4" />
            Simple Example
          </Link>
          <Link 
            href="/docs/developers/data-model-apis/assets/nfts/minting/on-chain"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-xl transition-colors duration-200"
          >
            <Database className="w-4 h-4" />
            On-chain NFTs
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Quick Guide Section */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <details className="text-lg font-semibold text-blue-400 cursor-pointer flex items-center gap-2" open>
            <summary className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              How do I mint a NFT?
            </summary>
            <p className="text-gray-300 mt-3">
              The quickest way to create an NFT is to follow <a href="https://ergoplatform.org/en/blog/2022-03-08-how-to-minting-a-non-fungible-token-nft-on-the-ergo-blockchain/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">this visual guide</a> that'll show you how to mint your NFT through <a href="https://ergoauctions.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergoauctions.org</a>
            </p>
          </details>
        </div>

        {/* Programmatically Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Creating an NFT programmatically
          </h2>
          <p className="text-gray-300">
            See <Link href="/docs/developers/data-model-apis/assets/nfts/nft-examples" className="text-cyan-400 hover:underline">this page</Link> for some simple examples that demonstrate how to programmatically mint a NFT on the Ergo Blockchain.
          </p>
        </div>

        {/* Standard Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Standard
          </h2>
          <p className="text-gray-300 mb-4">
            The standard for artwork issuance on Ergo is <Link href="/docs/developers/data-model-apis/assets/nfts/eip24" className="text-cyan-400 hover:underline">EIP-0024: Artwork Contract</Link>. This standard outlines the process of issuing NFTs, including the two different design versions, <Link href="/docs/developers/data-model-apis/assets/nfts/v1v2" className="text-cyan-400 hover:underline">V1 and V2</Link>, and the importance of artist identity. V2 offers more flexibility and features, such as handling multiple royalty recipients, detailed artwork traits, and additional information.
          </p>
        </div>

        {/* Resources Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Resources
          </h2>

          {/* Minting your NFT online */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Minting your NFT online
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <a href="https://ergoauctions.org/#/auction/active?type=all" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergoauctions.org</a> Allows NFT minting. (<a href="https://ergoplatform.org/en/blog/2022-03-08-how-to-minting-a-non-fungible-token-nft-on-the-ergo-blockchain/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">HowTo</a>)
              </li>
              <li>
                <Link href="/docs/developers/data-model-apis/assets/nfts/lilium" className="text-cyan-400 hover:underline">Lilium</Link> is a tool for artists to mint and sell their collections.
              </li>
            </ul>
          </div>

          {/* Developer Resources */}
          <div>
            <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Developer Resources
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <a href="https://github.com/mgpai22/ergpy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergpy</a> has bulk-minting (with royalties!)
              </li>
              <li>
                <a href="https://github.com/mgpai22/ergo-nft-bulk-minter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-nft-bulk-minter</a>
              </li>
              <li>
                <a href="https://ergonfts.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergonfts.org</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
} 