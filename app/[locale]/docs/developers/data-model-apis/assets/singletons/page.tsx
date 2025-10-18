import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Coins, Database, Info, ExternalLink } from 'lucide-react';

export default function SingletonsPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <Coins className="w-8 h-8 text-orange-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">
              Singletons
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Understanding singleton tokens in the UTXO model
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/docs/developers/data-model-apis/assets"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Assets
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Database className="w-6 h-6" />
            Overview
          </h2>
          <p className="text-gray-300 mb-6">
            In the UTXO model, a token issued with a quantity of exactly one unit is referred to as a <code className="bg-neutral-700 px-2 py-1 rounded">singleton</code> token. Singleton tokens can be used to emulate long-lived accounts similar to those found in Waves, Ethereum Classic, etc.
          </p>
          <p className="text-gray-300 mb-6">
            A transaction that spends an old box with the singleton token and creates a new one can be controlled by the script of the old box, requiring the new box to have certain characteristics (such as a specific script or amount). This allows a smart account, marked with the token, to exist and alter its state as dictated by the smart account contract through a chain of transactions.
          </p>
        </div>

        {/* Oracle Example Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Info className="w-6 h-6" />
            Oracle Example
          </h2>
          <p className="text-gray-300 mb-4">
            One specific example of a singular token is an <Link href="/docs/developers/data-model-apis/assets/singletons/oracles" className="text-cyan-400 hover:underline">oracle</Link>. For instance, a token can be created to act as an ERG/EUR exchange rates oracle.
          </p>
          <p className="text-gray-300 mb-6">
            A box that contains this token would encode the exchange rate in a specific register. Since the oracle is a long-lived account, contracts can know the oracle token identifier beforehand and refer to it.
          </p>
          
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Key Benefits</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Long-lived accounts in UTXO model</li>
                  <li>Controlled state transitions</li>
                  <li>Predictable token identifiers</li>
                  <li>Smart contract integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Database className="w-6 h-6" />
            Technical Details
          </h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Token Characteristics</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Exactly one unit quantity</li>
                <li>Unique token identifier</li>
                <li>Persistent across transactions</li>
                <li>Script-controlled state changes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Use Cases</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Oracle data feeds</li>
                <li>Smart account management</li>
                <li>Long-lived contract states</li>
                <li>Identity and reputation systems</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Implementation</h3>
              <p className="mb-3">
                Singleton tokens are implemented by creating a token with a quantity of exactly 1. The token ID becomes the unique identifier for the singleton, and the containing box's script controls how the singleton can be spent and recreated.
              </p>
              <p>
                This pattern allows for complex state machines and long-lived entities within the UTXO model, bridging the gap between account-based and UTXO-based blockchain architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 