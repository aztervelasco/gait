import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { ArrowUpIcon, PlayIcon, PauseIcon } from 'lucide-react';
export function SmoothScrollDemo() {
  const [scrollData, setScrollData] = useState({
    current: 0,
    target: 0,
    velocity: 0,
    direction: 0,
    isScrolling: false,
    limit: 0,
    progress: 0
  });
  // Initialize smooth scroll with Lenis-like settings
  const {
    scrollTo,
    scrollBy,
    stop,
    getScrollData
  } = useSmoothScroll({
    lerp: 0.1,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
    damping: 0.9,
    touchInertia: 0.95,
    orientation: 'vertical',
    gestureOrientation: 'vertical' // Gesture detection
  });
  // Update scroll data for display
  useEffect(() => {
    const updateScrollData = () => {
      setScrollData(getScrollData());
      requestAnimationFrame(updateScrollData);
    };
    updateScrollData();
  }, [getScrollData]);
  return <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      {/* Scroll Progress Indicator */}
      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {Math.round(scrollData.progress * 100)}%
            </span>
          </div>
          <div className="flex-1">
            <p className="text-white text-xs font-semibold mb-1">
              Scroll Progress
            </p>
            <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{
              width: `${scrollData.progress * 100}%`
            }} transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }} />
            </div>
          </div>
        </div>

        {/* Scroll Data Display */}
        <div className="space-y-1 text-xs">
          <div className="flex justify-between text-white/70">
            <span>Velocity:</span>
            <span className="font-mono text-white">
              {scrollData.velocity.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-white/70">
            <span>Direction:</span>
            <span className="font-mono text-white">
              {scrollData.direction === 1 ? '↓' : scrollData.direction === -1 ? '↑' : '—'}
            </span>
          </div>
          <div className="flex justify-between text-white/70">
            <span>Scrolling:</span>
            <span className={`font-mono ${scrollData.isScrolling ? 'text-green-400' : 'text-white'}`}>
              {scrollData.isScrolling ? 'Yes' : 'No'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Control Buttons */}
      <div className="flex gap-2">
        {/* Scroll to Top */}
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} onClick={() => scrollTo(0)} className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300" title="Scroll to Top">
          <ArrowUpIcon className="w-5 h-5 text-white" />
        </motion.button>

        {/* Stop Scroll */}
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} onClick={stop} className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300" title="Stop Scroll">
          <PauseIcon className="w-5 h-5 text-white" />
        </motion.button>

        {/* Scroll Down */}
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} onClick={() => scrollBy(window.innerHeight)} className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300" title="Scroll Down">
          <PlayIcon className="w-5 h-5 text-white rotate-90" />
        </motion.button>
      </div>
    </div>;
}