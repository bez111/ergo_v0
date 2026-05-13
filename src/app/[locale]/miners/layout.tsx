import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface MinersLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function MinersLayout({ children, params }: MinersLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['miners']}>
      {children}
    </ScopedMessagesProvider>
  )
}
