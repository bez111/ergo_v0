"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import {
  MessageCircle,
  ExternalLink,
  GitBranch,
  Layers,
  Zap,
  Users,
  Repeat,
  Lock,
  Database,
  Terminal,
  Code2,
  ChevronRight,
  Star,
  Cpu,
  List,
  BookOpen
} from "lucide-react";
import Link from "next/link";

export default function NetnotesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Netnotes
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Netnotes is a cross-platform cryptocurrency management suite and reactive application framework. It simplifies how you manage wallets, explore blockchain data, track market prices, and interact with decentralized and centralized financial systems like Ergo and KuCoin.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/tooling"
            className="inline-flex items-center px-6 py-3 bg-blue-400 rounded-xl font-semibold text-black hover:bg-blue-500 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Tooling
          </Link>
          <a
            href="https://github.com/networkspore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Netnotes Project on GitHub
          </a>
          <a
            href="https://github.com/networkspore/netnotes-engine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 rounded-xl font-semibold text-white hover:bg-cyan-600 transition-transform hover:scale-105"
          >
            <GitBranch className="w-5 h-5 mr-2" /> Netnotes Engine
          </a>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Repeat className="w-6 h-6 text-blue-400" /> Latest Updates
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Major refactoring in progress for P2P networking and distributed apps.</li>
          <li>Communication paths migrating to async for scalability and modularity.</li>
          <li>Security audits and UI updates to enforce best practices.</li>
          <li>Experimental atomic exchange contracts for decentralized trading.</li>
          <li>
            Finalizing integration of working ErgoDex smart contracts for decentralized swaps.<br />
            <a
              href="https://github.com/networkspore/netnotes-engine/tree/main/src/main/resources/contracts/dex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:underline"
            >
              Explore Draft Atomic Exchange Contracts <ExternalLink className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>

      {/* Overview Section */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6 text-blue-400" /> What is Netnotes?
        </h2>
        <p className="text-gray-300">
          Netnotes is built around a messaging-driven architecture. Every blockchain operation, API request, or transaction is processed as a message you can review and approve before it executes—offering total transparency and control. Its modular, reactive design enables seamless integration of apps, crypto services, and APIs through a unified messaging layer.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-blue-400" /> Messaging-Driven Architecture
          </h3>
          <p className="text-gray-300 mb-4">
            Every action—wallet ops, blockchain queries, signing, and API calls—flows through a transparent, inspectable messaging system.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-cyan-400" /> Encrypted Local Database
          </h3>
          <p className="text-gray-300 mb-4">
            All sensitive data—wallets, transactions, contacts—are stored locally and encrypted. No cloud, no external storage.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-400" /> Built-In Apps & API Integration
          </h3>
          <p className="text-gray-300 mb-4">
            Spectrum Finance and KuCoin APIs, with planned Rosen Bridge and Ergo Mixer integrations.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" /> Direct Message Review
          </h3>
          <p className="text-gray-300 mb-4">
            Inspect and approve every blockchain interaction before it’s executed, ensuring full security and transparency.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-400" /> Cross-Platform Support
          </h3>
          <p className="text-gray-300 mb-4">
            Native Linux and Windows support with an integrated launcher for updates and version management.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" /> Automation Agents
          </h3>
          <p className="text-gray-300 mb-4">
            Build automation agents that manage assets, interact with DeFi, and use on-chain reputation data to filter risky contracts.
          </p>
        </div>
      </div>

      {/* Comparison Table with Celaut */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Netnotes and Celaut: How Do They Compare?</h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full text-sm text-left text-gray-300 border border-neutral-700 rounded-lg">
            <thead className="bg-neutral-800">
              <tr>
                <th className="px-4 py-2 font-semibold">Feature</th>
                <th className="px-4 py-2 font-semibold">Netnotes</th>
                <th className="px-4 py-2 font-semibold">Celaut</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Primary Focus</td>
                <td className="px-4 py-2">Personal financial management and automation</td>
                <td className="px-4 py-2">Decentralized service execution and marketplaces</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Execution</td>
                <td className="px-4 py-2">Runs locally on personal devices</td>
                <td className="px-4 py-2">Services run on distributed independent nodes</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Ideal For</td>
                <td className="px-4 py-2">Portfolio tracking, DeFi tools, automation agents</td>
                <td className="px-4 py-2">AI agents, trading bots, decentralized marketplaces</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Reputation System</td>
                <td className="px-4 py-2">None (user-controlled actions only)</td>
                <td className="px-4 py-2">On-chain for services and nodes</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Payments</td>
                <td className="px-4 py-2">User-initiated through wallets</td>
                <td className="px-4 py-2">Automated via Ergo smart contracts</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Automation Agents</td>
                <td className="px-4 py-2">Allows users to build personal financial bots and strategies</td>
                <td className="px-4 py-2">Runs distributed services that users can purchase or rent</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Scale</td>
                <td className="px-4 py-2">Individual user-level automation</td>
                <td className="px-4 py-2">Global service marketplace</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-bold mb-2">Can Netnotes and Celaut Be Used Together?</h3>
        <p className="text-gray-300 mb-2">
          Yes, they complement each other perfectly.
        </p>
        <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
          <li>Netnotes gives individuals full control over their personal financial strategies and automation agents.</li>
          <li>Celaut provides access to powerful decentralized services that can be called directly from Netnotes agents.</li>
        </ul>
        <p className="text-gray-300 mb-2">
          <b>For example:</b>
        </p>
        <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
          <li>A Netnotes automation agent can monitor portfolio conditions locally.</li>
          <li>When specific market conditions are met, the agent can trigger advanced trading strategies hosted on Celaut’s decentralized network.</li>
          <li>This combines local asset control with access to scalable, high-performance services that would be too resource-intensive to run on a personal device.</li>
        </ul>
        <p className="text-gray-300 mb-2">
          If you are looking for personal financial management tools, visit <Link href="/docs/ecosystem/tooling/netnotes" className="text-blue-400 hover:underline">Netnotes</Link>.
        </p>
        <p className="text-gray-300">
          If you want to build or use decentralized services and marketplaces for AI agents, automation, and trading strategies, Celaut provides the infrastructure to make that possible.
        </p>
      </div>

      {/* Use Cases Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <List className="w-6 h-6 text-yellow-400" /> Example Use Cases
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Custom portfolio management using Ergo and KuCoin data</li>
          <li>Automation agents for DeFi positions based on market events</li>
          <li>P2P decentralized exchange platform using atomic swap contracts</li>
          <li>Bots that interact with smart contracts and evaluate reputation scores</li>
        </ul>
      </div>

      {/* Developer Integration Section */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" /> Developer Integration
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Messaging System: All actions are structured, inspectable messages.</li>
          <li>Wallet Management: Secure Ergo wallets with advanced signing workflows.</li>
          <li>API Gateways: Integrate external APIs, reputation systems, and cross-chain tools.</li>
          <li>Automation Agents: Create bots and scripts for financial strategies.</li>
          <li>P2P Support (Upcoming): Build decentralized services across distributed networks.</li>
        </ul>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ExternalLink className="w-6 h-6 text-blue-400" /> Repositories & Resources
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-blue-400" />
            <a href="https://github.com/networkspore/netnotes-engine" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Netnotes Engine (Core Logic)</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-blue-400" />
            <a href="https://github.com/networkspore/Netnotes-Linux" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Netnotes Linux Client</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-blue-400" />
            <a href="https://github.com/networkspore/Netnotes" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Netnotes Cross-Platform Client + Launcher</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-blue-400" />
            <a href="https://github.com/networkspore/netnotes-engine/tree/main/src/main/resources/contracts/dex" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Draft Atomic Exchange Contracts</a>
          </li>
        </ul>
      </div>
    </>
  );
} 