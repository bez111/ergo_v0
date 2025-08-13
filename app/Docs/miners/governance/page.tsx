import React from "react"
import Link from "next/link"
import { Settings, GitBranch, ArrowRight } from "lucide-react"

export default function GovernancePage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Governance</h1>
      <p className="text-lg text-gray-300 mb-6">
        Ergo's governance model is designed to facilitate network upgrades and parameter adjustments through a decentralized voting mechanism among miners. This approach ensures the long-term economic stability and adaptability of the Ergo network.
      </p>
      <Link href="/Docs/miners" className="inline-flex items-center px-4 py-2 border border-neutral-700 rounded-lg text-white hover:border-brand-primary-500/30 hover:text-brand-primary-400 transition-colors mb-4">
        {/* Using a simple unicode arrow to avoid adding new imports */}
        <span className="mr-2">←</span> Back
      </Link>
      <p className="text-gray-300 mb-6">
        Ergo implements various measures to prevent disruptive hard forks, such as pushing complexity to the application layer and enabling many features to be implemented via soft-forks. For more information on Ergo's forking mechanism, see the <a href="forking.md" className="text-brand-primary-400 hover:text-brand-primary-300">Forking</a> page.
      </p>
      <p className="text-gray-300 mb-6">
        Miners can vote to change specific protocol parameters, as outlined in the table on the <a href="forking.md" className="text-brand-primary-400 hover:text-brand-primary-300">Forking</a> page. Soft-forking changes that require 90% miner support can alter many aspects of Ergo, excluding critical elements like the maximum supply.
      </p>
      <p className="text-gray-300 mb-8">
        For detailed information on the voting process, including voting mechanics, system constants, and how to propose and vote for changes, refer to the dedicated <a href="voting.md" className="text-brand-primary-400 hover:text-brand-primary-300">Voting</a> page.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/Docs/miners/governance/voting" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-brand-primary-500/30 transition-all duration-300 group cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <Settings className="w-6 h-6 text-brand-primary-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-brand-primary-400 transition-colors">Voting</h3>
              <p className="text-sm text-gray-500 mb-1">Miner voting for protocol parameters and soft-forks; foundational changes require 90% consensus across 32 epochs.</p>
              <span className="mt-2 inline-flex items-center gap-1 text-brand-primary-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">Learn more <ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>
        </Link>

        <Link href="/Docs/miners/governance/forking" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-brand-primary-500/30 transition-all duration-300 group cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <GitBranch className="w-6 h-6 text-brand-primary-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-brand-primary-400 transition-colors">Forking</h3>
              <p className="text-sm text-gray-500 mb-1">Ergo prioritizes soft/velvet forks for backward‑compatible upgrades and avoids disruptive hard forks where possible.</p>
              <span className="mt-2 inline-flex items-center gap-1 text-brand-primary-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">Learn more <ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
} 