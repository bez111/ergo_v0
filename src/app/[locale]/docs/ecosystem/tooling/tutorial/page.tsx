"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import {
  BookOpen,
  ExternalLink,
  Terminal,
  ChevronRight,
  Youtube,
  List,
  Shield,
  Zap,
  Cpu,
  Info,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function OffTheGridTutorialPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Getting Started with Off-the-Grid Ergo Trading Bot
        </h1>
        <p className="text-lg text-gray-400 mb-4">
          This guide provides a thorough walkthrough for setting up and operating the <b>Off-the-Grid</b> decentralized grid trading bot on the Ergo blockchain.
        </p>
        <div className="flex flex-wrap gap-4 mb-2">
          <Link
            href="/docs/ecosystem/tooling"
            className="inline-flex items-center px-6 py-3 bg-purple-400 rounded-xl font-semibold text-black text-lg hover:bg-purple-500 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Tooling
          </Link>
          <a
            href="https://github.com/Telefragged/off-the-grid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white text-lg hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Off-the-Grid on GitHub
          </a>
          <a
            href="https://www.youtube.com/watch?v=LsRb8_G9rzE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-500 rounded-xl font-semibold text-white text-lg hover:bg-red-600"
          >
            <Youtube className="w-5 h-5 mr-2" /> Video Walkthrough
          </a>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <List className="w-6 h-6 text-purple-400" /> Prerequisites
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            <b>Knowledge and Tools:</b>
            <ul className="list-disc pl-6 text-sm">
              <li>Basic understanding of the Ergo blockchain and grid trading strategies</li>
              <li>Familiarity with Rust and CLI tools</li>
            </ul>
          </li>
          <li>
            <b>Environment Setup:</b>
            <ul className="list-disc pl-6 text-sm">
              <li>
                Installed <a href="https://rustup.rs/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Rust</a> and Cargo
              </li>
              <li>Configured Ergo node and wallet</li>
            </ul>
          </li>
          <li>
            <b>Nix Installation (Optional):</b> For easier building, install <a href="https://nixos.org/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Nix</a>
            .
          </li>
        </ul>
      </div>

      {/* Overview */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview of Off-the-Grid
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Decentralized, automated grid trading on Ergo</li>
          <li>Secure contract-based trading ensuring order safety</li>
          <li>Off-chain bots for order tracking and execution</li>
          <li>Compatible with Spectrum AMM for liquidity matching</li>
        </ul>
        <div className="mt-4 text-yellow-400 text-sm">
          <b>Limitations:</b> Contracts are not audited—exercise caution with significant assets. Profits are not guaranteed.
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-purple-400" /> Step-by-Step Guide
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-4">
          <li>
            <b>Clone and Build the Repository</b>
            <ul className="list-disc pl-6 text-sm">
              <li>
                <span className="font-semibold">Clone:</span>
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">git clone https://github.com/Telefragged/off-the-grid.git</code>
              </li>
              <li>
                <span className="font-semibold">Build with Nix (recommended):</span>
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">nix build</code>
                <span className="ml-2 text-gray-400">Executable in <b>./result/bin/off-the-grid</b></span>
              </li>
              <li>
                <span className="font-semibold">Or with Cargo:</span>
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">cargo build --release</code>
                <span className="ml-2 text-gray-400">Executable in <b>./target/release/off-the-grid</b></span>
              </li>
            </ul>
          </li>
          <li>
            <b>Node Setup</b>
            <ul className="list-disc pl-6 text-sm">
              <li>
                Update <b>node_config.json</b> with your node's API URL and API key:
                <pre className="bg-neutral-800 rounded p-3 text-xs mt-2 text-purple-200">{`{
  "api_url": "http://127.0.0.1:9053",
  "api_key": "your-wallet-api-key"
}`}</pre>
              </li>
              <li>Set up and sync your Ergo wallet</li>
              <li>
                Generate scans config:
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">off-the-grid scans create-config</code>
                <span className="ml-2 text-gray-400">Add <b>--rescan</b> to include all boxes</span>
              </li>
            </ul>
          </li>
          <li>
            <b>Fetch Token Information (Optional)</b>
            <ul className="list-disc pl-6 text-sm">
              <li>
                <code className="bg-neutral-800 px-2 py-1 rounded">off-the-grid tokens update</code>
                <span className="ml-2 text-gray-400">Fetches token details from Spectrum</span>
              </li>
            </ul>
          </li>
          <li>
            <b>Create Grid Orders</b>
            <ul className="list-disc pl-6 text-sm">
              <li>
                <span className="font-semibold">Command:</span>
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">off-the-grid grid create -t &lt;token_name&gt; -v &lt;total_value&gt; -o &lt;num_orders&gt; -r &lt;high&gt;-&lt;low&gt; -i &lt;grid_id&gt;</code>
              </li>
              <li>
                <span className="font-semibold">Example:</span>
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">off-the-grid grid create -t COMET -v 10 -o 50 -r 50000-100000 -i comet</code>
              </li>
              <li>Review and confirm the transaction using on-screen prompts</li>
            </ul>
          </li>
          <li>
            <b>Manage and Monitor Grids</b>
            <ul className="list-disc pl-6 text-sm">
              <li>
                <span className="font-semibold">List active grids:</span>
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">off-the-grid grid list</code>
              </li>
              <li>
                <span className="font-semibold">View grid details:</span>
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">off-the-grid grid details -i &lt;grid_id&gt;</code>
              </li>
              <li>
                <span className="font-semibold">Redeem grid orders:</span>
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">off-the-grid grid redeem -i &lt;grid_id&gt;</code>
              </li>
            </ul>
          </li>
          <li>
            <b>Run the Matching Bot</b>
            <ul className="list-disc pl-6 text-sm">
              <li>
                Configure matcher reward address in <b>matcher_config.json</b>:
                <pre className="bg-neutral-800 rounded p-3 text-xs mt-2 text-purple-200">{`{
  "reward_address": "your_reward_address"
}`}</pre>
                Or set as environment variable:
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">export MATCHER_REWARD_ADDRESS="your_reward_address"</code>
              </li>
              <li>
                <span className="font-semibold">Start the matcher:</span>
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">off-the-grid matcher</code>
              </li>
              <li>
                The bot logs successful transactions and errors. Multiple matchers may compete for transactions.
              </li>
            </ul>
          </li>
          <li>
            <b>Optimize and Analyze</b>
            <ul className="list-disc pl-6 text-sm">
              <li>
                <span className="font-semibold">Monitor logs:</span>
                <code className="bg-neutral-800 px-2 py-1 rounded ml-2">off-the-grid logs tail</code>
              </li>
              <li>Experiment with parameters for optimal results</li>
              <li>Integrate analytics (e.g., Spectrum) to track performance</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Best Practices */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" /> Best Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Security:</b> Safeguard your API keys and wallet credentials</li>
          <li><b>Caution:</b> Avoid over-investing in untested strategies or assets</li>
          <li><b>Stay Updated:</b> Keep the bot, tokens, and configs up-to-date</li>
        </ul>
        <p className="text-gray-400 mt-4 text-sm">
          For additional assistance, consult the <a href="https://github.com/Telefragged/off-the-grid" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">repository's documentation</a> or contact the community.
        </p>
      </div>
    </>
  );
} 