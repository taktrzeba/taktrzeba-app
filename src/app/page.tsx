import Hero from '@/components/Hero';
import WhyCourse from '@/components/WhyCourse';
import CourseFormat from '@/components/CourseFormat';
import CourseProgram from '@/components/CourseProgram';
import CourseDetails from '@/components/CourseDetails';
import CourseSection from '@/components/CourseSection';
import Benefits from '@/components/Benefits';
import Gallery from '@/components/Gallery';
import Safety from '@/components/Safety';
import ForParents from '@/components/ForParents';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ParallaxBackground from '@/components/ParallaxBackground';
import ScrollProgress from '@/components/ScrollProgress';
import AnchorHandler from '@/components/AnchorHandler';
import { coursesSyllabus } from '@/data/coursesSyllabus';

export default function Home() {
  // Mapowanie kursów na ID i obrazy
  const courseConfigs = [
    {
      courseId: 'kurs-mechanik-rowerowy',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80'
    },
    {
      courseId: 'kurs-stolarka',
      imageUrl: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop&q=80'
    },
    {
      courseId: 'kurs-hydraulika',
      imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop&q=80'
    },
    {
      courseId: 'kurs-elektryka',
      imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop&q=80'
    }
  ];

  // JSON-LD structured data dla SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'tak trzeba - Wakacyjny kurs praktyczny dla młodzieży',
    description: 'Praktyczny kurs rzemieślniczy dla młodzieży 14-16 lat. Stolarka, elektryka, hydraulika i mechanika rowerowa. 5 dni intensywnej nauki przez praktykę.',
    provider: {
      '@type': 'Organization',
      name: 'tak trzeba',
      url: 'https://taktrzeba.pl'
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
      <AnchorHandler />
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
        
        {/* Sekcje szczegółowe dla każdego kursu */}
        {coursesSyllabus.map((course, index) => (
          <CourseSection
            key={index}
            course={course}
            courseId={courseConfigs[index].courseId}
            imageUrl={courseConfigs[index].imageUrl}
          />
        ))}
        
        <CourseDetails />
        <Benefits />
        <Gallery />
        <Safety />
        <ForParents />
        <FAQ />
        <CTA />
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Kursy</h4>
              <ul>
                {coursesSyllabus.map((course, index) => (
                  <li key={index}>
                    <a href={`#${courseConfigs[index].courseId}`}>
                      {course.icon} {course.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <h4>Nawigacja</h4>
              <ul>
                <li><a href="#o-kursie">O kursie</a></li>
                <li><a href="#program">Program</a></li>
                <li><a href="#program-szczegolowy">Program szczegółowy</a></li>
                <li><a href="#zapisy">Zapisy</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>tak trzeba</h4>
              <p>Praktyczne kursy rzemiosła dla młodzieży</p>
              <p className="footer-brand">taktrzeba.pl</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 tak trzeba. Wszystkie prawa zastrzeżone.</p>
            <a href="/polityka-prywatnosci">Polityka prywatności</a>
          </div>
        </div>
      </footer>
    </>
  );
}
