import { redirect } from 'next/navigation'

// Временный редирект на существующую страницу
// В будущем здесь будет полноценная страница
export default function BridgesPage() {
  redirect('/use/use-cases/cross-chain-bridges')
} 