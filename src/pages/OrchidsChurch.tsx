import React, { useCallback, useEffect, useState, Children } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeftIcon,
  MapPinIcon,
  ClockIcon,
  HeartIcon,
  RadioIcon,
  SparklesIcon,
  ImageIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  FacebookIcon,
  ExternalLinkIcon,
  UsersIcon,
  PhoneIcon,
  MailIcon } from
'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
const churchData = {
  name: 'Tactac Orchids Evangelical Church',
  abbreviation: 'TOEC',
  location: "Tactac Orchid's, Nueva Vizcaya",
  established: '2019',
  tagline: 'Bringing Light and Hope to the Community',
  description:
  "A flourishing congregation bringing light and hope to the Orchid's community through faithful ministry and service. TOEC is dedicated to teaching God's Word, nurturing families, and reaching out to the community with Christ-like love and compassion.",
  heroImage: "/469021611_122122435544567446_38615939507063477_n.webp",

  facebookPage: 'https://www.facebook.com/profile.php?id=61567023388342',
  contactNo: '0915 779 6106',
  email: 'evelyneliong1@gmail.com',
  services: [
  {
    day: 'Sunday',
    time: '9:00 AM',
    type: 'Worship Service',
    icon: ClockIcon
  },
  {
    day: 'Wednesday',
    time: '7:00 PM',
    type: 'Bible Study',
    icon: BookOpenIcon
  }],

  gallery: [
  {
    url: "/Children_ministry.webp",
    caption: "Children's Ministry"
  },
  {
    url: "/congragation.webp",
    caption: 'Congregation Worship'
  },
  {
    url: "/hyoutrj.webp",
    caption: 'Youth Recognition'
  },
  {
    url: "/171007897_1141246756300547_1592049720924434357_n.webp",
    caption: 'Church Building Project'
  }],

  mission:
  "To be a beacon of hope in the Orchid's community, proclaiming the Gospel with power and compassion, making disciples, equipping believers, and serving our neighbors with the love of Christ.",
  vision:
  "To see every person in Tactac Orchid's and beyond encounter the life-changing power of Jesus Christ. We envision a community where faith is lived out daily, families are strengthened, and the Kingdom of God advances."
};
// Helper icon for Bible Study since it wasn't imported in the original file
function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>);

}
export function OrchidsChurch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
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
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/30 via-transparent to-pink-900/20"></div>
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
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-rose-300 rounded-full blur-[1px]"
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
            className="absolute -top-32 -right-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-rose-500 rounded-full blur-[120px]" />
          
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
            className="absolute -bottom-32 -left-32 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-pink-500 rounded-full blur-[100px]" />
          
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
            
            {/* Heritage Badge */}
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
              
              <span className="inline-flex items-center gap-2 text-rose-300 text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md px-4 sm:px-8 py-2 sm:py-3 rounded-full border border-rose-400/30 shadow-lg shadow-rose-500/10">
                <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                {churchData.abbreviation} • Est. {churchData.established}
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
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-100 to-rose-200 bg-[length:200%_auto]"
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
              className="text-lg sm:text-xl md:text-2xl text-rose-100/90 mb-6 md:mb-8 font-light">
              
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
              
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-300 to-rose-400 rounded-full" />
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
                <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-rose-300 flex-shrink-0" />
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
                href={churchData.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25 text-sm sm:text-base">
                
                <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Visit Facebook Page</span>
                <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
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
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-rose-400 rounded-full" />
              
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-slate-900/40 relative overflow-hidden">
        
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
                className="inline-flex items-center gap-2 text-rose-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                
                <HeartIcon className="w-4 h-4" />
                Our Story
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                A Community of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                  Faith & Love
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                {churchData.description}
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Since 2019, TOEC has been a place where people can find
                belonging, purpose, and spiritual growth. We are committed to
                walking together in faith and serving our community with joy.
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
                className="absolute -inset-2 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-rose-500/20 rounded-3xl blur-xl" />
              

              <div className="relative bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-rose-500/20">
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
                      Service Times
                    </h3>
                    <p className="text-rose-100 text-sm sm:text-base">
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
                          <p className="text-rose-200 font-semibold text-sm sm:text-base">
                            {service.day}
                          </p>
                          <p className="text-xl sm:text-2xl font-bold text-white">
                            {service.time}
                          </p>
                          <p className="text-rose-100 text-sm sm:text-base">
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
                    <MapPinIcon className="w-5 h-5 text-rose-200 flex-shrink-0 mt-0.5" />
                    <p className="text-rose-100 text-sm sm:text-base">
                      {churchData.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
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
              className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-pink-600 rounded-[2rem] blur-xl opacity-30" />
            

            <div className="relative bg-gradient-to-br from-rose-600 to-pink-600 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 text-center shadow-2xl overflow-hidden">
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
                  
                  <PhoneIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
                  Get in Touch
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={`tel:${churchData.contactNo}`}
                    className="inline-flex items-center gap-2 sm:gap-3 bg-white hover:bg-rose-50 text-rose-600 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center">
                    
                    <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    {churchData.contactNo}
                  </a>
                  <a
                    href={`mailto:${churchData.email}`}
                    className="inline-flex items-center gap-2 sm:gap-3 bg-rose-800/30 hover:bg-rose-800/50 backdrop-blur-sm border border-white/30 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center">
                    
                    <MailIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facebook Connect Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-slate-900/30">
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
                  
                  <UsersIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Join Our Facebook Community
                </h2>
                <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Connect with our church family, stay updated with events,
                  share prayer requests, and be part of our growing online
                  community!
                </p>
                <a
                  href={churchData.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-[#1877F2] font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl text-sm sm:text-base">
                  
                  <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Visit Facebook Page
                  <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-rose-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
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
              
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-rose-500/20">
                  <HeartIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-rose-400 mb-4">
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
              
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-pink-500/20">
                  <SparklesIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-4">
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
          <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-rose-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
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
              className="inline-flex items-center gap-2 text-rose-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 bg-rose-500/10 px-4 py-2 rounded-full">
              
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Gallery
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Church{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                Moments
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 px-4">
              Capturing moments of faith, fellowship, and community
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
              <div className="absolute inset-0 border-2 border-rose-500/20 rounded-2xl sm:rounded-3xl pointer-events-none z-20" />

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
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-rose-500/40 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous image">
                
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-rose-500/40 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
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
                className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-gradient-to-r from-rose-400 to-pink-400' : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-600 hover:bg-gray-500'}`}
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
                className="h-full bg-gradient-to-r from-rose-500 to-pink-500" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-rose-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500 rounded-full blur-3xl"></div>
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
              
              <HeartIcon className="w-12 h-12 sm:w-16 sm:h-16 text-rose-300 mx-auto mb-4 sm:mb-6" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Visit Us This Sunday
            </h2>
            <p className="text-base sm:text-xl text-rose-100 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              Experience authentic worship, powerful teaching, and genuine
              community. Everyone is welcome at TOEC!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-rose-900 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl text-sm sm:text-base">
                
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