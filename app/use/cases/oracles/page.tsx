import { redirect } from 'next/navigation'

// Временный редирект на существующую страницу
// В будущем здесь будет полноценная страница
export default function OraclesPage() {
  redirect('/use/use-cases/oracles-data-feeds')
} 