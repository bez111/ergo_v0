"use client";

import React from "react";
import {
  Store,
  Shield,
  Smartphone,
  Users,
  Globe,
  Link as LinkIcon,
  Award,
  CheckCircle,
  Flame,
  TrendingUp,
  Lock,
  DollarSign,
  BookOpen,
  Twitter,
  Send,
  Globe2,
  User,
  PawPrint,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function TabbyPOSPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Store className="w-8 h-8 text-orange-400" /> TabbyPOS
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Web3 Crypto POS | Bringing decentralized payments to real-world businesses. TabbyPOS is a cryptocurrency point-of-sale (POS) system that enables merchants to accept crypto payments seamlessly across multiple blockchains, including Ergo, IoTeX, ICP, and Solana.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/ecosystem/applications"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Applications
          </Link>
          <a
            href="https://www.tabbylab.io/"
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
          <BookOpen className="w-6 h-6 text-orange-400" /> What is TabbyPOS?
        </h2>
        <p className="text-gray-300">
          TabbyPOS is a comprehensive POS solution for merchants, featuring a merchant dashboard, customer interface, mobile app, and support for a wide range of hardware. It provides fast, secure, and scalable crypto payments, and a decentralized backend for real-time payment records and management.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Secure & Private
          </h3>
          <p className="text-gray-300 mb-4">
            End-to-end encryption, multi-factor authentication, and fraud detection ensure security and compliance. Peer-to-peer payments mean no asset custody or compliance risk.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> End-to-end encryption</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Multi-factor authentication</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Fraud detection</li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-cyan-400" /> Multi-Chain & Mobile
          </h3>
          <p className="text-gray-300 mb-4">
            Accepts a wide range of cryptocurrencies across different blockchains. Mobile app and backend system provide real-time access to payment records and management tools.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Multi-chain support</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Mobile app for remote management</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Real-time payment records</li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-400" /> Achievements
          </h3>
          <p className="text-gray-300 mb-4">
            Funding from ICP Dfinity, Solana, and Aptos Foundations. MVP product, 10 merchants testing, and commercial launch planned.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Funding from major foundations</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> MVP product, 80% complete</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 10 merchants testing</li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-400" /> Revenue Model
          </h3>
          <p className="text-gray-300 mb-4">
            Revenue from POS device sales, OEM services, custom software, crypto-fiat exchange fees, and listing fees for token projects.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> POS device sales</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> OEM & custom software</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Exchange & listing fees</li>
          </ul>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Smartphone className="w-6 h-6 text-cyan-400" /> How TabbyPOS Works
        </h2>
        <p className="text-gray-300 mb-4">
          TabbyPOS uses a peer-to-peer payment method: crypto is sent directly from the customer’s wallet to the merchant’s wallet. No assets are ever held or managed by TabbyPOS, eliminating compliance risks. The backend system provides payment records and management tools for merchants.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Multi-Chain Device</h4>
            <p className="text-gray-300 text-sm">Accepts a wide range of cryptocurrencies across different blockchains, ensuring flexibility for businesses and customers.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Backend System</h4>
            <p className="text-gray-300 text-sm">Real-time access to payment records, transaction tracking, and sales management for merchants.</p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-green-400" /> Resources & Links
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://www.tabbylab.io/" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Website</h4>
            <p className="text-gray-300 text-sm">Official TabbyPOS platform and product info.</p>
          </a>
          <a href="https://github.com/LEEKOHCHING/TabbyPOS-Introduction" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">GitHub</h4>
            <p className="text-gray-300 text-sm">Source code and documentation.</p>
          </a>
          <a href="https://www.tabbylab.io/" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-orange-400 mb-2">Whitepaper</h4>
            <p className="text-gray-300 text-sm">Technical overview and features.</p>
          </a>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "TabbyPOS brings seamless, secure, and scalable crypto payments to real-world businesses—empowering merchants and customers alike."
        </blockquote>
      </div>
    </>
  );
} 