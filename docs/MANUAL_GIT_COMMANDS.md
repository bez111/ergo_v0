# 🚀 Ручные команды для создания ветки на GitHub

## Выполните эти команды в терминале:

```bash
# 1. Перейдите в директорию проекта
cd /Users/alexanderbezkrovny/Desktop/ERGO5

# 2. Инициализируйте git (если не инициализирован)
git init

# 3. Добавьте удаленный репозиторий
git remote add origin https://github.com/Wastelandhub/v0-ergo.git

# 4. Добавьте все файлы
git add .

# 5. Создайте коммит
git commit -m "feat: Update landing pages and network metrics

- Migrate /holders to /hodlers with improved content structure
- Create /builders page with developer-focused content and tools  
- Create /miners page with mining-specific information
- Centralize network metrics in src/lib/network-metrics.ts
- Update all network data to reflect current explorer.ergoplatform.com values
- Update block reward from 67.5 ERG to 9 ERG
- Update block time to 1.92 min and transactions to 752/day
- Standardize button styles across all pages
- Update Discord links to correct invite URL
- Update blog post dates for SEO freshness
- Fix marketing guide data structure and links
- Update homepage navigation to new landing pages"

# 6. Создайте новую ветку
git checkout -b feature/landing-pages-update-$(date +%Y%m%d-%H%M)

# 7. Отправьте ветку на GitHub
git push -u origin feature/landing-pages-update-$(date +%Y%m%d-%H%M)
```

## Или выполните одной командой:

```bash
cd /Users/alexanderbezkrovny/Desktop/ERGO5 && \
git init && \
git remote add origin https://github.com/Wastelandhub/v0-ergo.git && \
git add . && \
git commit -m "feat: Update landing pages and network metrics" && \
git checkout -b feature/landing-pages-update-$(date +%Y%m%d-%H%M) && \
git push -u origin feature/landing-pages-update-$(date +%Y%m%d-%H%M)
```

## После выполнения:

1. **Проверьте ветку**: https://github.com/Wastelandhub/v0-ergo/branches
2. **Создайте Pull Request**: https://github.com/Wastelandhub/v0-ergo/pulls

## Основные изменения в коммите:

✅ **Новые лендинги**: `/hodlers`, `/builders`, `/miners`  
✅ **Централизованные метрики**: `src/lib/network-metrics.ts`  
✅ **Обновленные данные**: блок-ревард 9 ERG, время блока 1.92 мин  
✅ **Стандартизированные стили кнопок**  
✅ **Обновленные Discord ссылки**  
✅ **Свежие даты блогов для SEO**
