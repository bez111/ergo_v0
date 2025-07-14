"use client";

import React from "react";
import {
  Coins,
  Shield,
  Code,
  ExternalLink,
  ChevronRight,
  Lock,
  Cpu,
  Database,
  CheckCircle,
  Zap,
  Users,
  Globe,
  GitBranch,
  Brain
} from "lucide-react";
import Link from "next/link";

export default function SigmaSubscriptionsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Sigma Subscriptions
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Sigma Subscriptions is a decentralized protocol for recurring payments and on-chain subscriptions on Ergo. It enables creators, dApps, and services to automate payments, memberships, and access control in a trustless, programmable way.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
          <a
            href="https://sigmasubscriptions.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit Sigma Subscriptions
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is Sigma Subscriptions?
        </h2>
        <p className="text-gray-300">
          Sigma Subscriptions is a smart contract protocol for recurring payments, allowing users to subscribe to services, support creators, or automate dApp payments. It leverages Ergo's eUTxO model for secure, programmable, and censorship-resistant subscriptions.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Trustless & Secure
          </h3>
          <p className="text-gray-300 mb-4">
            All payments are managed by open-source smart contracts, ensuring funds are only released according to subscription terms. No custodians or intermediaries.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Non-custodial recurring payments
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Permissionless access
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              On-chain enforcement
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Coins className="w-5 h-5 text-yellow-400" /> Flexible & Programmable
          </h3>
          <p className="text-gray-300 mb-4">
            Subscriptions can be customized for any period, amount, or access logic. Integrate with dApps, DAOs, or content platforms for automated memberships and paywalls.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Customizable payment intervals
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              dApp and DAO integration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              NFT-gated subscriptions
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" /> Developer Friendly
          </h3>
          <p className="text-gray-300 mb-4">
            Open API and SDKs for integrating subscription logic into any Ergo dApp. Example contracts and templates available for rapid deployment.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Open API & SDKs
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Example contracts & templates
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              AppKit & Mosaik support
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-400" /> Censorship Resistant
          </h3>
          <p className="text-gray-300 mb-4">
            No one can block, freeze, or censor your subscription payments. All logic is enforced by code, not by intermediaries.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Immutable smart contracts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No centralized control
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Open-source code
            </li>
          </ul>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> How Sigma Subscriptions Work
        </h2>
        <p className="text-gray-300 mb-4">
          Users approve a recurring payment contract, which locks funds and releases them to the service provider at each interval. Providers can set up custom logic for access, NFT gating, or DAO voting. All actions are transparent and verifiable on-chain.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">For Users</h4>
            <p className="text-gray-300 text-sm">Approve a subscription contract, lock funds, and enjoy uninterrupted access to services or content.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">For Providers</h4>
            <p className="text-gray-300 text-sm">Deploy a contract, set payment terms, and automate revenue collection with no intermediaries.</p>
          </div>
        </div>
      </div>

      {/* Developer Access Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Accessing Sigma Subscriptions as a Developer
        </h2>
        <p className="text-gray-300 mb-4">
          Integrate Sigma Subscriptions into your dApp using the open API, SDKs, and contract templates. Example: set up a monthly subscription for premium content or automate DAO membership fees.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-orange-400 mb-2">Example: Creating a Subscription</h4>
          <pre className="bg-neutral-900 rounded p-3 text-xs overflow-x-auto text-gray-300">
{`// Example: Creating a subscription (pseudo-code)
const tx = appkit.newTx()
  .from(user)
  .to(subscriptionContract)
  .withAmount(ERG_AMOUNT)
  .setInterval('monthly')
  .subscribe()
  .send();`}
          </pre>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://github.com/anon-real/sigmasubscriptions" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">GitHub Repo</h4>
            <p className="text-gray-300 text-sm">Open-source code and contract templates for Sigma Subscriptions.</p>
          </a>
          <a href="https://sigmasubscriptions.app" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Official App</h4>
            <p className="text-gray-300 text-sm">Launch the Sigma Subscriptions dApp and try live subscriptions.</p>
          </a>
          <a href="https://ergoplatform.org/en/blog/2023-11-13-sigma-subscriptions/" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Protocol Overview</h4>
            <p className="text-gray-300 text-sm">Read the official blog post about Sigma Subscriptions protocol.</p>
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" /> What can I use Sigma Subscriptions for?
            </h3>
            <p className="text-gray-300 mb-4">
              Automate recurring payments for content, SaaS, DAO memberships, or any service that benefits from on-chain subscriptions.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" /> How are payments enforced?
            </h3>
            <p className="text-gray-300 mb-4">
              All payments are enforced by smart contracts. If a user cancels or fails to fund the contract, access is automatically revoked.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 