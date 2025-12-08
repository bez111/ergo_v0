import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'
import { createHowToSchema } from '@/lib/seo'

// Centralized HowTo schema for /start page
export const howToSchema = () => createHowToSchema({
  name: 'How to get started with Ergo',
  description: 'A simple path to understand Ergo, choose your role and set up a wallet to join the ecosystem.',
  totalTime: 'PT30M',
  estimatedCost: { value: '0', currency: 'USD' },
  steps: [
    {
      name: 'Choose your path',
      text: 'Decide whether you are starting as a builder, miner, privacy user, long-term saver or just exploring, then pick the matching track on the Start page.',
      url: 'https://ergoblockchain.org/start',
    },
    {
      name: 'Understand why Ergo exists',
      text: 'Read the introduction to Ergo to understand the mission, PoW + eUTXO design and why it focuses on real financial freedom.',
      url: 'https://ergoblockchain.org/start/introduction',
    },
    {
      name: 'Get a wallet',
      text: 'Install a recommended Ergo wallet (such as Nautilus or Satergo), write down your seed phrase safely and learn basic self-custody rules.',
      url: 'https://ergoblockchain.org/wallet',
    },
    {
      name: 'Try Ergo on testnet',
      text: 'Request testnet ERG from the faucet and try simple transactions or dApps so you can practice without risking real funds.',
      url: 'https://ergoblockchain.org/wallet/testnet-faucet',
    },
  ],
})

export const knowledgeGraph = generateKnowledgeGraph('start')