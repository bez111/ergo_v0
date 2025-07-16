"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle, Zap, TrendingUp, Info, Coins, Layers, Gift, ExternalLink, Gamepad2, Store, ShoppingBag, Image, Globe } from "lucide-react";
import Link from "next/link";

const nftSectors = [
  {
    key: "Marketplaces",
    label: "Marketplaces",
    icon: <Store className="w-6 h-6 text-cyan-400" />,
    color: "cyan-400",
    infoBlock: {
      title: "NFT Marketplaces on Ergo",
      icon: <Store className="w-5 h-5 text-cyan-400" />,
      color: "text-cyan-400",
      description: "Decentralized NFT marketplaces enable users to buy, sell, and trade digital art and collectibles on Ergo. These platforms provide global access, transparent trading, and community-driven curation.",
    },
    projects: [
      {
        name: "ErgoAuctions",
        description: "ErgoAuctions is a platform where you can bid on and sell a variety of collectible tokens, art, and more.",
        icon: <Globe className="w-7 h-7 text-cyan-400" />,
        link: "https://ergoauctions.org/",
        more: "/Docs/ecosystem/financial/degenerate-finance/auctioncoin",
      },
      {
        name: "SkyHarbor",
        description: "SkyHarbor is a trusted marketplace that specializes in set price transactions.",
        icon: <Store className="w-7 h-7 text-orange-400" />,
        link: "https://skyharbor.app/",
        more: "/Docs/ecosystem/nfts/skyharbor",
      },
      {
        name: "Mew Finance",
        description: "Mew Finance offers NFT marketplace capabilities through Mew Mart (for NFTs/tokens) and Mew Store (for physical assets). Higher tiers share platform revenue and get fee discounts.",
        icon: <ShoppingBag className="w-7 h-7 text-pink-400" />,
        link: "https://mewfinance.com/",
        more: "/Docs/ecosystem/financial/dex/mew",
      },
      {
        name: "Trade House",
        description: "Trade House is a decentralized NFT and token marketplace on Ergo, enabling users to trade collectibles and digital assets in a non-custodial way.",
        icon: <Image className="w-7 h-7 text-green-400" />,
        link: "https://tradehouse.app/",
        more: "/Docs/ecosystem/financial/dex/trade-house",
      },
    ],
  },
  {
    key: "Applications",
    label: "NFT Applications",
    icon: <Gift className="w-6 h-6 text-pink-400" />,
    color: "pink-400",
    infoBlock: {
      title: "NFT Applications on Ergo",
      icon: <Gift className="w-5 h-5 text-pink-400" />,
      color: "text-pink-400",
      description: "NFTs on Ergo are used for more than art and gaming—they power access control, event tickets, supply chain tracking, and more. Explore the growing ecosystem of NFT-powered applications.",
    },
    projects: [
      {
        name: "PandaV",
        description: "NFT access control and digital asset platform leveraging Ergo. Secure, decentralized, and transparent management of access rights and ownership using NFTs and blockchain.",
        icon: <Gift className="w-7 h-7 text-pink-400" />,
        link: "https://www.pandav.io/",
        more: "/Docs/ecosystem/nfts/pandaV",
      },    // Add more application projects here
    ],
  },
  {
    key: "Gaming",
    label: "Gaming on Ergo",
    icon: <Gamepad2 className="w-6 h-6 text-green-400" />,
    color: "green-400",
    infoBlock: {
      title: "Gaming Ecosystem on Ergo",
      icon: <Gamepad2 className="w-5 h-5 text-green-400" />,
      color: "text-green-400",
      description: "Discover innovative gaming experiences on the Ergo blockchain, featuring trading card games, metaverse projects, and more. These projects leverage NFTs and blockchain mechanics for unique, transparent, and engaging gameplay.",
    },
    projects: [
      {
        name: "Blitz TCG",
        description: "A trading card game built on Ergo, leveraging NFTs for true card ownership, transparent gameplay, and a player-driven economy. Compete, collect, and trade unique cards on-chain.",
        icon: <Gamepad2 className="w-7 h-7 text-green-400" />,
        link: "https://blitz.cards/",
        more: "/Docs/ecosystem/nfts/blitzTCG",
      },
      {
        name: "Cyberverse",
        description: "An immersive metaverse project on Ergo, integrating NFTs for digital land, assets, and avatars. Explore, build, and interact in a decentralized virtual world powered by blockchain.",
        icon: <Globe className="w-7 h-7 text-blue-400" />,
        link: "https://cyberverse.world/",
        more: "/Docs/ecosystem/nfts/Cyberverse",
      },
    ],
  },
];

export default function NFTsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Non-Fungible Tokens (NFTs) on Ergo
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Explore the NFT ecosystem on Ergo: decentralized marketplaces, gaming, and real-world applications—all powered by secure, transparent blockchain technology.
        </p>
      </div>
      {/* Overview Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          NFTs (Non-Fungible Tokens) represent unique digital assets on the Ergo blockchain. They enable new forms of ownership, creativity, and utility—from art and collectibles to gaming and access control.
        </p>
      </div>
      {/* Flat Sectors List */}
      {nftSectors.map((sector) => (
        <div key={sector.key} className="mb-12">
          {/* Info Block */}
          <div className={`bg-neutral-900/50 border border-${sector.color} rounded-xl p-6 mb-8`}>
            <h3 className={`text-lg font-bold mb-2 flex items-center gap-2 ${sector.infoBlock.color}`}>
              {sector.infoBlock.icon} {sector.infoBlock.title}
            </h3>
            <p className="text-gray-300 mb-3">{sector.infoBlock.description}</p>
          </div>
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {sector.projects.map((item) => (
              <div
                key={item.name}
                className="relative bg-neutral-900/50 border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border-neutral-700 hover:border-cyan-400/60"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <span className="text-xl font-bold text-white">{item.name}</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                </div>
                <div className="flex justify-between items-center mt-auto gap-3 flex-wrap md:flex-nowrap">
                  {/* More button */}
                  {item.more ? (
                    <Link
                      href={item.more}
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
                  {item.link ? (
                    <a
                      href={item.link}
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
        </div>
      ))}
      {/* Minting instructions */}
      <div className="mt-12 text-gray-400 text-base">
        For instructions on how to mint your own NFTs, refer to the <Link href="/Docs/developers/data-model/box/assets/tokens/non-fungible-tokens/minting-a-nft" className="text-cyan-400 hover:underline">developer section</Link>.
      </div>
    </>
  );
} 