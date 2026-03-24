
import { locales, type Locale } from '../i18n/request';

type MessageRecord = Record<string, unknown>;

// Helper to load all message files from a locale folder
async function loadMessagesFromFolder(locale: string): Promise<MessageRecord> {
  const messageFiles = [
    'agent-economy', 'common', 'demos', 'home', 'blog', 'community', 'compare', 'content-hubs',
    'developers', 'ecosystem', 'events', 'faq', 'hodlers', 'infographics',
    'learn', 'manifesto', 'miners', 'misc', 'newsletter', 'patterns', 'seo', 'start',
    'technology', 'use', 'wallet'
  ];
  
  const modules = await Promise.all(
    messageFiles.map(file => 
      import(`../../messages/${locale}/${file}.json`).catch(() => ({ default: {} }))
    )
  );
  
  return modules.reduce((acc, mod) => ({ ...acc, ...(mod.default || mod) }), {});
}

export async function getMessages(locale: Locale): Promise<MessageRecord> {
  const safeLocale = locale || 'en';
  
  if (!locales.includes(safeLocale as Locale)) {
    console.warn(`Unsupported locale: ${safeLocale}, falling back to 'en'`);
    return loadMessagesFromFolder('en');
  }

  try {
    return await loadMessagesFromFolder(safeLocale);
  } catch (error) {
    console.error(`Failed to load messages for locale: ${safeLocale}, falling back to 'en'`, error);
    return loadMessagesFromFolder('en');
  }
}

export function getTranslations(messages: MessageRecord, namespace: string) {
  return (key: string) => {
    const keys = `${namespace}.${key}`.split('.');
    let value: unknown = messages;

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }

    return (value as string) || key;
  };
} 