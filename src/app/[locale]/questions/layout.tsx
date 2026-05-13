import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface QuestionsLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function QuestionsLayout({ children, params }: QuestionsLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['content-hubs']}>
      {children}
    </ScopedMessagesProvider>
  )
}
