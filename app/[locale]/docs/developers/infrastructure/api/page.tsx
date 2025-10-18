"use client";

import React from "react";
import Link from "next/link";
import { 
  Code, 
  Server, 
  ExternalLink, 
  ChevronRight,
  Globe,
  Database,
  Package,
  Zap,
  Info
} from "lucide-react";

export default function APIPage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo APIs
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Comprehensive APIs for blockchain interaction, data access, and application integration.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure"
            className="inline-flex items-center px-6 py-3 bg-pink-500 rounded-xl font-semibold text-black hover:bg-pink-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Infrastructure
          </Link>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <Info className="w-6 h-6 mr-3" />
          Overview
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            Ergo provides several APIs that offer different functionalities and services for developers and users. 
            These APIs allow interaction with the Ergo blockchain, access to network data, and integration of Ergo into various applications.
          </p>
          <p className="text-gray-300">
            These APIs provide various functionalities and data access points, allowing developers and users to leverage 
            the power of Ergo blockchain in their applications, explore the blockchain network, interact with assets and tokens, 
            and access decentralized exchange services.
          </p>
        </div>
      </div>

      {/* Available APIs */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
          <Server className="w-6 h-6 mr-3" />
          Available APIs
        </h2>
        
        <div className="grid gap-6">
          {/* Node API */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Node API</h3>
                <p className="text-gray-300 mb-3">
                  The Node API provides comprehensive access to Ergo node functionalities, including blockchain data retrieval, 
                  transaction submission, wallet management, and more. It offers a wide range of endpoints to interact with the Ergo network programmatically.
                </p>
              </div>
              <a
                href="https://git.io/fjqwb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explorer API v1 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Explorer API v1</h3>
                <p className="text-gray-300 mb-3">
                  The Explorer API allows users to explore the Ergo blockchain and retrieve information about blocks, 
                  transactions, addresses, and other relevant data. It provides a user-friendly interface to access blockchain data and monitor network activity.
                </p>
              </div>
              <a
                href="https://api.ergoplatform.com/api/v1/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Ergo.Watch API */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Ergo.Watch API</h3>
                <p className="text-gray-300 mb-3">
                  The Ergo.Watch API provides access to various data and metrics related to the Ergo blockchain.
                </p>
              </div>
              <a
                href="https://api.ergo.watch/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* TokenJay API */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">TokenJay API</h3>
                <p className="text-gray-300 mb-3">
                  The TokenJay API enables developers to interact with Ergo tokens and assets.
                </p>
              </div>
              <a
                href="https://api.tokenjay.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Spectrum API */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Spectrum API</h3>
                <p className="text-gray-300 mb-3">
                  The Spectrum API provides several endpoints for different functionalities related to Automated Market Makers (AMM), 
                  price tracking, liquidity mining (LM), history, and more.
                </p>
              </div>
              <a
                href="https://api.spectrum.fi/v1/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* SkyHarbor API */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">SkyHarbor API</h3>
                <p className="text-gray-300 mb-3">
                  The SkyHarbor API provides various routes for interacting with the SkyHarbor marketplace, including accessing 
                  collection information, retrieving sales data, obtaining metrics, and utilizing the headless dApp functionality.
                </p>
              </div>
              <a
                href="https://docs.skyharbor.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Ergopad API */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Ergopad API</h3>
                <p className="text-gray-300 mb-3">
                  Ergopad provides an API for staking on the Ergopad platform.
                </p>
              </div>
              <a
                href="https://api.ergopad.io/staking/ergopad/status/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
          <Zap className="w-6 h-6 mr-3" />
          Getting Started
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            New to Ergo APIs? Check out our comprehensive guide for beginners that covers everything from choosing the right API 
            to integrating it into your applications.
          </p>
          <Link
            href="/docs/developers/infrastructure/api/how-to"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-white hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <Code className="w-5 h-5 mr-2" /> API How-To Guide
          </Link>
        </div>
      </div>
    </div>
  );
} 