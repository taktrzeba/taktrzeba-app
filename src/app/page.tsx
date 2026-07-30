import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#fff' }}>
      <Link
        href="/test-a"
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
