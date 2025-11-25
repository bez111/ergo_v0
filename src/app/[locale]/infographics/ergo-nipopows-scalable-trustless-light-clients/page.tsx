import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ErgoNipopowsClient } from './ErgoNipopowsClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: { locale: string };
}

const SLUG = 'ergo-nipopows-scalable-trustless-light-clients';

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
    'Ergo NiPoPoWs: Scalable, Trustless Light Clients Explained';
  const description =
    infographic.seoDescription ||
    'See how Ergo’s NiPoPoWs let light clients verify PoW security with tiny superblock proofs, enabling trustless mobile wallets, ultra-fast sync and cross-chain interoperability.';

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Ergo Platform',
      title: 'Ergo NiPoPoWs: The Key to Scalable, Trustless Light Clients',
      description:
        'Infographic breaking down the challenge of heavy full nodes, how NiPoPoWs work with superblocks, and the benefits for trustless light wallets, lightweight sync and cross-chain bridges.',
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

export default function ErgoNipopowsPage({ params }: Props) {
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
        name: 'NiPoPoWs',
      },
      {
        '@type': 'Thing',
        name: 'Light clients',
      },
      {
        '@type': 'Thing',
        name: 'Proof-of-Work security',
      },
      {
        '@type': 'Thing',
        name: 'Cross-chain bridges',
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
      <ErgoNipopowsClient infographic={infographic} />
    </>
  );
}


