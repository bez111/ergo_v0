"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { Users, BookOpen, Link as LinkIcon, ExternalLink, CheckCircle, Info, Shield, TrendingUp, Youtube, MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function PaideiaDaoPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Users className="w-8 h-8 text-pink-400" /> Paideia DAO Staking & Governance dApp
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Paideia is a functional, secure, and well-documented DAO software suite from the ergopad team. It enables anyone to create and manage DAOs, distribute tokens, create proposals, collect votes, and share funds in a secure and fair way on Ergo.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://www.paideia.im/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-pink-500 rounded-xl font-semibold text-black hover:bg-pink-600 transition-transform hover:scale-105">
            <ExternalLink className="w-5 h-5 mr-2" /> Paideia Website
          </a>
          <a href="https://deepwiki.com/paideiadao/paideia-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700">
            <BookOpen className="w-5 h-5 mr-2" /> DeepWiki Documentation
          </a>
          <a href="https://www.youtube.com/watch?v=YUGNLQ6n8BA&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-red-600 rounded-xl font-semibold text-white hover:bg-red-700">
            <Youtube className="w-5 h-5 mr-2" /> One Take Series Video
          </a>
          <a href="https://discord.com/invite/jP25DeTC8U" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-indigo-600 rounded-xl font-semibold text-white hover:bg-indigo-700">
            <MessageCircle className="w-5 h-5 mr-2" /> Paideia Discord
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-pink-400" /> What is Paideia?
        </h2>
        <p className="text-gray-300 mb-2">
          Paideia is a Web3 DAO management suite designed to make decentralized governance accessible, secure, and flexible. It supports DAOs at every stage, from creation to advanced treasury management, with a focus on transparency, low fees, and ease of use.
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-1 text-sm">
          <li>Launch and manage DAOs with custom governance and voting structures</li>
          <li>Distribute tokens, raise funds, and manage treasuries</li>
          <li>Create, discuss, and vote on proposals</li>
          <li>Stake tokens for participation and rewards</li>
          <li>Moderation and anti-spam tools for healthy DAO communities</li>
        </ul>
      </div>

      {/* Prerequisites Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-cyan-400" /> Prerequisites
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Ergo wallet (e.g., Nautilus) for interacting with Paideia</li>
          <li>Creating a DAO requires 50,000 Paideia tokens (contact the team to initiate)</li>
          <li>Creating proposals requires at least 500 Paideia tokens in your wallet</li>
        </ul>
      </div>

      {/* Getting Started Section */}
      <div className="bg-neutral-900/50 border border-pink-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-pink-400" /> Getting Started
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Connect and authenticate your wallet on the Paideia platform using the <b>Connect Wallet</b> button.</li>
          <li>Create your profile (username, bio, profile picture).</li>
          <li>Stake the appropriate DAO token under <b>Staking &rarr; Manage Stake</b> to participate.</li>
        </ol>
      </div>

      {/* Creating Proposals Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-cyan-400" /> Creating Proposals
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Ensure you have at least 500 Paideia tokens in your wallet.</li>
          <li>Go to your DAO's page and click <b>Create Proposal</b>.</li>
          <li>Fill in proposal details, outputs, and duration, then submit.</li>
          <li>Sign the transaction with your wallet when prompted.</li>
        </ol>
      </div>

      {/* Voting Section */}
      <div className="bg-neutral-900/50 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" /> Voting on Proposals
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>DAO members can vote on active proposals.</li>
          <li>Check your DAO's config for minimum Paideia required to vote (e.g., Sigmanauts DAO requires none).</li>
          <li>Votes may take time to appear in the UI; refresh if needed.</li>
        </ul>
      </div>

      {/* Staking Section */}
      <div className="bg-neutral-900/50 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-yellow-400" /> Staking & Unstaking
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Stake Paideia tokens through the dApp for participation and rewards.</li>
          <li>If you encounter issues: ensure your wallet is synced, consolidate UTXOs, clear cache, and reconnect.</li>
          <li>For persistent issues, contact the Paideia team via Discord.</li>
        </ul>
      </div>

      {/* Moderation Section */}
      <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-orange-400" /> Moderation & Spam Prevention
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Proposal creation costs a small amount of Paideia tokens to discourage spam.</li>
          <li>DAO members may have roles with different moderation privileges based on token holdings.</li>
          <li>Community up/down voting and minimum token requirements for posting are planned.</li>
        </ul>
      </div>

      {/* Development Updates Section */}
      <div className="bg-neutral-900/50 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Development Updates
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Refactored smart contracts for better code reuse</li>
          <li>Staking reward system now allows DAOs to change emission rates</li>
          <li>Generic refund/configuration logic in contracts</li>
          <li>Planned migration to EIP-5 standard</li>
        </ul>
      </div>

      {/* Support Section */}
      <div className="bg-neutral-900/50 border border-pink-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-pink-400" /> Support & Issue Reporting
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>For support, open a ticket in the <a href="https://discord.com/invite/jP25DeTC8U" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Paideia Discord</a>.</li>
          <li>Share console logs (F12) with the team for debugging.</li>
        </ul>
      </div>
    </div>
  );
} 