"use client";

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Rocket, 
  BookOpen, 
  Code, 
  Wrench, 
  Users, 
  Play, 
  Server, 
  Wallet, 
  Terminal, 
  Database, 
  Globe, 
  ExternalLink, 
  Zap, 
  Shield, 
  Box, 
  ArrowRight,
  Github,
  Link2,
  FileText,
  Brain,
  Target,
  Layers,
  Key,
  Network,
  MessageCircle
} from "lucide-react"
import Link from "next/link"

export default function DevelopersGuide() {
  return (
    <div className="min-h-screen">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-8 bg-neutral-900/50 border border-neutral-700/50">
          <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
            <Rocket className="w-4 h-4" /> Overview
          </TabsTrigger>
          <TabsTrigger value="getting-started" className="flex items-center gap-2 justify-center">
            <Play className="w-4 h-4" /> Getting Started
          </TabsTrigger>
          <TabsTrigger value="ergoscript" className="flex items-center gap-2 justify-center">
            <Code className="w-4 h-4" /> ErgoScript
          </TabsTrigger>
          <TabsTrigger value="tooling" className="flex items-center gap-2 justify-center">
            <Wrench className="w-4 h-4" /> Tooling
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2 justify-center">
            <BookOpen className="w-4 h-4" /> Resources
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2 justify-center">
            <Users className="w-4 h-4" /> Community
          </TabsTrigger>
        </TabsList>

        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Developer Hub
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Everything you need to build on Ergo: from getting started to advanced development
          </p>
        </div>

        <TabsContent value="overview" className="space-y-6">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-orange-400" />
              Welcome to Ergo Development
            </h2>
            <p className="text-gray-300 mb-4">
              Ergo is a revolutionary blockchain platform that prioritizes security, sustainability, and developer experience. 
              Built on proof-of-work with innovative eUTXO model and powerful ErgoScript smart contracts.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-orange-300 mb-2">🎯 Why Choose Ergo?</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Advanced eUTXO Model for powerful smart contracts</li>
                  <li>• Strong security (<strong>Autolykos PoW</strong>, cryptography)</li>
                  <li>• Open, modular ecosystem: dApps, DeFi, NFTs, cross-chain</li>
                  <li>• Supportive developer community and <strong>grants</strong></li>
                  <li>• Innovative features like storage rent and sigma protocols</li>
                </ul>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">🚀 Quick Start</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Start with the "Getting Started" tab</li>
                  <li>• Explore ErgoScript fundamentals</li>
                  <li>• Check out our tooling ecosystem</li>
                  <li>• Join the vibrant developer community</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <Database className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">eUTXO Model</h3>
              <p className="text-gray-300 text-sm mb-4">
                Extended UTXO model enabling complex smart contracts with better scalability and privacy.
              </p>
              <Link href="/Docs/introduction/eutxo" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <Shield className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Sigma Protocols</h3>
              <p className="text-gray-300 text-sm mb-4">
                Advanced cryptographic primitives for zero-knowledge proofs and privacy-preserving applications.
              </p>
              <Link href="/Docs/developers/cryptographic-primitives" className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1">
                Explore crypto <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <Box className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Storage Rent</h3>
              <p className="text-gray-300 text-sm mb-4">
                Innovative approach to blockchain sustainability by preventing state bloat and ensuring long-term viability.
              </p>
              <Link href="/Docs/introduction/storage-rent" className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1">
                Understanding storage <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Quick Actions</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="group bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 hover:bg-orange-500/20 transition-colors cursor-pointer">
                <Play className="w-6 h-6 text-orange-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Quick Start</h3>
                <p className="text-gray-400 text-sm">See "Getting Started" tab</p>
              </div>
              
              <Link href="/Docs/developers/tutorials" className="group bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-500/20 transition-colors">
                <BookOpen className="w-6 h-6 text-blue-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Tutorials</h3>
                <p className="text-gray-400 text-sm">Step-by-step guides</p>
              </Link>
              
              <Link href="/Docs/developers/tooling" className="group bg-green-500/10 border border-green-500/20 rounded-lg p-4 hover:bg-green-500/20 transition-colors">
                <Wrench className="w-6 h-6 text-green-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Tools & SDKs</h3>
                <p className="text-gray-400 text-sm">Development toolkit</p>
              </Link>
              
              <Link href="/Docs/developers/bounties-grants" className="group bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 hover:bg-purple-500/20 transition-colors">
                <Users className="w-6 h-6 text-purple-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Grants</h3>
                <p className="text-gray-400 text-sm">Get funding</p>
              </Link>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="getting-started" className="space-y-6">
          {/* Hero for Getting Started */}
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Rocket className="w-8 h-8 text-green-400" /> Developer Getting Started
            </h2>
            <p className="text-lg text-gray-300">
              Welcome to the Ergo Developer Portal! This guide will take you from zero to building on Ergo in just a few steps.
            </p>
          </div>

          {/* Why Build on Ergo */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-400" /> Why Build on Ergo?
            </h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Advanced <strong>eUTXO Model</strong> for powerful smart contracts</li>
              <li>Strong security (<strong>Autolykos PoW</strong>, cryptography)</li>
              <li>Open, modular ecosystem: dApps, DeFi, NFTs, cross-chain</li>
              <li>Supportive developer community and <strong>grants</strong></li>
              <li>Innovative features like storage rent and sigma protocols</li>
            </ul>
          </div>

          {/* Essential Resources */}
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-cyan-400" /> Essential Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><Link href="/Docs/developers" className="text-cyan-400 hover:underline">Developer Docs Home</Link></li>
                <li><Link href="/Docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">ErgoScript Reference</Link></li>
                <li><Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">API & SDK Overview</Link></li>
                <li><Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:underline">Sample Projects & Starter Kits</Link></li>
              </ul>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Playground (Online IDE) <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                <li><Link href="/Docs/developers/box" className="text-cyan-400 hover:underline">Understanding Boxes (UTXO)</Link></li>
                <li><Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">Cryptographic Primitives</Link></li>
                <li><Link href="/Docs/introduction/eutxo" className="text-cyan-400 hover:underline">eUTXO Model</Link></li>
              </ul>
            </div>
          </div>

          {/* Environment Setup */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Server className="w-6 h-6 text-orange-400" /> Set Up Your Development Environment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Core Infrastructure</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><strong>Node:</strong> <Link href="/Docs/developers/infrastructure" className="text-cyan-400 hover:underline">How to run an Ergo node</Link></li>
                  <li><strong>Wallet:</strong> <a href="https://nautiluswallet.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Nautilus Wallet (dev use) <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                  <li><strong>Testnet Faucet:</strong> <a href="https://testnet.ergofaucet.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Get test ERG here <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Development Tools</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><Link href="/Docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">AppKit Framework</Link></li>
                  <li><Link href="/Docs/developers/tooling/sigma-rust" className="text-cyan-400 hover:underline">Sigma-Rust SDK</Link></li>
                  <li><a href="https://github.com/capt-nemo429/fleet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Fleet (JavaScript) <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* First Smart Contract */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-6 h-6 text-orange-400" /> Write & Deploy Your First Smart Contract
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Learning Path</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><Link href="/Docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">Quick Intro to ErgoScript</Link></li>
                  <li><Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:underline">Hello, World Contract Tutorial</Link></li>
                  <li><Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">Interacting with the Blockchain</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-3">Deployment & Testing</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><Link href="/Docs/developers/infrastructure" className="text-cyan-400 hover:underline">Deploy & Test on Testnet</Link></li>
                  <li><Link href="/Docs/developers/tooling/testing" className="text-cyan-400 hover:underline">Testing Tools & Frameworks</Link></li>
                  <li><a href="https://thierrym1212.github.io/txbuilder/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Transaction Builder <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3 text-purple-400">
              <ArrowRight className="w-6 h-6" />
              Next Steps & Advanced Topics
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Expand Your Knowledge</h3>
                <ul className="list-disc pl-6 text-cyan-400 space-y-2">
                  <li><Link href="/Docs/developers/ergoscript-languages" className="hover:underline">Deep-dive into ErgoScript & Languages</Link></li>
                  <li><Link href="/Docs/developers/cryptographic-primitives" className="hover:underline">Learn about Cryptographic Primitives</Link></li>
                  <li><Link href="/Docs/developers/tutorials" className="hover:underline">Explore Community Tutorials</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-3">Community & Support</h3>
                <ul className="list-disc pl-6 text-cyan-400 space-y-2">
                  <li><Link href="/Docs/developers/community-support" className="hover:underline">Join Developer Community</Link></li>
                  <li><Link href="/Docs/developers/bounties-grants" className="hover:underline">Apply for Grants & Bounties</Link></li>
                  <li><a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="hover:underline">Discord #dev-support <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-neutral-800/50 rounded-lg">
              <p className="text-gray-400 text-sm">
                💡 <strong>Pro Tip:</strong> If you're new to blockchain development, start with the{" "}
                <Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:underline">tutorial section</Link>
                {" "}and don't hesitate to ask questions in our community channels!
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center">
            <Link
              href="/Docs/developers/tutorials"
              className="bg-gradient-to-r from-orange-500 to-cyan-500 hover:from-orange-600 hover:to-cyan-600 text-black font-bold py-3 px-8 rounded-xl flex items-center gap-2 text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5" />
              Start Building Your First dApp!
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="ergoscript" className="space-y-6">
          {/* ErgoScript Hero */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Code className="w-8 h-8 text-purple-400" /> ErgoScript Programming
            </h2>
            <p className="text-lg text-gray-300">
              ErgoScript is Ergo's smart contract language, based on Sigma protocols and designed for powerful, secure, and privacy-preserving applications.
            </p>
          </div>

          {/* ErgoScript Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Language Features</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Functional programming paradigm</li>
                <li>Strong typing system</li>
                <li>Built-in cryptographic operations</li>
                <li>Sigma protocol integration</li>
                <li>Box (UTXO) manipulation</li>
                <li>Context-aware programming</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">Getting Started</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><Link href="/Docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">ErgoScript Documentation</Link></li>
                <li><a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Try ErgoScript Online <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                <li><Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:underline">Step-by-step Tutorials</Link></li>
                <li><Link href="/Docs/developers/tooling/ergoscript-by-example" className="text-cyan-400 hover:underline">ErgoScript by Example</Link></li>
              </ul>
            </div>
          </div>

          {/* Development Tools */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Wrench className="w-6 h-6 text-orange-400" /> Development Tools & SDKs
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-orange-300 mb-3">Java/Scala</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><Link href="/Docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">AppKit Framework</Link></li>
                  <li><Link href="/Docs/developers/tooling/jde" className="text-cyan-400 hover:underline">JDE (Java Dev Environment)</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Rust</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><Link href="/Docs/developers/tooling/sigma-rust" className="text-cyan-400 hover:underline">Sigma-Rust SDK</Link></li>
                  <li><Link href="/Docs/developers/tooling/headless" className="text-cyan-400 hover:underline">Headless dApp Framework</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-3">JavaScript/Python</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><a href="https://github.com/capt-nemo429/fleet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Fleet (JS) <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                  <li><a href="https://github.com/mgpai22/ergpy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgPy (Python) <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Learning Resources */}
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-cyan-400" /> Learning Resources
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Documentation</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><Link href="/Docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">Complete ErgoScript Guide</Link></li>
                  <li><Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">Data Model Reference</Link></li>
                  <li><Link href="/Docs/developers/box" className="text-cyan-400 hover:underline">Understanding Boxes</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Interactive Learning</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><a href="https://ergotutorials.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoTutorials.com <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                  <li><a href="https://ergobot.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">General Ergo Chatbot <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                  <li><a href="https://ergoscriptbot.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Chatbot <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tooling" className="space-y-6">
          {/* Comprehensive tooling content */}
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-green-400" /> Development Tooling
            </h2>
            <p className="text-lg text-gray-300">
              Comprehensive suite of tools, SDKs, and frameworks to accelerate your Ergo development workflow.
            </p>
          </div>

          {/* Main Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/Docs/developers/tooling/appkit" className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/30 transition-colors">
              <Code className="w-8 h-8 text-orange-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-300">AppKit</h3>
              <p className="text-gray-300 text-sm">Java-based development framework for building Ergo applications</p>
            </Link>

            <Link href="/Docs/developers/tooling/sigma-rust" className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-red-500/30 transition-colors">
              <Terminal className="w-8 h-8 text-red-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-300">Sigma-Rust</h3>
              <p className="text-gray-300 text-sm">Rust SDK for ErgoScript development and transaction building</p>
            </Link>

            <Link href="/Docs/developers/tooling/headless" className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
              <Globe className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300">Headless dApp</h3>
              <p className="text-gray-300 text-sm">Framework for building decentralized applications without UI</p>
            </Link>

            <Link href="/Docs/developers/tooling/mosaik" className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
              <Layers className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300">Mosaik</h3>
              <p className="text-gray-300 text-sm">UI toolkit for building user interfaces for Ergo dApps</p>
            </Link>

            <Link href="/Docs/developers/tooling/jde" className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-green-500/30 transition-colors">
              <Database className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300">JDE</h3>
              <p className="text-gray-300 text-sm">Java Development Environment for Ergo smart contracts</p>
            </Link>

            <a href="https://github.com/capt-nemo429/fleet" target="_blank" rel="noopener noreferrer" className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
              <Network className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-300 flex items-center gap-2">
                Fleet <ExternalLink className="w-4 h-4" />
              </h3>
              <p className="text-gray-300 text-sm">JavaScript library for Ergo blockchain interactions</p>
            </a>
          </div>

          {/* Testing & Analysis */}
          <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-400" /> Testing & Analysis Tools
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Testing Frameworks</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><Link href="/Docs/developers/tooling/testing" className="text-cyan-400 hover:underline">Testing Tools Overview</Link></li>
                  <li><Link href="/Docs/developers/tooling/debugging" className="text-cyan-400 hover:underline">Debugging Techniques</Link></li>
                  <li><Link href="/Docs/developers/tooling/ergoscript-by-example" className="text-cyan-400 hover:underline">ErgoScript by Example</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-3">Analysis & Utilities</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><a href="https://thierrym1212.github.io/txbuilder/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Transaction Builder <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                  <li><a href="https://wallet.plutomonkey.com/p2s/?source=dHJ1ZQ==" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">P2S Playground <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                  <li><a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Online IDE <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Infrastructure Tools */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Server className="w-6 h-6 text-orange-400" /> Infrastructure & APIs
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-orange-300 mb-3">Blockchain APIs</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><a href="https://api.ergoplatform.com/api/v1/docs/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Official API <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                  <li><a href="https://api.ergo.watch/docs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo.Watch API <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Explorers</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><a href="https://explorer.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Mainnet Explorer <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                  <li><a href="https://testnet.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Testnet Explorer <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Node Setup</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><Link href="/Docs/developers/infrastructure/node" className="text-cyan-400 hover:underline">Node Configuration</Link></li>
                  <li><Link href="/Docs/developers/infrastructure" className="text-cyan-400 hover:underline">Infrastructure Guide</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          {/* Enhanced Resources Tab */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-400" /> Developer Resources
            </h2>
            <p className="text-lg text-gray-300">
              Comprehensive resources for Ergo developers - from getting started to advanced topics, tools, and community support.
            </p>
          </div>

          {/* Quick Navigation Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="#core-docs" className="group bg-green-500/10 border border-green-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-200">
              <Zap className="w-5 h-5 text-green-400 mb-2" />
              <h3 className="text-sm font-semibold text-green-400">Core Docs</h3>
              <p className="text-xs text-gray-400">Essential guides</p>
            </Link>

            <Link href="#dev-tools" className="group bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-200">
              <Database className="w-5 h-5 text-blue-400 mb-2" />
              <h3 className="text-sm font-semibold text-blue-400">Dev Tools</h3>
              <p className="text-xs text-gray-400">SDKs & frameworks</p>
            </Link>

            <Link href="#blockchain-infra" className="group bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-200">
              <Code className="w-5 h-5 text-purple-400 mb-2" />
              <h3 className="text-sm font-semibold text-purple-400">Infrastructure</h3>
              <p className="text-xs text-gray-400">Node & APIs</p>
            </Link>

            <Link href="#learning" className="group bg-pink-500/10 border border-pink-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-200">
              <Users className="w-5 h-5 text-pink-400 mb-2" />
              <h3 className="text-sm font-semibold text-pink-400">Learning</h3>
              <p className="text-xs text-gray-400">Tutorials & guides</p>
            </Link>
          </div>

          {/* Core Documentation */}
          <div id="core-docs" className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-400" /> Core Documentation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-300">Fundamentals</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/Docs/developers/box" className="text-cyan-400 hover:underline">Boxes (UTXO)</Link></li>
                  <li><Link href="/Docs/developers/data-model-apis" className="text-cyan-400 hover:underline">Data Model & APIs</Link></li>
                  <li><Link href="/Docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">ErgoScript Languages</Link></li>
                  <li><Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:underline">Tutorials & Examples</Link></li>
                  <li><Link href="/Docs/introduction/eutxo" className="text-cyan-400 hover:underline">eUTXO Model</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-300">Cryptography</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">Cryptographic Primitives</Link></li>
                  <li><Link href="/Docs/developers/cryptographic-primitives/schnorr" className="text-cyan-400 hover:underline">Schnorr Signatures</Link></li>
                  <li><Link href="/Docs/developers/cryptographic-primitives/merkle-tree" className="text-cyan-400 hover:underline">Merkle Trees</Link></li>
                  <li><Link href="/Docs/developers/cryptographic-primitives/avl" className="text-cyan-400 hover:underline">AVL+ Trees</Link></li>
                  <li><Link href="/Docs/developers/cryptographic-primitives/zerojoin" className="text-cyan-400 hover:underline">ZeroJoin Mixer</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Infrastructure</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/Docs/developers/infrastructure" className="text-cyan-400 hover:underline">Infrastructure Overview</Link></li>
                  <li><Link href="/Docs/developers/infrastructure/node" className="text-cyan-400 hover:underline">Node Setup & Config</Link></li>
                  <li><Link href="/Docs/developers/infrastructure/mining" className="text-cyan-400 hover:underline">Mining Integration</Link></li>
                  <li><Link href="/Docs/miners" className="text-cyan-400 hover:underline">Miners Resources</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development Tools & SDKs */}
          <div id="dev-tools" className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Wrench className="w-6 h-6 text-orange-400" /> Development Tools & SDKs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-300">Official SDKs</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/Docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">AppKit (Java)</Link></li>
                  <li><Link href="/Docs/developers/tooling/sigma-rust" className="text-cyan-400 hover:underline">Sigma-Rust</Link></li>
                  <li><Link href="/Docs/developers/tooling/headless" className="text-cyan-400 hover:underline">Headless dApp Framework</Link></li>
                  <li><Link href="/Docs/developers/tooling/mosaik" className="text-cyan-400 hover:underline">Mosaik UI Toolkit</Link></li>
                  <li><Link href="/Docs/developers/tooling/jde" className="text-cyan-400 hover:underline">JDE (Java)</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-yellow-300">Community Libraries</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="https://github.com/mgpai22/ergpy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgPy (Python) <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://github.com/ergo-pad/ergo-python-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Python AppKit <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://github.com/capt-nemo429/fleet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Fleet (JavaScript) <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-300">Testing & Analysis</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/Docs/developers/tooling/ergoscript-by-example" className="text-cyan-400 hover:underline">ErgoScript by Example</Link></li>
                  <li><Link href="/Docs/developers/tooling/testing" className="text-cyan-400 hover:underline">Testing Tools</Link></li>
                  <li><Link href="/Docs/developers/tooling/debugging" className="text-cyan-400 hover:underline">Debugging Guide</Link></li>
                  <li><a href="https://thierrym1212.github.io/txbuilder/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Transaction Builder <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Blockchain Infrastructure */}
          <div id="blockchain-infra" className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Server className="w-6 h-6 text-cyan-400" /> Blockchain Infrastructure
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-cyan-300">APIs & Explorers</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="https://explorer.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Mainnet Explorer <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://testnet.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Testnet Explorer <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://api.ergoplatform.com/api/v1/docs/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">API Documentation <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://api.ergo.watch/docs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo.Watch API <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-300">Development Environment</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/Docs/developers/infrastructure/node" className="text-cyan-400 hover:underline">Node Configuration</Link></li>
                  <li><a href="https://testnet.ergofaucet.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Testnet Faucet <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://nautiluswallet.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Nautilus Wallet <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
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

          {/* Standards & EIPs */}
          <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-purple-400" /> Standards & EIPs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Token Standards</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/Docs/ecosystem/Standards/eip-0004" className="text-cyan-400 hover:underline">EIP-4: Asset Standard</Link></li>
                  <li><Link href="/Docs/ecosystem/Standards/eip-0021" className="text-cyan-400 hover:underline">EIP-21: Token Verification</Link></li>
                  <li><Link href="/Docs/ecosystem/Standards/eip-0022" className="text-cyan-400 hover:underline">EIP-22: Auction Contract</Link></li>
                  <li><Link href="/Docs/ecosystem/Standards/eip-0024" className="text-cyan-400 hover:underline">EIP-24: Artwork Contract</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-300">Payment Standards</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/Docs/ecosystem/Standards/eip-0020" className="text-cyan-400 hover:underline">EIP-20: ErgoPay</Link></li>
                  <li><Link href="/Docs/ecosystem/Standards/eip-0025" className="text-cyan-400 hover:underline">EIP-25: Payment URI</Link></li>
                  <li><Link href="/Docs/ecosystem/Standards/eip-0017" className="text-cyan-400 hover:underline">EIP-17: Proxy Contracts</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-300">All Standards</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/Docs/ecosystem/Standards" className="text-cyan-400 hover:underline">Browse All EIP Standards</Link></li>
                  <li><a href="https://github.com/ergoplatform/eips" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">EIPs Repository <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* External Resources */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Link2 className="w-6 h-6 text-cyan-400" /> External Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-cyan-300">Community Sites</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="https://github.com/ergoplatform/awesome-ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Awesome Ergo <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://ergonaut.space/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergonaut Space <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://ergosites.github.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoSites Directory <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-300">Official Resources</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="https://github.com/ergoplatform/ergo/wiki" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoWiki <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub Organization <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://sigmaverse.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Sigmaverse Portal <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
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
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          {/* Community content remains the same */}
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-xl p-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Users className="w-8 h-8 text-pink-400" /> Developer Community
            </h2>
            <p className="text-lg text-gray-300">
              Join the vibrant Ergo developer community. Get help, collaborate on projects, and contribute to the ecosystem.
            </p>
          </div>

          {/* Community Channels */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-pink-300 mb-4">Communication Channels</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">Discord #dev-support</a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <a href="https://t.me/ergodevs" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">Telegram: Ergo Devs</a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-green-400" />
                  <a href="https://www.ergoforum.org/" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">Ergo Forum</a>
                </li>
                <li className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-gray-400" />
                  <a href="https://github.com/ergoplatform" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">GitHub Organization</a>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Support & Funding</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/Docs/developers/bounties-grants" className="text-cyan-400 hover:underline">Bounties & Grants Program</Link></li>
                <li><Link href="/Docs/developers/community-support" className="text-cyan-400 hover:underline">Community Support Resources</Link></li>
                <li><Link href="/Docs/developers/students" className="text-cyan-400 hover:underline">Students & Beginners Guide</Link></li>
                <li><a href="https://ergonaut.space/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergonaut Space Community</a></li>
              </ul>
            </div>
          </div>

          {/* Contribution */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-orange-400" /> How to Contribute
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-orange-300 mb-3">Code Contributions</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Core protocol development</li>
                  <li>SDK and tooling improvements</li>
                  <li>Documentation updates</li>
                  <li>Bug fixes and optimizations</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Content Creation</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Tutorial writing</li>
                  <li>Technical blog posts</li>
                  <li>Video content</li>
                  <li>Community workshops</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Community Support</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Helping newcomers</li>
                  <li>Testing and feedback</li>
                  <li>Event organization</li>
                  <li>Translation work</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-cyan-400" /> Featured Community Projects
            </h3>
            <p className="text-gray-300 mb-4">Explore what the community is building and get inspired for your next project.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/Docs/ecosystem" className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 hover:border-cyan-500/30 transition-colors">
                <h4 className="font-semibold text-cyan-300 mb-2">Ecosystem Directory</h4>
                <p className="text-gray-400 text-sm">Browse all projects built on Ergo</p>
              </Link>
              <a href="https://sigmaverse.io/" target="_blank" rel="noopener noreferrer" className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 hover:border-purple-500/30 transition-colors">
                <h4 className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                  Sigmaverse <ExternalLink className="w-4 h-4" />
                </h4>
                <p className="text-gray-400 text-sm">Discover dApps and services</p>
              </a>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 