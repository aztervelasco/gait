import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'text'>('default');
  const [hoverText, setHoverText] = useState('');

  // Mouse coordinates using motion values for high performance
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics mapping (Lerp-style momentum delay)
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports fine pointing (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      return;
    }

    // Enable cursor hiding in CSS
    document.body.classList.add('custom-cursor-enabled');
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find if we hovered over an interactive link/button
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('clickable') ||
        target.onclick;

      if (isClickable) {
        // Customize text for specific items
        const textAttr = target.getAttribute('data-cursor-text') || target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        if (textAttr) {
          setCursorType('text');
          setHoverText(textAttr);
        } else {
          setCursorType('hover');
        }
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Pointer (Trailing Ring) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-amber-500 pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'hover' ? 2 : cursorType === 'text' ? 2.5 : 1,
          backgroundColor: cursorType === 'hover' ? 'rgba(245, 158, 11, 0.1)' : cursorType === 'text' ? 'rgba(255, 255, 255, 1)' : 'rgba(245, 158, 11, 0)',
          borderColor: cursorType === 'text' ? 'rgba(255, 255, 255, 1)' : '#f59e0b',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        {cursorType === 'text' && (
          <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold tracking-widest text-slate-900 uppercase">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Inner Pointer (Dot) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-amber-500 rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'hover' || cursorType === 'text' ? 0 : 1,
        }}
        transition={{ type: 'easeOut', duration: 0.15 }}
      />
    </>
  );
};
