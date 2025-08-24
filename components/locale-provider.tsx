'use client';

import { createContext, useContext } from 'react';
import { type Locale } from '../i18n';

interface LocaleContextType {
  locale: Locale;
  messages: any;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ 
  children, 
  locale, 
  messages 
}: { 
  children: React.ReactNode;
  locale: Locale;
  messages: any;
}) {
  return (
    <LocaleContext.Provider value={{ locale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocaleContext must be used within a LocaleProvider');
  }
  return context;
}

export function useTranslations(namespace: string) {
  const { messages } = useLocaleContext();
  
  return (key: string) => {
    const keys = `${namespace}.${key}`.split('.');
    let value = messages;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
} 