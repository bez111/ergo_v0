
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import { BookOpen, Users, Rocket, Target, Coins, Brain, Layers, FileText, TrendingUp, CheckCircle, Calendar, Star, Wrench, Network, Zap, ArrowRight, Info, Shield } from "lucide-react";

export default function DevDAOPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
          Developer DAO (DevDAO)
        </h1>
        <p className="text-xl text-gray-400 mb-2">
          A decentralized autonomous organization focused on research, development, and maintenance of the Ergo protocol and its infrastructure. DevDAO promotes transparency, scalability, and community involvement in core development.
        </p>
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-5 mt-4">
          <span className="text-lg text-center block text-orange-300 font-semibold">Adapted from <a href="https://www.ergoforum.org/t/ergodevs-r-d-dao-for-ergo-core/" className="underline" target="_blank">ErgoDevs - R&D DAO for Ergo core</a> on ergoforum</span>
        </div>
      </div>

      {/* At a Glance / Key Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="group bg-gradient-to-br from-orange-400/10 to-orange-400/5 rounded-2xl p-5 flex flex-col items-start gap-1 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(255,140,0,0.08)]">
          <CheckCircle className="w-7 h-7 text-green-400 mb-1 drop-shadow-[0_0_6px_rgba(34,197,94,0.3)] group-hover:drop-shadow-[0_0_16px_rgba(34,197,94,0.5)] transition" />
          <div className="text-lg font-semibold bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Decentralized R&D</div>
          <div className="text-gray-400 text-sm leading-relaxed">Open, community-driven protocol development</div>
        </div>
        <div className="group bg-gradient-to-br from-green-400/10 to-cyan-400/5 rounded-2xl p-5 flex flex-col items-start gap-1 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(34,197,94,0.08)]">
          <Coins className="w-7 h-7 text-yellow-400 mb-1 drop-shadow-[0_0_6px_rgba(250,204,21,0.2)] group-hover:drop-shadow-[0_0_16px_rgba(250,204,21,0.4)] transition" />
          <div className="text-lg font-semibold bg-gradient-to-r from-green-300 to-cyan-100 bg-clip-text text-transparent">Transparent Funding</div>
          <div className="text-gray-400 text-sm leading-relaxed">Bounties, grants, and open treasury</div>
        </div>
        <div className="group bg-gradient-to-br from-cyan-400/10 to-blue-400/5 rounded-2xl p-5 flex flex-col items-start gap-1 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(34,211,238,0.08)]">
          <FileText className="w-7 h-7 text-cyan-400 mb-1 drop-shadow-[0_0_6px_rgba(34,211,238,0.2)] group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.4)] transition" />
          <div className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-blue-100 bg-clip-text text-transparent">Open Research</div>
          <div className="text-gray-400 text-sm leading-relaxed">PoW, privacy, sidechains, tokenomics</div>
        </div>
        <div className="group bg-gradient-to-br from-yellow-400/10 to-orange-400/5 rounded-2xl p-5 flex flex-col items-start gap-1 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(251,191,36,0.08)]">
          <Users className="w-7 h-7 text-orange-300 mb-1 drop-shadow-[0_0_6px_rgba(251,191,36,0.2)] group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.4)] transition" />
          <div className="text-lg font-semibold bg-gradient-to-r from-yellow-200 to-orange-100 bg-clip-text text-transparent">Community Involvement</div>
          <div className="text-gray-400 text-sm leading-relaxed">Workshops, EIPs, hackathons, education</div>
        </div>
      </div>

      {/* Motivation & Vision */}
      <section>
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Rocket className="w-7 h-7 text-orange-400" /> Motivation</h2>
          <p className="text-lg text-gray-300 mb-4">Current core development and infrastructure projects lack transparency and scalability. Promotion of Ergo protocol, ErgoScript, and dApp development is insufficient. DevDAO aims to scale core development and education, making the process more transparent and effective.</p>
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Star className="w-7 h-7 text-cyan-400" /> Vision</h2>
          <p className="text-lg text-gray-300">DevDAO envisions Ergo as Digital Gold 2.0: a mineable digital commodity with trustless derivatives and expressive contracts. By building on Ergo's DeFi ecosystem and sidechains, DevDAO aims to expand the decentralized monetary base and create a more inclusive financial system.</p>
        </div>
      </section>

      {/* Scope */}
      <section>
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Target className="w-7 h-7 text-cyan-400" /> Scope</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><b>Research:</b> PoW/PoW-based protocols, privacy, sidechains, ZK/optimistic verification, monetary systems, stablecoins, tokenomics</li>
            <li><b>Core development:</b> Scala repos (debox, scorex-util, scrypto, sigmastate-interpreter, ergo), Rust (sigma-rust)</li>
            <li><b>Infrastructure:</b> Libraries & wallets (AppKit, Fleet, Nautilus, ergo-wallet)</li>
            <li><b>Oracle pool framework</b></li>
            <li><b>ChainCash:</b> Assembler level for monetary innovations (e.g. local exchange trading systems)</li>
          </ul>
        </div>
      </section>

      {/* Milestones */}
      <section>
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><CheckCircle className="w-7 h-7 text-green-400" /> Completed Milestones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 rounded-xl p-5 flex flex-col gap-2">
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>SigmaUSD stablecoin (Djed protocol)</li>
              <li>Spectrum DEX (AMM-based)</li>
              <li>ErgoMixer (non-custodial mixer)</li>
              <li>ErgoAuctionHouse (P2P auctions)</li>
              <li>SigmaFi (P2P loans via bonds)</li>
              <li>Duckpools (lending pools)</li>
              <li>ErgoRaffle (decentralized crowdfunding)</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 rounded-xl p-5 flex flex-col gap-2">
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>EXLE (uncollateralized lending)</li>
              <li>SigmaO (trustless options)</li>
              <li>HodlCoin (trustless ERG derivative)</li>
              <li>AuctionCoin (emission via auctions)</li>
              <li>Oracle Pools (federated data providing)</li>
              <li>Rosen Bridge (federated bridge)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Upcoming Milestones */}
      <section>
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><TrendingUp className="w-7 h-7 text-orange-400" /> Upcoming Milestones</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>New DeFi tools: Paideia, Dexy/Gluon, ChainCash, Analog Ergo, OptionCoin</li>
            <li>Sidechains with trustless transfers, new consensus mechanisms</li>
            <li>Expanding contractual layer to sidechains, Bulletproofs, first-class contracts</li>
            <li>Scalability: sharding on sidechains</li>
            <li>ERG/tokens on sidechains, launching apps on sidechains</li>
          </ul>
        </div>
      </section>

      {/* Monetization Strategies & Funding */}
      <section>
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Coins className="w-7 h-7 text-yellow-400" /> Monetization & Funding</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Percentage of sidechain token emissions (like Treasury contract)</li>
            <li>Consultancy & support for launching apps on sigma chains</li>
            <li>Bounties, grants, sponsorships</li>
            <li>Ergo Foundation, projects, crypto funds</li>
          </ul>
        </div>
      </section>

      {/* Goals & Committees */}
      <section>
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Target className="w-7 h-7 text-cyan-400" /> Goals</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Organize research, EIP discussions, workshops</li>
            <li>Find funding for bounties and salaries</li>
            <li>Maintain and improve protocol code, libraries, explorers</li>
            <li>Attract new dApp developers via tutorials and examples</li>
            <li>Support dApps and wallets</li>
            <li>Help with auditing and testing dApps</li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Users className="w-7 h-7 text-orange-400" /> Committees</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Research committee</li>
            <li>Scala core committee</li>
            <li>Rust core committee</li>
            <li>Infrastructure committee</li>
            <li>Education committee</li>
            <li>ChainCash & monetary innovations committee</li>
          </ul>
        </div>
      </section>

      {/* Development Plan Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Calendar className="w-7 h-7 text-cyan-400" /> Development Plan</h2>
        <div className="relative border-l-2 border-cyan-400/30 pl-8 space-y-10">
          {/* Q1 2024 */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">Q1 2024</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Research: Initial sidechain prototyping (no p2p, tests for block generation, verification, and transfer)</li>
              <li>Node: RocksDB, UTXO set scanner, sub-block propagation EIP and entities</li>
              <li>Sigma: 6.0 planning, versioning, new methods/types</li>
              <li>Sigma-Rust: Planning further development (costing, 6.0 support)</li>
              <li>ChainCash: Tests for refund, contracts for custom tokens, presentation</li>
              <li>Oracle pools: Planning, final audit of EIP, dev rewards in contracts</li>
              <li>AppKit/Other repos: Planning further development</li>
              <li>Education: To be determined</li>
            </ul>
          </div>
          {/* Q2 2024 */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">Q2 2024</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Research: Design docs for sidechains, research plan, forming research group</li>
              <li>Node: Simplest sidechain with p2p, subblocks propagation in testnet</li>
              <li>Oracle pools: EIP merging, new version with dev rewards, extensions (e.g. sport events)</li>
              <li>Sigma: 6.0 implementation</li>
              <li>Sigma-Rust/AppKit/Other repos/Education: To be determined</li>
            </ul>
          </div>
          {/* Q3-Q4 2024 */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">Q3-Q4 2024</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Research: To be determined</li>
              <li>Node: Sub-blocks in mining API, weak confirmations API, p2p audit, refactoring, p2p tests</li>
              <li>Oracle pools: To be determined</li>
              <li>Sigma: 6.0 audit, tests, activation, further planning</li>
              <li>Sigma-Rust/AppKit/Other repos/Education: To be determined</li>
            </ul>
          </div>
        </div>
        <div className="text-gray-400 text-xs mt-4">Areas marked as "To be determined" depend on community contributions. DevDAO aims to make planning more transparent and collaborative.</div>
      </section>
    </>
  );
} 