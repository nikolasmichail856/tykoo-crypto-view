
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

// Helper function to generate mock price data when API fails
const generateMockPriceData = (symbol: string, period: string): PriceData[] => {
  const numDays = Number(period);
  const dataPoints = numDays <= 1 ? 24 : numDays * 4; // More granular data for shorter periods
  const result: PriceData[] = [];
  
  // Base price based on symbol
  let basePrice = 100;
  switch(symbol.toLowerCase()) {
    case 'btc': basePrice = 40000; break;
    case 'eth': basePrice = 2500; break;
    case 'usdc': basePrice = 1; break;
    default: basePrice = 1000;
  }
  
  const now = new Date();
  const msPerPoint = (numDays * 24 * 60 * 60 * 1000) / dataPoints;
  
  for (let i = 0; i < dataPoints; i++) {
    // Generate timestamp for this data point
    const pointTime = new Date(now.getTime() - (msPerPoint * (dataPoints - i)));
    
    // Add some random variation to price
    const randomFactor = 0.98 + (Math.random() * 0.04); // ±2% variation
    const price = basePrice * randomFactor;
    
    result.push({
      timestamp: pointTime.toISOString(),
      price: price
    });
  }
  
  return result;
};

export const useCryptoPrice = ({
  symbol,
  coinName,
  period,
  initialData,
}: UseCryptoPriceProps): UseCryptoPriceReturn => {
  // If we have initialData, use it; otherwise start with empty array
  const [data, setData] = useState<PriceData[]>(
    initialData && initialData.length > 0 ? initialData : []
  );
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
        
        console.log(`Fetched ${formattedData.length} price points for ${symbol}`);
        setData(formattedData);
        setLastUpdated(new Date());
      } else {
        throw new Error('No price data received from API');
      }
    } catch (error) {
      console.error('Error fetching price data:', error);
      
      // Generate mock data as fallback when API fails
      console.log('Generating mock price data for', symbol);
      const mockData = generateMockPriceData(symbol, period);
      setData(mockData);
      setLastUpdated(new Date());
      
      toast({
        title: "Using generated data",
        description: "Couldn't connect to price API",
        variant: "default"
      });
    } finally {
      setIsUpdating(false);
    }
  };

  // Fetch data immediately on component mount and when period changes
  useEffect(() => {
    if (!data.length) {
      console.log(`Initial fetch for ${symbol} with period ${period}`);
      fetchLatestPrice();
    }
    
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
