import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O nas | TakTrzeba',
  description:
    'Poznaj TakTrzeba: warsztaty praktyczne dla młodzieży 14-16 lat, doświadczona kadra i bezpieczne środowisko nauki przez działanie.',
  alternates: {
    canonical: '/o-nas',
  },
};

export default function ONasPage() {
  return (
    <main className="container" style={{ padding: '4rem 0' }}>
      <h1>O nas</h1>
      <p>
        TakTrzeba to inicjatywa edukacyjna skupiona na praktycznych kompetencjach dla
        młodzieży w wieku 14-16 lat.
      </p>

      <h2>Nasza misja</h2>
      <p>
        Pomagamy nastolatkom budować samodzielność, sprawczość i pewność siebie poprzez
        realną pracę z narzędziami i projektami.
      </p>

      <h2>Co robimy</h2>
      <ul>
        <li>Warsztaty stolarki, hydrauliki, elektryki i mechaniki rowerowej.</li>
        <li>Program oparty na praktyce i bezpieczeństwie.</li>
        <li>Zajęcia prowadzone w małych grupach.</li>
      </ul>
    </main>
  );
}
