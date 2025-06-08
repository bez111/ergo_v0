"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  TrendingUp,
  Coins,
  PiggyBank,
  Shield,
  Calculator,
  ExternalLink,
  AlertTriangle,
  Info,
  BarChart3,
  Lock,
  Dice6,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
} from "lucide-react"

// Binary rain background component
const BinaryRainBackground = () => {
  const binaryChars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    char: Math.random() > 0.5 ? "1" : "0",
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
    size: Math.random() * 8 + 8,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {binaryChars.map((char) => (
        <div
          key={char.id}
          className="absolute text-orange-500/20 font-mono select-none"
          style={{
            left: `${char.left}%`,
            top: `${char.top}%`,
            opacity: char.opacity,
            fontSize: `${char.size}px`,
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  )
}

const protocols = [
  {
    name: "Spectrum Finance",
    category: "AMM & DEX",
    apy: "15-45%",
    risk: "Medium",
    description: "Leading AMM on Ergo with liquidity mining rewards",
    features: ["Liquidity Providing", "Yield Farming", "Token Swaps"],
    tvl: "$2.1M",
    status: "Live",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "SigmaUSD",
    category: "Algorithmic Stablecoin",
    apy: "Variable",
    risk: "High",
    description: "Mint SigUSD or SigRSV for different risk profiles",
    features: ["Stable Minting", "Reserve Backing", "Arbitrage"],
    tvl: "$850K",
    status: "Live",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Auction House",
    category: "NFT Marketplace",
    apy: "5-20%",
    risk: "Medium",
    description: "Earn through NFT trading and royalties",
    features: ["NFT Trading", "Royalties", "Collections"],
    tvl: "$320K",
    status: "Live",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Night Owl Casino",
    category: "Gaming",
    apy: "Variable",
    risk: "Very High",
    description: "Provably fair casino games with house edge",
    features: ["Dice Games", "Lottery", "House Banking"],
    tvl: "$180K",
    status: "Live",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Lending Protocol",
    category: "Lending",
    apy: "Coming Soon",
    risk: "Medium",
    description: "Collateralized lending and borrowing",
    features: ["Lending", "Borrowing", "Liquidations"],
    tvl: "TBA",
    status: "Development",
    color: "from-gray-500 to-slate-500",
  },
]

const earningMethods = [
  {
    title: "Liquidity Providing",
    icon: <Coins className="h-6 w-6" />,
    description: "Provide liquidity to AMM pools and earn trading fees plus rewards",
    apy: "15-45%",
    risk: "Medium",
    complexity: "Beginner",
    requirements: "Two tokens for pair",
    pros: ["Trading fee income", "Token rewards", "Relatively stable"],
    cons: ["Impermanent loss risk", "Smart contract risk", "Market volatility"],
  },
  {
    title: "Yield Farming",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "Stake LP tokens or single assets to earn additional token rewards",
    apy: "20-80%",
    risk: "Medium-High",
    complexity: "Intermediate",
    requirements: "LP tokens or specific assets",
    pros: ["High potential returns", "Compound rewards", "Multiple strategies"],
    cons: ["High volatility", "Impermanent loss", "Token price risk"],
  },
  {
    title: "Staking",
    icon: <Lock className="h-6 w-6" />,
    description: "Lock tokens for governance participation and steady rewards",
    apy: "8-25%",
    risk: "Low-Medium",
    complexity: "Beginner",
    requirements: "Native protocol tokens",
    pros: ["Predictable returns", "Governance rights", "Lower risk"],
    cons: ["Lock-up periods", "Opportunity cost", "Inflation risk"],
  },
  {
    title: "Lending",
    icon: <PiggyBank className="h-6 w-6" />,
    description: "Lend assets to borrowers and earn interest (Coming Soon)",
    apy: "5-15%",
    risk: "Low-Medium",
    complexity: "Beginner",
    requirements: "Supported assets",
    pros: ["Steady income", "Lower volatility", "Flexible terms"],
    cons: ["Default risk", "Lower returns", "Liquidity risk"],
  },
  {
    title: "Algorithmic Assets",
    icon: <BarChart3 className="h-6 w-6" />,
    description: "Participate in SigmaUSD system as reserve provider or arbitrageur",
    apy: "Variable",
    risk: "High",
    complexity: "Advanced",
    requirements: "ERG for reserves",
    pros: ["Arbitrage opportunities", "No impermanent loss", "Market making"],
    cons: ["High complexity", "Liquidation risk", "Market timing"],
  },
  {
    title: "Gaming & Lotteries",
    icon: <Dice6 className="h-6 w-6" />,
    description: "Participate in provably fair games and prediction markets",
    apy: "Variable",
    risk: "Very High",
    complexity: "Beginner",
    requirements: "ERG or tokens",
    pros: ["High potential returns", "Entertainment value", "Provably fair"],
    cons: ["Gambling risk", "House edge", "Addiction potential"],
  },
]

const strategies = [
  {
    level: "Beginner",
    title: "Conservative Staking",
    description: "Start with single-asset staking for predictable returns",
    steps: [
      "Choose established protocols like ErgoPad",
      "Start with small amounts to learn",
      "Focus on governance token staking",
      "Reinvest rewards for compounding",
    ],
    expectedAPY: "8-15%",
    riskLevel: "Low",
    timeCommitment: "5 minutes setup",
  },
  {
    level: "Intermediate",
    title: "Balanced LP Strategy",
    description: "Combine liquidity providing with yield farming",
    steps: [
      "Provide liquidity to major pairs (ERG/SigUSD)",
      "Stake LP tokens for additional rewards",
      "Monitor impermanent loss regularly",
      "Diversify across multiple pools",
    ],
    expectedAPY: "20-35%",
    riskLevel: "Medium",
    timeCommitment: "1-2 hours weekly",
  },
  {
    level: "Advanced",
    title: "Multi-Protocol Optimization",
    description: "Maximize yields across multiple protocols and strategies",
    steps: [
      "Analyze yield opportunities across protocols",
      "Use leverage and advanced strategies",
      "Implement automated rebalancing",
      "Participate in governance and voting",
    ],
    expectedAPY: "40-80%",
    riskLevel: "High",
    timeCommitment: "5+ hours weekly",
  },
]

export default function DeFiPage() {
  const [selectedMethod, setSelectedMethod] = useState(0)
  const [calculatorValues, setCalculatorValues] = useState({
    amount: 1000,
    apy: 25,
    period: 12,
  })

  const calculateReturns = () => {
    const { amount, apy, period } = calculatorValues
    const monthlyRate = apy / 100 / 12
    const compoundReturns = amount * Math.pow(1 + monthlyRate, period)
    const profit = compoundReturns - amount
    return { total: compoundReturns, profit }
  }

  const { total, profit } = calculateReturns()

  return (
    <div className="min-h-screen bg-black text-white relative">
      <BinaryRainBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">EARN WITH DEFI</h1>
              <p className="text-xl md:text-2xl text-orange-500 mb-4">
                Discover Passive Income Opportunities in Ergo's DeFi Ecosystem
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From liquidity providing to yield farming, staking to algorithmic trading - explore comprehensive ways
                to grow your crypto assets on Ergo.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12"
            >
              <div className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-500">$5.2M+</div>
                <div className="text-gray-300">Total Value Locked</div>
              </div>
              <div className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-500">15-80%</div>
                <div className="text-gray-300">APY Range</div>
              </div>
              <div className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-500">6+</div>
                <div className="text-gray-300">Active Protocols</div>
              </div>
              <div className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-gray-300">Always Available</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="methods" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-gray-900/50 border border-orange-500/20">
                <TabsTrigger value="methods" className="data-[state=active]:bg-orange-500">
                  Earning Methods
                </TabsTrigger>
                <TabsTrigger value="protocols" className="data-[state=active]:bg-orange-500">
                  Protocols
                </TabsTrigger>
                <TabsTrigger value="strategies" className="data-[state=active]:bg-orange-500">
                  Strategies
                </TabsTrigger>
                <TabsTrigger value="calculator" className="data-[state=active]:bg-orange-500">
                  Calculator
                </TabsTrigger>
                <TabsTrigger value="risks" className="data-[state=active]:bg-orange-500">
                  Risks & Safety
                </TabsTrigger>
              </TabsList>

              {/* Earning Methods Tab */}
              <TabsContent value="methods" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {earningMethods.map((method, index) => (
                      <motion.div
                        key={method.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card
                          className={`bg-gray-900/50 border-orange-500/20 cursor-pointer transition-all duration-300 hover:border-orange-500/50 ${
                            selectedMethod === index ? "border-orange-500 bg-orange-500/10" : ""
                          }`}
                          onClick={() => setSelectedMethod(index)}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500">{method.icon}</div>
                                <div>
                                  <CardTitle className="text-white">{method.title}</CardTitle>
                                  <div className="flex gap-2 mt-1">
                                    <Badge variant="outline" className="text-green-400 border-green-400/50">
                                      {method.apy}
                                    </Badge>
                                    <Badge
                                      variant="outline"
                                      className={`
                                      ${
                                        method.risk === "Low"
                                          ? "text-green-400 border-green-400/50"
                                          : method.risk === "Medium"
                                            ? "text-yellow-400 border-yellow-400/50"
                                            : method.risk === "Medium-High"
                                              ? "text-orange-400 border-orange-400/50"
                                              : "text-red-400 border-red-400/50"
                                      }
                                    `}
                                    >
                                      {method.risk} Risk
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <ChevronRight className="h-5 w-5 text-gray-400" />
                            </div>
                          </CardHeader>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Method Details */}
                  <div className="lg:sticky lg:top-8">
                    <Card className="bg-gray-900/50 border-orange-500/20">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500">
                            {earningMethods[selectedMethod].icon}
                          </div>
                          <CardTitle className="text-white">{earningMethods[selectedMethod].title}</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300">
                          {earningMethods[selectedMethod].description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-400">Expected APY</div>
                            <div className="text-lg font-semibold text-green-400">
                              {earningMethods[selectedMethod].apy}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Complexity</div>
                            <div className="text-lg font-semibold text-orange-400">
                              {earningMethods[selectedMethod].complexity}
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-gray-400 mb-2">Requirements</div>
                          <div className="text-white">{earningMethods[selectedMethod].requirements}</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                              <ArrowUpRight className="h-4 w-4 text-green-400" />
                              Pros
                            </div>
                            <ul className="space-y-1">
                              {earningMethods[selectedMethod].pros.map((pro, index) => (
                                <li key={index} className="text-sm text-green-400">
                                  • {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                              <ArrowDownRight className="h-4 w-4 text-red-400" />
                              Cons
                            </div>
                            <ul className="space-y-1">
                              {earningMethods[selectedMethod].cons.map((con, index) => (
                                <li key={index} className="text-sm text-red-400">
                                  • {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                          Get Started with {earningMethods[selectedMethod].title}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Protocols Tab */}
              <TabsContent value="protocols" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {protocols.map((protocol, index) => (
                    <motion.div
                      key={protocol.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-white">{protocol.name}</CardTitle>
                              <CardDescription className="text-gray-400">{protocol.category}</CardDescription>
                            </div>
                            <Badge
                              variant="outline"
                              className={
                                protocol.status === "Live"
                                  ? "text-green-400 border-green-400/50"
                                  : "text-yellow-400 border-yellow-400/50"
                              }
                            >
                              {protocol.status}
                            </Badge>
                          </div>
                          <div className={`h-1 bg-gradient-to-r ${protocol.color} rounded-full`} />
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-gray-300 text-sm">{protocol.description}</p>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-xs text-gray-400">APY Range</div>
                              <div className="text-lg font-semibold text-green-400">{protocol.apy}</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-400">TVL</div>
                              <div className="text-lg font-semibold text-orange-400">{protocol.tvl}</div>
                            </div>
                          </div>

                          <div>
                            <div className="text-xs text-gray-400 mb-2">Features</div>
                            <div className="flex flex-wrap gap-1">
                              {protocol.features.map((feature, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs bg-orange-500/20 text-orange-300"
                                >
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button
                            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                            disabled={protocol.status !== "Live"}
                          >
                            {protocol.status === "Live" ? "Start Earning" : "Coming Soon"}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Strategies Tab */}
              <TabsContent value="strategies" className="mt-8">
                <div className="space-y-8">
                  {strategies.map((strategy, index) => (
                    <motion.div
                      key={strategy.level}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Card className="bg-gray-900/50 border-orange-500/20">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-white flex items-center gap-3">
                                <Badge
                                  className={`
                                  ${
                                    strategy.level === "Beginner"
                                      ? "bg-green-500"
                                      : strategy.level === "Intermediate"
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                  } text-black
                                `}
                                >
                                  {strategy.level}
                                </Badge>
                                {strategy.title}
                              </CardTitle>
                              <CardDescription className="text-gray-300 mt-2">{strategy.description}</CardDescription>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-400">{strategy.expectedAPY}</div>
                              <div className="text-sm text-gray-400">Expected APY</div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2">
                              <div className="text-sm text-gray-400 mb-3">Step-by-Step Guide:</div>
                              <ol className="space-y-2">
                                {strategy.steps.map((step, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <div className="bg-orange-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">
                                      {idx + 1}
                                    </div>
                                    <div className="text-gray-300">{step}</div>
                                  </li>
                                ))}
                              </ol>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <div className="text-sm text-gray-400">Risk Level</div>
                                <Badge
                                  className={`
                                  ${
                                    strategy.riskLevel === "Low"
                                      ? "bg-green-500"
                                      : strategy.riskLevel === "Medium"
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                  } text-black
                                `}
                                >
                                  {strategy.riskLevel}
                                </Badge>
                              </div>
                              <div>
                                <div className="text-sm text-gray-400">Time Commitment</div>
                                <div className="text-white">{strategy.timeCommitment}</div>
                              </div>
                              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                                Start This Strategy
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Calculator Tab */}
              <TabsContent value="calculator" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="bg-gray-900/50 border-orange-500/20">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-orange-500" />
                        DeFi Returns Calculator
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        Calculate potential earnings from your DeFi investments
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">Initial Investment (USD)</label>
                        <input
                          type="number"
                          value={calculatorValues.amount}
                          onChange={(e) => setCalculatorValues({ ...calculatorValues, amount: Number(e.target.value) })}
                          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
                          placeholder="1000"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">Expected APY (%)</label>
                        <input
                          type="number"
                          value={calculatorValues.apy}
                          onChange={(e) => setCalculatorValues({ ...calculatorValues, apy: Number(e.target.value) })}
                          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
                          placeholder="25"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">Time Period (months)</label>
                        <input
                          type="number"
                          value={calculatorValues.period}
                          onChange={(e) => setCalculatorValues({ ...calculatorValues, period: Number(e.target.value) })}
                          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
                          placeholder="12"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-orange-500/20">
                    <CardHeader>
                      <CardTitle className="text-white">Projected Returns</CardTitle>
                      <CardDescription className="text-gray-300">
                        Based on compound interest calculations
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Initial Investment:</span>
                          <span className="text-white font-semibold">${calculatorValues.amount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Total Value:</span>
                          <span className="text-green-400 font-semibold text-xl">
                            ${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Profit:</span>
                          <span className="text-orange-400 font-semibold text-xl">
                            +${profit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">ROI:</span>
                          <span className="text-orange-400 font-semibold">
                            +{((profit / calculatorValues.amount) * 100).toFixed(1)}%
                          </span>
                        </div>
                      </div>

                      <Alert className="border-orange-500/20 bg-orange-500/10">
                        <Info className="h-4 w-4 text-orange-500" />
                        <AlertDescription className="text-orange-200">
                          These are theoretical calculations. Actual returns may vary due to market conditions, protocol
                          changes, and various risks. Always do your own research.
                        </AlertDescription>
                      </Alert>

                      <div className="space-y-2">
                        <div className="text-sm text-gray-400">Popular APY Ranges:</div>
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCalculatorValues({ ...calculatorValues, apy: 15 })}
                            className="border-gray-600 text-gray-300 hover:bg-gray-800"
                          >
                            Staking: 15%
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCalculatorValues({ ...calculatorValues, apy: 30 })}
                            className="border-gray-600 text-gray-300 hover:bg-gray-800"
                          >
                            LP: 30%
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCalculatorValues({ ...calculatorValues, apy: 50 })}
                            className="border-gray-600 text-gray-300 hover:bg-gray-800"
                          >
                            Farming: 50%
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCalculatorValues({ ...calculatorValues, apy: 80 })}
                            className="border-gray-600 text-gray-300 hover:bg-gray-800"
                          >
                            High Risk: 80%
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Risks & Safety Tab */}
              <TabsContent value="risks" className="mt-8">
                <div className="space-y-8">
                  <Alert className="border-red-500/20 bg-red-500/10">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <AlertDescription className="text-red-200">
                      <strong>Important:</strong> DeFi investments carry significant risks. Never invest more than you
                      can afford to lose. Always research protocols thoroughly and understand the risks before
                      participating.
                    </AlertDescription>
                  </Alert>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-gray-900/50 border-red-500/20">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <Shield className="h-5 w-5 text-red-500" />
                          Common Risks
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <div className="font-semibold text-red-400">Smart Contract Risk</div>
                            <div className="text-sm text-gray-300">
                              Bugs or exploits in protocol code can lead to fund loss
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-red-400">Impermanent Loss</div>
                            <div className="text-sm text-gray-300">
                              LP providers may lose value compared to holding assets
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-red-400">Market Volatility</div>
                            <div className="text-sm text-gray-300">Token prices can fluctuate dramatically</div>
                          </div>
                          <div>
                            <div className="font-semibold text-red-400">Liquidation Risk</div>
                            <div className="text-sm text-gray-300">
                              Leveraged positions may be liquidated during market moves
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-red-400">Regulatory Risk</div>
                            <div className="text-sm text-gray-300">
                              Changing regulations may affect protocol operations
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900/50 border-green-500/20">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <Shield className="h-5 w-5 text-green-500" />
                          Safety Best Practices
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <div className="font-semibold text-green-400">Start Small</div>
                            <div className="text-sm text-gray-300">
                              Begin with small amounts to learn and test protocols
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-green-400">Research Protocols</div>
                            <div className="text-sm text-gray-300">
                              Check audits, team background, and community feedback
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-green-400">Diversify</div>
                            <div className="text-sm text-gray-300">
                              Spread investments across multiple protocols and strategies
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-green-400">Monitor Regularly</div>
                            <div className="text-sm text-gray-300">
                              Keep track of your positions and market conditions
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-green-400">Use Reputable Wallets</div>
                            <div className="text-sm text-gray-300">Only connect trusted wallets to DeFi protocols</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gray-900/50 border-orange-500/20">
                    <CardHeader>
                      <CardTitle className="text-white">Due Diligence Checklist</CardTitle>
                      <CardDescription className="text-gray-300">
                        Questions to ask before investing in any DeFi protocol
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="text-sm text-gray-400 font-semibold">Technical</div>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>• Has the protocol been audited by reputable firms?</li>
                            <li>• Is the code open source and verifiable?</li>
                            <li>• How long has the protocol been operating?</li>
                            <li>• Are there any known vulnerabilities or past exploits?</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <div className="text-sm text-gray-400 font-semibold">Economic</div>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>• What is the total value locked (TVL)?</li>
                            <li>• How are yields generated and sustained?</li>
                            <li>• What are the tokenomics and emission schedule?</li>
                            <li>• Is there sufficient liquidity for your position size?</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Earning?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of users already earning passive income in the Ergo DeFi ecosystem. Start with small
                amounts and gradually increase your exposure as you learn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3">
                  Get ERG to Start
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500/10 px-8 py-3"
                >
                  Setup Wallet
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
