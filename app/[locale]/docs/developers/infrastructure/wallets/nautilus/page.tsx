"use client";

import React from "react";
import {
  Globe,
  Lock,
  ExternalLink,
  Users,
  Info,
  ChevronRight,
  BookOpen
} from "lucide-react";
import Link from "next/link";

export default function NautilusPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Nautilus Wallet
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Nautilus Wallet is a privacy-focused, web-based wallet designed for secure management of digital assets within the Ergo ecosystem. It offers an intuitive user interface for both novice and experienced users.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/wallets"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Wallets
          </Link>
          <a
            href="https://twitter.com/NautilusWallet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Nautilus Twitter
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-cyan-400" /> Privacy Enhanced
          </h3>
          <p className="text-gray-300 mb-2">
            Nautilus prioritizes user privacy, employing advanced security measures to protect your digital assets.
          </p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-green-400" /> Ledger Integration
          </h3>
          <p className="text-gray-300 mb-2">
            Nautilus supports Ledger hardware wallets for an extra layer of security (currently available in developer mode for advanced users and developers).
          </p>
        </div>
      </div>

      {/* Installation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-cyan-400" /> Installation
        </h2>
        <p className="text-gray-300 mb-4">
          Nautilus can be easily installed as a browser extension. Select the version compatible with your browser:
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://chrome.google.com/webstore/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Chrome Web Store
          </a>
          <a
            href="https://addons.mozilla.org/bs/firefox/addon/nautilus/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Firefox Add-ons
          </a>
        </div>
      </div>

      {/* Video Guide Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-orange-400" /> Comprehensive Video Guide
        </h2>
        <p className="text-gray-300 mb-4">
          For a step-by-step guide on setting up and using Nautilus, watch the comprehensive video tutorial.
        </p>
        <a
          href="https://www.youtube.com/watch?v=hMwtwlUpnRQ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-orange-500 rounded-lg text-black font-semibold hover:bg-orange-600 transition-colors"
        >
          <ExternalLink className="w-4 h-4 mr-2" /> Watch Tutorial
        </a>
      </div>

      {/* i18n Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-cyan-400" /> Internationalization (i18n)
        </h2>
        <p className="text-gray-300">
          There is community interest in providing Nautilus Wallet translations for different languages to improve accessibility. While multi-language support may be planned, the specific process for contributing translations might vary. If you are interested in contributing translations, please inquire in the Nautilus community channels linked below for the current status and contribution guidelines.
        </p>
      </div>

      {/* Community Support Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-400" /> Community Support
        </h2>
        <p className="text-gray-300 mb-4">
          Connect with the Nautilus community for support, updates, and discussions. Join the Telegram or Discord channels (chats are bridged for a cohesive experience):
        </p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <a href="http://t.me/@NautilusWallet" target="_blank" rel="noopener noreferrer" className="hover:underline">Telegram</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <a href="https://discord.gg/ergo-platform-668903786361651200" target="_blank" rel="noopener noreferrer" className="hover:underline">Discord</a>
          </li>
        </ul>
      </div>
    </>
  );
} 