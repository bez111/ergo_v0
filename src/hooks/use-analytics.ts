"use client";

import { siteConfig } from "@/config/site-config";
import { useCallback } from "react";

const GA_ID = siteConfig.googleAnalyticsId || "";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/*
 If you use a cookie banner, you can do:

  const { enableAnalytics } = useAnalytics();

  function onConsentAccept() {
    enableAnalytics();
  }
 
  import { useAnalytics } from "@/hooks/useAnalytics";

  Track a button click:

export default function SignupButton() {
  const { sendEvent } = useAnalytics();

  return (
    <button
      onClick={() =>
        sendEvent({
          action: "signup_click",
          category: "engagement",
          label: "Hero section",
        })
      }
    >
      Sign up now
    </button>
  );
}

*/
export function useAnalytics() {
  const sendPageView = useCallback((path: string) => {
    if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
    window.gtag("config", GA_ID, { page_path: path });
  }, []);

  const sendEvent = useCallback(
    ({
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
    },
    []
  );

  /**
   * Optional: call this after the user gives cookie consent
   * to re-enable analytics dynamically.
   */
  const enableAnalytics = useCallback(() => {
    if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  }, []);

  return { sendPageView, sendEvent, enableAnalytics };
}
