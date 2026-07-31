'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { GA_EVENT_NAMES, trackEvent, trackPageView } from '@/lib/analytics';

export default function TestAPage() {
  useEffect(() => {
    trackPageView('/test-a');
    trackEvent(GA_EVENT_NAMES.OPENED_TEST_A, { page_path: '/test-a' });
    trackEvent(GA_EVENT_NAMES.DID_ASSESSMENT, { assessment_name: 'test_a', page_path: '/test-a' });
  }, []);
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff7ed', padding: '2rem' }}>
      <div style={{ maxWidth: '720px', width: '100%', background: '#fff', borderRadius: '24px', padding: '2.5rem', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: '#f59e0b', fontWeight: 700, marginBottom: '0.75rem' }}>Test Page A</p>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1f2937' }}>This is Test Variant A</h1>
        <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1.5rem' }}>
          This version is intentionally styled differently so you can compare it to the control page and Test B.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <Link href="/" onClick={() => trackEvent(GA_EVENT_NAMES.CTA_CLICK, { variant: 'test_a', location: 'nav', destination: 'home' })} style={{ padding: '0.8rem 1rem', borderRadius: '999px', background: '#2c5f2d', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
            Go to Home
          </Link>
          <Link href="/test-a" onClick={() => trackEvent(GA_EVENT_NAMES.CTA_CLICK, { variant: 'test_a', location: 'nav', destination: 'test_a' })} style={{ padding: '0.8rem 1rem', borderRadius: '999px', background: '#f59e0b', color: '#111827', textDecoration: 'none', fontWeight: 600 }}>
            Stay on Test A
          </Link>
          <Link href="/test-b" onClick={() => trackEvent(GA_EVENT_NAMES.CTA_CLICK, { variant: 'test_a', location: 'nav', destination: 'test_b' })} style={{ padding: '0.8rem 1rem', borderRadius: '999px', background: '#2563eb', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
            Go to Test B
          </Link>
        </div>
      </div>
    </main>
  );
}


