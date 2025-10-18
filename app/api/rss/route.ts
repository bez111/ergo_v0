import { NextResponse } from 'next/server'
import { blogPosts } from '@/app/[locale]/blog/_lib/blog-data'

export async function GET() {
  const baseUrl = 'https://ergoblockchain.org'
  const currentDate = new Date().toUTCString()
  
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
  
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
    ${sortedPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>
      ${(post.tags || []).map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ')}
    </item>`).join('')}
  </channel>
</rss>`
  
  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  })
} 