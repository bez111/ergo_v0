import { permanentRedirect } from "next/navigation"

const CANONICAL_SLUG = "ergo-live-proof-surface-agent-economy"

export function generateMetadata() {
  return {
    robots: {
      index: false,
      follow: true,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  permanentRedirect(locale === "en" ? `/blog/${CANONICAL_SLUG}` : `/${locale}/blog/${CANONICAL_SLUG}`)
}
