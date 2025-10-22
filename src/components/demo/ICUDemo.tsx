"use client"

import { useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useICUMessage } from "@/lib/icu-helpers"

export default function ICUDemo() {
  const [count, setCount] = useState(0)
  const t = useTranslations('icu')
  const locale = useLocale()
  const icu = useICUMessage()

  const examples = [
    { key: 'items', label: 'Items' },
    { key: 'minutes', label: 'Minutes' },
    { key: 'bytes', label: 'Bytes' },
    { key: 'results', label: 'Results' },
    { key: 'errors', label: 'Errors' },
    { key: 'files', label: 'Files' },
    { key: 'users', label: 'Users' },
    { key: 'days', label: 'Days' },
    { key: 'hours', label: 'Hours' },
    { key: 'seconds', label: 'Seconds' },
  ]

  return (
    <Card className="w-full max-w-2xl mx-auto bg-neutral-900/50 border-neutral-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          🌍 ICU MessageFormat Demo
          <Badge variant="outline" className="text-orange-400 border-orange-400">
            {locale.toUpperCase()}
          </Badge>
        </CardTitle>
        <p className="text-gray-400">
          Демонстрация правильных множественных форм для разных языков
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Count Control */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setCount(Math.max(0, count - 1))}
            variant="outline"
            size="sm"
            className="border-neutral-600 text-white hover:bg-neutral-700"
          >
            -
          </Button>
          <Input
            type="number"
            value={count}
            onChange={(e) => setCount(Math.max(0, parseInt(e.target.value) || 0))}
            className="w-20 text-center bg-neutral-800 border-neutral-600 text-white"
            min="0"
          />
          <Button
            onClick={() => setCount(count + 1)}
            variant="outline"
            size="sm"
            className="border-neutral-600 text-white hover:bg-neutral-700"
          >
            +
          </Button>
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4, 5, 11, 21, 101].map(num => (
              <Button
                key={num}
                onClick={() => setCount(num)}
                variant="ghost"
                size="sm"
                className="text-orange-400 hover:bg-orange-500/10"
              >
                {num}
              </Button>
            ))}
          </div>
        </div>

        {/* ICU Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {examples.map(({ key, label }) => (
            <div
              key={key}
              className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700"
            >
              <div className="text-sm text-gray-400 mb-1">{label}:</div>
              <div className="text-white font-mono">
                {t(key, { count })}
              </div>
            </div>
          ))}
        </div>

        {/* Raw ICU Message Display */}
        <div className="p-4 bg-neutral-800/30 rounded-lg border border-neutral-600">
          <div className="text-sm text-gray-400 mb-2">Raw ICU Message (items):</div>
          <code className="text-xs text-orange-300 font-mono break-all">
            {locale === 'ru' 
              ? '{count, plural, =0 {нет элементов} one {# элемент} few {# элемента} many {# элементов} other {# элементов}}'
              : '{count, plural, =0 {no items} one {# item} other {# items}}'
            }
          </code>
        </div>

        {/* Language-specific Rules */}
        <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-700">
          <div className="text-sm text-blue-300 mb-2">
            Правила для {locale === 'ru' ? 'русского' : 'английского'} языка:
          </div>
          <div className="text-xs text-blue-200 space-y-1">
            {locale === 'ru' ? (
              <>
                <div>• 0 → zero (нет элементов)</div>
                <div>• 1 → one (1 элемент)</div>
                <div>• 2-4 → few (2-4 элемента)</div>
                <div>• 5+ → many (5+ элементов)</div>
              </>
            ) : (
              <>
                <div>• 0 → zero (no items)</div>
                <div>• 1 → one (1 item)</div>
                <div>• 2+ → other (2+ items)</div>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 