// Topic Clusters - SEO Pillar + Supporting Pages Structure
// Each cluster has one pillar page and multiple supporting pages
// This enables topical authority and strong internal linking

export interface ClusterLink {
  url: string;
  title: string;
  type: 'pillar' | 'topic' | 'use-case' | 'playbook' | 'pattern' | 'infographic' | 'compare' | 'faq' | 'glossary' | 'persona' | 'technology';
  description?: string;
  priority: 1 | 2 | 3; // 1 = essential, 2 = important, 3 = supplementary
}

export interface TopicCluster {
  id: string;
  name: string;
  description: string;
  pillar: ClusterLink;
  supporting: ClusterLink[];
  faqQuestions: string[]; // FAQ questions to add schema for
  targetKeywords: string[]; // Primary keywords to target
}

export const topicClusters: TopicCluster[] = [
  // ==================== DEFI CLUSTER ====================
  {
    id: 'defi',
    name: 'DeFi on Ergo',
    description: 'Decentralized Finance without MEV, without permission',
    pillar: {
      url: '/topics/ergo-defi',
      title: 'DeFi on Ergo',
      type: 'topic',
      description: 'Complete guide to MEV-resistant DeFi on Ergo',
      priority: 1
    },
    supporting: [
      // Use Cases
      { url: '/use/defi', title: 'DeFi Use Cases', type: 'use-case', priority: 1 },
      { url: '/use/stablecoins', title: 'Stablecoins on Ergo', type: 'use-case', priority: 2 },
      
      // Developer Resources
      { url: '/playbooks/defi-developer', title: 'DeFi Developer Playbook', type: 'playbook', priority: 1 },
      { url: '/patterns/amm-contracts', title: 'AMM Smart Contract Patterns', type: 'pattern', priority: 2 },
      { url: '/patterns/liquidity-pool', title: 'Liquidity Pool Patterns', type: 'pattern', priority: 2 },
      
      // Comparisons
      { url: '/compare/ergo-vs-ethereum', title: 'Ergo vs Ethereum', type: 'compare', priority: 1 },
      { url: '/compare/ergo-vs-cardano', title: 'Ergo vs Cardano', type: 'compare', priority: 2 },
      
      // Infographics
      { url: '/infographics/ergo-eutxo-model-bitcoin-security-smart-contract-flexibility', title: 'eUTXO Model Explained', type: 'infographic', priority: 1 },
      { url: '/infographics/mev-resistance-vs-dark-forest', title: 'MEV Resistance', type: 'infographic', priority: 1 },
      { url: '/infographics/ergo-oracle-pools-decentralized-reliable-real-world-data', title: 'Oracle Pools', type: 'infographic', priority: 2 },
      
      // Technology
      { url: '/technology/oracle-pools', title: 'Oracle Pools Technology', type: 'technology', priority: 1 },
      { url: '/technology/ergoscript', title: 'ErgoScript', type: 'technology', priority: 2 },
      
      // Glossary
      { url: '/learn/glossary/eutxo', title: 'eUTXO Definition', type: 'glossary', priority: 2 },
      { url: '/learn/glossary/mev-resistance', title: 'MEV Resistance Definition', type: 'glossary', priority: 2 },
      { url: '/learn/glossary/oracle-pools', title: 'Oracle Pools Definition', type: 'glossary', priority: 3 }
    ],
    faqQuestions: [
      'What DeFi apps exist on Ergo?',
      'Is Ergo better than Ethereum for DeFi?',
      'What is MEV resistance?',
      'How do Oracle Pools work?',
      'What is SigmaUSD?'
    ],
    targetKeywords: [
      'Ergo DeFi',
      'eUTXO DeFi',
      'MEV resistant DEX',
      'SigmaUSD stablecoin',
      'Spectrum Finance',
      'decentralized finance Ergo'
    ]
  },

  // ==================== PRIVACY CLUSTER ====================
  {
    id: 'privacy',
    name: 'Privacy on Ergo',
    description: 'Optional privacy with Sigma Protocols',
    pillar: {
      url: '/topics/ergo-privacy',
      title: 'Privacy on Ergo',
      type: 'topic',
      description: 'Complete guide to privacy features on Ergo',
      priority: 1
    },
    supporting: [
      // Use Cases
      { url: '/use/privacy', title: 'Privacy Use Cases', type: 'use-case', priority: 1 },
      
      // Developer Resources
      { url: '/playbooks/privacy-developer', title: 'Privacy Developer Playbook', type: 'playbook', priority: 1 },
      { url: '/patterns/stealth-addresses', title: 'Stealth Address Patterns', type: 'pattern', priority: 2 },
      { url: '/patterns/ring-signatures', title: 'Ring Signature Patterns', type: 'pattern', priority: 2 },
      
      // Comparisons
      { url: '/compare/ergo-vs-monero', title: 'Ergo vs Monero', type: 'compare', priority: 1 },
      { url: '/compare/ergo-vs-zcash', title: 'Ergo vs Zcash', type: 'compare', priority: 2 },
      
      // Infographics
      { url: '/infographics/ergo-privacy-non-interactive-efficient', title: 'Ergo Privacy Features', type: 'infographic', priority: 1 },
      { url: '/infographics/privacy-but-auditable-sigma-protocols-vs-mixers-and-privacy-coins', title: 'Sigma Protocols Explained', type: 'infographic', priority: 1 },
      { url: '/infographics/ergo-vs-privacy-coins', title: 'Ergo vs Privacy Coins', type: 'infographic', priority: 2 },
      
      // Technology
      { url: '/technology/sigma-protocols', title: 'Sigma Protocols', type: 'technology', priority: 1 },
      { url: '/technology/ergomixer', title: 'ErgoMixer', type: 'technology', priority: 2 },
      
      // Glossary
      { url: '/learn/glossary/sigma-protocols', title: 'Sigma Protocols Definition', type: 'glossary', priority: 2 },
      { url: '/learn/glossary/zero-knowledge-proofs', title: 'Zero-Knowledge Proofs', type: 'glossary', priority: 2 }
    ],
    faqQuestions: [
      'Is Ergo private?',
      'How does ErgoMixer work?',
      'What are Sigma Protocols?',
      'Is Ergo better than Monero for privacy?',
      'Can Ergo transactions be traced?'
    ],
    targetKeywords: [
      'Ergo privacy',
      'Sigma Protocols',
      'ErgoMixer',
      'zero knowledge proofs Ergo',
      'private blockchain',
      'optional privacy cryptocurrency'
    ]
  },

  // ==================== MINING CLUSTER ====================
  {
    id: 'mining',
    name: 'Mining Ergo',
    description: 'GPU-friendly, ASIC-resistant Proof of Work',
    pillar: {
      url: '/miners',
      title: 'Mining Ergo',
      type: 'persona',
      description: 'Complete guide to mining ERG',
      priority: 1
    },
    supporting: [
      // Topics
      { url: '/topics/ergo-mining', title: 'Ergo Mining Deep Dive', type: 'topic', priority: 1 },
      
      // Comparisons
      { url: '/compare/ergo-vs-bitcoin', title: 'Ergo vs Bitcoin', type: 'compare', priority: 1 },
      { url: '/compare/ergo-vs-ethereum-classic', title: 'Ergo vs Ethereum Classic', type: 'compare', priority: 2 },
      { url: '/compare/ergo-vs-ravencoin', title: 'Ergo vs Ravencoin', type: 'compare', priority: 2 },
      
      // Infographics
      { url: '/infographics/autolykos-mining-without-masters', title: 'Autolykos Mining', type: 'infographic', priority: 1 },
      { url: '/infographics/pow-vs-pos-censorship-and-attack-surface', title: 'PoW vs PoS', type: 'infographic', priority: 1 },
      { url: '/infographics/how-is-security-maintained-pos-vs-ergo-autolykos', title: 'Autolykos Security', type: 'infographic', priority: 2 },
      
      // Technology
      { url: '/technology/secure-pow', title: 'Autolykos Algorithm', type: 'technology', priority: 1 },
      { url: '/technology/storage-rent', title: 'Storage Rent', type: 'technology', priority: 2 },
      
      // Glossary
      { url: '/learn/glossary/autolykos', title: 'Autolykos Definition', type: 'glossary', priority: 2 },
      { url: '/learn/glossary/asic-resistance', title: 'ASIC Resistance Definition', type: 'glossary', priority: 2 },
      { url: '/learn/glossary/proof-of-work', title: 'Proof of Work Definition', type: 'glossary', priority: 3 }
    ],
    faqQuestions: [
      'How to mine Ergo?',
      'What GPU is best for Ergo mining?',
      'Is Ergo mining profitable?',
      'Is Ergo ASIC resistant?',
      'What is Autolykos?'
    ],
    targetKeywords: [
      'Ergo mining',
      'mine ERG',
      'Autolykos algorithm',
      'GPU mining Ergo',
      'ASIC resistant cryptocurrency',
      'Ergo mining profitability'
    ]
  },

  // ==================== SMART CONTRACTS CLUSTER ====================
  {
    id: 'smart-contracts',
    name: 'Smart Contracts on Ergo',
    description: 'ErgoScript and eUTXO smart contracts',
    pillar: {
      url: '/topics/ergoscript',
      title: 'ErgoScript & Smart Contracts',
      type: 'topic',
      description: 'Complete guide to ErgoScript development',
      priority: 1
    },
    supporting: [
      // Personas
      { url: '/developers', title: 'Developer Resources', type: 'persona', priority: 1 },
      
      // Developer Resources
      { url: '/playbooks/smart-contract-developer', title: 'Smart Contract Playbook', type: 'playbook', priority: 1 },
      { url: '/patterns', title: 'All ErgoScript Patterns', type: 'pattern', priority: 1 },
      { url: '/patterns/time-locked-contracts', title: 'Time-Locked Contracts', type: 'pattern', priority: 2 },
      { url: '/patterns/multi-signature', title: 'Multi-Signature Patterns', type: 'pattern', priority: 2 },
      
      // Technology
      { url: '/technology/ergoscript', title: 'ErgoScript Language', type: 'technology', priority: 1 },
      { url: '/technology/eutxo', title: 'eUTXO Model', type: 'technology', priority: 1 },
      
      // Infographics
      { url: '/infographics/ergoscript-cypherpunk-code-of-freedom', title: 'ErgoScript Explained', type: 'infographic', priority: 1 },
      { url: '/infographics/eutxo-vs-accounts-vs-classic-utxo', title: 'eUTXO vs Account Model', type: 'infographic', priority: 1 },
      
      // Glossary
      { url: '/learn/glossary/ergoscript', title: 'ErgoScript Definition', type: 'glossary', priority: 2 },
      { url: '/learn/glossary/boxes', title: 'Boxes Definition', type: 'glossary', priority: 2 },
      { url: '/learn/glossary/registers', title: 'Registers Definition', type: 'glossary', priority: 3 }
    ],
    faqQuestions: [
      'What is ErgoScript?',
      'How to write smart contracts on Ergo?',
      'Is ErgoScript Turing complete?',
      'What are boxes and registers?',
      'How is ErgoScript different from Solidity?'
    ],
    targetKeywords: [
      'ErgoScript',
      'Ergo smart contracts',
      'eUTXO smart contracts',
      'blockchain development Ergo',
      'ErgoScript tutorial',
      'Ergo developer'
    ]
  },

  // ==================== EUTXO CLUSTER ====================
  {
    id: 'eutxo',
    name: 'eUTXO Model',
    description: 'Extended UTXO - Bitcoin security with smart contract flexibility',
    pillar: {
      url: '/topics/eutxo',
      title: 'eUTXO Model',
      type: 'topic',
      description: 'Complete guide to the eUTXO model',
      priority: 1
    },
    supporting: [
      // Technology
      { url: '/technology/eutxo', title: 'eUTXO Technology', type: 'technology', priority: 1 },
      
      // Comparisons
      { url: '/compare/ergo-vs-cardano', title: 'Ergo vs Cardano (both eUTXO)', type: 'compare', priority: 1 },
      { url: '/compare/ergo-vs-ethereum', title: 'Ergo vs Ethereum (eUTXO vs Account)', type: 'compare', priority: 1 },
      { url: '/compare/ergo-vs-bitcoin', title: 'Ergo vs Bitcoin (eUTXO vs UTXO)', type: 'compare', priority: 2 },
      
      // Infographics
      { url: '/infographics/ergo-eutxo-model-bitcoin-security-smart-contract-flexibility', title: 'eUTXO Visual Guide', type: 'infographic', priority: 1 },
      { url: '/infographics/eutxo-vs-accounts-vs-classic-utxo', title: 'Model Comparison', type: 'infographic', priority: 1 },
      
      // Glossary
      { url: '/learn/glossary/eutxo', title: 'eUTXO Definition', type: 'glossary', priority: 1 },
      { url: '/learn/glossary/utxo', title: 'UTXO Definition', type: 'glossary', priority: 2 },
      { url: '/learn/glossary/boxes', title: 'Boxes Definition', type: 'glossary', priority: 2 }
    ],
    faqQuestions: [
      'What is eUTXO?',
      'How is eUTXO different from UTXO?',
      'Why is eUTXO better than account model?',
      'What are the advantages of eUTXO?',
      'Does Cardano use the same eUTXO as Ergo?'
    ],
    targetKeywords: [
      'eUTXO',
      'extended UTXO',
      'eUTXO model',
      'UTXO vs account model',
      'eUTXO smart contracts',
      'Ergo eUTXO'
    ]
  },

  // ==================== SOUND MONEY CLUSTER ====================
  {
    id: 'sound-money',
    name: 'Sound Money & Hodling',
    description: 'Fair launch, no pre-mine, cypherpunk principles',
    pillar: {
      url: '/hodlers',
      title: 'Ergo for Hodlers',
      type: 'persona',
      description: 'Why Ergo is sound money for long-term holding',
      priority: 1
    },
    supporting: [
      // Topics
      { url: '/topics/ergo-tokenomics', title: 'Ergo Tokenomics', type: 'topic', priority: 1 },
      
      // Start
      { url: '/start/introduction', title: 'Introduction to Ergo', type: 'use-case', priority: 1 },
      { url: '/wallet', title: 'Ergo Wallets', type: 'use-case', priority: 1 },
      
      // Infographics
      { url: '/infographics/money-without-masters-ergo-vs-banks-and-vc-crypto', title: 'Money Without Masters', type: 'infographic', priority: 1 },
      { url: '/infographics/vc-chain-vs-ergo-fair-launch', title: 'Fair Launch vs VC Chains', type: 'infographic', priority: 1 },
      { url: '/infographics/who-starts-with-the-coins-vc-allocation-vs-ergo-supply', title: 'Token Distribution', type: 'infographic', priority: 1 },
      { url: '/infographics/three-pillars-ergos-sustainability', title: 'Ergo Sustainability', type: 'infographic', priority: 2 },
      
      // Comparisons
      { url: '/compare/ergo-vs-bitcoin', title: 'Ergo vs Bitcoin', type: 'compare', priority: 1 },
      
      // Glossary
      { url: '/learn/glossary/fair-launch', title: 'Fair Launch Definition', type: 'glossary', priority: 2 },
      { url: '/learn/glossary/storage-rent', title: 'Storage Rent Definition', type: 'glossary', priority: 2 },
      { url: '/learn/glossary/emission-schedule', title: 'Emission Schedule', type: 'glossary', priority: 3 }
    ],
    faqQuestions: [
      'Is Ergo a good investment?',
      'What is Ergo\'s tokenomics?',
      'Does Ergo have a pre-mine?',
      'What wallets support Ergo?',
      'Is Ergo deflationary?'
    ],
    targetKeywords: [
      'Ergo investment',
      'ERG tokenomics',
      'Ergo fair launch',
      'buy ERG',
      'Ergo wallet',
      'sound money cryptocurrency'
    ]
  }
];

// Helper function to get cluster by pillar URL
export function getClusterByPillarUrl(url: string): TopicCluster | undefined {
  return topicClusters.find(cluster => cluster.pillar.url === url);
}

// Helper function to get cluster by supporting URL
export function getClusterBySupportingUrl(url: string): TopicCluster | undefined {
  return topicClusters.find(cluster => 
    cluster.supporting.some(link => link.url === url)
  );
}

// Helper function to get all clusters a URL belongs to
export function getClustersForUrl(url: string): TopicCluster[] {
  return topicClusters.filter(cluster => 
    cluster.pillar.url === url || 
    cluster.supporting.some(link => link.url === url)
  );
}

// Helper function to get related content for a URL
export function getRelatedContent(url: string): ClusterLink[] {
  const clusters = getClustersForUrl(url);
  const related: ClusterLink[] = [];
  
  for (const cluster of clusters) {
    // Add pillar if current page is supporting
    if (cluster.pillar.url !== url) {
      related.push(cluster.pillar);
    }
    
    // Add supporting pages (excluding current)
    for (const link of cluster.supporting) {
      if (link.url !== url && !related.some(r => r.url === link.url)) {
        related.push(link);
      }
    }
  }
  
  // Sort by priority
  return related.sort((a, b) => a.priority - b.priority);
}

// Helper to get pillar page for any URL in a cluster
export function getPillarForUrl(url: string): ClusterLink | undefined {
  const cluster = getClustersForUrl(url)[0];
  return cluster?.pillar;
}

