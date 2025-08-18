import { redirect } from 'next/navigation'

// Временный редирект на существующую страницу
// В будущем здесь будет полноценная страница
export default function PrivacyPage() {
  redirect('/use/use-cases/privacy-confidentiality')
} 