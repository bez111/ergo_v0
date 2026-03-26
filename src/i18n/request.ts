import { getRequestConfig } from 'next-intl/server';

// Supported locales
// English is default (no prefix), Russian enabled
export const locales = [
  'en', 'ru', 'zh-cn', 'zh-tw',
  'tr', 'ko-kr', 'es', 'pt-br',
  'ja', 'de', 'fr', 'it'
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

// Load and merge all message files from a locale folder
async function loadMessages(locale: string): Promise<Record<string, unknown>> {
  const files = [
    'agent-economy', 'build', 'common', 'demos', 'home', 'blog', 'community', 'compare', 'content-hubs',
    'developers', 'ecosystem', 'ecosystem-projects', 'events', 'faq', 'hodlers', 'infographics',
    'learn', 'manifesto', 'miners', 'misc', 'newsletter', 'patterns', 'seo', 'start',
    'technology', 'use', 'wallet'
  ];
  
  const modules = await Promise.all(
    files.map(file => 
      import(`../../messages/${locale}/${file}.json`)
        .then(m => m.default || m)
        .catch(() => ({}))
    )
  );
  
  return modules.reduce((acc, mod) => ({ ...acc, ...mod }), {});
}

export default getRequestConfig(async ({ locale }) => {
  // Если locale не определен или не поддерживается, используем английский
  const safeLocale = locale && (locales as readonly string[]).includes(locale) ? locale : 'en';
  
  return {
    locale: safeLocale as string,
    messages: await loadMessages(safeLocale)
  };
});

// Утилитные функции
export function isRtlLocale(locale: string): boolean {
  return (rtlLocales as readonly string[]).includes(locale);
}

export function getLocaleConfig(locale: string) {
  return localeConfig[locale as Locale];
}

export function getDefaultLocale(): Locale {
  return 'en';
} 