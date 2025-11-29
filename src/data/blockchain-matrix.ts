/**
 * Centralized blockchain comparison matrix data
 * Source of truth for all "Ergo vs X" comparisons
 * Based on the blockchain-matrix-where-ergo-actually-fits infographic
 */

export type ChainId = 
  | 'ergo' 
  | 'bitcoin' 
  | 'ethereum' 
  | 'monero' 
  | 'zcash' 
  | 'cardano' 
  | 'solana' 
  | 'vc-chain'
  | 'cbdc';

export interface ChainInfo {
  id: ChainId;
  name: string;
  color: string;
  logo?: string;
}

export interface MatrixFeature {
  id: string;
  name: string;
  description: string;
  values: Record<ChainId, {
    value: string;
    isAdvantage?: boolean; // true = advantage over others, false = disadvantage
    notes?: string;
  }>;
}

// Chain metadata
export const chains: Record<ChainId, ChainInfo> = {
  ergo: {
    id: 'ergo',
    name: 'Ergo',
    color: '#FF5E18',
    logo: '/logos/ergo.svg',
  },
  bitcoin: {
    id: 'bitcoin',
    name: 'Bitcoin',
    color: '#F7931A',
    logo: '/logos/bitcoin.svg',
  },
  ethereum: {
    id: 'ethereum',
    name: 'Ethereum',
    color: '#627EEA',
    logo: '/logos/ethereum.svg',
  },
  monero: {
    id: 'monero',
    name: 'Monero',
    color: '#FF6600',
    logo: '/logos/monero.svg',
  },
  zcash: {
    id: 'zcash',
    name: 'Zcash',
    color: '#F4B728',
    logo: '/logos/zcash.svg',
  },
  cardano: {
    id: 'cardano',
    name: 'Cardano',
    color: '#2F6DFE',
    logo: '/logos/cardano.svg',
  },
  solana: {
    id: 'solana',
    name: 'Solana',
    color: '#14F195',
    logo: '/logos/solana.svg',
  },
  'vc-chain': {
    id: 'vc-chain',
    name: 'Typical VC Chain',
    color: '#8B5CF6',
    logo: '/logos/vc-chain.svg',
  },
  cbdc: {
    id: 'cbdc',
    name: 'CBDCs',
    color: '#DC2626',
    logo: '/logos/cbdc.svg',
  },
};

// The master comparison matrix - single source of truth
export const blockchainMatrix: MatrixFeature[] = [
  {
    id: 'consensus',
    name: 'Consensus',
    description: 'The mechanism used to achieve agreement on the state of the blockchain',
    values: {
      ergo: { value: 'PoW (Autolykos v2, GPU-friendly)', isAdvantage: true },
      bitcoin: { value: 'PoW (SHA-256, ASIC-dominated)' },
      ethereum: { value: 'PoS (Beacon/Gasper)' },
      monero: { value: 'PoW (RandomX, CPU-friendly)' },
      zcash: { value: 'PoW (Equihash, ASIC)' },
      cardano: { value: 'PoS (Ouroboros)' },
      solana: { value: 'PoS + Proof of History' },
      'vc-chain': { value: 'PoS/DPoS variants' },
      cbdc: { value: 'Centralized (permissioned)', isAdvantage: false },
    },
  },
  {
    id: 'launch',
    name: 'Launch & Distribution',
    description: 'How the token was initially distributed',
    values: {
      ergo: { value: 'Fair launch: No ICO, no premine, no VC', isAdvantage: true },
      bitcoin: { value: 'Fair launch: No ICO, no premine' },
      ethereum: { value: 'ICO + premine' },
      monero: { value: 'Fair launch: No premine' },
      zcash: { value: '20% founders reward' },
      cardano: { value: 'ICO + foundation allocation' },
      solana: { value: 'VC-funded, large insider allocation' },
      'vc-chain': { value: '40-60% insider/VC allocation', isAdvantage: false },
      cbdc: { value: '100% central bank controlled', isAdvantage: false },
    },
  },
  {
    id: 'state-model',
    name: 'State / Accounting Model',
    description: 'How the blockchain tracks ownership and state',
    values: {
      ergo: { value: 'eUTXO (Programmable UTXO)', isAdvantage: true },
      bitcoin: { value: 'UTXO (limited scripts)' },
      ethereum: { value: 'Account-based (global state)' },
      monero: { value: 'UTXO (ring signatures)' },
      zcash: { value: 'UTXO + shielded pools' },
      cardano: { value: 'eUTXO (Plutus)' },
      solana: { value: 'Account-based (parallel Sealevel)' },
      'vc-chain': { value: 'Account-based (various)' },
      cbdc: { value: 'Account-based (centralized ledger)', isAdvantage: false },
    },
  },
  {
    id: 'smart-contracts',
    name: 'Smart Contracts',
    description: 'Programmability and smart contract capabilities',
    values: {
      ergo: { value: 'ErgoScript + Sigma Protocols', isAdvantage: true },
      bitcoin: { value: 'Bitcoin Script (very limited)' },
      ethereum: { value: 'Solidity/Vyper (EVM, Turing-complete)' },
      monero: { value: 'None (privacy-focused)' },
      zcash: { value: 'Limited scripting' },
      cardano: { value: 'Plutus/Aiken (eUTXO)' },
      solana: { value: 'Rust/C (SVM)' },
      'vc-chain': { value: 'EVM-compatible typically' },
      cbdc: { value: 'Programmable restrictions', isAdvantage: false, notes: 'Used for control, not user empowerment' },
    },
  },
  {
    id: 'privacy',
    name: 'L1 Privacy',
    description: 'Native privacy features at the protocol level',
    values: {
      ergo: { value: 'Programmable privacy (Sigma Protocols)', isAdvantage: true },
      bitcoin: { value: 'None at L1 (pseudonymous)' },
      ethereum: { value: 'None at L1 (transparent accounts)' },
      monero: { value: 'Default privacy (ring signatures)', isAdvantage: true },
      zcash: { value: 'Optional shielded pools' },
      cardano: { value: 'None at L1 (Midnight sidechain planned)' },
      solana: { value: 'None at L1' },
      'vc-chain': { value: 'None typically' },
      cbdc: { value: 'Full surveillance', isAdvantage: false },
    },
  },
  {
    id: 'storage-rent',
    name: 'Demurrage / Storage Rent',
    description: 'Mechanism to prevent state bloat and fund long-term security',
    values: {
      ergo: { value: 'Storage rent on inactive boxes (~4+ years)', isAdvantage: true, notes: 'Miners reclaim fees, keeping state lean' },
      bitcoin: { value: 'None (state grows indefinitely)' },
      ethereum: { value: 'None (state grows indefinitely)' },
      monero: { value: 'None' },
      zcash: { value: 'None' },
      cardano: { value: 'None' },
      solana: { value: 'Rent for accounts (different model)' },
      'vc-chain': { value: 'None typically' },
      cbdc: { value: 'N/A (centralized)', isAdvantage: false },
    },
  },
  {
    id: 'mev-resistance',
    name: 'MEV Resistance',
    description: 'Protection against miner/validator extractable value attacks',
    values: {
      ergo: { value: 'MEV-aware design (eUTXO + local ordering)', isAdvantage: true },
      bitcoin: { value: 'Low MEV (simple transactions)' },
      ethereum: { value: 'High MEV (sandwich attacks, frontrunning)' },
      monero: { value: 'Low MEV (no DeFi)' },
      zcash: { value: 'Low MEV (limited DeFi)' },
      cardano: { value: 'Lower MEV (eUTXO helps)' },
      solana: { value: 'High MEV (priority fees, Jito)' },
      'vc-chain': { value: 'High MEV typically' },
      cbdc: { value: 'N/A (no open market)', isAdvantage: false },
    },
  },
  {
    id: 'fees-finality',
    name: 'Fees & Finality',
    description: 'Transaction costs and confirmation times',
    values: {
      ergo: { value: '~$0.01 fees; ~2 min blocks; stable PoW finality', isAdvantage: true },
      bitcoin: { value: 'Variable fees; ~10 min blocks; 6-conf finality' },
      ethereum: { value: 'High L1 fees; ~12s slots; ~15 min finality' },
      monero: { value: 'Low fees; ~2 min blocks' },
      zcash: { value: 'Low fees; ~75s blocks' },
      cardano: { value: 'Low fees; ~20s blocks' },
      solana: { value: 'Very low fees; sub-second; fast finality' },
      'vc-chain': { value: 'Variable; often subsidized initially' },
      cbdc: { value: 'No fees (but full control)', isAdvantage: false },
    },
  },
  {
    id: 'light-clients',
    name: 'Light Clients',
    description: 'Support for lightweight verification without full node',
    values: {
      ergo: { value: 'NiPoPoWs (trustless, ~1MB proofs)', isAdvantage: true },
      bitcoin: { value: 'SPV (trust-based)' },
      ethereum: { value: 'Light sync (requires trusted nodes)' },
      monero: { value: 'Remote nodes (trust-based)' },
      zcash: { value: 'Light wallet (trust-based)' },
      cardano: { value: 'Mithril (different approach)' },
      solana: { value: 'Requires trusted RPC' },
      'vc-chain': { value: 'Typically trust-based' },
      cbdc: { value: 'N/A (centralized)', isAdvantage: false },
    },
  },
  {
    id: 'censorship-resistance',
    name: 'Censorship Resistance',
    description: 'Ability to resist transaction censorship',
    values: {
      ergo: { value: 'Strong (PoW, no validators to pressure)', isAdvantage: true },
      bitcoin: { value: 'Strong (PoW, large network)' },
      ethereum: { value: 'Weaker (OFAC-compliant validators)', isAdvantage: false },
      monero: { value: 'Strong (PoW + privacy)' },
      zcash: { value: 'Moderate (PoW but smaller network)' },
      cardano: { value: 'Moderate (PoS, stake pools)' },
      solana: { value: 'Weaker (validator concentration)' },
      'vc-chain': { value: 'Weak (often centralized validators)', isAdvantage: false },
      cbdc: { value: 'None (fully censorable)', isAdvantage: false },
    },
  },
  {
    id: 'native-assets',
    name: 'Native Assets',
    description: 'First-class token support at protocol level',
    values: {
      ergo: { value: 'Native L1 tokens (no wrapper contracts)', isAdvantage: true },
      bitcoin: { value: 'Limited (Ordinals, Runes)' },
      ethereum: { value: 'ERC-20/721 contracts (wrapper)' },
      monero: { value: 'None (XMR only)' },
      zcash: { value: 'None (ZEC only)' },
      cardano: { value: 'Native assets (similar to Ergo)' },
      solana: { value: 'SPL tokens (program-based)' },
      'vc-chain': { value: 'Usually ERC-20 style' },
      cbdc: { value: 'Single currency only', isAdvantage: false },
    },
  },
];

// Helper function to get comparison data for a specific chain vs Ergo
export function getComparisonMatrix(chainId: ChainId): { feature: string; ergo: string; competitor: string; ergoAdvantage?: boolean }[] {
  return blockchainMatrix.map(feature => ({
    feature: feature.name,
    ergo: feature.values.ergo.value,
    competitor: feature.values[chainId]?.value || 'N/A',
    ergoAdvantage: feature.values.ergo.isAdvantage === true && feature.values[chainId]?.isAdvantage !== true,
  }));
}

// Helper function to get chain info
export function getChainInfo(chainId: ChainId): ChainInfo | undefined {
  return chains[chainId];
}

// Get all features where Ergo has an advantage over a specific chain
export function getErgoAdvantages(chainId: ChainId): MatrixFeature[] {
  return blockchainMatrix.filter(feature => 
    feature.values.ergo.isAdvantage === true && 
    feature.values[chainId]?.isAdvantage !== true
  );
}

// Get features where the competitor has an advantage
export function getCompetitorAdvantages(chainId: ChainId): MatrixFeature[] {
  return blockchainMatrix.filter(feature => 
    feature.values[chainId]?.isAdvantage === true &&
    feature.values.ergo.isAdvantage !== true
  );
}

