import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { ChurchIcon, MapPinIcon, UsersIcon, CalendarIcon, SparklesIcon, HeartIcon, ArrowRightIcon, StarIcon } from 'lucide-react';
// Mother Church - Featured
const motherChurch = {
  name: 'Bantinan Church',
  subtitle: 'Mother Church',
  location: 'Bantinan, Santa Fe, Nueva Vizcaya',
  established: '2015',
  description: 'Our spiritual home and the foundation of GEFMI. Where it all began with a vision to transform communities through faith. Bantinan Church serves as the mother church, nurturing new congregations and training leaders for ministry across the region.',
  image: "/old_bantinan.jpg",
  link: '/churches/bantinan',
  color: 'from-amber-600 to-orange-700'
};
// Other Churches
const churches = [{
  name: 'Beti Church',
  location: 'Beti, Nueva Vizcaya',
  established: '2016',
  description: 'A vibrant community bringing the Gospel to life through worship, fellowship, and dedicated service to the Beti community.',
  image: "/66728098_10214429552993452_5769225433216188416_n.jpg",
  link: '/churches/beti',
  color: 'from-blue-600 to-cyan-600'
}, {
  name: 'Aasin Church',
  location: 'Aasin, Nueva Vizcaya',
  established: '2017',
  description: 'Growing in faith and community, reaching families with the transforming message of hope and love.',
  image: "/aasin.jpg",
  link: '/churches/aasin',
  color: 'from-emerald-600 to-teal-600'
}, {
  name: 'Lower Kiskis Church',
  location: 'Lower Kiskis, Nueva Vizcaya',
  established: '2018',
  description: 'A welcoming congregation dedicated to building strong families and nurturing spiritual growth in the Lower Kiskis area.',
  image: "/526716262_10230208541658307_7509032496096349413_n.jpg",
  link: '/churches/lower-kiskis',
  color: 'from-purple-600 to-pink-600'
}, {
  name: 'Upper Kiskis Church',
  location: 'Upper Kiskis, Nueva Vizcaya',
  established: '2018',
  description: 'Serving the Upper Kiskis community with passionate worship, biblical teaching, and compassionate outreach.',
  image: "/kiskis.jpg",
  link: '/churches/upper-kiskis',
  color: 'from-indigo-600 to-blue-600'
}, {
  name: "Orchid's Church",
  location: "Orchid's, Nueva Vizcaya",
  established: '2019',
  description: "A flourishing congregation bringing light and hope to the Orchid's community through faithful ministry and service.",
  image: "/Tactac.jpg",
  link: '/churches/orchids',
  color: 'from-rose-600 to-red-600'
}, {
  name: 'Villaflores Church',
  location: 'Villaflores, Santa Fe, Nueva Vizcaya',
  established: '2020',
  description: 'Empowering the community with dynamic ministry and contemporary worship experiences that transform lives.',
  image: "/508570671_10229211210685656_224273478076672264_n.jpg",
  link: '/churches/villaflores',
  color: 'from-violet-600 to-purple-600'
}, {
  name: 'Timmuri Church',
  location: 'Timmuri, Santa Fe, Nueva Vizcaya',
  established: '2021',
  description: 'A growing congregation dedicated to serving the Timmuri community with faith, hope, and love.',
  image: "/504897759_10229044436556407_5521041348895701528_n.jpg",
  link: '/churches/timmuri',
  color: 'from-teal-600 to-cyan-600'
}];
export function OurChurchesPage() {
  // Enable smooth scrolling with faster, Lenis-style settings
  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    damping: 0.88
  });
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <BackButton to="/about" label="Back to About" />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }} className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl" />
          <motion.div animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }} className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
              <ChurchIcon className="w-5 h-5 text-blue-300" />
              <span className="text-white font-semibold tracking-wide">
                Our Churches
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Seven Communities,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                One Mission
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover our network of vibrant churches across Nueva Vizcaya,
              each uniquely serving their community while united in faith and
              purpose
            </p>

            <motion.a href="#churches" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-900 font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl text-lg">
              <span>Explore Our Churches</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Churches Section - Alternating Layout */}
      <section id="churches" className="py-32 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
              <ChurchIcon className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Our Churches</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Communities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each church uniquely serving their community with excellence and
              love
            </p>
          </motion.div>

          {/* Mother Church - Featured First */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="mb-32">
            <Link to={motherChurch.link} className="group block grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image Side - LEFT */}
              <div className="lg:col-span-6 relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img src={motherChurch.image} alt={motherChurch.name} className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${motherChurch.color} opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />

                  {/* Mother Church Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                      <StarIcon className="w-5 h-5" />
                      <span>Mother Church</span>
                    </div>
                  </div>
                </div>
                {/* Floating Icon */}
                <div className="absolute -top-8 -right-8">
                  <div className={`w-28 h-28 bg-gradient-to-br ${motherChurch.color} rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                    <ChurchIcon className="w-14 h-14 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Side - RIGHT */}
              <div className="lg:col-span-6">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                    <CalendarIcon className="w-4 h-4 text-amber-600" />
                    <span className="text-amber-800 font-semibold text-sm">
                      Established {motherChurch.established}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                      {motherChurch.name}
                    </h3>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-amber-600 to-orange-600 mb-6 rounded-full" />
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPinIcon className="w-5 h-5" />
                    <span className="text-lg">{motherChurch.location}</span>
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed">
                    {motherChurch.description}
                  </p>

                  <div className="inline-flex items-center gap-3 text-amber-600 font-bold text-lg group-hover:gap-4 transition-all duration-300 pt-4">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Other Churches - Alternating Layout */}
          <div className="space-y-32">
            {churches.map((church, index) => <motion.div key={church.name} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <Link to={church.link} className="group block grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Image Side - Alternates */}
                  <div className={`lg:col-span-6 relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <img src={church.image} alt={church.name} className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${church.color} opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />
                    </div>
                    {/* Floating Icon */}
                    <div className={`absolute -top-8 ${index % 2 === 1 ? '-left-8' : '-right-8'}`}>
                      <div className={`w-24 h-24 bg-gradient-to-br ${church.color} rounded-2xl shadow-2xl flex items-center justify-center transform ${index % 2 === 1 ? '-rotate-12' : 'rotate-12'} group-hover:rotate-0 transition-transform duration-500`}>
                        <ChurchIcon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Side - Alternates */}
                  <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                        <CalendarIcon className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-800 font-semibold text-sm">
                          Established {church.established}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {church.name}
                        </h3>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mb-6 rounded-full" />
                      </div>

                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPinIcon className="w-5 h-5" />
                        <span className="text-lg">{church.location}</span>
                      </div>

                      <p className="text-xl text-gray-700 leading-relaxed">
                        {church.description}
                      </p>

                      <div className="inline-flex items-center gap-3 text-blue-600 font-bold text-lg group-hover:gap-4 transition-all duration-300 pt-4">
                        <span>Learn More</span>
                        <ArrowRightIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center">
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
              <motion.a href="/sponsorship" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="group inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-900 font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl text-lg">
                <HeartIcon className="w-6 h-6" />
                <span>Sponsor Now</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              <motion.a href="/contact" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 text-lg">
                <UsersIcon className="w-6 h-6" />
                <span>Get Involved</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
}