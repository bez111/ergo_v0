import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Database, Box, Key, FileText, Info, AlertTriangle } from 'lucide-react';
import { UniversalCopyCodeBlock } from '@/components/ui/UniversalCopyCodeBlock';

export default function BoxRegistersPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <Database className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Ergo Box Registers
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Understanding Ergo box registers and their computational potential
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/Docs/developers/data-model-apis"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Data Model APIs
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8 mb-8">
          <p className="text-gray-300 mb-6">
            In Ergo's blockchain model, a <Link href="/Docs/developers/data-model-apis" className="text-blue-400 hover:text-blue-300 underline">box</Link> is a versatile entity that not only holds the value of cryptocurrency but also contains additional data in the form of <strong>registers</strong>. This makes it a more functional and flexible version of the <Link href="/Docs/introduction/eutxo" className="text-blue-400 hover:text-blue-300 underline">Unspent Transaction Output (UTXO)</Link> found in Bitcoin and many other cryptocurrencies.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Each box contains at least four essential pieces of information:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>The value in NanoErgs (1 Erg = 1000000000 NanoErgs).</li>
              <li>The protection <Link href="/Docs/developers/ergoscript-languages" className="text-blue-400 hover:text-blue-300 underline">script</Link> (similar to Bitcoin's <code className="bg-neutral-700 px-2 py-1 rounded">scriptPubKey</code>) or "<Link href="/Docs/developers/ergoscript-languages" className="text-blue-400 hover:text-blue-300 underline">smart contract</Link>", which secures the box's expenditure.</li>
              <li>Any additional assets or <Link href="/Docs/ecosystem/Standards/eip4" className="text-blue-400 hover:text-blue-300 underline">tokens</Link> contained within the box.</li>
              <li>Details about the box's creation, including the <code className="bg-neutral-700 px-2 py-1 rounded">txId</code> (the ID of the <Link href="/Docs/developers/data-model-apis" className="text-blue-400 hover:text-blue-300 underline">transaction</Link> that created the box) and an <Link href="/Docs/developers/data-model-apis" className="text-blue-400 hover:text-blue-300 underline">output index</Link>. This information also includes a <code className="bg-neutral-700 px-2 py-1 rounded">maxCreation</code> height parameter set by the box creator (note: this is not the actual creation height; it aids in the creation of "payment channels").</li>
            </ol>
          </div>

          <p className="text-gray-300 mb-6">
            These pieces of information are stored in the first four registers (R0-R3) of the box. The remaining registers, from R4 to R9, can be used to store custom data for use in smart contracts. Scripts can access their own registers and the registers of <Link href="/Docs/developers/data-model-apis" className="text-blue-400 hover:text-blue-300 underline">input</Link> and <Link href="/Docs/developers/data-model-apis" className="text-blue-400 hover:text-blue-300 underline">output</Link> boxes of the spending transaction.
          </p>

          {/* Registers Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border border-neutral-700">
              <thead>
                <tr className="bg-neutral-800/50">
                  <th className="border border-neutral-700 px-4 py-3 text-left text-blue-400">Register</th>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-blue-400">Value</th>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-blue-400">Access via ErgoScript (<code className="text-sm">Box.</code> prefix)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-700 px-4 py-3">R0</td>
                  <td className="border border-neutral-700 px-4 py-3">Value (in nanoErgs)</td>
                  <td className="border border-neutral-700 px-4 py-3"><code className="bg-neutral-700 px-2 py-1 rounded">value</code></td>
                </tr>
                <tr className="bg-neutral-800/30">
                  <td className="border border-neutral-700 px-4 py-3">R1</td>
                  <td className="border border-neutral-700 px-4 py-3">Protection script (<Link href="/Docs/developers/ergoscript-languages/ergoscript-vs-ergotree" className="text-blue-400 hover:text-blue-300 underline">ErgoTree</Link>)</td>
                  <td className="border border-neutral-700 px-4 py-3"><code className="bg-neutral-700 px-2 py-1 rounded">propositionBytes</code></td>
                </tr>
                <tr>
                  <td className="border border-neutral-700 px-4 py-3">R2</td>
                  <td className="border border-neutral-700 px-4 py-3">Assets (<Link href="/Docs/ecosystem/Standards/eip4" className="text-blue-400 hover:text-blue-300 underline">Tokens</Link>)</td>
                  <td className="border border-neutral-700 px-4 py-3"><code className="bg-neutral-700 px-2 py-1 rounded">tokens</code></td>
                </tr>
                <tr className="bg-neutral-800/30">
                  <td className="border border-neutral-700 px-4 py-3">R3</td>
                  <td className="border border-neutral-700 px-4 py-3">Creation details (<code className="bg-neutral-700 px-1 py-0.5 rounded text-sm">(txId, outputIndex)</code>)</td>
                  <td className="border border-neutral-700 px-4 py-3"><code className="bg-neutral-700 px-2 py-1 rounded">creationInfo</code></td>
                </tr>
                <tr>
                  <td className="border border-neutral-700 px-4 py-3">R4-R9</td>
                  <td className="border border-neutral-700 px-4 py-3">Available for custom use</td>
                  <td className="border border-neutral-700 px-4 py-3"><code className="bg-neutral-700 px-2 py-1 rounded">R4[T]</code>, <code className="bg-neutral-700 px-2 py-1 rounded">R5[T]</code>, ... <code className="bg-neutral-700 px-2 py-1 rounded">R9[T]</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Warning Box */}
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-2">Keep in mind!</h4>
                <p className="text-gray-300">
                  Registers must be densely packed; you cannot place an empty register between non-empty ones (e.g., you cannot define R5 if R4 is empty).
                </p>
              </div>
            </div>
          </div>

          {/* Register Details */}
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Register Details</h2>

          <div className="space-y-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Register R0</h3>
              <p className="text-gray-300">
                Register R0 holds the monetary value of the box in nanoERGs. Use <code className="bg-neutral-700 px-2 py-1 rounded">Box.value</code> to access this register, where <code className="bg-neutral-700 px-2 py-1 rounded">Box</code> could signify <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-blue-400 hover:text-blue-300 underline"><code className="bg-neutral-700 px-2 py-1 rounded">SELF</code></Link>, or any box in the <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-blue-400 hover:text-blue-300 underline"><code className="bg-neutral-700 px-2 py-1 rounded">INPUTS</code></Link> or <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-blue-400 hover:text-blue-300 underline"><code className="bg-neutral-700 px-2 py-1 rounded">OUTPUTS</code></Link> collections.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Register R1</h3>
              <p className="text-gray-300">
                Register R1 stores the proposition bytes (the compiled <Link href="/Docs/developers/ergoscript-languages/ergoscript-vs-ergotree" className="text-blue-400 hover:text-blue-300 underline">ErgoTree</Link>) of the guarding <Link href="/Docs/developers/ergoscript-languages" className="text-blue-400 hover:text-blue-300 underline">ErgoScript</Link> contract associated with the box. Use <code className="bg-neutral-700 px-2 py-1 rounded">Box.propositionBytes</code> to access this register.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Register R2</h3>
              <p className="text-gray-300">
                Register R2 contains a collection of <Link href="/Docs/ecosystem/Standards/eip4" className="text-blue-400 hover:text-blue-300 underline">tokens</Link> stored in the box. Each token is identified by two elements: a unique token id (<code className="bg-neutral-700 px-2 py-1 rounded">Coll[Byte]</code>) and the quantity (<code className="bg-neutral-700 px-2 py-1 rounded">Long</code>) of the specific token. Use <code className="bg-neutral-700 px-2 py-1 rounded">Box.tokens</code> to access this collection (<code className="bg-neutral-700 px-2 py-1 rounded">Coll[(Coll[Byte], Long)]</code>).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Register R3</h3>
              <p className="text-gray-300">
                Register R3 holds information about the box's creation: <code className="bg-neutral-700 px-2 py-1 rounded">(txId: Coll[Byte], index: Short)</code>. Use <code className="bg-neutral-700 px-2 py-1 rounded">Box.creationInfo</code> to access this register. The creation height (the block height when the box was created) is accessible via <code className="bg-neutral-700 px-2 py-1 rounded">Box.creationInfo._2</code> and is part of Ergo's unique <Link href="/Docs/introduction/storage-rent" className="text-blue-400 hover:text-blue-300 underline">storage rent</Link> feature, where boxes can be spent after four years, allowing <Link href="/Docs/miners" className="text-blue-400 hover:text-blue-300 underline">miners</Link> to charge a small fee and recycle ERGs back into the blockchain.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Optional Registers R4-R9</h3>
              <p className="text-gray-300 mb-4">
                These registers can contain any data defined when the box first originates from a transaction. The data could be of any common type found in <Link href="/Docs/developers/ergoscript-languages" className="text-blue-400 hover:text-blue-300 underline">ErgoScript</Link>, along with more complex types built from Pairs and Collections. These registers may also contain complex types such as <code className="bg-neutral-700 px-2 py-1 rounded">Box</code>, <Link href="/Docs/developers/cryptographic-primitives/sigma-protocols" className="text-blue-400 hover:text-blue-300 underline"><code className="bg-neutral-700 px-2 py-1 rounded">SigmaProp</code></Link>, <code className="bg-neutral-700 px-2 py-1 rounded">GroupElement</code>, and <Link href="/Docs/developers/cryptographic-primitives/avl" className="text-blue-400 hover:text-blue-300 underline"><code className="bg-neutral-700 px-2 py-1 rounded">AVLTree</code></Link>.
              </p>
              
              <p className="text-gray-300 mb-3">The optional registers can hold any of the following data types:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
                <li><code className="bg-neutral-700 px-2 py-1 rounded">Int</code>, <code className="bg-neutral-700 px-2 py-1 rounded">Long</code> with standard Scala semantics.</li>
                <li><code className="bg-neutral-700 px-2 py-1 rounded">BigInt</code> - a 256-bit integer (all computations are modulo 2^256).</li>
                <li><code className="bg-neutral-700 px-2 py-1 rounded">GroupElement</code> - a point on the Secp256k1 curve represented in compressed format.</li>
                <li><code className="bg-neutral-700 px-2 py-1 rounded">Coll[Byte]</code> - a byte collection, conceptually similar to Scala's <code className="bg-neutral-700 px-2 py-1 rounded">Array[Byte]</code>.</li>
                <li>Collection of the above (i.e., <code className="bg-neutral-700 px-2 py-1 rounded">Coll[Int]</code>, <code className="bg-neutral-700 px-2 py-1 rounded">Coll[GroupElement]</code>, <code className="bg-neutral-700 px-2 py-1 rounded">Coll[Coll[Byte]]</code>, and so forth).</li>
              </ul>

              <p className="text-gray-300">
                A <code className="bg-neutral-700 px-2 py-1 rounded">boxId</code> is calculated based on the contents of all the registers, uniquely defining a box. This can be compared to Bitcoin's (<code className="bg-neutral-700 px-2 py-1 rounded">txId</code>, <code className="bg-neutral-700 px-2 py-1 rounded">vOut</code>) pairs.
              </p>
            </div>
          </div>

          {/* Note Box */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Note</h4>
                <p className="text-gray-300">
                  Ergo <code className="bg-neutral-700 px-2 py-1 rounded">txId</code> is dependent solely on the message and not on <Link href="/Docs/developers/cryptographic-primitives" className="text-blue-400 hover:text-blue-300 underline">signatures</Link> (similar to Bitcoin <a href="https://en.bitcoin.it/wiki/Segregated_Witness" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">SegWit</a> transactions). Hence, a <code className="bg-neutral-700 px-2 py-1 rounded">txId</code> is accessible even before signing. Like Bitcoin, Ergo supports <Link href="/Docs/developers/data-model-apis" className="text-blue-400 hover:text-blue-300 underline">chained transactions</Link>, meaning boxes with 0 confirmations can be spent.
                </p>
              </div>
            </div>
          </div>

          {/* Typed Registers Section */}
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Typed Registers</h2>

          <p className="text-gray-300 mb-6">
            Both <Link href="/Docs/developers/ergoscript-languages" className="text-blue-400 hover:text-blue-300 underline">ErgoScript</Link> and <Link href="/Docs/developers/ergoscript-languages/ergoscript-vs-ergotree" className="text-blue-400 hover:text-blue-300 underline">ErgoTree</Link> are <strong>typed</strong>, meaning that when a script accesses a register, it expects a specific type which is denoted in brackets.
          </p>

          <p className="text-gray-300 mb-4">For instance,</p>

          <UniversalCopyCodeBlock
            code={String.raw`// Assign the value of the R4 register of the current box (SELF) to the variable x
// The script expects R4 to contain an Int.
val x = SELF.R4[Int]`}
          />

          <p className="text-gray-300 mb-6 mt-4">
            In the above example, the register is expected to have an <code className="bg-neutral-700 px-2 py-1 rounded">Int</code> type. Therefore, the expression <code className="bg-neutral-700 px-2 py-1 rounded">SELF.R4[Int]</code> returns an <code className="bg-neutral-700 px-2 py-1 rounded">Option[Int]</code> type value.
          </p>

          <p className="text-gray-300 mb-4">When you try to retrieve the value of the register <code className="bg-neutral-700 px-2 py-1 rounded">SELF.R4[Int]</code>, there are three potential scenarios:</p>

          <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
            <li>The register R4 does not exist (was not defined when the box was created), hence <code className="bg-neutral-700 px-2 py-1 rounded">SELF.R4[Int].isDefined</code> will return <code className="bg-neutral-700 px-2 py-1 rounded">false</code>.</li>
            <li>The register R4 exists and has an <code className="bg-neutral-700 px-2 py-1 rounded">Int</code> type value, thus <code className="bg-neutral-700 px-2 py-1 rounded">SELF.R4[Int].get</code> will fetch that value, and <code className="bg-neutral-700 px-2 py-1 rounded">SELF.R4[Int].isDefined</code> will be <code className="bg-neutral-700 px-2 py-1 rounded">true</code>.</li>
            <li>The register R4 exists but carries a value of a different type (e.g., <code className="bg-neutral-700 px-2 py-1 rounded">Coll[Byte]</code>), in which case accessing it as <code className="bg-neutral-700 px-2 py-1 rounded">SELF.R4[Int]</code> will fail the script execution during <Link href="/Docs/developers/ergoscript-languages/script-validation" className="text-blue-400 hover:text-blue-300 underline">validation</Link>.</li>
          </ol>

          <p className="text-gray-300 mb-4">
            In some use cases, a register may contain values of various types depending on context. An additional register can be employed as a tag to facilitate the access of such a register safely.
          </p>

          <UniversalCopyCodeBlock
            code={String.raw`// Example using R5 as a type tag for data in R4
val tagOpt = SELF.R5[Int] // Retrieve the value of the register R5 of type Int and assign it to the variable \`tagOpt\`
val res = if (tagOpt.isDefined) { // Check if \`tagOpt\` is not empty
  val tag = tagOpt.get // Obtain the value of \`tagOpt\` and assign it to the variable \`tag\`
  if (tag == 1) { // Check if \`tag\` equals 1, indicating R4 holds an Int
    val x = SELF.R4[Int].get // Retrieve the value of the register R4 of type Int and assign it to the variable \`x\`
    // Compute \`res\` using the value \`x\` of type Int
    sigmaProp(x > 10) // Example condition
  } else if (tag == 2) { // Check if \`tag\` equals 2, indicating R4 holds a GroupElement
    val x = SELF.R4[GroupElement].get // Retrieve the value of the register R4 of type GroupElement and assign it to the variable \`x\`
    // Compute \`res\` using the value \`x\` of type GroupElement
    sigmaProp(x == someGroupElement) // Example condition
  } else if (tag == 3) { // Check if \`tag\` equals 3, indicating R4 holds Coll[Byte]
    val x = SELF.R4[Coll[Byte]].get // Retrieve the value of the register R4 of type Coll[Byte] and assign it to the variable \`x\`
    // Compute \`res\` using the value \`x\` of type Coll[Byte]
    sigmaProp(blake2b256(x) == someHash) // Example condition
  } else {
    // Handle unexpected tag value - fail the script
    sigmaProp(false)
  }
} else {
  // Handle case where tag register R5 is not present - fail the script
  sigmaProp(false)
}
// Context Variables used: SELF (See blockchain-context.md)
// Functions used: sigmaProp, PK (See sigma.md)`}
          />
        </div>
    </>
  );
} 