"use client";

import React from "react";
import Link from "next/link";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";
import { ArrowLeft } from "lucide-react";

export default function BabelFeesImplementationPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Babel Fees Implementation Guide
      </h1>

      {/* Back Button */}
      <Link href="/Docs/developers/data-model-apis/babel-fees" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Babel Fees</span>
        </button>
      </Link>

      {/* Overview */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Overview</h2>
        <p className="text-gray-300">
          This guide provides detailed instructions for implementing Babel fees in your Ergo applications. The implementation example demonstrates how to enable users to pay transaction fees using tokens instead of ERG, which is particularly useful for new users who may not have ERG in their wallets.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Prerequisites</h2>
        <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-300">
          <li>Node.js and npm (tested with Node v20.10.0)</li>
          <li>Fleet SDK core and babel-fees plugin</li>
          <li>Webpack for building</li>
          <li>A minted token to use for Babel fees</li>
          <li>A Nautilus wallet</li>
          <li>Ubuntu 22.04 LTS (for server setup)</li>
        </ol>
      </div>

      {/* Implementation Steps */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Implementation Steps</h2>

        <div className="space-y-6">
          {/* Step 1: Token Preparation */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">1. Token Preparation</h3>
            <p className="text-gray-300 mb-4">First, mint the token you wish to use for Babel Fees:</p>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-300">
              <li>Create your token (e.g., "lightning tokens" with 1,000,000 supply)</li>
              <li>Note the Asset ID (e.g., <code className="bg-neutral-700 px-1 py-0.5 rounded">272a4aeba6d1596ee0405b13fa223074077fd31f2d519fcd2f7b1656596db029</code>)</li>
              <li>Note the bank wallet address (e.g., <code className="bg-neutral-700 px-1 py-0.5 rounded">9hqbqkUfC4nmi1fVNcj8B3iEYh9HUnsLazcsRHwjoZJpZbmrCiq</code>)</li>
            </ol>
          </div>

          {/* Step 2: Create Babel Fee Box */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">2. Create Babel Fee Box</h3>
            <p className="text-gray-300 mb-4">Use TokenJay.app to create a Babel Box providing liquidity:</p>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-300">
              <li>Visit <a href="https://tokenjay.app/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Tokenjay</a></li>
              <li>Click "Open App"</li>
              <li>Navigate to "Purchase Tokens" → "Babel Fee Liquidity"</li>
              <li>Connect your ErgoPay wallet</li>
              <li>Create new babel fee box</li>
              <li>Set your exchange rate (e.g., 0.0001 ERG per 1 token)</li>
              <li>Set liquidity amount (e.g., 10,000 tokens & 100 ERG)</li>
            </ol>
          </div>

          {/* Step 3: Server Setup */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">3. Server Setup</h3>
            <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
              <UniversalCopyCodeBlock
                code={`# Update system
sudo apt-get update
sudo apt-get upgrade

# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Restart terminal or reboot
nvm install v20.10.0
nvm install-latest-npm

# Install nginx
sudo apt-get install nginx

# Create project directory
cd /var/www/html
mkdir fleetsdk
cd fleetsdk/

# Install dependencies
npm install @fleet-sdk/core
npm install --save-dev webpack webpack-cli ts-loader html-webpack-plugin typescript
npm install @fleet-sdk/babel-fees-plugin`}
              />
            </div>
          </div>

          {/* Step 4: Configuration Files */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">4. Configuration Files</h3>
            <p className="text-gray-300 mb-4">Create webpack configuration (<code className="bg-neutral-700 px-1 py-0.5 rounded">webpack.config.js</code>):</p>
            <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
              <UniversalCopyCodeBlock
                code={`const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};`}
              />
            </div>
            <p className="text-gray-300 mt-4 mb-4">Create TypeScript configuration (<code className="bg-neutral-700 px-1 py-0.5 rounded">tsconfig.json</code>):</p>
            <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
              <UniversalCopyCodeBlock
                code={`{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "es6",
        "target": "es5",
        "jsx": "react",
        "allowJs": true
    },
    "include": [
        "./src/**/*"
    ]
}`}
              />
            </div>
          </div>

          {/* Step 5: Implementation Code */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">5. Implementation Code</h3>
            <p className="text-gray-300 mb-4">Create the main implementation file (<code className="bg-neutral-700 px-1 py-0.5 rounded">src/index.ts</code>):</p>
            <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
              <UniversalCopyCodeBlock
                code={`import { OutputBuilder, TransactionBuilder } from '@fleet-sdk/core';
import { BabelSwapPlugin } from '@fleet-sdk/babel-fees-plugin'; 

// Configuration - Replace with your values
const AssetID = "272a4aeba6d1596ee0405b13fa223074077fd31f2d519fcd2f7b1656596db029";
const BabelBoxBankAddr = "9hqbqkUfC4nmi1fVNcj8B3iEYh9HUnsLazcsRHwjoZJpZbmrCiq";
const ergoTree = \`100604000e20\${AssetID}0400040005000500d803d601e30004d602e4c6a70408d603e4c6a7050595e67201d804d604b2a5e4720100d605b2db63087204730000d606db6308a7d60799c1a7c17204d1968302019683050193c27204c2a7938c720501730193e4c672040408720293e4c672040505720393e4c67204060ec5a796830201929c998c7205029591b1720673028cb272067303000273047203720792720773057202\`;

// Fetch Babel Box from API
const fetchBabelBox = async () => {
    try {
        const response = await fetch(\`https://api.ergoplatform.com/api/v1/boxes/unspent/byErgoTree/\${ergoTree}\`);
        const json = await response.json();
        const babelBox = json.items[0];

        const additionalRegisters = { 
            R4: babelBox.additionalRegisters.R4?.serializedValue,
            R5: babelBox.additionalRegisters.R5?.serializedValue,
            R6: babelBox.additionalRegisters.R6?.serializedValue,
            R7: babelBox.additionalRegisters.R7?.serializedValue,
            R8: babelBox.additionalRegisters.R8?.serializedValue,
            R9: babelBox.additionalRegisters.R9?.serializedValue 
        }; 
        
        return { ...babelBox, additionalRegisters };
    } catch (error) {
        console.error('Failed to fetch Babel Box:', error);
        return null;
    }
}

// Main Babel Fees transaction function
const BabelFees = async () => {
    try {
        const connected = await ergoConnector.nautilus.connect();
        if (connected) {
            const defaultAddress = await ergo.get_change_address();
            const height = await ergo.get_current_height();
            const babelBox = await fetchBabelBox();

            if (!babelBox) {
                console.log("No suitable Babel Box found.");
                return;
            }

            const unsignedTx = new TransactionBuilder(height)
                .from(await ergo.get_utxos())
                .extend(BabelSwapPlugin(babelBox, {
                    tokenId: AssetID,
                    amount: "50"
                }))
                .to(
                    new OutputBuilder(
                        '1000000',
                        defaultAddress
                    ).addTokens({
                        tokenId: AssetID,
                        amount: "50"
                    })
                )
                .sendChangeTo(BabelBoxBankAddr)
                .payMinFee()
                .build()
                .toEIP12Object();

            const signedTx = await ergo.sign_tx(unsignedTx);
            const txId = await ergo.submit_tx(signedTx);

            if (txId) {
                console.log("Transaction ID:", txId);
            }
        }
    } catch (error) {
        console.error("Transaction Error:", error);
    }
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const PayWithBabelFees = document.getElementById('BabelFees');
    if (PayWithBabelFees) {
        PayWithBabelFees.addEventListener('click', BabelFees);
    }
});`}
              />
            </div>
          </div>

          {/* Step 6: Create HTML Interface */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">6. Create HTML Interface</h3>
            <p className="text-gray-300 mb-4">Create <code className="bg-neutral-700 px-1 py-0.5 rounded">babelfees.html</code>:</p>
            <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
              <UniversalCopyCodeBlock
                code={`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ergo BabelFees</title>
    <script defer src="http://YOUR-DOMAIN-OR-IP/fleetsdk/dist/bundle.js"></script>
</head>
<body>
    <div style="padding: 15px;">
        <div>
            <button id="BabelFees">Self Sign with Babel Fees</button>
        </div>
    </div>
</body>
</html>`}
              />
            </div>
          </div>

          {/* Step 7: Build and Deploy */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">7. Build and Deploy</h3>
            <p className="text-gray-300 mb-4">Compile the TypeScript code:</p>
            <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
              <UniversalCopyCodeBlock
                code={`cd /var/www/html/fleetsdk
npx webpack`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testing */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">Testing</h2>
        <p className="text-gray-300 mb-4">To test your implementation:</p>
        <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-300">
          <li>Create a new Nautilus wallet (0 assets initially)</li>
          <li>Transfer appropriate amount of tokens to the new wallet</li>
          <li>Wait for transaction settlement</li>
          <li>Connect to your test page using the wallet</li>
          <li>Attempt self-signing with Babel fees</li>
        </ol>
      </div>

      {/* Important Security Notes */}
      <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Important Security Notes</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-red-300">1. Change Address Handling:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
              <li>Current implementation sends change to <code className="bg-neutral-700 px-1 py-0.5 rounded">BabelBoxBankAddr</code></li>
              <li>Using <code className="bg-neutral-700 px-1 py-0.5 rounded">defaultAddress</code> is cleaner but requires security evaluation</li>
              <li>Consider potential liquidity draining attacks</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-red-300">2. Transaction Monitoring:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
              <li>Implement proper error handling</li>
              <li>Monitor transaction status</li>
              <li>Handle concurrent spending attempts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Wallet Implementation Considerations */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">Wallet Implementation Considerations</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-cyan-300">Box Discovery and Identification</h3>
            <p className="text-gray-300 mb-4">The hexadecimal representation of the Babel Fees contract is:</p>
            <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
              <UniversalCopyCodeBlock
                code={`100604000e20{tokenId}0400040005000500d803d601e30004d602e4c6a70408d603e4c6a7050595e67201d804d604b2a5e4720100d605b2db63087204730000d606db6308a7d60799c1a7c17204d1968302019683050193c27204c2a7938c720501730193e4c672040408720293e4c672040505720393e4c67204060ec5a796830201929c998c7205029591b1720673028cb272067303000273047203720792720773057202`}
              />
            </div>
            <p className="text-gray-300 mt-4">
              Replace <code className="bg-neutral-700 px-1 py-0.5 rounded">{`{tokenId}`}</code> with the specific token ID and use this as a parameter in the API endpoint: <code className="bg-neutral-700 px-1 py-0.5 rounded">https://api.ergoplatform.com/api/v1/boxes/unspent/byErgoTree/&#123;ErgoTree&#125;</code>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-cyan-300">Implementation Requirements</h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-md font-semibold mb-1 text-cyan-200">1. Fee Calculation and Display</h4>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                  <li>Calculate required Babel fee amount</li>
                  <li>Show clear exchange rates</li>
                  <li>Provide fee comparisons</li>
                  <li>Display transaction status updates</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-1 text-cyan-200">2. Transaction Management</h4>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                  <li>Monitor mempool for concurrent spending</li>
                  <li>Implement chained transaction support</li>
                  <li>Handle transaction failures gracefully</li>
                  <li>Support multiple users spending same box</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-1 text-cyan-200">3. Security Considerations</h4>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
                  <li>Validate all Babel fee box parameters</li>
                  <li>Implement proper change address handling</li>
                  <li>Consider potential liquidity draining attacks</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-cyan-300">Development Tools</h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
              <li>Fleet SDK plugin: <code className="bg-neutral-700 px-1 py-0.5 rounded">@fleet-sdk/babel-fees-plugin</code></li>
              <li>API integration endpoints</li>
              <li>Smart contract templates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reference Implementations */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Reference Implementations</h2>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li><a href="https://github.com/capt-nemo429/nautilus-wallet/pull/82" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Nautilus Wallet implementation</a></li>
          <li><a href="https://github.com/ergoplatform/ergo-appkit/pull/204" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">AppKit implementation</a></li>
          <li><a href="https://fleet-sdk.github.io/docs/plugins/babel-fees" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Fleet SDK Babel fees plugin</a></li>
        </ul>
      </div>

      {/* Additional Resources */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li><a href="https://github.com/ergoplatform/eips/blob/master/eip-0031.md" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0031 Specification</a></li>
          <li><a href="https://fleet-sdk.github.io/docs/plugins/babel-fees" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Fleet SDK Documentation</a></li>
          <li><a href="https://api.ergoplatform.com/api/v1/docs/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Platform API Documentation</a></li>
        </ul>
      </div>
    </div>
  );
} 