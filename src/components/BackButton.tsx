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
  return <motion.div initial={{
    opacity: 0,
    x: -20
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.5
  }} className="fixed left-6 top-6 z-30">
      <Link to={to} className="group flex items-center gap-3 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white p-4 md:p-3 rounded-full shadow-2xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation" aria-label={label}>
        <ArrowLeftIcon className="w-6 h-6 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="hidden md:inline-block font-semibold text-sm whitespace-nowrap">
          {label}
        </span>
      </Link>
    </motion.div>;
};