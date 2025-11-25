import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WhoStartsWithTheCoinsClient } from './WhoStartsWithTheCoinsClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: { locale: string };
}

const SLUG = 'who-starts-with-the-coins-vc-allocation-vs-ergo-supply';

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
    'Who Starts With the Coins? VC Token Allocation vs Ergo PoW Supply';
  const description =
    infographic.seoDescription ||
    'See how typical VC chains reserve large token chunks for insiders while Ergo has no ICO, no premine and no VC allocation—only PoW block rewards earned by miners and users over time.';

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Ergo Platform',
      title: 'Who Starts With the Coins? VC Chains vs Ergo',
      description:
        'Infographic comparing VC-style token allocations—dominated by VCs, foundations and teams—to Ergo’s fair distribution model where all supply is mined via Proof-of-Work with no ICO or premine.',
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

export default function WhoStartsWithTheCoinsPage({ params }: Props) {
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
        name: 'Ergo fair launch and distribution',
      },
      {
        '@type': 'Thing',
        name: 'VC token allocation models',
      },
      {
        '@type': 'Thing',
        name: 'Proof-of-Work vs fundraising rounds',
      },
      {
        '@type': 'Thing',
        name: 'Ergo supply schedule',
      },
      {
        '@type': 'Thing',
        name: 'Cypherpunk tokenomics',
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
      <WhoStartsWithTheCoinsClient infographic={infographic} />
    </>
  );
}



