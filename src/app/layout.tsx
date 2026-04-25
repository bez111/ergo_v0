import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css"
import { siteConfig } from "@/config/site-config";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { GlobalSchemas } from "@/components/seo/global-schemas";
import { SEOMonitor } from "@/components/seo/seo-monitor";
import { Suspense } from "react";
import { createOrganizationSchema } from "@/lib/seo";
import { renderSchemaScripts } from "@/components/seo/SEOSchemas";

/* ISR: статическая генерация + обновление каждые 5 минут */
export const revalidate = 300;


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Ergo — The Agentic Blockchain for Contractual Money",
    template: "%s | Ergo Platform"
  },
  description: "Ergo is the agentic blockchain — PoW + eUTXO + ErgoScript built for autonomous AI agent payments, DeFi, and programmable money without counterparty risk.",
  keywords: [
    "ergo blockchain",
    "agentic blockchain",
    "blockchain for AI agents",
    "autonomous AI payments blockchain",
    "AI agent payments",
    "agentic blockchain payments",
    "smart contracts",
    "DeFi platform",
    "ErgoScript",
    "eUTXO model",
    "proof of work",
    "cryptocurrency",
    "blockchain development",
    "decentralized finance",
    "privacy blockchain",
    "autonomous agent payments",
    "ergo agent economy",
  ],
  authors: [{ name: "Ergo Platform" }],
  creator: "Ergo Platform",
  publisher: "Ergo Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    siteName: 'Ergo Platform',
    title: 'Ergo — The Agentic Blockchain for Contractual Money',
    description: 'Ergo is the agentic blockchain — PoW + eUTXO + ErgoScript built for autonomous AI agent payments, DeFi, and programmable money without counterparty risk.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ergo Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ergo — The Agentic Blockchain',
    description: 'PoW + eUTXO + ErgoScript — a blockchain designed specifically for autonomous AI agent payments. No premine. No VC. Just verifiable settlement.',
    images: ['/og-image.png'],
    creator: siteConfig.twitterHandle,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
    languages: {
      'en': 'https://www.ergoblockchain.org',
      'ru': 'https://www.ergoblockchain.org/ru',
      'fr': 'https://www.ergoblockchain.org/fr',
      'de': 'https://www.ergoblockchain.org/de',
      'es': 'https://www.ergoblockchain.org/es',
      'ar': 'https://www.ergoblockchain.org/ar',
      'zh-CN': 'https://www.ergoblockchain.org/zh-cn',
      'zh-TW': 'https://www.ergoblockchain.org/zh-tw',
      'tr': 'https://www.ergoblockchain.org/tr',
      'pt-BR': 'https://www.ergoblockchain.org/pt-br',
      'it': 'https://www.ergoblockchain.org/it',
      'ja': 'https://www.ergoblockchain.org/ja',
      'ko-KR': 'https://www.ergoblockchain.org/ko-kr',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // TODO: добавить реальные коды верификации Google Search Console и Yandex Webmaster
  // verification: {
  //   google: 'YOUR_REAL_GOOGLE_CODE',
  //   yandex: 'YOUR_REAL_YANDEX_CODE',
  // },
  icons: {
    icon: "/logo-ergo.svg", // <- путь из public/
  },
}

// JSON-LD via centralized SEO module
const organizationSchema = createOrganizationSchema()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Fonts preconnect removed - fonts are self-hosted via next/font */}
        <link rel="dns-prefetch" href="https://www.ergoblockchain.org" />
        <link rel="preload" href="/og-image.png" as="image" type="image/png" />
        {renderSchemaScripts([organizationSchema])}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        <GlobalSchemas />
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <SEOMonitor debug={process.env.NODE_ENV === 'development'} />
        {children}
      </body>
    </html>
  );
} 