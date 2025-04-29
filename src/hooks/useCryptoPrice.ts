
import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { PriceData } from '@/types/chart';

interface UseCryptoPriceProps {
  symbol: string;
  coinName: string;
  period: string;
  initialData: PriceData[];
}

interface UseCryptoPriceReturn {
  data: PriceData[];
  isUpdating: boolean;
  lastUpdated: Date;
  refreshData: () => Promise<void>;
  formatDateByPeriod: (timestamp: string) => string;
}

export const useCryptoPrice = ({
  symbol,
  coinName,
  period,
  initialData,
}: UseCryptoPriceProps): UseCryptoPriceReturn => {
  const [data, setData] = useState<PriceData[]>(initialData);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const getCoinGeckoId = () => {
    switch(symbol.toLowerCase()) {
      case 'btc': return 'bitcoin';
      case 'eth': return 'ethereum';
      case 'usdc': return 'usd-coin';
      default: return symbol.toLowerCase();
    }
  };
  
  const formatDateByPeriod = (timestamp: string) => {
    const date = new Date(timestamp);
    const numDays = Number(period);
    
    if (numDays <= 1) {
      // For 24h, show hour:minute
      return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
    } else if (numDays <= 7) {
      // For 7d, show day and hour
      return `${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}:00`;
    } else {
      // For 30d and 1y, show month and day
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
  };
  
  const fetchLatestPrice = async () => {
    try {
      setIsUpdating(true);
      const coinId = getCoinGeckoId();
      
      // Determine interval based on period
      let interval = 'hourly';
      if (Number(period) <= 1) {
        interval = 'hourly'; // For 24h
      } else if (Number(period) <= 7) {
        interval = 'hourly'; // For 7d
      } else if (Number(period) <= 30) {
        interval = 'daily'; // For 30d
      } else {
        interval = 'daily'; // For 1y
      }
      
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=eur&days=${period}`);
      
      if (!response.ok) {
        throw new Error('API rate limit reached or network error');
      }
      
      const result = await response.json();
      
      if (result && result.prices && result.prices.length > 0) {
        // Limit the number of data points to avoid overcrowding the chart
        const maxDataPoints = 30;
        const step = Math.max(1, Math.floor(result.prices.length / maxDataPoints));
        
        // CoinGecko returns prices as [timestamp, price] arrays
        const formattedData = result.prices
          .filter((_: any, index: number) => index % step === 0) // Take every n-th element
          .map((item: [number, number]) => ({
            timestamp: new Date(item[0]).toISOString(),
            price: item[1]
          }));
        
        setData(formattedData);
        setLastUpdated(new Date());
      }
    } catch (error) {
      console.error('Error fetching price data:', error);
      toast({
        title: "Couldn't update price data",
        description: "We'll try again soon",
        variant: "destructive"
      });
    } finally {
      setIsUpdating(false);
    }
  };

  // Fetch data when period changes
  useEffect(() => {
    fetchLatestPrice();
    
    // Set up interval for real-time updates (every 60 seconds to avoid API rate limits)
    const interval = setInterval(fetchLatestPrice, 60000);
    
    return () => clearInterval(interval);
  }, [symbol, period]); // Re-fetch when symbol or period changes

  return {
    data,
    isUpdating,
    lastUpdated,
    refreshData: fetchLatestPrice,
    formatDateByPeriod
  };
};
