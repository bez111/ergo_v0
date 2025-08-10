"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, Wallet, Key, Lock, Unlock, 
  Settings, ExternalLink, FileText, AlertCircle,
  CheckCircle, ArrowRight, Shield
} from "lucide-react";

export default function WalletInitializePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Initialize Wallet
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
            <Wallet className="w-6 h-6 text-orange-400" /> Wallet Initialization Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            To initialize the wallet, restart the node and navigate to the <a href="http://127.0.0.1:9053/panel" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">panel</a> (Swagger UI). Set the API key using the secret phrase you configured previously. Remember to use the <strong>plain text secret phrase</strong>, not the hash stored in the configuration file. In our example, this is the string <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">hello</code>.
          </p>
        </section>

        {/* Set API Key Image */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Key className="w-6 h-6 text-green-400" /> Setting API Key
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              Click on <strong>Initialize wallet</strong> (or execute the <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">/wallet/init</code> or <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">/wallet/restore</code> endpoint). A pop-up or response will appear depending on the method used. You have two main options:
            </p>
            <div className="mb-6">
              <Image 
                src="https://user-images.githubusercontent.com/23208922/69916579-b7ca1680-1482-11ea-880e-251c8139a613.png" 
                alt="Setting API key in Swagger UI" 
                width={1280} height={720}
                className="w-full rounded-lg border border-neutral-600 h-auto"
              />
              <p className="text-gray-400 text-sm mt-2 text-center">Setting API key in Swagger UI</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">1. Initialize a new wallet</h4>
                <p className="text-gray-300 text-sm">If this is your first time running the node, choose this option to generate a new mnemonic sentence.</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="font-bold text-blue-400 mb-2">2. Restore an existing wallet</h4>
                <p className="text-gray-300 text-sm">If you have an existing wallet and want to access its funds, choose this option and provide your previously saved mnemonic sentence.</p>
              </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-yellow-400">Important</span>
              </div>
              <p className="text-gray-300 text-sm">
                Choose the option that suits your situation.
              </p>
            </div>
          </div>
        </section>

        {/* Initialize New Wallet */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6 text-blue-400" /> Initialize Wallet from Scratch
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-4">
              In the pop-up form (or API request body for <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">/wallet/init</code>), enter a secure password for encrypting your wallet file. The 'Mnemonic password' (BIP-39 passphrase) field is optional but adds extra security. After clicking 'Send' (or executing the request), the API response will contain the generated mnemonic sentence.
            </p>
            <div className="mb-6">
              <Image 
                src="https://user-images.githubusercontent.com/23208922/69916584-d4fee500-1482-11ea-838c-e8aba9f41c76.png" 
                alt="Initialize wallet form in Swagger UI" 
                width={1280} height={720}
                className="w-full rounded-lg border border-neutral-600 h-auto"
              />
              <p className="text-gray-400 text-sm mt-2 text-center">Initialize wallet form</p>
            </div>
            <div className="mb-6">
              <Image 
                src="https://user-images.githubusercontent.com/23208922/69916693-2360b380-1484-11ea-9366-1bf9eb0f8b30.png" 
                alt="Generated mnemonic sentence output" 
                width={1280} height={720}
                className="w-full rounded-lg border border-neutral-600 h-auto"
              />
              <p className="text-gray-400 text-sm mt-2 text-center">Generated mnemonic sentence</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="font-semibold text-red-400">Critical Security</span>
              </div>
              <p className="text-gray-300 text-sm">
                Make sure to copy this sentence accurately and store it securely offline. You will need this exact sentence (and the optional passphrase, if used) to restore your wallet later or on a different device.
              </p>
            </div>
          </div>
        </section>

        {/* Restore Wallet */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Unlock className="w-6 h-6 text-purple-400" /> Restore Wallet from Earlier
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-4">
              To restore an existing wallet, paste your previously saved mnemonic sentence into the 'Mnemonic' field in the Restore-wallet form (or the <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">mnemonic</code> field in the <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">/wallet/restore</code> API request). Enter a secure password to encrypt the restored wallet file. Leave the 'Mnemonic password' field empty unless your original mnemonic was created with a BIP-39 passphrase; in that case, enter the passphrase here.
            </p>
            <div className="mb-6">
              <Image 
                src="https://user-images.githubusercontent.com/23208922/71127599-66a37c00-2211-11ea-9b9e-9a69ac80c306.png" 
                alt="Restore wallet form in Swagger UI" 
                width={1280} height={720}
                className="w-full rounded-lg border border-neutral-600 h-auto"
              />
              <p className="text-gray-400 text-sm mt-2 text-center">Restore wallet form</p>
            </div>
            <div className="mb-6">
              <Image 
                src="https://user-images.githubusercontent.com/23208922/71127600-673c1280-2211-11ea-95eb-7c775c59180d.png" 
                alt="Successfully restored confirmation screen" 
                width={1280} height={720}
                className="w-full rounded-lg border border-neutral-600 h-auto"
              />
              <p className="text-gray-400 text-sm mt-2 text-center">Successfully restored confirmation</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-semibold text-green-400">Success</span>
              </div>
              <p className="text-gray-300 text-sm">
                After successfully restoring the wallet from the mnemonic sentence, you will see a confirmation message.
              </p>
            </div>
          </div>
        </section>

        {/* Get Wallet Addresses */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Wallet className="w-6 h-6 text-green-400" /> Get Wallet Addresses
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-4">
              To verify the wallet is initialized or restored correctly, you can retrieve its addresses. Using the Swagger UI panel, navigate to the <strong>Wallet</strong> section and execute the <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">/wallet/addresses</code> endpoint. The response should list at least one derived address if the wallet setup was successful.
            </p>
            <div className="mb-4">
              <Image 
                src="https://user-images.githubusercontent.com/23208922/69978955-5b82f780-1553-11ea-85b6-413c63a46334.png" 
                alt="Get wallet addresses response screenshot" 
                width={1280} height={720}
                className="w-full rounded-lg border border-neutral-600 h-auto"
              />
              <p className="text-gray-400 text-sm mt-2 text-center">Get wallet addresses</p>
            </div>
          </div>
        </section>

        {/* Check Wallet Balance */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-blue-400" /> Check Wallet Balance
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-4">
              Once the node is fully synchronized with the blockchain, you can check your wallet balance using the <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">/wallet/balances</code> endpoint in the Swagger UI.
            </p>
            <div className="mb-4">
              <Image 
                src="https://user-images.githubusercontent.com/23208922/71127598-66a37c00-2211-11ea-9d53-f6d7738d1726.png" 
                alt="Check wallet balance response screenshot" 
                width={1280} height={720}
                className="w-full rounded-lg border border-neutral-600 h-auto"
              />
              <p className="text-gray-400 text-sm mt-2 text-center">Check wallet balance</p>
            </div>
          </div>
        </section>

        {/* Sending Funds */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-orange-400" /> Sending Funds
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-4">
              If your wallet has a non-zero balance, you can initiate transactions (e.g., sending ERG) using endpoints like <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">/wallet/payment/send</code> via the Swagger UI or other API clients.
            </p>
            <div className="mb-4">
              <Image 
                src="https://user-images.githubusercontent.com/23208922/71129066-a28c1080-2214-11ea-9806-7d768059980a.png" 
                alt="Send ERGs transaction request screenshot" 
                width={1280} height={720}
                className="w-full rounded-lg border border-neutral-600 h-auto"
              />
              <p className="text-gray-400 text-sm mt-2 text-center">Send ERGs transaction</p>
            </div>
          </div>
        </section>

        {/* Security Warning */}
        <section className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-red-400" /> Security Warning
          </h2>
          <p className="text-gray-300 mb-4">
            Make sure to copy the mnemonic sentence accurately and store it securely offline. You will need this exact sentence (and the optional passphrase, if used) to restore your wallet later or on a different device.
          </p>
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
            <h4 className="font-bold text-red-400 mb-2">⚠️ Important Security Notes:</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                Store mnemonic offline in a secure location
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                Never share your mnemonic or passphrase
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                Use strong passwords for wallet encryption
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                Consider using BIP-39 passphrase for extra security
              </li>
            </ul>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-orange-400" /> Quick Links
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="http://127.0.0.1:9053/panel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> Swagger UI Panel
            </a>
            <a
              href="https://docs.ergoplatform.com/node/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <FileText className="w-5 h-5 mr-2" /> Node Documentation
            </a>
          </div>
        </section>
      </div>
    </>
  );
} 