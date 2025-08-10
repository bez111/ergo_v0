import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SchemaOrg } from "@/components/seo/schema-org"
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from "@/lib/schema-constants"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"], display: "swap" })
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ergoblockchain.org"),
  title: {
    default: "Ergo Blockchain | Resilient Platform for Contractual Money",
    template: "%s | Ergo Platform",
  },
  description:
    "Discover Ergo, a resilient Proof-of-Work blockchain platform for contractual money. Explore eUTXO, ErgoScript, Sigma protocols, and build secure dApps.",
  keywords: [
    "ergo",
    "blockchain",
    "cryptocurrency",
    "smart contracts",
    "eutxo",
    "proof-of-work",
    "ergoscript",
    "sigma protocols",
    "defi",
    "privacy",
    "decentralized applications",
    "contractual money",
    "cryptocurrency platform",
    "blockchain technology",
    "decentralized finance",
  ],
  authors: [{ name: "Ergo Platform", url: "https://ergoblockchain.org" }],
  creator: "Ergo Platform",
  publisher: "Ergo Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ergoblockchain.org",
    title: {
      default: "Ergo Blockchain | Resilient Platform for Contractual Money",
      template: "%s | Ergo Platform",
    },
    description:
      "Ergo is a next-generation smart contract platform that ensures economic freedom for ordinary people through secure, accessible, and decentralized financial tools.",
    siteName: "Ergo Platform",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ergo Platform - Contractual Money",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo Blockchain | Resilient Platform for Contractual Money",
    description: "Discover Ergo, a resilient Proof-of-Work blockchain platform for contractual money.",
    images: ["/og-image.png"],
    creator: "@ergoplatform",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff8800" />
        <SchemaOrg type="Organization" data={ORGANIZATION_SCHEMA} />
        <SchemaOrg type="WebSite" data={WEBSITE_SCHEMA} />
      </head>
      <body className={`${inter.className} ${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 relative overflow-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <GoogleAnalytics id={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
      </body>
    </html>
  )
}
