"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Package, 
  AlertTriangle, 
  GitBranch, 
  Download, 
  CheckCircle,
  Copy,
  Check,
  Info,
  Terminal,
  Settings,
  Cpu,
  Database,
  Zap,
  Shield,
  Brain,
  ChevronRight,
  ExternalLink
} from "lucide-react";

export default function DependenciesPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Handling SNAPSHOT Dependencies
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Learn how to handle SNAPSHOT dependencies when building the Ergo node from source, especially for development branches and Release Candidates.
        </p>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/node/setup"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Setup
          </Link>
          <a
            href="https://github.com/ergoplatform/ergo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Ergo Repository
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-900/20 border border-orange-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Info className="w-5 h-5 text-orange-400" />
          What are SNAPSHOT Dependencies?
        </h2>
        <p className="text-gray-300">
          SNAPSHOT versions represent unstable, work-in-progress builds of libraries that are not yet officially released. 
          When building Ergo node from source, you may encounter these dependencies that need to be built locally.
        </p>
      </div>

      {/* Main Grid */}
      <div className="space-y-6 mb-8">
        {/* Problem Card */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            The Problem
          </h3>
          <div className="space-y-3 text-gray-300">
            <p>• SNAPSHOT versions are not published to public repositories</p>
            <p>• Standard build process fails with unresolved dependencies</p>
            <p>• Error messages indicate artifacts not found</p>
            <div className="bg-neutral-800 rounded-lg p-4 mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Example Error</span>
                <button
                  onClick={() => copyToClipboard(
                    'sbt.ResolveException: unresolved dependency: org.ergoplatform#sigmastate-interpreter_2.12;6.0.0-RC2-SNAPSHOT: not found',
                    'error-example'
                  )}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'error-example' ? (
                    <>
                      <Check className="w-3 h-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`sbt.ResolveException: unresolved dependency: 
org.ergoplatform#sigmastate-interpreter_2.12;
6.0.0-RC2-SNAPSHOT: not found`}
              </pre>
            </div>
          </div>
        </div>

        {/* Solution Card */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" />
            The Solution
          </h3>
          <div className="space-y-3 text-gray-300">
            <p>• Build SNAPSHOT dependencies locally</p>
            <p>• Use <code className="bg-neutral-700 px-1 rounded">sbt publishLocal</code></p>
            <p>• Publish to local Ivy repository</p>
            <div className="bg-neutral-800 rounded-lg p-4 mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Local Repository</span>
                <button
                  onClick={() => copyToClipboard('~/.ivy2/local', 'local-repo')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'local-repo' ? (
                    <>
                      <Check className="w-3 h-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`~/.ivy2/local  # Linux/macOS
%USERPROFILE%\.ivy2\local  # Windows`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" />
          How to Handle SNAPSHOT Dependencies
        </h2>
        <p className="text-gray-300 mb-6">
          Follow these steps to build and publish SNAPSHOT dependencies locally before building the Ergo node.
        </p>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-4 border-orange-400 pl-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">1. Identify Required SNAPSHOT</h3>
            <p className="text-gray-300 mb-3">Check the <code className="bg-neutral-700 px-1 rounded">build.sbt</code> file for SNAPSHOT versions:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">build.sbt</span>
                <button
                  onClick={() => copyToClipboard('val sigmastateVersion = "6.0.0-RC2-SNAPSHOT"', 'build-sbt')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'build-sbt' ? (
                    <>
                      <Check className="w-3 h-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`val sigmastateVersion = "6.0.0-RC2-SNAPSHOT"`}
              </pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-cyan-400 pl-6">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">2. Clone Dependency Repository</h3>
            <p className="text-gray-300 mb-3">Clone the required library repository:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Clone Command</span>
                <button
                  onClick={() => copyToClipboard('git clone https://github.com/ergoplatform/sigmastate-interpreter.git', 'clone-cmd')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'clone-cmd' ? (
                    <>
                      <Check className="w-3 h-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`git clone https://github.com/ergoplatform/sigmastate-interpreter.git`}
              </pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-green-400 pl-6">
            <h3 className="text-xl font-semibold text-green-400 mb-3">3. Checkout Correct Commit</h3>
            <p className="text-gray-300 mb-3">Navigate and checkout the specific commit:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Checkout Commands</span>
                <button
                  onClick={() => copyToClipboard(`cd sigmastate-interpreter
git checkout <commit_hash_specified_in_release_notes>`, 'checkout-cmd')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'checkout-cmd' ? (
                    <>
                      <Check className="w-3 h-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`cd sigmastate-interpreter
git checkout <commit_hash_specified_in_release_notes>`}
              </pre>
            </div>
          </div>

          {/* Step 4 */}
          <div className="border-l-4 border-purple-400 pl-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">4. Publish Locally</h3>
            <p className="text-gray-300 mb-3">Build and publish the SNAPSHOT locally:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Publish Command</span>
                <button
                  onClick={() => copyToClipboard('sbt publishLocal', 'publish-cmd')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'publish-cmd' ? (
                    <>
                      <Check className="w-3 h-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`sbt publishLocal`}
              </pre>
            </div>
          </div>

          {/* Step 5 */}
          <div className="border-l-4 border-orange-400 pl-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">5. Build Ergo Node</h3>
            <p className="text-gray-300 mb-3">Return to Ergo directory and build:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Build Commands</span>
                <button
                  onClick={() => copyToClipboard(`cd ../ergo
sbt assembly`, 'build-cmd')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'build-cmd' ? (
                    <>
                      <Check className="w-3 h-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`cd ../ergo
sbt assembly`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-blue-400" />
          Tips and Best Practices
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-blue-400">Multiple Dependencies</p>
                <p className="text-gray-300 text-sm">If multiple SNAPSHOT libraries are required, repeat steps 2-4 for each dependency before building Ergo.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-yellow-400">Commit Hashes</p>
                <p className="text-gray-300 text-sm">Always use the exact commit hash specified in release notes for compatibility.</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-400">Local Repository</p>
                <p className="text-gray-300 text-sm">Published SNAPSHOTs are stored in your local Ivy repository for future builds.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Settings className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-cyan-400">Build Order</p>
                <p className="text-gray-300 text-sm">Build dependencies in the correct order if they depend on each other.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Download className="w-6 h-6 text-green-400" />
          Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://github.com/ergoplatform/ergo"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-600 hover:border-neutral-500 transition-colors"
          >
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              Ergo Repository
            </h3>
            <p className="text-gray-400 text-sm">Main Ergo node source code and build configuration</p>
          </a>
          <a
            href="https://github.com/ergoplatform/sigmastate-interpreter"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-600 hover:border-neutral-500 transition-colors"
          >
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <Package className="w-4 h-4" />
              SigmaState Interpreter
            </h3>
            <p className="text-gray-400 text-sm">Core cryptographic library often requiring SNAPSHOT builds</p>
          </a>
        </div>
      </div>
    </>
  );
} 