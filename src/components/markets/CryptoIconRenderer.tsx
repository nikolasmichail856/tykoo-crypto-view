
import React from 'react';
import { Bitcoin } from 'lucide-react';

interface CryptoIconRendererProps {
  symbol: string;
}

const CryptoIconRenderer: React.FC<CryptoIconRendererProps> = ({ symbol }) => {
  switch(symbol.toLowerCase()) {
    case 'btc':
      return <Bitcoin className="h-6 w-6 text-amber-500" />;
    case 'eth':
      return <div className="h-6 w-6 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">E</div>;
    default:
      return <div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">$</div>;
  }
};

export default CryptoIconRenderer;
