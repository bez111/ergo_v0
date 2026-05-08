import { Link } from "@/i18n/navigation"

const NOTICES: Record<string, { body: string; cta: string }> = {
  ru: {
    body: "Часть контента сейчас доступна только на английском. Мы постепенно переводим страницы — вы можете переключиться на английскую версию ниже.",
    cta: "Перейти на английскую версию",
  },
  "zh-cn": {
    body: "部分内容目前仅提供英文版本。我们正在逐步翻译，您可以在下方切换到英文版本。",
    cta: "切换到英文版本",
  },
  "zh-tw": {
    body: "部分內容目前僅提供英文版本。我們正在逐步翻譯，您可以在下方切換到英文版本。",
    cta: "切換到英文版本",
  },
  tr: {
    body: "Bazı içerikler şu anda yalnızca İngilizce olarak mevcut. Çevirileri tamamlıyoruz — aşağıdan İngilizce sürüme geçebilirsiniz.",
    cta: "İngilizce sürüme geç",
  },
  "ko-kr": {
    body: "일부 콘텐츠는 현재 영어로만 제공됩니다. 번역 작업을 진행 중이며, 아래에서 영어 버전으로 전환할 수 있습니다.",
    cta: "영어 버전으로 보기",
  },
  es: {
    body: "Parte del contenido actualmente solo está disponible en inglés. Estamos completando las traducciones — puede cambiar a la versión en inglés abajo.",
    cta: "Ver versión en inglés",
  },
  "pt-br": {
    body: "Parte do conteúdo atualmente está disponível apenas em inglês. Estamos finalizando as traduções — você pode mudar para a versão em inglês abaixo.",
    cta: "Ver versão em inglês",
  },
  ja: {
    body: "一部のコンテンツは現在英語のみで提供されています。翻訳を進めています — 下の英語版に切り替えることができます。",
    cta: "英語版を見る",
  },
  de: {
    body: "Einige Inhalte sind derzeit nur auf Englisch verfügbar. Wir arbeiten an den Übersetzungen — unten können Sie zur englischen Version wechseln.",
    cta: "Zur englischen Version",
  },
  fr: {
    body: "Certains contenus ne sont actuellement disponibles qu'en anglais. Nous finalisons les traductions — vous pouvez passer à la version anglaise ci-dessous.",
    cta: "Voir la version anglaise",
  },
  it: {
    body: "Alcuni contenuti sono attualmente disponibili solo in inglese. Stiamo completando le traduzioni — puoi passare alla versione inglese qui sotto.",
    cta: "Vedi versione inglese",
  },
}

export function PartialLocaleNotice({ locale, pathname = "/" }: { locale: string; pathname?: string }) {
  if (locale === "en") return null
  const notice = NOTICES[locale]
  if (!notice) return null

  return (
    <div
      role="note"
      aria-label="Translation status"
      className="border-b border-yellow-500/20 bg-yellow-500/5 text-yellow-100/90"
    >
      <div className="container mx-auto px-4 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm">
        <p className="leading-snug">{notice.body}</p>
        <Link
          href={pathname.startsWith("/") ? pathname : "/"}
          locale="en"
          className="shrink-0 underline underline-offset-2 hover:text-yellow-300 whitespace-nowrap"
        >
          {notice.cta} →
        </Link>
      </div>
    </div>
  )
}
