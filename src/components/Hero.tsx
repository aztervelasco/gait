import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { VideoBackground } from './VideoBackground';
import { Button } from './Button';
interface HeroSlide {
  title: string;
  subtitle: string;
  highlight: string;
  backgroundImage: string;
  videoUrl?: string;
}
interface HeroProps {
  slide: HeroSlide;
}
export const Hero: React.FC<HeroProps> = ({
  slide
}) => {
  return <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground videoUrl={slide.videoUrl} fallbackImageUrl={slide.backgroundImage} />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-white mb-8">
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6">
              Plant Purpose. Pour Passion.
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Pursue Christ
              </span>
            </span>
          </h1>
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <Button variant="primary" href="#join">
              JOIN OUR FELLOWSHIP
            </Button>
            <Button variant="secondary" href="#learn">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        <ChevronDownIcon size={36} />
      </div>
    </section>;
};