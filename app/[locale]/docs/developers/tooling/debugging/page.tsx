"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Code, Link2, Wrench } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/ui";

export default function DebuggingPage() {
  return (
    <>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="scala-based" className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            Scala-Based
          </TabsTrigger>
          <TabsTrigger value="on-chain-mechanisms" className="flex items-center gap-2">
            <Link2 className="w-4 h-4" />
            On-Chain Mechanisms
          </TabsTrigger>
          <TabsTrigger value="external-tools" className="flex items-center gap-2">
            <Wrench className="w-4 h-4" />
            External Tools
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              Debugging ErgoScript
            </h1>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                Debugging smart contracts written in ErgoScript presents unique challenges compared to traditional software development. Since the code executes within the constrained and deterministic environment of the blockchain, standard interactive debuggers or extensive logging are often not available during on-chain execution.
              </p>
              <p className="mb-4">
                This guide provides an overview of debugging strategies, linking to more detailed explanations of specific techniques.
              </p>
            </div>

            <div className="mb-6">
              <Link
                href="/docs/developers/ergoscript-languages"
                className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to ErgoScript Languages
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Core Principles {`&`} Best Practices</h2>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                Given the limitations of on-chain debugging, a strong emphasis must be placed on <strong>off-chain testing and careful design</strong>:
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Thorough Unit {`&`} Integration Testing:</strong> This is the most crucial aspect. Use testing frameworks provided by SDKs like{' '}
                  <a href="../lang/scala.md" className="text-cyan-400 hover:underline">Appkit (Scala)</a>,{' '}
                  <a href="fleet-sdk-recipes.md" className="text-cyan-400 hover:underline">Fleet SDK (JS/TS)</a>, or{' '}
                  <a href="../lang/rust.md" className="text-cyan-400 hover:underline">Sigma-Rust</a>{' '}
                  to simulate transaction scenarios off-chain.
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Cover expected behavior (happy paths).</li>
                    <li>Test edge cases and potential failure conditions.</li>
                    <li>Verify expected outputs, register values, and created boxes.</li>
                    <li>Test logic under various simulated context states.</li>
                    <li>Use property-based testing where applicable.</li>
                  </ul>
                </li>
                <li>
                  <strong>Careful Logic Design:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Prioritize simplicity.</li>
                    <li>Break down complex logic.</li>
                    <li>Reason carefully about execution paths and state transitions.</li>
                    <li>Consider economic exploits.</li>
                  </ul>
                </li>
                <li>
                  <strong>Code Reviews:</strong> Have peers review your contract logic.
                </li>
                <li>
                  <strong>Formal Verification (Advanced):</strong> Consider for highly critical contracts (tooling is evolving).
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Debugging Techniques Overview</h2>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                Explore the following pages for details on specific techniques:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong><a href="scala-debugging.md" className="text-cyan-400 hover:underline">Scala-Based Debugging</a>:</strong>{' '}
                  Leverage Scala's debugging tools by testing your contract logic within the JVM environment (e.g., using Appkit or{' '}
                  <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> tests). This is often the most effective way to step through logic off-chain.
                </li>
                <li>
                  <strong><a href="on-chain-mechanisms.md" className="text-cyan-400 hover:underline">On-Chain Mechanisms (Limited)</a>:</strong>{' '}
                  Understand the limited tools available for insights during on-chain execution, such as the experimental{' '}
                  <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">debug()</code> function and analyzing transaction failure logs.
                </li>
                <li>
                  <strong><a href="external-tools.md" className="text-cyan-400 hover:underline">External Tools {`&`} Simulators</a>:</strong>{' '}
                  Utilize off-chain simulators (like the Spectrum Finance simulator) and other tools (SDK playgrounds, online editors) to test and analyze script behavior in controlled environments.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Future Directions</h2>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                The community desires more advanced debugging tools, potentially including execution traces and enhanced simulators. As the ecosystem evolves, improved tools may emerge.
              </p>
              <p className="mb-4">
                Rigorous off-chain testing remains the cornerstone of developing reliable ErgoScript contracts.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Recommended Resources</h2>

            <div className="text-gray-300 mb-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    SigmaState Interpreter Repository
                  </a>
                </li>
                <li>
                  <a href="ergoscript.md" className="text-cyan-400 hover:underline">
                    ErgoScript Language Overview
                  </a>
                </li>
                <li>
                  <a href="https://www.ergoforum.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    Ergo Developer Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="scala-based">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              Scala-Based ErgoScript Debugging
            </h1>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                Since ErgoScript is a subset of Scala and rigorously tested for equivalence within the{' '}
                <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code>
                </a>{' '}
                repository, you can leverage standard Scala debugging tools and techniques to test and debug your contract logic off-chain.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Concept</h2>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                The core idea is to represent your ErgoScript contract logic as Scala code, typically within a testing environment like ScalaTest or JUnit, often using frameworks like{' '}
                <a href="scala.md" className="text-cyan-400 hover:underline">Appkit</a> or the testing utilities within{' '}
                <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> itself. This allows you to simulate the blockchain context ({' '}
                <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">Context</code>,{' '}
                <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">Box</code>,{' '}
                <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">Transaction</code>, etc.) and execute your contract logic within a standard JVM debugging environment.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Process</h2>

            <div className="text-gray-300 mb-6">
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Set up a Testing Environment:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Use a project based on Appkit, which provides high-level abstractions for context and transaction building.</li>
                    <li>Alternatively, work within a fork or local copy of the <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> project, utilizing its internal testing structures and examples.</li>
                  </ul>
                </li>
                <li>
                  <strong>Represent Contract Logic:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Write your contract logic as Scala functions or within test case setups that mirror the ErgoScript structure. Appkit's <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">ErgoContract</code> compilation or direct use of <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">SigmaBuilder</code> can be employed.</li>
                  </ul>
                </li>
                <li>
                  <strong>Simulate Context:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Create mock <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">Context</code>, <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">Box</code>, and <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">Transaction</code> objects representing the specific scenario you want to test. Populate input/output boxes, registers, context variables, and blockchain parameters (like <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">HEIGHT</code>) as needed.</li>
                  </ul>
                </li>
                <li>
                  <strong>Set Breakpoints:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Use your Scala IDE (e.g., IntelliJ IDEA) to set breakpoints within the Scala code representing your contract logic or the test setup code that invokes it.</li>
                  </ul>
                </li>
                <li>
                  <strong>Run in Debug Mode:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Execute the specific test case using the IDE's debugger.</li>
                  </ul>
                </li>
                <li>
                  <strong>Inspect and Step Through:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>When the debugger halts at a breakpoint, you can:</li>
                    <li className="ml-4">• Inspect the values of variables (including simulated context data).</li>
                    <li className="ml-4">• Step through the code line by line.</li>
                    <li className="ml-4">• Evaluate expressions.</li>
                    <li className="ml-4">• Validate the logic flow and intermediate results.</li>
                  </ul>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Example Reference</h2>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                The{' '}
                <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/sigmastate/src/test/scala/sigmastate/utxo/examples/AssetsAtomicExchange.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  AssetsAtomicExchange.scala
                </a>{' '}
                tests within the <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> repository provide practical examples of this pattern. Breakpoints can be set within the{' '}
                <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">proposition</code> definitions (which contain Scala code mirroring ErgoScript), and the corresponding tests run in debug mode to step through the logic.
              </p>
            </div>

            <CodeBlock language="typescript"
              children={`// Snippet from AssetsAtomicExchange - Breakpoint can be set inside this block
lazy val buyerProp = proposition("buyer", { ctx: Context =>
  import ctx._
  (HEIGHT > deadline && pkA) || { // Breakpoint here
    val tokenData = OUTPUTS(0).R2[Coll[(Coll[Byte], Long)]].get(0)
    // ... inspect tokenData, OUTPUTS(0), SELF, etc. ...
    val knownId = OUTPUTS(0).R4[Coll[Byte]].get == SELF.id
    allOf(Coll(
      tokenData._1 == tokenId,
      tokenData._2 >= 60L,
      OUTPUTS(0).propositionBytes == pkA.propBytes,
      knownId
    ))
  }
},
// ...`}
            />

            <h3 className="text-xl font-bold text-orange-400 mb-4">Debugging Process Example</h3>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                Using the <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">AssetsAtomicExchange.scala</code> example:
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Set Breakpoint:</strong> Place a breakpoint within the <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">buyerProp</code> or <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sellerProp</code> definition in <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">AssetsAtomicExchange.scala</code> (e.g., inside the <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">||</code> block as shown in the snippet above).
                </li>
                <li>
                  <strong>Locate Test:</strong> Find the corresponding test method in{' '}
                  <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/sigmastate/src/test/scala/sigmastate/utxo/examples/AssetsAtomicExchangeTests.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">AssetsAtomicExchangeTests.scala</code>
                  </a>, such as <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">property("atomic exchange spec")</code>.
                  
                  <CodeBlock language="typescript"
                    children={`// Test method for atomic exchange in AssetsAtomicExchangeTests.scala
property("atomic exchange spec") {
  // Test implementation details...
  // This code sets up the context and attempts the transaction
}`}
                  />
                </li>
                <li>
                  <strong>Run Test in Debug Mode:</strong> Right-click the specific test method (or the whole test class) in your IDE and select "Debug".
                </li>
                <li>
                  <strong>Inspect:</strong> The execution will pause at your breakpoint, allowing you to inspect the state of simulated context variables ({' '}
                  <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">ctx</code>,{' '}
                  <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">HEIGHT</code>,{' '}
                  <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">INPUTS</code>,{' '}
                  <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">OUTPUTS</code>,{' '}
                  <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">SELF</code>), local variables ({' '}
                  <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">tokenData</code>,{' '}
                  <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">knownId</code>), and step through the contract logic evaluation.
                </li>
              </ol>
            </div>

            <div className="text-gray-300 mb-6">
              <p>
                This technique provides a powerful way to thoroughly verify contract logic before deployment, catching potential errors in a controlled off-chain environment.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="on-chain-mechanisms">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              On-Chain Debugging Mechanisms
            </h1>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                Direct, interactive debugging of ErgoScript during its execution on the live blockchain is generally not possible due to the deterministic and constrained nature of the environment. However, there are limited mechanisms that can provide some insight, primarily focused on logging and analyzing failures.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">debug()</code> Function (Experimental)
            </h2>

            <div className="text-gray-300 mb-6">
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Concept:</strong> An experimental <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">debug()</code> function may be available in recent versions of the ErgoTree interpreter. Its purpose is to allow script writers to output specific information during script evaluation.
                </li>
                <li>
                  <strong>Status {`&`} Availability:</strong> This feature's availability and exact behavior depend on the interpreter version used by the nodes. <strong>Always check the relevant <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmastate-interpreter</code> release notes and Issue{' '}
                  <a href="https://github.com/ergoplatform/sigmastate-interpreter/issues/1035" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    #1035
                  </a>{' '}
                  for the current status.</strong>
                </li>
                <li>
                  <strong>Output:</strong> The output from <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">debug()</code> is typically expected to appear in the logs of the validating node that processes the transaction containing the script. This usually requires the node to be configured with a specific log level (e.g., <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">DEBUG</code>) to capture this information.
                </li>
                <li>
                  <strong>Usage:</strong> <em>(Specific syntax and output format details should be added here once the feature is stable and officially documented).</em>
                </li>
                <li>
                  <strong>Caution:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Using <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">debug()</code> adds computational cost to script execution.</li>
                    <li>Excessive use can significantly increase node log verbosity.</li>
                    <li>It is primarily intended for <strong>development and testing phases</strong>, not for widespread use in production contracts deployed on mainnet. Relying on it for core contract logic is discouraged.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Transaction Failure Analysis</h2>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                When a transaction attempting to spend a contract-protected box fails validation by a node, the node often logs information about the reason for failure.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Finding Errors:</strong> Check the logs of the node that rejected the transaction (either your own node or potentially an explorer's backend node if using their API for submission). Look for <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">ERROR</code> or <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">WARN</code> level messages related to transaction validation or script execution around the time the transaction was submitted.
                </li>
                <li>
                  <strong>Common Errors:</strong> Logs might indicate:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">Script evaluation failed</code>: The script returned <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">false</code>.</li>
                    <li><code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">Assertion failed</code>: A specific <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sigmaProp</code> condition evaluated to false.</li>
                    <li><code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">Cost limit exceeded</code>: The script execution was too complex.</li>
                    <li>Type mismatches or other interpreter errors.</li>
                  </ul>
                </li>
                <li>
                  <strong>Limitations:</strong> While helpful, these logs often don't pinpoint the exact line number within the ErgoScript source. They indicate <em>that</em> the script failed, but debugging <em>why</em> usually requires correlating the error with off-chain testing and logic review.
                </li>
              </ul>
            </div>

            <div className="text-gray-300 mb-6">
              <p>
                These on-chain mechanisms offer limited visibility compared to traditional debugging but can provide valuable clues when troubleshooting transaction failures. They should be used in conjunction with robust{' '}
                <a href="debugging.md#core-principles-best-practices" className="text-cyan-400 hover:underline">
                  off-chain testing and simulation
                </a>.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="external-tools">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
              External Tools {`&`} Simulators for ErgoScript Debugging
            </h1>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                Given the limitations of direct on-chain debugging, external tools and off-chain simulators play a vital role in testing and understanding ErgoScript contract behavior in a controlled environment.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Simulators</h2>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                Simulators allow you to execute ErgoScript code off-chain, mimicking the on-chain environment to varying degrees.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Spectrum Finance ErgoScript Simulator:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>Repository:</strong>{' '}
                      <a href="https://github.com/spectrum-finance/ergoscript-simulator" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                        github.com/spectrum-finance/ergoscript-simulator
                      </a>
                    </li>
                    <li>
                      <strong>Description:</strong> A community-developed tool specifically designed for simulating ErgoScript execution. It can provide more insight into evaluation steps and intermediate results than simple unit tests might offer.
                    </li>
                    <li>
                      <strong>Features:</strong> <em>(Refer to the simulator's own documentation for specific capabilities, setup instructions, and usage examples).</em>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">SDK Playgrounds {`&`} REPLs</h2>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                Some Software Development Kits (SDKs) offer interactive environments for experimenting with script snippets and context building.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Fleet SDK Playground / REPL:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>SDK:</strong>{' '}
                      <a href="fleet.md" className="text-cyan-400 hover:underline">
                        Fleet SDK (JS/TS)
                      </a>
                    </li>
                    <li>
                      <strong>Potential Features:</strong> The Fleet SDK ecosystem may include online playgrounds or command-line REPL (Read-Eval-Print Loop) tools that allow developers to quickly test small ErgoScript fragments, context construction, or serialization/deserialization logic. <em>(Check the official Fleet SDK documentation and website for available tools).</em>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Online Editors {`&`} Compilers</h2>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                Web-based tools can help with writing scripts and catching syntax errors.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>escript.online:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>Website:</strong>{' '}
                      <a href="https://escript.online/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                        escript.online
                      </a>
                    </li>
                    <li>
                      <strong>Description:</strong> An online editor and compiler for ErgoScript. Useful for writing scripts, checking syntax, and seeing the compiled ErgoTree output.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Future Directions</h2>

            <div className="text-gray-300 mb-6">
              <p className="mb-4">
                The Ergo developer community actively discusses and desires more sophisticated debugging tools, potentially including enhanced simulators with features like breakpoints, step-through execution tracing, and detailed state inspection capabilities. As the ecosystem matures, more advanced external debugging tools are likely to emerge.
              </p>
              <p className="mb-4">
                Using these external tools effectively complements the core practices of{' '}
                <a href="debugging.md#core-principles-best-practices" className="text-cyan-400 hover:underline">
                  thorough testing and careful design
                </a>.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
} 