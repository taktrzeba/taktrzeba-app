declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-4TDNRT3DS2';

export function trackPageView(path?: string) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  const pagePath = path || `${window.location.pathname}${window.location.search}`;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: pagePath,
  });
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, params);
}
