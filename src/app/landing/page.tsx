import Link from 'next/link';

export default function LandingPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#fff' }}>
      <Link href="/test-a">Next page</Link>
    </main>
  );
}
