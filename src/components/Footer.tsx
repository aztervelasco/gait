import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon, ArrowUpIcon } from 'lucide-react';
import { PhoneLink } from './PhoneLink';
import { EmailLink } from './EmailLink';
import { ContactButtons } from './ContactButtons';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const footerLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Churches', href: '/churches' },
  { label: 'Our Pastors', href: '/pastors' },
  { label: 'Ministries', href: '/ministry' },
  { label: 'Sponsorship', href: '/sponsorship' },
  { label: 'Contact', href: '/contact' },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};
const listItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-950 border-t border-white/5 text-white overflow-hidden">

      {/* Subtle top-edge glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <img
                  src="/553179066_3773471999619593_8381726180407782571_n-Picsart-AiImageEnhancer-removebg-preview.webp"
                  alt="GEFMI Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">GEFMI</h3>
                <p className="text-xs text-slate-500 tracking-wide">Est. 2004</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Gait Evangelical Fellowship Ministry Inc. — transforming communities
              through the power of the Gospel across the Cagayan Valley.
            </p>
            <div className="space-y-3">
              <PhoneLink
                phoneNumber="+639503536578"
                showIcon={true}
                className="text-slate-400 hover:text-white transition-colors text-sm"
              />
              <EmailLink
                email="00ggefmi@gmail.com"
                showIcon={true}
                className="text-slate-400 hover:text-white transition-colors text-sm"
              />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold text-slate-500 mb-6 font-display">
              Quick Links
            </h3>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {footerLinks.map((link) => (
                <motion.li key={link.href} variants={listItemVariants}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Connect column */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold text-slate-500 mb-6 font-display">
              Connect With Us
            </h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Reach us through any platform — we'd love to hear from you.
            </p>
            <ContactButtons
              phoneNumber="+639503536578"
              email="00ggefmi@gmail.com"
              whatsappNumber="+639503536578"
              layout="grid"
              className="mb-5"
            />
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61579488509313"
                id="footer-facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-500/30 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                id="footer-twitter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-sky-600/20 hover:border-sky-500/30 flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all duration-300"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                id="footer-instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-pink-600/20 hover:border-pink-500/30 flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} GEFMI — Gait Evangelical Fellowship Ministry Inc. All rights reserved.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            id="scroll-to-top"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-white uppercase tracking-widest font-semibold transition-colors duration-300 group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 border border-white/15 group-hover:border-white/40 rounded-full flex items-center justify-center transition-colors duration-300">
              <ArrowUpIcon className="w-3 h-3" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};