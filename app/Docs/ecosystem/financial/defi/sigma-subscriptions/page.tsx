"use client";

import React from "react";
import { ExternalLink, Info, Gift, Zap, Users, Gavel } from "lucide-react";

export default function SigmaSubscriptionsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Sigma Subscriptions: Decentralized Subscription Crowdfunding
      </h1>
      {/* Overview */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Overview
        </h2>
        <p className="text-gray-300 mb-2">
          Sigma Subscriptions is a decentralized protocol for recurring, subscription-based crowdfunding on the Ergo blockchain. It enables creators, projects, and DAOs to receive ongoing support from their communities through automated, trustless payments.
        </p>
        <p className="text-gray-300 mb-2">
          The protocol is open-source and in development. Learn more or contribute on <a href="https://github.com/cornbelt-dev/sigma-subscriptions" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub</a>.
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Zap className="w-5 h-5" /> How Sigma Subscriptions Works
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
          <li>Creators or projects deploy a subscription contract specifying the payment amount, frequency, and recipient address.</li>
          <li>Supporters subscribe by locking funds into the contract, authorizing recurring payments.</li>
          <li>Payments are executed automatically on-chain at each interval, with no need for intermediaries.</li>
          <li>Supporters can cancel their subscription at any time, regaining control of their funds for future cycles.</li>
        </ul>
        <p className="text-gray-400 text-sm">
          The protocol leverages Ergo's eUTXO model and smart contracts for secure, transparent, and permissionless recurring payments.
        </p>
      </div>

      {/* Use Cases */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <Gift className="w-5 h-5" /> Use Cases
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Ongoing support for open-source projects and DAOs</li>
          <li>Recurring donations to creators, educators, or public goods</li>
          <li>Subscription-based access to digital content or services</li>
          <li>Automated community funding for infrastructure or development</li>
        </ul>
      </div>

      {/* Features */}
      <div className="bg-neutral-900/50 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Users className="w-5 h-5" /> Key Features
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Non-custodial: Users retain control of their funds at all times</li>
          <li>Permissionless: Anyone can create or join a subscription</li>
          <li>Automated: Payments are executed by smart contracts on-chain</li>
          <li>Transparent: All transactions are visible and auditable on Ergo</li>
          <li>Composable: Can be integrated with other DeFi and DAO tools</li>
        </ul>
      </div>

      {/* Resources */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://github.com/cornbelt-dev/sigma-subscriptions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 bg-cyan-700/80 rounded-lg font-semibold text-white hover:bg-orange-500 hover:text-black transition-colors"
          >
            GitHub Repository <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
} 