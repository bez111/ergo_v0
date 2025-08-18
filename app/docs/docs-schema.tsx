export function generateDocsSchema() {
  const baseUrl = 'https://ergoblockchain.org'
  
  return [
    // CollectionPage Schema
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${baseUrl}/docs`,
      name: 'Ergo Documentation Hub',
      description: 'Comprehensive documentation for Ergo Platform covering blockchain technology, development, mining, and ecosystem.',
      url: `${baseUrl}/docs`,
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${baseUrl}`,
        name: 'Ergo Platform',
        url: baseUrl
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Documentation',
            item: `${baseUrl}/docs`
          }
        ]
      },
      mainEntity: {
        '@type': 'ItemList',
        name: 'Documentation Categories',
        numberOfItems: 6,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Getting Started',
            url: `${baseUrl}/docs/why-ergo`,
            description: 'Essential resources for newcomers to Ergo'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Introduction',
            url: `${baseUrl}/docs/introduction`,
            description: 'Deep dive into Ergo philosophy and features'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Ecosystem',
            url: `${baseUrl}/docs/ecosystem`,
            description: 'Applications and services built on Ergo'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Development',
            url: `${baseUrl}/docs/developers`,
            description: 'Resources for developers building on Ergo'
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Mining',
            url: `${baseUrl}/docs/miners`,
            description: 'Mining guides and pool information'
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Resources',
            url: `${baseUrl}/docs/introduction/resources`,
            description: 'Additional learning materials and references'
          }
        ]
      }
    },
    // WebPage Schema
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${baseUrl}/docs#webpage`,
      url: `${baseUrl}/docs`,
      name: 'Ergo Documentation | Complete Guide',
      description: 'Your comprehensive guide to understanding, using, and building on Ergo Platform.',
      publisher: {
        '@type': 'Organization',
        name: 'Ergo Platform',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`
        }
      },
      inLanguage: 'en',
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString()
    },
    // FAQPage Schema for common questions
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Ergo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ergo is a next-generation smart contract platform that ensures economic freedom for ordinary people through secure, accessible, and decentralized financial tools.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I start developing on Ergo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start with our Getting Started guide to set up your development environment, then explore ErgoScript tutorials and API documentation to build your first smart contract.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I mine Ergo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ergo uses the Autolykos proof-of-work algorithm. Check our mining guide for hardware requirements, software setup, and pool selection.'
          }
        },
        {
          '@type': 'Question',
          name: 'What makes Ergo unique?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ergo features the eUTXO model, storage rent for sustainability, NIPoPoWs for light clients, and Sigma protocols for advanced smart contracts.'
          }
        }
      ]
    },
    // Organization Schema
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: 'Ergo Platform',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: 'Ergo Platform - Smart Money for the Future',
      sameAs: [
        'https://twitter.com/ergoplatformorg',
        'https://github.com/ergoplatform',
        'https://t.me/ergoplatform',
        'https://discord.gg/ergo-platform',
        'https://reddit.com/r/ergonauts'
      ],
      knowsAbout: [
        'Blockchain Technology',
        'Smart Contracts',
        'Cryptocurrency',
        'DeFi',
        'Proof of Work',
        'ErgoScript'
      ]
    }
  ]
} 