
/* eslint-disable @typescript-eslint/no-explicit-any */
import { locales, type Locale } from '../i18n/request';

export async function getMessages(locale: Locale) {
  // Fallback to 'en' if locale is undefined
  const safeLocale = locale || 'en';
  
  if (!locales.includes(safeLocale as Locale)) {
    console.warn(`Unsupported locale: ${safeLocale}, falling back to 'en'`);
    const messages = await import(`../../messages/en.json`);
    return messages.default;
  }

  try {
    const messages = await import(`../../messages/${safeLocale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${safeLocale}, falling back to 'en'`, error);
    const fallbackMessages = await import(`../../messages/en.json`);
    return fallbackMessages.default;
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