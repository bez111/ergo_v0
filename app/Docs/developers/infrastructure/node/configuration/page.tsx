"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, Wallet, Database, FileText, Shield, 
  Settings, Code, Lock, Server, ExternalLink, GitBranch
} from "lucide-react";

export default function NodeConfigurationPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Node Configuration
      </h1>

      <div className="mb-8">
        <Link
          href="/Docs/developers/infrastructure/node"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Infrastructure
        </Link>
      </div>

      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-orange-400" /> Configuration Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ergo node configuration encompasses wallet management, API documentation, configuration files, and privacy features. This section provides comprehensive guidance for setting up and customizing your Ergo node.
          </p>
        </section>

        {/* Node Wallet Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Wallet className="w-6 h-6 text-green-400" /> Node Wallet
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-400" /> Wallet Security
              </h3>
              <p className="text-gray-300 mb-4">
                Secure wallet management for your Ergo node, including key generation, storage, and transaction signing capabilities.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Secure key generation and storage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Transaction signing and validation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Multi-signature support
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-cyan-400" /> Wallet Integration
              </h3>
              <p className="text-gray-300 mb-4">
                Integration with external wallets and applications through standardized APIs and protocols.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  REST API integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  ErgoPay protocol support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Third-party wallet compatibility
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Swagger API Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" /> Swagger API
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" /> API Documentation
              </h3>
              <p className="text-gray-300 mb-4">
                Comprehensive REST API documentation with Swagger/OpenAPI specification for Ergo node interactions.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Interactive API documentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Request/response examples
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Authentication methods
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Server className="w-5 h-5 text-orange-400" /> API Endpoints
              </h3>
              <p className="text-gray-300 mb-4">
                Complete list of available API endpoints for blockchain data, wallet operations, and network information.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Blockchain data queries
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Transaction operations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Network statistics
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="https://docs.ergoplatform.com/api/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> View API Documentation
            </a>
          </div>
        </section>

        {/* Configuration Files Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-yellow-400" /> Configuration Files
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-yellow-400" /> Main Configuration
              </h3>
              <p className="text-gray-300 mb-4">
                Primary configuration file for Ergo node settings, including network parameters, storage options, and API configuration.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Network type (mainnet/testnet)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Storage directory settings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  API endpoint configuration
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-green-400" /> Advanced Settings
              </h3>
              <p className="text-gray-300 mb-4">
                Advanced configuration options for mining, mempool management, and performance optimization.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Mining configuration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Mempool settings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Performance tuning
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tor Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-400" /> Tor Integration
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-400" /> Privacy Features
              </h3>
              <p className="text-gray-300 mb-4">
                Tor network integration for enhanced privacy and anonymity when running your Ergo node.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Anonymous network connections
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  IP address protection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Traffic obfuscation
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" /> Tor Configuration
              </h3>
              <p className="text-gray-300 mb-4">
                Setup and configuration options for integrating Tor with your Ergo node for enhanced privacy.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Tor service configuration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Hidden service setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Connection routing
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-orange-400" /> Quick Links
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://docs.ergoplatform.com/node/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <FileText className="w-5 h-5 mr-2" /> Node Documentation
            </a>
            <a
              href="https://github.com/ergoplatform/ergo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <GitBranch className="w-5 h-5 mr-2" /> Ergo GitHub
            </a>
            <a
              href="https://docs.ergoplatform.com/api/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600"
            >
              <Code className="w-5 h-5 mr-2" /> API Reference
            </a>
            <a
              href="https://www.torproject.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-purple-500 rounded-xl font-semibold text-white hover:bg-purple-600"
            >
              <Shield className="w-5 h-5 mr-2" /> Tor Project
            </a>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-orange-400" /> Getting Started
          </h2>
          <p className="text-gray-300 mb-4">
            Ready to configure your Ergo node? Follow these steps to get started with node configuration and setup.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <h4 className="font-bold text-orange-300 mb-2">1. Basic Setup</h4>
              <p className="text-gray-300 text-sm">Download and install Ergo node, then configure basic settings for your network type.</p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <h4 className="font-bold text-cyan-300 mb-2">2. Wallet Configuration</h4>
              <p className="text-gray-300 text-sm">Set up your node wallet for transaction signing and external integrations.</p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <h4 className="font-bold text-blue-300 mb-2">3. API Setup</h4>
              <p className="text-gray-300 text-sm">Configure REST API endpoints and enable Swagger documentation.</p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <h4 className="font-bold text-purple-300 mb-2">4. Privacy (Optional)</h4>
              <p className="text-gray-300 text-sm">Integrate Tor for enhanced privacy and anonymous network connections.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 