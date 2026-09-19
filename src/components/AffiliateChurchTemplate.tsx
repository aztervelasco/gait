import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  HeartIcon,
  SparklesIcon,
  UserIcon,
  UsersIcon,
  ArrowRightIcon } from
'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackButton } from './BackButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
interface AffiliateChurchTemplateProps {
  name: string;
  location: string;
  pastor: string;
  fellowship: string;
  fellowshipAbbreviation: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  accentGradient: string; // e.g. 'from-emerald-500 to-teal-500'
  accentColor: 'emerald' | 'amber' | 'blue' | 'purple' | 'orange';
  backLink: string;
  backLabel: string;
}
export function AffiliateChurchTemplate({
  name,
  location,
  pastor,
  fellowship,
  fellowshipAbbreviation,
  tagline,
  description,
  mission,
  vision,
  accentGradient,
  accentColor,
  backLink,
  backLabel
}: AffiliateChurchTemplateProps) {
  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    damping: 0.88
  });
  // Helper for dynamic text colors based on accent
  const getTextGradient = () => {
    switch (accentColor) {
      case 'emerald':
        return 'from-emerald-200 via-teal-100 to-emerald-200';
      case 'amber':
        return 'from-amber-200 via-orange-100 to-amber-200';
      case 'blue':
        return 'from-blue-200 via-indigo-100 to-blue-200';
      default:
        return 'from-gray-200 via-white to-gray-200';
    }
  };
  const getAccentText = () => {
    switch (accentColor) {
      case 'emerald':
        return 'text-emerald-300';
      case 'amber':
        return 'text-amber-300';
      case 'blue':
        return 'text-blue-300';
      default:
        return 'text-white';
    }
  };
  const getBgGlow = () => {
    switch (accentColor) {
      case 'emerald':
        return 'bg-emerald-500';
      case 'amber':
        return 'bg-amber-500';
      case 'blue':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };
  return (
    <div className="w-full min-h-screen bg-dark-premium text-slate-100 overflow-x-hidden">
      <Navbar />
      <BackButton to={backLink} label={backLabel} />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden bg-slate-900">
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-20`} />
        

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
            className={`absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full blur-[1px] ${getBgGlow()}`}
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
            className={`absolute -top-32 -right-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[120px] ${getBgGlow()}`} />
          
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
            
            {/* Fellowship Badge */}
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
              
              <span
                className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md px-4 sm:px-8 py-2 sm:py-3 rounded-full border border-white/20 shadow-lg ${getAccentText()}`}>
                
                <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                {fellowshipAbbreviation} • Affiliate Church
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
                  className={`block text-transparent bg-clip-text bg-gradient-to-r ${getTextGradient()} bg-[length:200%_auto]`}
                  animate={{
                    backgroundPosition: ['0% center', '200% center']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}>
                  
                  {name}
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
              className="text-lg sm:text-xl md:text-2xl text-gray-200/90 mb-6 md:mb-8 font-light">
              
              {tagline}
            </motion.p>

            {/* Location & Pastor */}
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
              
              <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-gray-200 bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10">
                <MapPinIcon
                  className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${getAccentText()}`} />
                
                <p className="text-sm sm:text-base">{location}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-gray-200 bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10">
                <UserIcon
                  className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${getAccentText()}`} />
                
                <p className="text-sm sm:text-base">{pastor}</p>
              </div>
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
                className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${getBgGlow()}`} />
              
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-slate-900/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
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
            className="text-center">
            
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
              className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 ${getAccentText()}`}>
              
              <HeartIcon className="w-4 h-4" />
              About Us
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              A Community of{' '}
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${accentGradient}`}>
                
                Faith
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {description}
            </p>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <p className="text-slate-400 italic">
                "We are proud to be part of the {fellowship} family, working
                together to bring light and hope to our community."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-10 ${getBgGlow()}`}>
          </div>
          <div
            className={`absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-10 ${getBgGlow()}`}>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
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
              
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${accentGradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}>
              </div>
              <div className="relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 h-full">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${accentGradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                  
                  <HeartIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-4 ${getAccentText()}`}>
                  
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {mission}
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
              
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${accentGradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}>
              </div>
              <div className="relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 h-full">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${accentGradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                  
                  <SparklesIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-4 ${getAccentText()}`}>
                  
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {vision}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className={`py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br ${accentGradient} relative overflow-hidden`}>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl"></div>
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
              
              <UsersIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Join Us This Sunday
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              We would love to welcome you to our church family. Come experience
              worship, fellowship, and the transforming power of God's word.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl text-sm sm:text-base">
                
                Get Connected
              </Link>
              <Link
                to={backLink}
                className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 text-sm sm:text-base">
                
                Back to Fellowship
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

}