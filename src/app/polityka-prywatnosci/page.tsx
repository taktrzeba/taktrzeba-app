import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka prywatności | TakTrzeba',
  description:
    'Polityka prywatności TakTrzeba: informacje o przetwarzaniu danych, celu kontaktu i prawach użytkownika.',
  alternates: {
    canonical: '/polityka-prywatnosci',
  },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <main className="container" style={{ padding: '4rem 0' }}>
      <h1>Polityka prywatności</h1>
      <p>
        Dokument opisuje zasady przetwarzania danych osobowych osób kontaktujących się z
        TakTrzeba.
      </p>

      <h2>Zakres danych</h2>
      <p>Przetwarzamy dane podane dobrowolnie w formularzach i korespondencji kontaktowej.</p>

      <h2>Cel przetwarzania</h2>
      <p>Dane wykorzystujemy do obsługi zapytań, zapisów i organizacji warsztatów.</p>

      <h2>Prawa użytkownika</h2>
      <p>
        Użytkownik ma prawo dostępu do danych, ich sprostowania, ograniczenia przetwarzania
        oraz żądania usunięcia zgodnie z obowiązującymi przepisami.
      </p>
    </main>
  );
}
