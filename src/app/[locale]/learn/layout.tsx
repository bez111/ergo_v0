import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface LearnLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LearnLayout({ children, params }: LearnLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['learn', 'content-hubs']}>
      {children}
    </ScopedMessagesProvider>
  )
}
