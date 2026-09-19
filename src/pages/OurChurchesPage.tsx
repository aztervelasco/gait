import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import {
  ChurchIcon,
  MapPinIcon,
  UsersIcon,
  CalendarIcon,
  SparklesIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  GlobeIcon,
  BookOpenIcon,
  UserIcon } from
'lucide-react';
// Mother Church - Featured
const motherChurch = {
  name: 'Bantinan Church',
  subtitle: 'Mother Church',
  location: 'Bantinan, Santa Fe, Nueva Vizcaya',
  established: '2015',
  description:
  'Our spiritual home and the foundation of GEFMI. Where it all began with a vision to transform communities through faith. Bantinan Church serves as the mother church, nurturing new congregations and training leaders for ministry across the region.',
  image: "/old_bantinan.webp",

  link: '/churches/bantinan',
  color: 'from-amber-600 to-orange-700'
};
// Associate Churches
const churches = [
{
  name: 'Beti Church',
  location: 'Beti, Nueva Vizcaya',
  established: '2016',
  description:
  'A vibrant community bringing the Gospel to life through worship, fellowship, and dedicated service to the Beti community.',
  image: "/66728098_10214429552993452_5769225433216188416_n.webp",

  link: '/churches/beti',
  color: 'from-blue-600 to-cyan-600'
},
{
  name: 'Aasin Church',
  location: 'Aasin, Nueva Vizcaya',
  established: '2017',
  description:
  'Growing in faith and community, reaching families with the transforming message of hope and love.',
  image: "/aasin.webp",

  link: '/churches/aasin',
  color: 'from-emerald-600 to-teal-600'
},
{
  name: 'Lower Kiskis Church',
  location: 'Lower Kiskis, Nueva Vizcaya',
  established: '2018',
  description:
  'A welcoming congregation dedicated to building strong families and nurturing spiritual growth in the Lower Kiskis area.',
  image: "/526716262_10230208541658307_7509032496096349413_n.webp",

  link: '/churches/lower-kiskis',
  color: 'from-purple-600 to-pink-600'
},
{
  name: 'Upper Kiskis Church',
  location: 'Upper Kiskis, Nueva Vizcaya',
  established: '2018',
  description:
  'Serving the Upper Kiskis community with passionate worship, biblical teaching, and compassionate outreach.',
  image: "/kiskis.webp",

  link: '/churches/upper-kiskis',
  color: 'from-indigo-600 to-blue-600'
},
{
  name: 'Tactac Orchids Evangelical Church',
  location: "Tactac Orchid's, Nueva Vizcaya",
  established: '2019',
  description:
  "A flourishing congregation bringing light and hope to the community through faithful ministry, children's programs, and dedicated service.",
  image: "/Tactac.webp",

  link: '/churches/orchids',
  color: 'from-rose-600 to-red-600'
},
{
  name: 'Villaflores Christian Fellowship Center',
  location: 'Villaflores, Santa Fe, Nueva Vizcaya',
  established: '2020',
  description:
  'A vibrant community of believers empowering lives through dynamic worship, faithful ministry, and compassionate service to the Villaflores community.',
  image: "/508570671_10229211210685656_224273478076672264_n.webp",

  link: '/churches/villaflores',
  color: 'from-violet-600 to-purple-600'
},
{
  name: 'Timmuri Church',
  location: 'Ocao Capiniaan, Aritao, Nueva Vizcaya',
  established: '2021',
  description:
  'A growing congregation dedicated to serving the Timmuri community with faith, hope, and love.',
  image: "/506020317_10229095814600826_8093534636738664874_n.webp",

  link: '/churches/timmuri',
  color: 'from-teal-600 to-cyan-600'
}];

// Individual Affiliate Churches (exact structure as associate churches)
const affiliateChurches = [
  {
    name: 'LHGCF Putlan Church',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    location: 'Putlan, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Nora Silan',
    established: 'Affiliate',
    description:
      'A vibrant community of believers dedicated to sharing the living hope and grace found in Jesus Christ, reaching families and nurturing spiritual growth across Carranglan.',
    image: '/d31d0fba-04a5-4c4b-9ab3-e4b5139eba09.webp',
    link: '/churches/affiliate/lhgcf/putlan',
    color: 'from-emerald-600 to-teal-600',
    accentGradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    badgeColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
  },
  {
    name: 'LHGCF Ikapito Church',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    location: 'Ikapito, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Roselyn Basilio / Ptr. Carlito Sanchez',
    established: 'Affiliate',
    description:
      'Bringing transformation, faithful prayer, and worship to the Ikapito community with deep commitment to spreading the Gospel and raising devoted leaders.',
    image: '/480975052_950039643993852_6543480930474798010_n.webp',
    link: '/churches/affiliate/lhgcf/ikapito',
    color: 'from-teal-600 to-cyan-600',
    accentGradient: 'from-teal-400 via-cyan-300 to-blue-400',
    badgeColor: 'bg-teal-500/10 border-teal-500/20 text-teal-300',
  },
  {
    name: 'LHGCF Manicla Church',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    location: 'Manicla, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Louie Silan',
    established: 'Affiliate',
    description:
      'A faithful congregation committed to discipleship, building strong godly families, vibrant youth fellowship, and compassionate community service in Manicla.',
    image: '/497733291_9986444718087843_9208305502871839500_n.webp',
    link: '/churches/affiliate/lhgcf/manicla',
    color: 'from-emerald-600 to-green-600',
    accentGradient: 'from-emerald-400 via-green-300 to-teal-400',
    badgeColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
  },
  {
    name: 'LHGCF Bambang Church',
    fellowship: 'Living Hope and Grace in Christ Fellowship',
    abbreviation: 'LHGCF',
    location: 'Bambang, Nueva Vizcaya',
    pastor: 'Ptr. Clem',
    established: 'Affiliate',
    description:
      "Proclaiming God's grace and love throughout Bambang, providing spiritual nourishment, dynamic worship, and intentional community discipleship.",
    image: '/b39eeb33-32ea-4da9-a196-bbb6469f7213.webp',
    link: '/churches/affiliate/lhgcf/bambang',
    color: 'from-cyan-600 to-blue-600',
    accentGradient: 'from-cyan-400 via-sky-300 to-blue-400',
    badgeColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
  },
  {
    name: 'Psalms 23 Fellowship Church',
    fellowship: 'Psalms 23 Fellowship',
    abbreviation: 'P23',
    location: 'San Antonio, Bambang, Nueva Vizcaya',
    pastor: 'Church Pastor',
    established: 'Affiliate',
    description:
      '"The Lord is my shepherd; I shall not want." — A fellowship rooted in the promise of God\'s faithful provision, shepherd care, and guidance.',
    image: '/504932763_10229044435436379_3992651057210061365_n.webp',
    link: '/churches/affiliate/psalms23',
    color: 'from-amber-600 to-orange-600',
    accentGradient: 'from-amber-400 via-orange-300 to-yellow-400',
    badgeColor: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
  },
  {
    name: 'CTL Calaocan Church',
    fellowship: 'Christ The Lord Fellowship',
    abbreviation: 'CTL',
    location: 'Calaocan, Aurora',
    pastor: 'Ptr. Sonny Boy',
    established: 'Affiliate',
    description:
      'Proclaiming the Lordship of Christ across Aurora, establishing a community of faith, passionate worship, and lifelong transformation.',
    image: '/600226379_122193353540449557_1592564097436516824_n.webp',
    link: '/churches/affiliate/ctl/calaocan',
    color: 'from-blue-600 to-indigo-600',
    accentGradient: 'from-blue-400 via-indigo-300 to-purple-400',
    badgeColor: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
  },
  {
    name: 'CTL Toytoyan Church',
    fellowship: 'Christ The Lord Fellowship',
    abbreviation: 'CTL',
    location: 'Toytoyan, Aurora',
    pastor: 'Ptra. Merly',
    established: 'Affiliate',
    description:
      'Empowering believers and families in Toytoyan through biblical teaching, prayer ministry, and compassionate service to the local community.',
    image: '/603909877_122117233605004240_7056101842348380722_n.webp',
    link: '/churches/affiliate/ctl/toytoyan',
    color: 'from-indigo-600 to-purple-600',
    accentGradient: 'from-indigo-400 via-purple-300 to-pink-400',
    badgeColor: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
  },
  {
    name: 'CTL Borlongan Church',
    fellowship: 'Christ The Lord Fellowship',
    abbreviation: 'CTL',
    location: 'Borlongan, Dipaculao, Aurora',
    pastor: 'Ptr. Teodoro',
    established: 'Affiliate',
    description:
      'Steadfast in sharing the transforming Gospel of Jesus Christ to Dipaculao and establishing lasting spiritual foundations.',
    image: '/teodoro1.webp',
    link: '/churches/affiliate/ctl/borlongan',
    color: 'from-sky-600 to-blue-600',
    accentGradient: 'from-sky-400 via-blue-300 to-indigo-400',
    badgeColor: 'bg-sky-500/10 border-sky-500/20 text-sky-300',
  },
  {
    name: 'CTL Baler Church',
    fellowship: 'Christ The Lord Fellowship',
    abbreviation: 'CTL',
    location: 'Baler, Aurora',
    pastor: 'Ptr. Joseph',
    established: 'Affiliate',
    description:
      'Bringing the light of Christ to Baler with vibrant youth ministry, faithful pastoral leadership, and dynamic evangelistic outreach.',
    image: '/501169598_10228891022641155_7598878957010397695_n.webp',
    link: '/churches/affiliate/ctl/baler',
    color: 'from-violet-600 to-purple-600',
    accentGradient: 'from-violet-400 via-purple-300 to-pink-400',
    badgeColor: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
  },
];

export function OurChurchesPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'associate' | 'affiliate'>(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('tab=affiliate')) {
      return 'affiliate';
    }
    return 'associate';
  });

  useEffect(() => {
    if (location.search.includes('tab=affiliate')) {
      setActiveTab('affiliate');
    }
  }, [location.search]);

  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    damping: 0.88
  });
  return (
    <div className="w-full min-h-screen bg-dark-premium text-slate-100">
      <Navbar />
      <BackButton to="/about" label="Back to About" />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[100px]" />
          
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500 rounded-full blur-[100px]" />
          
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
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
            }}>
            
            <motion.div
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1
              }}
              transition={{
                duration: 0.6,
                delay: 0.2
              }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-full mb-8 text-blue-400">
              
              <ChurchIcon className="w-5 h-5" />
              <span className="font-semibold text-xs tracking-widest uppercase font-display">
                Our Churches
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight font-display">
              Many Communities,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-300">
                One Mission
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Discover our network of vibrant churches and affiliate
              fellowships, each uniquely serving their community while united in
              faith and purpose
            </p>
            <motion.a
              href="#churches"
              data-cursor-text="DISCOVER"
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-950 font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl text-lg font-display">
              
              <span>Explore Our Churches</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60">
          
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              
            </svg>
          </div>
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* Tab Navigation                               */}
      {/* ============================================ */}
      <div
        id="churches"
        className="sticky top-14 md:top-0 z-30 bg-slate-950/90 backdrop-blur-xl border-b border-white/10">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center">
            <button
              onClick={() => setActiveTab('associate')}
              className="relative px-4 sm:px-8 py-3.5 sm:py-5 text-xs sm:text-base font-semibold transition-colors duration-300">
              
              <div
                className={`flex items-center gap-1.5 sm:gap-2.5 ${activeTab === 'associate' ? 'text-blue-400' : 'text-slate-400 hover:text-slate-200'}`}>
                
                <ChurchIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-display">Associate Churches</span>
              </div>
              {activeTab === 'associate' &&
              <motion.div
                layoutId="churchTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30
                }} />

              }
            </button>
            <button
              onClick={() => setActiveTab('affiliate')}
              className="relative px-4 sm:px-8 py-3.5 sm:py-5 text-xs sm:text-base font-semibold transition-colors duration-300">
              
              <div
                className={`flex items-center gap-1.5 sm:gap-2.5 ${activeTab === 'affiliate' ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-200'}`}>
                
                <GlobeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-display">Affiliate Churches</span>
              </div>
              {activeTab === 'affiliate' &&
              <motion.div
                layoutId="churchTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30
                }} />

              }
            </button>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* Tab Content                                  */}
      {/* ============================================ */}
      <AnimatePresence mode="wait">
        {activeTab === 'associate' ?
        <motion.div
          key="associate"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 0.4
          }}>
                   {/* Associate Churches Section */}
            <section className="py-32 px-6 md:px-12 lg:px-16 bg-slate-900/40 relative overflow-hidden">
              {/* Ambient glow blobs */}
              <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none animate-glow-slow" />
              <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none animate-glow-slower" />

              <div className="max-w-[1400px] mx-auto relative z-10">
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
                className="text-center mb-24">
                
                  <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-full mb-6 text-blue-400">
                    <ChurchIcon className="w-5 h-5" />
                    <span className="font-semibold text-xs tracking-widest uppercase font-display">
                      Associate Churches
                    </span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                    Building{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                      Communities
                    </span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                    Each church uniquely serving their community with excellence
                    and love
                  </p>
                </motion.div>

                {/* Mother Church */}
                <motion.div
                initial={{
                  opacity: 0,
                  y: 50
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
                className="mb-32">
                
                  <Link
                  to={motherChurch.link}
                  data-cursor-text="VISIT"
                  className="group block grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                    <div className="lg:col-span-6 relative">
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/5">
                        <img
                        src={motherChurch.image}
                        alt={motherChurch.name}
                        className="w-full h-[280px] sm:h-[380px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
                      
                        <div
                        className={`absolute inset-0 bg-gradient-to-t ${motherChurch.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg flex items-center gap-2 font-display text-xs sm:text-sm tracking-wide">
                            <StarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Mother Church</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -top-4 -right-2 sm:-top-8 sm:-right-8">
                        <div
                        className={`w-16 h-16 sm:w-28 sm:h-28 bg-gradient-to-br ${motherChurch.color} rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500 border border-white/10`}>
                        
                          <ChurchIcon className="w-8 h-8 sm:w-14 sm:h-14 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-6">
                      <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full text-amber-300">
                          <CalendarIcon className="w-4 h-4" />
                          <span className="font-semibold text-sm">
                            Established {motherChurch.established}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 transition-all duration-300 font-display">
                            {motherChurch.name}
                          </h3>
                          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mb-6 rounded-full" />
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <MapPinIcon className="w-5 h-5 text-amber-400" />
                          <span className="text-lg">
                            {motherChurch.location}
                          </span>
                        </div>
                        <p className="text-xl text-slate-300 leading-relaxed font-light">
                          {motherChurch.description}
                        </p>
                        <div className="inline-flex items-center gap-3 text-amber-400 font-bold text-lg group-hover:gap-4 transition-all duration-300 pt-4 font-display">
                          <span>Learn More</span>
                          <ArrowRightIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Other Churches */}
                <div className="space-y-32">
                  {churches.map((church, index) =>
                <motion.div
                  key={church.name}
                  initial={{
                    opacity: 0,
                    y: 50
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1
                  }}
                  viewport={{
                    once: true
                  }}>
                  
                      <Link
                    to={church.link}
                    data-cursor-text="VISIT"
                    className="group block grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                        <div
                      className={`lg:col-span-6 relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                      
                          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/5">
                            <img
                          src={church.image}
                          alt={church.name}
                          className="w-full h-[280px] sm:h-[380px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
                        
                            <div
                          className={`absolute inset-0 bg-gradient-to-t ${church.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                          style={{
                            marginTop: '1px',
                            marginBottom: '1px'
                          }} />
                        
                          </div>
                          <div
                        className={`absolute -top-4 ${index % 2 === 1 ? '-left-2 sm:-left-8' : '-right-2 sm:-right-8'} sm:-top-8`}>
                        
                            <div
                          className={`w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br ${church.color} rounded-2xl shadow-2xl flex items-center justify-center transform ${index % 2 === 1 ? '-rotate-12' : 'rotate-12'} group-hover:rotate-0 transition-transform duration-500 border border-white/10`}>
                          
                              <ChurchIcon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                            </div>
                          </div>
                        </div>
                        <div
                      className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                      
                          <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-300">
                              <CalendarIcon className="w-4 h-4" />
                              <span className="font-semibold text-sm">
                                Established {church.established}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 font-display">
                                {church.name}
                              </h3>
                              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full" />
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                              <MapPinIcon className="w-5 h-5 text-blue-400" />
                              <span className="text-lg">{church.location}</span>
                            </div>
                            <p className="text-xl text-slate-300 leading-relaxed font-light">
                              {church.description}
                            </p>
                            <div className="inline-flex items-center gap-3 text-blue-400 font-bold text-lg group-hover:gap-4 transition-all duration-300 pt-4 font-display">
                              <span>Learn More</span>
                              <ArrowRightIcon className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                )}
                </div>
              </div>
            </section>
          </motion.div> :

        <motion.div
          key="affiliate"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 0.4
          }}>
          
            {/* Affiliate Churches Section */}
            <section className="py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-slate-900/40 relative overflow-hidden">
              {/* Ambient glow blobs */}
              <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none animate-glow-slow" />
              <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-[120px] pointer-events-none animate-glow-slower" />

              <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Section Header */}
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
                className="text-center mb-24">
                
                  <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-full mb-6 text-emerald-400">
                    <GlobeIcon className="w-5 h-5" />
                    <span className="font-semibold text-xs tracking-widest uppercase font-display">
                      Affiliate Churches
                    </span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                    Our{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                      Partner
                    </span>{' '}
                    Churches
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                    Fellowships and congregations united with GEFMI in spreading the Gospel across provinces
                  </p>
                </motion.div>

                {/* Alternating Affiliate Church Cards */}
                <div className="space-y-32">
                  {affiliateChurches.map((church, index) =>
                <motion.div
                  key={church.name}
                  initial={{
                    opacity: 0,
                    y: 50
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08
                  }}
                  viewport={{
                    once: true
                  }}>
                  
                      <Link
                        to={church.link}
                        onClick={() => {
                          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                          document.documentElement.scrollTop = 0;
                          document.body.scrollTop = 0;
                        }}
                        data-cursor-text="VISIT"
                        className="group block grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                      >
                    
                        <div
                      className={`lg:col-span-6 relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                      
                          {church.name === 'LHGCF Putlan Church' ? (
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/5">
                              <img
                                src={church.image}
                                alt={church.name}
                                className="w-full h-[280px] sm:h-[380px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div
                                className={`absolute inset-0 bg-gradient-to-t ${church.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                                style={{
                                  marginTop: '1px',
                                  marginBottom: '1px'
                                }}
                              />
                            </div>
                          ) : (
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 w-full h-[280px] sm:h-[380px] md:h-[450px] flex flex-col items-center justify-center p-6 text-center group-hover:border-emerald-500/30 transition-colors duration-500">
                              {/* Ambient Glow */}
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${church.color} opacity-15 group-hover:opacity-25 blur-2xl transition-opacity duration-700`}
                              />
                              {/* Grid lines */}
                              <div
                                className="absolute inset-0 opacity-[0.04]"
                                style={{
                                  backgroundImage:
                                    'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
                                  backgroundSize: '24px 24px'
                                }}
                              />
                              <div className="relative z-10 flex flex-col items-center space-y-4">
                                {/* Animated Icon Circle */}
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                                  <div
                                    className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-spin"
                                    style={{ animationDuration: '20s' }}
                                  />
                                  <div
                                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${church.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                                  >
                                    <ChurchIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                  </div>
                                </div>
                                <div className="space-y-1.5">
                                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-bold tracking-wider uppercase">
                                    <SparklesIcon
                                      className="w-3 h-3 animate-spin"
                                      style={{ animationDuration: '6s' }}
                                    />
                                    Photo Coming Soon
                                  </div>
                                  <div className="text-xs text-slate-400 font-medium">
                                    Digital Media In Production
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          <div
                        className={`absolute -top-4 ${index % 2 === 1 ? '-left-2 sm:-left-8' : '-right-2 sm:-right-8'} sm:-top-8`}>
                        
                            <div
                          className={`w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br ${church.color} rounded-2xl shadow-2xl flex items-center justify-center transform ${index % 2 === 1 ? '-rotate-12' : 'rotate-12'} group-hover:rotate-0 transition-transform duration-500 border border-white/10`}>
                          
                              <ChurchIcon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                            </div>
                          </div>
                        </div>
                        <div
                      className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                      
                          <div className="space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                              <div className={`inline-flex items-center gap-2 border px-4 py-2 rounded-full ${church.badgeColor}`}>
                                <GlobeIcon className="w-4 h-4" />
                                <span className="font-semibold text-xs tracking-wider uppercase font-display">
                                  {church.abbreviation}
                                </span>
                              </div>
                              <span className="text-xs text-slate-400 font-medium tracking-wide">
                                {church.fellowship}
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-300">
                                <SparklesIcon className="w-3 h-3" />
                                Coming Soon
                              </span>
                            </div>
                            <div>
                              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300 font-display">
                                {church.name}
                              </h3>
                              <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mb-6 rounded-full" />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-slate-400">
                              <div className="flex items-center gap-2">
                                <MapPinIcon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <span className="text-base sm:text-lg">{church.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <UserIcon className="w-4 h-4 text-teal-400 flex-shrink-0" />
                                <span className="text-sm sm:text-base text-slate-300">{church.pastor}</span>
                              </div>
                            </div>
                            <p className="text-xl text-slate-300 leading-relaxed font-light">
                              {church.description}
                            </p>
                            <div className="pt-4">
                              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-bold text-base group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-lg font-display">
                                <SparklesIcon className="w-4 h-4 text-amber-300 group-hover:text-slate-950" />
                                <span>Preview Church & Coming Soon</span>
                                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                )}
                </div>

                {/* Stats bar */}
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
                className="mt-28 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                
                  {[
                {
                  label: 'Total Affiliate Churches',
                  value: affiliateChurches.length,
                  gradient: 'from-emerald-400 to-teal-400'
                },
                {
                  label: 'Fellowships',
                  value: 3,
                  gradient: 'from-blue-400 to-indigo-400'
                },
                {
                  label: 'Provinces Reached',
                  value: 3,
                  gradient: 'from-amber-400 to-orange-400'
                }].
                map((stat, i) =>
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  
                      <div
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                    
                        {stat.value}
                      </div>
                      <div className="text-gray-500 text-sm font-medium tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                )}
                </motion.div>
              </div>
            </section>
          </motion.div>
        }
      </AnimatePresence>

      {/* Sponsorship CTA */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
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
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
              <HeartIcon className="w-5 h-5 text-pink-300" />
              <span className="text-white font-semibold tracking-wide">
                Partner With Us
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Help Us Build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                More Churches
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              Your sponsorship empowers us to plant new churches, strengthen
              existing congregations, and reach more communities with the
              transforming message of hope. Together, we can make an eternal
              impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/sponsorship"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="group inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-900 font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl text-lg">
                
                <HeartIcon className="w-6 h-6" />
                <span>Sponsor Now</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 text-lg">
                
                <UsersIcon className="w-6 h-6" />
                <span>Get Involved</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

}