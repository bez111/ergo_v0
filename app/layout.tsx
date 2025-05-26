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
  title: "Ergo Blockchain | Contractual Money",
  description:
    "A resilient platform for contractual money. Ergo Blockchain provides the tools for people to secure financial interactions.",
  keywords: ["blockchain", "cryptocurrency", "ergo", "smart contracts", "defi", "privacy"],
  authors: [{ name: "Ergo Platform" }],
  creator: "Ergo Platform",
  publisher: "Ergo Platform",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ergoplatform.org",
    title: "Ergo Blockchain | Contractual Money",
    description:
      "A resilient platform for contractual money. Ergo Blockchain provides the tools for people to secure financial interactions.",
    siteName: "Ergo Platform",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ergo Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo Blockchain | Contractual Money",
    description:
      "A resilient platform for contractual money. Ergo Blockchain provides the tools for people to secure financial interactions.",
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
              description: "A resilient platform for contractual money",
              sameAs: [
                "https://twitter.com/ergoplatform",
                "https://github.com/ergoplatform",
                "https://discord.gg/ergo",
              ],
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
