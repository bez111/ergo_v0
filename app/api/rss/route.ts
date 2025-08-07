import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://ergoblockchain.org'
  const currentDate = new Date().toUTCString()
  
  // В реальном приложении эти данные должны загружаться из БД или CMS
  const posts = [
    {
      title: "Ergo's Approach to DeFi: Building Sustainable Financial Tools",
      description: "Explore how Ergo is revolutionizing DeFi with its unique approach to sustainability and security.",
      link: `${baseUrl}/blog/ergo-defi-approach`,
      pubDate: new Date('2024-01-15').toUTCString(),
      author: "Ergo Team",
      categories: ["DeFi", "Technology", "Blockchain"]
    },
    {
      title: "Understanding Storage Rent: The Key to Blockchain Sustainability",
      description: "Learn how Ergo's storage rent mechanism ensures long-term blockchain sustainability.",
      link: `${baseUrl}/blog/storage-rent-explained`,
      pubDate: new Date('2024-01-10').toUTCString(),
      author: "Ergo Team",
      categories: ["Technology", "Storage Rent", "Sustainability"]
    },
    {
      title: "ErgoScript Tutorial: Building Your First Smart Contract",
      description: "A step-by-step guide to creating smart contracts on Ergo using ErgoScript.",
      link: `${baseUrl}/blog/ergoscript-tutorial`,
      pubDate: new Date('2024-01-05').toUTCString(),
      author: "Ergo Developers",
      categories: ["Development", "Tutorial", "ErgoScript"]
    }
  ]
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Ergo Platform Blog</title>
    <description>Latest news, updates, and insights from Ergo Platform - the next-generation smart contract platform.</description>
    <link>${baseUrl}/blog</link>
    <language>en-US</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml"/>
    <copyright>Copyright © ${new Date().getFullYear()} Ergo Platform</copyright>
    <generator>Ergo Platform RSS Generator</generator>
    <webMaster>contact@ergoblockchain.org (Ergo Team)</webMaster>
    <managingEditor>editor@ergoblockchain.org (Ergo Editorial Team)</managingEditor>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>Ergo Platform Blog</title>
      <link>${baseUrl}/blog</link>
    </image>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.link}</link>
      <guid isPermaLink="true">${post.link}</guid>
      <pubDate>${post.pubDate}</pubDate>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>
      ${post.categories.map(cat => `<category><![CDATA[${cat}]]></category>`).join('\n      ')}
    </item>`).join('')}
  </channel>
</rss>`
  
  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    }
  })
} 