import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, Code, FileText, ExternalLink, Github, Database } from 'lucide-react';
import { CodeBlock } from "@/components/ui";

export default function SimpleExamplePage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-green-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
              NFT Examples
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Basic NFT minting examples
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/Docs/developers/data-model-apis/assets/nfts/minting"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Minting
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Scala Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Using Scala
          </h2>
          <p className="text-gray-300 mb-4">
            <a href="https://github.com/lucagdangelo/minting-for-dummies" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">minting-for-dummies</a> is a basic tool for NFT minting quickly in Scala.
          </p>
          <p className="text-gray-300">
            You can see the <a href="https://github.com/lucagdangelo/minting-for-dummies/blob/cd99049f13eb6ab4489f0f880e8d36e33b27bdb2/src/main/scala/app/MintForDummiesCommands.scala#L11" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">mint() logic here</a>
          </p>
        </div>

        {/* Python AppKit Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Using Ergo Python Appkit
          </h2>
          <p className="text-gray-300 mb-4">
            To mint an NFT using the <a href="https://github.com/ergo-pad/ergo-python-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Python Appkit</a>, you can utilize the <code className="bg-neutral-700 px-2 py-1 rounded">mintToken</code> method provided by the <code className="bg-neutral-700 px-2 py-1 rounded">ErgoAppKit</code> class. First, you need to initialize the ErgoAppKit instance with the appropriate parameters such as nodeUrl, networkType, explorerUrl, and nodeApiKey. Then, you can call the mintToken method with the required parameters, including the value, tokenId, tokenName, tokenDesc, mintAmount, decimals, and contract.
          </p>
          <p className="text-gray-300 mb-6">
            Here's an example of how to mint an NFT using the ergo-python-appkit:
          </p>
          
          <CodeBlock language="typescript"
            children={String.raw`from ergo_python_appkit import ErgoAppKit
from org.ergoplatform.appkit import ErgoContract

# Initialize ErgoAppKit instance
appKit = ErgoAppKit(nodeUrl="https://ergo-node-url", networkType="mainnet", explorerUrl="https://ergo-explorer-url", nodeApiKey="your-node-api-key")

# Define the NFT parameters
value = 1000000
tokenId = "your-token-id"
tokenName = "Your Token Name"
tokenDesc = "Your Token Description"
mintAmount = 1
decimals = 0

# Compile the contract
contract = ErgoContract.compile("sigmaProp(true)")

# Mint the NFT
appKit.mintToken(value, tokenId, tokenName, tokenDesc, mintAmount, decimals, contract)`}
          />
          
          <p className="text-gray-300 mt-6">
            After minting the NFT, you can use other methods provided by the ErgoAppKit class to interact with the NFT, such as transferring it to another address or querying its properties.
          </p>
          
          <h3 className="text-xl font-semibold text-purple-400 mb-4 mt-6">Reference links:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><a href="https://github.com/ergo-pad/ergo-python-appkit/ergo_python_appkit/ErgoBox.py" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoBox</a></li>
            <li><a href="https://github.com/ergo-pad/ergo-python-appkit/ergo_python_appkit/appkit.py" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoAppKit</a></li>
            <li><a href="https://github.com/ergo-pad/ergo-python-appkit/ergo_python_appkit/ErgoTransaction.py" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoTransaction</a></li>
            <li><a href="https://github.com/ergo-pad/ergo-python-appkit/ergo_python_appkit/__init__.py" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-python-appkit module</a></li>
            <li><Link href="/Docs/developers/data-model-apis/assets/nfts/minting/appkit-node" className="text-cyan-400 hover:underline">Building transaction and minting a token using AppKit from Python</Link></li>
          </ul>
        </div>

        {/* More Examples Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            More Examples
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><a href="https://github.com/mgpai22/ergpy/blob/main/examples/example_5_bulk_mint_with_royalty.py" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Bulk Mint with Royalties using v1 design in Python</a></li>
            <li><Link href="/Docs/developers/data-model-apis/assets/nfts/minting/on-chain" className="text-cyan-400 hover:underline">On-Chain NFTs</Link></li>
          </ul>
        </div>

        {/* References Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Github className="w-6 h-6" />
            References
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><a href="https://github.com/ergoplatform/ergo-appkit/lib-impl/src/main/java/org/ergoplatform/appkit/impl/Eip4TokenBuilder.java" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Eip4TokenBuilder on GitHub</a></li>
            <li><a href="https://github.com/ergoplatform/ergo-appkit/common/src/main/java/org/ergoplatform/appkit/Eip4Token.java" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Eip4Token on GitHub</a></li>
          </ul>
        </div>
      </div>
    </>
  );
} 