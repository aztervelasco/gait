import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Church, Sparkles, Heart, Compass } from 'lucide-react';

export const ScrollytellingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map progress to distinct phase opacities and visual offsets
  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.45, 0.58, 0.66], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.66, 0.78, 1], [0, 1, 1]);

  const scale1 = useTransform(scrollYProgress, [0, 0.33], [1, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [0.95, 1, 0.95]);
  const scale3 = useTransform(scrollYProgress, [0.66, 1], [0.95, 1.05]);

  const xOffset1 = useTransform(scrollYProgress, [0, 0.33], [0, -100]);
  const xOffset2 = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [100, 0, -100]);
  const xOffset3 = useTransform(scrollYProgress, [0.66, 1], [100, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-slate-950">
      {/* Sticky container that stays pinned in viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Abstract Background Elements with subtle parallax drift */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            style={{ 
              rotate: useTransform(scrollYProgress, [0, 1], [0, 45]),
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]) 
            }}
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[160px]" 
          />
          <motion.div 
            style={{ 
              rotate: useTransform(scrollYProgress, [0, 1], [180, 135]),
              scale: useTransform(scrollYProgress, [0, 1], [1.2, 1]) 
            }}
            className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-amber-900/10 rounded-full blur-[180px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          
          {/* Left Side: Images (Narrative visual panel) */}
          <div className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full overflow-hidden rounded-3xl bg-slate-900/80 border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/50 to-transparent z-10" />

            {/* Slide 1 Image */}
            <motion.div 
              style={{ opacity: opacity1, scale: scale1, x: xOffset1 }} 
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src="/old_bantinan.webp" 
                alt="Pioneering Days" 
                className="w-full h-full object-cover brightness-[0.8]"
              />
            </motion.div>

            {/* Slide 2 Image */}
            <motion.div 
              style={{ opacity: opacity2, scale: scale2, x: xOffset2 }} 
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src="/youth_camp.webp" 
                alt="Expansion" 
                className="w-full h-full object-cover brightness-[0.8]"
              />
            </motion.div>

            {/* Slide 3 Image */}
            <motion.div 
              style={{ opacity: opacity3, scale: scale3, x: xOffset3 }} 
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src="/trancendence.webp" 
                alt="Living Movement" 
                className="w-full h-full object-cover brightness-[0.8]"
              />
            </motion.div>
          </div>

          {/* Right Side: Narrative Text Panel */}
          <div className="relative h-[400px] md:h-[350px] lg:h-[400px] w-full flex items-center">
            
            {/* Story Block 1 */}
            <motion.div 
              style={{ opacity: opacity1, y: useTransform(scrollYProgress, [0, 0.33], [0, -50]) }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-auto"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold px-4 py-2 rounded-full mb-6 max-w-fit">
                <Compass className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-display">Phase 01 • The Beginning</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-display">
                2004: The Seed <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  of Faith
                </span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                GEFMI was officially registered on May 17, 2004, in Baguio City. 
                Born from a vision, a dedicated team of three full-time pastors rented an old house 
                in Aritao, Nueva Vizcaya to launch a training center and lay down a permanent foundation.
              </p>
            </motion.div>

            {/* Story Block 2 */}
            <motion.div 
              style={{ opacity: opacity2, y: useTransform(scrollYProgress, [0.33, 0.66], [50, -50]) }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-auto"
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold px-4 py-2 rounded-full mb-6 max-w-fit">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-display">Phase 02 • Expansion</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-display">
                Planting & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  Nurturing Hope
                </span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Outreach extended to remote rural communities. Church plants bloomed in Bantinan, Beti, 
                Kiskis, and Tactac. Through youth camps, family fellowships, and dedicated pastoral service, 
                our communities formed a robust grid of faith.
              </p>
            </motion.div>

            {/* Story Block 3 */}
            <motion.div 
              style={{ opacity: opacity3, y: useTransform(scrollYProgress, [0.66, 1], [50, 0]) }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-auto"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold px-4 py-2 rounded-full mb-6 max-w-fit">
                <Church className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-display">Phase 03 • Today & Beyond</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-display">
                A Living <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Movement
                </span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Today, GEFMI operates a vibrant network of 11 active associate churches and 11 partner 
                affiliate fellowships. Spanning multiple provinces, we stand united in bringing 
                transformation and saving souls through active grace.
              </p>
            </motion.div>

          </div>

        </div>

        {/* Scroll Progress Indicator Bar at bottom of screen */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-gradient-to-r from-blue-500 via-amber-500 to-emerald-500 origin-left"
          />
        </div>

      </div>
    </div>
  );
};
