import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
}
export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isLoading,
  onComplete
}) => {
  return <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isLoading && <motion.div initial={{
      y: 0,
      scale: 1
    }} exit={{
      y: '-100%',
      scale: 0.95
    }} transition={{
      duration: 1,
      ease: [0.76, 0, 0.24, 1]
    }} className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
          {/* Ambient glow effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
            <motion.div animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }} transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
          </div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo container with animation */}
            <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }} transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }} className="relative">
              {/* Pulsing ring */}
              <motion.div animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }} className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-xl" />
              {/* Logo circle */}
              <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }} className="relative w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white/50">
                <img src="/553179066_3773471999619593_8381726180407782571_n-Picsart-AiImageEnhancer-removebg-preview.png" alt="GEFMI Logo" className="w-20 h-20 object-contain" />
              </motion.div>
              {/* Checkmark reveal */}
              <motion.div initial={{
            scale: 0,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            delay: 1.5,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }} className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                <CheckIcon className="w-5 h-5 text-white" strokeWidth={3} />
              </motion.div>
            </motion.div>
            {/* Loading text */}
            <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -10
        }} transition={{
          delay: 0.3,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }} className="text-center">
              <motion.h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                GEFMI
              </motion.h2>
              <motion.div animate={{
            opacity: [0.5, 1, 0.5]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }} className="flex items-center justify-center gap-1">
                <span className="text-sm text-slate-600 font-medium">
                  Loading
                </span>
                <motion.span animate={{
              opacity: [0, 1, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}>
                  .
                </motion.span>
                <motion.span animate={{
              opacity: [0, 1, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.2,
              ease: 'easeInOut'
            }}>
                  .
                </motion.span>
                <motion.span animate={{
              opacity: [0, 1, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.4,
              ease: 'easeInOut'
            }}>
                  .
                </motion.span>
              </motion.div>
            </motion.div>
            {/* Progress bar */}
            <motion.div initial={{
          width: 0
        }} animate={{
          width: '100%'
        }} exit={{
          opacity: 0,
          scale: 0.8
        }} transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1]
        }} className="w-48 h-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full overflow-hidden">
              <motion.div animate={{
            x: ['-100%', '100%']
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }} className="h-full w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </motion.div>
          </div>
          {/* Bottom fade edge for smooth transition */}
          <motion.div exit={{
        opacity: 0
      }} transition={{
        duration: 0.5
      }} className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
        </motion.div>}
    </AnimatePresence>;
};