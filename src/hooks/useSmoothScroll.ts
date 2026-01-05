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
  lerp = 0.15,
  smoothWheel = true,
  smoothTouch = false,
  wheelMultiplier = 1.3,
  touchMultiplier = 1.5,
  damping = 0.88,
  touchInertia = 0.95,
  infinite = false,
  orientation = 'vertical',
  gestureOrientation = 'vertical',
  easing
}: SmoothScrollOptions = {}) => {
  const scrollRef = useRef({
    current: 0,
    target: 0,
    isScrolling: false,
    velocity: 0,
    direction: 0,
    lastTime: 0,
    limit: 0
  });
  const rafRef = useRef<number>();
  const touchRef = useRef({
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
    velocity: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    isInertia: false
  });

  // Enhanced easing functions
  const easingFunctions = {
    // Lenis-style easing (cubic bezier approximation) - faster
    lenis: (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    },
    // Exponential ease out for natural deceleration
    easeOutExpo: (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    // Cubic ease out
    easeOutCubic: (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    },
    // Quart ease out for smoother feel
    easeOutQuart: (t: number): number => {
      return 1 - Math.pow(1 - t, 4);
    },
    // Linear
    linear: (t: number): number => t
  };
  const activeEasing = easing || easingFunctions.lenis;

  // Advanced smooth interpolation with velocity-aware easing
  const smoothLerp = (start: number, end: number, factor: number, velocity: number): number => {
    // Velocity influences lerp speed for more responsive feel
    const velocityFactor = Math.min(Math.abs(velocity) * 0.001, 0.5);
    const adjustedFactor = Math.min(factor + velocityFactor, 0.4);
    const delta = end - start;
    const progress = adjustedFactor;

    // Apply easing to the progress for smoother motion
    const easedProgress = activeEasing(progress);
    return start + delta * easedProgress;
  };

  // Clamp value between min and max
  const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
  };

  // Get maximum scroll value based on orientation
  const getMaxScroll = useCallback((): number => {
    if (orientation === 'horizontal') {
      return Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth) - window.innerWidth;
    }
    return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
  }, [orientation]);

  // Enhanced smooth scroll animation with advanced momentum physics
  const animate = useCallback((currentTime: number) => {
    const scroll = scrollRef.current;
    const maxScroll = getMaxScroll();
    scroll.limit = maxScroll;

    // Calculate delta time for frame-independent animation
    const deltaTime = scroll.lastTime ? Math.min((currentTime - scroll.lastTime) / 16.67, 2) : 1;
    scroll.lastTime = currentTime;

    // Clamp target (unless infinite mode)
    if (!infinite) {
      scroll.target = clamp(scroll.target, 0, maxScroll);
    }

    // Calculate distance to target
    const delta = scroll.target - scroll.current;

    // Advanced velocity calculation with momentum preservation
    const acceleration = delta * lerp * deltaTime;
    const dampingFactor = Math.pow(damping, deltaTime);

    // Apply physics: velocity = velocity * damping + acceleration
    scroll.velocity = scroll.velocity * dampingFactor + acceleration;

    // Track scroll direction
    scroll.direction = Math.sign(scroll.velocity);

    // Apply velocity-based smooth lerp with easing
    scroll.current = smoothLerp(scroll.current, scroll.target, lerp * deltaTime, scroll.velocity);

    // Round to avoid sub-pixel rendering issues
    const rounded = Math.round(scroll.current * 100) / 100;

    // Update scroll position based on orientation
    if (orientation === 'horizontal') {
      window.scrollTo(rounded, 0);
    } else {
      window.scrollTo(0, rounded);
    }

    // Determine if animation should continue
    const hasMovement = Math.abs(delta) > 0.05;
    const hasVelocity = Math.abs(scroll.velocity) > 0.03;
    if (hasMovement || hasVelocity) {
      scroll.isScrolling = true;
      rafRef.current = requestAnimationFrame(animate);
    } else {
      // Snap to target when movement is negligible
      scroll.isScrolling = false;
      scroll.current = scroll.target;
      scroll.velocity = 0;
      scroll.direction = 0;
      if (orientation === 'horizontal') {
        window.scrollTo(scroll.target, 0);
      } else {
        window.scrollTo(0, scroll.target);
      }
    }
  }, [lerp, damping, infinite, orientation, getMaxScroll, activeEasing]);

  // Start animation loop
  const startAnimation = useCallback(() => {
    if (!scrollRef.current.isScrolling) {
      scrollRef.current.isScrolling = true;
      scrollRef.current.lastTime = performance.now();
      rafRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);
  useEffect(() => {
    const scroll = scrollRef.current;
    const initialScroll = orientation === 'horizontal' ? window.pageXOffset : window.pageYOffset;
    scroll.current = initialScroll;
    scroll.target = initialScroll;
    scroll.limit = getMaxScroll();

    // Enhanced wheel handler with momentum and direction detection
    const handleWheel = (e: WheelEvent) => {
      if (!smoothWheel) return;

      // Check gesture orientation
      const isVerticalGesture = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      const isHorizontalGesture = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (gestureOrientation === 'vertical' && !isVerticalGesture) return;
      if (gestureOrientation === 'horizontal' && !isHorizontalGesture) return;
      e.preventDefault();
      const maxScroll = getMaxScroll();

      // Use appropriate delta based on orientation
      const delta = orientation === 'horizontal' ? e.deltaX * wheelMultiplier : e.deltaY * wheelMultiplier;

      // Enhanced momentum: add to velocity for compound effect
      const momentumBoost = delta * 0.18;
      scroll.velocity += momentumBoost;

      // Update target with bounds checking
      scroll.target += delta;
      if (!infinite) {
        scroll.target = clamp(scroll.target, 0, maxScroll);
      }
      startAnimation();
    };

    // Touch start - capture initial position and reset velocity
    const handleTouchStart = (e: TouchEvent) => {
      if (!smoothTouch) return;
      const touch = touchRef.current;
      touch.startX = e.touches[0].clientX;
      touch.startY = e.touches[0].clientY;
      touch.x = touch.startX;
      touch.y = touch.startY;
      touch.lastX = touch.startX;
      touch.lastY = touch.startY;
      touch.velocity = 0;
      touch.lastTime = performance.now();
      touch.isInertia = false;

      // Stop any ongoing scroll animation for immediate response
      if (scroll.isScrolling) {
        scroll.velocity = 0;
      }
    };

    // Touch move - track velocity for inertia with improved accuracy
    const handleTouchMove = (e: TouchEvent) => {
      if (!smoothTouch) return;
      const touch = touchRef.current;
      const currentTouch = e.touches[0];
      const currentTime = performance.now();
      const deltaTime = Math.max(currentTime - touch.lastTime, 1);

      // Calculate touch delta based on orientation
      const deltaX = touch.lastX - currentTouch.clientX;
      const deltaY = touch.lastY - currentTouch.clientY;

      // Check gesture orientation
      const isVerticalGesture = Math.abs(deltaY) > Math.abs(deltaX);
      const isHorizontalGesture = Math.abs(deltaX) > Math.abs(deltaY);
      if (gestureOrientation === 'vertical' && !isVerticalGesture) return;
      if (gestureOrientation === 'horizontal' && !isHorizontalGesture) return;
      e.preventDefault();
      const delta = orientation === 'horizontal' ? deltaX : deltaY;

      // Calculate velocity with frame-rate normalization
      touch.velocity = delta / deltaTime * 16.67;
      const maxScroll = getMaxScroll();
      scroll.target += delta * touchMultiplier;
      if (!infinite) {
        scroll.target = clamp(scroll.target, 0, maxScroll);
      }

      // Update touch tracking
      touch.lastX = currentTouch.clientX;
      touch.lastY = currentTouch.clientY;
      touch.lastTime = currentTime;
      startAnimation();
    };

    // Touch end - apply inertia based on velocity with decay
    const handleTouchEnd = () => {
      if (!smoothTouch) return;
      const touch = touchRef.current;

      // Apply inertia if there's significant velocity
      const velocityThreshold = 0.5;
      if (Math.abs(touch.velocity) > velocityThreshold) {
        touch.isInertia = true;

        // Enhanced inertia calculation with velocity curve
        const velocityMultiplier = Math.min(Math.abs(touch.velocity) * 0.3, 8);
        const inertiaBoost = touch.velocity * velocityMultiplier * touchMultiplier * touchInertia;
        const maxScroll = getMaxScroll();
        scroll.target += inertiaBoost;
        if (!infinite) {
          scroll.target = clamp(scroll.target, 0, maxScroll);
        }

        // Transfer touch velocity to scroll velocity for smooth continuation
        scroll.velocity = touch.velocity * 1.5;
        startAnimation();
      }

      // Reset touch state
      touch.velocity = 0;
      touch.isInertia = false;
    };

    // Handle native scroll (for compatibility with other scroll triggers)
    const handleScroll = () => {
      if (!scroll.isScrolling) {
        const currentScroll = orientation === 'horizontal' ? window.pageXOffset : window.pageYOffset;
        scroll.current = currentScroll;
        scroll.target = currentScroll;
      }
    };

    // Handle resize - recalculate bounds and adjust scroll position
    const handleResize = () => {
      const maxScroll = getMaxScroll();
      scroll.limit = maxScroll;
      if (!infinite) {
        scroll.target = clamp(scroll.target, 0, maxScroll);
        scroll.current = clamp(scroll.current, 0, maxScroll);
      }
    };

    // Add event listeners with appropriate options
    window.addEventListener('wheel', handleWheel, {
      passive: false
    });
    window.addEventListener('touchstart', handleTouchStart, {
      passive: true
    });
    window.addEventListener('touchmove', handleTouchMove, {
      passive: false
    });
    window.addEventListener('touchend', handleTouchEnd, {
      passive: true
    });
    window.addEventListener('touchcancel', handleTouchEnd, {
      passive: true
    });
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    window.addEventListener('resize', handleResize, {
      passive: true
    });

    // Initial limit calculation
    scroll.limit = getMaxScroll();
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [lerp, smoothWheel, smoothTouch, wheelMultiplier, touchMultiplier, damping, touchInertia, infinite, orientation, gestureOrientation, getMaxScroll, startAnimation]);

  // Programmatic scroll to position with optional smooth animation
  const scrollTo = useCallback((target: number, immediate = false) => {
    const maxScroll = getMaxScroll();
    scrollRef.current.target = infinite ? target : clamp(target, 0, maxScroll);
    if (immediate) {
      scrollRef.current.current = scrollRef.current.target;
      scrollRef.current.velocity = 0;
      if (orientation === 'horizontal') {
        window.scrollTo(scrollRef.current.target, 0);
      } else {
        window.scrollTo(0, scrollRef.current.target);
      }
    } else {
      startAnimation();
    }
  }, [infinite, orientation, getMaxScroll, startAnimation]);

  // Scroll by a delta amount
  const scrollBy = useCallback((delta: number, immediate = false) => {
    const newTarget = scrollRef.current.target + delta;
    scrollTo(newTarget, immediate);
  }, [scrollTo]);

  // Stop current scroll animation
  const stop = useCallback(() => {
    scrollRef.current.target = scrollRef.current.current;
    scrollRef.current.velocity = 0;
    scrollRef.current.isScrolling = false;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);

  // Get current scroll data (useful for scroll-dependent components)
  const getScrollData = useCallback(() => ({
    current: scrollRef.current.current,
    target: scrollRef.current.target,
    velocity: scrollRef.current.velocity,
    direction: scrollRef.current.direction,
    isScrolling: scrollRef.current.isScrolling,
    limit: scrollRef.current.limit,
    progress: scrollRef.current.limit ? scrollRef.current.current / scrollRef.current.limit : 0
  }), []);
  return {
    scrollTo,
    scrollBy,
    stop,
    getScrollData
  };
};