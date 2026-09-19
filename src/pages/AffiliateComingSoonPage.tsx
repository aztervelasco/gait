import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  SparklesIcon,
  MapPinIcon,
  UserIcon,
  ArrowLeftIcon,
  ChurchIcon,
  LayersIcon
} from 'lucide-react';

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
  '/churches/affiliate/lhgcf/manicla': {
    name: 'LHGCF Manicla Church',
    location: 'Manicla, San Jose City, Nueva Ecija',
    pastor: 'Rev. Luisito S. Silan',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-emerald-400 via-green-300 to-teal-400',
    glowColor: '#10b981'
  },
  '/churches/affiliate/manicla': {
    name: 'LHGCF Manicla Church',
    location: 'Manicla, San Jose City, Nueva Ecija',
    pastor: 'Rev. Luisito S. Silan',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-emerald-400 via-green-300 to-teal-400',
    glowColor: '#10b981'
  },
  '/churches/affiliate/lhgcf/putlan': {
    name: 'LHGCF Putlan Church',
    location: 'Putlan, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Nora D. Silan',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    glowColor: '#10b981'
  },
  '/churches/affiliate/putlan': {
    name: 'LHGCF Putlan Church',
    location: 'Putlan, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Nora D. Silan',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    glowColor: '#10b981'
  },
  '/churches/affiliate/lhgcf/ikapito': {
    name: 'LHGCF Ika-pito Church',
    location: 'Ika-pito, Putlan, Carranglan, Nueva Ecija',
    pastor: 'Madam Roselyn Basilio',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-teal-400 via-cyan-300 to-blue-400',
    glowColor: '#14b8a6'
  },
  '/churches/affiliate/ikapito': {
    name: 'LHGCF Ika-pito Church',
    location: 'Ika-pito, Putlan, Carranglan, Nueva Ecija',
    pastor: 'Madam Roselyn Basilio',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-teal-400 via-cyan-300 to-blue-400',
    glowColor: '#14b8a6'
  },
  '/churches/affiliate/lhgcf/bambang': {
    name: 'LHGCF Bambang Church',
    location: 'Bambang, Nueva Vizcaya',
    pastor: 'Rev. Leonard Clemens L. Cadoy',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-cyan-400 via-sky-300 to-blue-400',
    glowColor: '#0ea5e9'
  },
  '/churches/affiliate/bambang': {
    name: 'LHGCF Bambang Church',
    location: 'Bambang, Nueva Vizcaya',
    pastor: 'Rev. Leonard Clemens L. Cadoy',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    gradient: 'from-cyan-400 via-sky-300 to-blue-400',
    glowColor: '#0ea5e9'
  },
  '/churches/affiliate/ammoweg': {
    name: 'Ammoweg Eternal Life Fellowship Church',
    location: 'Ammoweg, Ambaguio, Nueva Vizcaya',
    pastor: 'Rev. Junie M. Balwang & Pastor Solomon W. Balwang',
    fellowship: 'Eternal Life Fellowship Church',
    abbreviation: 'ELFC',
    gradient: 'from-blue-400 via-teal-300 to-emerald-400',
    glowColor: '#06b6d4'
  },
  '/churches/affiliate/taaw': {
    name: 'Taaw Eternal Life Fellowship Church',
    location: 'Taaw, Ambaguio, Nueva Vizcaya',
    pastor: 'Pastor Lito Baguiwan',
    fellowship: 'Eternal Life Fellowship Church',
    abbreviation: 'ELFC',
    gradient: 'from-sky-400 via-indigo-300 to-blue-400',
    glowColor: '#38bdf8'
  },
  '/churches/affiliate/psalms23': {
    name: 'Psalms 23 Fellowship Church',
    location: 'San Antonio, Bambang, Nueva Vizcaya',
    pastor: 'Pastor Jerry Litawen & Pastor Zeny B. Litawen (Assoc. Ptr. Gina S. Espiritu)',
    fellowship: 'Psalms 23 Fellowship',
    abbreviation: 'P23',
    gradient: 'from-amber-400 via-orange-300 to-yellow-400',
    glowColor: '#f59e0b'
  },
  '/churches/affiliate/salazar': {
    name: 'The Living Hope Fellowship Salazar',
    location: 'Salazar, Carranglan, Nueva Ecija',
    pastor: 'Pastor Maxima G. Anton & Sis. Mylene J. Padone',
    fellowship: 'The Living Hope Fellowship',
    abbreviation: 'LHF',
    gradient: 'from-rose-400 via-pink-300 to-amber-400',
    glowColor: '#f43f5e'
  },
  '/churches/affiliate/ctl/toytoyan': {
    name: 'Toytoyan The Church of the Living Christ',
    location: 'Toytoyan, Dipaculao, Aurora',
    pastor: 'Rev. Sonny Boy B. Jacob & Assoc. Ptr. Merly S. Jacob',
    fellowship: 'The Church of the Living Christ',
    abbreviation: 'CLC',
    gradient: 'from-indigo-400 via-purple-300 to-pink-400',
    glowColor: '#8b5cf6'
  },
  '/churches/affiliate/toytoyan': {
    name: 'Toytoyan The Church of the Living Christ',
    location: 'Toytoyan, Dipaculao, Aurora',
    pastor: 'Rev. Sonny Boy B. Jacob & Assoc. Ptr. Merly S. Jacob',
    fellowship: 'The Church of the Living Christ',
    abbreviation: 'CLC',
    gradient: 'from-indigo-400 via-purple-300 to-pink-400',
    glowColor: '#8b5cf6'
  },
  '/churches/affiliate/ctl/calaocan': {
    name: 'Calaocan Church of the Living Christ',
    location: 'Calaocan, Dipaculao, Aurora',
    pastor: 'Church Leadership',
    fellowship: 'The Church of the Living Christ',
    abbreviation: 'CLC',
    gradient: 'from-blue-400 via-indigo-300 to-purple-400',
    glowColor: '#3b82f6'
  },
  '/churches/affiliate/calaocan': {
    name: 'Calaocan Church of the Living Christ',
    location: 'Calaocan, Dipaculao, Aurora',
    pastor: 'Church Leadership',
    fellowship: 'The Church of the Living Christ',
    abbreviation: 'CLC',
    gradient: 'from-blue-400 via-indigo-300 to-purple-400',
    glowColor: '#3b82f6'
  },
  '/churches/affiliate/ctl/borlongan': {
    name: 'The United Christian Mission Church',
    location: 'Borlongan, Dipaculao, Aurora',
    pastor: 'Rev. Teodoro Garlit Sr.',
    fellowship: 'The United Christian Mission Church',
    abbreviation: 'UCMC',
    gradient: 'from-sky-400 via-blue-300 to-indigo-400',
    glowColor: '#0284c7'
  },
  '/churches/affiliate/borlongan': {
    name: 'The United Christian Mission Church',
    location: 'Borlongan, Dipaculao, Aurora',
    pastor: 'Rev. Teodoro Garlit Sr.',
    fellowship: 'The United Christian Mission Church',
    abbreviation: 'UCMC',
    gradient: 'from-sky-400 via-blue-300 to-indigo-400',
    glowColor: '#0284c7'
  },
  '/churches/affiliate/ctl/baler': {
    name: 'Christ the Lord Fellowship',
    location: 'Dikaluyungan, Baler, Aurora',
    pastor: 'Rev. Joseph Soridor',
    fellowship: 'Christ The Lord Fellowship',
    abbreviation: 'CTL',
    gradient: 'from-violet-400 via-purple-300 to-pink-400',
    glowColor: '#9333ea'
  },
  '/churches/affiliate/baler': {
    name: 'Christ the Lord Fellowship',
    location: 'Dikaluyungan, Baler, Aurora',
    pastor: 'Rev. Joseph Soridor',
    fellowship: 'Christ The Lord Fellowship',
    abbreviation: 'CTL',
    gradient: 'from-violet-400 via-purple-300 to-pink-400',
    glowColor: '#9333ea'
  },
  '/churches/affiliate/cmi': {
    name: 'Challenge Ministries Churches',
    location: 'Inter-Provincial Network',
    pastor: 'Partner Churches & Leadership',
    fellowship: 'Challenge Ministries International (CMI)',
    abbreviation: 'CMI',
    gradient: 'from-orange-400 via-amber-300 to-yellow-400',
    glowColor: '#f97316'
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
    location: 'Affiliate Fellowship Network',
    pastor: 'Church Pastor & Leadership',
    fellowship: 'Affiliate Fellowship Network',
    abbreviation: 'GEFMI AFFILIATE',
    gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    glowColor: '#10b981'
  };

  // Force scroll to top on mount immediately to prevent white screen / offset issues
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 relative flex flex-col justify-center items-center px-4 sm:px-6 py-12 overflow-hidden selection:bg-emerald-500/30">
      {/* Background Animated Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Shifting Gradient Glow Aura */}
        <motion.div
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.25, 0.5, 0.25],
            x: [-30, 30, -30],
            y: [-25, 25, -25]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] md:w-[800px] h-[350px] sm:h-[650px] md:h-[800px] rounded-full blur-[140px] sm:blur-[180px]"
          style={{ backgroundColor: churchInfo.glowColor }}
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-24 -right-24 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600 rounded-full blur-[140px]"
        />

        {/* Floating Sparks */}
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, y: 0 }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              y: [-10, -120, -10],
              x: [0, (i % 2 === 0 ? 25 : -25), 0]
            }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut'
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/70 blur-[0.5px]"
            style={{
              left: `${8 + (i * 5.8)}%`,
              top: `${20 + ((i * 17) % 65)}%`
            }}
          />
        ))}

        {/* Precision Geometric Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Single Card Content */}
      <div className="relative z-10 max-w-2xl mx-auto w-full text-center flex flex-col items-center">
        {/* Animated Rotating Cross / Church Emblem */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-24 h-24 sm:w-28 sm:h-28 mb-8 flex items-center justify-center"
        >
          {/* Neon Counter-Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3 rounded-full border border-teal-300/30"
          />
          <div
            className={`absolute inset-2 bg-gradient-to-br ${churchInfo.gradient} rounded-full blur-xl opacity-70 animate-pulse`}
          />

          {/* Center Shield */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-slate-900/90 border border-white/25 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-xl">
            <ChurchIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow" />
          </div>
        </motion.div>

        {/* Church Name & Fellowship Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider text-slate-200 mb-6 shadow-lg"
        >
          <LayersIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span>{churchInfo.name}</span>
          <span className="text-slate-400">•</span>
          <span className="text-emerald-300 font-bold uppercase">{churchInfo.abbreviation}</span>
        </motion.div>

        {/* Epic COMING SOON Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 mb-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none font-display">
            <span
              className={`block text-transparent bg-clip-text bg-gradient-to-r ${churchInfo.gradient} drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]`}
            >
              COMING SOON
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-lg mx-auto leading-relaxed">
            We are preparing the full page, worship schedules, and photo archives for{' '}
            <strong className="font-semibold text-white">{churchInfo.name}</strong>.
          </p>
        </motion.div>

        {/* Church Location & Pastor Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="w-full max-w-lg p-5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-xl shadow-2xl space-y-4 mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/5">
              <MapPinIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div className="overflow-hidden">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Location</div>
                <div className="text-xs sm:text-sm font-medium text-white truncate">{churchInfo.location}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/5">
              <UserIcon className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <div className="overflow-hidden">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Pastoral Leader</div>
                <div className="text-xs sm:text-sm font-medium text-white truncate">{churchInfo.pastor}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-emerald-300 font-medium pt-1">
            <SparklesIcon className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Digital Content & Media in Production</span>
          </div>
        </motion.div>

        {/* Just One Single Prominent Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="w-full sm:w-auto"
        >
          <Link
            to="/churches?tab=affiliate"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold px-8 sm:px-10 py-4 rounded-2xl shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-300 text-base sm:text-lg font-display"
          >
            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Affiliate Churches</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
