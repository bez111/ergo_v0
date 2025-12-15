"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import { 
  Search,
  ChevronRight,
  ExternalLink,
  Code,
  Settings,
  Zap,
  Lightbulb,
  Database,
  Info,
  AlertTriangle,
  CheckCircle,
  Activity,
  Cpu,
  Clock,
  Server,
  Download,
  Shield,
  Smartphone,
  Globe,
  FileText,
  Link as LinkIcon,
  GitBranch,
  Package,
  Database as DatabaseIcon,
  Monitor,
  Network,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useState } from "react";

export default function ExplorerPage() {
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({
    features: false,
    publicExplorers: false,
    toolkits: false,
    uexplorer: false,
    mirrors: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Explorers
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The Ergo Explorer is a tool that serves as an interface with the Ergo blockchain. It helps users explore and monitor 
          the activities happening on the Ergo blockchain.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Infrastructure
          </Link>
        </div>
      </div>

      {/* Additional Tools Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
          <Package className="w-6 h-6 mr-3" />
          Tools
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
          {/* Local Setup Card */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group hover:bg-neutral-800/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">Local Setup</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Set up your own local Ergo explorer instance for development and testing purposes.
            </p>
            <Link 
              href="/docs/developers/infrastructure/explorer/local-setup"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Pi Blockchain Explorer Card */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group hover:bg-neutral-800/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Cpu className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">Pi Blockchain Explorer</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Lightweight blockchain explorer optimized for resource-constrained devices like Raspberry Pi.
            </p>
            <Link 
              href="/docs/developers/infrastructure/explorer/pi-explorer"
              className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* GraphQL Card */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group hover:bg-neutral-800/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">GraphQL</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Explore Ergo blockchain data using GraphQL APIs for efficient querying and data retrieval.
            </p>
            <Link 
              href="/docs/developers/infrastructure/explorer/graphql"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4 max-w-6xl">
        {/* Public Explorers Accordion */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <button
            onClick={() => toggleSection('publicExplorers')}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-800/50 transition-colors"
          >
            <div className="flex items-center">
              <Search className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-xl font-bold text-blue-400">Public Explorers</h2>
            </div>
            {openSections.publicExplorers ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {openSections.publicExplorers && (
            <div className="px-6 pb-6">
              <p className="text-gray-300 mb-6">
                There are several public explorers available:
              </p>
              <div className="space-y-4">
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <ExternalLink className="w-5 h-5 text-green-400 mr-2" />
                    <h3 className="text-lg font-semibold text-white">explorer.ergoplatform.com</h3>
                  </div>
                  <a 
                    href="https://explorer.ergoplatform.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    https://explorer.ergoplatform.com/
                  </a>
                </div>

                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <ExternalLink className="w-5 h-5 text-yellow-400 mr-2" />
                    <h3 className="text-lg font-semibold text-white">ergexplorer.com</h3>
                  </div>
                  <a 
                    href="https://ergexplorer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    https://ergexplorer.com/
                  </a>
                </div>

                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <ExternalLink className="w-5 h-5 text-purple-400 mr-2" />
                    <h3 className="text-lg font-semibold text-white">sigmaspace.io</h3>
                  </div>
                  <a 
                    href="https://sigmaspace.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    https://sigmaspace.io/
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Toolkits Accordion */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <button
            onClick={() => toggleSection('toolkits')}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-800/50 transition-colors"
          >
            <div className="flex items-center">
              <Package className="w-6 h-6 text-green-400 mr-3" />
              <h2 className="text-xl font-bold text-green-400">Toolkits</h2>
            </div>
            {openSections.toolkits ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {openSections.toolkits && (
            <div className="px-6 pb-6 space-y-4">
              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <GitBranch className="w-5 h-5 text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-white">Ergo Nix Toolkit</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Provides Nix derivations for packages and services on Ergo.
                </p>
                <a 
                  href="https://github.com/ergoplatform/ergo-nix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  https://github.com/ergoplatform/ergo-nix
                </a>
              </div>

              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="text-lg font-semibold text-white">Ergo Bootstrap</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Built on top of ergo-nix, will help you to quickly deploy an Ergo blockchain cluster with a handful of useful tools 
                  you might need to start developing your dApps.
                </p>
                <a 
                  href="https://github.com/ergoplatform/ergo-bootstrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  https://github.com/ergoplatform/ergo-bootstrap
                </a>
              </div>

              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Code className="w-5 h-5 text-cyan-400 mr-2" />
                  <h3 className="text-lg font-semibold text-white">ergo-setup</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  A Docker based Ergo setup (Node, Explorer & GraphQL). Somewhat similar to Ergo Bootstrap except it offers much less 
                  options and is not NixOS-based.
                </p>
                <a 
                  href="https://github.com/abchrisxyz/ergo-setup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  https://github.com/abchrisxyz/ergo-setup
                </a>
              </div>
            </div>
          )}
        </div>

        {/* uExplorer Accordion */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <button
            onClick={() => toggleSection('uexplorer')}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-800/50 transition-colors"
          >
            <div className="flex items-center">
              <DatabaseIcon className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-xl font-bold text-purple-400">uExplorer</h2>
            </div>
            {openSections.uexplorer ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {openSections.uexplorer && (
            <div className="px-6 pb-6">
              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Monitor className="w-5 h-5 text-green-400 mr-2" />
                  <h3 className="text-lg font-semibold text-white">uExplorer</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  A supplementary, lightweight Ergo explorer with CassandraDB backend.
                </p>
                <a 
                  href="https://github.com/pragmaxim/ergo-uexplorer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  https://github.com/pragmaxim/ergo-uexplorer/
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Mirrors Accordion */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl">
          <button
            onClick={() => toggleSection('mirrors')}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-800/50 transition-colors"
          >
            <div className="flex items-center">
              <Network className="w-6 h-6 text-orange-400 mr-3" />
              <h2 className="text-xl font-bold text-orange-400">Mirrors</h2>
            </div>
            {openSections.mirrors ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {openSections.mirrors && (
            <div className="px-6 pb-6 space-y-4">
              <p className="text-gray-300 text-sm">
                Some popular mirrors for the explorer and graphql:
              </p>
              
              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Server className="w-5 h-5 text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-white">api.ergo.aap.cornell.edu</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Provides an Explorer API and Web UI for the Ergo blockchain. It also hosts a node at this address.
                </p>
                <div className="space-y-1">
                  <a 
                    href="https://api.ergo.aap.cornell.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 underline text-sm"
                  >
                    https://api.ergo.aap.cornell.edu/
                  </a>
                  <a 
                    href="https://api.ergo.aap.cornell.edu/api/v0/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 underline text-sm"
                  >
                    api.ergo.aap.cornell.edu (1.0)
                  </a>
                  <a 
                    href="https://api.ergo.aap.cornell.edu/api/v1/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 underline text-sm"
                  >
                    api.ergo.aap.cornell.edu v1 (1.0)
                  </a>
                  <a 
                    href="https://graphql.ergo.aap.cornell.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 underline text-sm"
                  >
                    graphql.ergo.aap.cornell.edu
                  </a>
                  <a 
                    href="http://128.253.41.49:9053/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 underline text-sm"
                  >
                    Node Address: http://128.253.41.49:9053/
                  </a>
                </div>
              </div>

              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Code className="w-5 h-5 text-green-400 mr-2" />
                  <h3 className="text-lg font-semibold text-white">sigmaexplorer</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Sigmaexplorer hosts a copy of the explorer using a GraphQL backend.
                </p>
                <a 
                  href="https://api.sigmaexplorer.org/swagger/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  https://api.sigmaexplorer.org/swagger/index.html
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 