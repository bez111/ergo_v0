import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface DevelopersLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function DevelopersLayout({ children, params }: DevelopersLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['developers']}>
      {children}
    </ScopedMessagesProvider>
  )
}
