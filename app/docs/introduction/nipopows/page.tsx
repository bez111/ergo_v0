"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Zap, 
  Layers, 
  ArrowRightLeft, 
  Link2, 
  ExternalLink,
  CheckCircle,
  Brain,
  Cpu,
  Shield,
  Globe,
  Code,
  Star,
  Target,
  Lock,
  Network,
  Smartphone,
  ArrowRight,
  FileText,
  Video,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function NipopowsPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="light-clients" className="flex items-center gap-2 justify-center">
          <Zap className="w-4 h-4" /> Light Clients
        </TabsTrigger>
        <TabsTrigger value="light-miners" className="flex items-center gap-2 justify-center">
          <Layers className="w-4 h-4" /> Light Miners
        </TabsTrigger>
        <TabsTrigger value="sidechains" className="flex items-center gap-2 justify-center">
          <ArrowRightLeft className="w-4 h-4" /> Sidechains
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
      {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Non-interactive Proof-of-Proof-of-Work (NIPoPoWs)
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            NIPoPoWs is a powerful cryptographic protocol integrated into the Ergo blockchain, enabling efficient authentication of blockchain events using proof-of-work.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            NIPoPoWs allow verifying that an event took place without requiring a direct network connection or downloading all block headers, making them particularly useful for cross-chain communication, sidechains, and light clients.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <blockquote className="text-xl italic text-center text-gray-300">
            "NIPoPoWs consist of a prover (full node) and a verifier (who does not have access to the full blockchain but knows its genesis block). The prover generates a short proof that convinces the verifier that an event occurred."
          </blockquote>
        </div>

        {/* Core Concepts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5 text-orange-400" /> How NIPoPoWs Work
            </h3>
            <p className="text-gray-300 mb-4">
              NIPoPoWs consist of a <strong>prover</strong> (full node on the source blockchain) and a <strong>verifier</strong> (who does not have access to the full blockchain but knows its genesis block).
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Short proof generation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Polylogarithmic proof size
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Honest majority assumption
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" /> Ergo's Block Structure
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo's block structure incorporates an <strong>extension</strong> section that houses NIPoPoW links, updated every 1,024 block epochs.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Extension section with NIPoPoW links
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Updated every 1,024 blocks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Selective block downloading
              </li>
            </ul>
          </div>
        </div>

        {/* Applications Overview */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-400" /> Applications of NIPoPoWs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Light Clients
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                NIPoPoWs facilitate the creation of efficient light clients, enhancing accessibility and scalability of blockchain networks.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Minimal storage requirements</li>
                <li>• Succinct proof verification</li>
                <li>• Mobile accessibility</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Light Miners
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                NIPoPoWs enable logarithmic space mining, allowing "light miners" to start with block headers without downloading the entire blockchain.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Logarithmic storage growth</li>
                <li>• Selective block retention</li>
                <li>• Full validation capability</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4" /> Sidechains
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                NIPoPoWs enable the construction of trustless proof-of-work sidechains, allowing communication between blockchains without trusted intermediaries.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Two-way peg implementation</li>
                <li>• Cross-chain communication</li>
                <li>• SPV proof security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Security Features
            </h3>
            <p className="text-gray-300 mb-4">
              The security of NIPoPoWs relies on the honest majority assumption. The verifier accepts multiple proofs, and as long as at least one of them is honestly generated, the verifier can extract the correct information.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Honest majority assumption
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multiple proof acceptance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Attack resistance
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" /> Efficiency Benefits
            </h3>
            <p className="text-gray-300 mb-4">
              NIPoPoWs provide significant efficiency improvements for blockchain networks and applications.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Polylogarithmic proof size
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced bandwidth usage
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Optimized storage requirements
              </li>
            </ul>
          </div>
        </div>

        {/* Adoption Considerations */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-400" /> Adoption Considerations
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              To adopt NIPoPoWs, the source blockchain needs to support interlink structures, which can be added through a velvet fork without requiring a hard fork. The target blockchain must be able to run the NIPoPoW verification function.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Source Blockchain</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Interlink structure support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Velvet fork implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    No hard fork required
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-blue-400 mb-2">Target Blockchain</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    NIPoPoW verification function
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Turing-complete language support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Smart contract capability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Research and Development */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" /> Research and Development
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              NIPoPoWs have been a crucial part of the Ergo blockchain since its inception. Ergo is dedicated to continually exploring the potential of NIPoPoWs and expanding this research area in collaboration with partners at IOHK.
            </p>
            <p>
              Increased use of NIPoPoWs is anticipated with ongoing contributions from the active developer community, positioning Ergo at the forefront of this research area.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Explore NIPoPoW Applications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/docs/introduction/nipopows?tab=light-clients"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Zap className="w-5 h-5 mr-2 text-orange-400" />
              <span className="text-gray-300">Light Clients</span>
            </Link>
            <Link
              href="/docs/introduction/nipopows?tab=light-miners"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Layers className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">Light Miners</span>
            </Link>
            <Link
              href="/docs/introduction/nipopows?tab=sidechains"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <ArrowRightLeft className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">Sidechains</span>
            </Link>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="light-clients">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Light Clients with NIPoPoWs
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            NIPoPoWs facilitate the creation of efficient light clients, enhancing accessibility and scalability of blockchain networks.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Light clients address the challenges of running a full node, which requires substantial resources. With NIPoPoWs, light clients can operate without maintaining the entire blockchain.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <blockquote className="text-xl italic text-center text-gray-300">
            "NIPoPoWs enable light clients to verify the occurrence of events using succinct proofs without requiring direct network access or full block header downloads."
          </blockquote>
        </div>

        {/* Core Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-green-400" /> Resource Efficiency
            </h3>
            <p className="text-gray-300 mb-4">
              Light clients can operate without maintaining the entire blockchain, significantly reducing storage and bandwidth requirements.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Minimal storage requirements
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced bandwidth usage
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Lower computational overhead
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Security & Verification
            </h3>
            <p className="text-gray-300 mb-4">
              Light clients can verify the occurrence of events using succinct proofs, maintaining security without full node requirements.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Succinct proof verification
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Event occurrence validation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Trustless operation
              </li>
            </ul>
        </div>
      </div>

        {/* How NIPoPoWs Work for Light Clients */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-400" /> How NIPoPoWs Work for Light Clients
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              NIPoPoWs consist of a <strong>prover</strong> (full node on the source blockchain) and a <strong>verifier</strong> (light client who does not have access to the full blockchain but knows its genesis block).
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">Prover (Full Node)</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Generates short proofs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Convinces verifier of events
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Polylogarithmic proof size
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Verifier (Light Client)</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Knows genesis block
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Accepts multiple proofs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Extracts correct information
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-orange-300 font-semibold">
          The security of NIPoPoWs relies on the honest majority assumption. The verifier accepts multiple proofs, and as long as at least one of them is honestly generated, the verifier can extract the correct information about the occurrence of the event.
        </p>
      </div>
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-green-400" /> Mobile Accessibility
            </h3>
            <p className="text-gray-300 mb-4">
              Light clients enable blockchain access on mobile devices and resource-constrained environments.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Mobile wallet support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                IoT device compatibility
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Low-resource environments
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Network className="w-5 h-5 text-blue-400" /> Network Scalability
            </h3>
            <p className="text-gray-300 mb-4">
              Light clients reduce network load and improve overall blockchain scalability.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced network traffic
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Improved network performance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Better decentralization
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" /> Cross-Chain Support
            </h3>
            <p className="text-gray-300 mb-4">
              Light clients can interact with multiple blockchains using NIPoPoW proofs.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multi-chain verification
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Interoperability support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Cross-chain communication
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Explore More About NIPoPoWs</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/docs/introduction/nipopows?tab=light-miners"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Layers className="w-5 h-5 mr-2 text-orange-400" />
              <span className="text-gray-300">Light Miners</span>
            </Link>
            <Link
              href="/docs/introduction/nipopows?tab=sidechains"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <ArrowRightLeft className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">Sidechains</span>
            </Link>
            <Link
              href="/docs/introduction/eutxo"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Code className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">eUTXO Model</span>
            </Link>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="light-miners">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Light Miners with NIPoPoWs
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            NIPoPoWs enable logarithmic space mining, allowing "light miners" to start with block headers without downloading the entire blockchain.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            By retaining only a select few important blocks, light miners can validate the entire blockchain, eliminating the need for full storage.
        </p>
      </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <blockquote className="text-xl italic text-center text-gray-300">
            "Light miners can validate the entire blockchain by retaining only a select few important blocks, eliminating the need for full storage requirements."
          </blockquote>
        </div>

        {/* Core Concepts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-orange-400" /> Logarithmic Space Mining
            </h3>
            <p className="text-gray-300 mb-4">
              Light miners can start with block headers, similar to light clients, without downloading the entire blockchain.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Start with block headers only
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Logarithmic storage growth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No full blockchain download
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" /> Selective Block Retention
            </h3>
            <p className="text-gray-300 mb-4">
              By retaining only a select few important blocks, light miners can validate the entire blockchain.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Important block selection
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Full validation capability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Minimal storage requirements
              </li>
            </ul>
          </div>
        </div>

        {/* Implementation Details */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" /> Implementation Details
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              This approach can be integrated through velvet (soft) forks, avoiding hard fork complexities and maintaining network stability.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Velvet Fork Integration</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Soft fork implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Backward compatibility
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Gradual adoption
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-blue-400 mb-2">Network Stability</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    No hard fork required
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Maintains consensus
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Reduced disruption
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-green-400" /> Reduced Resource Requirements
            </h3>
            <p className="text-gray-300 mb-4">
              Light miners require significantly less storage and computational resources compared to full nodes.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Minimal storage needs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Lower CPU requirements
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced bandwidth usage
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Security Maintenance
            </h3>
            <p className="text-gray-300 mb-4">
              Light miners maintain the same security guarantees as full nodes while using fewer resources.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Full validation capability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Consensus participation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Attack resistance
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Network className="w-5 h-5 text-purple-400" /> Network Participation
            </h3>
            <p className="text-gray-300 mb-4">
              Light miners can participate in network consensus and contribute to blockchain security.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Consensus participation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Network decentralization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Security contribution
              </li>
            </ul>
          </div>
      </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Explore More About NIPoPoWs</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/docs/introduction/nipopows?tab=light-clients"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Zap className="w-5 h-5 mr-2 text-orange-400" />
              <span className="text-gray-300">Light Clients</span>
            </Link>
            <Link
              href="/docs/introduction/nipopows?tab=sidechains"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <ArrowRightLeft className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">Sidechains</span>
            </Link>
            <Link
              href="/docs/introduction/eutxo"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Code className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">eUTXO Model</span>
            </Link>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="sidechains">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Sidechains with NIPoPoWs
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            NIPoPoWs enable the construction of trustless proof-of-work sidechains, allowing communication between blockchains without trusted intermediaries.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            They can be used to transfer assets from one blockchain to another and back, implementing a two-way peg with enhanced security.
        </p>
      </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <blockquote className="text-xl italic text-center text-gray-300">
            "NIPoPoWs leverage Simplified Payment Verification (SPV) proofs to provide resistance against potential attacks while maintaining a small size for efficient network transmission."
          </blockquote>
        </div>

        {/* Core Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Trustless Communication
            </h3>
            <p className="text-gray-300 mb-4">
              Sidechains enable communication between blockchains without trusted intermediaries, ensuring decentralization.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No trusted intermediaries
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Decentralized communication
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced security
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-orange-400" /> Two-Way Peg
            </h3>
            <p className="text-gray-300 mb-4">
              Assets can be transferred from one blockchain to another and back, implementing a secure two-way peg system.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Bidirectional transfers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Asset preservation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Secure peg mechanism
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" /> Technical Implementation
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              The security of the sidechain construction relies on the security of the underlying NIPoPoW protocol. NIPoPoWs leverage Simplified Payment Verification (SPV) proofs to provide resistance against potential attacks.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">SPV Proofs</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Simplified Payment Verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Attack resistance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Efficient transmission
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-blue-400 mb-2">Security Features</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Underlying NIPoPoW security
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Small proof size
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Network efficiency
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Link2 className="w-5 h-5 text-green-400" /> Cross-Chain Communication
            </h3>
            <p className="text-gray-300 mb-4">
              Smart contracts on one blockchain can receive and react to events that occur on another blockchain.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Event-driven interactions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Smart contract integration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automated responses
              </li>
            </ul>
      </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-blue-400" /> Remote ICOs
            </h3>
            <p className="text-gray-300 mb-4">
              Investors can directly pay for tokens in one cryptocurrency and receive them on another blockchain.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Cross-chain payments
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Token distribution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automated execution
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" /> Atomic Swaps
            </h3>
            <p className="text-gray-300 mb-4">
              Two parties can exchange cryptocurrencies across different blockchains without centralized exchanges.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Trustless exchanges
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No intermediaries
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Cross-chain verification
              </li>
            </ul>
          </div>
      </div>

        {/* Adoption Considerations */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-400" /> Adoption Considerations
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              To adopt NIPoPoWs, the source blockchain needs to support interlink structures, which can be added through a velvet fork without requiring a hard fork.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Source Blockchain Requirements</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Interlink structure support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Velvet fork implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    No hard fork required
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-blue-400 mb-2">Target Blockchain Requirements</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    NIPoPoW verification function
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Turing-complete language support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Smart contract capability
                  </li>
        </ul>
      </div>
            </div>
            <p className="text-orange-300 font-semibold">
              Miners and full nodes of the target blockchain do not need to be aware of the source blockchain, as they treat the NIPoPoW proofs as opaque strings passed to a smart contract. This blockchain agnosticism allows users to initiate cross-chain relationships between different blockchains dynamically.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Explore More About NIPoPoWs</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/docs/introduction/nipopows?tab=light-clients"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Zap className="w-5 h-5 mr-2 text-orange-400" />
              <span className="text-gray-300">Light Clients</span>
            </Link>
            <Link
              href="/docs/introduction/nipopows?tab=light-miners"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Layers className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">Light Miners</span>
            </Link>
            <Link
              href="/docs/introduction/eutxo"
              className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <Code className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-gray-300">eUTXO Model</span>
            </Link>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 