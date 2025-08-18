"use client";

import React from "react";
import {
  Globe,
  Layers,
  Star,
  ChevronRight,
  BookOpen,
  Briefcase,
  Sun,
  Cpu,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function ZenGateGlobalPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Globe className="w-8 h-8 text-orange-400" /> zenGate Global
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Global trade and supply chain dApp leveraging Ergo and Cardano. zenGate Global builds commercial blockchain solutions for governments and businesses worldwide.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/applications"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Applications
          </Link>
          <a
            href="https://zengate.global/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Globe className="w-5 h-5 mr-2" /> Visit Website
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> What is zenGate Global?
        </h2>
        <p className="text-gray-300">
          Founded in 2022, zenGate Global is a leading blockchain technology company building commercial solutions for governments and businesses around the world. The ecosystem is composed of three core product families: Palmyra ComDEX, Solaris Portal, and Cyberiad.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-green-400" /> Financial Inclusion
          </h3>
          <p className="text-gray-300 mb-4">
            zenGate’s mission is to bring financial inclusion for micro, small and medium sized businesses through paradigm-shifting blockchain solutions.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><Star className="w-4 h-4 text-green-400" /> Focus on MSMEs</li>
            <li className="flex items-center gap-2"><Star className="w-4 h-4 text-green-400" /> Paradigm-shifting technology</li>
            <li className="flex items-center gap-2"><Star className="w-4 h-4 text-green-400" /> Global reach</li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" /> eUTXO Ecosystem
          </h3>
          <p className="text-gray-300 mb-4">
            Utilizes the best features and tools from the extended-UTXO ecosystems such as Ergo and Cardano for scalability, privacy, and security.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><Layers className="w-4 h-4 text-cyan-400" /> Ergo & Cardano integration</li>
            <li className="flex items-center gap-2"><Layers className="w-4 h-4 text-cyan-400" /> Scalable & secure</li>
            <li className="flex items-center gap-2"><Layers className="w-4 h-4 text-cyan-400" /> Privacy features</li>
          </ul>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6 text-cyan-400" /> Core Product Families
        </h2>
        <ul className="space-y-4 text-gray-300 text-base">
          <li className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-orange-400" />
            <b>Palmyra ComDEX:</b> Commercial decentralized exchange for commodities and trade finance.
          </li>
          <li className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-yellow-400" />
            <b>Solaris Portal:</b> Digital portal for onboarding, compliance, and business process automation.
          </li>
          <li className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <b>Cyberiad:</b> Advanced infrastructure and tools for blockchain-based business solutions.
          </li>
        </ul>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-green-400" /> Resources & Links
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="https://zengate.global/" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Website</h4>
            <p className="text-gray-300 text-sm">Official zenGate Global platform and product info.</p>
          </a>
          <a href="https://palmyra.io/" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Palmyra ComDEX</h4>
            <p className="text-gray-300 text-sm">Decentralized exchange for commodities and trade finance.</p>
          </a>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "zenGate Global is committed to empowering businesses and governments with innovative blockchain solutions, driving financial inclusion and digital transformation worldwide."
        </blockquote>
      </div>
    </>
  );
} 