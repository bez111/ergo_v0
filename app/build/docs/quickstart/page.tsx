import {
  Rocket,
  Play,
  Code,
  Settings,
  Share2,
  Wrench,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"

export default function QuickstartPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Quickstart
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Build your first Ergo program directly in the browser. This guide will walk you through creating a simple smart contract and deploying it to testnet.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/build/playground"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" /> Try Ergo Playground
          </Link>
          <Link
            href="/build/docs/first-dapp"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Code className="w-5 h-5 mr-2" /> Build First dApp
          </Link>
        </div>
      </div>

      {/* Goal Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Rocket className="w-5 h-5 text-orange-400" /> Goal
        </h3>
        <p className="text-gray-300">
          Allow users to write and run their first Ergo program in minutes, without the need for complex local setup.
        </p>
      </div>

      {/* Start Your Journey Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Start Your Journey with Ergo</h3>
        <p className="text-lg text-gray-300 mb-6">
          Start your journey with Ergo right in your browser! Our Ergo Playground is an interactive environment 
          that allows you to write, compile, and simulate ErgoScript contracts without installing any software 
          on your computer. It's the ideal way to quickly grasp the basics of ErgoScript and the eUTXO model.
        </p>
      </div>

      {/* Interactive Tutorial Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Play className="w-5 h-5 text-orange-400" /> Interactive Tutorial
          </h4>
          <p className="text-gray-400 mb-4">
            Start with our browser-based playground. No setup required - write and test ErgoScript contracts instantly.
          </p>
          <Link
            href="/build/playground"
            className="inline-flex items-center text-orange-400 hover:text-orange-300"
          >
            Open Playground <ExternalLink className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-cyan-400" /> First dApp
          </h4>
          <p className="text-gray-400 mb-4">
            Build a complete decentralized application step-by-step with our guided tutorial.
          </p>
          <Link
            href="/build/docs/first-dapp"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
          >
            Start Building <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* Ergo Playground Introduction */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-5 h-5 text-cyan-400" /> Introduction to Ergo Playground
        </h3>
        <p className="text-gray-300 mb-4">
          Ergo Playground is a web-based tool that provides you with a sandbox for experimenting with ErgoScript. It includes:
        </p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <Code className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span><strong>Code Editor:</strong> For writing your ErgoScript.</span>
          </li>
          <li className="flex items-start gap-3">
            <Settings className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <span><strong>Compiler:</strong> Converts your ErgoScript into ErgoTree (bytecode). Note: The compiler functionality in Playground may sometimes lag behind the CLI compiler (ergo-tool).</span>
          </li>
          <li className="flex items-start gap-3">
            <Share2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
            <span><strong>Transaction Simulator:</strong> Allows you to create and test transactions that interact with your contract, mimicking blockchain behavior.</span>
          </li>
          <li className="flex items-start gap-3">
            <Wrench className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <span><strong>Debugging Tools:</strong> Help you understand how your script processes various inputs. Important: Debugging in Playground is limited, and it's not always possible to see a full trace. For complex contracts and deep debugging, it is recommended to test on a local or testnet environment.</span>
          </li>
        </ul>
      </div>

      {/* Step-by-step Tutorial */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Step-by-step Tutorial: A Simple Counter in ErgoScript</h3>
        <p className="text-lg text-gray-300 mb-6">
          Let's create a simple smart contract that will store a number and allow it to be incremented.
        </p>

        <div className="space-y-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-sm font-bold">1</span>
              Open Ergo Playground
            </h4>
            <p className="text-gray-300 mb-3">
              Go to the link: <Link href="/build/playground" className="text-orange-400 hover:text-orange-300">Ergo Playground</Link>.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-sm font-bold">2</span>
              Write ErgoScript
            </h4>
            <p className="text-gray-300 mb-3">
              Paste the following code into the editor:
            </p>
            <div className="bg-black border border-neutral-600 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-300">
{`{
  // Contract for a simple counter
  // Input parameters:
  //   currentValue: Long - current value of the counter
  //   incrementAmount: Long - amount to increment the counter by
  //   pk: SigmaProp - public key of the owner who can increment the counter

  // Spending condition:
  //   1. The input box must contain the current counter value in R4.
  //   2. The output box must contain the new counter value (currentValue + incrementAmount) in R4.
  //   3. The output box must be protected by the same public key.
  //   4. The input transaction must be signed by the owner.

  // Check that the input box has the correct type and contains the counter value
  // (assuming R4 is used to store the counter value)
  val current_value = SELF.R4[Long].get

  // Check that there is one output box
  val output_box = OUTPUTS(0)

  // Check that the output box is protected by the same public key
  val output_pk = output_box.propositionBytes == pk.propBytes

  // Check that the new counter value in the output box equals the expected value
  val value_incremented = output_box.R4[Long].get == current_value + incrementAmount

  // Check that the transaction is signed by the owner
  val signed_by_owner = pk.isValid

  // All conditions must be true
  output_pk && value_incremented && signed_by_owner
}`}
              </pre>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-sm font-bold">3</span>
              Compile
            </h4>
            <p className="text-gray-300">
              Click the "Compile" button (or similar) in the Playground. You will see the generated ErgoTree (bytecode) of your contract.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="bg-orange-500 text-black px-2 py-1 rounded text-sm font-bold">4</span>
              Simulate a Transaction
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">Create an input box:</h5>
                <p className="text-gray-300 text-sm">
                  Simulate an existing UTXO that will contain the initial counter value. Specify the initial value in R4 (register 4), for example, 10.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Create an output box:</h5>
                <p className="text-gray-300 text-sm">
                  Simulate a new UTXO that will contain the incremented value. Specify the new value in R4, for example, 11 (if incrementAmount will be 1).
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Specify parameters:</h5>
                <p className="text-gray-300 text-sm">
                  In the "Context" or "Parameters" section, specify incrementAmount = 1 and pk = &lt;your public key&gt;.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Run simulation:</h5>
                <p className="text-gray-300 text-sm">
                  Click "Run" or "Simulate". The Playground will show if the script executed successfully and why.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Playground Interface Explanation */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5 text-green-400" /> Explanation of Playground Interface Elements
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Code Editor</h4>
            <p className="text-sm text-gray-400">The main area for writing ErgoScript.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Compiled Script / ErgoTree</h4>
            <p className="text-sm text-gray-400">Displays the bytecode of your compiled script.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Input Boxes</h4>
            <p className="text-sm text-gray-400">Here you define the UTXOs that will be "spent" by your transaction. You can specify their value, registers (R4-R9), and creationHeight.</p>
          </div>
        </div>
      </div>

      {/* Links to Examples */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-purple-400" /> Links to Quickstart Code Examples
        </h3>
        <div className="space-y-3">
          <Link
            href="https://docs.ergoplatform.com/dev/sc/examples/"
            className="flex items-center text-orange-400 hover:text-orange-300"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            ErgoScript Examples Collection
          </Link>
          <Link
            href="https://github.com/ergoplatform/ergo-script-cookbook"
            className="flex items-center text-orange-400 hover:text-orange-300"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            ErgoScript Cookbook on GitHub
          </Link>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">What's Next?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-orange-400">Ready for More?</h4>
            <p className="text-gray-400 text-sm mb-3">
              Now that you've created your first contract, learn how to build a complete dApp.
            </p>
            <Link
              href="/build/docs/first-dapp"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
            >
              Build Your First dApp <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-cyan-400">Need Help?</h4>
            <p className="text-gray-400 text-sm mb-3">
              Join our community to get help and share your projects.
            </p>
            <Link
              href="/build/docs/faq"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              FAQ & Troubleshooting <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 