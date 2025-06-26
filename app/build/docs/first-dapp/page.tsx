import React from "react";
import Link from "next/link";
import { Code, Rocket, Settings, FileCode, Globe, Database, Zap, CheckCircle, AlertTriangle, Terminal, Package, Cpu } from "lucide-react";

export default function FirstDappPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          First Ergo DApp
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Guide the user through the process of creating and deploying a simple decentralized application on Ergo.
        </p>
        <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-6">
          <p className="text-gray-300 leading-relaxed">
            After setting up your development environment, you are ready to create your first decentralized application (dApp) on Ergo. 
            We will walk through the process of creating a simple dApp for minting a custom token.
          </p>
        </div>
      </div>

      {/* SDK Selection Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Package className="w-6 h-6 text-orange-400" /> 1. Choosing an SDK
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-4">
            Ergo offers several SDKs for various programming languages. The choice depends on your preferences and the type of dApp.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-neutral-900/60 border border-blue-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-blue-400">Fleet (TypeScript/JavaScript)</span>
              </div>
              <p className="text-gray-400 text-sm">
                The de facto best SDK for frontend/web, ideal for web applications and frontends.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-neutral-900/60 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-5 h-5 text-green-400" />
                <span className="font-semibold text-green-400">AppKit (Java/Kotlin/Scala)</span>
              </div>
              <p className="text-gray-400 text-sm">
                Excellent for backend services, wallets, and complex dApps.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-neutral-900/60 border border-orange-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-orange-400" />
                <span className="font-semibold text-orange-400">Sigma-Rust (Rust)</span>
              </div>
              <p className="text-gray-400 text-sm">
                For low-level development and high-performance components.
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-cyan-500/10 to-orange-500/10 border border-cyan-500/20 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong>For this tutorial, we will use the Fleet SDK</strong> due to its simplicity and web orientation.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Setup Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Settings className="w-6 h-6 text-cyan-400" /> 2. Setting up a Fleet Project
        </h2>
        
        <div className="space-y-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <div className="font-semibold mb-3 text-orange-400">Create a new Node.js project:</div>
            <pre className="bg-black text-orange-300 p-3 rounded-lg overflow-x-auto font-mono text-sm">mkdir ergo-token-minter
cd ergo-token-minter
npm init -y</pre>
          </div>
          
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <div className="font-semibold mb-3 text-cyan-400">Install Fleet SDK:</div>
            <pre className="bg-black text-cyan-300 p-3 rounded-lg overflow-x-auto font-mono text-sm">npm install @fleet-sdk/core @fleet-sdk/common</pre>
          </div>
          
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <div className="font-semibold mb-3 text-green-400">Create index.js file:</div>
            <pre className="bg-black text-green-300 p-3 rounded-lg overflow-x-auto font-mono text-sm">{`// index.js
import { ErgoAddress, SByte, SColl, SConstant, SLong, TransactionBuilder } from '@fleet-sdk/core';
import { hexToBytes } from '@fleet-sdk/common';

// 1. Configure the RPC API of your local Ergo node (or a public testnet node)
const NODE_URL = 'http://localhost:9053'; // Replace with your node address
const NODE_API_KEY = 'YOUR_API_KEY'; // If your node requires an API key
// WARNING: Using an API key for an RPC node is only safe in a localhost/dev environment.
// In production, RPC nodes should be protected by a firewall/VPN and not directly accessible from the internet.

// 2. Address from which tokens will be sent (your testnet wallet)
const SENDER_ADDRESS = '9f...'; // Replace with your test Ergo address

// 3. Address to which new tokens will be sent (your own address or another)
const RECIPIENT_ADDRESS = SENDER_ADDRESS;

// 4. Token information
const TOKEN_NAME = 'MyErgoToken';
const TOKEN_DESCRIPTION = 'A custom token minted on Ergo';
const TOKEN_DECIMALS = 0; // No decimal places
const TOKEN_AMOUNT = 1000n; // 1000 tokens (use BigInt for large numbers)

async function mintToken() {
    try {
        // Get UTXOs from the sender's address
        const utxos = await fetch(\`\${NODE_URL}/wallet/boxes/unspent?minConfirmations=0&minErgo=1000000000\`, {
            headers: { 'api_key': NODE_API_KEY }
        }).then(res => res.json());

        if (!utxos || utxos.length === 0) {
            console.error('No unspent UTXOs found for sender address. Ensure your wallet has ERG.');
            return;
        }

        // Select the first suitable UTXO to use as input
        const inputBox = utxos;

        // Create an output box for the new token
        const outputBox = {
            value: 1000000n, // Minimum ERG value for a box (0.001 ERG)
            ergoTree: ErgoAddress.fromBase58(RECIPIENT_ADDRESS).ergoTree,
            assets: [],
            // Registers R4-R9 for token metadata
            additionalRegisters: {
                R4: SConstant(SColl(SByte, hexToBytes(Buffer.from(TOKEN_NAME).toString('hex')))),
                R5: SConstant(SColl(SByte, hexToBytes(Buffer.from(TOKEN_DESCRIPTION).toString('hex')))),
                R6: SConstant(SLong(TOKEN_DECIMALS))
            }
        };

        // Create the transaction
        const unsignedTx = new TransactionBuilder()
         .from(inputBox) // Input box
         .to(outputBox) // Output box with the new token
         .sendChangeTo(SENDER_ADDRESS) // Where to send change
         .payFee(1000000n) // Transaction fee (0.001 ERG)
         .build();

        console.log('Unsigned Transaction:', JSON.stringify(unsignedTx, null, 2));

        // Sign the transaction (this requires access to the private key,
        // in a real dApp this is done via the user's wallet, e.g., Yoroi dApp Connector or Nautilus)
        // For local testing, you can use the node's RPC for signing,
        // but this is not recommended for production.
        const signedTx = await fetch(\`\${NODE_URL}/wallet/transaction/send\`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api_key': NODE_API_KEY
            },
            body: JSON.stringify(unsignedTx)
        }).then(res => res.json());

        console.log('Signed Transaction ID:', signedTx.transactionId);
        console.log('Transaction submitted successfully!');

    } catch (error) {
        console.error('Error minting token:', error);
    }
}

mintToken();`}</pre>
          </div>
        </div>
      </section>

      {/* ErgoScript Contract Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <FileCode className="w-6 h-6 text-purple-400" /> 3. Writing an ErgoScript Contract (for more complex dApps)
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-4">
            For more complex dApps, such as escrow or voting, you will need to write an ErgoScript contract. 
            This contract will define the conditions under which funds can be spent from a box.
          </p>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-4 mb-4">
            <div className="font-semibold mb-2 text-purple-400">Example: Simple Escrow Contract</div>
            <p className="text-gray-300 text-sm mb-3">
              This contract allows two parties (Alice and Bob) to jointly control funds. 
              Funds can be spent if both parties sign the transaction.
            </p>
            <pre className="bg-black text-purple-300 p-3 rounded-lg overflow-x-auto font-mono text-sm">{`{
  // Escrow contract requiring signatures from two parties
  // pkA: SigmaProp - Alice's public key
  // pkB: SigmaProp - Bob's public key

  // Spending condition:
  // The transaction must be signed by both Alice and Bob.
  pkA.isValid && pkB.isValid
}`}</pre>
          </div>
        </div>
      </section>

      {/* SDK Integration Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Code className="w-6 h-6 text-blue-400" /> 4. Integrating ErgoScript with the SDK
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            After writing the ErgoScript contract, you will compile it into ErgoTree (bytecode) and use it in your dApp.
          </p>
          
          <pre className="bg-black text-blue-300 p-3 rounded-lg overflow-x-auto font-mono text-sm">{`// Example of using compiled ErgoTree in Fleet SDK
import { ErgoAddress } from '@fleet-sdk/core';

const escrowScript = \`{ pkA.isValid && pkB.isValid }\`; // Your ErgoScript
const compiledEscrowTree = ErgoAddress.fromErgoTree(escrowScript).ergoTree; // Compilation to ErgoTree

// Then use compiledEscrowTree when creating an output box
// outputBox.ergoTree = compiledEscrowTree;`}</pre>
        </div>
      </section>

      {/* UI Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Globe className="w-6 h-6 text-green-400" /> 5. Creating a User Interface (if applicable)
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            For a web dApp, you will need a frontend. You can use any framework (React, Vue, Angular) or plain HTML/CSS/JS. 
            The Fleet SDK is designed for seamless integration with web applications.
          </p>
          
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-4">
            <p className="text-gray-300 text-sm">
              <strong>Example:</strong> A "Mint Token" button that calls the mintToken() function from your index.js.
            </p>
          </div>
        </div>
      </section>

      {/* Deployment Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Rocket className="w-6 h-6 text-orange-400" /> 6. Deploying the Contract on Ergo Testnet
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            In Ergo, "deploying a contract" means creating a UTXO (box) protected by your ErgoScript.
          </p>
          
          <ul className="list-decimal pl-6 text-gray-300 space-y-2 mb-6">
            <li><strong>Get test ERG:</strong> Use the Ergo Testnet Faucet to get free test ERG to your address.</li>
            <li><strong>Create a box with the contract:</strong> Use your SDK (e.g., Fleet) to create a transaction that sends a small amount of ERG to an address generated from your compiled ErgoScript. This box will be the "contract."</li>
            <li><strong>Send the transaction:</strong> Sign and send the transaction via your local node or a public testnet node.</li>
          </ul>
        </div>
      </section>

      {/* Interaction Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Database className="w-6 h-6 text-cyan-400" /> 7. Examples of Interacting with the Deployed DApp
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            After deploying the contract, you can interact with it by creating transactions that spend or modify its state.
          </p>
          
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>For the counter:</strong> Create a transaction that spends the current counter box and creates a new box with an incremented value, using your ErgoScript logic.</li>
            <li><strong>For escrow:</strong> Create a transaction that spends the escrow box, requiring signatures from both parties.</li>
          </ul>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <CheckCircle className="w-6 h-6 text-green-400" /> Next Steps
        </h2>
        <div className="bg-gradient-to-r from-green-500/10 to-orange-500/10 border border-green-500/20 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="font-semibold mb-3 text-green-400">Ready to Build?</div>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Set up your development environment</li>
                <li>Choose your preferred SDK</li>
                <li>Start with a simple token minting dApp</li>
                <li>Gradually add more complex features</li>
              </ul>
            </div>
            
            <div>
              <div className="font-semibold mb-3 text-orange-400">Resources</div>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li><Link href="/build/docs/contracts" className="text-orange-400 hover:underline">Smart Contracts Guide</Link></li>
                <li><Link href="/build/docs/transactions" className="text-orange-400 hover:underline">Transactions & ErgoScript</Link></li>
                <li><Link href="/build/docs/faq" className="text-orange-400 hover:underline">FAQ</Link></li>
                <li><Link href="/build/docs/forums" className="text-orange-400 hover:underline">Community Support</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-neutral-900/60 border border-neutral-700 rounded-lg">
            <div className="text-sm text-orange-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> 
              <strong>Important:</strong> Always test your dApps on testnet before deploying to mainnet. 
              Use the Ergo Testnet Faucet to get free test ERG for development.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 