import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, CodeIcon, SparklesIcon } from 'lucide-react';
export function SmoothScrollGuide() {
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
            <SparklesIcon className="w-5 h-5 text-blue-300" />
            <span className="text-white font-semibold">Smooth Scroll</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Lenis-Style{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Smooth Scrolling
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Advanced momentum-based scrolling with physics-driven animations
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[{
          title: 'Momentum Physics',
          description: 'Natural deceleration with velocity-based easing for smooth, realistic motion',
          icon: '⚡'
        }, {
          title: 'Touch Inertia',
          description: 'Flick gestures with momentum carry-through for mobile-friendly interactions',
          icon: '👆'
        }, {
          title: 'Customizable Easing',
          description: 'Multiple easing functions including Lenis-style cubic bezier curves',
          icon: '📈'
        }, {
          title: 'Frame Independent',
          description: 'Delta time calculations ensure consistent animation across all frame rates',
          icon: '🎬'
        }, {
          title: 'Programmatic Control',
          description: 'ScrollTo, scrollBy, and stop methods for complete scroll control',
          icon: '🎮'
        }, {
          title: 'Scroll Data API',
          description: 'Real-time access to scroll position, velocity, direction, and progress',
          icon: '📊'
        }].map((feature, index) => <motion.div key={feature.title} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>)}
        </div>

        {/* Usage Examples */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <CodeIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Basic Usage</h2>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300">
              <code>{`import { useSmoothScroll } from './hooks/useSmoothScroll'

function MyComponent() {
  // Initialize with default Lenis-like settings
  const { scrollTo, scrollBy, stop, getScrollData } = useSmoothScroll({
    lerp: 0.1,              // Interpolation factor (0-1)
    smoothWheel: true,      // Enable smooth wheel scrolling
    smoothTouch: false,     // Disable on mobile for performance
    wheelMultiplier: 1.0,   // Wheel sensitivity
    touchMultiplier: 1.5,   // Touch sensitivity
    damping: 0.9,           // Momentum damping (0-1)
    touchInertia: 0.95,     // Touch inertia factor (0-1)
  })

  // Programmatic scrolling
  const handleScrollToTop = () => {
    scrollTo(0) // Smooth scroll to position
  }

  const handleScrollDown = () => {
    scrollBy(window.innerHeight) // Scroll by amount
  }

  const handleStop = () => {
    stop() // Stop current animation
  }

  // Get real-time scroll data
  const scrollData = getScrollData()
  console.log(scrollData.velocity) // Current velocity
  console.log(scrollData.progress) // Scroll progress (0-1)

  return <div>Your content</div>
}`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Advanced Options */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <BookOpenIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Advanced Configuration
            </h2>
          </div>

          <div className="space-y-4">
            {[{
            option: 'lerp',
            type: 'number (0-1)',
            default: '0.1',
            description: 'Linear interpolation factor. Lower = smoother but slower, Higher = more responsive'
          }, {
            option: 'damping',
            type: 'number (0-1)',
            default: '0.9',
            description: 'Momentum damping factor. Controls how quickly velocity decays'
          }, {
            option: 'wheelMultiplier',
            type: 'number',
            default: '1.0',
            description: 'Wheel scroll sensitivity multiplier. Increase for faster scrolling'
          }, {
            option: 'touchMultiplier',
            type: 'number',
            default: '1.5',
            description: 'Touch scroll sensitivity multiplier. Adjust for mobile feel'
          }, {
            option: 'touchInertia',
            type: 'number (0-1)',
            default: '0.95',
            description: 'Touch inertia factor. Controls flick gesture momentum'
          }, {
            option: 'orientation',
            type: "'vertical' | 'horizontal'",
            default: "'vertical'",
            description: 'Scroll direction orientation'
          }, {
            option: 'gestureOrientation',
            type: "'vertical' | 'horizontal' | 'both'",
            default: "'vertical'",
            description: 'Which gestures to respond to'
          }, {
            option: 'infinite',
            type: 'boolean',
            default: 'false',
            description: 'Enable infinite scrolling (no bounds)'
          }].map((option, index) => <motion.div key={option.option} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.9 + index * 0.05
          }} className="bg-slate-900/30 rounded-xl p-4 border border-white/5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <code className="text-blue-300 font-mono text-sm">
                      {option.option}
                    </code>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400 font-mono">
                        {option.type}
                      </span>
                      <span className="text-xs text-emerald-400">
                        default: {option.default}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">
                      {option.description}
                    </p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </div>;
}