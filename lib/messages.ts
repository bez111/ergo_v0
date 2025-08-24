import { locales, type Locale } from '../i18n';

export async function getMessages(locale: Locale) {
  if (!locales.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  try {
    const messages = await import(`../messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    throw new Error(`Failed to load messages for locale: ${locale}`);
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