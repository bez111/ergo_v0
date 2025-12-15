import React from "react";
import {
  Gift,
  Settings,
  Coins,
  Shield,
  Zap,
  Users,
  ExternalLink,
  ChevronRight,
  Database,
  Code,
  Play,
  Info
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function RevenueSharingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Profit-Sharing DApp
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A modular solution for decentralized profit/revenue sharing on Ergo. Designed to be used as a service for other dApps, enabling transparent, fair, and automated distribution of income among stakeholders.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-yellow-500 rounded-xl font-semibold text-black hover:bg-yellow-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
          <a
            href="https://github.com/mhssamadani/ErgoProfitSharingDapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit GitHub
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Gift className="w-6 h-6 text-yellow-400" /> What is Profit-Sharing?
        </h2>
        <p className="text-gray-300">
          The Profit-Sharing DApp is a smart contract platform for decentralized, automated, and transparent revenue distribution. It can be integrated into any dApp or DAO to fairly share income among stakeholders, stakers, or contributors.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Secure & Transparent
          </h3>
          <p className="text-gray-300 mb-4">
            All distributions are managed by open-source smart contracts, ensuring transparency and security for all participants. No custodians or hidden risks.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              On-chain, auditable logic
            </li>
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              No manual intervention
            </li>
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              Open-source contracts
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Coins className="w-5 h-5 text-yellow-400" /> Flexible Distribution
          </h3>
          <p className="text-gray-300 mb-4">
            Configure thresholds, proportions, and eligible participants. Adapt the protocol to any use case: DeFi, DAOs, service platforms, and more.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              Customizable logic
            </li>
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              Multi-token support
            </li>
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              DAO & dApp ready
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-purple-400" /> Modular & Composable
          </h3>
          <p className="text-gray-300 mb-4">
            Designed as a service for other dApps, the protocol is modular and can be integrated into various DeFi applications on Ergo.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              Plug-and-play contracts
            </li>
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              Works with staking, DAOs
            </li>
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              Service platform support
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-400" /> Automated & Fair
          </h3>
          <p className="text-gray-300 mb-4">
            Income is distributed automatically and transparently among stakeholders, reducing manual intervention and risk of errors.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              Automated triggers
            </li>
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              Fair, proportional rewards
            </li>
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" />
              No double rewards
            </li>
          </ul>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-cyan-400" /> How Profit-Sharing Works
        </h2>
        <p className="text-gray-300 mb-4">
          Stakeholders lock tokens, income is collected, and when a threshold is reached, rewards are distributed automatically and fairly. All logic is enforced by smart contracts.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-yellow-400 mb-2">For dApps/DAOs</h4>
            <p className="text-gray-300 text-sm">Integrate profit-sharing for liquidity providers, stakers, or governance participants. Automate revenue distribution for your community.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-yellow-400 mb-2">For Stakeholders</h4>
            <p className="text-gray-300 text-sm">Lock tokens, receive rewards, and unlock tokens when desired. All distributions are transparent and on-chain.</p>
          </div>
        </div>
      </div>

      {/* Developer Access Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> Accessing Profit-Sharing as a Developer
        </h2>
        <p className="text-gray-300 mb-4">
          Integrate the protocol into your dApp using open-source contracts and templates. Example: set up a new distribution contract or automate reward distribution for your community.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-yellow-400 mb-2">Example: Distribution Contract (pseudo-code)</h4>
          <pre className="bg-neutral-900 rounded p-3 text-xs overflow-x-auto text-gray-300">
{`// Example: Creating a distribution contract (pseudo-code)
const tx = appkit.newTx()
  .from(stakeholder)
  .to(distributionContract)
  .withAssets([TOKEN_ID, AMOUNT])
  .distributeRewards()
  .send();`}
          </pre>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://github.com/profit-sharing" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-yellow-400 mb-2">GitHub Repo</h4>
            <p className="text-gray-300 text-sm">Open-source code and contract templates for Profit-Sharing.</p>
          </a>
          <a href="https://github.com/mhssamadani/ErgoProfitSharingDapp/blob/master/src/main/scala/staking/Scripts.scala" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-yellow-400 mb-2">Scripts.scala</h4>
            <p className="text-gray-300 text-sm">Core contract logic and scripts for the protocol.</p>
          </a>
          <a href="https://github.com/profit-sharing" target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
            <h4 className="font-bold text-yellow-400 mb-2">Documentation</h4>
            <p className="text-gray-300 text-sm">Read the docs and integration guides for Profit-Sharing.</p>
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" /> What can I use Profit-Sharing for?
            </h3>
            <p className="text-gray-300 mb-4">
              Automate revenue distribution, reward stakers, and integrate fair sharing into any dApp or DAO on Ergo.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" /> How are rewards distributed?
            </h3>
            <p className="text-gray-300 mb-4">
              All rewards are distributed automatically by smart contracts based on your share of the pool or staking activity.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" /> Who can participate?
            </h3>
            <p className="text-gray-300 mb-4">
              Any eligible stakeholder, DAO member, or liquidity provider can participate in profit-sharing if integrated by the dApp.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 