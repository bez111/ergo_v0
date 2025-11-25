import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EngineeredForGlobalSettlementClient } from './EngineeredForGlobalSettlementClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: { locale: string };
}

const SLUG = 'engineered-for-global-settlement-ergo';

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
    'Engineered for Global Settlement: Ergo vs Bitcoin, Ethereum & L2s';
  const description =
    infographic.seoDescription ||
    'See how Ergo’s PoW L1 offers ~2-minute blocks, low predictable fees, an MEV-aware eUTXO design and accessible full nodes compared with Bitcoin, Ethereum and typical L2 rollups.';

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Ergo Platform',
      title: 'Engineered for Global Settlement on Ergo',
      description:
        'Infographic showing how Ergo is designed as a fast, low-cost, MEV-resistant settlement layer, with ~2-minute PoW blocks, predictable fees and an eUTXO model compared to Bitcoin, Ethereum and L2s.',
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

export default function EngineeredForGlobalSettlementPage({ params }: Props) {
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
        name: 'Global settlement',
      },
      {
        '@type': 'Thing',
        name: 'MEV resistance',
      },
      {
        '@type': 'Thing',
        name: 'eUTXO',
      },
      {
        '@type': 'Thing',
        name: 'L1 vs L2',
      },
      {
        '@type': 'Thing',
        name: 'Accessible full nodes',
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
      <EngineeredForGlobalSettlementClient infographic={infographic} />
    </>
  );
}



