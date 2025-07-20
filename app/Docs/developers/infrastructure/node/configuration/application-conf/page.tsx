"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ApplicationConfPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "ergo-node", label: "ergo-node" },
    { id: "mailbox", label: "mailbox" },
    { id: "akka", label: "akka" },
    { id: "scorex", label: "scorex" },
    { id: "crit-dispatch", label: "crit-dispatch" },
    { id: "api-dispatch", label: "api-dispatch" },
  ];

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-7 mb-8">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="text-sm">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Application Configuration</h1>
              <p className="text-gray-300 text-lg">
                Comprehensive guide to Ergo node configuration files and parameters.
              </p>
            </div>
            <div className="prose prose-invert max-w-none">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">

                
                <h2 className="text-2xl font-bold mb-4">Overview of Node Configuration Files</h2>
                
                <p className="text-gray-300 mb-6">
                  Welcome to the node configuration files documentation. This section provides a comprehensive guide to the various configuration files crucial for setting up and managing an Ergo node. These files contain essential parameters for controlling and fine-tuning different aspects of the Ergo protocol, ranging from node operation and blockchain management to wallet functionality and voting mechanisms.
                </p>

                <p className="text-gray-300 mb-6">
                  Included in this section is the main configuration file, <a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf" className="text-blue-400 hover:text-blue-300">application.conf</a>, along with several others that each serve specific purposes in the node's overall functioning.
                </p>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf" className="text-blue-400 hover:text-blue-300 font-semibold">application.conf</a>: The principal configuration file containing the primary settings for the Ergo protocol.
                      <ul className="mt-2 ml-6 space-y-1 text-sm text-gray-400">
                        <li>• <a href="#" className="text-blue-400 hover:text-blue-300">node</a>: Configures node-specific parameters.</li>
                        <li>• <a href="#" className="text-blue-400 hover:text-blue-300">cache</a>: Handles cache-related settings.</li>
                        <li>• <a href="#" className="text-blue-400 hover:text-blue-300">chain</a>: Manages blockchain-related settings.</li>
                        <li>• <a href="#" className="text-blue-400 hover:text-blue-300">wallet</a>: Sets up wallet parameters.</li>
                        <li>• <a href="#" className="text-blue-400 hover:text-blue-300">voting</a>: Oversees voting-related configurations.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">bounded-mailbox</a>: Controls mailbox settings.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">akka</a>: Manages Akka settings for the actor system.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">scorex</a>: Handles settings related to the Scorex framework.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">critical-dispatcher</a>: Manages settings for critical dispatchers.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">api-dispatcher</a>: Sets up settings for API dispatchers.
                    </div>
                  </li>
                </ul>

                <p className="text-gray-300 mb-6">
                  This section also details the <a href="#" className="text-blue-400 hover:text-blue-300">testnet.conf</a> file, which is specifically designed for operating an Ergo node on the testnet environment.
                </p>

                <p className="text-gray-300 mb-6">
                  Feel free to navigate through each file's documentation for a deeper understanding of the node configuration process. Remember, properly managing these settings is crucial for the smooth operation of your Ergo node.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Ergo Configuration Sections</h3>
                
                <p className="text-gray-300 mb-6">
                  The root configuration section <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">ergo</code> encompasses essential application parameters and various other configuration subsections. There is also another root section, <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">scorex</code>, which contains parameters inherited from the <a href="https://github.com/ScorexFoundation/Scorex" className="text-blue-400 hover:text-blue-300">Scorex project</a>.
                </p>

                <p className="text-gray-300 mb-6">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">directory</code> parameter allows you to define a path to the base application directory. You can use environment variables to override configuration parameters. For instance, the base directory path is constructed relative to the user's <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">HOME</code> environment variable by default. Refrain from enclosing references to environment variables in quotation marks, as they will be treated as literal strings and not resolved.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Network Settings</h3>
                
                <p className="text-gray-300 mb-6">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">scorex.network</code> section allows you to configure settings related to the P2P network.
                </p>

                <p className="text-gray-300 mb-6">
                  Using the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">declaredAddress</code> parameter, you can establish the external IP address and port number that your node advertises to peers. This is necessary for operating behind NAT, common in cloud hosting scenarios where the machine doesn't directly interface with the external IP address. If left unspecified, your node will connect to the P2P network but won't accept incoming connections, meaning other nodes cannot connect to it. Other nodes use these settings to connect to your node. The format for this parameter is <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">"&lt;ip-address&gt;:&lt;port&gt;"</code>.
                </p>

                <p className="text-gray-300 mb-6">
                  You can use the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">bindAddress</code> parameter to set the IP address of the local network interface where the Ergo Node will listen for incoming P2P connections. By default, the node binds to <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">"0.0.0.0"</code>, indicating it will listen on all available network adapters.
                </p>

                <h4 className="text-lg font-bold mb-3 mt-6">About Internet Address Settings</h4>
                
                <p className="text-gray-300 mb-6">
                  Internet Address settings follow the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">"&lt;ip-address&gt;:&lt;port&gt;"</code> format. Note that the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">:&lt;port&gt;</code> component is crucial.
                </p>

                <p className="text-gray-300 mb-6">
                  For the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">bindAddress</code> setting, the port component establishes the network port number on which your node listens for incoming connections from other Ergo nodes. Please ensure this port is externally accessible (e.g., through firewall rules and port forwarding); otherwise, your node will only establish outgoing connections. If the specified port is already occupied by another application, your node will fail to start.
                </p>

                <p className="text-gray-300 mb-6">
                  You can use the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">nodeName</code> parameter to assign a visible name to your node for other participants in the P2P network. This name is transmitted during the initial handshake. In the default configuration, this parameter is commented out, resulting in a randomly generated node name.
                </p>

                <p className="text-gray-300 mb-6">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">knownPeers</code> parameter stores a list of bootstrap node addresses that your node will attempt to connect to upon initialization.
                </p>

                <h4 className="text-lg font-bold mb-3 mt-6">About Time Settings</h4>
                
                <p className="text-gray-300 mb-6">
                  All time span parameters are specified in milliseconds by default. However, you can use duration units for convenience. Supported units include:
                </p>

                <ul className="list-disc list-inside mb-6 text-gray-300 space-y-1">
                  <li>s, second, seconds</li>
                  <li>m, minute, minutes</li>
                  <li>h, hour, hours</li>
                  <li>d, day, days</li>
                </ul>

                <p className="text-gray-300 mb-6">
                  For usage examples, refer to the default configuration file linked above.
                </p>

                <p className="text-gray-300 mb-6">
                  Use the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">maxConnections</code> parameter to define the maximum number of concurrent P2P connections the node can handle.
                </p>

                <p className="text-gray-300 mb-6">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">connectionTimeout</code> parameter allows you to adjust the network communication timeout for P2P connections.
                </p>

                <p className="text-gray-300 mb-6">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">handshakeTimeout</code> parameter sets the maximum time to wait for a response during the P2P handshake process. If no response is received within this period, the peer will be blacklisted.
                </p>

                <p className="text-gray-300 mb-6">
                  You can configure UPnP (Universal Plug and Play) settings using parameters starting with <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">upnp</code>. These settings are typically useful only if you're running your Ergo node on a home network where the node can automatically request your router to establish port forwarding. By default, UPnP is disabled. Use the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">upnpEnabled</code> parameter to enable it.
                </p>

                <h4 className="text-lg font-bold mb-3 mt-6">Wallet Settings</h4>
                
                <p className="text-gray-300 mb-6">
                  In the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">ergo.wallet</code> section, you can configure the node's built-in wallet.
                </p>

                <p className="text-gray-300 mb-6">
                  Use the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">dlogSecretsNumber</code> parameter to specify the number of Schnorr secret keys (private keys corresponding to <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">ProveDlog</code> public keys) to generate or manage within the wallet.
                </p>

                <p className="text-gray-300 mb-6">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">scanningInterval</code> parameter allows you to set the rescanning interval for uncertain boxes (boxes whose spending status might be temporarily unknown during chain reorganizations).
                </p>

                <p className="text-gray-300 mb-6">
                  You can use the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">seed</code> parameter (a Base64 encoded string) to restore an existing wallet on a new node. If you don't have an existing wallet seed, comment out this parameter. When the node starts for the first time, it will generate a new wallet with a random seed, which will be displayed in the application log.
                </p>

                <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-6">
                  <h5 className="font-bold text-yellow-400 mb-2">Warning!</h5>
                  <p className="text-gray-300 text-sm">
                    The wallet file (<code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">wallet.dat</code> by default) is crucial. Ensure you store it in a safe, protected location and back it up regularly.
                  </p>
                  <p className="text-gray-300 text-sm mt-2">
                    It is strongly advised to remove the <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">seed</code> parameter from the configuration file after the wallet has been successfully initialized or restored. If an attacker gains access to your seed phrase, they can access all funds associated with that wallet across all derived addresses!
                  </p>
                </div>

                <h4 className="text-lg font-bold mb-3 mt-6">Blockchain Settings</h4>
                
                <p className="text-gray-300 mb-6">
                  In the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">ergo.chain</code> section, you can select or customize blockchain parameters (primarily relevant for custom networks or testnets).
                </p>

                <p className="text-gray-300 mb-6">
                  Use the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">blockInterval</code> parameter to set the target time interval between blocks (in seconds).
                </p>

                <p className="text-gray-300 mb-6">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">epochLength</code> parameter defines the length of an epoch (in blocks) used for difficulty recalculation and storage rent adjustments.
                </p>

                <p className="text-gray-300 mb-6">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">useLastEpochs</code> parameter specifies the number of most recent epochs used for difficulty recalculation.
                </p>

                <p className="text-gray-300 mb-6">
                  You can modify the Proof-of-Work algorithm or related parameters using the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">powScheme</code> section.
                </p>

                <h4 className="text-lg font-bold mb-3 mt-6">Node Settings</h4>
                
                <p className="text-gray-300 mb-6">
                  In the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">ergo.node</code> section, you can configure parameters related to the node's operational mode.
                </p>

                <p className="text-gray-300 mb-6">
                  Use the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">mining</code> parameter (previously <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">enable</code>) to enable or disable block generation (mining) on the node. By default, it's disabled (<code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">mining = false</code>).
                </p>

                <p className="text-gray-300 mb-6">
                  A node with <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">offlineGeneration = false</code> (default) will only attempt mining once it is fully synchronized and connected to the network. Setting <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">offlineGeneration = true</code> allows the node to mine blocks even when offline or not fully synced (useful for testing or private networks).
                </p>

                <p className="text-gray-300 mb-6">
                  You can adjust your node's mining delay after discovering a new block using the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">miningDelay</code> parameter (in milliseconds).
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">REST API Settings</h3>
                
                <p className="text-gray-300 mb-6">
                  In the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">scorex.rest-api</code> section, you can configure the node's REST API parameters.
                </p>

                <p className="text-gray-300 mb-6">
                  Use the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">bindAddress</code> parameter to select the network interface and port where the REST API will accept incoming connections (e.g., <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">"127.0.0.1:9053"</code>).
                </p>

                <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-6">
                  <h5 className="font-bold text-yellow-400 mb-2">Warning!</h5>
                  <p className="text-gray-300 text-sm">
                    For security reasons, avoid changing <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">bindAddress</code> from <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">"127.0.0.1"</code> (localhost) unless you fully understand the implications. Exposing the API directly to the internet is highly discouraged. For external access, use secure methods like <a href="http://nginx.org/en/docs/http/ngx_http_proxy_module.html" className="text-blue-400 hover:text-blue-300">Nginx's <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">proxy_pass</code> module</a> with HTTPS or <a href="http://blog.trackets.com/2014/05/17/ssh-tunnel-local-and-remote-port-forwarding-explained-with-examples.html" className="text-blue-400 hover:text-blue-300">SSH port forwarding</a>.
                  </p>
                </div>

                <p className="text-gray-300 mb-6">
                  Use the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">apiKeyHash</code> parameter to set the Blake2b hash of your chosen API key (password). This key protects access to sensitive API endpoints (like wallet operations). Note that you provide the <em>hash</em> in the configuration, but you must provide the <em>plain text API key</em> itself in the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">api_key</code> HTTP header when making REST calls. You can use tools like <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">blake2b-cli</code> or online calculators to generate the hash of your chosen API key.
                </p>

                <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-6">
                  <h5 className="font-bold text-yellow-400 mb-2">Warning!</h5>
                  <p className="text-gray-300 text-sm">
                    The API key is transmitted as plain text in the HTTP header and can be intercepted if the connection is not secured (e.g., using HTTPS or SSH tunneling). An attacker intercepting the key could potentially access wallet functions and transfer your funds! Always protect API access.
                  </p>
                </div>

                <p className="text-gray-300 mb-6">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">corsAllowedOrigin</code> parameter configures Cross-Origin Resource Sharing (CORS) support for the REST API. Setting it to <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">"*"</code> allows requests from any origin, which is necessary for tools like the Swagger UI and web-based wallets interacting directly with the node API. You can restrict it to specific origins for enhanced security if needed. Read more about CORS <a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing" className="text-blue-400 hover:text-blue-300">here</a>.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">API Performance, Timeouts, and Limits</h3>
                
                <p className="text-gray-300 mb-6">
                  Several configuration parameters can influence the performance and behavior of the node's REST API, especially under heavy load:
                </p>

                <ul className="space-y-4 mb-6 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong>Request Timeout:</strong> The <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">scorex.restApi.timeout</code> setting defines the maximum time the node will spend processing a single API request before timing out (default is often 5 seconds). If you experience timeouts during complex queries or high load, you might consider increasing this value, but be aware of the potential resource implications.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong>Concurrency Handling:</strong> The processing of API requests is managed by Akka dispatchers. The <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">api-dispatcher</code> settings control the number of threads (<code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">parallelism-min</code>, <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">parallelism-factor</code>, <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">parallelism-max</code>) and the processing throughput (<code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">throughput</code>) for handling concurrent API requests. Tuning these values might improve responsiveness under load but requires understanding Akka dispatcher configuration.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong>Rate Limiting:</strong> The Ergo node software does <strong>not</strong> include built-in application-level rate limiting for its API endpoints. If you need to protect your node from excessive API requests, you should implement rate limiting externally, for example, using a reverse proxy server like Nginx or HAProxy placed in front of the node.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong>JVM Memory:</strong> Overall node performance, including API responsiveness, can be affected by the allocated Java Virtual Machine (JVM) memory. Ensure the node has sufficient heap space allocated via the <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">-Xmx</code> flag (e.g., <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">-Xmx4G</code>) when starting the node. Insufficient memory can lead to increased garbage collection pauses and slower response times, potentially contributing to timeouts under load.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ergo-node" className="space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Ergo Node Configuration</h1>
              <p className="text-gray-300 text-lg">
                The main Ergo configuration section containing node, wallet, and blockchain settings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Node Card */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Node</h3>
                <p className="text-gray-300 mb-4">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">node{}</code> configuration section specifies general settings for the node view holder regime. It includes parameters for state type, extra index, block and transaction verification, mining configuration, memory pool management, and more.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">State Type</h4>
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-2">
                      <code className="text-orange-400">stateType = "utxo"</code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Sets the type of state the node maintains. Options: <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">utxo</code> or <code className="bg-neutral-800 px-1 py-0.5 rounded text-orange-400">digest</code>.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Mining</h4>
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-2">
                      <code className="text-orange-400">mining = false</code><br />
                      <code className="text-orange-400">maxTransactionCost = 1000000</code><br />
                      <code className="text-orange-400">useExternalMiner = true</code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Controls mining settings, transaction limits, and external miner usage.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Verification</h4>
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-2">
                      <code className="text-orange-400">verifyTransactions = true</code><br />
                      <code className="text-orange-400">blocksToKeep = -1</code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Transaction verification and block storage settings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cache Card */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Cache</h3>
                <p className="text-gray-300 mb-4">
                  Cache configuration settings for optimizing node performance and memory usage.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Extra Index Cache</h4>
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-2">
                      <code className="text-orange-400">extraIndex = false</code><br />
                      <code className="text-orange-400">extraCacheSize = 500</code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Controls transaction, box, and address indexing with memory cache settings.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">State Snapshots</h4>
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-2">
                      <code className="text-orange-400">keepVersions = 200</code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Number of state snapshot diffs to keep for rollback capability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Chain Card */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Chain</h3>
                <p className="text-gray-300 mb-4">
                  Blockchain parameters and chain synchronization settings.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Block Intervals</h4>
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-2">
                      <code className="text-orange-400">blockInterval = 120</code><br />
                      <code className="text-orange-400">epochLength = 1024</code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Target time between blocks and epoch length for difficulty recalculation.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Synchronization</h4>
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-2">
                      <code className="text-orange-400">acceptableChainUpdateDelay = 30m</code><br />
                      <code className="text-orange-400">headerChainDiff = 100</code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Chain update timing and header synchronization parameters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Wallet Card */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Wallet</h3>
                <p className="text-gray-300 mb-4">
                  Built-in wallet configuration and security settings.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Key Management</h4>
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-2">
                      <code className="text-orange-400">dlogSecretsNumber = 10</code><br />
                      <code className="text-orange-400">seed = null</code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Number of Schnorr secret keys and wallet seed configuration.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Scanning</h4>
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-2">
                      <code className="text-orange-400">scanningInterval = 1000ms</code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Interval for rescanning uncertain boxes during chain reorganizations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Voting Card */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Voting</h3>
                <p className="text-gray-300 mb-4">
                  Voting mechanism configuration and governance settings.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Voting Parameters</h4>
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-2">
                      <code className="text-orange-400">votingEnabled = false</code><br />
                      <code className="text-orange-400">votingInterval = 1000ms</code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Enable voting functionality and set voting intervals.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Governance</h4>
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-2">
                      <code className="text-orange-400">governanceAddress = null</code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Governance address for voting participation and proposal submission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mailbox" className="space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Mailbox Configuration</h1>
              <p className="text-gray-300 text-lg">
                Mailbox settings for controlling message queuing and processing.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Bounded Mailbox Configuration</h2>
              <p className="text-gray-300 mb-4">
                Mailbox settings for controlling message queuing and processing.
              </p>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Content for bounded-mailbox configuration tab will be added here.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="akka" className="space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Akka Configuration</h1>
              <p className="text-gray-300 text-lg">
                Akka framework settings for the actor system and concurrency management.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Akka Configuration</h2>
              <p className="text-gray-300 mb-4">
                Akka framework settings for the actor system and concurrency management.
              </p>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Content for akka configuration tab will be added here.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="scorex" className="space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Scorex Configuration</h1>
              <p className="text-gray-300 text-lg">
                Scorex framework settings inherited from the Scorex project.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Scorex Configuration</h2>
              <p className="text-gray-300 mb-4">
                Scorex framework settings inherited from the Scorex project.
              </p>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Content for scorex configuration tab will be added here.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="crit-dispatch" className="space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Critical Dispatcher Configuration</h1>
              <p className="text-gray-300 text-lg">
                Settings for critical system dispatchers and high-priority operations.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Critical Dispatcher Configuration</h2>
              <p className="text-gray-300 mb-4">
                Settings for critical system dispatchers and high-priority operations.
              </p>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Content for critical-dispatcher configuration tab will be added here.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="api-dispatch" className="space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">API Dispatcher Configuration</h1>
              <p className="text-gray-300 text-lg">
                Settings for API request processing and REST API performance tuning.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">API Dispatcher Configuration</h2>
              <p className="text-gray-300 mb-4">
                Settings for API request processing and REST API performance tuning.
              </p>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Content for api-dispatcher configuration tab will be added here.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
    </>
  );
} 