import { locales, localeConfig } from '../../i18n';

interface HreflangTagsProps {
  pathname: string;
  currentLocale: string;
}

export default function HreflangTags({ pathname, currentLocale }: HreflangTagsProps) {
  // Удаляем префикс локали из пути для создания базового пути
  const getBasePath = (path: string, locale: string) => {
    if (locale === 'en') return path;
    const localePrefix = `/${locale}`;
    return path.startsWith(localePrefix) ? path.slice(localePrefix.length) || '/' : path;
  };

  const basePath = getBasePath(pathname, currentLocale);
  const baseUrl = 'https://ergoblockchain.org';

  return (
    <>
      {locales.map((locale) => {
        const config = localeConfig[locale];
        let href = baseUrl;
        
        // Добавляем префикс локали (кроме английского)
        if (locale !== 'en') {
          href += `/${locale}`;
        }
        
        // Добавляем путь
        if (basePath !== '/') {
          href += basePath;
        }

        return (
          <link
            key={locale}
            rel="alternate"
            hrefLang={config.hreflang}
            href={href}
          />
        );
      })}
      
      {/* x-default для английского */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}${basePath !== '/' ? basePath : ''}`}
      />
    </>
  );
} 