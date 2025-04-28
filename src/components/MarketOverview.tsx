
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  image: string;
}

const MarketOverview = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const mockData: CryptoData[] = [
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        current_price: 64352.12,
        price_change_percentage_24h: 2.35,
        market_cap: 1258000000000,
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      },
      {
        id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        current_price: 3456.78,
        price_change_percentage_24h: -1.23,
        market_cap: 415000000000,
        image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
      },
      {
        id: 'usd-coin',
        name: 'USD Coin',
        symbol: 'USDC',
        current_price: 1.00,
        price_change_percentage_24h: 0.01,
        market_cap: 29000000000,
        image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      }
    ];
    
    setTimeout(() => {
      setCryptoData(mockData);
      setIsLoading(false);
    }, 500);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };
  
  const formatMarketCap = (value: number) => {
    if (value >= 1000000000000) {
      return `$${(value / 1000000000000).toFixed(2)}T`;
    }
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(2)}B`;
    }
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    }
    return formatCurrency(value);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-4">Market Overview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with real-time cryptocurrency prices for Bitcoin, Ethereum, and USDC.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="shadow-md">
                <CardContent className="p-6">
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-gray-200 h-12 w-12"></div>
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoData.map((crypto) => (
              <Card key={crypto.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={crypto.image} 
                      alt={crypto.name} 
                      className="w-10 h-10 mr-3" 
                    />
                    <div>
                      <h3 className="font-semibold">{crypto.name}</h3>
                      <p className="text-sm text-gray-500">{crypto.symbol.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold">{formatCurrency(crypto.current_price)}</p>
                      <p className="text-sm text-gray-500">Market Cap: {formatMarketCap(crypto.market_cap)}</p>
                    </div>
                    <div className={`flex items-center ${crypto.price_change_percentage_24h >= 0 ? 'text-tykoo-green' : 'text-tykoo-red'}`}>
                      {crypto.price_change_percentage_24h >= 0 ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      <span className="font-medium">{crypto.price_change_percentage_24h.toFixed(2)}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white" asChild>
            <Link to="/markets">View All Markets</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
