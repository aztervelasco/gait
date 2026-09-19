import React, { Children } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { App } from './App';
import { BantinanChurch } from './pages/BantinanChurch';
import { DaltonChurch } from './pages/DaltonChurch';
import { AtbuChurch } from './pages/AtbuChurch';
import { SantaFeChurch } from './pages/SantaFeChurch';
import { TimmuriChurch } from './pages/TimmuriChurch';
import { BetiChurch } from './pages/BetiChurch';
import { AasinChurch } from './pages/AasinChurch';
import { LowerKiskisChurch } from './pages/LowerKiskisChurch';
import { UpperKiskisChurch } from './pages/UpperKiskisChurch';
import { OrchidsChurch } from './pages/OrchidsChurch';
import { VillafloresChurch } from './pages/VillafloresChurch';
import { MinistryPage } from './pages/MinistryPage';
import { AboutPage } from './pages/AboutPage';
import { SponsorshipPage } from './pages/SponsorshipPage';
import { ContactPage } from './pages/ContactPage';
import { OurPastorsPage } from './pages/OurPastorsPage';
import { OurChurchesPage } from './pages/OurChurchesPage';
import { GefmiStoryPage } from './pages/GefmiStoryPage';
import { ScrollToTop } from './components/ScrollToTop';
// Affiliate Pages
import { AffiliateComingSoonPage } from './pages/AffiliateComingSoonPage';
import { LhgcfFellowship } from './pages/affiliate/LhgcfFellowship';
import { PutlanChurch } from './pages/affiliate/PutlanChurch';
import { IkapitoChurch } from './pages/affiliate/IkapitoChurch';
import { ManiclaChurch } from './pages/affiliate/ManiclaChurch';
import { BambangLhgcfChurch } from './pages/affiliate/BambangLhgcfChurch';
import { Psalms23Church } from './pages/affiliate/Psalms23Church';
import { CtlFellowship } from './pages/affiliate/CtlFellowship';
import { CalaocanChurch } from './pages/affiliate/CalaocanChurch';
import { ToytoyanChurch } from './pages/affiliate/ToytoyanChurch';
import { BorlonganChurch } from './pages/affiliate/BorlonganChurch';
import { BalerChurch } from './pages/affiliate/BalerChurch';
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};
const pageTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1]
};
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <App />
            </motion.div>
          } />
        
        <Route
          path="/churches/bantinan"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <BantinanChurch />
            </motion.div>
          } />
        
        <Route
          path="/churches/dalton"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <DaltonChurch />
            </motion.div>
          } />
        
        <Route
          path="/churches/atbu"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <AtbuChurch />
            </motion.div>
          } />
        
        <Route
          path="/churches/santa-fe"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <SantaFeChurch />
            </motion.div>
          } />
        
        <Route
          path="/churches/timmuri"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <TimmuriChurch />
            </motion.div>
          } />
        
        <Route
          path="/churches/beti"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <BetiChurch />
            </motion.div>
          } />
        
        <Route
          path="/churches/aasin"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <AasinChurch />
            </motion.div>
          } />
        
        <Route
          path="/churches/lower-kiskis"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <LowerKiskisChurch />
            </motion.div>
          } />
        
        <Route
          path="/churches/upper-kiskis"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <UpperKiskisChurch />
            </motion.div>
          } />
        
        <Route
          path="/churches/orchids"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <OrchidsChurch />
            </motion.div>
          } />
        
        <Route
          path="/churches/villaflores"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <VillafloresChurch />
            </motion.div>
          } />
        
        <Route
          path="/ministry"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <MinistryPage />
            </motion.div>
          } />
        
        <Route
          path="/about"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <AboutPage />
            </motion.div>
          } />
        
        <Route
          path="/about/churches"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <AboutPage />
            </motion.div>
          } />
        
        <Route
          path="/about/pastors"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <AboutPage />
            </motion.div>
          } />
        
        <Route
          path="/about/youth-leaders"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <AboutPage />
            </motion.div>
          } />
        
        <Route
          path="/about/history"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <AboutPage />
            </motion.div>
          } />
        
        <Route
          path="/pastors"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <OurPastorsPage />
            </motion.div>
          } />
        
        <Route
          path="/churches"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <OurChurchesPage />
            </motion.div>
          } />
        
        <Route
          path="/sponsorship"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <SponsorshipPage />
            </motion.div>
          } />
        
        <Route
          path="/contact"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <ContactPage />
            </motion.div>
          } />
        
        <Route
          path="/gefmi-story"
          element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}>
            
              <GefmiStoryPage />
            </motion.div>
          } />
        

        {/* Affiliate Church Routes - Animated Coming Soon Experience */}
        <Route
          path="/churches/affiliate/lhgcf"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/lhgcf/putlan"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/putlan"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/lhgcf/ikapito"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/ikapito"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/lhgcf/manicla"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/lhgcf/bambang"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/psalms23"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/ctl"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/ctl/calaocan"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/ctl/toytoyan"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/ctl/borlongan"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/ctl/baler"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        <Route
          path="/churches/affiliate/*"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <AffiliateComingSoonPage />
            </motion.div>
          }
        />
        
      </Routes>
    </AnimatePresence>);

}
export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>);

}