# 🔐 Environment Variables Guide

## Создание `.env.local` файла

У вас **НЕТ** файла `.env.local` в проекте. Создайте его вручную:

### 1. Создайте файл `.env.local` в корне проекта:

```bash
touch .env.local
```

### 2. Добавьте следующие переменные:

```env
# ===========================================
# ERGO BLOCKCHAIN - Environment Variables
# ===========================================

# Base URL (меняйте для production)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Social Media
NEXT_PUBLIC_TWITTER_HANDLE=@ergoblockchain

# Node Environment
NODE_ENV=development

# Analytics (optional - добавьте ваши ID когда будут)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX

# Feature Flags (optional)
# NEXT_PUBLIC_ENABLE_ANALYTICS=false
# NEXT_PUBLIC_ENABLE_SEARCH=true

# API Keys (если понадобятся в будущем)
# ALGOLIA_APP_ID=
# ALGOLIA_SEARCH_API_KEY=
# ALGOLIA_ADMIN_API_KEY=
```

---

## 📝 Для Production (`.env.production`)

Создайте также `.env.production`:

```bash
touch .env.production
```

С такими переменными:

```env
# Production Environment Variables

# Base URL - ОБЯЗАТЕЛЬНО измените!
NEXT_PUBLIC_SITE_URL=https://ergoblockchain.org

# Social Media
NEXT_PUBLIC_TWITTER_HANDLE=@ergoblockchain

# Node Environment
NODE_ENV=production

# Analytics - добавьте реальные ID
NEXT_PUBLIC_GA_ID=G-YOUR-GA-ID
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-YOUR-GA-ID

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_SEARCH=true
```

---

## ⚙️ Используемые переменные в коде

### Уже используется:
1. `NEXT_PUBLIC_SITE_URL` - в metadata, schemas, canonical URLs
2. `NEXT_PUBLIC_TWITTER_HANDLE` - в Twitter meta tags

### Не используется (но может пригодиться):
1. `NEXT_PUBLIC_GA_ID` - Google Analytics
2. Feature flags для включения/отключения функций

---

## 🚨 ВАЖНО!

### `.env.local` - для локальной разработки
- ✅ Добавлен в `.gitignore`
- ❌ НЕ коммитить в GitHub
- 🔐 Содержит секретные ключи

### `.env.example` - шаблон для команды
- ✅ Можно коммитить
- ✅ Без реальных значений
- 📋 Показывает какие переменные нужны

---

## 🛠️ Быстрая команда создания:

```bash
# Создать .env.local с базовыми настройками
cat > .env.local << 'EOF'
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_TWITTER_HANDLE=@ergoblockchain
NODE_ENV=development
EOF

echo "✅ .env.local created!"
```

---

## ✅ После создания:

1. Перезапустите сервер: `npm run dev`
2. Проверьте что переменные загрузились
3. Для production - создайте `.env.production` с production URL

---

**Файл `.env.local` нужен, но не обязателен для работы сайта.**  
**Сайт будет работать и без него, используя дефолтные значения.**

