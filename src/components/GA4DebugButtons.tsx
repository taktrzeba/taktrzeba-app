'use client';

import React from 'react';
import { GA_EVENT_NAMES, trackEvent } from '@/lib/analytics';

export default function GA4DebugButtons() {
  const sendOpened = () => {
    trackEvent(GA_EVENT_NAMES.OPENED_PAGE, { page_path: window.location.pathname, page_title: document.title, debug_mode: true });
  };

  const sendClicked = () => {
    trackEvent(GA_EVENT_NAMES.CLICKED, { location: 'debug_panel', destination: 'test', debug_mode: true });
  };

  const sendSent = () => {
    trackEvent(GA_EVENT_NAMES.SENT, { source: 'debug_panel', preferred_workshop: 'stolarka', debug_mode: true });
  };

  const sendAssessment = () => {
    trackEvent(GA_EVENT_NAMES.DID_ASSESSMENT, { location: 'debug_panel', debug_mode: true });
  };

  const sendSale = () => {
    trackEvent(GA_EVENT_NAMES.SALE, { source: 'debug_panel', value: 1, currency: 'PLN', debug_mode: true });
  };

  return (
    <div style={{ position: 'fixed', right: 12, bottom: 12, zIndex: 9999, background: '#fff', border: '1px solid #eee', padding: 12, borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>
      <strong style={{ display: 'block', marginBottom: 8 }}>GA4 Debug Sender</strong>
      <div style={{ display: 'grid', gap: 8 }}>
        <button onClick={sendOpened} style={{ padding: '6px 8px' }}>Send opened_page</button>
        <button onClick={sendClicked} style={{ padding: '6px 8px' }}>Send clicked</button>
        <button onClick={sendSent} style={{ padding: '6px 8px' }}>Send sent</button>
        <button onClick={sendAssessment} style={{ padding: '6px 8px' }}>Send did_assessment</button>
        <button onClick={sendSale} style={{ padding: '6px 8px' }}>Send sale</button>
      </div>
    </div>
  );
}
