import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface VideoBackgroundProps {
  videoUrl?: string;
  fallbackImageUrl: string;
}
export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoUrl,
  fallbackImageUrl
}) => {
  const { scrollY } = useScroll();
  // Background moves slower than foreground text (scroll rate: ~30%)
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="absolute inset-0 w-full h-[120%] -top-[10%] overflow-hidden pointer-events-none">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {videoUrl ?
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute object-cover w-full h-full">
          
            <source src={videoUrl} type="video/mp4" />
          </video> :

        <img
          src={fallbackImageUrl}
          alt="Church background"
          className="absolute object-cover w-full h-full" />

        }
      </motion.div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>);

};