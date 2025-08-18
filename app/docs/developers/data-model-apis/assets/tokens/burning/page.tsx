import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Code, Smartphone, ExternalLink, FileText, Zap } from 'lucide-react';

export default function BurningTokenPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent leading-tight">
              Burning a token
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Understanding how to remove unwanted tokens from your wallet
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/Docs/developers/data-model-apis/assets/tokens"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tokens
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <p className="text-lg text-gray-300 mb-6">
            There are sometimes occasions when you want to delete a token from your wallet.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li>Your address was airdropped a token you no longer want</li>
            <li>You created an NFT but something about it is not right.</li>
            <li>A project sent you voting or other tokens that you no longer need</li>
          </ul>

          <p className="text-gray-300 mb-6">
            To get rid of those tokens, you have a few options.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Mobile Wallet:</strong> <a href="https://www.tokenjay.app/app/#burntoken" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">TokenJay</a> (This requires an Ergopay compatible wallet like Ergo Mobile Wallet)</li>
            <li><strong>Nautilus:</strong> <a href="https://github.com/ThierryM1212/ergo-token-minter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Token Minter / Burner</a></li>
            <li><a href="https://github.com/ThierryM1212/SAFEW" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><strong>SAFEW</strong></a> supports token burning natively.</li>
            <li>Send to <code className="bg-neutral-700 px-2 py-1 rounded">4MQyMKvMbnCJG3aJ</code>, a <Link href="/Docs/developers/p2s" className="text-cyan-400 hover:underline"><strong>P2S (Pay-to-Script)</strong></Link> representation of a "false" condition, i.e. the box is unspendable.</li>
          </ul>
        </div>

        {/* Programmatically Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Programmatically
          </h2>
          
          <p className="text-gray-300 mb-6">
            To burn tokens programmatically, simply spend an Unspent Transaction Output (UTXO) containing the tokens you wish to eliminate. Ensure not to include these tokens in the output of the transaction.
          </p>

          {/* Using AppKit Section */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Using AppKit
            </h3>
            <p className="text-gray-300">
              If you're working with <Link href="/Docs/developers/tooling/frameworks/appkit" className="text-cyan-400 hover:underline">AppKit</Link>, the transaction builder conveniently offers a <code className="bg-neutral-700 px-2 py-1 rounded">burntoken</code> method tailored for this purpose.
            </p>
          </div>

          {/* Ergo Token Minter Integration Section */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Ergo Token Minter Integration
            </h3>
            <p className="text-gray-300 mb-4">
              The burn token functionality integrated by <code className="bg-neutral-700 px-2 py-1 rounded">ThierryM1212</code> can be observed <a href="https://github.com/ThierryM1212/ergo-token-minter/blob/main/src/index.js#L254" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">here</a>. The crucial steps involved are as follows:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Identify and select the input boxes holding the tokens to be burnt, along with a small ERG amount.</li>
              <li>Construct the output boxes, excluding consideration of the tokens. The transaction builder automatically appends an additional output change box encompassing all tokens.</li>
              <li>Retrieve the transaction JSON representation.</li>
              <li>Edit the output change box details to eliminate the tokens intended for burning.</li>
              <li>Dispatch the modified transaction (JSON) to the network.</li>
            </ol>
            <p className="text-gray-300 mt-4">
              This streamlined approach simplifies the process of burning tokens while maintaining transaction integrity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 