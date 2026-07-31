declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-3722JJKPZ9';

export const GA_EVENT_NAMES = {
  PAGE_VIEW: 'page_view',
  OPENED_PAGE: 'opened_page',
  OPENED_TEST_A: 'opened_test_a',
  OPENED_TEST_B: 'opened_test_b',
  OPENED_THROUGH_EMAIL: 'opened_through_email',
  CTA_CLICK: 'clicked',
  CLICKED: 'clicked',
  FORM_START: 'form_started',
  FORM_SUBMIT: 'generate_lead',
  SENT: 'sent',
  DID_ASSESSMENT: 'did_assessment',
  ASSESSMENT_COMPLETED: 'did_assessment',
  SALE: 'sale',
  SALE_COMPLETED: 'purchase',
  FAQ_OPEN: 'landing_faq_open',
  OUTBOUND_CLICK: 'landing_outbound_click',
} as const;

export type PurchaseItem = {
  item_id: string;
  item_name: string;
  price: number;
  quantity: number;
};

export function trackPageView(path?: string) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  const pagePath = path || `${window.location.pathname}${window.location.search}`;
  const pageData = {
    page_path: pagePath,
    page_title: document.title,
  };

  window.gtag('event', GA_EVENT_NAMES.PAGE_VIEW, pageData);
  window.gtag('event', GA_EVENT_NAMES.OPENED_PAGE, pageData);

  const query = new URLSearchParams(window.location.search);
  if (query.get('utm_medium') === 'email') {
    window.gtag('event', GA_EVENT_NAMES.OPENED_THROUGH_EMAIL, {
      ...pageData,
      email_source: query.get('utm_source') || 'unknown',
      campaign: query.get('utm_campaign') || 'not_set',
      content: query.get('utm_content') || 'not_set',
    });
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, params);
}

export function trackAssessmentCompleted(
  assessmentName: string,
  scoreBand?: 'low' | 'medium' | 'high',
) {
  trackEvent(GA_EVENT_NAMES.DID_ASSESSMENT, {
    assessment_name: assessmentName,
    ...(scoreBand ? { score_band: scoreBand } : {}),
  });
}

export function trackConfirmedSale({
  transactionId,
  value,
  currency,
  items,
}: {
  transactionId: string;
  value: number;
  currency: string;
  items: PurchaseItem[];
}) {
  const saleData = {
    transaction_id: transactionId,
    value,
    currency,
    items,
  };

  trackEvent(GA_EVENT_NAMES.SALE_COMPLETED, saleData);
  trackEvent(GA_EVENT_NAMES.SALE, saleData);
}
