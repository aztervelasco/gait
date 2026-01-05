import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroCarousel } from '../components/HeroCarousel';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { SponsorshipSection } from '../components/SponsorshipSection';
import { Footer } from '../components/Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
export const Home = () => {
  // Enable smooth scrolling with faster, Lenis-style settings
  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    touchMultiplier: 1.5,
    damping: 0.88 // Slightly lower for faster deceleration
  });
  return <div className="w-full">
      <Navbar />
      <div id="hero">
        <HeroCarousel />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="sponsorship">
        <SponsorshipSection />
      </div>
      <Footer />
    </div>;
};