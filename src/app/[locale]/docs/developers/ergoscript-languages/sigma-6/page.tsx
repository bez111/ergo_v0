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

export default function Sigma6Page() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Sigma 6.0 Documentation Summary
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
          Below is a summary of the key information from the <strong>Sigma 6.0 EIP (Ergo Improvement Proposal)</strong>, which details a significant upgrade to the Ergo protocol. The full technical proposal can be found here: <a href="https://github.com/ergoplatform/eips/blob/6102112617fff96fe88013858c307c2cf363babf/eip-0050.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">EIP-0050: Sigma 6.0 on GitHub</a>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Overview</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          <strong>Sigma 6.0</strong> introduces a major upgrade to the <strong>Ergo protocol</strong> with several key features aimed at improving the expressiveness and flexibility of scripts. This release proposes a soft-fork (much like the SegWit update in Bitcoin, where existing nodes validate scripts with old features and skip scripts with new features) and includes several backward-compatible changes to enhance functionality while ensuring seamless integration with previous versions.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Key Information from the EIP</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li><strong>Author:</strong> kushti</li>
          <li><strong>Status:</strong> Proposed</li>
          <li><strong>Created (in EIP):</strong> 25-Nov-2024</li>
          <li><strong>Implemented in:</strong> Ergo Protocol Reference Client 6.0.0</li>
          <li><strong>Last edited (EIP):</strong> 27-May-2024 (as per the version linked)</li>
          <li><strong>License:</strong> CC0</li>
          <li><strong>Forking Type:</strong> Soft-fork (requires all miners to update)</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Motivation</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Since the <strong>mainnet launch</strong> of Ergo in July 2019, the <strong>ErgoTree</strong> scripting language has remained largely unchanged. The only significant modification since the launch was the shift from <strong>AOT</strong> to <strong>JIT costing</strong> in the <strong>5.0</strong> soft-fork, along with minimal changes. Over the past five years, developers have identified numerous ways to improve the expressiveness of scripts and efficiently implement things that currently require non-trivial workarounds. Some issues were also found (though none critical). Additionally, some features planned during the Ergo testnets (2018-19) were not included in the mainnet until now.
        </div>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The primary goal of this proposal is to address feedback from developers, fix known issues (including the now-resolved semantics of <code className="bg-neutral-800 px-1 rounded">AvlTree.insert</code>), and expand the protocol's capabilities. This includes introducing new features such as <strong>serialization</strong>, <strong>unsigned 256-bit integers</strong>, enhanced <strong>context management</strong>, and relaxing voteable parameter validation for future updates. It also proposes a new voteable blockchain parameter: the <strong>average number of sub-blocks per block</strong>, to support upcoming sub-block implementations.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Main Changes Proposed</h2>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">1. UnsignedBigInt Type</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>Introduces a new <strong>UnsignedBigInt</strong> type, an unsigned 256-bit integer tailored for cryptographic applications, supporting modular arithmetic operations and more.</li>
        </ul>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">2. Serialization and Deserialization Support</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>Adds support for <strong>serialization and deserialization</strong> in scripts for all existing types, including composite types like <code className="bg-neutral-800 px-1 rounded">Coll[Option[Header]]</code>.</li>
          <li>Supports serialization/deserialization for instances of <code className="bg-neutral-800 px-1 rounded">Option</code> and <code className="bg-neutral-800 px-1 rounded">Header</code> types, allowing them to be stored in registers or context extension variables (with usage notes below).</li>
          <li>Introduces constructors for <code className="bg-neutral-800 px-1 rounded">Option</code> instances (<code className="bg-neutral-800 px-1 rounded">Global.some[T]()</code>, <code className="bg-neutral-800 px-1 rounded">Global.none[T]</code>) and serialization/deserialization for the <code className="bg-neutral-800 px-1 rounded">SFunc</code> type (supporting higher-order functions).</li>
        </ul>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">3. PoW and nBits Conversion</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>New methods for <strong>proof-of-work</strong> (PoW) validation:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><code className="bg-neutral-800 px-1 rounded">header.checkPow</code>: To check the validity of an Ergo header's Autolykos2 PoW.</li>
              <li>Methods for checking PoW for custom variants of the Autolykos2 algorithm on arbitrary messages.</li>
            </ul>
          </li>
          <li>Support for conversion from nBits-encoded numbers to BigInt and back, enabling efficient difficulty checking for Ergo (and Bitcoin) headers.</li>
        </ul>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">4. Extended Numeric Methods</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>Enhanced methods for numeric types (<code className="bg-neutral-800 px-1 rounded">Byte</code>, <code className="bg-neutral-800 px-1 rounded">Short</code>, <code className="bg-neutral-800 px-1 rounded">Int</code>, <code className="bg-neutral-800 px-1 rounded">Long</code>), including:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><code className="bg-neutral-800 px-1 rounded">.toBytes</code>, <code className="bg-neutral-800 px-1 rounded">.toBits</code>, <code className="bg-neutral-800 px-1 rounded">.shiftLeft</code>, <code className="bg-neutral-800 px-1 rounded">.shiftRight</code>, and bitwise operations (<code className="bg-neutral-800 px-1 rounded">bitwiseOr</code>, <code className="bg-neutral-800 px-1 rounded">bitwiseAnd</code>, <code className="bg-neutral-800 px-1 rounded">bitwiseXor</code>).</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">5. Context Variable Access</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>Allows reading context variables from another input, useful for obtaining state transition information for a companion input.</li>
        </ul>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">6. Collection Enhancements</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>More collection methods, such as:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><code className="bg-neutral-800 px-1 rounded">.get</code> (to optionally get an element if a collection contains it), <code className="bg-neutral-800 px-1 rounded">reverse</code>, <code className="bg-neutral-800 px-1 rounded">startsWith</code>, <code className="bg-neutral-800 px-1 rounded">endsWith</code>.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">7. Voteable Parameters and Forks</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>Possibility to propose voting for parameters not known to the protocol client, allowing new voteable parameters to be introduced via soft-forks or even velvet-forks.</li>
          <li>Introduction of a new voteable parameter: the <strong>average number of sub-blocks per block</strong>, for future sub-block implementation. This is achieved by disabling soft-forkable rule #215 via miner voting.</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Corresponding Issues and Pull Requests</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Sigma 6.0 incorporates numerous fixes and features detailed in specific issues and pull requests. Key changes highlighted in the EIP include:
        </div>

        <div className="overflow-x-auto bg-neutral-900 border border-neutral-700 rounded-lg mb-6">
          <table className="w-full text-sm text-gray-300">
            <thead className="bg-neutral-800">
              <tr>
                <th className="px-4 py-3 text-left text-cyan-400 font-semibold">Selected Feature/Fix</th>
                <th className="px-4 py-3 text-left text-cyan-400 font-semibold">Issue(s)</th>
                <th className="px-4 py-3 text-left text-cyan-400 font-semibold">Pull Request(s)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-700">
              <tr>
                <td className="px-4 py-2">PoW Validation for Autolykos2</td>
                <td className="px-4 py-2">
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/issues/958" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">#958</a>
                </td>
                <td className="px-4 py-2">
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/pull/965" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PR #965</a> (custom message), <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/pull/968" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PR #968</a> (Header.checkPow)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">nBits to BigInt Conversion</td>
                <td className="px-4 py-2">
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/issues/675" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">#675</a>
                </td>
                <td className="px-4 py-2">
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/pull/962" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PR #962</a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">UnsignedBigInt Type</td>
                <td className="px-4 py-2">
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/issues/554" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">#554</a>
                </td>
                <td className="px-4 py-2">
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/pull/997" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PR #997</a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">Serialization of SFunc Type</td>
                <td className="px-4 py-2">
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/issues/847" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">#847</a>
                </td>
                <td className="px-4 py-2">
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1020" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PR #1020</a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">Fix Semantics of AvlTree.insert</td>
                <td className="px-4 py-2">
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/issues/908" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">#908</a>
                </td>
                <td className="px-4 py-2">
                  <a href="https://github.com/ergoplatform/sigmastate-interpreter/pull/1038" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PR #1038</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          This is a selection of the developments. For a comprehensive list of all addressed issues, features, fixes (such as for <code className="bg-neutral-800 px-1 rounded">BigInt</code> downcasting, <code className="bg-neutral-800 px-1 rounded">Option.getOrElse</code> laziness, <code className="bg-neutral-800 px-1 rounded">ErgoTree</code> size serialization, <code className="bg-neutral-800 px-1 rounded">Box.getReg</code> implementation, collection equality improvements, etc.), and their corresponding pull requests, please refer to the "Corresponding Issues and Pull Requests" section of the official Sigma 6.0 EIP linked above.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Activation</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The changes introduced in <strong>Sigma 6.0</strong> are activated via a <strong>soft-fork</strong>. To ensure backward compatibility, some script deserialization validation rules (specifically #1007, #1008, and #1011) are replaced with identical ones under different IDs. These changes, implemented in <a href="https://github.com/ergoplatform/sigmastate-interpreter/pull/1029" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PR #1029</a>, allow existing clients to validate scripts with old features while correctly skipping (or handling) those utilizing new Sigma 6.0 features post-activation.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Notes on Usage (from EIP)</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>Methods added in Sigma 6.0 and the new <code className="bg-neutral-800 px-1 rounded">UnsignedBigInt</code> type can only be used within an ErgoTree with version {'>'}= 3.</li>
          <li>Values of types <code className="bg-neutral-800 px-1 rounded">Option[]</code>, <code className="bg-neutral-800 px-1 rounded">Header</code>, and <code className="bg-neutral-800 px-1 rounded">UnsignedBigInt</code> cannot be directly put into registers or context extension variables. This is to avoid versioning issues with 5.0 clients. To work around this limitation, you can serialize the typed value to bytes and then call <code className="bg-neutral-800 px-1 rounded">Global.deserialize</code> within a script to obtain an instance of these types.</li>
          <li>An example of higher-order lambdas supported since this EIP's implementation can be found <a href="https://github.com/ergoplatform/sigmastate-interpreter/blob/b754e143cf38ed86d95698ede744a470dfa053d6/sigmastate/src/test/scala/special/sigma/SigmaDslSpecification.scala#L10040" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">here</a>.</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Example Usage</h2>
        <div className="text-gray-300 mb-4 max-w-2xl">
          Here's an example demonstrating some of the new Sigma 6.0 features:
        </div>

        <CodeBlock>{`// Example: Using new UnsignedBigInt and serialization features
{
  // New UnsignedBigInt type for cryptographic operations
  val largeNumber: UnsignedBigInt = UnsignedBigInt.fromBigInt(BigInt("123456789012345678901234567890"))
  
  // Enhanced numeric operations
  val byteValue: Byte = 42
  val shifted = byteValue.shiftLeft(2)  // New bitwise operations
  val masked = shifted.bitwiseAnd(0xFF.toByte)
  
  // Improved collection methods
  val myCollection = Coll(1, 2, 3, 4, 5)
  val reversed = myCollection.reverse  // New reverse method
  val startsWithPattern = myCollection.startsWith(Coll(1, 2))  // New startsWith
  
  // Enhanced Option handling
  val someValue = Global.some[Int](42)  // New Option constructor
  val noneValue = Global.none[Int]      // New None constructor
  
  // PoW validation (new in 6.0)
  val header = CONTEXT.headers(0)
  val powIsValid = header.checkPow  // New PoW validation method
  
  // Combine all conditions
  sigmaProp(
    largeNumber.compareTo(UnsignedBigInt.zero) > 0 &&
    startsWithPattern &&
    someValue.isDefined &&
    powIsValid
  )
}`}</CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Conclusion</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Sigma 6.0 represents a significant evolution for the <strong>Ergo protocol</strong>. It enhances the ErgoTree scripting language with powerful new capabilities, improves cryptographic support, offers more flexible governance through voteable parameters, and addresses various issues. This upgrade equips developers with better tools to build sophisticated and efficient decentralized applications on the Ergo platform, all while maintaining network stability and compatibility through a soft-fork mechanism.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
          <li>
            <a href="https://github.com/ergoplatform/eips/blob/6102112617fff96fe88013858c307c2cf363babf/eip-0050.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              EIP-0050: Sigma 6.0 Official Proposal
            </a>
          </li>
          <li>
            <Link href="/docs/developers/ergoscript-languages/language-description" className="text-cyan-400 hover:underline">
              ErgoScript Language Description
            </Link>
          </li>
          <li>
            <Link href="/docs/developers/ergoscript-languages/global-functions" className="text-cyan-400 hover:underline">
              Global Functions
            </Link>
          </li>
          <li>
            <Link href="/docs/developers/ergoscript-languages/language-operations" className="text-cyan-400 hover:underline">
              Language Operations
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