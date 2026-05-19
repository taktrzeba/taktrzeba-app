import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regulamin | TakTrzeba',
  description:
    'Regulamin uczestnictwa w warsztatach TakTrzeba: zasady zapisów, udziału i organizacji zajęć praktycznych dla młodzieży.',
  alternates: {
    canonical: '/regulamin',
  },
};

export default function RegulaminPage() {
  return (
    <main className="container" style={{ padding: '4rem 0' }}>
      <h1>Regulamin</h1>
      <p>Niniejszy regulamin określa zasady udziału w warsztatach organizowanych przez TakTrzeba.</p>

      <h2>1. Uczestnictwo</h2>
      <p>W warsztatach uczestniczy młodzież w wieku wskazanym w opisie programu.</p>

      <h2>2. Zasady organizacyjne</h2>
      <ul>
        <li>Uczestnik stosuje się do poleceń instruktora.</li>
        <li>Uczestnik przestrzega zasad bezpieczeństwa i porządku pracy.</li>
        <li>Organizator może przerwać udział w przypadku rażącego naruszenia zasad.</li>
      </ul>

      <h2>3. Kontakt</h2>
      <p>W sprawach formalnych prosimy o kontakt na adres: kontakt@taktrzeba.pl.</p>
    </main>
  );
}
