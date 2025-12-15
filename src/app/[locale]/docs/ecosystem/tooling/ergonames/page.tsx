"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import {
  Star,
  Users,
  Globe,
  Code,
  ExternalLink,
  ChevronRight,
  BookOpen,
  CheckCircle,
  Layers
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ErgoNamesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          ErgoNames: Decentralized Naming System for Ergo
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          ErgoNames is a decentralized naming system for the Ergo blockchain, allowing users to register human-readable names that can be associated with their Ergo addresses. This improves the user experience by making it easier to send and receive transactions using memorable names instead of long, complex addresses.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/tooling"
            className="inline-flex items-center px-6 py-3 bg-yellow-400 rounded-xl font-semibold text-black hover:bg-yellow-500 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Tooling
          </Link>
          <a
            href="https://github.com/ergonames"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> GitHub Repository
          </a>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" /> Register Unique Names
          </h3>
          <p className="text-gray-300 mb-4">
            Register unique, human-readable names on the Ergo blockchain and associate them with your Ergo addresses.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              Unique, memorable names
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              Easy registration process
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" /> Address Association
          </h3>
          <p className="text-gray-300 mb-4">
            Associate registered names with Ergo addresses and resolve names to addresses for easy transactions.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              Name-to-address resolution
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              Support for subnames (e.g., alice.example)
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5 text-green-400" /> Decentralized & Censorship-Resistant
          </h3>
          <p className="text-gray-300 mb-4">
            Built on the Ergo blockchain, ErgoNames is decentralized, censorship-resistant, and open-source.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No central authority
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Community-driven development
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-400" /> Open-Source & Extensible
          </h3>
          <p className="text-gray-300 mb-4">
            ErgoNames is open-source and designed for integration with wallets and dApps, supporting a better user experience across the Ergo ecosystem.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-400" />
              Open-source smart contracts & SDKs
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-400" />
              Wallet & dApp integration
            </li>
          </ul>
        </div>
      </div>

      {/* Project Overview Section */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6 text-yellow-400" /> Project Overview
        </h2>
        <p className="text-gray-300 mb-4">
          The project is actively being developed by the Ergo community, with contributions from various developers. The core components include:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Ergo Contracts:</b> Smart contracts for registering and managing names on the Ergo blockchain.</li>
          <li><b>Off-chain Tools and Libraries:</b> Tools and libraries for interacting with the naming system off-chain.</li>
          <li><b>Wallet and Application Integration:</b> Integration with Ergo wallets and applications for seamless user experience.</li>
        </ul>
      </div>

      {/* Get Involved Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-yellow-400" /> Get Involved
        </h2>
        <p className="text-gray-300 mb-4">
          Stay tuned for updates as ErgoNames progresses towards its mainnet launch, bringing a more accessible and user-friendly experience to the Ergo ecosystem.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-yellow-400" />
            <a href="https://github.com/ergonames" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">GitHub Repository</a>
          </li>
        </ul>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "ErgoNames makes Ergo addresses human-friendly, paving the way for mass adoption and a seamless user experience."
        </blockquote>
      </div>
    </>
  );
} 