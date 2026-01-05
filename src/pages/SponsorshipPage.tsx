import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { HeartIcon, ChurchIcon, UsersIcon, GlobeIcon, SparklesIcon, ArrowRightIcon, CheckCircleIcon, TrendingUpIcon, HandHeartIcon, BuildingIcon, BookOpenIcon, ZapIcon } from 'lucide-react';
const givingOptions = [{
  icon: BuildingIcon,
  title: 'Church Building Fund',
  description: 'Support the construction and renovation of church facilities to create welcoming spaces for worship and community.',
  impact: 'Your gift helps provide a permanent home for growing congregations.',
  color: 'from-blue-600 to-cyan-600',
  stats: {
    value: '4',
    label: 'Churches Built'
  }
}, {
  icon: UsersIcon,
  title: 'Ministry Support',
  description: 'Fund essential ministries, including youth programs, worship, outreach, and discipleship initiatives.',
  impact: 'Enable life-changing programs that impact hundreds of lives.',
  color: 'from-purple-600 to-pink-600',
  stats: {
    value: '500+',
    label: 'Lives Impacted'
  }
}, {
  icon: GlobeIcon,
  title: 'Church Planting',
  description: 'Partner with us to establish new churches and reach unreached communities with the Gospel.',
  impact: 'Plant seeds of faith that will bear fruit for generations.',
  color: 'from-emerald-600 to-teal-600',
  stats: {
    value: '3',
    label: 'New Churches'
  }
}, {
  icon: HeartIcon,
  title: 'General Fund',
  description: 'Support day-to-day operations, pastoral care, and wherever the need is greatest in our ministry.',
  impact: 'Provide flexible resources for immediate ministry needs.',
  color: 'from-amber-600 to-orange-600',
  stats: {
    value: '100%',
    label: 'Transparency'
  }
}];
const impactStats = [{
  icon: ChurchIcon,
  value: '4',
  label: 'Active Churches',
  color: 'blue'
}, {
  icon: UsersIcon,
  value: '500+',
  label: 'Members Served',
  color: 'purple'
}, {
  icon: BookOpenIcon,
  value: '200+',
  label: 'Youth Reached',
  color: 'emerald'
}, {
  icon: HandHeartIcon,
  value: '50+',
  label: 'Volunteers',
  color: 'amber'
}];
const howToGive = [{
  step: '1',
  title: 'Choose Your Impact',
  description: 'Select the area where you want to make a difference',
  icon: HeartIcon
}, {
  step: '2',
  title: 'Connect With Us',
  description: 'Reach out via email, phone, or visit us in person',
  icon: UsersIcon
}, {
  step: '3',
  title: 'Make Your Gift',
  description: 'Complete your donation and receive confirmation',
  icon: CheckCircleIcon
}, {
  step: '4',
  title: 'See the Impact',
  description: 'Receive updates on how your gift is transforming lives',
  icon: SparklesIcon
}];
export function SponsorshipPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <BackButton to="/" label="Back to Home" />

      {/* Premium Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
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
            <motion.div animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }} transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500 rounded-full blur-3xl" />
          </div>
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
              <SparklesIcon className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold tracking-wide">
                Make an Eternal Impact
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Partner With Us to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                Transform Lives
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Your generous support empowers our mission to spread the Gospel,
              plant churches, and serve communities across Nueva Vizcaya and
              beyond
            </p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#giving-options" className="group inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-900 font-bold py-5 px-10 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl">
                <HeartIcon className="w-6 h-6" />
                <span className="text-lg">Sponsor Now</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#how-to-give" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 text-lg">
                <span>Learn More</span>
              </a>
            </motion.div>
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

      {/* Impact Statistics */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
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
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how your partnership is making a real difference
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Giving Options - Premium Cards */}
      <section id="giving-options" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
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
        }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
              <HeartIcon className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">
                Sponsorship Opportunities
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Impact Area
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every gift makes a difference. Select the area where you want to
              create lasting change
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {givingOptions.map((option, index) => <motion.div key={option.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)} className="group relative">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-500`} />

                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent">
                  {/* Header with Icon */}
                  <div className={`relative bg-gradient-to-br ${option.color} p-8 text-white overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl" />
                    </div>
                    <div className="relative flex items-start justify-between">
                      <div className="flex-1">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                          <option.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">
                          {option.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold mb-1">
                          {option.stats.value}
                        </div>
                        <div className="text-sm opacity-90">
                          {option.stats.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {option.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <TrendingUpIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-1">
                            Your Impact
                          </p>
                          <p className="text-sm text-gray-600">
                            {option.impact}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.a href="#contact" whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} className={`group/btn w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r ${option.color} hover:shadow-xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300`}>
                      <span>Sponsor This Area</span>
                      <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* How to Give - Step by Step */}
      <section id="how-to-give" className="py-24 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
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
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Give
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Making your gift is simple and secure. Follow these easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToGive.map((step, index) => <motion.div key={step.step} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="relative">
                {/* Connector Line */}
                {index < howToGive.length - 1 && <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 -translate-x-1/2" />}

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Contact Section - Premium */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
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
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Contact us to discuss partnership opportunities and learn how your
              gift can transform lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-medium mb-1">
                        Email
                      </p>
                      <a href="mailto:00ggefmi@gmail.com" className="text-white font-semibold hover:text-blue-300 transition-colors">
                        00ggefmi@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-purple-200 text-sm font-medium mb-1">
                        Phone
                      </p>
                      <a href="tel:+639503536578" className="text-white font-semibold hover:text-purple-300 transition-colors block">
                        +63 950 353 6578
                      </a>
                      <a href="tel:+639755733120" className="text-white font-semibold hover:text-purple-300 transition-colors block">
                        +63 975 573 3120
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-pink-200 text-sm font-medium mb-1">
                        Address
                      </p>
                      <p className="text-white font-semibold">
                        Bantinan Evangelical Church
                        <br />
                        Bario Site, Bantinan
                        <br />
                        Santa Fe, Nueva Vizcaya
                        <br />
                        Philippines
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-6">
                  Why Partner With Us
                </h4>
                <div className="space-y-4">
                  {[{
                  icon: CheckCircleIcon,
                  text: '100% Transparent Use of Funds'
                }, {
                  icon: CheckCircleIcon,
                  text: 'Regular Impact Updates'
                }, {
                  icon: CheckCircleIcon,
                  text: 'Tax-Deductible Donations'
                }, {
                  icon: CheckCircleIcon,
                  text: 'Direct Community Impact'
                }].map((item, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }} viewport={{
                  once: true
                }} className="flex items-center gap-3">
                      <item.icon className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span className="text-white font-medium">
                        {item.text}
                      </span>
                    </motion.div>)}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Your Name
                    </label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email Address
                    </label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Phone Number (Optional)
                    </label>
                    <input type="tel" placeholder="+63 XXX XXX XXXX" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea rows={5} placeholder="Tell us about your interest in partnering with GEFMI..." className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"></textarea>
                  </div>
                  <motion.button type="submit" whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                    <span>Send Message</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial / Scripture */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
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
        }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-50" />
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 md:p-16 text-center border border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <BookOpenIcon className="w-10 h-10 text-white" />
              </div>
              <blockquote className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
                "Each of you should give what you have decided in your heart to
                give, not reluctantly or under compulsion, for God loves a
                cheerful giver."
              </blockquote>
              <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                2 Corinthians 9:7
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
}