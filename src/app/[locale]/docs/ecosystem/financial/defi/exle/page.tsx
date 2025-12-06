"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import {
  ExternalLink,
  Info,
  Zap,
  CheckCircle,
  TrendingUp,
  Shield,
  Users,
  Gavel,
  AlertTriangle,
  Target,
  Layers,
  Calculator,
  ArrowUpDown,
  ChevronRight,
  Brain,
  GitBranch,
  Globe,
  Banknote,
  Cpu,
  Settings,
  Gift,
  FileText,
  Code,
  Play,
  BookOpen,
  Coins
} from "lucide-react";
import Link from "next/link";

export default function EXLEPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          EXLE
      </h1>
        <p className="text-xl text-gray-400 mb-6">
          EXLE (formerly Ergo-Lend) is a person-to-person (P2P) lending platform on Ergo that enables global lending with easy-to-use tools for borrowing and lending money, leveraging blockchain technology to create a decentralized lending ecosystem.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
          <a
            href="https://exle.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit EXLE
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is EXLE?
        </h2>
        <p className="text-gray-300">
          EXLE is a new paradigm for lending that leverages blockchain technology to create a global lending platform. The goal is to provide universal access to financial services, especially for the billions of unbanked people around the world, through a decentralized autonomous organization (DAO) that will manage the platform.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-green-400" /> P2P Lending Platform
          </h3>
        <p className="text-gray-300 mb-4">
            Person-to-person lending with easy-to-use tools for borrowing and lending money on the Ergo blockchain, eliminating traditional banking intermediaries.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Direct peer-to-peer lending
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Easy-to-use borrowing tools
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent lending terms
            </li>
          </ul>
          </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" /> Secure & Trustless
          </h3>
          <p className="text-gray-300 mb-4">
            Built on Ergo's secure blockchain with trustless peer-to-peer payments and privacy features, allowing users to be their own bank.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Trustless peer-to-peer payments
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Privacy-focused transactions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Self-custody of funds
            </li>
          </ul>
          </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5 text-purple-400" /> Universal Access
          </h3>
          <p className="text-gray-300 mb-4">
            Designed to provide financial services to unbanked populations worldwide, making small loans viable through lower borrowing costs and reduced operational expenses.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Access for unbanked populations
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Lower borrowing costs
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Mobile-first approach
            </li>
          </ul>
            </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" /> DAO Governance
          </h3>
          <p className="text-gray-300 mb-4">
            Platform managed by a decentralized autonomous organization (DAO), ensuring community-driven development and transparent governance of the lending ecosystem.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Decentralized governance
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Community-driven development
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent platform management
            </li>
          </ul>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <Target className="w-6 h-6" /> Mission & Vision
        </h2>
        <p className="text-gray-300 mb-4">
          EXLE aims to overcome the limitations of traditional financial systems that are not designed to provide small loans at reasonable rates, especially for people in rural areas and unbanked populations.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-400" /> Current Financial System Issues
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                High loan costs and limited availability
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                Expensive underwriting for rural areas
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                Middlemen increasing borrowing costs
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> EXLE Solutions
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Lower borrowing costs enable smaller loans
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Ubiquitous mobile access to financial services
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Removal of traditional middlemen
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Token Economics Section */}
      <div className="bg-neutral-900/50 border border-purple-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-400">
          <Coins className="w-6 h-6" /> Token Economics
        </h2>
        <p className="text-gray-300 mb-4">
          EXLE token distribution is designed to support the platform's growth and community governance, with IDO facilitated by ErgoPad.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Ergopad Staker Round</span>
              <span className="text-purple-400 font-semibold">16%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Ergopad Seed Round</span>
              <span className="text-purple-400 font-semibold">21%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Ergopad Strategic Round</span>
              <span className="text-purple-400 font-semibold">11%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Liquidity (Locked)</span>
              <span className="text-purple-400 font-semibold">6%</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">DAO Reserve</span>
              <span className="text-purple-400 font-semibold">20%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Distribution Partner</span>
              <span className="text-purple-400 font-semibold">5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Core Team</span>
              <span className="text-purple-400 font-semibold">21%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Development Timeline Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Play className="w-6 h-6" /> Development Timeline
        </h2>
        <div className="space-y-4">
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">October 8-10, 2021</h3>
            <p className="text-gray-300 text-sm">
              ErgoHack II event - Ergo-Lend took first place! Completed first version of UI and large portion of ergoscript required to function.
            </p>
          </div>
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">End of February, 2022</h3>
            <p className="text-gray-300 text-sm">
              Completed full end-to-end test using fully functional ergoscript contracts, scala backend and nextjs frontend.
            </p>
          </div>
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">End of March, 2022</h3>
            <p className="text-gray-300 text-sm">
              Contract bug bash and refactor to fix all found bugs and improve features.
            </p>
          </div>
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">May 18, 2022</h3>
            <p className="text-gray-300 text-sm">
              Rebranding from Ergo-Lend to EXLE.
        </p>
      </div>
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Summer 2022</h3>
            <p className="text-gray-300 text-sm">
              Scaling the backend for engineering and performance improvements.
        </p>
      </div>
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Fall 2022</h3>
            <p className="text-gray-300 text-sm">
              New features for both frontend and backend planned with community proposals and submissions.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-green-400" /> Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">What is EXLE?</h3>
            <p className="text-gray-300 text-sm">
              EXLE (formerly Ergo-Lend) is a person-to-person (P2P) lending platform on Ergo that enables global lending with easy-to-use tools for borrowing and lending money.
            </p>
          </div>
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">How does EXLE help unbanked populations?</h3>
            <p className="text-gray-300 text-sm">
              EXLE provides universal access to financial services through lower borrowing costs, reduced operational expenses, and mobile-first approach, making small loans viable for previously underserved populations.
            </p>
          </div>
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Is EXLE secure?</h3>
            <p className="text-gray-300 text-sm">
              Yes, EXLE is built on Ergo's secure blockchain with trustless peer-to-peer payments and privacy features, allowing users to be their own bank without relying on traditional financial intermediaries.
            </p>
          </div>
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">How is the platform governed?</h3>
            <p className="text-gray-300 text-sm">
              EXLE is managed by a decentralized autonomous organization (DAO), ensuring community-driven development and transparent governance of the lending ecosystem.
        </p>
      </div>
        </div>
      </div>
    </>
  );
} 