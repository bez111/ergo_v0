"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  Box,
  Server,
  Settings,
  Info,
  Terminal,
  ExternalLink,
  Cpu,
  Database,
  Zap,
  Shield,
  GitBranch,
  Brain,
  Copy,
  Check,
  CheckCircle
} from "lucide-react";

export default function DockerSetupPage() {
  const [tab, setTab] = useState(0);
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

  const tabs = [
    {
      label: "Single Node (Docker CLI)",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Run a single Ergo node container using the Docker CLI. Suitable for quick experiments and simple deployments.
          </p>
          <div className="bg-neutral-800 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Command</span>
              <button
                onClick={() => copyToClipboard(
                  'sudo docker run --rm -p 9030:9030 -p 127.0.0.1:9053:9053 -v /path/on/host/to/ergo/data:/home/ergo/.ergo ergoplatform/ergo:latest',
                  'cli-command'
                )}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
              >
                {copied === 'cli-command' ? (
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
{`sudo docker run --rm -p 9030:9030 -p 127.0.0.1:9053:9053 \\
  -v /path/on/host/to/ergo/data:/home/ergo/.ergo \\
  ergoplatform/ergo:latest`}
            </pre>
          </div>
          <p className="text-sm text-gray-400">
            Data will be stored in <code className="bg-neutral-700 px-1 rounded">/path/on/host/to/ergo/data</code> on your host.
          </p>
        </div>
      )
    },
    {
      label: "Docker Compose",
      icon: <Settings className="w-5 h-5 text-blue-400" />,
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Use Docker Compose for easier management of multiple containers and configuration.
          </p>
          <div className="bg-neutral-800 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">docker-compose.yml</span>
              <button
                onClick={() => copyToClipboard(
                  `version: "3.8"

services:
  # Ergo blockchain node
  node:
    image: ergoplatform/ergo
    container_name: mn-ergo-node
    command: --mainnet -c /etc/ergo.conf
    volumes:
      - ./.ergo:/home/ergo/.ergo
      - ./ergo.conf:/etc/ergo.conf:ro
    ports:
      - 9053:9053
      - 9030:9030
    restart: unless-stopped
    # Increase or decrease the max heap value as required
    environment:
        - MAX_HEAP=4G
    logging:
      options:
        max-size: "10m"
        max-file: "3"`,
                  'compose-config'
                )}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
              >
                {copied === 'compose-config' ? (
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
{`version: "3.8"

services:
  # Ergo blockchain node
  node:
    image: ergoplatform/ergo
    container_name: mn-ergo-node
    command: --mainnet -c /etc/ergo.conf
    volumes:
      - ./.ergo:/home/ergo/.ergo
      - ./ergo.conf:/etc/ergo.conf:ro
    ports:
      - 9053:9053
      - 9030:9030
    restart: unless-stopped
    # Increase or decrease the max heap value as required
    environment:
        - MAX_HEAP=4G
    logging:
      options:
        max-size: "10m"
        max-file: "3"`}
            </pre>
          </div>
          <div className="bg-neutral-800 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Start Command</span>
              <button
                onClick={() => copyToClipboard('docker-compose up -d', 'compose-start')}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
              >
                {copied === 'compose-start' ? (
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
{`docker-compose up -d`}
            </pre>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Running an Ergo Node with Docker
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Deploy and manage your Ergo Node easily using Docker or Docker Compose. This method is ideal for quick setup, reproducibility, and running nodes in isolated environments.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/node/setup"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Setup
          </Link>
          <a
            href="https://hub.docker.com/r/ergoplatform/ergo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Ergo Docker Image
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Box className="w-6 h-6 text-orange-400" /> Why Docker?
        </h2>
        <p className="text-gray-300">
          Docker allows you to run the Ergo node in a containerized environment, making deployment, updates, and management much easier. You can use the official Docker image or Docker Compose for more advanced orchestration.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="mb-12">
        <div className="flex border-b border-neutral-700 mb-0">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setTab(i)}
              className={`flex items-center gap-2 px-6 py-3 font-semibold transition border-b-2 -mb-px
                ${tab === i ? "border-orange-400 text-orange-400" : "border-transparent text-gray-400 hover:text-orange-300"}`}
              style={{ outline: "none" }}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-b-xl rounded-tr-xl p-6 min-h-[320px]">
          {tabs[tab].content}
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> How Docker Node Setup Works
        </h2>
        <p className="text-gray-300 mb-4">
          The official Docker image for Ergo Node provides a pre-configured environment for running the node. You can use the CLI or Compose, mount your own config, and control resources via environment variables.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">For Beginners</h4>
            <p className="text-gray-300 text-sm">Use the single-line Docker CLI command for a quick start on mainnet.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">For Advanced Users</h4>
            <p className="text-gray-300 text-sm">Use Docker Compose or custom images/tags for advanced orchestration, custom configs, and resource control.</p>
          </div>
        </div>
      </div>

      {/* Tips and Tricks Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-purple-400" /> Tips and Troubleshooting
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Data Permissions</h4>
              <p className="text-gray-300 text-sm">Ensure your data directory is owned by UID/GID 9052 or has 777 permissions for the container to write data.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Resource Limits</h4>
              <p className="text-gray-300 text-sm">Use the <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">MAX_HEAP</code> environment variable to control node memory usage.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Logs & Monitoring</h4>
              <p className="text-gray-300 text-sm">Follow logs with <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">docker logs -f mn-ergo-node -n 200</code> or use Compose logging options.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Custom Config</h4>
              <p className="text-gray-300 text-sm">Mount your own <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">ergo.conf</code> for advanced configuration. See <a href="https://github.com/ergoplatform/ergo/tree/master/src/main/resources" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">example configs</a>.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <a href="https://hub.docker.com/r/ergoplatform/ergo" target="_blank" rel="noopener noreferrer"
          className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
          <h4 className="font-bold text-orange-400 mb-2">Ergo Docker Image</h4>
          <p className="text-gray-300 text-sm">Official Docker image for running Ergo Node. See tags for available versions.</p>
        </a>
        <a href="https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node" target="_blank" rel="noopener noreferrer"
          className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
          <h4 className="font-bold text-orange-400 mb-2">Manual Setup Guide</h4>
          <p className="text-gray-300 text-sm">Official step-by-step guide for setting up a full node manually.</p>
        </a>
        <a href="https://github.com/ergoplatform/ergo/tree/master/src/main/resources" target="_blank" rel="noopener noreferrer"
          className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
          <h4 className="font-bold text-orange-400 mb-2">Example Configs</h4>
          <p className="text-gray-300 text-sm">Sample <code>ergo.conf</code> files and other resources for advanced configuration.</p>
        </a>
      </div>
    </>
  );
} 