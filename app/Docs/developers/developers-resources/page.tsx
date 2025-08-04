import React from "react";
import Link from "next/link";
import {
  BookOpen, Code, Link2, Server, Search, Zap, ExternalLink, Flame, Globe, Wrench, Layers, Eye, FileText, Terminal, Info,
  Database, Box, Key, Network, Shield, Users, Cpu, Lock, Brain, Target, Settings, Coins, RefreshCw, MessageCircle,
  GitBranch, Calendar, Lightbulb, HelpCircle, HeartHandshake, Github, Pickaxe, TreePine, Archive, Building, Workflow
} from "lucide-react";

export default function DevelopersResources() {
  return (
    <>
      {/* Hero/Intro Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Developer Resources
        </h1>
        <p className="text-lg text-gray-300 mb-2">
          Comprehensive resources for Ergo developers - from getting started to advanced topics.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Link href="/Docs/developers/getting-started" className="group">
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-200 cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-green-400" />
              <h3 className="text-sm font-semibold text-green-400">Getting Started</h3>
            </div>
            <p className="text-xs text-gray-400">Quick start guide</p>
          </div>
        </Link>
        <Link href="/Docs/developers/data-model-apis" className="group">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-200 cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-semibold text-blue-400">Data Model</h3>
            </div>
            <p className="text-xs text-gray-400">Core concepts</p>
          </div>
        </Link>
        <Link href="/Docs/developers/ergoscript-languages" className="group">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-200 cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-semibold text-purple-400">ErgoScript</h3>
            </div>
            <p className="text-xs text-gray-400">Smart contracts</p>
          </div>
        </Link>
        <Link href="/Docs/developers/community-support" className="group">
          <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-200 cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-pink-400" />
              <h3 className="text-sm font-semibold text-pink-400">Community</h3>
            </div>
            <p className="text-xs text-gray-400">Get help & support</p>
          </div>
        </Link>
      </div>

      {/* Core Documentation */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" /> Core Documentation
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-300">Fundamentals</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/getting-started" className="text-cyan-400 hover:underline">Getting Started</Link></li>
              <li><Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">Data Model & APIs</Link></li>
              <li><Link href="/Docs/developers/box" className="text-cyan-400 hover:underline">Boxes (UTXO)</Link></li>
              <li><Link href="/Docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">ErgoScript</Link></li>
              <li><Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:underline">Tutorials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Cryptography</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">Cryptographic Primitives</Link></li>
              <li><Link href="/Docs/developers/cryptographic-primitives/schnorr" className="text-cyan-400 hover:underline">Schnorr Signatures</Link></li>
              <li><Link href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-cyan-400 hover:underline">Merkle Trees</Link></li>
              <li><Link href="/Docs/developers/cryptographic-primitives/avl" className="text-cyan-400 hover:underline">AVL+ Trees</Link></li>
              <li><Link href="/Docs/developers/cryptographic-primitives/zerojoin" className="text-cyan-400 hover:underline">ZeroJoin</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">Infrastructure</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/infrastructure" className="text-cyan-400 hover:underline">Infrastructure Overview</Link></li>
              <li><Link href="/Docs/developers/infrastructure/node" className="text-cyan-400 hover:underline">Node Setup</Link></li>
              <li><Link href="/Docs/developers/infrastructure/mining" className="text-cyan-400 hover:underline">Mining</Link></li>
              <li><Link href="/Docs/developers/tutorials/hardware-wallet-integration" className="text-cyan-400 hover:underline">Wallet Integration</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Development Tools */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Wrench className="w-6 h-6 text-orange-400" /> Development Tools
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-300">SDKs & Libraries</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">AppKit (Java)</Link></li>
              <li><Link href="/Docs/developers/tooling/sigma-rust" className="text-cyan-400 hover:underline">Sigma-Rust</Link></li>
              <li><Link href="/Docs/developers/tooling/headless" className="text-cyan-400 hover:underline">Headless dApp Framework</Link></li>
              <li><Link href="/Docs/developers/tooling/mosaik" className="text-cyan-400 hover:underline">Mosaik</Link></li>
              <li><Link href="/Docs/developers/tooling/jde" className="text-cyan-400 hover:underline">JDE</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-yellow-300">Analysis & Testing</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/tooling/ergoscript-by-example" className="text-cyan-400 hover:underline">ErgoScript by Example</Link></li>
              <li><Link href="/Docs/developers/tooling/testing" className="text-cyan-400 hover:underline">Testing Tools</Link></li>
              <li><Link href="/Docs/developers/tooling/debugging" className="text-cyan-400 hover:underline">Debugging</Link></li>
              <li><a href="https://thierrym1212.github.io/txbuilder/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Transaction Builder <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Wrappers & Bindings</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://github.com/mgpai22/ergpy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgPy (Python) <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://github.com/ergo-pad/ergo-python-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Python AppKit <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://github.com/capt-nemo429/fleet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Fleet (JS) <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Blockchain & Infrastructure */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Server className="w-6 h-6 text-cyan-400" /> Blockchain & Infrastructure
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-cyan-300">Explorers & APIs</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://explorer.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Mainnet Explorer <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://testnet.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Testnet Explorer <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://api.ergoplatform.com/api/v1/docs/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">API Documentation <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://api.ergo.watch/docs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo.Watch API <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Node & Mining</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/infrastructure/node" className="text-cyan-400 hover:underline">Node Configuration</Link></li>
              <li><Link href="/Docs/developers/infrastructure/mining" className="text-cyan-400 hover:underline">Mining Setup</Link></li>
              <li><Link href="/Docs/miners" className="text-cyan-400 hover:underline">Miners Resources</Link></li>
              <li><a href="https://testnet.ergofaucet.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Testnet Faucet <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">Analysis Tools</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://github.com/CryptoCream/ErgoVision" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Vision <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://ergo.watch" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo.watch <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://github.com/Eeysirhc/ergo_intelligence" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Intelligence <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Learning Resources */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-green-400" /> Learning Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Students & Beginners</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/students" className="text-cyan-400 hover:underline">Students Guide</Link></li>
              <li><Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:underline">Tutorials</Link></li>
              <li><Link href="/Docs/developers/bounties-grants" className="text-cyan-400 hover:underline">Bounties & Grants</Link></li>
              <li><a href="https://ergotutorials.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoTutorials.com <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-300">Advanced Topics</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">Cryptographic Primitives</Link></li>
              <li><Link href="/Docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">ErgoScript Languages</Link></li>
              <li><Link href="/Docs/developers/data-model" className="text-cyan-400 hover:underline">Data Model Advanced</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">Community Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/community-support" className="text-cyan-400 hover:underline">Community Support</Link></li>
              <li><a href="https://ergonaut.space/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergonaut Space <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Discord Community <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://www.ergoforum.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Forum <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Standards & EIPs */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-purple-400" /> Standards & EIPs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">Token Standards</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/data-model-apis/assets/standards/asset-standard" className="text-cyan-400 hover:underline">EIP-4: Asset Standard</Link></li>
              <li><Link href="/Docs/developers/data-model-apis/assets/standards/genuine-token-verification" className="text-cyan-400 hover:underline">EIP-21: Token Verification</Link></li>
              <li><Link href="/Docs/developers/data-model-apis/assets/standards/auction-contract" className="text-cyan-400 hover:underline">EIP-22: Auction Contract</Link></li>
              <li><Link href="/Docs/developers/data-model-apis/assets/standards/artwork-contract" className="text-cyan-400 hover:underline">EIP-24: Artwork Contract</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Payment Standards</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/data-model-apis/resources/standards/eip20" className="text-cyan-400 hover:underline">EIP-20: ErgoPay</Link></li>
              <li><Link href="/Docs/developers/data-model-apis/resources/standards/eip25" className="text-cyan-400 hover:underline">EIP-25: Payment URI</Link></li>
              <li><Link href="/Docs/developers/data-model-apis/resources/standards/eip17" className="text-cyan-400 hover:underline">EIP-17: Proxy Contracts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-300">All Standards</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Docs/developers/data-model-apis/resources/standards" className="text-cyan-400 hover:underline">All EIP Standards</Link></li>
              <li><a href="https://github.com/ergoplatform/eips" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">EIPs Repository <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Utilities & Tools */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-yellow-400" /> Utilities & Tools
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-yellow-300">Development Utils</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://wallet.plutomonkey.com/p2s/?source=dHJ1ZQ==" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo P2S Playground <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://github.com/lorien/ergotools" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Miner Rewards Script <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://github.com/SabaunT/ergo-monitoring" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Monitoring <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-pink-300">Burning Address</h3>
            <p className="text-gray-300 mb-2 text-sm">
              <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">4MQyMKvMbnCJG3aJ</code> is a P2S representation of "false" condition (unspendable box)
            </p>
            <p className="text-gray-400 text-xs">
              Hash format: <code className="bg-neutral-800 px-1 rounded text-pink-300">0e2047ee2cbd52be01e0876c3e0b989a0d4d5f8955200b1fab0e6eeb2b182555c2fb</code>
            </p>
          </div>
        </div>
      </div>

      {/* External Resources */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Link2 className="w-6 h-6 text-cyan-400" /> External Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-cyan-300">Community Sites</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://github.com/ergoplatform/awesome-ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Awesome Ergo <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://ergonaut.space/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergonaut Space <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://ergosites.github.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoSites <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Official Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://github.com/ergoplatform/ergo/wiki" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoWiki <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub Organization <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://sigmaverse.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Sigmaverse <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">Learning Platforms</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://ergotutorials.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoTutorials.com <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://ergobot.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">General Ergo Chatbot <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
              <li><a href="https://ergoscriptbot.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Chatbot <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
} 