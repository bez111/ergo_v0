
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
import { useTranslations } from 'next-intl'

export function getLocalizedMenuData(t: any) {
  return [
    {
      title: t('docsMenu.introduction.title'),
      items: [
        { title: t('docsMenu.introduction.whyErgo'), href: "/docs/why-ergo" },
        {
          title: t('docsMenu.introduction.keyFeatures'),
          href: "/docs/introduction/key-features",
        },
        {
          title: t('docsMenu.introduction.roadmap'),
          href: "/docs/introduction/roadmap"
        },
        {
          title: t('docsMenu.introduction.researchWhitepapers'),
          href: "/docs/introduction/research-whitepapers"
        },
        {
          title: t('docsMenu.introduction.entities'),
          href: "/docs/introduction/entities"
        },
        { title: t('docsMenu.introduction.wallets'), href: "/docs/introduction/wallets" },
        {
          title: t('docsMenu.introduction.resources'),
          href: "/docs/introduction/resources"
        },
        {
          title: t('docsMenu.introduction.contribute'),
          href: "/docs/contribute"
        },
        {
          title: t('docsMenu.introduction.events'),
          href: "/docs/introduction/events",
        },
        { 
          title: t('docsMenu.introduction.glossary'), href: "/learn/glossary" 
        },
        { 
          title: t('docsMenu.introduction.faq'), href: "/docs/introduction/faq" 
        },
      ],
    },
    {
      title: t('docsMenu.ecosystem.title'),
      items: [
        {
          title: t('docsMenu.ecosystem.infrastructure'),
          href: "/docs/ecosystem/infrastructure",
        },
        {
          title: t('docsMenu.ecosystem.applications'),
          href: "/docs/ecosystem/applications",
        },
        {
          title: t('docsMenu.ecosystem.financial'),
          href: "/docs/ecosystem/financial",
        },
        {
          title: t('docsMenu.ecosystem.nfts'),
          href: "/docs/ecosystem/nfts",
        },
        {
          title: t('docsMenu.ecosystem.privacy'),
          href: "/docs/ecosystem/privacy",
        },
        {
          title: t('docsMenu.ecosystem.ai'),
          href: "/docs/ecosystem/ai",
        },
        {
          title: t('docsMenu.ecosystem.daos'),
          href: "/docs/ecosystem/daos",
        },
        {
          title: t('docsMenu.ecosystem.tooling'),
          href: "/docs/ecosystem/tooling",
        },
        {
          title: t('docsMenu.ecosystem.standards'),
          href: "/docs/ecosystem/Standards",
        },
      ],
    },
    {
      title: t('docsMenu.developers.title'),
      items: [
        {
          title: t('docsMenu.developers.gettingStarted'),
          href: "/docs/developers",
        },
        {
          title: t('docsMenu.developers.ergoscriptLanguages'),
          href: "/docs/developers/ergoscript-languages",
        },
        {
          title: t('docsMenu.developers.dataModelApis'),
          href: "/docs/developers/data-model-apis",
        },
        {
          title: t('docsMenu.developers.cryptographicPrimitives'),
          href: "/docs/developers/cryptographic-primitives",
        },
        {
          title: t('docsMenu.developers.infrastructure'),
          href: "/docs/developers/infrastructure",
        },
        {
          title: t('docsMenu.developers.tooling'),
          href: "/docs/developers/tooling",
        },
        {
          title: t('docsMenu.developers.tutorials'),
          href: "/docs/developers/tutorials",
        },
        {
          title: t('docsMenu.developers.bountiesGrants'),
          href: "/docs/developers/bounties-grants",
        },
        {
          title: t('docsMenu.developers.communitySupport'),
          href: "/docs/developers/community-support",
        },
        {
          title: t('docsMenu.developers.students'),
          href: "/docs/developers/students",
        },
        {
          title: t('docsMenu.developers.resources'),
          href: "/docs/developers/resources",
        },
      ],
    },
    {
      title: t('docsMenu.miners.title'),
      items: [
        {
          title: t('docsMenu.miners.miningGuides'),
          href: "/docs/miners/mining-guides",
        },
        {
          title: t('docsMenu.miners.poolMining'),
          href: "/docs/miners/pool-mining",
        },
        {
          title: t('docsMenu.miners.soloMining'),
          href: "/docs/miners/solo-mining",
        },
        {
          title: t('docsMenu.miners.hardware'),
          href: "/docs/miners/hardware",
        },
        {
          title: t('docsMenu.miners.software'),
          href: "/docs/miners/software",
        },
        {
          title: t('docsMenu.miners.troubleshooting'),
          href: "/docs/miners/troubleshooting",
        },
      ],
    },
  ]
}

// Fallback static export for backward compatibility
export const menuData = [
  {
    title: "Introduction",
    items: [
      { title: "Why Ergo", href: "/docs/why-ergo" },
      {
        title: "Key Features",
        href: "/docs/introduction/key-features",
      },
      {
        title: "Roadmap",
        href: "/docs/introduction/roadmap"
      },
      {
        title: "Research & Whitepapers",
        href: "/docs/introduction/research-whitepapers"
      },
      {
        title: "Entities",
        href: "/docs/introduction/entities"
      },
      { title: "Wallets", href: "/docs/introduction/wallets" },
      {
        title: "Resources",
        href: "/docs/introduction/resources"
      },
      {
        title: "Contribute",
        href: "/docs/contribute"
      },
      {
        title: "Events",
        href: "/docs/introduction/events",
      },
      { 
        title: "Glossary", href: "/learn/glossary" 
      },
      { 
        title: "FAQ", href: "/docs/introduction/faq" 
      },
    ],
  },
  {
    title: "Ecosystem",
    items: [
      {
        title: "Infrastructure",
        href: "/docs/ecosystem/infrastructure",
      },
      {
        title: "Applications",
        href: "/docs/ecosystem/applications",
      },
      {
        title: "Financial",
        href: "/docs/ecosystem/financial",
      },
      {
        title: "NFTs",
        href: "/docs/ecosystem/nfts",
      },
      {
        title: "Privacy",
        href: "/docs/ecosystem/privacy",
      },
      {
        title: "AI",
        href: "/docs/ecosystem/ai",
      },
      {
        title: "DAOs",
        href: "/docs/ecosystem/daos",
      },
      {
        title: "Tooling",
        href: "/docs/ecosystem/tooling",
      },
      {
        title: "Standards",
        href: "/docs/ecosystem/Standards",
      },
    ],
  },
  {
    title: "Developers",
    items: [
      {
        title: "Getting Started",
        href: "/docs/developers",
      },
      {
        title: "ErgoScript Languages",
        href: "/docs/developers/ergoscript-languages",
      },
      {
        title: "Data Model & APIs",
        href: "/docs/developers/data-model-apis",
      },
      {
        title: "Cryptographic Primitives",
        href: "/docs/developers/cryptographic-primitives",
      },
      {
        title: "Infrastructure",
        href: "/docs/developers/infrastructure",
      },
      {
        title: "Tooling",
        href: "/docs/developers/tooling",
      },
      {
        title: "Tutorials",
        href: "/docs/developers/tutorials",
      },
      {
        title: "Bounties & Grants",
        href: "/docs/developers/bounties-grants",
      },
      {
        title: "Community Support",
        href: "/docs/developers/community-support",
      },
      {
        title: "Students",
        href: "/docs/developers/students",
      },
      {
        title: "Resources",
        href: "/docs/developers/resources",
      },
    ],
  },
  {
    title: "Miners",
    items: [
      {
        title: "Mining Guides",
        href: "/docs/miners/mining-guides",
      },
      {
        title: "Pool Mining",
        href: "/docs/miners/pool-mining",
      },
      {
        title: "Solo Mining",
        href: "/docs/miners/solo-mining",
      },
      {
        title: "Hardware",
        href: "/docs/miners/hardware",
      },
      {
        title: "Software",
        href: "/docs/miners/software",
      },
      {
        title: "Troubleshooting",
        href: "/docs/miners/troubleshooting",
      },
    ],
  },
] 