'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { locales, localeConfig, type Locale } from '../i18n';
// Простые SVG иконки вместо heroicons
const GlobeIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('language');

  const currentLocaleConfig = localeConfig[locale as Locale];

  const switchLanguage = (newLocale: Locale) => {
    let newPath = pathname;
    
    // Удаляем текущую локаль из пути (если она есть)
    const currentLocalePrefix = `/${locale}`;
    if (pathname.startsWith(currentLocalePrefix)) {
      newPath = pathname.slice(currentLocalePrefix.length) || '/';
    }
    
    // Добавляем новую локаль (если не английский)
    if (newLocale !== 'en') {
      newPath = `/${newLocale}${newPath}`;
    }
    
    setIsOpen(false);
    router.push(newPath);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label={t('switchLanguage')}
      >
        <GlobeIcon />
        <span className="hidden sm:inline">{currentLocaleConfig.name}</span>
        <ChevronDownIcon 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          {/* Overlay для закрытия при клике вне */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
            <div className="py-1" role="menu">
              {locales.map((localeCode) => {
                const config = localeConfig[localeCode];
                const isActive = localeCode === locale;
                
                return (
                  <button
                    key={localeCode}
                    onClick={() => switchLanguage(localeCode)}
                    className={`
                      w-full text-left px-4 py-2 text-sm transition-colors duration-200
                      ${isActive 
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }
                    `}
                    role="menuitem"
                    dir={config.dir}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{config.name}</span>
                      {isActive && (
                        <span className="text-blue-600 dark:text-blue-400">✓</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {config.hreflang}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
} 