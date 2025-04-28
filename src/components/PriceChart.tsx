
import React from 'react';
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

const PriceChart: React.FC<PriceChartProps> = ({ data, name, symbol }) => {
  const getColor = () => {
    switch(symbol.toLowerCase()) {
      case 'btc': return '#f7931a';
      case 'eth': return '#627eea';
      case 'usdc': return '#2775ca';
      default: return '#0891b2';
    }
  };

  const chartColor = getColor();
  
  return (
    <div className="w-full h-[300px]">
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
                return `${date.getDate()}/${date.getMonth() + 1}`;
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
