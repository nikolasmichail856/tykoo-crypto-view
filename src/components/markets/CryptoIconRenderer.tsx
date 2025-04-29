
import React from 'react';
import { Bitcoin, DollarSign } from 'lucide-react';

interface CryptoIconRendererProps {
  symbol: string;
  image?: string;
}

const CryptoIconRenderer: React.FC<CryptoIconRendererProps> = ({ symbol, image }) => {
  // If image URL is provided, use it
  if (image) {
    return <img src={image} alt={symbol} className="h-6 w-6 rounded-full" />;
  }
  
  // Fallback icons if no image is provided
  switch(symbol.toLowerCase()) {
    case 'btc':
      return <Bitcoin className="h-6 w-6 text-amber-500" />;
    case 'eth':
      return <div className="h-6 w-6 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">E</div>;
    case 'usdc':
      return <div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">$</div>;
    default:
      return <DollarSign className="h-6 w-6 rounded-full bg-gray-200 p-1" />;
  }
};

export default CryptoIconRenderer;
