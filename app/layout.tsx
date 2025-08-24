import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"
import { organizationSchema, websiteSchema } from "@/lib/schema-generator"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: 'swap',
  preload: true,
})

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
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/hero-bg.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/logo.png"
          as="image"
          type="image/png"
        />
        
        {/* Global Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
      </head>
      <body 
        className={`${inter.className} ${jetbrainsMono.variable} min-h-screen bg-black text-white antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
