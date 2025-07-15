"use client";

import React from "react";
import {
  Shield,
  KeyRound,
  Users,
  Link as LinkIcon,
  Globe,
  Twitter,
  Send,
  FileText,
  Layers,
  Ticket,
  Database,
  Building2,
  ChevronRight,
  BookOpen,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

export default function PandaVPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <KeyRound className="w-8 h-8 text-orange-400" /> PandaV
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          NFT access control and digital asset platform leveraging Ergo. Secure, decentralized, and transparent management of access rights and ownership using NFTs and blockchain.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/ecosystem/applications"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Applications
          </Link>
          <a
            href="https://www.pandav.io/"
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
          <BookOpen className="w-6 h-6 text-orange-400" /> What is PandaV?
        </h2>
        <p className="text-gray-300">
          PandaV is a blockchain-based NFT integration with an access control system. By leveraging the power of blockchain technology and NFTs, PandaV provides a secure and decentralized way to manage access rights and ownership, presenting unprecedented opportunities to revolutionize access control mechanisms.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <KeyRound className="w-5 h-5 text-green-400" /> Secure Access Control
          </h3>
          <p className="text-gray-300 mb-4">
            NFTs as digital representations of access rights, ensuring only authorized individuals gain access. Immutable, tamper-proof credentials.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> NFT-based access rights</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Tamper-proof credentials</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Immutable audit trail</li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" /> Ownership Verification
          </h3>
          <p className="text-gray-300 mb-4">
            Transparent, auditable record of ownership for easy verification. No central authority required—decentralized management and trustless access.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Transparent ownership</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Decentralized management</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Trustless access control</li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" /> Interoperability
          </h3>
          <p className="text-gray-300 mb-4">
            Built on the Ergo Platform, leveraging eUTXO, privacy, and scalability features. Adaptable to evolving security requirements and future-ready.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Ergo eUTXO model</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Privacy & scalability</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Future-ready architecture</li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Ticket className="w-5 h-5 text-yellow-400" /> Use Cases
          </h3>
          <p className="text-gray-300 mb-4">
            NFT-based access control for physical and digital resources, event management, and supply chain tracking.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Physical access (buildings, facilities)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Digital access (software, databases)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Event tickets & passes</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Supply chain management</li>
          </ul>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-green-400" /> Resources & Links
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://www.pandav.io/" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Website</h4>
            <p className="text-gray-300 text-sm">Official PandaV platform and project info.</p>
          </a>
          <a href="https://www.pandav.io/download/PDVWhitepaper.pdf" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Whitepaper</h4>
            <p className="text-gray-300 text-sm">Technical overview and features.</p>
          </a>
          <a href="https://x.com/PandaV_io" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Twitter</h4>
            <p className="text-gray-300 text-sm">Project updates and news.</p>
          </a>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "PandaV leverages NFTs and blockchain to redefine access control—secure, transparent, and decentralized for the future."
        </blockquote>
      </div>
    </>
  );
} 