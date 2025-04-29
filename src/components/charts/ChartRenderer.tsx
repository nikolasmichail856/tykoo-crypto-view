
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
import { formatCurrency } from '@/utils/formatters';
import { PriceData } from '@/types/chart';

interface ChartRendererProps {
  data: PriceData[];
  symbol: string;
  period: string;
  formatDateByPeriod: (timestamp: string) => string;
}

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

const ChartRenderer: React.FC<ChartRendererProps> = ({ 
  data, 
  symbol, 
  period,
  formatDateByPeriod
}) => {
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
            axisLine={false}
            padding={{ left: 10, right: 10 }}
            tickCount={5}
            height={30}
            minTickGap={30}
          />
          <YAxis 
            domain={['auto', 'auto']}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => {
              if (value >= 1000) return `€${(value / 1000).toFixed(1)}K`;
              return `€${value}`;
            }}
            stroke="#94a3b8"
            width={50}
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
  );
};

export default ChartRenderer;
