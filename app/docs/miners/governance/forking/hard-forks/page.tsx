import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { CodeBlock } from "@/components/ui"

export default function HardForksPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Hard Forks in Ergo</h1>

      <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
      <p className="text-gray-300 mb-6">
        In the context of the Ergo blockchain, a hard fork typically involves significant changes to the underlying consensus mechanism or core
        protocol rules, which require all nodes or participants in the network to upgrade to the new version of the software. If a portion of the
        network's participants do not upgrade, the blockchain splits into two separate chains, with the new chain following the updated protocol and
        the old chain following the previous one.
      </p>
      <Link href="/docs/miners/governance/forking" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      <h2 className="text-2xl font-bold text-white mb-4">Why Hard Forks Are Necessary</h2>
      <p className="text-gray-300 mb-4">Hard forks are necessary for several reasons:</p>
      <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
        <li>
          <span className="font-semibold text-white">Major Upgrades:</span> Introducing new features or changing core mechanics of the blockchain, such as changes in the consensus algorithm,
          transaction validation rules, or other fundamental properties that require all nodes to operate under the new rules.
        </li>
        <li>
          <span className="font-semibold text-white">Bug Fixes:</span> Addressing critical vulnerabilities that cannot be patched via soft forks or minor updates. These bugs could potentially threaten the security of the entire network.
        </li>
        <li>
          <span className="font-semibold text-white">Governance Decisions:</span> Implementing decisions made by the community or core developers that require a clean break from previous rules, such as
          changes in monetary policy or governance structures.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mb-4">How Hard Forks Are Implemented in Ergo</h2>
      <p className="text-gray-300 mb-4">The implementation of a hard fork in Ergo follows these general steps:</p>

      <ol className="list-decimal pl-6 text-gray-300 space-y-4 mb-8">
        <li>
          <span className="font-semibold text-white">Development and Testing:</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              New protocol rules are developed and rigorously tested in a controlled environment, typically a testnet or developer network. This is crucial to ensure that all changes work as intended and do not introduce new issues.
            </li>
            <li>
              The {""}
              <a
                href="https://github.com/ergoplatform/ergo/blob/master/src/it/scala/org/ergoplatform/it/ForkResolutionSpec.scala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300"
              >
                ForkResolutionSpec
              </a>
              {" "}
              file, found in the {""}
              <a
                href="https://github.com/ergoplatform/ergo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300"
              >
                Ergo GitHub repository
              </a>
              , is an example of how forks are tested. This file contains integration tests designed to validate the behavior of the network during and after the fork,
              ensuring that the nodes correctly resolve different chain forks and eventually converge on a single valid chain.
              <CodeBlock language="scala">{`it should "Fork resolution after isolated mining" in {
  // Test scenario ensuring that nodes resolve forks correctly after isolated mining periods
}`}</CodeBlock>
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold text-white">Coordination with the Network:</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Developers coordinate with miners, node operators, and the broader community to schedule the fork. Communication is crucial, as all participants need to update their software to the new version by a certain block height or date.
            </li>
            <li>
              The node configuration files, such as <code className="text-gray-200">nodes.conf</code>, play a significant role in setting up the environment for the fork. This file specifies the settings for different nodes in the network and ensures that they are all synchronized and ready for the protocol change.
              <CodeBlock language="hocon">{`nodes = [
  { scorex { network.nodeName = node01 } },
  { scorex { network.nodeName = node02 } },
  ...
]`}</CodeBlock>
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold text-white">Activation and Monitoring:</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              At the predetermined block height or time, the new protocol rules are activated. The network continues to operate, but now all participants are following the new set of rules.
            </li>
            <li>
              Post-fork, developers and node operators monitor the network for any anomalies or issues that may arise as a result of the fork.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold text-white">Handling Divergence:</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              In the event that some nodes do not upgrade, the blockchain may split into two, creating a new chain (following the new rules) and a legacy chain (following the old rules). The <code className="text-gray-200">ErgoValidationSettings</code> class in the Ergo core provides mechanisms to enforce these new rules, ensuring that nodes adhering to the new rules can correctly validate blocks and transactions.
            </li>
            <li>
              <CodeBlock language="scala">{`case class ErgoValidationSettings(
  rules: Map[Short, RuleStatus],
  sigmaSettings: SigmaValidationSettings,
  updateFromInitial: ErgoValidationSettingsUpdate
) extends ValidationSettings with BytesSerializable {
  // Validation logic for new rules
}`}</CodeBlock>
            </li>
          </ul>
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-white mb-2">When to Use Hard Forks</h3>
      <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
        <li><span className="font-semibold text-white">Protocol Upgrades:</span> When a major new feature or change needs to be implemented that is not backward-compatible.</li>
        <li><span className="font-semibold text-white">Security Fixes:</span> When critical vulnerabilities are discovered that cannot be addressed through a soft fork.</li>
        <li><span className="font-semibold text-white">Consensus Changes:</span> When the community decides to make fundamental changes to the consensus algorithm or governance model.</li>
      </ul>

      <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
      <p className="text-gray-300 mb-6">
        Hard forks are a powerful tool in the evolution of the Ergo blockchain, allowing for significant changes and improvements. However, they require careful
        planning, coordination, and communication to ensure the network remains secure and functional during and after the transition. As with any major change,
        thorough testing and validation are essential to avoid disruptions.
      </p>
      <p className="text-gray-300">
        For further details on how these processes are implemented and tested within the Ergo blockchain, you can explore the relevant code and configuration files available in the
        {" "}
        <a
          href="https://github.com/ergoplatform/ergo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:text-orange-300"
        >
          Ergo GitHub repository
        </a>.
      </p>
    </>
  )
} 