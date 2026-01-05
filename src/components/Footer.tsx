import React from 'react';
import { PhoneLink } from './PhoneLink';
import { EmailLink } from './EmailLink';
import { ContactButtons } from './ContactButtons';
export const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <img src="/553179066_3773471999619593_8381726180407782571_n-Picsart-AiImageEnhancer-removebg-preview.png" alt="GEFMI Logo" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold">GEFMI</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Gait Evangelical Fellowship Ministry Inc.
            </p>

            <div className="space-y-3">
              <PhoneLink phoneNumber="+639503536578" showIcon={true} className="text-gray-300 hover:text-white" />
              <EmailLink email="00ggefmi@gmail.com" showIcon={true} className="text-gray-300 hover:text-white" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/about/churches" className="hover:text-white transition-colors">
                  Our Churches
                </a>
              </li>
              <li>
                <a href="/ministry" className="hover:text-white transition-colors">
                  Ministries
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="text-gray-400 mb-4">
              Get in touch through any platform
            </p>

            <ContactButtons phoneNumber="+639503536578" email="00ggefmi@gmail.com" whatsappNumber="+639503536578" layout="grid" className="mb-4" />

            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GEFMI. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};