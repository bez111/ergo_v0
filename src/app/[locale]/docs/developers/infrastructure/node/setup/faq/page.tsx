"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  HelpCircle,
  Server,
  Shield,
  Cpu,
  Database,
  Terminal,
  Settings,
  ExternalLink,
  Copy,
  Check,
  AlertTriangle,
  Info,
  BookOpen,
  GitBranch,
  Code
} from "lucide-react";

export default function FAQPage() {
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
          Ergo Node FAQ & Guidelines
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Frequently asked questions and guidelines for running an Ergo node. Find answers about requirements, setup, security, and best practices.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/node/setup"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Setup
          </Link>
          <a
            href="http://ergonodes.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> View Public Nodes
          </a>
        </div>
      </div>

      {/* General Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-400" /> General
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-3">What benefits are there for running a node?</h3>
            <p className="text-gray-300">
              There is no direct financial incentive to run a node. However, doing so contributes to increasing the security of the network.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-3">Can nodes be viewed anywhere?</h3>
            <p className="text-gray-300 mb-3">
              Yes, public nodes can be viewed at <a href="http://ergonodes.net/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergonodes</a>. However, unless your node is hosted on a publicly accessible web-server, your node should be protected by your router.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
              <li>To run a public node, refer to this <a href="https://github.com/glasgowm148/ergoscripts/blob/main/misc/nginx.config" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">nginx.conf</a> example.</li>
              <li>Be cautious when using a <a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/mainnet.conf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">remote node</a> as it can be insecure.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Minimum Requirements Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-green-400" /> Minimum Requirements
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-3">Java</h3>
            <p className="text-gray-300 mb-3">
                             An Ergo node requires a <strong>JDK/JRE version &gt;= 9</strong> installed on your system. We recommend using <a href="https://www.oracle.com/technetwork/java/javase/overview/index.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Oracle Java SE</a> or SDKMAN for Unix-based systems:
            </p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">SDKMAN Installation</span>
                <button
                  onClick={() => copyToClipboard(`curl -s "https://get.sdkman.io" | bash
sdk install java 11.0.13.8.1-amzn`, 'sdkman')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'sdkman' ? <><Check className="w-3 h-3" />Copied!</> : <><Copy className="w-3 h-3" />Copy</>}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">{`curl -s "https://get.sdkman.io" | bash
sdk install java 11.0.13.8.1-amzn`}</pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-3">Hardware</h3>
            <p className="text-gray-300 mb-3">
              The only hardware requirements are ~20GB of storage for the blockchain and ~8GB of RAM for handling the sync. The node utilizes Java, so it should work across all operating systems. You can even run it on a <Link href="/docs/developers/infrastructure/node/setup/pi" className="text-cyan-400 hover:underline">Raspberry Pi</Link>.
            </p>
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-yellow-200 font-semibold mb-1">Note</p>
                  <p className="text-sm text-gray-300">
                    Due to the intensive disk I/O, we recommend having 4-6GB of RAM with a fast SSD, running with the <code className="bg-neutral-800 px-1 rounded">-Xmx4G</code> flag on JVM9/11.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Running the Node Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Server className="w-6 h-6 text-purple-400" /> Running the Node
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-3">API Commands</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-cyan-400 mb-2">/node/shutdown</h4>
                <p className="text-gray-300 text-sm mb-3">Use the following command to safely shut down your node:</p>
                <div className="bg-neutral-800 rounded-lg p-4 mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Safe Shutdown</span>
                    <button
                      onClick={() => copyToClipboard(`curl -X POST "http://127.0.0.1:9053/node/shutdown" -H "api_key: hello"`, 'shutdown')}
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {copied === 'shutdown' ? <><Check className="w-3 h-3" />Copied!</> : <><Copy className="w-3 h-3" />Copy</>}
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">{`curl -X POST "http://127.0.0.1:9053/node/shutdown" -H "api_key: hello"`}</pre>
                </div>
                
                <p className="text-gray-300 text-sm mb-3">If a safe shutdown is not possible, you can terminate the ports:</p>
                <div className="bg-neutral-800 rounded-lg p-4 mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Force Kill Ports</span>
                    <button
                      onClick={() => copyToClipboard(`kill -9 $(lsof -t -i:9053)
kill -9 $(lsof -t -i:9030)`, 'kill-ports')}
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {copied === 'kill-ports' ? <><Check className="w-3 h-3" />Copied!</> : <><Copy className="w-3 h-3" />Copy</>}
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">{`kill -9 $(lsof -t -i:9053)
kill -9 $(lsof -t -i:9030)`}</pre>
                </div>
                
                <p className="text-gray-400 text-xs">
                  Please refer to the section on <Link href="/docs/developers/infrastructure/node/setup/swagger" className="text-cyan-400 hover:underline">swagger</Link> for more information.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-3">Security</h3>
            <p className="text-gray-300 mb-3">
              Your node should be protected by your router unless it's running on a publicly accessible web-server. If you wish to host a public node, consider the following:
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
              <li>The <code className="bg-neutral-800 px-1 rounded">ergo.conf</code> file must never be made public.</li>
              <li>Sensitive API methods require a security token that should not be transmitted over untrusted channels.</li>
              <li>Restrict access to the Ergo REST API to known hosts only. Specifically, the API should not be accessible from the Internet.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-3">Compiling from Source</h3>
            <p className="text-gray-300">
              Instead of downloading the precompiled Ergo jar, you can clone the repository and compile the jar from source using the <a href="https://www.scala-sbt.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">sbt assembly</a> command.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-3">Running as a Service</h3>
            <p className="text-gray-300 mb-3">Create a service file:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Service File</span>
                <button
                  onClick={() => copyToClipboard(`vi /etc/systemd/system/node.service`, 'service-file')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'service-file' ? <><Check className="w-3 h-3" />Copied!</> : <><Copy className="w-3 h-3" />Copy</>}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">{`vi /etc/systemd/system/node.service`}</pre>
            </div>
            
            <p className="text-gray-300 text-sm mb-3">And enter the following content:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Service Configuration</span>
                <button
                  onClick={() => copyToClipboard(`[Unit]
Description=ErgoNode Service
[Service]
User=user
WorkingDirectory=/mnt/HC_Volume_19304500/ergo
ExecStart=/mnt/HC_Volume_19304500/run_node.sh
SuccessExitStatus=143
TimeoutStopSec=10
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target`, 'service-config')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'service-config' ? <><Check className="w-3 h-3" />Copied!</> : <><Copy className="w-3 h-3" />Copy</>}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">{`[Unit]
Description=ErgoNode Service
[Service]
User=user
WorkingDirectory=/mnt/HC_Volume_19304500/ergo
ExecStart=/mnt/HC_Volume_19304500/run_node.sh
SuccessExitStatus=143
TimeoutStopSec=10
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target`}</pre>
            </div>
            
            <p className="text-gray-300 text-sm mb-3">Next, create the <code className="bg-neutral-800 px-1 rounded">sh</code> file:</p>
            <div className="bg-neutral-800 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Run Script</span>
                <button
                  onClick={() => copyToClipboard(`echo "#!/bin/sh
sudo /usr/bin/java -jar -Xmx4G ergo.jar --mainnet -c ergo.conf" > run_node.sh
chmod +x run_node.sh`, 'run-script')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'run-script' ? <><Check className="w-3 h-3" />Copied!</> : <><Copy className="w-3 h-3" />Copy</>}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">{`echo "#!/bin/sh
sudo /usr/bin/java -jar -Xmx4G ergo.jar --mainnet -c ergo.conf" > run_node.sh
chmod +x run_node.sh`}</pre>
            </div>
            
            <p className="text-gray-300 text-sm mb-3">Finally, enable and start the service:</p>
            <div className="bg-neutral-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Enable Service</span>
                <button
                  onClick={() => copyToClipboard(`sudo systemctl daemon-reload
sudo systemctl enable node.service
sudo systemctl start node
sudo systemctl status node`, 'enable-service')}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied === 'enable-service' ? <><Check className="w-3 h-3" />Copied!</> : <><Copy className="w-3 h-3" />Copy</>}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">{`sudo systemctl daemon-reload
sudo systemctl enable node.service
sudo systemctl start node
sudo systemctl status node`}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 