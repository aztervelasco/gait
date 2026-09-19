import React from 'react';
import { motion } from 'framer-motion';
import { VideoBackground } from './VideoBackground';
import { Button } from './Button';

interface HeroSlide {
  title: string;
  subtitle: string;
  highlight: string;
  backgroundImage: string;
  videoUrl?: string;
}
interface HeroProps {
  slide: HeroSlide;
}

// Stagger container variant
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero: React.FC<HeroProps> = ({ slide }) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground
        videoUrl={slide.videoUrl}
        fallbackImageUrl={slide.backgroundImage}
      />

      {/* Gradient vignette overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-[1]" />

      {/* Animated slide text */}
      <motion.div
        key={slide.title}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        <div className="flex flex-col items-center gap-4 sm:gap-6 pt-12 md:pt-0">

          {/* Pill badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md text-white/90 text-[10px] sm:text-xs uppercase tracking-widest font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-center max-w-[90vw]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
            <span className="truncate">Gait Evangelical Fellowship Ministry Inc.</span>
          </motion.div>

          <h1 className="text-white w-full">
            {/* Main slide headline */}
            <motion.span
              variants={itemVariants}
              className="block text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-1 sm:mb-2 font-display"
            >
              Plant Purpose. Pour Passion.
            </motion.span>

            {/* Gradient highlight */}
            <motion.span
              variants={itemVariants}
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight font-display"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Pursue Christ
              </span>
            </motion.span>
          </h1>

          {/* Slide-specific hero stat */}
          <motion.p
            variants={itemVariants}
            className="text-white/75 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed px-2"
          >
            {slide.title} — {slide.subtitle} {slide.highlight}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" href="#join">
              JOIN OUR FELLOWSHIP
            </Button>
            <Button variant="secondary" href="#learn">
              LEARN MORE
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated bounce scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};