
import React from 'react';

interface HeroWithLogoProps {
  imageSrc: string;
  logoSrc: string;
  alt: string;
}

const HeroWithLogo: React.FC<HeroWithLogoProps> = ({ imageSrc, logoSrc, alt }) => {
  return (
    <div className="relative w-full">
      <img 
        src={imageSrc}
        alt={alt}
        className="w-full h-auto rounded-lg shadow-2xl"
      />
      <div className="absolute bottom-6 right-6 w-1/4 max-w-[120px] bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
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
