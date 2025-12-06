
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface ComparisonRow {
  k: string;
  ergo: string;
  chainlink: string;
  pyth: string;
  redstone: string;
  tellor: string;
  uma: string;
}

const comparisonData: ComparisonRow[] = [
  {
    k: "Update Model",
    ergo: "Push pools on eUTXO; epoch-based publishing",
    chainlink: "Push feeds with Off-Chain Reporting (OCR)",
    pyth: "Pull/on-demand price feeds",
    redstone: "Hybrid: Push/Pull/X models",
    tellor: "Permissionless reporters with bonds",
    uma: "Optimistic assertions with disputes",
  },
  {
    k: "Aggregation Method",
    ergo: "On-chain pool logic (boxes) + off-chain agents",
    chainlink: "Off-chain committee → single on-chain submit",
    pyth: "Pyth program + confidence; dApp commits on demand",
    redstone: "Push on-chain; Pull/X signed bundles in tx",
    tellor: "On-chain consensus via economic incentives",
    uma: "Accepted unless disputed; DVM arbitrates",
  },
  {
    k: "Who Pays Updates",
    ergo: "Pool treasury pays rewards to reporters",
    chainlink: "Operator set; gas costs amortized",
    pyth: "Consumer/updater pays tx fees on demand",
    redstone: "Push: provider pays; Pull/X: tx sender pays",
    tellor: "Reporters pay bonds; rewards in TRB",
    uma: "Asserter posts; participants fund disputes",
  },
  {
    k: "Update Frequency",
    ergo: "Configurable per pool (minutes/blocks)",
    chainlink: "Infrequent batched; high off-chain frequency",
    pyth: "Very high off-chain; on-chain when consumed",
    redstone: "Push: periodic; Pull/X: on demand",
    tellor: "Request/reward-driven; variable timing",
    uma: "Fast if undisputed; slower when escalated",
  },
  {
    k: "Permissions Model",
    ergo: "Community-defined pools/reporters",
    chainlink: "Curated operator set per feed",
    pyth: "Approved publishers; open reads",
    redstone: "Signed by providers; open consumption",
    tellor: "Fully permissionless participation",
    uma: "Open roles (asserter/disputer)",
  },
  {
    k: "Data Types",
    ergo: "Prices; extensible to events via scripts",
    chainlink: "Prices, VRF, Automation, Functions, CCIP",
    pyth: "Primarily prices (crypto/FX/equities/commodities)",
    redstone: "Prices, RWA data; automation hooks",
    tellor: "Flexible (prices/events) via query spec",
    uma: "General truths: prices, events, KPIs",
  },
  {
    k: "Primary Use Cases",
    ergo: "Ergo DeFi (SigmaUSD), protocol metrics",
    chainlink: "General DeFi feeds, randomness, upkeep",
    pyth: "Perp DEX/derivatives, high-frequency pricing",
    redstone: "EVM rollups, cost-sensitive apps, RWA",
    tellor: "Censorship-resistant feeds, open data",
    uma: "Prediction markets, insurance, non-standard data",
  },
  {
    k: "Key Limitations",
    ergo: "Need disciplined reporters; stale data risk",
    chainlink: "Service cost; curated operators dependency",
    pyth: "Must handle confidence intervals; updater dependency",
    redstone: "Signature validation complexity; bundle availability",
    tellor: "Latency variance; dispute economics sensitivity",
    uma: "Trust window pre-dispute; arbitration delays",
  },
];

// Color coding function based on content keywords
const getColoredContent = (content: string, platform: 'ergo' | 'chainlink' | 'pyth' | 'redstone' | 'tellor' | 'uma') => {
  const lower = content.toLowerCase();
  
  // Strong advantages (green)
  if (lower.includes('configurable') || lower.includes('community-defined') || 
      lower.includes('extensible') || lower.includes('very high') ||
      lower.includes('permissionless') || lower.includes('open roles') ||
      lower.includes('native') || lower.includes('decentralized')) {
    return <span className="text-green-400">{content}</span>;
  }
  
  // Limitations/trade-offs (red)  
  if (lower.includes('need disciplined') || lower.includes('service cost') ||
      lower.includes('must handle') || lower.includes('signature validation') ||
      lower.includes('latency variance') || lower.includes('trust window') ||
      lower.includes('stale data') || lower.includes('dependency')) {
    return <span className="text-red-400">{content}</span>;
  }
  
  // Mixed/moderate characteristics (yellow)
  if (lower.includes('curated') || lower.includes('approved') || 
      lower.includes('infrequent') || lower.includes('variable') ||
      lower.includes('economics sensitivity') || lower.includes('complexity')) {
    return <span className="text-yellow-400">{content}</span>;
  }
  
  // Ergo-specific features (orange)
  if (platform === 'ergo' && (lower.includes('eutxo') || lower.includes('boxes') || 
      lower.includes('epoch-based') || lower.includes('sigmausd') ||
      lower.includes('pool logic') || lower.includes('scripts'))) {
    return <span className="text-orange-400">{content}</span>;
  }
  
  return content;
};

export default function OracleComparisonTable() {
  return (
    <section className="w-full">
      <header className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oracle Comparison: <span className="text-orange-400">Ergo vs Leading Alternatives</span>
        </h2>
        <p className="text-xl text-neutral-300 max-w-4xl mx-auto">
          Six different approaches: eUTXO pools (Ergo), off-chain reporting (Chainlink), pull feeds (Pyth), hybrid models (RedStone), permissionless bonds (Tellor), and optimistic assertions (UMA).
        </p>
      </header>
      
      <div className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 mb-12 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="text-left p-4 font-semibold text-orange-400">Dimension</th>
                <th className="text-left p-4 font-semibold text-orange-400">Ergo</th>
                <th className="text-left p-4 font-semibold text-orange-400">Chainlink</th>
                <th className="text-left p-4 font-semibold text-orange-400">Pyth</th>
                <th className="text-left p-4 font-semibold text-orange-400">RedStone</th>
                <th className="text-left p-4 font-semibold text-orange-400">Tellor</th>
                <th className="text-left p-4 font-semibold text-orange-400">UMA</th>
              </tr>
            </thead>
            <tbody className="text-neutral-300">
              {comparisonData.map((row, index) => (
                <tr key={row.k} className="border-b border-neutral-800 hover:bg-neutral-800/30">
                  <th scope="row" className="p-4 font-medium text-white">{row.k}</th>
                  <td className="p-4">
                    {getColoredContent(row.ergo, 'ergo')}
                  </td>
                  <td className="p-4">
                    {getColoredContent(row.chainlink, 'chainlink')}
                  </td>
                  <td className="p-4">
                    {getColoredContent(row.pyth, 'pyth')}
                  </td>
                  <td className="p-4">
                    {getColoredContent(row.redstone, 'redstone')}
                  </td>
                  <td className="p-4">
                    {getColoredContent(row.tellor, 'tellor')}
                  </td>
                  <td className="p-4">
                    {getColoredContent(row.uma, 'uma')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Color Legend */}
      <div className="mt-4 mb-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <span className="text-sm text-neutral-300">Strong advantages</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <span className="text-sm text-neutral-300">Mixed/moderate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-400 rounded-full"></div>
            <span className="text-sm text-neutral-300">Limitations/trade-offs</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
            <span className="text-sm text-neutral-300">Ergo-specific features</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="bg-red-900/90 border border-red-700/50 rounded-xl p-4 max-w-4xl backdrop-blur-sm">
          <p className="text-sm text-red-100 leading-relaxed">
            <strong className="text-red-200">Note:</strong> For production integrations add safety belts — averaging windows, deviation thresholds, 
            signature/source checks, fallback feeds, and circuit breakers on anomalies. Each oracle model has unique trade-offs 
            between decentralization, latency, cost, and data quality.
          </p>
        </div>
      </div>
    </section>
  );
}