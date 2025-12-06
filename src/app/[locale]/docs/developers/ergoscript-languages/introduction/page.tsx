"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { ArrowLeft, Info, ExternalLink } from "lucide-react";

export default function ErgoTreeIntroductionPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Info className="w-10 h-10 text-cyan-400" />
        ErgoTree Introduction
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>

      <div className="text-lg text-gray-300 mb-8 space-y-6">
        <p>
          This section describes the <strong>typed abstract syntax</strong> of the ErgoTree language, which is used to define logical propositions protecting <Link href="/docs/developers/ergoscript-languages/accessing-boxes" className="text-cyan-400 hover:underline">boxes</Link> in the Ergo blockchain.
        </p>

        <p>
          Serialized ErgoTree expressions are written into <em>UTXO</em> boxes and then evaluated by the transaction verifier.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
          <p className="text-blue-200">
            <strong>Note:</strong> Most Ergo users do not use ErgoTree directly, as they typically develop contracts in a higher-level language, such as <Link href="/docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">ErgoScript</Link>, which is then compiled into ErgoTree.
          </p>
        </div>

        <p>
          The reference implementation of ErgoTree uses Scala; however, alternative implementations can be written in other languages. This documentation provides a language-neutral specification of ErgoTree for developers creating alternative ErgoTree implementations.
        </p>

        <p>
          The design space of programming languages is very broad, ranging from general-purpose languages like C, Java, and Python to specialized languages like SQL, HTML, CSS, etc.
        </p>

        <p>
          The language for writing contracts on the blockchain must have several properties to serve as a robust platform for contractual money:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">1. Deterministic Execution</h3>
            <p className="mb-3">
              First, <strong>the language and the contract execution environment must be deterministic</strong>. Once created and stored in the blockchain, a smart contract should always behave predictably and deterministically; it should depend only on a well-defined data context.
            </p>
            <p className="ml-6 text-gray-400">
              As long as the data context does not change, any execution of the contract should return the same value every time it is executed on any compliant execution platform or language implementation. General-purpose programming languages are typically not deterministic because they provide non-deterministic operations; ErgoTree avoids these.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">2. Spam Resistance</h3>
            <p className="mb-3">
              Second, <strong>the language should facilitate spam-resistance</strong>, i.e., defending against attacks where malicious contracts could overload network nodes and bring down the blockchain (<a href="https://bitslog.wordpress.com/2017/01/08/a-bitcoin-transaction-that-takes-5-hours-to-verify/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ler17 <ExternalLink className="w-4 h-4 inline ml-1" /></a>).
            </p>
            <p className="ml-6 text-gray-400">
              To fulfill this goal, the ErgoTree transaction model supports predictable cost estimation and the fast calculation of contract execution costs, ensuring the evaluation cost of any given transaction remains within acceptable bounds. In a general (Turing-complete) case, such cost prediction is not possible and requires special mechanisms such as Gas (<a href="http://gavwood.com/Paper.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Woo14 <ExternalLink className="w-4 h-4 inline ml-1" /></a>). Gas limits on transactions indeed protect the network from spam attacks, but at the expense of users, who need to be careful to specify a gas limit large enough for the transaction to complete; otherwise, the gas used for the failed transaction will be kept by the miners for their work, and the user will not get it back.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">3. Simple Yet Expressive</h3>
            <p className="mb-3">
              Third, <strong>the contract's language should be simple yet expressive enough</strong> to implement a wide range of practical applications efficiently.
            </p>
            <p className="ml-6 text-gray-400">
              For example, ErgoTree is not Turing-complete, but it is co-designed with the capabilities of the Ergo blockchain platform itself, making the whole system Turing-complete as demonstrated in (<a href="https://arxiv.org/abs/1806.10116" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">CKM18 <ExternalLink className="w-4 h-4 inline ml-1" /></a>). The simplicity of the language enables spam resistance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">4. Domain-Specific Design</h3>
            <p className="mb-3">
              Fourth, <strong>simplicity and expressivity are often characteristics of domain-specific languages</strong> (<a href="https://books.google.de/books?hl=en&lr=&id=ri1muolw_YwC&oi=fnd&pg=PT29&dq=Martin+Fowler.+Domain-Specific+Languages.+01+2010.&ots=7Y9bdX4mdj&sig=UGF-xHd6q5xpdnxjEuVshpuPiNo&redir_esc=y#v=onepage&q=Martin%20Fowler.%20Domain-Specific%20Languages.%2001%202010.&f=false" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Fow10 <ExternalLink className="w-4 h-4 inline ml-1" /></a>, <a href="https://dl.acm.org/doi/10.1145/242224.242477" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Hud96 <ExternalLink className="w-4 h-4 inline ml-1" /></a>).
            </p>
            <p className="ml-6 text-gray-400">
              From this perspective, ErgoTree is an intermediate representation of a DSL for writing smart contracts. The language directly captures the <a href="https://www.martinfowler.com/bliki/UbiquitousLanguage.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><em>ubiquitous language</em> <ExternalLink className="w-4 h-4 inline ml-1" /></a> of the Ergo blockchain, directly manipulating Boxes, Tokens, Zero-Knowledge Sigma-Propositions, etc.
            </p>
          </div>
        </div>

        <p>
          These are the novel first-class features of the Ergo platform, which it provides for user applications.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>
            It has a complementary frontend language called <Link href="/docs/developers/ergoscript-languages" className="text-cyan-400 hover:underline">ErgoScript</Link>, whose syntax is inspired by Scala/Kotlin and shares a common subset with Java and C#; thus, if you are proficient in any of these languages, you will likely feel comfortable using ErgoScript as well.
          </li>
          <li>
            ErgoScript aims to address a large audience of programmers with minimum surprise and a low <a href="https://www.itworld.com/article/2833252/the-most-wtf-y-programming-languages.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">WTF <ExternalLink className="w-4 h-4 inline ml-1" /></a> ratio.
          </li>
          <li>
            Last but not least, ErgoTree, as a core language of the Ergo platform, should be optimized for compact storage and fast execution.
          </li>
        </ul>
      </div>
    </>
  );
} 