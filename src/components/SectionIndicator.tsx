import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface Section {
  id: string;
  label: string;
  isActive: boolean;
}
interface SectionIndicatorProps {
  sections: Section[];
  onSectionClick: (id: string) => void;
}
export const SectionIndicator: React.FC<SectionIndicatorProps> = ({
  sections,
  onSectionClick
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeIndex = sections.findIndex(s => s.isActive);
  return <motion.div initial={{
    opacity: 0,
    x: -30
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.8,
    delay: 0.5
  }} className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        {/* Animated connecting line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
          {/* Background line */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-300/30 via-gray-300/50 to-gray-300/30"></div>
          {/* Active progress line */}
          <motion.div className="absolute left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" initial={{
          height: 0,
          top: 0
        }} animate={{
          height: activeIndex >= 0 ? `${activeIndex / (sections.length - 1) * 100}%` : '0%',
          top: 0
        }} transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }} />
        </div>
        {/* Section dots */}
        <div className="relative flex flex-col" style={{
        gap: '3rem'
      }}>
          {sections.map((section, index) => {
          const isActive = section.isActive;
          const isHovered = hoveredIndex === index;
          return <motion.div key={section.id} className="relative" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                <motion.button onClick={() => onSectionClick(section.id)} className="relative group flex items-center justify-center" whileHover={{
              scale: 1.15
            }} whileTap={{
              scale: 0.9
            }} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.7 + index * 0.1
            }}>
                  {/* Glow effect for active */}
                  {isActive && <motion.div className="absolute inset-0 -m-4" initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.3
              }}>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl"></div>
                    </motion.div>}
                  {/* Outer ring */}
                  <motion.div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${isActive ? 'border-blue-500 bg-blue-500/10' : isHovered ? 'border-blue-400/60 bg-blue-400/5' : 'border-gray-400/40 bg-transparent'}`} animate={{
                scale: isActive ? [1, 1.15, 1] : 1
              }} transition={{
                duration: 2,
                repeat: isActive ? Infinity : 0,
                repeatType: 'reverse'
              }}>
                    {/* Inner dot */}
                    <motion.div className={`absolute inset-0 m-auto rounded-full transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50' : isHovered ? 'bg-blue-400' : 'bg-gray-400'}`} animate={{
                  width: isActive ? '12px' : isHovered ? '10px' : '8px',
                  height: isActive ? '12px' : isHovered ? '10px' : '8px'
                }} transition={{
                  duration: 0.3
                }} />
                    {/* Ripple effect on click */}
                    {isActive && <motion.div className="absolute inset-0 m-auto w-6 h-6 rounded-full border-2 border-blue-400" initial={{
                  scale: 1,
                  opacity: 0.6
                }} animate={{
                  scale: 2,
                  opacity: 0
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeOut'
                }} />}
                  </motion.div>
                  {/* Label tooltip */}
                  <AnimatePresence>
                    {(isHovered || isActive) && <motion.div initial={{
                  opacity: 0,
                  x: -10,
                  scale: 0.95
                }} animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1
                }} exit={{
                  opacity: 0,
                  x: -10,
                  scale: 0.95
                }} transition={{
                  duration: 0.2
                }} className="absolute left-10 whitespace-nowrap pointer-events-none">
                        <div className={`relative px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-md border transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-blue-600/95 to-purple-600/95 border-white/20 text-white' : 'bg-slate-900/95 border-slate-700/50 text-slate-200'}`}>
                          <span className="text-sm font-semibold tracking-wide">
                            {section.label}
                          </span>
                          {/* Arrow */}
                          <div className={`absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent ${isActive ? 'border-r-blue-600/95' : 'border-r-slate-900/95'}`}></div>
                          {/* Subtle shine effect for active */}
                          {isActive && <motion.div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{
                      x: ['-100%', '100%']
                    }} transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }} />}
                        </div>
                      </motion.div>}
                  </AnimatePresence>
                </motion.button>
                {/* Section number badge */}
                <AnimatePresence>
                  {isActive && <motion.div initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 0.8
              }} className="absolute -right-8 top-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>;
        })}
        </div>
        {/* Progress percentage */}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 1.2
      }} className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
          <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-700/50">
            <span className="text-xs font-semibold text-slate-300">
              {activeIndex >= 0 ? `${Math.round(activeIndex / (sections.length - 1) * 100)}%` : '0%'}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>;
};