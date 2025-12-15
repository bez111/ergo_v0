"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { ExternalLink, ArrowLeft, Zap, Info } from "lucide-react";

export default function CyberversePage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          CyberVerse
        </h1>
        <p className="text-xl text-gray-400 mb-4">
          CyberVerse is an open-world, pixel-based game on Ergo, offering social and earning opportunities through blockchain integration, NFTs, custom tokens, and an in-game marketplace.
        </p>
        <div className="flex flex-wrap gap-4 mb-4">
          <Link
            href="/docs/ecosystem/nfts"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to NFTs
          </Link>
          <a
            href="https://docs.cyberversegame.io/cyberverse-whitepaper/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Whitepaper
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> About CyberVerse
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li>Open-world pixel game with blockchain integration on Ergo.</li>
          <li>NFT integrations, custom tokens, and in-game marketplace.</li>
          <li>Special privileges and early access for CyberCitizen NFT holders.</li>
          <li>Mini-games (jobs) to earn Cyberverse token ($CYPX).</li>
          <li>Unique experiences for NFT holders and community members.</li>
        </ul>
      </div>

      {/* Vision Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Zap className="w-6 h-6 text-cyan-400" /> Vision
        </h2>
        <p className="text-gray-300 mb-2">
          CyberVerse aims to implement a stable play-and-earn model, letting users enjoy the game and have the chance to earn while doing so. Unlike play-to-earn, play-and-earn encourages exploration and fun, with the opportunity to earn and exchange in-game rewards for other tokens or fiat.
        </p>
        <p className="text-gray-300 mb-2">
          The project addresses common issues in blockchain gaming: poor gameplay, high entry barriers, short-term focus, and lack of communication. Proceeds from the IDO are used for ongoing development and community growth.
        </p>
        <p className="text-gray-400 text-sm">
          Learn more in the <a href="https://docs.cyberversegame.io/cyberverse-whitepaper/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">official whitepaper</a>.
        </p>
      </div>
    </>
  );
} 