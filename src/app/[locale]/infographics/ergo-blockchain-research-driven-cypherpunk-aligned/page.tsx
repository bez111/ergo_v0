import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ErgoResearchCypherpunkClient } from './ErgoResearchCypherpunkClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: { locale: string };
}

const SLUG = 'ergo-blockchain-research-driven-cypherpunk-aligned';

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
    'Ergo Blockchain: Research-Driven, Cypherpunk-Aligned & Fair-Launched PoW';
  const description =
    infographic.seoDescription ||
    'Discover how Ergo combines a fair-launched Proof-of-Work, eUTXO smart contracts, Sigma Protocols privacy and long-term sustainability features like Autolykos, NiPoPoWs and storage rent.';

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Ergo Platform',
      title: 'Ergo Blockchain: Research-Driven & Cypherpunk-Aligned',
      description:
        'Infographic overview of Ergo’s fair launch origins, core technologies (eUTXO and Sigma Protocols) and sustainability stack (Autolykos, NiPoPoWs, storage rent) built for verifiable rules over hype.',
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

export default function ErgoResearchCypherpunkPage({ params }: Props) {
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
        name: 'Ergo Blockchain',
      },
      {
        '@type': 'Thing',
        name: 'Fair launch',
      },
      {
        '@type': 'Thing',
        name: 'eUTXO smart contracts',
      },
      {
        '@type': 'Thing',
        name: 'Sigma Protocols',
      },
      {
        '@type': 'Thing',
        name: 'Blockchain sustainability',
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
      <ErgoResearchCypherpunkClient infographic={infographic} />
    </>
  );
}



