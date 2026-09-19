import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import {
  MapPinIcon,
  CalendarIcon,
  HeartIcon,
  PlayCircleIcon,
  FacebookIcon,
  UsersIcon,
  ExternalLinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  SparklesIcon,
  ImageIcon } from
'lucide-react';
const churchData = {
  name: 'Beti Church',
  location: 'Beti, Nueva Vizcaya',
  established: '2021',
  description:
  'A vibrant community of believers in Beti, dedicated to spreading the Gospel and serving our neighbors with love and compassion. We invite you to join our family as we grow together in faith.',
  heroImage: "/603909877_122117233605004240_7056101842348380722_n.webp",

  facebookPage: 'https://www.facebook.com/profile.php?id=61580127200227',
  videoUrl:
  'https://drive.google.com/file/d/1vhBaEq9OUIAc1Pha6fqcOoXDDPFQQaLc/preview',
  services: [
  {
    day: 'Sunday',
    time: '9:00 AM - 11:00 AM',
    type: 'Sunday Service'
  }],

  gallery: [
  {
    url: "/603909877_122117233605004240_7056101842348380722_n.webp",
    caption: 'Our Church Family'
  },
  {
    url: "/604707468_122117236809004240_9017173790587181374_n.webp",
    caption: 'Fellowship & Food'
  },
  {
    url: "/616242742_122119767369004240_7954762972789888494_n.webp",
    caption: 'Community Gathering'
  },
  {
    url: "/605574287_122117337777004240_7193557563281036191_n.webp",
    caption: 'Worship & Music'
  },
  {
    url: "/a6a06c2b-c76c-4394-b7d0-12aaf6debb32.webp",
    caption: 'Building Together'
  }]

};
export function BetiChurch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    damping: 0.88
  });
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % churchData.gallery.length);
  }, []);
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide(
      (prev) =>
      (prev - 1 + churchData.gallery.length) % churchData.gallery.length
    );
  }, []);
  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);
  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };
  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    })
  };
  return (
    <div className="w-full min-h-screen bg-dark-premium overflow-x-hidden">
      <Navbar />
      <BackButton to="/churches" label="Back to Churches" />

      {/* Enhanced Hero Section */}
      <section className="relative w-full h-[100svh] overflow-hidden">
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0">
          <motion.img
            initial={{
              scale: 1.2
            }}
            animate={{
              scale: 1
            }}
            transition={{
              duration: 20,
              ease: 'linear'
            }}
            src={churchData.heroImage}
            alt={churchData.name}
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 via-transparent to-cyan-900/20"></div>
        </div>

        {/* Animated Particles/Bokeh Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 100
            }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [-20, -200],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'easeOut'
            }}
            className="absolute w-2 h-2 md:w-3 md:h-3 bg-teal-300 rounded-full blur-sm"
            style={{
              left: `${15 + i * 15}%`,
              bottom: '10%'
            }} />

          )}
        </div>

        {/* Decorative Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -top-32 -right-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-teal-400 rounded-full blur-[100px]" />
          
          <motion.div
            animate={{
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2
            }}
            className="absolute -bottom-32 -left-32 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-400 rounded-full blur-[80px]" />
          
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1,
              delay: 0.3
            }}
            className="text-center text-white relative z-10 max-w-5xl w-full">
            
            {/* Animated Badge */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.5
              }}
              className="inline-block mb-6 md:mb-8">
              
              <span className="inline-flex items-center gap-2 text-teal-300 text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md px-4 sm:px-8 py-2 sm:py-3 rounded-full border border-white/20 shadow-lg shadow-teal-500/10">
                <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                GEFMI Church Community
                <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </motion.div>

            {/* Main Title with Stagger */}
            <div className="overflow-hidden mb-4 md:mb-6">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 60
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.7
                }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
                
                <span className="block mb-2">Welcome to</span>
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-teal-300 bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ['0% center', '200% center']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}>
                  
                  {churchData.name}
                </motion.span>
              </motion.h1>
            </div>

            {/* Animated Decorative Line */}
            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0
              }}
              animate={{
                scaleX: 1,
                opacity: 1
              }}
              transition={{
                duration: 1,
                delay: 1
              }}
              className="relative w-32 sm:w-40 h-1 mx-auto mb-6 md:mb-8">
              
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 rounded-full" />
              <motion.div
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 w-1/3 bg-white/60 rounded-full blur-sm" />
              
            </motion.div>

            {/* Location & Established - Mobile Optimized */}
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.6,
                delay: 1.2
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 md:mb-10">
              
              <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-xl md:text-2xl text-gray-200 bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10">
                <MapPinIcon className="w-4 h-4 sm:w-6 sm:h-6 text-teal-300 flex-shrink-0" />
                <p className="whitespace-nowrap">{churchData.location}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg text-teal-300 bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10">
                <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <p className="whitespace-nowrap">
                  Est. {churchData.established}
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons - Mobile Optimized */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 1.4
              }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              
              <a
                href={churchData.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25 text-sm sm:text-base">
                
                <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Follow Us on Facebook</span>
                <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#video"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 border border-white/30 text-sm sm:text-base">
                
                <PlayCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Our Story</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on very small screens */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 2
          }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          
          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="flex flex-col items-center gap-2 text-white/60">
            
            <span className="text-xs sm:text-sm tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-teal-400 rounded-full" />
              
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Section */}
      <section
        id="video"
        className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
        
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: true
            }}
            className="text-center mb-8 sm:mb-12">
            
            <motion.div
              initial={{
                scale: 0
              }}
              whileInView={{
                scale: 1
              }}
              transition={{
                duration: 0.5,
                type: 'spring'
              }}
              viewport={{
                once: true
              }}
              className="inline-flex items-center gap-2 text-teal-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 bg-teal-500/10 px-4 py-2 rounded-full">
              
              <PlayCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Featured Video
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Experience Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Community
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Watch and be inspired by the stories of faith, hope, and love from
              our church family
            </p>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            viewport={{
              once: true
            }}
            className="relative">
            
            {/* Animated Glow Effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-teal-500/30 via-cyan-500/30 to-teal-500/30 rounded-2xl sm:rounded-3xl blur-xl" />
            

            {/* Video Frame */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-2xl">
              <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-black">
                <iframe
                  src={churchData.videoUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </motion.div>

          {/* Facebook CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            viewport={{
              once: true
            }}
            className="text-center mt-8 sm:mt-10">
            
            <a
              href={churchData.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
              
              <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>See more videos on our Facebook page</span>
              <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-slate-900/40 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: true
            }}
            className="text-center mb-12 sm:mb-16">
            
            <motion.div
              initial={{
                scale: 0
              }}
              whileInView={{
                scale: 1
              }}
              transition={{
                duration: 0.5,
                type: 'spring'
              }}
              viewport={{
                once: true
              }}
              className="inline-flex items-center gap-2 text-teal-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              
              <UsersIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Our Story
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Our Church
              </span>
            </h2>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto px-4">
              {churchData.description}
            </p>
          </motion.div>

          {/* Service Time - Single Card, Centered */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            viewport={{
              once: true
            }}
            className="max-w-lg mx-auto">
            
            <div className="relative group">
              {/* Animated Border Glow */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              

              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 0.6
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30 mb-6">
                    
                    <ClockIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
                    Service Time
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Join us for worship and fellowship
                  </p>

                  <div className="w-full bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg">
                    <p className="text-teal-300 font-bold text-lg sm:text-xl mb-2">
                      {churchData.services[0].day}
                    </p>
                    <p className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
                      {churchData.services[0].time}
                    </p>
                    <p className="text-slate-300 text-lg">
                      {churchData.services[0].type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: true
            }}
            className="text-center mb-8 sm:mb-12">
            
            <motion.div
              initial={{
                scale: 0
              }}
              whileInView={{
                scale: 1
              }}
              transition={{
                duration: 0.5,
                type: 'spring'
              }}
              viewport={{
                once: true
              }}
              className="inline-flex items-center gap-2 text-teal-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 bg-teal-500/10 px-4 py-2 rounded-full">
              
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Gallery
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Church{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Moments
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 px-4">
              Capturing the spirit of our worship, fellowship, and community
            </p>
          </motion.div>

          {/* Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            
            {/* Main Carousel Container */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8
              }}
              viewport={{
                once: true
              }}
              className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-800"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}>
              
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl sm:rounded-3xl pointer-events-none z-20" />

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    },
                    opacity: {
                      duration: 0.4
                    },
                    scale: {
                      duration: 0.4
                    }
                  }}
                  className="absolute inset-0">
                  
                  <img
                    src={churchData.gallery[currentSlide].url}
                    alt={churchData.gallery[currentSlide].caption}
                    className="w-full h-full object-cover"
                    draggable={false} />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>

              {/* Caption */}
              <motion.div
                key={`caption-${currentSlide}`}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2
                }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10">
                
                <p className="text-white text-lg sm:text-2xl font-bold">
                  {churchData.gallery[currentSlide].caption}
                </p>
              </motion.div>

              {/* Navigation Arrows - Hidden on mobile, use swipe instead */}
              <button
                onClick={prevSlide}
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous image">
                
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next image">
                
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-10">
                {currentSlide + 1} / {churchData.gallery.length}
              </div>

              {/* Swipe Hint for Mobile */}
              <div className="sm:hidden absolute bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-xs flex items-center gap-2 z-10">
                <ChevronLeftIcon className="w-4 h-4" />
                <span>Swipe to navigate</span>
                <ChevronRightIcon className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {churchData.gallery.map((_, index) =>
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-gradient-to-r from-teal-400 to-cyan-400' : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-600 hover:bg-gray-500'}`}
                aria-label={`Go to image ${index + 1}`} />

              )}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                key={currentSlide}
                initial={{
                  width: '0%'
                }}
                animate={{
                  width: isPaused ?
                  `${(currentSlide + 1) / churchData.gallery.length * 100}%` :
                  '100%'
                }}
                transition={{
                  duration: isPaused ? 0 : 5,
                  ease: 'linear'
                }}
                className="h-full bg-gradient-to-r from-teal-500 to-cyan-500" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-slate-900/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: true
            }}
            className="relative group">
            
            {/* Animated Background Glow */}
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -inset-2 bg-gradient-to-r from-[#1877F2] to-[#0D65D9] rounded-[2rem] blur-xl opacity-30" />
            

            <div className="relative bg-gradient-to-br from-[#1877F2] to-[#0D65D9] rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 text-center shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300
                  }}>
                  
                  <FacebookIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Connect With Us on Facebook
                </h2>
                <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Stay updated with our latest events, worship services, and
                  community activities. Join our online family!
                </p>
                <a
                  href={churchData.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-[#1877F2] font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl text-sm sm:text-base">
                  
                  <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Visit Our Facebook Page
                  <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: true
            }}>
            
            <motion.div
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>
              
              <HeartIcon className="w-12 h-12 sm:w-16 sm:h-16 text-teal-300 mx-auto mb-4 sm:mb-6" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Visit Us This Sunday
            </h2>
            <p className="text-base sm:text-xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              Experience authentic worship, biblical teaching, and warm
              fellowship. Everyone is welcome to join our church family!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-teal-900 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl text-sm sm:text-base">
                
                Get Directions
              </a>
              <a
                href="/churches"
                className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 text-sm sm:text-base">
                
                View All Churches
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

}