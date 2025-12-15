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

export default function SigmaPropositionsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Sigma Propositions
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
          Sigma Propositions (<code className="bg-neutral-800 px-1 rounded">SigmaProp</code>) are the core return type of every ErgoScript contract.
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><code className="bg-neutral-800 px-1 rounded">SigmaProp</code> values represent conditions related to the transaction that must be met to spend a specific box.</li>
            <li>They are similar to booleans in that they ultimately reduce to either <code className="bg-neutral-800 px-1 rounded">true</code> or <code className="bg-neutral-800 px-1 rounded">false</code> during verification.</li>
            <li><code className="bg-neutral-800 px-1 rounded">SigmaProp</code> enables the use of Zero-Knowledge Proofs, a crucial aspect of modern cryptography and a defining privacy feature of Ergo.</li>
            <li><strong>All contracts in ErgoScript must return a <code className="bg-neutral-800 px-1 rounded">SigmaProp</code> value at the very end.</strong> 
              <ul className="list-disc pl-6 mt-2">
                <li>This final <code className="bg-neutral-800 px-1 rounded">SigmaProp</code> represents the complete set of conditions required to spend the box protected by the contract. Therefore, all logic within an ErgoScript contract should contribute to the outcome of this final <code className="bg-neutral-800 px-1 rounded">SigmaProp</code>.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          <code className="bg-neutral-800 px-1 rounded">SigmaProp</code> values can be constructed in several ways, but two common methods are used frequently in ErgoScript contracts.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">SigmaProps From Booleans</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          You can create <code className="bg-neutral-800 px-1 rounded">SigmaProp</code> values from standard boolean expressions using the <code className="bg-neutral-800 px-1 rounded">sigmaProp</code> function. This allows you to define arbitrary spending conditions based on context variables, register values, etc.
        </div>

        <CodeBlock>{`{
  val mathIsHard: Boolean = (1 + 1) != 2
  sigmaProp(mathIsHard) // SigmaProp created from a boolean using the sigmaProp function
                        // What would this contract evaluate to?
}`}</CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">SigmaProps From Public Keys</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Public Keys (represented as <code className="bg-neutral-800 px-1 rounded">GroupElement</code> in ErgoScript, essentially the part of your address that makes it unique) can be directly converted into <code className="bg-neutral-800 px-1 rounded">SigmaProp</code> values using functions like <code className="bg-neutral-800 px-1 rounded">proveDlog</code>. When such a <code className="bg-neutral-800 px-1 rounded">SigmaProp</code> is used, the contract checks if the transaction was signed by the corresponding private key. You can think of this as literally signing the transaction with your digital signature to prove authorization.
        </div>

        <CodeBlock>{`{
  // You can use the PK function to
  // hardcode an address's public key into your contract
  val myPK: SigmaProp = PK("9etXmP7D3ZkWssDopWcWkCPpjn22RVuEyXoFSbVPWAvvzDbcDXE")

  myPK
}`}</CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">SigmaProp Operations</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Much like booleans, you can use logical operations (<code className="bg-neutral-800 px-1 rounded">&amp;&amp;</code> for AND, <code className="bg-neutral-800 px-1 rounded">||</code> for OR) on <code className="bg-neutral-800 px-1 rounded">SigmaProp</code> values to build more complex spending logic for your contract.
        </div>

        <CodeBlock>{`{
  val enoughERG = INPUTS(0).value > 1000000
  val myPK = PK("9etXmP7D3ZkWssDopWcWkCPpjn22RVuEyXoFSbVPWAvvzDbcDXE")

  sigmaProp(enoughERG) || myPK // What does this contract do? Under what conditions could such a contract be spent?
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          You can see in the contract above that using <code className="bg-neutral-800 px-1 rounded">||</code> creates two distinct spending paths (conditions under which the box can be spent).
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Now that you've seen the basics, let's look at a simple ErgoScript contract example: the pin-lock contract mentioned earlier.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Pin-lock Contract</h2>

        <CodeBlock>{`{
  sigmaProp( INPUTS(0).R4[Coll[Byte]].get == blake2b256(OUTPUTS(0).R4[Coll[Byte]].get) )
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Don't worry if you don't understand all the functions used here (<code className="bg-neutral-800 px-1 rounded">blake2b256</code>, <code className="bg-neutral-800 px-1 rounded">.get</code>); these are global functions covered elsewhere. What's happening here is:
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          We can spend <code className="bg-neutral-800 px-1 rounded">INPUTS(0)</code> (the first input box of the transaction) if and only if there exists an output box (specifically <code className="bg-neutral-800 px-1 rounded">OUTPUTS(0)</code>, the first output) whose register <code className="bg-neutral-800 px-1 rounded">R4</code> contains the Blake2b256 hash of the byte collection found in register <code className="bg-neutral-800 px-1 rounded">R4</code> of <code className="bg-neutral-800 px-1 rounded">INPUTS(0)</code>.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          This contract implicitly assumes the box being spent <em>is</em> <code className="bg-neutral-800 px-1 rounded">INPUTS(0)</code>. For a clearer example where the box explicitly refers to itself within its own contract, consider the version below using the <code className="bg-neutral-800 px-1 rounded">SELF</code> context variable:
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Pin-lock Contract (with SELF)</h2>

        <CodeBlock>{`{
  sigmaProp( SELF.R4[Coll[Byte]].get == blake2b256(OUTPUTS(0).R4[Coll[Byte]].get) )
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Are these two pin-lock contracts equivalent? That is, under what spending conditions might one contract evaluate to true while the other evaluates to false? (Hint: Consider what <code className="bg-neutral-800 px-1 rounded">INPUTS(0)</code> refers to versus what <code className="bg-neutral-800 px-1 rounded">SELF</code> refers to).
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-8">
          <div className="text-cyan-400 font-semibold mb-2">🔗 Source:</div>
          <a href="https://github.com/DeCo-Education/ErgoScript-Developer-Course/blob/main/Class-Documents/Class-1/Materials/Class1.MD" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            Deco Education - ErgoScript Developer Course
          </a>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
          <li>
            <Link href="/docs/developers/ergoscript-languages/simple-syntax" className="text-cyan-400 hover:underline">
              ErgoScript Syntax
            </Link>
          </li>
          <li>
            <Link href="/docs/developers/ergoscript-languages/language-description" className="text-cyan-400 hover:underline">
              ErgoScript Language Description
            </Link>
          </li>
          <li>
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Sigmastate Interpreter Repository
            </a>
          </li>
        </ul>
      </div>
    </>
  );
} 