import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import {
  MapPinIcon,
  CalendarIcon,
  HeartIcon,
  SparklesIcon,
  ImageIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  UsersIcon,
  ChurchIcon,
  BookOpenIcon,
  ArrowRightIcon
} from 'lucide-react';

const churchData = {
  name: 'Masagana Church',
  location: 'Masagana, Putlan, Carranglan, Nueva Ecija',
  established: '2022',
  tagline: 'Abundance of Grace and Truth in Christ',
  description:
    'Welcome to Masagana Church, located in Putlan, Carranglan, Nueva Ecija. We are dedicated to glorifying God, building strong families, and bringing the transforming hope of Jesus Christ to the Masagana community through dedicated pastoral care, vibrant fellowship, and compassionate outreach.',
  heroImage: '/d31d0fba-04a5-4c4b-9ab3-e4b5139eba09.webp',
  services: [
    {
      day: 'Sunday',
      time: '9:00 AM - 11:30 AM',
      type: 'Sunday Worship Service'
    },
    {
      day: 'Wednesday',
      time: '6:30 PM - 8:00 PM',
      type: 'Midweek Prayer & Bible Study'
    }
  ],
  gallery: [
    {
      url: '/d31d0fba-04a5-4c4b-9ab3-e4b5139eba09.webp',
      caption: 'Masagana Congregation'
    },
    {
      url: '/488187749_2515758982101618_4043527949836955806_n.webp',
      caption: 'Sunday Worship & Fellowship'
    },
    {
      url: '/471763791_1328332991492039_3951466319424511661_n.webp',
      caption: 'Praise and Thanksgiving'
    }
  ]
};

export function MasaganaChurch() {
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
      (prev) => (prev - 1 + churchData.gallery.length) % churchData.gallery.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

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
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
  };

  return (
    <div className="w-full min-h-screen bg-dark-premium text-slate-100">
      <Navbar />
      <BackButton to="/churches" label="Back to Churches" />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={churchData.heroImage}
            alt={churchData.name}
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wide">
              <ChurchIcon className="w-4 h-4" />
              <span>GEFMI Church</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white font-display tracking-tight">
              {churchData.name}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light">
              {churchData.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-emerald-400" />
                <span>{churchData.location}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-emerald-400" />
                <span>Established {churchData.established}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About & Schedule Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              About Masagana Church
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              {churchData.description}
            </p>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex items-center gap-3 text-emerald-400 font-bold text-xl font-display">
              <ClockIcon className="w-6 h-6" />
              <span>Worship Schedule</span>
            </div>
            <div className="space-y-4">
              {churchData.services.map((svc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 space-y-1"
                >
                  <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                    {svc.day}
                  </div>
                  <div className="text-lg font-bold text-white">{svc.type}</div>
                  <div className="text-sm text-slate-400">{svc.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
