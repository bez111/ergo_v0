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

export default function BlockchainContextPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        The Blockchain Context
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
          The Blockchain Context represents data taken from the transaction and the state of the blockchain. The data for the blockchain context is stored in the global object <code className="bg-neutral-800 px-1 rounded">CONTEXT</code>. <code className="bg-neutral-800 px-1 rounded">CONTEXT</code>, therefore, contains the main entities that you will interact with to manipulate your contract's spending conditions.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">HEIGHT</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          An integer representing the height of the block currently being validated by miners. This value can be accessed using <code className="bg-neutral-800 px-1 rounded">HEIGHT</code>.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">SELF</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          <code className="bg-neutral-800 px-1 rounded">SELF</code> represents the current eUTXO input box which holds the ErgoScript contract. The <code className="bg-neutral-800 px-1 rounded">SELF</code> box is of type <code className="bg-neutral-800 px-1 rounded">Box</code>, containing information relevant to the specified eUTXO, such as:
        </div>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1 max-w-2xl">
          <li>The value in nanoERGs</li>
          <li>The box ID</li>
          <li>The proposition bytes of the guarding script for this eUTXO</li>
          <li>The tokens stored in the box</li>
          <li>The box registers</li>
        </ul>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">INPUTS</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The eUTXOs used as input boxes to be spent in the transaction. These boxes are stored in a collection and can be accessed using the object called <code className="bg-neutral-800 px-1 rounded">INPUTS</code>. The <code className="bg-neutral-800 px-1 rounded">SELF</code> box is part of this input box collection.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Data Inputs</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Data inputs are input eUTXOs that are not spent in the transaction. They serve as 'read-only' boxes, usually holding information necessary for the spending conditions of the contract. Data inputs can be accessed using <code className="bg-neutral-800 px-1 rounded">CONTEXT.dataInputs</code>.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">OUTPUTS</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The output box eUTXOs that will be created by the transaction. This collection can be accessed using the <code className="bg-neutral-800 px-1 rounded">OUTPUTS</code> object.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Headers</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Block headers are available through the <code className="bg-neutral-800 px-1 rounded">CONTEXT.headers</code> function. The <code className="bg-neutral-800 px-1 rounded">headers</code> function returns a collection holding the last 10 block headers preceding the current <code className="bg-neutral-800 px-1 rounded">HEIGHT</code>. Using this function allows your contract to gain insight into the most recent blocks before the current transaction's execution context. Each <code className="bg-neutral-800 px-1 rounded">Header</code> object in the collection returned by <code className="bg-neutral-800 px-1 rounded">headers</code> holds various information, much of which pertains to the block miner, such as the miner's public key (PK), the nonce used to find the block, and the votes the miner submitted when the block was mined.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Pre-Headers</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The <code className="bg-neutral-800 px-1 rounded">CONTEXT.preHeader</code> function gives your contract access to the <code className="bg-neutral-800 px-1 rounded">PreHeader</code>. The <code className="bg-neutral-800 px-1 rounded">PreHeader</code> object represents all the information available to miners attempting to find the next block. Because each block miner must insert their own information to properly mine a block, the data contained within each <code className="bg-neutral-800 px-1 rounded">PreHeader</code> object varies depending on who mines the block. This means your contract could execute differently depending on who mines the block containing the transaction that spends your contract's box.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Example</h2>

        <CodeBlock>{`{
	// Focus on how we are accessing this data and using it in our contract

	// Checking if the id of our first input box is the same as the id of our output box
	val selfAtZero = SELF.id == INPUTS(0).id
	// Retrieving a long value from R4 of the first data input and adding it to our output value
	val boxAmountToAdd: Long = CONTEXT.dataInputs(0).R4[Long].get 
	val amountAddedInOutputs = OUTPUTS(0).value == SELF.value + boxAmountToAdd
	// Ensuring the height is greater than 700000
	val heightIsValid: Boolean = HEIGHT > 700000
	// Ensuring the nonce is even
	val randomValueIsEven: Boolean = CONTEXT.headers(0).powNonce(0) % 2 == 0

	// If the first condition is true, then the second condition is not checked
	// Checking if either our output box has the correct value added or the nonce is even and height is greater than 700000
	sigmaProp(amountAddedInOutputs && selfAtZero) 
			|| sigmaProp(heightIsValid && randomValueIsEven)
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          The code uses various fields of the <code className="bg-neutral-800 px-1 rounded">CONTEXT</code> object to check certain conditions. It then combines these conditions into a final <code className="bg-neutral-800 px-1 rounded">SigmaProp</code> result that evaluates to true if either (<code className="bg-neutral-800 px-1 rounded">amountAddedInOutputs &amp;&amp; selfAtZero</code>) or (<code className="bg-neutral-800 px-1 rounded">heightIsValid &amp;&amp; randomValueIsEven</code>) is true.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
          <li>
            <Link href="/docs/developers/ergoscript-languages/simple-syntax" className="text-cyan-400 hover:underline">
              ErgoScript Syntax
            </Link>
          </li>
          <li>
            <Link href="/docs/developers/ergoscript-languages/sigma-propositions" className="text-cyan-400 hover:underline">
              Sigma Propositions
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