import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HowItStartsVcChainVsErgoClient } from './HowItStartsVcChainVsErgoClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: { locale: string };
}

const SLUG = 'how-it-starts-vc-chain-vs-ergo';

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
    'How It Starts: VC Chain vs Ergo Fair-Launched PoW';
  const description =
    infographic.seoDescription ||
    'Visual comparison of a typical VC-backed blockchain launch—private sales, seed rounds, ICOs and insider exits—against Ergo’s research-driven, fair-launched Proof-of-Work model with open mining and long-term security.';

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Ergo Platform',
      title: 'How It Starts: VC Chain vs Ergo',
      description:
        'Infographic showing how insiders profit on typical VC chains through private rounds and unlocks, while Ergo launched with no ICO, no premine, no VC and open PoW mining for fair distribution.',
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

export default function HowItStartsVcChainVsErgoPage({ params }: Props) {
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
        name: 'Fair launch vs VC tokenomics',
      },
      {
        '@type': 'Thing',
        name: 'Ergo distribution model',
      },
      {
        '@type': 'Thing',
        name: 'Open PoW mining',
      },
      {
        '@type': 'Thing',
        name: 'Storage rent',
      },
      {
        '@type': 'Thing',
        name: 'Tail emission',
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
      <HowItStartsVcChainVsErgoClient infographic={infographic} />
    </>
  );
}



