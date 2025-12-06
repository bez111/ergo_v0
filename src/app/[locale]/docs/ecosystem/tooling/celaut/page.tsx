"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import {
  Layers,
  Users,
  Globe,
  Code,
  ExternalLink,
  ChevronRight,
  BookOpen,
  CheckCircle,
  Cpu,
  Star,
  Zap,
  List
} from "lucide-react";
import Link from "next/link";

export default function CelautPage() {
  const [showReputation, setShowReputation] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Celaut
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Celaut is a decentralized, peer-to-peer runtime for deploying and coordinating autonomous services and AI agents. Inspired by cellular automata, Celaut decouples what a service does from who runs it and where it executes, enabling a permissionless digital economy where services compete based on verifiable reputation and performance.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/tooling"
            className="inline-flex items-center px-6 py-3 bg-purple-400 rounded-xl font-semibold text-black hover:bg-purple-500 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Tooling
          </Link>
          <a
            href="https://github.com/celaut-project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Celaut Project on GitHub
          </a>
          <Link
            href="/docs/ecosystem/tooling/reputation-system"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
          >
            <Users className="w-5 h-5 mr-2" /> Reputation System
          </Link>
        </div>
      </div>

      {/* Reputation System Modal */}
      {showReputation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-neutral-900 border border-blue-400 rounded-xl p-8 max-w-2xl w-full relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowReputation(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
              <Users className="w-6 h-6 text-blue-400" /> Reputation System
            </h2>
            <h3 className="text-xl font-semibold mb-2 text-white">Introduction</h3>
            <p className="text-gray-300 mb-4">
              The Reputation System is a core component of Celaut, providing a decentralized, user-driven mechanism for managing trust. It leverages the immutability of the Ergo blockchain and a UTXO-based model to create auditable, tamper-proof reputation proofs. This system replaces centralized reputation platforms with a transparent and verifiable trust layer for Web3 services, agents, and smart contracts.
            </p>
            <ul className="mb-4 space-y-1 text-gray-300">
              <li>
                <a href="https://github.com/celaut-project/sigma-reputation" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Sigma Reputation System on GitHub</a>
              </li>
              <li>
                <a href="https://www.ergoforum.org/t/sigma-reputation-system-explainer/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Explainer Post on ErgoForum</a>
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-white">Why Is This Necessary?</h3>
            <p className="text-gray-300 mb-4">
              Modern decentralized ecosystems lack a native, trust-based reputation mechanism. Currently, users rely on fragmented sources like social media for trust assessments, which are prone to misinformation and manipulation.
            </p>
            <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
              <li>Trust signals are recorded on-chain and verifiable by anyone.</li>
              <li>Reputation is subjective and non-consensual; each user can form their own trust graph.</li>
              <li>Economic incentives are directly tied to reputation quality, ensuring sustainable growth of trustworthy services.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-white">Conceptual Model</h3>
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
            <h3 className="text-xl font-semibold mb-2 text-white">Real-World Use Case: Decentralized Marketplaces</h3>
            <p className="text-gray-300 mb-4">
              In a decentralized version of Airbnb, a host may charge lower prices to guests with higher reputation scores. Unlike centralized platforms, this system allows each host to define their own evaluation criteria—cleanliness, punctuality, or other subjective factors.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-white">Alignment with the Ergo Manifesto</h3>
            <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
              <li>Decentralization First: No universal consensus or token is required.</li>
              <li>Open and Auditable: All reputation assignments are stored on-chain and verifiable.</li>
              <li>Accessible to Regular People: Simple browser-based and programmatic interfaces.</li>
              <li>Platform for Contractual Money: Efficiently reduces switching costs by improving trust discovery.</li>
              <li>Long-Term Focus: Built to scale with Celaut’s decentralized economy.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-white">System Design</h3>
            <h4 className="font-semibold text-blue-300 mb-1">Reputation Proof Lifecycle</h4>
            <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
              <li>Creation: Generate from scratch or delegate from an existing proof.</li>
              <li>Delegation: Assign a portion of reputation to a new proof using Ergo’s metadata fields.</li>
              <li>Assignment: Reputation is assigned without transferring tokens, allowing flexible and non-linear trust graphs.</li>
            </ul>
            <p className="text-gray-300 mb-2">Each Reputation Proof is stored as an Ergo Box, and its associated token represents the amount of assignable reputation.</p>
            <h4 className="font-semibold text-blue-300 mb-1">Example ErgoScript Smart Contract</h4>
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
            <h3 className="text-xl font-semibold mb-2 text-white">Integration with Celaut</h3>
            <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
              <li>Node and Service Evaluation: Nodes and services build reputation through on-chain proofs, influencing their ranking and selection.</li>
              <li>Economic Incentives: High-reputation services earn more by offering premium access and better positioning in Celaut’s orchestration layer.</li>
              <li>Delegation and Load Balancing: Celaut nodes use reputation data to decide whether to execute tasks locally or delegate to trusted peers.</li>
            </ul>
            <h4 className="font-semibold text-blue-300 mb-1">Example Workflow</h4>
            <ol className="mb-4 space-y-1 text-gray-300 list-decimal pl-6">
              <li>A Celaut user selects a service with a high on-chain reputation.</li>
              <li>The node executes the service and metering is tracked via smart contracts.</li>
              <li>Reputation tokens are updated based on performance outcomes.</li>
              <li>Future clients reference the reputation graph to make informed decisions.</li>
            </ol>
            <h3 className="text-xl font-semibold mb-2 text-white">User Interaction</h3>
            <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
              <li>Browser Interface: Sigma Reputation Panel provides a user-friendly interface to browse, assign, and verify reputation records.</li>
              <li>Library Integration: Developers can use the Sigma Reputation Panel Library to build bots and services that interact directly with the reputation system. This supports automated evaluation, staking, and advanced analytics.</li>
            </ul>
            <h4 className="font-semibold text-blue-300 mb-1">Marketplace Example: Reputation-Based Ratings</h4>
            <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
              <li>Bots evaluate product listings, analyze metadata, and provide trust scores.</li>
              <li>Bots invest portions of their reputation tokens when making evaluations.</li>
              <li>Accurate assessments improve a bot’s reputation and earning potential.</li>
              <li>Poor or misleading evaluations result in reputation loss.</li>
            </ul>
            <p className="text-gray-300 mb-4">
              Developers can fine-tune bot behavior to prioritize specific attributes, creating diverse evaluation strategies and a healthy competitive environment.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-white">Security Considerations</h3>
            <ul className="mb-4 space-y-1 text-gray-300 list-disc pl-6">
              <li>Tamper-Proof Proofs: Reputation proofs are cryptographically tied to their owners, ensuring no unauthorized changes.</li>
              <li>Subjective Trust: Users independently define trust relationships without relying on centralized scoring algorithms.</li>
              <li>On-Chain Verification: All reputation data is fully auditable via Ergo’s blockchain.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-white">Conclusion</h3>
            <p className="text-gray-300 mb-2">
              The Sigma Reputation System establishes a robust, decentralized trust infrastructure for Celaut and the broader Web3 ecosystem. By leveraging Ergo’s blockchain and a flexible, user-defined trust model, it creates a more transparent, secure, and efficient marketplace for services, agents, and smart contracts.
            </p>
          </div>
        </div>
      )}

      {/* Overview Section */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6 text-purple-400" /> What is Celaut?
        </h2>
        <p className="text-gray-300">
          Celaut is a decentralized orchestration layer for autonomous services and agents. It enables services to operate as independent, auditable containers that evolve and interact within a distributed network based on demand, trust, and reputational feedback. There is no central registry or vendor lock-in—services compete on performance and reputation.
        </p>
      </div>

      {/* Celaut is Not a Blockchain Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Celaut is Not a Blockchain</h2>
        <p className="text-gray-300 mb-4">
          Celaut is an orchestration layer that runs on top of blockchains like Ergo. It does not compete with consensus platforms but extends their functionality.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-300 border border-neutral-700 rounded-lg">
            <thead className="bg-neutral-800">
              <tr>
                <th className="px-4 py-2 font-semibold">Component</th>
                <th className="px-4 py-2 font-semibold">On Ergo (On-Chain)</th>
                <th className="px-4 py-2 font-semibold">On Celaut (Off-Chain)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Service Execution</td>
                <td className="px-4 py-2 text-center">❌</td>
                <td className="px-4 py-2 text-center">✅</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Node Management</td>
                <td className="px-4 py-2 text-center">❌</td>
                <td className="px-4 py-2 text-center">✅</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Gas Metering & Tracking</td>
                <td className="px-4 py-2 text-center">✅ <span className='text-xs'>(via smart contracts)</span></td>
                <td className="px-4 py-2 text-center">✅ <span className='text-xs'>(within nodes)</span></td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Payments & Licensing</td>
                <td className="px-4 py-2 text-center">✅ <span className='text-xs'>(settled on Ergo)</span></td>
                <td className="px-4 py-2 text-center">❌</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Reputation System</td>
                <td className="px-4 py-2 text-center">✅ <span className='text-xs'>(reputation tokens and contracts)</span></td>
                <td className="px-4 py-2 text-center">✅ <span className='text-xs'>(used in service orchestration)</span></td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Service Metadata</td>
                <td className="px-4 py-2 text-center">✅ <span className='text-xs'>(optional, for transparency)</span></td>
                <td className="px-4 py-2 text-center">✅ <span className='text-xs'>(mandatory for operations)</span></td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Delegation Decisions</td>
                <td className="px-4 py-2 text-center">❌</td>
                <td className="px-4 py-2 text-center">✅ <span className='text-xs'>(based on cost and reputation)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Celaut and Netnotes: How Do They Compare? */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Celaut and Netnotes: How Do They Compare?</h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full text-sm text-left text-gray-300 border border-neutral-700 rounded-lg">
            <thead className="bg-neutral-800">
              <tr>
                <th className="px-4 py-2 font-semibold">Feature</th>
                <th className="px-4 py-2 font-semibold">Celaut</th>
                <th className="px-4 py-2 font-semibold">Netnotes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Primary Focus</td>
                <td className="px-4 py-2">Decentralized service execution and marketplaces</td>
                <td className="px-4 py-2">Personal financial management and automation</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Execution</td>
                <td className="px-4 py-2">Services run on distributed independent nodes</td>
                <td className="px-4 py-2">Runs locally on personal devices</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Ideal For</td>
                <td className="px-4 py-2">AI agents, trading bots, decentralized marketplaces</td>
                <td className="px-4 py-2">Portfolio tracking, DeFi tools, automation agents</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Reputation System</td>
                <td className="px-4 py-2">On-chain for services and nodes</td>
                <td className="px-4 py-2">None (user-controlled actions only)</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Payments</td>
                <td className="px-4 py-2">Automated via Ergo smart contracts</td>
                <td className="px-4 py-2">User-initiated through wallets</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Automation Agents</td>
                <td className="px-4 py-2">Runs distributed services that users can purchase or rent</td>
                <td className="px-4 py-2">Allows users to build personal financial bots and strategies</td>
              </tr>
              <tr className="border-t border-neutral-700">
                <td className="px-4 py-2">Scale</td>
                <td className="px-4 py-2">Global service marketplace</td>
                <td className="px-4 py-2">Individual user-level automation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-bold mb-2">Can Celaut and Netnotes Be Used Together?</h3>
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
          If you are looking for personal financial management tools, visit <Link href="/docs/ecosystem/tooling/netnotes" className="text-purple-400 hover:underline">Netnotes</Link>.
        </p>
        <p className="text-gray-300">
          If you want to build or use decentralized services and marketplaces for AI agents, automation, and trading strategies, Celaut provides the infrastructure to make that possible.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" /> Decentralized & Permissionless
          </h3>
          <p className="text-gray-300 mb-4">
            No central authority. Anyone can deploy, run, or delegate services. Nodes and services compete based on reputation and cost.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              Peer-to-peer node network
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              No vendor lock-in
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" /> Deterministic & Isolated
          </h3>
          <p className="text-gray-300 mb-4">
            Services run in stateless, deterministic containers. Execution is auditable and cannot be modified post-deployment.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              Containerized execution
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              Immutable service logic
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" /> Reputation-Based Trust
          </h3>
          <p className="text-gray-300 mb-4">
            Trust is established through on-chain reputation proofs and peer endorsements, not central authorities.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              On-chain reputation tokens
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              Transparent feedback system
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <Globe className="w-5 h-5 text-green-400" /> Economic Layer on Ergo
          <p className="text-gray-300 mb-4">
            Payments, gas metering, and reputation are handled via Ergo smart contracts. Services can use pay-per-use or subscription models.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Gas metering & dynamic pricing
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Payments settled on Ergo
            </li>
          </ul>
        </div>
      </div>

      {/* System Architecture Section */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6 text-purple-400" /> System Architecture
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Nodes (Nodo Implementation)</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Execute services in containerized sandboxes</li>
              <li>Handle communication, scheduling, and gas metering</li>
              <li>Publish metadata: compute cost, architecture, uptime</li>
              <li><a href="https://github.com/celaut-project/nodo" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">Nodo on GitHub</a></li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Services</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Stateless, deterministic containers</li>
              <li>May spawn sub-services, forming dynamic graphs</li>
              <li>Can be hosted, delegated, or migrated across nodes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Economic Layer Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-cyan-400" /> Economic Layer on Ergo
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Reputation System:</b> Tracks performance and endorsements of nodes and services using on-chain reputation tokens.</li>
          <li><b>Payments:</b> Handled via Ergo smart contracts; pay-per-use or subscription models; dynamic bidding and gas pricing.</li>
          <li><b>Gas Metering:</b> Nodes advertise price-per-gas and capacity; clients buy gas via Ergo transactions; load balancing is guided by gas efficiency, uptime, and reputation.</li>
        </ul>
      </div>

      {/* Reputation System Section */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-400" /> Reputation System
        </h2>
        <p className="text-gray-300 mb-4">
          Reputation is foundational in Celaut. Each node and service accumulates on-chain reputation proofs, reflecting peer endorsements and client opinions. Smart contracts enforce immutability of trust data, influencing pricing, visibility, and delegation priority.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>On-chain reputation tokens and contracts</li>
          <li>Transparent, open feedback system</li>
          <li>Reputation influences pricing and delegation</li>
        </ul>
      </div>

      {/* Use Cases Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <List className="w-6 h-6 text-yellow-400" /> Real-World Use Cases
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Distributed analytics bots for on-chain/off-chain data</li>
          <li>Autonomous trading agents with verifiable records</li>
          <li>Serverless hosting of decentralized APIs</li>
          <li>Economic simulation engines for DAOs</li>
          <li>AI model marketplaces that reward trust and performance</li>
        </ul>
      </div>

      {/* How Celaut Works Section */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-purple-400" /> How Celaut Works in Practice
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>A user needs a specific automated task, such as running a DeFi strategy.</li>
          <li>They select a service with strong Reputation System proofs.</li>
          <li>The task is deployed to a Celaut node, which consumes gas. (Best practice: every user runs their own node for maximum trust.)</li>
          <li>If optimal, the node delegates execution to a lower-cost peer.</li>
          <li>The user receives results and can update their trust evaluation.</li>
        </ol>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ExternalLink className="w-6 h-6 text-purple-400" /> Resources & Documentation
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-purple-400" />
            <a href="https://github.com/celaut-project" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Celaut GitHub Repositories</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-purple-400" />
            <a href="https://github.com/celaut-project/nodo" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Nodo: Execution Engine</a>
          </li>
        </ul>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-purple-400/10 to-cyan-400/10 border border-purple-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Celaut enables a permissionless digital economy where services compete on reputation and performance, not central control."
        </blockquote>
      </div>
    </>
  );
} 