import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { UniversalInfographicClient } from '@/components/infographics/UniversalInfographicClient';
import { infographics } from '@/data/infographics';
import { siteConfig } from '@/config/site-config';

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const infographic = infographics.find(item => item.slug === params.slug);

  if (!infographic) {
    return {
      title: 'Infographic Not Found',
      description: 'The requested infographic could not be found.',
    };
  }

  const origin = siteConfig.siteUrl;
  const url = `${origin}/infographics/${infographic.slug}`;
  const title = `${infographic.title} - Ergo Infographics`;
  const description = infographic.seoDescription || infographic.shortDescription;

  return {
    title,
    description,
    keywords: infographic.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: "Ergo Platform",
      title,
      description,
      images: [{
        url: infographic.ogImageUrl || `${origin}${infographic.fullImageUrl}`,
        width: 1200,
        height: 630,
        alt: infographic.imageAlt
      }],
      locale: "en_US",
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [infographic.ogImageUrl || `${origin}${infographic.fullImageUrl}`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  };
}

export async function generateStaticParams() {
  return infographics.map((infographic) => ({
    slug: infographic.slug,
  }));
}

export default async function InfographicDetailPage(props: Props) {
  const params = await props.params;
  const infographic = infographics.find(item => item.slug === params.slug);

  if (!infographic) {
    notFound();
  }

  return <UniversalInfographicClient infographic={infographic} />;
}
