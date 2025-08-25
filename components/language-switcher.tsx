'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { locales, localeConfig, type Locale } from '../i18n';
import { Globe, ChevronDown } from 'lucide-react';

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
        className="flex items-center gap-2 px-3 py-2 text-sm font-mono uppercase tracking-wider text-white hover:text-primary hover:bg-primary/10 transition-colors duration-200 rounded-md border border-primary/20 hover:border-primary/50"
        aria-label={t('switchLanguage') || 'Switch Language'}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLocaleConfig.name}</span>
        <ChevronDown 
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
          <div className="absolute right-0 mt-2 w-64 bg-black/90 backdrop-blur border border-primary/20 rounded-md shadow-lg shadow-primary/10 z-20">
            <div className="py-2" role="menu">
              {locales.map((localeCode) => {
                const config = localeConfig[localeCode];
                const isActive = localeCode === locale;
                
                return (
                  <button
                    key={localeCode}
                    onClick={() => switchLanguage(localeCode)}
                    className={`
                      w-full text-left px-4 py-3 text-sm font-mono transition-colors duration-200 flex items-center justify-between
                      ${isActive 
                        ? 'bg-primary/20 text-primary border-l-2 border-primary' 
                        : 'text-gray-300 hover:bg-primary/10 hover:text-primary'
                      }
                    `}
                    role="menuitem"
                    dir={config.dir}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{config.name}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {config.hreflang}
                      </span>
                    </div>
                    {isActive && (
                      <span className="text-primary">●</span>
                    )}
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