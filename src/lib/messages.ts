
import { locales, type Locale } from '../i18n/request';

type MessageRecord = Record<string, unknown>;

const messageFiles = [
  'agent-economy', 'build', 'common', 'demos', 'home', 'blog', 'community', 'compare', 'content-hubs',
  'developers', 'ecosystem', 'ecosystem-projects', 'events', 'faq', 'hodlers', 'infographics',
  'learn', 'manifesto', 'miners', 'misc', 'newsletter', 'patterns', 'seo', 'start',
  'technology', 'use', 'wallet'
] as const;

export type MessageFile = typeof messageFiles[number];

const globalClientMessageFiles = ['common', 'seo', 'developers'] as const satisfies readonly MessageFile[];

function mergeMessages(modules: MessageRecord[]): MessageRecord {
  return modules.reduce((acc, mod) => deepMergeMessages(acc, mod), {});
}

function isMessageRecord(value: unknown): value is MessageRecord {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function deepMergeMessages(base: MessageRecord, override: MessageRecord): MessageRecord {
  const merged: MessageRecord = { ...base };

  for (const [key, value] of Object.entries(override)) {
    const current = merged[key];

    if (isMessageRecord(current) && isMessageRecord(value)) {
      merged[key] = deepMergeMessages(current, value);
    } else {
      merged[key] = value;
    }
  }

  return merged;
}

function orderMessageFiles(files: Iterable<MessageFile>): MessageFile[] {
  const selectedFiles = new Set(files);
  return messageFiles.filter((file) => selectedFiles.has(file));
}

// Helper to load all message files from a locale folder
async function loadMessagesFromFolder(
  locale: string,
  files: readonly MessageFile[] = messageFiles
): Promise<MessageRecord> {
  const localeModules = await Promise.all(
    files.map(file =>
      import(`../../messages/${locale}/${file}.json`).catch(() => ({ default: {} }))
    )
  );

  const localeMessages = mergeMessages(localeModules.map((mod) => (mod.default || mod) as MessageRecord));

  if (locale === 'en') {
    return localeMessages;
  }

  const fallbackModules = await Promise.all(
    files.map(file =>
      import(`../../messages/en/${file}.json`).catch(() => ({ default: {} }))
    )
  );
  const fallbackMessages = mergeMessages(fallbackModules.map((mod) => (mod.default || mod) as MessageRecord));

  return deepMergeMessages(fallbackMessages, localeMessages);
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

export async function getClientMessages(locale: Locale): Promise<MessageRecord> {
  return loadMessagesFromFolder(locale, orderMessageFiles(globalClientMessageFiles));
}

export async function getScopedMessages(
  locale: Locale,
  files: readonly MessageFile[]
): Promise<MessageRecord> {
  return loadMessagesFromFolder(locale, orderMessageFiles([...globalClientMessageFiles, ...files]));
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
