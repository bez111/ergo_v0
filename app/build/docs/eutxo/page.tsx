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
          How Ergo stores data. Understand Ergo's unique Extended UTXO model, which provides a secure and scalable foundation for all smart contracts.
        </p>
        <blockquote className="border-l-4 border-orange-400 pl-6 py-4 bg-orange-400/10 rounded-r-lg">
          <p className="text-lg italic">
            "The eUTXO model combines the security of Bitcoin's UTXO system with the expressive power of smart contracts."
          </p>
        </blockquote>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-green-400" />
              <h3 className="text-lg font-bold text-white">Security</h3>
            </div>
            <p className="text-gray-400">
              Each UTXO can only be spent once, preventing double-spending attacks and ensuring transaction integrity.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Composability</h3>
            </div>
            <p className="text-gray-400">
              Smart contracts can interact with each other seamlessly, enabling complex decentralized applications.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h3 className="text-lg font-bold text-white">Scalability</h3>
            </div>
            <p className="text-gray-400">
              Parallel processing of independent transactions, allowing for higher throughput than account-based models.
            </p>
          </div>
        </div>
      </div>

      {/* What is eUTXO */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">What is the eUTXO Model?</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            The Extended UTXO (eUTXO) model is an evolution of Bitcoin's UTXO system that adds programmable logic to each transaction output. 
            Unlike traditional account-based models (like Ethereum), Ergo stores state in discrete, immutable "boxes" that can only be spent once.
          </p>
          <p className="text-gray-300">
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
        </div>
      </div>

      {/* How Data is Stored */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">How Data is Stored in Boxes</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-6">
            In the eUTXO model, there are no traditional "account balances." Instead, all data and assets are stored in discrete boxes 
            that can only be consumed once. This creates a more predictable and secure system.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-orange-400">Box Structure</h3>
              <div className="space-y-3">
                <div className="bg-black border border-neutral-600 rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-white mb-2">Value</h4>
                  <p className="text-xs text-gray-400">Amount of ERG in nanoERG</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-white mb-2">Assets</h4>
                  <p className="text-xs text-gray-400">Custom tokens and their amounts</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-white mb-2">ErgoTree</h4>
                  <p className="text-xs text-gray-400">Script defining spending conditions</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-white mb-2">Registers R4-R9</h4>
                  <p className="text-xs text-gray-400">Additional data storage</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Example: Counter Contract</h3>
              <div className="bg-black border border-neutral-600 rounded-lg p-4">
                <pre className="text-xs text-gray-300">
{`Box {
  value: 1000000, // 1 ERG
  assets: [],
  ergoTree: "0008cd03...", // Compiled script
  registers: {
    R4: 42 // Counter value
  }
}`}
                </pre>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                This box contains a counter value of 42 in register R4, protected by a script that only allows 
                the owner to increment it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Immutability and Single-Spend */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Immutability and Single-Spend Principle</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-green-400">Immutability</h3>
              <p className="text-gray-300 mb-4">
                Once a box is created, its contents cannot be modified. To "update" data, you must:
              </p>
              <ol className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="bg-green-500 text-black px-2 py-1 rounded text-xs font-bold mt-0.5">1</span>
                  <span>Spend the existing box (consume it)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-500 text-black px-2 py-1 rounded text-xs font-bold mt-0.5">2</span>
                  <span>Create a new box with updated data</span>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-400">Single-Spend Security</h3>
              <p className="text-gray-300 mb-4">
                Each box can only be spent once, providing several security benefits:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Prevents double-spending attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Eliminates race conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Simplifies transaction validation</span>
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
        <h2 className="text-2xl font-bold mb-6 text-white">Advanced Applications</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-6">
            The eUTXO model enables sophisticated decentralized applications through complex box selection algorithms and script interactions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-purple-400">DeFi Protocols</h3>
              <p className="text-gray-400 text-sm mb-3">
                Decentralized exchanges, lending platforms, and yield farming protocols can be built with enhanced security.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Atomic swaps</li>
                <li>• Liquidity pools</li>
                <li>• Collateralized loans</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-pink-400">NFTs and Gaming</h3>
              <p className="text-gray-400 text-sm mb-3">
                Unique digital assets and gaming items with complex ownership and transfer logic.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Dynamic NFTs</li>
                <li>• Gaming items</li>
                <li>• Digital collectibles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions & ErgoScript */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Transactions & ErgoScript</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-6">
            Transactions in the eUTXO model consume existing boxes and create new ones. ErgoScript defines the conditions 
            under which boxes can be spent.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-orange-400">Transaction Anatomy</h3>
              <div className="space-y-3">
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Inputs</h4>
                  <p className="text-xs text-gray-400">Boxes to be consumed (spent)</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Outputs</h4>
                  <p className="text-xs text-gray-400">New boxes to be created</p>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Data Inputs</h4>
                  <p className="text-xs text-gray-400">Read-only boxes for context</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-cyan-400">ErgoScript Examples</h3>
              <div className="space-y-3">
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Simple Signature</h4>
                  <pre className="text-xs text-gray-300">pk.isValid</pre>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Multi-Signature</h4>
                  <pre className="text-xs text-gray-300">pk1.isValid || pk2.isValid</pre>
                </div>
                <div className="bg-black border border-neutral-600 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-white mb-1">Time Lock</h4>
                  <pre className="text-xs text-gray-300">HEIGHT &gt; 1000000</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Network Verification */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">How the Network Verifies Transactions</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-xs font-bold mt-1">1</span>
              <div>
                <h4 className="font-semibold mb-1">Box Validation</h4>
                <p className="text-sm text-gray-400">Check that input boxes exist and haven't been spent</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-xs font-bold mt-1">2</span>
              <div>
                <h4 className="font-semibold mb-1">Script Execution</h4>
                <p className="text-sm text-gray-400">Run ErgoScript for each input box to verify spending conditions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-xs font-bold mt-1">3</span>
              <div>
                <h4 className="font-semibold mb-1">Output Creation</h4>
                <p className="text-sm text-gray-400">Create new boxes with specified values, assets, and scripts</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-xs font-bold mt-1">4</span>
              <div>
                <h4 className="font-semibold mb-1">Consensus</h4>
                <p className="text-sm text-gray-400">Add transaction to blockchain if all validations pass</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Ready to Build?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-orange-400">Learn ErgoScript</h4>
            <p className="text-gray-400 text-sm mb-3">
              Master the programming language that powers Ergo's smart contracts.
            </p>
            <Link
              href="/build/docs/contracts"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Smart Contracts Guide <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-cyan-400">Build Your First dApp</h4>
            <p className="text-gray-400 text-sm mb-3">
              Apply your knowledge by creating a complete decentralized application.
            </p>
            <Link
              href="/build/docs/first-dapp"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              First dApp Tutorial <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 