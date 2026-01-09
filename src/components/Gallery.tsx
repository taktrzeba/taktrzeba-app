'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      alt: 'Młodzież pracująca z narzędziami',
      caption: 'Prawdziwa praca z narzędziami'
    },
    {
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      alt: 'Warsztat stolarski',
      caption: 'Warsztat przystosowany do młodzieży'
    },
    {
      src: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=600&h=400&fit=crop',
      alt: 'Praca zespołowa',
      caption: 'Małe grupy, indywidualne podejście'
    },
    {
      src: 'https://images.unsplash.com/photo-1581092160607-ee67e7505270?w=600&h=400&fit=crop',
      alt: 'Gotowe projekty',
      caption: 'Efekty, które zabierasz do domu'
    },
    {
      src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
      alt: 'Koncentracja przy pracy',
      caption: 'Uczenie przez praktykę'
    },
    {
      src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
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
