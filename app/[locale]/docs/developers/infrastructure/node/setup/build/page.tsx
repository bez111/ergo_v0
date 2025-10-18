"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ChevronRight,
  ExternalLink,
  GitBranch,
  Download,
  CheckCircle,
  AlertTriangle,
  Info,
  Terminal,
  Settings,
  Cpu,
  Database,
  Zap,
  Shield,
  Brain,
  Copy,
  Check,
  Package,
  Code
} from "lucide-react";

export default function BuildFromSourcePage() {
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
          Building the Ergo Node from Source
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Build the Ergo node from source code for development, specific versions, or custom modifications. 
          While pre-compiled JARs are recommended for most users, building from source gives you full control.
        </p>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/node/setup"
            className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
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
          When to Build from Source
        </h2>
        <p className="text-gray-300">
          While downloading pre-compiled JARs is recommended for most users, you might need to build from source if you need a specific version, want to contribute to development, or prefer compiling software yourself.
        </p>
      </div>

      {/* Prerequisites Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-blue-400" />
            Git
          </h3>
          <p className="text-gray-300 mb-4">
            Required for cloning the Ergo repository and managing source code versions.
          </p>
          <a
            href="https://git-scm.com/downloads"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Install Git
          </a>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-green-400" />
            Java Development Kit (JDK)
          </h3>
          <p className="text-gray-300 mb-4">
            JDK 9 or higher is required. OpenJDK is recommended for compatibility.
          </p>
          <a
            href="https://github.com/ergoplatform/ergo#requirements"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Check Requirements
          </a>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Package className="w-6 h-6 text-purple-400" />
            SBT (Scala Build Tool)
          </h3>
          <p className="text-gray-300 mb-4">
            Required for compiling Scala code and managing dependencies.
          </p>
          <a
            href="https://www.scala-sbt.org/download.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Install SBT
          </a>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-400" />
            SNAPSHOT Dependencies
          </h3>
          <p className="text-gray-300 mb-4">
            Some versions may require building SNAPSHOT dependencies locally.
          </p>
          <Link
            href="/docs/developers/infrastructure/node/setup/dependencies"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Learn More
          </Link>
        </div>
      </div>

      {/* Build Steps Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-cyan-400" />
          Build Steps
        </h2>
        <p className="text-gray-300 mb-6">
          Follow these steps to build the Ergo node from source code.
        </p>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-4 border-orange-400 pl-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">1. Clone Repository</h3>
            <p className="text-gray-300 mb-3">Clone the Ergo repository to your local machine:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Clone Command</span>
                <button
                  onClick={() => copyToClipboard('git clone https://github.com/ergoplatform/ergo.git', 'clone-cmd')}
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
{`git clone https://github.com/ergoplatform/ergo.git`}
              </pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-cyan-400 pl-6">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">2. Navigate to Directory</h3>
            <p className="text-gray-300 mb-3">Change into the cloned repository directory:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Navigation Command</span>
                <button
                  onClick={() => copyToClipboard('cd ergo', 'cd-cmd')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'cd-cmd' ? (
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
{`cd ergo`}
              </pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-green-400 pl-6">
            <h3 className="text-xl font-semibold text-green-400 mb-3">3. Checkout Specific Version (Optional)</h3>
            <p className="text-gray-300 mb-3">Choose the version you want to build:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Checkout Commands</span>
                <button
                  onClick={() => copyToClipboard(`# Example for a specific release
git checkout v5.0.10 

# Example for a Release Candidate
git checkout v6.0.0-RC2`, 'checkout-cmd')}
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
{`# Example for a specific release
git checkout v5.0.10 

# Example for a Release Candidate
git checkout v6.0.0-RC2`}
              </pre>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mt-3">
              <p className="font-semibold text-yellow-400 mb-2">Important:</p>
              <p className="text-gray-300 text-sm">
                Some development versions, especially Release Candidates, may depend on unreleased SNAPSHOT versions of libraries. 
                If the build fails due to missing SNAPSHOT dependencies, you must build and publish these dependencies locally first.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="border-l-4 border-purple-400 pl-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">4. Handle SNAPSHOT Dependencies (If Needed)</h3>
            <p className="text-gray-300 mb-3">If you encounter SNAPSHOT dependency errors:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Dependencies Guide</span>
                <Link
                  href="/docs/developers/infrastructure/node/setup/dependencies"
                  className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Open Guide
                </Link>
              </div>
              <p className="text-sm text-gray-300">
                See the dedicated guide for handling SNAPSHOT dependencies when building from source.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="border-l-4 border-orange-400 pl-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">5. Compile the JAR</h3>
            <p className="text-gray-300 mb-3">Build the node using SBT assembly:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Build Command</span>
                <button
                  onClick={() => copyToClipboard('sbt assembly', 'build-cmd')}
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
{`sbt assembly`}
              </pre>
            </div>
            <p className="text-gray-300 text-sm">
              The resulting JAR file will be located in the <code className="bg-neutral-700 px-1 rounded">target/scala-*/</code> directory.
            </p>
          </div>

          {/* Step 6 */}
          <div className="border-l-4 border-green-400 pl-6">
            <h3 className="text-xl font-semibold text-green-400 mb-3">6. Locate the JAR</h3>
            <p className="text-gray-300 mb-3">Find the generated JAR file:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">JAR Location</span>
                <button
                  onClick={() => copyToClipboard('target/scala-2.13/ergo-*.jar', 'jar-location')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'jar-location' ? (
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
{`target/scala-2.13/ergo-*.jar`}
              </pre>
            </div>
            <p className="text-gray-300 text-sm">
              Move this JAR file to your desired node installation folder.
            </p>
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
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-400">Use Tags</p>
                <p className="text-gray-300 text-sm">Checkout specific release tags for stable versions rather than using master branch.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-yellow-400">SNAPSHOT Dependencies</p>
                <p className="text-gray-300 text-sm">Be prepared to handle SNAPSHOT dependencies for development versions.</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Settings className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-cyan-400">Build Time</p>
                <p className="text-gray-300 text-sm">First build may take 10-30 minutes depending on your system and network.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-purple-400">Verify JAR</p>
                <p className="text-gray-300 text-sm">Ensure the generated JAR file is complete and not corrupted.</p>
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
            href="https://github.com/ergoplatform/ergo/releases/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-600 hover:border-neutral-500 transition-colors"
          >
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Pre-compiled Releases
            </h3>
            <p className="text-gray-400 text-sm">Download pre-compiled JAR files for stable releases</p>
          </a>
          <Link
            href="/docs/developers/infrastructure/node/setup/docker"
            className="block p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-600 hover:border-neutral-500 transition-colors"
          >
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <Package className="w-4 h-4" />
              Docker Build
            </h3>
            <p className="text-gray-400 text-sm">Alternative: Build and run using Docker containers</p>
          </Link>
          <Link
            href="/docs/developers/infrastructure/node/setup/manual"
            className="block p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-600 hover:border-neutral-500 transition-colors"
          >
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Manual Setup
            </h3>
            <p className="text-gray-400 text-sm">Set up your node after building the JAR file</p>
          </Link>
          <a
            href="https://github.com/ergoplatform/ergo"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-600 hover:border-neutral-500 transition-colors"
          >
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              Source Code
            </h3>
            <p className="text-gray-400 text-sm">Main Ergo repository with latest source code</p>
          </a>
        </div>
      </div>
    </>
  );
} 