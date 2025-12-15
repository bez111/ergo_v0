"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages */

import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
import {
  ChevronRight,
  Info,
  Terminal,
  AlertTriangle,
  Bug,
  Cpu,
  Database,
  ExternalLink,
  Clipboard,
  Check,
  Copy,
  BookOpen,
  HelpCircle,
  LogOut,
  FileWarning,
  Search,
  Cloud,
  Settings
} from "lucide-react";

export default function TroubleshootingPage() {
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

  const logCommands = [
    {
      label: "ERROR & WARN to file",
      command: `tail -Fn+0 ergo.log | grep 'ERROR\\|WARN' > output.log`,
      id: "err-warn-file"
    },
    {
      label: "ERROR & WARN",
      command: `tail -Fn+0 ergo.log | grep 'ERROR\\|WARN'`,
      id: "err-warn"
    },
    {
      label: "ERROR only",
      command: `tail -Fn+0 ergo.log | grep 'ERROR'`,
      id: "error"
    },
    {
      label: 'not modified',
      command: `tail -Fn+0 ergo.log | grep "not modified"`,
      id: "not-modified"
    },
    {
      label: 'ERR',
      command: `tail -Fn+0 ergo.log | grep ERR`,
      id: "err"
    },
    {
      label: 'xception',
      command: `tail -Fn+0 ergo.log | grep xception`,
      id: "xception"
    },
    {
      label: 'stuck',
      command: `tail -Fn+0 ergo.log | grep "stuck"`,
      id: "stuck"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Node Troubleshooting Guide
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Troubleshoot common issues with the Ergo reference client. If your problem isn't covered, <a href="https://github.com/ergoplatform/ergo/issues/new/choose" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">create a new issue on GitHub</a> and provide details (node version, Java command, system specs, logs, etc).
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/node/setup"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Setup
          </Link>
          <a
            href="https://discord.gg/jjRP2uNAv5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <HelpCircle className="w-5 h-5 mr-2" /> #node Discord
          </a>
        </div>
      </div>

      {/* Log Commands Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-4 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-orange-400" /> Searching the Logs
        </h2>
        <p className="text-gray-300 mb-3 text-sm">Use these commands to search your logs for errors and warnings:</p>
        <div className="flex flex-col gap-2">
          {logCommands.map(cmd => (
            <div
              key={cmd.id}
              className="bg-[#23190f] rounded-md p-2 flex flex-col justify-between min-h-[48px] shadow-sm border border-[#3a2a16]/40 w-full"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-300 font-semibold tracking-wide leading-tight">{cmd.label}</span>
                <button
                  onClick={() => copyToClipboard(cmd.command, cmd.id)}
                  className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-white transition-colors px-1 py-0.5 rounded"
                  aria-label="Copy command"
                  style={{ minHeight: 0 }}
                >
                  {copied === cmd.id ? <><Check className="w-3 h-3" />Copied!</> : <><Copy className="w-3 h-3" />Copy</>}
                </button>
              </div>
              <pre className="text-[13px] text-gray-100 font-mono bg-transparent overflow-x-auto break-all whitespace-pre-wrap select-all mt-0">
                {cmd.command}
              </pre>
            </div>
          ))}
        </div>
      </div>

      {/* Synchronization Issues Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-yellow-400" /> Synchronization Issues
        </h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-orange-400 mb-2">Stuck on 'Active Synchronization'</h4>
            <ol className="list-decimal list-inside text-gray-300 text-sm space-y-1">
              <li>Use the log commands above to check for errors.</li>
              <li>Shut down your node, back up your data, and restart.</li>
              <li>Ask for help in <a href="https://discord.gg/jjRP2uNAv5" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">#node Discord</a> or <a href="https://github.com/ergoplatform/ergo/issues/new/choose" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">open a GitHub issue</a>.</li>
            </ol>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-2">Node Appears 'Synchronized' But Isn't</h4>
            <p className="text-gray-300 text-sm mb-2">If your node's height doesn't match the <a href="https://explorer.ergoplatform.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">explorer</a>, add this to your <code className="bg-neutral-800 px-1 rounded">ergo.conf</code>:</p>
            <pre className="text-sm text-gray-300 bg-neutral-800 rounded p-2 overflow-x-auto mb-2">{`# headerChainDiff = 80`}</pre>
            <p className="text-gray-400 text-xs">See also <a href="https://github.com/ergoplatform/ergo/issues/1657" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">header download issue</a>.</p>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-2">Lowering maxConnections</h4>
            <p className="text-gray-300 text-sm mb-2">To improve performance, lower <code className="bg-neutral-800 px-1 rounded">maxConnections</code> in <code className="bg-neutral-800 px-1 rounded">ergo.conf</code>:</p>
            <pre className="text-sm text-gray-300 bg-neutral-800 rounded p-2 overflow-x-auto mb-2">{`network {
  maxConnections = 10
}`}</pre>
            <p className="text-gray-400 text-xs">This slows sync but may help stability.</p>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-2">Resyncing From Scratch</h4>
            <p className="text-gray-300 text-sm mb-2">Remove these directories and restart the node:</p>
            <pre className="text-sm text-gray-300 bg-neutral-800 rounded p-2 overflow-x-auto mb-2">{`rm -rf .ergo/state
rm -rf .ergo/history`}</pre>
            <p className="text-gray-400 text-xs">Warning: This will delete your local blockchain data.</p>
          </div>
        </div>
      </div>

      {/* API Performance Issues Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-cyan-400" /> API Performance Issues
        </h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-orange-400 mb-2">Timeouts or Unresponsiveness</h4>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Increase JVM memory with <code className="bg-neutral-800 px-1 rounded">-Xmx6G</code> or <code>-Xmx8G</code> in your Java command.</li>
              <li>Check system load (CPU, RAM, disk I/O).</li>
              <li>Digest mode may limit some API queries.</li>
              <li>Check network latency.</li>
              <li>See <a href="https://github.com/ergoplatform/ergo/issues" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub issues</a> for endpoint bugs.</li>
            </ul>
            <pre className="text-sm text-gray-300 bg-neutral-800 rounded p-2 overflow-x-auto mb-2">{`java -jar -Xmx6G ergo-*.jar --mainnet -c ergo.conf`}</pre>
          </div>
        </div>
      </div>

      {/* Wallet Issues Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-green-400" /> Wallet Issues
        </h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-orange-400 mb-2">Correct Address/Balance Not Displayed</h4>
            <ol className="list-decimal list-inside text-gray-300 text-sm space-y-1">
              <li>Ensure the wallet is synchronized.</li>
              <li>Derive new addresses as per <a href="/docs/developers/infrastructure/node/setup/swagger" className="text-cyan-400 hover:underline">swagger</a> instructions.</li>
              <li>Derive additional addresses during sync.</li>
              <li>If issues persist, restore the wallet on a different client.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Common Error Messages Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileWarning className="w-6 h-6 text-red-400" /> Common Error Messages
        </h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-orange-400 mb-2">'Unable to Define External Address'</h4>
            <pre className="text-sm text-gray-300 bg-neutral-800 rounded p-2 overflow-x-auto mb-2">{`WARN [tor.default-dispatcher-11] s.c.n.NetworkController - Unable to define external address. Specify it manually in scorex.network.declaredAddress`}</pre>
            <p className="text-gray-400 text-xs">This is normal for non-public nodes. Ignore if not running a public node.</p>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-2">'Got GetReaders Request in State None'</h4>
            <pre className="text-sm text-gray-300 bg-neutral-800 rounded p-2 overflow-x-auto mb-2">{`WARN  [ergoref-api-dispatcher-9] o.e.n.ErgoReadersHolder Got GetReaders request in state (None,None,None,None)`}</pre>
            <p className="text-gray-400 text-xs">Normal at startup. If persistent, resync by removing <code>.ergo/state</code> and <code>.ergo/history</code>.</p>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-2">'Invalid Z Bytes'</h4>
            <pre className="text-sm text-gray-300 bg-neutral-800 rounded p-2 overflow-x-auto mb-2">{`cat ergo.log | grep -A 30 -B 30 "Invalid z bytes"`}</pre>
            <p className="text-gray-400 text-xs">Shows log context for this error.</p>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-2">'Dead Letters'</h4>
            <pre className="text-sm text-gray-300 bg-neutral-800 rounded p-2 overflow-x-auto mb-2">{`tail -Fn+0 ergo.log | grep "akka.log-dead-letters"`}</pre>
            <p className="text-gray-400 text-xs">Akka dead letters are usually harmless.</p>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-2">'Failed to Connect to localhost Port 9053: Connection Refused'</h4>
            <pre className="text-sm text-gray-300 bg-neutral-800 rounded p-2 overflow-x-auto mb-2">{`netstat -ln | grep 9053
sudo netstat -tulpn`}</pre>
            <p className="text-gray-400 text-xs">Check if the node is running and port is open.</p>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-2">'Tree Root Should Be Real'</h4>
            <p className="text-gray-300 text-sm">This means you're trying to sign a box you don't own (missing private key).</p>
          </div>
        </div>
      </div>

      {/* Public Nodes & Explorers Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Cloud className="w-6 h-6 text-blue-400" /> Public Nodes & Explorers
        </h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-orange-400 mb-2">Known Public Resources</h4>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li><a href="https://ergonodes.net/list" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergonodes.net</a> — public node list</li>
              <li><a href="https://explorer.ergoplatform.com/en/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">explorer.ergoplatform.com</a> — official explorer</li>
              <li><a href="https://ergexplorer.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergexplorer.com</a></li>
              <li><a href="https://sigmaspace.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">sigmaspace.io</a></li>
              <li><a href="https://ergobackup.aap.cornell.edu/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergobackup.aap.cornell.edu</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-2">Troubleshooting Public Infrastructure</h4>
            <ol className="list-decimal list-inside text-gray-300 text-sm space-y-1">
              <li>Switch to a different public node/explorer.</li>
              <li>Check status on <a href="https://ergonodes.net/list" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergonodes.net</a> or explorer site.</li>
              <li>Look for reports in community channels (Discord, Telegram).</li>
              <li>If possible, contact the operator or report in general channels with details (URL, error, time, etc).</li>
              <li>Check GitHub issues for known problems.</li>
              <li>Remember: public services may have downtime or limits. For critical use, run your own node.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
} 