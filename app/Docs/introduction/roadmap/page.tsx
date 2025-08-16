"use client";

import React, { useState } from "react";
import { Flag, TrendingUp, Layers, Users, BookOpen, Link2, ExternalLink, ListChecks, Calendar, Star, Wrench, Shield, Coins, Swords, Network, Book, Zap, Trophy, MessageSquare, Target, BarChart3, Cpu, GitBranch, Lock, ArrowRight, CheckCircle, Database, AlertTriangle, HardDrive, RefreshCw, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Main tabs for the roadmap page
const MAIN_TABS = [
  { key: "roadmap", label: "Roadmap", icon: Flag },
  { key: "scaling", label: "Scaling", icon: TrendingUp },
  { key: "layer0", label: "Layer 0", icon: Network },
  { key: "layer1", label: "Layer 1", icon: Layers },
  { key: "layer2", label: "Layer 2", icon: Zap },
];

export default function RoadmapPage() {
  return (
    <Tabs defaultValue="roadmap" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        {MAIN_TABS.map(({ key, label, icon: Icon }) => (
          <TabsTrigger key={key} value={key} className="flex items-center gap-2 justify-center">
            <Icon className="w-4 h-4" /> {label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      <TabsContent value="roadmap">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Ergo Development Roadmap & History
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Ergo is a blockchain platform designed to provide a secure, efficient, and user-friendly environment for the development of decentralized applications and financial tools. This roadmap outlines the key milestones and objectives for the development and growth of the Ergo ecosystem.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/Docs/introduction/roadmap/discussions"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 mr-2" /> Discussions
            </Link>
            <Link
              href="/Docs/introduction/roadmap/atomic-composability"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <Cpu className="w-5 h-5 mr-2" /> Atomic Composability
            </Link>
            <Link
              href="/Docs/introduction/roadmap/transaction-speed"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" /> Transaction Speed
            </Link>
          </div>
        </div>

        {/* Resources Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Resources</h2>
          
          <div className="bg-blue-400/10 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Vision & Key Features</h3>
            <p className="text-gray-300 mb-4">
              Ergo is a cutting-edge smart contract platform that provides secure, accessible, and decentralized financial tools to empower ordinary people. Utilizing a sophisticated scripting language and advanced cryptographic features, Ergo builds on fundamental blockchain principles to transform the concept of Contractual Money.
            </p>
            <p className="text-gray-300 mb-4">
              Ergo aims to establish itself as a mineable digital asset akin to "Digital Gold 2.0," supporting trustless derivatives and dynamic contracts. The development of Ergo's DeFi ecosystem and the integration of sidechains will broaden the decentralized monetary base and derivative money supply, enhancing financial inclusivity and accessibility worldwide.
            </p>
            <p className="text-gray-300 mb-6">
              Ergo's commitment to decentralization, fairness, and accessibility is evident in its adoption of the Autolykos Proof-of-Work protocol, which facilitates a user-friendly environment where lightweight clients can interact directly with the blockchain, making Ergo a practical and programmable currency ready for use.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span><strong>eUTXO Model:</strong> Allows UTXOs to carry arbitrary data and complex scripts</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span><strong>Autolykos PoW Algorithm:</strong> ASIC-resistant and designed for fair mining</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span><strong>Emission Schedule:</strong> Ensures stable and predictable supply of ERG tokens</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span><strong>NiPoPoWs:</strong> Enables efficient light clients and trustless sidechains</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span><strong>ErgoScript:</strong> Supports clear smart contract development with Σ-protocols</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span><strong>Storage Rent:</strong> Mitigates blockchain bloat and ensures sustainability</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span><strong>Turing-Complete Smart Contracts:</strong> Allows complex on-chain computations</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span><strong>Long-Term Economic Sustainability:</strong> Through storage rent and transaction fees</span>
              </div>
            </div>
            
            <p className="text-gray-400 mt-4">
              For more information please see the <Link href="/Docs/why-ergo" className="text-blue-400 hover:text-blue-300">Why Ergo?</Link> section.
            </p>
          </div>

          <div className="bg-purple-400/10 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">General Overarching Ergo Design and Implementation Roadmap</h3>
            
            <div className="space-y-4">
              <div className="bg-green-400/10 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Phase 1: Foundations ✓</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Start with the basic design of Ergo as digital gold (commodity money)</li>
                  <li>• Introduce programmability features including crypto contracts, stealth addresses, arbitrarily complex signatures, and mixing schemes</li>
                  <li>• Position Ergo as a basis for unstoppable, grassroots economies</li>
                </ul>
              </div>
              
              <div className="bg-green-400/10 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Phase 2: Initial Experiments ✓</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Conduct initial experiments to test functionality and user engagement</li>
                  <li>• Evaluate the outcomes considering the initial motivations</li>
                </ul>
              </div>
              
              <div className="bg-yellow-400/10 rounded-lg p-4">
                <h4 className="font-bold text-yellow-400 mb-2">Phase 3: Defining Adoption</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Clarify the term "adoption" as it is often ambiguous in industry discussions</li>
                  <li>• Develop metrics or KPIs to measure adoption success</li>
                </ul>
              </div>
              
              <div className="bg-blue-400/10 rounded-lg p-4">
                <h4 className="font-bold text-blue-400 mb-2">Phase 4: Scaling and Optimization</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Peer-to-peer (P2P) level optimizations and rework ✓</li>
                  <li>• Consider pre-block commitments to transaction ordering (sub-blocks)</li>
                  <li>• Aim to increase transactions per second (TPS) while maintaining security</li>
                </ul>
                <p className="text-gray-400 mt-2 text-sm">
                  <strong>Constraints:</strong> Limitations include requirements for a flat P2P network running on commodity hardware. No use of centralized data centers for scalability.
                </p>
              </div>
              
              <div className="bg-orange-400/10 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">Phase 5: Offloading Solutions</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Propose options for offloading transactions to Layer 2 or sidechains</li>
                  <li>• Introduce "Know Your Assumptions" KYA as a way to explain security in offloading options ✓</li>
                </ul>
              </div>
              
              <div className="bg-cyan-400/10 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Phase 6: Convergence</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Multiple developments in scaling, optimization, and offloading are expected to converge</li>
                  <li>• Culminating in a comprehensive solution for widespread adoption</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-400 mt-4 text-sm">
              Summarised from Kushti, 7 Aug, 2023
            </p>
          </div>

          <div className="bg-indigo-400/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Scaling Ergo</h3>
            <p className="text-gray-300 mb-4">
              Creating a scalable blockchain infrastructure is a complex task. Ergo, fortified by a decade of research, rigorous testing, and ongoing development, has risen to the challenge. This guide will walk you through Ergo's sophisticated scalability features.
            </p>
            <p className="text-gray-300 mb-4">
              Blockchain scalability is primarily influenced by three factors:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• <strong>Cryptoeconomic incentive model:</strong> Ensures miners receive suitable rewards for scaling costs</li>
              <li>• <strong>Consensus model:</strong> Determines feasibility of certain scalability solutions</li>
              <li>• <strong>Accounting model:</strong> Management of transactions and operations within the blockchain</li>
            </ul>
            <p className="text-gray-300 mb-4">
              Ergo's innovative approach to scalability sets it apart from other blockchain technologies. Unlike Ethereum's Account model, Ergo's eUTXO employs a unique strategy: transactions are created off-chain, and validation checks are conducted on-chain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <Link href="/Docs/introduction/roadmap" className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <Network className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="font-bold text-white">Layer 0</h4>
                <p className="text-gray-400 text-sm">Network/P2P Layer</p>
              </Link>
              <Link href="/Docs/introduction/roadmap" className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <Layers className="w-8 h-8 text-green-400 mb-2" />
                <h4 className="font-bold text-white">Layer 1</h4>
                <p className="text-gray-400 text-sm">Core Blockchain Layer</p>
              </Link>
              <Link href="/Docs/introduction/roadmap" className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <Zap className="w-8 h-8 text-purple-400 mb-2" />
                <h4 className="font-bold text-white">Layer 2</h4>
                <p className="text-gray-400 text-sm">Off-chain Layer</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Who develops Ergo Section */}
        <section className="mb-12">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Who develops Ergo?</h3>
            <p className="text-gray-300">
              Ergo is developed by a combination of the Ergo Foundation, community developers and the recently launched DevDAO.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Ergo Timeline</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-400/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">2019: Genesis Year</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Milestones:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>July 1:</strong> Ergo mainnet launched during the "crypto winter"</li>
                  <li>• <strong>Autumn:</strong> Ergo Foundation established</li>
                </ul>
                <p><strong>Development:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• First tools and libraries emerged</li>
                  <li>• Inaugural crowdfunding using UTXOs and smart contracts</li>
                  <li>• Zero-join paper published</li>
                  <li>• Multi-stage contracts paper by Amitabh released</li>
                  <li>• First smart contract formally verified</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-400/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">2020: Foundation Building</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Milestones:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>January 7:</strong> Introduction of the Ergo Foundation as a community-driven entity</li>
                </ul>
                <p><strong>Launches:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Ergo Mixer (initially a raw application, later improved by Anon2020)</li>
                  <li>• <strong>Late August:</strong> Oracle pools</li>
                  <li>• Zero-knowledge treasury by anon_real</li>
                  <li>• Auction House</li>
                </ul>
                <p><strong>Partnerships:</strong> Collaboration with Emurgo for joint research (Oracle Pools, SigmaUSD, headless dApp framework)</p>
                <p><strong>Listings:</strong> CoinEx, Gate.io</p>
                <p><strong>Community:</strong> Roadmap released and Discord community initiated</p>
              </div>
            </div>

            <div className="bg-purple-400/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">2021: Expansion and Recognition</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Launches:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Q1:</strong> SigmaUSD launched</li>
                </ul>
                <p><strong>Ecosystem Growth:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Spectrum DEX and DeFi ecosystem development began</li>
                  <li>• Autolykos v2 hard fork: opened Ergo to mining pools, improved liquidity</li>
                </ul>
                <p><strong>Partnerships and Listings:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Collaboration with Jinse, Chinese community expanded to 10,000+ members</li>
                  <li>• Listed on KuCoin and Changelly</li>
                </ul>
                <p><strong>Community Milestones:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• UTXO Alliance formed</li>
                  <li>• Inaugural Ergo Summit and two hackathons</li>
                </ul>
                <p><strong>Team Expansion:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Joseph Armeanio and Mark Glasgow join Ergo Foundation</li>
                  <li>• <strong>November 1:</strong> Daniel Friedman (IOHK) appointed Advisor to Ergo Foundation Board</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-400/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">2022: Technical Advancements</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Protocol Upgrades:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• EIP-27 (emission soft-fork) was implemented</li>
                  <li>• EIP-37 (difficulty retargeting hard fork) was implemented</li>
                </ul>
                <p><strong>Exchange Listings:</strong> Indodax, Huobi, Bittrue</p>
                <p><strong>Ecosystem Expansion:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Parallel asset was launched on Flux</li>
                  <li>• The Sigmanauts Program was launched</li>
                </ul>
                <p><strong>Community Engagement:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Two summits and three hackathons were held, with a total of 45 entries</li>
                  <li>• ergoplatform.org and sigmaverse.io were redesigned and relaunched</li>
                </ul>
                <p><strong>Technical Milestone:</strong> Node V5 with JITC (Just-In-Time Compilation) was released</p>
              </div>
            </div>

            <div className="bg-cyan-400/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">2023: Ecosystem Flourishing</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Milestones:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Significant donations to EF Treasury from ecosystem projects</li>
                  <li>• Storage rent activation</li>
                  <li>• Sigmanauts program expansion and improvements</li>
                </ul>
                <p><strong>Integrations:</strong> Bitpanda listing, nonkyc.io, Koinly, StealthEx</p>
                <p><strong>Core Developments:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Sigma.js</li>
                  <li>• UTXO Set Snapshots</li>
                  <li>• Bootstrapping with NiPoPoWs</li>
                  <li>• Sub-block confirmation protocol work</li>
                </ul>
                <p><strong>Community Events:</strong> Ergo Summit 2023, ErgoVersary 2023, ErgoHack VI and VII</p>
              </div>
            </div>

            <div className="bg-red-400/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">2024: Future Horizons (In Progress)</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Milestones:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• ErgoHack VIII - Ergo as a Smart Layer ✓</li>
                  <li>• DAO for Ergo core ✓</li>
                  <li>• Ergo achieved #1 in TVL% of market cap for a PoW chain ✓</li>
                  <li>• Ergo listed on MEXC exchange ✓</li>
                </ul>
                <p><strong>Technical Improvements:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Successful migration from LevelDB to RocksDB ✓</li>
                  <li>• Node 6.0.0-alpha1 release ✓</li>
                  <li>• Sigma protocol updates ✓</li>
                  <li>• Infrastructure improvements ✓</li>
                </ul>
                <p><strong>Ongoing Challenges:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Scalability Improvements (Layer 1 and Layer 2)</li>
                  <li>• Usability Enhancements</li>
                  <li>• Security Strengthening</li>
                  <li>• Ecosystem Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DeFi Ecosystem Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">DeFi Ecosystem</h2>
          <p className="text-gray-300 mb-6">
            Every new addition to our growing DeFi ecosystem contributes to the expansion of trustless collateral, the decentralized monetary base, and the supply of derivative assets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-400/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Decentralized Exchanges</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• ErgoDex (AMM + Yield Farming) ✓</li>
                <li>• ErgoAuctionHouse (P2P auctions) ✓</li>
                <li>• SkyHarbor (NFT Market) ✓</li>
                <li>• single-tx-swap (trustless P2P swaps) ✓</li>
                <li>• TokenJay (P2P escrow) ✓</li>
                <li>• Crooks Finance ✓</li>
                <li>• PalmyraComDex (Alpha live)</li>
                <li>• Crystal Pool</li>
                <li>• Machina Finance</li>
                <li>• Mew Finance ✓</li>
              </ul>
            </div>

            <div className="bg-green-400/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-400 mb-4">Stablecoins</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• SigmaUSD stablecoin (Djed protocol) ✓</li>
                <li>• SigmaUSD v2</li>
                <li>• Gluon (gold stablecoin) ✓</li>
                <li>• DexyGold (seigniorage stablecoin)</li>
              </ul>
            </div>

            <div className="bg-purple-400/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-400 mb-4">Lending and Borrowing</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• SigmaFi (P2P loans via bonds) ✓</li>
                <li>• Duckpools (lending pools) ✓</li>
                <li>• optionPools (option markets) ✓</li>
                <li>• EXLE (uncollateralized lending) ✓</li>
              </ul>
            </div>

            <div className="bg-orange-400/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-orange-400 mb-4">Gaming and Metaverse</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• BlitzTCG (trading card game) ✓</li>
                <li>• CyberVerse (metaverse gaming) ✓</li>
                <li>• Cyberverse Multiplayer ✓</li>
              </ul>
            </div>

            <div className="bg-cyan-400/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Derivatives and Synthetics</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• SigmaO (trustless options) ✓</li>
                <li>• HodlCoin (trustless ERG derivative) ✓</li>
                <li>• AuctionCoin (emission via auctions) ✓</li>
                <li>• Hodlbox (long-term locking) ✓</li>
                <li>• OptionCoin</li>
                <li>• ChainCash</li>
              </ul>
            </div>

            <div className="bg-indigo-400/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-indigo-400 mb-4">Interoperability</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Oracle Pools ✓</li>
                <li>• Rosen Bridge ✓</li>
                <li>• ADA Bridge ✓</li>
                <li>• BTC Bridge ✓</li>
                <li>• EVM Bridge ✓</li>
                <li>• Sigma Chains</li>
                <li>• Trustless Relays</li>
              </ul>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">References</h2>
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Key Documents</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• <Link href="#" className="text-blue-400 hover:text-blue-300">(Nov 22) A Scalability Plan for Ergo</Link></li>
              <li>• <Link href="#" className="text-blue-400 hover:text-blue-300">(Dec 21) Ergo protocol research and client development roadmap</Link></li>
              <li>• <Link href="#" className="text-blue-400 hover:text-blue-300">(Sep 21) Long-term vision for Ergo</Link></li>
              <li>• <Link href="#" className="text-blue-400 hover:text-blue-300">(Jul 21) Network congestion on Jul 10th, 2021</Link></li>
              <li>• <Link href="#" className="text-blue-400 hover:text-blue-300">(May 20) Protecting mempool from computationally heavy transactions</Link></li>
            </ul>
          </div>
        </section>
      </TabsContent>

      <TabsContent value="scaling">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Ergo Scaling Solutions
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Comprehensive scaling strategies including Layer 2 solutions, state channels, and off-chain protocols.
          </p>
        </div>

        {ScalingContent()}
      </TabsContent>

      <TabsContent value="layer0">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Layer 0: The Network Layer
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Layer 0, also known as the Network or Peer-to-Peer (P2P) layer, forms the bedrock of decentralized communication within a blockchain network.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/Docs/introduction/roadmap/sub-blocks"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Layers className="w-5 h-5 mr-2" />
              Sub Blocks
            </Link>
          </div>
        </div>

        {Layer0Content()}
      </TabsContent>

      <TabsContent value="layer1">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Layer 1: The Blockchain Layer
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Layer 1 represents the foundational blockchain layer where consensus mechanisms, transaction validation, and state management occur.
          </p>
        </div>

        {Layer1Content()}
      </TabsContent>

      <TabsContent value="layer2">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Layer 2: Off-Chain Solutions
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Layer 2 solutions provide scalability and enhanced functionality while maintaining security guarantees from the base layer.
          </p>
        </div>

        {Layer2Content()}
      </TabsContent>
    </Tabs>
  );
}

// Content functions remain the same
function ScalingContent() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Introduction */}
      <div className="mb-12">
        <p className="text-lg text-gray-300 mb-6">
          Creating a scalable blockchain infrastructure is a complex task. Ergo, fortified by a decade of research, rigorous testing, and ongoing development, has risen to the challenge. This guide will walk you through Ergo's sophisticated scalability features.
        </p>
      </div>

      {/* Scalability Factors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Blockchain Scalability Factors</h2>
        <p className="text-gray-300 mb-6">
          Blockchain scalability is primarily influenced by three factors:
        </p>
        
        <div className="space-y-6">
          <div className="bg-blue-400/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Cryptoeconomic Incentive Model</h3>
            <p className="text-gray-300">
              This model ensures that miners receive suitable rewards for the various costs associated with scaling a blockchain, which may include an increase in state-related costs.
            </p>
          </div>
          
          <div className="bg-green-400/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-400 mb-3">Consensus Model</h3>
            <p className="text-gray-300">
              The chosen model can determine the feasibility of certain scalability solutions. For example, the Proof of Stake consensus model does not support Non-interactive Proofs of Proof-of-Work (NiPoPoWs).
            </p>
          </div>
          
          <div className="bg-purple-400/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-3">Accounting Model</h3>
            <p className="text-gray-300">
              This pertains to the management of transactions and operations within the blockchain. Bitcoin uses the UTXO Model, while Ethereum uses the Account Model.
            </p>
          </div>
        </div>
      </section>

      {/* Ergo's Approach */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Ergo's Innovative Approach</h2>
        <div className="bg-orange-400/10 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-4">
            Ergo's innovative approach to scalability, underpinned by these aspects, sets it apart from other blockchain technologies. Unlike Ethereum's Account model, which manages storage changes and validity checks on-chain during code execution, Ergo's eUTXO employs a unique strategy: transactions are created off-chain, and validation checks are conducted on-chain.
          </p>
          <p className="text-gray-300">
            This approach reduces the operational load on each network node, thereby enhancing overall efficiency. The immutability of the transaction graph allows for further optimization of this process, increasing the number of transactions processed per second. Additionally, the use of light-verifying nodes boosts both the scalability and accessibility of the network.
          </p>
        </div>
      </section>

      {/* Layer Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Multi-Layer Architecture</h2>
        <p className="text-gray-300 mb-6">
          To gain a comprehensive understanding of Ergo's scalability, delve into the role of each layer in this process:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/20">
            <Network className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold text-cyan-400 mb-3">Layer 0</h3>
            <p className="text-gray-300 text-sm mb-3">The Network or Peer-to-Peer Layer</p>
            <p className="text-gray-400 text-sm">
              Forms the bedrock of decentralized communication within the blockchain network.
            </p>
          </div>
          
          <div className="bg-green-400/10 rounded-xl p-6 border border-green-400/20">
            <Layers className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-lg font-bold text-green-400 mb-3">Layer 1</h3>
            <p className="text-gray-300 text-sm mb-3">The Core Blockchain Layer</p>
            <p className="text-gray-400 text-sm">
              Where consensus mechanisms, transaction validation, and state management occur.
            </p>
          </div>
          
          <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/20">
            <Zap className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-purple-400 mb-3">Layer 2</h3>
            <p className="text-gray-300 text-sm mb-3">The Off-chain Layer</p>
            <p className="text-gray-400 text-sm">
              Provides scalability and enhanced functionality while maintaining security guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Collaborative Scaling Model</h3>
          <p className="text-gray-300">
            These layers work in harmony to enhance Ergo's scalability, making it a flexible and potent choice for both developers and users. This collaborative model enables Ergo to provide robust, scalable solutions that are prepared to meet the challenges of global expansion.
          </p>
        </div>
      </section>
    </div>
  );
}

function Layer0Content() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Introduction */}
      <div className="mb-12">
        <p className="text-lg text-gray-300 mb-6">
          Layer 0, also known as the <em>Network</em> or <em>Peer-to-Peer</em> (P2P) layer, forms the bedrock of decentralized communication within a blockchain network. It plays a pivotal role in facilitating the exchange of data and information across the network, allowing nodes to distribute and validate transactions, blocks, and other data types without the need for a centralized authority.
        </p>
      </div>

      {/* Client Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Client Types</h2>
        <p className="text-gray-300 mb-6">
          In the context of scaling, the type of client used can significantly impact the performance and efficiency of a blockchain network. Ergo supports multiple types of clients, each offering different levels of security and resource requirements. These client types are designed to cater to various use cases and network conditions, thereby contributing to the overall scalability of the Ergo network. Here are the available client types:
        </p>
        
        <div className="space-y-6">
          <div className="bg-blue-400/10 rounded-xl p-6 border border-blue-400/20">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Full 'Archive' Node Mode</h3>
            <p className="text-gray-300">
              This is the standard mode, akin to a full Bitcoin node. It stores all blocks from the genesis block onwards, checks the proofs of work, verifies the correctness of the linking structure, and maintains a copy of the entire UTXO set. This mode offers the highest level of security but requires significant storage resources, making it less scalable for devices with limited storage capacity.
            </p>
          </div>
          
          <div className="bg-green-400/10 rounded-xl p-6 border border-green-400/20">
            <h3 className="text-xl font-bold text-green-400 mb-3">Pruned-Fullnode Mode</h3>
            <p className="text-gray-300">
              This mode downloads all headers, validates proofs-of-work, and links structures. It then downloads a UTXO snapshot from peers and the full blocks succeeding it. By pruning unnecessary data, this mode improves storage efficiency, contributing to network scalability.
            </p>
          </div>
          
          <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/20">
            <h3 className="text-xl font-bold text-purple-400 mb-3">Light-Fullnode Mode</h3>
            <p className="text-gray-300">
              This mode only holds the root digest of the dictionary and checks full blocks or a suffix of the blockchain, depending on the setting. It offers a balance between security and resource efficiency, making it a scalable choice for devices with moderate resources.
            </p>
          </div>
          
          <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/20">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Light-SPV Mode</h3>
            <p className="text-gray-300">
              A lightweight mode that enables users to verify transactions with a small sample of block headers. This mode requires the least resources, making it highly scalable for devices with limited storage and computational capabilities.
            </p>
          </div>
        </div>
        
        <div className="bg-orange-400/10 rounded-xl p-6 mt-6">
          <p className="text-gray-300">
            In addition to these, Ergo also supports <strong>Logarithmic space mining</strong>, which enables the existence of <em>light miners</em>. Similar to light clients, light miners can bootstrap using block headers without downloading the entire blockchain. This feature can be integrated into Ergo through a velvet (soft) fork, further enhancing the scalability of the network.
          </p>
        </div>
      </section>

      {/* Sub Blocks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Sub Blocks</h2>
        <div className="bg-yellow-400/10 rounded-xl p-6">
          <p className="text-gray-300">
            In the quest for Layer 0 (L0) scalability improvements, one of the most promising advancements is the introduction of "subblocks." These are essentially block candidates with lower proof-of-work difficulty, serving as temporary placeholders that facilitate faster transaction confirmations and optimize network bandwidth. For end-users, this translates into quicker, weakly confirmed transactions—often within 20 seconds—while also making better use of network resources. For a more in-depth look at weak blocks, their advantages, and their role in Ergo's scalability strategy, see this page.
          </p>
        </div>
      </section>

      {/* State Bloat Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">State Bloat Management</h2>
        <p className="text-gray-300 mb-6">
          One of the key challenges in scaling blockchain networks is managing the growth of the state size, often referred to as 'state bloat'. As the state size increases, it becomes more resource-intensive to maintain and validate, which can limit the scalability of the network. Ergo addresses this issue with effective state bloat management strategies, ensuring that the network remains scalable without compromising on functionality. It achieves this through:
        </p>
        
        <div className="space-y-4">
          <div className="bg-green-400/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-400 mb-3">Persistent Updatable Storage</h3>
            <p className="text-gray-300">
              This feature allows updates to be verified by a blockchain contract. However, only the digest of the authenticated data structure (along with a few additional bytes, less than 40) is stored in the UTXO set, regardless of the data set size.
            </p>
          </div>
          
          <div className="bg-red-400/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-400 mb-3">Storage Rent Fee</h3>
            <p className="text-gray-300">
              Ergo uses a Storage Rent Fee to deter spam and recycle unused data bytes, also known as dust. This fee helps in reducing network pollution and encourages user activity.
            </p>
          </div>
        </div>
      </section>

      {/* Miner-Adjustable Parameters */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Miner-Adjustable Parameters</h2>
        <p className="text-gray-300 mb-6">
          In the context of scaling, Ergo provides miners with the flexibility to modify certain parameters that can directly impact the network's scalability:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-400/10 rounded-xl p-6 border border-blue-400/20">
            <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
              <HardDrive className="w-5 h-5" /> Block Size
            </h3>
            <p className="text-gray-300 mb-3">
              Miners can adjust this parameter based on the observed decrease in full block validation time due to advancements in hardware and software. The current block size is set to <strong>8MB</strong>.
            </p>
            <p className="text-gray-400 text-sm">
              A larger block size can accommodate more transactions, improving the network's throughput. However, it also requires more computational resources, which can affect the network's decentralization.
            </p>
          </div>
          
          <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/20">
            <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
              <Database className="w-5 h-5" /> Transaction Size
            </h3>
            <p className="text-gray-300 mb-3">
              As of node <strong>4.0.23</strong>, the transaction size limit for the mempool is <strong>96kb</strong>. Transactions exceeding this size can only be included manually by miners.
            </p>
            <p className="text-gray-400 text-sm">
              This limit can be adjusted to balance the network's capacity to process transactions and the computational load on nodes.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 rounded-xl p-6 mt-6">
          <p className="text-gray-300">
            For more details on how these parameters can be adjusted and their impact on the network's scalability, please refer to the <strong>Governance</strong> section.
          </p>
        </div>
      </section>
    </div>
  );
}

function Layer1Content() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Introduction */}
      <div className="mb-12">
        <p className="text-lg text-gray-300 mb-6">
          Layer 1, the foundational protocol layer of a blockchain system, is responsible for core functions such as transaction processing, consensus mechanisms, and security protocols. Ergo's Layer 1 is designed with a focus on scalability, incorporating features that boost transaction processing capacity and overall throughput.
        </p>
      </div>

      {/* Current Scalability Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Current Scalability Features</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-400/10 rounded-xl p-6 border border-blue-400/20">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Extended UTXO Model (EUTXO)</h3>
            <p className="text-gray-300 mb-4">
              Ergo utilizes an enhanced version of Bitcoin's UTXO model, known as EUTXO, which enables:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Turing Complete smart contracts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Parallel transaction processing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Higher throughput compared to account-based models
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Efficient state management
              </li>
            </ul>
          </div>
          
          <div className="bg-green-400/10 rounded-xl p-6 border border-green-400/20">
            <h3 className="text-xl font-bold text-green-400 mb-4">Protocol Optimizations</h3>
            <p className="text-gray-300 mb-4">
              Recent developments have improved the protocol's efficiency through:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Removal of unused complexity from the Sigma protocol
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced code readability and maintenance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Refined transaction ordering and mempool tracking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Regular node version updates addressing performance
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mainnet 5.0 and Beyond */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Mainnet 5.0 and Beyond</h2>
        
        <div className="space-y-6">
          <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/20">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Just-in-Time Costing</h3>
            <p className="text-gray-300 mb-4">
              The introduction of Just in time costing in Node V5 has led to:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                5-10x increase in block capacity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Improved transaction processing capability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                More efficient resource utilization
              </li>
            </ul>
          </div>
          
          <div className="bg-orange-400/10 rounded-xl p-6 border border-orange-400/20">
            <h3 className="text-xl font-bold text-orange-400 mb-4">Miner Parameter Adjustments</h3>
            <p className="text-gray-300 mb-4">
              Developers are actively exploring:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Increased block size parameters
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced transaction size limits
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Optimized mining efficiency
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Improved difficulty calculations through Autolykos updates
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Scalability Enhancements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Future Scalability Enhancements</h2>
        
        <div className="space-y-6">
          <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/20">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Microblocks and the Ergo Block Extension Section</h3>
            <p className="text-gray-300 mb-4">
              Ergo's block structure includes extension sections containing:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Mandatory and arbitrary key-value data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Anchors for microblock creation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Support for service chains
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Potential for generic sidechain implementation
              </li>
            </ul>
            <p className="text-gray-300 mb-2">These features enable:</p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Faster block generation times
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Improved transaction throughput
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Support for velvet or soft forks
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Creation of Aspen-style service chains
              </li>
            </ul>
          </div>
          
          <div className="bg-yellow-400/10 rounded-xl p-6 border border-yellow-400/20">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Sub-Block Confirmation Protocols</h3>
            <p className="text-gray-300 mb-4">
              Ergo is actively developing sub-block confirmation protocols that will:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Group transactions into sub-blocks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduce confirmation times
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Increase overall throughput
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Improve transaction processing efficiency
              </li>
            </ul>
            <p className="text-gray-300">
              This development is guided by EIP-15 and builds upon established research from platforms like Bitcoin-NG and Flux.
            </p>
          </div>
          
          <div className="bg-red-400/10 rounded-xl p-6 border border-red-400/20">
            <h3 className="text-xl font-bold text-red-400 mb-4">Sharding</h3>
            <p className="text-gray-300 mb-4">
              Sharding represents a promising avenue for future scalability improvements by:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Partitioning the blockchain database into smaller segments
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enabling parallel transaction processing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Maintaining security while improving throughput
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Community-Driven Development */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Community-Driven Development</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-400/10 rounded-xl p-6 border border-indigo-400/20">
            <h3 className="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">
              <GitBranch className="w-5 h-5" /> Ergo Improvement Proposals (EIPs)
            </h3>
            <p className="text-gray-300 mb-3">
              EIPs serve as the primary mechanism for protocol enhancement through:
            </p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Community-driven proposals</li>
              <li>• Focused scalability improvements</li>
              <li>• Systematic implementation processes</li>
              <li>• Regular protocol updates</li>
            </ul>
          </div>
          
          <div className="bg-teal-400/10 rounded-xl p-6 border border-teal-400/20">
            <h3 className="text-lg font-bold text-teal-400 mb-3 flex items-center gap-2">
              <RefreshCw className="w-5 h-5" /> Node Version Updates
            </h3>
            <p className="text-gray-300 mb-3">
              Regular updates to the Ergo node software provide:
            </p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Bug fixes and performance enhancements</li>
              <li>• New scalability features</li>
              <li>• Improved difficulty calculations</li>
              <li>• Refined Autolykos implementation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research and Development */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Research and Development</h2>
        <div className="bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Ongoing Research</h3>
          <p className="text-gray-300 mb-4">
            Ongoing research continues to explore:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                Advanced sharding techniques
              </li>
              <li className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                Novel consensus mechanisms
              </li>
            </ul>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                Improved transaction ordering
              </li>
              <li className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                Enhanced mempool management
              </li>
            </ul>
          </div>
          <p className="text-gray-300 mt-4">
            For the latest developments in these areas, refer to <strong>Flux: Revisiting Near Blocks for Proof-of-Work Blockchains</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}

function Layer2Content() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Introduction */}
      <div className="mb-12">
        <p className="text-lg text-gray-300 mb-6">
          Layer 2 solutions are secondary frameworks or protocols constructed on top of a Layer 1 blockchain protocol. Their purpose is to enhance the efficiency, scalability, and capabilities of the underlying blockchain by facilitating <em>off-chain</em> transactions or computations.
        </p>
        <p className="text-gray-300 mb-6">
          Ergo is compatible with a broad range of Layer 2 solutions derived from other UTXO blockchains. The platform can implement various off-chain solutions like Hydra and sidechains, which help alleviate blockchain congestion and offer benefits akin to ZK-rollups.
        </p>
        <div className="bg-blue-400/10 rounded-xl p-4 border border-blue-400/20 mb-6">
          <p className="text-blue-300 mb-0">
            <strong>Join the Layer 2 discussion on Telegram or Discord.</strong>
          </p>
        </div>
      </div>

      {/* ErgoScript: Powering Layer 2 Transactions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">ErgoScript: Powering Layer 2 Transactions</h2>
        
        <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/20 mb-6">
          <p className="text-gray-300 mb-4">
            ErgoScript's flexible design allows large parts of transactions to be executed on Layer 2, which are then settled on the Ergo blockchain in a single transaction. For instance, a developer successfully used the eUTXO model to airdrop native tokens to <strong>10,000 addresses simultaneously</strong>.
          </p>
          <p className="text-gray-300 mb-4">
            ErgoScript features several advancements like time-weighted data, Turing completeness, read-only data inputs, multi-stage contracts, sigma protocols, NIPoPoWs, and more. These enhancements enable a variety of Layer 2 protocols, each addressing scalability issues in their unique way.
          </p>
          <div className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg p-4 border border-purple-400/30">
            <p className="text-purple-200 font-semibold mb-0">
              <strong>Ergo serves as a settlement layer for multiple Layer 2 protocols and applications.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Current Layer 2 Projects and Developments */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Current Layer 2 Projects and Developments</h2>
        
        <div className="space-y-6">
          <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/20">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Layer 2 Solutions Leveraging Sub-Blocks</h3>
            <p className="text-gray-300 mb-4">
              While sub-blocks are a Layer 1 protocol enhancement, they enable several Layer 2 scaling solutions:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Faster confirmation times for Layer 2 protocols
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Enhanced support for payment channels
                </li>
              </ul>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  More efficient state channel operations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Improved settlement layer for off-chain transactions
                </li>
              </ul>
            </div>
            <p className="text-gray-300 mb-2">Layer 2 protocols can utilize sub-blocks to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  Group off-chain transactions more efficiently
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  Reduce settlement times
                </li>
              </ul>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  Increase throughput for Layer 2 applications
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  Enable more responsive user experiences
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-400/10 rounded-xl p-6 border border-green-400/20">
            <h3 className="text-xl font-bold text-green-400 mb-4">SigmaChains and Sidechains</h3>
            <p className="text-gray-300 mb-4">
              SigmaChains leverage Ergo's Sigma contracts to create versatile sidechains that can operate as either merge-mined sidechains or standalone blockchains. Key features include:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced scalability and privacy features
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Experimental platform for new features
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Various chain commitment options for main chain security
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Comprehensive technical documentation in "Sigma Deck 2"
              </li>
            </ul>
          </div>
          
          <div className="bg-orange-400/10 rounded-xl p-6 border border-orange-400/20">
            <h3 className="text-xl font-bold text-orange-400 mb-4">ChainCash</h3>
            <p className="text-gray-300 mb-4">
              ChainCash is developing a decentralized, peer-to-peer monetary system using Layer 2 derivative signature chains. The project features:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Elastic money creation capabilities
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Digital notes representing various values
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Support for digital tokens and real-world assets
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Implementation of top-up transactions and blockchain scanning
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Plasma: Enhancing Data Structures */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Plasma: Enhancing Data Structures</h2>
        
        <div className="bg-indigo-400/10 rounded-xl p-6 border border-indigo-400/20">
          <p className="text-gray-300 mb-4">
            Ergo inherently supports AVL trees, an efficient authenticated data structure that allows for proving different properties of the data without accessing the entire dataset.
          </p>
          <p className="text-gray-300 mb-4">
            The ledger is maintained as an AVL tree using <strong>Plasma</strong>. Users conduct off-chain transactions with the bank, resulting in changes in the ledger. The bank periodically publishes a compact snapshot of the ledger on the blockchain.
          </p>
          <p className="text-gray-300 mb-4">
            The Plasma Library enables the building of Plasma chains, currently used primarily for:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Data compression
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Contract simplification
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Plasma staking contracts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Off-chain operation management
            </li>
          </ul>
        </div>
      </section>

      {/* NIPoPoWs: Facilitating Scalability */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">NIPoPoWs: Facilitating Scalability</h2>
        
        <p className="text-gray-300 mb-6">
          NiPoPoWs enhance blockchain interoperability and scalability through:
        </p>
        
        <div className="space-y-6">
          <div className="bg-red-400/10 rounded-xl p-6 border border-red-400/20">
            <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Enhanced Security through Interoperability
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Smaller chains can leverage security of larger networks</li>
              <li>• Periodic proof-of-work submissions between chains</li>
              <li>• Cryptographically secure asset transfers</li>
              <li>• Enables seamless asset transfers without centralized intermediaries</li>
            </ul>
          </div>
          
          <div className="bg-blue-400/10 rounded-xl p-6 border border-blue-400/20">
            <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
              <Network className="w-5 h-5" /> Cross-Chain Communications
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Facilitates smart contract executions across networks</li>
              <li>• Enables consolidated data verification</li>
              <li>• Supports integrated blockchain ecosystems</li>
              <li>• Improves scalability of Layer 2 solutions like sidechains</li>
            </ul>
          </div>
          
          <div className="bg-yellow-400/10 rounded-xl p-6 border border-yellow-400/20">
            <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" /> Applications in Layer 2 Technologies
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Sidechains</strong>: NIPoPoWs enable sidechains to operate more autonomously while maintaining security</li>
              <li>• <strong>State Channels</strong>: Transactions can be processed off-chain with assurances of eventual consistency</li>
              <li>• <strong>Cross-Chain Verification</strong>: Enables efficient verification of transactions across different chains</li>
              <li>• <strong>Security Enhancement</strong>: Smaller chains can leverage the security of larger networks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Emerging Layer 2 Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Emerging Layer 2 Solutions</h2>
        
        <div className="space-y-6">
          <div className="bg-pink-400/10 rounded-xl p-6 border border-pink-400/20">
            <h3 className="text-xl font-bold text-pink-400 mb-4">Lightning Network</h3>
            <p className="text-gray-300">
              The Lightning Network creates payment channels through multi-signature wallets, enabling off-chain transactions between participants.
            </p>
          </div>
          
          <div className="bg-teal-400/10 rounded-xl p-6 border border-teal-400/20">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Rainbow Network</h3>
            <p className="text-gray-300">
              A non-custodial exchange and payment network supporting multiple assets through price oracles, enabling off-chain trading, borrowing, and lending.
            </p>
          </div>
          
          <div className="bg-violet-400/10 rounded-xl p-6 border border-violet-400/20">
            <h3 className="text-xl font-bold text-violet-400 mb-4">Rollups</h3>
            <p className="text-gray-300 mb-4">
              Two primary types of rollups are being explored:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <strong>Optimistic Rollups</strong>: Handle transactions on parallel chains using fraud-proof principles
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <strong>ZK-Rollups</strong>: Utilize zkSNARKs to bundle hundreds of transfers off-chain
              </li>
            </ul>
          </div>
          
          <div className="bg-emerald-400/10 rounded-xl p-6 border border-emerald-400/20">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Additional Solutions</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <strong>Hydra</strong>: Implements isomorphic state channels for multi-party transactions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <strong>Zero-Knowledge Contingent Payments</strong>: Enable trustless knowledge-based payments
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <strong>FairSwap/FastSwap protocols</strong>: Provide secure and efficient transaction methods
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <strong>Coinpools</strong>: Group transactions for improved efficiency
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Development Considerations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Development Considerations</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-400/10 rounded-xl p-6 border border-red-400/20">
            <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5" /> Security and Consensus
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Careful evaluation of security implications for new Layer 2 solutions</li>
              <li>• Selection of appropriate consensus mechanisms for different applications</li>
              <li>• Implementation of robust fraud prevention measures</li>
            </ul>
          </div>
          
          <div className="bg-blue-400/10 rounded-xl p-6 border border-blue-400/20">
            <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5" /> User Experience
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Development of mempool chaining for immediate transaction feedback</li>
              <li>• Focus on seamless integration between Layer 1 and Layer 2 solutions</li>
              <li>• Optimization of transaction processing and confirmation times</li>
            </ul>
          </div>
          
          <div className="bg-green-400/10 rounded-xl p-6 border border-green-400/20">
            <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" /> Research and Development
            </h3>
            <p className="text-gray-300 mb-3 text-sm">
              Ongoing research continues to explore:
            </p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Advanced sharding techniques</li>
              <li>• Novel consensus mechanisms</li>
              <li>• Improved transaction ordering</li>
              <li>• Enhanced mempool management</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 