import { DefinedTermSet } from '@/src/types/schema'

export const ERGO_GLOSSARY: DefinedTermSet = {
  '@type': 'DefinedTermSet',
  name: 'Ergo Platform Glossary',
  description: 'Technical terms and definitions related to Ergo Platform and blockchain technology',
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'eUTXO',
      description: 'Extended Unspent Transaction Output model, a blockchain accounting model that extends Bitcoin\'s UTXO model with additional features for smart contracts.',
      inDefinedTermSet: 'Ergo Platform Glossary',
      category: 'Technology',
      relatedTerms: ['UTXO', 'Smart Contracts', 'ErgoScript'],
      examples: [
        'Ergo uses eUTXO model for enhanced smart contract capabilities',
        'eUTXO allows for parallel transaction processing'
      ]
    },
    {
      '@type': 'DefinedTerm',
      name: 'ErgoScript',
      description: 'A powerful and flexible smart contract language designed for the Ergo blockchain, based on Sigma protocols.',
      inDefinedTermSet: 'Ergo Platform Glossary',
      category: 'Development',
      relatedTerms: ['Smart Contracts', 'Sigma Protocols', 'eUTXO'],
      examples: [
        'ErgoScript contracts can implement complex DeFi protocols',
        'The language supports zero-knowledge proofs'
      ]
    },
    {
      '@type': 'DefinedTerm',
      name: 'Sigma Protocols',
      description: 'A family of zero-knowledge proof protocols used in Ergo for privacy and security features.',
      inDefinedTermSet: 'Ergo Platform Glossary',
      category: 'Security',
      relatedTerms: ['Zero-Knowledge Proofs', 'Privacy', 'ErgoScript'],
      examples: [
        'Sigma protocols enable private transactions',
        'Used for secure multi-signature schemes'
      ]
    },
    {
      '@type': 'DefinedTerm',
      name: 'NIPoPoWs',
      description: 'Non-Interactive Proofs of Proof-of-Work, a technology that allows for efficient light client verification.',
      inDefinedTermSet: 'Ergo Platform Glossary',
      category: 'Technology',
      relatedTerms: ['Light Clients', 'Proof of Work', 'Verification'],
      examples: [
        'NIPoPoWs enable efficient mobile wallet synchronization',
        'Reduces bandwidth requirements for light clients'
      ]
    },
    {
      '@type': 'DefinedTerm',
      name: 'Storage Rent',
      description: 'A mechanism in Ergo that charges for long-term storage of unspent outputs to prevent blockchain bloat.',
      inDefinedTermSet: 'Ergo Platform Glossary',
      category: 'Economics',
      relatedTerms: ['UTXO', 'Blockchain Size', 'Fees'],
      examples: [
        'Storage rent encourages efficient use of blockchain space',
        'Helps maintain network sustainability'
      ]
    }
  ]
} 