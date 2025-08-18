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

export default function ErgoScalaPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        ErgoScala compiler
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/compilers"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Compilers
        </Link>
      </div>

      <div className="space-y-8">
        <div className="text-gray-300">
          <p className="mb-6">
            Compiler for Ergo smart contracts written in ErgoScala (a subset of Scala). Compilation from formally verified smart contracts from{' '}
            <a href="https://github.com/ergoplatform/ergo-contracts" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              ergo-contracts
            </a>{' '}
            is supported.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Usage</h2>

        <CodeBlock language="scala">
{`libraryDependencies += "org.ergoplatform" %% "ergo-scala-compiler" % "0.0.0-32-aaadbee1-SNAPSHOT",`}
        </CodeBlock>

        <div className="text-gray-300">
          <p className="mb-6">
            Compilation results in producing <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">ErgoContract</code> that provides:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">ErgoTree</code> instance, Ergo's IR, which is used to define logical propositions protecting boxes (a generalization of coins) in the Ergo blockchain. Serialized ErgoTree expressions are written into UTXO boxes and then evaluated by the transaction verifier;
            </li>
            <li>
              Scala anonymous function that when called with a <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">Context</code> parameter evaluates(reduces) the contract code to a sigma property. It allows us to "call" the contract code without loading up the interpreter.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Example</h2>

        <h3 className="text-xl font-bold text-orange-400 mb-4">Contract code in <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">contract</code> call</h3>

        <div className="text-gray-300 mb-4">
          Ergo contract code can be compiled with <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">ErgoScalaCompiler.contract</code> call:
        </div>

        <CodeBlock language="scala">
{`import org.ergoplatform.compiler.ErgoScalaCompiler

// Define a function that takes token id, amount, and buyer's public key as input parameters and returns an ErgoContract.
def buyerContract(
  tokenId: Coll[Byte],
  tokenAmount: Long,
  buyerPk: SigmaProp
): ErgoContract =
  ErgoScalaCompiler.contract { // Compile the contract using the ErgoScalaCompiler library.
    // If the buyer's public key is valid, the contract can be spent without any additional conditions.
    buyerPk || {
      // Otherwise, some additional conditions must be met.
      // Check if there are any outputs and the first output has a non-empty R4 register.
      (OUTPUTS.nonEmpty && OUTPUTS(0).R4[Coll[Byte]].isDefined) && {
        // Get the tokens of the first output and verify that the specified token id and amount are correct.
        val tokens = OUTPUTS(0).tokens
        val tokenDataCorrect = tokens.nonEmpty &&
          tokens(0)._1 == tokenId &&
          tokens(0)._2 >= tokenAmount

        // Check if the first output's R4 register matches the id of the current box (SELF) and its proposition bytes matches the buyer's public key.
        val knownId = OUTPUTS(0).R4[Coll[Byte]].get == SELF.id
        tokenDataCorrect && OUTPUTS(0).propositionBytes == buyerPk.propBytes && knownId
      }
    }
  }`}
        </CodeBlock>

        <h3 className="text-xl font-bold text-orange-400 mb-4">Verified contract code in a separate method call</h3>

        <div className="text-gray-300 mb-4">
          For verified contracts, the compilation is done differently. Formal verification is done using Stainless in{' '}
          <a href="https://github.com/ergoplatform/ergo-contracts" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            ergo-contracts
          </a>. Verified contract code can be compiled by providing the method call where contract code resides.
        </div>

        <CodeBlock language="scala">
{`/**
 * This function creates a new instance of the buyer contract, compiled with the provided parameters.
 * @param tokenId - the id of the token to be exchanged
 * @param tokenAmount - the amount of tokens to be exchanged
 * @param pkA - the public key of the buyer
 * @return a compiled instance of the buyer contract
 */
def buyerContractInstance(tokenId: Coll[Byte], tokenAmount: Long, pkA: SigmaProp): ErgoContract =
  ErgoContractCompiler.compile { context: Context =>
    buyer(context, tokenId, tokenAmount, pkA)
  }`}
        </CodeBlock>

        <div className="text-gray-300 mb-4">
          see{' '}
          <a href="https://github.com/ergoplatform/ergo-contracts/blob/63e494c9d33af25e23efea88d27f31742ad31f64/verified-contracts/src/main/scala/org/ergoplatform/contracts/AssetsAtomicExchange.scala#L150-L157" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            sources
          </a>
        </div>

        <div className="text-gray-300 mb-4">
          where <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">buyer</code> method holds verified smart contract:
        </div>

        <CodeBlock language="scala">
{`/**
  * Function that returns a SigmaProp indicating whether a buyer can spend the funds locked in a box.
  * A buyer can spend the funds if either the buyerPk is provided, or if the OUTPUTS have a valid tokenData
  * for the given tokenId and the box id is known.
  *
  * @param ctx The context where the function is being evaluated.
  * @param tokenId The Coll[Byte] representing the token id.
  * @param tokenAmount The amount of tokens needed.
  * @param buyerPk The SigmaProp of the buyer.
  * @return A SigmaProp indicating whether a buyer can spend the funds locked in a box.
  */
def buyer(ctx: Context, tokenId: Coll[Byte], tokenAmount: Long, buyerPk: SigmaProp): SigmaProp = {
  import ctx._
  buyerPk || {
    (OUTPUTS.nonEmpty && OUTPUTS(0).R4[Coll[Byte]].isDefined) && {
      val tokens = OUTPUTS(0).tokens
      val tokenDataCorrect = tokens.nonEmpty &&
        tokens(0)._1 == tokenId &&
        tokens(0)._2 >= tokenAmount

      val knownId = OUTPUTS(0).R4[Coll[Byte]].get == SELF.id
      tokenDataCorrect &&
      OUTPUTS(0).propositionBytes == buyerPk.propBytes &&
      knownId
    }
  }
}`}
        </CodeBlock>

        <div className="text-gray-300 mb-4">
          see{' '}
          <a href="https://github.com/ergoplatform/ergo-contracts/blob/63e494c9d33af25e23efea88d27f31742ad31f64/verified-contracts/src/main/scala/org/ergoplatform/contracts/AssetsAtomicExchange.scala#L24-L44" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            sources
          </a>
        </div>
      </div>
    </>
  );
} 