
import React from 'react';
import { DollarSign } from 'lucide-react';

interface CryptoIconRendererProps {
  symbol: string;
  image?: string;
}

const CryptoIconRenderer: React.FC<CryptoIconRendererProps> = ({ symbol, image }) => {
  // If image URL is provided, use it
  if (image) {
    return (
      <div className="flex items-center justify-center h-8 w-8 overflow-hidden">
        <img 
          src={image} 
          alt={symbol} 
          className="h-8 w-8 rounded-full object-contain" 
          onError={(e) => {
            // Fallback if image fails to load
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = symbol.toUpperCase().charAt(0);
          }}
        />
      </div>
    );
  }
  
  // Default fallback
  return (
    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
      <DollarSign className="h-5 w-5" />
    </div>
  );
};

export default CryptoIconRenderer;
