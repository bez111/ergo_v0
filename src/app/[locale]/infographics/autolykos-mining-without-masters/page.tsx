import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AutolykosMiningWithoutMastersClient } from './AutolykosMiningWithoutMastersClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: { locale: string };
}

const SLUG = 'autolykos-mining-without-masters';

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
    infographic.seoTitle || 'Autolykos: Mining Without Masters on Ergo';
  const description =
    infographic.seoDescription ||
    'Learn how Ergo’s Autolykos memory-hard Proof-of-Work keeps mining open to consumer GPUs, limits pool dominance, funds long-term security with block rewards plus storage rent, and makes 51% attacks expensive.';

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Ergo Platform',
      title: 'Autolykos: Mining Without Masters',
      description:
        'Infographic showing how Ergo’s Autolykos PoW favors GPUs over ASICs, discourages industrial pool dominance and combines block rewards with storage rent for a strong, decentralized security budget.',
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

export default function AutolykosMiningWithoutMastersPage({ params }: Props) {
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
        name: 'Autolykos mining',
      },
      {
        '@type': 'Thing',
        name: 'ASIC-resistant Proof-of-Work',
      },
      {
        '@type': 'Thing',
        name: 'Storage rent and miner incentives',
      },
      {
        '@type': 'Thing',
        name: 'Mining decentralization',
      },
      {
        '@type': 'Thing',
        name: '51% attack resistance',
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
      <AutolykosMiningWithoutMastersClient infographic={infographic} />
    </>
  );
}



