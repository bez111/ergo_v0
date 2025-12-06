"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { 
  Users, 
  Info, 
  Star, 
  FileText, 
  ExternalLink, 
  CheckCircle, 
  Paintbrush, 
  Tag, 
  Layers, 
  Coins,
  ChevronRight,
  GitBranch,
  Globe,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function TradeHousePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Auction House
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The Ergo Auction House lets you buy and sell collectible tokens, art, and much more. The first open-source NFT marketplace on the Ergo blockchain with innovative solutions for efficient smart contracts, various auction types, and flexible royalty systems.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/docs/ecosystem/financial/dex" className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105">
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DEX
          </Link>
          <a href="https://github.com/ergo-auction-house" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700">
            <GitBranch className="w-5 h-5 mr-2" /> Auction House GitHub
          </a>
        </div>
      </div>

      {/* Overview Card */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Tag className="w-6 h-6 text-orange-400" /> Auction House Overview
        </h2>
        <p className="text-gray-300 mb-4">
          Since October 2020, Auction House has served as Ergo's first NFT marketplace. Two major updates (V1, V2) brought bug fixes, new features, and reliability. V2 is fully decentralized, built on smart contracts, and has handled over 10k on-chain operations.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Open-Source:</b> First open-source NFT marketplace on Ergo blockchain</li>
          <li><b>Decentralized:</b> V2 is fully decentralized with smart contracts</li>
          <li><b>Multiple Auction Types:</b> Fixed-price, highest-bid, dutch auction</li>
          <li><b>Flexible Royalties:</b> Support for multiple recipients</li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" /> Auction House V3
          </h3>
          <p className="text-gray-300 mb-2">Upcoming major update with re-designed UI, verification system, collections using EIP-34, LaunchPad for artists, improved security, and bulk minting capabilities.</p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Coins className="w-5 h-5 text-green-400" /> AHT Token
          </h3>
          <p className="text-gray-300 mb-2">Auction House Token (AHT) will launch at the upcoming IDO, providing exclusive features, homepage promotion, and profit sharing through staking on ErgoPad.</p>
        </div>
      </div>

      {/* Technical Details Accordion */}
      <div className="mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <details className="group">
            <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
              <span className="inline-block">
                <FileText className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
              </span>
              <span>Artist Guidelines & Detailed Features</span>
              <span className="ml-auto text-xs text-gray-400 group-open:text-cyan-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 pt-2 text-gray-300 text-base">
              <h4 className="font-semibold text-cyan-400 mb-2">Community Spaces</h4>
              <ul className="list-disc pl-6 text-gray-300 text-base mb-4">
                <li>
                  Ergo NFT Discord: <span className="text-gray-400">active group of NFT fans on Ergo's Discord channel</span>
                </li>
              </ul>

              <h4 className="font-semibold text-cyan-400 mb-2">Artist Guidelines & Best Practices</h4>
              <p className="text-gray-400 mb-2">Source: Ergo Forum</p>
              <h5 className="font-semibold text-base mb-1 text-orange-200">Important Considerations for Artists</h5>
              <ul className="list-disc pl-6 text-gray-300 text-base mb-2">
                <li>Each artist should have only one specific address (wallet with one address) for all their artworks.</li>
                <li>This is important for artist verification, royalties, and preventing scams.</li>
                <li>Recommended wallets: Ergo Wallet Android (easy QR), or Yoroi Nightly (testing, dapp connector).</li>
                <li>Configure the right wallet before issuing artwork in the UI.</li>
                <li>Issue artworks on the Auction House website, not via Ergo Utils.</li>
              </ul>
              <h5 className="font-semibold text-base mb-1 text-cyan-300">Benefits of Using a Single Wallet Address</h5>
              <ul className="list-disc pl-6 text-gray-300 text-base mb-2">
                <li>Artist verification and social proof.</li>
                <li>All artworks are linked to one address for easy presentation and royalties.</li>
                <li>Prevents scams and ensures proper attribution.</li>
              </ul>
              <p className="text-gray-400 text-sm mb-4">After issuing, start your auction only when artwork appears under "Owned Artworks".</p>

              <h4 className="font-semibold text-cyan-400 mb-2">Auction House V3: New Features</h4>
              <ul className="list-disc pl-6 text-gray-300 text-base mb-4">
                <li>Re-designed UI: modern, improved user experience.</li>
                <li>Verification system for collections and (optionally) artists.</li>
                <li>Collections using EIP-34 for efficient artwork display.</li>
                <li>LaunchPad for artists to promote new collections.</li>
                <li>Improved security and transparent smart contracts.</li>
                <li>Three listing types: fixed-price, highest-bid, dutch auction.</li>
                <li>Bulk minting for easier collection creation.</li>
                <li>Flexible royalties with multiple recipients.</li>
              </ul>

              <h4 className="font-semibold text-cyan-400 mb-2">Auction House Token (AHT)</h4>
              <p className="text-gray-300 mb-2">
                Auction House will launch its own token (AHT) at the upcoming IDO. Artists and buyers using AHT get exclusive features, homepage promotion, and a new UI for auctions.
              </p>
              <p className="text-gray-400 mb-2">
                AHT will be distributed as bonuses to buyers and sellers (e.g., 5 AHT for a 100 ERG auction). Staking AHT on ErgoPad will share in Auction House profits (30% distributed to stakers periodically).
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Distribution will be automatic but centralized at first, with plans to decentralize via Paideia in the future.
              </p>

              <h4 className="font-semibold text-cyan-400 mb-2">Resources</h4>
              <ul className="list-disc pl-6 text-gray-300 text-base mb-4">
                <li>
                  <a href="#" className="text-cyan-300 hover:underline inline-flex items-center align-baseline gap-1" target="_blank" rel="noopener noreferrer">
                    Source code <ExternalLink className="w-4 h-4 mb-0.5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyan-300 hover:underline inline-flex items-center align-baseline gap-1" target="_blank" rel="noopener noreferrer">
                    v2 contracts <ExternalLink className="w-4 h-4 mb-0.5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyan-300 hover:underline inline-flex items-center align-baseline gap-1" target="_blank" rel="noopener noreferrer">
                    Research & Development: Auction House V2 <ExternalLink className="w-4 h-4 mb-0.5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyan-300 hover:underline inline-flex items-center align-baseline gap-1" target="_blank" rel="noopener noreferrer">
                    Artist Guidelines <ExternalLink className="w-4 h-4 mb-0.5" />
                  </a>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </div>

      {/* In a Nutshell */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">In a Nutshell</h3>
        <p className="text-gray-300 mb-4">Ergo Auction House represents the cutting edge of NFT marketplaces, combining open-source development with innovative auction mechanisms and artist-friendly features. With V3 on the horizon and the AHT token launch, Auction House is poised to become the premier NFT platform on the Ergo blockchain.</p>
      </div>
    </>
  );
} 