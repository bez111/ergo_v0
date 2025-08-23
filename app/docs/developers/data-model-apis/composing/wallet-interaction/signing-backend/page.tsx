"use client";

import React from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function SigningBackendPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Signing Transactions Using a Backend Wallet
      </h1>
      
      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/docs/developers/data-model-apis/composing/wallet-interaction"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back to Wallet Interaction
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300">
            There are various scenarios where signing a transaction on the backend is necessary. This documentation provides instructions on how to accomplish this task using Ergo. We will outline two common use cases: NFT vending machine and off-chain bots that withdraw funds from contracts.
          </p>
        </div>

        <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-green-300">NFT Vending Machine</h3>
          <p className="text-gray-300 mb-4">
            In this use case, you may need to mint a token and send it to a user when their address is funded. To achieve this, it is recommended to define a wallet on your backend that can sign the transactions. The following code snippet demonstrates how this can be done:
          </p>
          
          <CodeBlock language="typescript">{`import SignerWallet from '../src/services/WalletFromMnemonics';

// Example transaction
const unsignedTx = {
  inputs: [...], 
  outputs: [...],
  ...
}

// It is crucial to avoid storing the seed phrase in your code; always use a secret manager.
const wallet = await new SignerWallet().fromMnemonics('add your 12-word seed phrase here');

const signedTx = wallet.sign(unsignedTx);

// The signed transaction can now be submitted to the mempool.`}</CodeBlock>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-green-300">Off-Chain Bot</h3>
          <p className="text-gray-300 mb-4">
            In this use case, an off-chain bot is responsible for withdrawing funds from a contract. Similar to the previous use case, you will need a backend wallet to sign the transactions. The code snippet below illustrates how to achieve this:
          </p>
          
          <CodeBlock language="typescript">{`import SignerWallet from '../src/services/WalletFromMnemonics';

// Example transaction
const unsignedTx = {
  inputs: [...], 
  outputs: [...],
  ...
}

// It is crucial to avoid storing the seed phrase in your code; always use a secret manager.
const wallet = await new SignerWallet().fromMnemonics('add your 12-word seed phrase here');

const signedTx = wallet.sign(unsignedTx);

// The signed transaction can now be submitted to the mempool.`}</CodeBlock>
        </div>

        <div className="bg-teal-400/10 border border-teal-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Additional References</h2>
          <ol className="list-decimal list-inside ml-4 space-y-3 text-gray-300">
            <li>
              <b>Sigma-rust</b> - For more details on Ergo's sigma-rust library, please refer to the <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">sigma-rust repository</a>.
            </li>
            <li>
              <b>Sigma-rust Discord</b> - Join the <a href="https://discord.com/channels/668903786361651200/729692906209673257" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Sigma-rust Discord channel</a> to engage in discussions and receive support related to Ergo's sigma-rust library.
            </li>
            <li>
              <b>dAppstep Repo</b> - Visit the <a href="https://github.com/nirvanush/dappstep-play/blob/main/src/services/WalletFromMnemonics.ts" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">dAppstep repository</a> for further information on using the backend wallet for transaction signing.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
} 