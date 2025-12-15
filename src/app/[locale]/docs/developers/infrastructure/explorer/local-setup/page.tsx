"use client";

import {
  ChevronRight,
  ExternalLink,
  Code,
  Settings,
  Database,
  Server,
  GitBranch,
  Package,
  Globe,
  Info,
  Activity,
  Cpu,
  Network,
  Zap,
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function LocalSetupPage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Local Setup
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Set up your own local Ergo explorer instance for development and testing purposes.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/explorer"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Explorer
          </Link>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <Info className="w-6 h-6 mr-3" />
          Introduction
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-6">
            The Ergo Blockchain Explorer is your interface with the blockchain and provides four services:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Database className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Chain Grabber</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Dumps aggregated data blockchain → database
              </p>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Server className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Explorer API</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Provides HTTP API methods for querying on/off-chain data
              </p>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">UTX Tracker</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Dumps unconfirmed transactions from mempool to local database
              </p>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Network className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">UTX Broadcaster</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Broadcasts unconfirmed transactions to known peers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
          <GitBranch className="w-6 h-6 mr-3" />
          Sources
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">Explorer Backend</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Backend services and API implementation for the Ergo Explorer.
            </p>
            <a
              href="https://github.com/ergoplatform/explorer-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              View Repository <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">Explorer Frontend</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Web interface and user experience components for the Ergo Explorer.
            </p>
            <a
              href="https://github.com/ergoplatform/explorer-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              View Repository <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
          <Package className="w-6 h-6 mr-3" />
          Resources
        </h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <Settings className="w-5 h-5 text-blue-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Docker Compose Deployment</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Deploying Explorer services with Docker Compose
            </p>
            <a
              href="https://github.com/ergoplatform/explorer-backend/wiki/Deploying-explorer-services-with-docker-compose"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline text-sm"
            >
              View Documentation
            </a>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <Cpu className="w-5 h-5 text-green-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Raspberry Pi Setup</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              How to setup the Chain-Grabber module on a Raspberry Pi device
            </p>
            <Link
              href="/docs/developers/infrastructure/explorer/rpi-blockchain-explorer"
              className="text-blue-400 hover:text-blue-300 underline text-sm"
            >
              View Guide
            </Link>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <GitBranch className="w-5 h-5 text-purple-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Ergo Nix Toolkit</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Provides Nix derivations for packages and services on Ergo
            </p>
            <a
              href="https://github.com/ergoplatform/ergo-nix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline text-sm"
            >
              View Repository
            </a>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Ergo Bootstrap</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Quickly deploy an Ergo blockchain cluster with useful tools for dApp development
            </p>
            <a
              href="https://github.com/ergoplatform/ergo-bootstrap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline text-sm"
            >
              View Repository
            </a>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <Code className="w-5 h-5 text-cyan-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">ergo-setup</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Docker based Ergo setup (Node, Explorer & GraphQL). Similar to Ergo Bootstrap but with fewer options and not NixOS-based.
            </p>
            <a
              href="https://github.com/abchrisxyz/ergo-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline text-sm"
            >
              View Repository
            </a>
          </div>
        </div>
      </div>

      {/* Running Your Own Instance */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
          <Server className="w-6 h-6 mr-3" />
          Running Your Own Instance
        </h2>

        <div className="space-y-6">
          {/* Working Directory */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">1. Create Working Directory</h3>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
                <code>
                  {`mkdir explorer && cd "$_"`}
                </code>
              </pre>
            </div>
          </div>

          {/* Environment Files */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">2. Create Environment Files</h3>
            <div className="space-y-4">
              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                <h4 className="text-md font-semibold text-blue-400 mb-2">Database Environment (.db_env)</h4>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
                  <code>
                    {`echo "DB_URL=jdbc:postgresql://postgres:5432/explorer
DB_USER=postgres
DB_PASS=1234" > .db_env`}
                  </code>
                </pre>
              </div>
              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                <h4 className="text-md font-semibold text-purple-400 mb-2">Redis Environment (.redis_env)</h4>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
                  <code>
                    {`echo "REDIS_URL=redis://localhost:6379" > .redis_env`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Frontend Setup */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">3. Setup Explorer Frontend</h3>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
                <code>
                  {`git clone https://github.com/ergoplatform/explorer-frontend
sudo mkdir -p front/build
sudo cp -r explorer-frontend/build /front
sudo mkdir front/config
sudo vi front/config/app.config.js
sudo vi docker-compose.yaml`}
                </code>
              </pre>
            </div>
          </div>

          {/* Backend Setup */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">4. Setup Explorer Backend</h3>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
                <code>
                  {`git clone https://github.com/ergoplatform/explorer-backend
cd explorer-backend/modules
# Configure services
vi chain-grabber/src/main/resources/application.conf
vi explorer-api/src/main/resources/application.conf
vi utx-tracker/src/main/resources/application.conf
vi utx-broadcaster/src/main/resources/application.conf
# Create docker network
docker network create explorer-network`}
                </code>
              </pre>
            </div>
          </div>

          {/* Booting */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">5. Booting Services</h3>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <p className="text-gray-300 text-sm mb-3">
                Configure other services (nginx, postgres, redis, adminer) according to their documentation
              </p>
              <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
                <code>
                  {`# Run from /explorer/
docker-compose up -d
# To make sure everything is up and working
docker ps -a`}
                </code>
              </pre>
            </div>
          </div>

          {/* Configuration Files */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">6. Configuration Files</h3>
            <div className="space-y-4">
              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                <h4 className="text-md font-semibold text-blue-400 mb-2">app.config.js</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Paste the following into app.config.js. apiUrl points to your backend API, environments.url points to your frontend:
                </p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
                  <code>
                    {`var __APP_CONFIG__ = {
  apiUrl: 'https://api.ergoplatform.org',
  alternativeLogo: false,
  environments: [
    {
      name: 'Mainnet',
      url: 'https://explorer.ergoplatform.org',
    },
  ],
};

if (typeof global !== 'undefined') {
  global.__APP_CONFIG__ = __APP_CONFIG__;
}
`}
                  </code>
                </pre>
              </div>
              <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                <h4 className="text-md font-semibold text-purple-400 mb-2">docker-compose.yaml</h4>
                <p className="text-gray-300 text-sm mb-2">Complete Docker Compose configuration:</p>
                <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
                  <code>
                    {`version: '3.4'

services:
  nginx:
    image: nginx:1.17.9-alpine
    ports:
      - "443:443"
    volumes:
      - /data/nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - /data/nginx/ssl:/etc/ssl:ro
      - /explorer/front/build:/usr/share/nginx/html
      - /explorer/front/config:/usr/share/nginx/config
    networks:
      - explorer-network
    depends_on:
      - api

  postgres:
    image: postgres:11-alpine
    shm_size: 2g
    environment:
      POSTGRES_PASSWORD: <password>
    ports:
      - "5432:5432"
    volumes:
      - /data/postgres:/var/lib/postgresql/data:rw
    networks:
      - explorer-network

  redis:
    image: redis:latest
    restart: always
    command: ["redis-server"]
    ports:
      - "127.0.0.1:6379:6379"
    volumes:
      - /data/redis:/usr/local/etc/redis
    networks:
      - explorer-network

  adminer:
    image: adminer:4-standalone
    ports:
      - "8082:8080"
    networks:
      - explorer-network

  grabber:
    image: oskin1/chain-grabber:latest
    networks:
      - explorer-network
    env_file:
      - .db_env
    depends_on:
      - postgres

  api:
    image: oskin1/explorer-api:latest
    ports:
      - "8081:8081"
    networks:
      - explorer-network
    env_file:
      - .db_env
    depends_on:
      - postgres
      - redis

  utx-tracker:
    image: oskin1/utx-tracker:latest
    networks:
      - explorer-network
    env_file:
      - .db_env
    depends_on:
      - postgres

  utx-broadcaster:
    image: oskin1/utx-broadcaster:latest
    networks:
      - explorer-network
    env_file:
      - .redis_env
    depends_on:
      - redis

networks:
  explorer-network:
    external: true
`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Instance */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
          <Settings className="w-6 h-6 mr-3" />
          Manual Instance
        </h2>
        <div className="space-y-6">
          {/* Prerequisites */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Prerequisites</h3>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
                <code>
                  {`sudo apt update
sudo apt full-upgrade

## SDKMAN
curl -s "https://get.sdkman.io" | bash
sdk install java
sdk install sbt

## PostgreSQL
sudo apt install postgresql
sudo su postgres
createuser ergo -P --interactive`}
                </code>
              </pre>
            </div>
          </div>

          {/* Database Schema */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Load Database Schema</h3>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
                <code>
                  {`psql
create database explorer;
\\c explorer;
\\i /explorer-backend/modules/explorer-core/src/main/resources/db/V9__Schema.sql`}
                </code>
              </pre>
            </div>
          </div>

          {/* Build Services */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Build Services</h3>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
                <code>
                  {`docker build explorer-backend/modules/chain-grabber/
docker build explorer-backend/modules/explorer-api/
docker build explorer-backend/modules/utx-tracker/
docker build explorer-backend/modules/utx-broadcaster/`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
