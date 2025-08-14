import React from "react";
import { ArrowLeft, Database, Download, Settings, Server, Terminal, Network, CheckCircle, AlertTriangle, Info, ExternalLink } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/ui/copy-button";

export default function MiningCorePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          🧱 MiningCore Setup Tutorial for Linux
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Complete guide to setting up MiningCore mining pool server on Linux with PostgreSQL database.
        </p>
        
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
            <p className="text-blue-300">
              💡 If you're using <strong>Windows 10</strong>, see the <Link href="/Docs/miners/mining-guides/solo-mining/miningcore/windows" className="text-blue-400 hover:text-blue-300 underline">Windows Tutorial</Link>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <Link 
            href="/Docs/miners/mining-guides/solo-mining" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Solo Mining
          </Link>
        </div>
      </div>

      {/* Step 1: Download MiningCore */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Download className="w-6 h-6 text-blue-400" />
          Step 1: Download MiningCore
        </h2>
        
        <p className="text-gray-300 mb-4">
          Clone Mining Core from <a href="https://github.com/oliverw/miningcore" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1">
            GitHub <ExternalLink className="w-3 h-3" />
          </a>
        </p>
        
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">Requirements:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• You must have a working <a href="https://www.postgresql.org/download/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline"><strong>PostgreSQL</strong> database</a></li>
            <li>• Ensure you meet all dependencies from the <a href="https://github.com/oliverw/miningcore/blob/master/README.md" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">README</a></li>
            <li>• Avoid Docker unless you are confident managing containers</li>
          </ul>
        </div>
      </div>

      {/* Step 2: Install PostgreSQL */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-green-400" />
          Step 2: Install and Configure PostgreSQL
        </h2>
        
        <div className="space-y-4">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2">For production environments:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Monitor I/O, disk, CPU, and memory — MiningCore's API can put heavy load on your DB</li>
              <li>• Keep all PostgreSQL settings default for now</li>
            </ul>
          </div>
          
          <p className="text-gray-300">
            <a href="https://www.postgresqltutorial.com/install-postgresql/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1">
              Reference setup guide <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>

      {/* Step 3: Create Database Schema */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-purple-400" />
          Step 3: Create the Database Schema
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Login to PostgreSQL</h3>
            <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
              <CopyButton 
                text="sudo -u postgres psql"
                size="sm"
                className="absolute top-2 right-2 z-10"
              />
              <code className="text-green-400 font-mono text-sm">
                sudo -u postgres psql
              </code>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Create Role and Database</h3>
            <p className="text-gray-300 mb-3">Replace <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">'your-secure-password'</code> with a strong password:</p>
            <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
              <CopyButton 
                text={`CREATE ROLE miningcore WITH LOGIN ENCRYPTED PASSWORD 'your-secure-password';
CREATE DATABASE miningcore OWNER miningcore;`}
                size="sm"
                className="absolute top-2 right-2 z-10"
              />
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`CREATE ROLE miningcore WITH LOGIN ENCRYPTED PASSWORD 'your-secure-password';
CREATE DATABASE miningcore OWNER miningcore;`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Load Schema SQL Files */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-cyan-400" />
          Step 4: Load Schema SQL Files
        </h2>
        
        <div className="space-y-6">
          <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-green-300">
                ✅ Make sure you can connect using <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">psql</code> before proceeding.
              </p>
            </div>
          </div>
          
          <div>
            <p className="text-gray-300 mb-3">As the <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">postgres</code> user, run:</p>
            <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600 mb-4">
              <CopyButton 
                text="psql -d miningcore -f miningcore/src/Miningcore/Persistence/Postgres/Scripts/createdb.sql"
                size="sm"
                className="absolute top-2 right-2 z-10"
              />
              <code className="text-green-400 font-mono text-sm">
                psql -d miningcore -f miningcore/src/Miningcore/Persistence/Postgres/Scripts/createdb.sql
              </code>
            </div>
            
            <p className="text-gray-300 mb-3">Then apply the partitioning script:</p>
            <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
              <CopyButton 
                text="psql -d miningcore -f miningcore/src/Miningcore/Persistence/Postgres/Scripts/createdb_postgresql_11_appendix.sql"
                size="sm"
                className="absolute top-2 right-2 z-10"
              />
              <code className="text-green-400 font-mono text-sm">
                psql -d miningcore -f miningcore/src/Miningcore/Persistence/Postgres/Scripts/createdb_postgresql_11_appendix.sql
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Step 5: Create Pool Table */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-yellow-400" />
          Step 5: Create a Pool Table
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-300">Run the following command <strong>once per pool</strong> you set up:</p>
          
          <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
            <CopyButton 
              text="CREATE TABLE shares_mypool1 PARTITION OF shares FOR VALUES IN ('mypool1');"
              size="sm"
              className="absolute top-2 right-2 z-10"
            />
            <code className="text-green-400 font-mono text-sm">
              CREATE TABLE shares_mypool1 PARTITION OF shares FOR VALUES IN ('mypool1');
            </code>
          </div>
          
          <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
            <ul className="space-y-2 text-blue-300">
              <li>• Replace <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">mypool1</code> with your pool's unique identifier</li>
              <li>• This name is used in the configuration files as well</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 6: Configure the Pool */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-red-400" />
          Step 6: Configure the Pool
        </h2>
        
        <div className="space-y-4">
          <ul className="space-y-2 text-gray-300">
            <li>• Go to the <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">build/</code> directory inside your MiningCore folder</li>
            <li>• Create a <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">&lt;coin&gt;.json</code> configuration file (e.g. <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">ergo.json</code>)</li>
            <li>• Refer to: <a href="https://github.com/oliverw/miningcore/wiki/Configuration" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1">MiningCore Config Example <ExternalLink className="w-3 h-3" /></a> and the example given below.</li>
          </ul>
          
          <details className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <summary className="text-lg font-semibold text-white cursor-pointer hover:text-blue-400 transition-colors">
              💡 Example Ergo config.json (Click to expand)
            </summary>
            
            <div className="mt-4 space-y-4">
              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">Required Fields in Config</h4>
                <p className="text-gray-300 mb-2">Replace placeholders:</p>
                <ul className="space-y-1 text-gray-300">
                  <li>• <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">YOURPOSTGRESQL_PASSWORD_GOES_HERE</code></li>
                  <li>• <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">YOUR_REWARD_ADDR_GOES_HERE</code></li>
                </ul>
                <p className="text-gray-300 mt-2">Adjust:</p>
                <ul className="space-y-1 text-gray-300">
                  <li>• <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">rewardRecipients</code> percentage to fit your payout model</li>
                  <li>• Enable <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">paymentProcessing</code> if you will use automatic share payouts</li>
                </ul>
              </div>
              
              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600 max-h-96 overflow-y-auto">
                <CopyButton 
                  text={`{
    "logging": {
        "level": "info",
        "enableConsoleLog": true,
        "enableConsoleColors": true,
        "logFile": "core.log",
        "apiLogFile": "api.log",
        "logBaseDirectory": "/path/to/logs",
        "perPoolLogFile": false
    },
    "banning": {
        "manager": "Integrated",
        "banOnJunkReceive": true,
        "banOnInvalidShares": false
    },
    "persistence": {
        "postgres": {
            "host": "127.0.0.1",
            "port": 5432,
            "user": "miningcore",
            "password": "YOURPOSTGRESQL_PASSWORD_GOES_HERE",
            "database": "miningcore"
        }
    },
    "pools": [
        {
            "id": "ergo1",
            "enabled": true,
            "coin": "ergo",
            "address": "YOUR_REWARD_ADDR_GOES_HERE",
            "ports": {
                "3052": {
                    "listenAddress": "0.0.0.0",
                    "difficulty": 0.02,
                    "varDiff": {
                        "minDiff": 0.01,
                        "maxDiff": null,
                        "targetTime": 15,
                        "retargetTime": 90,
                        "variancePercent": 30
                    }
                }
            },
            "daemons": [
                {
                    "host": "127.0.0.1",
                    "port": 9052,
                    "user": "",
                    "password": ""
                }
            ]
        }
    ]
}`}
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-xs overflow-x-auto">
{`{
    "logging": {
        "level": "info",
        "enableConsoleLog": true,
        "enableConsoleColors": true,
        "logFile": "core.log",
        "apiLogFile": "api.log",
        "logBaseDirectory": "/path/to/logs",
        "perPoolLogFile": false
    },
    "banning": {
        "manager": "Integrated",
        "banOnJunkReceive": true,
        "banOnInvalidShares": false
    },
    "persistence": {
        "postgres": {
            "host": "127.0.0.1",
            "port": 5432,
            "user": "miningcore",
            "password": "YOURPOSTGRESQL_PASSWORD_GOES_HERE",
            "database": "miningcore"
        }
    },
    "pools": [
        {
            "id": "ergo1",
            "enabled": true,
            "coin": "ergo",
            "address": "YOUR_REWARD_ADDR_GOES_HERE",
            "ports": {
                "3052": {
                    "listenAddress": "0.0.0.0",
                    "difficulty": 0.02,
                    "varDiff": {
                        "minDiff": 0.01,
                        "maxDiff": null,
                        "targetTime": 15,
                        "retargetTime": 90,
                        "variancePercent": 30
                    }
                }
            },
            "daemons": [
                {
                    "host": "127.0.0.1",
                    "port": 9052,
                    "user": "",
                    "password": ""
                }
            ]
        }
    ]
}`}
                </pre>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* Step 7: Start the Pool */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-green-400" />
          Step 7: Start the Pool
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-300">You should configure your pool to auto-start using a startup script.</p>
          
          <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
            <CopyButton 
              text={`cd build
Miningcore -c <your-config>.json`}
              size="sm"
              className="absolute top-2 right-2 z-10"
            />
            <pre className="text-green-400 font-mono text-sm">
{`cd build
Miningcore -c <your-config>.json`}
            </pre>
          </div>
          
          <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
            <p className="text-blue-300">
              The JSON config defines the <strong>log files</strong> you should monitor for:
            </p>
            <ul className="space-y-1 text-blue-300 mt-2">
              <li>• Startup errors</li>
              <li>• Daemon issues</li>
              <li>• Pool activity</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Expected Log Output */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" />
          ✅ Expected Log Output (Success)
        </h2>
        
        <p className="text-gray-300 mb-4">When everything is working properly, your logs should show the following messages:</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">🟢 Node Online and Synced</h3>
            <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
              <CopyButton 
                text={`[2022-03-16 14:26:12.9080] [I] [ergo1] All daemons online
[2022-03-16 14:26:12.9345] [I] [ergo1] Daemon is synced with blockchain`}
                size="sm"
                className="absolute top-2 right-2 z-10"
              />
              <pre className="text-green-400 font-mono text-sm">
{`[2022-03-16 14:26:12.9080] [I] [ergo1] All daemons online
[2022-03-16 14:26:12.9345] [I] [ergo1] Daemon is synced with blockchain`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">🟢 Pool Online</h3>
            <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
              <CopyButton 
                text="[2022-03-16 14:26:14.4346] [I] [ergo1] Pool Online"
                size="sm"
                className="absolute top-2 right-2 z-10"
              />
              <pre className="text-green-400 font-mono text-sm">
{`[2022-03-16 14:26:14.4346] [I] [ergo1] Pool Online`}
              </pre>
            </div>
          </div>
          
          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <p className="text-yellow-300">
                ⚠️ If the <strong>network difficulty</strong> or other values look off, double-check your diff setting in the config.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 8: Network Setup */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Network className="w-6 h-6 text-purple-400" />
          Step 8: Network Setup Notes
        </h2>
        
        <div className="space-y-6">
          <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
            <p className="text-blue-300">
              If your <strong>miner</strong>, <strong>pool</strong>, or <strong>node</strong> are on different machines, you will need to <strong>open ports</strong> to allow communication between them.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Initial Mining Traffic Flow</h3>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-blue-400">Miner</span>
                  <span>→ connects to Stratum port (e.g. <code className="bg-neutral-700 px-2 py-1 rounded">3746</code>)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-blue-400">Pool Server</span>
                  <span>→ connects to Node RPC (mainnet: <code className="bg-neutral-700 px-2 py-1 rounded">9053</code>, testnet: <code className="bg-neutral-700 px-2 py-1 rounded">9052</code>)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-blue-400">Node</span>
                </div>
              </div>
              <p className="text-gray-300 mt-3">
                Once all components connect, traffic becomes <strong>bi-directional</strong>.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Port Opening Guidelines</h3>
            <div className="space-y-3">
              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-green-300">
                      If <strong>all components are on the same machine</strong>:
                    </p>
                    <p className="text-green-300 mt-1">
                      ✅ No need to open ports — uses <code className="bg-neutral-800 px-2 py-1 rounded">localhost</code>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                <p className="text-blue-300 mb-2">
                  If using <strong>LAN or WAN</strong>:
                </p>
                <ul className="space-y-1 text-blue-300">
                  <li>🖥️ Open required ports on your OS firewall</li>
                  <li>🌐 On WAN, configure <strong>port forwarding</strong> on your router</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-700/50 rounded-xl p-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">🎉 You're Good to Go!</h2>
        <p className="text-xl text-gray-300 mb-4">
          You now have a fully operational MiningCore pool on Linux.
        </p>
        <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 inline-block">
          <p className="text-gray-300">
            Make sure everything is synced, ports are configured, and logs show green — then start mining! ⛏️
          </p>
        </div>
      </div>
    </>
  );
} 