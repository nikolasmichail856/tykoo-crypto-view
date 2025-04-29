
import React from 'react';
import { DollarSign } from 'lucide-react';
import CurrencyIcon from '@/components/exchange/converter/CurrencyIcon';

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
          className="h-6 w-6 rounded-full object-contain" 
          onError={(e) => {
            // Fallback if image fails to load
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = symbol.toUpperCase().charAt(0);
          }}
        />
      </div>
    );
  }
  
  // Map the symbol to our supported currency codes
  const currencyCode = symbol.toUpperCase() === 'BTC' ? 'BTC' : 
                       symbol.toUpperCase() === 'ETH' ? 'ETH' :
                       symbol.toUpperCase() === 'USDC' ? 'USDC' : '';
  
  // If it's one of our supported currencies, use the CurrencyIcon component
  if (currencyCode) {
    return <div className="h-8 w-8 flex items-center justify-center">
      <CurrencyIcon currencyCode={currencyCode} className="h-6 w-6" />
    </div>;
  }
  
  // Default fallback
  return <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
    <DollarSign className="h-5 w-5" />
  </div>;
};

export default CryptoIconRenderer;
