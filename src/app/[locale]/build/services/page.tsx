import type { Metadata } from "next"
import { getAlternates, getCanonicalUrl } from "@/lib/seo"
import { DevServicesClient } from "./DevServicesClient"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Developer Services | Ergo",
    description:
      "A live developer workbench for Ergo: testnet faucet surface, address inspector, box and transaction lookup, Sage receipt verification, Blake2b hashing, MCP status, and machine-readable service index.",
    alternates: getAlternates("/build/services", locale),
    openGraph: {
      title: "Ergo Developer Services",
      description:
        "Fast helpers for builders: faucet, inspectors, receipt verifier, hashing, MCP, and live service status.",
      url: getCanonicalUrl("/build/services", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/hubs/developers.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo developer services workbench",
        },
      ],
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Developer Services",
      description:
        "A compact workbench for Ergo builders: faucet, inspectors, receipt verifier, hashing, MCP, and live status.",
      images: [`${BASE_URL}/og/hubs/developers.jpg`],
    },
  }
}

export default function DevServicesPage() {
  return <DevServicesClient />
}
