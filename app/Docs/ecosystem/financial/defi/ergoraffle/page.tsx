"use client";

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
  BookOpen
} from "lucide-react";
import Link from "next/link";

export default function ErgoRafflePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          ErgoRaffle
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          ErgoRaffle is a decentralized crowdfunding platform on Ergo that enables anyone to raise funds for projects, charities, academic plans, or business initiatives through transparent and secure raffle mechanisms.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
          <a
            href="https://github.com/ErgoRaffle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> View on GitHub
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is ErgoRaffle?
        </h2>
        <p className="text-gray-300">
          ErgoRaffle is a crowdfunding service built on Ergo that allows anyone to raise funds for various projects including direct donations to charities, academic or business plans, and any other initiatives that can convince people to contribute their ERG. The platform uses transparent raffle mechanisms to incentivize participation while ensuring fair fund distribution.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Gift className="w-5 h-5 text-green-400" /> Crowdfunding Platform
          </h3>
          <p className="text-gray-300 mb-4">
            Enables anyone to create fundraising campaigns for projects, charities, academic plans, or business initiatives with transparent and secure mechanisms.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent fund distribution
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Multiple project types supported
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Decentralized governance
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" /> Secure & Transparent
          </h3>
          <p className="text-gray-300 mb-4">
            Built on Ergo's eUTXO model with open-source smart contracts ensuring transparency, security, and verifiable fund distribution.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Open-source smart contracts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              On-chain fund tracking
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Verifiable transactions
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" /> Community Driven
          </h3>
          <p className="text-gray-300 mb-4">
            Empowers communities to support causes they believe in through decentralized fundraising mechanisms with built-in incentives.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Community voting mechanisms
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Incentivized participation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent governance
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" /> Multi-Platform Support
          </h3>
          <p className="text-gray-300 mb-4">
            Comprehensive platform with backend, frontend, and documentation components, supporting both web and mobile interfaces.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Web interface (JavaScript/TypeScript)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Scala backend
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Comprehensive documentation
            </li>
          </ul>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-cyan-400" /> How It Works
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Gift className="w-5 h-5 text-green-400" /> Campaign Creation
            </h3>
            <p className="text-gray-300 mb-4">
              Users can create fundraising campaigns by defining project goals, funding targets, and campaign duration. All campaign details are stored on-chain for transparency.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Banknote className="w-5 h-5 text-blue-400" /> Fund Collection
            </h3>
            <p className="text-gray-300 mb-4">
              Contributors can donate ERG to campaigns through secure smart contracts. Funds are held in escrow until campaign completion or refund conditions are met.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-400" /> Raffle Mechanism
            </h3>
            <p className="text-gray-300 mb-4">
              The platform uses raffle mechanisms to incentivize participation while ensuring fair distribution of funds based on campaign success criteria.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-yellow-400" /> Fund Distribution
            </h3>
            <p className="text-gray-300 mb-4">
              Upon campaign completion, funds are automatically distributed to project creators or refunded to contributors based on predefined smart contract conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Developer Access Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-orange-400" /> Developer Access
        </h2>
        <p className="text-gray-300 mb-6">
          ErgoRaffle is fully open-source with comprehensive documentation and multiple components available for developers to contribute or integrate.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <h3 className="font-semibold text-orange-400 mb-2">Backend (Scala)</h3>
            <p className="text-gray-300 text-sm mb-3">
              Core smart contracts and backend logic written in Scala, leveraging Ergo's eUTXO model for secure fund management.
            </p>
            <a
              href="https://github.com/ErgoRaffle/raffle-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
            >
              View Backend <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <h3 className="font-semibold text-orange-400 mb-2">Frontend (JavaScript/TypeScript)</h3>
            <p className="text-gray-300 text-sm mb-3">
              User interface components built with JavaScript and TypeScript, providing web-based access to the raffle platform.
            </p>
            <a
              href="https://github.com/ErgoRaffle/raffle-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
            >
              View Frontend <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="bg-orange-800/20 border border-orange-600 rounded-lg p-4">
            <h3 className="font-semibold text-orange-400 mb-2">Documentation</h3>
            <p className="text-gray-300 text-sm mb-3">
              Comprehensive documentation covering platform architecture, smart contracts, and integration guides.
            </p>
            <a
              href="https://github.com/ErgoRaffle/raffle-documentation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
            >
              View Docs <ExternalLink className="w-4 h-4 ml-1" />
            </a>
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
            <h3 className="font-semibold text-green-400 mb-2">What types of projects can be funded?</h3>
            <p className="text-gray-300 text-sm">
              ErgoRaffle supports various project types including direct donations to charities, academic or business plans, and any other initiatives that can convince people to contribute their ERG.
            </p>
          </div>
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">How does the raffle mechanism work?</h3>
            <p className="text-gray-300 text-sm">
              The platform uses transparent raffle mechanisms to incentivize participation while ensuring fair distribution of funds based on campaign success criteria and contributor preferences.
            </p>
          </div>
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Is the platform secure?</h3>
            <p className="text-gray-300 text-sm">
              Yes, ErgoRaffle is built on Ergo's secure eUTXO model with open-source smart contracts, ensuring transparency and verifiable fund distribution.
            </p>
          </div>
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Can I contribute to the development?</h3>
            <p className="text-gray-300 text-sm">
              Absolutely! The project is fully open-source with repositories for backend, frontend, and documentation. Developers can contribute to any component or create integrations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 