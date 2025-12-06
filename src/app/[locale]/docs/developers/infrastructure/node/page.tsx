
/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages */
import React from "react";
import Link from "next/link";
import { Server, Settings, TestTube, Network, Cog, Layers, ChevronLeft } from "lucide-react";

export default function NodePage() {
  const nodeSections = [
    {
      title: "Setup",
      description: "Install and configure your Ergo node with step-by-step guides for different platforms and deployment methods.",
      icon: Settings,
      color: "text-cyan-400",
      link: "/docs/developers/infrastructure/node/setup"
    },
    {
      title: "Testnet",
      description: "Get started with Ergo testnet for development and testing. Access testnet resources and configuration.",
      icon: TestTube,
      color: "text-orange-400",
      link: "/docs/developers/infrastructure/node/testnet"
    },
    {
      title: "Protocol",
      description: "Learn about the Ergo network protocol, P2P communication, and blockchain validation mechanisms.",
      icon: Network,
      color: "text-green-400",
      link: "/docs/developers/infrastructure/node/protocol"
    },
    {
      title: "Configuration",
      description: "Configure your node settings, optimize performance, and customize node behavior for your needs.",
      icon: Cog,
      color: "text-cyan-300",
      link: "/docs/developers/infrastructure/node/configuration"
    },
    {
      title: "Modes of Operation",
      description: "Explore different node operation modes: full archival, pruned full node, and light full node.",
      icon: Layers,
      color: "text-orange-300",
      link: "/docs/developers/infrastructure/node/modes"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        The Ergo Reference Client (Node)
      </h1>
      
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/docs/developers/infrastructure"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Infrastructure
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-8">
        The Ergo Node is the core software that connects to the Ergo P2P network, validates transactions and blocks, and maintains a copy of the entire blockchain. Running a node is crucial for the network's decentralization and security.
      </p>

      {/* Node Sections Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {nodeSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <Link
              key={index}
              href={section.link}
              className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[200px] cursor-pointer relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <IconComponent className={`w-6 h-6 ${section.color}`} />
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {section.description}
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>
          );
        })}
      </div>

      {/* Public Nodes Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Server className="w-6 h-6 text-cyan-400" /> Public Nodes
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>
              There is a public node available at {" "}
              <a href="http://213.239.193.208:9053" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                213.239.193.208:9053
              </a>
            </li>
            <li>
              A redundancy can also be provided on request to <a href="mailto:team@ergoplatform.org" className="text-orange-400 hover:underline">team@ergoplatform.org</a>
            </li>
            <li>
              A dynamic list of available public nodes can be found at {" "}
              <a href="http://api.tokenjay.app/peers/list" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                api.tokenjay.app/peers/list
              </a>
            </li>
          </ul>
          <p className="text-gray-400">
            To set up your own node please see {" "}
            <Link href="/docs/developers/infrastructure/install" className="text-cyan-400 hover:underline">this page</Link>.
          </p>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Minimum Requirements & Prerequisites</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-orange-400">Java</h3>
            <p className="text-gray-300 mb-3">
              An Ergo node requires a <strong>JDK/JRE version &gt;= 9</strong> installed on your system. We recommend using Oracle Java SE or SDKMAN for Unix-based systems:
            </p>
            <pre className="bg-neutral-800 rounded p-3 text-sm text-gray-300 overflow-x-auto">
{`curl -s "https://get.sdkman.io" | bash
sdk install java 11.0.13.8.1-amzn`}
            </pre>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Hardware</h3>
            <p className="text-gray-300 mb-3">
              The minimum hardware requirements are approximately:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>~20GB of storage for the blockchain</li>
              <li>~8GB of RAM for handling the initial sync</li>
              <li>4-6GB of RAM available for the node process</li>
              <li>Fast SSD recommended for disk I/O</li>
            </ul>
            <p className="text-gray-400 mt-3">
              Running with the <code className="bg-neutral-800 px-2 py-1 rounded">-Xmx4G</code> flag on the JVM is advised.
            </p>
          </div>
        </div>
      </section>

      {/* Modes of Operation Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Modes of Operation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/docs/developers/infrastructure/node/manual" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group relative hover:border-cyan-400/40 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Full Archival Node</h3>
            <p className="text-gray-300 mb-4">
              This mode stores the entire blockchain history. To install from scratch, refer to the manual install page for detailed instructions.
            </p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>
          <Link href="/docs/developers/infrastructure/node/pruned" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group relative hover:border-orange-400/40 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-orange-400">Pruned Full Node</h3>
            <p className="text-gray-300 mb-4">
              Bootstrap a pruned full node using a verified UTXO set snapshot and NiPoPoWs. Achieve full node security on standard hardware within minutes.
            </p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>
          <Link href="/docs/developers/infrastructure/node/light" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group relative hover:border-green-400/40 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-green-400">Light Full Node</h3>
            <p className="text-gray-300 mb-4">
              This mode only holds the root digest of the state dictionary and checks full blocks or a suffix of the blockchain.
            </p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>
        </div>
      </section>

      {/* Platform-Specific Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Per Device</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/docs/developers/infrastructure/node/android" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group relative hover:border-orange-400/40 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-orange-400">Android</h3>
            <p className="text-gray-300 mb-4">
              Sync the entire Ergo blockchain on your mobile device!
            </p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>
          <Link href="/docs/developers/infrastructure/node/pi" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group relative hover:border-cyan-400/40 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Raspberry Pi</h3>
            <p className="text-gray-300 mb-4">
              Run a node on a Raspberry Pi!
            </p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>
        </div>
      </section>

      {/* Developer Resources Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Developer Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="https://deepwiki.com/ergoplatform/ergo/1-ergo-node-overview" className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group relative hover:border-cyan-400/40 transition-all duration-300 cursor-pointer" target="_blank" rel="noopener noreferrer">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">DeepWiki Documentation</h3>
            <p className="text-gray-300 mb-4">
              For an alternative and potentially more detailed documentation source generated from the repository, explore the Ergo Node on DeepWiki.
            </p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </a>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group relative hover:border-orange-400/40 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-orange-400">Toolkits</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• <a href="/docs/developers/infrastructure/explorer" className="text-cyan-400 hover:underline">Explorer & Node Bundles</a></li>
              <li>• <a href="https://ergosphere.cloud/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergosphere</a> (Umbrel-like solution)</li>
              <li>• <a href="https://github.com/ross-weir/ergode" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergode</a> (TypeScript implementation)</li>
            </ul>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <ul className="text-gray-300 space-y-2">
            <li>• <a href="http://ergonodes.net" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergonodes.net</a> - Overview of live nodes</li>
            <li>• <Link href="/docs/developers/infrastructure/node/faq" className="text-cyan-400 hover:underline">Node Frequently Asked Questions</Link></li>
            <li>• <Link href="/docs/developers/infrastructure/node/modes" className="text-cyan-400 hover:underline">Modes of Operation</Link></li>
            <li>• <Link href="/docs/developers/infrastructure/node/api" className="text-cyan-400 hover:underline">Node APIs</Link></li>
            <li>• <Link href="/docs/developers/infrastructure/node/conf" className="text-cyan-400 hover:underline">Node Configuration</Link></li>
            <li>• <Link href="/docs/developers/infrastructure/node/protocol" className="text-cyan-400 hover:underline">Node Protocol Details</Link></li>
          </ul>
        </div>
      </section>
    </div>
  );
} 