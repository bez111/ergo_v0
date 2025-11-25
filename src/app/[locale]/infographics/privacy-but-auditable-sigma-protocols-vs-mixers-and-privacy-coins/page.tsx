import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrivacyButAuditableClient } from './PrivacyButAuditableClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: { locale: string };
}

const SLUG = 'privacy-but-auditable-sigma-protocols-vs-mixers-and-privacy-coins';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const infographic = infographics.find((item) => item.slug === SLUG);

  if (!infographic) {
    return {
      title: 'Infographic Not Found',
      description: 'The requested infographic could not be found.',
    };
  }

  const origin = siteConfig.siteUrl;
  const url = `${origin}/infographics/${infographic.slug}`;

  const title =
    infographic.seoTitle ||
    'Privacy, But Auditable: Why Ergo Chooses Sigma Protocols';
  const description =
    infographic.seoDescription ||
    'Compare mixers, classic privacy coins and Ergo’s Sigma Protocols to see how Ergo combines on-chain privacy with programmable auditability, integrated UX and a more balanced regulatory profile.';

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Ergo Platform',
      title:
        'Privacy, But Auditable – Mixers vs Privacy Coins vs Ergo + Sigma Protocols',
      description:
        'Infographic explaining three approaches to on-chain privacy and how Ergo’s Sigma Protocols offer optional, contract-level privacy with programmable selective disclosure and integrated UX.',
      images: [
        {
          url: `${origin}${infographic.fullImageUrl}`,
          width: 1280,
          height: 670,
          alt: infographic.imageAlt,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${origin}${infographic.fullImageUrl}`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  };
}

export default function PrivacyButAuditablePage({ params }: Props) {
  const infographic = infographics.find((item) => item.slug === SLUG);

  if (!infographic) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    name: infographic.title,
    description: infographic.shortDescription,
    url: `${siteConfig.siteUrl}${infographic.fullImageUrl}`,
    contentUrl: `${siteConfig.siteUrl}${infographic.fullImageUrl}`,
    thumbnailUrl: `${siteConfig.siteUrl}${infographic.previewImageUrl}`,
    datePublished: infographic.publishDate,
    author: {
      '@type': 'Organization',
      name: 'Ergo Platform',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/logo.png`,
      },
    },
    keywords: infographic.tags.join(', '),
    about: [
      {
        '@type': 'Thing',
        name: 'Sigma Protocols',
      },
      {
        '@type': 'Thing',
        name: 'On-chain privacy',
      },
      {
        '@type': 'Thing',
        name: 'Selective disclosure',
      },
      {
        '@type': 'Thing',
        name: 'Mixers and privacy coins',
      },
      {
        '@type': 'Thing',
        name: 'Regulatory considerations',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <PrivacyButAuditableClient infographic={infographic} />
    </>
  );
}



