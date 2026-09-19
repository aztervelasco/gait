import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { SparklesIcon, UsersIcon, HeartIcon, ArrowRightIcon } from 'lucide-react';

const ministries = [
  {
    title: 'Youth Camps',
    description:
      'Empowering the next generation through dynamic camps filled with worship, teaching, fellowship, and life-changing encounters with God. Our youth camps create lasting memories and spiritual breakthroughs.',
    image: '/youth_camp.webp',
    icon: SparklesIcon,
    gradient: 'from-blue-600 to-cyan-500',
    glowColor: 'bg-blue-500/10',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    stats: [
      { label: 'Annual Camps', value: '4+' },
      { label: 'Youth Reached', value: '200+' },
      { label: 'Leaders Trained', value: '25+' },
    ],
  },
  {
    title: "Men's & Women's Fellowship",
    description:
      "Building strong spiritual communities through gender-specific fellowships that provide support, accountability, and growth. We create safe spaces for men and women to pursue God's heart together.",
    image: '/womans_fellowship.webp',
    icon: UsersIcon,
    gradient: 'from-purple-600 to-pink-500',
    glowColor: 'bg-purple-500/10',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    stats: [
      { label: 'Active Groups', value: '8' },
      { label: 'Members', value: '150+' },
      { label: 'Monthly Meetings', value: '12+' },
    ],
  },
  {
    title: "Children's Ministry",
    description:
      "Nurturing young hearts with age-appropriate biblical teaching, engaging activities, and a loving environment. Through our Vacation Bible School and weekly programs, children discover God's love.",
    image: '/dvbs.webp',
    icon: HeartIcon,
    gradient: 'from-pink-600 to-rose-500',
    glowColor: 'bg-pink-500/10',
    accentColor: 'text-pink-400',
    borderColor: 'border-pink-500/20',
    stats: [
      { label: 'Children Served', value: '180+' },
      { label: 'Volunteers', value: '30+' },
      { label: 'Programs', value: '6+' },
    ],
  },
];

export function MinistryPage() {
  return (
    <div className="w-full min-h-screen bg-dark-premium text-slate-100">
      <Navbar />
      <BackButton to="/" label="Back to Home" />

      {/* ============ Hero ============ */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-600 rounded-full blur-[130px] opacity-10"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-600 rounded-full blur-[130px] opacity-10"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-full mb-8 text-blue-400"
            >
              <SparklesIcon className="w-5 h-5" />
              <span className="font-semibold text-xs tracking-widest uppercase font-display">
                Our Ministries
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight font-display">
              Transforming Lives,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-300">
                Every Generation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Through dedicated programs and passionate leadership, we minister
              to every age with excellence and love
            </p>

            <motion.a
              href="#ministries"
              data-cursor-text="EXPLORE"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-950 font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl text-lg font-display"
            >
              <span>Explore Ministries</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* ============ Ministries Section ============ */}
      <section
        id="ministries"
        className="relative py-32 px-6 md:px-12 lg:px-16 bg-slate-900/40 overflow-hidden"
      >
        {/* Ambient blobs */}
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none animate-glow-slow" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none animate-glow-slower" />

        <div className="max-w-[1600px] mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-full mb-6 text-blue-400">
              <SparklesIcon className="w-5 h-5" />
              <span className="font-semibold text-xs tracking-widest uppercase font-display">
                Active Ministries
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
              Serving{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Every Generation
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Through dedicated programs and passionate leadership, we minister
              to every generation with excellence and love
            </p>
          </motion.div>

          {/* Ministry Cards – Alternating */}
          <div className="space-y-32">
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon;
              const isReversed = index % 2 === 1;
              return (
                <motion.div
                  key={ministry.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Image */}
                  <div
                    className={`lg:col-span-6 relative group ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/5">
                      <img
                        src={ministry.image}
                        alt={ministry.title}
                        className="w-full h-[280px] sm:h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${ministry.gradient} opacity-20 group-hover:opacity-35 transition-opacity duration-500`} />
                    </div>
                    {/* Floating icon */}
                    <div className={`absolute -top-4 ${isReversed ? '-left-2 sm:-left-8' : '-right-2 sm:-right-8'} sm:-top-8`}>
                      <div
                        className={`w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br ${ministry.gradient} rounded-2xl shadow-2xl flex items-center justify-center transform ${isReversed ? '-rotate-12' : 'rotate-12'} group-hover:rotate-0 transition-transform duration-500 border border-white/10`}
                      >
                        <IconComponent className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="space-y-6 sm:space-y-8">
                      <div>
                        <div className={`inline-flex items-center gap-2 ${ministry.glowColor} border ${ministry.borderColor} px-4 py-2 rounded-full mb-4 ${ministry.accentColor}`}>
                          <IconComponent className="w-4 h-4" />
                          <span className="font-semibold text-xs tracking-widest uppercase">
                            Ministry Program
                          </span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight font-display">
                          {ministry.title}
                        </h3>
                        <div className={`w-24 h-1.5 bg-gradient-to-r ${ministry.gradient} mb-6 rounded-full`} />
                      </div>
                      <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
                        {ministry.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        {ministry.stats.map((stat, si) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: si * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/8 hover:border-white/20 transition-all duration-300"
                          >
                            <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${ministry.gradient} bg-clip-text text-transparent mb-1`}>
                              {stat.value}
                            </div>
                            <div className="text-xs text-slate-400 font-medium tracking-wide">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-32"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900" />
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
              </div>
              <div className="relative z-10 p-12 md:p-20">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8 text-white">
                  <HeartIcon className="w-5 h-5 text-pink-300" />
                  <span className="font-semibold tracking-wide">Get Involved</span>
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
                  Join Our Ministry Family
                </h3>
                <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Whether you are looking to serve, grow, or connect, there is a
                  place for you in our ministry family
                </p>
                <motion.a
                  href="/contact"
                  data-cursor-text="CONNECT"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-900 font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-2xl text-lg font-display"
                >
                  <span>Get Involved</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}