
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Link } from "@/i18n/navigation"
import { GitBranch, ArrowRight, ArrowLeft } from "lucide-react"

export default function ForkingPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Forking</h1>

      <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
      <p className="text-gray-300 mb-4">
        Ergo's view is that disruptive hard forks should be avoided unless absolutely critical. Ergo implements various measures to
        prevent hard forks, such as pushing complexity to the application layer and enabling many things to be implemented via soft-forks.
      </p>
      <Link href="/docs/miners/governance" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-primary-400 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>
      <p className="text-gray-300 mb-8">
        If a supermajority (90%+) of the network accepts a new feature, it is activated; however, old nodes that do not upgrade continue
        to operate normally and skip over this feature validation.
      </p>

      {/* Fork type cards placed after Overview */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        {/* Velvet Forks */}
        <Link href="/docs/miners/governance/forking/velvet-forks" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-brand-primary-500/30 transition-all duration-300 group cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <GitBranch className="w-6 h-6 text-brand-primary-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-brand-primary-400 transition-colors">Velvet Forks</h3>
              <p className="text-sm text-gray-500 mb-1">Minority‑upgrade fork enabling gradual deployment via NiPoPoW interlinks; stays compatible with non‑upgraded nodes.</p>
              <div className="mt-2 text-right">
                <span className="inline-flex items-center gap-1 text-brand-primary-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">Learn more <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Soft Forks */}
        <Link href="/docs/miners/governance/forking/soft-forks" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-brand-primary-500/30 transition-all duration-300 group cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <GitBranch className="w-6 h-6 text-brand-primary-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-brand-primary-400 transition-colors">Soft Forks</h3>
              <p className="text-sm text-gray-500 mb-1">Requires a subset of nodes; miner‑enforced via protocol rules (e.g., EIP‑37 re‑emission) and activatable with 90% miner support.</p>
              <div className="mt-2 text-right">
                <span className="inline-flex items-center gap-1 text-brand-primary-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">Learn more <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Hard Forks */}
        <Link href="/docs/miners/governance/forking/hard-forks" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-brand-primary-500/30 transition-all duration-300 group cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <GitBranch className="w-6 h-6 text-brand-primary-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-brand-primary-400 transition-colors">Hard Forks</h3>
              <p className="text-sm text-gray-500 mb-1">Requires all nodes to upgrade; used only when backward‑compatible approaches are insufficient.</p>
              <div className="mt-2 text-right">
                <span className="inline-flex items-center gap-1 text-brand-primary-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">Learn more <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">Additional Information</h2>
      <p className="text-gray-300 mb-8">
        For more information, refer to the
        {" "}
        <a href="https://github.com/ergoplatform/eips" target="_blank" rel="noopener noreferrer" className="text-brand-primary-400 hover:text-brand-primary-300">
          Ergo Improvement Proposals (EIPs)
        </a>.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Fork Prevention Measures</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
        <li>
          <span className="font-semibold text-white">Pushing complexity to the application layer</span>: By keeping the core protocol simple and pushing complexity to the application layer,
          Ergo reduces the need for frequent protocol-level changes that could lead to hard forks.
        </li>
        <li>
          <span className="font-semibold text-white">Enabling soft-forks</span>: Many features and improvements can be implemented through soft-forks, which allow for backward compatibility and gradual adoption without disrupting the network.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mb-4">Fork Activation Process</h2>
      <ol className="list-decimal pl-6 text-gray-300 mb-10 space-y-2">
        <li>
          <span className="font-semibold text-white">Proposal and Discussion</span>: The proposed change is discussed and evaluated by the Ergo community and developers.
        </li>
        <li>
          <span className="font-semibold text-white">Consensus and Approval</span>: If the proposal gains consensus and is approved, it is scheduled for implementation.
        </li>
        <li>
          <span className="font-semibold text-white">Fork Type Determination</span>: Based on the nature of the change, it is determined whether a velvet-fork, soft-fork, or hard-fork is required.
        </li>
        <li>
          <span className="font-semibold text-white">Activation</span>: If a supermajority (90%+) of the network accepts the new feature, it is activated. Old nodes that do not upgrade continue to operate normally and skip over the new feature validation.
        </li>
      </ol>
    </>
  )
} 