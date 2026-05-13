import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface InfographicsLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function InfographicsLayout({ children, params }: InfographicsLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['infographics', 'content-hubs']}>
      {children}
    </ScopedMessagesProvider>
  )
}
