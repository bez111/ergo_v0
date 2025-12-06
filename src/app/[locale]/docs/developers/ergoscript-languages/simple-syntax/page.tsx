"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
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

export default function SimpleSyntaxPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        ErgoScript Syntax
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

      <div className="space-y-6">
        <div className="text-lg text-gray-300 mb-6 max-w-2xl">
          ErgoScript is a strongly typed language designed specifically for the Ergo blockchain, enabling the creation of secure and efficient smart contracts. This guide provides an introduction to ErgoScript's syntax, its integration with Ergo's UTXO model, and essential concepts that will help you write robust contracts on the Ergo platform.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Introduction to ErgoScript</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          ErgoScript, inspired by Scala, is the scripting language used to create smart contracts on the Ergo blockchain. It is designed to be both powerful and intuitive, allowing for the creation of complex financial contracts while maintaining readability and security. Understanding the syntax and structure of ErgoScript is crucial for developing contracts that are not only functional but also secure.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">ErgoScript and the UTXO Model</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Ergo operates on the UTXO (Unspent Transaction Output) model and employs a Proof-of-Work consensus mechanism. However, Ergo enhances the traditional UTXO model with its <em>extended-UTXO model</em>, which supports the execution of intricate financial contracts, similar to those possible on Ethereum's account-based model.
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
          <div className="text-cyan-400 font-semibold mb-3">Key concepts of ErgoScript related to the UTXO model:</div>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Box</strong>: A <code className="bg-neutral-800 px-1 rounded">Box</code> is essentially a UTXO in Ergo and can store data across up to ten registers. Like Bitcoin, Ergo transactions consume one or more existing boxes (represented by the <code className="bg-neutral-800 px-1 rounded">INPUTS</code> array) and produce one or more new boxes (represented by the <code className="bg-neutral-800 px-1 rounded">OUTPUTS</code> array).</li>
            <li><strong>UTXO-Specific Constructs</strong>: ErgoScript incorporates constructs like <code className="bg-neutral-800 px-1 rounded">Box</code>, <code className="bg-neutral-800 px-1 rounded">INPUTS</code>, and <code className="bg-neutral-800 px-1 rounded">OUTPUTS</code> that are specific to the UTXO model. The <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">LangSpec.md</a> document provides a comprehensive list of these constructs.</li>
            <li><strong>Turing Completeness</strong>: Although ErgoScript itself is not Turing complete, you can still build Turing-complete applications, as detailed in <a href="https://arxiv.org/pdf/1806.10116v1.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">this peer-reviewed paper</a>.</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">ErgoScript Syntax Overview</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          ErgoScript's syntax is derived from Scala, but you don't need to be a Scala expert to write ErgoScript. The language uses a minimal subset of Scala's features, focusing on simplicity and functionality:
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Immutable Values</strong>: In ErgoScript, you define values using <code className="bg-neutral-800 px-1 rounded">val</code>, ensuring immutability (similar to constants in other languages). Unlike Scala, ErgoScript does not support the <code className="bg-neutral-800 px-1 rounded">var</code> keyword, meaning all defined values are immutable.</li>
            <li><strong>Array Access</strong>: Both Scala and ErgoScript use round parentheses for array access. For example, <code className="bg-neutral-800 px-1 rounded">OUTPUTS(0)</code> refers to the first element of the <code className="bg-neutral-800 px-1 rounded">OUTPUTS</code> array.</li>
            <li><strong>Functional Programming</strong>: ErgoScript supports functional programming constructs such as <code className="bg-neutral-800 px-1 rounded">foreach</code>, <code className="bg-neutral-800 px-1 rounded">exists</code>, and <code className="bg-neutral-800 px-1 rounded">fold</code>, making it easier to work with collections. More details on these can be found in the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/ergoscript-compiler.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript Compiler Documentation</a>.</li>
            <li><strong>Boolean Predicates</strong>: ErgoScript programs, like ErgoTree, consist of sequences of boolean predicates connected using <code className="bg-neutral-800 px-1 rounded">&amp;&amp;</code> (AND) and <code className="bg-neutral-800 px-1 rounded">||</code> (OR).</li>
            <li><strong>Cryptographic Operations</strong>: ErgoScript supports cryptographic operations with <code className="bg-neutral-800 px-1 rounded">BigInt</code> and <code className="bg-neutral-800 px-1 rounded">GroupElement</code> types, allowing for addition, multiplication, and exponentiation. Note that <code className="bg-neutral-800 px-1 rounded">BigInt</code> operations in ErgoScript are performed modulo <code className="bg-neutral-800 px-1 rounded">2^256</code>, so overflow management is crucial.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Example: Basic ErgoScript Syntax</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Here's a simple ErgoScript example to help you get started:
        </div>

        <CodeBlock>{`val bool: Boolean = true`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          In this example:
        </div>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li><strong><code className="bg-neutral-800 px-1 rounded">val</code></strong>: A keyword used to create an immutable value.</li>
          <li><strong><code className="bg-neutral-800 px-1 rounded">bool</code></strong>: The name of the variable being created.</li>
          <li><strong><code className="bg-neutral-800 px-1 rounded">: Boolean</code></strong>: The type of the variable (Boolean in this case). Specifying the type is optional but recommended for clarity.</li>
          <li><strong><code className="bg-neutral-800 px-1 rounded">= true</code></strong>: Assigns the value <code className="bg-neutral-800 px-1 rounded">true</code> to <code className="bg-neutral-800 px-1 rounded">bool</code>.</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">More ErgoScript Syntax Examples</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Let's explore a more complex example that demonstrates control structures, data types, and basic operations:
        </div>

        <CodeBlock>{`if(bool == true){
    val x = 0
    val y = 1
    val z = ((x * y) + 5) - (3 / 2)
}else{
    val x = 2L
    val y: Coll[Long]  = Coll(0L, 1L, x) // Creating a collection of Long elements
    val z: (Long, Long) = (3, 4)
    val a: (Long, Coll[Long]) = (x, y) // Combining Long and collection types
    val b: Coll[((Long, Long), Boolean)] = Coll(((2L, 4L), true), ((7L, 2L), false))
}`}</CodeBlock>

        <div className="text-gray-300 mb-4 max-w-2xl">
          In this code:
        </div>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li><strong>Control Structures</strong>: The <code className="bg-neutral-800 px-1 rounded">if-else</code> statement directs the flow based on the <code className="bg-neutral-800 px-1 rounded">bool</code> value.</li>
          <li><strong>Data Types</strong>:
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li><code className="bg-neutral-800 px-1 rounded">x</code> and <code className="bg-neutral-800 px-1 rounded">y</code> are integers.</li>
              <li><code className="bg-neutral-800 px-1 rounded">z</code> is calculated based on arithmetic operations.</li>
              <li><code className="bg-neutral-800 px-1 rounded">y</code> in the <code className="bg-neutral-800 px-1 rounded">else</code> block is a collection of <code className="bg-neutral-800 px-1 rounded">Long</code> values (<code className="bg-neutral-800 px-1 rounded">Coll[Long]</code>).</li>
              <li><code className="bg-neutral-800 px-1 rounded">a</code> is a tuple combining a <code className="bg-neutral-800 px-1 rounded">Long</code> and a collection.</li>
              <li><code className="bg-neutral-800 px-1 rounded">b</code> is a collection of tuples with pairs of <code className="bg-neutral-800 px-1 rounded">Long</code> values and Booleans.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Def vs Val: Understanding Function Definitions</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          ErgoScript allows you to define functions using either <code className="bg-neutral-800 px-1 rounded">def</code> or <code className="bg-neutral-800 px-1 rounded">val</code>. Understanding the distinction is crucial for writing efficient and effective scripts:
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Example Code</h3>
        
        <CodeBlock>{`def computeAsDef(myInt: Int): Int = {
  myInt + 1
}

val computeAsVal: Int => Int = {
  (myInt: Int) =>
    myInt + 1
}`}</CodeBlock>

        <div className="text-gray-300 mb-4 max-w-2xl">
          Both functions accomplish the same task but differ in when the computation occurs:
        </div>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li><strong><code className="bg-neutral-800 px-1 rounded">computeAsDef</code></strong>: Defined using <code className="bg-neutral-800 px-1 rounded">def</code>, this function is evaluated each time it is called, allowing for dynamic computation.</li>
          <li><strong><code className="bg-neutral-800 px-1 rounded">computeAsVal</code></strong>: Defined using <code className="bg-neutral-800 px-1 rounded">val</code>, this is a function literal (lambda). The computation is defined at script initialization and only executed when the function is invoked.</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Advanced Functional Programming in ErgoScript</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          ErgoScript supports higher-order functions and advanced functional programming constructs, allowing for powerful data manipulation:
        </div>

        <CodeBlock>{`val myMap: Coll[(Int, Long)] = {      
  val intCollection = Coll(0, 1, 2)
  intCollection.map{
    (myInt: Int) =>                   
    (myInt, myInt.toLong)
  }                                      
}`}</CodeBlock>

        <div className="text-gray-300 mb-4 max-w-2xl">
          In this example:
        </div>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li><strong><code className="bg-neutral-800 px-1 rounded">Coll[(Int, Long)]</code></strong>: Defines a collection of tuples with <code className="bg-neutral-800 px-1 rounded">Int</code> and <code className="bg-neutral-800 px-1 rounded">Long</code> pairs.</li>
          <li><strong><code className="bg-neutral-800 px-1 rounded">map</code> Function</strong>: Applies a transformation to each element in the collection using a lambda expression, converting each <code className="bg-neutral-800 px-1 rounded">Int</code> to a <code className="bg-neutral-800 px-1 rounded">Long</code>.</li>
        </ul>

        <div className="text-gray-300 mb-6 max-w-2xl">
          For more details on collections and functional programming in ErgoScript, refer to the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/core/shared/src/main/scala/sigma/Colls.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Colls.scala</a> file.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Additional Resources</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          For further learning and a deeper dive into ErgoScript, explore the following resources:
        </div>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
          <li>
            <a href="https://github.com/DeCo-Education/ErgoScript-Developer-Course/blob/main/Class-Documents/Class-1/Materials/Class1.MD" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Deco Education - ErgoScript Developer Course
            </a>
          </li>
          <li>
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/sigma-dsl.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              ErgoScript Specification
            </a>
            : Detailed reference for Sigma Protocols and ErgoScript.
          </li>
          <li>
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              LangSpec.md
            </a>
            : Comprehensive language specification for ErgoScript.
          </li>
          <li>
            <a href="https://ergoplatform.org/en/blog/2021_07_26_ergo_script_guide/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              ErgoScript Reference Guide
            </a>
            : A detailed guide on writing ErgoScript.
          </li>
          <li>
            <Link href="/docs/developers/ergoscript-languages/language-description" className="text-cyan-400 hover:underline">
              ErgoScript Language Description
            </Link>
            : Complete language specification with all types and functions.
          </li>
        </ul>
      </div>
    </>
  );
} 