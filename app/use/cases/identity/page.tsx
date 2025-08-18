import { redirect } from 'next/navigation'

// Временный редирект на существующую страницу
// В будущем здесь будет полноценная страница
export default function IdentityPage() {
  redirect('/use/use-cases/identity-reputation')
} 