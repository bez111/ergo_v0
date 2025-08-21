"use client";

import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Filter,
  HelpCircle,
  Lightbulb,
  Shield,
  Zap,
  Users,
  Settings,
  AlertTriangle,
  CheckCircle,
  BookOpen
} from "lucide-react";

// Категории FAQ из /learn/faq
const categories = [
  {
    id: "general",
    title: "General Questions",
    color: "from-blue-500 to-cyan-500",
    icon: HelpCircle,
  },
  {
    id: "technology",
    title: "Technology",
    color: "from-purple-500 to-pink-500",
    icon: Shield,
  },
  {
    id: "economics",
    title: "Economics",
    color: "from-green-500 to-emerald-500",
    icon: Zap,
  },
  {
    id: "ecosystem",
    title: "Ecosystem",
    color: "from-orange-500 to-red-500",
    icon: Users,
  },
  {
    id: "development",
    title: "Development",
    color: "from-indigo-500 to-blue-500",
    icon: Settings,
  },
  {
    id: "security",
    title: "Security",
    color: "from-red-500 to-pink-500",
    icon: AlertTriangle,
  },
];

// FAQ данные
const faqData = [
  // General Questions
  {
    category: "general",
    question: "What is Ergo?",
    answer: "Ergo is a next-generation smart contract platform that ensures the economic freedom of ordinary people through secure, accessible, and decentralized financial tools. It combines Bitcoin's security model with advanced smart contract capabilities.",
    priority: 1,
  },
  {
    category: "general",
    question: "Who created Ergo?",
    answer: "Ergo was founded by Alexander Chepurnoy (kushti) and Dmitry Meshkov, both former IOHK researchers who contributed to Cardano's development. The platform launched in 2019 with a fair distribution model.",
    priority: 1,
  },
  {
    category: "general",
    question: "What makes Ergo different from other blockchains?",
    answer: "Ergo combines Proof-of-Work consensus with advanced features like eUTXO model, Sigma Protocols for zero-knowledge proofs, storage rent for sustainability, and NiPoPoWs for light clients. It's designed to be survivable, self-amendable, and truly decentralized.",
    priority: 1,
  },
  {
    category: "general",
    question: "Is Ergo decentralized?",
    answer: "Yes, Ergo is fully decentralized with no pre-mine, ICO, or VC funding. The network is secured by miners worldwide, and development is community-driven through the Ergo Foundation and various independent developers.",
    priority: 2,
  },
  {
    category: "general",
    question: "What is the ERG token?",
    answer: "ERG is Ergo's native cryptocurrency used for transaction fees, storage rent, and as a store of value. It has a fixed maximum supply of 97.7 million ERG with a fair emission schedule over approximately 8 years.",
    priority: 1,
  },
  {
    category: "general",
    question: "How does Ergo ensure long-term sustainability?",
    answer: "Ergo implements Storage Rent to prevent blockchain bloat, has a fixed supply with no inflation, and will transition to fee-based mining rewards. The platform is designed to be self-sustaining without relying on external funding or continuous token issuance.",
    priority: 2,
  },
  {
    category: "general",
    question: "What is Ergo's vision for the future?",
    answer: "Ergo aims to create contractual money - a platform where ordinary people can access the same sophisticated financial tools as large institutions, but in a decentralized, trustless manner. The goal is to enable true peer-to-peer economic interactions without intermediaries.",
    priority: 2,
  },

  // Technology
  {
    category: "technology",
    question: "What is the eUTXO model?",
    answer: "The Extended UTXO (eUTXO) model combines Bitcoin's UTXO security with Ethereum's smart contract capabilities. It allows UTXOs to carry arbitrary data and complex scripts, enabling advanced DeFi applications while maintaining predictability and security.",
    priority: 1,
  },
  {
    category: "technology",
    question: "What are Sigma Protocols?",
    answer: "Sigma Protocols are efficient zero-knowledge proofs that enable privacy-preserving applications on Ergo. They allow users to prove statements about data without revealing the data itself, enabling features like mixer services and private transactions.",
    priority: 1,
  },
  {
    category: "technology",
    question: "What is Storage Rent?",
    answer: "Storage Rent is a small fee charged for keeping data on the blockchain. After 4 years of inactivity, a minimal fee (0.14 ERG per box) is charged. This ensures long-term sustainability by preventing blockchain bloat and incentivizing efficient use of storage.",
    priority: 1,
  },
  {
    category: "technology",
    question: "What is ErgoScript?",
    answer: "ErgoScript is Ergo's smart contract language based on Sigma Protocols. It's a powerful, flexible scripting language that enables complex DeFi applications, multi-signature wallets, and advanced cryptographic operations while maintaining security and efficiency.",
    priority: 2,
  },
  {
    category: "technology",
    question: "What are NIPoPoWs?",
    answer: "Non-Interactive Proofs of Proof-of-Work (NIPoPoWs) are succinct proofs that allow light clients to verify blockchain events with minimal data. This enables secure mobile wallets and cross-chain communication without downloading the entire blockchain.",
    priority: 2,
  },
  {
    category: "technology",
    question: "How does Ergo handle scalability?",
    answer: "Ergo addresses scalability through efficient UTXO model design, Layer 2 solutions like Plasma and state channels, NIPoPoWs for light clients, and potential sharding. The focus is on sustainable growth without compromising decentralization.",
    priority: 2,
  },
  {
    category: "technology",
    question: "What is Autolykos and why is it ASIC-resistant?",
    answer: "Autolykos v2 is Ergo's Proof-of-Work algorithm designed to be memory-hard and ASIC-resistant. It requires significant memory bandwidth, making it more suitable for GPUs than specialized ASIC hardware, thus promoting mining decentralization.",
    priority: 2,
  },
  {
    category: "technology",
    question: "How does Ergo achieve interoperability?",
    answer: "Ergo enables interoperability through NIPoPoWs for light client proofs, cross-chain bridges like Rosen Bridge, and sigma protocols for trustless verification. This allows secure communication and value transfer between different blockchain networks.",
    priority: 2,
  },
  {
    category: "technology",
    question: "What are Oracle Pools in Ergo?",
    answer: "Oracle Pools are decentralized data feeds that bring real-world information onto the blockchain. Multiple oracles contribute data, and the system uses cryptographic techniques to ensure data integrity and resistance to manipulation.",
    priority: 2,
  },

  // Economics
  {
    category: "economics",
    question: "What is Ergo's monetary policy?",
    answer: "Ergo has a fixed supply of 97,739,925 ERG with no additional inflation. The emission schedule spans approximately 8 years, with block rewards decreasing every 3 months. After emission ends, miners are incentivized through transaction fees and storage rent.",
    priority: 1,
  },
  {
    category: "economics",
    question: "How does mining work on Ergo?",
    answer: "Ergo uses Autolykos v2, an ASIC-resistant Proof-of-Work algorithm optimized for GPUs. Miners can join pools or mine solo, with block time of approximately 2 minutes and dynamic difficulty adjustment.",
    priority: 2,
  },
  {
    category: "economics",
    question: "What is the emission schedule?",
    answer: "Ergo's emission started with 75 ERG per block, decreasing by 3 ERG every 3 months. The emission will complete around 2027-2028, after which the network will be sustained by transaction fees and storage rent.",
    priority: 2,
  },
  {
    category: "economics",
    question: "Are there any pre-mined tokens?",
    answer: "No, Ergo had no pre-mine, ICO, or VC allocation. 4.43% of the total supply was allocated to the Ergo Foundation treasury to support development, released gradually over the emission period.",
    priority: 1,
  },
  {
    category: "economics",
    question: "How does Ergo compare to Bitcoin economically?",
    answer: "Like Bitcoin, Ergo has a fixed supply and uses Proof-of-Work consensus. However, Ergo adds Storage Rent for sustainability, has a shorter emission period (8 vs 140+ years), and includes advanced smart contract capabilities for more diverse economic applications.",
    priority: 2,
  },
  {
    category: "economics",
    question: "What happens after the emission period ends?",
    answer: "After emission ends around 2027-2028, miners will be incentivized through transaction fees and storage rent collection. The network is designed to remain economically viable and secure through these mechanisms, ensuring long-term sustainability.",
    priority: 2,
  },
  {
    category: "economics",
    question: "How does Storage Rent benefit the network?",
    answer: "Storage Rent prevents blockchain bloat, creates a sustainable fee market, incentivizes efficient UTXO management, and provides ongoing rewards for miners after emission ends. It ensures the network remains economically viable long-term.",
    priority: 2,
  },

  // Ecosystem
  {
    category: "ecosystem",
    question: "What DeFi applications are available on Ergo?",
    answer: "Ergo has a growing DeFi ecosystem including SigmaUSD (algorithmic stablecoin), Spectrum (DEX), ErgoMixer (privacy tool), Rosen Bridge (cross-chain bridge), and various lending, NFT, and gaming platforms.",
    priority: 1,
  },
  {
    category: "ecosystem",
    question: "What wallets support Ergo?",
    answer: "Popular Ergo wallets include Nautilus (browser extension), SAFEW (mobile), Satergo (desktop), and Minotaur (multi-platform). Hardware wallet support is available through Ledger integration.",
    priority: 1,
  },
  {
    category: "ecosystem",
    question: "Where can I buy ERG?",
    answer: "ERG is available on various exchanges including KuCoin, Gate.io, CoinEx, and decentralized exchanges like Spectrum. Always verify exchange legitimacy and consider self-custody for security.",
    priority: 1,
  },
  {
    category: "ecosystem",
    question: "What is the Ergo Foundation?",
    answer: "The Ergo Foundation is a non-profit entity that supports Ergo's development, adoption, and ecosystem growth. It manages development funds, coordinates research, and facilitates community initiatives.",
    priority: 2,
  },
  {
    category: "ecosystem",
    question: "How can I participate in the Ergo community?",
    answer: "Join the Ergo community through Discord, Telegram, Reddit (r/ergonauts), and the Ergo Forum. Participate in discussions, contribute to development, create content, or support ecosystem projects.",
    priority: 2,
  },
  {
    category: "ecosystem",
    question: "What is SigmaUSD?",
    answer: "SigmaUSD is Ergo's algorithmic stablecoin pegged to the US Dollar. It uses a unique crypto-backed reserve system with SigmaRSV (reserve token) to maintain stability without requiring traditional collateral like other stablecoins.",
    priority: 2,
  },
  {
    category: "ecosystem",
    question: "What is Spectrum DEX?",
    answer: "Spectrum is Ergo's decentralized exchange (DEX) that enables trustless token swaps, liquidity provision, and yield farming. It uses an innovative AMM model optimized for the eUTXO architecture.",
    priority: 2,
  },
  {
    category: "ecosystem",
    question: "What is ErgoMixer?",
    answer: "ErgoMixer is a non-interactive, non-custodial mixer that provides privacy for ERG transactions. It uses Sigma Protocols to break the link between input and output addresses while maintaining full decentralization.",
    priority: 2,
  },
  {
    category: "ecosystem",
    question: "What is Rosen Bridge?",
    answer: "Rosen Bridge is a cross-chain bridge that enables secure transfer of assets between Ergo and other blockchains like Bitcoin, Ethereum, and Cardano. It uses advanced cryptographic techniques and decentralized watchers for security.",
    priority: 2,
  },

  // Development
  {
    category: "development",
    question: "How can I develop on Ergo?",
    answer: "Start with the Ergo documentation, learn ErgoScript, and use development tools like Ergo AppKit, Ergo Playground, and Fleet SDK. The community provides tutorials, examples, and support for developers.",
    priority: 1,
  },
  {
    category: "development",
    question: "What programming languages can I use?",
    answer: "Smart contracts are written in ErgoScript. For dApp development, you can use JavaScript/TypeScript (Fleet SDK), Java/Scala (AppKit), Python, Rust, and other languages through various SDKs and libraries.",
    priority: 2,
  },
  {
    category: "development",
    question: "Are there developer grants available?",
    answer: "Yes, the Ergo Foundation offers grants for projects that contribute to the ecosystem. Additionally, there are hackathons, bounties, and community funding initiatives like the Good Whale Fund.",
    priority: 2,
  },
  {
    category: "development",
    question: "What tools are available for developers?",
    answer: "Ergo provides comprehensive developer tools including Ergo Node, Explorer, AppKit, Fleet SDK, Ergo Playground, Oracle Pools framework, and various testing and deployment utilities.",
    priority: 2,
  },
  {
    category: "development",
    question: "How do I write my first smart contract?",
    answer: "Start with the Ergo Playground to experiment with ErgoScript. Learn the eUTXO model, understand box concepts, and use the documentation and tutorials. Begin with simple contracts like multi-signature wallets before moving to complex DeFi applications.",
    priority: 2,
  },
  {
    category: "development",
    question: "What is the Ergo Playground?",
    answer: "The Ergo Playground is a web-based IDE for writing, testing, and deploying ErgoScript contracts. It provides a user-friendly interface for learning ErgoScript and experimenting with smart contract development without setting up a local environment.",
    priority: 2,
  },
  {
    category: "development",
    question: "How does testing work on Ergo?",
    answer: "Ergo provides robust testing frameworks including unit testing for ErgoScript contracts, integration testing with AppKit, and simulation environments. The eUTXO model makes contracts more predictable and easier to test than account-based systems.",
    priority: 2,
  },

  // Security
  {
    category: "security",
    question: "How secure is Ergo?",
    answer: "Ergo inherits Bitcoin's battle-tested PoW security model while adding advanced cryptographic features. The eUTXO model provides predictable execution, and formal verification ensures contract security. Regular security audits and conservative design choices prioritize safety.",
    priority: 1,
  },
  {
    category: "security",
    question: "Is Ergo quantum-resistant?",
    answer: "While not fully quantum-resistant yet, Ergo's architecture allows for crypto-agility. The platform can adapt to post-quantum cryptography when needed, and research is ongoing for quantum-resistant implementations.",
    priority: 2,
  },
  {
    category: "security",
    question: "How does Ergo prevent 51% attacks?",
    answer: "Ergo uses ASIC-resistant mining to maintain decentralization, has a strong global mining community, implements NIPoPoWs for additional security layers, and benefits from the security of the Proof-of-Work consensus mechanism.",
    priority: 2,
  },
  {
    category: "security",
    question: "What about smart contract security?",
    answer: "ErgoScript's design prioritizes security with formal verification capabilities, predictable gas costs through the eUTXO model, built-in safety features, and extensive testing tools. The community conducts regular audits of major protocols.",
    priority: 2,
  },
  {
    category: "security",
    question: "How does Ergo handle private keys?",
    answer: "Ergo wallets use standard cryptographic practices for private key generation and management. The platform supports hardware wallets, multi-signature schemes, and advanced cryptographic features like threshold signatures through Sigma Protocols.",
    priority: 2,
  },
  {
    category: "security",
    question: "What is the security model of Storage Rent?",
    answer: "Storage Rent is implemented at the protocol level with strict rules. It only applies to old, inactive UTXOs (4+ years), uses minimal fees, and includes safeguards to prevent accidental loss. The system is designed to be predictable and fair.",
    priority: 2,
  },
  {
    category: "security",
    question: "How are cross-chain bridges secured?",
    answer: "Ergo's cross-chain bridges like Rosen Bridge use multiple security mechanisms including decentralized watchers, cryptographic proofs, economic incentives, and fraud detection. The design minimizes trust assumptions and provides multiple layers of protection.",
    priority: 2,
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [showAllCategories, setShowAllCategories] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter FAQs based on search and category
  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch = searchTerm
      ? faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    const matchesCategory = selectedCategory
      ? faq.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  // Group FAQs by category
  const groupedFAQs = categories.map(category => ({
    ...category,
    faqs: filteredFAQs.filter(faq => faq.category === category.id)
  })).filter(category => category.faqs.length > 0);

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setShowAllCategories(false);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "/" && e.ctrlKey) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setSearchTerm("");
        setSelectedCategory(null);
        setShowAllCategories(true);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="relative">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pb-12 relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Find answers to common questions about Ergo's technology, ecosystem, and development
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search questions... (Ctrl + /)"
                  className="w-full pl-12 pr-4 py-4 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors text-lg"
                />
                {searchTerm && (
            <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
                    ✕
            </button>
                )}
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                variant={showAllCategories ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(null);
                  setShowAllCategories(true);
                }}
                className={`${
                  showAllCategories 
                    ? "bg-orange-500 text-black hover:bg-orange-600" 
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 border-neutral-700"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                All Categories
              </Button>
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                return (
                  <Button
                    key={category.id}
                    variant={isActive ? "default" : "outline"}
                    onClick={() => handleCategorySelect(category.id)}
                    className={`${
                      isActive 
                        ? "bg-orange-500 text-black hover:bg-orange-600" 
                        : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 border-neutral-700"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.title}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="pb-20">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No questions found matching your search.
              </p>
            </div>
          ) : showAllCategories && !searchTerm ? (
            // Group by category view
            <div className="space-y-12">
              {groupedFAQs.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.id}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {category.title}
                      </h2>
                      <span className="text-gray-500 text-sm">
                        ({category.faqs.length} questions)
                      </span>
                    </div>
                    <div className="space-y-4">
                      {category.faqs.map((faq, index) => {
                        const globalIndex = faqData.indexOf(faq);
                        const isExpanded = expandedItems.has(globalIndex);
                        return (
                          <Card
                            key={globalIndex}
                            className="bg-neutral-900 border-neutral-700 hover:border-neutral-600 transition-all duration-200"
                          >
                            <CardHeader
                              className="cursor-pointer"
                              onClick={() => toggleExpanded(globalIndex)}
                            >
                              <div className="flex items-start justify-between">
                                <CardTitle className="text-lg font-medium text-gray-200 pr-4">
                                  {faq.question}
                                </CardTitle>
                                                              <div className="flex items-center gap-2 flex-shrink-0">
                                {isExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                              </div>
                              </div>
                            </CardHeader>
                            {isExpanded && (
                              <CardContent>
                                <p className="text-gray-400 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </CardContent>
                            )}
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
                  </div>
                ) : (
            // List view
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => {
                const globalIndex = faqData.indexOf(faq);
                const isExpanded = expandedItems.has(globalIndex);
                const category = categories.find(c => c.id === faq.category);
                const Icon = category?.icon || HelpCircle;
                
                return (
                  <Card
                    key={globalIndex}
                    className="bg-neutral-900 border-neutral-700 hover:border-neutral-600 transition-all duration-200"
                  >
                    <CardHeader
                      className="cursor-pointer"
                      onClick={() => toggleExpanded(globalIndex)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-gray-500" />
                            <Badge variant="outline" className="text-xs border-neutral-700 text-gray-500">
                              {category?.title}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg font-medium text-gray-200">
                            {faq.question}
                          </CardTitle>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </div>
                    </CardHeader>
                    {isExpanded && (
                      <CardContent>
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    )}
                  </Card>
        );
      })}
            </div>
          )}
        </section>

        {/* Help Section */}
        <section className="py-12 border-t border-neutral-800">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-8">
              Can't find what you're looking for? Our community is here to help.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                className="bg-orange-500 text-black hover:bg-orange-600"
                onClick={() => window.open("https://discord.gg/ergo", "_blank")}
              >
                <Users className="w-4 h-4 mr-2" />
                Join Discord
              </Button>
              <Button
                variant="outline"
                className="border-neutral-700 text-gray-300 hover:bg-neutral-800"
                onClick={() => window.open("https://www.ergoforum.org/", "_blank")}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Visit Forum
              </Button>
    </div>
    </div>
        </section>
      </div>
    </div>
  );
} 