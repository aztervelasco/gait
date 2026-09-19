import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon, ArrowRightIcon, MessageCircleIcon } from 'lucide-react';
import { PhoneLink } from '../components/PhoneLink';
import { EmailLink } from '../components/EmailLink';
import { ContactButtons } from '../components/ContactButtons';

const churches = [
  {
    name: 'Bantinan Church',
    address: 'Bario Site, Bantinan, Santa Fe, Nueva Vizcaya',
    phone: '+639503536578',
    email: '00ggefmi@gmail.com',
    services: ['Sunday: 9:00 AM & 5:00 PM', 'Wednesday: 7:00 PM'],
  },
  {
    name: 'Dalton Church',
    address: 'Dalton Pass, Nueva Vizcaya',
    phone: '+639755733120',
    email: '00ggefmi@gmail.com',
    services: ['Sunday: 10:00 AM & 4:00 PM', 'Friday: 7:00 PM'],
  },
  {
    name: 'Atbu Church',
    address: 'Atbu Campus Area, Nueva Vizcaya',
    phone: '+639503536578',
    email: '00ggefmi@gmail.com',
    services: ['Sunday: 4:00 PM', 'Thursday: 7:00 PM'],
  },
  {
    name: 'Santa Fe Church',
    address: 'Santa Fe, Nueva Vizcaya',
    phone: '+639755733120',
    email: '00ggefmi@gmail.com',
    services: ['Sunday: 9:30 AM & 5:30 PM', 'Wednesday: 6:30 PM'],
  },
];

export function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-dark-premium text-slate-100">
      <Navbar />

      {/* ============ Hero ============ */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image with dark overlay */}
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950" />

        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-10"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px] opacity-10"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-full mb-8 text-blue-400"
            >
              <MessageCircleIcon className="w-5 h-5" />
              <span className="font-semibold text-xs tracking-widest uppercase font-display">
                Reach Out
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light">
              We'd love to hear from you and answer any questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ Quick Contact Buttons ============ */}
      <section className="py-16 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-blue-900/30 backdrop-blur-sm border-y border-white/5" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-display">
              Contact Us Now
            </h2>
            <p className="text-slate-400 mb-8">
              Choose your preferred way to reach us
            </p>
            <ContactButtons
              phoneNumber="+639503536578"
              email="00ggefmi@gmail.com"
              whatsappNumber="+639503536578"
              address="Bantinan Evangelical Church, Bario Site, Bantinan, Santa Fe, Nueva Vizcaya, Philippines"
              layout="grid"
              className="max-w-2xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ============ Contact Form & Info ============ */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none animate-glow-slow" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none animate-glow-slower" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8 font-display">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                {[
                  { label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  { label: 'Phone Number', type: 'tel', placeholder: '+63 XXX XXX XXXX' },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-slate-300 font-semibold mb-2 text-sm tracking-wide">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-slate-300 font-semibold mb-2 text-sm tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 font-display"
                >
                  <span>Send Message</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <h2 className="text-4xl font-bold text-white mb-8 font-display">
                Contact Information
              </h2>

              {/* Email */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-3">Email</h3>
                    <EmailLink
                      email="00ggefmi@gmail.com"
                      variant="button"
                      subject="General Inquiry"
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-3">Phone</h3>
                    <div className="space-y-3">
                      <PhoneLink phoneNumber="+639503536578" variant="button" className="w-full justify-center" />
                      <PhoneLink phoneNumber="+639755733120" variant="button" className="w-full justify-center" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Main Office</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      Bantinan Evangelical Church<br />
                      Bario Site, Bantinan<br />
                      Santa Fe, Nueva Vizcaya<br />
                      Cagayan Valley, Philippines
                    </p>
                    <ContactButtons
                      address="Bantinan Evangelical Church, Bario Site, Bantinan, Santa Fe, Nueva Vizcaya, Philippines"
                      layout="vertical"
                    />
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ClockIcon className="w-6 h-6 text-blue-300" />
                    <h3 className="font-bold text-white text-xl">Office Hours</h3>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                    <p>Saturday: 10:00 AM – 2:00 PM</p>
                    <p className="text-slate-400">Sunday: Closed (Worship Services)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ Church Locations ============ */}
      <section className="py-24 px-6 md:px-12 bg-slate-900/40 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-full mb-6 text-blue-400">
              <MapPinIcon className="w-5 h-5" />
              <span className="font-semibold text-xs tracking-widest uppercase font-display">
                Find Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Locations
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Visit any of our four churches across Nueva Vizcaya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {churches.map((church, index) => (
              <motion.div
                key={church.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-white mb-6 font-display">
                  {church.name}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300">{church.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      {church.services.map((service, idx) => (
                        <p key={idx} className="text-slate-300">{service}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <ContactButtons
                  phoneNumber={church.phone}
                  email={church.email}
                  whatsappNumber={church.phone}
                  address={church.address}
                  layout="grid"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}