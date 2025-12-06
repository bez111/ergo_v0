"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { 
  Zap, 
  Shield, 
  Users, 
  Target, 
  Globe, 
  Code, 
  TrendingUp, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle, 
  Building2, 
  Wrench,
  ChevronRight,
  GitBranch,
  Coins,
  Lock
} from "lucide-react";
import Link from "next/link";

export default function TokenJayPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Token Jay
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Token Jay is your one-stop solution for dealing with tokens on Ergo. It offers open, fully documented applications that are accessible to everyone.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/docs/ecosystem/financial/dex" className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105">
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DEX
          </Link>
          <a href="https://tokenjay.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700">
            <Globe className="w-5 h-5 mr-2" /> TokenJay App
          </a>
        </div>
      </div>

      {/* Overview Card */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-blue-400" /> Platform Overview
        </h2>
        <p className="text-gray-300 mb-4">
          You can trade tokens in a trustless and decentralized manner using TokenJay's open P2P Escrow service. Visit tokenjay.app to get started. Please note that you will need an ErgoPay compatible Wallet Application.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>P2P Escrow:</b> Trustless, private sales on the Ergo blockchain for a nominal fee</li>
          <li><b>SigUSD/SigRSV:</b> Convert ERG into SigUSD and SigRSV directly with the bank</li>
          <li><b>Token Burner:</b> Utility to burn unwanted NFTs and tokens</li>
          <li><b>Open Source:</b> Fully documented applications accessible to everyone</li>
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" /> P2P Escrow
          </h3>
          <p className="text-gray-300 mb-2">Smart contract that facilitates trustless, private sales on the Ergo blockchain. Accepts Ergo tokens from seller, only defined buyer with defined ERG amount can access them.</p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-400" /> SigUSD & SigRSV
          </h3>
          <p className="text-gray-300 mb-2">Convert ERG into SigUSD and SigRSV directly with the bank in a single transaction, providing easy access to Ergo's stablecoin ecosystem.</p>
        </div>
      </div>

      {/* Technical Details Accordion */}
      <div className="mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <details className="group">
            <summary className="cursor-pointer px-6 py-4 text-lg font-semibold flex items-center gap-4 select-none hover:text-cyan-400 group-open:text-cyan-400">
              <span className="inline-block">
                <Wrench className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-open:rotate-90" />
              </span>
              <span>Tools & Usage Instructions</span>
              <span className="ml-auto text-xs text-gray-400 group-open:text-cyan-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 pt-2 text-gray-300 text-base">
              <h4 className="font-semibold text-cyan-400 mb-2">Tools Available on TokenJay</h4>
              
              <h5 className="font-semibold text-blue-300 mb-2">P2P Escrow</h5>
              <p className="text-gray-300 mb-4">
                The open P2P Escrow service is a smart contract that facilitates trustless, private sales on the Ergo blockchain for a nominal fee. The contract accepts Ergo tokens, such as a non-fungible token (NFT), 100 SigUSD, or other token(s) from the seller. Once the tokens are in the contract, only a defined buyer sending a defined amount of ERG can access them. If the exchange is successful, the contract sends the tokens to the buyer and the ERG to the seller. The seller can cancel the contract at any time before the exchange is made.
              </p>
              <a 
                href="https://tokenjay.app/escrow.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors gap-2 mb-4"
              >
                Learn more about P2P Escrow <ExternalLink className="w-4 h-4" />
              </a>

              <h5 className="font-semibold text-green-300 mb-2">SigUSD and SigRSV</h5>
              <p className="text-gray-300 mb-4">
                With TokenJay, you can convert ERG into SigUSD and SigRSV directly with the bank in a single transaction.
              </p>
              <a 
                href="https://tokenjay.app/ageusd.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-300 hover:text-green-200 transition-colors gap-2 mb-4"
              >
                Learn more about SigUSD/SigRSV <ExternalLink className="w-4 h-4" />
              </a>

              <h5 className="font-semibold text-orange-300 mb-2">Utilities</h5>
              <p className="text-gray-300 mb-4">
                TokenJay also offers a Token Burner utility that allows you to burn unwanted NFTs and tokens.
              </p>
              <a 
                href="https://tokenjay.app/app/#burntoken" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-300 hover:text-orange-200 transition-colors gap-2 mb-4"
              >
                Use Token Burner <ExternalLink className="w-4 h-4" />
              </a>

              <h4 className="font-semibold text-cyan-400 mb-2">How to use P2P Escrow</h4>
              
              <h5 className="font-semibold text-purple-300 mb-2">For Sellers:</h5>
              <ol className="list-decimal pl-6 text-gray-300 text-sm space-y-2 mb-4">
                <li>Visit TokenJay</li>
                <li>Connect your wallet by scanning the QR code</li>
                <li>Navigate to 'Your Token Sales'</li>
                <li>Click 'Start New Sale'</li>
                <li>Select the vesting key from your wallet</li>
                <li>Enter the buyer's address</li>
                <li>Set the price the buyer should pay (in $ per SPF token, converted into Erg)</li>
                <li>Click 'Sell Token'</li>
                <li>Sign the transaction</li>
              </ol>

              <h5 className="font-semibold text-green-300 mb-2">For Buyers:</h5>
              <p className="text-gray-300 mb-4">
                Once the transaction is confirmed, the buyer can make the purchase via TokenJay. The offer will appear under 'P2P Escrow offers'. The buyer should verify the token and minting transaction to ensure its authenticity.
              </p>
              <p className="text-gray-300 mb-4">
                If it's an Ergopad vesting key, they can verify the tokenid in the verifier API:
              </p>
              <a 
                href="https://api.ergopad.io/vesting/vestedWithKey/tokenid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors gap-2 mb-4"
              >
                https://api.ergopad.io/vesting/vestedWithKey/tokenid <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-gray-300 mb-4">
                This will return whether it is a real key, the token type, and the number of tokens. If everything checks out, they can click 'Buy' and sign the transaction.
              </p>
              <p className="text-gray-300 mb-4">
                Once the transaction is processed, the Erg is sent to the seller, the key is sent to the buyer, and the contract takes a small fee.
              </p>

              <h4 className="font-semibold text-cyan-400 mb-2">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h6 className="font-semibold text-base mb-2 flex items-center gap-2 text-blue-300">
                    <Shield className="w-4 h-4 text-blue-300" /> Trustless Trading
                  </h6>
                  <p className="text-gray-300 text-sm">
                    Smart contracts ensure secure, trustless P2P trading without intermediaries.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h6 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
                    <Users className="w-4 h-4 text-green-300" /> Decentralized
                  </h6>
                  <p className="text-gray-300 text-sm">
                    Fully decentralized escrow service operating on the Ergo blockchain.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h6 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
                    <Code className="w-4 h-4 text-orange-300" /> Open Source
                  </h6>
                  <p className="text-gray-300 text-sm">
                    Fully documented applications accessible to everyone with transparent code.
                  </p>
                </div>
                
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h6 className="font-semibold text-base mb-2 flex items-center gap-2 text-purple-300">
                    <Wrench className="w-4 h-4 text-purple-300" /> Multiple Tools
                  </h6>
                  <p className="text-gray-300 text-sm">
                    P2P Escrow, SigUSD/SigRSV conversion, and Token Burner utilities.
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-cyan-400 mb-2">Requirements</h4>
              <p className="text-gray-300 mb-4">
                You will need an ErgoPay compatible Wallet Application to use TokenJay services. This ensures secure and seamless interaction with the platform's smart contracts.
              </p>
            </div>
          </details>
        </div>
      </div>

      {/* In a Nutshell */}
      <div className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">In a Nutshell</h3>
        <p className="text-gray-300 mb-4">Token Jay represents a comprehensive toolkit for Ergo token management, combining P2P escrow services, stablecoin conversion, and utility tools in a single, open-source platform. With its trustless smart contracts and user-friendly interface, Token Jay makes token trading and management accessible to everyone on the Ergo blockchain.</p>
      </div>
    </>
  );
} 