import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ChevronRightIcon } from 'lucide-react';

// Map pathname to a display label for the compact indicator
const getPageLabel = (pathname: string): string => {
  if (pathname === '/') return 'Home';
  if (pathname === '/ministry') return 'Our Ministries';
  if (pathname.startsWith('/about')) return 'About Us';
  if (pathname.startsWith('/churches')) return 'Our Churches';
  if (pathname === '/pastors') return 'Our Pastors';
  if (pathname === '/sponsorship') return 'Sponsorship';
  if (pathname === '/contact') return 'Contact';
  if (pathname === '/gefmi-story') return 'Our Story';
  return 'GEFMI';
};

const navItems = [
  { href: '/', label: 'Home', match: (p: string) => p === '/' },
  { href: '/ministry', label: 'Ministry', match: (p: string) => p === '/ministry' },
  { href: '/about', label: 'About', match: (p: string) => p.startsWith('/about') },
  { href: '/churches', label: 'Churches', match: (p: string) => p.startsWith('/churches') },
  { href: '/pastors', label: 'Pastors', match: (p: string) => p === '/pastors' },
  { href: '/sponsorship', label: 'Sponsorship', match: (p: string) => p === '/sponsorship' },
  { href: '/contact', label: 'Contact', match: (p: string) => p === '/contact' },
];

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isHovered, setIsHovered] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentY;
      setScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Expanded when: at top of page, OR scrolling up, OR hovered
  // Compact when: scrolled past 100px AND scrolling down AND not hovered
  const isCompact = scrollY > 100 && scrollDirection === 'down' && !isHovered;
  const pageLabel = getPageLabel(location.pathname);

  return (
    <>
      {/* ─── Desktop Navigation (≥768px) ─── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
        className="hidden md:flex fixed top-0 left-0 right-0 z-40 flex-col items-center px-4 pt-4 pointer-events-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>

        {/* Main pill container */}
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          className="pointer-events-auto relative">

          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
            className={`
              relative
              bg-slate-800/90 backdrop-blur-xl
              border border-white/10
              shadow-2xl
              flex items-center
              rounded-full
              transition-shadow duration-300
              ${scrollY > 20 ? 'shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'shadow-[0_4px_24px_rgba(0,0,0,0.3)]'}
            `}
            style={{
              padding: isCompact ? '0.5rem 1.25rem' : '0.625rem 1.5rem',
              gap: isCompact ? '0.75rem' : '0.5rem',
            }}>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 rounded-full pointer-events-none" />

            {/* Logo + GEFMI text (always visible) */}
            <Link
              to="/"
              className="relative flex items-center gap-2.5 group flex-shrink-0">
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                className="bg-white rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex-shrink-0"
                style={{
                  padding: isCompact ? '0.25rem' : '0.375rem',
                }}>
                <img
                  src="/553179066_3773471999619593_8381726180407782571_n-Picsart-AiImageEnhancer-removebg-preview.webp"
                  alt="GEFMI Logo"
                  className="object-contain transition-all duration-300"
                  style={{
                    width: isCompact ? '1.75rem' : '2rem',
                    height: isCompact ? '1.75rem' : '2rem',
                  }}
                />
              </motion.div>
              <span className="text-white font-bold text-lg tracking-wider group-hover:text-blue-300 transition-colors duration-300 whitespace-nowrap">
                GEFMI
              </span>
            </Link>

            {/* Desktop nav links — animate in/out */}
            <AnimatePresence mode="wait">
              {!isCompact && (
                <motion.div
                  key="nav-links"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  className="hidden lg:flex items-center gap-0.5 overflow-hidden ml-3">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      active={item.match(location.pathname)}>
                      {item.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hamburger for md–lg screens (tablet: nav links hidden, pill visible) */}
            <motion.button
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden relative bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full transition-all duration-300 hover:scale-110 group flex-shrink-0"
              style={{
                padding: isCompact ? '0.5rem' : '0.625rem',
              }}
              aria-label="Open menu">
              <div className="flex flex-col gap-0.5 w-4 h-4 items-center justify-center">
                <span className="w-full h-0.5 bg-white rounded-full" />
                <span className="w-full h-0.5 bg-white rounded-full" />
                <span className="w-full h-0.5 bg-white rounded-full" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Current page indicator — only shows in compact mode */}
        <AnimatePresence>
          {isCompact && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="pointer-events-none mt-1.5">
              <span className="text-blue-400 text-xs font-semibold tracking-wide flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {pageLabel}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ─── Mobile Navigation (< 768px) — Clean App Top Bar ─── */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
        className="md:hidden fixed top-0 left-0 right-0 z-40 bg-slate-900/85 backdrop-blur-xl border-b border-white/10 px-4 py-2.5 flex items-center justify-between shadow-xl">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="bg-white rounded-full p-1 shadow-md">
            <img
              src="/553179066_3773471999619593_8381726180407782571_n-Picsart-AiImageEnhancer-removebg-preview.webp"
              alt="GEFMI Logo"
              className="w-7 h-7 object-contain"
            />
          </div>
          <span className="text-white font-bold text-base tracking-wider font-display">
            GEFMI
          </span>
        </Link>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setSidebarOpen(true)}
          className="bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white p-2.5 rounded-full shadow-lg transition-all duration-300 active:scale-95 touch-manipulation"
          aria-label="Open menu">
          <div className="flex flex-col gap-1 w-4 h-4 items-center justify-center">
            <span className="w-full h-0.5 bg-white rounded-full" />
            <span className="w-full h-0.5 bg-white rounded-full" />
            <span className="w-full h-0.5 bg-white rounded-full" />
          </div>
        </motion.button>
      </motion.div>

      {/* ─── Sidebar Drawer ─── */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 z-50 shadow-2xl overflow-y-auto flex flex-col justify-between">

              <div>
                {/* Close button */}
                <div className="p-6 flex items-center justify-between border-b border-white/10">
                  <Link
                    to="/"
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-3">
                    <div className="bg-white rounded-full p-1.5 shadow-md">
                      <img
                        src="/553179066_3773471999619593_8381726180407782571_n-Picsart-AiImageEnhancer-removebg-preview.webp"
                        alt="GEFMI Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <span className="text-white font-bold text-xl tracking-wider font-display">
                      GEFMI
                    </span>
                  </Link>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSidebarOpen(false)}
                    className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300 touch-manipulation"
                    aria-label="Close menu">
                    <XIcon className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Navigation links */}
                <nav className="p-4 sm:p-6">
                  <div className="space-y-1.5">
                    {navItems.map((item) => (
                      <SidebarLink
                        key={item.href}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}>
                        {item.label}
                      </SidebarLink>
                    ))}
                  </div>
                </nav>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10 bg-black/20">
                <p className="text-white/50 text-xs text-center">
                  © 2025 GEFMI. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/* ─── Sub-components ─── */

const NavLink = ({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) => (
  <Link
    to={href}
    className="relative group px-3 py-1.5 rounded-full transition-all duration-300">
    <span
      className={`relative z-10 text-xs font-medium transition-colors duration-300 whitespace-nowrap ${
        active ? 'text-white' : 'text-gray-300 group-hover:text-white'
      }`}>
      {children}
    </span>

    {active && (
      <motion.div
        layoutId="activeNav"
        className="absolute inset-0 bg-white/15 rounded-full"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    )}

    <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </Link>
);

const SidebarLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <motion.div whileTap={{ scale: 0.97 }}>
    <Link
      to={href}
      onClick={onClick}
      className="group flex items-center justify-between px-4 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-lg touch-manipulation">
      <span>{children}</span>
      <ChevronRightIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
    </Link>
  </motion.div>
);