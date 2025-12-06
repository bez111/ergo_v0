
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRequestConfig } from 'next-intl/server';

// Supported locales
// English is default (no prefix), Russian enabled
export const locales = [
  'en',
  'ru'
] as const;

// Локали с префиксами (все кроме английского)
export const localesWithPrefix = locales.filter(locale => locale !== 'en');

export type Locale = typeof locales[number];

// RTL языки
export const rtlLocales = ['ar'] as const;

// Конфигурация локалей с метаданными
export const localeConfig = {
  'en': { name: 'English', dir: 'ltr', hreflang: 'en' },
  'fr': { name: 'Français', dir: 'ltr', hreflang: 'fr' },
  'de': { name: 'Deutsch', dir: 'ltr', hreflang: 'de' },
  'es': { name: 'Español', dir: 'ltr', hreflang: 'es' },
  'ar': { name: 'العربية', dir: 'rtl', hreflang: 'ar' },
  'zh-cn': { name: '简体中文', dir: 'ltr', hreflang: 'zh-CN' },
  'zh-tw': { name: '繁體中文', dir: 'ltr', hreflang: 'zh-TW' },
  'tr': { name: 'Türkçe', dir: 'ltr', hreflang: 'tr' },
  'ru': { name: 'Русский', dir: 'ltr', hreflang: 'ru' },
  'pt-br': { name: 'Português (BR)', dir: 'ltr', hreflang: 'pt-BR' },
  'it': { name: 'Italiano', dir: 'ltr', hreflang: 'it' },
  'ja': { name: '日本語', dir: 'ltr', hreflang: 'ja' },
  'ko-kr': { name: '한국어', dir: 'ltr', hreflang: 'ko-KR' }
} as const;

export default getRequestConfig(async ({ locale }) => {
  // Если locale не определен или не поддерживается, используем английский
  const safeLocale = locale && locales.includes(locale as any) ? locale : 'en';
  
  return {
    locale: safeLocale as string,
    messages: (await import(`../../messages/${safeLocale}.json`)).default
  };
});

// Утилитные функции
export function isRtlLocale(locale: string): boolean {
  return rtlLocales.includes(locale as any);
}

export function getLocaleConfig(locale: string) {
  return localeConfig[locale as Locale];
}

export function getDefaultLocale(): Locale {
  return 'en';
} 