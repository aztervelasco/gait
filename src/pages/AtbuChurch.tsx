import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  MapPinIcon,
  ClockIcon,
  UsersIcon,
  ZapIcon } from
'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
export function AtbuChurch() {
  return (
    <div className="w-full min-h-screen bg-dark-premium text-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
          alt="Atbu Church"
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
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Atbu Church</h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-2">Est. 2020</p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Empowering the Next Generation
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
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Story</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Atbu Church launched in 2020 with a bold vision: to reach and
                disciple the next generation with the life-changing message of
                Jesus Christ. We're a dynamic, youth-focused congregation that
                combines contemporary worship with timeless truth.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Our church is characterized by energetic worship, relevant
                teaching, and a passionate commitment to seeing young people
                encounter God in powerful ways. We believe that today's youth
                are tomorrow's world-changers.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Through innovative ministry approaches, mentorship programs, and
                authentic community, we're equipping young believers to live out
                their faith boldly in every sphere of life.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-display">
                  Quick Facts
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Location</p>
                      <p className="text-slate-400">
                        Atbu Campus Area, Nueva Vizcaya
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Service Times</p>
                      <p className="text-slate-400">
                        Sunday: 4:00 PM (Contemporary)
                      </p>
                      <p className="text-slate-400">
                        Thursday: 7:00 PM (College Night)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <UsersIcon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Congregation</p>
                      <p className="text-slate-400">
                        180+ Young Adults & Students
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              <h3 className="text-3xl font-bold text-blue-400 mb-4 font-display">
                Our Mission
              </h3>
              <p className="text-slate-300 leading-relaxed">
                To ignite a generation with passion for Jesus Christ through
                relevant worship, authentic relationships, and practical
                discipleship. We're committed to helping young people discover
                their identity in Christ and their calling in the world.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="text-3xl font-bold text-purple-400 mb-4 font-display">
                Our Vision
              </h3>
              <p className="text-slate-300 leading-relaxed">
                To raise up a generation of radical disciples who transform
                culture, advance the Kingdom, and make Jesus famous in their
                schools, workplaces, and communities. We see young people
                leading the charge in the Great Commission.
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
              Youth <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Impact</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Empowering young people to live boldly for Christ
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: UsersIcon, value: '250+', label: 'Young Lives Reached', grad: 'from-blue-400 to-cyan-400' },
              { icon: ZapIcon, value: '8', label: 'Youth Leaders Raised', grad: 'from-purple-400 to-pink-400' },
              { icon: MapPinIcon, value: '4', label: 'Years of Ministry', grad: 'from-emerald-400 to-teal-400' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.grad} bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10`}>
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Be Part of the Movement
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join a community of young believers who are passionate about Jesus
              and committed to making a difference. Your generation, your
              moment, your calling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Connect With Us
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>);

}