import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  HeartIcon,
  SparklesIcon,
  UserIcon,
  ClockIcon,
  ImageIcon,
  CompassIcon,
  BellRingIcon,
  ArrowRightIcon,
  LayersIcon,
  ArrowLeftIcon,
  FlameIcon,
  CheckCircle2Icon
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackButton } from './BackButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export interface AffiliateChurchTemplateProps {
  name: string;
  location: string;
  pastor: string;
  fellowship: string;
  fellowshipAbbreviation: string;
  tagline?: string;
  description?: string;
  mission?: string;
  vision?: string;
  image?: string;
  accentGradient?: string; // e.g. 'from-emerald-400 via-teal-300 to-cyan-400'
  accentColor?: 'emerald' | 'amber' | 'blue' | 'purple' | 'orange' | 'cyan';
  backLink?: string;
  backLabel?: string;
}

export function AffiliateChurchTemplate({
  name,
  location,
  pastor,
  fellowship,
  fellowshipAbbreviation,
  tagline = 'United in Faith, Hope & Christian Fellowship',
  description = 'A dedicated congregation under the fellowship network, faithfully spreading the love of Jesus Christ and fostering godly discipleship.',
  mission = 'To proclaim the Gospel of grace, building a transformed community walking firmly in biblical truth and Christ-like love.',
  vision = 'A vibrant church community where lives are transformed by the Holy Spirit and empowered to serve God and neighbors.',
  image = '/b39eeb33-32ea-4da9-a196-bbb6469f7213.webp',
  accentGradient = 'from-emerald-400 via-teal-300 to-cyan-400',
  accentColor = 'emerald',
  backLink = '/churches',
  backLabel = 'Back to Our Churches'
}: AffiliateChurchTemplateProps) {
  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    damping: 0.88
  });

  const getAccentColorHex = () => {
    switch (accentColor) {
      case 'emerald':
        return '#10b981';
      case 'amber':
        return '#f59e0b';
      case 'purple':
        return '#a855f7';
      case 'blue':
      case 'cyan':
      default:
        return '#0ea5e9';
    }
  };

  const upcomingFeatures = [
    {
      icon: ClockIcon,
      title: 'Service & Worship Schedules',
      desc: 'Weekly Sunday celebrations, mid-week prayer gatherings, youth fellowships, and Sunday school times.'
    },
    {
      icon: ImageIcon,
      title: 'High-Res Photo & Video Gallery',
      desc: 'Capturing heartfelt moments of praise, community outreach missions, baptisms, and fellowship celebrations.'
    },
    {
      icon: CompassIcon,
      title: 'Directions & Ministry Directory',
      desc: 'Step-by-step navigation map, pastor direct contact numbers, and neighborhood life group listings.'
    },
    {
      icon: FlameIcon,
      title: 'Outreach & Ministry Programs',
      desc: 'Updates on feeding programs, youth conferences, music ministry, and provincial mission outreaches.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-emerald-500/30">
      <Navbar />
      <BackButton to={backLink} label={backLabel} />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Dynamic Background Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.15, 0.3, 0.15],
              x: [-20, 20, -20]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -top-20 -left-20 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full blur-[140px]"
            style={{ backgroundColor: getAccentColorHex() }}
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.25, 0.1],
              y: [20, -20, 20]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -bottom-20 -right-20 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-600 rounded-full blur-[160px]"
          />
          {/* Subtle Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Top Coming Soon Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="relative group">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${accentGradient} rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse`}
              />
              <div className="relative flex items-center gap-2 sm:gap-3 bg-slate-900/90 border border-white/20 backdrop-blur-xl px-5 sm:px-8 py-2.5 rounded-full shadow-2xl">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <SparklesIcon className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white">
                  Profile & Full Gallery Coming Soon
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10 hidden sm:inline-block">
                  {fellowshipAbbreviation}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Grid: Info + Image Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headings & Details */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-7 text-center lg:text-left space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300">
                <LayersIcon className="w-4 h-4 text-emerald-400" />
                <span>{fellowship}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] font-display">
                {name}
              </h1>

              <p className={`text-lg sm:text-xl md:text-2xl font-light bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
                "{tagline}"
              </p>

              {/* Meta Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm sm:text-base text-slate-200">
                  <MapPinIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm sm:text-base text-slate-200">
                  <UserIcon className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>{pastor}</span>
                </div>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
                {description}
              </p>

              {/* Live Status Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                      Digital Archiving Status
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    In Production
                  </span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${accentGradient} rounded-full`}
                  />
                </div>
                <p className="text-xs text-slate-400 mt-2.5 flex items-center justify-between">
                  <span>Collecting photos, testimonies & full schedule</span>
                  <span className="font-semibold text-slate-300">85% Complete</span>
                </p>
              </div>

              {/* CTA Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-7 py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base"
                >
                  <BellRingIcon className="w-4 h-4" />
                  <span>Connect With Church Office</span>
                </Link>
                <Link
                  to={backLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base"
                >
                  <ArrowLeftIcon className="w-4 h-4" />
                  <span>{backLabel}</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Beautiful Framed Church Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative group">
                {/* Glowing border back-light */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${accentGradient} rounded-[32px] blur-xl opacity-40 group-hover:opacity-75 transition duration-700`}
                />
                <div className="relative rounded-[28px] overflow-hidden border border-white/20 bg-slate-900 shadow-2xl">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Badge on Photo */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="bg-slate-950/80 backdrop-blur-md border border-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                        <SparklesIcon className="w-3.5 h-3.5 text-amber-300" />
                        GEFMI Affiliate Branch
                      </span>
                      <span className="bg-emerald-500/80 backdrop-blur-md text-slate-950 text-xs font-bold px-2.5 py-1 rounded-full shadow">
                        Active
                      </span>
                    </div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-6 left-6 right-6 text-left">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {name}
                      </h3>
                      <p className="text-sm text-slate-300 flex items-center gap-1.5">
                        <MapPinIcon className="w-3.5 h-3.5 text-emerald-400" />
                        {location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Teasers Section */}
      <section className="relative py-24 px-4 sm:px-6 md:px-12 bg-slate-900/50 border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full inline-block mb-4">
                What's Coming
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                Exciting Features in Development
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                We are preparing a complete digital home for {name}. Here is a sneak peek at what will be available soon on this page.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative p-7 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentGradient} flex items-center justify-center flex-shrink-0 shadow-lg text-slate-950 font-bold`}
                  >
                    <feat.icon className="w-6 h-6 text-slate-950" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Showcase */}
      <section className="relative py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-5 text-emerald-300">
                <HeartIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {mission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-5 text-teal-300">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Fellowship Banner */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-b from-transparent to-slate-900/80">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Want to Join or Support This Church?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Connect with our leadership team today to learn more about service times, location directions, and how you can be part of what God is doing in {location.split(',')[0]}.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Get in Touch</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              to="/churches"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/10 transition-all duration-300"
            >
              <span>Explore All Churches</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}