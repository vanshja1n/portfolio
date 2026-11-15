import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

// Singleton Lenis instance shared across the app
let lenisInstance: Lenis | null = null;

const SCROLL_OFFSET = -120;

export function getLenis() {
  return lenisInstance;
}

export function scrollToSection(target: string | HTMLElement) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element || !(element instanceof HTMLElement)) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(element, { offset: SCROLL_OFFSET });
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY + SCROLL_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function useLenis() {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenisInstance = lenis;

    // Update CSS custom property for scroll position
    lenis.on('scroll', ({ scroll, progress }: { scroll: number; progress: number }) => {
      document.documentElement.style.setProperty('--scrollY', `${scroll}px`);
      document.documentElement.style.setProperty('--scroll-progress', String(progress));
    });

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const section = document.querySelector(href);
      if (!section) return;

      event.preventDefault();
      scrollToSection(section);
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
