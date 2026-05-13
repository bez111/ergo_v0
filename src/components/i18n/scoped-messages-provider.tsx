import { NextIntlClientProvider } from 'next-intl';
import { getScopedMessages, type MessageFile } from '@/lib/messages';
import type { Locale } from '@/i18n/request';

interface ScopedMessagesProviderProps {
  children: React.ReactNode;
  locale: Locale;
  files: readonly MessageFile[];
}

export async function ScopedMessagesProvider({
  children,
  locale,
  files,
}: ScopedMessagesProviderProps) {
  const messages = await getScopedMessages(locale, files);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
