import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  MapPinIcon,
  ClockIcon,
  UsersIcon,
  TrendingUpIcon } from
'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
export function SantaFeChurch() {
  useSmoothScroll({
    lerp: 0.08,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    momentum: 0.92,
    friction: 0.95
  });
  return (
    <div className="w-full min-h-screen bg-dark-premium text-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
          alt="Santa Fe Church"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
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
              duration: 1
            }}
            className="text-center text-white px-6">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Santa Fe Church
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-2">Est. 2021</p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              A Growing Fellowship of Hope and Transformation
            </p>
          </motion.div>
        </div>
        <Link
          to="/"
          className="absolute top-24 left-6 md:left-12 z-10 flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300">
          
          <ArrowLeftIcon size={20} />
          <span>Back to Home</span>
        </Link>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-900/40 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Story</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Santa Fe Church is our newest and fastest-growing congregation,
                planted in 2021 with a heart to reach the Santa Fe community
                with the Gospel. Despite being young, we've already seen God do
                incredible things.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Our church is marked by passionate worship, practical Bible
                teaching, and a genuine love for people. We're building a
                community where everyone—from children to seniors—can encounter
                Jesus and discover their purpose.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With a focus on outreach, discipleship, and community service,
                we're committed to being a light in Santa Fe and beyond. Every
                week, new people are discovering that they have a home with us.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-display">Quick Facts</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Location</p>
                      <p className="text-slate-400">Santa Fe, Nueva Vizcaya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Service Times</p>
                      <p className="text-slate-400">Sunday: 9:30 AM & 5:30 PM</p>
                      <p className="text-slate-400">Wednesday: 6:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <UsersIcon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Congregation</p>
                      <p className="text-slate-400">120+ Growing Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-12 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="text-3xl font-bold text-blue-400 mb-4 font-display">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To be a beacon of hope in Santa Fe, reaching the lost, restoring
                the broken, and raising up disciples who will impact their
                community for Christ. We exist to love God, love people, and
                make disciples.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="text-3xl font-bold text-purple-400 mb-4 font-display">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To see Santa Fe transformed by the Gospel, with a thriving
                church in every neighborhood and believers in every sphere of
                influence. We're building a movement of faith that will impact
                generations to come.
              </p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Community Impact */}
      <section className="py-20 px-6 md:px-12 bg-slate-900/40 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Growing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Rapid growth through authentic faith and genuine community</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUpIcon, value: '200%', label: 'Growth Rate', grad: 'from-blue-400 to-cyan-400' },
              { icon: UsersIcon, value: '80+', label: 'New Believers', grad: 'from-purple-400 to-pink-400' },
              { icon: MapPinIcon, value: '3', label: 'Years of Ministry', grad: 'from-emerald-400 to-teal-400' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-4xl font-bold bg-gradient-to-r ${stat.grad} bg-clip-text text-transparent mb-2`}>{stat.value}</h3>
                <p className="text-slate-400 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Start Your Journey With Us
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Whether you're exploring faith for the first time or looking for a
              church home, Santa Fe Church welcomes you with open arms. Come
              grow with us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
                Visit This Sunday
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>);

}