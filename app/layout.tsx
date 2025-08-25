import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css"

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
  metadataBase: new URL('https://ergoblockchain.org'),
  title: {
    default: "Ergo Platform - Resilient Blockchain for Contractual Money",
    template: "%s | Ergo Platform"
  },
  description: "Ergo is a resilient blockchain platform for contractual money. Build DeFi applications with advanced smart contracts, built-in privacy, and sustainable economics.",
  keywords: [
    "ergo blockchain",
    "smart contracts", 
    "DeFi platform",
    "ErgoScript",
    "eUTXO model",
    "proof of work",
    "cryptocurrency",
    "blockchain development",
    "decentralized finance",
    "privacy blockchain"
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
    url: 'https://ergoblockchain.org',
    siteName: 'Ergo Platform',
    title: 'Ergo Platform - Resilient Blockchain for Contractual Money',
    description: 'Ergo is a resilient blockchain platform for contractual money. Build DeFi applications with advanced smart contracts, built-in privacy, and sustainable economics.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ergo Platform - Resilient Blockchain for Contractual Money',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ergoplatformorg',
    creator: '@ergoplatformorg',
    title: 'Ergo Platform - Resilient Blockchain for Contractual Money',
    description: 'Ergo is a resilient blockchain platform for contractual money. Build DeFi applications with advanced smart contracts, built-in privacy, and sustainable economics.',
    images: ['/og-image.png'],
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
  alternates: {
    canonical: 'https://ergoblockchain.org',
    languages: {
      'en': 'https://ergoblockchain.org',
      'ru': 'https://ergoblockchain.org/ru',
      'pt-BR': 'https://ergoblockchain.org/pt-br',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

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
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
