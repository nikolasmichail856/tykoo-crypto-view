
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCryptoPrices } from '@/hooks/useCryptoPrices';
import { formatCurrency, formatLargeNumber } from '@/utils/formatters';
import CurrencyIcon from '@/components/exchange/converter/CurrencyIcon';
import CryptoIconRenderer from '@/components/markets/CryptoIconRenderer';

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
  
  // Use the existing hook to fetch real-time crypto prices
  const { cryptoData: liveCryptoData, isLoading: liveDataLoading } = useCryptoPrices();
  
  useEffect(() => {
    if (liveCryptoData) {
      // Format the data to match our component's expected format
      const formattedData = liveCryptoData.map(crypto => ({
        id: crypto.id,
        name: crypto.id === 'bitcoin' ? 'Bitcoin' : 
              crypto.id === 'ethereum' ? 'Ethereum' : 
              crypto.id === 'usd-coin' ? 'USD Coin' : crypto.id,
        symbol: crypto.id === 'bitcoin' ? 'BTC' : 
                crypto.id === 'ethereum' ? 'ETH' : 
                crypto.id === 'usd-coin' ? 'USDC' : crypto.id.toUpperCase(),
        current_price: crypto.current_price,
        price_change_percentage_24h: crypto.price_change_percentage_24h || 0,
        market_cap: crypto.market_cap || 0,
        image: `https://assets.coingecko.com/coins/images/${
          crypto.id === 'bitcoin' ? '1' : 
          crypto.id === 'ethereum' ? '279' : 
          crypto.id === 'usd-coin' ? '6319' : '1'
        }/large/${crypto.id === 'usd-coin' ? 'usdc' : crypto.id}.png`,
      }));
      
      setCryptoData(formattedData);
      setIsLoading(false);
    }
  }, [liveCryptoData]);
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-4">Market Overview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with real-time cryptocurrency prices for Bitcoin, Ethereum, and USDC.
          </p>
        </div>
        
        {isLoading || liveDataLoading ? (
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
                    {crypto.symbol === 'USDC' ? (
                      <div className="w-10 h-10 mr-3 flex items-center justify-center">
                        <CurrencyIcon currencyCode={crypto.symbol} className="h-10 w-10" />
                      </div>
                    ) : (
                      <CryptoIconRenderer 
                        symbol={crypto.symbol} 
                        image={crypto.image} 
                      />
                    )}
                    <div>
                      <h3 className="font-semibold">{crypto.name}</h3>
                      <p className="text-sm text-gray-500">{crypto.symbol}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold">{formatCurrency(crypto.current_price)}</p>
                      <p className="text-sm text-gray-500">Market Cap: {formatLargeNumber(crypto.market_cap)}</p>
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
          <Button 
            variant="outline" 
            className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white font-medium"
            asChild
          >
            <Link to="/markets">View All Markets</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
