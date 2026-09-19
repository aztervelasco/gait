import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, UserIcon, MapPinIcon } from 'lucide-react';

export interface LeaderItem {
  id?: string;
  name: string;
  title: string;
  roleCategory: string;
  church?: string;
  location?: string;
  image?: string;
  shortBio?: string;
  fullBio?: string;
  story?: string;
  specialization?: string;
  tags?: string[];
}

interface LeadershipAccordionProps {
  items: LeaderItem[];
  onSelectLeader: (leader: LeaderItem) => void;
  accentColor?: string;
}

export function LeadershipAccordion({
  items,
  onSelectLeader,
}: LeadershipAccordionProps) {
  if (!items || items.length === 0) {
    return null;
  }

  // Get gradient badge by category
  const getBadgeStyle = (category: string) => {
    switch (category) {
      case 'Ordained Minister':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'GEFMI Pastor':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Preacher':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Lady Missionary Worker':
        return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
      case 'GEFMI Youth Leader':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Reconnaissance Worker':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      default:
        return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
    }
  };

  return (
    <div className="w-full">
      {/* On desktop (md+): Expanding flex accordion with cubic-bezier transition */}
      <div className="group flex flex-col md:flex-row justify-center gap-3 w-full mx-auto my-6 transition-all duration-500">
        {items.map((leader, index) => {
          const initials = leader.name
            .split(' ')
            .filter((n) => !n.startsWith('Rev.') && !n.startsWith('Ptr.') && !n.startsWith('Ptra.') && !n.startsWith('Pastor'))
            .map((n) => n[0])
            .slice(0, 2)
            .join('');

          return (
            <article
              key={`${leader.name}-${index}`}
              onClick={() => onSelectLeader(leader)}
              className="group/article relative w-full md:w-[22%] md:hover:w-[48%] md:focus-within:w-[48%] md:not-[&:hover]:group-hover:w-[15%] md:[&:not(:focus-within):not(:hover)]:group-focus-within:w-[15%] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border border-white/10 hover:border-emerald-500/50 shadow-xl bg-slate-900 min-h-[380px] md:min-h-[440px] flex flex-col justify-end"
            >
              {/* Background Image / Avatar */}
              <div className="absolute inset-0 w-full h-full">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center group-hover/article:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-3 shadow-inner">
                      <span className="text-3xl font-bold text-slate-300 tracking-wider">
                        {initials || <UserIcon className="w-10 h-10 text-slate-400" />}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                      {leader.roleCategory}
                    </span>
                  </div>
                )}
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover/article:opacity-95 transition-opacity" />
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/article:opacity-100 transition-opacity pointer-events-none" />

              {/* Floating Top Category Pill */}
              <div className="absolute top-4 left-4 z-20">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border backdrop-blur-md shadow-md ${getBadgeStyle(
                    leader.roleCategory
                  )}`}
                >
                  <SparklesIcon className="w-3 h-3" />
                  {leader.roleCategory}
                </span>
              </div>

              {/* Bottom Content / Info */}
              <div className="relative z-10 p-5 sm:p-6 text-white flex flex-col justify-end space-y-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-display drop-shadow-md group-hover/article:text-emerald-300 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-400/90 tracking-wide mt-0.5">
                    {leader.title}
                  </p>
                </div>

                {leader.church && (
                  <p className="text-xs text-slate-300 flex items-center gap-1.5 font-light">
                    <MapPinIcon className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>{leader.church}</span>
                  </p>
                )}

                {/* Expanded text preview on hover */}
                {leader.shortBio && (
                  <p className="text-xs text-slate-300/90 line-clamp-2 md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-300 ease-out delay-100">
                    {leader.shortBio}
                  </p>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 group-hover/article:underline flex items-center gap-1">
                    <span>View Profile</span>
                    <span className="group-hover/article:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
