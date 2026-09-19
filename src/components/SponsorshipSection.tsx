import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, ArrowRightIcon, HeartHandshakeIcon } from 'lucide-react';
import { PhoneLink } from './PhoneLink';
import { EmailLink } from './EmailLink';
import { ContactButtons } from './ContactButtons';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const SponsorshipSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 md:py-32 px-4 md:px-6 lg:px-12 overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-2.5 rounded-full mb-6">
            <HeartHandshakeIcon className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-semibold font-display">Partner With Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-display">
            Invest in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Eternity
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join us in our mission to transform communities through faith. Your
            partnership helps us reach more lives and build stronger congregations
            across the Cagayan Valley.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Contact cards */}
          <div className="space-y-5">
            {/* Email card */}
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white/5 hover:bg-white/8 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MailIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">Email Us</h3>
              </div>
              <EmailLink
                email="00ggefmi@gmail.com"
                variant="button"
                subject="Partnership Inquiry"
                body="Hello GEFMI, I'm interested in partnering with your ministry."
                className="w-full justify-center text-sm md:text-base"
              />
            </motion.div>

            {/* Phone card */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white/5 hover:bg-white/8 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">Call Us</h3>
              </div>
              <div className="space-y-3">
                <PhoneLink
                  phoneNumber="+639503536578"
                  variant="button"
                  className="w-full justify-center text-sm md:text-base"
                />
                <PhoneLink
                  phoneNumber="+639755733120"
                  variant="button"
                  className="w-full justify-center text-sm md:text-base"
                />
              </div>
            </motion.div>

            {/* Address card */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white/5 hover:bg-white/8 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPinIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 font-display">Visit Us</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Bantinan Evangelical Church<br />
                    Bario Site, Bantinan<br />
                    Santa Fe, Nueva Vizcaya<br />
                    Cagayan Valley, Philippines
                  </p>
                </div>
              </div>
              <ContactButtons
                address="Bantinan Evangelical Church, Bario Site, Bantinan, Santa Fe, Nueva Vizcaya, Philippines"
                layout="vertical"
                className="mt-3 md:mt-4"
              />
            </motion.div>

            {/* Quick contact buttons */}
            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/30 to-indigo-700/30 p-6 rounded-2xl border border-blue-500/20"
            >
              <h3 className="text-lg font-bold text-white mb-4 text-center font-display">Quick Contact</h3>
              <ContactButtons
                phoneNumber="+639503536578"
                email="00ggefmi@gmail.com"
                whatsappNumber="+639503536578"
                layout="grid"
              />
            </motion.div>
          </div>

          {/* Contact form - premium glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display">Send Us a Message</h3>
            <p className="text-slate-400 mb-8">We'd love to hear from you and connect.</p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-xl bg-white/8 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-sm md:text-base transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 rounded-xl bg-white/8 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-sm md:text-base transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="contact-phone"
                  placeholder="Your Phone (Optional)"
                  className="w-full px-5 py-4 rounded-xl bg-white/8 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-sm md:text-base transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  id="contact-message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-white/8 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-sm md:text-base transition-all duration-300 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                id="contact-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Send Message
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};