"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, Wallet, Settings, Shield, 
  CheckCircle, AlertCircle, ExternalLink, FileText, 
  Key, Lock, Database, ArrowRight, Server
} from "lucide-react";

export default function WalletSetupPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Wallet Setup
      </h1>

      <div className="mb-8">
        <Link
          href="/Docs/developers/infrastructure/node/configuration"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
        </Link>
      </div>

      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-orange-400" /> Setup Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Complete step-by-step guide for setting up your Ergo node wallet with proper security measures and configuration.
          </p>
        </section>

        {/* Prerequisites */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" /> Prerequisites
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Server className="w-5 h-5 text-green-400" /> Node Requirements
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Ergo node installed and running</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Node synchronized with network</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>API access configured</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Secure environment</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" /> Security Preparation
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Offline storage for backup</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Strong password ready</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Secure network connection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Backup strategy planned</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step-by-Step Setup */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-orange-400" /> Step-by-Step Setup
          </h2>
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold">Access Node API</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Navigate to your node's Swagger UI panel at <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">http://127.0.0.1:9053/panel</code> and authenticate using your API key.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-gray-300 text-sm">
                  <strong>Note:</strong> Use the plain text secret phrase, not the hash stored in configuration files.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold">Choose Setup Method</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-2">New Wallet</h4>
                  <p className="text-gray-300 text-sm mb-2">For first-time setup</p>
                  <ul className="space-y-1 text-gray-400 text-xs">
                    <li>• Generate new mnemonic</li>
                    <li>• Set encryption password</li>
                    <li>• Optional BIP-39 passphrase</li>
                  </ul>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-bold text-purple-400 mb-2">Restore Wallet</h4>
                  <p className="text-gray-300 text-sm mb-2">For existing wallets</p>
                  <ul className="space-y-1 text-gray-400 text-xs">
                    <li>• Enter existing mnemonic</li>
                    <li>• Set new password</li>
                    <li>• Restore all addresses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold">Configure Security</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-orange-400 mb-2">Password Requirements:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Minimum 8 characters
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Mix of letters and numbers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Include special characters
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Avoid common patterns
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-cyan-400 mb-2">BIP-39 Passphrase:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      Optional extra security
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      Remember for recovery
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      Store separately from mnemonic
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      Can be empty if not used
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-bold">Verify Setup</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-2">Check Addresses</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Use <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">/wallet/addresses</code> endpoint to verify wallet initialization.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Should return at least one derived address.
                  </p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h4 className="font-bold text-blue-400 mb-2">Check Balance</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Use <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">/wallet/balances</code> endpoint after sync.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Balance will show once node is synchronized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Best Practices */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" /> Security Best Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-400" /> Backup Strategy
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Multiple secure locations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Offline storage (paper, metal)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Separate mnemonic and passphrase</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Test recovery process</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Key className="w-5 h-5 text-blue-400" /> Access Control
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Strong API authentication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Network security (firewall)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Regular password updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Monitor access logs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-yellow-400" /> Troubleshooting
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Common Issues:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  API connection refused
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Invalid mnemonic phrase
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Password too weak
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Node not synchronized
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-green-400">Solutions:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Check node status and logs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Verify mnemonic word order
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Use stronger password
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Wait for full sync
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
            <Link
              href="/Docs/developers/infrastructure/node/configuration/wallet/initialize"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <Wallet className="w-5 h-5 mr-2" /> Initialize Wallet
            </Link>
            <a
              href="http://127.0.0.1:9053/panel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> Swagger UI Panel
            </a>
          </div>
        </section>
      </div>
    </>
  );
} 