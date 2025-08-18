"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function CoreConceptsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Core Concepts and Key Principles of ErgoScript
      </h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">ErgoScript and the UTXO Model</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          <ul className="list-disc pl-6 space-y-2">
            <li>Ergo is a blockchain platform that operates on the UTXO (Unspent Transaction Output) model and employs a Proof-of-Work consensus mechanism.</li>
            <li>Ergo introduces an <i>extended-UTXO model</i> that enables the execution of intricate financial contracts, akin to those supported by Ethereum's account-based model.</li>
            <li>ErgoScript, being aligned with Ergo's UTXO model, incorporates numerous UTXO-specific constructs such as <code className="bg-neutral-800 px-1 rounded">Box</code>, <code className="bg-neutral-800 px-1 rounded">INPUTS</code>, and <code className="bg-neutral-800 px-1 rounded">OUTPUTS</code>. A comprehensive list of these constructs can be found in the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">LangSpec</a>.</li>
            <li>A <Link href="/Docs/developers/box" className="text-cyan-400 hover:underline">Box</Link>, essentially a UTXO, can accommodate up to ten <Link href="/Docs/developers/registers" className="text-cyan-400 hover:underline">registers</Link> for data storage. Analogous to Bitcoin, an Ergo transaction consumes one or more existing boxes (represented by the <code className="bg-neutral-800 px-1 rounded">INPUTS</code> array) and produces one or more new boxes (represented by the <code className="bg-neutral-800 px-1 rounded">OUTPUTS</code> array).</li>
            <li>ErgoScript is not Turing complete, but it is possible to build Turing-complete applications, as demonstrated in <a href="https://arxiv.org/pdf/1806.10116v1.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">this peer-reviewed paper</a>.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">ErgoScript Syntax</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          <ul className="list-disc pl-6 space-y-2">
            <li>ErgoScript's syntax is a subset of Scala's. However, proficiency in Scala is not a prerequisite for learning ErgoScript. The Scala elements used in ErgoScript are minimal and straightforward, such as <code className="bg-neutral-800 px-1 rounded">val</code>.</li>
            <li>Unlike Java or Python, both Scala and ErgoScript access arrays using round parentheses. Hence, <code className="bg-neutral-800 px-1 rounded">OUTPUTS(0)</code> denotes the first element of the <code className="bg-neutral-800 px-1 rounded">OUTPUTS</code> array.</li>
            <li>In contrast to Scala, ErgoScript does not support the <code className="bg-neutral-800 px-1 rounded">var</code> keyword; all defined elements are immutable.</li>
            <li>ErgoScript, like Scala, supports functional programming, which simplifies interactions with collections using concepts such as <code className="bg-neutral-800 px-1 rounded">foreach</code>, <code className="bg-neutral-800 px-1 rounded">exists</code>, <code className="bg-neutral-800 px-1 rounded">fold</code>, etc.</li>
            <li>An ErgoScript program, akin to ErgoTree, consists of a sequence of boolean predicates connected using <code className="bg-neutral-800 px-1 rounded">&&</code> (AND) and <code className="bg-neutral-800 px-1 rounded">||</code> (OR).</li>
            <li>ErgoScript provides cryptographic operations via <code className="bg-neutral-800 px-1 rounded">BigInt</code> and <code className="bg-neutral-800 px-1 rounded">GroupElement</code> (Elliptic curve point) types, along with associated operations like addition, multiplication, and exponentiation. It's important to note that <code className="bg-neutral-800 px-1 rounded">BigInt</code> operations in ErgoScript are performed modulo <code className="bg-neutral-800 px-1 rounded">2^256</code>, unlike in Scala, hence overflow needs to be carefully managed.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Spending Process</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          An interacting party willing to spend the coin first constructs a <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/sigmastate/interpreter/ProverInterpreter.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">prover</a> with a set of secrets it knows, and then the prover is executed in two steps:
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
          <div className="text-cyan-400 font-semibold mb-2">Two-Step Spending Process:</div>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-200 mb-1">1. Reduction:</h4>
              <p className="text-gray-300 text-sm">The prover uses the ErgoTree interpreter, which deterministically reduces the ErgoTree proposition to a compound <i>cryptographic statement</i> (aka sigma proposition, Σ-protocol) by evaluating ErgoTree over the known shared context (state of the blockchain system and a spending transaction). This step produces a value of the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/sigmastate/Values.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">SigmaBoolean</a> type.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-200 mb-1">2. Signing:</h4>
              <p className="text-gray-300 text-sm">The prover turns the obtained (and possibly complex) Σ-proposition into a signature with the help of a <a href="https://en.wikipedia.org/wiki/Fiat-Shamir_heuristic" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Fiat-Shamir transformation</a>. This step produces a <i>proof</i> that the party knows the secrets, such that the knowledge can be verified before the spending transaction is added to the blockchain.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Verification Process</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          To allow valid coin spending, a <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/sigmastate/interpreter/Interpreter.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">verifier</a> runs the ErgoTree interpreter with the following three inputs:
        </div>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>A guarding proposition given by an ErgoTree</li>
          <li>The blockchain <b>context</b> of the transaction being verified</li>
          <li>A <b>proof</b> (aka transaction signature) generated by a <b>prover</b></li>
        </ul>

        <div className="text-gray-300 mb-6 max-w-2xl">
          The verifier is executed as part of transaction validation for each input and proceeds in three steps:
        </div>

        <div className="space-y-4">
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
            <h4 className="font-semibold text-cyan-400 mb-2">1. Reduction</h4>
            <p className="text-gray-300 text-sm">Same as the prover, the verifier uses the ErgoTree interpreter and deterministically produces a value of the <Link href="/Docs/developers/ergoscript-languages/sigmaboolean" className="text-cyan-400 hover:underline">SigmaBoolean</Link> type. However, this step must finish the evaluation for any possible inputs within a concrete fixed time limit (aka maximum cost), which the interpreter checks.</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
            <h4 className="font-semibold text-cyan-400 mb-2">2. Cost Estimation</h4>
            <p className="text-gray-300 text-sm">The verifier estimates the complexity of the cryptographic Sigma proposition (based on the size and the concrete nodes of the SigmaBoolean tree). The spending fails if the estimated cost exceeds the maximum limit.</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
            <h4 className="font-semibold text-cyan-400 mb-2">3. Signature Verification</h4>
            <p className="text-gray-300 text-sm">The signature checker takes:</p>
            <ol className="list-decimal pl-6 text-gray-300 text-sm mt-2 space-y-1">
              <li>The <i>proof</i></li>
              <li>The <i>SigmaBoolean</i> (aka <a href="https://en.wikipedia.org/wiki/Proof_of_knowledge#Sigma_protocols" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">sigma protocol</a> proposition)</li>
              <li>The <i>signed message</i> (e.g., transaction bytes)</li>
            </ol>
            <p className="text-gray-300 text-sm mt-2">The checker then verifies the proof, which means it verifies that all the necessary secrets were known and used to construct the proof (i.e., sign the transaction).</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
          <li>
            <Link href="/Docs/developers/ergoscript-languages/sigmaboolean" className="text-cyan-400 hover:underline">
              SigmaBoolean
            </Link>
          </li>
          <li>
            <Link href="/Docs/developers/ergoscript-languages/simple-syntax" className="text-cyan-400 hover:underline">
              Simple Syntax
            </Link>
          </li>
          <li>
            <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-cyan-400 hover:underline">
              The Blockchain Context
            </Link>
          </li>
          <li>
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              ErgoScript Language Specification
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/pdf/1806.10116v1.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Peer-Reviewed Paper on Turing-Complete Applications
            </a>
          </li>
        </ul>
      </div>
    </>
  );
} 