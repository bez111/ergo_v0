  import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

  export const howToSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': 'https://ergoblockchain.org/start#howto',
    // Hard-coded to avoid runtime errors if translation keys are missing
    name: 'How to get started with Ergo',
    description: 'A simple path to understand Ergo, choose your role and set up a wallet to join the ecosystem.',
    image: 'https://ergoblockchain.org/og/start.png',
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Computer or smartphone' },
      { '@type': 'HowToSupply', name: 'Internet connection' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Ergo wallet (Nautilus or Satergo)' },
      { '@type': 'HowToTool', name: 'Web browser' }
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Choose your path',
        text: 'Decide whether you are starting as a builder, miner, privacy user, long‑term saver or just exploring, then pick the matching track on the Start page.',
        url: 'https://ergoblockchain.org/start',
        image: 'https://ergoblockchain.org/images/start-paths.png'
      },
      {
        '@type': 'HowToStep',
        name: 'Understand why Ergo exists',
        text: 'Read the introduction to Ergo to understand the mission, PoW + eUTXO design and why it focuses on real financial freedom.',
        url: 'https://ergoblockchain.org/start/introduction'
      },
      {
        '@type': 'HowToStep',
        name: 'Get a wallet',
        text: 'Install a recommended Ergo wallet (such as Nautilus or Satergo), write down your seed phrase safely and learn basic self‑custody rules.',
        url: 'https://ergoblockchain.org/wallet'
      },
      {
        '@type': 'HowToStep',
        name: 'Try Ergo on testnet',
        text: 'Request testnet ERG from the faucet and try simple transactions or dApps so you can practice without risking real funds.',
        url: 'https://ergoblockchain.org/wallet/testnet-faucet'
      }
    ]
  });

  export const knowledgeGraph = generateKnowledgeGraph('start')