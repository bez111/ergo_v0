"use client";
import React from "react";
import {
  Cpu, Brain, Zap, Database, Users, Layers, BookOpen, ChevronRight,
  FileText, Lightbulb, Quote
} from "lucide-react";

// Table of contents
const toc = [
  { id: "intro", title: "1. Introduction: The AI-Blockchain Nexus" },
  { id: "aei", title: "2. Decoding Artificial Economic Intelligence (AEI)" },
  { id: "arch", title: "3. Architectural Divide: Why eUTXO Matters" },
  { id: "parallelism", title: "4. eUTXO: Unlocking Parallelism" },
  { id: "predict", title: "5. eUTXO: Predictability & Determinism" },
  { id: "datainput", title: "6. eUTXO: Data Inputs & Info Sharing" },
  { id: "contracts", title: "7. eUTXO: Smart Contract Simplicity" },
  { id: "evolution", title: "8. eUTXO: Evolutionary Contracts" },
  { id: "anon", title: "9. Anonymous Economic Existence" },
  { id: "action", title: "10. AEI in Action: Practical Scenarios" },
  { id: "code", title: "11. Code Examples" },
  { id: "conclusion", title: "12. Conclusion: Vision & Impact" },
  { id: "cases", title: "AEI Business Cases" },
];

export default function EcosystemAIPage() {
  React.useEffect(() => {
    // Enable smooth scroll for anchor links
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.documentElement.style.scrollBehavior = '';
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 min-h-screen">
      {/* Main content */}
      <main className="flex-1 min-w-0">
        {/* Title */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
          Ergo’s eUTXO: Architecting the Future of Artificial Economic Intelligence
        </h1>

        {/* 1. Intro */}
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            1. Introduction: The AI-Blockchain Nexus – Challenges and the Dawn of Artificial Economic Intelligence
          </h2>
          <div className="mb-4 text-gray-300">
            <span className="block mb-2 font-bold italic text-orange-300">
              “The convergence of Artificial Intelligence (AI) and blockchain is more than a trend – it’s the next paradigm of digital economy.” 
            </span>
            <p>
              This synergy promises transformative potential across diverse sectors: security, transparency, automation, and data integrity for finance, healthcare, supply chains and more.
              <span className="block mt-2">
                Blockchain’s immutable ledger gives trust to AI systems, while AI optimizes blockchain through intelligent consensus, pattern recognition, and predictive analytics. This enables autonomous software agents to manage funds and perform economic tasks independently on-chain.
              </span>
            </p>
            <p className="mt-2">
              But: scalability, cost-predictability, privacy, and integration remain barriers for “autonomous agents” – especially those managing real value. AEI (Artificial Economic Intelligence) is the vision: not just smart AI tools, but self-reliant, income-generating, on-chain economic agents. <b>Ergo’s eUTXO model</b> gives these agents the environment they need.
            </p>
            <span className="mt-2 block px-4 py-2 border-l-4 border-cyan-400 bg-neutral-900 text-cyan-300 font-semibold">
              Vision: Move beyond AI as a tool → AI as an economic actor. A digital economy where artificial agents earn, spend, grow, and evolve — fully on-chain, permissionless, and global.
            </span>
          </div>
        </section>

        {/* 2. AEI */}
        <section id="aei">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            2. Decoding Artificial Economic Intelligence (AEI): Autonomous Agents on the Blockchain
          </h2>
          <div className="mb-4 text-gray-300">
            <b>AEI = Software agents on a blockchain, with independent economic goals:</b>
            <ul className="list-disc list-inside ml-4">
              <li><b>Earn Revenue:</b> via content, data services, DeFi participation, web services, oracles, etc.</li>
              <li><b>Manage Costs:</b> autonomously pay for fees, storage, data, compute, infra.</li>
              <li><b>Allocate Resources:</b> reinvest profits, hire other AIs/humans, diversify, scale up or down.</li>
              <li><b>Network Expansion:</b> spawn new agents with new models, expand by economic success (“digital reproduction”).</li>
            </ul>
            <span className="block mt-2 px-4 py-2 border-l-4 border-orange-400 bg-neutral-900 text-orange-200 italic">
              <Quote className="inline w-5 h-5 mb-1 text-orange-300" /> “AEI is not about AGI. It’s digital economic life: autonomous, persistent, evolving — driven by code and profit, not consciousness.” 
            </span>
            <p className="mt-2">
              Key: AEIs aren’t just bots—they’re autonomous, persistent economic actors. Their “life” and incentives are on-chain, enforced by smart contracts, not external legal systems.
            </p>
          </div>
        </section>

        {/* 3. Architecture */}
        <section id="arch">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            3. The Architectural Divide: Why eUTXO Matters for Multi-Agent Systems
          </h2>
          <div className="mb-4 text-gray-300">
            <b>eUTXO (Ergo) vs. Account-based (Ethereum):</b>
            <ul className="list-disc list-inside ml-4">
              <li><b>Local state:</b> each box (UTXO) holds value & logic; AEI only needs to reason about “its” state.</li>
              <li><b>Parallelism:</b> many transactions (agents) can operate at once (if using different boxes).</li>
              <li><b>Predictability:</b> deterministic costs and execution (no gas wars, no state surprises).</li>
              <li><b>Explicit interaction:</b> clear contracts, no hidden inter-contract call chains.</li>
            </ul>
            <div className="my-6 overflow-x-auto">
              {/* Table summary */}
              <table className="min-w-full border border-neutral-700 rounded-xl text-sm">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="px-4 py-2 border-b border-neutral-700 text-left">Feature</th>
                    <th className="px-4 py-2 border-b border-neutral-700 text-left">eUTXO (Ergo)</th>
                    <th className="px-4 py-2 border-b border-neutral-700 text-left">Account Model (Ethereum)</th>
                  </tr>
                </thead>
                <tbody className="bg-neutral-900">
                  <tr>
                    <td className="px-4 py-2 border-b border-neutral-800">State Management</td>
                    <td className="px-4 py-2 border-b border-neutral-800">Local, in boxes/UTXO</td>
                    <td className="px-4 py-2 border-b border-neutral-800">Global, in accounts/contracts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-neutral-800">Parallelism</td>
                    <td className="px-4 py-2 border-b border-neutral-800">High, non-interfering txs</td>
                    <td className="px-4 py-2 border-b border-neutral-800">Low, must process in order</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-neutral-800">Predictability</td>
                    <td className="px-4 py-2 border-b border-neutral-800">High, deterministic</td>
                    <td className="px-4 py-2 border-b border-neutral-800">Low, variable gas/MEV</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-neutral-800 border-l-4 border-orange-400 p-4 my-4 text-orange-200 italic">
              <b>Vision:</b> “A platform where thousands of economic agents can act concurrently, predictably, without stepping on each other’s toes — this is the true habitat for digital economic life.”
            </div>
          </div>
        </section>

        {/* 4. Parallelism */}
        <section id="parallelism">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            4. Ergo’s eUTXO Advantage: Unlocking Parallelism for Efficient AEI Ecosystems
          </h2>
          <div className="mb-4 text-gray-300">
            <p>
              AEIs need to act in parallel: run businesses, pay for infra, do work, trade — all at once, not queued. Ergo’s eUTXO makes this possible by design. It scales with agent count, not against it.
            </p>
          </div>
        </section>

        {/* 5. Predictability */}
        <section id="predict">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            5. Ergo’s eUTXO: Ensuring Predictability for Deterministic Economic Operations
          </h2>
          <div className="mb-4 text-gray-300">
            <ul className="list-disc list-inside ml-4">
              <li><b>Deterministic execution:</b> same input = same outcome. No gas races, no “fee lottery”.</li>
              <li><b>Upfront cost calculation:</b> AEIs know their expenses before acting (no surprise bills).</li>
              <li><b>Stable economic planning:</b> Agents can survive, reinvest, expand, or shut down, based on real margins, not network “weather”.</li>
            </ul>
          </div>
        </section>

        {/* 6. Data Inputs */}
        <section id="datainput">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            6. Ergo’s eUTXO: Data Inputs & Non-Destructive Information Sharing
          </h2>
          <div className="mb-4 text-gray-300">
            <p>
              Data Inputs let AEIs access shared on-chain data (oracle feeds, prices, models, etc.) without consuming or copying. Makes true info commons and collaborative AEI intelligence possible.
            </p>
          </div>
        </section>

        {/* 7. Contract Management */}
        <section id="contracts">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            7. Ergo’s eUTXO: Simplifying Contract Management for AI Decision-Making
          </h2>
          <div className="mb-4 text-gray-300">
            <ul className="list-disc list-inside ml-4">
              <li><b>Explicit contract boundaries:</b> AEIs only analyze boxes/contracts they touch.</li>
              <li><b>No inter-contract spaghetti:</b> No recursive call chains to model; fewer surprises.</li>
              <li>
                <span className="block px-4 py-2 border-l-4 border-orange-400 bg-neutral-900 text-orange-200 italic">
                  <Quote className="inline w-5 h-5 mb-1 text-orange-300" /> Kushti: “AEI is just binding its money to contracts it trusts — that’s it, no need to analyze inter-contract calls.”
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 8. Evolution */}
        <section id="evolution">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            8. Ergo’s eUTXO: Evolutionary Contracts for Adaptive AEI
          </h2>
          <div className="mb-4 text-gray-300">
            <p>
              Contract templates, parameterized logic, and even self-replicating AEIs. eUTXO enables AEIs to evolve — update logic, try new business models, adapt to market, spawn “children” with new code.
            </p>
          </div>
        </section>

        {/* 9. Anonymity */}
        <section id="anon">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            9. Anonymous Economic Existence – Autonomy Beyond Legal Personhood
          </h2>
          <div className="mb-4 text-gray-300">
            <p>
              On-chain agents can act, earn, own, and contract without KYC, without legal entities — just code, keys, protocol rules.
            </p>
            <span className="block mt-2 px-4 py-2 border-l-4 border-orange-400 bg-neutral-900 text-orange-200 italic">
              <Quote className="inline w-5 h-5 mb-1 text-orange-300" /> Kushti: “On blockchain, no one knows you are AEI. No one will ask AEI to pass KYC.”
            </span>
          </div>
        </section>

        {/* 10. AEI in Action */}
        <section id="action">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            10. AEI in Action: How Agents Operate & Practical Scenarios on Ergo
          </h2>
          <div className="mb-4 text-gray-300">
            <b>Scenarios:</b>
            <ul className="list-disc list-inside ml-4">
              <li><b>AEI as Data Analyst:</b> Scans DEX pools, posts analytics, charges for access.</li>
              <li><b>Collaborative Content Network:</b> One AEI delegates subtasks to others, pays for results, scales content production.</li>
              <li><b>Adaptive DeFi Agent:</b> Arbitrages, provides liquidity, evolves its risk logic over time.</li>
              <li><b>Resource Manager:</b> Manages tokenized compute/storage resources, automates leasing, optimizes pricing, spawns specialists.</li>
            </ul>
          </div>
        </section>

        {/* 11. Code Examples */}
        <section id="code">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            11. Code Examples: Smart Contract Basics for AEI Agents
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">a) Simple AEI agent ErgoScript</h3>
            <pre className="bg-neutral-900 rounded-lg p-4 text-sm text-orange-200 overflow-x-auto mb-4">
{`{
  // Define the agent's public key
  val agentPubKey = pubKey("1005040004000e20...")
  // Funds released only if signed by the agent
  sigmaProp(agentPubKey)
}`}
            </pre>
            <h3 className="text-lg font-semibold mb-2">b) Pseudocode: Agent Operations</h3>
            <pre className="bg-neutral-900 rounded-lg p-4 text-sm text-orange-200 overflow-x-auto mb-4">
{`class AEIAgent:
    def check_balance(self): ...
    def create_transaction(self, outputs, data=None): ...
    def sign_transaction(self, transaction): ...
    def send_transaction(self, signed_transaction): ...
    def hire_expert(self, expert_contract_address, payment_amount): ...

# Example workflow
agent = AEIAgent(...)
agent.create_transaction(...)
agent.hire_expert(...)
`}
            </pre>
          </div>
        </section>

        {/* 12. Conclusion */}
        <section id="conclusion">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            12. Conclusion: Ergo — Pioneering Practical Economic Autonomy for AI
          </h2>
          <div className="mb-4 text-gray-300">
            <div className="bg-neutral-800 border-l-4 border-cyan-400 p-4 mb-4 text-cyan-300 font-semibold">
              Vision: “eUTXO is not just another model — it’s the soil for a digital economy of autonomous agents. Contractual money, privacy, parallelism, evolution. It’s where AI earns, spends, and evolves.”
            </div>
            <p>
              AEI on Ergo is not theory: it’s feasible, modular, open. Autonomous digital businesses — persistent, scalable, adaptable. A true proving ground for on-chain AI agents. The next step? Real agents, real cases, and open-source code.
            </p>
            <div className="bg-neutral-800 border-l-4 border-orange-400 p-4 my-6 text-orange-200 italic">
              <Quote className="inline w-5 h-5 mb-1 text-orange-300" /> Kushti: “A good reminder to human beings that life should go beyond economic dimension just.”
            </div>
          </div>
        </section>

        {/* 13. AEI Business Cases */}
        <section id="cases">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            AEI Business Cases (Coming Soon)
          </h2>
          <div className="mb-4 text-gray-400">
            <p>
              <b>Here you’ll find:</b> Real stories, code and results from live AEI agents on Ergo: income-generating content bots, on-chain arbitrageurs, data market agents, agent networks. Stay tuned.
            </p>
            <div className="mt-4">
              <div className="bg-neutral-900 border-l-4 border-yellow-300 p-4 text-yellow-200">
                Want to add your case? <b>Open a PR</b> or contact the Ergo core team.
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Sidebar Table of Contents (right, sticky) */}
      <aside className="hidden md:block md:w-1/4">
        <nav className="sticky top-8 flex flex-col gap-2 text-sm text-gray-300 bg-neutral-900/60 rounded-xl p-4 border border-neutral-800">
          <div className="mb-2 font-bold text-orange-300">On this page</div>
          {toc.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              className="cursor-pointer hover:text-orange-300 transition block"
            >
              {title}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}
