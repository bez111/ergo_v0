"use client";

import React from "react";
import { Users, Info, Star, FileText, ExternalLink, CheckCircle, Paintbrush, Tag, Layers, Coins } from "lucide-react";

export default function TradeHousePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Ergo Auction House
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        The Ergo Auction House lets you buy and sell collectible tokens, art, and much more.
      </p>

      {/* Community Spaces */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-cyan-300">
          <Users className="w-5 h-5 text-cyan-300" /> Community Spaces
        </h2>
        <ul className="list-disc pl-6 text-gray-300 text-base">
          <li>
            Ergo NFT Discord: <span className="text-gray-400">active group of NFT fans on Ergo's Discord channel</span>
          </li>
        </ul>
      </div>

      {/* Artist Guidelines */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-orange-300">
          <Paintbrush className="w-5 h-5 text-orange-300" /> Artist Guidelines & Best Practices
        </h2>
        <p className="text-gray-400 mb-2">Source: Ergo Forum</p>
        <h3 className="font-semibold text-base mb-1 text-orange-200">Important Considerations for Artists</h3>
        <ul className="list-disc pl-6 text-gray-300 text-base mb-2">
          <li>Each artist should have only one specific address (wallet with one address) for all their artworks.</li>
          <li>This is important for artist verification, royalties, and preventing scams.</li>
          <li>Recommended wallets: Ergo Wallet Android (easy QR), or Yoroi Nightly (testing, dapp connector).</li>
          <li>Configure the right wallet before issuing artwork in the UI.</li>
          <li>Issue artworks on the Auction House website, not via Ergo Utils.</li>
        </ul>
        <h4 className="font-semibold text-base mb-1 text-cyan-300">Benefits of Using a Single Wallet Address</h4>
        <ul className="list-disc pl-6 text-gray-300 text-base mb-2">
          <li>Artist verification and social proof.</li>
          <li>All artworks are linked to one address for easy presentation and royalties.</li>
          <li>Prevents scams and ensures proper attribution.</li>
        </ul>
        <p className="text-gray-400 text-sm">After issuing, start your auction only when artwork appears under “Owned Artworks”.</p>
      </div>

      {/* Auction House Description */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-cyan-300">
          <Tag className="w-5 h-5 text-cyan-300" /> Auction House
        </h2>
        <p className="text-gray-300 mb-2">
          Auction House, the first open-source NFT marketplace on the Ergo blockchain, features innovative solutions for efficient smart contracts, various auction types, on-chain collections, and a flexible royalty system.
        </p>
        <h3 className="font-semibold text-base mb-1 text-orange-200">About Auction House</h3>
        <p className="text-gray-400 mb-2">
          Since October 2020, Auction House has served as Ergo’s first NFT marketplace. Two major updates (V1, V2) brought bug fixes, new features, and reliability. V2 is fully decentralized, built on smart contracts, and has handled over 10k on-chain operations.
        </p>
        <p className="text-gray-400 mb-2">
          The upcoming IDO will fund Auction House V3, which will introduce new features and improvements.
        </p>
      </div>

      {/* Auction House V3 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-orange-300">
          <Layers className="w-5 h-5 text-orange-300" /> Auction House V3: New Features
        </h2>
        <ul className="list-disc pl-6 text-gray-300 text-base mb-2">
          <li>Re-designed UI: modern, improved user experience.</li>
          <li>Verification system for collections and (optionally) artists.</li>
          <li>Collections using EIP-34 for efficient artwork display.</li>
          <li>LaunchPad for artists to promote new collections.</li>
          <li>Improved security and transparent smart contracts.</li>
          <li>Three listing types: fixed-price, highest-bid, dutch auction.</li>
          <li>Bulk minting for easier collection creation.</li>
          <li>Flexible royalties with multiple recipients.</li>
        </ul>
      </div>

      {/* Auction House Token */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-green-300">
          <Coins className="w-5 h-5 text-green-300" /> Auction House Token (AHT)
        </h2>
        <p className="text-gray-300 mb-2">
          Auction House will launch its own token (AHT) at the upcoming IDO. Artists and buyers using AHT get exclusive features, homepage promotion, and a new UI for auctions.
        </p>
        <p className="text-gray-400 mb-2">
          AHT will be distributed as bonuses to buyers and sellers (e.g., 5 AHT for a 100 ERG auction). Staking AHT on ErgoPad will share in Auction House profits (30% distributed to stakers periodically).
        </p>
        <p className="text-gray-400 text-sm">
          Distribution will be automatic but centralized at first, with plans to decentralize via Paideia in the future.
        </p>
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-cyan-300">
          <FileText className="w-5 h-5 text-cyan-300" /> Resources
        </h2>
        <ul className="list-disc pl-6 text-gray-300 text-base">
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
    </>
  );
} 