import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface EcosystemLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function EcosystemLayout({ children, params }: EcosystemLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['ecosystem', 'ecosystem-projects']}>
      {children}
    </ScopedMessagesProvider>
  )
}
