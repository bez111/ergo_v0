type LongTailArea =
  | "compare"
  | "ecosystem"
  | "glossary"
  | "infographics"
  | "patterns"
  | "playbooks"
  | "questions"
  | "topics"

const DEFAULT_PREBUILD_LIMITS: Record<LongTailArea, number> = {
  compare: 0,
  ecosystem: 0,
  glossary: 0,
  infographics: 0,
  patterns: 0,
  playbooks: 0,
  questions: 0,
  topics: 0,
}

const TRUE_VALUES = new Set(["1", "true", "yes", "all"])

export function selectPrebuildParams<T, P>(
  area: LongTailArea,
  items: readonly T[],
  mapItem: (item: T) => P,
): P[] {
  if (TRUE_VALUES.has((process.env.PREBUILD_LONGTAIL ?? "").toLowerCase())) {
    return items.map(mapItem)
  }

  const envKey = `PREBUILD_${area.toUpperCase()}_LIMIT`
  const rawLimit = process.env[envKey]
  const limit = rawLimit ? Number.parseInt(rawLimit, 10) : DEFAULT_PREBUILD_LIMITS[area]

  if (!Number.isFinite(limit) || limit <= 0) {
    return []
  }

  return items.slice(0, limit).map(mapItem)
}

