import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface UseLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function UseLayout({ children, params }: UseLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['use']}>
      {children}
    </ScopedMessagesProvider>
  )
}
