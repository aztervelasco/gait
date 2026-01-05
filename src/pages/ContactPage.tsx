import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import { PhoneLink } from '../components/PhoneLink';
import { EmailLink } from '../components/EmailLink';
import { ContactButtons } from '../components/ContactButtons';
const churches = [{
  name: 'Bantinan Church',
  address: 'Bario Site, Bantinan, Santa Fe, Nueva Vizcaya',
  phone: '+639503536578',
  email: '00ggefmi@gmail.com',
  services: ['Sunday: 9:00 AM & 5:00 PM', 'Wednesday: 7:00 PM']
}, {
  name: 'Dalton Church',
  address: 'Dalton Pass, Nueva Vizcaya',
  phone: '+639755733120',
  email: '00ggefmi@gmail.com',
  services: ['Sunday: 10:00 AM & 4:00 PM', 'Friday: 7:00 PM']
}, {
  name: 'Atbu Church',
  address: 'Atbu Campus Area, Nueva Vizcaya',
  phone: '+639503536578',
  email: '00ggefmi@gmail.com',
  services: ['Sunday: 4:00 PM', 'Thursday: 7:00 PM']
}, {
  name: 'Santa Fe Church',
  address: 'Santa Fe, Nueva Vizcaya',
  phone: '+639755733120',
  email: '00ggefmi@gmail.com',
  services: ['Sunday: 9:30 AM & 5:30 PM', 'Wednesday: 6:30 PM']
}];
export function ContactPage() {
  return <div className="w-full min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" alt="Contact Us" className="w-full h-full object-cover" />
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              We'd love to hear from you and answer any questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-12 px-6 md:px-12 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto">
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
        }} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Us Now
            </h2>
            <p className="text-blue-200 mb-6">
              Choose your preferred way to reach us
            </p>
            <ContactButtons phoneNumber="+639503536578" email="00ggefmi@gmail.com" whatsappNumber="+639503536578" address="Bantinan Evangelical Church, Bario Site, Bantinan, Santa Fe, Nueva Vizcaya, Philippines" layout="grid" className="max-w-2xl mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
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
          }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+63 XXX XXX XXXX" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
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
          }} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <MailIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <EmailLink email="00ggefmi@gmail.com" variant="button" subject="General Inquiry" className="w-full justify-center" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <PhoneIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-3">Phone</h3>
                    <div className="space-y-3">
                      <PhoneLink phoneNumber="+639503536578" variant="button" className="w-full justify-center" />
                      <PhoneLink phoneNumber="+639755733120" variant="button" className="w-full justify-center" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <MapPinIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Main Office
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Bantinan Evangelical Church
                      <br />
                      Bario Site, Bantinan
                      <br />
                      Santa Fe, Nueva Vizcaya
                      <br />
                      Cagayan Valley, Philippines
                    </p>
                    <ContactButtons address="Bantinan Evangelical Church, Bario Site, Bantinan, Santa Fe, Nueva Vizcaya, Philippines" layout="vertical" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg shadow-lg text-white">
                <h3 className="font-bold text-xl mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed (Worship Services)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Church Locations */}
      <section className="py-20 px-6 md:px-12 bg-white">
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
              Our <span className="text-blue-600">Locations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit any of our four churches across Nueva Vizcaya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {churches.map((church, index) => <motion.div key={church.name} initial={{
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
          }} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {church.name}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{church.address}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      {church.services.map((service, idx) => <p key={idx} className="text-gray-700">
                          {service}
                        </p>)}
                    </div>
                  </div>
                </div>

                <ContactButtons phoneNumber={church.phone} email={church.email} whatsappNumber={church.phone} address={church.address} layout="grid" />
              </motion.div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}