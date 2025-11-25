import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HowIsSecurityMaintainedClient } from './HowIsSecurityMaintainedClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: { locale: string };
}

const SLUG = 'how-is-security-maintained-pos-vs-ergo-autolykos';

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
    'How Is Security Maintained? Proof-of-Stake vs Ergo Autolykos Mining';
  const description =
    infographic.seoDescription ||
    'See how network security differs between typical Proof-of-Stake staking, which concentrates rewards with large stakers, and Ergo’s ASIC-resistant Autolykos GPU mining designed for broader participation.';

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Ergo Platform',
      title: 'How Is Security Maintained? PoS Staking vs Ergo Autolykos Mining',
      description:
        'Infographic comparing PoS security, where large validators dominate, with Ergo’s Autolykos Proof-of-Work model that uses ASIC-resistant GPU mining for fairer, more accessible security.',
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

export default function HowIsSecurityMaintainedPage({ params }: Props) {
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
        name: 'Proof-of-Work vs Proof-of-Stake',
      },
      {
        '@type': 'Thing',
        name: 'Autolykos mining',
      },
      {
        '@type': 'Thing',
        name: 'ASIC-resistant GPU mining',
      },
      {
        '@type': 'Thing',
        name: 'Network security',
      },
      {
        '@type': 'Thing',
        name: 'Decentralization and reward distribution',
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
      <HowIsSecurityMaintainedClient infographic={infographic} />
    </>
  );
}



