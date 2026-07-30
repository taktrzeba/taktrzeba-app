declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-3722JJKPZ9';

export const GA_EVENT_NAMES = {
  OPENED_PAGE: 'opened_page',
  CLICKED: 'clicked',
  SENT: 'sent',
  DID_ASSESSMENT: 'did_assessment',
  SALE: 'sale',
  PAGE_VIEW: 'landing_page_view',
  CTA_CLICK: 'landing_cta_click',
  FORM_START: 'landing_form_start',
  FORM_SUBMIT: 'landing_form_submit',
  FAQ_OPEN: 'landing_faq_open',
  OUTBOUND_CLICK: 'landing_outbound_click',
} as const;

export function trackPageView(path?: string) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  const pagePath = path || `${window.location.pathname}${window.location.search}`;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: pagePath,
  });
  window.gtag('event', GA_EVENT_NAMES.PAGE_VIEW, {
    page_path: pagePath,
    page_title: document.title,
  });
  window.gtag('event', GA_EVENT_NAMES.OPENED_PAGE, {
    page_path: pagePath,
    page_title: document.title,
  });
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') {
    return;
  }

  const dataLayer = window.dataLayer;
  if (window.gtag) {
    window.gtag('event', eventName, params);
  } else if (Array.isArray(dataLayer)) {
    dataLayer.push(['event', eventName, params || {}]);
  }
}
