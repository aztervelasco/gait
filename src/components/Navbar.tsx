import React, { useEffect, useState, Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ChevronRightIcon } from 'lucide-react';
export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const isCompact = scrollY > 100 && !isHovered;
  return <>
      {/* Desktop Navigation (above 768px) */}
      <motion.nav initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: 0.2
    }} className="hidden md:flex fixed top-0 left-0 right-0 z-40 justify-center px-4 pt-4 pointer-events-none" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <motion.div animate={{
        scale: scrollY > 20 ? 0.95 : 1,
        y: scrollY > 20 ? -4 : 0
      }} transition={{
        duration: 0.3,
        ease: 'easeOut'
      }} className="pointer-events-auto relative w-full max-w-fit">
          <motion.div animate={{
          paddingTop: isCompact ? '0.5rem' : '1rem',
          paddingBottom: isCompact ? '0.5rem' : '1rem',
          paddingLeft: isCompact ? '1.5rem' : '2rem',
          paddingRight: isCompact ? '1.5rem' : '2rem',
          borderRadius: isCompact ? '9999px' : '9999px'
        }} transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30
        }} className={`
              relative
              bg-slate-900/80 backdrop-blur-xl
              border border-white/10
              shadow-2xl
              flex items-center gap-8
              transition-shadow duration-300
              ${scrollY > 20 ? 'shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'shadow-[0_4px_24px_rgba(0,0,0,0.3)]'}
            `}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 rounded-full pointer-events-none"></div>

            <Link to="/" className="relative flex items-center gap-3 group flex-shrink-0">
              <motion.div animate={{
              scale: isCompact ? 1 : 1.2,
              rotate: scrollY > 100 ? 360 : 0
            }} transition={{
              scale: {
                type: 'spring',
                stiffness: 300,
                damping: 30
              },
              rotate: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }
            }} className="bg-white rounded-full p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <img src="/553179066_3773471999619593_8381726180407782571_n-Picsart-AiImageEnhancer-removebg-preview.png" alt="GEFMI Logo" className="w-10 h-10 object-contain" />
              </motion.div>
              <motion.span animate={{
              opacity: isCompact ? 1 : 1,
              width: isCompact ? 'auto' : 'auto'
            }} transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }} className="text-white font-bold text-2xl tracking-wider group-hover:text-blue-300 transition-colors duration-300 whitespace-nowrap">
                GEFMI
              </motion.span>
            </Link>

            <motion.div animate={{
            opacity: isCompact ? 0 : 1,
            width: isCompact ? 0 : 'auto',
            marginLeft: isCompact ? 0 : '2rem',
            marginRight: isCompact ? 0 : 0
          }} transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }} className="hidden lg:flex items-center gap-1 overflow-hidden">
              <NavLink href="/" active={location.pathname === '/'}>
                Home
              </NavLink>
              <NavLink href="/ministry" active={location.pathname === '/ministry'}>
                Ministry
              </NavLink>
              <NavLink href="/about" active={location.pathname.startsWith('/about')}>
                About
              </NavLink>
              <NavLink href="/sponsorship" active={location.pathname === '/sponsorship'}>
                Sponsorship
              </NavLink>
              <NavLink href="/contact" active={location.pathname === '/contact'}>
                Contact
              </NavLink>
            </motion.div>

            <motion.button animate={{
            scale: isCompact ? 0.85 : 1
          }} transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }} whileTap={{
            scale: 0.9
          }} onClick={() => setSidebarOpen(true)} className="lg:hidden relative bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group" aria-label="Open menu">
              <div className="flex flex-col gap-1 w-5 h-5 items-center justify-center">
                <span className="w-full h-0.5 bg-white rounded-full" />
                <span className="w-full h-0.5 bg-white rounded-full" />
                <span className="w-full h-0.5 bg-white rounded-full" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Mobile/Tablet Navigation (768px and below) - Sticky Right Button */}
      <motion.button initial={{
      x: 100,
      opacity: 0
    }} animate={{
      x: 0,
      opacity: 1
    }} transition={{
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: 0.2
    }} whileTap={{
      scale: 0.9
    }} onClick={() => setSidebarOpen(true)} className="md:hidden fixed top-6 right-6 z-40 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation" aria-label="Open menu">
        <div className="flex flex-col gap-1.5 w-6 h-6 items-center justify-center">
          <span className="w-full h-0.5 bg-white rounded-full" />
          <span className="w-full h-0.5 bg-white rounded-full" />
          <span className="w-full h-0.5 bg-white rounded-full" />
        </div>
      </motion.button>

      <AnimatePresence>
        {sidebarOpen && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={() => setSidebarOpen(false)} />

            <motion.div initial={{
          x: '100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '100%'
        }} transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200
        }} className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 z-50 shadow-2xl overflow-y-auto">
              <motion.button whileTap={{
            scale: 0.9
          }} onClick={() => setSidebarOpen(false)} className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all duration-300 touch-manipulation" aria-label="Close menu">
                <XIcon className="w-7 h-7" />
              </motion.button>

              <div className="p-8 border-b border-white/10">
                <Link to="/" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 group">
                  <div className="bg-white rounded-full p-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img src="/553179066_3773471999619593_8381726180407782571_n-Picsart-AiImageEnhancer-removebg-preview.png" alt="GEFMI Logo" className="w-12 h-12 object-contain" />
                  </div>
                  <span className="text-white font-bold text-2xl tracking-wider group-hover:text-blue-300 transition-colors duration-300">
                    GEFMI
                  </span>
                </Link>
              </div>

              <nav className="p-6">
                <div className="space-y-2">
                  <SidebarLink href="/" onClick={() => setSidebarOpen(false)}>
                    Home
                  </SidebarLink>
                  <SidebarLink href="/ministry" onClick={() => setSidebarOpen(false)}>
                    Ministry
                  </SidebarLink>
                  <SidebarLink href="/about" onClick={() => setSidebarOpen(false)}>
                    About
                  </SidebarLink>
                  <SidebarLink href="/sponsorship" onClick={() => setSidebarOpen(false)}>
                    Sponsorship
                  </SidebarLink>
                  <SidebarLink href="/contact" onClick={() => setSidebarOpen(false)}>
                    Contact
                  </SidebarLink>
                </div>
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black/20">
                <p className="text-white/60 text-sm text-center">
                  © 2025 GEFMI. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
};
const NavLink = ({
  href,
  children,
  active
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) => <Link to={href} className="relative group px-4 py-2 rounded-full transition-all duration-300">
    <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${active ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
      {children}
    </span>

    {active && <motion.div layoutId="activeNav" className="absolute inset-0 bg-white/10 rounded-full" transition={{
    type: 'spring',
    stiffness: 300,
    damping: 30
  }} />}

    <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </Link>;
const SidebarLink = ({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => <motion.div whileTap={{
  scale: 0.97
}}>
    <Link to={href} onClick={onClick} className="group flex items-center justify-between px-4 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-lg touch-manipulation">
      <span>{children}</span>
      <ChevronRightIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
    </Link>
  </motion.div>;