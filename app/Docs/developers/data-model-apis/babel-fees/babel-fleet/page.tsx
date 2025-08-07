"use client";

import React from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export default function BabelFleetPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Babel Fees Plugin Documentation
      </h1>

      {/* Back Button */}
      <Link href="/Docs/developers/data-model-apis/babel-fees" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Babel Fees</span>
        </button>
      </Link>

      {/* Introduction */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <p className="text-gray-300">
          The Babel Fees Plugin is a specialized extension for the Fleet SDK designed to simplify the process of using Babel Fees within Ergo transactions. Babel Fees is a mechanism that allows users to pay transaction fees with tokens instead of ERG, particularly beneficial for those with limited or no ERG balances. The plugin automates the complex process of token-to-ERG conversion necessary for utilizing Babel Fees. It integrates seamlessly into the Fleet SDK's transaction framework, enabling developers to build sophisticated transactions that don't require users to have a native ERG balance for transaction fee payments.
        </p>
      </div>

      {/* What are Babel Fees */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-400">What are Babel Fees?</h2>
        <p className="text-gray-300 mb-4">
          At its core, <Link href="/Docs/developers/data-model-apis/babel-fees" className="text-orange-400 hover:underline">Babel Fees</Link> is an Ergo protocol feature that enables users to pay transaction fees using a variety of tokens, rather than being restricted to using ERG. This is done by leveraging smart contracts which act as liquidity sources (called "Babel Boxes") for token-to-ERG swaps. These contracts are set up by others who wish to provide this liquidity to users.
        </p>
        <p className="text-gray-300 mb-4">Babel Fees offer key benefits:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li><strong>Accessibility:</strong> Allows users with limited or no ERG to interact with the Ergo network.</li>
          <li><strong>Flexibility:</strong> Users can choose which tokens they want to use for paying fees.</li>
          <li><strong>Onboarding:</strong> Makes it easier for new users to join the ecosystem.</li>
        </ul>
      </div>

      {/* Key Features */}
      <div className="bg-teal-400/10 border border-teal-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-teal-400">Key Features</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-teal-300">Transaction Extension</h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
              <li>Provides a BabelSwapPlugin that seamlessly integrates with Fleet SDK's TransactionBuilder</li>
              <li>Modifies transaction inputs and outputs to incorporate Babel Fee logic</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-teal-300">Babel Box Validation</h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
              <li>Offers utilities to validate the structure and parameters of Babel Boxes</li>
              <li>Ensures compliance with the Babel Fees protocol</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-teal-300">Contract Script Generation</h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
              <li>Includes functions for building and verifying Babel Fee contract scripts (ErgoTree)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-teal-300">Developer-Friendly</h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
              <li>Supports ESM and CommonJS modules</li>
              <li>Tree-shakeable design for smaller bundle sizes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Installation</h2>
        <p className="text-gray-300 mb-4">
          To install the plugin, use the following commands in your project:
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            code={`npm install @fleet-sdk/babel-fees-plugin`}
          />
        </div>
        <p className="text-gray-300 mt-4 mb-2">The core Fleet SDK is also required:</p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            code={`npm install @fleet-sdk/core`}
          />
        </div>
        <p className="text-gray-300 mt-4">
          <strong>System Requirements:</strong> Node.js version 18 or newer.
        </p>
      </div>

      {/* Usage Example */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Usage Example: Add Babel Fees to a Transaction</h2>
        <p className="text-gray-300 mb-4">
          This example demonstrates how to pay for transaction fees using tokens with BabelSwapPlugin.
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            code={`import { TransactionBuilder } from '@fleet-sdk/core';
import { BabelSwapPlugin } from '@fleet-sdk/babel-fees-plugin';

const tx = new TransactionBuilder(1000000) // Replace with current block height
  .from(inputs) // Provide input boxes for the transaction
  .extend(
    BabelSwapPlugin(babelBox, {
      tokenId: "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04",
      amount: "50" // The plugin converts this token amount into ERG to cover fees
    })
  )
  .payMinFee() // Ensure the transaction includes the required network fee
  .sendChangeTo("9hY16vzHmmfyVBwKeFGHvb2bMFsG94A1u7To1QWtUokACyFVENQ") // Define the address for leftover funds after fee conversion
  .build();

console.log(tx);`}
          />
        </div>
        <div className="mt-4 bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-300">Explanation:</h3>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
            <li>The code initializes a <code className="bg-neutral-700 px-1 py-0.5 rounded">TransactionBuilder</code> with the current block height.</li>
            <li><code className="bg-neutral-700 px-1 py-0.5 rounded">from(inputs)</code> includes input boxes for the transaction.</li>
            <li><code className="bg-neutral-700 px-1 py-0.5 rounded">extend(BabelSwapPlugin(...))</code> adds the BabelSwapPlugin to the transaction. The plugin takes a Babel Box, token ID, and the token amount to convert for ERG fees.</li>
            <li><code className="bg-neutral-700 px-1 py-0.5 rounded">payMinFee()</code> ensures the inclusion of minimum required network fees.</li>
            <li><code className="bg-neutral-700 px-1 py-0.5 rounded">sendChangeTo(...)</code> defines the address for remaining funds after fee conversion.</li>
            <li><code className="bg-neutral-700 px-1 py-0.5 rounded">build()</code> finalizes the transaction object.</li>
          </ul>
          <p className="text-gray-300 mt-2">
            This example showcases how to use Babel Fees with the plugin without any direct ERG input from the user for transaction fees.
          </p>
        </div>
      </div>

      {/* API Reference */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">API Reference</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-300">Plugins</h3>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2 text-orange-200">
                <code className="bg-orange-600/20 px-2 py-1 rounded">BabelSwapPlugin(babelBox: Box&lt;Amount&gt;, token: &#123; tokenId: string, amount: string &#125;): TransactionExtension</code>
              </h4>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li><strong>Description:</strong> Extends the transaction to incorporate Babel Fees by converting the provided token into ERG needed for fees.</li>
                <li><strong>Parameters:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li><code className="bg-neutral-700 px-1 py-0.5 rounded">babelBox</code>: A valid Babel Box containing tokens and ERG for conversion.</li>
                    <li><code className="bg-neutral-700 px-1 py-0.5 rounded">token</code>: An object containing:
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li><code className="bg-neutral-700 px-1 py-0.5 rounded">tokenId</code>: The ID of the token to be used for fee conversion.</li>
                        <li><code className="bg-neutral-700 px-1 py-0.5 rounded">amount</code>: The amount of tokens to use for the fee payment.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><strong>Usage:</strong>
                  <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-3 mt-2 overflow-x-auto">
                    <CodeBlock language="typescript"
                      code={`BabelSwapPlugin(babelBox, {
  tokenId: "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04",
  amount: "50"
});`}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-300">Utility Functions</h3>
            <div className="space-y-4">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-orange-200">
                  <code className="bg-orange-600/20 px-2 py-1 rounded">getTokenPrice(babelBox: Box&lt;Amount&gt;): bigint</code>
                </h4>
                <p className="text-gray-300 mb-2"><strong>Description:</strong> Calculates and returns the price of a single token unit in nanoERG based on a specific Babel Box.</p>
                <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-3 overflow-x-auto">
                  <CodeBlock language="typescript"
                    code={`const price = getTokenPrice(babelBox);
console.log(\`Price per token: \${price}\`);`}
                  />
                </div>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-orange-200">
                  <code className="bg-orange-600/20 px-2 py-1 rounded">buildBabelContract(tokenId: string): string</code>
                </h4>
                <p className="text-gray-300 mb-2"><strong>Description:</strong> Generates the ErgoTree (contract script) for a Babel Box using a specified token ID.</p>
                <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-3 overflow-x-auto">
                  <CodeBlock language="typescript"
                    code={`const contract = buildBabelContract(tokenId);`}
                  />
                </div>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-orange-200">
                  <code className="bg-orange-600/20 px-2 py-1 rounded">isValidBabelBox(box: Box&lt;Amount&gt;): boolean</code>
                </h4>
                <p className="text-gray-300 mb-2"><strong>Description:</strong> Determines if a given box is a valid Babel Box.</p>
                <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-3 overflow-x-auto">
                  <CodeBlock language="typescript"
                    code={`const isValid = isValidBabelBox(myBox);
if (isValid) {
    console.log('This is a valid babel box');
}`}
                  />
                </div>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-orange-200">
                  <code className="bg-orange-600/20 px-2 py-1 rounded">extractTokenIdFromBabelContract(ergoTree: string): string</code>
                </h4>
                <p className="text-gray-300 mb-2"><strong>Description:</strong> Extracts the token ID from a Babel Fee contract script (ErgoTree).</p>
                <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-3 overflow-x-auto">
                  <CodeBlock language="typescript"
                    code={`const tokenId = extractTokenIdFromBabelContract(ergoTree);`}
                  />
                </div>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-orange-200">
                  <code className="bg-orange-600/20 px-2 py-1 rounded">isBabelContractForTokenId(ergoTree: string, tokenId: string): boolean</code>
                </h4>
                <p className="text-gray-300 mb-2"><strong>Description:</strong> Validates if an ErgoTree matches the Babel Fee contract for a specific token ID.</p>
                <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-3 overflow-x-auto">
                  <CodeBlock language="typescript"
                    code={`const isForToken = isBabelContractForTokenId(ergoTree, tokenId);`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box Discovery and Identification */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">Box Discovery and Identification</h2>
        <p className="text-gray-300 mb-4">
          A Babel Box is a container that holds a specified token and associated ERG. This combination allows the plugin to determine the conversion rate between tokens and ERG. The plugin references the Babel Box when it performs token-to-ERG conversions.
        </p>
        <p className="text-gray-300 mb-4">The hexadecimal representation of the Babel Fees contract:</p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            code={`100604000e20{tokenId}0400040005000500d803d601e30004d602e4c6a70408d603e4c6a7050595e67201d804d604b2a5e4720100d605b2db63087204730000d606db6308a7d60799c1a7c17204d1968302019683050193c27204c2a7938c720501730193e4c672040408720293e4c672040505720393e4c67204060ec5a796830201929c998c7205029591b1720673028cb272067303000273047203720792720773057202`}
          />
        </div>
        <p className="text-gray-300 mt-4 mb-4">
          Replace <code className="bg-neutral-700 px-1 py-0.5 rounded">{`{tokenId}`}</code> with the target token ID. Use the resulting ErgoTree to discover Babel Boxes through the Ergo platform API:
        </p>
        <p className="text-gray-300 mb-4">
          <code className="bg-neutral-700 px-2 py-1 rounded">https://api.ergoplatform.com/api/v1/boxes/unspent/byErgoTree/&#123;ErgoTree&#125;</code>
        </p>
        <p className="text-gray-300 mb-4"><strong>Example of Fetching a Babel Box:</strong></p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            code={`const fetchBabelBox = async (ergoTree: string) => {
  try {
    const response = await fetch(\`https://api.ergoplatform.com/api/v1/boxes/unspent/byErgoTree/\${ergoTree}\`);
    const json = await response.json();
    return json.items[0]; // Returns the first Babel Box found
  } catch (error) {
    console.error("Error fetching Babel Box:", error);
    return null;
  }
};`}
          />
        </div>
        <p className="text-gray-300 mt-4">
          This snippet uses the Ergo API to locate and return a Babel Box. Developers supply an ErgoTree string, and the function queries the blockchain to find a box that matches. The returned Babel Box can then serve as the liquidity source for token-to-ERG conversions in transactions.
        </p>
      </div>

      {/* Step-by-Step */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Step-by-Step</h2>
        <p className="text-gray-300">
          For a detailed guide on how to mint a token, set up a Babel Box, and utilize the plugin within a web application, refer to <a href="http://147.182.244.219/ergobabelfees.html" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">this guide</a>.
        </p>
      </div>

      {/* Development Insights */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Development Insights</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-indigo-300">Key Updates from CHANGELOG.md</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><strong>Validation Enhancements:</strong> Introduced type validation for Babel Box fields (<code className="bg-neutral-700 px-1 py-0.5 rounded">R4</code>, <code className="bg-neutral-700 px-1 py-0.5 rounded">R5</code>) in version <code className="bg-neutral-700 px-1 py-0.5 rounded">0.1.16</code>. This ensures that boxes meet strict requirements.</li>
              <li><strong>Module Export Fixes:</strong> Adjusted the ESM and CommonJS exports in version <code className="bg-neutral-700 px-1 py-0.5 rounded">0.1.10</code> to prevent issues with package imports.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-indigo-300">Package Metadata</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><strong>Version:</strong> <code className="bg-neutral-700 px-1 py-0.5 rounded">0.1.18</code></li>
              <li><strong>Dependencies:</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li><code className="bg-neutral-700 px-1 py-0.5 rounded">@fleet-sdk/core</code></li>
                  <li><code className="bg-neutral-700 px-1 py-0.5 rounded">@fleet-sdk/common</code></li>
                  <li><code className="bg-neutral-700 px-1 py-0.5 rounded">@fleet-sdk/serializer</code></li>
                </ul>
              </li>
              <li><strong>Environment:</strong> Requires Node.js 18 or newer.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reference Implementations */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Reference Implementations</h2>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li><a href="http://147.182.244.219/ergobabelfees.html" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Implementing Ergo Babel Fees with Fleet-SDK - May 17, 2024</a></li>
          <li><a href="https://github.com/capt-nemo429/nautilus-wallet/pull/82" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Nautilus Wallet implementation</a></li>
          <li><a href="https://github.com/ergoplatform/ergo-appkit/pull/204" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">AppKit implementation</a></li>
          <li><a href="https://fleet-sdk.github.io/docs/plugins/babel-fees" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Fleet SDK Babel fees plugin</a></li>
        </ul>
      </div>

      {/* Additional Resources */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li><strong>Fleet SDK Documentation:</strong> <a href="https://fleet-sdk.github.io/docs/plugins/babel-fees" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Fleet SDK Babel Fees Plugin</a></li>
          <li><strong>Ergo Platform API:</strong> <a href="https://api.ergoplatform.com/api/v1/docs/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo API Documentation</a></li>
          <li><strong>EIP-0031 Specification:</strong> <a href="https://github.com/ergoplatform/eips/blob/master/eip-0031.md" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Babel Fees EIP</a></li>
        </ul>
      </div>
    </div>
  );
} 