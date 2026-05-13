import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface PatternsLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function PatternsLayout({ children, params }: PatternsLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['patterns', 'content-hubs']}>
      {children}
    </ScopedMessagesProvider>
  )
}
