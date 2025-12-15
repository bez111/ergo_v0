
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Link } from "@/i18n/navigation"
import { ArrowLeft } from "lucide-react"

export default function SoftForksPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Soft Forks</h1>
      <p className="text-gray-300 mb-4">
        A soft fork is a backward-compatible protocol update that introduces new rules or deactivates existing ones without requiring a hard fork.
        Soft forks allow the Ergo network to evolve and incorporate improvements while maintaining compatibility with non-upgraded nodes. This approach
        ensures a smooth transition and minimizes disruption to the network.
      </p>
      <Link href="/docs/miners/governance/forking" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-primary-400 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
      <p className="text-gray-300 mb-4">
        Ergo's soft-fork mechanism is governed by a strict voting process that involves miners and unfolds over a series of epochs. The process is designed
        to ensure that protocol changes are introduced in a transparent and decentralized manner, with the support of a significant majority of the network.
      </p>
      <p className="text-gray-300 mb-4">The soft-fork process consists of the following key stages:</p>
      <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-6">
        <li>
          <span className="font-semibold text-white">Proposal</span>: A soft-fork proposal is initiated by a miner, signaling the start of the voting process.
        </li>
        <li>
          <span className="font-semibold text-white">Voting</span>: The voting process spans multiple epochs, during which miners cast their votes for or against the proposed change.
        </li>
        <li>
          <span className="font-semibold text-white">Activation</span>: If the proposal secures the required support, an activation period begins, preparing the network for the implementation of the new protocol rules.
        </li>
        <li>
          <span className="font-semibold text-white">Implementation</span>: At the end of the activation period, the new protocol rules come into effect, and the network operates under the updated rules.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-white mb-4">Soft-Fork Mechanism in Ergo</h2>
      <p className="text-gray-300 mb-4">
        Soft forks in the Ergo blockchain allow for backward-compatible protocol updates, enabling the network to introduce new rules or deactivate existing
        ones without requiring a hard fork. The soft-fork process is governed by a strict voting mechanism that involves miners and unfolds over a series of
        epochs. This article outlines the key steps, rules, and technical details involved in implementing a soft fork in the Ergo blockchain.
      </p>

      <h3 className="text-xl font-semibold text-white mb-2">Preconditions for a Soft Fork</h3>
      <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-6">
        <li>
          <span className="font-semibold text-white">Software Update:</span> A protocol developer releases an updated version of the Ergo software that includes changes to existing rules or introduces new ones.
          This updated software version is made available to miners and nodes on the network.
        </li>
        <li>
          <span className="font-semibold text-white">Proposal:</span> A soft-fork proposal is initiated when a miner includes a specific identifier (e.g., 120) in the first block of a new epoch, signaling the start of the voting process.
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-white mb-2">Voting Process</h3>
      <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-6">
        <li>
          <span className="font-semibold text-white">Duration:</span> The voting process spans 32 epochs, each consisting of 1,024 blocks. The total voting period thus covers 32,768 blocks.
        </li>
        <li>
          <span className="font-semibold text-white">Threshold:</span> For a soft fork to be approved, it must receive at least 90% of the total votes, which equates to a minimum of 29,491 votes out of a possible 32,768.
        </li>
        <li>
          <span className="font-semibold text-white">Negative Outcome:</span> If the proposal fails to meet the 90% threshold, the voting process concludes, and new proposals can be initiated in the subsequent epoch.
        </li>
        <li>
          <span className="font-semibold text-white">Positive Outcome:</span> If the proposal secures the required votes, an activation period of 32 epochs begins immediately.
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-white mb-2">Activation and Implementation</h3>
      <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-6">
        <li>
          <span className="font-semibold text-white">Activation Period:</span> Following a successful vote, the network enters an activation phase that lasts for 32 epochs. During this period, the network prepares for the implementation of the new protocol rules.
        </li>
        <li>
          <span className="font-semibold text-white">Activation Height:</span> The first block following the activation period is referred to as the 'activation height.' It is at this point that the new protocol rules come into effect.
        </li>
        <li>
          <span className="font-semibold text-white">Block Versioning:</span> The block version is updated in the extension sections starting from the first block of the activation period. However, the protocol version in the block headers is only updated at the activation height.
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-white mb-2">Technical Details</h3>
      <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
        <li>
          <span className="font-semibold text-white">Validation Rules and Soft-Fork Process:</span> Specific validation rules in Ergo, as outlined in the <code className="text-gray-200">ValidationRules.scala</code> file, can be toggled or introduced during a soft-fork. These rules are flagged as <code className="text-gray-200">mayBeDisabled</code>, allowing the protocol to adapt to new requirements without breaking backward compatibility. For instance, the <code className="text-gray-200">exCheckForkVote</code> rule ensures that voting for a new fork is only permissible after the activation period of a previous soft-fork.
        </li>
        <li>
          <span className="font-semibold text-white">Block Generation and Soft-Fork Voting:</span> The process of block generation in Ergo is tightly integrated with the soft-fork voting mechanism. As seen in the <code className="text-gray-2 00">CandidateGenerator.scala</code> file, blocks are generated with considerations for whether they should include votes for a soft-fork based on the current height and state context. This logic ensures that votes are accurately recorded and the network remains synchronized during the voting period.
        </li>
        <li>
          <span className="font-semibold text-white">Fork-Ordering Logic:</span> The <code className="text-gray-200">forkOrdered</code> method plays a crucial role in determining whether the conditions for a soft-fork are met. This method checks the current block height, protocol version, and voting results to decide whether a soft-fork should proceed. This ensures that the network only moves forward with a soft-fork when all predefined conditions are satisfied.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-white mb-2">Examples</h3>
      <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-6">
        <li>
          <span className="font-semibold text-white">Starting a Vote:</span> Assume a vote is proposed in block #1024 by including the identifier "120" in the extension section. If 500 votes are collected in that epoch, the next epoch's block (#2048) should include the pairs <code className="text-gray-200">122: 1024</code> (indicating the start height of the vote) and <code className="text-gray-200">121: 500</code> (indicating the votes collected).
        </li>
        <li>
          <span className="font-semibold text-white">Counting Votes:</span> If the next epoch (starting at block #2048) gathers an additional 600 votes, the block at height #3072 should include the updated pairs <code className="text-gray-200">121: 1100</code> and <code className="text-gray-200">122: 1024</code>.
        </li>
        <li>
          <span className="font-semibold text-white">Vote Outcome:</span> If the total votes collected between blocks #1024 and #33791 do not exceed 29,491, the vote fails, and new voting parameters can be initiated in the following epoch (starting at block #34816).
        </li>
        <li>
          <span className="font-semibold text-white">Vote Success and Activation:</span> If the vote is successful, with more than 29,491 votes collected, the activation period begins immediately after block #33792. During the 32-epoch activation period, no new soft-fork proposals can be introduced. At the end of this period, the protocol version is updated in the block headers at the activation height, and the new rules take effect.
        </li>
      </ol>

      <p className="text-gray-300">
        For more practical examples and a detailed discussion on soft-fork voting, refer to this
        {" "}
        <a
          href="https://www.ergoforum.org/t/voting-for-a-soft-fork-in-ergo/2958"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-primary-400 hover:text-brand-primary-300"
        >
          Ergo Forum post
        </a>.
      </p>
    </>
  )
} 