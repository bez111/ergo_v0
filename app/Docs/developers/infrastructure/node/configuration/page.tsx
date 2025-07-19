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
          <div className="grid grid-cols-1 gap-6">
            <Link 
              href="/Docs/developers/infrastructure/node/configuration/wallet/initialize"
              className="relative bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-400/40 hover:from-green-500/20 hover:to-green-600/10 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-500/20 text-green-400 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    1. Initialize Wallet
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors leading-relaxed">
                  Initialize and set up your Ergo node wallet with comprehensive security guidance.
                </p>
                <div className="flex items-center text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            <Link 
              href="/Docs/developers/infrastructure/node/configuration/wallet/hierarchical"
              className="relative bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:from-cyan-500/20 hover:to-cyan-600/10 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cyan-500/20 text-cyan-400 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    2. Hierarchical Keys
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors leading-relaxed">
                  Hierarchical deterministic wallet structure for secure key management and backup.
                </p>
                <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            <Link 
              href="/Docs/developers/infrastructure/node/configuration/wallet/setup"
              className="relative bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6 hover:border-orange-400/40 hover:from-orange-500/20 hover:to-orange-600/10 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500/20 text-orange-400 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    3. Wallet Setup
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors leading-relaxed">
                  Step-by-step wallet configuration and initialization process.
                </p>
                <div className="flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
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
                <FileText className="w-5 h-5 text-blue-400" /> OpenAPI Spec
              </h3>
              <p className="text-gray-300 mb-4">
                OpenAPI specification for Ergo node REST API with comprehensive endpoint documentation.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-green-400" /> Try it out!
              </h3>
              <p className="text-gray-300 mb-4">
                Interactive API testing interface to explore and test Ergo node endpoints.
              </p>
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

        {/* Indexed Node Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-400" /> Indexed Node
          </h2>
          <div className="grid md:grid-cols-1 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" /> API
              </h3>
              <p className="text-gray-300 mb-4">
                Indexed node API for enhanced blockchain data access and querying capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Configuration Files Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-yellow-400" /> Configuration
          </h2>
          <div className="grid md:grid-cols-1 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-yellow-400" /> Files
              </h3>
              <p className="text-gray-300 mb-4">
                Configuration files for Ergo node setup and customization.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-orange-300 mb-2">application.conf</h4>
                  <p className="text-gray-300 text-sm">Main application configuration file with node settings.</p>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-300 mb-2">ergo</h4>
                  <p className="text-gray-300 text-sm">Ergo-specific configuration settings.</p>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-green-300 mb-2">bounded-</h4>
                  <p className="text-gray-300 text-sm">Bounded configuration parameters.</p>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-300 mb-2">mailbox</h4>
                  <p className="text-gray-300 text-sm">Mailbox configuration settings.</p>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">akka</h4>
                  <p className="text-gray-300 text-sm">Akka framework configuration.</p>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-300 mb-2">scorex</h4>
                  <p className="text-gray-300 text-sm">Scorex framework configuration.</p>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-red-300 mb-2">critical-</h4>
                  <p className="text-gray-300 text-sm">Critical system configuration.</p>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-300 mb-2">dispatcher</h4>
                  <p className="text-gray-300 text-sm">Dispatcher configuration settings.</p>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-pink-300 mb-2">api-dispatcher</h4>
                  <p className="text-gray-300 text-sm">API dispatcher configuration.</p>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-300 mb-2">testnet.conf</h4>
                  <p className="text-gray-300 text-sm">Testnet-specific configuration file for development.</p>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-orange-300 mb-2">devnet.conf</h4>
                  <p className="text-gray-300 text-sm">Development network configuration file.</p>
                </div>
              </div>
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