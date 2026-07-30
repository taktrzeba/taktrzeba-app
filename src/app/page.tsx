 'use client';

import Link from 'next/link';
import { GA_EVENT_NAMES, trackEvent } from '@/lib/analytics';
import GA4DebugButtons from '@/components/GA4DebugButtons';

export default function Home() {
  const showDebug = process.env.NEXT_PUBLIC_ENABLE_DEBUG_EVENTS === 'true';
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#fff' }}>
      <Link
        href="/test-a"
        onClick={() => {
          trackEvent(GA_EVENT_NAMES.CLICKED, { location: 'home', destination: 'test_a' });
          trackEvent(GA_EVENT_NAMES.DID_ASSESSMENT, { location: 'home', destination: 'test_a' });
          trackEvent(GA_EVENT_NAMES.CTA_CLICK, { location: 'home', destination: 'test_a' });
        }}
        style={{
          padding: '0.75rem 1.25rem',
          borderRadius: '0.5rem',
          background: '#2563eb',
          color: '#fff',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Next page
      </Link>
      {showDebug && <GA4DebugButtons />}
    </main>
  );
}
