import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { PhoneLink } from './PhoneLink';
import { EmailLink } from './EmailLink';
import { ContactButtons } from './ContactButtons';
export const SponsorshipSection = () => {
  return <section className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 py-16 md:py-20 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 tracking-wide px-4">
            PARTNER WITH <span className="text-blue-400">US</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-400 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto px-4">
            Join us in our mission to transform communities through faith. Your
            sponsorship helps us reach more lives and build stronger
            congregations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Information - Stacks on mobile */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-5 md:p-6 rounded-lg border border-white/20">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  Email Us
                </h3>
              </div>
              <EmailLink email="00ggefmi@gmail.com" variant="button" subject="Partnership Inquiry" body="Hello GEFMI, I'm interested in partnering with your ministry." className="w-full justify-center text-sm md:text-base" />
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-5 md:p-6 rounded-lg border border-white/20">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  Call Us
                </h3>
              </div>
              <div className="space-y-2 md:space-y-3">
                <PhoneLink phoneNumber="+639503536578" variant="button" className="w-full justify-center text-sm md:text-base" />
                <PhoneLink phoneNumber="+639755733120" variant="button" className="w-full justify-center text-sm md:text-base" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-5 md:p-6 rounded-lg border border-white/20">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    Visit Us
                  </h3>
                  <p className="text-sm md:text-base text-gray-200">
                    Bantinan Evangelical Church
                    <br />
                    Bario Site, Bantinan
                    <br />
                    Santa Fe, Nueva Vizcaya
                    <br />
                    Cagayan Valley, Philippines
                  </p>
                </div>
              </div>
              <ContactButtons address="Bantinan Evangelical Church, Bario Site, Bantinan, Santa Fe, Nueva Vizcaya, Philippines" layout="vertical" className="mt-3 md:mt-4" />
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-5 md:p-6 rounded-lg border border-white/20">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 text-center">
                Quick Contact
              </h3>
              <ContactButtons phoneNumber="+639503536578" email="00ggefmi@gmail.com" whatsappNumber="+639503536578" layout="grid" />
            </div>
          </div>

          {/* Contact Form - Stacks on mobile */}
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-3 md:space-y-4">
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base touch-manipulation" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base touch-manipulation" />
              </div>
              <div>
                <input type="tel" placeholder="Your Phone (Optional)" className="w-full px-4 py-3 rounded bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base touch-manipulation" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base touch-manipulation resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base touch-manipulation">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};