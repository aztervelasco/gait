import { useEffect, useRef, useCallback } from 'react';

interface SmoothScrollOptions {
  lerp?: number;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  damping?: number;
  touchInertia?: number;
  infinite?: boolean;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal' | 'both';
  easing?: (t: number) => number;
}

export const useSmoothScroll = ({
  orientation = 'vertical',
}: SmoothScrollOptions = {}) => {
  const scrollRef = useRef({
    current: 0,
    target: 0,
    velocity: 0,
    direction: 0,
    lastScroll: 0,
    lastTime: performance.now(),
    isScrolling: false,
    limit: 0,
  });

  const scrollTimeoutRef = useRef<number | null>(null);

  const getMaxScroll = useCallback((): number => {
    if (orientation === 'horizontal') {
      return (
        Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth
        ) - window.innerWidth
      );
    }
    return (
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      ) - window.innerHeight
    );
  }, [orientation]);

  useEffect(() => {
    const handleScroll = () => {
      const now = performance.now();
      const currentScroll =
        orientation === 'horizontal' ? window.scrollX : window.scrollY;
      const deltaTime = Math.max(now - scrollRef.current.lastTime, 1);
      const deltaScroll = currentScroll - scrollRef.current.lastScroll;

      scrollRef.current.velocity = (deltaScroll / deltaTime) * 16.67;
      scrollRef.current.direction = Math.sign(deltaScroll);
      scrollRef.current.current = currentScroll;
      scrollRef.current.target = currentScroll;
      scrollRef.current.lastScroll = currentScroll;
      scrollRef.current.lastTime = now;
      scrollRef.current.isScrolling = true;
      scrollRef.current.limit = getMaxScroll();

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        scrollRef.current.isScrolling = false;
        scrollRef.current.velocity = 0;
        scrollRef.current.direction = 0;
      }, 150);
    };

    const handleResize = () => {
      scrollRef.current.limit = getMaxScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    scrollRef.current.limit = getMaxScroll();
    scrollRef.current.current =
      orientation === 'horizontal' ? window.scrollX : window.scrollY;
    scrollRef.current.lastScroll = scrollRef.current.current;

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [orientation, getMaxScroll]);

  // Programmatic scroll to position
  const scrollTo = useCallback(
    (target: number, immediate = false) => {
      if (orientation === 'horizontal') {
        window.scrollTo({
          left: target,
          behavior: immediate ? 'auto' : 'smooth',
        });
      } else {
        window.scrollTo({
          top: target,
          behavior: immediate ? 'auto' : 'smooth',
        });
      }
    },
    [orientation]
  );

  // Scroll by a delta amount
  const scrollBy = useCallback(
    (delta: number, immediate = false) => {
      if (orientation === 'horizontal') {
        window.scrollBy({
          left: delta,
          behavior: immediate ? 'auto' : 'smooth',
        });
      } else {
        window.scrollBy({
          top: delta,
          behavior: immediate ? 'auto' : 'smooth',
        });
      }
    },
    [orientation]
  );

  // Stop current scroll
  const stop = useCallback(() => {
    const current =
      orientation === 'horizontal' ? window.scrollX : window.scrollY;
    if (orientation === 'horizontal') {
      window.scrollTo({ left: current, behavior: 'auto' });
    } else {
      window.scrollTo({ top: current, behavior: 'auto' });
    }
    scrollRef.current.isScrolling = false;
    scrollRef.current.velocity = 0;
  }, [orientation]);

  // Get current scroll data
  const getScrollData = useCallback(() => {
    const limit = scrollRef.current.limit || getMaxScroll();
    const current =
      orientation === 'horizontal' ? window.scrollX : window.scrollY;
    return {
      current,
      target: scrollRef.current.target,
      velocity: scrollRef.current.velocity,
      direction: scrollRef.current.direction,
      isScrolling: scrollRef.current.isScrolling,
      limit,
      progress: limit > 0 ? Math.min(Math.max(current / limit, 0), 1) : 0,
    };
  }, [orientation, getMaxScroll]);

  return {
    scrollTo,
    scrollBy,
    stop,
    getScrollData,
  };
};