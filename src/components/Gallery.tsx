'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  const images = [
    {
      src: 'https://images.prismic.io/taktrzeba/agxM-qYofJOwHXOB_taktrzeba-6.png?auto=format,compress',
      alt: 'Młodzież pracująca z narzędziami',
      caption: 'Prawdziwa praca z narzędziami'
    },
    {
      src: 'https://images.prismic.io/taktrzeba/agxM-6YofJOwHXOC_taktrzeba-7.png?auto=format,compress',
      alt: 'Warsztat stolarski',
      caption: 'Warsztat przystosowany do młodzieży'
    },
    {
      src: 'https://images.prismic.io/taktrzeba/agxM_KYofJOwHXOD_taktrzeba-8.png?auto=format,compress',
      alt: 'Praca zespołowa',
      caption: 'Małe grupy, indywidualne podejście'
    },
    {
      src: 'https://images.prismic.io/taktrzeba/agxM_aYofJOwHXOE_taktrzeba-9.png?auto=format,compress',
      alt: 'Gotowe projekty',
      caption: 'Efekty, które zabierasz do domu'
    },
    {
      src: 'https://images.prismic.io/taktrzeba/agxM_qYofJOwHXOF_taktrzeba-10.png?auto=format,compress',
      alt: 'Koncentracja przy pracy',
      caption: 'Uczenie przez praktykę'
    },
    {
      src: 'https://images.prismic.io/taktrzeba/agxM-KYofJOwHXN__taktrzeba-4.png?auto=format,compress',
      alt: 'Młodzi ludzie uczący się',
      caption: 'Rozwój przez działanie'
    }
  ];

  return (
    <section className="gallery-section" ref={sectionRef}>
      <div className="container">
        <h2 className="animate-on-scroll">Zobacz, jak to wygląda</h2>
        <p className="gallery-intro animate-on-scroll">
          Zajęcia w małych grupach, bezpieczne stanowiska, prawdziwe efekty
        </p>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item animate-on-scroll">
              <div className="gallery-image-wrapper">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <p className="gallery-caption">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
