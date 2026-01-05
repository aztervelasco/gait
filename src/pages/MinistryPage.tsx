import React, { Children, memo } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { SparklesIcon, UsersIcon, HeartIcon } from 'lucide-react';
const ministries = [{
  title: 'Youth Camps',
  description: 'Empowering the next generation through dynamic camps filled with worship, teaching, fellowship, and life-changing encounters with God. Our youth camps create lasting memories and spiritual breakthroughs.',
  image: "/youth_camp.jpg",
  icon: SparklesIcon,
  color: 'from-blue-600 to-blue-800',
  stats: [{
    label: 'Annual Camps',
    value: '4+'
  }, {
    label: 'Youth Reached',
    value: '200+'
  }, {
    label: 'Leaders Trained',
    value: '25+'
  }]
}, {
  title: "Men's & Women's Fellowship",
  description: "Building strong spiritual communities through gender-specific fellowships that provide support, accountability, and growth. We create safe spaces for men and women to pursue God's heart together.",
  image: "/womans_fellowship.jpg",
  icon: UsersIcon,
  color: 'from-purple-600 to-purple-800',
  stats: [{
    label: 'Active Groups',
    value: '8'
  }, {
    label: 'Members',
    value: '150+'
  }, {
    label: 'Monthly Meetings',
    value: '12+'
  }]
}, {
  title: "Children's Ministry",
  description: "Nurturing young hearts with age-appropriate biblical teaching, engaging activities, and a loving environment. Through our Vacation Bible School and weekly programs, children discover God's love.",
  image: "/dvbs.jpg",
  icon: HeartIcon,
  color: 'from-pink-600 to-pink-800',
  stats: [{
    label: 'Children Served',
    value: '180+'
  }, {
    label: 'Volunteers',
    value: '30+'
  }, {
    label: 'Programs',
    value: '6+'
  }]
}];
export function MinistryPage() {
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <BackButton to="/" label="Back to Home" />

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
              <SparklesIcon className="w-5 h-5 text-blue-300" />
              <span className="text-white font-semibold tracking-wide">
                Our Ministries
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Transforming Lives
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                Every Generation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Through dedicated programs and passionate leadership, we minister
              to every age with excellence and love
            </p>

            <motion.a href="#ministries" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-900 font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl text-lg">
              <span>Explore Our Ministries</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
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

      {/* Ministries Section - Alternating Layout */}
      <section id="ministries" className="py-32 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-[1600px] mx-auto">
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
              <SparklesIcon className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">
                Our Ministries
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Lives
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Through dedicated programs and passionate leadership, we minister
              to every generation with excellence and love
            </p>
          </motion.div>

          {/* Ministries Grid - Alternating Layout */}
          <div className="space-y-32">
            {ministries.map((ministry, index) => <motion.div key={ministry.title} initial={{
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
          }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Image Side - LEFT for first (Youth Camps), alternates after */}
                <div className={`lg:col-span-6 relative group ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img src={ministry.image} alt={ministry.title} className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${ministry.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  </div>
                  {/* Floating Icon */}
                  <div className={`absolute -top-8 ${index % 2 === 1 ? '-left-8' : '-right-8'}`}>
                    <div className={`w-28 h-28 bg-gradient-to-br ${ministry.color} rounded-2xl shadow-2xl flex items-center justify-center transform ${index % 2 === 1 ? '-rotate-12' : 'rotate-12'} group-hover:rotate-0 transition-transform duration-500`}>
                      <ministry.icon className="w-14 h-14 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Side - RIGHT for first (Youth Camps), alternates after */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        {ministry.title}
                      </h3>
                      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mb-8 rounded-full"></div>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {ministry.description}
                    </p>
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-6 pt-8">
                      {ministry.stats.map((stat, statIndex) => <motion.div key={stat.label} initial={{
                    opacity: 0,
                    scale: 0.9
                  }} whileInView={{
                    opacity: 1,
                    scale: 1
                  }} transition={{
                    duration: 0.5,
                    delay: statIndex * 0.1
                  }} viewport={{
                    once: true
                  }} className={`bg-gradient-to-br ${ministry.color} p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                          <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm text-white/90 font-medium">
                            {stat.label}
                          </div>
                        </motion.div>)}
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>

          {/* Call to Action */}
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
        }} className="text-center mt-32">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 shadow-2xl">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Join Our Ministry
              </h3>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Whether you are looking to serve, grow, or connect, there is a
                place for you in our ministry family
              </p>
              <motion.a href="/contact" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-lg text-lg">
                Get Involved
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
}