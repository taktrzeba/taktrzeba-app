import Hero from '@/components/Hero';
import WhyCourse from '@/components/WhyCourse';
import CourseFormat from '@/components/CourseFormat';
import CourseProgram from '@/components/CourseProgram';
import Benefits from '@/components/Benefits';
import Gallery from '@/components/Gallery';
import Safety from '@/components/Safety';
import ForParents from '@/components/ForParents';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ParallaxBackground from '@/components/ParallaxBackground';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  // JSON-LD structured data dla SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Tydzień Rzemiosła - Wakacyjny kurs praktyczny dla młodzieży',
    description: 'Praktyczny kurs rzemieślniczy dla młodzieży 14-16 lat. Stolarka, elektryka, hydraulika i mechanika rowerowa. 5 dni intensywnej nauki przez praktykę.',
    provider: {
      '@type': 'Organization',
      name: 'Tydzień Rzemiosła',
      url: 'https://tydzienrzemiosla.pl'
    },
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'onsite',
        duration: 'P5D',
        inLanguage: 'pl'
      }
    ],
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
      audienceType: 'młodzież 14-16 lat'
    },
    coursePrerequisites: 'Brak wymagań wstępnych',
    educationalLevel: 'Początkujący',
    teaches: [
      'Podstawy stolarki',
      'Podstawy elektryki',
      'Podstawy hydrauliki',
      'Naprawa rowerów',
      'Praca z narzędziami',
      'Bezpieczeństwo pracy'
    ],
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <>
      <ScrollProgress />
      <ParallaxBackground />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <WhyCourse />
        <CourseFormat />
        <CourseProgram />
        <Benefits />
        <Gallery />
        <Safety />
        <ForParents />
        <FAQ />
        <CTA />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2026 Tydzień Rzemiosła. Wszystkie prawa zastrzeżone.</p>
          <div className="footer-links">
            <a href="#o-kursie">O kursie</a>
            <a href="#program">Program</a>
            <a href="#zapisy">Zapisy</a>
            <a href="/polityka-prywatnosci">Polityka prywatności</a>
          </div>
        </div>
      </footer>
    </>
  );
}
