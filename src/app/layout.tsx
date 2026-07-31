import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
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
        'Praktyczne warsztaty dla mÅ‚odzieÅ¼y 14-16 lat: stolarka, hydraulika, elektryka i mechanika rowerowa.',
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
  title: "tak trzeba - Wakacyjny kurs praktyczny dla mÅ‚odzieÅ¼y 14-16 lat | taktrzeba.pl | Stolarka, Elektryka, Hydraulika",
  description: "Praktyczne kursy zawodowe dla mÅ‚odzieÅ¼y 14-16 lat w Polsce. Stolarka, elektryka, hydraulika, mechanika rowerowa. 5 dni intensywnej nauki przez praktykÄ™. Wakacje z sensem bez telefonÃ³w.",
  keywords: [
    "kursy zawodowe dla mÅ‚odzieÅ¼y",
    "wakacyjne kursy praktyczne",
    "stolarka dla dzieci",
    "elektryka dla mÅ‚odzieÅ¼y",
    "hydraulika kurs",
    "mechanika rowerowa kurs",
    "kursy rzemieÅ›lnicze Polska",
    "nauka zawodu dla mÅ‚odzieÅ¼y",
    "praktyczne kursy wakacyjne",
    "kursy manualne dla mÅ‚odzieÅ¼y",
    "rzemiosÅ‚o dla mÅ‚odzieÅ¼y",
    "kursy bez telefonÃ³w"
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
    title: "tak trzeba - Wakacyjny kurs praktyczny dla mÅ‚odzieÅ¼y",
    description: "Praktyczne kursy zawodowe dla mÅ‚odzieÅ¼y 14-16 lat. Stolarka, elektryka, hydraulika, mechanika rowerowa. 5 dni intensywnej nauki przez praktykÄ™.",
    url: 'https://taktrzeba.pl',
    siteName: 'tak trzeba',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'tak trzeba - Kursy praktyczne dla mÅ‚odzieÅ¼y',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "tak trzeba - Wakacyjny kurs praktyczny dla mÅ‚odzieÅ¼y",
    description: "Praktyczne kursy zawodowe dla mÅ‚odzieÅ¼y 14-16 lat. 5 dni intensywnej nauki przez praktykÄ™.",
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
        <Script id="ga4-stub" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false,
            });
          `}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}

