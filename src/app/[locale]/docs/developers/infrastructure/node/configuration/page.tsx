"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, Wallet, Database, FileText, Shield, 
  Settings, Code, Lock, Server, ExternalLink, GitBranch
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function NodeConfigurationPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Node Configuration
      </h1>

      <div className="mb-8">
        <Link
          href="/docs/developers/infrastructure/node"
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

        {/* Accordion for all sections */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          
          {/* Node Wallet Section */}
          <AccordionItem value="wallet" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <Wallet className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold">Node Wallet</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid grid-cols-1 gap-4">
                <Link 
                  href="/docs/developers/infrastructure/node/configuration/wallet/initialize"
                  className="relative bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-4 hover:border-green-400/40 hover:from-green-500/20 hover:to-green-600/10 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-green-500/20 text-green-400 w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        <Database className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                        1. Initialize Wallet
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-3 group-hover:text-gray-200 transition-colors leading-relaxed text-sm">
                      Initialize and set up your Ergo node wallet with comprehensive security guidance.
                    </p>
                    <div className="flex items-center text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">Learn more</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
                <Link 
                  href="/docs/developers/infrastructure/node/configuration/wallet/hierarchical"
                  className="relative bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-400/40 hover:from-cyan-500/20 hover:to-cyan-600/10 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-cyan-500/20 text-cyan-400 w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                        <Lock className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        2. Hierarchical Keys
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-3 group-hover:text-gray-200 transition-colors leading-relaxed text-sm">
                      Hierarchical deterministic wallet structure for secure key management and backup.
                    </p>
                    <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">Learn more</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
                <Link 
                  href="/docs/developers/infrastructure/node/configuration/wallet/setup"
                  className="relative bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-xl p-4 hover:border-orange-400/40 hover:from-orange-500/20 hover:to-orange-600/10 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-orange-500/20 text-orange-400 w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                        <Settings className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                        3. Wallet Setup
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-3 group-hover:text-gray-200 transition-colors leading-relaxed text-sm">
                      Step-by-step wallet configuration and initialization process.
                    </p>
                    <div className="flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">Learn more</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* APIs Section */}
          <AccordionItem value="apis" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">APIs & Tools</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              {/* Ergo Node REST API */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-400" /> Ergo Node REST API
                </h3>
                
                {/* Version Info */}
                <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-blue-400">Ergo Node API v6.0.0 (latest)</span>
                    <span className="text-xs text-gray-400">• OpenAPI 3.0 Specification</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Complete REST API for Ergo node operations including wallet management, transaction handling, and blockchain queries.
                  </p>
                </div>

                {/* Main Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Link 
                    href="/docs/developers/infrastructure/node/configuration/swagger-ui"
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-blue-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-blue-400" /> Swagger UI for Ergo Node
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      Comprehensive guide to using Swagger UI for interacting with Ergo node REST API endpoints.
                    </p>
                    <div className="flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">Learn more</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  <a 
                    href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-green-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-400" /> Node OpenAPI Spec
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      Official OpenAPI specification file from the Ergo repository with complete API endpoint definitions.
                    </p>
                    <div className="flex items-center text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">Download Spec</span>
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Explorer API */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-400" /> Explorer API
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <a 
                    href="https://github.com/ergoplatform/explorer-backend/blob/master/src/main/resources/api/openapi.yaml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-green-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-400" /> Explorer OpenAPI Spec (v1)
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      OpenAPI definition file for Explorer API endpoints (transactions, boxes, assets, etc).
                    </p>
                    <div className="flex items-center text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">Download OpenAPI File</span>
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  <a 
                    href="https://api.ergoplatform.com/api/v1/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-cyan-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-cyan-400" /> WebSocket Demo
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      Real-time WebSocket connection for live blockchain data and transaction monitoring.
                    </p>
                    <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">View Demo</span>
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Alternative APIs */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-purple-400" /> Alternative APIs
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <a 
                    href="https://github.com/ergoplatform/ergo-graphql"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-purple-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-400" /> Ergo GraphQL
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      GraphQL interface to query blockchain data (tokens, boxes, addresses) – ideal for frontend-heavy dApps.
                    </p>
                    <div className="flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">View Schema</span>
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  <a 
                    href="https://github.com/ross-weir/ergo-node-api-sdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-orange-400" /> Ergo Node SDKs
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      Auto-generated SDKs (by ross-weir) for interacting with the Ergo Node in multiple languages.
                    </p>
                    <div className="flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">GitHub Repo</span>
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Tools & Services */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-yellow-400" /> Tools & Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <a 
                    href="https://github.com/ergoplatform/ergo-node-zmqpub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-yellow-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Server className="w-5 h-5 text-yellow-400" /> Node Event Plugin
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      ZeroMQ plugin for publishing node events (new blocks, txs, etc) – useful for real-time UX / indexers.
                    </p>
                    <div className="flex items-center text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">GitHub</span>
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  <a 
                    href="https://github.com/ergoplatform/ergo-scanner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-red-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5 text-red-400" /> Ergo Scanner Framework
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      Modular framework for scanning blockchain state (patterns, tokens, mints) – good for indexers / bots.
                    </p>
                    <div className="flex items-center text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">GitHub</span>
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  <a 
                    href="https://github.com/danaides/ergo-indexer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-indigo-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5 text-indigo-400" /> Danaides Indexer
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      High-performance blockchain indexer for Ergo with advanced querying capabilities and real-time updates.
                    </p>
                    <div className="flex items-center text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">GitHub</span>
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  <a 
                    href="https://github.com/nirvanush/ergo-tx-builder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-pink-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-pink-400" /> TxBuilder (nirvanush)
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      Transaction builder library for creating complex Ergo transactions with proper box selection and signing.
                    </p>
                    <div className="flex items-center text-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">GitHub</span>
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Public Swagger UI Instances */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-cyan-400" /> Try It Online
                </h3>
                <p className="text-gray-300 mb-4">
                  Test the API directly on these public Ergo node instances:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="http://213.239.193.208:9053/swagger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Public Node 1
                  </a>
                  <a
                    href="http://159.65.11.55:9053/swagger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Public Node 2
                  </a>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-yellow-400" /> Security Notice
                </h3>
                <p className="text-gray-300 mb-4">
                  Some API endpoints require authentication. For wallet operations and transaction sending, you'll need to:
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Click the <strong>Authorize</strong> button in Swagger UI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Enter your API key or unlock your wallet first
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Use HTTPS in production environments
                  </li>
                </ul>
              </div>

              {/* Top Endpoints */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-400" /> Top Endpoints
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left py-2 px-2 text-purple-400 font-semibold">Method</th>
                        <th className="text-left py-2 px-2 text-purple-400 font-semibold">Path</th>
                        <th className="text-left py-2 px-2 text-purple-400 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-neutral-800">
                        <td className="py-2 px-2"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-mono">POST</span></td>
                        <td className="py-2 px-2 font-mono text-blue-400">/wallet/payment/send</td>
                        <td className="py-2 px-2">Send ERG or tokens</td>
                      </tr>
                      <tr className="border-b border-neutral-800">
                        <td className="py-2 px-2"><span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-mono">GET</span></td>
                        <td className="py-2 px-2 font-mono text-blue-400">/wallet/status</td>
                        <td className="py-2 px-2">Wallet lock/unlock status</td>
                      </tr>
                      <tr className="border-b border-neutral-800">
                        <td className="py-2 px-2"><span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-mono">GET</span></td>
                        <td className="py-2 px-2 font-mono text-blue-400">/info</td>
                        <td className="py-2 px-2">Node status and info</td>
                      </tr>
                      <tr className="border-b border-neutral-800">
                        <td className="py-2 px-2"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-mono">POST</span></td>
                        <td className="py-2 px-2 font-mono text-blue-400">/block/generate</td>
                        <td className="py-2 px-2">Generate block (testnet only)</td>
                      </tr>
                      <tr className="border-b border-neutral-800">
                        <td className="py-2 px-2"><span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-mono">GET</span></td>
                        <td className="py-2 px-2 font-mono text-blue-400">/blocks/lastHeaders</td>
                        <td className="py-2 px-2">Get last block headers</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2"><span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-mono">GET</span></td>
                        <td className="py-2 px-2 font-mono text-blue-400">/utxo/byId</td>
                        <td className="py-2 px-2">Get UTXO by ID</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 rounded-xl font-semibold text-white hover:bg-green-600 transition-transform hover:scale-105"
                >
                  <FileText className="w-5 h-5 mr-2" /> Download Spec
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Indexed Node Section */}
          <AccordionItem value="indexed" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <Database className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">Indexed Node</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-1 gap-6">
                <Link 
                  href="/docs/developers/infrastructure/node/configuration/indexed-node-api"
                  className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-blue-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-400" /> Indexed Node API
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Enhanced API endpoints for efficient blockchain data querying with indexed transactions, boxes, and tokens.
                  </p>
                  <div className="flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-semibold">View documentation</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Configuration Files Section */}
          <AccordionItem value="config" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <Settings className="w-6 h-6 text-yellow-400" />
                <span className="text-xl font-bold">Configuration Files</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/docs/developers/infrastructure/node/configuration/application-conf"
                  className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-orange-400" /> application.conf
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Main application configuration file with comprehensive node settings and parameters.
                  </p>
                  <div className="flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-semibold">View configuration</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                <Link 
                  href="/docs/developers/infrastructure/node/configuration/testnet-conf"
                  className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-cyan-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-cyan-400" /> testnet.conf
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Testnet-specific configuration file for development and testing environments.
                  </p>
                  <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-semibold">View configuration</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Tor Section */}
          <AccordionItem value="tor" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-purple-400" />
                <span className="text-xl font-bold">Tor Integration</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid grid-cols-1 gap-6">
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
                <Link 
                  href="/docs/developers/infrastructure/node/configuration/tor"
                  className="relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:from-purple-500/20 hover:to-purple-600/10 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-500/20 text-purple-400 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                        <Shield className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        Tor Configuration
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors leading-relaxed">
                      Configure your Ergo node to route P2P network traffic through Tor for enhanced privacy and anonymity.
                    </p>
                    <div className="flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">Learn more</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>

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
              <ExternalLink className="w-5 h-5 mr-2" /> Node Documentation
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