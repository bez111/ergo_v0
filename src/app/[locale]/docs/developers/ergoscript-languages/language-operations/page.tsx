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

export default function LanguageOperationsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Language Operations
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
          ErgoScript language operations include various opcodes, blockchain-related objects, and specialized data types used for smart contract execution.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Opcodes</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          ErgoScript operations are compiled into opcodes. Each operation has a specific code that identifies its functionality:
        </div>

        <div className="overflow-x-auto bg-neutral-900 border border-neutral-700 rounded-lg mb-6">
          <table className="w-full text-sm text-gray-300">
            <thead className="bg-neutral-800">
              <tr>
                <th className="px-4 py-3 text-left text-cyan-400 font-semibold">Code</th>
                <th className="px-4 py-3 text-left text-cyan-400 font-semibold">Operation</th>
                <th className="px-4 py-3 text-left text-cyan-400 font-semibold">Comment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-700">
              <tr><td className="px-4 py-2">1</td><td className="px-4 py-2 font-mono text-xs">LT(left: Value[SInt], right: Value[SInt])</td><td className="px-4 py-2">Less than</td></tr>
              <tr><td className="px-4 py-2">2</td><td className="px-4 py-2 font-mono text-xs">LE(left: Value[SInt], right: Value[SInt])</td><td className="px-4 py-2">Less than or equal</td></tr>
              <tr><td className="px-4 py-2">3</td><td className="px-4 py-2 font-mono text-xs">GT(left: Value[SInt], right: Value[SInt])</td><td className="px-4 py-2">Greater than</td></tr>
              <tr><td className="px-4 py-2">4</td><td className="px-4 py-2 font-mono text-xs">GE(left: Value[SInt], right: Value[SInt])</td><td className="px-4 py-2">Greater than or equal</td></tr>
              <tr><td className="px-4 py-2">5</td><td className="px-4 py-2 font-mono text-xs">EQ[T1 &lt;: SType, T2 &lt;: SType](left: Value[T1], right: Value[T2])</td><td className="px-4 py-2">Equality</td></tr>
              <tr><td className="px-4 py-2">6</td><td className="px-4 py-2 font-mono text-xs">NEQ[T1 &lt;: SType, T2 &lt;: SType](left: Value[T1], right: Value[T2])</td><td className="px-4 py-2">Not equal</td></tr>
              <tr><td className="px-4 py-2">7</td><td className="px-4 py-2 font-mono text-xs">OR(input: Value[SCollection[SBoolean]])</td><td className="px-4 py-2">Logical OR</td></tr>
              <tr><td className="px-4 py-2">8</td><td className="px-4 py-2 font-mono text-xs">AND(input: Value[SCollection[SBoolean]])</td><td className="px-4 py-2">Logical AND</td></tr>
              <tr><td className="px-4 py-2">9</td><td className="px-4 py-2 font-mono text-xs">CAND(sigmaTrees: Seq[SigmaTree])</td><td className="px-4 py-2">Conditional AND</td></tr>
              <tr><td className="px-4 py-2">10</td><td className="px-4 py-2 font-mono text-xs">COR(sigmaTrees: Seq[SigmaTree])</td><td className="px-4 py-2">Conditional OR</td></tr>
              <tr><td className="px-4 py-2">11</td><td className="px-4 py-2 font-mono text-xs">Plus(left: Value[SInt], right: Value[SInt])</td><td className="px-4 py-2">Addition</td></tr>
              <tr><td className="px-4 py-2">12</td><td className="px-4 py-2 font-mono text-xs">Minus(left: Value[SInt], right: Value[SInt])</td><td className="px-4 py-2">Subtraction</td></tr>
              <tr><td className="px-4 py-2">13</td><td className="px-4 py-2 font-mono text-xs">Xor(left: Value[SByteArray], right: Value[SByteArray])</td><td className="px-4 py-2">XOR operation</td></tr>
              <tr><td className="px-4 py-2">14</td><td className="px-4 py-2 font-mono text-xs">AppendBytes(left: Value[SByteArray], right: Value[SByteArray])</td><td className="px-4 py-2">Append bytes</td></tr>
              <tr><td className="px-4 py-2">15</td><td className="px-4 py-2 font-mono text-xs">Exponentiate(left: Value[SGroupElement], right: Value[SBigInt])</td><td className="px-4 py-2">Exponentiation</td></tr>
              <tr><td className="px-4 py-2">16</td><td className="px-4 py-2 font-mono text-xs">MultiplyGroup(left: Value[SGroupElement], right: Value[SGroupElement])</td><td className="px-4 py-2">Group multiplication</td></tr>
              <tr><td className="px-4 py-2">17</td><td className="px-4 py-2 font-mono text-xs">IntToByteArray(input: Value[SInt])</td><td className="px-4 py-2">Convert int to bytes</td></tr>
              <tr><td className="px-4 py-2">18</td><td className="px-4 py-2 font-mono text-xs">ByteArrayToBigInt(input: Value[SByteArray])</td><td className="px-4 py-2">Convert bytes to BigInt</td></tr>
              <tr><td className="px-4 py-2">19</td><td className="px-4 py-2 font-mono text-xs">CalcBlake2b256(input: Value[SByteArray])</td><td className="px-4 py-2">Blake2b256 hash</td></tr>
              <tr><td className="px-4 py-2">20</td><td className="px-4 py-2 font-mono text-xs">ProveDiffieHellmanTuple(gv, hv, uv, vv: Value[SGroupElement])</td><td className="px-4 py-2">DH tuple proof</td></tr>
              <tr><td className="px-4 py-2">21</td><td className="px-4 py-2 font-mono text-xs">IsMember(tree: Value[SAvlTree], key, proof: Value[SByteArray])</td><td className="px-4 py-2">AVL tree membership</td></tr>
              <tr><td className="px-4 py-2">22</td><td className="px-4 py-2 font-mono text-xs">IntConstant(value: Long)</td><td className="px-4 py-2">Integer constant</td></tr>
              <tr><td className="px-4 py-2">23</td><td className="px-4 py-2 font-mono text-xs">TaggedInt(id: Byte)</td><td className="px-4 py-2">Tagged integer</td></tr>
              <tr><td className="px-4 py-2">24</td><td className="px-4 py-2 font-mono text-xs">BigIntConstant(value: BigInteger)</td><td className="px-4 py-2">BigInt constant</td></tr>
              <tr><td className="px-4 py-2">25</td><td className="px-4 py-2 font-mono text-xs">TaggedBigInt(id: Byte)</td><td className="px-4 py-2">Tagged BigInt</td></tr>
              <tr><td className="px-4 py-2">26</td><td className="px-4 py-2 font-mono text-xs">ByteArrayConstant(value: Array[Byte])</td><td className="px-4 py-2">Byte array constant</td></tr>
              <tr><td className="px-4 py-2">27</td><td className="px-4 py-2 font-mono text-xs">TaggedByteArray(id: Byte)</td><td className="px-4 py-2">Tagged byte array</td></tr>
              <tr><td className="px-4 py-2">28</td><td className="px-4 py-2 font-mono text-xs">PropConstant(value: Array[Byte])</td><td className="px-4 py-2">Proposition constant</td></tr>
              <tr><td className="px-4 py-2">29</td><td className="px-4 py-2 font-mono text-xs">TaggedProp(id: Byte)</td><td className="px-4 py-2">Tagged proposition</td></tr>
              <tr><td className="px-4 py-2">30</td><td className="px-4 py-2 font-mono text-xs">AvlTreeConstant(value: AvlTreeData)</td><td className="px-4 py-2">AVL tree constant</td></tr>
              <tr><td className="px-4 py-2">31</td><td className="px-4 py-2 font-mono text-xs">TaggedAvlTree(id: Byte)</td><td className="px-4 py-2">Tagged AVL tree</td></tr>
              <tr><td className="px-4 py-2">32</td><td className="px-4 py-2 font-mono text-xs">GroupElementConstant(value: GroupElement)</td><td className="px-4 py-2">Group element constant</td></tr>
              <tr><td className="px-4 py-2">33</td><td className="px-4 py-2 font-mono text-xs">GroupGenerator</td><td className="px-4 py-2">Group generator</td></tr>
              <tr><td className="px-4 py-2">34</td><td className="px-4 py-2 font-mono text-xs">TaggedGroupElement(id: Byte)</td><td className="px-4 py-2">Tagged group element</td></tr>
              <tr><td className="px-4 py-2">35</td><td className="px-4 py-2 font-mono text-xs">BooleanConstant(value: Boolean)</td><td className="px-4 py-2">Boolean constant</td></tr>
              <tr><td className="px-4 py-2">36</td><td className="px-4 py-2 font-mono text-xs">TaggedBoolean(id: Byte)</td><td className="px-4 py-2">Tagged boolean</td></tr>
              <tr><td className="px-4 py-2">37</td><td className="px-4 py-2 font-mono text-xs">TaggedBox(id: Byte)</td><td className="px-4 py-2">Tagged box</td></tr>
              <tr><td className="px-4 py-2">38</td><td className="px-4 py-2 font-mono text-xs">ConcreteCollection[V &lt;: SType](value: IndexedSeq[Value[V]])</td><td className="px-4 py-2">Collection</td></tr>
              <tr><td className="px-4 py-2">39</td><td className="px-4 py-2 font-mono text-xs">MapCollection[IV, OV &lt;: SType](input, id, mapper)</td><td className="px-4 py-2">Map operation</td></tr>
              <tr><td className="px-4 py-2">40</td><td className="px-4 py-2 font-mono text-xs">Exists[IV &lt;: SType](input, id, relations)</td><td className="px-4 py-2">Exists check</td></tr>
              <tr><td className="px-4 py-2">41</td><td className="px-4 py-2 font-mono text-xs">ForAll[IV &lt;: SType](input, id, relations)</td><td className="px-4 py-2">ForAll check</td></tr>
              <tr><td className="px-4 py-2">42</td><td className="px-4 py-2 font-mono text-xs">Fold[IV &lt;: SType](input, id, zero, accId, foldOp)</td><td className="px-4 py-2">Fold operation</td></tr>
              <tr><td className="px-4 py-2">43</td><td className="px-4 py-2 font-mono text-xs">ByIndex[V &lt;: SType](input: Value[SCollection[V]], index: Int)</td><td className="px-4 py-2">Access by index</td></tr>
              <tr><td className="px-4 py-2">44</td><td className="px-4 py-2 font-mono text-xs">SizeOf[V &lt;: SType](input: Value[SCollection[V]])</td><td className="px-4 py-2">Collection size</td></tr>
              <tr><td className="px-4 py-2">45</td><td className="px-4 py-2 font-mono text-xs">ExtractHeight(input: Value[SBox])</td><td className="px-4 py-2">Extract height from box</td></tr>
              <tr><td className="px-4 py-2">46</td><td className="px-4 py-2 font-mono text-xs">Height</td><td className="px-4 py-2">Current height</td></tr>
              <tr><td className="px-4 py-2">47</td><td className="px-4 py-2 font-mono text-xs">ExtractAmount(input: Value[SBox])</td><td className="px-4 py-2">Extract amount from box</td></tr>
              <tr><td className="px-4 py-2">48</td><td className="px-4 py-2 font-mono text-xs">ExtractScript(input: Value[SBox])</td><td className="px-4 py-2">Extract script from box</td></tr>
              <tr><td className="px-4 py-2">49</td><td className="px-4 py-2 font-mono text-xs">ExtractBytes(input: Value[SBox])</td><td className="px-4 py-2">Extract bytes from box</td></tr>
              <tr><td className="px-4 py-2">50</td><td className="px-4 py-2 font-mono text-xs">ExtractId(input: Value[SBox])</td><td className="px-4 py-2">Extract ID from box</td></tr>
              <tr><td className="px-4 py-2">51</td><td className="px-4 py-2 font-mono text-xs">ExtractRegisterAs[V &lt;: SType](input, registerId, default)</td><td className="px-4 py-2">Extract register value</td></tr>
              <tr><td className="px-4 py-2">52</td><td className="px-4 py-2 font-mono text-xs">TxOutput(outIndex: Int)</td><td className="px-4 py-2">Transaction output</td></tr>
              <tr><td className="px-4 py-2">53</td><td className="px-4 py-2 font-mono text-xs">ProveDlog(value: Value[SGroupElement])</td><td className="px-4 py-2">Discrete log proof</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">UnknownByteArray</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The <code className="bg-neutral-800 px-1 rounded">UnknownByteArray</code> is a special type used in ErgoScript for handling byte arrays of unknown length or content during compilation and execution.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">TaggedVariable</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Tagged variables are used in ErgoScript for referencing variables by their unique tags. Note that this functionality has been subject to optimization and removal of unused nodes.
        </div>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/pull/657" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Remove unused TaggedVariable node #657
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">SGroupElement</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The 'S' in front of <code className="bg-neutral-800 px-1 rounded">SGroupElement</code> refers to the sigma state code under the ErgoScript. When working on the ErgoScript directly, you will use <code className="bg-neutral-800 px-1 rounded">GroupElement</code>.
        </div>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Group elements are fundamental cryptographic objects used in Ergo's signature schemes and zero-knowledge proofs. They represent points on elliptic curves and are essential for:
        </div>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>Creating and verifying digital signatures</li>
          <li>Implementing zero-knowledge proofs</li>
          <li>Building multi-signature schemes</li>
          <li>Constructing ring signatures</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Blockchain Related Objects</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          ErgoScript provides access to various blockchain-specific objects and data structures that are essential for smart contract development.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">BoxLeafConstant</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          <code className="bg-neutral-800 px-1 rounded">BoxLeafConstant</code> represents a constant box value used in ErgoScript compilation. It's used internally by the compiler to represent box references that are known at compile time.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">SAvlTree (AvlTreeData)</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          AVL trees are authenticated data structures used in Ergo for efficient and verifiable data storage. The <code className="bg-neutral-800 px-1 rounded">SAvlTree</code> type represents these structures in ErgoScript.
        </div>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/fe7319f6ddd131d4bc02f46313f3590721f39f3b/parsers/shared/src/main/scala/sigmastate/lang/Types.scala#L40" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              "AvlTree" -{'>'}  SAvlTree Type Definition
            </a>
          </li>
          <li>
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/fe7319f6ddd131d4bc02f46313f3590721f39f3b/interpreter/shared/src/main/scala/sigmastate/AvlTreeData.scala#L54" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              AvlTreeData Implementation
            </a>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Height</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The <code className="bg-neutral-800 px-1 rounded">HEIGHT</code> global variable provides access to the current blockchain height (block number). This is fundamental for creating time-locked contracts and height-based conditions.
        </div>

        <CodeBlock>{`// Example usage of HEIGHT in ErgoScript
{
  // Contract that can only be spent after block 1000000
  val futureHeight = 1000000
  val heightCondition = HEIGHT > futureHeight
  
  // Combine with other conditions
  val myPK = PK("9etXmP7D3ZkWssDopWcWkCPpjn22RVuEyXoFSbVPWAvvzDbcDXE")
  
  sigmaProp(heightCondition) && myPK
}`}</CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
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
            <Link href="/docs/developers/ergoscript-languages/sigmaboolean" className="text-cyan-400 hover:underline">
              SigmaBoolean
            </Link>
          </li>
          <li>
            <Link href="/docs/developers/ergoscript-languages/accessing-boxes" className="text-cyan-400 hover:underline">
              Boxes and Registers
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