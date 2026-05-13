import { redirect } from "next/navigation"

const ERGO_WATCH_AGENT_METRICS_PATH = "/ergo-watch#agent-economy"

export default async function AgentEconomyMetricsRedirect({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  redirect(
    locale === "en"
      ? ERGO_WATCH_AGENT_METRICS_PATH
      : `/${locale}${ERGO_WATCH_AGENT_METRICS_PATH}`,
  )
}
