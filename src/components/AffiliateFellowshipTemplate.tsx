import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPinIcon, UserIcon, ArrowRightIcon, BoxIcon } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackButton } from './BackButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
interface Branch {
  name: string;
  location: string;
  pastor: string;
  link: string;
}
interface AffiliateFellowshipTemplateProps {
  name: string;
  abbreviation: string;
  description: string;
  gradient: string; // e.g. 'from-emerald-500 via-teal-500 to-cyan-500'
  bgGradient: string; // e.g. 'from-emerald-950 via-teal-950 to-cyan-950'
  accentColor: 'emerald' | 'amber' | 'blue' | 'purple';
  icon: BoxIcon;
  branches: Branch[];
  backLink: string;
  backLabel: string;
}
export function AffiliateFellowshipTemplate({
  name,
  abbreviation,
  description,
  gradient,
  bgGradient,
  accentColor,
  icon: IconComponent,
  branches,
  backLink,
  backLabel
}: AffiliateFellowshipTemplateProps) {
  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    damping: 0.88
  });
  const getShadowColor = () => {
    switch (accentColor) {
      case 'emerald':
        return 'rgba(16,185,129,0.3)';
      case 'amber':
        return 'rgba(245,158,11,0.3)';
      case 'blue':
        return 'rgba(59,130,246,0.3)';
      default:
        return 'rgba(100,100,100,0.3)';
    }
  };
  return (
    <div className="w-full min-h-screen bg-slate-950">
      <Navbar />
      <BackButton to={backLink} label={backLabel} />

      {/* Hero Section */}
      <section
        className={`relative py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-gradient-to-br ${bgGradient} overflow-hidden`}>
        
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="text-center mb-20">
            
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-8">
              <IconComponent className={`w-5 h-5 text-${accentColor}-400`} />
              <span className="text-white/90 font-semibold tracking-wide">
                Affiliate Fellowship
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {name}
            </h1>
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 border border-white/10">
              <span
                className={`text-sm font-bold tracking-widest bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                
                {abbreviation}
              </span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Branch Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((branch, index) =>
            <motion.div
              key={branch.name}
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
                delay: index * 0.1
              }}>
              
                <Link
                to={branch.link}
                className="group relative flex flex-col p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.12] transition-all duration-500 h-full">
                
                  <div className="flex items-start justify-between mb-6">
                    <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                    
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                    {branch.name}
                  </h3>

                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 text-gray-400">
                      <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                      <span>{branch.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <UserIcon className="w-5 h-5 flex-shrink-0" />
                      <span>{branch.pastor}</span>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${gradient}`}
                  style={{
                    pointerEvents: 'none'
                  }} />
                
                </Link>
              </motion.div>
            )}
          </div>

          {/* Stats Bar */}
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
            className="mt-20 grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div
                className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
                
                {branches.length}
              </div>
              <div className="text-gray-500 text-sm font-medium tracking-wide">
                Active Branches
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div
                className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
                
                1
              </div>
              <div className="text-gray-500 text-sm font-medium tracking-wide">
                Shared Mission
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

}