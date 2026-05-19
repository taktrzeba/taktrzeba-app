import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dla rodziców | TakTrzeba',
  description:
    'Informacje dla rodziców: jak wyglądają warsztaty, jak dbamy o bezpieczeństwo i czego uczy się młodzież podczas zajęć TakTrzeba.',
  alternates: {
    canonical: '/dla-rodzicow',
  },
};

export default function DlaRodzicowPage() {
  return (
    <main className="container" style={{ padding: '4rem 0' }}>
      <h1>Dla rodziców</h1>
      <p>
        Warsztaty TakTrzeba są zaprojektowane tak, aby młodzież rozwijała praktyczne
        umiejętności i odpowiedzialność w bezpiecznych warunkach.
      </p>

      <h2>Co zyskuje uczestnik</h2>
      <ul>
        <li>Podstawy pracy narzędziami i bezpieczne nawyki.</li>
        <li>Umiejętność realizacji zadania od planu do efektu.</li>
        <li>Poczucie sprawczości i większą samodzielność.</li>
      </ul>

      <h2>Organizacja</h2>
      <p>
        Pracujemy w małych grupach, z jasnymi zasadami i nadzorem instruktorów na każdym
        etapie zajęć.
      </p>
    </main>
  );
}
