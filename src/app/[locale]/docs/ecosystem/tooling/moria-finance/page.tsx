"use client";

import React from "react";
import {
  Building2,
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
  Users,
  Wallet,
  Clock,
  Key
} from "lucide-react";
import Link from "next/link";

export default function MoriaFinancePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Moria Finance
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Moria Finance is a groundbreaking financial platform built on the Ergo blockchain, designed to revolutionize the way individual and corporate funds are managed. By leveraging the power of Ergo's advanced smart contracts, Moria Finance provides a secure, transparent, and decentralized solution for fund management.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/tooling"
            className="inline-flex items-center px-6 py-3 bg-orange-400 rounded-xl font-semibold text-black hover:bg-orange-500 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Tooling
          </Link>
          <a
            href="https://github.com/Moria-Finance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Moria Finance on GitHub
          </a>
          <a
            href="https://github.com/Moria-Finance/moria-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-500 rounded-xl font-semibold text-white hover:bg-red-600 transition-transform hover:scale-105"
          >
            <GitBranch className="w-5 h-5 mr-2" /> Backend Repository
          </a>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-orange-400" /> Introduction
        </h2>
        <p className="text-gray-300">
          Moria Finance offers a compelling alternative to traditional centralized custody solutions by leveraging Ergo's advanced smart contracts. The platform aims to incentivize Bitcoin holders to bridge their assets to the Ergo blockchain in the form of rsBTC (Renominated Smart Bitcoin), providing superior features and functionalities through Ergo's expressive smart contracts.
        </p>
      </div>

      {/* The Vision Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">The Vision</h2>
        <p className="text-gray-300 mb-4">
          The primary goal of Moria Finance is to incentivize Bitcoin holders to bridge their assets to the Ergo blockchain in the form of rsBTC (Renominated Smart Bitcoin). By offering superior features and functionalities through Ergo's expressive smart contracts, Moria Finance aims to provide a compelling reason for BTC holders to embrace the benefits of decentralized finance (DeFi) on the Ergo network.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-orange-400" /> Smart Contract Wallets
          </h3>
          <p className="text-gray-300 mb-4">
            Advanced smart contract wallets that provide enhanced security, flexibility, and control over funds through Ergo's powerful smart contract capabilities.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-red-400" /> Timelock Security
          </h3>
          <p className="text-gray-300 mb-4">
            Funds can be locked for a predetermined period, preventing unauthorized access and providing an additional layer of security without the need for self-custody.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Key className="w-5 h-5 text-orange-400" /> Reversible Address Design
          </h3>
          <p className="text-gray-300 mb-4">
            User's public key combined with trusted third party and Moria Finance platform keys, ensuring funds can only be accessed with consent of all parties.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-red-400" /> Multisig Management
          </h3>
          <p className="text-gray-300 mb-4">
            Easy-to-use multisig interface for corporate funds using Supabase Realtime, requiring signatures from multiple authorized parties before executing transactions.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-400" /> Two-Layer Security
          </h3>
          <p className="text-gray-300 mb-4">
            Decentralized layer (n-of-1000) from Ergo blockchain combined with federated layer (n-of-100) from Rosen Bridge for unparalleled security.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-red-400" /> Smart Contract Rules
          </h3>
          <p className="text-gray-300 mb-4">
            Ergo's smart contracts provide an extra layer of security, ensuring funds are managed according to predefined rules and conditions.
          </p>
        </div>
      </div>

      {/* Smart Contract Wallets Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Wallet className="w-6 h-6 text-orange-400" /> Smart Contract Wallets
        </h2>
        <p className="text-gray-300 mb-4">
          At the core of Moria Finance's offering are advanced smart contract wallets that provide enhanced security, flexibility, and control over funds. These wallets leverage Ergo's powerful smart contract capabilities to implement various features.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Timelock</h4>
            <p className="text-gray-300 text-sm">
              Funds can be locked for a predetermined period, preventing unauthorized access and providing an additional layer of security.
            </p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Reversible Address</h4>
            <p className="text-gray-300 text-sm">
              User's public key combined with trusted third party and Moria Finance platform keys for enhanced security.
            </p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Multisig Management</h4>
            <p className="text-gray-300 text-sm">
              Easy-to-use multisig interface for corporate funds using Supabase Realtime for proper oversight and governance.
            </p>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-orange-400" /> Unparalleled Security
        </h2>
        <p className="text-gray-300 mb-4">
          One of the key advantages of Moria Finance is the unparalleled security it offers through the combination of the Ergo blockchain and the Rosen Bridge. By bridging BTC to rsBTC on Ergo, users benefit from a two-layer security model.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Decentralized Layer</h4>
            <p className="text-gray-300 text-sm">
              The Ergo blockchain provides a decentralized layer with n-of-1000 security, ensuring that no single entity can compromise the network.
            </p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Federated Layer</h4>
            <p className="text-gray-300 text-sm">
              The Rosen Bridge adds a federated layer with n-of-100 security, further enhancing the overall security of the system.
            </p>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <List className="w-6 h-6 text-yellow-400" /> Use Cases
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Individual fund management with enhanced security features</li>
          <li>Corporate treasury management with multisig oversight</li>
          <li>BTC to rsBTC bridging for DeFi participation</li>
          <li>Time-locked investment strategies</li>
          <li>Decentralized custody solutions</li>
          <li>Institutional-grade fund management on Ergo</li>
        </ul>
      </div>

      {/* Technology Stack Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6 text-orange-400" /> Technology Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Blockchain & Smart Contracts</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
              <li>Ergo blockchain for decentralized security</li>
              <li>Advanced smart contracts for fund management</li>
              <li>Rosen Bridge for BTC to rsBTC bridging</li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Backend & Infrastructure</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
              <li>TypeScript backend implementation</li>
              <li>Supabase Realtime for multisig coordination</li>
              <li>Nautilus wallet integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-orange-400" /> Get Involved
        </h2>
        <p className="text-gray-300 mb-4">
          Moria Finance is an open-source project, and the team welcomes contributions from the community. By embracing the power of Ergo's smart contracts and the security of the Rosen Bridge, Moria Finance aims to pave the way for a new era of decentralized fund management.
        </p>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ExternalLink className="w-6 h-6 text-orange-400" /> Resources & Repositories
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-orange-400" />
            <a href="https://github.com/Moria-Finance" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Moria Finance Organization</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-orange-400" />
            <a href="https://github.com/Moria-Finance/moria-backend" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Moria Backend Repository</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-orange-400" />
            <a href="https://github.com/Moria-Finance/multi-sig-test" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Multi-Sig Test Repository</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-orange-400" />
            <a href="https://github.com/Moria-Finance/nautilus-wallet" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Nautilus Wallet Fork</a>
          </li>
        </ul>
      </div>
    </>
  );
} 