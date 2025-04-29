
import React from 'react';

interface HeroWithLogoProps {
  imageSrc: string;
  logoSrc: string;
  alt: string;
}

const HeroWithLogo: React.FC<HeroWithLogoProps> = ({ imageSrc, logoSrc, alt }) => {
  return (
    <div className="relative w-full">
      {/* Image container with gradient overlay */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-2xl">
        <img 
          src={imageSrc}
          alt={alt}
          className="w-full h-auto"
        />
        {/* Gradient overlay that fades to white at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90"></div>
      </div>
      
      {/* Logo container */}
      <div className="absolute top-6 left-6 w-1/4 max-w-[120px] bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <img 
          src={logoSrc} 
          alt="TYKOO Logo" 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroWithLogo;
