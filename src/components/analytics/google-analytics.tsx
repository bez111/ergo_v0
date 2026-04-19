"use client"

import { siteConfig } from "@/config/site-config";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script"
import { Suspense, useEffect } from "react";
import { WebVitals } from "./web-vitals";

/**
 * 
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'ID');
</script> 
 
 */

const GA_ID = siteConfig.googleAnalyticsId

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: [string, ...unknown[]]) => void;
  }
}

/**
 * pageview helper (also exported below)
 */
export const pageview = (path: string) => {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};

/**
 * event helper
 * category/action/label/value are optional metadata for your events
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

function GoogleAnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams?.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    pageview(path);
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  if (!GA_ID) {
    return null
  }
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            page_path: window.location.pathname,
            send_page_view: true,
            custom_map: {
              'custom_parameter_1': 'metric_id',
              'custom_parameter_2': 'metric_value'
            }
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsInner />
      </Suspense>
      <WebVitals debug={process.env.NODE_ENV === 'development'} />
    </>
  )
} 