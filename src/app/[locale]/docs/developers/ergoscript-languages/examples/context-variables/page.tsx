"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Settings } from "lucide-react";

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

const CodeBlock = ({ children, language = "scala" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function ContextVariablesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Settings className="w-10 h-10 text-cyan-400" />
        Leveraging Context Variables in ErgoScript
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages/examples"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Examples
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-gray-300 mb-6 max-w-3xl">
          Context-dependent predicates add an extra layer of flexibility to ErgoScript contracts. Consider the following script that can be spent by anyone, but only if the current block height is less than 4,000,000:
        </div>

        <CodeBlock>{`HEIGHT < 4000000`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-3xl">
          This script maps to the{' '}
          <a href="https://wallet.plutomonkey.com/p2s/?source=SEVJR0hUID4gNDAwMDAwMA==" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            address
          </a>{' '}
          <code className="bg-neutral-800 px-1 rounded">2Z4YBkDsDvQj8BX7xiySFewjitqp2ge9c99jfes2whbtKitZTxdBYqbrVZUvZvKv6aqn9by4kp3LE1c26LCyosFnVnki6rKyTNwYX</code>.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          Beyond <code className="bg-neutral-800 px-1 rounded">HEIGHT</code>, there are other context variables available such as <code className="bg-neutral-800 px-1 rounded">OUTPUTS</code>, <code className="bg-neutral-800 px-1 rounded">INPUTS</code>, and <code className="bg-neutral-800 px-1 rounded">minerPubKey</code>.
        </div>
      </div>
    </>
  );
} 