"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Lock } from "lucide-react";

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

export default function NoOneCanSpendPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Lock className="w-10 h-10 text-red-400" />
        Unspendable Scripts (No-one-Can-Spend)
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages/examples"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Examples
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-gray-300 mb-6 max-w-3xl">
          On the other end of the spectrum from{' '}
          <Link href="/Docs/developers/ergoscript-languages/examples/anyone-can-spend" className="text-cyan-400 hover:underline">
            anyone-can-spend.md
          </Link>, we have scripts that always evaluate to <code className="bg-neutral-800 px-1 rounded">false</code>, making the associated boxes permanently unspendable.
        </div>

        <div className="text-gray-300 mb-6">
          Here's an example of such a script:
        </div>

        <CodeBlock>{`true && false`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-3xl">
          This script maps to the{' '}
          <a href="https://wallet.plutomonkey.com/p2s/?source=dHJ1ZSAmJiBmYWxzZQ==" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            address
          </a>{' '}
          <code className="bg-neutral-800 px-1 rounded">2fp75qcgMrTNR2vuLhiJYQtKb1RoSw5H1U7tMKestmzrA2SzfYM1</code>. Any funds sent to this address will be permanently locked and unspendable.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          However, in Ergo's system, such boxes may eventually be removed from the UTXO set through a process called "storage rent" or "garbage collection." This mechanism prevents the blockchain from being cluttered with unspendable boxes.
        </div>
      </div>
    </>
  );
} 