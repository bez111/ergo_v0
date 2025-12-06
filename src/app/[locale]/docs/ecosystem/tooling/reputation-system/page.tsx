"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import {
  Users,
  ChevronRight,
  ExternalLink,
  BookOpen,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

export default function ReputationSystemPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Reputation System
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The Reputation System is a core component of Celaut, providing a decentralized, user-driven mechanism for managing trust. It leverages the immutability of the Ergo blockchain and a UTXO-based model to create auditable, tamper-proof reputation proofs. This system replaces centralized reputation platforms with a transparent and verifiable trust layer for Web3 services, agents, and smart contracts.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/tooling"
            className="inline-flex items-center px-6 py-3 bg-blue-400 rounded-xl font-semibold text-black hover:bg-blue-500 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Tooling
          </Link>
          <Link
            href="/docs/ecosystem/tooling/celaut"
            className="inline-flex items-center px-6 py-3 bg-purple-400 rounded-xl font-semibold text-black hover:bg-purple-500 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Celaut
          </Link>
          <a
            href="https://github.com/celaut-project/sigma-reputation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Sigma Reputation System on GitHub
          </a>
          <a
            href="https://www.ergoforum.org/t/sigma-reputation-system-explainer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <BookOpen className="w-5 h-5 mr-2" /> Explainer Post on ErgoForum
          </a>
        </div>
      </div>

      {/* Why Is This Necessary? */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-400" /> Why Is This Necessary?
        </h2>
        <p className="text-gray-300 mb-4">
          Modern decentralized ecosystems lack a native, trust-based reputation mechanism. Currently, users rely on fragmented sources like social media for trust assessments, which are prone to misinformation and manipulation.
        </p>
        <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
          <li>Trust signals are recorded on-chain and verifiable by anyone.</li>
          <li>Reputation is subjective and non-consensual; each user can form their own trust graph.</li>
          <li>Economic incentives are directly tied to reputation quality, ensuring sustainable growth of trustworthy services.</li>
        </ul>
      </div>

      {/* Conceptual Model */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Conceptual Model</h2>
        <p className="text-gray-300 mb-4">
          The system follows a subjective, non-consensual trust model:
        </p>
        <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
          <li>Alice can trust Bob more than Chris, while Dave might trust Chris more than Bob.</li>
          <li>These relationships are recorded as signed transactions on Ergo, forming a directed graph of trust.</li>
        </ul>
        <p className="text-gray-300 mb-4">
          Each trust declaration is stored as a Reputation Proof using Ergo’s UTXO model. This ensures immutability and transparency while preserving user control.
        </p>
      </div>

      {/* Real-World Use Case */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Real-World Use Case: Decentralized Marketplaces</h2>
        <p className="text-gray-300 mb-4">
          In a decentralized version of Airbnb, a host may charge lower prices to guests with higher reputation scores. Unlike centralized platforms, this system allows each host to define their own evaluation criteria—cleanliness, punctuality, or other subjective factors.
        </p>
      </div>

      {/* Alignment with the Ergo Manifesto */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Alignment with the Ergo Manifesto</h2>
        <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
          <li>Decentralization First: No universal consensus or token is required.</li>
          <li>Open and Auditable: All reputation assignments are stored on-chain and verifiable.</li>
          <li>Accessible to Regular People: Simple browser-based and programmatic interfaces.</li>
          <li>Platform for Contractual Money: Efficiently reduces switching costs by improving trust discovery.</li>
          <li>Long-Term Focus: Built to scale with Celaut’s decentralized economy.</li>
        </ul>
      </div>

      {/* System Design */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">System Design</h2>
        <h3 className="text-xl font-semibold mb-2 text-white">Reputation Proof Lifecycle</h3>
        <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
          <li>Creation: Generate from scratch or delegate from an existing proof.</li>
          <li>Delegation: Assign a portion of reputation to a new proof using Ergo’s metadata fields.</li>
          <li>Assignment: Reputation is assigned without transferring tokens, allowing flexible and non-linear trust graphs.</li>
        </ul>
        <p className="text-gray-300 mb-2">Each Reputation Proof is stored as an Ergo Box, and its associated token represents the amount of assignable reputation.</p>
        <h3 className="text-xl font-semibold mb-2 text-white">Example ErgoScript Smart Contract</h3>
        <pre className="bg-neutral-800 rounded p-3 text-xs overflow-x-auto text-blue-200 mb-4">
{`// Reputation Token Smart Contract
{
  val isOwner = proveDlog(SELF.R7[GroupElement].get)
  val isDelegated = (SELF.tokens.size == 1) && (OUTPUTS(0).tokens.exists { token => 
    token._1 == SELF.tokens(0)._1 
  })
  val canSpend = isOwner && isDelegated && (SELF.R8[Boolean].getOrElse(false))

  sigmaProp(canSpend)
}`}
        </pre>
        <p className="text-gray-300 mb-4">
          <b>Explanation:</b><br />
          R7: Public key of the proof owner.<br />
          R8: Boolean indicating if delegation is allowed.<br />
          Tokens and metadata enforce the constraints on reputation transfer.
        </p>
        <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
          <li>Only the rightful owner can modify a proof.</li>
          <li>Reputation can only be delegated to another valid proof.</li>
          <li>Immutable reputation data remains securely linked to the owner’s public key.</li>
        </ul>
      </div>

      {/* Integration with Celaut */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Integration with Celaut</h2>
        <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
          <li>Node and Service Evaluation: Nodes and services build reputation through on-chain proofs, influencing their ranking and selection.</li>
          <li>Economic Incentives: High-reputation services earn more by offering premium access and better positioning in Celaut’s orchestration layer.</li>
          <li>Delegation and Load Balancing: Celaut nodes use reputation data to decide whether to execute tasks locally or delegate to trusted peers.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-white">Example Workflow</h3>
        <ol className="mb-4 space-y-1 text-gray-300 list-decimal pl-6">
          <li>A Celaut user selects a service with a high on-chain reputation.</li>
          <li>The node executes the service and metering is tracked via smart contracts.</li>
          <li>Reputation tokens are updated based on performance outcomes.</li>
          <li>Future clients reference the reputation graph to make informed decisions.</li>
        </ol>
      </div>

      {/* User Interaction */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">User Interaction</h2>
        <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
          <li>Browser Interface: Sigma Reputation Panel provides a user-friendly interface to browse, assign, and verify reputation records.</li>
          <li>Library Integration: Developers can use the Sigma Reputation Panel Library to build bots and services that interact directly with the reputation system. This supports automated evaluation, staking, and advanced analytics.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-white">Marketplace Example: Reputation-Based Ratings</h3>
        <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
          <li>Bots evaluate product listings, analyze metadata, and provide trust scores.</li>
          <li>Bots invest portions of their reputation tokens when making evaluations.</li>
          <li>Accurate assessments improve a bot’s reputation and earning potential.</li>
          <li>Poor or misleading evaluations result in reputation loss.</li>
        </ul>
        <p className="text-gray-300 mb-4">
          Developers can fine-tune bot behavior to prioritize specific attributes, creating diverse evaluation strategies and a healthy competitive environment.
        </p>
      </div>

      {/* Security Considerations */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Security Considerations</h2>
        <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
          <li>Tamper-Proof Proofs: Reputation proofs are cryptographically tied to their owners, ensuring no unauthorized changes.</li>
          <li>Subjective Trust: Users independently define trust relationships without relying on centralized scoring algorithms.</li>
          <li>On-Chain Verification: All reputation data is fully auditable via Ergo’s blockchain.</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <blockquote className="text-xl italic text-center text-gray-300">
          The Sigma Reputation System establishes a robust, decentralized trust infrastructure for Celaut and the broader Web3 ecosystem. By leveraging Ergo’s blockchain and a flexible, user-defined trust model, it creates a more transparent, secure, and efficient marketplace for services, agents, and smart contracts.
        </blockquote>
      </div>

      {/* Resources & Further Reading */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" /> Resources & Further Reading
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="https://reputation-systems.github.io/sigma-reputation-panel/" target="_blank" rel="noopener noreferrer" className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <div>
              <div className="font-bold text-blue-400">Sigma Reputation Panel (Demo UI)</div>
              <div className="text-gray-300 text-sm">Browser interface for exploring and assigning reputation on Ergo.</div>
            </div>
          </a>
          <a href="https://github.com/reputation-systems/sigma-reputation-panel" target="_blank" rel="noopener noreferrer" className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <div>
              <div className="font-bold text-blue-400">Sigma Reputation Panel (GitHub)</div>
              <div className="text-gray-300 text-sm">Source code for the Sigma Reputation Panel UI and library.</div>
            </div>
          </a>
          <a href="https://github.com/celaut-project/docs" target="_blank" rel="noopener noreferrer" className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <div>
              <div className="font-bold text-blue-400">Celaut Docs</div>
              <div className="text-gray-300 text-sm">Technical documentation for the Celaut project.</div>
            </div>
          </a>
          <a href="https://github.com/celaut-project/paradigm" target="_blank" rel="noopener noreferrer" className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <div>
              <div className="font-bold text-blue-400">Celaut Paradigm</div>
              <div className="text-gray-300 text-sm">Theoretical layer and design paradigm for Celaut.</div>
            </div>
          </a>
          <a href="https://github.com/celaut-project" target="_blank" rel="noopener noreferrer" className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <div>
              <div className="font-bold text-blue-400">Celaut Project (GitHub)</div>
              <div className="text-gray-300 text-sm">Main repository for the Celaut decentralized orchestration layer.</div>
            </div>
          </a>
          <a href="https://www.ergoforum.org/t/reputation-system/4782" target="_blank" rel="noopener noreferrer" className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <div>
              <div className="font-bold text-blue-400">ErgoForum: Reputation System</div>
              <div className="text-gray-300 text-sm">Community discussion on the design and use of decentralized reputation in marketplaces.</div>
            </div>
          </a>
        </div>
        <div className="mt-6 text-gray-300 text-sm">
          <b>Note:</b> Reputation systems are critical for trust in decentralized marketplaces. As discussed in the <a href="https://www.ergoforum.org/t/reputation-system/4782" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ErgoForum thread</a>, on-chain, user-driven reputation helps prevent scams, enables flexible trust networks, and supports new models for peer-to-peer commerce and service discovery.
        </div>
      </div>
    </>
  );
} 