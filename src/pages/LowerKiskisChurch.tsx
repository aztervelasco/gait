import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { ChurchIcon, MapPinIcon, CalendarIcon, HeartIcon, UsersIcon } from 'lucide-react';
const churchData = {
  name: 'Lower Kiskis Church',
  location: 'Lower Kiskis, Nueva Vizcaya',
  established: '2021',
  description: 'Serving the Lower Kiskis community with the light of the Gospel. Our church is a place of refuge, growth, and fellowship for all who seek to know God.',
  pastor: 'Pastor [Name]',
  services: [{
    day: 'Sunday',
    time: '9:00 AM',
    type: 'Worship Service'
  }, {
    day: 'Wednesday',
    time: '7:00 PM',
    type: 'Bible Study'
  }],
  gallery: ['https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop']
};
export function LowerKiskisChurch() {
  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    damping: 0.88
  });
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <BackButton to="/churches" label="Back to Churches" />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={churchData.gallery[0]} alt={churchData.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1
        }} className="text-center text-white px-6 relative z-10">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="inline-block mb-6">
              <span className="text-teal-300 text-sm font-bold tracking-widest uppercase bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
                GEFMI Church
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              {churchData.name}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-6"></div>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-gray-200 mb-4">
              <MapPinIcon className="w-6 h-6" />
              <p>{churchData.location}</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg text-teal-300">
              <CalendarIcon className="w-5 h-5" />
              <p>Established {churchData.established}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
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
        }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Our Church
              </span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {churchData.description}
            </p>
          </motion.div>

          {/* Services Schedule */}
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
        }} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Service Times
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {churchData.services.map((service, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-teal-100">
                  <p className="text-teal-600 font-bold text-lg mb-2">
                    {service.day}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mb-2">
                    {service.time}
                  </p>
                  <p className="text-gray-600">{service.type}</p>
                </div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white">
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
        }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Church{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Moments from our worship, fellowship, and community events
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {churchData.gallery.map((image, index) => <motion.div key={index} initial={{
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
          }} className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <img src={image} alt={`${churchData.name} - Image ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
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
            <HeartIcon className="w-16 h-16 text-teal-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Visit Us This Sunday
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Experience authentic worship, biblical teaching, and warm
              fellowship. Everyone is welcome!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-block bg-white hover:bg-gray-100 text-teal-900 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                Get Directions
              </a>
              <a href="/churches" className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                View All Churches
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
}