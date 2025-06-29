import {
  Layers,
  Shield,
  Zap,
  Database,
  Share2,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Cpu,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function EUTXOPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          eUTXO Model
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Explore Ergo's Extended UTXO (eUTXO) model, a powerful and secure foundation for decentralized applications and smart contracts, building on Bitcoin's proven UTXO design.
        </p>
        <blockquote className="border-l-4 border-orange-400 pl-6 py-4 bg-orange-400/10 rounded-r-lg">
          <p className="text-lg italic">
            "The eUTXO model combines the security of Bitcoin's UTXO system with the expressive power of smart contracts."
          </p>
        </blockquote>
      </div>

      {/* Why eUTXO? Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Why eUTXO? Key Advantages</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-green-400">Enhanced Security</h3>
              <p className="text-gray-300 mb-4">
                Each UTXO is a self-contained unit that can only be spent once. This inherently prevents double-spending and eliminates many common attack vectors found in account-based models.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-400">Predictable Execution</h3>
              <p className="text-gray-300 mb-4">
                The outcome of a transaction is deterministic and can be fully validated off-chain before submission. This reduces unexpected failures and simplifies dApp development.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-yellow-400">Greater Scalability</h3>
              <p className="text-gray-300 mb-4">
                Independent transactions can be processed in parallel, leading to higher throughput and better network utilization compared to sequential processing in global state models.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-purple-400">Improved Privacy</h3>
              <p className="text-gray-300 mb-4">
                Without a global account state, transaction history is less directly linked to a single address, offering a degree of privacy by default.
              </p>
            </div>
          </div>
        </div>
      </div>

      

      {/* What is eUTXO */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">What is the eUTXO Model?</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            The Extended UTXO (eUTXO) model is an evolution of Bitcoin's UTXO system that adds programmable logic to each transaction output. Unlike traditional account-based models (like Ethereum), Ergo stores state in discrete, immutable "boxes" that can only be spent once.
          </p>
          <p className="text-gray-300 mb-4">
            Each box contains:
          </p>
          <ul className="space-y-2 mt-4 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>Value:</strong> The amount of ERG (Ergo's native token)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>Assets:</strong> Custom tokens and NFTs</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>ErgoTree:</strong> The script that controls spending conditions</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>Registers:</strong> Additional data storage (R4-R9)</span>
            </li>
          </ul>
          <p className="text-gray-300 mt-4">
            This model provides a clear and auditable history of every asset and its associated logic, making it highly secure and transparent.
          </p>
        </div>
      </div>

      {/* How Data is Stored */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Ergo Boxes: The Fundamental Unit of State</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-6">
            In the eUTXO model, there are no traditional "account balances." Instead, all data, assets, and smart contract logic are encapsulated within discrete, immutable "boxes." These boxes are the fundamental units of state on the Ergo blockchain.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-orange-400">Box Structure</h3>
              <p className="text-gray-300 text-sm mb-4">
                Each Ergo box is uniquely identified and contains several key components:
              </p>
              <div className="space-y-3">
                <div className="bg-black border border-neutral-600 rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-white mb-2">Value (nanoERG)</h4>
                  <p className="text-xs text-gray-400">The amount of ERG held by the box. Measured in nanoERG (1 ERG = 1,000,000,000 nanoERG).</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-white mb-2">Assets</h4>
                  <p className="text-xs text-gray-400">A list of custom tokens (fungible and NFTs) held by the box, along with their amounts.</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-white mb-2">ErgoTree (Script)</h4>
                  <p className="text-xs text-gray-400">The compiled ErgoScript that defines the conditions under which this box can be spent. This is the smart contract logic.</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-white mb-2">Registers (R4-R9)</h4>
                  <p className="text-xs text-gray-400">Optional, user-definable data storage. These registers can hold various data types (e.g., integers, byte arrays, Sigma-protocols) and are crucial for storing dApp state.</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-white mb-2">Creation Height</h4>
                  <p className="text-xs text-gray-400">The block height at which the box was created. Useful for time-locked contracts.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Example: Counter Contract Box</h3>
              <p className="text-gray-300 text-sm mb-4">
                Consider a simple counter dApp. The current count would be stored in an Ergo box:
              </p>
              <div className="bg-black border border-neutral-600 rounded-lg p-4">
                <pre className="text-xs text-gray-300">
{`Box {
  value: 1000000, // 0.001 ERG (minimum value)
  assets: [],
  ergoTree: "0008cd03...", // Compiled ErgoScript for counter logic
  registers: {
    R4: 42 // Current counter value stored in R4
  },
  creationHeight: 1234567 // Block height when this box was created
}`}
                </pre>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                This box contains a counter value of 42 in register R4, protected by a script that only allows the owner to increment it. To update the counter, this box is consumed, and a new box with `R4: 43` is created.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Immutability and Single-Spend */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Immutability & Single-Spend: Core Security Principles</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-green-400">Immutability of Boxes</h3>
              <p className="text-gray-300 mb-4">
                Once an Ergo box is created and added to the blockchain, its contents (value, assets, ErgoTree, registers) cannot be directly modified. To "update" the state represented by a box, you must follow a specific pattern:
              </p>
              <ol className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="bg-green-500 text-black px-2 py-1 rounded text-xs font-bold mt-0.5">1</span>
                  <span>**Consume the existing box:** The old box is spent as an input in a new transaction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-500 text-black px-2 py-1 rounded text-xs font-bold mt-0.5">2</span>
                  <span>**Create a new box with updated data:** A new output box is created in the same transaction, containing the desired updated state.</span>
                </li>
              </ol>
              <p className="text-gray-400 text-sm mt-3">
                This ensures a clear, auditable trail of state changes and prevents any tampering with historical data.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-400">Single-Spend Security</h3>
              <p className="text-gray-300 mb-4">
                Each Ergo box can only be spent exactly once. This fundamental principle provides several significant security and design benefits:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>**Prevents Double-Spending:** The most critical security feature, ensuring that funds or assets cannot be spent twice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>**Eliminates Race Conditions:** Since each box is consumed atomically, there are no ambiguous states or conflicts when multiple transactions try to spend the same box.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>**Simplifies Transaction Validation:** Nodes only need to verify that input boxes are unspent and that their scripts are satisfied, rather than managing complex global account states.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>**Enables Parallel Processing:** Independent transactions (those spending different sets of boxes) can be processed in parallel, contributing to higher network throughput.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">eUTXO vs Account-Based Model</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-3 px-4 text-white font-semibold">Characteristic</th>
                  <th className="text-left py-3 px-4 text-orange-400 font-semibold">eUTXO (Ergo)</th>
                  <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Account-Based (Ethereum)</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-medium">State Storage</td>
                  <td className="py-3 px-4">Discrete, immutable boxes</td>
                  <td className="py-3 px-4">Mutable account balances</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-medium">Transaction Processing</td>
                  <td className="py-3 px-4">Parallel (independent transactions)</td>
                  <td className="py-3 px-4">Sequential (global state)</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-medium">Security Model</td>
                  <td className="py-3 px-4">Single-spend, no race conditions</td>
                  <td className="py-3 px-4">Nonce-based, potential race conditions</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-medium">Privacy</td>
                  <td className="py-3 px-4">Better (no global state)</td>
                  <td className="py-3 px-4">Limited (global state visible)</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-medium">Complexity</td>
                  <td className="py-3 px-4">Higher (box selection)</td>
                  <td className="py-3 px-4">Lower (direct account access)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Scalability</td>
                  <td className="py-3 px-4">Better (parallel processing)</td>
                  <td className="py-3 px-4">Limited (sequential processing)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Advanced Applications */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Advanced Applications & Unique Features of eUTXO</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-6">
            The eUTXO model, particularly as implemented in Ergo, enables a wide range of advanced decentralized applications and unique blockchain features that are difficult or impossible to achieve with traditional account-based models.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-purple-400">DeFi Protocols</h3>
              <p className="text-gray-400 text-sm mb-3">
                The eUTXO model provides a robust and secure foundation for decentralized finance (DeFi) applications, minimizing common attack vectors.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• **Atomic Swaps:** Trustless exchange of assets between different blockchains.</li>
                <li>• **Decentralized Exchanges (DEXs):** Secure and efficient trading without intermediaries.</li>
                <li>• **Lending & Borrowing:** Collateralized loans and other financial primitives.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-pink-400">NFTs and Gaming</h3>
              <p className="text-gray-400 text-sm mb-3">
                The ability to attach complex logic directly to individual assets makes eUTXO ideal for advanced NFTs and in-game items.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• **Dynamic NFTs:** NFTs whose properties can change based on on-chain conditions.</li>
                <li>• **In-game Items:** Secure and verifiable ownership and transfer of game assets.</li>
                <li>• **Digital Collectibles:** Unique, provably scarce digital items.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-orange-400">Storage Rent</h3>
              <p className="text-gray-400 text-sm mb-3">
                A unique feature of Ergo, where dormant boxes (UTXOs) periodically pay a small fee to remain on the blockchain, incentivizing efficient state management and preventing state bloat.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-cyan-400">NiPoPoWs (Non-Interactive Proofs of Proof-of-Work)</h3>
              <p className="text-gray-400 text-sm mb-3">
                Ergo's light clients use NiPoPoWs to verify blockchain state without downloading the entire chain, enabling secure and efficient mobile and browser-based applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions & ErgoScript */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Transactions & ErgoScript: The Logic of State Transitions</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-6">
            In the eUTXO model, transactions are the only way to change the blockchain's state. A transaction consumes existing boxes as inputs and creates new boxes as outputs. ErgoScript defines the precise conditions under which input boxes can be spent.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-orange-400">Transaction Anatomy</h3>
              <p className="text-gray-300 text-sm mb-4">
                An Ergo transaction consists of:
              </p>
              <div className="space-y-3">
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Inputs</h4>
                  <p className="text-xs text-gray-400">References to existing, unspent boxes that will be consumed by this transaction.</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Outputs</h4>
                  <p className="text-xs text-gray-400">Newly created boxes that will be added to the UTXO set. These contain value, assets, and new ErgoScript.</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Data Inputs (Optional)</h4>
                  <p className="text-xs text-gray-400">References to existing boxes that are read-only and provide context for script execution but are not consumed.</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Fee & Change</h4>
                  <p className="text-xs text-gray-400">Transactions must pay a network fee. Any remaining ERG from inputs (after outputs and fees) is returned as change to a new output box.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-cyan-400">ErgoScript Examples</h3>
              <p className="text-gray-300 text-sm mb-4">
                ErgoScript defines the spending conditions for boxes. Here are some basic examples:
              </p>
              <div className="space-y-3">
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Simple Signature (Pay-to-Public-Key)</h4>
                  <pre className="text-xs text-gray-300">pk.isValid</pre>
                  <p className="text-gray-400 text-xs mt-1">Requires a valid signature from the public key `pk`.</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Multi-Signature (Any-of-N)</h4>
                  <pre className="text-xs text-gray-300">pk1.isValid || pk2.isValid</pre>
                  <p className="text-gray-400 text-xs mt-1">Requires a valid signature from either `pk1` OR `pk2`.</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Time Lock (Absolute Height)</h4>
                  <pre className="text-xs text-gray-300">HEIGHT &gt; 1000000</pre>
                  <p className="text-gray-400 text-xs mt-1">The box can only be spent after block height 1,000,000.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Network Verification */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Transaction Validation in the eUTXO Model</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-6">
            When a transaction is submitted to the Ergo network, nodes perform a series of checks to ensure its validity. This process is highly efficient and secure due to the deterministic nature of the eUTXO model.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-xs font-bold mt-1">1</span>
              <div>
                <h4 className="font-semibold mb-1">Input Box Validation</h4>
                <p className="text-sm text-gray-400">Nodes first verify that all input boxes referenced in the transaction actually exist on the blockchain and have not been previously spent. This prevents double-spending.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-xs font-bold mt-1">2</span>
              <div>
                <h4 className="font-semibold mb-1">ErgoScript Execution</h4>
                <p className="text-sm text-gray-400">For each input box, the node executes its associated ErgoScript. The script must evaluate to `true` for the transaction to be valid. This is where the smart contract logic is enforced.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-xs font-bold mt-1">3</span>
              <div>
                <h4 className="font-semibold mb-1">Output Box Creation & Balance Check</h4>
                <p className="text-sm text-gray-400">New output boxes are created as specified in the transaction. Nodes verify that the total value (ERG + assets) of the input boxes equals the total value of the output boxes plus the transaction fee. No new ERG or assets can be created out of thin air.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-xs font-bold mt-1">4</span>
              <div>
                <h4 className="font-semibold mb-1">Consensus & Inclusion</h4>
                <p className="text-sm text-gray-400">If all validation checks pass, the transaction is considered valid and can be included in a block by a miner. Once mined, it becomes part of the immutable blockchain history.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Next Steps: Deep Dive into Ergo</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-orange-400">Master ErgoScript</h4>
            <p className="text-gray-400 text-sm mb-3">
              The eUTXO model's power comes from ErgoScript. Learn how to write complex and secure smart contracts.
            </p>
            <Link
              href="/build/docs/contracts"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Smart Contracts Guide <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
        </div>
      </div>
    </>
  )
} 