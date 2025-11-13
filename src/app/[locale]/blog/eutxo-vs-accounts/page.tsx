import type { Metadata } from 'next';
import { EutxoVsAccountsClient } from './EutxoVsAccountsClient';
import { siteConfig } from '@/config/site-config';

const origin = siteConfig.siteUrl;

export const metadata: Metadata = {
  title: "Two Blockchain Models: Why Ergo Chose Differently | Ergo Blog",
  description: "Deterministic execution, explicit state transitions, and auditable privacy patterns — how Ergo's eUTXO model differs from Ethereum's account model for secure, scalable DeFi.",
  authors: [{ name: "Technical Team", url: "https://ergoblockchain.org" }],
  creator: "Ergo Platform",
  publisher: "Ergo Platform",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(origin),
  alternates: { canonical: `${origin}/blog/eutxo-vs-accounts` },
  openGraph: {
    title: "Two Blockchain Models: Why Ergo Chose Differently",
    description: "Deterministic execution, explicit state transitions, and auditable privacy patterns — how Ergo's eUTXO model differs from Ethereum's account model for secure, scalable DeFi.",
    url: `${origin}/blog/eutxo-vs-accounts`,
    siteName: "Ergo Blockchain",
    locale: "en_US",
    type: "article",
    publishedTime: "2024-11-07T00:00:00.000Z",
    modifiedTime: new Date().toISOString(),
    authors: ["Technical Team"],
    section: "Technology",
    tags: ["eUTXO", "Smart Contracts", "Ethereum Comparison", "Technical"],
    images: [
      {
        url: `${origin}/og/eutxo-vs-accounts.png`,
        width: 1200,
        height: 630,
        alt: "Ergo's eUTXO vs Ethereum's Accounts: Why It Matters"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: [`${origin}/og/eutxo-vs-accounts.png`],
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
  },
  robots: { index: true, follow: true },
  keywords: [
    "ergo blockchain",
    "eutxo model",
    "ethereum accounts",
    "smart contracts",
    "ergoscript",
    "blockchain comparison",
    "deterministic execution",
    "sigma protocols",
    "defi security"
  ]
};

export default function EutxoVsAccountsPage() {
  return <EutxoVsAccountsClient />;
}
