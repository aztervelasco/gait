import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPinIcon,
  ClockIcon,
  HeartIcon,
  SparklesIcon,
  ImageIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  PlayCircleIcon } from
'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
const churchData = {
  name: 'Upper Kiskis Church',
  location: 'Upper Kiskis, Santa Fe, Nueva Vizcaya',
  established: '2020',
  tagline: 'Faith Rising on the Hilltop',
  description:
  'Upper Kiskis Church is a vibrant community of believers perched on the beautiful highlands of Santa Fe. Since our establishment in 2020, we have been committed to spreading the Gospel and nurturing spiritual growth among our members. Our church is known for its warm fellowship, passionate worship, and dedication to serving the community.',
  heroImage: "/474635344_2031198857305328_412429677804433522_n.webp",

  youtubeVideoId: 'SoZdi7iDP0U',
  services: [
  {
    day: 'Sunday',
    time: '9:00 AM - 11:30 AM',
    type: 'Sunday Service',
    icon: ClockIcon
  }],

  gallery: [
  {
    url: "/570200229_1549245126067490_8371266231063815689_n.webp",
    caption: 'Church Anniversary'
  },
  {
    url: "/474474577_2031198867305327_4482102556875192378_n.webp",
    caption: 'Vacation Bible School'
  },
  {
    url: "/473154272_2023882741370273_3553437767603341264_n.webp",
    caption: 'Youth Fellowship'
  },
  {
    url: "/505371512_10229048174569855_2582523600620079168_n.webp",
    caption: 'Road to Upper Kiskis'
  }],

  mission:
  'To be a beacon of hope and transformation in our community, proclaiming the Gospel with power and compassion. We exist to make disciples, equip believers, and serve our neighbors with the love of Christ.',
  vision:
  'To see every person in Upper Kiskis and beyond encounter the life-changing power of Jesus Christ. We envision a community where faith is lived out daily, families are strengthened, and the Kingdom of God advances through our witness.'
};
export function UpperKiskisChurch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-transparent to-purple-900/20"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 100
            }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [-20, -250],
              x: [0, Math.random() * 80 - 40]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: 'easeOut'
            }}
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-violet-300 rounded-full blur-[1px]"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '5%'
            }} />

          )}
        </div>

        {/* Decorative Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.08, 0.2, 0.08],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -top-32 -right-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-500 rounded-full blur-[120px]" />
          
          <motion.div
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2
            }}
            className="absolute -bottom-32 -left-32 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500 rounded-full blur-[100px]" />
          
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
            
            {/* Badge */}
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
              
              <span className="inline-flex items-center gap-2 text-violet-300 text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md px-4 sm:px-8 py-2 sm:py-3 rounded-full border border-violet-400/30 shadow-lg shadow-violet-500/10">
                <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                GEFMI Church • Est. {churchData.established}
                <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </motion.div>

            {/* Main Title */}
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
                
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-purple-100 to-violet-200 bg-[length:200%_auto]"
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

            {/* Tagline */}
            <motion.p
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.6,
                delay: 0.9
              }}
              className="text-lg sm:text-xl md:text-2xl text-violet-100/90 mb-6 md:mb-8 font-light">
              
              {churchData.tagline}
            </motion.p>

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
              className="relative w-32 sm:w-48 h-1 mx-auto mb-6 md:mb-8">
              
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400 rounded-full" />
              <motion.div
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 w-1/3 bg-white/70 rounded-full blur-sm" />
              
            </motion.div>

            {/* Location */}
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
              className="flex items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-10">
              
              <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-gray-200 bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10">
                <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-violet-300 flex-shrink-0" />
                <p className="text-sm sm:text-base">{churchData.location}</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
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
                href="#video"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-violet-500/25 text-sm sm:text-base">
                
                <PlayCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Watch Video</span>
              </a>
              <a
                href="#gallery"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 border border-white/30 text-sm sm:text-base">
                
                <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>View Gallery</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-violet-400 rounded-full" />
              
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-white via-violet-50/30 to-white relative overflow-hidden">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <div>
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
                className="inline-flex items-center gap-2 text-violet-700 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 bg-violet-100 px-4 py-2 rounded-full">
                
                <HeartIcon className="w-4 h-4" />
                Our Story
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Growing in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                  Faith
                </span>{' '}
                Together
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                {churchData.description}
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our church family continues to grow as we reach out to the
                community with the love of Christ, building relationships and
                transforming lives one person at a time.
              </p>
            </div>

            {/* Service Times Card */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              viewport={{
                once: true
              }}
              className="relative">
              
              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -inset-2 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-violet-500/20 rounded-3xl blur-xl" />
              

              <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-violet-500/20">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <motion.div
                    whileHover={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 0.6
                    }}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                    
                    <CalendarIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Service Time
                    </h3>
                    <p className="text-violet-100 text-sm sm:text-base">
                      Join us for worship
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {churchData.services.map((service, index) =>
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -20
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1
                    }}
                    viewport={{
                      once: true
                    }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10">
                    
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-violet-200 font-semibold text-sm sm:text-base">
                            {service.day}
                          </p>
                          <p className="text-xl sm:text-2xl font-bold text-white">
                            {service.time}
                          </p>
                          <p className="text-violet-100 text-sm sm:text-base">
                            {service.type}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Location */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-violet-200 flex-shrink-0 mt-0.5" />
                    <p className="text-violet-100 text-sm sm:text-base">
                      {churchData.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section
        id="video"
        className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-slate-900 via-violet-900/20 to-slate-900 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
              className="inline-flex items-center gap-2 text-violet-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 bg-violet-500/10 px-4 py-2 rounded-full">
              
              <PlayCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Featured Video
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Experience Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Worship
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 px-4 max-w-2xl mx-auto">
              Watch and be blessed by the spirit of worship at Upper Kiskis
              Church
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
              duration: 0.8
            }}
            viewport={{
              once: true
            }}
            className="relative">
            
            {/* Glow Effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -inset-3 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-violet-500/20 rounded-3xl blur-xl" />
            

            <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-violet-500/20">
              {!isVideoPlaying ?
              <div className="relative w-full h-full">
                  <img
                  src={`https://img.youtube.com/vi/${churchData.youtubeVideoId}/maxresdefault.jpg`}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover" />
                
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.button
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50">
                    
                      <PlayCircleIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white ml-1" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                    <p className="text-white text-sm sm:text-lg font-semibold">
                      Click to play video
                    </p>
                  </div>
                </div> :

              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${churchData.youtubeVideoId}?autoplay=1&rel=0`}
                title="Upper Kiskis Church Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0">
              </iframe>
              }
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            className="text-center mb-12">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Purpose
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.1
              }}
              viewport={{
                once: true
              }}
              className="group relative">
              
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-violet-500/20">
                  <HeartIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-violet-400 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {churchData.mission}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              viewport={{
                once: true
              }}
              className="group relative">
              
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-purple-500/20">
                  <SparklesIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {churchData.vision}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section
        id="gallery"
        className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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
              className="inline-flex items-center gap-2 text-violet-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 bg-violet-500/10 px-4 py-2 rounded-full">
              
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Gallery
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Church{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Moments
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 px-4">
              Capturing the spirit of faith, fellowship, and community
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
              <div className="absolute inset-0 border-2 border-violet-500/20 rounded-2xl sm:rounded-3xl pointer-events-none z-20" />

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

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-violet-500/40 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous image">
                
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-violet-500/40 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
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
                className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-gradient-to-r from-violet-400 to-purple-400' : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-600 hover:bg-gray-500'}`}
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
                className="h-full bg-gradient-to-r from-violet-500 to-purple-500" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-violet-900 via-purple-900 to-violet-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500 rounded-full blur-3xl"></div>
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
              
              <HeartIcon className="w-12 h-12 sm:w-16 sm:h-16 text-violet-300 mx-auto mb-4 sm:mb-6" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Visit Us This Sunday
            </h2>
            <p className="text-base sm:text-xl text-violet-100 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              Experience authentic worship, powerful teaching, and genuine
              community. Everyone is welcome at Upper Kiskis Church!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-violet-900 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl text-sm sm:text-base">
                
                Get Directions
              </Link>
              <Link
                to="/churches"
                className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 text-sm sm:text-base">
                
                View All Churches
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

}