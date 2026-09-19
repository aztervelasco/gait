import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
interface BackButtonProps {
  to: string;
  label?: string;
}
export const BackButton: React.FC<BackButtonProps> = ({
  to,
  label = 'Back'
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{
        duration: 0.5
      }}
      className="fixed left-4 top-20 md:left-6 md:top-6 z-30">
      
      <Link
        to={to}
        className="group flex items-center gap-2.5 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white p-3 rounded-full shadow-2xl backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
        aria-label={label}>
        
        <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="hidden md:inline-block font-semibold text-sm whitespace-nowrap">
          {label}
        </span>
      </Link>
    </motion.div>);

};