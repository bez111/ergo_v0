import type { Metadata } from "next"
import { DemoDetailPage } from "../_components/demo-detail-page"
import { getAgentDemo } from "../_data"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const demo = getAgentDemo("x402-accord-gateway")

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: `${demo.title} | Ergo Agent Economy Demo`,
    description: demo.description,
    alternates: getAlternates(`/demos/${demo.slug}`, locale),
    openGraph: {
      title: demo.title,
      description: demo.description,
      url: getCanonicalUrl(`/demos/${demo.slug}`, locale),
      siteName: "Ergo Blockchain",
      images: [{ url: "https://www.ergoblockchain.org/og/demos.png", width: 1200, height: 630 }],
      type: "website",
      locale: getOgLocale(locale),
    },
  }
}

export default function X402AccordGatewayDemoPage() {
  return <DemoDetailPage demo={demo} />
}
