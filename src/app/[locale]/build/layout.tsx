import { ScopedMessagesProvider } from "@/components/i18n/scoped-messages-provider"
import type { Locale } from "@/i18n/request"

interface BuildLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function BuildLayout({ children, params }: BuildLayoutProps) {
  const { locale } = await params
  return (
    <ScopedMessagesProvider locale={locale as Locale} files={['build']}>
      {children}
    </ScopedMessagesProvider>
  )
}
