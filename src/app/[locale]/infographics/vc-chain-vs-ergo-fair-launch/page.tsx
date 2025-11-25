import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { VCChainVsErgoClient } from './VCChainVsErgoClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: { locale: string };
}

const SLUG = 'vc-chain-vs-ergo-fair-launch';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const infographic = infographics.find(item => item.slug === SLUG);
  
  if (!infographic) {
    return {
      title: 'Infographic Not Found',
      description: 'The requested infographic could not be found.',
    };
  }

  const origin = siteConfig.siteUrl;
  const url = `${origin}/infographics/${infographic.slug}`;
  const title = `VC Chain vs Ergo: Fair Launch & Security Without Masters`;
  const description = `Compare a typical VC-funded chain with Ergo's fair PoW launch, open mining and Autolykos design — and see why it delivers security without masters.`;

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: "Ergo Platform",
      title: `VC Chain vs Ergo at a Glance: Fair Launch vs VC Playbook`,
      description: `Infographic showing how VC chains launch with insiders first while Ergo uses fair PoW, open mining and protocol-level incentives for real decentralization.`,
      images: [{
        url: `${origin}${infographic.fullImageUrl}`,
        width: 1280,
        height: 670,
        alt: infographic.imageAlt
      }],
      locale: "en_US",
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

export default function VCChainVsErgoPage({ params }: Props) {
  const infographic = infographics.find(item => item.slug === SLUG);
  
  if (!infographic) {
    notFound();
  }

  // Add structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": infographic.title,
    "description": infographic.shortDescription,
    "url": `${siteConfig.siteUrl}${infographic.fullImageUrl}`,
    "contentUrl": `${siteConfig.siteUrl}${infographic.fullImageUrl}`,
    "thumbnailUrl": `${siteConfig.siteUrl}${infographic.previewImageUrl}`,
    "datePublished": infographic.publishDate,
    "author": {
      "@type": "Organization",
      "name": "Ergo Platform"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.siteUrl}/logo.png`
      }
    },
    "keywords": infographic.tags.join(", "),
    "about": [
      {
        "@type": "Thing",
        "name": "Ergo Blockchain"
      },
      {
        "@type": "Thing", 
        "name": "Fair Launch"
      },
      {
        "@type": "Thing",
        "name": "Proof of Work"
      },
      {
        "@type": "Thing",
        "name": "Autolykos"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <VCChainVsErgoClient infographic={infographic} />
    </>
  );
}
