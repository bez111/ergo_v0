import Link from "next/link";
import { ArrowLeft, Database, Terminal, Settings, CheckCircle, AlertTriangle, ExternalLink, Download, Play, FileText, Folder } from "lucide-react";
import { CopyButton } from "@/components/ui/copy-button";

export default function MiningCoreWindowsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          MiningCore Setup Tutorial on Windows 10
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          This guide walks you through setting up MiningCore on a Windows 10 machine step-by-step. 
          Follow these instructions to get your mining pool operational quickly and efficiently.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/miners/mining-guides/solo-mining/miningcore"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-black hover:bg-blue-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to MiningCore Setup
          </Link>
          <a
            href="https://www.postgresql.org/download/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Download className="w-5 h-5 mr-2" /> Download PostgreSQL
          </a>
        </div>
      </div>

      {/* Warning Section */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Important Notes</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• During PostgreSQL installation, you do <strong>not</strong> need to install StackBuilder</li>
              <li>• Ensure your coin's node is fully synced before launching the pool</li>
              <li>• Replace all placeholder values with your actual configuration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 1: Install PostgreSQL */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-500 text-black rounded-full flex items-center justify-center font-bold">1</div>
          <h2 className="text-2xl font-bold">Install PostgreSQL</h2>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Database className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-300 mb-4">
                Download and install PostgreSQL 10 or the latest version from the official website.
              </p>
              <a
                href="https://www.postgresql.org/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 underline"
              >
                <ExternalLink className="w-4 h-4" />
                https://www.postgresql.org/download/
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Launch pSQL Shell */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-500 text-black rounded-full flex items-center justify-center font-bold">2</div>
          <h2 className="text-2xl font-bold">Launch pSQL Shell</h2>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Terminal className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                <li>Open the Windows search bar and type <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">psql</code></li>
                <li>Launch the <strong>pSQL Shell</strong></li>
                <li>Login using the credentials you set during PostgreSQL installation:
                  <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
                    <li>Username: <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">postgres</code> (default)</li>
                    <li>Password: (the one you set during install)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Create Database Role and Schema */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-500 text-black rounded-full flex items-center justify-center font-bold">3</div>
          <h2 className="text-2xl font-bold">Create Database Role and Schema</h2>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Settings className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-gray-300 mb-4">
                In the pSQL Shell, run the following commands (replace <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">myPassword</code> with your actual password):
              </p>
              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
                <CopyButton
                  text="CREATE ROLE miningcore WITH LOGIN ENCRYPTED PASSWORD 'myPassword';
CREATE DATABASE miningcore OWNER miningcore;"
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`CREATE ROLE miningcore WITH LOGIN ENCRYPTED PASSWORD 'myPassword';
CREATE DATABASE miningcore OWNER miningcore;`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Run Database Setup Scripts */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-red-500 text-black rounded-full flex items-center justify-center font-bold">4</div>
          <h2 className="text-2xl font-bold">Run Database Setup Scripts</h2>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <FileText className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-gray-300 mb-4">
                Locate the following files on your PC:
              </p>
              <ul className="text-gray-300 mb-4 space-y-1 list-disc list-inside ml-4">
                <li><code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">createdb.sql</code></li>
                <li><code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">createdb_postgresql_11_appendix.sql</code></li>
              </ul>
              <p className="text-gray-300 mb-4">
                Then, in the pSQL Shell, run these commands (replace with actual paths):
              </p>
              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
                <CopyButton
                  text="\i c:/Users/YourUser/Desktop/miningcore/src/Miningcore/Persistence/Postgres/Scripts/createdb.sql
\i c:/Users/YourUser/Desktop/miningcore/src/Miningcore/Persistence/Postgres/Scripts/createdb_postgresql_11_appendix.sql"
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`\\i c:/Users/YourUser/Desktop/miningcore/src/Miningcore/Persistence/Postgres/Scripts/createdb.sql
\\i c:/Users/YourUser/Desktop/miningcore/src/Miningcore/Persistence/Postgres/Scripts/createdb_postgresql_11_appendix.sql`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 5: Create Pool Table */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-orange-500 text-black rounded-full flex items-center justify-center font-bold">5</div>
          <h2 className="text-2xl font-bold">Create Pool Table</h2>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Database className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-gray-300 mb-4">
                For <strong>each coin you setup</strong>, create a partition of the shares table:
              </p>
              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
                <CopyButton
                  text="CREATE TABLE shares_coinName PARTITION OF shares FOR VALUES IN ('coinName');"
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`CREATE TABLE shares_coinName PARTITION OF shares FOR VALUES IN ('coinName');`}
                </pre>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                🔁 Replace <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">coinName</code> with your desired coin identifier (e.g., <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">btc</code>, <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">eth</code>).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 6: Configure the Pool */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-cyan-500 text-black rounded-full flex items-center justify-center font-bold">6</div>
          <h2 className="text-2xl font-bold">Configure the Pool</h2>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Settings className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                <li>Go to your MiningCore <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">build</code> directory</li>
                <li>Create a <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">coinName.json</code> config file for your coin</li>
                <li>Inside the config file:
                  <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
                    <li>Ensure <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">"logFile"</code> and <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">"apiLogFile"</code> under <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">"logging"</code> are filled in</li>
                    <li>Example: <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">coinName_core.log</code>, <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">coinName_api.log</code></li>
                  </ul>
                </li>
              </ol>
              <div className="mt-4">
                <a
                  href="https://github.com/oliverw/miningcore/wiki/Configuration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  MiningCore Configuration Example
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 7: Create a Startup Batch File */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-pink-500 text-black rounded-full flex items-center justify-center font-bold">7</div>
          <h2 className="text-2xl font-bold">Create a Startup Batch File</h2>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Play className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-gray-300 mb-4">
                In your MiningCore root directory, create a <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">.bat</code> file with the following content (adjust for your coin name):
              </p>
              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
                <CopyButton
                  text="cd build
./Miningcore -c coinName.json"
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`cd build
./Miningcore -c coinName.json`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 8: All Done */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-500 text-black rounded-full flex items-center justify-center font-bold">8</div>
          <h2 className="text-2xl font-bold">All Done!</h2>
        </div>
        <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-2">MiningCore is now set up and ready to go!</h3>
              <p className="text-gray-300">
                Remember to ensure your coin's node is fully synced before launching the pool. Happy mining! ⛏️
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 