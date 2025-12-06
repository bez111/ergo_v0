"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Unlock } from "lucide-react";

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

export default function AnyoneCanSpendPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Unlock className="w-10 h-10 text-green-400" />
        Anyone-Can-Spend Scripts
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
          ErgoScript allows for the creation of programs that always evaluate to <code className="bg-neutral-800 px-1 rounded">true</code>, making any funds sent to the corresponding address spendable by anyone.
        </div>

        <div className="text-gray-300 mb-6">
          Here's an example of such a script:
        </div>

        <CodeBlock>{`true && (false || true)`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-3xl">
          This script maps to the{' '}
          <a href="https://wallet.plutomonkey.com/p2s/?source=dHJ1ZSAmJiAoZmFsc2UgfHwgdHJ1ZSk=" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            address
          </a>{' '}
          <code className="bg-neutral-800 px-1 rounded">88dhgzEuTXaSSg82y2gr1g6CbQw9oaRbKJwSyW7vLo3PKa6k8LjqKVBVEjHZmnLVp</code>. However, it's important to use caution when working with such scripts for production purposes.
        </div>
      </div>
    </>
  );
} 