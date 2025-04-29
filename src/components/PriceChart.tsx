
import React, { useEffect, useState } from 'react';
import { ChartContainer } from "@/components/ui/chart";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  TooltipProps
} from 'recharts';
import { Card } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface PriceData {
  timestamp: string;
  price: number;
}

interface PriceChartProps {
  data: PriceData[];
  name: string;
  symbol: string;
  period?: string;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: value < 1 ? 4 : 2,
    maximumFractionDigits: value < 1 ? 4 : 2,
  }).format(value);
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <Card className="bg-white border shadow-md p-3 text-sm">
        <p className="text-gray-600">{label}</p>
        <p className="font-bold text-tykoo-blue">{formatCurrency(payload[0].value || 0)}</p>
      </Card>
    );
  }
  return null;
};

const PriceChart: React.FC<PriceChartProps> = ({ data: initialData, name, symbol, period = '1' }) => {
  const [data, setData] = useState<PriceData[]>(initialData);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const { toast } = useToast();
  
  const getColor = () => {
    switch(symbol.toLowerCase()) {
      case 'btc': return '#f7931a';
      case 'eth': return '#627eea';
      case 'usdc': return '#2775ca';
      default: return '#0891b2';
    }
  };

  const chartColor = getColor();
  
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
      
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${period}`);
      
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
  
  return (
    <div className="w-full h-[300px]">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm">
          <button 
            onClick={() => fetchLatestPrice()} 
            className="text-tykoo-blue hover:underline text-xs flex items-center"
            disabled={isUpdating}
          >
            Refresh data
          </button>
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <RefreshCw className={`h-3 w-3 mr-1 ${isUpdating ? 'animate-spin' : ''}`} />
          <span>
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
        </div>
      </div>
      <ChartContainer
        config={{
          price: {
            theme: { light: chartColor, dark: chartColor },
          },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id={`color${symbol}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={chartColor} stopOpacity={0.3} />
                <stop offset="100%" stopColor={chartColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
            <XAxis 
              dataKey="timestamp" 
              tick={{ fontSize: 12 }}
              tickFormatter={formatDateByPeriod}
              stroke="#94a3b8"
              // Hide the domain line to prevent overlapping with table rows
              axisLine={false}
              // Remove padding to prevent overflow outside chart area
              padding={{ left: 10, right: 10 }}
              // Limit the number of ticks to prevent overcrowding
              tickCount={5}
            />
            <YAxis 
              domain={['auto', 'auto']}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
                return `$${value}`;
              }}
              stroke="#94a3b8"
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke={chartColor} 
              strokeWidth={2}
              fill={`url(#color${symbol})`}
              activeDot={{ r: 6 }} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default PriceChart;
