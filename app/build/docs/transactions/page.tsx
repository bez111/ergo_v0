import Link from "next/link"
import {
  Layers,
  Share2,
  Code,
  CheckCircle,
  AlertTriangle,
  Terminal,
  Database,
  Clock,
  KeyRound,
  Users,
  ChevronRight
} from "lucide-react"

export default function TransactionsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Transactions & ErgoScript
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Learn the structure of Ergo transactions and how ErgoScript defines their spending conditions.
        </p>
      </div>

      {/* Anatomy Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Share2 className="w-6 h-6 text-orange-400" /> Anatomy of an Ergo Transaction
        </h2>
        <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Inputs:</strong> List of BoxIds (UTXOs) to be spent. Each input includes a <span className="text-orange-400">spendingProof</span> that satisfies the box's script.</li>
            <li><strong>Outputs:</strong> List of new boxes to be created. Each output contains:
              <ul className="list-disc pl-6">
                <li><span className="text-orange-400">value</span>: Amount of ERG</li>
                <li><span className="text-orange-400">assets</span>: List of tokens</li>
                <li><span className="text-orange-400">ergoTree</span>: Compiled ErgoScript</li>
                <li><span className="text-orange-400">registers</span>: Data registers (R4-R9)</li>
                <li><span className="text-orange-400">creationHeight</span>: Block height of creation</li>
              </ul>
            </li>
            <li><strong>Data Inputs (optional):</strong> Boxes used for reading data (e.g., oracles), not spent.</li>
            <li><strong>Fee:</strong> ERG paid to miners for including the transaction.</li>
            <li><strong>Change:</strong> Excess ERG returned to sender as a new box.</li>
          </ul>
        </div>
        <div className="bg-black border border-neutral-700 rounded-xl p-4 mb-4">
          <div className="font-semibold text-white mb-2">Example Transaction (pseudocode):</div>
          <pre className="text-xs text-gray-300 overflow-x-auto">
{`Transaction {
  inputs: [
    { boxId: "...", spendingProof: "..." }
  ],
  outputs: [
    { value:..., assets:..., ergoTree: "...", registers: {}, creationHeight:... }
  ],
  fee: 0.001 ERG,
  dataInputs: []
}`}
          </pre>
        </div>
      </section>

      {/* ErgoScript Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Code className="w-6 h-6 text-cyan-400" /> How ErgoScript Defines Smart Contract Logic
        </h2>
        <p className="text-gray-300 mb-4">
          ErgoScript is the language that protects boxes. It defines the conditions under which a box can be spent. When a transaction attempts to spend a box, its ErgoScript is executed in the context of that transaction. If the script returns <span className="text-green-400 font-semibold">true</span>, the box can be spent; if <span className="text-red-400 font-semibold">false</span>, the transaction is invalid.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <div className="font-semibold mb-2 text-orange-400">Spending Conditions:</div>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Signatures: <span className="text-orange-400">pk.isValid</span></li>
              <li>Values: Check ERG or token values</li>
              <li>Registers: Check data in R4-R9</li>
              <li>Transaction Props: Block height, time, hashes, # of inputs/outputs</li>
              <li>Box Props: Properties of input/output/data boxes</li>
            </ul>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
            <div className="font-semibold mb-2 text-cyan-400">Examples:</div>
            <div className="mb-2">
              <span className="font-mono text-orange-300">sigmaProp(PK)</span>
              <span className="text-gray-400 text-xs ml-2">{"// Pay-to-PublicKey"}</span>
            </div>
            <div className="mb-2">
              <span className="font-mono text-orange-300">atLeast(2, Coll(PK1, PK2, PK3))</span>
              <span className="text-gray-400 text-xs ml-2">{"// 2-of-3 MultiSig"}</span>
            </div>
            <div className="mb-2">
              <span className="font-mono text-orange-300">HEIGHT &gt; 1234567 &amp;&amp; PK.isValid</span>
              <span className="text-gray-400 text-xs ml-2">{"// Time-Locked"}</span>
            </div>
            <div className="mb-2">
              <span className="font-mono text-orange-300">{`val oracleBox = CONTEXT.dataInputs(0)
val price = oracleBox.R4[Long].get
val myCondition = price > 1000000000L
myCondition && PK.isValid`}</span>
              <span className="text-gray-400 text-xs ml-2">{"// Oracle Example"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <CheckCircle className="w-6 h-6 text-green-400" /> Transaction Verification Process
        </h2>
        <div className="bg-gradient-to-r from-green-500/10 to-orange-500/10 border border-green-500/20 rounded-xl p-6">
          <ol className="list-decimal pl-6 text-gray-300 space-y-2">
            <li><strong>Syntax Check:</strong> Transaction format is validated.</li>
            <li><strong>Input/Output Check:</strong> Inputs = Outputs + Fee (ERG/tokens).</li>
            <li><strong>Script Execution:</strong> Each input's ErgoScript is executed. If <span className="text-green-400">true</span>, box is spent; if <span className="text-red-400">false</span>, transaction is rejected.</li>
            <li><strong>UTXO Uniqueness:</strong> Inputs must not be previously spent.</li>
          </ol>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Transaction verification in the mempool and mainnet strictly follows these rules.
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Database className="w-6 h-6 text-blue-400" /> The Concept of "Context" in Script Execution
        </h2>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li><span className="text-orange-400">SELF</span>: The current input box</li>
            <li><span className="text-orange-400">INPUTS</span>: All input boxes in the transaction</li>
            <li><span className="text-orange-400">OUTPUTS</span>: All output boxes</li>
            <li><span className="text-orange-400">DATA_INPUTS</span>: All data boxes</li>
            <li><span className="text-orange-400">CONTEXT</span>: Blockchain state (e.g., <span className="font-mono">HEIGHT</span>, <span className="font-mono">LAST_BLOCK_ID</span>)</li>
            <li><span className="text-orange-400">TRANSACTION</span>: Info about the transaction (id, fee, etc.)</li>
          </ul>
          <p className="text-gray-400 mt-4">
            Using the context, scripts can create complex conditions based on blockchain state, other boxes, and transaction properties.
          </p>
        </div>
      </section>
    </>
  )
}
