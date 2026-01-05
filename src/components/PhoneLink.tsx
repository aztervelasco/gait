import React, { useState } from 'react';
import { PhoneIcon, CheckIcon } from 'lucide-react';
interface PhoneLinkProps {
  phoneNumber: string;
  label?: string;
  variant?: 'default' | 'button' | 'icon';
  showIcon?: boolean;
  className?: string;
}
export function PhoneLink({
  phoneNumber,
  label,
  variant = 'default',
  showIcon = true,
  className = ''
}: PhoneLinkProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  const formatPhoneDisplay = (phone: string) => {
    // Remove +63 and format as XXX XXX XXXX
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('63')) {
      const local = cleaned.substring(2);
      return `+63 ${local.substring(0, 3)} ${local.substring(3, 6)} ${local.substring(6)}`;
    }
    return phone;
  };
  if (variant === 'button') {
    return <div className="flex gap-2">
        <a href={`tel:${phoneNumber}`} className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 ${className}`} aria-label={`Call ${phoneNumber}`}>
          {showIcon && <PhoneIcon className="w-5 h-5" />}
          <span>{label || formatPhoneDisplay(phoneNumber)}</span>
        </a>
        <button onClick={handleCopy} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95" aria-label="Copy phone number">
          {copied ? <CheckIcon className="w-5 h-5 text-green-600" /> : <span className="text-sm font-semibold">Copy</span>}
        </button>
      </div>;
  }
  if (variant === 'icon') {
    return <a href={`tel:${phoneNumber}`} className={`inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg ${className}`} aria-label={`Call ${phoneNumber}`}>
        <PhoneIcon className="w-6 h-6" />
      </a>;
  }
  return <a href={`tel:${phoneNumber}`} className={`inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 hover:underline group ${className}`} aria-label={`Call ${phoneNumber}`}>
      {showIcon && <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />}
      <span>{label || formatPhoneDisplay(phoneNumber)}</span>
    </a>;
}