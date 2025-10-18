# Система локализации Ergo Platform

## Поддерживаемые языки

Сайт поддерживает следующие языки:

| Язык | Код локали | URL | hreflang |
|------|------------|-----|----------|
| Английский (по умолчанию) | en | / | en |
| Французский | fr | /fr/ | fr |
| Немецкий | de | /de/ | de |
| Испанский | es | /es/ | es |
| Арабский (RTL) | ar | /ar/ | ar |
| Китайский (упрощенный) | zh-cn | /zh-cn/ | zh-CN |
| Китайский (традиционный) | zh-tw | /zh-tw/ | zh-TW |
| Турецкий | tr | /tr/ | tr |
| Русский | ru | /ru/ | ru |
| Португальский (Бразилия) | pt-br | /pt-br/ | pt-BR |
| Итальянский | it | /it/ | it |
| Японский | ja | /ja/ | ja |
| Корейский | ko-kr | /ko-kr/ | ko-KR |

## Архитектура

### Основные файлы

- `i18n.ts` - Конфигурация интернационализации
- `middleware.ts` - Роутинг локалей
- `messages/` - Папка с файлами переводов
- `app/[locale]/` - Локализованные страницы
- `components/language-switcher.tsx` - Переключатель языков

### Структура переводов

Файлы переводов находятся в папке `messages/` и имеют следующую структуру:

```json
{
  "common": {
    "loading": "Loading...",
    "error": "Error",
    // ... общие элементы
  },
  "navigation": {
    "home": "Home",
    "docs": "Documentation",
    // ... навигация
  },
  "hero": {
    "title": "Ergo Platform",
    "subtitle": "A resilient blockchain platform...",
    // ... главная страница
  },
  "footer": {
    // ... футер
  },
  "seo": {
    // ... SEO метаданные
  },
  "errors": {
    // ... страницы ошибок
  },
  "language": {
    // ... переключатель языков
  }
}
```

## Использование

### В компонентах

```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('navigation');
  
  return <h1>{t('home')}</h1>;
}
```

### В серверных компонентах

```tsx
import { getTranslations } from 'next-intl/server';

export default async function ServerComponent() {
  const t = await getTranslations('hero');
  
  return <h1>{t('title')}</h1>;
}
```

### Генерация метаданных

```tsx
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' });
  
  return {
    title: t('defaultTitle'),
    description: t('defaultDescription'),
  };
}
```

## RTL поддержка

Арабский язык поддерживает RTL (справа налево) направление текста:

- Автоматическое определение направления через `dir` атрибут
- CSS стили для RTL в `globals.css`
- Адаптивные компоненты с поддержкой RTL

## SEO оптимизация

### hreflang теги

Автоматически генерируются hreflang теги для всех языков:

```html
<link rel="alternate" hreflang="en" href="https://ergoblockchain.org/" />
<link rel="alternate" hreflang="fr" href="https://ergoblockchain.org/fr/" />
<link rel="alternate" hreflang="x-default" href="https://ergoblockchain.org/" />
```

### Канонические URL

- Английский: `https://ergoblockchain.org/`
- Другие языки: `https://ergoblockchain.org/{locale}/`

### Sitemap

Каждая страница доступна на всех языках с правильными URL.

## Роутинг

### Middleware

`middleware.ts` обрабатывает:
- Определение языка пользователя
- Перенаправления на правильные URL
- Установку локали для каждого запроса

### URL структура

- Английский (по умолчанию): `/`, `/docs`, `/ecosystem`
- Другие языки: `/fr/`, `/fr/docs`, `/fr/ecosystem`

## Добавление нового языка

1. Добавить код языка в `i18n.ts`:
```ts
export const locales = [
  // ... существующие языки
  'new-lang'
] as const;

export const localeConfig = {
  // ... существующие конфигурации
  'new-lang': { name: 'New Language', dir: 'ltr', hreflang: 'new-lang' }
};
```

2. Создать файл переводов `messages/new-lang.json`

3. Обновить middleware matcher если нужно

## Добавление новых переводов

1. Добавить ключи в `messages/en.json`
2. Перевести на все языки в соответствующих файлах
3. Использовать в компонентах через `useTranslations()`

## Тестирование

- Проверить все языки: `http://localhost:3001/{locale}`
- Проверить переключатель языков
- Проверить RTL для арабского
- Проверить SEO теги в исходном коде

## Производительность

- Переводы загружаются только для текущей локали
- Статическая генерация для всех языков
- Кеширование переводов
- Оптимизированные шрифты для всех языков 