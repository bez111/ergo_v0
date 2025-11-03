  import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'

  export const howToSchema = (t) => ({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': 'https://ergoblockchain.org/start#howto',
    name: t('howTo.name'),
    description: t('howTo.description'),
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
        name: t('howTo.steps.choosePath.name'),
        text: t('howTo.steps.choosePath.text'),
        url: 'https://ergoblockchain.org/start',
        image: 'https://ergoblockchain.org/images/start-paths.png'
      },
      {
        '@type': 'HowToStep',
        name: t('howTo.steps.understandWhy.name'),
        text: t('howTo.steps.understandWhy.text'),
        url: 'https://ergoblockchain.org/start/introduction'
      },
      {
        '@type': 'HowToStep',
        name: t('howTo.steps.getWallet.name'),
        text: t('howTo.steps.getWallet.text'),
        url: 'https://ergoblockchain.org/wallet'
      },
      {
        '@type': 'HowToStep',
        name: t('howTo.steps.tryTestnet.name'),
        text: t('howTo.steps.tryTestnet.text'),
        url: 'https://ergoblockchain.org/wallet/testnet-faucet'
      }
    ]
  });

  export const knowledgeGraph = generateKnowledgeGraph('start')