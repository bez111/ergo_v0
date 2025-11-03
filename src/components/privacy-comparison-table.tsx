import React from "react";

/**
 * Ergo vs Zcash vs zkSync — Privacy Comparison
 * Styled to match /technology/ergoscript page design
 */

const BRAND = {
  accent: "#ff7a00", // Ergo orange highlight
  border: "border-white/10",
  textMuted: "text-neutral-400",
  bgSoft: "bg-black/80",
};

interface Row { 
  k: string; 
  ergo: string; 
  zec: string; 
  zks: string; 
}

const rows: Row[] = [
  {
    k: "Layer / Model",
    ergo: "L1 eUTXO + Sigma‑protocol scripts (privacy optional)",
    zec: "L1 UTXO with shielded pools (Sapling/Orchard)",
    zks: "L2 zk‑rollup (account model) for Ethereum; privacy not by default",
  },
  {
    k: "Privacy Scope",
    ergo: "Payments/mixes, selective proofs in dApps; can build stealth‑like flows",
    zec: "Private transfers in shielded pool (values/senders/receivers hidden)",
    zks: "Public by default; apps can embed zk circuits for app‑level privacy",
  },
  {
    k: "Core Tech",
    ergo: "Sigma‑protocols (ZK PoK), ring/threshold constructs, ErgoMixer",
    zec: "zk‑SNARKs (Halo 2 in Orchard; Sapling earlier)",
    zks: "Validity proofs (zk‑SNARKs/PLONK‑family) for scalability",
  },
  {
    k: "Trusted Setup",
    ergo: "No (sigma protocols don't require trusted setup)",
    zec: "NO in Orchard (Halo 2); was required in Sapling/older params",
    zks: "Prover/verifier parameters; not privacy-critical since DA is public",
  },
  {
    k: "Default Privacy",
    ergo: "No (opt-in via scripts/mixer)",
    zec: "Yes — with shielded addresses (z-addr)",
    zks: "No (tx and balances are public on L1 DA)",
  },
  {
    k: "Viewing / Selective Disclosure",
    ergo: "Property proofs (by script) + off-chain audit by keys",
    zec: "Viewing keys (full/partial disclosure of shielded history)",
    zks: "App-dependent; no standard viewing semantics",
  },
  {
    k: "Smart‑Contracts & DeFi",
    ergo: "Scripts with ZK proofs; privacy composable in dApps",
    zec: "Limited L1 scripting; main focus on private payments",
    zks: "Full smart contracts (EVM-compatible); privacy at dApp level",
  },
  {
    k: "Data Availability",
    ergo: "On-chain UTXO; privacy from ZK conditions/mixes, not DA hiding",
    zec: "Encrypted shielded pool records on L1",
    zks: "Public DA on Ethereum (calldata/blobs); zk-proofs for validity",
  },
  {
    k: "Compliance/Audit Options",
    ergo: "Selective ZK proofs of facts (without data disclosure)",
    zec: "Viewing keys/proof of ownership for compliance",
    zks: "App-level (proof-of-KYC, allowlists, etc.)",
  },
  {
    k: "UX / Wallets",
    ergo: "Regular wallets + opt-in ErgoMixer/stealth schemes",
    zec: "Shielded-friendly wallets (z-tx may require more resources)",
    zks: "EVM wallets; UX like L2, privacy depends on dApp",
  },
  {
    k: "Typical Strength",
    ergo: "Script flexibility, no trusted setup, simple private patterns",
    zec: "Strong payment privacy by default (shielded)",
    zks: "Ethereum scaling + possibility of private logic in contracts",
  },
  {
    k: "Typical Trade‑off",
    ergo: "Opt-in (not by default); requires proper scheme design",
    zec: "Complexity/resources of shielded-tx; UX of 'two worlds' (t/z addr)",
    zks: "Privacy not foundational; privacy UX/guarantees are dApp responsibility",
  },
];

export default function PrivacyComparisonTable() {
  return (
    <section className="w-full">
      <header className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Comparison: <span className="text-orange-400">Ergo vs Zcash vs zkSync</span>
        </h2>
        <p className="text-xl text-neutral-300 max-w-4xl mx-auto">
          Three different paradigms: eUTXO + Sigma protocols (Ergo), shielded pools (Zcash), and zk‑rollup for scalability (zkSync).
        </p>
      </header>
      
      <div className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 mb-12 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <caption className="sr-only">
              Privacy feature comparison between Ergo, Zcash, and zkSync protocols
            </caption>
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="text-left p-4 font-semibold text-orange-400">Dimension</th>
                <th className="text-left p-4 font-semibold text-orange-400">Ergo</th>
                <th className="text-left p-4 font-semibold text-blue-400">Zcash</th>
                <th className="text-left p-4 font-semibold text-purple-400">zkSync</th>
              </tr>
            </thead>
            <tbody className="text-neutral-300">
              {rows.map((row, idx) => {
                // Определяем цвета для каждой строки на основе содержания
                const getColoredContent = (content: string, platform: 'ergo' | 'zec' | 'zks') => {
                  const lower = content.toLowerCase();
                  
                  // Сильные стороны (зеленый)
                  if (lower.includes('strong') || lower.includes('very high') || lower.includes('high') || 
                      lower.includes('yes —') || lower.includes('full smart contracts') || 
                      lower.includes('native') || lower.includes('no (sigma protocols') ||
                      lower.includes('script flexibility') || lower.includes('ethereum scaling')) {
                    return <span className="text-green-400">{content}</span>;
                  }
                  
                  // Слабые стороны (красный)  
                  if (lower.includes('complexity/resources') || lower.includes('privacy not foundational') ||
                      lower.includes('opt-in (not by default)') || lower.includes('no (tx and balances are public)') ||
                      lower.includes('limited l1 scripting')) {
                    return <span className="text-red-400">{content}</span>;
                  }
                  
                  // Средние/смешанные (желтый)
                  if (lower.includes('app-dependent') || lower.includes('app-level') || 
                      lower.includes('limited') || lower.includes('was required') ||
                      lower.includes('complexity') || lower.includes('ux of')) {
                    return <span className="text-yellow-400">{content}</span>;
                  }
                  
                  // Особенности Ergo (оранжевый)
                  if (platform === 'ergo' && (lower.includes('sigma') || lower.includes('ergomixer') || 
                      lower.includes('eUTXO') || lower.includes('property proofs') ||
                      lower.includes('selective zk proofs'))) {
                    return <span className="text-orange-400">{content}</span>;
                  }
                  
                  return content;
                };

                return (
                  <tr 
                    key={row.k} 
                    className="border-b border-neutral-800 hover:bg-neutral-800/30"
                  >
                    <th scope="row" className="p-4 font-medium">
                      {row.k}
                    </th>
                    <td className="p-4">
                      {getColoredContent(row.ergo, 'ergo')}
                    </td>
                    <td className="p-4">
                      {getColoredContent(row.zec, 'zec')}
                    </td>
                    <td className="p-4">
                      {getColoredContent(row.zks, 'zks')}
                    </td>
                  </tr>
                );
              })}
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
            <strong className="text-red-200">Note:</strong> zkSync focuses on scalability; privacy is app‑level. 
            Zcash provides default private transfers in shielded pools. 
            Ergo offers composable privacy via Sigma proofs without trusted setup.
          </p>
        </div>
      </div>
    </section>
  );
}
