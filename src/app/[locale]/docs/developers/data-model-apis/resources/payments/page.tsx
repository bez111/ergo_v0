"use client";

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages */

import React from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard, Globe, Smartphone, Code, Server } from "lucide-react";

export default function PaymentsPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Payments
      </h1>

      {/* Introduction */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-purple-400">Payment Protocols Overview</h2>
        </div>
        <p className="text-gray-300">
          ErgoPay and the web dApp connectors that Nautilus uses serve similar purposes but have key differences. ErgoPay can connect any wallet with any dApp, while a web dApp connector is limited to web extension wallets and website dApps. It can only connect processes living in the same web browser.
        </p>
      </div>

      {/* Back Button */}
      <Link href="/docs/developers/data-model-apis/resources" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Resources</span>
        </button>
      </Link>

      {/* Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ErgoPay */}
        <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-green-400">ErgoPay</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-green-300">✅ Advantages</h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                <li>Universal compatibility</li>
                <li>Can connect any wallet with any dApp</li>
                <li>Cross-platform support</li>
                <li>Mobile-friendly</li>
                <li>No browser restrictions</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-green-300">🔧 Use Cases</h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                <li>Mobile wallet integration</li>
                <li>Cross-platform dApps</li>
                <li>QR code-based transactions</li>
                <li>Offline wallet support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Web dApp Connectors */}
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-blue-400">Web dApp Connectors</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-blue-300">✅ Advantages</h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                <li>Seamless web integration</li>
                <li>Real-time communication</li>
                <li>Browser-native experience</li>
                <li>Automatic wallet detection</li>
                <li>Direct API access</li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-blue-300">⚠️ Limitations</h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                <li>Limited to web browsers</li>
                <li>Extension wallets only</li>
                <li>Same-origin restrictions</li>
                <li>No mobile support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Development Considerations */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-orange-400">Development Considerations</h2>
        </div>
        <p className="text-gray-300 mb-4">
          As a dApp developer, you may not know which type of wallet application will connect to your dApp. Therefore, a part of your logic must run on a server that can be accessed by user's wallet applications.
        </p>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-orange-300">Backend Requirements</h3>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>Server-side logic for wallet communication</li>
            <li>API endpoints for transaction processing</li>
            <li>Secure authentication mechanisms</li>
            <li>Cross-platform compatibility</li>
          </ul>
        </div>
      </div>

      {/* Backend Flexibility */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
            <Server className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-cyan-400">Backend Flexibility</h2>
        </div>
        <p className="text-gray-300 mb-4">
          For a website dApp, this means that some of your code needs to live on your backend. This doesn't necessarily complicate things. In fact, on the backend, you aren't restricted to using JavaScript or its derivatives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-cyan-300">Language Options</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Python (Flask, Django, FastAPI)</li>
              <li>Node.js (Express, Koa)</li>
              <li>Java (Spring Boot)</li>
              <li>Go (Gin, Echo)</li>
              <li>Rust (Actix, Rocket)</li>
              <li>PHP (Laravel, Symfony)</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-cyan-300">Framework Benefits</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Choose the best tool for your needs</li>
              <li>Leverage existing expertise</li>
              <li>Better performance optimization</li>
              <li>Enhanced security features</li>
              <li>Scalability options</li>
              <li>Integration flexibility</li>
            </ul>
          </div>
        </div>
        <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 mt-6">
          <p className="text-green-200 font-semibold mb-2">💡 Key Insight</p>
          <p className="text-gray-300">
            You are free to choose the language and framework that best suits your needs. This flexibility allows you to build robust, scalable payment solutions that integrate seamlessly with the Ergo ecosystem.
          </p>
        </div>
      </div>

      {/* Payment Protocols */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Payment Protocols</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-purple-300">ErgoPay Protocol (EIP-20)</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Mobile wallet integration</li>
              <li>QR code-based transactions</li>
              <li>Cross-platform compatibility</li>
              <li>Offline wallet support</li>
            </ul>
            <div className="mt-4">
              <a href="/docs/developers/eip20" className="text-orange-400 hover:underline">Learn more about ErgoPay →</a>
            </div>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-purple-300">Payment Request URI (EIP-25)</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Standard payment request format</li>
              <li>URI-based payment initiation</li>
              <li>Multi-asset support</li>
              <li>Parameterized transactions</li>
            </ul>
            <div className="mt-4">
              <a href="/docs/developers/eip25" className="text-orange-400 hover:underline">Learn more about Payment URIs →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Examples */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Implementation Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-indigo-300">ErgoPay Integration</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://github.com/ergoplatform/ergo-pay" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoPay Implementation</a></li>
              <li><a href="https://github.com/ergoplatform/ergo-wallet" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Wallet Payment Integration</a></li>
              <li><a href="https://github.com/ergoplatform/ergo-mixer" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Payment Solutions</a></li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-indigo-300">Web Connectors</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://github.com/ergoplatform/nautilus-wallet" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Nautilus Wallet</a></li>
              <li><a href="https://github.com/ergoplatform/fleet-sdk" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Fleet SDK</a></li>
              <li><a href="https://github.com/ergoplatform/ergo-appkit" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo AppKit</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Related Documentation</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="/docs/developers/eip20" className="text-orange-400 hover:underline">ErgoPay Protocol (EIP-20)</a></li>
              <li><a href="/docs/developers/eip25" className="text-orange-400 hover:underline">Payment Request URI (EIP-25)</a></li>
              <li><a href="/docs/developers/eip17" className="text-orange-400 hover:underline">Proxy Contracts (EIP-17)</a></li>
              <li><a href="/docs/developers/data-model-apis/babel-fees" className="text-orange-400 hover:underline">Babel Fees (EIP-31)</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">External Links</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://ergoplatform.org/en/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Platform</a></li>
              <li><a href="https://github.com/ergoplatform/ergo" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Core</a></li>
              <li><a href="https://explorer.ergoplatform.com/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Explorer</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 