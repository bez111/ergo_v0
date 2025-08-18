import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CircleDollarSign, Info, AlertTriangle, Database, FileText, ExternalLink, Video, Code, BookOpen, Users, Zap } from 'lucide-react';

export default function TokensPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <CircleDollarSign className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Tokens on Ergo
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Understanding native tokens and their versatile applications in Ergo
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
          <Link 
            href="/docs/developers/data-model-apis/assets/tokens/perpetual"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl transition-colors duration-200"
          >
            <Zap className="w-4 h-4" />
            Perpetual Tokens
          </Link>
          <Link 
            href="/docs/developers/data-model-apis/assets/tokens/burning"
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-colors duration-200"
          >
            <AlertTriangle className="w-4 h-4" />
            Burning a token
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <p className="text-lg text-gray-300 mb-6">
            Ergo's native tokens are incredibly versatile and can represent a wide range of assets, including shares, complementary currency units, and various tangible or intangible items. The infrastructure of Ergo is designed to seamlessly handle the representation and transfer of these diverse assets, integrating them into the blockchain as <em>first-class citizens</em>.
          </p>

          {/* First-class citizens details */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-blue-400">What are first-class citizens?</h3>
            </div>
            <p className="text-gray-300">
              This means that tokens in Ergo are not just metadata attached to transactions, but they are deeply integrated into the Ergo protocol. They can be manipulated and managed with the same level of support and functionality as the native Ergo token (see <Link href="/docs/developers/eip4" className="text-cyan-400 hover:underline">EIP-0004</Link>).
            </p>
          </div>

          {/* ERG characteristics warning */}
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-semibold text-orange-400">ERG Token Characteristics</h3>
            </div>
            <p className="text-gray-300 mb-3">
              It is crucial to understand that ERG, the native token of Ergo, possesses two unique characteristics:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>ERGs <strong>cannot be burned</strong>; the total input and output amounts in any transaction must be equal.</li>
              <li><Link href="/docs/introduction/storage-rent" className="text-cyan-400 hover:underline">Storage rent</Link> can only be paid in ERGs.</li>
            </ul>
          </div>

          {/* How to mint details */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-green-400">How do I mint a token?</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Use <a href="https://ergoutils.org/#/token" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergoutils</a> to mint a token directly from your web browser. (<a href="https://www.youtube.com/watch?v=I3R6_PceM1k" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Video Tutorial</a>)</li>
              <li>For programmatic token minting, refer to this guide: <a href="https://fleet-sdk.github.io/docs/transaction-building#step-4-2-mint-a-token" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Minting a Token with Fleet SDK</a></li>
            </ul>
          </div>

          <p className="text-gray-300">
            There is no central database where tokens are registered currently, your best bet is to use community resources like <a href="https://github.com/Luivatra/ergotipper-tokens" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">supported tokens in the ergotipper bot</a> and <a href="https://github.com/spectrum-finance/ergo-token-list" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">spectrum-finance/ergo-token-list</a>.
          </p>
        </div>

        {/* Token Storage Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Database className="w-6 h-6" />
            Token Storage
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Tokens are stored in a special <Link href="/docs/developers/data-model-apis/registers" className="text-cyan-400 hover:underline">register</Link> <code className="bg-neutral-700 px-2 py-1 rounded">R2</code> of a <Link href="/docs/developers/data-model-apis" className="text-cyan-400 hover:underline">box</Link> in the form of (tokenId → amount) pairs.</li>
            <li>A single box can hold <strong>up to 255 secondary tokens</strong>.</li>
          </ul>
        </div>

        {/* Register Usage Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Register Usage
          </h2>
          <p className="text-gray-300 mb-4">
            The Ergo reference implementation wallet uses specific <Link href="/docs/developers/data-model-apis/registers" className="text-cyan-400 hover:underline">registers</Link> in a unique way, although the protocol doesn't enforce this:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><code className="bg-neutral-700 px-2 py-1 rounded">R4</code> - verbose name</li>
            <li><code className="bg-neutral-700 px-2 py-1 rounded">R5</code> - description</li>
            <li><code className="bg-neutral-700 px-2 py-1 rounded">R6</code> - number of decimal places</li>
            <li>Additional registers (<code className="bg-neutral-700 px-2 py-1 rounded">R7</code>, <code className="bg-neutral-700 px-2 py-1 rounded">R8</code>, <code className="bg-neutral-700 px-2 py-1 rounded">R9</code>) can store asset-specific information</li>
          </ul>
        </div>

        {/* Limitations Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            Limitations
          </h2>
          <p className="text-gray-300 mb-4">There are certain indirect limitations to consider:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>The size of a box should not exceed 4 kilobytes.</li>
            <li>The presence of tokens increases the computational cost of the transaction.</li>
          </ul>
        </div>

        {/* Asset Creation Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Asset Creation
          </h2>
          <p className="text-gray-300 mb-4">
            An exception to the rule of weak preservation <em>(the total amount in inputs should be no less than the total amount in outputs)</em> is that a transaction can generate tokens from thin air in its outputs if the asset identifier matches the identifier of the transaction's first input box. Given that the box identifier is cryptographically unique, it's impossible to have a second asset with the same identifier, assuming the hash function used is collision-resistant (which it indeed is). This rule also implies that <strong>only one new asset can be created per transaction.</strong>
          </p>
        </div>

        {/* Examples Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Examples
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><a href="https://fleet-sdk.github.io/docs/transaction-building#step-4-2-mint-a-token" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">How to mint a token with Fleet SDK</a></li>
            <li>Creating a <Link href="/docs/developers/perpetual" className="text-cyan-400 hover:underline">perpetual token</Link> (designed to exist indefinitely, unless it is removed by garbage collection.)</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Resources
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><a href="https://sigmaverse.io/all-projects/?category=Tokens" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Token category on sigmaverse.io</a></li>
            <li><a href="https://thierrym1212.github.io/tokenminter/index.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Token Minter</a> or <a href="https://thierrym1212.github.io/cyti/index.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">CYTI</a> which uses a Use CYTI minable smart contract to choose your token ID.</li>
            <li><a href="https://ergoutils.org/#/token" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergoutils.org</a></li>
            <li><a href="https://www.youtube.com/watch?v=I3R6_PceM1k" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Video Tutorial</a></li>
            <li><a href="https://github.com/ergoplatform/ergo/issues/2013" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Why does the limitation of 1 new token per transaction exist?</a></li>
          </ul>
        </div>
      </div>
    </>
  );
} 