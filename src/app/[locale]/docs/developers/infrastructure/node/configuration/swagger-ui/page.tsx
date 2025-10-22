"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ExternalLink, Code, Shield, Key } from "lucide-react";

export default function SwaggerUIPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Swagger UI for Ergo Node
      </h1>

      <div className="mb-8">
        <Link
          href="/docs/developers/infrastructure/node/configuration"
          className="inline-flex items-center px-5 py-2 bg-blue-500 rounded-lg font-semibold text-white hover:bg-blue-600 transition hover:scale-[1.02]"
        >
          <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
        </Link>
      </div>

      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" /> Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The Ergo node provides a REST API accessible via HTTP for interaction and control. The full API specification, following the OpenAPI standard, is available <a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">here</a>. When the node is running, a user-friendly Swagger UI interface for exploring and interacting with the API is typically available at <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">127.0.0.1:9053/swagger</code> (assuming default port settings).
          </p>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
            <p className="text-orange-300 font-semibold">Note: <code className="bg-neutral-800 px-1 rounded">127.0.0.1</code> refers to your local machine (localhost).</p>
          </div>
        </section>

        {/* Advanced Operations Section */}
        <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" /> Advanced Operations
          </h2>
          <p className="text-gray-300 mb-4">
            The Swagger UI allows you to perform advanced operations that might not be available through graphical wallet interfaces, such as:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Creating non-standard transactions with registers and context variables.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Issuing tokens through transactions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Creating transactions that use specific boxes as inputs.</span>
            </li>
          </ul>
        </section>

        {/* Accessing the API Section */}
        <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-cyan-400" /> Accessing the API
          </h2>
          <p className="text-gray-300 mb-4">
            Once the node is running, the API endpoints are typically accessible at <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">127.0.0.1:9053</code> (the default API port, distinct from the P2P port 9030).
          </p>
          <p className="text-gray-300 mb-4">
            To explore the API methods without setting up your own node, you can use the Swagger UI of public nodes, such as:
          </p>
          <div className="space-y-2 mb-4">
            <a href="http://213.239.193.208:9053/swagger" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:text-blue-300 underline">
              http://213.239.193.208:9053/swagger
            </a>
            <a href="http://159.65.11.55:9053/swagger" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:text-blue-300 underline">
              http://159.65.11.55:9053/swagger
            </a>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300">Note: Public node availability may vary.</p>
          </div>
          <p className="text-gray-300 mt-4">
            To access protected API routes (like wallet operations), you must provide your API key (the secret phrase/password you set in the node configuration) in the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">api_key</code> HTTP header of your requests. Alternatively, you can authorize your session directly within the Swagger UI interface by clicking the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">Authorize</code> button and entering your API key there.
          </p>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mt-4">
            <p className="text-orange-300 font-semibold">Note: Most wallet-related and node-control methods in the API are protected. You will need to provide the correct API key (hashed using Blake2b in your configuration file) to access these methods.</p>
          </div>
        </section>

        {/* Authorization Process Section */}
        <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Key className="w-6 h-6 text-purple-400" /> Authorization Process via Swagger UI
          </h2>
          <ol className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <span>Navigate to the Swagger UI page (e.g., <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">127.0.0.1:9053/swagger</code>).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <span>Click the green <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">"Authorize"</code> button located near the top right.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <span>A dialog box will appear. Enter your plain text API key (the secret phrase you configured) into the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">Value</code> field.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <span>Click <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">"Authorize"</code> within the dialog, then <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">"Close"</code>.</span>
            </li>
          </ol>
          <p className="text-gray-300 mt-4">
            Your browser session is now authorized to access protected endpoints.
          </p>
          <p className="text-gray-300 mt-4">
            For example, navigate to the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">wallet/walletAddresses</code> endpoint, click <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">"Try it out"</code>, and then <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">"Execute"</code>. If authorized correctly, you should see the list of addresses managed by your node's wallet.
          </p>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mt-4">
            <p className="text-orange-300 font-semibold">Note: The Swagger UI authorization mechanism might appear to accept any input in the <code className="bg-neutral-800 px-1 rounded">Value</code> field. However, API calls to protected endpoints will fail if the provided API key does not match the <code className="bg-neutral-800 px-1 rounded">apiKeyHash</code> configured in your node. If you encounter authorization errors despite entering the correct key, potential causes include typos, incorrect hashing of the key in the config file, or, rarely, node database issues (try restarting the node first; a resync might be needed in severe cases).</p>
          </div>
        </section>

        {/* Main Methods Section */}
        <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-green-400" /> Main Methods
          </h2>
          <p className="text-gray-300 mb-4">
            Here are some of the main methods you can use:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-300 mb-2">Wallet Management</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><code className="text-orange-300">/wallet/init</code> - Initialize a new wallet</li>
                  <li><code className="text-orange-300">/wallet/restore</code> - Restore existing wallet</li>
                  <li><code className="text-orange-300">/wallet/unlock</code> - Unlock the wallet</li>
                  <li><code className="text-orange-300">/wallet/lock</code> - Lock the wallet</li>
                  <li><code className="text-orange-300">/wallet/status</code> - Get wallet status</li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-blue-300 mb-2">Transactions</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><code className="text-orange-300">/wallet/payment/send</code> - Send payment</li>
                  <li><code className="text-orange-300">/wallet/transactions</code> - Get transaction list</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-purple-300 mb-2">Address Management</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><code className="text-orange-300">/wallet/deriveNextKey</code> - Derive next key</li>
                  <li><code className="text-orange-300">/wallet/deriveKey</code> - Derive specific key</li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Balances</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><code className="text-orange-300">/wallet/balances</code> - Get wallet balances</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Example Section */}
        <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-yellow-400" /> Example: Deriving Addresses
          </h2>
          <p className="text-gray-300 mb-4">
            To derive a specific address, navigate to the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">/wallet/deriveKey</code> endpoint, click <em>"Try it out"</em>, and enter the desired derivation path in the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-300">derivationPath</code> field. For example, to derive the first standard address:
          </p>
          <div className="bg-neutral-800 rounded-lg p-4">
            <code className="text-green-300">
              "derivationPath": "m/44'/429'/0'/0/0"
            </code>
          </div>
        </section>
      </div>
    </>
  );
} 