"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MosaikExamplesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Ergo Mosaik: A UI system for Ergo dApps</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/pathways/mosaik/tutorial"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Example apps</h2>
      <p className="text-gray-300 mb-4">The following Mosaik apps are open-sourced and can be used to take inspiration from how to build your own Mosaik apps.</p>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Spring and Kotlin DSL</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
        <li>
          <a href="https://github.com/MrStahlfelge/mosaik-tutorial-series" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Mosaik tutorial example app</a> - Example app for the <a href="/Docs/developers/tooling/pathways/mosaik/tutorial" className="text-cyan-400 hover:underline">tutorial series</a>
        </li>
        <li>
          <a href="https://github.com/MrStahlfelge/mosaik-ageusddemo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Age USD demo</a> - Example UI showing AgeUSD state and to mint and redeem SigRSV/SigUSD
        </li>
        <li>
          <a href="https://github.com/MrStahlfelge/mosaik/tree/develop/backend-demo-kotlin" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Mosaik view elements and actions</a> - Showcasing all available view elements and actions
        </li>
        <li>
          <a href="https://github.com/MrStahlfelge/mosaik-demo-tokenburn" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Burn tokens demo</a> - UI for burning tokens, fully functional with ErgoPay
        </li>
        <li>
          <a href="https://github.com/MrStahlfelge/mosaiknftmarketplace" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">NFT marketplace</a> - Example UI for an NFT marketplace
        </li>
        <li>
          <a href="https://github.com/obolflip/obolflip-client" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Obol Flip</a> - Decentralized coin flip, downloadable Mosaik client
        </li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Spring and Java</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
        <li>
          <a href="https://github.com/MrStahlfelge/mosaik/tree/develop/backend-demo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">LazyBox, Alignments</a> - Example app building UI in pure Java
        </li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Spring, Java and Freemarker</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
        <li>
          <a href="https://github.com/MrStahlfelge/mosaik/tree/develop/backend-demo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Visitor list</a> - Example app building UI and processing data using json templates and Freemarker
        </li>
      </ul>
    </>
  );
} 