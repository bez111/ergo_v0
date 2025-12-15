"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import {
  Shuffle,
  ExternalLink,
  GitBranch,
  Layers,
  Zap,
  Shield,
  Repeat,
  Lock,
  Database,
  Terminal,
  Code2,
  ChevronRight,
  Star,
  Cpu,
  List,
  BookOpen,
  Users
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function SigmaRandPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          SigmaRand
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          SigmaRand is a secure random number generation service for Ergo using the Commit-Reveal protocol. It provides cryptographically secure randomness that is equally unpredictable for all participants, ensuring fair and tamper-proof random number generation for games, lotteries, and smart contracts.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/tooling"
            className="inline-flex items-center px-6 py-3 bg-green-400 rounded-xl font-semibold text-black hover:bg-green-500 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Tooling
          </Link>
          <a
            href="https://github.com/noob77777/ergo-randgen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> SigmaRand on GitHub
          </a>
          <a
            href="https://67zt8ejryg.execute-api.us-east-2.amazonaws.com/beta/random-number/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-emerald-500 rounded-xl font-semibold text-white hover:bg-emerald-600 transition-transform hover:scale-105"
          >
            <Terminal className="w-5 h-5 mr-2" /> Live API
          </a>
        </div>
      </div>

      {/* Background Section */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-green-400" /> Background
        </h2>
        <p className="text-gray-300">
          Generating randomness on any blockchain is challenging because every node must come to the same conclusion on the state of the blockchain. Naive approaches to generate randomness can be manipulated by miners or observant attackers. Insecure randomness can be exploited by attackers to gain an unfair advantage in games, lotteries, or any other contracts that rely on random number generation.
        </p>
      </div>

      {/* Problem Statement Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
        <p className="text-gray-300 mb-4">
          We need a secure random number generation service for Ergo with the following properties:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>The scheme should be secure.</li>
          <li>The number generated should be equally unpredictable for all participants, i.e., no participant should have an "upper hand".</li>
          <li>All participants must agree on the same random number generated.</li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Cryptographically Secure
          </h3>
          <p className="text-gray-300 mb-4">
            Uses the Commit-Reveal protocol to ensure that no participant can manipulate or predict the final random number.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" /> Multi-Party Protocol
          </h3>
          <p className="text-gray-300 mb-4">
            Both client and server contribute to the final random number, ensuring equal unpredictability for all participants.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-green-400" /> On-Chain Verification
          </h3>
          <p className="text-gray-300 mb-4">
            All commitments and reveals are stored on the Ergo blockchain, providing transparent and verifiable randomness.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" /> XOR-Based Generation
          </h3>
          <p className="text-gray-300 mb-4">
            Final random number is the XOR of client and server contributions, ensuring neither party can choose an advantageous value.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Database className="w-5 h-5 text-green-400" /> Cloud-Native Architecture
          </h3>
          <p className="text-gray-300 mb-4">
            Built with serverless components (AWS Lambda, Step Functions) for scalable, pay-per-use random number generation.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-emerald-400" /> Smart Contract Integration
          </h3>
          <p className="text-gray-300 mb-4">
            Seamlessly integrates with Ergo smart contracts for games, lotteries, and DeFi applications requiring randomness.
          </p>
        </div>
      </div>

      {/* Commit-Reveal Protocol Section */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Repeat className="w-6 h-6 text-green-400" /> The Commit-Reveal Protocol
        </h2>
        <p className="text-gray-300 mb-4">
          The Commit-Reveal protocol is a multi-party scheme for generating random numbers. It consists of two phases: commit and reveal.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2">Commit Phase</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Each participant generates a random seed</li>
              <li>Calculates the hash value of their seed</li>
              <li>Submits a commitment containing the hash</li>
              <li>Smart contract stores commitments on blockchain</li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2">Reveal Phase</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Participants reveal their original seed values</li>
              <li>Hash values are verified against commitments</li>
              <li>Final random number is calculated via XOR</li>
              <li>Result is stored on-chain for verification</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-green-400" /> How It Works
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Party A generates a random number, randomA.</li>
          <li>Party A sends a message with the hash of randomA, hash(randomA). This commits Party A to the value randomA.</li>
          <li>Party B sends a message with another random number, randomB.</li>
          <li>Party A reveals the value of randomA in a third message.</li>
          <li>Both parties accept the random number as randomA ^ randomB, the exclusive OR (XOR) of the two values.</li>
        </ol>
        <p className="text-gray-300 mt-4">
          The advantage of using XOR is that the final random number is determined equally by both parties, ensuring that neither party can choose an advantageous "random" value.
        </p>
      </div>

      {/* Use Cases Section */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <List className="w-6 h-6 text-yellow-400" /> Use Cases
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>NFT pack opening and rarity distribution</li>
          <li>Decentralized lotteries and gambling applications</li>
          <li>Fair game mechanics in blockchain games</li>
          <li>Random selection in DAO governance</li>
          <li>Secure key generation for cryptographic applications</li>
          <li>Random sampling for statistical analysis</li>
        </ul>
      </div>

      {/* Example: NFT Pack Opening */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Example: Opening a "Pack" of NFTs</h2>
        <p className="text-gray-300 mb-4">
          Let's walk through an example problem that uses this service. We have a "pack" token when "opened" will redeem a fixed number of random NFTs of varying "rarity".
        </p>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>The dApp first generates a random number randomA and makes a RegisterRandomNumberGenerationTask API call.</li>
          <li>The transaction locks the pack token and hash(randomA) in a UTXO.</li>
          <li>Our service then generates randomB and spends this UTXO in the Commit Transaction.</li>
          <li>The dApp knows when the Commit Transaction is confirmed using the GetRandomNumberGenerationStatus API.</li>
          <li>Once the task is in COMMITTED the dApp reveals randomA using RevealRandomNumber API.</li>
          <li>The server then locks the pack token and randomA ^ randomB in the dApp specified contract.</li>
          <li>The dApp can now use this random number generated and the pack token to send the end user the required NFTs.</li>
        </ol>
      </div>

      {/* API Endpoints Section */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-green-400" /> API Endpoints
        </h2>
        <div className="space-y-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2">Register Random Number Generation</h4>
            <p className="text-gray-300 text-sm mb-2">POST /beta/random-number/register</p>
            <p className="text-gray-300 text-xs">Registers a new random number generation task and locks tokens in a UTXO.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2">Get Task Status</h4>
            <p className="text-gray-300 text-sm mb-2">GET /beta/random-number/task/{'{taskId}'}</p>
            <p className="text-gray-300 text-xs">Check the status of a random number generation task.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2">Reveal Random Number</h4>
            <p className="text-gray-300 text-sm mb-2">POST /beta/random-number/reveal</p>
            <p className="text-gray-300 text-xs">Reveal the client-side random number to complete the protocol.</p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ExternalLink className="w-6 h-6 text-green-400" /> Resources & Documentation
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-green-400" />
            <a href="https://github.com/noob77777/ergo-randgen" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">SigmaRand GitHub Repository</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-green-400" />
            <a href="https://67zt8ejryg.execute-api.us-east-2.amazonaws.com/beta/random-number/register" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Live API Endpoint</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-green-400" />
            <a href="https://explorer.ergoplatform.com/en/transactions/1a5ddc9aa0775f60d262a8315b04110316e513b7acbcc856432261bcbc491935" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Example Registration Transaction</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-green-400" />
            <a href="https://explorer.ergoplatform.com/en/transactions/4298401f83007eb6fa825f47a8edc699270a8af10c7a6c0993eaeab83e1ffbde" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Example Commit Transaction</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-green-400" />
            <a href="https://explorer.ergoplatform.com/en/transactions/079b8f0deef478f29c308875ac950627dbeaf7978ab19b8624a7c5e79d8689d7" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Example Reveal Transaction</a>
          </li>
        </ul>
      </div>
    </>
  );
} 