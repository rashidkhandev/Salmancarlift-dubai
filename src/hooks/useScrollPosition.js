import { useState, useEffect } from 'react';

/**
 * Custom hook to monitor scroll position for navbar styling and floating actions
 */
export const useScrollPosition = (threshold = 15, topThreshold = 400) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(currentScrollY > threshold);
          setShowBackToTop(currentScrollY > topThreshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, topThreshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return { isScrolled, showBackToTop, scrollY, scrollToTop };
};
