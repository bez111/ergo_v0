"use client";

import React from "react";
import { Image, Store, ShoppingBag, Globe, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function NFTsPage() {
  const marketplaces = [
    {
      title: "ErgoAuctions",
      description:
        "ErgoAuctions is a platform where you can bid on and sell a variety of collectible tokens, art, and more.",
      icon: Globe,
      color: "text-cyan-400",
      link: "https://ergoauctions.org/",
      more: "/Docs/ecosystem/financial/degenerate-finance/auctioncoin"
    },
    {
      title: "SkyHarbor",
      description:
        "SkyHarbor is a trusted marketplace that specializes in set price transactions.",
      icon: Store,
      color: "text-orange-400",
      link: "https://skyharbor.app/",
      more: "/Docs/ecosystem/nfts/skyharbor"
    },
    {
      title: "Mew Finance",
      description:
        "Mew Finance offers NFT marketplace capabilities through Mew Mart (for NFTs/tokens) and Mew Store (for physical assets). Higher tiers share platform revenue and get fee discounts.",
      icon: ShoppingBag,
      color: "text-pink-400",
      link: "https://mewfinance.com/",
      more: "/Docs/ecosystem/financial/dex/mew"
    },
    {
      title: "Trade House",
      description:
        "Trade House is a decentralized NFT and token marketplace on Ergo, enabling users to trade collectibles and digital assets in a non-custodial way.",
      icon: Image,
      color: "text-green-400",
      link: "https://tradehouse.app/",
      more: "/Docs/ecosystem/financial/dex/trade-house"
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Non-Fungible Tokens
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Blockchains offer more than just cryptocurrencies. They can also host audio or visual artworks through immutable smart contracts. These artworks are represented as Non-Fungible Tokens (NFTs). Moreover, these NFTs can be traded in decentralized auction houses, providing artists with a global platform free from governmental restrictions or the need for centralized licensing firms. This leads to the democratization of art markets through public blockchain.
        </p>
      </div>
      {/* Marketplaces Section */}
      <h2 className="text-2xl font-semibold mb-6 text-white">Marketplaces</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {marketplaces.map((mkt, i) => (
          <div
            key={mkt.title}
            className="rounded-2xl border border-neutral-700 bg-neutral-900/50 p-6 flex flex-col h-full transition-all duration-200 hover:border-cyan-400/60"
          >
            <div className="flex items-center gap-3 mb-2">
              <mkt.icon className={`w-7 h-7 ${mkt.color}`} />
              <span className="text-xl font-bold text-white">{mkt.title}</span>
            </div>
            <p className="text-gray-300 mb-6 text-base">{mkt.description}</p>
            <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
              {/* More button */}
              {mkt.more && mkt.more !== "#" ? (
                <Link
                  href={mkt.more}
                  className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                >
                  More
                </Link>
              ) : (
                <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                  More
                </span>
              )}
              {/* Visit button */}
              {mkt.link ? (
                <a
                  href={mkt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline mb-2 md:mb-0"
                >
                  Visit <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              ) : (
                <span className="inline-flex items-center text-gray-500 font-semibold text-base opacity-60 pointer-events-none mb-2 md:mb-0">
                  Visit <ExternalLink className="w-4 h-4 ml-1" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Minting instructions */}
      <div className="mt-12 text-gray-400 text-base">
        For instructions on how to mint your own NFTs, refer to the <Link href="/Docs/developers/data-model/box/assets/tokens/non-fungible-tokens/minting-a-nft" className="text-cyan-400 hover:underline">developer section</Link>.
      </div>
    </div>
  );
} 