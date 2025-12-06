
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Link from "next/link"

export default function VotingPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Voting Cycles and Types of Changes</h1>
      <p className="text-lg text-gray-300 mb-6">
        Votes on foundational changes, such as block version, span <strong>32 epochs</strong> and demand a <strong>90% miner consensus</strong>. Everyday changes, like block size adjustments, require only a simple majority. Each block allows miners to cast votes for up to two everyday changes and one foundational change. These votes are included in the block's header.
      </p>
      <Link href="/docs/miners/governance" className="inline-flex items-center px-4 py-2 border border-neutral-700 rounded-lg text-white hover:border-brand-primary-500/30 hover:text-brand-primary-400 transition-colors mb-4">
        <span className="mr-2">←</span> Back
      </Link>

      <h2 className="text-2xl font-bold text-white mb-4">Voting Mechanics</h2>
      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Affirmative Votes</h3>
          <p className="text-gray-300">
            To vote "Yes" for a change at the beginning of an epoch, a miner places the change's identifier directly into the block header.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Negative or Neutral Votes</h3>
          <p className="text-gray-300">
            To vote "No" or abstain, a miner enters a zero value in place of the identifier byte in the block header.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">System Constants</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
        <li>Epoch length for voting: <code className="text-gray-200">1024</code> blocks</li>
        <li>Epochs needed for foundational change: <code className="text-gray-200">32</code></li>
        <li>Epochs before activating approved foundational change: <code className="text-gray-200">128</code></li>
      </ul>

      <h2 className="text-2xl font-bold text-white mb-4">Current Network Settings</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
        <li>Maximum block size: <code className="text-gray-200">1271009</code> bytes</li>
        <li>Maximum box size: <code className="text-gray-200">4096</code> bytes</li>
        <li>Maximum transaction size: <code className="text-gray-200">96kb</code></li>
      </ul>

      <h2 className="text-2xl font-bold text-white mb-4">Parameters Table</h2>
      <p className="text-gray-300 mb-4">
        The following table describes vote identifiers, default values (during launch), possible steps, and minimum and maximum values.
      </p>
      <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
        <li>
          If the step is not defined in the table, its value is defined as <code className="text-gray-200">max(floor(current_value / 100), 1)</code>.
        </li>
        <li>
          If the minimum value for a parameter is not defined, it equals zero.
        </li>
        <li>
          If the maximum value is not defined, it equals <code className="text-gray-200">1,073,741,823</code>.
        </li>
      </ul>
      <p className="text-gray-300 mb-6">
        A miner includes a parameter identifier (<em>id</em>) into the block header to propose or vote for increasing a parameter.
        If the miner supports decreasing the parameter, they would include (<em>-id</em>) into the block header.
      </p>
      <p className="text-gray-300 mb-4">
        Try out these parameters on{' '}
        <a href="https://deadit.github.io/paizo/" target="_blank" rel="noopener noreferrer" className="text-brand-primary-400 hover:text-brand-primary-300">
          deadit.github.io/paizo/
        </a>
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border border-neutral-800 text-left">
          <thead className="bg-neutral-900/50">
            <tr>
              <th className="px-4 py-2 border-b border-neutral-800 text-gray-200">ID</th>
              <th className="px-4 py-2 border-b border-neutral-800 text-gray-200">Description</th>
              <th className="px-4 py-2 border-b border-neutral-800 text-gray-200">Default</th>
              <th className="px-4 py-2 border-b border-neutral-800 text-gray-200">Step</th>
              <th className="px-4 py-2 border-b border-neutral-800 text-gray-200">Min</th>
              <th className="px-4 py-2 border-b border-neutral-800 text-gray-200">Max</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-neutral-900/50">
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">1</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">Storage fee factor (per byte storage period)</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">1250000</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">25000</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">0</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">2500000</td>
            </tr>
            <tr className="hover:bg-neutral-900/50">
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">2</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">Minimum monetary value of a box</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">360</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">10</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">0</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">10000</td>
            </tr>
            <tr className="hover:bg-neutral-900/50">
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">3</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">Maximum block size</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">524288</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">16384</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
            </tr>
            <tr className="hover:bg-neutral-900/50">
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">4</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">Maximum cummulative computational cost of a block</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">1000000</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">16384</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
            </tr>
            <tr className="hover:bg-neutral-900/50">
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">5</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">Token access cost</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">100</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
            </tr>
            <tr className="hover:bg-neutral-900/50">
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">6</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">Cost per one transaction input</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">2000</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
            </tr>
            <tr className="hover:bg-neutral-900/50">
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">7</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">Cost per one data input</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">100</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
            </tr>
            <tr className="hover:bg-neutral-900/50">
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">8</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">Cost per one transaction output</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">100</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
            </tr>
            <tr className="hover:bg-neutral-900/50">
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">120</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">Soft-fork (increasing version of a block)</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
              <td className="px-4 py-2 border-b border-neutral-800 text-gray-300">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-300 mb-6">
        Parameter values are to be written into the extension section on the first block of a voting epoch, that is, in the extension of a block when its <code className="text-gray-200">height mod 1024 = 0</code>.
        Parameters for the initial moment of time (<code className="text-gray-200">height = 1</code>) are hardcoded.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">How to Propose and Vote for Changes</h2>
      <p className="text-gray-300 mb-4">
        To propose a change, a miner includes the vote identifier in the first block's header of a voting epoch. The header has three slots: two for everyday changes and one for soft forks. A zero should be set in any unoccupied slot. Votes can be arranged in any sequence.
      </p>
      <p className="text-gray-300">
        For example, if a miner proposes to increase the storage fee factor and also initiate a soft-fork, they would input <code className="text-gray-200">(0, 1, 120)</code> in the header slots.
      </p>
    </>
  )
} 