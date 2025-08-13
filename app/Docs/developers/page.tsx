"use client";

import React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Info, BookOpen, Code, Users, ExternalLink, Zap, Key, Layers, Shield, Wrench, ChevronRight, 
  Cpu, Globe, FileText, Terminal, Book, MessageCircle, Rocket, Server, Wallet, FlaskConical,
  Gift, Database, Package, GitBranch, Activity, Settings, HelpCircle, GraduationCap,
  Play, Coffee, Lightbulb, Target, Award, Sparkles, Building, Calendar, Hash, Lock
} from "lucide-react";

export default function DevelopersGuide() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Developer Hub
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Everything you need to build on Ergo: from getting started to advanced development
        </p>
      </div>

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
            <Book className="w-4 h-4" /> Resources
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2 justify-center">
            <Users className="w-4 h-4" /> Community
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="space-y-8">
            {/* Why Build on Ergo */}
            <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-orange-400" /> Why Build on Ergo?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-3">Technical Excellence</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-green-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">Proven security with Autolykos PoW consensus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Database className="w-4 h-4 text-green-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">Extended UTXO model for powerful smart contracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-green-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">Advanced cryptography with Σ-protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Activity className="w-4 h-4 text-green-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">Storage rent for long-term sustainability</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-3">Developer Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Code className="w-4 h-4 text-blue-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">ErgoScript: Simple yet powerful contract language</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Package className="w-4 h-4 text-blue-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">Rich ecosystem of SDKs and tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Gift className="w-4 h-4 text-blue-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">Grants and bounties for developers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-blue-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">Active and supportive community</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Key className="w-5 h-5 text-cyan-400" /> Core Platform Features
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">eUTXO Model</h3>
                  <p className="text-gray-400 text-sm">Extended UTXO combines Bitcoin's security with smart contract capabilities</p>
                  <Link href="/Docs/introduction/eutxo" className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 inline-flex items-center">
                    Learn more <ChevronRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">NIPoPoWs</h3>
                  <p className="text-gray-400 text-sm">Non-interactive proofs enable light clients and sidechains</p>
                  <Link href="/Docs/introduction/nipopows" className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 inline-flex items-center">
                    Learn more <ChevronRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Storage Rent</h3>
                  <p className="text-gray-400 text-sm">Economic model for sustainable blockchain storage</p>
                  <Link href="/Docs/introduction/storage-rent" className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 inline-flex items-center">
                    Learn more <ChevronRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="#" onClick={() => {
                      const element = document.querySelector('[value="getting-started"]') as HTMLButtonElement;
                      if (element) element.click();
                    }} 
                    className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400/50 transition-all">
                <Rocket className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400">Quick Start</h3>
                <p className="text-gray-400 text-sm">Set up your environment and deploy your first contract in minutes</p>
              </Link>
              <Link href="/Docs/ecosystem/tooling" 
                    className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
                <Wrench className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400">Explore Tools</h3>
                <p className="text-gray-400 text-sm">SDKs, libraries, and frameworks for building on Ergo</p>
              </Link>
              <Link href="/Docs/developers/tutorials" 
                    className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-green-400/50 transition-all">
                <GraduationCap className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400">Tutorials</h3>
                <p className="text-gray-400 text-sm">Step-by-step guides for common development tasks</p>
              </Link>
            </div>
          </div>
        </TabsContent>

        {/* Getting Started Tab */}
        <TabsContent value="getting-started">
          <div className="space-y-8">
            {/* Quick Start Steps */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-green-400" /> Quick Start Guide
              </h2>
              
              {/* Step 1 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold">1</span>
                  Set Up Your Development Environment
                </h3>
                <div className="ml-10 space-y-3">
                  <div className="bg-neutral-900/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Install Node.js & npm</h4>
                    <p className="text-gray-400 text-sm mb-2">Required for most Ergo development tools</p>
                    <code className="bg-black px-3 py-1 rounded text-sm text-green-400">npm install -g @ergoplatform/ergo-js</code>
                  </div>
                  <div className="bg-neutral-900/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Get a Wallet</h4>
                    <p className="text-gray-400 text-sm mb-2">Install Nautilus for development</p>
                    <a href="https://nautiluswallet.io" target="_blank" rel="noopener noreferrer" 
                       className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                      Download Nautilus <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold">2</span>
                  Get Test ERG
                </h3>
                <div className="ml-10 bg-neutral-900/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Use the testnet faucet to get test tokens</p>
                  <a href="https://testnet.ergofaucet.org" target="_blank" rel="noopener noreferrer" 
                     className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                    Testnet Faucet <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold">3</span>
                  Write Your First Contract
                </h3>
                <div className="ml-10 bg-neutral-900/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-3">Simple P2PK (Pay to Public Key) contract:</p>
                  <pre className="bg-black rounded-lg p-3 overflow-x-auto">
                    <code className="text-green-400 text-sm">{`{
  val recipientPubKey = PK("9f...")
  recipientPubKey
}`}</code>
                  </pre>
                  <a href="https://escript.online" target="_blank" rel="noopener noreferrer" 
                     className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center mt-3">
                    Try in Playground <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold">4</span>
                  Deploy & Interact
                </h3>
                <div className="ml-10 bg-neutral-900/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Use AppKit to deploy and interact with contracts</p>
                  <Link href="/Docs/developers/data-model-apis" 
                        className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                    AppKit Documentation <ChevronRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Development Paths */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-400" /> Choose Your Path
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400" /> DeFi Development
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Build DEXs, lending protocols, and financial instruments</p>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/Docs/ecosystem/financial" className="text-cyan-400 hover:text-cyan-300">→ DeFi Ecosystem</Link></li>
                    <li><Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:text-cyan-300">→ DeFi Tutorials</Link></li>
                  </ul>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-400" /> NFT & Gaming
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Create NFT marketplaces and blockchain games</p>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/Docs/ecosystem/nfts" className="text-cyan-400 hover:text-cyan-300">→ NFT Ecosystem</Link></li>
                    <li><Link href="/Docs/developers/tutorials" className="text-cyan-400 hover:text-cyan-300">→ NFT Standards</Link></li>
                  </ul>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Building className="w-4 h-4 text-green-400" /> Infrastructure
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Build tools, oracles, and blockchain infrastructure</p>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/Docs/developers/infrastructure" className="text-cyan-400 hover:text-cyan-300">→ Infrastructure Guide</Link></li>
                    <li><Link href="/Docs/ecosystem/infrastructure" className="text-cyan-400 hover:text-cyan-300">→ Existing Tools</Link></li>
                  </ul>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-400" /> Cross-Chain
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Build bridges and cross-chain applications</p>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/Docs/introduction/nipopow-sidechains" className="text-cyan-400 hover:text-cyan-300">→ Sidechains</Link></li>
                    <li><a href="https://rosen.tech" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">→ Rosen Bridge</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* ErgoScript Tab */}
        <TabsContent value="ergoscript">
          <div className="space-y-8">
            {/* ErgoScript Overview */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-purple-400" /> ErgoScript Language
              </h2>
              <p className="text-gray-300 mb-4">
                ErgoScript is a powerful yet simple language for writing smart contracts on Ergo. Based on Scala, it provides strong typing, 
                functional programming, and advanced cryptographic operations through Sigma protocols.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-neutral-900/50 rounded-lg p-3">
                  <h4 className="font-semibold text-white mb-1">Type-Safe</h4>
                  <p className="text-gray-400 text-sm">Strong typing prevents errors</p>
                </div>
                <div className="bg-neutral-900/50 rounded-lg p-3">
                  <h4 className="font-semibold text-white mb-1">Functional</h4>
                  <p className="text-gray-400 text-sm">Pure functions, no side effects</p>
                </div>
                <div className="bg-neutral-900/50 rounded-lg p-3">
                  <h4 className="font-semibold text-white mb-1">Cryptographic</h4>
                  <p className="text-gray-400 text-sm">Built-in Σ-protocols support</p>
                </div>
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" /> Learning ErgoScript
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-3">📚 Courses & Tutorials</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://www.youtube.com/watch?v=SAWeW6wajEw" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                        DeCo EU Layman Class <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="https://deco-education.github.io/deco-docs" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                        DeCo Education Docs <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/ergoplatform/ergoscript-by-example" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                        ErgoScript by Example <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <Link href="/Docs/introduction/ergoscript-primer" 
                            className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                        ErgoScript Primer <ChevronRight className="w-3 h-3 ml-1" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-3">🛠️ Practice Tools</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://escript.online" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                        ErgoScript Playground <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="https://scastie.scala-lang.org" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                        Scastie (Scala) <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <Link href="/Docs/introduction/plutomonkey" 
                            className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                        PlutoMonkey Compiler <ChevronRight className="w-3 h-3 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/Docs/introduction/puppet" 
                            className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                        Ergo-Puppet Testing <ChevronRight className="w-3 h-3 ml-1" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Code Examples */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-green-400" /> Common Patterns
              </h2>
              
              <div className="space-y-4">
                <div className="bg-black rounded-lg p-4">
                  <h4 className="text-green-400 font-mono text-sm mb-2"># Multi-signature (2-of-3)</h4>
                  <pre className="text-gray-300 text-sm overflow-x-auto">{`{
  val alice = PK("alice_pubkey")
  val bob = PK("bob_pubkey")
  val carol = PK("carol_pubkey")
  
  atLeast(2, Coll(alice, bob, carol))
}`}</pre>
                </div>
                
                <div className="bg-black rounded-lg p-4">
                  <h4 className="text-green-400 font-mono text-sm mb-2"># Time-locked contract</h4>
                  <pre className="text-gray-300 text-sm overflow-x-auto">{`{
  val deadline = 750000 // block height
  val recipient = PK("recipient_pubkey")
  
  sigmaProp(HEIGHT > deadline) && recipient
}`}</pre>
                </div>
                
                <div className="bg-black rounded-lg p-4">
                  <h4 className="text-green-400 font-mono text-sm mb-2"># Token minting</h4>
                  <pre className="text-gray-300 text-sm overflow-x-auto">{`{
  val tokenId = SELF.id
  val mintAmount = 1000000L
  
  OUTPUTS(0).tokens(0)._1 == tokenId &&
  OUTPUTS(0).tokens(0)._2 == mintAmount
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tooling Tab */}
        <TabsContent value="tooling">
          <div className="space-y-8">
            {/* SDKs & Libraries */}
            <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-blue-400" /> SDKs & Libraries
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Hash className="w-4 h-4 text-yellow-400" /> JavaScript/TypeScript
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://github.com/fleet-sdk/fleet" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm">Fleet SDK - Modern TypeScript SDK</a>
                    </li>
                    <li>
                      <a href="https://github.com/ergoplatform/ergo-js" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm">Ergo-JS - Official JavaScript SDK</a>
                    </li>
                    <li>
                      <a href="https://github.com/nautls/nautilus-wallet" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm">Nautilus Connector</a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-orange-400" /> JVM Languages
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm">AppKit - Java/Kotlin/Scala SDK</a>
                    </li>
                    <li>
                      <a href="https://github.com/ergoplatform/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm">Sigmastate Interpreter</a>
                    </li>
                    <li>
                      <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm">Ergo Node</a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-red-400" /> Rust
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://github.com/ergoplatform/sigma-rust" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm">Sigma-Rust - Rust implementation</a>
                    </li>
                    <li>
                      <a href="https://github.com/spectrum-finance/ergo-lib-wasm" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm">Ergo-lib WASM bindings</a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-purple-400" /> Other Languages
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://github.com/anetabtc/aneta-sdk-python" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm">Python SDK (Community)</a>
                    </li>
                    <li>
                      <a href="https://github.com/ergo-pad/ergo-python-appkit" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm">Python AppKit Wrapper</a>
                    </li>
                    <li>
                      <a href="https://github.com/ross-weir/ergo-golang" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 text-sm">Go SDK (Community)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-orange-400" /> Development Tools
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">IDE Support</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="https://github.com/GuapSwap/vscode-ergoscript" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">VSCode Extension</a>
                    </li>
                    <li>
                      <a href="https://github.com/scalahub/ergo-intellij-plugin" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">IntelliJ Plugin</a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Testing</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <Link href="/Docs/introduction/puppet" className="text-cyan-400 hover:text-cyan-300">
                        Ergo-Puppet
                      </Link>
                    </li>
                    <li>
                      <a href="https://github.com/anon-real/contract-testing" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">Contract Testing</a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Deployment</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <Link href="/Docs/introduction/plutomonkey" className="text-cyan-400 hover:text-cyan-300">
                        PlutoMonkey
                      </Link>
                    </li>
                    <li>
                      <Link href="/Docs/introduction/compiler" className="text-cyan-400 hover:text-cyan-300">
                        CLI Compiler
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" /> Infrastructure & APIs
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Node & Explorer</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="https://explorer.ergoplatform.com" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">Ergo Explorer</a>
                    </li>
                    <li>
                      <a href="https://api.ergoplatform.com/api/v1/docs" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">Node API Docs</a>
                    </li>
                    <li>
                      <Link href="/Docs/developers/infrastructure" className="text-cyan-400 hover:text-cyan-300">
                        Run Your Own Node
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Data Services</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="https://graphql.erg.zelcore.io" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">GraphQL API</a>
                    </li>
                    <li>
                      <a href="https://api.tokenjay.app" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">TokenJay API</a>
                    </li>
                    <li>
                      <a href="https://ergo.watch" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">Ergo.Watch Stats</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources">
          <div className="space-y-8">
            {/* Documentation */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Book className="w-6 h-6 text-indigo-400" /> Documentation & Guides
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <a href="https://ergoplatform.org/docs/whitepaper.pdf" target="_blank" rel="noopener noreferrer" 
                   className="bg-neutral-900/50 rounded-lg p-4 hover:bg-neutral-800/50 transition-colors">
                  <FileText className="w-6 h-6 text-orange-400 mb-2" />
                  <h4 className="font-semibold text-white mb-1">Ergo Whitepaper</h4>
                  <p className="text-gray-400 text-sm">Technical foundation and vision</p>
                </a>
                
                <a href="https://ergoplatform.org/docs/ErgoScript.pdf" target="_blank" rel="noopener noreferrer" 
                   className="bg-neutral-900/50 rounded-lg p-4 hover:bg-neutral-800/50 transition-colors">
                  <FileText className="w-6 h-6 text-cyan-400 mb-2" />
                  <h4 className="font-semibold text-white mb-1">ErgoScript Paper</h4>
                  <p className="text-gray-400 text-sm">Language specification</p>
                </a>
                
                <a href="https://ergoplatform.org/docs/AdvancedErgoScriptTutorial.pdf" target="_blank" rel="noopener noreferrer" 
                   className="bg-neutral-900/50 rounded-lg p-4 hover:bg-neutral-800/50 transition-colors">
                  <FileText className="w-6 h-6 text-green-400 mb-2" />
                  <h4 className="font-semibold text-white mb-1">Advanced Tutorial</h4>
                  <p className="text-gray-400 text-sm">Deep dive into ErgoScript</p>
                </a>
              </div>
            </div>

            {/* Video Resources */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Play className="w-5 h-5 text-red-400" /> Video Tutorials
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <a href="https://www.youtube.com/watch?v=8l2v1asHgyA" target="_blank" rel="noopener noreferrer" 
                   className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-800 transition-colors">
                  <h4 className="font-semibold text-white mb-1">Learn ErgoScript By Example</h4>
                  <p className="text-gray-400 text-sm">Hands-on playground tutorial</p>
                </a>
                
                <a href="https://www.youtube.com/playlist?list=PL8-KVrs6vXLTVXGwmYXjOBRx3VymB4Vm2" target="_blank" rel="noopener noreferrer" 
                   className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-800 transition-colors">
                  <h4 className="font-semibold text-white mb-1">Ergo Crash Course</h4>
                  <p className="text-gray-400 text-sm">Complete blockchain overview</p>
                </a>
                
                <a href="https://www.youtube.com/watch?v=qR0_k7VH6KI&list=PLopsKGshj0B4BpMoSMh5hQk8gVfWk-si6" target="_blank" rel="noopener noreferrer" 
                   className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-800 transition-colors">
                  <h4 className="font-semibold text-white mb-1">DeCo Intro Lessons</h4>
                  <p className="text-gray-400 text-sm">Programming basics for beginners</p>
                </a>
                
                <a href="https://www.youtube.com/watch?v=SAWeW6wajEw" target="_blank" rel="noopener noreferrer" 
                   className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-800 transition-colors">
                  <h4 className="font-semibold text-white mb-1">eUTXO Basics</h4>
                  <p className="text-gray-400 text-sm">Understanding the transaction model</p>
                </a>
              </div>
            </div>

            {/* Example Projects */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-green-400" /> Example Projects & Boilerplates
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Frontend Templates</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="https://github.com/SavonarolaLabs/ergo-web-template" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">Ergo Web Template</a>
                    </li>
                    <li>
                      <a href="https://github.com/kii-dot/scala-play-next-ergo" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">Scala Play + Next.js</a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Backend Examples</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="https://github.com/kii-dot/ergo-play-boilerplate" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">Play Framework Boilerplate</a>
                    </li>
                    <li>
                      <a href="https://github.com/dav009/ergo-scala-skeleton-app" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">Scala Skeleton App</a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Smart Contracts</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="https://github.com/ergoplatform/ergoscript-by-example" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">ErgoScript Examples</a>
                    </li>
                    <li>
                      <a href="https://github.com/ergoplatform/ergo-playgrounds" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">Ergo Playgrounds</a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">DeFi Examples</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="https://github.com/spectrum-finance" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">Spectrum Finance</a>
                    </li>
                    <li>
                      <a href="https://github.com/Ergo-Lend" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300">Ergo Lend</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community">
          <div className="space-y-8">
            {/* Join the Community */}
            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-400" /> Join the Developer Community
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" 
                   className="bg-neutral-900/50 rounded-lg p-6 hover:bg-neutral-800/50 transition-colors text-center">
                  <MessageCircle className="w-10 h-10 text-[#5865F2] mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-1">Discord</h4>
                  <p className="text-gray-400 text-sm mb-3">Real-time chat & support</p>
                  <span className="text-cyan-400 text-sm">#dev-support channel</span>
                </a>
                
                <a href="https://t.me/ergodevs" target="_blank" rel="noopener noreferrer" 
                   className="bg-neutral-900/50 rounded-lg p-6 hover:bg-neutral-800/50 transition-colors text-center">
                  <MessageCircle className="w-10 h-10 text-[#0088cc] mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-1">Telegram</h4>
                  <p className="text-gray-400 text-sm mb-3">Developer discussions</p>
                  <span className="text-cyan-400 text-sm">@ergodevs</span>
                </a>
                
                <a href="https://www.ergoforum.org" target="_blank" rel="noopener noreferrer" 
                   className="bg-neutral-900/50 rounded-lg p-6 hover:bg-neutral-800/50 transition-colors text-center">
                  <Users className="w-10 h-10 text-orange-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-1">Forum</h4>
                  <p className="text-gray-400 text-sm mb-3">Long-form discussions</p>
                  <span className="text-cyan-400 text-sm">ergoforum.org</span>
                </a>
              </div>
            </div>

            {/* Events & Hackathons */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" /> Events & Hackathons
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🏆 ERGOHACK</h4>
                  <p className="text-gray-400 text-sm mb-3">Regular hackathons with prizes and mentorship</p>
                  <Link href="/events" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    View upcoming events →
                  </Link>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">📚 Developer Workshops</h4>
                  <p className="text-gray-400 text-sm mb-3">Learn from core developers and ecosystem builders</p>
                  <a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" 
                     className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Join Discord for announcements →
                  </a>
                </div>
              </div>
            </div>

            {/* Grants & Bounties */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Gift className="w-6 h-6 text-yellow-400" /> Grants & Bounties
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-3">💰 Developer Grants</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Get funding for building on Ergo. Grants available for infrastructure, tooling, DeFi, and more.
                  </p>
                  <Link href="/Docs/developers/bounties-grants" 
                        className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                    Apply for grants <ChevronRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
                
                <div>
                  <h3 className="font-semibold text-white mb-3">🎯 Bug Bounties</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Help secure the network and earn rewards for finding vulnerabilities.
                  </p>
                  <a href="https://github.com/ergoplatform/ergo/security" target="_blank" rel="noopener noreferrer" 
                     className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                    View bounty program <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contributing */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-green-400" /> Contributing to Ergo
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Core Protocol</h4>
                  <p className="text-gray-400 text-sm mb-2">Contribute to Ergo node and core libraries</p>
                  <a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer" 
                     className="text-cyan-400 hover:text-cyan-300 text-sm">
                    GitHub →
                  </a>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Documentation</h4>
                  <p className="text-gray-400 text-sm mb-2">Help improve docs and tutorials</p>
                  <Link href="/Docs/contribute" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Contribution guide →
                  </Link>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Ecosystem</h4>
                  <p className="text-gray-400 text-sm mb-2">Build tools, dApps, and integrations</p>
                  <Link href="/ecosystem" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Explore ecosystem →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 