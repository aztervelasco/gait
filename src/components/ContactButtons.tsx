import React, { Component } from 'react';
import { PhoneIcon, MailIcon, MessageSquareIcon, MapPinIcon } from 'lucide-react';
interface ContactButtonsProps {
  phoneNumber?: string;
  email?: string;
  whatsappNumber?: string;
  address?: string;
  layout?: 'horizontal' | 'vertical' | 'grid';
  className?: string;
}
export function ContactButtons({
  phoneNumber,
  email,
  whatsappNumber,
  address,
  layout = 'horizontal',
  className = ''
}: ContactButtonsProps) {
  const layoutClasses = {
    horizontal: 'flex flex-wrap gap-3',
    vertical: 'flex flex-col gap-3',
    grid: 'grid grid-cols-2 gap-3'
  };
  const handleSMS = () => {
    if (phoneNumber) {
      window.location.href = `sms:${phoneNumber}`;
    }
  };
  const handleWhatsApp = () => {
    if (whatsappNumber) {
      const cleanNumber = whatsappNumber.replace(/\D/g, '');
      window.open(`https://wa.me/${cleanNumber}`, '_blank');
    }
  };
  const handleDirections = () => {
    if (address) {
      const encodedAddress = encodeURIComponent(address);
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    }
  };
  return <div className={`${layoutClasses[layout]} ${className}`}>
      {phoneNumber && <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg" aria-label="Call us">
          <PhoneIcon className="w-5 h-5" />
          <span>Call</span>
        </a>}

      {email && <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg" aria-label="Email us">
          <MailIcon className="w-5 h-5" />
          <span>Email</span>
        </a>}

      {phoneNumber && <button onClick={handleSMS} className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg" aria-label="Send SMS">
          <MessageSquareIcon className="w-5 h-5" />
          <span>SMS</span>
        </button>}

      {whatsappNumber && <button onClick={handleWhatsApp} className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg" aria-label="WhatsApp us">
          <MessageSquareIcon className="w-5 h-5" />
          <span>WhatsApp</span>
        </button>}

      {address && <button onClick={handleDirections} className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg" aria-label="Get directions">
          <MapPinIcon className="w-5 h-5" />
          <span>Directions</span>
        </button>}
    </div>;
}