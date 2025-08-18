import { redirect } from 'next/navigation'

// Временный редирект на существующую страницу
// В будущем здесь будет полноценная страница
export default function NFTsPage() {
  redirect('/use/use-cases/nfts-digital-assets')
} 