"use client";

import React from "react";
import { Zap, Shield, Users, Target, Globe, Code, TrendingUp, ExternalLink, ArrowRight, CheckCircle, Building2, Wrench } from "lucide-react";

export default function TokenJayPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Token Jay
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Token Jay is your one-stop solution for dealing with tokens on Ergo. It offers open, fully documented applications that are accessible to everyone.
      </p>

      {/* Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-300">
          <Globe className="w-5 h-5 text-blue-300" /> Overview
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base mb-4">
            Token Jay is your one-stop solution for dealing with tokens on Ergo. It offers open, fully documented applications that are accessible to everyone.
          </p>
          <p className="text-gray-300 text-base mb-4">
            You can trade tokens in a trustless and decentralized manner using TokenJay's open P2P Escrow service. Visit tokenjay.app to get started. Please note that you will need an ErgoPay compatible Wallet Application.
          </p>
          <a 
            href="https://tokenjay.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors gap-2"
          >
            Visit TokenJay <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Tools Available */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-300">
          <Wrench className="w-5 h-5 text-purple-300" /> Tools Available on TokenJay
        </h2>
        
        {/* P2P Escrow */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-blue-300">
            <Shield className="w-5 h-5 text-blue-300" /> P2P Escrow
          </h3>
          <p className="text-gray-300 text-base mb-4">
            The open P2P Escrow service is a smart contract that facilitates trustless, private sales on the Ergo blockchain for a nominal fee. The contract accepts Ergo tokens, such as a non-fungible token (NFT), 100 SigUSD, or other token(s) from the seller. Once the tokens are in the contract, only a defined buyer sending a defined amount of ERG can access them. If the exchange is successful, the contract sends the tokens to the buyer and the ERG to the seller. The seller can cancel the contract at any time before the exchange is made.
          </p>
          <a 
            href="https://tokenjay.app/escrow.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors gap-2"
          >
            Learn more about P2P Escrow <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* SigUSD and SigRSV */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-green-300">
            <TrendingUp className="w-5 h-5 text-green-300" /> SigUSD and SigRSV
          </h3>
          <p className="text-gray-300 text-base mb-4">
            With TokenJay, you can convert ERG into SigUSD and SigRSV directly with the bank in a single transaction.
          </p>
          <a 
            href="https://tokenjay.app/ageusd.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-300 hover:text-green-200 transition-colors gap-2"
          >
            Learn more about SigUSD/SigRSV <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Utilities */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-orange-300">
            <Building2 className="w-5 h-5 text-orange-300" /> Utilities
          </h3>
          <p className="text-gray-300 text-base mb-4">
            TokenJay also offers a Token Burner utility that allows you to burn unwanted NFTs and tokens.
          </p>
          <a 
            href="https://tokenjay.app/app/#burntoken" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-orange-300 hover:text-orange-200 transition-colors gap-2"
          >
            Use Token Burner <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* How to use P2P Escrow */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-300">
          <Users className="w-5 h-5 text-blue-300" /> How to use P2P Escrow
        </h2>
        
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-base mb-3 text-purple-300">For Sellers:</h3>
          <ol className="list-decimal pl-6 text-gray-300 text-sm space-y-2">
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
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold text-base mb-3 text-green-300">For Buyers:</h3>
          <p className="text-gray-300 text-base mb-4">
            Once the transaction is confirmed, the buyer can make the purchase via TokenJay. The offer will appear under 'P2P Escrow offers'. The buyer should verify the token and minting transaction to ensure its authenticity.
          </p>
          <p className="text-gray-300 text-base mb-4">
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
          <p className="text-gray-300 text-base mb-4">
            This will return whether it is a real key, the token type, and the number of tokens. If everything checks out, they can click 'Buy' and sign the transaction.
          </p>
          <p className="text-gray-300 text-base">
            Once the transaction is processed, the Erg is sent to the seller, the key is sent to the buyer, and the contract takes a small fee.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-300">
          <Zap className="w-5 h-5 text-purple-300" /> Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-blue-300">
              <Shield className="w-4 h-4 text-blue-300" /> Trustless Trading
            </h3>
            <p className="text-gray-300 text-sm">
              Smart contracts ensure secure, trustless P2P trading without intermediaries.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-300">
              <Users className="w-4 h-4 text-green-300" /> Decentralized
            </h3>
            <p className="text-gray-300 text-sm">
              Fully decentralized escrow service operating on the Ergo blockchain.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-orange-300">
              <Code className="w-4 h-4 text-orange-300" /> Open Source
            </h3>
            <p className="text-gray-300 text-sm">
              Fully documented applications accessible to everyone with transparent code.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-purple-300">
              <Wrench className="w-4 h-4 text-purple-300" /> Multiple Tools
            </h3>
            <p className="text-gray-300 text-sm">
              P2P Escrow, SigUSD/SigRSV conversion, and Token Burner utilities.
            </p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-blue-300">
            <CheckCircle className="w-5 h-5 text-blue-300" /> Requirements
          </h2>
          <p className="text-gray-300 text-base">
            You will need an ErgoPay compatible Wallet Application to use TokenJay services. This ensures secure and seamless interaction with the platform's smart contracts.
          </p>
        </div>
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-300">
          <ExternalLink className="w-5 h-5 text-purple-300" /> Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a 
            href="https://tokenjay.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 hover:border-blue-400/60 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <div>
                <h3 className="font-semibold text-base text-blue-300 group-hover:text-blue-200 transition-colors">Main Platform</h3>
                <p className="text-gray-400 text-sm">Access all TokenJay tools</p>
              </div>
            </div>
          </a>
          
          <a 
            href="https://tokenjay.app/escrow.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 hover:border-purple-400/60 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <div>
                <h3 className="font-semibold text-base text-purple-300 group-hover:text-purple-200 transition-colors">P2P Escrow Guide</h3>
                <p className="text-gray-400 text-sm">Detailed escrow documentation</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
} 