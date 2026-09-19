import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  SparklesIcon,
  MapPinIcon,
  UserIcon,
  ArrowLeftIcon,
  HeartIcon,
  ClockIcon,
  LayersIcon,
  BellRingIcon,
  ChurchIcon
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

// Lookup dictionary for affiliate churches by path
const affiliateChurchesData: Record<
  string,
  {
    name: string;
    location: string;
    pastor: string;
    fellowship: string;
    abbreviation: string;
    gradient: string;
    glowColor: string;
  }
> = {
  '/churches/affiliate/lhgcf/putlan': {
    name: 'LHGCF Putlan Church',
    location: 'Putlan, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Nora Silan',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    glowColor: '#10b981'
  },
  '/churches/affiliate/putlan': {
    name: 'LHGCF Putlan Church',
    location: 'Putlan, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Nora Silan',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    glowColor: '#10b981'
  },
  '/churches/affiliate/lhgcf/ikapito': {
    name: 'LHGCF Ikapito Church',
    location: 'Ikapito, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Roselyn Basilio / Ptr. Carlito Sanchez',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-teal-400 via-cyan-300 to-blue-400',
    glowColor: '#14b8a6'
  },
  '/churches/affiliate/ikapito': {
    name: 'LHGCF Ikapito Church',
    location: 'Ikapito, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Roselyn Basilio / Ptr. Carlito Sanchez',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-teal-400 via-cyan-300 to-blue-400',
    glowColor: '#14b8a6'
  },
  '/churches/affiliate/lhgcf/manicla': {
    name: 'LHGCF Manicla Church',
    location: 'Manicla, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Louie Silan',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-emerald-400 via-green-300 to-teal-400',
    glowColor: '#10b981'
  },
  '/churches/affiliate/lhgcf/bambang': {
    name: 'LHGCF Bambang Church',
    location: 'Bambang, Nueva Vizcaya',
    pastor: 'Ptr. Clem',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-cyan-400 via-sky-300 to-blue-400',
    glowColor: '#0ea5e9'
  },
  '/churches/affiliate/psalms23': {
    name: 'Psalms 23 Fellowship Church',
    location: 'San Antonio, Bambang, Nueva Vizcaya',
    pastor: 'Church Pastor',
    fellowship: 'Psalms 23 Fellowship',
    abbreviation: 'P23',
    gradient: 'from-amber-400 via-orange-300 to-yellow-400',
    glowColor: '#f59e0b'
  },
  '/churches/affiliate/ctl/calaocan': {
    name: 'CTL Calaocan Church',
    location: 'Calaocan, Aurora',
    pastor: 'Ptr. Sonny Boy',
    fellowship: 'Christ The Lord Fellowship',
    abbreviation: 'CTL',
    gradient: 'from-blue-400 via-indigo-300 to-purple-400',
    glowColor: '#3b82f6'
  },
  '/churches/affiliate/ctl/toytoyan': {
    name: 'CTL Toytoyan Church',
    location: 'Toytoyan, Aurora',
    pastor: 'Ptra. Merly',
    fellowship: 'Christ The Lord Fellowship',
    abbreviation: 'CTL',
    gradient: 'from-indigo-400 via-purple-300 to-pink-400',
    glowColor: '#8b5cf6'
  },
  '/churches/affiliate/ctl/borlongan': {
    name: 'CTL Borlongan Church',
    location: 'Borlongan, Dipaculao, Aurora',
    pastor: 'Ptr. Teodoro',
    fellowship: 'Christ The Lord Fellowship',
    abbreviation: 'CTL',
    gradient: 'from-sky-400 via-blue-300 to-indigo-400',
    glowColor: '#0284c7'
  },
  '/churches/affiliate/ctl/baler': {
    name: 'CTL Baler Church',
    location: 'Baler, Aurora',
    pastor: 'Ptr. Joseph',
    fellowship: 'Christ The Lord Fellowship',
    abbreviation: 'CTL',
    gradient: 'from-violet-400 via-purple-300 to-pink-400',
    glowColor: '#9333ea'
  },
  '/churches/affiliate/lhgcf': {
    name: 'Living Hope & Grace in Christ Fellowship',
    location: 'Nueva Ecija & Nueva Vizcaya Network',
    pastor: 'Affiliate Leadership Team',
    fellowship: 'LHGCF Network',
    abbreviation: 'LHGCF',
    gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    glowColor: '#10b981'
  },
  '/churches/affiliate/ctl': {
    name: 'Christ The Lord Fellowship',
    location: 'Aurora Province Network',
    pastor: 'Affiliate Leadership Team',
    fellowship: 'CTL Network',
    abbreviation: 'CTL',
    gradient: 'from-blue-400 via-indigo-300 to-purple-400',
    glowColor: '#3b82f6'
  }
};

export function AffiliateComingSoonPage() {
  const location = useLocation();
  const churchInfo = affiliateChurchesData[location.pathname] || {
    name: 'GEFMI Affiliate Church',
    location: 'Fellowship Network',
    pastor: 'Church Pastor & Leadership',
    fellowship: 'Affiliate Fellowship Network',
    abbreviation: 'GEFMI AFFILIATE',
    gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    glowColor: '#10b981'
  };

  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    damping: 0.88
  });

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden relative flex flex-col justify-between selection:bg-emerald-500/30">
      <Navbar />
      <BackButton to="/churches" label="Back to Our Churches" />

      {/* Hero Animated Container */}
      <main className="relative flex-grow flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Dynamic Background Glows & Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Main Pulsing Ambient Aura */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.45, 0.2],
              x: [-30, 30, -30],
              y: [-20, 20, -20]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[750px] h-[450px] sm:h-[750px] rounded-full blur-[160px]"
            style={{ backgroundColor: churchInfo.glowColor }}
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px]"
          />

          {/* Animated floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0.2,
                y: Math.random() * 600,
                x: Math.random() * 800 - 400
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                y: ['-20px', '-180px'],
                x: [0, (i % 2 === 0 ? 30 : -30)]
              }}
              transition={{
                duration: 6 + (i % 5),
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut'
              }}
              className="absolute w-1.5 h-1.5 rounded-full bg-white/60 blur-[0.5px]"
              style={{
                left: `${10 + (i * 7.5)}%`,
                bottom: '15%'
              }}
            />
          ))}

          {/* Futuristic Grid Line Backdrop */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '48px 48px'
            }}
          />
        </div>

        {/* Central Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          {/* Orbital Rotating Cross/Church Emblem Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative mx-auto w-28 h-28 sm:w-36 sm:h-36 mb-8 flex items-center justify-center"
          >
            {/* Spinning Radiant Halo Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 rounded-full border border-teal-400/20"
            />
            <div
              className={`absolute inset-2 bg-gradient-to-br ${churchInfo.gradient} rounded-full blur-xl opacity-60 animate-pulse`}
            />

            {/* Center Church Icon Shield */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-slate-900/90 border border-white/20 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-xl">
              <ChurchIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-md" />
            </div>
          </motion.div>

          {/* Top Badge: Church / Fellowship Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider text-slate-200 mb-6 shadow-lg"
          >
            <LayersIcon className="w-4 h-4 text-emerald-400" />
            <span>{churchInfo.name}</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-300 font-bold uppercase">{churchInfo.abbreviation}</span>
          </motion.div>

          {/* Giant Animated "COMING SOON" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 mb-8"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white leading-none font-display">
              <span
                className={`block text-transparent bg-clip-text bg-gradient-to-r ${churchInfo.gradient} drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]`}
              >
                COMING SOON
              </span>
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
              We are crafting an extraordinary digital experience for{' '}
              <strong className="font-semibold text-white">{churchInfo.name}</strong>.
            </p>
          </motion.div>

          {/* Church Info Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-white/15 backdrop-blur-xl shadow-2xl space-y-6 mb-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/5">
                <MapPinIcon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Location</div>
                  <div className="text-sm sm:text-base font-medium text-white">{churchInfo.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/5">
                <UserIcon className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Pastoral Leader</div>
                  <div className="text-sm sm:text-base font-medium text-white">{churchInfo.pastor}</div>
                </div>
              </div>
            </div>

            {/* Progress / Status Pill */}
            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
                  <SparklesIcon className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                  Full Gallery, Worship Schedule & Ministries Page In Progress
                </span>
                <span className="font-bold text-white">85% Complete</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${churchInfo.gradient} rounded-full`}
                />
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/churches"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all duration-300 text-base font-display"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>Back to Our Churches</span>
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 text-base"
            >
              <BellRingIcon className="w-5 h-5 text-amber-300" />
              <span>Contact GEFMI Office</span>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
