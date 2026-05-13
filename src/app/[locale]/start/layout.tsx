import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface StartLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function StartLayout({ children, params }: StartLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['start', 'faq']}>
      {children}
    </ScopedMessagesProvider>
  )
}
