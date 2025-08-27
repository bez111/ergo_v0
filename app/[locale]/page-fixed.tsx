import type { Metadata } from 'next';

interface HomePageProps {
  params: { locale: string };
}

// Простые переводы для тестирования
const translations = {
  en: {
    title: "Ergo Platform",
    subtitle: "Decentralized Money for a Free Society",
    description: "Resilient blockchain platform",
    exploreErgo: "Explore Ergo",
    chooseYourPath: "Choose Your Path"
  },
  fr: {
    title: "Plateforme Ergo", 
    subtitle: "Argent décentralisé pour une société libre",
    description: "Plateforme blockchain résiliente",
    exploreErgo: "Explorer Ergo",
    chooseYourPath: "Choisissez votre voie"
  },
  de: {
    title: "Ergo Plattform",
    subtitle: "Dezentrales Geld für eine freie Gesellschaft", 
    description: "Robuste Blockchain-Plattform",
    exploreErgo: "Ergo erkunden",
    chooseYourPath: "Wählen Sie Ihren Weg"
  },
  es: {
    title: "Plataforma Ergo",
    subtitle: "Dinero descentralizado para una sociedad libre",
    description: "Plataforma blockchain resistente",
    exploreErgo: "Explorar Ergo",
    chooseYourPath: "Elige tu camino"
  },
  ru: {
    title: "Платформа Ergo",
    subtitle: "Децентрализованные деньги для свободного общества",
    description: "Устойчивый блокчейн для контрактных денег",
    exploreErgo: "Изучить Ergo",
    chooseYourPath: "Выберите свой путь"
  },
  it: {
    title: "Piattaforma Ergo",
    subtitle: "Denaro decentralizzato per una società libera",
    description: "Piattaforma blockchain resiliente",
    exploreErgo: "Esplora Ergo",
    chooseYourPath: "Scegli il tuo percorso"
  },
  ja: {
    title: "Ergoプラットフォーム",
    subtitle: "自由な社会のための分散型マネー",
    description: "回復力のあるブロックチェーン・プラットフォーム",
    exploreErgo: "Ergoを探索",
    chooseYourPath: "あなたの道を選ぶ"
  },
  'ko-kr': {
    title: "Ergo 플랫폼",
    subtitle: "자유로운 사회를 위한 분산형 돈",
    description: "탄력적인 블록체인 플랫폼",
    exploreErgo: "Ergo 탐색",
    chooseYourPath: "당신의 길을 선택하세요"
  }
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  
  return {
    title: t.title,
    description: t.description,
  };
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  
  return (
    <html lang={locale}>
      <head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
      </head>
      <body style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#000', color: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ color: '#ff8800', marginBottom: '20px' }}>{t.title}</h1>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>{t.subtitle}</p>
          <p style={{ marginBottom: '30px' }}>{t.description}</p>
          
          <div style={{ marginBottom: '20px' }}>
            <strong>Current locale: {locale}</strong>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a href={`/${locale}/technology`} style={{ color: '#ff8800', textDecoration: 'none', padding: '10px 15px', border: '1px solid #ff8800', borderRadius: '5px' }}>
              {t.exploreErgo}
            </a>
            <a href={`/${locale}/start`} style={{ color: '#00ff88', textDecoration: 'none', padding: '10px 15px', border: '1px solid #00ff88', borderRadius: '5px' }}>
              {t.chooseYourPath}
            </a>
          </div>
          
          <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #333' }}>
            <h3 style={{ color: '#ff8800', marginBottom: '15px' }}>Available Languages:</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {Object.keys(translations).map(lang => (
                <a key={lang} href={`/${lang}`} style={{ color: '#fff', textDecoration: 'none', padding: '5px 10px', backgroundColor: locale === lang ? '#ff8800' : '#333', borderRadius: '3px' }}>
                  {lang.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
