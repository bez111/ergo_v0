"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowLeft, Zap, Info } from "lucide-react";

export default function BlitzTCGPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Blitz TCG
        </h1>
        <p className="text-xl text-gray-400 mb-4">
          Blitz TCG is an innovative digital trading card game launched on Ergo and Cardano. It revolutionizes TCG gameplay with unique mechanics, a focus on skill over luck, and a transparent, community-driven approach.
        </p>
        <div className="flex flex-wrap gap-4 mb-4">
          <a
            href="https://blitztcg.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit Website
          </a>
          <a
            href="https://x.com/Blitz_TCG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Twitter
          </a>
          <a
            href="https://linktr.ee/blitztcg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> General Info
          </a>
          <a
            href="https://blitztcg.com/roadmap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Roadmap
          </a>
          <Link
            href="/Docs/ecosystem/nfts"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to NFTs
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> About Blitz TCG
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
          <li>Players have access to their entire deck, enabling deep strategy and planning.</li>
          <li>Chess-like time bank system for competitive, skill-based play.</li>
          <li>NPC alternatives on the game board add unique tactical options.</li>
          <li>Minimized RNG: outcome depends on skill, not luck.</li>
          <li>Play and earn model (not play to earn): gameplay is prioritized over profit.</li>
          <li>Self-funded, transparent team with regular updates on Twitter.</li>
          <li>Available on both Ergo and Cardano platforms.</li>
        </ul>
      </div>

      {/* Recent Developments */}
      <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Zap className="w-6 h-6 text-cyan-400" /> Recent Developments
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Blitz TCG has successfully launched and is now <a href="https://blitztcg.com/home" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">live</a>!</li>
          <li>Stay updated with the latest news on their <a href="https://x.com/Blitz_TCG" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Twitter</a>.</li>
        </ul>
      </div>
    </>
  );
} 