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
  Download,
  Globe,
  FileText,
  Info,
  AlertTriangle,
  CheckCircle,
  Activity,
  Cpu,
  Clock,
  Shield,
  Smartphone,
  Network,
  ChevronDown,
  ChevronUp,
  Zap,
  Terminal,
  Database as DatabaseIcon,
  Wrench,
  Play,
  Search
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PiExplorerPage() {
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({
    intro: false,
    prerequisites: false,
    preparation: false,
    java: false,
    sbt: false,
    download: false,
    postgresql: false,
    schema: false,
    config: false,
    launch: false,
    validate: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Tutorial: Blockchain Explorer with Raspberry Pi
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          How to setup the Chain-Grabber module on a Raspberry Pi device
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/developers/infrastructure/explorer"
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
            This is a guide for developers and data scientists interested in storing the Ergo blockchain to a standardized database format using a Raspberry Pi.
          </p>
          <p className="text-gray-300 mb-6">
            We will focus specifically on the Chain Grabber module from the{' '}
            <a 
              href="https://github.com/ergoplatform/explorer-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Ergo Blockchain Explorer (backend)
            </a>.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
          <AlertTriangle className="w-6 h-6 mr-3" />
          Prerequisites
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <span>Raspberry Pi with official OS installed</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <span>Minimum 60GB of disk space available</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <span>SSH enabled with stable internet connection</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Preparing the RPi */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
          <Settings className="w-6 h-6 mr-3" />
          Preparing the RPi
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <code className="text-green-400 text-sm block bg-neutral-900 p-3 rounded">
              sudo apt update<br/>
              sudo apt full-upgrade
            </code>
          </div>
        </div>
      </div>

      {/* Download latest Java version */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
          <Cpu className="w-6 h-6 mr-3" />
          Download latest Java version
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <code className="text-green-400 text-sm block bg-neutral-900 p-3 rounded">
              sudo apt install default-JDK
            </code>
          </div>
        </div>
      </div>

      {/* Download sbt */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
          <Package className="w-6 h-6 mr-3" />
          Download sbt
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <code className="text-green-400 text-sm block bg-neutral-900 p-3 rounded">
              echo "deb https://repo.scala-sbt.org/scalasbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list<br/>
              curl -sL "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x2EE0EA64E40A89B84B2DF73499E82A75642AC823" | sudo apt-key add<br/>
              sudo apt update<br/>
              sudo apt install sbt
            </code>
          </div>
        </div>
      </div>

      {/* Download and unzip precompiled JAR */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
          <Download className="w-6 h-6 mr-3" />
          Download and unzip precompiled JAR
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            If you are reading this in the future, please visit the{' '}
            <a 
              href="https://github.com/ergoplatform/explorer-backend/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              code release repo
            </a>{' '}
            and replace it with the appropriate version.
          </p>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <code className="text-green-400 text-sm block bg-neutral-900 p-3 rounded">
              wget https://github.com/ergoplatform/explorer-backend/archive/refs/tags/&lt;version&gt;.zip<br/><br/>
              unzip explorer-backend-&lt;version&gt;
            </code>
          </div>
        </div>
      </div>

      {/* Install PostgreSQL */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
          <DatabaseIcon className="w-6 h-6 mr-3" />
          Install PostgreSQL
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            In the code snippet below, we created "ergo" as the username.
          </p>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <code className="text-green-400 text-sm block bg-neutral-900 p-3 rounded">
              sudo apt install postgresql<br/>
              sudo su postgres<br/>
              createuser ergo -P --interactive
            </code>
          </div>
        </div>
      </div>

      {/* Setup and load database schema */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
          <Database className="w-6 h-6 mr-3" />
          Setup and load database schema
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <code className="text-green-400 text-sm block bg-neutral-900 p-3 rounded">
              psql<br/>
              create database explorer;<br/>
              \c explorer;<br/>
              \i /explorer-backend-9.4.3/modules/explorer-core/src/main/resources/db/V9__Schema.sql
            </code>
          </div>
          <p className="text-gray-300 mt-4">
            The final line of code above executes a SQL script that creates a bunch of tables and indices to be populated later by the Chain Grabber.
          </p>
        </div>
      </div>

      {/* Update app config */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
          <Wrench className="w-6 h-6 mr-3" />
          Update app config
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            This is where you need to edit the database username and password you set up earlier.
          </p>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <code className="text-green-400 text-sm block bg-neutral-900 p-3 rounded">
              sudo nano explorer-backend-9.4.3/modules/chain-grabber/src/main/resources/application.conf
            </code>
          </div>
        </div>
      </div>

      {/* Launch chain-grabber */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
          <Play className="w-6 h-6 mr-3" />
          Launch chain-grabber
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            Run the following command from within the `explorer-backend` directory.
          </p>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <code className="text-green-400 text-sm block bg-neutral-900 p-3 rounded">
              sbt chain-grabber/run
            </code>
          </div>
        </div>
      </div>

      {/* Validate */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <Search className="w-6 h-6 mr-3" />
          Validate
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            If all goes well, the code below returns the latest block height that was stored in the database.
          </p>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <code className="text-green-400 text-sm block bg-neutral-900 p-3 rounded">
              select max(height) from node_headers;
            </code>
          </div>
        </div>
      </div>
    </div>
  );
} 