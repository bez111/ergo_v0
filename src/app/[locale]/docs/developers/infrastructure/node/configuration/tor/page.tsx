"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, Shield, Network, Settings, 
  ExternalLink, AlertCircle, Code, Server
} from "lucide-react";

export default function TorConfigurationPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Running your Node over Tor
      </h1>

      <div className="mb-8">
        <Link
          href="/docs/developers/infrastructure/node/configuration"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
        </Link>
      </div>

      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-orange-400" /> Tor Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <a href="https://www.torproject.org/download/tor/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Tor</a> is a network that helps anonymize your internet traffic by routing it through a series of volunteer-operated servers (relays). This guide explains how to configure your Ergo node to route its P2P network traffic through Tor.
          </p>
        </section>

        {/* Configuration Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6 text-green-400" /> Configuration Setup
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              If you have Tor installed and running (typically listening on <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">127.0.0.1:9050</code> for SOCKS proxy connections), you first need to ensure your node's P2P and API interfaces are bound to localhost in your <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">ergo.conf</code> file:
            </p>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-green-400 mb-2">Required Configuration:</h4>
              <pre className="text-gray-300 text-sm overflow-x-auto">
                <code>{`scorex.network.bindAddress = "127.0.0.1:9030"
scorex.restApi.bindAddress = "127.0.0.1:9053"`}</code>
              </pre>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-yellow-400">Important</span>
              </div>
              <p className="text-gray-300 text-sm">
                With Tor installed and running, and the configuration above set, you then launch the Ergo node using specific Java system properties (<code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">-D</code>) to direct its outgoing network traffic through the Tor SOCKS proxy.
              </p>
            </div>
          </div>
        </section>

        {/* Launch Command Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Server className="w-6 h-6 text-blue-400" /> Launch Command
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              Use the following command to launch your Ergo node with Tor routing:
            </p>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">Java Command:</h4>
              <pre className="text-gray-300 text-sm overflow-x-auto">
                <code>{`java -DsocksProxyHost=localhost -DsocksProxyPort=9050 -Xmx4G -jar ergo-*.jar --mainnet -c ergo.conf`}</code>
              </pre>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">System Properties</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">-DsocksProxyHost=localhost</code></li>
                  <li><code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">-DsocksProxyPort=9050</code></li>
                </ul>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="font-bold text-blue-400 mb-2">Node Parameters</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">-Xmx4G</code> - Memory allocation</li>
                  <li><code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">--mainnet</code> - Network selection</li>
                  <li><code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">-c ergo.conf</code> - Config file</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Example Configuration Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-400" /> Example Configuration File
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              Here's a complete example configuration file for running your Ergo node over Tor:
            </p>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <h4 className="font-bold text-purple-400 mb-2">ergo.conf:</h4>
              <pre className="text-gray-300 text-sm overflow-x-auto">
                <code>{`ergo {
    node {
        mining = false

        utxo {
           utxoBootstrap = true
           storingUtxoSnapshots = 0
        }
        nipopow {
           nipopowBootstrap = true
           p2pNipopows = 2
        }
    }
}

scorex {
    restApi {
        apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
        bindAddress = "127.0.0.1:9053"
    }
    network {
        bindAddress = "127.0.0.1:9030"
        # Use this if you want to bind it to a public address
        #declaredAddress = ""
    }
}`}</code>
              </pre>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">Key Settings</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">mining = false</code> - Disable mining</li>
                  <li><code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">utxoBootstrap = true</code> - Enable UTXO bootstrap</li>
                  <li><code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">nipopowBootstrap = true</code> - Enable NiPoPoW bootstrap</li>
                </ul>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Network Settings</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">bindAddress = "127.0.0.1:9053"</code> - API binding</li>
                  <li><code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">bindAddress = "127.0.0.1:9030"</code> - P2P binding</li>
                  <li><code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">apiKeyHash</code> - API security</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Benefits Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" /> Security Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                <Network className="w-5 h-5" /> Privacy Protection
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Anonymizes your IP address
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Hides network traffic patterns
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Prevents traffic analysis
                </li>
              </ul>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Network Security
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Bypasses network restrictions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Encrypts all traffic
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Provides censorship resistance
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-orange-400" /> Quick Links
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://www.torproject.org/download/tor/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg hover:bg-orange-500/20 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-3 text-orange-400" />
              <div>
                <h4 className="font-semibold text-orange-400">Download Tor</h4>
                <p className="text-gray-300 text-sm">Get the Tor browser and network tools</p>
              </div>
            </a>
            <Link
              href="/docs/developers/infrastructure/node/configuration"
              className="flex items-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors"
            >
              <Settings className="w-5 h-5 mr-3 text-blue-400" />
              <div>
                <h4 className="font-semibold text-blue-400">Node Configuration</h4>
                <p className="text-gray-300 text-sm">Back to main configuration page</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
} 