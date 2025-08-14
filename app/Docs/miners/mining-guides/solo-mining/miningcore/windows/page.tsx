import Link from "next/link";
import { ArrowLeft, Database, Terminal, Settings, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";
import { CopyButton } from "@/components/ui/copy-button";

export default function MiningCoreWindowsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/Docs/miners/mining-guides/solo-mining/miningcore"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to MiningCore Setup
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
            MiningCore Setup Tutorial on Windows 10
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This guide walks you through setting up MiningCore on a Windows 10 machine step-by-step.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Step 1: Install PostgreSQL */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </div>
              <Database className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Install PostgreSQL</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                Download and install PostgreSQL 10 or the latest version:
              </p>
              
              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                <p className="text-blue-300 flex items-center gap-2">
                  👉 <a href="https://www.postgresql.org/download/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1">
                    https://www.postgresql.org/download/ <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>

              <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                <p className="text-orange-300 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  <strong>Note:</strong> During installation, you do not need to install StackBuilder.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Launch pSQL Shell */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </div>
              <Terminal className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Launch pSQL Shell</h2>
            </div>
            
            <div className="space-y-4">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Open the Windows search bar and type <code className="bg-neutral-800 px-2 py-1 rounded text-purple-400">psql</code>.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Launch the <strong>pSQL Shell</strong>.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Login using the credentials you set during PostgreSQL installation:
                </li>
              </ul>
              
              <div className="ml-6 space-y-2">
                <p className="text-gray-300">• Username: <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">postgres</code> (default)</p>
                <p className="text-gray-300">• Password: (the one you set during install)</p>
              </div>
            </div>
          </div>

          {/* Step 3: Create Database Role and Schema */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </div>
              <Settings className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Create Database Role and Schema</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                In the pSQL Shell, run the following commands (replace <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">myPassword</code> with your actual password):
              </p>
              
              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
                <CopyButton 
                  text={`CREATE ROLE miningcore WITH LOGIN ENCRYPTED PASSWORD 'myPassword';
CREATE DATABASE miningcore OWNER miningcore;`}
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

          {/* Step 4: Run Database Setup Scripts */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                4
              </div>
              <Database className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Run Database Setup Scripts</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                Locate the following files on your PC:
              </p>
              
              <ul className="space-y-2 ml-4">
                <li className="text-gray-300">• <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">createdb.sql</code></li>
                <li className="text-gray-300">• <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">createdb_postgresql_11_appendix.sql</code></li>
              </ul>

              <p className="text-gray-300">
                Then, in the pSQL Shell, run these commands (replace with actual paths):
              </p>
              
              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
                <CopyButton 
                  text={`\\i c:/Users/YourUser/Desktop/miningcore/src/Miningcore/Persistence/Postgres/Scripts/createdb.sql
\\i c:/Users/YourUser/Desktop/miningcore/src/Miningcore/Persistence/Postgres/Scripts/createdb_postgresql_11_appendix.sql`}
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

          {/* Step 5: Create Pool Table */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                5
              </div>
              <Database className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Create Pool Table</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                For <strong>each coin you setup</strong>, create a partition of the shares table:
              </p>
              
              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
                <CopyButton 
                  text="CREATE TABLE shares_coinName PARTITION OF shares FOR VALUES IN ('coinName');"
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                />
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                  CREATE TABLE shares_coinName PARTITION OF shares FOR VALUES IN ('coinName');
                </pre>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                <p className="text-blue-300 flex items-center gap-2">
                  🔁 Replace <strong><code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">coinName</code></strong> with your desired coin identifier (e.g., <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">btc</code>, <code className="bg-neutral-800 px-2 py-1 rounded text-blue-400">eth</code>).
                </p>
              </div>
            </div>
          </div>

          {/* Step 6: Configure the Pool */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                6
              </div>
              <Settings className="w-6 h-6 text-orange-400" />
              <h2 className="text-2xl font-bold text-white">Configure the Pool</h2>
            </div>
            
            <div className="space-y-4">
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold mt-1">1.</span>
                  Go to your MiningCore <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">build</code> directory.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold mt-1">2.</span>
                  Create a <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">coinName.json</code> config file for your coin.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold mt-1">3.</span>
                  Inside the config file:
                  <ul className="ml-6 mt-2 space-y-1">
                    <li className="text-gray-300">• Ensure <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">"logFile"</code> and <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">"apiLogFile"</code> under <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">"logging"</code> are filled in</li>
                    <li className="text-gray-300">• Example: <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">coinName_core.log</code>, <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">coinName_api.log</code></li>
                  </ul>
                </li>
              </ol>

              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                <p className="text-green-300 flex items-center gap-2">
                  📝 Example config: <a href="https://github.com/oliverw/miningcore/wiki/Configuration" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline inline-flex items-center gap-1">
                    MiningCore Configuration Example <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Step 7: Create a Startup Batch File */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                7
              </div>
              <Terminal className="w-6 h-6 text-pink-400" />
              <h2 className="text-2xl font-bold text-white">Create a Startup Batch File</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                In your MiningCore root directory, create a <code className="bg-neutral-800 px-2 py-1 rounded text-pink-400">.bat</code> file with the following content (adjust for your coin name):
              </p>
              
              <div className="relative bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
                <CopyButton 
                  text={`cd build
./Miningcore -c coinName.json`}
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

          {/* Step 8: All Done */}
          <div className="bg-neutral-900/50 border border-green-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                8
              </div>
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">All Done!</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 text-lg">
                MiningCore is now set up and ready to go!
              </p>

              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                <p className="text-red-300 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  <strong>Important:</strong> Ensure your coin's node is fully synced before launching the pool.
                </p>
              </div>

              <div className="text-center py-4">
                <p className="text-2xl">Happy mining! ⛏️</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 