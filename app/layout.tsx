import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/animations/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ergoplatform.org"),
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
  ],
  authors: [{ name: "Ergo Platform", url: "https://ergoplatform.org" }],
  creator: "Ergo Platform",
  publisher: "Ergo Platform",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ergoplatform.org",
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
    title: {
      default: "Ergo Blockchain | Resilient Platform for Contractual Money",
      template: "%s | Ergo Platform",
    },
    description:
      "Explore Ergo: a secure, decentralized platform for contractual money. Learn about eUTXO, ErgoScript, and build the future of finance.",
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
    generator: 'v0.dev'
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff8800" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ergo Platform",
              url: "https://ergoplatform.org",
              logo: "https://ergoplatform.org/logo.png",
              description:
                "A resilient platform for contractual money. Ergo Blockchain provides the tools for people to secure financial interactions.",
              sameAs: [
                "https://twitter.com/ergoplatform",
                "https://github.com/ergoplatform",
                "https://discord.gg/ergo",
                "https://www.reddit.com/r/ergonauts/",
                "https://t.me/ergoplatform",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                url: "https://ergoplatform.org/community/discussion",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
