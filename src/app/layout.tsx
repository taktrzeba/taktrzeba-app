import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tydzień Rzemiosła - Wakacyjny kurs praktyczny dla młodzieży 14-16 lat | Stolarka, Elektryka, Hydraulika",
  description: "Praktyczne kursy zawodowe dla młodzieży 14-16 lat w Polsce. Stolarka, elektryka, hydraulika, mechanika rowerowa. 5 dni intensywnej nauki przez praktykę. Wakacje z sensem bez telefonów.",
  keywords: [
    "kursy zawodowe dla młodzieży",
    "wakacyjne kursy praktyczne",
    "stolarka dla dzieci",
    "elektryka dla młodzieży",
    "hydraulika kurs",
    "mechanika rowerowa kurs",
    "kursy rzemieślnicze Polska",
    "nauka zawodu dla młodzieży",
    "praktyczne kursy wakacyjne",
    "kursy manualne dla młodzieży",
    "rzemiosło dla młodzieży",
    "kursy bez telefonów"
  ],
  authors: [{ name: "Tydzień Rzemiosła" }],
  creator: "Tydzień Rzemiosła",
  publisher: "Tydzień Rzemiosła",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tydzienrzemiosla.pl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tydzień Rzemiosła - Wakacyjny kurs praktyczny dla młodzieży",
    description: "Praktyczne kursy zawodowe dla młodzieży 14-16 lat. Stolarka, elektryka, hydraulika, mechanika rowerowa. 5 dni intensywnej nauki przez praktykę.",
    url: 'https://tydzienrzemiosla.pl',
    siteName: 'Tydzień Rzemiosła',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tydzień Rzemiosła - Kursy praktyczne dla młodzieży',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tydzień Rzemiosła - Wakacyjny kurs praktyczny dla młodzieży",
    description: "Praktyczne kursy zawodowe dla młodzieży 14-16 lat. 5 dni intensywnej nauki przez praktykę.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // Dodaj po weryfikacji w Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2c5f2d" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
