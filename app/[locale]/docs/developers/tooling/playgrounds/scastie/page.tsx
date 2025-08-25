"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

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
      className="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-gray-300" />
      )}
    </button>
  );
};

const CodeBlock = ({ children, language = "text" }: { children: string; language?: string }) => (
  <div className="relative bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6">
    <CopyButton text={children} />
    <pre className="p-4 overflow-x-auto">
      <code className={`language-${language} text-sm`}>
        {children}
      </code>
    </pre>
  </div>
);

export default function ScastiePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Ergo Blockchain Development with Scastie (Scala Online Compiler)
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/playgrounds"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Playgrounds
        </Link>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Introduction</h2>

        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            Scastie is an online compiler for the Scala programming language. It's an ideal environment for developers looking to experiment, share, or learn Scala. In this document, we will discuss how to use Scastie for Ergo blockchain development, allowing developers to write, compile, and experiment with Ergo contracts in a fast and easy-to-use online environment.
          </p>
          <p className="mb-4">
            You can see an example{' '}
            <a href="https://scastie.scala-lang.org/greenhat/T2jSEv11QcWpXX1XrcHUdw/31" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              here
            </a>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Setup</h2>

        <div className="text-gray-300 mb-4">
          Before we begin, we need to import the necessary packages to interact with the Ergo Blockchain environment. To do this, enter the following lines at the top of your Scastie workspace:
        </div>

        <CodeBlock language="scala">
{`import org.ergoplatform.compiler.ErgoScalaCompiler._
import org.ergoplatform.playground._`}
        </CodeBlock>

        <div className="text-gray-300 mb-6">
          With these imports, you gain access to the ErgoScalaCompiler, which compiles Ergo smart contracts written in ErgoScript, and the Playground package, which provides convenient classes and methods for Ergo blockchain simulation.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Creating a Blockchain Simulation</h2>

        <div className="text-gray-300 mb-4">
          In order to simulate and test the interactions of your smart contract with the Ergo blockchain, we create a new blockchain simulation instance as follows:
        </div>

        <CodeBlock language="scala">
{`val blockchainSim = newBlockChainSimulation`}
        </CodeBlock>

        <div className="text-gray-300 mb-6">
          <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">newBlockChainSimulation</code> creates a simulated Ergo blockchain environment. This allows for testing and debugging contracts without real-world implications.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Creating a Transaction Builder</h2>

        <div className="text-gray-300 mb-4">
          To create transactions within your simulated blockchain, we need a transaction builder. We instantiate one as follows:
        </div>

        <CodeBlock language="scala">
{`val txBuilder = newTransactionBuilder(blockchainSim.ctx)`}
        </CodeBlock>

        <div className="text-gray-300 mb-6">
          The <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">newTransactionBuilder</code> method creates a new instance of a transaction builder using the current blockchain context. This allows us to create transactions in our simulation.
        </div>

        <div className="text-gray-300 mb-6">
          The Ergo Scala Playground, combined with Scastie's online environment, is a powerful tool for developing and testing Ergo smart contracts. Remember to always test your contracts thoroughly before deploying them on the real Ergo network. Happy coding!
        </div>
      </div>
    </>
  );
} 