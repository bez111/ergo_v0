"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Settings, 
  Database, 
  Link as LinkIcon, 
  Wallet, 
  Vote, 
  ChevronRight, 
  ExternalLink,
  CheckCircle,
  Code,
  BookOpen,
  GitBranch,
  Info,
  Cpu,
  Shield,
  Zap,
  Globe,
  Lock,
  FileText,
  AlertCircle,
  AlertTriangle,
  Clock,
  Network,
  Server,
  Gauge,
  Maximize,
  Activity
} from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

function ApplicationConfContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const tab = searchParams?.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-7 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <Info className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="ergo-node" className="flex items-center gap-2 justify-center">
          <Settings className="w-4 h-4" /> ergo-node
        </TabsTrigger>
        <TabsTrigger value="mailbox" className="flex items-center gap-2 justify-center">
          <Database className="w-4 h-4" /> mailbox
        </TabsTrigger>
        <TabsTrigger value="akka" className="flex items-center gap-2 justify-center">
          <Cpu className="w-4 h-4" /> akka
        </TabsTrigger>
        <TabsTrigger value="scorex" className="flex items-center gap-2 justify-center">
          <GitBranch className="w-4 h-4" /> scorex
        </TabsTrigger>
        <TabsTrigger value="crit-dispatch" className="flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4" /> crit-dispatch
        </TabsTrigger>
        <TabsTrigger value="api-dispatch" className="flex items-center gap-2 justify-center">
          <Code className="w-4 h-4" /> api-dispatch
        </TabsTrigger>
      </TabsList>
      
      {/* Overview Tab */}
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Overview of Node Configuration Files
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Comprehensive guide to the various configuration files crucial for setting up and managing an Ergo node.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/Docs/developers/infrastructure/node/configuration"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
            </Link>
            <a
              href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> View on GitHub
            </a>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="introduction" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-orange-400" />
                <span className="text-xl font-bold">Configuration Files Overview</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-orange-400" /> Configuration Files Overview
                </h2>
                <p className="text-gray-300 mb-6">
                  Welcome to the node configuration files documentation. This section provides a comprehensive guide to the various configuration files crucial for setting up and managing an Ergo node. These files contain essential parameters for controlling and fine-tuning different aspects of the Ergo protocol, ranging from node operation and blockchain management to wallet functionality and voting mechanisms.
                </p>
                <p className="text-gray-300">
                  Included in this section is the main configuration file, <a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf" className="text-blue-400 hover:text-blue-300">application.conf</a>, along with several others that each serve specific purposes in the node's overall functioning.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="main-files" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <Settings className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">Main Configuration Files</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-blue-400" /> Main Configuration Files
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-orange-400" />
                      <a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf" className="text-blue-400 hover:text-blue-300">application.conf</a>
                    </h3>
                    <p className="text-gray-300 mb-4">
                      The principal configuration file containing the primary settings for the Ergo protocol.
                    </p>
                    <div className="ml-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <Link href="/Docs/developers/infrastructure/node/configuration/application-conf/node" className="text-blue-400 hover:text-blue-300">node</Link>: Configures node-specific parameters
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <Link href="/Docs/developers/infrastructure/node/configuration/application-conf/cache" className="text-blue-400 hover:text-blue-300">cache</Link>: Handles cache-related settings
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <Link href="/Docs/developers/infrastructure/node/configuration/application-conf/chain" className="text-blue-400 hover:text-blue-300">chain</Link>: Manages blockchain-related settings
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <Link href="/Docs/developers/infrastructure/node/configuration/application-conf/wallet" className="text-blue-400 hover:text-blue-300">wallet</Link>: Sets up wallet parameters
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <Link href="/Docs/developers/infrastructure/node/configuration/application-conf/voting" className="text-blue-400 hover:text-blue-300">voting</Link>: Oversees voting-related configurations
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-neutral-800/50 rounded-lg p-4">
                      <h4 className="font-bold text-orange-400 mb-2">bounded-mailbox</h4>
                      <p className="text-gray-300 text-sm">Controls mailbox settings.</p>
                    </div>
                    <div className="bg-neutral-800/50 rounded-lg p-4">
                      <h4 className="font-bold text-orange-400 mb-2">akka</h4>
                      <p className="text-gray-300 text-sm">Manages Akka settings for the actor system.</p>
                    </div>
                    <div className="bg-neutral-800/50 rounded-lg p-4">
                      <h4 className="font-bold text-orange-400 mb-2">scorex</h4>
                      <p className="text-gray-300 text-sm">Handles settings related to the Scorex framework.</p>
                    </div>
                    <div className="bg-neutral-800/50 rounded-lg p-4">
                      <h4 className="font-bold text-orange-400 mb-2">critical-dispatcher</h4>
                      <p className="text-gray-300 text-sm">Manages settings for critical dispatchers.</p>
                    </div>
                    <div className="bg-neutral-800/50 rounded-lg p-4">
                      <h4 className="font-bold text-orange-400 mb-2">api-dispatcher</h4>
                      <p className="text-gray-300 text-sm">Sets up settings for API dispatchers.</p>
                    </div>
                    <div className="bg-neutral-800/50 rounded-lg p-4">
                      <h4 className="font-bold text-orange-400 mb-2">testnet.conf</h4>
                      <p className="text-gray-300 text-sm">Specifically designed for operating an Ergo node on the testnet environment.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold text-yellow-400">Important</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Feel free to navigate through each file's documentation for a deeper understanding of the node configuration process. Remember, properly managing these settings is crucial for the smooth operation of your Ergo node.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ergo-sections" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <GitBranch className="w-6 h-6 text-cyan-400" />
                <span className="text-xl font-bold">Ergo Configuration Sections</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <GitBranch className="w-6 h-6 text-cyan-400" /> Ergo Configuration Sections
                </h2>
                
                <p className="text-gray-300 mb-6">
                  The root configuration section <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">ergo</code> encompasses essential application parameters and various other configuration subsections. There is also another root section, <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">scorex</code>, which contains parameters inherited from the <a href="https://github.com/ScorexFoundation/Scorex" className="text-blue-400 hover:text-blue-300">Scorex project</a>.
                </p>

                <p className="text-gray-300 mb-6">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">directory</code> parameter allows you to define a path to the base application directory. You can use environment variables to override configuration parameters. For instance, the base directory path is constructed relative to the user's <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">HOME</code> environment variable by default. Refrain from enclosing references to environment variables in quotation marks, as they will be treated as literal strings and not resolved.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="network-settings" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-cyan-400" />
                <span className="text-xl font-bold">Network Settings</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-cyan-400" /> Network Settings
                </h2>
                
                <p className="text-gray-300 mb-6">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">scorex.network</code> section allows you to configure settings related to the P2P network.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-400 mb-2">declaredAddress</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Using the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">declaredAddress</code> parameter, you can establish the external IP address and port number that your node advertises to peers. This is necessary for operating behind NAT, common in cloud hosting scenarios where the machine doesn't directly interface with the external IP address.
                    </p>
                    <p className="text-gray-300 text-sm">
                      Format: <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">"&lt;ip-address&gt;:&lt;port&gt;"</code>
                    </p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-400 mb-2">bindAddress</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      You can use the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">bindAddress</code> parameter to set the IP address of the local network interface where the Ergo Node will listen for incoming P2P connections.
                    </p>
                    <p className="text-gray-300 text-sm">
                      Default: <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">"0.0.0.0"</code>
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-orange-400 mb-3">About Internet Address Settings</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Internet Address settings follow the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">"&lt;ip-address&gt;:&lt;port&gt;"</code> format. Note that the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">:&lt;port&gt;</code> component is crucial.
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    For the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">bindAddress</code> setting, the port component establishes the network port number on which your node listens for incoming connections from other Ergo nodes. Please ensure this port is externally accessible (e.g., through firewall rules and port forwarding); otherwise, your node will only establish outgoing connections.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-orange-400 mb-2">nodeName</h5>
                      <p className="text-gray-300 text-sm">Assign a visible name to your node for other participants in the P2P network. This name is transmitted during the initial handshake.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-400 mb-2">knownPeers</h5>
                      <p className="text-gray-300 text-sm">Stores a list of bootstrap node addresses that your node will attempt to connect to upon initialization.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-orange-400 mb-3">About Time Settings</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    All time span parameters are specified in milliseconds by default. However, you can use duration units for convenience. Supported units include:
                  </p>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-neutral-700 rounded p-2 mb-2">
                        <code className="text-cyan-400">s, second, seconds</code>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-neutral-700 rounded p-2 mb-2">
                        <code className="text-cyan-400">m, minute, minutes</code>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-neutral-700 rounded p-2 mb-2">
                        <code className="text-cyan-400">h, hour, hours</code>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-neutral-700 rounded p-2 mb-2">
                        <code className="text-cyan-400">d, day, days</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-orange-400 mb-2">maxConnections</h5>
                    <p className="text-gray-300 text-sm">Define the maximum number of concurrent P2P connections the node can handle.</p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-orange-400 mb-2">connectionTimeout</h5>
                    <p className="text-gray-300 text-sm">Adjust the network communication timeout for P2P connections.</p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-orange-400 mb-2">handshakeTimeout</h5>
                    <p className="text-gray-300 text-sm">Set the maximum time to wait for a response during the P2P handshake process.</p>
                  </div>
                </div>

                <div className="mt-6 bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-orange-400 mb-3">UPnP Settings</h4>
                  <p className="text-gray-300 text-sm">
                    You can configure UPnP (Universal Plug and Play) settings using parameters starting with <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">upnp</code>. These settings are typically useful only if you're running your Ergo node on a home network where the node can automatically request your router to establish port forwarding. By default, UPnP is disabled. Use the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">upnpEnabled</code> parameter to enable it.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="wallet-settings" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <Wallet className="w-6 h-6 text-purple-400" />
                <span className="text-xl font-bold">Wallet Settings</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Wallet className="w-6 h-6 text-purple-400" /> Wallet Settings
                </h2>
                
                <p className="text-gray-300 mb-6">
                  In the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">ergo.wallet</code> section, you can configure the node's built-in wallet.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-400 mb-2">dlogSecretsNumber</h4>
                    <p className="text-gray-300 text-sm">
                      Specify the number of Schnorr secret keys (private keys corresponding to <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">ProveDlog</code> public keys) to generate or manage within the wallet.
                    </p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-400 mb-2">scanningInterval</h4>
                    <p className="text-gray-300 text-sm">
                      Set the rescanning interval for uncertain boxes (boxes whose spending status might be temporarily unknown during chain reorganizations).
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-orange-400 mb-3">seed Parameter</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    You can use the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">seed</code> parameter (a Base64 encoded string) to restore an existing wallet on a new node. If you don't have an existing wallet seed, comment out this parameter. When the node starts for the first time, it will generate a new wallet with a random seed, which will be displayed in the application log.
                  </p>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <span className="font-semibold text-red-400">Warning!</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    The wallet file (<code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">wallet.dat</code> by default) is crucial. Ensure you store it in a safe, protected location and back it up regularly.
                  </p>
                  <p className="text-gray-300 text-sm">
                    It is strongly advised to remove the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">seed</code> parameter from the configuration file after the wallet has been successfully initialized or restored. If an attacker gains access to your seed phrase, they can access all funds associated with that wallet across all derived addresses!
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="blockchain-settings" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <LinkIcon className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold">Blockchain Settings</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <LinkIcon className="w-6 h-6 text-green-400" /> Blockchain Settings
                </h2>
                
                <p className="text-gray-300 mb-6">
                  In the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">ergo.chain</code> section, you can select or customize blockchain parameters (primarily relevant for custom networks or testnets).
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-400 mb-2">blockInterval</h4>
                    <p className="text-gray-300 text-sm">Set the target time interval between blocks (in seconds).</p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-400 mb-2">epochLength</h4>
                    <p className="text-gray-300 text-sm">Define the length of an epoch (in blocks) used for difficulty recalculation and storage rent adjustments.</p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-400 mb-2">useLastEpochs</h4>
                    <p className="text-gray-300 text-sm">Specify the number of most recent epochs used for difficulty recalculation.</p>
                  </div>
                </div>

                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-orange-400 mb-2">powScheme</h4>
                  <p className="text-gray-300 text-sm">
                    You can modify the Proof-of-Work algorithm or related parameters using the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">powScheme</code> section.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="node-settings" className="bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <Server className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">Node Settings</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-400" /> Node Settings
                </h2>
                
                <p className="text-gray-300 mb-6">
                  In the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">ergo.node</code> section, you can configure parameters related to the node's operational mode.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-400 mb-2">mining</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Use the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">mining</code> parameter (previously <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">enable</code>) to enable or disable block generation (mining) on the node.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>

      {/* Other tabs can be added here with similar structure */}
      <TabsContent value="ergo-node">
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Ergo Node Configuration
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Core node configuration parameters and settings for optimal Ergo node operation.
          </p>
        </div>

        {/* Configuration Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Node Card */}
          <Link 
            href="/Docs/developers/infrastructure/node/configuration/application-conf/node"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-orange-400" /> Node
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Core node configuration including state type, mining settings, transaction verification, and memory pool management.
            </p>
            <div className="flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-sm font-semibold">View configuration</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Cache Card */}
          <Link 
            href="/Docs/developers/infrastructure/node/configuration/application-conf/cache"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-blue-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" /> Cache
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Cache configuration for optimizing node performance and memory usage with extra indexing and state snapshots.
            </p>
            <div className="flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-sm font-semibold">View configuration</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Chain Card */}
          <Link 
            href="/Docs/developers/infrastructure/node/configuration/application-conf/chain"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-green-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-green-400" /> Chain
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Blockchain parameters and chain synchronization settings including block intervals and difficulty recalculation.
            </p>
            <div className="flex items-center text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-sm font-semibold">View configuration</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Wallet Card */}
          <Link 
            href="/Docs/developers/infrastructure/node/configuration/application-conf/wallet"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-purple-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-purple-400" /> Wallet
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Built-in wallet configuration and security settings for key management and transaction scanning.
            </p>
            <div className="flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-sm font-semibold">View configuration</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Voting Card */}
          <Link 
            href="/Docs/developers/infrastructure/node/configuration/application-conf/voting"
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-cyan-400/40 hover:bg-neutral-800/50 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Vote className="w-5 h-5 text-cyan-400" /> Voting
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Voting configuration and governance settings for node participation in network decisions.
            </p>
            <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-sm font-semibold">View configuration</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </TabsContent>

      <TabsContent value="mailbox">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Bounded Mailbox Configuration
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Configure bounded mailbox settings for actor message handling and system stability
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Overview Section */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-semibold text-blue-400">Overview</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">bounded-mailbox</code> configuration specifies the settings for the bounded mailbox type, which limits the maximum number of messages that can be stored in an actor's mailbox.
            </p>
          </div>

          {/* Mailbox Type Section */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-green-400">Mailbox Type</h3>
            </div>
            <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 mb-4">
              <code className="text-green-400 font-mono">mailbox-type = "akka.dispatch.NonBlockingBoundedMailbox"</code>
            </div>
            <p className="text-gray-300 text-sm">
              The <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">mailbox-type</code> setting determines the type of mailbox used. Here, the <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">NonBlockingBoundedMailbox</code> type is selected. This mailbox type provides a capacity-constrained, non-blocking, and thread-safe message queue for your actors.
            </p>
          </div>

          {/* Mailbox Capacity Section */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-purple-400">Mailbox Capacity</h3>
            </div>
            <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-4 mb-4">
              <code className="text-purple-400 font-mono">mailbox-capacity = 5000</code>
            </div>
            <p className="text-gray-300 text-sm">
              The <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">mailbox-capacity</code> setting specifies the maximum number of messages that the mailbox can hold. In this configuration, the capacity is set to 5000 messages. Once this limit is reached, the mailbox refuses to accept more messages until space becomes available.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-orange-400 mr-3" />
              <h3 className="text-xl font-semibold text-orange-400">System Benefits</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  <strong className="text-green-400">Load Control:</strong> Helps control the load on your actor system by limiting the number of unprocessed messages an actor can receive
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  <strong className="text-green-400">Overflow Prevention:</strong> Prevents actors from becoming overwhelmed by excessive message queues
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  <strong className="text-green-400">System Stability:</strong> Vital configuration for ensuring the resilience and stability of your system
                </p>
              </div>
            </div>
          </div>

          {/* Configuration Summary */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-cyan-400 mr-3" />
              <h3 className="text-xl font-semibold text-cyan-400">Configuration Summary</h3>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Mailbox Type:</span>
                  <code className="text-green-400">NonBlockingBoundedMailbox</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Capacity:</span>
                  <code className="text-green-400">5000 messages</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Thread Safety:</span>
                  <span className="text-green-400">✓ Guaranteed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Blocking:</span>
                  <span className="text-orange-400">Non-blocking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Info className="w-6 h-6 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-emerald-400">Best Practices</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  <strong className="text-yellow-400">Monitor Capacity:</strong> Regularly monitor mailbox capacity to ensure optimal performance
                </p>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  <strong className="text-yellow-400">Adjust Based on Load:</strong> Increase capacity for high-traffic actors, decrease for resource-constrained environments
                </p>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  <strong className="text-yellow-400">Error Handling:</strong> Implement proper error handling for when mailbox capacity is reached
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          {/* (удалено по просьбе пользователя) */}
        </div>
      </TabsContent>

      <TabsContent value="akka">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Akka Configuration Settings
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">akka</code> configuration settings manage how the application uses the Akka framework, which handles concurrency and actor-based programming in the system. Here, settings related to HTTP server properties and request parsing are covered.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* HTTP Server Settings Section */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Server className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-semibold text-blue-400">HTTP Server Settings</h2>
            </div>
            <p className="text-gray-300 mb-6">
              The HTTP server settings are located under the <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">http.server</code> category.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Request Timeout */}
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-400" /> Request Timeout
                </h3>
                <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4 mb-4">
                  <code className="text-orange-400 font-mono">request-timeout = 1 minute</code>
                </div>
                <p className="text-gray-300 text-sm">
                  The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">request-timeout</code> setting specifies the maximum duration the server will wait for a request to be completed before it times out. In this configuration, the timeout is set to 1 minute. This setting is crucial to prevent the system from waiting indefinitely for a response, which could impact performance or availability.
                </p>
              </div>

              {/* Maximum Connections */}
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Network className="w-5 h-5 text-green-400" /> Maximum Connections
                </h3>
                <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 mb-4">
                  <code className="text-green-400 font-mono">max-connections = 128</code>
                </div>
                <p className="text-gray-300 text-sm">
                  The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">max-connections</code> setting indicates the maximum number of connections the server can maintain concurrently. In this configuration, the limit is set to 128 connections. This ensures the server can handle multiple requests simultaneously without overloading its resources.
                </p>
              </div>
            </div>
          </div>

          {/* HTTP Request Parsing Settings Section */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-400">HTTP Request Parsing Settings</h2>
            </div>
            <p className="text-gray-300 mb-6">
              The HTTP request parsing settings are located under the <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">http.parsing</code> category.
            </p>

            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" /> Maximum URI Length
              </h3>
              <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-4 mb-4">
                <code className="text-purple-400 font-mono">max-uri-length = 8192</code>
              </div>
              <p className="text-gray-300 text-sm">
                The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">max-uri-length</code> setting determines the maximum length of the URI that the server will accept. In this configuration, the limit is set to 8192 characters. This setting is crucial to prevent potential buffer overflow attacks and keep the server secure.
              </p>
            </div>
          </div>

          {/* Full Code Snippet Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-cyan-400">Full Code Snippet</h2>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-cyan-400">
{`akka {
  http {
    server {
      request-timeout = 1 minute
      max-connections = 128
    }
    parsing {
      max-uri-length = 8192
    }
  }
}`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              In sum, the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">akka</code> configuration settings play an essential role in managing server performance, availability, and security. Adjust these settings carefully, considering both your application's requirements and potential risks.
            </p>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Info className="w-6 h-6 text-emerald-400 mr-3" />
              <h2 className="text-2xl font-semibold text-emerald-400">Configuration Summary</h2>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Request Timeout:</span>
                  <code className="text-green-400">1 minute</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max Connections:</span>
                  <code className="text-green-400">128</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max URI Length:</span>
                  <code className="text-green-400">8192 characters</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Security:</span>
                  <span className="text-green-400">✓ Buffer overflow protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="scorex">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Scorex Configuration
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Scorex framework settings inherited from the Scorex project, including network configuration, execution context, and REST API settings.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Network Settings Section */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-semibold text-blue-400">Network Settings</h2>
            </div>
            <p className="text-gray-300 mb-6">
              The <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">scorex.network</code> section allows you to configure settings related to the P2P network.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Network className="w-5 h-5 text-orange-400" /> declaredAddress
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  By using the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">declaredAddress</code> parameter, you can establish the external IP address and port number of the node. This is necessary for operating behind NAT in most cloud hosting scenarios where the machine doesn't directly interface with the external address.
                </p>
                <p className="text-gray-300 text-sm">
                  Format: <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">"[ip-address]:[port]"</code>
                </p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Server className="w-5 h-5 text-green-400" /> bindAddress
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  You can use the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">bindAddress</code> parameter to set the IP address of the local network interface where the Ergo Node will accept incoming connections.
                </p>
                <p className="text-gray-300 text-sm">
                  Default: <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">"0.0.0.0"</code>
                </p>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-orange-400 mb-3">About Internet Address Settings</h3>
              <p className="text-gray-300 text-sm mb-4">
                Internet Address settings follow the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">"&lt;ip-address&gt;:&lt;port&gt;"</code> format. Note that the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">"&lt;port&gt;"</code> component after the colon is crucial.
              </p>
              <p className="text-gray-300 text-sm mb-4">
                For the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">bindAddress</code> setting, the port component is used to establish the network port number to which other Ergo nodes will connect. Please ensure that this port is externally accessible; otherwise, your node will only establish outgoing connections to the P2P network.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">nodeName</h4>
                  <p className="text-gray-300 text-sm">Assign a visible name to your node for other participants of the P2P network. This name is transmitted during the initial handshake.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">knownPeers</h4>
                  <p className="text-gray-300 text-sm">Stores a list of bootstrap nodes that your node will connect to upon initialization.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-orange-400 mb-3">About Time Settings</h3>
              <p className="text-gray-300 text-sm mb-4">
                All time span parameters are set in milliseconds. However, you can use duration units to shorten their values. The supported units include:
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-neutral-700 rounded p-2 mb-2">
                    <code className="text-cyan-400">s, second, seconds</code>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-neutral-700 rounded p-2 mb-2">
                    <code className="text-cyan-400">m, minute, minutes</code>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-neutral-700 rounded p-2 mb-2">
                    <code className="text-cyan-400">h, hour, hours</code>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-neutral-700 rounded p-2 mb-2">
                    <code className="text-cyan-400">d, day, days</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-400 mb-2">maxConnections</h4>
                <p className="text-gray-300 text-sm">Define the maximum number of concurrent connections that the node can handle.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-400 mb-2">connectionTimeout</h4>
                <p className="text-gray-300 text-sm">Adjust the network communication timeout.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-400 mb-2">handshakeTimeout</h4>
                <p className="text-gray-300 text-sm">Set the time period to wait for a response during a handshake. If no response is received, the peer will be blacklisted.</p>
              </div>
            </div>

            <div className="mt-6 bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-3">UPnP Settings</h4>
              <p className="text-gray-300 text-sm">
                You can configure the UPnP settings using parameters that begin with <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">upnp</code>. These settings are typically useful only if you're running your Ergo node on a home network where the node can request your router to establish a tunnel. By default, this functionality is disabled. Use the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">upnpEnabled</code> parameter to enable it.
              </p>
            </div>
          </div>

          {/* Execution Context Section */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Cpu className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-400">Execution Context</h2>
            </div>
            <p className="text-gray-300 mb-6">
              The <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">executionContext</code> configuration section is used for tests. It specifies settings for the execution context that Scorex uses.
            </p>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-purple-400">
{`executionContext {
    type = Dispatcher
    executor = "thread-pool-executor"
    thread-pool-executor {
      fixed-pool-size = 16
    }
    throughput = 1
}`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">type</code> is set to "Dispatcher", and the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">executor</code> to "thread-pool-executor". The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">fixed-pool-size</code> under <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">thread-pool-executor</code> is set to 16, indicating that a maximum of 16 threads will be used for execution. The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">throughput</code> setting is set to 1.
            </p>
          </div>

          {/* Data and Log Directory Section */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-green-400 mr-3" />
              <h2 className="text-2xl font-semibold text-green-400">Data and Log Directory</h2>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-green-400">
{`dataDir = ${"user.home"}"/scorex"
logDir = ${"scorex.dataDir"}"/log"`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">dataDir</code> setting determines the directory where the Scorex data will be stored, in this case, it is set to a "scorex" directory in the user's home directory. The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">logDir</code> setting sets the location of the log files, which is a "log" directory within the Scorex data directory.
            </p>
          </div>

          {/* REST API Section */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-orange-400 mr-3" />
              <h2 className="text-2xl font-semibold text-orange-400">REST API</h2>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-orange-400">
{`restApi {
    bindAddress = "0.0.0.0:9052"
    apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
    corsAllowedOrigin = "*"
    timeout = 5s
    publicUrl = "https://example.com:80"
}`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">bindAddress</code> sets the network address to which the REST API binds. <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">apiKeyHash</code> is the hex-encoded Blake2b256 hash of the API key, in this case, it is the hash of the string "hello". <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">corsAllowedOrigin</code> is set to "*" to enable CORS support from all origins. <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">timeout</code> is the request processing timeout, and <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">publicUrl</code> is a publicly accessible URL if a node that exposes REST API in the firewall.
            </p>
          </div>

          {/* Network Configuration Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Network className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-cyan-400">Network Configuration</h2>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-cyan-400">
{`network {
    nodeName = "ergo-node"
    appVersion = 5.0.1
    agentName = "ergoref"
    bindAddress = "0.0.0.0:9022"
    magicBytes = [2, 2, 2, 2]
    upnpEnabled = no
    localOnly = false
    upnp-gateway-timeout = 7s
    upnp-discover-timeout = 3s
    addedMaxDelay = 0ms
    handshakeTimeout = 30s
    knownPeers = []
    getPeersInterval = 2m
    maxConnections = 30
    connectionTimeout = 1s
    peerEvictionInterval = 1h
}`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">network</code> configuration section contains numerous settings related to the P2P network, such as node name (<code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">nodeName</code>), application version (<code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">appVersion</code>), agent name (<code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">agentName</code>), network bind address (<code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">bindAddress</code>), magic bytes (<code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">magicBytes</code>), UPnP settings, and more.
            </p>
          </div>

          {/* NTP Configuration Section */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-emerald-400 mr-3" />
              <h2 className="text-2xl font-semibold text-emerald-400">NTP Configuration</h2>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-emerald-400">
{`ntp {
    server = "pool.ntp.org"
    updateEvery = 30m
    timeout = 30s
}`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">ntp</code> configuration section specifies the Network Time Protocol (NTP) server to use for time synchronization (<code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">server</code>), how frequently to update the time (<code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">updateEvery</code>), and the timeout for server responses (<code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">timeout</code>).
            </p>
          </div>

          {/* Reference Section */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-semibold text-yellow-400">Reference</h2>
            </div>
            <p className="text-gray-300 text-sm">
              Taken from <a href="https://github.com/ergoplatform/ergo/blob/49b9f0fe7d0eba1a5ff81e524353acdd9a3cc6dd/src/main/resources/application.conf#L354" className="text-blue-400 hover:text-blue-300">application.conf#L354</a>
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="crit-dispatch">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Critical-Dispatcher Configuration Settings
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">critical-dispatcher</code> is a dedicated actor dispatcher, utilized exclusively by the block candidate generator and <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">NodeViewHolder</code> actors within the system. This dispatcher is integral to maintaining critical tasks which require isolation from other non-critical activities.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Overview Section */}
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
              <h2 className="text-2xl font-semibold text-red-400">Critical Dispatcher Overview</h2>
            </div>
            <p className="text-gray-300 mb-6">
              The <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">critical-dispatcher</code> is a dedicated actor dispatcher, utilized exclusively by the block candidate generator and <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">NodeViewHolder</code> actors within the system. This dispatcher is integral to maintaining critical tasks which require isolation from other non-critical activities.
            </p>
            <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  <strong className="text-red-400">Critical Tasks:</strong> This dispatcher handles only the most critical operations that require dedicated resources and isolation from other system activities.
                </p>
              </div>
            </div>
          </div>

          {/* Dispatcher Type Section */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-semibold text-blue-400">Dispatcher Type</h2>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-blue-400">
{`type = Dispatcher`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              This configuration sets the type of the dispatcher. In this case, it is set as <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">Dispatcher</code>.
            </p>
          </div>

          {/* Executor Section */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Cpu className="w-6 h-6 text-green-400 mr-3" />
              <h2 className="text-2xl font-semibold text-green-400">Executor</h2>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-green-400">
{`executor = "thread-pool-executor"`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">executor</code> is the mechanism responsible for running tasks given to it by the dispatcher. Here, it is configured to use the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">"thread-pool-executor"</code>, which creates a pool of worker threads for executing tasks.
            </p>
          </div>

          {/* Thread-Pool-Executor Section */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-400">Thread-Pool-Executor</h2>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-400" /> fixed-pool-size
                </h3>
                <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-4 mb-4">
                  <code className="text-purple-400 font-mono">fixed-pool-size = 2</code>
                </div>
                <p className="text-gray-300 text-sm">
                  This configuration specifies the number of threads in the thread pool for the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">thread-pool-executor</code>. It is set to a fixed size of 2 in this configuration.
                </p>
              </div>
            </div>
          </div>

          {/* Throughput Section */}
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Gauge className="w-6 h-6 text-orange-400 mr-3" />
              <h2 className="text-2xl font-semibold text-orange-400">Throughput</h2>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-orange-400">
{`throughput = 1`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">throughput</code> is the maximum number of messages to be processed per actor before the thread is made available to other actors. This setting helps control how long a thread can be occupied by an actor. In this case, it is set to 1.
            </p>
          </div>

          {/* Complete Configuration Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-cyan-400">Complete Configuration Code</h2>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-cyan-400">
{`critical-dispatcher {
  type = Dispatcher
  executor = "thread-pool-executor"
  thread-pool-executor {
    fixed-pool-size = 2
  }
  throughput = 1
}`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              This configuration ensures that critical tasks handled by the block candidate generator and <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">NodeViewHolder</code> actors are allocated dedicated threads, thereby promoting efficient execution.
            </p>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Info className="w-6 h-6 text-emerald-400 mr-3" />
              <h2 className="text-2xl font-semibold text-emerald-400">Configuration Summary</h2>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Dispatcher Type:</span>
                  <code className="text-green-400">Dispatcher</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Executor:</span>
                  <code className="text-green-400">thread-pool-executor</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Thread Pool Size:</span>
                  <code className="text-green-400">2 threads</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Throughput:</span>
                  <code className="text-green-400">1 message per actor</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Critical Tasks:</span>
                  <span className="text-green-400">✓ Block candidate generator</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Critical Tasks:</span>
                  <span className="text-green-400">✓ NodeViewHolder actors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="api-dispatch">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            API Dispatcher Configuration
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">api-dispatcher</code> configuration controls the dispatcher responsible for managing API-related actors. In actor-based systems, the dispatcher is responsible for the execution of messages from the actor's mailbox.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Overview Section */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-semibold text-blue-400">API Dispatcher Overview</h2>
            </div>
            <p className="text-gray-300 mb-6">
              The <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">api-dispatcher</code> configuration controls the dispatcher responsible for managing API-related actors. In actor-based systems, the dispatcher is responsible for the execution of messages from the actor's mailbox.
            </p>
            <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  <strong className="text-blue-400">Actor-Based System:</strong> The dispatcher manages the execution of messages from actor mailboxes, ensuring efficient processing of API-related tasks.
                </p>
              </div>
            </div>
          </div>

          {/* Dispatcher Type Section */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-green-400 mr-3" />
              <h2 className="text-2xl font-semibold text-green-400">Dispatcher Type</h2>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-green-400">
{`type = Dispatcher`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">type</code> setting specifies the dispatcher type. In this configuration, <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">Dispatcher</code> is used, representing an event-based dispatcher.
            </p>
          </div>

          {/* Executor Type Section */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Cpu className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-400">Executor Type</h2>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-purple-400">
{`executor = "fork-join-executor"`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">executor</code> setting determines the type of execution service used. Here, the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">fork-join-executor</code> is utilized, which allows tasks to be split into smaller parts and executed concurrently, increasing efficiency.
            </p>
          </div>

          {/* Fork-Join Executor Section */}
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-orange-400 mr-3" />
              <h2 className="text-2xl font-semibold text-orange-400">Fork-Join Executor</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-orange-400" /> parallelism-min
                </h3>
                <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4 mb-4">
                  <code className="text-orange-400 font-mono">parallelism-min = 1</code>
                </div>
                <p className="text-gray-300 text-sm">
                  The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">parallelism-min</code> setting indicates the minimum number of threads to cap the factor-based parallelism number.
                </p>
              </div>

              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-yellow-400" /> parallelism-factor
                </h3>
                <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-4">
                  <code className="text-yellow-400 font-mono">parallelism-factor = 2.0</code>
                </div>
                <p className="text-gray-300 text-sm">
                  The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">parallelism-factor</code> setting is used to calculate the parallelism, i.e., the number of threads. It is calculated as the ceiling of the number of available processors multiplied by the factor.
                </p>
              </div>

              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-red-400" /> parallelism-max
                </h3>
                <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4 mb-4">
                  <code className="text-red-400 font-mono">parallelism-max = 2</code>
                </div>
                <p className="text-gray-300 text-sm">
                  The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">parallelism-max</code> setting determines the maximum number of threads to cap the factor-based parallelism number.
                </p>
              </div>
            </div>
          </div>

          {/* Throughput Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-cyan-400">Throughput</h2>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-cyan-400">
{`throughput = 4`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              The <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">throughput</code> setting defines the maximum number of messages processed per actor before the thread switches to the next actor. A lower value results in fairer, but potentially less efficient execution. Here, it's set to 4.
            </p>
          </div>

          {/* Full Code Snippet Section */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-emerald-400 mr-3" />
              <h2 className="text-2xl font-semibold text-emerald-400">Full Code Snippet</h2>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="text-emerald-400">
{`api-dispatcher {
  type = Dispatcher
  executor = "fork-join-executor"
  fork-join-executor {
    parallelism-min = 1
    parallelism-factor = 2.0
    parallelism-max = 2
  }
  throughput = 4
}`}
                </code>
              </pre>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              Overall, the <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">api-dispatcher</code> configuration plays a crucial role in controlling the efficiency and fairness of processing messages for API-related actors in your application.
            </p>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Info className="w-6 h-6 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-semibold text-yellow-400">Configuration Summary</h2>
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Dispatcher Type:</span>
                  <code className="text-green-400">Dispatcher</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Executor:</span>
                  <code className="text-green-400">fork-join-executor</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Min Parallelism:</span>
                  <code className="text-green-400">1 thread</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Parallelism Factor:</span>
                  <code className="text-green-400">2.0</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max Parallelism:</span>
                  <code className="text-green-400">2 threads</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Throughput:</span>
                  <code className="text-green-400">4 messages per actor</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Efficiency:</span>
                  <span className="text-green-400">✓ Concurrent task execution</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fairness:</span>
                  <span className="text-green-400">✓ Balanced thread switching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default function ApplicationConfPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplicationConfContent />
    </Suspense>
  );
} 