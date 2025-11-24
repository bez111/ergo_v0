import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { locales, isRtlLocale, getLocaleConfig, type Locale } from '../../i18n/request';
import { getMessages, getTranslations } from '@/lib/messages';
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import HreflangTags from "@/components/seo/hreflang-tags";
import { NextIntlClientProvider } from 'next-intl';
import { organizationSchema, websiteSchema } from "@/lib/schema-generator";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site-config";


interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
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
      url: `${siteConfig.siteUrl}`,
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
      creator: `${siteConfig.twitterHandle}`,
    },
    alternates: {
      canonical: `${siteConfig.siteUrl}`,
      languages: Object.fromEntries(
        locales.map(loc => [
          getLocaleConfig(loc).hreflang,
          loc === 'en' ? `${siteConfig.siteUrl}` : `${siteConfig.siteUrl}/${loc}`
        ])
      ),
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale = 'en' } = await params;
  
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale as Locale);
  const localeConfig = getLocaleConfig(locale);
  const isRtl = isRtlLocale(locale);

  return (
    <>
      <HreflangTags pathname="/" currentLocale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema])
        }}
      />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main id="main-content" className="flex-1" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  );
} 