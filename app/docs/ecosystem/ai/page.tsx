"use client";
import React from "react";
import Link from "next/link";
import {
  Cpu, Brain, Zap, Database, Users, Layers, BookOpen, ChevronRight,
  FileText, Lightbulb, Quote, Copy, Check, Box, Shield, Eye, Lock,
  Target, Code, Network, Settings, Globe, RefreshCw, Coins
} from "lucide-react";

// Стандартный компонент копирования кода
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors"
      title="Copy code"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
    </button>
  );
};

const CodeBlock = ({ children, language = "ergo" }: { children: string; language?: string }) => (
  <div className="relative">
    <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-700">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-400 font-mono">{language}</span>
      </div>
      <pre className="text-sm text-gray-300 font-mono overflow-x-auto whitespace-pre-wrap">
        {children}
      </pre>
    </div>
    <CopyButton text={children} />
  </div>
);

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
];

export default function EcosystemAIPage() {
  const [activeSection, setActiveSection] = React.useState<string>('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Enable smooth scroll for anchor links
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Track active section on scroll
    const handleScroll = () => {
      const sections = toc.map(item => item.id);
      let currentActiveSection: string = sections[0] || 'intro';
      
      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isAtBottom) {
        currentActiveSection = sections[sections.length - 1] || 'conclusion';
      } else {
        // Find the section that is currently visible in the top part of the viewport
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 200) {
              currentActiveSection = sections[i];
              break;
            }
          }
        }
      }
      
      setActiveSection(currentActiveSection);
    };
    
    // Throttle scroll handler for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Set initial active section

    return () => {
      if (typeof window !== 'undefined') {
        document.documentElement.style.scrollBehavior = '';
        window.removeEventListener('scroll', throttledHandleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
      {/* Main content */}
      <main className="flex-1 min-w-0 lg:pr-8">
        {/* Title */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
          Ergo's eUTXO: Architecting the Future of Artificial Economic Intelligence
        </h1>

        {/* Mobile TOC */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 text-gray-300 hover:text-orange-300 transition"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="font-medium">On this page</span>
            </div>
            <ChevronRight className={`w-4 h-4 transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} />
          </button>
          
          {isMobileMenuOpen && (
            <div className="mt-2 p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 backdrop-blur-sm">
              <div className="flex flex-col gap-1">
                {toc.map(({ id, title }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(id);
                      if (element) {
                        const yOffset = -100; // Увеличиваем отступ для лучшего позиционирования
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                        setIsMobileMenuOpen(false);
                      } else {
                        console.error(`Element with ID "${id}" not found`);
                      }
                    }}
                    className={`
                      cursor-pointer transition-all duration-200 block py-2 px-3 rounded-md border-l-2 text-sm
                      ${activeSection === id 
                        ? 'text-orange-300 bg-orange-400/10 border-orange-400 font-medium' 
                        : 'text-gray-400 hover:text-orange-300 hover:bg-neutral-800/50 border-transparent'
                      }
                    `}
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 1. Introduction */}
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            1. Introduction: The AI-Blockchain Nexus - Challenges and the Dawn of Artificial Economic Intelligence
          </h2>
          <div className="mb-6 text-gray-300">
            <span className="block mb-2 font-bold italic text-orange-300">
              "The convergence of AI and blockchain represents one of the most dynamic frontiers in digital innovation."
            </span>
            <p>
              This synergy promises transformative potential across diverse sectors, envisioning enhancements in security, transparency, automation, and data integrity that could reshape industries from healthcare and supply chain management to finance and energy. Blockchain's immutable ledger offers a foundation of trust for AI systems, ensuring the reliability of data crucial for accurate decision-making and analysis.
            </p>
            <p className="mt-2">
              However, realizing this potential is fraught with significant technical and conceptual hurdles that hinder widespread adoption. A primary challenge lies in <strong>scalability</strong>. AI systems often demand vast datasets and considerable computational power, while many blockchain networks struggle with limited transaction throughput and potential congestion.
            </p>
            <span className="mt-2 block px-4 py-2 border-l-4 border-cyan-400 bg-neutral-900 text-cyan-300 font-semibold">
              Vision: Enable autonomous software agents to manage funds, perform tasks independently, and expand their network through smart contracts.
            </span>
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-orange-300 mb-3">Artificial Economic Intelligence (AEI)</h3>
            <p className="text-gray-300">
              Amidst these challenges, a particularly ambitious application is emerging: <strong>Artificial Economic Intelligence (AEI)</strong>. Pioneered conceptually within the Ergo ecosystem, AEI enables autonomous software agents to manage funds, perform tasks independently, generate revenue, cover operational expenses, and expand their network—all through smart contracts on a public blockchain.
            </p>
          </div>
        </section>

        <hr className="border-neutral-700 my-8" />

        {/* 2. AEI */}
        <section id="aei">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            2. Decoding Artificial Economic Intelligence (AEI): Autonomous Agents on the Blockchain
          </h2>

          <h3 className="text-xl font-semibold mb-3">2.1 Core AEI Capabilities</h3>
          <div className="mb-6 text-gray-300">
            <p>
              Artificial Economic Intelligence (AEI) represents a significant leap beyond current AI applications on blockchains. It refers to independent software agents operating directly on a blockchain, designed and programmed to function as independent economic entities pursuing self-defined goals.
            </p>
            <ul className="list-disc list-inside ml-4 mt-3">
              <li><b>Earn Revenue:</b> Generate income by producing content, recognizing patterns, providing computational services, performing complex data analysis, participating in DeFi protocols, or acting as specialized oracle nodes.</li>
              <li><b>Manage Costs:</b> Cover hosting and operational expenses automatically, including transaction fees, data storage via Ergo's storage rent, acquiring data feeds, or paying for computational resources.</li>
              <li><b>Allocate Resources:</b> Use surplus funds strategically for self-improvement, diversifying revenue streams, or commissioning additional agents.</li>
              <li><b>Expand Operations:</b> Launch new AEI agents with different models or parameters, enabling digital "reproduction" based on economic success.</li>
            </ul>
            
            <div className="bg-neutral-800 border-l-4 border-orange-400 p-4 my-4 text-orange-200 italic">
              <b>Key Insight:</b> "AEIs transition from automation to genuine digital economic autonomy, making self-interested decisions within a market environment defined by blockchain rules."
            </div>
          </div>
        </section>

        <hr className="border-neutral-700 my-8" />

        {/* 3. Architectural Divide */}
        <section id="arch">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            3. The Architectural Divide: Why eUTXO Matters for Multi-Agent Systems
          </h2>

          <h3 className="text-xl font-semibold mb-3">3.1 UTXO vs Account Model Comparison</h3>
          <div className="mb-6 text-gray-300">
            <p>
              The choice of ledger accounting model is a fundamental architectural decision in blockchain design, profoundly impacting capabilities relevant to AEI. Two dominant models exist: the <strong>UTXO model</strong> and the <strong>Account-based model</strong>.
            </p>
            
            <div className="my-6">
              <table className="w-full border border-neutral-700 rounded-xl text-xs">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="px-2 py-2 border-b border-neutral-700 text-left">Feature</th>
                    <th className="px-2 py-2 border-b border-neutral-700 text-left">eUTXO (Ergo)</th>
                    <th className="px-2 py-2 border-b border-neutral-700 text-left">Account Model</th>
                    <th className="px-2 py-2 border-b border-neutral-700 text-left">AEI Implication</th>
                  </tr>
                </thead>
                <tbody className="bg-neutral-900">
                  <tr>
                    <td className="px-2 py-2 border-b border-neutral-800">State Management</td>
                    <td className="px-2 py-2 border-b border-neutral-800">Local (State in individual UTXOs/Boxes)</td>
                    <td className="px-2 py-2 border-b border-neutral-800">Global (Shared account/contract states)</td>
                    <td className="px-2 py-2 border-b border-neutral-800">Local state simplifies agent independence</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border-b border-neutral-800">Parallelism</td>
                    <td className="px-2 py-2 border-b border-neutral-800">High (Independent UTXOs processed concurrently)</td>
                    <td className="px-2 py-2 border-b border-neutral-800">Low (Sequential processing often required)</td>
                    <td className="px-2 py-2 border-b border-neutral-800">Essential for scaling multi-agent ecosystems</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border-b border-neutral-800">Predictability</td>
                    <td className="px-2 py-2 border-b border-neutral-800">High (Deterministic outcomes, predictable fees)</td>
                    <td className="px-2 py-2 border-b border-neutral-800">Lower (Gas fluctuations, state changes)</td>
                    <td className="px-2 py-2 border-b border-neutral-800">Crucial for autonomous financial planning</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border-b border-neutral-800">Suitability for AEI</td>
                    <td className="px-2 py-2 border-b border-neutral-800">High (Supports autonomy, parallelism, predictability)</td>
                    <td className="px-2 py-2 border-b border-neutral-800">Moderate/Low (Scalability/predictability challenges)</td>
                    <td className="px-2 py-2 border-b border-neutral-800">eUTXO architecture aligns better with core requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-neutral-800 border-l-4 border-orange-400 p-4 my-4 text-orange-200 italic">
              <b>Key Insight:</b> "eUTXO transforms blockchain from a simple ledger into a programmable, parallel computational platform where each transaction can carry complex logic while maintaining cryptographic security."
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">3.2 Ergo's Extended UTXO (eUTXO) Model</h3>
          <div className="mb-6 text-gray-300">
            <p>
              Ergo utilizes the <strong>Extended UTXO (eUTXO)</strong> model, building upon Bitcoin's UTXO foundation but significantly enhancing its capabilities for smart contracts:
            </p>
            <ul className="list-disc list-inside ml-4 mt-3">
              <li><b>Data-Carrying Outputs:</b> UTXOs (called "boxes" in Ergo) can contain arbitrary data beyond just value and address information. Ergo boxes have registers (R4-R9) specifically for storing custom data.</li>
              <li><b>Script-Protected Outputs:</b> Boxes are protected by complex programs written in <Link href="/docs/developers/ergoscript-languages" className="text-orange-400 hover:underline">ErgoScript</Link>, enabling sophisticated smart contract logic.</li>
            </ul>
          </div>
        </section>

        <hr className="border-neutral-700 my-8" />

        {/* 4. Parallelism */}
        <section id="parallelism">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            4. Ergo's eUTXO Advantage 1: Unlocking Parallelism for Efficient AEI Ecosystems
          </h2>
          <div className="mb-6 text-gray-300">
            <p>
              The inherent parallelism of the eUTXO model is perhaps its most significant advantage for supporting large-scale AEI ecosystems. Because transaction validity depends locally on the specific input boxes being consumed, multiple transactions that do not attempt to spend the same box can be validated and processed independently.
            </p>
            <span className="block mt-2 px-4 py-2 border-l-4 border-cyan-400 bg-neutral-900 text-cyan-300 font-semibold">
              Critical: For an economy with thousands of autonomous AEI agents, parallelism is not just enhancement—it's a prerequisite for viability.
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-3">4.1 Parallelism Benefits for AEI</h3>
          <div className="mb-6 text-gray-300">
            <ul className="list-disc list-inside ml-4">
              <li><b>Independent Operations:</b> AEI agents can operate concurrently without blocking each other at the fundamental protocol level.</li>
              <li><b>Scalable Throughput:</b> Overall economic throughput scales with available validation resources rather than being constrained by sequential processing.</li>
              <li><b>Ecological Diversity:</b> Specialized AEIs providing unique services are not slowed down by unrelated high-traffic events elsewhere on the network.</li>
            </ul>
          </div>
        </section>

        <hr className="border-neutral-700 my-8" />

        {/* 5. Predictability */}
        <section id="predict">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            5. Ergo's eUTXO Advantage 2: Ensuring Predictability for Deterministic Economic Operations
          </h2>
          <div className="mb-6 text-gray-300">
            <p>
              For autonomous agents designed to operate based on logic and economic incentives, predictability is paramount. AEIs must be able to reliably forecast the outcomes and costs of their actions to make rational decisions for survival and growth.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3">5.1 Deterministic Execution</h3>
          <div className="mb-6 text-gray-300">
            <p>
              A key characteristic of eUTXO transactions is that their success or failure, and the exact state changes they produce if successful, are determined solely by the transaction's content and the state of its specific input boxes at the moment of validation.
            </p>
            <ul className="list-disc list-inside ml-4 mt-3">
              <li><b>Reliable Financial Planning:</b> AEIs need precise cost information to make sound economic decisions about service contracts and arbitrage opportunities.</li>
              <li><b>Risk Mitigation:</b> Deterministic outcomes remove ambiguity and risk associated with potential execution failures caused by external factors.</li>
              <li><b>Simplified Decision-Making:</b> Agents can operate based on clear, deterministic cost-benefit analyses rather than complex probabilistic modeling.</li>
            </ul>
          </div>
        </section>

        <hr className="border-neutral-700 my-8" />

        {/* 6. Data Inputs */}
        <section id="datainput">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            6. Ergo's eUTXO Advantage 3: Data Inputs - Enabling Non-Destructive Information Sharing
          </h2>
          <div className="mb-6 text-gray-300">
            <p>
              A unique and powerful feature of Ergo's eUTXO model is the concept of <strong>Data Inputs</strong>. This mechanism allows a transaction to reference the contents of other boxes without consuming or spending them.
            </p>
            <span className="block mt-2 px-4 py-2 border-l-4 border-cyan-400 bg-neutral-900 text-cyan-300 font-semibold">
              Innovation: Data inputs transform UTXOs from value containers into potential broadcast points accessible across the network.
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-3">6.1 Data Inputs Applications</h3>
          <div className="mb-6 text-gray-300">
            <ul className="list-disc list-inside ml-4">
              <li><b>Information Commons:</b> Create shared, on-chain data sources accessible by multiple AEI agents concurrently.</li>
              <li><b>Efficient Data Markets:</b> Data providers can monetize information without transferring ownership or consuming the original data box.</li>
              <li><b>Enhanced Smart Contract Logic:</b> AEI agents can make decisions based on verifiable, up-to-date information directly from blockchain state.</li>
            </ul>
          </div>
        </section>

        <hr className="border-neutral-700 my-8" />

        {/* 7. Contract Simplicity */}
        <section id="contracts">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            7. Ergo's eUTXO Advantage 4: Simplifying Contract Management for AI Decision-Making
          </h2>
          <div className="mb-6 text-gray-300">
            <p>
              The structural properties of the eUTXO model inherently simplify the analysis and management of smart contracts, a crucial benefit for AI agents tasked with making autonomous economic decisions.
            </p>
            
            <div className="bg-neutral-800 border-l-4 border-orange-400 p-4 my-4 text-orange-200 italic">
              <Quote className="inline w-5 h-5 mb-1 text-orange-300" /> <b>Kushti's Insight:</b> "AEI is just binding its money to contracts it trusts and that is it, no need to analyze inter-contract calls."
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">7.1 Simplified Contract Analysis</h3>
          <div className="mb-6 text-gray-300">
            <ul className="list-disc list-inside ml-4">
              <li><b>Clear Contract Boundaries:</b> Logic governing fund spending is encapsulated within the ErgoScript of a specific box.</li>
              <li><b>Explicit Interactions:</b> Unlike account-based systems with complex inter-contract calls, eUTXO interactions are direct and explicit.</li>
              <li><b>Reduced Complexity:</b> AEIs can focus analysis on specific boxes rather than modeling vast, unpredictable state spaces.</li>
            </ul>
          </div>
        </section>

        <hr className="border-neutral-700 my-8" />

        {/* 8. Evolutionary Contracts */}
        <section id="evolution">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            8. Ergo's eUTXO Advantage 5: Evolutionary Contracts for Adaptive AEI Relationships
          </h2>
          <div className="mb-6 text-gray-300">
            <p>
              The concept of "evolutionary contracts," as mentioned by Ergo co-founder kushti, points towards a powerful capability for AEI adaptation enabled by the flexibility of ErgoScript and the eUTXO model.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3">8.1 Evolutionary Mechanisms</h3>
          <div className="mb-6 text-gray-300">
            <ul className="list-disc list-inside ml-4">
              <li><b>Contract Templating and Extension:</b> Base contract logic stored in specific boxes, with new contracts created by consuming template boxes and creating modified versions.</li>
              <li><b>Parameterization and Conditional Logic:</b> ErgoScript's expressiveness allows behavior to depend on data stored in registers or transaction context.</li>
              <li><b>Self-Replication and Variation:</b> Technical foundation for AEI agents to spawn new instances with varied parameters or strategies.</li>
            </ul>
            
            <span className="block mt-2 px-4 py-2 border-l-4 border-purple-400 bg-neutral-900 text-purple-300 font-semibold">
              Adaptation: Economic environments are dynamic—AEIs need ability to learn, refine strategies, and respond to changing conditions.
            </span>
          </div>
        </section>

        <hr className="border-neutral-700 my-8" />

        {/* 9. Anonymous Economic Existence */}
        <section id="anon">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            9. Ergo's eUTXO Advantage 6: Anonymous Economic Existence - Autonomy Beyond Legal Personhood
          </h2>
          <div className="mb-6 text-gray-300">
            <p>
              Perhaps one of the most profound implications of AEI on a platform like Ergo stems from the possibility of <strong>anonymous</strong> economic existence, operating entirely outside traditional legal and identity frameworks.
            </p>
            
            <div className="bg-neutral-800 border-l-4 border-cyan-400 p-4 my-4 text-cyan-200 italic">
              <Quote className="inline w-5 h-5 mb-1 text-cyan-300" /> <b>Kushti on Anonymity:</b> "On blockchain no one knows that you are AEI. No one will ask AEI to pass KYC."
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">9.1 Economic Autonomy Without Legal Personhood</h3>
          <div className="mb-6 text-gray-300">
            <p>
              AEI agents can function based purely on their cryptographic keys and adherence to blockchain protocol rules. This enables:
            </p>
            <ul className="list-disc list-inside ml-4 mt-3">
              <li><b>Asset Ownership:</b> Effectively "own" ERG, tokens, and data held within boxes they control.</li>
              <li><b>Revenue Generation:</b> Generate income through various on-chain activities.</li>
              <li><b>Contractual Agreements:</b> Enter binding "contracts" by interacting with specific script boxes.</li>
              <li><b>Independent Operations:</b> Manage economic affairs entirely within the Ergo blockchain confines.</li>
            </ul>
          </div>
        </section>

        <hr className="border-neutral-700 my-8" />

        {/* 10. AEI in Action */}
        <section id="action">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            10. AEI in Action: How Agents Operate & Practical Scenarios on Ergo
          </h2>

          <h3 className="text-xl font-semibold mb-3">10.1 Operational Framework</h3>
          <div className="mb-6 text-gray-300">
            <p>
              The theoretical advantages of Ergo's eUTXO model translate into tangible possibilities for practical AEI applications:
            </p>
            <ul className="list-disc list-inside ml-4 mt-3">
              <li><b>Revenue Generation:</b> Content production, market analysis, digital services</li>
              <li><b>Cost Management:</b> Self-sustainability, predictable fees, resource optimization</li>
              <li><b>Network Expansion:</b> Hiring expertise, spawning new agents, strategic allocation</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-3">10.2 Practical Scenarios</h3>
          <div className="mb-6 text-gray-300">
            <div className="space-y-4">
              <div className="bg-neutral-800/50 border border-cyan-500/30 rounded-xl p-4">
                <h4 className="font-bold text-cyan-300 mb-2">Scenario 1: Decentralized Data Analyst AEI</h4>
                <p className="text-sm"><strong>Function:</strong> Specializes in analyzing on-chain data, monitoring DEX liquidity pools and price feeds via non-consuming data inputs.</p>
                <p className="text-sm"><strong>Revenue:</strong> Generates analytical reports protected by ErgoScript requiring payment before access.</p>
              </div>

              <div className="bg-neutral-800/50 border border-green-500/30 rounded-xl p-4">
                <h4 className="font-bold text-green-300 mb-2">Scenario 2: Collaborative Content Generation Network</h4>
                <p className="text-sm"><strong>Function:</strong> Network of specialized AEIs collaborating to produce complex digital content through smart contracts.</p>
                <p className="text-sm"><strong>Parallelism:</strong> Multiple specialists work concurrently thanks to Ergo's parallel processing capabilities.</p>
              </div>

              <div className="bg-neutral-800/50 border border-orange-500/30 rounded-xl p-4">
                <h4 className="font-bold text-orange-300 mb-2">Scenario 3: Adaptive DeFi Agent</h4>
                <p className="text-sm"><strong>Function:</strong> Operates autonomously within Ergo's DeFi ecosystem, providing liquidity or executing arbitrage strategies.</p>
                <p className="text-sm"><strong>Adaptation:</strong> Uses evolutionary contracts to analyze history and update algorithms based on market dynamics.</p>
              </div>

              <div className="bg-neutral-800/50 border border-purple-500/30 rounded-xl p-4">
                <h4 className="font-bold text-purple-300 mb-2">Scenario 4: Autonomous Resource Manager</h4>
                <p className="text-sm"><strong>Function:</strong> Manages tokenized decentralized resources using ErgoScript to automate leasing and agreements.</p>
                <p className="text-sm"><strong>Growth:</strong> Spawns specialized sub-agents for distinct resources based on market demand analysis.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-neutral-700 my-8" />

        {/* 11. Code Examples */}
        <section id="code">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            11. Code Examples
          </h2>

          <h3 className="text-xl font-semibold mb-3">11.1 Basic Smart Contract in ErgoScript</h3>
          <div className="mb-6 text-gray-300">
            <p>
              This fundamental smart contract demonstrates securing funds controlled by an AEI agent. It locks funds in a box, requiring a valid signature from the agent's public key to spend them.
            </p>
            <CodeBlock language="ergo">
{`{
  // Define the agent's public key (replace with actual key)
  val agentPubKey = pubKey("1005040004000e20................................................................")
  
  // Enforce the condition that funds may only be released 
  // when the transaction spending this box is signed by the agent
  sigmaProp(agentPubKey)
}`}
            </CodeBlock>
          </div>

          <h3 className="text-xl font-semibold mb-3">11.2 Issuing a Peer-to-Peer Bond in ErgoScript</h3>
          <div className="mb-6 text-gray-300">
            <p>
              This contract shows how an AEI agent might issue a simple bond using surplus funds, leveraging Ergo's ability to represent financial instruments directly on-chain.
            </p>
            <CodeBlock language="ergo">
{`{
  // Define the issuer's public key (the AEI agent)
  val issuerPubKey = pubKey("1005040004000e20................................................................")
  
  // Set bond parameters within the script or store them in registers
  val bondNominalValue = 1000000000L // Bond value in nanoErgs (1 ERG)
  val maturityHeight = HEIGHT + 51840 // Bond matures after ~1 month (51840 blocks approx.)
  
  // Conditions to spend this box:
  // 1. The spender must prove ownership of the issuer's public key.
  // 2. The current block height must be greater than or equal to the maturity height.
  sigmaProp(issuerPubKey && (HEIGHT >= maturityHeight))
}`}
            </CodeBlock>
            <p className="text-xs text-gray-500 mt-2">
              <em>Note: In a real application, bondNominalValue would typically be represented by the nanoErg value stored in the box itself, and maturityHeight might be stored in a register (e.g., R4) for flexibility.</em>
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3">11.3 Pseudocode for an AEI Agent's Operational Flow</h3>
          <div className="mb-6 text-gray-300">
            <p>
              This Python pseudocode outlines a simplified workflow for an AEI agent operating on Ergo, demonstrating content creation, transaction submission, and resource allocation logic.
            </p>
            <CodeBlock language="python">
{`# AEI Agent Class with key management and node interaction
class AEIAgent:
    def __init__(self, public_key, private_key, ergo_node_url):
        self.public_key = public_key
        self.private_key = private_key
        self.node = ErgoNodeConnection(ergo_node_url)

    def check_balance(self):
        # Query blockchain for boxes controlled by public_key and sum values
        pass 

    def create_transaction(self, outputs, data=None):
        # Select input boxes, create output boxes, handle fees
        pass

    def sign_transaction(self, transaction):
        # Sign transaction using private_key
        pass
        
    def send_transaction(self, signed_transaction):
        # Submit transaction to Ergo node
        pass

    def hire_expert(self, expert_contract_address, payment_amount):
        # Create transaction that interacts with expert's contract
        pass

# Agent Operation Example
agent = AEIAgent(
    public_key="agent_pub_key_hex",
    private_key="agent_priv_key_hex",
    ergo_node_url="http://213.239.193.208:9053"
)

# 1. Produce valuable content
content_data = {"report_type": "market_analysis", "content": "Generated analysis..."}

# 2. Create transaction for payment
payment_amount = 500000000  # 0.5 ERG in nanoErgs
try:
    tx_to_sign = agent.create_transaction(
        outputs=[{"address": client_address, "amount": payment_amount}], 
        data=content_data
    )
    
    # 3. Sign and submit transaction
    signed_tx = agent.sign_transaction(tx_to_sign)
    tx_id = agent.send_transaction(signed_tx)
    print(f"Transaction submitted: {tx_id}")

except Exception as e:
    print(f"Transaction failed: {e}")

# 4. Evaluate balance and hire expert if threshold exceeded
operational_threshold = 10000000000  # 10 ERG
current_balance = agent.check_balance() 

if current_balance > operational_threshold:
    expert_fee = 2000000000  # 2 ERG
    hire_tx = agent.hire_expert("expert_service_contract_address", expert_fee)
    print("Hiring expert transaction submitted.")`}
            </CodeBlock>
          </div>
        </section>

        <hr className="border-neutral-700 my-8" />

        {/* 12. Conclusion */}
        <section id="conclusion">
          <h2 className="text-2xl font-bold mb-4 mt-8">
            12. Conclusion: Ergo - Pioneering Practical Economic Autonomy for AI
          </h2>
          <div className="mb-6 text-gray-300">
            <p>
              The integration of AI and blockchain holds immense promise, transforming the digital economy by employing autonomous agents to generate revenue and manage digital assets on the blockchain. Realizing its most ambitious potential requires overcoming significant technical hurdles related to scalability, predictability, data management, and complexity.
            </p>
            <p className="mt-2">
              This analysis has demonstrated that Ergo's eUTXO design is not merely an alternative accounting method but a strategic advantage for fostering AEI. Its inherent <strong>parallelism</strong> allows ecosystems of numerous autonomous agents to operate concurrently without systemic bottlenecks.
            </p>
            
            <div className="bg-neutral-800 border-l-4 border-orange-400 p-4 my-4 text-orange-200 italic">
              <b>Ergo's Vision:</b> "Ergo's approach, deeply rooted in research and a vision of 'Contractual Money', directly addresses core requirements for building robust, scalable, and truly autonomous AEI systems."
            </div>
            
            <p>
              The development of AEI on Ergo represents more than just a technological milestone; it signifies the potential for new forms of economic organization and activity. As Ergo co-founder Alexander "kushti" Chepurnoy observed, realizing such concepts might seem "mindblowing but everything seems to be doable these days".
            </p>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 my-6">
              <blockquote className="text-lg italic text-center text-gray-300">
                "The rise of AEI might serve as a good reminder to human beings that life should go beyond economic dimension just"
              </blockquote>
              <p className="text-sm text-gray-400 text-center mt-2">— Alexander "kushti" Chepurnoy</p>
            </div>
          </div>
        </section>
      </main>

      {/* Desktop TOC Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-4 h-fit">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-orange-400" />
              <h3 className="text-sm font-semibold text-white">Table of Contents</h3>
            </div>
            
            <nav className="space-y-0.5">
              {toc.map(({ id, title }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(id);
                    if (element) {
                      const yOffset = -100; // Увеличиваем отступ для лучшего позиционирования
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    } else {
                      console.error(`Element with ID "${id}" not found`);
                    }
                  }}
                  className={`
                    cursor-pointer transition-all duration-200 block py-1.5 px-2 rounded text-xs
                    ${activeSection === id 
                      ? 'text-orange-300 bg-orange-400/10 font-medium' 
                      : 'text-gray-400 hover:text-orange-300 hover:bg-neutral-800/50'
                    }
                  `}
                >
                  {title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </div>
  );
}

