import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface TopicsLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function TopicsLayout({ children, params }: TopicsLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['content-hubs']}>
      {children}
    </ScopedMessagesProvider>
  )
}
