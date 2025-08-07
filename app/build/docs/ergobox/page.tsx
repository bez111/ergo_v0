import {
  Cpu,
  Layers,
  Code,
  Database,
  KeyRound,
  Lock,
  Hash,
  ChevronRight,
  AlertTriangle,
  ExternalLink,
  Info,
} from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/ui"

export default function ErgoBoxPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          ErgoBox & ErgoTree
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Deep dive into the virtual machine and script serialization powering Ergo smart contracts.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-2">
          <span className="flex items-center gap-1"><Cpu className="w-4 h-4" />Stack-based VM</span>
          <span className="flex items-center gap-1"><Layers className="w-4 h-4" />eUTXO Model</span>
          <Link href="https://docs.ergoplatform.com/" target="_blank" className="inline-flex items-center gap-1 text-orange-400 hover:underline"><ExternalLink className="w-4 h-4" />Ergo Protocol Docs</Link>
        </div>
      </div>

      {/* ErgoBox Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400"><Cpu className="w-6 h-6" /> ErgoBox Architecture</h2>
        <div className="bg-neutral-900/60 border border-orange-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><b>Stack-Based:</b> Operations are performed by pushing operands onto a stack and popping them for instruction execution.</li>
            <li><b>Deterministic Execution:</b> Same script + same inputs = same output. Critical for blockchain consensus.</li>
            <li><b>Resource-Constrained:</b> Limited by time and memory to prevent DoS and ensure predictable fees.</li>
            <li><b>Sigma-Protocol Support:</b> Native support for Sigma-protocols enables advanced cryptographic proofs.</li>
          </ul>
        </div>
      </section>

      {/* ErgoTree Format */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400"><Code className="w-6 h-6" /> ErgoTree Format</h2>
        <div className="bg-neutral-900/60 border border-cyan-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><b>Serialization:</b> Efficient format minimizes on-chain data size.</li>
            <li><b>Structure:</b> Sequence of bytes representing instructions and data.</li>
            <li><b>Example:</b> <span className="font-mono">sigmaProp(PK)</span> compiles to a short bytecode sequence.</li>
          </ul>
          <div className="mt-4">
            <span className="text-gray-400 text-sm">Example ErgoScript:</span>
            <CodeBlock language="typescript"
              code={`sigmaProp(PubKey)`}
            />
            <span className="text-gray-400 text-sm">Compiled ErgoTree (hex):</span>
            <CodeBlock language="typescript"
              code={`0008cd02b4a8...`}
            />
          </div>
        </div>
      </section>

      {/* ErgoBox Instructions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400"><Database className="w-6 h-6" /> ErgoBox Instructions</h2>
        <div className="bg-neutral-900/60 border border-green-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><b>Arithmetic:</b> +, -, *, /</li>
            <li><b>Logical:</b> AND, OR, NOT</li>
            <li><b>Stack:</b> PUSH, POP, DUP</li>
            <li><b>Data Access:</b> Read registers, context</li>
            <li><b>Crypto:</b> Hash, signature, Sigma-protocols</li>
          </ul>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span>See full instruction set in <Link href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/docs/bytecode.md" target="_blank" className="underline text-orange-400">SigmaState Bytecode Spec</Link></span>
          </div>
        </div>
      </section>

      {/* Script Execution & Proof Verification */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-400"><Lock className="w-6 h-6" /> Script Execution & Proof Verification</h2>
        <div className="bg-neutral-900/60 border border-purple-500/30 rounded-xl p-6 mb-4">
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Load <b>ErgoTree</b> from input box's script.</li>
            <li>Provide <b>context</b> (inputs, outputs, data, block height, etc.).</li>
            <li>Execute <b>ErgoTree</b> instructions.</li>
            <li>Verify <b>spendingProof</b> against cryptographic conditions.</li>
            <li>If all checks pass, box is spent; else, transaction is rejected.</li>
          </ol>
        </div>
      </section>

      {/* Box Registers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400"><Database className="w-6 h-6" /> Box Registers</h2>
        <div className="bg-neutral-900/60 border border-yellow-500/30 rounded-xl p-6 mb-4">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><b>R0-R3:</b> Reserved for system (e.g., R0 = token ID for minting).</li>
            <li><b>R4-R9:</b> For developer use (store custom data for contracts).</li>
            <li><b>Data Types:</b> Long, Coll, SigmaProp, Option, etc.</li>
            <li><b>Usage Examples:</b>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>R4: Counter value</li>
                <li>R5: Hash of secret (HTLC)</li>
                <li>R6: Oracle ID or timestamp</li>
                <li>R7-R9: Complex data/parameters</li>
              </ul>
            </li>
          </ul>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Registers allow stateful dApps in the eUTXO model. Use with care for security and efficiency.</span>
          </div>
        </div>
      </section>
    </>
  )
}
