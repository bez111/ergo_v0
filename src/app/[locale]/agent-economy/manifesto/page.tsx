import { redirect } from "next/navigation"

const BLOG_MANIFESTO_PATH = "/blog/agent-economy-manifesto"

export default async function AgentEconomyManifestoRedirect({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  redirect(locale === "en" ? BLOG_MANIFESTO_PATH : `/${locale}${BLOG_MANIFESTO_PATH}`)
}
