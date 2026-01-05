import React, { useState, Component } from 'react';
import { MailIcon, CheckIcon } from 'lucide-react';
interface EmailLinkProps {
  email: string;
  subject?: string;
  body?: string;
  label?: string;
  variant?: 'default' | 'button' | 'icon';
  showIcon?: boolean;
  className?: string;
}
export function EmailLink({
  email,
  subject,
  body,
  label,
  variant = 'default',
  showIcon = true,
  className = ''
}: EmailLinkProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  const buildMailtoLink = () => {
    let link = `mailto:${email}`;
    const params = [];
    if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
    if (body) params.push(`body=${encodeURIComponent(body)}`);
    if (params.length > 0) link += `?${params.join('&')}`;
    return link;
  };
  if (variant === 'button') {
    return <div className="flex gap-2">
        <a href={buildMailtoLink()} className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 ${className}`} aria-label={`Email ${email}`}>
          {showIcon && <MailIcon className="w-5 h-5" />}
          <span>{label || email}</span>
        </a>
        <button onClick={handleCopy} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95" aria-label="Copy email address">
          {copied ? <CheckIcon className="w-5 h-5 text-green-600" /> : <span className="text-sm font-semibold">Copy</span>}
        </button>
      </div>;
  }
  if (variant === 'icon') {
    return <a href={buildMailtoLink()} className={`inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg ${className}`} aria-label={`Email ${email}`}>
        <MailIcon className="w-6 h-6" />
      </a>;
  }
  return <a href={buildMailtoLink()} className={`inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 hover:underline group ${className}`} aria-label={`Email ${email}`}>
      {showIcon && <MailIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />}
      <span>{label || email}</span>
    </a>;
}