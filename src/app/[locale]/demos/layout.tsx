import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface DemosLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function DemosLayout({ children, params }: DemosLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['demos']}>
      {children}
    </ScopedMessagesProvider>
  )
}
