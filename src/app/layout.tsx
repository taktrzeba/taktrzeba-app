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

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://taktrzeba.pl/#organization',
      name: 'TakTrzeba',
      url: 'https://taktrzeba.pl',
      logo: 'https://taktrzeba.pl/favicon.svg',
      description:
        'Praktyczne warsztaty dla młodzieży 14-16 lat: stolarka, hydraulika, elektryka i mechanika rowerowa.',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'kontakt@taktrzeba.pl',
          availableLanguage: ['pl'],
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://taktrzeba.pl/#localbusiness',
      name: 'TakTrzeba',
      url: 'https://taktrzeba.pl',
      email: 'kontakt@taktrzeba.pl',
      areaServed: 'PL',
      parentOrganization: {
        '@id': 'https://taktrzeba.pl/#organization',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "tak trzeba - Wakacyjny kurs praktyczny dla młodzieży 14-16 lat | taktrzeba.pl | Stolarka, Elektryka, Hydraulika",
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
  authors: [{ name: "tak trzeba" }],
  creator: "tak trzeba",
  publisher: "tak trzeba",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://taktrzeba.pl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "tak trzeba - Wakacyjny kurs praktyczny dla młodzieży",
    description: "Praktyczne kursy zawodowe dla młodzieży 14-16 lat. Stolarka, elektryka, hydraulika, mechanika rowerowa. 5 dni intensywnej nauki przez praktykę.",
    url: 'https://taktrzeba.pl',
    siteName: 'tak trzeba',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'tak trzeba - Kursy praktyczne dla młodzieży',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "tak trzeba - Wakacyjny kurs praktyczny dla młodzieży",
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
    google: googleVerification,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.svg', type: 'image/svg+xml' }
    ],
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <meta name="theme-color" content="#2c5f2d" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
