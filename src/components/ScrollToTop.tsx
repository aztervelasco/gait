import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export const ScrollToTop = () => {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    // Instant scroll to top on route change to prevent jumps
    // This ensures pages always load at the first section/top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
    // Small delay to ensure DOM is ready, then force scroll to top again
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  return null;
};