
/* eslint-disable @typescript-eslint/no-explicit-any */
import { locales, type Locale } from '../i18n/request';

// Helper to load all message files from a locale folder
async function loadMessagesFromFolder(locale: string): Promise<Record<string, any>> {
  const messageFiles = [
    'common', 'home', 'blog', 'community', 'compare', 'content-hubs',
    'developers', 'ecosystem', 'events', 'faq', 'hodlers', 'infographics',
    'learn', 'manifesto', 'miners', 'newsletter', 'seo', 'start',
    'technology', 'use', 'wallet'
  ];
  
  const modules = await Promise.all(
    messageFiles.map(file => 
      import(`../../messages/${locale}/${file}.json`).catch(() => ({ default: {} }))
    )
  );
  
  return modules.reduce((acc, mod) => ({ ...acc, ...(mod.default || mod) }), {});
}

export async function getMessages(locale: Locale): Promise<Record<string, any>> {
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

export function getTranslations(messages: any, namespace: string) {
  return (key: string) => {
    const keys = `${namespace}.${key}`.split('.');
    let value = messages;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
} 