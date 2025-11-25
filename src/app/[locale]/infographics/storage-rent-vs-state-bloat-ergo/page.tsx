import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { StorageRentVsStateBloatClient } from './StorageRentVsStateBloatClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: { locale: string };
}

const SLUG = 'storage-rent-vs-state-bloat-ergo';

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
    'Storage Rent vs State Bloat: How Ergo Keeps Its State Lean';
  const description =
    infographic.seoDescription ||
    'Learn how Ergo’s storage-rent mechanism prevents state bloat, provides long-term miner income after block rewards decline, and keeps full nodes affordable compared to typical L1 blockchains without storage rent.';

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Ergo Platform',
      title: 'Storage Rent vs State Bloat on Ergo',
      description:
        'Infographic showing how typical L1 chains accumulate dead UTXOs forever while Ergo’s storage rent cleans inactive boxes, funds miners and keeps the UTXO set renewing itself over time.',
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

export default function StorageRentVsStateBloatPage({ params }: Props) {
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
        name: 'Ergo storage rent design',
      },
      {
        '@type': 'Thing',
        name: 'UTXO state growth',
      },
      {
        '@type': 'Thing',
        name: 'Miner incentives after block rewards',
      },
      {
        '@type': 'Thing',
        name: 'Full node affordability',
      },
      {
        '@type': 'Thing',
        name: 'Long-term blockchain sustainability',
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
      <StorageRentVsStateBloatClient infographic={infographic} />
    </>
  );
}



