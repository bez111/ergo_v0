import { redirect } from 'next/navigation'

// Временный редирект на существующую страницу
// В будущем здесь будет полноценная страница
export default function GamingPage() {
  redirect('/use/use-cases/gaming-metaverse')
} 