"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Server } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors"
      title="Copy code"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
    </button>
  );
};

const CodeBlock = ({ children, language = "javascript" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function SigningBackendPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Server className="w-10 h-10 text-orange-400" />
        Signing Transactions Using a Backend Wallet
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages/wallet-interaction"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Wallet Interaction
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-gray-300 mb-6 max-w-2xl">
          There are various scenarios where signing a transaction on the backend is necessary. This documentation provides instructions on how to accomplish this task using Ergo. We will outline two common use cases: NFT vending machine and off-chain bots that withdraw funds from contracts.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Use Cases</h2>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">NFT Vending Machine</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          In this use case, you may need to mint a token and send it to a user when their address is funded. To achieve this, it is recommended to define a wallet on your backend that can sign the transactions. The following code snippet demonstrates how this can be done:
        </div>

        <CodeBlock language="javascript">{`import SignerWallet from '../src/services/WalletFromMnemonics';

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

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Off-Chain Bot</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          In this use case, an off-chain bot is responsible for withdrawing funds from a contract. Similar to the previous use case, you will need a backend wallet to sign the transactions. The code snippet below illustrates how to achieve this:
        </div>

        <CodeBlock language="javascript">{`import SignerWallet from '../src/services/WalletFromMnemonics';

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

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Additional References</h2>
        <ol className="list-decimal pl-6 text-gray-300 mb-8 space-y-2">
          <li>
            <strong>Sigma-rust</strong> - For more details on Ergo's sigma-rust library, please refer to the{' '}
            <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              sigma-rust repository
            </a>.
          </li>
          <li>
            <strong>Sigma-rust Discord</strong> - Join the{' '}
            <a href="https://discord.com/channels/668903786361651200/729692906209673257" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Sigma-rust Discord channel
            </a>{' '}
            to engage in discussions and receive support related to Ergo's sigma-rust library.
          </li>
          <li>
            <strong>dAppstep Repo</strong> - Visit the{' '}
            <a href="https://github.com/nirvanush/dappstep-play/blob/main/src/services/WalletFromMnemonics.ts" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              dAppstep repository
            </a>{' '}
            for further information on using the backend wallet for transaction signing.
          </li>
        </ol>
      </div>
    </>
  );
} 