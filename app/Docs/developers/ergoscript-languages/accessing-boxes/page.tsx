"use client";
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

export default function AccessingBoxesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Boxes and Registers
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
        <div className="text-lg text-gray-300 mb-6 max-w-2xl">
          In ErgoScript, a 'box' is akin to a more versatile version of what a UTXO (Unspent Transaction Output) represents in Bitcoin and many other cryptocurrencies. A box is not only a ledger entry denoting the amount of cryptocurrency owned by a particular address, but it also carries 'registers', allowing it to contain additional data. This data could range from simple values to more complex structures, which can later be integrated into transactions and used in the execution of smart contracts.
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
          <div className="text-cyan-400 font-semibold mb-3">Key Concepts:</div>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Box</strong>: A versatile UTXO that can carry additional data in registers</li>
            <li><strong>Registers</strong>: Storage slots (R4-R9) that can hold custom data</li>
            <li><strong>Enhanced Functionality</strong>: Beyond simple value storage, enables complex smart contract operations</li>
          </ul>
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Interpreting this register data off-chain is a common task; see Fleet SDK Recipes for examples using JavaScript/TypeScript.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Box vs Traditional UTXO</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          This makes Ergo's box different from a traditional UTXO, which only represents an amount of unspent cryptocurrency associated with a certain address. In UTXO-based cryptocurrencies, each transaction consumes one or more UTXOs as inputs and creates one or more UTXOs as outputs, with the 'unspent' outputs being the 'coins' that can be spent in future transactions.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          The term 'box' in Ergo's context captures the idea that these entities are like containers holding various types of information (value, tokens, custom data, etc.), beyond just the unspent transaction output balance. This makes the boxes in Ergo significantly more flexible and functional, enabling more complex operations, such as running scripts or smart contracts, directly on the blockchain.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Box Structure and Properties</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Each box in Ergo contains several key components:
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Value</strong>: The amount of ERG (in NanoERGs) stored in the box</li>
            <li><strong>Box ID</strong>: A unique identifier for the box</li>
            <li><strong>Proposition Bytes</strong>: The serialized spending condition (ErgoScript contract)</li>
            <li><strong>Tokens</strong>: A collection of native tokens stored in the box</li>
            <li><strong>Registers (R0-R9)</strong>: Data storage slots with different purposes:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><code className="bg-neutral-800 px-1 rounded">R0</code>: Value (mandatory)</li>
                <li><code className="bg-neutral-800 px-1 rounded">R1</code>: Script protection (mandatory)</li>
                <li><code className="bg-neutral-800 px-1 rounded">R2</code>: Tokens (mandatory)</li>
                <li><code className="bg-neutral-800 px-1 rounded">R3</code>: Creation info (mandatory)</li>
                <li><code className="bg-neutral-800 px-1 rounded">R4-R9</code>: Custom data (optional)</li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Accessing Box Data in ErgoScript</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          ErgoScript provides several ways to access box data within smart contracts:
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Basic Box Properties</h3>
        <CodeBlock>{`// Accessing basic box properties
val boxValue = SELF.value                    // Get the ERG value in NanoERGs
val boxId = SELF.id                         // Get the unique box ID
val boxBytes = SELF.bytes                   // Get serialized box content
val boxTokens = SELF.tokens                 // Get all tokens in the box
val propositionBytes = SELF.propositionBytes // Get the spending condition`}</CodeBlock>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Register Access</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Registers R4-R9 can store arbitrary typed data. Here's how to access them safely:
        </div>

        <CodeBlock>{`// Accessing registers with type checking
val r4Data = SELF.R4[Coll[Byte]].get       // Get R4 as byte collection (throws if empty)
val r5Value = SELF.R5[Long].get             // Get R5 as Long (throws if empty)
val r6Option = SELF.R6[Int]                 // Get R6 as Option[Int] (safe)

// Safe register access with default values
val r4Safe = SELF.R4[Coll[Byte]].getOrElse(Coll[Byte]())
val r5Safe = SELF.R5[Long].getOrElse(0L)

// Checking if register exists
val hasR4 = SELF.R4[Coll[Byte]].isDefined
val hasR5 = SELF.R5[Long].isDefined`}</CodeBlock>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Token Access</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Tokens are stored as a collection of (TokenId, Amount) pairs:
        </div>

        <CodeBlock>{`// Accessing tokens
val allTokens = SELF.tokens                 // Get all tokens as Coll[(Coll[Byte], Long)]
val tokenCount = SELF.tokens.size           // Number of different tokens

// Accessing specific tokens (if they exist)
if (SELF.tokens.size > 0) {
  val firstTokenId = SELF.tokens(0)._1      // First token ID
  val firstTokenAmount = SELF.tokens(0)._2  // First token amount
}

// Finding a specific token
val targetTokenId: Coll[Byte] = fromBase16("...")
val tokenExists = SELF.tokens.exists { (tokenPair: (Coll[Byte], Long)) =>
  tokenPair._1 == targetTokenId
}`}</CodeBlock>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Working with Input and Output Boxes</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Contracts often need to examine other boxes in the transaction:
        </div>

        <CodeBlock>{`// Accessing transaction boxes
val allInputs = INPUTS                      // All input boxes
val allOutputs = OUTPUTS                    // All output boxes
val firstInput = INPUTS(0)                  // First input box
val firstOutput = OUTPUTS(0)                // First output box

// Common patterns
val totalInputValue = INPUTS.fold(0L, { (acc: Long, box: Box) => acc + box.value })
val totalOutputValue = OUTPUTS.fold(0L, { (acc: Long, box: Box) => acc + box.value })

// Finding boxes with specific conditions
val highValueOutputs = OUTPUTS.filter { (box: Box) => box.value > 1000000L }
val boxesWithTokens = OUTPUTS.filter { (box: Box) => box.tokens.size > 0 }`}</CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Practical Examples</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Here are some common patterns for working with boxes and registers:
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Data Storage and Retrieval</h3>
        <CodeBlock>{`// Example: Oracle box storing price data
val oracleBox = CONTEXT.dataInputs(0)      // Reference oracle as data input
val currentPrice = oracleBox.R4[Long].get  // Price stored in R4
val timestamp = oracleBox.R5[Long].get     // Timestamp in R5
val isValidPrice = timestamp > HEIGHT - 10 // Price is recent (within 10 blocks)

sigmaProp(isValidPrice && currentPrice > 1000000L)`}</CodeBlock>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Token Validation</h3>
        <CodeBlock>{`// Example: Ensuring specific token is preserved
val requiredTokenId = fromBase16("1234567890abcdef...")
val inputTokenAmount = SELF.tokens.fold(0L, { (acc: Long, token: (Coll[Byte], Long)) =>
  if (token._1 == requiredTokenId) acc + token._2 else acc
})

val outputTokenAmount = OUTPUTS(0).tokens.fold(0L, { (acc: Long, token: (Coll[Byte], Long)) =>
  if (token._1 == requiredTokenId) acc + token._2 else acc
})

sigmaProp(inputTokenAmount == outputTokenAmount)`}</CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Best Practices</h2>
        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Always check register existence</strong>: Use <code className="bg-neutral-800 px-1 rounded">isDefined</code> or <code className="bg-neutral-800 px-1 rounded">getOrElse</code> to avoid errors</li>
            <li><strong>Type safety</strong>: Specify correct types when accessing registers to prevent runtime errors</li>
            <li><strong>Efficient token handling</strong>: Use fold or filter operations instead of multiple individual checks</li>
            <li><strong>Validate box structure</strong>: Always verify that boxes contain expected data before using it</li>
            <li><strong>Consider gas costs</strong>: Complex box operations consume more computation resources</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
          <li>
            <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-cyan-400 hover:underline">
              The Blockchain Context
            </Link>
          </li>
          <li>
            <Link href="/Docs/developers/ergoscript-languages/language-description" className="text-cyan-400 hover:underline">
              ErgoScript Language Description
            </Link>
          </li>
          <li>
            <Link href="/Docs/developers/ergoscript-languages/sigma-propositions" className="text-cyan-400 hover:underline">
              Sigma Propositions
            </Link>
          </li>
          <li>
            <Link href="/Docs/developers/tooling/frameworks/fleet" className="text-cyan-400 hover:underline">
              Fleet SDK
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