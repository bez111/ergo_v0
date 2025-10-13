"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronRight,
  Code,
  Shield,
  Cpu,
  Database,
  Network,
  Lock,
  Zap,
  Layers,
  GitBranch,
  Coins,
  Activity,
  Eye,
  X,
  Info,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface TechnologyNode {
  id: string;
  name: string;
  description: string;
  category: "core" | "consensus" | "features" | "infrastructure";
  position: { x: number; y: number };
  icon: React.ElementType;
  color: string;
  connections: string[];
  details?: string[];
}

const technologies: TechnologyNode[] = [
  {
    id: "ergoscript",
    name: "ErgoScript",
    description: "Powerful smart contract language",
    category: "core",
    position: { x: 50, y: 30 },
    icon: Code,
    color: "from-orange-500/20 to-orange-600/20",
    connections: ["sigma-protocols", "eutxo", "nipopows"],
    details: [
      "Turing-complete smart contracts",
      "Formal verification",
      "Zero-knowledge proofs",
      "Type-safe execution"
    ]
  },
  {
    id: "autolykos",
    name: "Autolykos",
    description: "ASIC-resistant PoW consensus",
    category: "consensus",
    position: { x: 20, y: 50 },
    icon: Shield,
    color: "from-blue-500/20 to-blue-600/20",
    connections: ["storage-rent", "adaptive-emission"],
    details: [
      "GPU-friendly mining",
      "Memory-hard algorithm",
      "Energy efficient",
      "Fair distribution"
    ]
  },
  {
    id: "eutxo",
    name: "eUTXO Model",
    description: "Extended UTXO architecture",
    category: "core",
    position: { x: 50, y: 50 },
    icon: Database,
    color: "from-purple-500/20 to-purple-600/20",
    connections: ["ergoscript", "native-tokens", "oracle-pools"],
    details: [
      "Parallelizable transactions",
      "Predictable fees",
      "Enhanced privacy",
      "Composable contracts"
    ]
  },
  {
    id: "storage-rent",
    name: "Storage Rent",
    description: "Sustainable blockchain economics",
    category: "features",
    position: { x: 80, y: 30 },
    icon: Coins,
    color: "from-green-500/20 to-green-600/20",
    connections: ["autolykos", "adaptive-emission"],
    details: [
      "Prevents state bloat",
      "Incentivizes efficiency",
      "Long-term sustainability",
      "Fair resource pricing"
    ]
  },
  {
    id: "sigma-protocols",
    name: "Sigma Protocols",
    description: "Advanced cryptographic proofs",
    category: "core",
    position: { x: 20, y: 70 },
    icon: Lock,
    color: "from-red-500/20 to-red-600/20",
    connections: ["ergoscript", "oracle-pools"],
    details: [
      "Zero-knowledge proofs",
      "Multi-signature schemes",
      "Ring signatures",
      "Threshold signatures"
    ]
  },
  {
    id: "nipopows",
    name: "NIPoPoWs",
    description: "Ultra-light clients",
    category: "infrastructure",
    position: { x: 50, y: 70 },
    icon: Zap,
    color: "from-yellow-500/20 to-yellow-600/20",
    connections: ["ergoscript", "subblocks"],
    details: [
      "Logarithmic verification",
      "Cross-chain bridges",
      "Mobile-friendly",
      "Trustless sidechains"
    ]
  },
  {
    id: "subblocks",
    name: "Subblocks",
    description: "Enhanced transaction throughput",
    category: "infrastructure",
    position: { x: 80, y: 70 },
    icon: Layers,
    color: "from-indigo-500/20 to-indigo-600/20",
    connections: ["nipopows", "oracle-pools"],
    details: [
      "Increased TPS",
      "Lower latency",
      "Better scalability",
      "Efficient propagation"
    ]
  },
  {
    id: "native-tokens",
    name: "Native Assets",
    description: "First-class token support",
    category: "features",
    position: { x: 20, y: 30 },
    icon: Coins,
    color: "from-teal-500/20 to-teal-600/20",
    connections: ["eutxo", "oracle-pools"],
    details: [
      "No smart contract needed",
      "Lower fees",
      "Native DEX support",
      "Atomic swaps"
    ]
  },
  {
    id: "oracle-pools",
    name: "Oracle Pools",
    description: "Decentralized data feeds",
    category: "infrastructure",
    position: { x: 80, y: 50 },
    icon: Network,
    color: "from-cyan-500/20 to-cyan-600/20",
    connections: ["eutxo", "sigma-protocols", "native-tokens", "subblocks"],
    details: [
      "Consensus-based oracles",
      "Resistant to manipulation",
      "Real-world data",
      "Decentralized governance"
    ]
  },
  {
    id: "velvet-forks",
    name: "Velvet Forks",
    description: "Soft-fork innovation",
    category: "infrastructure",
    position: { x: 35, y: 85 },
    icon: GitBranch,
    color: "from-pink-500/20 to-pink-600/20",
    connections: ["adaptive-emission"],
    details: [
      "Backwards compatible",
      "Smooth upgrades",
      "Optional features",
      "Gradual adoption"
    ]
  },
  {
    id: "adaptive-emission",
    name: "Adaptive Emission",
    description: "Dynamic monetary policy",
    category: "features",
    position: { x: 65, y: 85 },
    icon: Activity,
    color: "from-amber-500/20 to-amber-600/20",
    connections: ["autolykos", "storage-rent", "velvet-forks"],
    details: [
      "Community governance",
      "Economic flexibility",
      "Parameter tuning",
      "No hard forks"
    ]
  }
];

export default function TechnologyMapClient() {
  const t = useTranslations("technology.map");
  const [selectedTech, setSelectedTech] = useState<TechnologyNode | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        setDimensions({
          width: canvasRef.current.offsetWidth,
          height: canvasRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getNodePosition = (node: TechnologyNode) => ({
    x: (node.position.x / 100) * dimensions.width,
    y: (node.position.y / 100) * dimensions.height
  });

  const categories = [
    { id: "all", name: t("categories.all"), icon: Sparkles },
    { id: "core", name: t("categories.core"), icon: Code },
    { id: "consensus", name: t("categories.consensus"), icon: Shield },
    { id: "features", name: t("categories.features"), icon: Coins },
    { id: "infrastructure", name: t("categories.infrastructure"), icon: Network }
  ];

  const filteredTechnologies = activeCategory && activeCategory !== "all"
    ? technologies.filter(tech => tech.category === activeCategory)
    : technologies;

  const renderConnections = () => {
    return technologies.map(tech => {
      const fromPos = getNodePosition(tech);
      
      return tech.connections.map(connId => {
        const connTech = technologies.find(t => t.id === connId);
        if (!connTech) return null;
        
        const toPos = getNodePosition(connTech);
        const isHighlighted = hoveredTech === tech.id || hoveredTech === connId;
        const isVisible = !activeCategory || activeCategory === "all" || 
          (tech.category === activeCategory || connTech.category === activeCategory);
        
        return (
          <motion.line
            key={`${tech.id}-${connId}`}
            x1={fromPos.x}
            y1={fromPos.y}
            x2={toPos.x}
            y2={toPos.y}
            stroke={isHighlighted ? "#f97316" : "#525252"}
            strokeWidth={isHighlighted ? 2 : 1}
            strokeDasharray={isHighlighted ? "0" : "5,5"}
            opacity={isVisible ? (isHighlighted ? 1 : 0.3) : 0}
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: isVisible ? (isHighlighted ? 1 : 0.3) : 0
            }}
            transition={{ duration: 1 }}
          />
        );
      });
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          >
            {t("title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                  className={`
                    ${activeCategory === cat.id 
                      ? "bg-orange-500 hover:bg-orange-600 text-black" 
                      : "border-neutral-700 text-neutral-300 hover:border-orange-500/50 hover:text-orange-400"
                    }
                  `}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {cat.name}
                </Button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="relative h-[70vh] max-w-7xl mx-auto px-4">
        <div ref={canvasRef} className="relative w-full h-full">
          {/* Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {renderConnections()}
          </svg>

          {/* Technology Nodes */}
          {filteredTechnologies.map(tech => {
            const Icon = tech.icon;
            const pos = getNodePosition(tech);
            const isConnected = hoveredTech && 
              (tech.id === hoveredTech || tech.connections.includes(hoveredTech) ||
               technologies.find(t => t.id === hoveredTech)?.connections.includes(tech.id));

            return (
              <motion.div
                key={tech.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: hoveredTech === tech.id ? 1.2 : 1,
                  opacity: 1,
                  x: pos.x - 60,
                  y: pos.y - 60
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="absolute w-32 h-32"
                onMouseEnter={() => setHoveredTech(tech.id)}
                onMouseLeave={() => setHoveredTech(null)}
                onClick={() => setSelectedTech(tech)}
              >
                <div className={`
                  relative w-full h-full rounded-2xl cursor-pointer
                  bg-gradient-to-br ${tech.color} backdrop-blur-sm
                  border border-white/10 hover:border-orange-500/50
                  transition-all duration-300 group
                  ${isConnected ? "ring-2 ring-orange-500/50" : ""}
                `}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                    <Icon className={`
                      w-8 h-8 mb-2 transition-all duration-300
                      ${hoveredTech === tech.id ? "text-orange-400" : "text-white/80"}
                    `} />
                    <span className="text-xs font-semibold text-center text-white/90">
                      {tech.name}
                    </span>
                  </div>
                  
                  {/* Hover Info */}
                  <div className={`
                    absolute -bottom-20 left-1/2 -translate-x-1/2 w-48
                    bg-black/90 backdrop-blur-sm rounded-lg p-3
                    border border-orange-500/20 pointer-events-none
                    transition-all duration-300
                    ${hoveredTech === tech.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                  `}>
                    <p className="text-xs text-neutral-300 text-center">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto px-4 py-8"
      >
        <Card className="bg-black/40 backdrop-blur-sm border-neutral-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Info className="w-5 h-5 text-orange-400" />
              {t("legend.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-orange-500/20 to-orange-600/20" />
                <span className="text-neutral-400">{t("legend.core")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-500/20 to-blue-600/20" />
                <span className="text-neutral-400">{t("legend.consensus")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-green-500/20 to-green-600/20" />
                <span className="text-neutral-400">{t("legend.features")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-purple-500/20 to-purple-600/20" />
                <span className="text-neutral-400">{t("legend.infrastructure")}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <svg width="40" height="2">
                  <line x1="0" y1="1" x2="40" y2="1" stroke="#f97316" strokeWidth="2" />
                </svg>
                <span className="text-neutral-400">{t("legend.directConnection")}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="40" height="2">
                  <line x1="0" y1="1" x2="40" y2="1" stroke="#525252" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
                <span className="text-neutral-400">{t("legend.relation")}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-neutral-900 to-black rounded-2xl p-8 max-w-2xl w-full border border-orange-500/20"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`
                    w-16 h-16 rounded-xl bg-gradient-to-br ${selectedTech.color}
                    flex items-center justify-center
                  `}>
                    <selectedTech.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedTech.name}</h3>
                    <p className="text-neutral-400">{selectedTech.description}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedTech(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {selectedTech.details && (
                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-orange-400">{t("details.keyFeatures")}</h4>
                  <ul className="space-y-2">
                    {selectedTech.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-neutral-300">
                        <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-3 mb-6">
                <h4 className="text-lg font-semibold text-orange-400">{t("details.connections")}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTech.connections.map(connId => {
                    const connTech = technologies.find(t => t.id === connId);
                    if (!connTech) return null;
                    const ConnIcon = connTech.icon;
                    
                    return (
                      <div
                        key={connId}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                      >
                        <ConnIcon className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-neutral-300">{connTech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  onClick={() => window.location.href = `/technology/${selectedTech.id}`}
                >
                  {t("details.learnMore")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-neutral-700 text-neutral-300 hover:border-orange-500/50 hover:text-orange-400"
                  onClick={() => setSelectedTech(null)}
                >
                  {t("details.close")}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
