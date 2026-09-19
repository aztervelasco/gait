import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgressBar — a thin gradient bar pinned at the very top of the viewport
 * that grows from left to right as the user scrolls down the page.
 */
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-progress"
      style={{ scaleX }}
    />
  );
};
