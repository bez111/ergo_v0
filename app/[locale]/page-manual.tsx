import type { Metadata } from 'next';

// Простые переводы для тестирования
const translations = {
  en: {
    title: "Ergo Platform",
    subtitle: "Decentralized Money for a Free Society",
    description: "Resilient blockchain platform"
  },
  fr: {
    title: "Plateforme Ergo", 
    subtitle: "Argent décentralisé pour une société libre",
    description: "Plateforme blockchain résiliente"
  },
  de: {
    title: "Ergo Plattform",
    subtitle: "Dezentrales Geld für eine freie Gesellschaft", 
    description: "Robuste Blockchain-Plattform"
  },
  es: {
    title: "Plataforma Ergo",
    subtitle: "Dinero descentralizado para una sociedad libre",
    description: "Plataforma blockchain resistente"
  }
};

interface HomePageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locale && translations[locale as keyof typeof translations] ? locale : 'en';
  const t = translations[safeLocale as keyof typeof translations];
  
  return {
    title: t.title,
    description: t.description,
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const safeLocale = locale && translations[locale as keyof typeof translations] ? locale : 'en';
  const t = translations[safeLocale as keyof typeof translations];
  
  return (
    <main style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          color: '#ff8800', 
          fontSize: '3rem', 
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          {t.title}
        </h1>
        
        <h2 style={{ 
          color: '#fff', 
          fontSize: '2rem', 
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          {t.subtitle}
        </h2>
        
        <p style={{ 
          color: '#ccc', 
          fontSize: '1.2rem',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          {t.description}
        </p>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ marginBottom: '20px', color: '#888' }}>
            Current locale: <strong style={{ color: '#ff8800' }}>{safeLocale}</strong>
          </p>
          
          <div>
            <h3 style={{ marginBottom: '15px', color: '#fff' }}>Test other languages:</h3>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {Object.keys(translations).map(lang => (
                <a 
                  key={lang}
                  href={`/${lang}`}
                  style={{
                    color: lang === safeLocale ? '#ff8800' : '#888',
                    textDecoration: 'none',
                    padding: '8px 16px',
                    border: lang === safeLocale ? '1px solid #ff8800' : '1px solid #444',
                    borderRadius: '4px',
                    fontWeight: lang === safeLocale ? 'bold' : 'normal'
                  }}
                >
                  {translations[lang as keyof typeof translations].title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
