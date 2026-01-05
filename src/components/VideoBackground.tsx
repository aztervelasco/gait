import React from 'react';
interface VideoBackgroundProps {
  videoUrl?: string;
  fallbackImageUrl: string;
}
export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoUrl,
  fallbackImageUrl
}) => {
  return <div className="absolute inset-0 w-full h-full overflow-hidden">
      {videoUrl ? <video autoPlay muted loop playsInline className="absolute object-cover w-full h-full">
          <source src={videoUrl} type="video/mp4" />
        </video> : <img src={fallbackImageUrl} alt="Church background" className="absolute object-cover w-full h-full" />}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>;
};