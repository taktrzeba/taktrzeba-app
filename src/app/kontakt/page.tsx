import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | TakTrzeba',
  description:
    'Skontaktuj się z zespołem TakTrzeba. Odpowiadamy na pytania rodziców dotyczące warsztatów praktycznych dla młodzieży.',
  alternates: {
    canonical: '/kontakt',
  },
};

export default function KontaktPage() {
  return (
    <main className="container" style={{ padding: '4rem 0' }}>
      <h1>Kontakt</h1>
      <p>Masz pytania o program, terminy lub zapisy? Napisz do nas.</p>

      <h2>Dane kontaktowe</h2>
      <ul>
        <li>E-mail: kontakt@taktrzeba.pl</li>
        <li>Telefon: +48 000 000 000</li>
        <li>Godziny kontaktu: pon.-pt. 9:00-17:00</li>
      </ul>

      <h2>Lokalizacje warsztatów</h2>
      <p>Aktualne miasta i terminy publikujemy na stronie głównej oraz w komunikacji zapisowej.</p>
    </main>
  );
}
