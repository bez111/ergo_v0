import { redirect } from 'next/navigation'

// Временный редирект на существующую страницу
// В будущем здесь будет полноценная страница
export default function StablecoinsPage() {
  redirect('/use/use-cases/algorithmic-stablecoins')
} 