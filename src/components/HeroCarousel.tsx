import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Hero } from './Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { useDrag } from '@use-gesture/react';
interface HeroSlide {
  title: string;
  subtitle: string;
  highlight: string;
  backgroundImage: string;
  videoUrl?: string;
}
const slides: HeroSlide[] = [{
  title: 'UNITED IN WORSHIP',
  subtitle: 'WE',
  highlight: 'GATHER',
  backgroundImage: "/491942318_1001092998396143_7833589295998121867_n.webp"
}, {
  title: 'BUILDING FAITH',
  subtitle: 'WE',
  highlight: 'CONSTRUCT',
  backgroundImage: "/554853061_10230898503946933_597532206561044105_n-Picsart-AiImageEnhancer.jpg"
}, {
  title: 'SPREADING THE GOSPEL',
  subtitle: 'WE',
  highlight: 'PREACH',
  backgroundImage: "/523853598_10230122639990819_2864089837512807784_n-Picsart-AiImageEnhancer.png"
}, {
  title: 'TOGETHER IN FAITH',
  subtitle: 'WE',
  highlight: 'TRANSFORM',
  backgroundImage: "/trancendence.png"
}];
export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  // Auto-advance slides with pause functionality
  useEffect(() => {
    if (!isPaused && !isTouching) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentSlide, isPaused, isTouching]);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  // Enhanced touch gesture handling with pause
  const bind = useDrag(({
    movement: [mx],
    velocity: [vx],
    direction: [dx],
    last,
    first
  }) => {
    if (first) {
      setIsTouching(true);
    }
    if (last) {
      setIsTouching(false);
      if (Math.abs(mx) > 100 || Math.abs(vx) > 0.5) {
        if (dx > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    }
  }, {
    axis: 'x',
    filterTaps: true,
    threshold: 10
  });
  // Pause on hover (desktop)
  const handleMouseEnter = () => {
    setIsPaused(true);
  };
  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  // Pause on touch start (mobile)
  const handleTouchStart = () => {
    setIsTouching(true);
  };
  const handleTouchEnd = () => {
    setIsTouching(false);
  };
  return <div className="relative w-full h-screen overflow-hidden touch-pan-y" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <AnimatePresence initial={false} mode="sync">
        <motion.div key={currentSlide} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }} {...bind()} className="absolute inset-0 cursor-grab active:cursor-grabbing md:cursor-default md:active:cursor-default" style={{
        touchAction: 'pan-y'
      }}>
          <Hero slide={slides[currentSlide]} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons - Desktop only (hidden on mobile/tablet) */}
      <motion.button whileTap={{
      scale: 0.85
    }} onClick={prevSlide} className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 active:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg" aria-label="Previous slide">
        <ChevronLeftIcon className="w-6 h-6" />
      </motion.button>

      <motion.button whileTap={{
      scale: 0.85
    }} onClick={nextSlide} className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 active:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg" aria-label="Next slide">
        <ChevronRightIcon className="w-6 h-6" />
      </motion.button>

      {/* Dots - Enhanced touch targets, positioned higher on mobile */}
      <div className="absolute bottom-20 md:bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3 md:gap-2">
        {slides.map((_, index) => <motion.button key={index} whileTap={{
        scale: 0.85
      }} onClick={() => goToSlide(index)} className={`h-3 md:h-2.5 rounded-full transition-all duration-300 touch-manipulation ${index === currentSlide ? 'bg-white w-10 md:w-8' : 'bg-white/50 hover:bg-white/75 w-3 md:w-2.5'}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
    </div>;
};