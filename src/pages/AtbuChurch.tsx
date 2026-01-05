import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, MapPinIcon, ClockIcon, UsersIcon, ZapIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
export function AtbuChurch() {
  return <div className="w-full min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" alt="Atbu Church" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1
        }} className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Atbu Church</h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-2">Est. 2020</p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Empowering the Next Generation
            </p>
          </motion.div>
        </div>
        <Link to="/" className="absolute top-24 left-6 md:left-12 z-10 flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300">
          <ArrowLeftIcon size={20} />
          <span>Back to Home</span>
        </Link>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
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
        }} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Atbu Church launched in 2020 with a bold vision: to reach and
                disciple the next generation with the life-changing message of
                Jesus Christ. We're a dynamic, youth-focused congregation that
                combines contemporary worship with timeless truth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our church is characterized by energetic worship, relevant
                teaching, and a passionate commitment to seeing young people
                encounter God in powerful ways. We believe that today's youth
                are tomorrow's world-changers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through innovative ministry approaches, mentorship programs, and
                authentic community, we're equipping young believers to live out
                their faith boldly in every sphere of life.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPinIcon className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Location</p>
                      <p className="text-blue-200">
                        Atbu Campus Area, Nueva Vizcaya
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ClockIcon className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Service Times</p>
                      <p className="text-blue-200">
                        Sunday: 4:00 PM (Contemporary)
                      </p>
                      <p className="text-blue-200">
                        Thursday: 7:00 PM (College Night)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <UsersIcon className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Congregation</p>
                      <p className="text-blue-200">
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

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
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
        }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-200 leading-relaxed">
                To ignite a generation with passion for Jesus Christ through
                relevant worship, authentic relationships, and practical
                discipleship. We're committed to helping young people discover
                their identity in Christ and their calling in the world.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-200 leading-relaxed">
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
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
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
        }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Youth <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering young people to live boldly for Christ
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">250+</h3>
              <p className="text-gray-700 font-semibold">Young Lives Reached</p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ZapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">8</h3>
              <p className="text-gray-700 font-semibold">
                Youth Leaders Raised
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">4</h3>
              <p className="text-gray-700 font-semibold">Years of Ministry</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
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
        }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of the Movement
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join a community of young believers who are passionate about Jesus
              and committed to making a difference. Your generation, your
              moment, your calling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded transition-colors duration-300">
                Connect With Us
              </Link>
              <Link to="/" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded transition-colors duration-300">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
}