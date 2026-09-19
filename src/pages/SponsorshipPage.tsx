import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import {
  HeartIcon,
  ChurchIcon,
  UsersIcon,
  GlobeIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  HandHeartIcon,
  BuildingIcon,
  BookOpenIcon,
  ZapIcon,
} from 'lucide-react';

const givingOptions = [
  {
    icon: BuildingIcon,
    title: 'Church Building Fund',
    description:
      'Support the construction and renovation of church facilities to create welcoming spaces for worship and community.',
    impact: 'Your gift helps provide a permanent home for growing congregations.',
    gradient: 'from-blue-600 to-cyan-600',
    glow: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    stats: { value: '4', label: 'Churches Built' },
  },
  {
    icon: UsersIcon,
    title: 'Ministry Support',
    description:
      'Fund essential ministries, including youth programs, worship, outreach, and discipleship initiatives.',
    impact: 'Enable life-changing programs that impact hundreds of lives.',
    gradient: 'from-purple-600 to-pink-600',
    glow: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    stats: { value: '500+', label: 'Lives Impacted' },
  },
  {
    icon: GlobeIcon,
    title: 'Church Planting',
    description:
      'Partner with us to establish new churches and reach unreached communities with the Gospel.',
    impact: 'Plant seeds of faith that will bear fruit for generations.',
    gradient: 'from-emerald-600 to-teal-600',
    glow: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    stats: { value: '3', label: 'New Churches' },
  },
  {
    icon: HeartIcon,
    title: 'General Fund',
    description:
      'Support day-to-day operations, pastoral care, and wherever the need is greatest in our ministry.',
    impact: 'Provide flexible resources for immediate ministry needs.',
    gradient: 'from-amber-600 to-orange-600',
    glow: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    stats: { value: '100%', label: 'Transparency' },
  },
];

const impactStats = [
  { icon: ChurchIcon, value: '4', label: 'Active Churches', gradient: 'from-blue-400 to-cyan-400' },
  { icon: UsersIcon, value: '500+', label: 'Members Served', gradient: 'from-purple-400 to-pink-400' },
  { icon: BookOpenIcon, value: '200+', label: 'Youth Reached', gradient: 'from-emerald-400 to-teal-400' },
  { icon: HandHeartIcon, value: '50+', label: 'Volunteers', gradient: 'from-amber-400 to-orange-400' },
];

const howToGive = [
  { step: '1', title: 'Choose Your Impact', description: 'Select the area where you want to make a difference', icon: HeartIcon },
  { step: '2', title: 'Connect With Us', description: 'Reach out via email, phone, or visit us in person', icon: UsersIcon },
  { step: '3', title: 'Make Your Gift', description: 'Complete your donation and receive confirmation', icon: CheckCircleIcon },
  { step: '4', title: 'See the Impact', description: 'Receive updates on how your gift is transforming lives', icon: SparklesIcon },
];

export function SponsorshipPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-dark-premium text-slate-100">
      <Navbar />
      <BackButton to="/" label="Back to Home" />

      {/* ============ Hero ============ */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-10"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500 rounded-full blur-[120px] opacity-10"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-10"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-6 py-3 rounded-full mb-8 text-yellow-400"
            >
              <SparklesIcon className="w-5 h-5" />
              <span className="font-semibold text-xs tracking-widest uppercase font-display">
                Make an Eternal Impact
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight font-display">
              Partner With Us to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                Transform Lives
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Your generous support empowers our mission to spread the Gospel,
              plant churches, and serve communities across Nueva Vizcaya and beyond
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#giving-options"
                data-cursor-text="SPONSOR"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-950 font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl text-lg font-display"
              >
                <HeartIcon className="w-6 h-6" />
                <span>Sponsor Now</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="#how-to-give"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 text-lg font-display"
              >
                <span>Learn More</span>
              </motion.a>
            </motion.div>
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

      {/* ============ Impact Statistics ============ */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Impact
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              See how your partnership is making a real difference
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/8 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} bg-opacity-20 rounded-xl flex items-center justify-center mb-4 mx-auto border border-white/10`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-400 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Giving Options ============ */}
      <section id="giving-options" className="py-24 px-6 bg-slate-900/40 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none animate-glow-slow" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none animate-glow-slower" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 px-6 py-3 rounded-full mb-6 text-pink-400">
              <HeartIcon className="w-5 h-5" />
              <span className="font-semibold text-xs tracking-widest uppercase font-display">
                Sponsorship Opportunities
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Impact Area
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Every gift makes a difference. Select the area where you want to
              create lasting change
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {givingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-2xl transition-all duration-500`} />

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-3xl overflow-hidden transition-all duration-500">
                  {/* Header */}
                  <div className={`relative bg-gradient-to-br ${option.gradient} p-8 text-white overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl" />
                    </div>
                    <div className="relative flex items-start justify-between">
                      <div className="flex-1">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                          <option.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-1 font-display">{option.title}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold mb-1">{option.stats.value}</div>
                        <div className="text-sm opacity-90">{option.stats.label}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-slate-300 leading-relaxed mb-6 text-lg font-light">
                      {option.description}
                    </p>

                    {/* Impact Badge */}
                    <div className={`${option.glow} border ${option.border} rounded-2xl p-5 mb-6 backdrop-blur-sm`}>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <TrendingUpIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white mb-1">Your Impact</p>
                          <p className="text-sm text-slate-400">{option.impact}</p>
                        </div>
                      </div>
                    </div>

                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group/btn w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r ${option.gradient} hover:shadow-xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 font-display`}
                    >
                      <span>Sponsor This Area</span>
                      <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ How to Give ============ */}
      <section id="how-to-give" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
              How to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Give
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Making your gift is simple. Follow these easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToGive.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {index < howToGive.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 -translate-x-1/2" />
                )}

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/8 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 text-center font-display">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-center leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Contact Section ============ */}
      <section id="contact" className="py-24 px-6 bg-slate-900/40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Contact us to discuss partnership opportunities and learn how your
              gift can transform lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-display">
                  Get in Touch
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: '✉️',
                      label: 'Email',
                      content: '00ggefmi@gmail.com',
                      href: 'mailto:00ggefmi@gmail.com',
                      color: 'text-blue-300',
                    },
                    {
                      icon: '📞',
                      label: 'Phone',
                      content: '+63 950 353 6578',
                      href: 'tel:+639503536578',
                      color: 'text-purple-300',
                    },
                    {
                      icon: '📍',
                      label: 'Address',
                      content: 'Bantinan Evangelical Church, Bario Site, Bantinan, Santa Fe, Nueva Vizcaya, Philippines',
                      href: '#',
                      color: 'text-pink-300',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${item.color} mb-1`}>{item.label}</p>
                        <a
                          href={item.href}
                          className="text-white font-medium hover:text-slate-300 transition-colors"
                        >
                          {item.content}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Partner */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-6 font-display">
                  Why Partner With Us
                </h4>
                <div className="space-y-4">
                  {[
                    '100% Transparent Use of Funds',
                    'Regular Impact Updates',
                    'Tax-Deductible Donations',
                    'Direct Community Impact',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-display">
                  Send Us a Message
                </h3>
                <form className="space-y-5">
                  {[
                    { label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                    { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                    { label: 'Phone Number (Optional)', type: 'tel', placeholder: '+63 XXX XXX XXXX' },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-slate-300 font-semibold mb-2 text-sm tracking-wide">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-slate-300 font-semibold mb-2 text-sm tracking-wide">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your interest in partnering with GEFMI..."
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none backdrop-blur-sm"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3 font-display"
                  >
                    <span>Send Message</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ Scripture Quote ============ */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <BookOpenIcon className="w-10 h-10 text-white" />
              </div>
              <blockquote className="text-2xl md:text-4xl font-bold text-white mb-6 leading-relaxed font-display">
                "Each of you should give what you have decided in your heart to
                give, not reluctantly or under compulsion, for God loves a
                cheerful giver."
              </blockquote>
              <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2 Corinthians 9:7
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}