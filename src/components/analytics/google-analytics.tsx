"use client"

import Script from "next/script"

interface GoogleAnalyticsProps {
  id: string
}

export function GoogleAnalytics({ id }: GoogleAnalyticsProps) {
  if (!id) return null
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
} 