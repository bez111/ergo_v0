export const menuData = [
  {
    title: "Introduction",
    items: [
      { title: "Why Ergo", href: "/Docs/why-ergo" },
      {
        title: "Key Features",
        href: "/Docs/introduction/key-features",
        items: [
          {
            title: "eUTxO",
            href: "/Docs/introduction/eutxo",
            items: [
              { title: "UTxO vs Account", href: "/Docs/introduction/utxo-vs-account" },
              { title: "Atomic Swaps", href: "/Docs/introduction/atomic-swaps" },
              { title: "Ergo vs Cardano", href: "/Docs/introduction/ergo-vs-cardano" },
              { title: "UTXO State", href: "/Docs/introduction/utxo-state" },
            ],
          },
          {
            title: "NIPoPoWs",
            href: "/Docs/introduction/nipopows",
            items: [
              { title: "Light Clients", href: "/Docs/introduction/light-clients" },
              { title: "Light Miners", href: "/Docs/introduction/light-miners" },
              { title: "Sidechains", href: "/Docs/introduction/sidechains" },
            ],
          },
          { title: "Privacy", href: "/Docs/introduction/privacy" },
          { title: "Storage Rent", href: "/Docs/introduction/storage-rent" },
          { title: "Autolykos", href: "/Docs/introduction/autolykos" },
        ],
      },
      {
        title: "Research & Whitepapers",
        href: "/Docs/introduction/research-whitepapers"
      },
      {
        title: "Roadmap",
        items: [
          {
            title: "Scaling",
            items: [
              { title: "Layer 0", href: "/Docs/introduction/layer-0" },
              { title: "Layer 1", href: "/Docs/introduction/layer-1" },
              { title: "Layer 2", href: "/Docs/introduction/layer-2" },
              {
                title: "Discussions",
                items: [
                  { title: "Roadmaps", href: "/Docs/introduction/roadmaps" },
                  { title: "Transactions Per Second", href: "/Docs/introduction/tps" },
                  { title: "Atomic Composability", href: "/Docs/introduction/atomic-composability" },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Entities",
        items: [
          {
            title: "Ergo Foundation",
            items: [
              { title: "Scope", href: "/Docs/introduction/scope" },
              { title: "Treasury", href: "/Docs/introduction/treasury" },
              { title: "Votes", href: "/Docs/introduction/votes" },
              { title: "Future", href: "/Docs/introduction/future" },
            ],
          },
          { title: "DevDao", href: "/Docs/introduction/devdao" },
          { title: "Sigmanauts", href: "/Docs/introduction/sigmanauts" },
        ],
      },
      {
        title: "Events",
        items: [
          { title: "Events", href: "/Docs/introduction/events" },
          { title: "ERGOHACK", href: "/Docs/introduction/ergohack" },
          { title: "ErgoSummit", href: "/Docs/introduction/ergosummit" },
        ],
      },
      {
        title: "Contribute",
        items: [
          {
            title: "Developers",
            items: [
              { title: "Technical Guidelines", href: "/Docs/introduction/guidelines" },
              { title: "Bounties", href: "/Docs/introduction/bounties" },
              { title: "Grants", href: "/Docs/introduction/grants" },
              { title: "Roles", href: "/Docs/introduction/roles" },
            ],
          },
          { title: "Marketing", href: "/Docs/introduction/marketing" },
          { title: "Sigmanauts", href: "/Docs/introduction/sigmanauts-contrib" },
          { title: "Contribute to the docs!", href: "/Docs/introduction/contribute-docs" },
        ],
      },
      { title: "Wallets", href: "/Docs/introduction/wallets" },
      {
        title: "Resources",
        items: [
          { title: "Social Contract", href: "/Docs/introduction/social-contract" },
          { title: "Audit", href: "/Docs/introduction/audit" },
          { title: "The Howey Test", href: "/Docs/introduction/howey-test" },
          { title: "Privacy Guide", href: "/Docs/introduction/privacy-guide" },
          { title: "Glossary", href: "/Docs/introduction/glossary" },
          { title: "FAQ", href: "/Docs/introduction/faq" },
          { title: "Common Misconceptions", href: "/Docs/introduction/misconceptions" },
          { title: "A CBDC For All", href: "/Docs/introduction/cbdc" },
        ],
      },
    ],
  },
  {
    title: "Ecosystem",
    items: [
      { title: "Artificial Intelligence" },
      {
        title: "Infrastructure",
        items: [
          {
            title: "Rosen Bridge",
            items: [
              {
                title: "Watchers",
                items: [
                  { title: "Prerequisites" },
                  { title: "Ergo Watcher" },
                  { title: "Bitcoin Watcher" },
                ],
              },
              { title: "Guards" },
              { title: "Tokenomics" },
              { title: "Team" },
              {
                title: "Uses",
                items: [
                  { title: "rsERG-LP" },
                  { title: "Token Integration Guides" },
                ],
              },
            ],
          },
          {
            title: "Oracles",
            items: [
              { title: "Oracle Pools V2" },
              { title: "Mixicles" },
            ],
          },
          {
            title: "Sidechains",
            items: [
              {
                title: "Sub Blocks",
                items: [
                  { title: "Technical Details" },
                ],
              },
              { title: "Sigma Chains" },
              { title: "PoUW" },
            ],
          },
        ],
      },
      {
        title: "Financial",
        items: [
          {
            title: "Decentralized Exchanges",
            items: [
              { title: "Spectrum Finance" },
              { title: "Trade House" },
              { title: "Palmyra" },
              { title: "Crystal Pool" },
              { title: "Machina Finance" },
              { title: "Mew Finance" },
              {
                title: "P2P",
                items: [
                  { title: "Token Jay" },
                  { title: "Analog Ergo" },
                  { title: "Single Tx Swap" },
                ],
              },
            ],
          },
          {
            title: "Monetary Systems",
            items: [
              { title: "SigmaUSD" },
              { title: "ChainCash" },
              { title: "Gluon" },
              { title: "DexyGold" },
              {
                title: "Local Exchange Trading Systems",
                items: [
                  { title: "Basic Implementation" },
                  { title: "Trustless LETS" },
                ],
              },
            ],
          },
          {
            title: "Decentralized Finance",
            items: [
              {
                title: "Lending",
                items: [
                  { title: "duckpools" },
                  { title: "EXLE" },
                  { title: "SigmaFi" },
                ],
              },
              {
                title: "Derivatives and Synthetics",
                items: [
                  { title: "Hodlbox" },
                  { title: "HodlCoin" },
                  { title: "AuctionCoin" },
                  { title: "OptionCoin" },
                  { title: "OptionPools" },
                  { title: "SigmaO" },
                ],
              },
              {
                title: "Crowdfunding",
                items: [
                  { title: "ErgoRaffle" },
                  { title: "Sigma Subscriptions" },
                ],
              },
            ],
          },
          {
            title: "Degenerate Finance",
            items: [
              { title: "HodlCoin" },
              { title: "AuctionCoin" },
              { title: "Grand Gambit" },
              { title: "Hodlbox" },
              { title: "OptionCoin" },
              { title: "Obolflip" },
              { title: "Lotteries" },
              { title: "The Field" },
            ],
          },
        ],
      },
      {
        title: "NFTs",
        items: [
          { title: "Trade House" },
          { title: "SkyHarbor" },
          { title: "Lilium" },
        ],
      },
      {
        title: "Gaming",
        items: [
          { title: "BlitzTCG" },
          { title: "Cyberverse" },
        ],
      },
      {
        title: "Tooling",
        items: [
          { title: "Crux Finance" },
          { title: "ErgoNames" },
          {
            title: "Celaut",
            items: [
              { title: "Reputation System" },
            ],
          },
          { title: "Netnotes" },
          { title: "SigmaRand" },
          { title: "Moria Finance" },
          {
            title: "Trading",
            items: [
              { title: "Arbit" },
              {
                title: "Grid Trading",
                items: [
                  {
                    title: "Off the Grid",
                    items: [
                      { title: "Tutorial" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Applications",
        items: [
          { title: "Thz.FM" },
          { title: "TabbyPOS" },
          { title: "PandaV" },
          {
            title: "ZenGate Global",
            items: [
              { title: "Solaris Portal" },
              { title: "Cyberiad" },
            ],
          },
        ],
      },
      {
        title: "Privacy",
        items: [
          {
            title: "Mixing",
            items: [
              {
                title: "ErgoMixer",
                items: [
                  { title: "Identifiability" },
                  { title: "Best Practices" },
                  { title: "FAQ" },
                  { title: "Token" },
                  { title: "Install on Android" },
                ],
              },
              { title: "SigmaJoin" },
            ],
          },
          { title: "Stealth Addresses" },
        ],
      },
      {
        title: "DAOs",
        items: [
          { title: "Paideia" },
          { title: "ErgoPad" },
          { title: "The Field" },
          { title: "Thz.FM" },
        ],
      },
    ],
  },
  {
    title: "Miners",
    items: [
      {
        title: "Autolykos",
        items: [
          {
            title: "Algorithm",
            items: [
              {
                title: "Emission",
                items: [
                  { title: "EFYT" },
                ],
              },
              { title: "Difficulty Adjustment" },
              { title: "Solution Verification" },
              { title: "Technical Breakdown" },
            ],
          },
          {
            title: "Storage Rent",
            items: [
              { title: "Fees" },
              { title: "Tokens" },
              { title: "Spending" },
              { title: "State Growth" },
            ],
          },
          { title: "ASIC Resistance" },
          {
            title: "Resources",
            items: [
              { title: "CPU vs GPU" },
              {
                title: "EIPs",
                items: [
                  { title: "Emission Retargeting Soft-Fork" },
                  { title: "Tweaking Difficulty Adjustment Algorithm" },
                ],
              },
            ],
          },
        ],
      },
      { title: "Mining" },
      {
        title: "Start Mining",
        items: [
          { title: "Software" },
          { title: "Operating Systems" },
          { title: "Overclocking" },
          { title: "Pools" },
          {
            title: "Solo Mining",
            items: [
              { title: "Node Configuration" },
              { title: "Withdraw" },
              { title: "FAQ" },
            ],
          },
          {
            title: "Host a Pool",
            items: [
              { title: "Stratum" },
              {
                title: "MiningCore",
                items: [
                  { title: "Windows" },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Governance",
        items: [
          { title: "Voting" },
          {
            title: "Forking",
            items: [
              { title: "Soft Forks" },
              { title: "Velvet Forks" },
              { title: "Hard Forks" },
            ],
          },
        ],
      },
      { title: "Revenue" },
      {
        title: "Tooling",
        items: [
          { title: "GuapSwap" },
          {
            title: "Lithos",
            items: [
              { title: "Lithos" },
              { title: "SNISPs" },
            ],
          },
          { title: "CYTI" },
          { title: "Log-Space Mining" },
          {
            title: "Smartpools",
            items: [
              { title: "Subpooling" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Further Ideas",
    items: [
      { title: "Profit Sharing" },
      { title: "Email Client for Blocked Internet" },
      { title: "Flash Loans" },
      { title: "Prediction Markets" },
      { title: "Insurance" },
      { title: "Micro Credit" },
      { title: "Mutual Credit" },
      { title: "Bonding Curve" },
      {
        title: "Tokens",
        items: [
          { title: "ICOs" },
          { title: "Index Coins" },
          { title: "PoW Tokens" },
          { title: "Perpetual Tokens" },
          { title: "Buy Back Guarantees" },
        ],
      },
    ],
  },
  {
    title: "Standards",
    items: [
      { title: "Chat Bridge" },
      { title: "ErgoTipperBot" },
      { title: "KYA" },
      { title: "Community Guidelines" },
      { title: "Moderation Guide" },
      { title: "Analytics" },
    ],
  },
  {
    title: "Developers",
    items: [
      { title: "Developer Resources" },
      { title: "Students" },
      { title: "Bounties" },
      {
        title: "Tutorials",
        items: [
          { title: "Overview" },
          { title: "Fleet SDK Recipes" },
          {
            title: "Blockchain Indexing",
            items: [
              { title: "Overview" },
              { title: "Explorer APIs" },
              { title: "Node API Direct" },
              { title: "Custom Indexer" },
            ],
          },
          { title: "Hardware Wallet Integration" },
        ],
      },
      {
        title: "Data Model",
        items: [
          {
            title: "Box",
            items: [
              { title: "Registers" },
              { title: "Lifecycle" },
              {
                title: "Assets",
                items: [
                  {
                    title: "Tokens",
                    items: [
                      { title: "Perpetual Tokens" },
                      { title: "Burning a token" },
                    ],
                  },
                  {
                    title: "Non-Fungible Tokens",
                    items: [
                      { title: "NFTs" },
                      {
                        title: "Minting a NFT",
                        items: [
                          { title: "V1 v V2" },
                          { title: "Simple Example" },
                          { title: "On-chain NFTs" },
                        ],
                      },
                      { title: "Royalties" },
                    ],
                  },
                  { title: "Singletons" },
                  {
                    title: "Standards",
                    items: [
                      { title: "Asset Standard" },
                      { title: "Geniune Token Verification" },
                      { title: "Auction Contract" },
                      { title: "Artwork Contract" },
                    ],
                  },
                ],
              },
              { title: "Modelling" },
            ],
          },
          {
            title: "Addresses",
            items: [
              { title: "Types" },
              { title: "Validation" },
            ],
          },
          {
            title: "Transactions",
            items: [
              {
                title: "Composing Transactions",
                items: [
                  { title: "Sending A Chained Transaction" },
                  {
                    title: "Interacting with an Ergo Wallet",
                    items: [
                      { title: "Format" },
                      { title: "Merkle Tree" },
                      { title: "Signing" },
                      { title: "Signing Backend" },
                      { title: "Validation" },
                      { title: "Data Inputs" },
                      { title: "Fees" },
                      { title: "Unified Transactions" },
                    ],
                  },
                ],
              },
              {
                title: "Babel Fees",
                items: [
                  { title: "Babel Fees Plugin" },
                  { title: "How To" },
                  { title: "Implementation" },
                ],
              },
              {
                title: "Resources",
                items: [
                  { title: "ErgoTool" },
                  { title: "Model Transaction" },
                  { title: "Payments" },
                  {
                    title: "Standards",
                    items: [
                      {
                        title: "Babel Fees",
                        items: [
                          { title: "Babel Fees Plugin" },
                          { title: "How To" },
                          { title: "Implementation" },
                        ],
                      },
                      { title: "Proxy Contracts" },
                      { title: "ErgoPay Protocol" },
                      { title: "Payment Request URI" },
                      { title: "Just-In-Time Costing" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "Block",
            items: [
              { title: "Header" },
              { title: "Transactions" },
              { title: "ADProofs" },
              { title: "Extension Section" },
            ],
          },
          {
            title: "Discrete Logarithm",
          },
        ],
      },
      {
        title: "Infrastructure",
        items: [
          {
            title: "Node",
            items: [
              {
                title: "Setup",
                items: [
                  { title: "Manual" },
                  { title: "Build from Source" },
                  { title: "SNAPSHOT Dependencies" },
                  { title: "Troubleshooting" },
                  { title: "FAQ" },
                  { title: "Pi" },
                  {
                    title: "Android",
                    items: [
                      { title: "Overview" },
                      { title: "Termux (Digest)" },
                      { title: "Proot (RocksDB)" },
                    ],
                  },
                  { title: "Docker" },
                ],
              },
              {
                title: "Testnet",
                items: [
                  { title: "Full Sync" },
                  { title: "CPU Mining" },
                  { title: "Fork your own chain" },
                  { title: "Resources" },
                ],
              },
              {
                title: "Protocol",
                items: [
                  {
                    title: "P2P",
                    items: [
                      { title: "Handshaking" },
                      { title: "Network Messages" },
                      { title: "Peer Management" },
                      { title: "BlockP2P" },
                      {
                        title: "Modifiers",
                        items: [
                          { title: "Modifiers Exchange" },
                          { title: "Modifiers Processing" },
                          { title: "Modifiers Validation" },
                          { title: "Synchronisation" },
                        ],
                      },
                    ],
                  },
                  { title: "EIPs" },
                ],
              },
              {
                title: "Configuration",
                items: [
                  {
                    title: "Node Wallet",
                    items: [
                      { title: "Hierarchical keys" },
                      { title: "Wallet Setup" },
                    ],
                  },
                  {
                    title: "Swagger API",
                    items: [
                      { title: "OpenAPI Spec" },
                      { title: "Try it out!" },
                      { title: "Indexed Node API" },
                    ],
                  },
                  {
                    title: "Configuration Files",
                    items: [
                      {
                        title: "application.conf",
                        items: [
                          {
                            title: "ergo",
                            items: [
                              { title: "node" },
                              { title: "cache" },
                              { title: "chain" },
                              { title: "wallet" },
                              { title: "voting" },
                            ],
                          },
                          { title: "bounded-mailbox" },
                          { title: "akka" },
                          { title: "scorex" },
                          { title: "critical-dispatcher" },
                          { title: "api-dispatcher" },
                        ],
                      },
                      {
                        title: "testnet.conf",
                        items: [
                          { title: "devnet.conf" },
                        ],
                      },
                    ],
                  },
                  { title: "Tor" },
                ],
              },
              {
                title: "Modes of Operation",
                items: [
                  {
                    title: "Archival Full Node",
                    items: [{ title: "Technical Details" }],
                  },
                  {
                    title: "Pruned Full Node",
                    items: [{ title: "Technical Details" }],
                  },
                  {
                    title: "Light Full Node",
                    items: [
                      { title: "Digest State" },
                      { title: "blocksToKeep" },
                      { title: "Technical Details" },
                    ],
                  },
                  {
                    title: "Light SPV",
                    items: [
                      { title: "Simplified Payment Verification" },
                      { title: "Technical Details" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "Explorer",
            items: [
              { title: "Local Setup" },
              { title: "Pi Blockchain Explorer" },
              { title: "GraphQL" },
            ],
          },
          {
            title: "APIs",
            items: [
              { title: "API How-To" },
            ],
          },
          {
            title: "Off-Chain",
            items: [
              { title: "Overview" },
              {
                title: "Oracle-Core",
                items: [
                  { title: "Bootstrap an Oracle Pool" },
                ],
              },
              { title: "Off-Chain Bots" },
              { title: "Rust Utilities" },
              { title: "Plasma" },
            ],
          },
          {
            title: "Wallets",
            items: [
              { title: "Wallets" },
              {
                title: "Types",
                items: [
                  { title: "Satergo" },
                  { title: "Nautilus" },
                  {
                    title: "Minotaur",
                    items: [
                      { title: "Multi-Sig" },
                    ],
                  },
                  { title: "SAFEW" },
                  { title: "Ledger" },
                  { title: "Paper Wallet" },
                  { title: "Satergo Vault" },
                ],
              },
              {
                title: "Resources",
                items: [
                  { title: "Access Issues" },
                  { title: "MultiSig" },
                  {
                    title: "Standards",
                    items: [
                      { title: "UTXO-Set Scanning Wallet API" },
                      { title: "Deterministic Wallet Standard" },
                      { title: "Cold Wallet" },
                      { title: "EIP Standards Overview" },
                      { title: "EIP-0005" },
                    ],
                  },
                ],
              },
            ],
          },
          { title: "Integration Guide" },
        ],
      },
      {
        title: "Tooling",
        items: [
          {
            title: "Pathways",
            items: [
              {
                title: "Development Stack",
                items: [
                  { title: "Introduction" },
                  { title: "Starter Tutorial" },
                  { title: "Server" },
                  { title: "Browser" },
                  { title: "Desktop" },
                  {
                    title: "Mobile",
                    items: [
                      { title: "iOS" },
                      { title: "Android" },
                      { title: "Build Constraints" },
                    ],
                  },
                  { title: "Bundled dApps" },
                ],
              },
              {
                title: "Programming Languages",
                items: [
                  {
                    title: "JVM",
                    items: [
                      { title: "Scala" },
                      { title: "Java" },
                      { title: "Kotlin" },
                    ],
                  },
                  { title: "JavaScript" },
                  { title: "Rust" },
                  {
                    title: "Others",
                    items: [
                      { title: "Python" },
                      { title: "C#" },
                      { title: "Go" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "Frameworks",
            items: [
              {
                title: "AppKit",
                items: [
                  { title: "Tutorial" },
                  { title: "Interacting with a local Node" },
                  { title: "Gradle" },
                  { title: "Using Appkit from Python" },
                ],
              },
              {
                title: "SigmaRust",
                items: [
                  { title: "Constrained Environments" },
                ],
              },
              { title: "Fleet (JS)" },
              { title: "FleetSharp" },
              {
                title: "Others",
                items: [
                  { title: "Ergpy" },
                  { title: "RustKit" },
                  {
                    title: "Mosaik",
                    items: [
                      {
                        title: "Tutorial",
                        items: [
                          { title: "A simple UI" },
                          { title: "Processing data" },
                          { title: "ErgoPay" },
                          { title: "Web UI" },
                          { title: "Deployment" },
                          { title: "Example apps" },
                        ],
                      },
                      { title: "Mosaik (Old)" },
                    ],
                  },
                  { title: "JSON dApp Environment" },
                  {
                    title: "Headless dApp Framework",
                    items: [
                      { title: "Modules" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "Payments",
            items: [
              {
                title: "ErgoPay",
                items: [
                  { title: "ErgoPay" },
                  { title: "Tutorial" },
                ],
              },
              { title: "ErgoAuth" },
              { title: "dApp Connector" },
              {
                title: "Proxy Contracts",
                items: [
                  { title: "Assembler" },
                ],
              },
            ],
          },
          {
            title: "Libaries",
            items: [
              { title: "Plasma" },
              { title: "Scrypto" },
              { title: "EIP12-Types" },
              { title: "SigmaJS" },
              { title: "DeCo" },
            ],
          },
        ],
      },
      {
        title: "ErgoScript",
        items: [
          {
            title: "Sigma Language",
            items: [
              { title: "Core Concepts" },
              { title: "Simple Syntax" },
              { title: "Language Description" },
              { title: "Sigma Propositions" },
              { title: "SigmaBoolean" },
              { title: "The Blockchain context" },
              { title: "Accessing boxes and registers" },
              { title: "Global Functions" },
              { title: "Language Operations" },
              { title: "Sigma 6.0" },
              {
                title: "Interacting with an Ergo Wallet",
                items: [
                  { title: "Format" },
                  { title: "Merkle Tree" },
                  { title: "Signing" },
                  { title: "Signing Backend" },
                  { title: "Validation" },
                  { title: "Data Inputs" },
                  { title: "Fees" },
                  { title: "Unified Transactions" },
                ],
              },
              {
                title: "Examples",
                items: [
                  { title: "Public Contracts" },
                  { title: "Anyone Can Spend" },
                  { title: "No-one-Can Spend" },
                  { title: "Context Variables" },
                  { title: "Code-blocks" },
                  { title: "Public-keys" },
                  { title: "Functional Programming" },
                  { title: "Box Structure" },
                  { title: "Storing Data" },
                  { title: "Creating a simple P2S app" },
                ],
              },
            ],
          },
          {
            title: "Tooling",
            items: [
              {
                title: "Interpreters & Compilers",
                items: [
                  { title: "Compiler Phases" },
                  { title: "sigmastate-interpreter" },
                  {
                    title: "SigmaRust",
                    items: [
                      { title: "Constrained Environments" },
                    ],
                  },
                  { title: "ErgoScala" },
                  { title: "CLI Compiler" },
                  { title: "Rust vs Sigma" },
                ],
              },
              {
                title: "Playgrounds",
                items: [
                  { title: "Scastie" },
                  { title: "P2S Playground" },
                  { title: "Kiosk" },
                  { title: "ErgoPuppet" },
                ],
              },
              {
                title: "Debugging",
                items: [
                  { title: "Overview" },
                  { title: "Scala-Based" },
                  { title: "On-Chain Mechanisms" },
                  { title: "External Tools" },
                ],
              },
              { title: "FlowCards" },
            ],
          },
          {
            title: "ErgoTree",
            items: [
              { title: "Introduction" },
              { title: "As a Language" },
              { title: "Typing" },
              { title: "Evaluation" },
              { title: "Serialization" },
              { title: "Predefined Types" },
              { title: "Predefined Functions" },
              { title: "Encoding" },
              { title: "Script Validation" },
              { title: "Script Optimisation" },
              { title: "Templates" },
              { title: "ErgoScript vs ErgoTree" },
            ],
          },
          {
            title: "Features",
            items: [
              { title: "Data Inputs" },
              {
                title: "Multi-Stage Protocols",
                items: [
                  { title: "Transaction Chains" },
                  { title: "Transaction Trees" },
                  { title: "Transaction Graphs" },
                  { title: "Context Enrichment" },
                  { title: "Multi-Stage Transactions" },
                  {
                    title: "Examples",
                    items: [
                      { title: "Reversible Address" },
                      { title: "Rock/Paper/Scissors" },
                      { title: "ICO" },
                      { title: "MAST Example" },
                      { title: "FSM Example" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "Resources",
            items: [
              { title: "FAQ" },
              { title: "Reusable Functions" },
            ],
          },
        ],
      },
      {
        title: "Cryptographic",
        items: [
          {
            title: "Signature Schemes",
            items: [
              {
                title: "Sigma Protocols",
                items: [
                  {
                    title: "Schnorr",
                    items: [{ title: "Verifying Schnorr Signatures" }],
                  },
                  { title: "Diffie" },
                  {
                    title: "Other Signatures",
                    items: [
                      { title: "Ring Signatures" },
                      {
                        title: "Threshold Signatures",
                        items: [
                          { title: "3-out-of-5 Threshold Signature" },
                        ],
                      },
                      { title: "Distributed Signatures" },
                      { title: "Signature Scheme Internals" },
                      { title: "Improved Signatures" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "Zero-Knowledge Proofs",
            items: [
              { title: "Non-Interactive ZK" },
              { title: "ZeroJoin" },
            ],
          },
          {
            title: "Data Structures",
            items: [
              {
                title: "Merkle Tree",
                items: [
                  { title: "Format" },
                  { title: "Validation" },
                  { title: "Considerations" },
                  {
                    title: "Implementations",
                    items: [
                      { title: "Extension Block Merkle" },
                      { title: "Merkle Tree" },
                      {
                        title: "Merkle Batch Proofs",
                        items: [
                          { title: "Implementation" },
                          { title: "Testing" },
                        ],
                      },
                      { title: "Lightweight Client Proofs" },
                    ],
                  },
                ],
              },
              {
                title: "AVL Trees",
                items: [
                  { title: "Plasma" },
                ],
              },
              {
                title: "Proof of Proof-of-Work",
                items: [
                  { title: "Interlink Vectors" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]; 