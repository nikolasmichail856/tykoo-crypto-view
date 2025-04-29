
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

interface PriceData {
  timestamp: string;
  price: number;
}

interface PriceChartProps {
  data: PriceData[];
  name: string;
  symbol: string;
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

const PriceChart: React.FC<PriceChartProps> = ({ data: initialData, name, symbol }) => {
  const [data, setData] = useState<PriceData[]>(initialData);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  
  const getColor = () => {
    switch(symbol.toLowerCase()) {
      case 'btc': return '#f7931a';
      case 'eth': return '#627eea';
      case 'usdc': return '#2775ca';
      default: return '#0891b2';
    }
  };

  const chartColor = getColor();
  
  useEffect(() => {
    // Update the chart data every 10 seconds to simulate real-time updates
    const interval = setInterval(() => {
      setIsUpdating(true);
      
      // Get the latest price point
      const lastPrice = data[data.length - 1].price;
      
      // Create a small random price movement (between -2% and +2%)
      const priceChange = lastPrice * (Math.random() * 0.04 - 0.02);
      const newPrice = lastPrice + priceChange;
      
      // Create a new timestamp
      const now = new Date();
      
      // Add new data point and remove the oldest if more than 30 points
      const newData = [...data, {
        timestamp: now.toISOString(),
        price: newPrice
      }];
      
      if (newData.length > 30) {
        newData.shift();
      }
      
      setData(newData);
      setLastUpdated(now);
      setIsUpdating(false);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [data]);
  
  return (
    <div className="w-full h-[300px]">
      <div className="flex justify-between items-center mb-2">
        <div></div>
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
              tickFormatter={(value) => {
                const date = new Date(value);
                return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
              }}
              stroke="#94a3b8"
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
