"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Copy, Check } from "lucide-react";

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

export default function SigmastateInterpreterPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Sigmastate Interpreter
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/compilers"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Compilers
        </Link>
      </div>

      <div className="space-y-8">
        <div className="text-gray-300">
          <p className="mb-6">
            The{' '}
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              sigmastate-interpreter
            </a>{' '}
            repository contains the core implementations of the ErgoScript compiler and ErgoTree Interpreter. These tools are part of a broader framework that supports a family of Sigma-protocol based authentication languages, collectively known as the{' '}
            <Link href="/docs/developers/ergoscript-languages/sigma-language" className="text-cyan-400 hover:underline">
              <em>Sigma Language</em>
            </Link>.
          </p>

          <p className="mb-6">
            This library is integral to the operation of the{' '}
            <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Ergo Node
            </a>{' '}
            and the{' '}
            <a href="https://github.com/ergoplatform/ergo/tree/master/ergo-wallet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              ergo-wallet
            </a>. It serves as the backbone for processing and validating ErgoScript contracts, ensuring that transactions comply with the defined cryptographic conditions.
          </p>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-cyan-400">DeepWiki Documentation</h3>
                <div className="mt-2 text-sm text-gray-300">
                  <p>
                    For an alternative and potentially more detailed documentation source generated from the repository, explore the{' '}
                    <a href="https://deepwiki.com/ergoplatform/sigmastate-interpreter/1-overview" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                      Sigmastate Interpreter on DeepWiki
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-4">Key Components</h3>
        <div className="text-gray-300 mb-6">
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>ErgoScript Compiler</strong>:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  The{' '}
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/sigmastate/src/main/scala/sigmastate/lang/SigmaCompiler.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    ErgoScript Compiler
                  </a>{' '}
                  translates high-level ErgoScript code into low-level ErgoTree bytecode. This bytecode can then be stored in UTXO coins to define spending conditions, akin to how scripts function in Bitcoin but with enhanced flexibility and capabilities.
                </li>
              </ul>
            </li>
            <li>
              <strong>ErgoTree Interpreter</strong>:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  The{' '}
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/sigmastate/src/main/scala/sigmastate/interpreter/Interpreter.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    ErgoTree Interpreter
                  </a>{' '}
                  executes the ErgoTree bytecode within a specific blockchain context. It evaluates the scripts against the current state of the blockchain and the spending transaction, ultimately producing a boolean outcome that determines the validity of the transaction.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-4">Sigma Language Background</h3>
        <div className="text-gray-300 mb-6">
          <p>
            In Bitcoin, each coin is secured by a script written in a stack-based language, which is evaluated by the Bitcoin Script interpreter. ErgoScript and the ErgoTree interpreter generalize this concept into an "authentication language" that can express complex spending conditions using Sigma protocols. These protocols allow for sophisticated cryptographic proofs, enabling the creation of contracts that can require multiple signatures, threshold signatures, or even conditions based on external data.
          </p>
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-4">Prover and Verifier Workflow</h3>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">The Sigmastate Interpreter involves two primary components in transaction processing:</p>
          
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Prover</strong>:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  The Prover uses the ErgoTree interpreter to reduce a high-level spending condition (ErgoTree) into a Sigma protocol proposition (SigmaBoolean). This proposition is then converted into a cryptographic proof using the{' '}
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/sigma-dsl.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    Fiat-Shamir transformation
                  </a>, ensuring that the transaction can only be signed by parties possessing the necessary secrets.
                </li>
              </ul>
            </li>
            <li>
              <strong>Verifier</strong>:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  The Verifier also uses the ErgoTree interpreter to independently reduce the ErgoTree into a SigmaBoolean. It then checks the provided proof against this proposition. This process ensures that the transaction is valid and the necessary conditions for spending are met.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-4">Integration and Usage</h3>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            While the sigmastate-interpreter library provides the low-level primitives necessary for processing ErgoScript contracts, developers typically interact with these components through higher-level tools.
          </p>
          
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>AppKit</strong>:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  A more accessible alternative for JVM-based development (Java/Scala/Kotlin) is{' '}
                  <Link href="/docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">
                    AppKit
                  </Link>, a thin wrapper around the core components provided by the ErgoScript interpreter and Ergo protocol implementations.
                </li>
              </ul>
            </li>
            <li>
              <strong>SigmaJS</strong>:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  The library is cross-compiled to JavaScript using Scala.js, allowing developers to use these components directly in web applications via the{' '}
                  <a href="https://www.npmjs.com/package/sigmastate-js" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    SigmaJS NPM package
                  </a>.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-4">Getting Started</h3>
        <div className="text-gray-300 mb-6">
          <p className="mb-4">To start using the sigmastate-interpreter in your Scala project, add the following dependency to your SBT configuration:</p>
          
          <CodeBlock language="scala">
{`libraryDependencies += "org.scorexfoundation" %% "sigma-state" % "5.0.14"`}
          </CodeBlock>

          <p>
            For more advanced usage and direct interaction with the ErgoTree and Sigma protocols, refer to the detailed{' '}
            <Link href="/docs/developers/ergoscript-languages/sigma-language" className="text-cyan-400 hover:underline">
              Sigma Language documentation
            </Link>.
          </p>
        </div>
      </div>
    </>
  );
} 