import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlockchainMatrixClient } from './BlockchainMatrixClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: { locale: string };
}

const SLUG = 'blockchain-matrix-where-ergo-actually-fits';

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
    'Blockchain Matrix: Where Ergo Fits vs Bitcoin, Ethereum & VC Chains';
  const description =
    infographic.seoDescription ||
    'See how Ergo compares to Bitcoin, Ethereum, Monero, Zcash, Cardano, Solana and typical VC chains across consensus, launch model, privacy, MEV resistance, storage rent and fees.';

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Ergo Platform',
      title: 'Blockchain Matrix: Where Ergo Actually Fits',
      description:
        'Matrix infographic comparing major chains and showing why Ergo stands out as the only PoW chain with fair launch, eUTXO smart contracts, programmable privacy and protocol-level storage rent.',
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

export default function BlockchainMatrixPage({ params }: Props) {
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
        name: 'Blockchain comparison',
      },
      {
        '@type': 'Thing',
        name: 'Fair launch',
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
        name: 'Storage rent',
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
      <BlockchainMatrixClient infographic={infographic} />
    </>
  );
}



