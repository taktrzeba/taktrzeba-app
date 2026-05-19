import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bezpieczeństwo | TakTrzeba',
  description:
    'Sprawdź standardy bezpieczeństwa na warsztatach TakTrzeba: zasady pracy, nadzór instruktorów i procedury reagowania.',
  alternates: {
    canonical: '/bezpieczenstwo',
  },
};

export default function BezpieczenstwoPage() {
  return (
    <main className="container" style={{ padding: '4rem 0' }}>
      <h1>Bezpieczeństwo</h1>
      <p>Bezpieczeństwo uczestników jest dla nas priorytetem na każdym etapie warsztatów.</p>

      <h2>Standardy</h2>
      <ul>
        <li>Instruktaż BHP przed rozpoczęciem zajęć.</li>
        <li>Stały nadzór instruktorów podczas pracy narzędziami.</li>
        <li>Praca w małych grupach i zadania dopasowane do poziomu uczestników.</li>
        <li>Jasne procedury reagowania na sytuacje awaryjne.</li>
      </ul>

      <h2>Wyposażenie</h2>
      <p>
        Uczestnicy korzystają ze stanowisk przygotowanych do nauki praktycznej zgodnie z
        zasadami bezpieczeństwa.
      </p>
    </main>
  );
}
