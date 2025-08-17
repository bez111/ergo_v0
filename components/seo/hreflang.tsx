import Head from 'next/head'

interface HreflangProps {
  path: string
  languages?: {
    code: string
    url?: string
  }[]
}

const DEFAULT_LANGUAGES = [
  { code: 'en', url: 'https://ergoblockchain.org' },
  { code: 'zh', url: 'https://zh.ergoblockchain.org' },
  { code: 'ru', url: 'https://ru.ergoblockchain.org' },
  { code: 'es', url: 'https://es.ergoblockchain.org' },
  { code: 'ja', url: 'https://ja.ergoblockchain.org' },
  { code: 'ko', url: 'https://ko.ergoblockchain.org' },
]

export function Hreflang({ path, languages = DEFAULT_LANGUAGES }: HreflangProps) {
  return (
    <Head>
      {languages.map(({ code, url }) => (
        <link
          key={code}
          rel="alternate"
          hrefLang={code}
          href={`${url || `https://${code}.ergoblockchain.org`}${path}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://ergoblockchain.org${path}`}
      />
    </Head>
  )
}

// Generate hreflang tags for metadata
export function generateHreflangAlternates(path: string) {
  const alternates: Record<string, string> = {
    'x-default': `https://ergoblockchain.org${path}`,
  }
  
  DEFAULT_LANGUAGES.forEach(({ code, url }) => {
    alternates[code] = `${url || `https://${code}.ergoblockchain.org`}${path}`
  })
  
  return alternates
}

export default Hreflang 