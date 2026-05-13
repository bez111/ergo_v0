import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface FaqLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function FaqLayout({ children, params }: FaqLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['faq']}>
      {children}
    </ScopedMessagesProvider>
  )
}
