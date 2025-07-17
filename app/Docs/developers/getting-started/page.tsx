import React from "react";
import Link from "next/link";
import { Rocket, BookOpen, Code, Server, Wallet, FlaskConical, Terminal, Users, MessageCircle, Gift, Zap, Layers, Globe, Wrench, Key, ExternalLink, ArrowRight } from "lucide-react";

export default function GettingStarted() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Rocket className="w-10 h-10 text-orange-400" /> Developer Getting Started
        </h1>
        <p className="text-lg text-gray-300">
          Welcome to the Ergo Developer Portal! This page will guide you from zero to building on Ergo in just a few steps.
        </p>
      </div>

      {/* Why Build on Ergo */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-400" /> Why Build on Ergo?
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Advanced <b>eUTXO Model</b> for powerful smart contracts</li>
          <li>Strong security (<b>Autolykos PoW</b>, cryptography)</li>
          <li>Open, modular ecosystem: dApps, DeFi, NFTs, cross-chain</li>
          <li>Supportive developer community and <b>grants</b></li>
        </ul>
      </div>

      {/* Essential Resources */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-cyan-400" /> Essential Resources
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><Link href="/Docs/developers" className="text-cyan-400 hover:underline">Developer Docs Home</Link></li>
          <li><Link href="/Docs/introduction/ergoscript-primer" className="text-cyan-400 hover:underline">ErgoScript Reference</Link></li>
          <li><Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">API & SDK Overview</Link></li>
          <li><Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:underline">Sample Projects & Starter Kits</Link></li>
          <li><a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Playground (Online IDE) <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
        </ul>
      </div>

      {/* Set Up Your Environment */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Server className="w-6 h-6 text-orange-400" /> Set Up Your Environment
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Node:</b> <Link href="/Docs/developers/infrastructure" className="text-cyan-400 hover:underline">How to run an Ergo node</Link></li>
          <li><b>Wallet:</b> <a href="https://nautiluswallet.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Nautilus Wallet (dev use) <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
          <li><b>Testnet Faucet:</b> <a href="https://testnet.ergofaucet.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Get test ERG here <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
        </ul>
      </div>

      {/* Write & Deploy Your First Smart Contract */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Code className="w-6 h-6 text-orange-400" /> Write & Deploy Your First Smart Contract
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><Link href="/Docs/introduction/ergoscript-primer" className="text-cyan-400 hover:underline">Quick Intro to ErgoScript</Link></li>
          <li><Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:underline">Hello, World Contract Tutorial</Link></li>
          <li><Link href="/Docs/developers/infrastructure" className="text-cyan-400 hover:underline">Deploy & Test on Testnet</Link></li>
          <li><Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">Interacting with the Blockchain via API</Link></li>
        </ul>
      </div>

      {/* Explore More */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Layers className="w-6 h-6 text-cyan-400" /> Explore More
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:underline">Full Tutorials Library</Link></li>
          <li><Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">Data Model & API reference</Link></li>
          <li><Link href="/Docs/developers/infrastructure" className="text-cyan-400 hover:underline">Infrastructure Tools</Link></li>
          <li><Link href="/Docs/developers/tooling" className="text-cyan-400 hover:underline">Tooling for Ergo DApps</Link></li>
        </ul>
      </div>

      {/* Developer Support & Community */}
      <div className="bg-neutral-900 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
          <Users className="w-6 h-6 text-cyan-400" />
          Developer Support & Community
        </h2>
        <ul className="text-gray-300 space-y-2 pl-1">
          <li>
            Discord: <a href="https://discord.gg/ergo" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">#dev-support ↗</a>
          </li>
          <li>
            Forum: <a href="https://www.ergoforum.org/" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">Ergo Forum ↗</a>
          </li>
          <li>
            Telegram: <a href="https://t.me/ergodevs" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">Ergo Devs ↗</a>
          </li>
          <li>
            <a href="/Docs/developers/bounties-grants" className="text-cyan-400 hover:underline">Bounties & Grants: Ongoing opportunities</a>
          </li>
        </ul>
      </div>

      {/* Next Steps */}
      <div className="bg-orange-900/20 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-3 text-orange-400">
          <ArrowRight className="w-6 h-6" />
          Next Steps
        </h2>
        <ul className="list-disc pl-6 text-cyan-400 space-y-2">
          <li>
            <Link href="/Docs/developers/ergoscript-languages" className="hover:underline">Deep-dive into ErgoScript & Languages</Link>
          </li>
          <li>
            <Link href="/Docs/developers/cryptographic-primitives" className="hover:underline">Learn about Cryptographic Primitives</Link>
          </li>
          <li>
            <Link href="/Docs/developers/tutorials" className="hover:underline">Read Community Tutorials</Link>
          </li>
          <li>
            <Link href="/Docs/developers/contribute" className="hover:underline">Contribute and submit your project</Link>
          </li>
        </ul>
        <p className="text-gray-400 text-sm mt-4">
          Tip: If you're new to blockchain dev, start with{" "}
          <Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:underline">Tutorials</Link>
          {" "}or chat with the community!
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-8">
        <Link
          href="/Docs/developers/starter-kits"
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-8 rounded-xl flex items-center gap-2 text-lg shadow transition"
        >
          <Rocket className="w-5 h-5" />
          Pick a starter kit and build your first contract!
        </Link>
      </div>
    </>
  );
} 