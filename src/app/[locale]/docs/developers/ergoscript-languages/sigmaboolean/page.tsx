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

export default function SigmaBooleanPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        SigmaBoolean
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
          SigmaBoolean is a crucial data type in ErgoScript that represents propositions proven using Sigma protocols. It is derived from the base type <Link href="/docs/developers/ergoscript-languages/language-description#predefined-global-functions" className="text-cyan-400 hover:underline"><code className="bg-neutral-800 px-1 rounded">ProveDlog</code></Link>, which is used for discrete logarithm proofs. What sets SigmaBoolean apart is its dual functionality - it is used by the prover to construct the proof and by the verifier to check the proof. This dual role makes SigmaBoolean a key player in creating and verifying proofs within ErgoScript.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          As an algebraic data type in SigmaScript and SigmaDsl, SigmaBoolean allows developers to use boolean-like logic when working with <Link href="/docs/developers/ergoscript-languages/sigma-propositions" className="text-cyan-400 hover:underline">Sigma Propositions</Link>. It's worth noting that SigmaBoolean is a recursive data structure, which adds complexity to the parsing process.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Exploring SigmaBoolean Structure</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          To gain a deeper understanding of SigmaBoolean, let's examine its structure:
        </div>

        <CodeBlock>{`/** SigmaBoolean represents the algebraic data type of sigma proposition expressions.
 * 
 */
trait SigmaBoolean {
  /** A unique identifier for the node class, used during serialization. */
  val opCode: OpCode
  /** Returns the number of nodes in the proposition tree, indicating its size. */
  def size: Int
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          In Ergo, a node class represents a specific type or category of nodes within the proposition tree. Each node class has unique attributes and behaviors that dictate its interactions with other nodes and contribute to the overall tree structure. These node classes are identified by their <code className="bg-neutral-800 px-1 rounded">opCodes</code>, which correspond to various logical operations or conditions within the proposition tree. These operations can include AND (<code className="bg-neutral-800 px-1 rounded">&amp;&amp;</code>), OR (<code className="bg-neutral-800 px-1 rounded">||</code>), and THRESHOLD, as well as conditions like proveDlog and proveDHtuple.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          By strategically combining and arranging these node classes, developers can construct intricate proposition trees that define the conditions and requirements for validating Ergo transactions. To determine the <code className="bg-neutral-800 px-1 rounded">size</code> of the proposition tree, developers can use the size method, which counts the number of nodes in the tree. This count provides an estimate of the tree's complexity or magnitude.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          For the complete code, refer to <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/sigmastate/Values.scala#L745" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Values.scala</a>.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Serializing SigmaBoolean from a P2PK Address</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          You may want to serialize a SigmaBoolean from a P2PK (Pay-to-Public-Key) address when you need to create a proof of knowledge for a specific public key. This process allows developers to create complex smart contracts. By encoding SigmaBoolean from a P2PK address, developers can define detailed contract conditions, improve privacy, ensure smooth interoperability, customize contract logic, enhance security audits, and support cross-platform compatibility.
        </div>

        <div className="text-gray-300 mb-4 max-w-2xl">
          Serializing SigmaBoolean from a P2PK address involves several steps:
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6">
          <ol className="list-decimal pl-6 text-gray-300 space-y-2">
            <li><strong>Decode P2PK Address</strong>: Begin by decoding the P2PK address using Base58 encoding.</li>
            <li><strong>Extract Public Key Bytes</strong>: From the decoded data, remove the first byte, retain the last 4 bytes, and prepend it with <code className="bg-neutral-800 px-1 rounded">0xCD, 0x03</code>.</li>
            <li><strong>Incorporate Instruction Code</strong>: Integrate the <code className="bg-neutral-800 px-1 rounded">ProveDlog</code> instruction code with the public key bytes by prepending "08cd" to the bytes. This produces a serialized SigmaBoolean value.</li>
          </ol>
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Serialization with bs58 (TypeScript)</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Alternatively, you can use bs58 for serialization in TypeScript:
        </div>

        <CodeBlock language="typescript">{`const decodedBuffer = bs58.decode(ergoAddress);
const rawBytes = Uint8Array.from(decodedBuffer);
const slicedBytes = rawBytes.subarray(2, rawBytes.length - 4);
const combinedBytes = new Uint8Array([0xCD, 0x03, ...slicedBytes]);
const sigmaBoolean = Buffer.from(combinedBytes).toString('base64');`}</CodeBlock>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Serialization using Fleet (TypeScript)</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Here's how you can serialize SigmaBoolean using <Link href="/docs/developers/tooling/frameworks/fleet" className="text-cyan-400 hover:underline">Fleet</Link> in TypeScript:
        </div>

        <CodeBlock language="typescript">{`// Extract the public key from the encoded address
const pk = ErgoAddress.fromBase58("address_here").getPublicKeys()[0];

// For base64 encoding (typically required for ergopay):
const encodedProp = base64.encode(SSigmaProp(SGroupElement(pk)).toBytes());

// Without base64 encoding:
const encodedProp = SSigmaProp(SGroupElement(pk)).toHex();`}</CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">ErgoTree and its Role in Transactions</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The ErgoTree plays a vital role in Ergo transactions as it encompasses the spending conditions required for a box to be spent. To create an ErgoTree, it is necessary to prepend <code className="bg-neutral-800 px-1 rounded">0x00</code> (header byte) to the serialized SigmaBoolean. This step is not just a formality, but a crucial operation that enables the creation of intricate spending conditions. By supporting complex logical constructs, ErgoTree enhances the flexibility of contract design and strengthens the security of Ergo transactions.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
          <li>
            <Link href="/docs/developers/ergoscript-languages/sigma-propositions" className="text-cyan-400 hover:underline">
              Sigma Propositions
            </Link>
          </li>
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
            <Link href="/docs/developers/tooling/frameworks/fleet" className="text-cyan-400 hover:underline">
              Fleet Framework
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