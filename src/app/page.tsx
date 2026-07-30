'use client';

import Link from 'next/link';
import { GA_EVENT_NAMES, trackEvent } from '@/lib/analytics';

export default function Home() {
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
    </main>
  );
}
