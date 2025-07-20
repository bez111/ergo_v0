"use client";

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
  Network
} from "lucide-react";
import Link from "next/link";

export default function ExplorerPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight pb-2">
          Explorers
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          The Ergo Explorer is a tool that serves as an interface with the Ergo blockchain. It helps users explore and monitor 
          the activities happening on the Ergo blockchain.
        </p>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-6 mb-12">
        <Link 
          href="/Docs/developers/infrastructure"
          className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 mr-2" />
          Back to Infrastructure
        </Link>
        <Link 
          href="/Docs/developers/infrastructure/node"
          className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
        >
          <Server className="w-5 h-5 mr-2" />
          Node
        </Link>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Public Explorers Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Search className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-400">Public Explorers</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              There are several public explorers available:
            </p>
            
            <div className="grid md:grid-cols-1 gap-4">
              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
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

              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
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

              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
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
        </div>

        {/* Toolkits Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Package className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Toolkits</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <GitBranch className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Ergo Nix Toolkit</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-3">
                Provides Nix derivations for packages and services on Ergo.
              </p>
              <a 
                href="https://github.com/ergoplatform/ergo-nix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                https://github.com/ergoplatform/ergo-nix
              </a>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Ergo Bootstrap</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-3">
                Built on top of ergo-nix, will help you to quickly deploy an Ergo blockchain cluster with a handful of useful tools 
                you might need to start developing your dApps.
              </p>
              <a 
                href="https://github.com/ergoplatform/ergo-bootstrap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                https://github.com/ergoplatform/ergo-bootstrap
              </a>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 text-cyan-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">ergo-setup</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-3">
                A Docker based Ergo setup (Node, Explorer & GraphQL). Somewhat similar to Ergo Bootstrap except it offers much less 
                options and is not NixOS-based.
              </p>
              <a 
                href="https://github.com/abchrisxyz/ergo-setup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                https://github.com/abchrisxyz/ergo-setup
              </a>
            </div>
          </div>
        </div>

        {/* uExplorer Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <DatabaseIcon className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-semibold text-purple-400">uExplorer</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Monitor className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">uExplorer</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-3">
                A supplementary, lightweight Ergo explorer with CassandraDB backend.
              </p>
              <a 
                href="https://github.com/pragmaxim/ergo-uexplorer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                https://github.com/pragmaxim/ergo-uexplorer/
              </a>
            </div>
          </div>
        </div>

        {/* Mirrors Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Network className="w-6 h-6 text-orange-400 mr-3" />
            <h2 className="text-2xl font-semibold text-orange-400">Mirrors</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Some popular mirrors for the explorer and graphql:
            </p>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Server className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">api.ergo.aap.cornell.edu</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-3">
                Provides an Explorer API and Web UI for the Ergo blockchain. It also hosts a node at this address.
              </p>
              <div className="space-y-2">
                <a 
                  href="https://api.ergo.aap.cornell.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 underline"
                >
                  https://api.ergo.aap.cornell.edu/
                </a>
                <a 
                  href="https://api.ergo.aap.cornell.edu/api/v0/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 underline"
                >
                  api.ergo.aap.cornell.edu (1.0)
                </a>
                <a 
                  href="https://api.ergo.aap.cornell.edu/api/v1/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 underline"
                >
                  api.ergo.aap.cornell.edu v1 (1.0)
                </a>
                <a 
                  href="https://graphql.ergo.aap.cornell.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 underline"
                >
                  graphql.ergo.aap.cornell.edu
                </a>
                <a 
                  href="http://128.253.41.49:9053/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 underline"
                >
                  Node Address: http://128.253.41.49:9053/
                </a>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">sigmaexplorer</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-3">
                Sigmaexplorer hosts a copy of the explorer using a GraphQL backend.
              </p>
              <a 
                href="https://api.sigmaexplorer.org/swagger/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                https://api.sigmaexplorer.org/swagger/index.html
              </a>
            </div>
          </div>
        </div>

        {/* Additional Cards Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Local Setup Card */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">Local Setup</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Set up your own local Ergo explorer instance for development and testing purposes.
            </p>
            <Link 
              href="/Docs/developers/infrastructure/explorer/local-setup"
              className="inline-flex items-center px-4 py-2 bg-blue-500 rounded-lg font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105 text-sm"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Learn More
            </Link>
          </div>

          {/* Pi Blockchain Explorer Card */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Cpu className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">Pi Blockchain Explorer</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Lightweight blockchain explorer optimized for resource-constrained devices like Raspberry Pi.
            </p>
            <Link 
              href="/Docs/developers/infrastructure/explorer/pi-explorer"
              className="inline-flex items-center px-4 py-2 bg-green-500 rounded-lg font-semibold text-white hover:bg-green-600 transition-transform hover:scale-105 text-sm"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Learn More
            </Link>
          </div>

          {/* GraphQL Card */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">GraphQL</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Explore Ergo blockchain data using GraphQL APIs for efficient querying and data retrieval.
            </p>
            <Link 
              href="/Docs/developers/infrastructure/explorer/graphql"
              className="inline-flex items-center px-4 py-2 bg-purple-500 rounded-lg font-semibold text-white hover:bg-purple-600 transition-transform hover:scale-105 text-sm"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 