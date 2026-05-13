import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface HodlersLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function HodlersLayout({ children, params }: HodlersLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['hodlers']}>
      {children}
    </ScopedMessagesProvider>
  )
}
