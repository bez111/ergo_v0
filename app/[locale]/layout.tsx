import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from 'next/navigation';
import { locales, isRtlLocale, getLocaleConfig, type Locale } from '../../i18n';
import { getMessages, getTranslations } from '@/lib/messages';
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import HreflangTags from "@/components/seo/hreflang-tags";
import { LocaleProvider } from "@/components/locale-provider";
import { organizationSchema, websiteSchema } from "@/lib/schema-generator";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: 'swap',
  preload: true,
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale as Locale);
  const t = getTranslations(messages, 'seo');
  const localeConfig = getLocaleConfig(locale);

  return {
    metadataBase: new URL('https://ergoblockchain.org'),
    title: {
      default: t('defaultTitle'),
      template: `%s | ${localeConfig.name} - Ergo Platform`
    },
    description: t('defaultDescription'),
    keywords: t('keywords').split(', '),
    authors: [{ name: "Ergo Platform" }],
    creator: "Ergo Platform",
    publisher: "Ergo Platform",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: localeConfig.hreflang,
      url: 'https://ergoblockchain.org',
      siteName: 'Ergo Platform',
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Ergo Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      images: ['/og-image.png'],
      creator: '@ergoplatformorg',
    },
    alternates: {
      canonical: 'https://ergoblockchain.org',
      languages: Object.fromEntries(
        locales.map(loc => [
          getLocaleConfig(loc).hreflang,
          loc === 'en' ? 'https://ergoblockchain.org' : `https://ergoblockchain.org/${loc}`
        ])
      ),
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale as Locale);
  const localeConfig = getLocaleConfig(locale);
  const isRtl = isRtlLocale(locale);

  return (
    <html 
      lang={locale} 
      dir={localeConfig.dir}
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <HreflangTags pathname="/" currentLocale={locale} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema])
          }}
        />
      </head>
      <body className={`min-h-screen bg-background font-sans antialiased ${isRtl ? 'rtl' : 'ltr'}`}>
                <LocaleProvider locale={locale as Locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ErrorBoundary>
              <div className="relative flex min-h-screen flex-col">
                <main className="flex-1">
                  {children}
                </main>
              </div>
            </ErrorBoundary>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
} 