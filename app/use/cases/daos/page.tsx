import { redirect } from 'next/navigation'

// Временный редирект на существующую страницу
// В будущем здесь будет полноценная страница
export default function DAOsPage() {
  redirect('/use/use-cases/daos-alternative-economies')
} 