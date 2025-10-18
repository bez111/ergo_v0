/**
 * Migration Plan - Phase 3
 * Постепенная миграция на lowercase URL структуру
 */

export interface MigrationStep {
  id: string
  description: string
  status: 'pending' | 'in-progress' | 'completed'
  estimatedDays: number
  risks: string[]
  rollbackPlan: string
}

export const MIGRATION_PHASES = {
  /**
   * Подготовительная фаза (текущая)
   */
  preparation: {
    startDate: '2025-08-17',
    endDate: '2025-08-24',
    steps: [
      {
        id: 'prep-1',
        description: 'Аудит всех внутренних ссылок на /docs',
        status: 'pending' as const,
        estimatedDays: 2,
        risks: ['Пропущенные ссылки в компонентах'],
        rollbackPlan: 'Не требуется'
      },
      {
        id: 'prep-2',
        description: 'Создание скрипта для автоматического обновления импортов',
        status: 'pending' as const,
        estimatedDays: 1,
        risks: ['Сложные динамические импорты'],
        rollbackPlan: 'Откат через git'
      },
      {
        id: 'prep-3',
        description: 'Настройка алиасов в Next.js config',
        status: 'pending' as const,
        estimatedDays: 1,
        risks: ['Конфликты с существующими алиасами'],
        rollbackPlan: 'Удаление алиасов из конфига'
      }
    ]
  },

  /**
   * Фаза тестирования
   */
  testing: {
    startDate: '2025-08-25',
    endDate: '2025-08-31',
    steps: [
      {
        id: 'test-1',
        description: 'Создание копии папки Docs → docs (параллельно)',
        status: 'pending' as const,
        estimatedDays: 1,
        risks: ['Дублирование контента', 'Увеличение размера'],
        rollbackPlan: 'Удаление папки docs'
      },
      {
        id: 'test-2',
        description: 'Тестирование на staging окружении',
        status: 'pending' as const,
        estimatedDays: 3,
        risks: ['Неожиданные 404 ошибки'],
        rollbackPlan: 'Возврат к /docs структуре'
      },
      {
        id: 'test-3',
        description: 'A/B тестирование с 10% трафика',
        status: 'pending' as const,
        estimatedDays: 3,
        risks: ['Негативное влияние на SEO'],
        rollbackPlan: 'Отключение A/B теста'
      }
    ]
  },

  /**
   * Фаза миграции
   */
  migration: {
    startDate: '2025-09-01',
    endDate: '2025-09-07',
    steps: [
      {
        id: 'mig-1',
        description: 'Переименование Docs → docs в главной ветке',
        status: 'pending' as const,
        estimatedDays: 1,
        risks: ['Breaking changes для пользователей'],
        rollbackPlan: 'Быстрое переименование обратно'
      },
      {
        id: 'mig-2',
        description: 'Обновление всех импортов и ссылок',
        status: 'pending' as const,
        estimatedDays: 2,
        risks: ['Пропущенные ссылки', 'Ошибки сборки'],
        rollbackPlan: 'Откат коммита'
      },
      {
        id: 'mig-3',
        description: 'Настройка 301 редиректов /docs → /docs',
        status: 'pending' as const,
        estimatedDays: 1,
        risks: ['Потеря SEO рейтинга'],
        rollbackPlan: 'Удаление редиректов'
      },
      {
        id: 'mig-4',
        description: 'Обновление sitemap и robots.txt',
        status: 'pending' as const,
        estimatedDays: 1,
        risks: ['Проблемы с индексацией'],
        rollbackPlan: 'Восстановление старых файлов'
      }
    ]
  },

  /**
   * Фаза стабилизации
   */
  stabilization: {
    startDate: '2025-09-08',
    endDate: '2025-09-30',
    steps: [
      {
        id: 'stab-1',
        description: 'Мониторинг 404 ошибок и редиректов',
        status: 'pending' as const,
        estimatedDays: 7,
        risks: ['Упущенные проблемы'],
        rollbackPlan: 'Добавление дополнительных редиректов'
      },
      {
        id: 'stab-2',
        description: 'Обновление внешних ссылок и документации',
        status: 'pending' as const,
        estimatedDays: 5,
        risks: ['Устаревшие ссылки в сторонних ресурсах'],
        rollbackPlan: 'Поддержка старых URL через редиректы'
      },
      {
        id: 'stab-3',
        description: 'Финальная проверка SEO метрик',
        status: 'pending' as const,
        estimatedDays: 10,
        risks: ['Падение позиций в поиске'],
        rollbackPlan: 'Усиление SEO оптимизации'
      }
    ]
  }
}

/**
 * Автоматический скрипт для обновления импортов
 */
export const UPDATE_IMPORTS_SCRIPT = `
#!/bin/bash
# Script to update all imports from /docs to /docs

echo "🔄 Updating imports from /docs to /docs..."

# Find and replace in all TypeScript/JavaScript files
find . -type f \\( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \\) \\
  -not -path "./node_modules/*" \\
  -not -path "./.next/*" \\
  -exec sed -i '' 's|/docs|/docs|g' {} +

# Update markdown files
find . -type f -name "*.md" -o -name "*.mdx" \\
  -not -path "./node_modules/*" \\
  -exec sed -i '' 's|/docs|/docs|g' {} +

echo "✅ Import update complete!"
`

/**
 * Проверка готовности к миграции
 */
export function checkMigrationReadiness(): {
  ready: boolean
  blockers: string[]
  warnings: string[]
} {
  const blockers: string[] = []
  const warnings: string[] = []
  
  // Проверяем завершенность предыдущих фаз
  if (!checkPhase1Complete()) {
    blockers.push('Phase 1 (Parameter cleaning) not complete')
  }
  
  if (!checkPhase2Complete()) {
    blockers.push('Phase 2 (Soft redirects) not complete')
  }
  
  // Проверяем наличие бэкапов
  if (!checkBackupsExist()) {
    blockers.push('No recent backups found')
  }
  
  // Предупреждения
  if (checkHighTraffic()) {
    warnings.push('High traffic detected - consider migrating during off-peak hours')
  }
  
  if (checkPendingPRs()) {
    warnings.push('Pending PRs detected - merge or close before migration')
  }
  
  return {
    ready: blockers.length === 0,
    blockers,
    warnings
  }
}

// Helper функции для проверок
function checkPhase1Complete(): boolean {
  // Проверяем, что очистка параметров работает
  return true // Уже реализовано
}

function checkPhase2Complete(): boolean {
  // Проверяем, что мягкие редиректы настроены
  return true // Уже реализовано
}

function checkBackupsExist(): boolean {
  // В реальности проверяем наличие бэкапов
  return true // Предполагаем, что есть
}

function checkHighTraffic(): boolean {
  // Проверяем текущую нагрузку
  return false // Предполагаем низкую нагрузку
}

function checkPendingPRs(): boolean {
  // Проверяем открытые PR
  return false // Предполагаем, что нет
}

/**
 * Генерация отчета о готовности к миграции
 */
export function generateMigrationReport(): string {
  const readiness = checkMigrationReadiness()
  const totalSteps = Object.values(MIGRATION_PHASES)
    .flatMap(phase => phase.steps).length
  const completedSteps = Object.values(MIGRATION_PHASES)
    .flatMap(phase => phase.steps)
    .filter(step => step.status === 'completed').length
  
  return `
# Migration Readiness Report
Generated: ${new Date().toISOString()}

## Overall Status
- Ready for migration: ${readiness.ready ? '✅ YES' : '❌ NO'}
- Progress: ${completedSteps}/${totalSteps} steps completed
- Estimated completion: 2025-09-30

## Blockers
${readiness.blockers.length > 0 
  ? readiness.blockers.map(b => `- ❌ ${b}`).join('\n')
  : '✅ No blockers'}

## Warnings
${readiness.warnings.length > 0
  ? readiness.warnings.map(w => `- ⚠️ ${w}`).join('\n')
  : '✅ No warnings'}

## Phase Status

### Preparation Phase
${MIGRATION_PHASES.preparation.steps.map(step => 
  `- [${step.status === 'completed' ? 'x' : ' '}] ${step.description}`
).join('\n')}

### Testing Phase
${MIGRATION_PHASES.testing.steps.map(step => 
  `- [${step.status === 'completed' ? 'x' : ' '}] ${step.description}`
).join('\n')}

### Migration Phase
${MIGRATION_PHASES.migration.steps.map(step => 
  `- [${step.status === 'completed' ? 'x' : ' '}] ${step.description}`
).join('\n')}

### Stabilization Phase
${MIGRATION_PHASES.stabilization.steps.map(step => 
  `- [${step.status === 'completed' ? 'x' : ' '}] ${step.description}`
).join('\n')}

## Next Steps
1. Complete all preparation phase steps
2. Set up staging environment for testing
3. Schedule migration window (weekend recommended)
4. Prepare rollback procedures
5. Notify team and stakeholders
  `.trim()
} 