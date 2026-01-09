'use client';

import { useEffect } from 'react';

export default function AnchorHandler() {
  useEffect(() => {
    // Handle anchor links on page load
    const hash = window.location.hash;
    if (hash) {
      // Wait for components to render
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }

    // Handle anchor clicks during navigation
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const hash = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(hash || '');
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', `#${hash}`);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null; // This component doesn't render anything
}