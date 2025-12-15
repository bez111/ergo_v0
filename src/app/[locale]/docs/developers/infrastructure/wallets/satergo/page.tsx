"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import {
  Monitor,
  Info,
  ExternalLink,
  Users,
  Lock,
  Cpu,
  ChevronRight
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function SatergoPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Satergo Wallet
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Satergo is a modern, cross-platform desktop wallet for Ergo, featuring integrated full node support for privacy, decentralization, and self-reliance.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/wallets"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Wallets
          </Link>
          <a
            href="https://satergo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Satergo Website
          </a>
        </div>
      </div>

      {/* Video Guide */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-orange-400" /> Video Guide
        </h2>
        <p className="text-gray-300 mb-4">
          Watch a comprehensive video tutorial to master Satergo's features and setup.
        </p>
        <a
          href="https://www.youtube.com/watch?v=68d5_3vkXO4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-orange-500 rounded-lg text-black font-semibold hover:bg-orange-600 transition-colors"
        >
          <ExternalLink className="w-4 h-4 mr-2" /> Watch Tutorial
        </a>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" /> Full Node Support
          </h3>
          <p className="text-gray-300 mb-2">
            Satergo is the only Ergo wallet with integrated full node support. Run your own node for maximum privacy and decentralization, or connect to a remote node for convenience.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-green-400" /> Lightweight & Feature-Rich
          </h3>
          <p className="text-gray-300 mb-2">
            Satergo is fast, lightweight, and requires no extra software. All essential features are built-in, making it ideal for any desktop user.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-purple-400" /> Cross-Platform
          </h3>
          <p className="text-gray-300 mb-2">
            Available for Windows, macOS, and Linux. The interface and features are consistent across all platforms.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-yellow-400" /> Satergo Offline Vault
          </h3>
          <p className="text-gray-300 mb-2">
            Use the <Link href="/docs/developers/infrastructure/wallets/satergo-vault" className="underline hover:text-cyan-400">Satergo Offline Vault</Link> Android app to securely store your encrypted seed phrase and sign transactions via Bluetooth.
          </p>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-400" /> Resources & Community
        </h2>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <a href="https://satergo.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Satergo Website</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <a href="https://github.com/Satergo" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          </li>
          <li className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            <a href="https://t.me/Satergo" target="_blank" rel="noopener noreferrer" className="hover:underline">Telegram</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <a href="https://twitter.com/SatergoWallet" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
          </li>
        </ul>
      </div>
    </>
  );
} 